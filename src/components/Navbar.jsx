function Navbar() {
    return (
        <div className="flex flex-col mx-[100px] my-[80px] justify-between absolute pt-[120px] gap-[120px]">
            <div>
                <p className="h1">Mandy Sun</p>
                <p className="h3">Designer. Programmer. Artist.</p>
            </div>
            <div className="flex flex-col gap-3 justify-between items-start">
                <button className="nav">ABOUT</button>
                <button className="nav">EXPERIENCE</button>
                <button className="nav">SKILLS</button>
                <button className="nav">CONTACT</button>
            </div>
        </div>
    )
}

export default Navbar