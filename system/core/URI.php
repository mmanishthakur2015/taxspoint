<?php
defined('BASEPATH') OR exit('No direct script access allowed');

#[AllowDynamicProperties]
class CI_URI {
	public $segments = array();

	public function __construct() {
		$uri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '';
		$uri = parse_url($uri, PHP_URL_PATH);
		$this->segments = array_values(array_filter(explode('/', trim($uri, '/'))));
	}

	public function segment($n, $no_result = NULL) {
		return isset($this->segments[$n - 1]) ? $this->segments[$n - 1] : $no_result;
	}
}
