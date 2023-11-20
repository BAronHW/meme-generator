import trollface from "../images/Troll Face.png"

function Header(){
    return(
        <header className="header">
            <img src={trollface} alt="trollface" className="header--image"/>
            <h2 className="header--title">Header Comp</h2>
            <h4 className="header--project">React Course-Project 3</h4>
        </header>
        
    )
}

export default Header