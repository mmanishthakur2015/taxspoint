<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Services extends CI_Controller {

    public function index($category = 'all') {
        $cat = $this->input->get('category') ? $this->input->get('category') : $category;
        $data['category'] = $cat;
        $data['services'] = $this->service_model->get_by_category($cat);
        $data['title'] = "Legal & Tax Services Catalog | TaxsPoint";

        $this->load->view('layout/header', $data);
        $this->load->view('services/index', $data);
        $this->load->view('layout/footer', $data);
    }

    public function detail($id = 'pvt-ltd') {
        $service = $this->service_model->get_by_id($id);
        if ( ! $service) {
            show_404();
        }
        $data['service'] = $service;
        $data['title'] = $service['title'] . " | TaxsPoint";

        $this->load->view('layout/header', $data);
        $this->load->view('services/detail', $data);
        $this->load->view('layout/footer', $data);
    }
}
