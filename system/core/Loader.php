<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CI_Loader {

	protected $_ci_models = array();

	public function view($view, $vars = array(), $return = FALSE) {
		$CI =& get_instance();
		foreach (get_object_vars($CI) as $_ci_key => $_ci_var) {
			if ( ! isset($this->$_ci_key)) {
				$this->$_ci_key =& $CI->$_ci_key;
			}
		}

		if (is_array($vars)) {
			extract($vars);
		}

		$_ci_path = VIEWPATH . $view . '.php';

		if ( ! file_exists($_ci_path)) {
			show_error('Unable to load the requested file: ' . $view . '.php');
		}

		if ($return === TRUE) {
			ob_start();
			include($_ci_path);
			$buffer = ob_get_contents();
			@ob_end_clean();
			return $buffer;
		}

		include($_ci_path);
		return $this;
	}

	public function model($model, $name = '', $db_conn = FALSE) {
		if (empty($model)) {
			return $this;
		}

		if (empty($name)) {
			$name = basename($model);
		}

		if (in_array($name, $this->_ci_models, TRUE)) {
			return $this;
		}

		$CI =& get_instance();
		if (isset($CI->$name)) {
			throw new RuntimeException('The model name you are loading is the name of a resource that is already being used: ' . $name);
		}

		$model_path = APPPATH . 'models/' . $model . '.php';

		if ( ! file_exists($model_path)) {
			show_error('Unable to locate the model you have specified: ' . $model);
		}

		require_once($model_path);

		$model_class = ucfirst(basename($model));
		$CI->$name = new $model_class();
		$this->_ci_models[] = $name;

		return $this;
	}

	public function helper($helpers = array()) {
		return $this;
	}
}
