function Experience(){
    const experiences = [
        {
            "title": "HCI Research",
            "image": '/icons/goubian-reader.png',
            "description": "Independently architected and developed a full-stack web application for an HCI research thesis on craft-based UI, building novel UI interaction patterns to aid crochet-learners, bridging the physical process of crocheting with formal pattern graph and written notations;Built all frontend interactions (React) and backend infrastructure (Node.js/Express/MongoDB);Designing and conducting user studies with crafters to evaluate how the interface supports learning and real-time feedback during the physical act of crocheting, informing iterative UI/UX decisions"
        },
        {
            "title": "Emory Hacks",
            "image": '/icons/temp_logo.png',
            "description": `Co-Found and Direct the primary computer science-centered hackathon at Emory University, leading a cross-functional team of 20+ members in marketing, operations, and technology/Develop a comprehensive, systematic road map for fundraising, social media marketing, and outreach with industry leaders in technology and business;Increase hackathon funding by 30\% by securing \$10k from various sponsors;Improve hackathon participant engagement by increasing registration rate and projected attendance by 200;Organize day-of operations across 36 hours to curate a smooth and effective hackathon by managing volunteers and communicating with participants, judges, speakers, mentors, and advisors};Project-managed a team to build an iOS app that powered day-of communications for 150+ hackathon attendees`
        },
        {
            "title": "PROJECT Emory",
            "image": '/icons/project-emory.png',
            "description": 'Led a 15+ member team across 3+ cross-functional projects spanning research and software development. Directly mentor and develop multi-track curriculum for CS students in SWE, PM, and product design positions on topics like Git, Jira, testing, and UI UX Design'
        },
        {
            "title": "AI Robotics Research",
            "image": '/icons/msu-logo.png',
            "description": "Selected for a 10-week REU program (5\% acceptance rate nationwide) under the mentorship of Dr. Jingdao Chen;Conducted rigorous research on segmentation models and vision-language navigation (VLN) for developing real-time, instance-aware Vision Language Maps;Evaluated Segment Anything Model (SAM), Grounded SAM, and the You Only Look Once (YOLO) models for speed, accuracy, and cybersecurity performance on the ConSLAM dataset and hand-compiled datasets using the GHOST Vision 60 Robot"
        }

    ]

    return (
        <div id="experience" className="flex flex-col w-[60%] sm:w-full gap-15 items-center h-auto px-[100px] py-[60px] justify-center snap-start">
            {experiences && experiences.map((e, index) => <Block {...e}/>)}
        </div>
    )
}

function Block(event) {
    const desc = event.description.split(";")
    return (
        <div className="flex gap-[60px] w-full">
            <img alt={event.title} src={`${import.meta.env.BASE_URL}`+ event.image} className="size-30 object-contain rounded-md"></img>
            <div>
                <p>{event.title}</p>
                <ul className="exp">
                   {desc.map((e) => <li>{e}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Experience