class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        position: relative;
        align-self: stretch;
        width: 100%;
        flex: 0 0 auto;
        background-color: #171617;
        padding: 48px 0;
        }

        @media (min-width: 1200px) {
            .container-center {
                max-width: 1200px;
            }
        }

        .home .frame-27 {
        display: flex;
        align-items: center;
        gap: 24px;
        position: relative;
        align-self: stretch;
        width: 100%;
        flex: 0 0 auto;
        margin-bottom: 16px;
        }

        .home .frame-28 {
        display: flex;
        align-items: start;
        gap: 24px;
        position: relative;
        flex: 1;
        }

        .home .text-small-bold {
        width: fit-content;
        color: #bdb7bd;
        white-space: nowrap;
        font-family: var(--paragraph-small-bold-font-family), serif;
        font-weight: var(--paragraph-small-bold-font-weight);
        font-size: var(--paragraph-small-bold-font-size);
        font-style: var(--paragraph-small-bold-font-style);
        letter-spacing: var(--paragraph-small-bold-letter-spacing);
        line-height: var(--paragraph-small-bold-line-height);
        }

        .footer-space {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        position: relative;
        flex: 0 0 auto;
        }

        .img-2 {
        position: relative;
        width: 24px;
        height: 24px;
        }
        .social {
        position: relative;
        width: fit-content;
        color: #bdb7bd;
        white-space: nowrap;
        font-family: var(--paragraph-small-regular-font-family), serif;
        font-weight: var(--paragraph-small-regular-font-weight);
        font-style: var(--paragraph-medium-regular-font-style);
        font-size: var(--paragraph-small-regular-font-size);
        line-height: var(--paragraph-small-regular-line-height);
        letter-spacing: var(--paragraph-small-regular-letter-spacing);
        }

        .home .frame-29 {
        display: inline-flex;
        align-items: center;
        gap: 24px;
        position: relative;
        flex: 0 0 auto;
        }

        .text-small {
        color: #bdb7bd;
        align-self: stretch;
        font-family: var(--paragraph-small-regular-font-family), serif;
        font-weight: var(--paragraph-small-regular-font-weight);
        font-size: var(--paragraph-small-regular-font-size);
        letter-spacing: var(--paragraph-small-regular-letter-spacing);
        line-height: var(--paragraph-small-regular-line-height);
        font-style: var(--paragraph-small-regular-font-style);
        }

        .home .line {
        position: relative;
        align-self: stretch;
        width: 1px;
        object-fit: cover;
        }

      </style>

    <div class="container-fluid">
        <div class="row">
            <div class="p-0 home home-page">
                <footer class="footer">
                    <div class="container-center">
                        <div class="row frame-27">
                            <div class="col-md-6 frame-28">
                                <div class="text-small-bold">Keep in touch</div>
                                <div class="row">
                                    <div class="col-md-6 footer-space">
                                        <img class="img-2" src="assets/img/linkedin.svg" alt="linkedin icon"/>
                                        <div class="social"><a href="https://www.linkedin.com/company/brownsim/">company/brownsim/</a></div>
                                    </div>
                                    <div class="col-md-6 footer-space">
                                        <img class="img-2" src="assets/img/mail.png" alt="email icon"/>
                                        <a href="mailto:craig.brown@brownsim.io" class="social">craig.brown@brownsim.io</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 frame-29">
                                <div class="text-small"><a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=79c27c29-6203-4535-93f6-12fae24f3347">Privacy Policy</a></div>
                                <img class="line" src="assets/img/vertical-line.svg" alt="vertical line"/>
                                <div class="text-small"><a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=33799b21-62d2-4d4c-94d8-2627fb48e5e3">Cookie Policy</a></div>
                                <img class="line" src="assets/img/vertical-line.svg" alt="vertical line"/>
                                <div class="text-small">Powered by BrownSim Ltd</div>
                            </div>
                        </div>
                        <p class="text-small">
                            BrownSim Ltd, Company number 14540342, Suite 126 Westlink House, 981 Great West Road, London, United Kingdom, TW8 9DN
                        </p>
                    </div>

                </footer>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define("footer-component", Footer);

class MobileHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .mobile-logo {
        position: relative;
        height: 30px;
        }

        /* ======== Menu hamburger =========*/
        .nav-container .hamburger-lines {
        height: 18px;
        width: 24px;
        margin-top: 6px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        }

        .nav-container .hamburger-lines .line {
        display: block;
        height: 2px;
        width: 100%;
        background: #ffd053;
        }

        .nav-container .hamburger-lines .line1 {
        transform-origin: 0% 0%;
        transition: transform 0.4s ease-in-out;
        }

        .nav-container .hamburger-lines .line2 {
        transition: transform 0.2s ease-in-out;
        }

        .nav-container .hamburger-lines .line3 {
        transform-origin: 0% 100%;
        transition: transform 0.4s ease-in-out;
        }

        .nav-container.active .hamburger-lines .line1 {
        transform: rotate(45deg);
        }

        .nav-container.active .hamburger-lines .line2 {
        transform: scaleY(0);
        }

        .nav-container.active .hamburger-lines .line3 {
        transform: rotate(-45deg);
        }


        .menu-dropdown-content {
        list-style: none;
        padding: 0;
        margin: 0;
        position: absolute;
        left: 0;
        top: 49px;
        width: 100%;
        visibility: hidden;
        overflow: hidden;
        }

        .menu-dropdown-content li {
        background: #2f3238;
        position: relative;
        left: 100%;
        transition: 0.5s;
        transition-delay: calc(60ms * var(--menu-delay));
        z-index: 99;
        }

        .menu-dropdown-content.menu-open li {
        left: 0;
        }

        .menu-dropdown-content.menu-open {
        visibility: visible;
        }

        .menu-arrow.arrow-rotate {
        transform: rotate(180deg);
        }

        .menu-dropdown-content li:hover {
        background: #1d1f24;
        }

    </style>


    <div class="container-fluid mobile-menu">
    <div class="row justify-content-between">
        <div class="col-8">
            <a class="mobile-logo" href="index" title="BrownSim logo">
                <img src="assets/img/logo.svg" alt="BrownSim logo"/>
            </a>
        </div>



        <div class="col-auto nav-container">
            <span class="hamburger-lines menu-dropdown-btn"
                  aria-label="menu button"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-controls="dropdown-menu">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </span>
        </div>
    </div>

    <ul class="menu-dropdown-content">
        <li style="--menu-delay: 1;"><a href="procue">ProCue</a></li>
        <li style="--menu-delay: 3;"><a href="services">Services</a></li>
        <li style="--menu-delay: 4;"><a href="careers">Careers</a></li>
        <li style="--menu-delay: 4;"><a href="resources">Resources</a></li>
        <li style="--menu-delay: 4;"><a href="procue_download">Downloads</a></li>
    </ul>
</div>
    `;
  }
}

customElements.define("mobile-header-component", MobileHeader);

/// Note: The header component only work in index page because there is no page highlight required

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_active_element
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
            .menu {
                display: inline-flex;
                justify-content: flex-start;
                flex: 1;
            }

            .menu-item {
                display: inline-flex;
                height: 60px;
                padding: 8px 24px;
                flex: 0 0 auto;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: relative;
            }

            .menu-link {
                position: relative;
                width: fit-content;
                text-align: center;
                white-space: nowrap;
                color: #bdb7bd;
                font-family: var(--paragraph-medium-bold-font-family), serif;
                font-weight: var(--paragraph-medium-bold-font-weight);
                font-size: var(--paragraph-medium-bold-font-size);
                letter-spacing: var(--paragraph-medium-bold-letter-spacing);
                line-height: var(--paragraph-medium-bold-line-height);
                font-style: var(--paragraph-medium-bold-font-style);
                text-decoration: none;
            }
            .menu-item.active {
            border-bottom: 2px solid #ffd053;
            padding-bottom: 6px;
            }

            .menu-item.active .menu-link {
            color: #ffd053;
            }
    </style>


    <div class="menu" id="myMenu">
        <div class="menu-item">
            <a href="procue" class="menu-link">ProCue</a>
        </div>
        <div class="menu-item">
            <a href="services" class="menu-link">Services</a>
        </div>
        <div class="menu-item">
            <a href="careers" class="menu-link">Careers</a>
        </div>
        <div class="menu-item">
            <a href="resources" class="menu-link">Resources</a>
        </div>
        <div class="menu-item">
            <a href="procue_download" class="menu-link">Downloads</a>
        </div>
    </div>

    <script>
        // Add active class to the current button (highlight it)
        var header = document.getElementById("myMenu");
        var items = header.getElementsByClassName("menu-item");
        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    </script>
    `;
  }
}

customElements.define("header-component", Header);
