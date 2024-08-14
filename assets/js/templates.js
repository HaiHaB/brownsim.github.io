class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
			// @media (min-width: 1200px) {
				.container-center {
					max-width: 1200px;
				}
			// }

			// @media (min-width: 950px) {
				.menu-container {
					gap: 64px;
					flex-direction: row;
				}
			// }

			.logo {
				display: flex;
				justify-content: center;
				align-items: center;
				min-width: 200px;
				width: 100%;
			}

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


	<div class="menu-bar">
		<div class="container-center">
			<div class="menu-container">
				<a class="logo" href="home.html" title="BrownSim logo">
					<img src="assets/img/logo.svg" alt="BrownSim logo"/>
				</a>
				<div class="menu">
					<div class="menu-item">
						<a href="procue.html" class="menu-link">ProCue</a>
					</div>
					<div class="menu-item">
						<a href="leadership.html" class="menu-link">Leadership &amp; Philosophy</a>
					</div>
					<div class="menu-item">
						<a href="services.html" class="menu-link">Capabilities &amp; Services</a>
					</div>
					<div class="menu-item active">
						<a href="careers.html" class="menu-link">Careers</a>
					</div>
				</div>
			</div>
		</div>
	</div>
    `;
  }
}

customElements.define('header-component', Header);



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

		<footer class="footer">
			<div class="container-center">
				<div class="row frame-27">
					<div class="col-md-6 frame-28">
						<div class="text-small-bold">Keep in touch</div>
						<div class="row">
							<div class="col-md-6 footer-space">
								<img class="img-2" src="assets/img/linkedin.svg" alt=""/>
								<div class="social">in/craigroberbrown</div>
							</div>
							<div class="col-md-6 footer-space">
								<img class="img-2" src="assets/img/mail.png" alt=""/>
								<a href="mailto:craig.brown@brownsim.io" class="social">craig.brown@brownsim.io</a>
							</div>
						</div>
					</div>
					<div class="col-md-6 frame-29">
						<div class="text-small">Privacy Policy</div>
						<img class="line" src="assets/img/vert-line.svg" alt=""/>
						<div class="text-small">Cookie Policy</div>
					</div>
				</div>
				<p class="text-small">
					BrownSim Ltd, Company number 14540342, Lytchett House, Freeland Park, Unit 13 Wareham Road,
					Lytchett Matravers, Poole, Dorset, United Kingdom, BH16 6FA
				</p>
			</div>

		</footer>
    `;
  }
}

customElements.define('footer-component', Footer);
