<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CI_Controller {

	private static $instance;

	public $load;
	public $input;
	public $output;

	public function __construct() {
		self::$instance =& $this;

		$this->load =& load_class('Loader', 'core');
		$this->input =& load_class('Input', 'core');
		$this->output =& load_class('Output', 'core');

		// Autoload components
		if (file_exists(APPPATH.'config/autoload.php')) {
			include(APPPATH.'config/autoload.php');
			if (isset($autoload['model'])) {
				foreach ($autoload['model'] as $model) {
					$this->load->model($model);
				}
			}
		}
	}

	public static function &get_instance() {
		return self::$instance;
	}
}
