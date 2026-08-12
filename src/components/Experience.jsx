function Experience(){
    const experiences = [
        {
            "title": "PROJECT Emory",
            "image": '',
            "description": "insert text"
        },
        {
            "title": "Emory Hacks",
            "image": '/icons/temp_logo.png',
            "description": "insert text"
        },
        {
            "title": "HCI Research",
            "image": '/icons/goubian-reader.png',
            "description": "insert text"
        },
        {
            "title": "AI Robotics Research",
            "image": '',
            "description": "insert text"
        }

    ]

    return (
        <div id="experience" className="flex flex-col w-[60%] gap-15 items-center min-h-screen px-[100px] py-[60px] justify-center snap-start">
            {experiences && experiences.map((e, index) => <Block {...e}/>)}
        </div>
    )
}

function Block(event, i) {
    console.log(i)
    return (
        <div className="flex gap-[60px] w-full">
            <img alt={event.title} src={event.image} className="size-40"></img>
            <div>
                <p>{event.title}</p>
                <p>{event.description}</p>
            </div>
        </div>
    )
}

export default Experience