export const agentsData = [
  {
    id: 'tax-bot',
    name: 'CA Rajesh Sharma',
    handle: '@taxbot',
    role: 'Tax & ITR Advisory Specialist',
    title: 'Senior Chartered Accountant (FCA)',
    experience: '14+ Years Experience (Ex-EY)',
    avatar: '👨‍💼',
    badge: 'Direct Tax Expert',
    accentColor: 'blue',
    description: 'Expert in Income Tax Act 1961, AY 2025-26 budget revisions, Section 115BAC (Old vs New Regime), Presumptive Taxation (44AD/44ADA), Capital Gains optimization, and handling IT notices.',
    suggestedQueries: [
      'Which is better for me: Old or New Tax Regime for FY 2024-25?',
      'How does Presumptive Taxation (Sec 44ADA) work for freelancers?',
      'What are the capital gains tax rates on stocks and mutual funds?',
      'I got a Section 143(1) intimation notice. What should I do?'
    ],
    knowledgeBase: {
      regime: `Under the latest Budget updates for FY 2024-25 / AY 2025-26:
• **New Tax Regime (Default)**:
  - Standard Deduction is ₹75,000 for salaried employees.
  - Zero tax up to ₹7,75,000 (after standard deduction and Sec 87A rebate).
  - Tax Slabs: ₹0-3L: Nil, ₹3-7L: 5%, ₹7-10L: 10%, ₹10-12L: 15%, ₹12-15L: 20%, Above ₹15L: 30%.
• **Old Tax Regime**:
  - Allows deductions like 80C (up to ₹1.5L), 80D (health insurance up to ₹75k), HRA, Home Loan Interest (up to ₹2L u/s 24b).
• **Rule of Thumb**: If your total eligible deductions exceed ₹3,75,000 to ₹4,00,000, Old Regime usually saves more. Otherwise, the New Regime is significantly simpler and cheaper. Our CA team can run an exact side-by-side calculation for your salary structure!`,

      freelance: `Section 44ADA Presumptive Taxation for Professionals (IT, Design, Legal, Medical, Consulting):
1. **Eligibility**: Gross annual receipts up to ₹75 Lakhs (provided cash receipts do not exceed 5%).
2. **Key Advantage**: You declare 50% of gross receipts as net taxable income. No mandatory maintenance of books of accounts (u/s 44AA) and no audit (u/s 44AB).
3. **Foreign Inward Remittance**: If you bill international clients, ensure you obtain FIRC / FIRA from your bank, and file an export GST LUT (Letter of Undertaking) if your services exceed ₹20L or if you want clean zero-rated exports.`,

      capitalGains: `Key Capital Gains Tax Rates (Post-July 2024 Budget):
1. **Listed Equity Shares & Equity Mutual Funds**:
   - Short Term Capital Gains (STCG - held < 12 months): **20%** (increased from 15%).
   - Long Term Capital Gains (LTCG - held > 12 months): **12.5%** (increased from 10%), with an exemption limit of up to **₹1.25 Lakhs per year**.
2. **Unlisted Shares & Real Estate**:
   - LTCG is **12.5% without indexation** (or indexation grandfathered for real estate acquired before July 2024 under certain conditions).
3. **Crypto / Virtual Digital Assets (VDA)**: Flat **30% tax** u/s 115BBH + 1% TDS u/s 194S. No offset of losses allowed.`,

      notice: `Steps to Resolve an Income Tax Notice under Section 143(1) / 139(9):
1. **Identify the Discrepancy**: Log into the income tax portal and check the "e-Proceedings" or "Pending Actions" tab. Usually, it stems from TDS mismatches between Form 16 and your AIS (Annual Information Statement).
2. **Check Tax Demand vs Refund**: See if the department has recalculated tax or disallowed deductions (e.g. 80C or 80D proofs missing).
3. **Submit Rectification or Revised Return**: If you agree with the adjustment, pay the balance demand. If you disagree, our CA team can draft and file an online response u/s 154 (Rectification) or revised return within 30 days.`
    }
  },
  {
    id: 'corp-bot',
    name: 'Adv. Priya Nair',
    handle: '@corpbot',
    role: 'MCA Incorporation & Corporate Law Specialist',
    title: 'High Court Advocate & MCA Specialist',
    experience: '11+ Years Experience',
    avatar: '👩‍⚖️',
    badge: 'Company Formation Pro',
    accentColor: 'indigo',
    description: 'Specializes in Company Law, SPICe+ Part A & B filings, LLP incorporation, Director DIN/DSC regulations, Authorized vs Paid-up capital planning, and FDI compliance.',
    suggestedQueries: [
      'Pvt Ltd vs LLP: Which structure is best for our startup?',
      'What are the mandatory documents for SPICe+ incorporation?',
      'Can a Foreign National or NRI be a director in an Indian company?',
      'How to avoid MCA company name rejection under Rule 8?'
    ],
    knowledgeBase: {
      pvtVsLlp: `Comparison: Private Limited vs. LLP (Limited Liability Partnership):
• **Private Limited Company**:
  - *Best For*: Startups planning to raise equity capital from Angel Investors or VCs, issue ESOPs, and build high valuation.
  - *Shareholders*: Min 2, Max 200. Directors: Min 2, Max 15.
  - *Compliance*: Mandatory statutory audit every year, AOC-4, MGT-7, Board Meetings, AGM.
• **Limited Liability Partnership (LLP)**:
  - *Best For*: Consulting firms, service agencies, family businesses, bootstrap businesses.
  - *Partners*: Min 2, no upper limit.
  - *Compliance*: Audit only required if turnover > ₹40 Lakhs or capital > ₹25 Lakhs. Lower compliance cost.
• **Recommendation**: If seeking VC funding, choose **Pvt Ltd**. If bootstrapping a profitable services business, choose **LLP**.`,

      docs: `Mandatory Documents for Private Limited Company (SPICe+):
1. **Identity Proof**: PAN Card (Mandatory for Indians) + Passport / Voter ID / Driving License.
2. **Address Proof (Latest 2 months)**: Bank Statement or Electricity / Telephone Bill.
3. **Registered Office Proof**: Electricity / Property Tax bill + Notarized NOC from owner + Rent Agreement.
4. **Digital Signature (DSC)**: Class 3 token for all proposed directors.
*TaxsPoint prepares MoA, AoA, INC-9 declarations, and AGILE-PRO-S forms completely online.*`,

      foreignDirector: `Foreign Nationals / NRIs as Directors in an Indian Company:
1. **100% Permissible**: A foreign citizen can be a director and shareholder in an Indian company under the Automatic Route for most sectors (100% FDI allowed).
2. **Resident Director Requirement**: At least ONE director on the Board must be a resident of India (stayed in India for >= 182 days in the financial year).
3. **Document Authentication**: Foreign passports and address proofs must be apostilled (for Hague Convention nations) or consularized by the Indian Embassy in their home country.`,

      nameApproval: `Guidelines to Avoid MCA Name Rejection under Rule 8:
1. **Distinctiveness**: The name must start with a unique, coined, or distinctive prefix (e.g. 'Zomato', 'TaxsPoint') rather than generic words like 'National Software Solutions'.
2. **Activity Matching**: The suffix must clearly align with your MoA object clause (e.g., 'Technologies', 'Consulting', 'Logistics').
3. **Trademark Clearance**: The name must not conflict with any existing registered trademark in Class 9, 35, 42, etc. TaxsPoint does a free TM clearance search before applying!`
    }
  },
  {
    id: 'gst-bot',
    name: 'Vikram Singhania',
    handle: '@gstbot',
    role: 'GST & Indirect Tax Specialist',
    title: 'Indirect Tax Consultant & Ex-CBIC Advisor',
    experience: '12+ Years Experience',
    avatar: '👨‍💻',
    badge: 'GST Compliance Pro',
    accentColor: 'emerald',
    description: 'Specializes in GST Registration (REG-01), Input Tax Credit (ITC) reconciliation with GSTR-2B, Export Letter of Undertaking (LUT), E-Invoicing, and drafting replies to SCN notices (DRC-01 / ASMT-10).',
    suggestedQueries: [
      'Do I need GST registration if my turnover is below 20 Lakhs?',
      'Can I claim ITC on laptops, software subscriptions, and office rent?',
      'How do I file GST LUT to export IT/freelance services without tax?',
      'How to resolve a DRC-01B variance notice between GSTR-1 and GSTR-3B?'
    ],
    knowledgeBase: {
      threshold: `GST Registration Thresholds & Mandatory Triggers:
• **Standard Thresholds**:
  - For Suppliers of Goods: ₹40 Lakhs annual aggregate turnover (₹20L in special category hill states).
  - For Service Providers: ₹20 Lakhs annual aggregate turnover (₹10L in special category states).
• **Mandatory Registration (Even if turnover is ₹1)**:
  - Inter-state supply of taxable goods.
  - Selling products via e-commerce operators like Amazon, Flipkart, or Meesho.
  - Persons required to pay tax under Reverse Charge Mechanism (RCM).
  - Non-resident taxable persons or casual taxable persons.`,

      itcRules: `Input Tax Credit (ITC) Eligibility & Blocked Credits:
• **Eligible ITC**:
  - Business laptops, computers, monitors, office furniture.
  - SaaS software subscriptions (AWS, Google Workspace, Zoom, Adobe, GitHub).
  - Office rental bills (with landlord's valid GSTIN).
  - Telecommunication, commercial internet, and professional consulting charges.
• **Blocked ITC (Section 17(5))**:
  - Motor vehicles for personal/executive transit (unless used for passenger transport business).
  - Food & beverages, outdoor catering, employee health insurance (unless legally mandated).
  - Goods lost, stolen, destroyed, or written off.
  - Construction materials capitalized into immovable commercial property.`,

      lutExport: `Export of Services & Letter of Undertaking (LUT):
1. **Zero-Rated Supply**: Export of services outside India is treated as a "Zero-Rated Supply" under Section 16 of the IGST Act.
2. **Form GST RFD-11 (LUT)**: By filing an annual LUT online on the GST portal, you can export services without paying 18% IGST upfront.
3. **Requirements for Export of Service**:
   - Supplier is in India, recipient is outside India.
   - Place of supply is outside India.
   - Payment received in convertible foreign exchange (or INR where permitted by RBI via Vostro accounts).
   - Supplier and recipient are not merely establishments of the same entity.`,

      drcNotice: `Resolving Form DRC-01B Notices (GSTR-1 vs GSTR-3B Variance):
1. **Cause**: DRC-01B is triggered automatically when tax liability declared in GSTR-1 exceeds the liability paid in GSTR-3B by a predetermined threshold (e.g. > 10% and > ₹25,000).
2. **Action within 7 Days**: You must reply via Part B of Form DRC-01B on the GST portal.
3. **Possible Reasons**:
   - Typographical error in GSTR-1 outward invoices.
   - Genuine delay in paying tax in GSTR-3B (pay via DRC-03 with interest).
   - Invoices uploaded in GSTR-1 for which credit note was issued or recipient cancelled the order.
   *TaxsPoint assists in drafting and uploading the exact reconciliation sheet.*`
    }
  },
  {
    id: 'ip-bot',
    name: 'Adv. Sneha Mukherjee',
    handle: '@ipbot',
    role: 'Intellectual Property & Trademark Attorney',
    title: 'Registered Trademark & Patent Attorney',
    experience: '10+ Years Experience',
    avatar: '👩‍💼',
    badge: 'IP & Brand Protection',
    accentColor: 'purple',
    description: 'Expert in Trademark Search, NICE Classification (Classes 1 to 45), Filing Form TM-A, overcoming Section 9 & 11 objections, Trademark hearings, and Copyright for software code.',
    suggestedQueries: [
      'Which NICE Trademark Class should I choose for software & apps?',
      'What is the difference between ™ and ® symbols?',
      'How to respond to a Section 9 or Section 11 Trademark objection?',
      'Can I protect our proprietary software algorithm and source code?'
    ],
    knowledgeBase: {
      classes: `Key Trademark Classes for Modern Businesses:
• **Class 9**: Downloadable software, mobile applications, computer hardware, electronics, IoT devices.
• **Class 42**: Software-as-a-Service (SaaS), cloud hosting, website development, technology consulting.
• **Class 35**: E-commerce retail, marketplace platforms, online advertising, business management.
• **Class 36**: Financial technology (Fintech), payment gateways, investment advisory, banking.
• **Class 41**: EdTech, educational courses, entertainment, training.
• *Pro Tip: Most tech startups file in both Class 9 and Class 42 to secure 360° protection.*`,

      symbols: `Trademark Symbols Guide:
• **™ (Trademark)**: Can be used immediately after filing your application on the IP India portal. Shows the public that you claim proprietary rights over the mark.
• **® (Registered)**: Can ONLY be used once the Registrar of Trade Marks issues the official Certificate of Registration (typically 6-12 months). Using ® without registration is an offence under Section 107 of the Trade Marks Act!
• **SM (Service Mark)**: Used for service businesses (though ™ is widely accepted in India for both goods and services).`,

      objection: `Dealing with Section 9 & Section 11 Objections:
• **Section 9(1) - Absolute Grounds (Lack of Distinctiveness)**:
  - Examiner claims the mark describes the quality, purpose, or nature of the product (e.g. "FastCourier").
  - *Defense*: Submit evidence of acquired distinctiveness through long-term commercial usage, sales invoices, turnover affidavits, and press coverage.
• **Section 11(1) - Relative Grounds (Similarity with Existing Mark)**:
  - Examiner claims the mark is phonetically, visually, or conceptually similar to an earlier registered mark.
  - *Defense*: Establish visual, semantic, and phonetic differences, distinct target market, and case laws showing consumers will not be confused.`,

      copyright: `Protecting Software Code & Algorithms in India:
1. **Source Code Copyright**: Software source code and object code are protected as "Literary Works" under Section 2(o) of the Indian Copyright Act 1957.
2. **What is Protected**: The expression of the code (structure, sequence, and organization) is protected against verbatim copying.
3. **Patent vs Copyright**: In India, pure software algorithms per se are not patentable u/s 3(k) unless integrated with novel hardware providing a technical effect. Therefore, Copyright + NDA + Trade Secret protection is the best strategy.`
    }
  },
  {
    id: 'startup-bot',
    name: 'Rohan Mehta',
    handle: '@startupbot',
    role: 'Startup Legal & Fundraising Counsel',
    title: 'Venture Legal Counsel & Startup Mentor',
    experience: '9+ Years Experience (Advised 200+ Startups)',
    avatar: '👨‍🔬',
    badge: 'Fundraising & Venture Law',
    accentColor: 'amber',
    description: 'Specializes in Founders\' Agreements, Equity Vesting & Cliffs, DPIIT Startup India Recognition, Section 80-IAC Tax Holidays, SHA/SSA term sheets, and ESOP pool formation.',
    suggestedQueries: [
      'How to structure equity vesting & cliff in a Founders Agreement?',
      'How can our startup get 3 years of 100% Tax Exemption (Sec 80-IAC)?',
      'What is an i-SAFE note and how does CCPS equity financing work?',
      'How do we set up an ESOP pool for hiring our core engineering team?'
    ],
    knowledgeBase: {
      vesting: `Founders\' Agreement & Equity Vesting Structure:
1. **Standard 4-Year Vesting with 1-Year Cliff**:
   - 25% of equity vests at the end of Year 1 (Cliff).
   - Remaining 75% vests monthly or quarterly over the subsequent 36 months.
2. **Why it is Critical**: If a co-founder leaves after 6 months without vesting, they walk away with 50% of the company as dead equity, making future funding nearly impossible!
3. **Acceleration Clauses**:
   - *Single Trigger*: Immediate vesting upon acquisition.
   - *Double Trigger*: Immediate vesting if acquired AND terminated without cause within 12 months.
4. **IP Assignment**: Ensure all IP developed by founders belongs exclusively to the corporate entity.`,

      taxHoliday: `DPIIT Recognition & Section 80-IAC Tax Holiday:
1. **DPIIT Certificate**: Any incorporated Pvt Ltd / LLP under 10 years old with turnover < ₹100 Cr working towards innovation/scalability qualifies.
2. **Section 80-IAC (3-Year 100% Tax Exemption)**:
   - Evaluated by the Inter-Ministerial Board (IMB).
   - Grants 100% deduction on profits for 3 consecutive years out of the first 10 years.
   - Requirements: Innovative product/service with high potential for employment generation or wealth creation, incorporated between April 1, 2016 and March 31, 2025.`,

      fundingInstruments: `Early-Stage Venture Instruments in India:
• **i-SAFE (India Simple Agreement for Future Equity)**:
  - Created for the Indian ecosystem (modeled after Y Combinator SAFE).
  - Investors fund cash now in exchange for future equity (CCPS) upon the next priced round with valuation cap and discount.
  - Zero interest rate, no maturity date, does not count as debt.
• **CCPS (Compulsorily Convertible Preference Shares)**:
  - Standard equity vehicle for VC rounds in India.
  - Seniority in liquidation preference over equity shares.
  - Requires valuation certificate under Rule 11UA from an IBBI Registered Valuer.`,

      esop: `Setting Up an ESOP Pool for Startups:
1. **Pool Size**: Typically 8% to 15% of the total fully-diluted cap table.
2. **Legal Approvals**:
   - Board Approval followed by Special Resolution in EGM (Extraordinary General Meeting).
   - Drafting the ESOP Policy Scheme under Section 62(1)(b) of Companies Act 2013.
3. **Grant, Vesting & Exercise**:
   - *Grant*: Issuing option grant letters specifying exercise price (often face value ₹10 or discounted fair market value).
   - *Vesting*: Minimum 1 year statutory gap between grant and vesting.
   - *Exercise*: Converting vested options into equity shares.`
    }
  }
];
