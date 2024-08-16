<?php

Flight::map('is_current_url', static function ($route) {
    return Flight::router()->current()->matchUrl($route) ? 'active' : '';
});
