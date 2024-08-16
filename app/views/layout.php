<?php
/**
 * @var string $title
 * @var string $content
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $title ?></title>
    <meta name="description" content="BrownSim - ProCue">

    <link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="/assets/css/globals.css"/>
    <link rel="stylesheet" href="/assets/css/styleguide.css"/>
    <link rel="stylesheet" href="/assets/css/bootstrap-grid.min.css"/>
    <link rel="stylesheet" href="/assets/css/style.css"/>

    <script async src="https://unpkg.com/es-module-shims@1.8.0/dist/es-module-shims.js"></script>
    <script type="importmap">
        {
            "imports": {
                "three": "https://unpkg.com/three@0.166.0/build/three.module.js",
                "three/addons/": "https://unpkg.com/three@0.166.0/examples/jsm/"
            }
        }
    </script>
</head>
<body>

<div class="container-fluid mobile-menu">
    <div class="row justify-content-between">
        <div class="col-8">
            <a href="/" title="BrownSim logo">
                <img class="mobile-logo" src="/assets/img/logo.svg" alt="BrownSim logo"/>
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
        <li class="<?= Flight::is_current_url('/procue') ?>" style="--menu-delay: 1;"><a href="/procue">ProCue</a></li>
        <li class="<?= Flight::is_current_url('/leadership') ?>" style="--menu-delay: 2;"><a href="/leadership">Leadership &amp; Philosophy</a></li>
        <li class="<?= Flight::is_current_url('/services') ?>" style="--menu-delay: 3;"><a href="/services">Capabilities &amp; Services</a></li>
        <li class="<?= Flight::is_current_url('/careers') ?>" style="--menu-delay: 4;"><a href="/careers">Careers</a></li>
    </ul>
</div>

<div class="container-fluid">
    <div class="row">
        <div class="p-0 home home-page">
            <div class="menu-bar">
                <div class="container-center">
                    <div class="menu-container">
                        <a class="logo" href="/" title="BrownSim logo">
                            <img src="/assets/img/logo.svg" alt="BrownSim logo"/>
                        </a>
                        <div class="menu">
                            <div class="menu-item <?= Flight::is_current_url('/procue') ?>">
                                <a href="/procue" class="menu-link">ProCue</a>
                            </div>
                            <div class="menu-item <?= Flight::is_current_url('/leadership') ?>">
                                <a href="/leadership" class="menu-link">Leadership &amp; Philosophy</a>
                            </div>
                            <div class="menu-item <?= Flight::is_current_url('/services') ?>">
                                <a href="/services" class="menu-link">Capabilities &amp; Services</a>
                            </div>
                            <div class="menu-item <?= Flight::is_current_url('/careers') ?>">
                                <a href="/careers" class="menu-link">Careers</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?= $content ?>

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
                                    <img class="img-2" src="/assets/img/linkedin.svg" alt=""/>
                                    <a href="https://www.linkedin.com/company/brownsim" class="social">company/brownsim</a>
                                </div>
                                <div class="col-md-6 footer-space">
                                    <img class="img-2" src="/assets/img/mail.png" alt=""/>
                                    <a href="mailto:craig.brown@brownsim.io" class="social">craig.brown@brownsim.io</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 frame-29">
                            <div class="text-small"><a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=79c27c29-6203-4535-93f6-12fae24f3347">Privacy Policy</a></div>
                            <img class="line" src="/assets/img/vert-line.svg" alt=""/>
                            <div class="text-small"><a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=33799b21-62d2-4d4c-94d8-2627fb48e5e3">Cookie Policy</a></div>
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

<script type="module" src="/assets/js/3d.js"></script>
<script src="/assets/js/cookie.js"></script>
<script src="/assets/js/main.js?a<?= random_int(0, 100) ?>"></script>
</body>
</html>
