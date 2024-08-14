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

		.container-center {
			max-width: 1200px;
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


class Careers extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
				<p><b>Top 3 reasons to join us?</b></p>
					<li>Exceptional professional growth opportunities in a tech-focused company, allowing you to enhance your skills at an accelerated pace.</li>
					<li>Flat structure, simple processes & transparency</li>
					<li>Fully remote working experience</li>

				</ul>

				<p>If you wish to discuss this role further, then please send us an email at <a href= "mailto: craig.brown@brownsim.io"> craig.brown@brownsim.io</a></p>
				</div>
    `;
  }
}

customElements.define('careers-component', Careers);