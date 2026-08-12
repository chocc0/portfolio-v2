function Navbar() {
    return (
        <div className="navbar flex flex-col mx-[100px] my-[80px] justify-between absolute pt-[120px] gap-[120px]">
            <div>
                <p className="h1">Mandy Sun</p>
                <p className="h3">Designer. Programmer. Artist.</p>
            </div>
            <div className="flex flex-col gap-3 justify-between items-start">
                <a className="nav" href="#about">ABOUT</a>
                <a className="nav" href="#experience">EXPERIENCE</a>
                <a className="nav" href="#skills">SKILLS</a>
                <a className="nav" href="#contact">CONTACT</a>
            </div>
        </div>
    )
}

export default Navbar