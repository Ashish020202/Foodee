// import logoImg from '/assets/logo.jpg';

export default function Navbar(){
    return (
        <nav id='main-header'>
            <div id="title">
                <img src='logo.jpg' alt="" />
                <h1>Foodeee</h1>
            </div>
            <div>
                <button>Cart (0)</button>
            </div>
        </nav>
    )
}