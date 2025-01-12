import './Header.css';

function Header() {
    return (
        <header className="HeaderSiteNameContainer">
            <div className="DivSiteName">
            Welcome to the Film Renting Site
            </div>
            <nav>
                <a>shop</a>
                <a>support</a>
                <a>cart</a>
            </nav>
        </header>
    )
}

export default Header;