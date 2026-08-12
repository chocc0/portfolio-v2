function Skills() {
    const skills = {
        'Languages': [
            { name: 'HTML', logokey: 'html' },
            { name: 'CSS', logokey: 'css' },
            { name: 'JS', logokey: 'js' },
            { name: 'Java', logokey: 'java' },
            { name: 'C++', logokey: 'c++' },
            { name: 'Python', logokey: 'python' },
            { name: 'SQL', logokey: 'sql' },
        ],
        'Project Management & Tools': [
            { name: 'Jira', logokey: null},
            { name: 'Github Projects', logokey: null},
            { name: 'Git', logokey: null},
            { name: 'Slack', logokey: null},
            { name: 'Google Suite', logokey: null},
            { name: 'Microsoft Office', logokey: null}
        ],
        'Technical Skills': [
            { name: 'React.JS', logokey: 'react' },
            { name: 'D3', logokey: 'd3' },
            { name: 'PyTorch', logokey: 'pytorch' },
            { name: 'Google Cloud', logokey: 'gcp' },
            { name: 'Postgres', logokey: 'postgres' },
            { name: 'Databricks', logokey: null},
            { name: 'Alteryx', logokey: null},
        ],
        'Design': [
            { name: 'InkScape', logokey: 'inkscape' },
            { name: 'Clip Studio Paint', logokey: 'csp' },
            { name: 'Figma', logokey: 'figma' },
            { name: 'Fusion 360', logokey: 'fusion' },
            { name: 'Canva', logokey: 'canva' }
        ]
    }

    return (
        <div id="skills" className="flex flex-col w-[60%] items-center min-h-screen px-[100px] py-[60px] justify-center snap-start">
            <div className="flex flex-col gap-3">
                <p>Languages</p>
                <div className="flex flex-wrap p-3 gap-x-3 gap-y-4 justify-start bg-neutral-bg1/40 rounded-sm">
                    {skills['Languages'].map((s) => SkillBlock(s))}
                </div>
                <p>Project Management & Tools</p>
                <div className="flex flex-wrap p-3 gap-x-3 gap-y-4 justify-start bg-neutral-bg1/40 rounded-sm">
                    {skills['Project Management & Tools'].map((s) => SkillBlock(s))}
                </div>
                <p>Technical Skills</p>
                <div className="flex flex-wrap p-3 gap-x-3 gap-y-4 justify-start bg-neutral-bg1/40 rounded-sm">
                    {skills['Technical Skills'].map((s) => SkillBlock(s))}
                </div>
                <p>Design</p>
                <div className="flex flex-wrap p-3 gap-x-3 gap-y-4 justify-start bg-neutral-bg1/40 rounded-sm">
                    {skills['Design'].map((s) => SkillBlock(s))}
                </div>
            </div>
        </div>
    )
}

function SkillBlock(s) {
    return (<div className="flex items-center gap-2 min-w-20 p-2 bg-neutral-bg1 rounded-sm">{s.logokey ? <img src={import.meta.env.BASE_URL + 'icons/' + s.logokey + '.svg'} alt={s.name} className="size-6 "/>: ''}<p>{s.name}</p></div>)
}

export default Skills;