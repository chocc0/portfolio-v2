function Contact() {
    return (
        <div id="contact" className="flex flex-col w-[60%] items-center min-h-screen px-[100px] py-[60px] justify-center snap-center gap-5">
            <p>mandysun453@gmail.com</p>
            <div className="flex gap-5">
                <a href="https://github.com/chocc0"><img alt="github" className='size-10' src='icons/Github.svg'></img></a>
                <a href="https://www.linkedin.com/in/mandy-sun-28149224a/"><img title="Linkedin" alt="linkedin" className="size-10" src="icons/Linkedin.svg"></img></a>
                <a href="/Resume_Mandy Sun.pdf"><img title="Resume" alt="resume" className="size-10" src="icons/resume.svg"></img></a>
                <a href="https://mandysportfolio.carrd.co/"><img title="Art Portfolio" alt="art portfolio" className="size-10" src="icons/art-portfolio.svg"></img></a>
            </div>            
        </div>
    )
}

export default Contact