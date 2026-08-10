import pfp from '../assets/pfp.png'
function About() {
    return (
        <div className="flex flex-col w-[60%] items-center px-[100px] py-[60px] gap-[60px]">
            <img className="h-[300px] w-[400px] object-cover" src={pfp}/>
            <div>
                <p>I'm a 3rd year CS student at Emory University interested in HCI, UI/UX design, and software development.</p>
                <p>In 2025, I conducted research in computer vision and artifical intelligence in robotics at Mississippi State University.</p>
                <p>Currently, I work in the Embodied Interaction Lab (EMBI Lab) under Dr. Kristin Williams studying craft-based user interfaces and sustainable HCI.</p>
            </div>
        </div>
    )
}

export default About