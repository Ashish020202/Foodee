// import logoImg from '/assets/logo.jpg';
import Button from "./UI/Button"

export default function Navbar(){
    return (
        <nav id='main-header'>
            <div id="title">
                <img src='logo.jpg' alt="" />
                <h1>Foodeee</h1>
            </div>
            <div>
                <Button textOnly>Cart (0)</Button>
            </div>
        </nav>
    )
}