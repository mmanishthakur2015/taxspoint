<?php
defined('BASEPATH') OR exit('No direct script access allowed');

define('CI_VERSION', '3.1.13');

require_once(BASEPATH.'core/Common.php');
require_once(BASEPATH.'core/Config.php');
require_once(BASEPATH.'core/Utf8.php');
require_once(BASEPATH.'core/URI.php');
require_once(BASEPATH.'core/Input.php');
require_once(BASEPATH.'core/Output.php');
require_once(BASEPATH.'core/Router.php');
require_once(BASEPATH.'core/Loader.php');
require_once(BASEPATH.'core/Controller.php');
require_once(BASEPATH.'core/Model.php');

$CFG =& load_class('Config', 'core');
$UNI =& load_class('Utf8', 'core');
$URI =& load_class('URI', 'core');
$RTR =& load_class('Router', 'core');
$OUT =& load_class('Output', 'core');

$class = $RTR->class;
$method = $RTR->method;
$params = $RTR->params;

$possible_controller_files = array(
	APPPATH.'controllers/'.$class.'.php',
	APPPATH.'controllers/'.ucfirst($class).'.php',
	APPPATH.'controllers/'.strtolower($class).'.php',
	APPPATH.'controllers/'.ucfirst(strtolower($class)).'.php'
);

$controller_file = NULL;
foreach ($possible_controller_files as $f) {
	if (file_exists($f)) {
		$controller_file = $f;
		break;
	}
}

if ($controller_file === NULL) {
	show_404("{$class}/{$method}");
}

require_once($controller_file);

if ( ! class_exists($class, FALSE)) {
	if (class_exists(ucfirst($class), FALSE)) {
		$class = ucfirst($class);
	} elseif (class_exists(strtolower($class), FALSE)) {
		$class = strtolower($class);
	} else {
		show_404("{$class}/{$method}");
	}
}

$CI = new $class();

if ( ! method_exists($CI, $method)) {
	show_404("{$class}/{$method}");
}

call_user_func_array(array(&$CI, $method), $params);

$OUT->_display();
