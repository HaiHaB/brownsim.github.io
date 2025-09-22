class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .logo {
            height: 30px;
            vertical-align: middle;
        }

        .nav-bar {
            display: flex;
            flex-direction: row;
            align-items: center;
            vertical-align: center;
            justify-content: space-between;
            height: 60px;
        }

        .normal-nav {
            display: inline-flex;
            justify-content: flex-start;
            }

        .normal-nav .item {
            display: inline-flex;
            padding: 0px 24px;
            flex: 0 0 auto;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            text-decoration: none;
            }
        .normal-nav .item:hover {
            color: #ffd053;
            }

        .normal-nav .item.active {
            color: #ffd053;
        }

        .normal-nav .item.active .link {
            color: #ffd053;
            }



         .menu-dropdown {
            max-width: 13em;
            margin: 80px auto 0;
            position: relative;
            width: 100%;
        }


        /* ======== Menu hamburger =========*/
        .hamburger {
        }

        .hamburger .hamburger-lines {
            height: 18px;
            width: 24px;
            margin-top: 6px;
            z-index: 2;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
        }

        .hamburger .hamburger-lines .line {
            display: block;
            height: 2px;
            width: 100%;
            background: #ffd053;
        }

        .hamburger .hamburger-lines .line1 {
            transform-origin: 0% 0%;
            transition: transform 0.4s ease-in-out;
        }

        .hamburger .hamburger-lines .line2 {
            transition: transform 0.2s ease-in-out;
        }

        .hamburger .hamburger-lines .line3 {
            transform-origin: 0% 100%;
            transition: transform 0.4s ease-in-out;
        }

        .hamburger.active .hamburger-lines .line1 {
            transform: rotate(45deg);
        }

        .hamburger.active .hamburger-lines .line2 {
            transform: scaleY(0);
        }

        .hamburger.active .hamburger-lines .line3 {
            transform: rotate(-45deg);
        }

        .menu-arrow {
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 6px solid #fff;
            transition: transform ease-in-out 0.3s;
            }

        .hamburger-dropdown-content {
            list-style: none;
            padding: 0;
            margin: 0;
            position: absolute;
            left: 0px;
            top: 60px;
            width: 100%;
            overflow: hidden;
            visibility: hidden;
            disabled: none;
        }

        .hamburger-dropdown-content li {
            background: #2f3238;
            position: relative;
            left: 100%;
            transition: 0.5s;
            transition-delay: calc(60ms * var(--menu-delay));
            z-index: 99;
        }

        .hamburger-dropdown-content.open li {
            left: 0px;
        }

        .hamburger-dropdown-content.open {
            visibility: visible;
        }

        .hamburger-arrow.arrow-rotate {
            transform: rotate(180deg);
        }

        .hamburger-dropdown-content li:hover {
            background: #1d1f24;
        }

        .hamburger-dropdown-content li a {
            display: block;
            padding: 0.7em 0.5em;
            margin: 0.1em 0;
            text-decoration: none;
            font-family: var(--paragraph-medium-bold-font-family), serif;
            font-weight: var(--paragraph-medium-bold-font-weight);
            color: #bdb7bd;
            font-size: var(--paragraph-medium-bold-font-size);
            text-align: center;
            letter-spacing: var(--paragraph-medium-bold-letter-spacing);
            line-height: var(--paragraph-medium-bold-line-height);
            white-space: nowrap;
            font-style: var(--paragraph-medium-bold-font-style);
            }


        @media (min-width: 880px) {
            .hamburger {
                display: none;
            }

            .normal-nav {
                display: flex;
            }
        }

        @media (max-width: 879px) {
            .hamburger {
                display: flex;
            }

            .normal-nav {
                display: none;
            }
        }
    </style>

    <div class="container-fluid">

        <div class="container-center">

            <div class="nav-bar">

                <a class="logo logo-btn" href="index.html" title="BrownSim logo">
                    <img src="assets/img/logo.svg" alt="BrownSim logo"/>
                </a>

                <div class="hamburger menu-dropdown-btn"> 
                    <span class="hamburger-lines"
                        aria-label="menu button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-controls="dropdown-menu">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </span>
                </div>

                <div class="normal-nav" id="myMenu">
                    <a href="procue.html" class="item">ProCue</a>
                    <a href="services.html" class="item">Services</a>
                    <a href="careers.html" class="item">Careers</a>
                    <a href="resources.html" class="item">Resources</a>
                    <a href="procue_download.html" class="item">Downloads</a>
                </div>

            </div>
        </div>
    </div>

    <ul class="hamburger-dropdown-content">
        <li style="--menu-delay: 1;"><a href="procue">ProCue</a></li>
        <li style="--menu-delay: 3;"><a href="services">Services</a></li>
        <li style="--menu-delay: 4;"><a href="careers">Careers</a></li>
        <li style="--menu-delay: 4;"><a href="resources">Resources</a></li>
        <li style="--menu-delay: 4;"><a href="procue_download">Downloads</a></li>
    </ul>
    `;
  }
}

customElements.define("brownsim-header", Header);
