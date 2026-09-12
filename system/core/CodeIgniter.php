<?php
defined('BASEPATH') OR exit('No direct script access allowed');

define('CI_VERSION', '3.1.13');

require_once(BASEPATH.'core/Common.php');

$CFG =& load_class('Config', 'core');
$UNI =& load_class('Utf8', 'core');
$URI =& load_class('URI', 'core');
$RTR =& load_class('Router', 'core');
$OUT =& load_class('Output', 'core');

$class = $RTR->class;
$method = $RTR->method;
$params = $RTR->params;

$controller_file = APPPATH.'controllers/'.$class.'.php';

if ( ! file_exists($controller_file)) {
	// Try lowercase
	$controller_file = APPPATH.'controllers/'.strtolower($class).'.php';
	if ( ! file_exists($controller_file)) {
		show_404("{$class}/{$method}");
	}
}

require_once(BASEPATH.'core/Controller.php');
require_once(BASEPATH.'core/Model.php');
require_once($controller_file);

if ( ! class_exists($class, FALSE)) {
	show_404("{$class}/{$method}");
}

$CI = new $class();

if ( ! method_exists($CI, $method)) {
	show_404("{$class}/{$method}");
}

call_user_func_array(array(&$CI, $method), $params);

$OUT->_display();
