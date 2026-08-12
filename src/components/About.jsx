import pfp from '../assets/pfp.png'
function About() {
    return (
        <div id="about" className="flex flex-col w-[60%] items-center px-[100px] py-[60px] gap-[60px] snap-center">
            <img className="h-[300px] w-[400px] object-cover" src={pfp}/>
            <div className='flex flex-col gap-4'>
                <p>I'm a 4th-year Computer Science undergraduate at Emory University, focused on HCI, UI/UX design, and software development.</p>
                <p>I've spent much of my college career building and leading CS organizations, which sparked my interest in product management and product design roles.</p>
                <p>Currently, I'm a researcher in the Embodied Interaction Lab under Dr. Kristin Williams, where I study craft-based and sustainable HCI through the development of a web application.</p>
            </div>
        </div>
    )
}

export default About