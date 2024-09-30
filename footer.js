class footer_my extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

<footer class="footer is-mode bg-0 position-relative">
                <div class="footer-1">
                    <div class="container">
                        <div class="box-footer-top">
                            <div class="row align-items-center">
                                <div class="col-lg-4 col-md-12">
                                    <div class="logo-footer">
                                        <div class="parallax-item">
                                            <a href="index.php"><img src="assets/imgs/logo.png" style="width: 200px;" alt="INFOTS" /></a>
                                        </div>
                                        <h5 class="color-900 mt-35 mb-35 text-opacity">We are a digital agency that tackles all your online challenges.</h5>
                                        <div class="box-socials">
                                            <a class="icon-socials icon-instagram" href="#"></a><a class="icon-socials icon-facebook" href="#"></a><a class="icon-socials icon-dribbble" href="#"></a>
                                            <a class="icon-socials icon-linkedin" href="#"></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12 mt-60">
                                    <h5 class="color-900">Services</h5>
                                    <ul class="menu-footer">
                                        <li><a href="#">Project Software</a></li>
                                        <li><a href="#">Cloud Migration</a></li>
                                        <li><a href="#">Network Monitoring</a></li>
                                        <li><a href="#">Data Backup</a></li>
                                        <li><a href="#">Software Integration</a></li>
                                        <li><a href="#">Disaster Recovery</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-4 col-md-12 mt-60">
                                    <h5 class="color-900">Ressources</h5>
                                    <ul class="menu-footer">
                                        <li><a href="#">News & Events</a></li>
                                        <li><a href="#">Project management</a></li>
                                        <li><a href="#">Jobs & Careers</a></li>
                                        <li><a href="#">Marketing Solutions</a></li>
                                        <li><a href="#">Support center</a></li>
                                        <li><a href="#">Customers</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-2">
                    <div class="container">
                        <div class="footer-bottom">
                            <div class="row align-items-center">
                                <div class="col-lg-3 col-md-6 mb-30 text-center text-lg-start">
                                    <span class="font-lg color-900">
                                       Saidabad Hyderabad
                                    </span>
                                </div>
                                <div class="col-lg-5 col-md-6 mb-30 text-center text-lg-start">
                                    <span class="font-lg color-900"><a href="tel:6301706823" style="color:#fff">+91 6301706823</a></span><br />
                                    
                                </div>
                                <div class="col-lg-4 col-md-12 mb-30 text-center text-lg-start text-xl-end">
                                    <ul class="menu-bottom">
                                        <li><a href="#">Privacy policy</a></li>
                                        <li><a href="#">Terms of service</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img class="rotate-infinite snow-footer" src="assets/imgs/snow-footer.png" alt="INFOTS" />
            </footer>
            `;
    }
}
customElements.define('my-footer', footer_my);
