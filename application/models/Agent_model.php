<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Agent_model extends CI_Model {

    protected $agents = array(
        'tax-bot' => array(
            'id' => 'tax-bot',
            'name' => 'CA Rajesh Sharma',
            'handle' => '@taxbot',
            'role' => 'Tax & ITR Advisory Specialist',
            'title' => 'Senior Chartered Accountant (FCA)',
            'experience' => '14+ Years Experience (Ex-EY)',
            'avatar' => '👨‍💼',
            'badge' => 'Direct Tax Expert',
            'description' => 'Expert in Income Tax Act 1961, Section 115BAC (Old vs New Regime), Presumptive Taxation (44AD/44ADA), Capital Gains optimization, and handling IT notices.',
            'suggested_queries' => array(
                'Which is better for me: Old or New Tax Regime for FY 2024-25?',
                'How does Presumptive Taxation (Sec 44ADA) work for freelancers?',
                'What are the capital gains tax rates on stocks and mutual funds?',
                'I got a Section 143(1) intimation notice. What should I do?'
            )
        ),
        'corp-bot' => array(
            'id' => 'corp-bot',
            'name' => 'Adv. Priya Nair',
            'handle' => '@corpbot',
            'role' => 'MCA Incorporation & Corporate Law Specialist',
            'title' => 'High Court Advocate & MCA Specialist',
            'experience' => '11+ Years Experience',
            'avatar' => '👩‍⚖️',
            'badge' => 'Company Formation Pro',
            'description' => 'Specializes in Company Law, SPICe+ Part A & B filings, LLP incorporation, Director DIN/DSC regulations, Authorized vs Paid-up capital planning, and FDI compliance.',
            'suggested_queries' => array(
                'Pvt Ltd vs LLP: Which structure is best for our startup?',
                'What are the mandatory documents for SPICe+ incorporation?',
                'Can a Foreign National or NRI be a director in an Indian company?',
                'How to avoid MCA company name rejection under Rule 8?'
            )
        ),
        'gst-bot' => array(
            'id' => 'gst-bot',
            'name' => 'Vikram Singhania',
            'handle' => '@gstbot',
            'role' => 'GST & Indirect Tax Specialist',
            'title' => 'Indirect Tax Consultant & Ex-CBIC Advisor',
            'experience' => '12+ Years Experience',
            'avatar' => '👨‍💻',
            'badge' => 'GST Compliance Pro',
            'description' => 'Specializes in GST Registration (REG-01), Input Tax Credit (ITC) reconciliation with GSTR-2B, Export Letter of Undertaking (LUT), E-Invoicing, and drafting replies to SCN notices (DRC-01 / ASMT-10).',
            'suggested_queries' => array(
                'Do I need GST registration if my turnover is below 20 Lakhs?',
                'Can I claim ITC on laptops, software subscriptions, and office rent?',
                'How do I file GST LUT to export IT/freelance services without tax?',
                'How to resolve a DRC-01B variance notice between GSTR-1 and GSTR-3B?'
            )
        ),
        'ip-bot' => array(
            'id' => 'ip-bot',
            'name' => 'Adv. Sneha Mukherjee',
            'handle' => '@ipbot',
            'role' => 'Intellectual Property & Trademark Attorney',
            'title' => 'Registered Trademark & Patent Attorney',
            'experience' => '10+ Years Experience',
            'avatar' => '👩‍💼',
            'badge' => 'IP & Brand Protection',
            'description' => 'Expert in Trademark Search, NICE Classification (Classes 1 to 45), Filing Form TM-A, overcoming Section 9 & 11 objections, Trademark hearings, and Copyright for software code.',
            'suggested_queries' => array(
                'Which NICE Trademark Class should I choose for software & apps?',
                'What is the difference between ™ and ® symbols?',
                'How to respond to a Section 9 or Section 11 Trademark objection?',
                'Can I protect our proprietary software algorithm and source code?'
            )
        ),
        'startup-bot' => array(
            'id' => 'startup-bot',
            'name' => 'Rohan Mehta',
            'handle' => '@startupbot',
            'role' => 'Startup Legal & Fundraising Counsel',
            'title' => 'Venture Legal Counsel & Startup Mentor',
            'experience' => '9+ Years Experience (Advised 200+ Startups)',
            'avatar' => '👨‍🔬',
            'badge' => 'Fundraising & Venture Law',
            'description' => 'Specializes in Founders\' Agreements, Equity Vesting & Cliffs, DPIIT Startup India Recognition, Section 80-IAC Tax Holidays, SHA/SSA term sheets, and ESOP pool formation.',
            'suggested_queries' => array(
                'How to structure equity vesting & cliff in a Founders Agreement?',
                'How can our startup get 3 years of 100% Tax Exemption (Sec 80-IAC)?',
                'What is an i-SAFE note and how does CCPS equity financing work?',
                'How do we set up an ESOP pool for hiring our core engineering team?'
            )
        )
    );

    public function get_all() {
        return array_values($this->agents);
    }

    public function get_by_id($id) {
        return isset($this->agents[$id]) ? $this->agents[$id] : $this->agents['tax-bot'];
    }

    public function answer_query($agent_id, $query) {
        $q = strtolower($query);
        $agent = $this->get_by_id($agent_id);

        if ($agent_id === 'tax-bot') {
            if (strpos($q, 'regime') !== FALSE || strpos($q, 'slab') !== FALSE || strpos($q, '75,000') !== FALSE || strpos($q, 'old vs new') !== FALSE) {
                return "Under the latest Budget updates for FY 2024-25 / AY 2025-26:\n\n• New Tax Regime (Default): Standard Deduction is ₹75,000. Slabs: ₹0-3L Nil, ₹3-7L 5%, ₹7-10L 10%, ₹10-12L 15%, ₹12-15L 20%, Above ₹15L 30%. With Sec 87A rebate, income up to ₹7.75 Lakhs has zero tax!\n\n• Old Tax Regime: Allows 80C (up to ₹1.5L), 80D (health insurance), HRA, Home Loan Interest. If total eligible deductions exceed ₹3.75L, Old Regime saves more.";
            }
            if (strpos($q, 'freelance') !== FALSE || strpos($q, '44ada') !== FALSE || strpos($q, 'presumptive') !== FALSE) {
                return "Section 44ADA Presumptive Taxation for Professionals (IT, Design, Consulting, Legal):\n\n1. Gross receipts up to ₹75 Lakhs qualify (if cash receipts <= 5%).\n2. You declare 50% of gross receipts as taxable profits. No mandatory books of accounts u/s 44AA or audit u/s 44AB!\n3. For foreign clients, file GST LUT (Form RFD-11) and collect bank FIRC for zero-rated exports.";
            }
            if (strpos($q, 'capital') !== FALSE || strpos($q, 'stock') !== FALSE || strpos($q, 'crypto') !== FALSE || strpos($q, 'mutual') !== FALSE) {
                return "Capital Gains Tax Rates (Post-July 2024 Budget):\n\n• Listed Equity Shares / Equity Mutual Funds: Short Term (STCG) is 20%. Long Term (LTCG) is 12.5% with ₹1.25 Lakhs annual exemption.\n• Unlisted Shares & Property: LTCG is 12.5%.\n• Crypto / VDA: Flat 30% tax u/s 115BBH + 1% TDS u/s 194S. No offset of losses permitted.";
            }
        }

        if ($agent_id === 'corp-bot') {
            if (strpos($q, 'llp') !== FALSE || strpos($q, 'pvt') !== FALSE || strpos($q, 'vs') !== FALSE) {
                return "Pvt Ltd vs LLP Structuring:\n\n• Choose Private Limited if you intend to raise venture capital, issue ESOPs to key talent, or need maximum brand equity. Requires annual statutory audit.\n• Choose LLP if you are running a consulting or bootstrapping agency and want limited liability with low compliance (audit only if turnover > ₹40L or capital > ₹25L).";
            }
            if (strpos($q, 'foreign') !== FALSE || strpos($q, 'nri') !== FALSE || strpos($q, 'fdi') !== FALSE) {
                return "Foreign Nationals & NRIs as Directors in India:\n\n1. 100% FDI allowed in most sectors under Automatic Route.\n2. At least 1 director must be an Indian Resident (stayed >= 182 days in India in preceding financial year).\n3. Passport and foreign address proofs must be apostilled in their home country.";
            }
        }

        if ($agent_id === 'gst-bot') {
            if (strpos($q, 'turnover') !== FALSE || strpos($q, 'threshold') !== FALSE || strpos($q, '20') !== FALSE || strpos($q, '40') !== FALSE) {
                return "GST Registration Thresholds in India:\n\n• Goods Suppliers: ₹40 Lakhs aggregate annual turnover.\n• Service Providers: ₹20 Lakhs aggregate turnover.\n• Mandatory (₹1 threshold): Inter-state sales, e-commerce sellers (Amazon, Flipkart), reverse charge recipients.";
            }
            if (strpos($q, 'itc') !== FALSE || strpos($q, 'laptop') !== FALSE || strpos($q, 'rent') !== FALSE) {
                return "Input Tax Credit (ITC) Rules:\n\n• Eligible: Laptops, cloud hosting (AWS/Google), commercial office rent, software tools, furniture.\n• Blocked u/s 17(5): Passenger motor vehicles, personal food & catering, immovable construction material.";
            }
        }

        if ($agent_id === 'ip-bot') {
            if (strpos($q, 'class') !== FALSE || strpos($q, 'nice') !== FALSE) {
                return "Top Trademark Classes for Tech & Modern Businesses:\n\n• Class 9: Mobile Apps, Downloadable Software, Electronics.\n• Class 42: Software-as-a-Service (SaaS), Cloud Hosting, IT Consulting.\n• Class 35: E-commerce, Marketplace, Advertising.\n• Class 36: Fintech, Payments, Financial Advisory.";
            }
            if (strpos($q, 'symbol') !== FALSE || strpos($q, 'tm') !== FALSE) {
                return "™ vs ® Symbol Rules:\n\n• ™ can be used immediately within 24 hours of filing your TM application on IP India portal.\n• ® can ONLY be used once official Registration Certificate is issued by Controller General. Using ® without registration is an offence u/s 107 of Trade Marks Act!";
            }
        }

        if ($agent_id === 'startup-bot') {
            if (strpos($q, 'vesting') !== FALSE || strpos($q, 'founder') !== FALSE || strpos($q, 'cliff') !== FALSE) {
                return "Founders' Agreement Standard Vesting Terms:\n\n• Standard: 4-Year reverse vesting with a 1-year cliff.\n• 25% vests at Month 12. Remaining 75% vests monthly over the next 36 months.\n• Prevents departing co-founders from walking away with significant equity, safeguarding future VC fundraising.";
            }
            if (strpos($q, '80-iac') !== FALSE || strpos($q, 'tax holiday') !== FALSE) {
                return "DPIIT 3-Year 100% Tax Exemption (Sec 80-IAC):\n\n• Must be an incorporated Pvt Ltd or LLP under 10 years old with turnover < ₹100 Cr.\n• Evaluated and approved by the Inter-Ministerial Board (IMB).\n• Provides 100% tax holiday on business profits for 3 consecutive years out of first 10 years.";
            }
        }

        return "Regarding: \"{$query}\"\n\nUnder statutory Indian guidelines, this requires tailored documentation. Our senior CAs and Advocates at TaxsPoint are available to assist you. You can schedule a direct call with {$agent['name']} right now!";
    }
}
