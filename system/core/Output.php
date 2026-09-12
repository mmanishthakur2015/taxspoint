<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CI_Output {

	protected $final_output = '';
	protected $headers = array();

	public function set_content_type($mime_type, $php_charset = NULL) {
		if (strpos($mime_type, '/') === FALSE) {
			$mime_type = 'application/json';
		}
		$header = 'Content-Type: '.$mime_type;
		if ($php_charset !== NULL) {
			$header .= '; charset='.$php_charset;
		}
		$this->headers[] = array($header, TRUE);
		return $this;
	}

	public function set_output($output) {
		$this->final_output = $output;
		return $this;
	}

	public function get_output() {
		return $this->final_output;
	}

	public function _display() {
		foreach ($this->headers as $header) {
			header($header[0], $header[1]);
		}
		echo $this->final_output;
	}
}
