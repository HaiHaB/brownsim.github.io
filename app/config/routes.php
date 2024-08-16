<?php

use flight\Engine;
use flight\net\Router;

/**
 * @var Router $router
 * @var Engine $app
 */
$router->get('/', function () use ($app) {
    $app->render('_partial/head', [], 'head');
    $app->render('index', [], 'content');
    $app->render('layout', [
        'title' => 'BrownSim :: Home',
        'meta_desc' => 'Home page'
    ]);
});

$router->get('/procue', function () use ($app) {
    $app->render('_partial/head', [], 'head');
    $app->render('procue', [], 'content');
    $app->render('layout', ['title' => 'BrownSim :: ProCue', 'meta_desc' => 'ProCue']);
});

$router->get('/leadership', function () use ($app) {
    $app->render('leadership', [], 'content');
    $app->render('layout', [
        'title' => 'BrownSim :: Leadership & Philosophy',
        'meta_desc' => 'Home page'
    ]);
});

$router->get('/services', function () use ($app) {
    $app->render('services', [], 'content');
    $app->render('layout', [
        'title' => 'BrownSim :: Capabilities & Services',
        'meta_desc' => 'Home page'
    ]);
});

$router->get('/careers', function () use ($app) {
    $app->render('careers', [], 'content');
    $app->render('layout', [
        'title' => 'BrownSim :: Careers',
        'meta_desc' => 'Home page'
    ]);
});

$router->get('/trial', function () use ($app) {
    //$res = curl_exec('');
    //$app->json(['key' => 'abc']);
});