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
			</div>
		</div>
	</div>
    `;
  }
}

customElements.define('footer-component', Footer);





/// Note: The following parts do not work yet!
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


class RequestTrial extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>

		.home .frame-16 {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 24px;
			margin-top: 48px;
		}

		.home .vertical-logo-2 {
			position: relative;
			width: 80px;
			height: 60px;
		}

		.home .text-wrapper {
			position: relative;
			align-self: stretch;
			color: #ffffff;
			margin: 0;
			font-family: var(--headline-h1-font-family), serif;
			font-weight: var(--headline-h1-font-weight);
			font-size: var(--headline-h1-font-size);
			font-style: var(--headline-h1-font-style);
			letter-spacing: var(--headline-h1-letter-spacing);
			line-height: var(--headline-h1-line-height);
		}

		@media (max-width: 767px) {
			.home .frame-16 .text-wrapper {
				margin: 0;
			}
		}

		.home .frame-3 {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 16px;
			padding: 16px;
			position: relative;
			align-self: stretch;
			width: 100%;
			flex: 0 0 auto;
			background-color: #2c3317;
			border-radius: 8px;
			border: 1px solid;
			border-color: #ffe08c;
			margin-bottom: 48px;
		}

		.home .frame-4 {
			display: flex;
			align-items: flex-start;
			gap: 4px;
			position: relative;
			align-self: stretch;
			width: 100%;
			flex: 0 0 auto;
		}

		.home .text-wrapper-2 {
			flex: 1;
			color: #f1cfb9;
			font-family: var(--paragraph-medium-bold-font-family), serif;
			font-weight: var(--paragraph-medium-bold-font-weight);
			font-size: var(--paragraph-medium-bold-font-size);
			font-style: var(--paragraph-medium-bold-font-style);
			letter-spacing: var(--paragraph-medium-bold-letter-spacing);
			line-height: var(--paragraph-medium-bold-line-height);
		}


		.home .text-wrapper-3 {
			position: relative;
			width: fit-content;
			color: #ffd053;
			text-align: right;
			text-decoration: underline;
			white-space: nowrap;
		}

		.btn-full {
			width: 100%;
		}

		.btn-inner {
			all: unset;
			box-sizing: border-box;
			position: relative;
			flex: 1;
			text-align: center;
			color: #2c3317;
			font-family: var(--paragraph-medium-bold-font-family), serif;
			font-weight: var(--paragraph-medium-bold-font-weight);
			font-style: var(--paragraph-medium-bold-font-style);
			font-size: var(--paragraph-medium-bold-font-size);
			letter-spacing: var(--paragraph-medium-bold-letter-spacing);
			line-height: var(--paragraph-medium-bold-line-height);
		}

		.text-robo {
			position: relative;
			align-self: stretch;
			font-family: "Roboto Mono", Helvetica, serif;
			font-weight: 400;
			color: #f1cfb9;
			font-size: 12px;
			text-align: center;
			letter-spacing: -0.03px;
			line-height: 18px;
		}

    </style>


	<div class="col-md-6 frame-16">
		<img class="vertical-logo-2" src="assets/img/procue-logo-vert.svg" alt=""/>
		<p class="text-wrapper">Hackable motion cueing for the 21st Century</p>
		<div class="frame-3">
			<div class="frame-4">
				<div class="text-wrapper-2">Version 1.63</div>
				<a href="#" class="text-wrapper-3">Release note</a>
			</div>
			<button class="btn btn-full"><span class="btn-inner">Request Trial</span></button>
			<p class="text-robo">By downloading, you agree to the <a
			href="https://www.termsfeed.com/live/e58a8d72-8d54-4363-8606-6d944a2aa70f">Procue EULA</a>.</p>
		</div>
	</div>
    `;
  }
}

customElements.define('requestTrial-component', RequestTrial);
