import { useEffect, useRef } from "react";
import * as THREE from "three";

const MAX_BLOBS = 12;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  varying vec2 vUv;

  uniform vec2 u_resolution;
  uniform int u_activeCount;
  uniform vec4 u_blobs[${MAX_BLOBS}];   // x, y, radius, opacity
  uniform vec3 u_blobColors[${MAX_BLOBS}];
  uniform vec3 u_bgColor;

  void main() {
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
    vec2 p = (vUv - 0.5) * aspect;

    vec3 color = u_bgColor;

    for (int i = 0; i < ${MAX_BLOBS}; i++) {
      if (i >= u_activeCount) break;

      vec4 blob = u_blobs[i];
      vec2 blobPos = (blob.xy - 0.5) * aspect;
      float dist = length(p - blobPos);

      float shape = smoothstep(blob.z, blob.z * 0.3, dist);
      float alpha = shape * blob.w;

      color = mix(color, u_blobColors[i], alpha);
    }

    gl_FragColor = vec4(color, 1.0);
  }
`;

class Blob {
  constructor(palette) {
    this.reset(palette);
  }

  reset(palette) {
    this.x = Math.random();
    this.y = Math.random();
    this.baseRadius = Math.random() * 0.25 + 0.15;
    this.color = palette[Math.floor(Math.random() * palette.length)];

    this.driftX = (Math.random() - 0.5) * 0.04;
    this.driftY = (Math.random() - 0.5) * 0.05;

    this.fadeInTime = Math.random() * 2 + 2;
    this.holdTime = Math.random() * 3 + 2;
    this.fadeOutTime = Math.random() * 2 + 2;
    this.age = 0;
    this.totalLife = this.fadeInTime + this.holdTime + this.fadeOutTime;

    this.delay = Math.random() * 6;
  }

  update(dt) {
    this.age += dt;
    this.x += this.driftX * dt;
    this.y += this.driftY * dt;

    if (this.age > this.delay + this.totalLife) {
      return true; // signal: needs respawn
    }
    return false;
  }

  getOpacity() {
    const t = this.age - this.delay;
    if (t < 0) return 0;
    if (t < this.fadeInTime) {
      return t / this.fadeInTime;
    }
    if (t < this.fadeInTime + this.holdTime) {
      return 1;
    }
    const fadeT = t - this.fadeInTime - this.holdTime;
    return Math.max(0, 1 - fadeT / this.fadeOutTime);
  }

  getRadius() {
    const opacity = this.getOpacity();
    return this.baseRadius * (0.7 + 0.3 * opacity);
  }
}

export default function Background() {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    // setup for three.js
    const mount = mountRef.current;
    if (!mount) return;

    const palette = [
      new THREE.Color(0.749, 0.757, 1),
      new THREE.Color(1, 1, 0.67),
      new THREE.Color(1.0, 0.929, 0.918),
      new THREE.Color(0.886, 1, 0.643)
    ];

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // colored dots rendering
    const blobCount = 6;
    const blobs = Array.from({ length: blobCount }, () => new Blob(palette));

    const uniforms = {
      u_resolution: {
        value: new THREE.Vector2(mount.clientWidth, mount.clientHeight),
      },
      u_activeCount: { value: blobCount },
      u_blobs: {
        value: Array.from({ length: MAX_BLOBS }, () => new THREE.Vector4()),
      },
      u_blobColors: {
        value: Array.from({ length: MAX_BLOBS }, () => new THREE.Color()),
      },
      u_bgColor: { value: new THREE.Color(0.996, 1, 0.992) },
    };

    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const uvs = new Float32Array([0, 0, 2, 0, 0, 2]);
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 2));
    geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // listen to mousemovements to lightly nudge blobs
    const handleMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: 1.0 - (e.clientY - rect.top) / rect.height,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      uniforms.u_resolution.value.set(w, h);
    };
    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      const dt = clock.getDelta();
      const mouse = mouseRef.current;

      blobs.forEach((blob, i) => {
        const needsRespawn = blob.update(dt);
        if (needsRespawn) {
          blob.reset(palette);
        }

        const dx = mouse.x - blob.x;
        const dy = mouse.y - blob.y;
        blob.x += dx * 0.02 * dt;
        blob.y += dy * 0.02 * dt;

        const vec = uniforms.u_blobs.value[i];
        vec.set(blob.x, blob.y, blob.getRadius(), blob.getOpacity());
        uniforms.u_blobColors.value[i].copy(blob.color);
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: -1 }}
    />
  );
}