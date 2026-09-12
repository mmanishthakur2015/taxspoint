<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CI_Input {

	public function post($index = NULL, $xss_clean = NULL) {
		if ($index === NULL) {
			return $_POST;
		}
		return isset($_POST[$index]) ? $_POST[$index] : NULL;
	}

	public function get($index = NULL, $xss_clean = NULL) {
		if ($index === NULL) {
			return $_GET;
		}
		return isset($_GET[$index]) ? $_GET[$index] : NULL;
	}

	public function get_post($index, $xss_clean = NULL) {
		return isset($_POST[$index]) ? $_POST[$index] : (isset($_GET[$index]) ? $_GET[$index] : NULL);
	}

	public function is_ajax_request() {
		return (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')
			|| (!empty($_SERVER['CONTENT_TYPE']) && strpos($_SERVER['CONTENT_TYPE'], 'application/json') !== FALSE);
	}

	public function raw_input_stream() {
		return file_get_contents('php://input');
	}
}
