import logo  from "./../assets/img/header-logo.png";
function Header () {
    return (
        <header class="header">
            <section>
                <div class="header__logo">        
                    <img src={logo} alt="Logo" />
                </div>
                <div class="navbar">
                    <div class="header__navbar">
                        <div><a href="#Home">HOME</a></div>
                        <div><a href="#Project">PROJECT</a></div>
                        <div><a href="#Services">SERVICES</a></div>
                        <div><a href="#Aboutus">ABOUT</a></div>
                        <div><a href="#Blog">BLOG</a></div>
                        <div><a href="#Services">SHOP</a></div>
                        <div><a href="#Contacts">CONTACT</a></div>
                    </div>
                    <div class="header__sign-in-button">
                        Sign in
                    </div>
                </div>
            </section>   
        </header>
    );
}

export default Header;