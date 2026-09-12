<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Calculators extends CI_Controller {

    public function index() {
        $data['title'] = "Free Income Tax (Old vs New), GST & MCA Name Calculators | TaxsPoint";
        $data['services'] = $this->service_model->get_all();

        $this->load->view('layout/header', $data);
        $this->load->view('calculators/index', $data);
        $this->load->view('layout/footer', $data);
    }
}
