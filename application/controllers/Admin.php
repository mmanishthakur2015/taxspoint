<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

    public function index() {
        $data['orders'] = $this->order_model->get_all();
        $data['leads'] = $this->lead_model->get_all();
        $data['title'] = "Operations Hub & Executive CRM Dashboard | TaxsPoint";

        $this->load->view('layout/header', $data);
        $this->load->view('admin/dashboard', $data);
        $this->load->view('layout/footer', $data);
    }
}
