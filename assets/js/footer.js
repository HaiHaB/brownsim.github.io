class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
            .footerlogo {
                height: 60px;
            }

            .footer {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                position: relative;
                width: 100%;
                background-color: transparent;
            }

            .footer .linkgroup {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                gap: 100px;
                position: relative;
            }

            .footer .logogroup {
                display: flex;
                flex-direction: column;
                gap: 40px;
                vertical-align: middle;
            }

            .vertical-list {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }

            .footer-text {
                text-align: center;
                width: 100%;
                margin: 20px 0px;
                font-size: 14px;
                color: #666;
            }
        </style>

        <div class="container-fluid">
            <div class="container-center">
                <div class="footer">
                    <div class="linkgroup">
                        <div class="vertical-list">
                            <h3>Contact</h3>
                            <div class="col-md-6 footer-space">
                                <img class="img-2" src="assets/img/linkedin.svg" alt="LinkedIn icon" />
                                <div class="social">
                                    <a href="https://www.linkedin.com/company/brownsim/">Brownsim</a>
                                </div>
                            </div>
                            <div class="col-md-6 footer-space">
                                <img class="img-2" src="assets/img/mail.png" alt="Email icon" />
                                <a href="mailto:craig.brown@brownsim.io" class="social">craig.brown@brownsim.io</a>
                            </div>

                            <br/>

                            <p>Company Number 14540342</p>

                            <address>
                                Suite 126, Westlink House<br>
                                981 Great West Road<br>
                                London<br>
                                United Kingdom<br>
                                TW8 9DN
                            </address>
                        </div>

                        <div class="vertical-list">
                            <h3>Policies</h3>
                            <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=79c27c29-6203-4535-93f6-12fae24f3347">Privacy Policy</a>
                            <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=33799b21-62d2-4d4c-94d8-2627fb48e5e3">Cookie Policy</a>
                        </div>

                        <div class="vertical-list">
                            <h3>Navigation</h3>
                            <a href="procue.html">ProCue</a>
                            <a href="services.html">Services</a>
                            <a href="careers.html">Careers</a>
                            <a href="resources.html">Resources</a>
                            <a href="procue_download.html">Downloads</a>
                        </div>
                    </div>

                    <div class="logogroup">
                        <img class="footerlogo" src="assets/img/logo.svg" alt="BrownSim logo" />
                        <img class="footerlogo" src="assets/img/procue-logo.svg" alt="ProCue logo" />
                    </div>
                </div>

                <div class="footer-text">
                    &copy; 2025 Brownsim. All rights reserved.
                </div>
            </div>
        </div>
    `;
    // this.innerHTML = `
    //   <style>
    //     .footer {
    //     display: flex;
    //     flex-direction: column;
    //     align-items: flex-start;do
    //     gap: 16px;
    //     position: relative;
    //     align-self: stretch;
    //     width: 100%;
    //     flex: 0 0 auto;
    //     background-color: #171617;
    //     padding: 48px 0;
    //     }

    //     @media (min-width: 1200px) {
    //         .container-center {
    //             max-width: 1200px;
    //         }
    //     }

    //     .home .frame-27 {
    //     display: flex;
    //     align-items: center;
    //     gap: 24px;
    //     position: relative;
    //     align-self: stretch;
    //     width: 100%;
    //     flex: 0 0 auto;
    //     margin-bottom: 16px;
    //     }

    //     .home .frame-28 {
    //     display: flex;
    //     align-items: start;
    //     gap: 24px;
    //     position: relative;
    //     flex: 1;
    //     }

    //     .home .text-small-bold {
    //     width: fit-content;
    //     color: #bdb7bd;
    //     white-space: nowrap;
    //     font-family: var(--paragraph-small-bold-font-family), serif;
    //     font-weight: var(--paragraph-small-bold-font-weight);
    //     font-size: var(--paragraph-small-bold-font-size);
    //     font-style: var(--paragraph-small-bold-font-style);
    //     letter-spacing: var(--paragraph-small-bold-letter-spacing);
    //     line-height: var(--paragraph-small-bold-line-height);
    //     }

    //     .footer-space {
    //     display: inline-flex;
    //     align-items: center;
    //     gap: 8px;
    //     position: relative;
    //     flex: 0 0 auto;
    //     }

    //     .img-2 {
    //     position: relative;
    //     width: 24px;
    //     height: 24px;
    //     }
    //     .social {
    //     position: relative;
    //     width: fit-content;
    //     color: #bdb7bd;
    //     white-space: nowrap;
    //     font-family: var(--paragraph-small-regular-font-family), serif;
    //     font-weight: var(--paragraph-small-regular-font-weight);
    //     font-style: var(--paragraph-medium-regular-font-style);
    //     font-size: var(--paragraph-small-regular-font-size);
    //     line-height: var(--paragraph-small-regular-line-height);
    //     letter-spacing: var(--paragraph-small-regular-letter-spacing);
    //     }

    //     .home .frame-29 {
    //     display: inline-flex;
    //     align-items: center;
    //     gap: 24px;
    //     position: relative;
    //     flex: 0 0 auto;
    //     }

    //     .text-small {
    //     color: #bdb7bd;
    //     align-self: stretch;
    //     font-family: var(--paragraph-small-regular-font-family), serif;
    //     font-weight: var(--paragraph-small-regular-font-weight);
    //     font-size: var(--paragraph-small-regular-font-size);
    //     letter-spacing: var(--paragraph-small-regular-letter-spacing);
    //     line-height: var(--paragraph-small-regular-line-height);
    //     font-style: var(--paragraph-small-regular-font-style);
    //     }

    //     .home .line {
    //     position: relative;
    //     align-self: stretch;
    //     width: 1px;
    //     object-fit: cover;
    //     }

    //   </style>

    // <div class="container-fluid">
    //     <div class="row">
    //         <div class="p-0 home home-page">
    //             <footer class="footer">
    //                 <div class="container-center">
    //                     <div class="row frame-27">
    //                         <div class="col-md-6 frame-28">
    //                             <div class="text-small-bold">Keep in touch</div>
    //                             <div class="row">
    //                                 <div class="col-md-6 footer-space">
    //                                     <img class="img-2" src="assets/img/linkedin.svg" alt="linkedin icon"/>
    //                                     <div class="social"><a href="https://www.linkedin.com/company/brownsim/">company/brownsim/</a></div>
    //                                 </div>
    //                                 <div class="col-md-6 footer-space">
    //                                     <img class="img-2" src="assets/img/mail.png" alt="email icon"/>
    //                                     <a href="mailto:craig.brown@brownsim.io" class="social">craig.brown@brownsim.io</a>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div class="col-md-6 frame-29">
    //                             <div class="text-small"><a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=79c27c29-6203-4535-93f6-12fae24f3347">Privacy Policy</a></div>
    //                             <img class="line" src="assets/img/vertical-line.svg" alt="vertical line"/>
    //                             <div class="text-small"><a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=33799b21-62d2-4d4c-94d8-2627fb48e5e3">Cookie Policy</a></div>
    //                             <img class="line" src="assets/img/vertical-line.svg" alt="vertical line"/>
    //                             <div class="text-small">Powered by BrownSim Ltd</div>
    //                         </div>
    //                     </div>
    //                     <p class="text-small">
    //                         BrownSim Ltd, Company number 14540342, Suite 126 Westlink House, 981 Great West Road, London, United Kingdom, TW8 9DN
    //                     </p>
    //                 </div>

    //             </footer>
    //         </div>
    //     </div>
    // </div>
    // `;
  }
}

customElements.define("footer-component", Footer);