<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Portal extends CI_Controller {

    public function index() {
        $order_id = $this->input->get('order_id') ? $this->input->get('order_id') : 'TP-92841';
        $data['order'] = $this->order_model->get_by_id($order_id);
        if ( ! $data['order']) {
            $all = $this->order_model->get_all();
            $data['order'] = isset($all[0]) ? $all[0] : NULL;
        }
        $data['all_orders'] = $this->order_model->get_all();
        $data['title'] = "Live Government Filing Tracker & Document Vault | TaxsPoint";

        $this->load->view('layout/header', $data);
        $this->load->view('portal/tracker', $data);
        $this->load->view('layout/footer', $data);
    }
}
