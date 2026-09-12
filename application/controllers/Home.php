<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

    public function index() {
        $data['title'] = "TaxsPoint | Income Tax Filing, Company Registration & Legal Consulting";
        $data['services'] = $this->service_model->get_all();
        $data['agents'] = $this->agent_model->get_all();
        
        $this->load->view('layout/header', $data);
        $this->load->view('home', $data);
        $this->load->view('layout/footer', $data);
    }
}
