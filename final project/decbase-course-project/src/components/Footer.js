import logo  from "./../assets/img/header-logo.png";
export default function Footer () {
    return (
        <footer>
            <div class="footer-navigation">
                <div class="footer-logo">
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>
                    <div class="footer__slogan">
                        But i must explain to you all this mistaken idea of dencouncing pleasure.
                    </div>
                </div>
                <div class="footer-quick-links">
                    <div class="footer-quick-links-title">Quick Links</div>
                    <div>About Our Company</div>
                    <div>Services WE provide</div>
                    <div>Career & Opportunity</div>
                    <div>Privacy & policy</div>
                    <div>Contact US</div>
                </div>
                <div class="footer-company-links">
                    <div class="footer-company-links_title">Company</div>
                    <div>About Company</div>
                    <div>Our Testimonials</div>
                    <div>Latest News</div>
                    <div>Our misson</div>
                    <div>Get a free Quot</div>
                </div>
                <div class="footer-contacts">
                    <div class="footer-contacts_title">Contact us</div>
                    <div class="footer-contacts__adress">
                        <p>Sagrada Familia, Herba</p>
                        <p>Street Front USA</p>
                    </div>
                    <div class="footer-contacts__email">brandoxide@gmail.com</div>
                    <div class="footer-contacts__phone">002-568423591</div>
                </div>
                <div class="footer-follow">
                    <div class="footer-follow__title">Follow Us</div>
                    <div class="footer-follow__media">
                        <div class="facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-7 -2 24 24"><path fill="white" d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z"/></svg>
                        </div>
                        <div class="twi">                                                    
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/></svg>
                        </div>
                        <div class="inst">                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 2c2.717 0 3.056.01 4.122.06c1.065.05 1.79.217 2.428.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465c-1.066.047-1.405.06-4.122.06c-2.717 0-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153a4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0a1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6z"/></svg>
                        </div>
                        <div class="linkedin">                          
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/></svg>  
                        </div>
                    </div>
                </div>
            </div>
            <div class="copywriting">Copyright @ 2020 <span>Brandoxide</span>.all right reserved.</div>
        </footer>
    )
}