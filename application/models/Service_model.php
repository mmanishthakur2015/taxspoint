<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Service_model extends CI_Model {

    protected $services = array(
        'pvt-ltd' => array(
            'id' => 'pvt-ltd',
            'category' => 'incorporation',
            'category_name' => 'Company Registration',
            'title' => 'Private Limited Company Registration',
            'badge' => 'Most Popular',
            'rating' => 4.9,
            'reviews_count' => 3240,
            'price' => 1999,
            'original_price' => 4999,
            'govt_fee_note' => '+ Govt fees & Stamp Duty as applicable',
            'turnaround' => '7 - 10 Working Days',
            'short_desc' => 'The gold standard for startups and growing businesses in India. Get 100% online incorporation with 2 DSCs, DINs, and PAN/TAN.',
            'long_desc' => 'Private Limited Company is the most popular corporate legal structure in India, offering limited liability protection, high investor credibility, and seamless ability to raise venture funding. TaxsPoint manages the complete end-to-end SPICe+ Part A & B incorporation on the Ministry of Corporate Affairs (MCA) portal.',
            'deliverables' => array(
                'Digital Signature Certificate (Class 3 DSC) for 2 Directors',
                'Director Identification Number (DIN) for 2 Directors',
                'Name Reservation on MCA SPICe+ Part A',
                'Drafting of Memorandum of Association (MoA) & Articles of Association (AoA)',
                'Certificate of Incorporation (COI) with CIN number',
                'Company PAN and TAN allotment',
                'AGILE-PRO-S filing (EPFO, ESIC, Professional Tax & Zero Balance Current Account)'
            ),
            'documents_required' => array(
                'PAN Card of all Directors and Shareholders (Self-attested)',
                'Identity Proof: Voter ID, Passport, or Driving License',
                'Address Proof (Last 2 months): Bank Statement or Electricity/Mobile bill',
                'Passport-size digital photographs of all Directors',
                'Registered Office Proof: Electricity/Water/Gas bill (not older than 2 months)',
                'NOC (No Objection Certificate) from the property owner',
                'Rent Agreement / Lease Deed (if premises is rented)'
            )
        ),
        'llp-reg' => array(
            'id' => 'llp-reg',
            'category' => 'incorporation',
            'category_name' => 'Company Registration',
            'title' => 'Limited Liability Partnership (LLP)',
            'badge' => 'Low Compliance',
            'rating' => 4.8,
            'reviews_count' => 1820,
            'price' => 1499,
            'original_price' => 3499,
            'govt_fee_note' => '+ State Stamp Duty on LLP Agreement',
            'turnaround' => '8 - 12 Working Days',
            'short_desc' => 'Combines the flexibility of a partnership with the limited liability benefits of a private limited company. Low annual compliance costs.',
            'long_desc' => 'An LLP is ideal for professional services firms, consulting businesses, and small ventures seeking limited liability without the rigorous compliance burden of a Pvt Ltd company. Governed by the LLP Act 2008.',
            'deliverables' => array(
                '2 Class 3 DSCs with secure USB tokens',
                'Designated Partner Identification Number (DPIN)',
                'Name Approval via RUN-LLP',
                'Filing of FiLLiP Form with RoC',
                'Drafting and filing of custom LLP Agreement (Form 3)',
                'PAN & TAN for the LLP'
            ),
            'documents_required' => array(
                'PAN Card of all Partners',
                'Address & ID Proof: Voter ID / Passport / Driving License',
                'Bank Statement (latest 2 months)',
                'Office Address Proof (Electricity bill & Rent Agreement / NOC)'
            )
        ),
        'opc-reg' => array(
            'id' => 'opc-reg',
            'category' => 'incorporation',
            'category_name' => 'Company Registration',
            'title' => 'One Person Company (OPC)',
            'badge' => 'Solo Founders',
            'rating' => 4.8,
            'reviews_count' => 1140,
            'price' => 1999,
            'original_price' => 3999,
            'govt_fee_note' => '+ State Stamp Duty & RoC Fee',
            'turnaround' => '7 - 10 Working Days',
            'short_desc' => 'Enjoy 100% single-handed ownership with full corporate limited liability. Perfect for solo entrepreneurs.',
            'long_desc' => 'Introduced by the Companies Act 2013, an OPC allows a single promoter to create a separate corporate entity while designating one nominee director in case of death or incapacity.',
            'deliverables' => array(
                '1 Director DSC + 1 Nominee Consent processing',
                'DIN for the Director',
                'Name Approval via SPICe+ Part A',
                'e-MoA and e-AoA drafting with Nominee clause',
                'Certificate of Incorporation, PAN & TAN'
            ),
            'documents_required' => array(
                'PAN & ID Proof of Director & Nominee',
                'Address Proof (Bank Statement / Electricity Bill)',
                'Consent of Nominee in Form INC-3',
                'Registered Office Proof with Landlord NOC'
            )
        ),
        'section-8' => array(
            'id' => 'section-8',
            'category' => 'incorporation',
            'category_name' => 'Company Registration',
            'title' => 'Section 8 Company (NGO / Non-Profit)',
            'badge' => 'Tax Exemption',
            'rating' => 4.9,
            'reviews_count' => 650,
            'price' => 4999,
            'original_price' => 8999,
            'govt_fee_note' => '+ Govt License Fee',
            'turnaround' => '15 - 20 Working Days',
            'short_desc' => 'Registered non-profit entity recognized nationwide for CSR funding, charitable grants, and 80G/12A tax exemptions.',
            'long_desc' => 'A Section 8 Company is registered for promoting commerce, art, science, sports, education, charity, and social welfare, where profits are applied solely toward promoting its objectives.',
            'deliverables' => array(
                'Central Govt License in Form INC-12',
                '2 DSCs and DINs',
                'Special Non-Profit MoA & AoA drafting',
                'Certificate of Incorporation & PAN/TAN'
            ),
            'documents_required' => array(
                'PAN & ID proofs of all promoters/directors',
                'Detailed work plan and charitable project description',
                'Estimated 3-year future income & expenditure statement',
                'Registered Office documentation'
            )
        ),
        'gst-reg' => array(
            'id' => 'gst-reg',
            'category' => 'tax',
            'category_name' => 'Tax & Compliance',
            'title' => 'GST Registration Online',
            'badge' => 'Instant Filing',
            'rating' => 4.9,
            'reviews_count' => 5400,
            'price' => 499,
            'original_price' => 1499,
            'govt_fee_note' => 'Govt fees: ₹0 (Free on GST Portal)',
            'turnaround' => '3 - 5 Working Days',
            'short_desc' => 'Mandatory for businesses with turnover > ₹20L/₹40L or engaging in inter-state / e-commerce sales. Get ARN within 24 hours.',
            'long_desc' => 'Goods and Services Tax (GST) is an essential tax registration required for businesses selling goods or rendering services across India. We ensure 100% accurate HSN/SAC code mapping and zero-error documentation to prevent clarification notices.',
            'deliverables' => array(
                'Drafting and filing GST Form REG-01',
                'HSN / SAC Code mapping by expert CA',
                'Aadhaar Biometric/OTP authentication guidance',
                'ARN Tracking and prompt response to queries',
                'GSTIN Certificate (Form GST REG-06) issuance'
            ),
            'documents_required' => array(
                'PAN Card of Business / Proprietor / Directors',
                'Aadhaar Card of Applicant',
                'Electricity Bill / Property Tax receipt of business place',
                'Rent Agreement & Landlord NOC (if rented)',
                'Cancelled Cheque / Bank Statement with IFSC & Account No'
            )
        ),
        'gst-return' => array(
            'id' => 'gst-return',
            'category' => 'tax',
            'category_name' => 'Tax & Compliance',
            'title' => 'GST Return Filing (Monthly / Quarterly)',
            'badge' => 'CA Assisted',
            'rating' => 4.8,
            'reviews_count' => 4120,
            'price' => 499,
            'original_price' => 1299,
            'govt_fee_note' => 'Starting per month billing',
            'turnaround' => 'Same Day Filing',
            'short_desc' => 'Flawless GSTR-1 & GSTR-3B filings with automated GSTR-2B Input Tax Credit (ITC) reconciliation. Avoid late fees up to ₹50/day.',
            'long_desc' => 'Our dedicated indirect tax team prepares and files your monthly/quarterly GST returns, matches B2B inward invoices with suppliers to maximize ITC, and flags discrepancies to prevent notice DRC-01B.',
            'deliverables' => array(
                'GSTR-1 (Outward supplies / Sales)',
                'GSTR-3B (Summary return & tax payment computation)',
                'Automated GSTR-2B ITC reconciliation against purchase registers',
                'Challan generation (PMT-06) and ITC ledger optimization',
                'Quarterly QRMP scheme advisory'
            ),
            'documents_required' => array(
                'Sales Register / Invoices for the period',
                'Purchase Register / Supplier bills',
                'GST Portal Login credentials',
                'Bank statement for cross-verification'
            )
        ),
        'itr-filing' => array(
            'id' => 'itr-filing',
            'category' => 'tax',
            'category_name' => 'Tax & Compliance',
            'title' => 'Income Tax Return (ITR) Filing',
            'badge' => 'AY 2025-26 Ready',
            'rating' => 4.9,
            'reviews_count' => 6890,
            'price' => 799,
            'original_price' => 1999,
            'govt_fee_note' => 'Dedicated Senior CA Consultation Included',
            'turnaround' => '24 - 48 Hours',
            'short_desc' => 'Maximize your tax refund with our CA-assisted ITR filing. Comparison between Old vs New Tax Regime, Form 16 & AIS/TIS review.',
            'long_desc' => 'Whether you are a salaried professional with multiple Form 16s, a freelancer with foreign remittances (Sec 44ADA), or an active trader with capital gains across stocks & crypto, TaxsPoint ensures optimal deductions and 100% compliant e-filing.',
            'deliverables' => array(
                'Comprehensive AIS, TIS, and Form 26AS reconciliation',
                'Old vs New Tax Regime optimization report',
                'Filing of ITR-1, ITR-2, ITR-3 or ITR-4',
                'Deductions verification (80C, 80D, HRA, 80E, 80G, 80TTA)',
                'ITR-V Acknowledgment and E-verification assistance'
            ),
            'documents_required' => array(
                'PAN & Aadhaar Card (linked)',
                'Form 16 / 16A from employer / deductors',
                'Bank Account details & Interest Certificates',
                'Capital Gains summary report',
                'Investment proofs for 80C & medical insurance receipts'
            )
        ),
        'trademark-reg' => array(
            'id' => 'trademark-reg',
            'category' => 'ip',
            'category_name' => 'Trademark & IP',
            'title' => 'Trademark (TM) Registration',
            'badge' => 'Protect Your Brand',
            'rating' => 4.9,
            'reviews_count' => 3890,
            'price' => 1499,
            'original_price' => 3499,
            'govt_fee_note' => '+ ₹4,500 Govt fee for Individual/Startup or ₹9,000 for others',
            'turnaround' => '24 Hours for Filing',
            'short_desc' => 'Get the exclusive legal right to use the ™ symbol within 24 hours. Class search, application drafting, and IP India filing.',
            'long_desc' => 'Protect your brand name, logo, and slogan from competitors and counterfeiters. TaxsPoint trademark attorneys conduct an in-depth phonetic and visual search on the IP India database, choose the right NICE classification, and file Form TM-A with priority protection.',
            'deliverables' => array(
                'Comprehensive Trademark Clearance Search & Class report',
                'Drafting of Form TM-A with goods/services specification',
                'Application filing on the Controller General of Patents, Designs & Trademarks',
                'Official Trademark Application Number & Instant right to use ™ symbol',
                'Regular tracking and email alerts regarding Examination Report'
            ),
            'documents_required' => array(
                'Brand Name, Logo / Slogan in high-resolution JPG/PNG',
                'Applicant PAN & Aadhaar (or Certificate of Incorporation & MSME Certificate)',
                'Signed Power of Attorney (Form TM-48) - auto-drafted by us',
                'User Affidavit with earliest proof of usage date (if already in use)'
            )
        ),
        'msme-udyam' => array(
            'id' => 'msme-udyam',
            'category' => 'licenses',
            'category_name' => 'Licenses & Approvals',
            'title' => 'MSME / Udyam Registration',
            'badge' => 'Govt Benefits',
            'rating' => 4.9,
            'reviews_count' => 4600,
            'price' => 499,
            'original_price' => 999,
            'govt_fee_note' => 'Govt fee: ₹0 (Free on Govt Portal)',
            'turnaround' => 'Same Day Issuance',
            'short_desc' => 'Avail 50% subsidy on patent & trademark fees, collateral-free bank loans (CGTMSE), and protection against delayed payments.',
            'long_desc' => 'Udyam Registration is the official identification for Micro, Small, and Medium Enterprises issued by the Ministry of MSME. Provides significant subsidies on government tenders and bank interest subventions.',
            'deliverables' => array(
                'Classification under Micro, Small, or Medium criteria',
                'NIC Code selection for all business activities',
                'Filing on the National Udyam Portal',
                'Issuance of official Udyam Certificate with QR verification'
            ),
            'documents_required' => array(
                'Aadhaar Card of Applicant / Authorized Signatory',
                'PAN Card of Business or Proprietor',
                'Bank Account Number and IFSC Code',
                'Number of employees and investment in plant/machinery'
            )
        ),
        'startup-india' => array(
            'id' => 'startup-india',
            'category' => 'licenses',
            'category_name' => 'Licenses & Approvals',
            'title' => 'Startup India (DPIIT) Recognition',
            'badge' => 'Tax Holiday 80-IAC',
            'rating' => 4.9,
            'reviews_count' => 1940,
            'price' => 1999,
            'original_price' => 3999,
            'govt_fee_note' => 'Govt fee: ₹0 (Free on Govt Portal)',
            'turnaround' => '5 - 7 Working Days',
            'short_desc' => 'Gain recognition under Startup India for 3-year 100% tax holiday (Sec 80-IAC), relaxed tender norms, and capital gains exemptions.',
            'long_desc' => 'DPIIT recognition unlocks key governmental benefits, including angel tax relief, access to government fund-of-funds, fast-tracked patent applications at 80% rebate, and exemption from prior turnover/experience in public procurement.',
            'deliverables' => array(
                'Innovation pitch deck & problem statement refinement',
                'Application drafting on the Startup India portal',
                'Filing for DPIIT recognition certificate',
                'Guidance on Section 80-IAC Tax Exemption application'
            ),
            'documents_required' => array(
                'Certificate of Incorporation (Pvt Ltd or LLP under 10 years old)',
                'Pitch deck explaining innovative product/service and scalability',
                'Website / App link and demo video (if available)',
                'List of awards, grants, or patents (if any)'
            )
        )
    );

    public function get_all() {
        return array_values($this->services);
    }

    public function get_by_category($category) {
        if ($category === 'all' || empty($category)) {
            return $this->get_all();
        }
        $result = array();
        foreach ($this->services as $s) {
            if ($s['category'] === $category) {
                $result[] = $s;
            }
        }
        return $result;
    }

    public function get_by_id($id) {
        return isset($this->services[$id]) ? $this->services[$id] : NULL;
    }
}
