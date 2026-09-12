<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Lead_model extends CI_Model {

    protected $cache_file;

    public function __construct() {
        parent::__construct();
        $this->cache_file = APPPATH . 'cache_leads.json';
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
                'id' => 'LEAD-101',
                'name' => 'Gaurav Singhal',
                'phone' => '+91 98102 39401',
                'email' => 'gaurav@singhalexports.com',
                'service' => 'Private Limited Company Registration',
                'city' => 'Delhi',
                'timestamp' => 'Today, 11:30 AM',
                'status' => 'Callback Scheduled'
            ),
            array(
                'id' => 'LEAD-102',
                'name' => 'Sunita Raman',
                'phone' => '+91 97401 23894',
                'email' => 'sunita@edunext.ai',
                'service' => 'Trademark Registration',
                'city' => 'Bengaluru',
                'timestamp' => 'Today, 09:15 AM',
                'status' => 'New Inquiry'
            ),
            array(
                'id' => 'LEAD-103',
                'name' => 'Harpreet Singh',
                'phone' => '+91 98881 23456',
                'email' => 'harpreet@punjabagro.in',
                'service' => 'GST Registration',
                'city' => 'Chandigarh',
                'timestamp' => 'Yesterday, 04:45 PM',
                'status' => 'Consultation Complete'
            )
        );
    }

    public function create_lead($data) {
        $leads = $this->get_all();
        $new_lead = array(
            'id' => 'LEAD-' . rand(1000, 9999),
            'name' => isset($data['name']) ? $data['name'] : 'Entrepreneur',
            'phone' => isset($data['phone']) ? $data['phone'] : '',
            'email' => isset($data['email']) ? $data['email'] : '',
            'service' => isset($data['service']) ? $data['service'] : 'General Consultation',
            'city' => isset($data['city']) ? $data['city'] : 'India',
            'timestamp' => date('d M Y, h:i A'),
            'status' => 'Callback Scheduled'
        );
        array_unshift($leads, $new_lead);
        file_put_contents($this->cache_file, json_encode($leads, JSON_PRETTY_PRINT));
        return $new_lead;
    }

    public function update_status($lead_id, $status) {
        $leads = $this->get_all();
        foreach ($leads as &$l) {
            if ($l['id'] === $lead_id) {
                $l['status'] = $status;
                break;
            }
        }
        file_put_contents($this->cache_file, json_encode($leads, JSON_PRETTY_PRINT));
        return TRUE;
    }
}
