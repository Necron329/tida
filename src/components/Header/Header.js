import './Header.css';

function Header() {
    return (
        <header className="HeaderSiteNameContainer">
            <div className="TitleHolder">
            Welcome to the Film Renting Site
            </div>
            <nav>
                <a href="/Shop">shop</a>
                <a href="/Support">support</a>
                <a href="/Cart">cart</a>
            </nav>
        </header>
    )
}

export default Header;