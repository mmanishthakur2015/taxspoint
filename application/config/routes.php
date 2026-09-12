<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['default_controller'] = 'home';
$route['404_override'] = '';
$route['translate_uri_dashes'] = TRUE;

// Custom Clean Routes
$route['services'] = 'services/index';
$route['services/(:any)'] = 'services/detail/$1';
$route['calculators'] = 'calculators/index';
$route['ai-agents'] = 'agents/index';
$route['track'] = 'portal/index';
$route['admin'] = 'admin/index';
$route['api/(:any)'] = 'api/$1';
