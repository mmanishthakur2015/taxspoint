<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Agents extends CI_Controller {

    public function index() {
        $data['title'] = "5 Specialized Alternative AI Legal & Tax Advisors | TaxsPoint";
        $data['agents'] = $this->agent_model->get_all();

        $this->load->view('layout/header', $data);
        $this->load->view('agents/hub', $data);
        $this->load->view('layout/footer', $data);
    }
}
