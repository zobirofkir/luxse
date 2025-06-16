<?php

/**
 * login and register and reset ..... routes
 */
require __DIR__ . '/auth-routes.php';

/**
 * Authenticated Routes Like Profile etc ...
 */
require __DIR__ . '/auth-user-routes.php';

/**
 * Guest Routes Like Home About etc ...
 */
require __DIR__ . '/guest-routes.php';