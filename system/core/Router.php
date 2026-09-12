<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CI_Router {

	public $class = '';
	public $method = 'index';
	public $params = array();
	public $default_controller = 'Home';

	public function __construct() {
		$this->_set_routing();
	}

	protected function _set_routing() {
		if (file_exists(APPPATH.'config/routes.php')) {
			include(APPPATH.'config/routes.php');
			if (isset($route['default_controller'])) {
				$this->default_controller = ucfirst($route['default_controller']);
			}
		}

		$uri = $this->_parse_request_uri();
		$segments = array_values(array_filter(explode('/', $uri)));

		// Match custom routes
		$uri_string = implode('/', $segments);
		if (isset($route)) {
			foreach ($route as $key => $val) {
				if ($key === 'default_controller' || $key === '404_override') continue;
				$key = str_replace(array(':any', ':num'), array('[^/]+', '[0-9]+'), $key);
				if (preg_match('#^'.$key.'$#', $uri_string)) {
					$uri_string = preg_replace('#^'.$key.'$#', $val, $uri_string);
					$segments = array_values(array_filter(explode('/', $uri_string)));
					break;
				}
			}
		}

		if (empty($segments)) {
			$this->class = $this->default_controller;
			$this->method = 'index';
		} else {
			$this->class = ucfirst($segments[0]);
			$this->method = isset($segments[1]) ? $segments[1] : 'index';
			$this->params = array_slice($segments, 2);
		}
	}

	protected function _parse_request_uri() {
		if ( ! isset($_SERVER['REQUEST_URI'], $_SERVER['SCRIPT_NAME'])) {
			return '';
		}

		$uri = parse_url('http://dummy'.$_SERVER['REQUEST_URI'], PHP_URL_PATH);
		$script = $_SERVER['SCRIPT_NAME'];

		if (strpos($uri, $script) === 0) {
			$uri = (string) substr($uri, strlen($script));
		} elseif (strpos($uri, dirname($script)) === 0) {
			$uri = (string) substr($uri, strlen(dirname($script)));
		}

		return trim($uri, '/');
	}
}
