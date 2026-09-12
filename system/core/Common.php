<?php
defined('BASEPATH') OR exit('No direct script access allowed');

if ( ! function_exists('is_php')) {
	function is_php($version) {
		static $_is_php;
		$version = (string) $version;
		if ( ! isset($_is_php[$version])) {
			$_is_php[$version] = version_compare(PHP_VERSION, $version, '>=');
		}
		return $_is_php[$version];
	}
}

if ( ! function_exists('load_class')) {
	function &load_class($class, $directory = 'core', $param = NULL) {
		static $_classes = array();

		if (isset($_classes[$class])) {
			return $_classes[$class];
		}

		$name = FALSE;

		foreach (array(APPPATH, BASEPATH) as $path) {
			if (file_exists($path.$directory.'/'.$class.'.php')) {
				$name = 'CI_'.$class;
				if (class_exists($name, FALSE) === FALSE) {
					require_once($path.$directory.'/'.$class.'.php');
				}
				break;
			}
		}

		if ($name === FALSE) {
			if (file_exists(APPPATH.$directory.'/'.$class.'.php')) {
				$name = $class;
				if (class_exists($name, FALSE) === FALSE) {
					require_once(APPPATH.$directory.'/'.$class.'.php');
				}
			}
		}

		$_classes[$class] = isset($param) ? new $name($param) : new $name();
		return $_classes[$class];
	}
}

if ( ! function_exists('is_loaded')) {
	function &is_loaded($class = '') {
		static $_is_loaded = array();
		if ($class !== '') {
			$_is_loaded[strtolower($class)] = $class;
		}
		return $_is_loaded;
	}
}

if ( ! function_exists('get_config')) {
	function &get_config(Array $replace = array()) {
		static $config;
		if (empty($config)) {
			if (file_exists(APPPATH.'config/config.php')) {
				require(APPPATH.'config/config.php');
			}
		}
		return $config;
	}
}

if ( ! function_exists('config_item')) {
	function config_item($item) {
		static $_config;
		if (empty($_config)) {
			$_config =& get_config();
		}
		return isset($_config[$item]) ? $_config[$item] : NULL;
	}
}

if ( ! function_exists('base_url')) {
	function base_url($uri = '') {
		$base = config_item('base_url');
		if (empty($base)) {
			$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
			$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost';
			$script = isset($_SERVER['SCRIPT_NAME']) ? str_replace(basename($_SERVER['SCRIPT_NAME']), '', $_SERVER['SCRIPT_NAME']) : '/';
			$base = $protocol . $host . $script;
		}
		return rtrim($base, '/') . '/' . ltrim($uri, '/');
	}
}

if ( ! function_exists('site_url')) {
	function site_url($uri = '') {
		$index_page = config_item('index_page');
		$prefix = !empty($index_page) ? $index_page . '/' : '';
		return base_url($prefix . ltrim($uri, '/'));
	}
}

if ( ! function_exists('show_404')) {
	function show_404($page = '', $log_error = TRUE) {
		header("HTTP/1.0 404 Not Found");
		echo "<h1>404 Page Not Found</h1><p>The page you requested was not found.</p><p><a href='".base_url()."'>Return to TaxsPoint Home</a></p>";
		exit(4);
	}
}
