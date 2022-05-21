import logosvg from '../../svg/logo.svg'

const Header = () => {
    let dscLogo = "Logotipo do Blog"
    return(
        <>
            <header className="container flex-space-between">
                <div className="logo">
                    <img src={logosvg} alt={dscLogo}/>
                </div>
                <div className="search">
                    <input type="text" name="search" className="input-search" 
                    placeholder="Buscar artigos, podcasts, destaques..." />    
                </div>
                <ul className="menu flex">
                    <li><a href="#" className="nav-link">Categories</a></li>
                    <li><a href="#" className="nav-link">About</a></li>
                    <li><a href="#" className="nav-link">Contact</a></li>
                </ul>
            </header>
        </>
    )
}

export default Header;