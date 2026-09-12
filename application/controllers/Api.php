<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Api extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->output->set_content_type('application/json');
    }

    public function ask_agent() {
        $raw = file_get_contents('php://input');
        $json = json_decode($raw, TRUE);
        
        $agent_id = isset($json['agent_id']) ? $json['agent_id'] : ($this->input->post('agent_id') ? $this->input->post('agent_id') : 'tax-bot');
        $query = isset($json['query']) ? $json['query'] : ($this->input->post('query') ? $this->input->post('query') : '');

        if (empty($query)) {
            echo json_encode(array('status' => 'error', 'message' => 'Empty question.'));
            return;
        }

        $agent = $this->agent_model->get_by_id($agent_id);
        $answer = $this->agent_model->answer_query($agent_id, $query);

        echo json_encode(array(
            'status' => 'success',
            'agent' => $agent,
            'answer' => $answer,
            'timestamp' => date('h:i A')
        ));
    }

    public function create_lead() {
        $raw = file_get_contents('php://input');
        $json = json_decode($raw, TRUE);
        $data = is_array($json) ? $json : $this->input->post();

        if (empty($data['name']) || empty($data['phone'])) {
            echo json_encode(array('status' => 'error', 'message' => 'Name and phone are required.'));
            return;
        }

        $lead = $this->lead_model->create_lead($data);
        echo json_encode(array('status' => 'success', 'lead' => $lead));
    }

    public function create_order() {
        $raw = file_get_contents('php://input');
        $json = json_decode($raw, TRUE);
        $data = is_array($json) ? $json : $this->input->post();

        $order = $this->order_model->create_order($data);
        echo json_encode(array('status' => 'success', 'order' => $order));
    }

    public function update_stage() {
        $raw = file_get_contents('php://input');
        $json = json_decode($raw, TRUE);
        $data = is_array($json) ? $json : $this->input->post();

        if (isset($data['order_id'], $data['stage'])) {
            $this->order_model->update_stage($data['order_id'], $data['stage']);
            echo json_encode(array('status' => 'success'));
            return;
        }

        echo json_encode(array('status' => 'error', 'message' => 'Missing order_id or stage.'));
    }
}
