class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<style type="text/css">
    @media (max-width: 1199.98px)
.header {
    padding: 9px 26px;
}
 @media only screen and (min-width: 1px) and (max-width: 520px){
    .mobile_view_logo{
        width: 140px !important;
    }
 }
</style>
<!-- <div class="page-loader">
            <div class="page-loader-logo hide-animation"><img alt="neuron" src="assets/imgs/logo.png" style="width:250px" /></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
 -->

        <div class="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
            <div class="mobile-logo">
                <div class="parallax-item">
                    <a href="index.php"><img alt="neuron" src="assets/imgs/logo.png" style="width:250px" /></a>
                </div>
            </div>
            <a class="btn-close hover-rotate"></a>
            <div class="mobile-header-wrapper-inner">
                <div class="mobile-header-content-area">
                    <div class="perfect-scroll">
                        <div class="mobile-menu-wrap mobile-header-border">
                            <nav class="mt-15">
                                <ul class="mobile-menu font-heading">
                                    <li><a class="active" href="index.php">HOME</a></li>
                                    <li >
                                        <a href="#">ABOUT US</a>
                                        
                                    </li>
                                    <li >
                                        <a href="#">SERVICES</a>
                                        
                                    </li>
                                    <li >
                                        <a href="#">SHOWCASE</a>
                                        
                                    </li>
                                    <li><a href="#">CONTACT US</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mobile-snow"><img class="rotate-infinite snow-footer" src="assets/imgs/template/icons/snow-footer.png" alt="neuron" /></div>
        </div>

        <header class="header sticky-bar">
                <div class="container-fluid">
                    <div class="main-header">
                        <div class="header-logo parallax-item">
                            <a class="d-flex cursor-scale small" href="index.php"><img alt="neuron" class="mobile_view_logo" src="assets/imgs/logo.png" style="width:250px" /></a>
                        </div>
                        <div class="header-menu">
                            <div class="header-nav">
                                <nav class="nav-main-menu d-none d-xl-block">
                                    <ul class="main-menu">
                                       <li><a class="active" href="index.php">HOME</a></li>
                                    <li >
                                        <a href="#">ABOUT US</a>
                                        
                                    </li>
                                    <li >
                                        <a href="#">SERVICES</a>
                                        
                                    </li>
                                    <li >
                                        <a href="#">SHOWCASE</a>
                                        
                                    </li>
                                    <li><a href="#">CONTACT US</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="header-account d-flex">
                          
                            <a class="menu-mobile" href="#">
                                <span class="item-menu"><span class="font-lg text-white">MENU</span><img class="hover-rotate" alt="neuron" src="assets/imgs/menu.png" /></span>
                            </a>
                        </div>
                    </div>
                </div>
                <span class="comet-horizontal"></span>
            </header>`;
    }
}
customElements.define('my-header', MyHeader);
