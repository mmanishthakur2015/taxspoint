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
			if (file_exists(VIEWPATH . strtolower($view) . '.php')) {
				$_ci_path = VIEWPATH . strtolower($view) . '.php';
			} else {
				show_error('Unable to load the requested file: ' . $view . '.php');
			}
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
		if (isset($CI->$name) && is_object($CI->$name)) {
			$this->_ci_models[] = $name;
			return $this;
		}

		$possible_paths = array(
			APPPATH . 'models/' . $model . '.php',
			APPPATH . 'models/' . ucfirst($model) . '.php',
			APPPATH . 'models/' . strtolower($model) . '.php',
			APPPATH . 'models/' . ucfirst(strtolower($model)) . '.php'
		);

		$model_path = NULL;
		foreach ($possible_paths as $p) {
			if (file_exists($p)) {
				$model_path = $p;
				break;
			}
		}

		if ($model_path === NULL) {
			show_error('Unable to locate the model you have specified: ' . $model);
		}

		require_once($model_path);

		$possible_classes = array(
			ucfirst(basename($model)),
			ucfirst(strtolower(basename($model))),
			basename($model),
			strtolower(basename($model))
		);

		$model_class = NULL;
		foreach ($possible_classes as $cls) {
			if (class_exists($cls, FALSE)) {
				$model_class = $cls;
				break;
			}
		}

		if ($model_class === NULL) {
			show_error('Unable to find class for model: ' . $model);
		}

		$CI->$name = new $model_class();
		$this->_ci_models[] = $name;

		return $this;
	}

	public function helper($helpers = array()) {
		return $this;
	}
}
