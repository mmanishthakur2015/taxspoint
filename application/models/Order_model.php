<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Order_model extends CI_Model {

    protected $cache_file;

    public function __construct() {
        parent::__construct();
        $this->cache_file = APPPATH . 'cache_orders.json';
    }

    public function get_all() {
        if (file_exists($this->cache_file)) {
            $data = json_decode(file_get_contents($this->cache_file), TRUE);
            if (is_array($data)) {
                return $data;
            }
        }
        return array(
            array(
                'order_id' => 'TP-92841',
                'customer_name' => 'Rohit Kulkarni',
                'email' => 'rohit@techventures.io',
                'phone' => '+91 98201 47291',
                'service_title' => 'Private Limited Company Registration',
                'amount' => 1999,
                'status' => 'In MCA Filing',
                'date' => '10 Sep 2024',
                'current_stage' => 3, // 0 to 4
                'assigned_ca' => 'CA Rajesh Sharma',
                'notes' => 'SPICe+ Part B uploaded. Awaiting ROC verification certificate.'
            ),
            array(
                'order_id' => 'TP-84192',
                'customer_name' => 'Pooja Aggarwal',
                'email' => 'pooja@bloomfabrics.com',
                'phone' => '+91 98112 55319',
                'service_title' => 'GST Registration Online',
                'amount' => 499,
                'status' => 'Approved & Active',
                'date' => '05 Sep 2024',
                'current_stage' => 4,
                'assigned_ca' => 'Vikram Singhania',
                'notes' => 'GSTIN issued: 07AABCB1234F1Z5. Certificate ready in vault.'
            ),
            array(
                'order_id' => 'TP-77103',
                'customer_name' => 'Vikramaditya Deshmukh',
                'email' => 'vikram@deshmukhagro.in',
                'phone' => '+91 97234 88120',
                'service_title' => 'Trademark (TM) Registration',
                'amount' => 1499,
                'status' => 'Document Verification',
                'date' => '11 Sep 2024',
                'current_stage' => 1,
                'assigned_ca' => 'Adv. Sneha Mukherjee',
                'notes' => 'Verifying TM-48 Power of Attorney and User Affidavit proofs.'
            )
        );
    }

    public function get_by_id($order_id) {
        $orders = $this->get_all();
        foreach ($orders as $o) {
            if (strcasecmp($o['order_id'], trim($order_id)) === 0) {
                return $o;
            }
        }
        return NULL;
    }

    public function create_order($data) {
        $orders = $this->get_all();
        $new_order = array(
            'order_id' => 'TP-' . rand(10000, 99999),
            'customer_name' => isset($data['customer_name']) ? $data['customer_name'] : 'Entrepreneur',
            'email' => isset($data['email']) ? $data['email'] : '',
            'phone' => isset($data['phone']) ? $data['phone'] : '',
            'service_title' => isset($data['service_title']) ? $data['service_title'] : 'Company Registration',
            'amount' => isset($data['amount']) ? (int)$data['amount'] : 1999,
            'status' => 'Document Verification',
            'date' => date('d M Y'),
            'current_stage' => 1,
            'assigned_ca' => 'CA Rajesh Sharma',
            'notes' => 'Application submitted online. Verification in progress.'
        );
        array_unshift($orders, $new_order);
        file_put_contents($this->cache_file, json_encode($orders, JSON_PRETTY_PRINT));
        return $new_order;
    }

    public function update_stage($order_id, $stage) {
        $orders = $this->get_all();
        $stage_names = array('Application Received', 'Document Verification', 'DSC & Name Approved', 'In MCA Filing', 'Approved & Issued');
        foreach ($orders as &$o) {
            if ($o['order_id'] === $order_id) {
                $o['current_stage'] = (int)$stage;
                $o['status'] = isset($stage_names[$stage]) ? $stage_names[$stage] : $o['status'];
                break;
            }
        }
        file_put_contents($this->cache_file, json_encode($orders, JSON_PRETTY_PRINT));
        return TRUE;
    }
}
