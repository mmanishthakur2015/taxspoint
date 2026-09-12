<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CI_Config {
	public $config = array();

	public function __construct() {
		$this->config =& get_config();
	}

	public function item($item) {
		return isset($this->config[$item]) ? $this->config[$item] : NULL;
	}

	public function base_url($uri = '') {
		return base_url($uri);
	}

	public function site_url($uri = '') {
		return site_url($uri);
	}
}
