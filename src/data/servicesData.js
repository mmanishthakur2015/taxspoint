export const servicesData = [
  // --- Company Registration ---
  {
    id: 'pvt-ltd',
    category: 'incorporation',
    categoryName: 'Company Registration',
    title: 'Private Limited Company Registration',
    badge: 'Most Popular',
    rating: 4.9,
    reviewsCount: 3240,
    price: 1999,
    originalPrice: 4999,
    govtFeeNote: '+ Govt fees & Stamp Duty as applicable',
    turnaround: '7 - 10 Working Days',
    shortDesc: 'The gold standard for startups and growing businesses in India. Get 100% online incorporation with 2 DSCs, DINs, and PAN/TAN.',
    longDesc: 'Private Limited Company is the most popular corporate legal structure in India, offering limited liability protection, high investor credibility, and seamless ability to raise venture funding. TaxsPoint manages the complete end-to-end SPICe+ Part A & B incorporation on the Ministry of Corporate Affairs (MCA) portal.',
    deliverables: [
      'Digital Signature Certificate (Class 3 DSC) for 2 Directors',
      'Director Identification Number (DIN) for 2 Directors',
      'Name Reservation on MCA SPICe+ Part A',
      'Drafting of Memorandum of Association (MoA) & Articles of Association (AoA)',
      'Certificate of Incorporation (COI) with CIN number',
      'Company PAN and TAN allotment',
      'AGILE-PRO-S filing (EPFO, ESIC, Professional Tax & Zero Balance Current Account)'
    ],
    documentsRequired: [
      'PAN Card of all Directors and Shareholders (Self-attested)',
      'Identity Proof: Voter ID, Passport, or Driving License',
      'Address Proof (Last 2 months): Bank Statement or Electricity/Mobile bill',
      'Passport-size digital photographs of all Directors',
      'Registered Office Proof: Electricity/Water/Gas bill (not older than 2 months)',
      'NOC (No Objection Certificate) from the property owner',
      'Rent Agreement / Lease Deed (if premises is rented)'
    ],
    faqs: [
      {
        q: 'What is the minimum capital required to register a Private Limited Company?',
        a: 'There is no minimum paid-up capital requirement under the Companies Act, 2013. You can start with even ₹1,000 as authorized capital.'
      },
      {
        q: 'Do I need to visit any government office?',
        a: 'No. The entire process handled by TaxsPoint is 100% online. You simply upload documents on our secure portal, and our CA/CS team handles the rest.'
      },
      {
        q: 'Can a salaried person become a director in a Pvt Ltd Company?',
        a: 'Yes, legally there is no bar under the Companies Act. However, you should check your employment agreement with your employer for any conflict of interest clauses.'
      }
    ]
  },
  {
    id: 'llp-reg',
    category: 'incorporation',
    categoryName: 'Company Registration',
    title: 'Limited Liability Partnership (LLP)',
    badge: 'Low Compliance',
    rating: 4.8,
    reviewsCount: 1820,
    price: 1499,
    originalPrice: 3499,
    govtFeeNote: '+ State Stamp Duty on LLP Agreement',
    turnaround: '8 - 12 Working Days',
    shortDesc: 'Combines the flexibility of a partnership with the limited liability benefits of a private limited company. Low annual compliance costs.',
    longDesc: 'An LLP is ideal for professional services firms, consulting businesses, and small ventures seeking limited liability without the rigorous compliance burden of a Pvt Ltd company. Governed by the LLP Act 2008.',
    deliverables: [
      '2 Class 3 DSCs with secure USB tokens',
      'Designated Partner Identification Number (DPIN)',
      'Name Approval via RUN-LLP',
      'Filing of FiLLiP Form with RoC',
      'Drafting and filing of custom LLP Agreement (Form 3)',
      'PAN & TAN for the LLP'
    ],
    documentsRequired: [
      'PAN Card of all Partners',
      'Address & ID Proof: Voter ID / Passport / Driving License',
      'Bank Statement (latest 2 months)',
      'Office Address Proof (Electricity bill & Rent Agreement / NOC)'
    ],
    faqs: [
      {
        q: 'Is audit mandatory for an LLP every year?',
        a: 'Audit is mandatory only if annual turnover exceeds ₹40 Lakhs or capital contribution exceeds ₹25 Lakhs.'
      }
    ]
  },
  {
    id: 'opc-reg',
    category: 'incorporation',
    categoryName: 'Company Registration',
    title: 'One Person Company (OPC)',
    badge: 'Solo Founders',
    rating: 4.8,
    reviewsCount: 1140,
    price: 1999,
    originalPrice: 3999,
    govtFeeNote: '+ State Stamp Duty & RoC Fee',
    turnaround: '7 - 10 Working Days',
    shortDesc: 'Enjoy 100% single-handed ownership with full corporate limited liability. Perfect for solo entrepreneurs.',
    longDesc: 'Introduced by the Companies Act 2013, an OPC allows a single promoter to create a separate corporate entity while designating one nominee director in case of death or incapacity.',
    deliverables: [
      '1 Director DSC + 1 Nominee Consent processing',
      'DIN for the Director',
      'Name Approval via SPICe+ Part A',
      'e-MoA and e-AoA drafting with Nominee clause',
      'Certificate of Incorporation, PAN & TAN'
    ],
    documentsRequired: [
      'PAN & ID Proof of Director & Nominee',
      'Address Proof (Bank Statement / Electricity Bill)',
      'Consent of Nominee in Form INC-3',
      'Registered Office Proof with Landlord NOC'
    ],
    faqs: [
      {
        q: 'Can an OPC have more than 1 director?',
        a: 'Yes! An OPC can have up to 15 directors, but it can only have 1 shareholder (member).'
      }
    ]
  },
  {
    id: 'section-8',
    category: 'incorporation',
    categoryName: 'Company Registration',
    title: 'Section 8 Company (NGO / Non-Profit)',
    badge: 'Tax Exemption',
    rating: 4.9,
    reviewsCount: 650,
    price: 4999,
    originalPrice: 8999,
    govtFeeNote: '+ Govt License Fee',
    turnaround: '15 - 20 Working Days',
    shortDesc: 'Registered non-profit entity recognized nationwide for CSR funding, charitable grants, and 80G/12A tax exemptions.',
    longDesc: 'A Section 8 Company is registered for promoting commerce, art, science, sports, education, charity, and social welfare, where profits are applied solely toward promoting its objectives.',
    deliverables: [
      'Central Govt License in Form INC-12',
      '2 DSCs and DINs',
      'Special Non-Profit MoA & AoA drafting',
      'Certificate of Incorporation & PAN/TAN'
    ],
    documentsRequired: [
      'PAN & ID proofs of all promoters/directors',
      'Detailed work plan and charitable project description',
      'Estimated 3-year future income & expenditure statement',
      'Registered Office documentation'
    ],
    faqs: [
      {
        q: 'Can Section 8 company founders take salary?',
        a: 'Yes, reasonable remuneration can be paid for bona fide services rendered, subject to MoA clauses and RoC approval guidelines.'
      }
    ]
  },

  // --- Tax & Compliance ---
  {
    id: 'gst-reg',
    category: 'tax',
    categoryName: 'Tax & Compliance',
    title: 'GST Registration Online',
    badge: 'Instant Filing',
    rating: 4.9,
    reviewsCount: 5400,
    price: 499,
    originalPrice: 1499,
    govtFeeNote: 'Govt fees: ₹0 (Free on GST Portal)',
    turnaround: '3 - 5 Working Days',
    shortDesc: 'Mandatory for businesses with turnover > ₹20L/₹40L or engaging in inter-state / e-commerce sales. Get ARN within 24 hours.',
    longDesc: 'Goods and Services Tax (GST) is an essential tax registration required for businesses selling goods or rendering services across India. We ensure 100% accurate HSN/SAC code mapping and zero-error documentation to prevent clarification notices.',
    deliverables: [
      'Drafting and filing GST Form REG-01',
      'HSN / SAC Code mapping by expert CA',
      'Aadhaar Biometric/OTP authentication guidance',
      'ARN Tracking and prompt response to queries',
      'GSTIN Certificate (Form GST REG-06) issuance'
    ],
    documentsRequired: [
      'PAN Card of Business / Proprietor / Directors',
      'Aadhaar Card of Applicant',
      'Electricity Bill / Property Tax receipt of business place',
      'Rent Agreement & Landlord NOC (if rented)',
      'Cancelled Cheque / Bank Statement with IFSC & Account No'
    ],
    faqs: [
      {
        q: 'Who is required to obtain GST registration?',
        a: 'Any business with annual turnover exceeding ₹40 Lakhs for goods (₹20 Lakhs in special category states) or ₹20 Lakhs for services, or anyone selling on Amazon/Flipkart or inter-state.'
      }
    ]
  },
  {
    id: 'gst-return',
    category: 'tax',
    categoryName: 'Tax & Compliance',
    title: 'GST Return Filing (Monthly / Quarterly)',
    badge: 'CA Assisted',
    rating: 4.8,
    reviewsCount: 4120,
    price: 499,
    originalPrice: 1299,
    govtFeeNote: 'Starting per month billing',
    turnaround: 'Same Day Filing',
    shortDesc: 'Flawless GSTR-1 & GSTR-3B filings with automated GSTR-2B Input Tax Credit (ITC) reconciliation. Avoid late fees up to ₹50/day.',
    longDesc: 'Our dedicated indirect tax team prepares and files your monthly/quarterly GST returns, matches B2B inward invoices with suppliers to maximize ITC, and flags discrepancies to prevent notice DRC-01B.',
    deliverables: [
      'GSTR-1 (Outward supplies / Sales)',
      'GSTR-3B (Summary return & tax payment computation)',
      'Automated GSTR-2B ITC reconciliation against purchase registers',
      'Challan generation (PMT-06) and ITC ledger optimization',
      'Quarterly QRMP scheme advisory'
    ],
    documentsRequired: [
      'Sales Register / Invoices for the period',
      'Purchase Register / Supplier bills',
      'GST Portal Login credentials',
      'Bank statement for cross-verification'
    ],
    faqs: [
      {
        q: 'What is the penalty for late GST return filing?',
        a: 'Late fee is ₹50 per day (₹20 per day for NIL returns) plus 18% p.a. interest on unpaid net tax liability.'
      }
    ]
  },
  {
    id: 'itr-filing',
    category: 'tax',
    categoryName: 'Tax & Compliance',
    title: 'Income Tax Return (ITR) Filing',
    badge: 'AY 2025-26 Ready',
    rating: 4.9,
    reviewsCount: 6890,
    price: 799,
    originalPrice: 1999,
    govtFeeNote: 'Dedicated Senior CA Consultation Included',
    turnaround: '24 - 48 Hours',
    shortDesc: 'Maximize your tax refund with our CA-assisted ITR filing. Comparison between Old vs New Tax Regime, Form 16 & AIS/TIS review.',
    longDesc: 'Whether you are a salaried professional with multiple Form 16s, a freelancer with foreign remittances (Sec 44ADA), or an active trader with capital gains across stocks & crypto, TaxsPoint ensures optimal deductions and 100% compliant e-filing.',
    deliverables: [
      'Comprehensive AIS, TIS, and Form 26AS reconciliation',
      'Old vs New Tax Regime optimization report',
      'Filing of ITR-1, ITR-2, ITR-3 or ITR-4',
      'Deductions verification (80C, 80D, HRA, 80E, 80G, 80TTA)',
      'ITR-V Acknowledgment and E-verification assistance'
    ],
    documentsRequired: [
      'PAN & Aadhaar Card (linked)',
      'Form 16 / 16A from employer / deductors',
      'Bank Account details & Interest Certificates',
      'Capital Gains summary report (from Zerodha, Groww, etc.)',
      'Investment proofs for 80C & medical insurance receipts'
    ],
    faqs: [
      {
        q: 'Should I opt for Old or New Tax Regime for FY 2024-25?',
        a: 'The New Regime has standard deduction of ₹75,000 and lower slab rates up to ₹15 Lakhs. If your total deductions (80C, 80D, HRA, Home loan interest) exceed ~₹3.75 Lakhs, Old Regime may save more. Our CA does a direct comparison before filing.'
      }
    ]
  },
  {
    id: 'mca-compliance',
    category: 'tax',
    categoryName: 'Tax & Compliance',
    title: 'Annual ROC Compliance for Pvt Ltd',
    badge: 'All-in-One Retainer',
    rating: 4.9,
    reviewsCount: 2150,
    price: 4999,
    originalPrice: 9999,
    govtFeeNote: '+ RoC Statutory filing fees',
    turnaround: 'Annual Continuous Support',
    shortDesc: 'Avoid heavy penalties of ₹100/day. Includes Form AOC-4, MGT-7, DIR-3 KYC, and statutory registers maintenance.',
    longDesc: 'Every company registered in India must comply with mandatory annual filings with the Registrar of Companies (RoC). TaxsPoint provides a dedicated CS and CA team to prepare financial balance sheets and file statutory annual forms.',
    deliverables: [
      'Filing of Financial Statements (Form AOC-4 / AOC-4 XBRL)',
      'Filing of Annual Return (Form MGT-7 / MGT-7A)',
      'Annual Director KYC (DIR-3 KYC) for 2 Directors',
      'Drafting of Directors\' Report, AGM Minutes & Notices',
      'Statutory Registers maintenance and Board Resolution drafting'
    ],
    documentsRequired: [
      'Audited Balance Sheet & Profit & Loss account',
      'Bank Statements of the financial year',
      'DSC of at least 1 Director and Auditor details'
    ],
    faqs: [
      {
        q: 'What is the penalty if ROC filing is missed?',
        a: 'MCA charges an additional late fee of ₹100 per day per form with no upper ceiling. Non-compliance can also lead to director disqualification.'
      }
    ]
  },

  // --- Trademark & IP ---
  {
    id: 'trademark-reg',
    category: 'ip',
    categoryName: 'Trademark & IP',
    title: 'Trademark (TM) Registration',
    badge: 'Protect Your Brand',
    rating: 4.9,
    reviewsCount: 3890,
    price: 1499,
    originalPrice: 3499,
    govtFeeNote: '+ ₹4,500 Govt fee for Individual/Startup or ₹9,000 for others',
    turnaround: '24 Hours for Filing',
    shortDesc: 'Get the exclusive legal right to use the ™ symbol within 24 hours. Class search, application drafting, and IP India filing.',
    longDesc: 'Protect your brand name, logo, and slogan from competitors and counterfeiters. TaxsPoint trademark attorneys conduct an in-depth phonetic and visual search on the IP India database, choose the right NICE classification, and file Form TM-A with priority protection.',
    deliverables: [
      'Comprehensive Trademark Clearance Search & Class report',
      'Drafting of Form TM-A with goods/services specification',
      'Application filing on the Controller General of Patents, Designs & Trademarks',
      'Official Trademark Application Number & Instant right to use ™ symbol',
      'Regular tracking and email alerts regarding Examination Report'
    ],
    documentsRequired: [
      'Brand Name, Logo / Slogan in high-resolution JPG/PNG',
      'Applicant PAN & Aadhaar (or Certificate of Incorporation & MSME Certificate)',
      'Signed Power of Attorney (Form TM-48) - auto-drafted by us',
      'User Affidavit with earliest proof of usage date (if already in use)'
    ],
    faqs: [
      {
        q: 'When can I start using the ™ and ® symbols?',
        a: 'You can use ™ immediately upon filing the application (within 24 hours). The ® symbol can only be used once the trademark is officially registered and certificate is granted.'
      },
      {
        q: 'How long is a registered trademark valid?',
        a: 'A registered trademark in India is valid for 10 years and can be renewed indefinitely every 10 years.'
      }
    ]
  },
  {
    id: 'tm-objection',
    category: 'ip',
    categoryName: 'Trademark & IP',
    title: 'Trademark Objection Reply',
    badge: 'Legal Defense',
    rating: 4.8,
    reviewsCount: 1420,
    price: 1999,
    originalPrice: 4499,
    govtFeeNote: 'Govt hearing representation extra if required',
    turnaround: '3 - 5 Working Days',
    shortDesc: 'Overcome Section 9 (descriptive) and Section 11 (similarity) objections with a strongly drafted legal reply by an IP Advocate.',
    longDesc: 'Over 60% of trademark applications receive an Examination Report with objections from the Trademark Examiner. If not responded to within 30 days, your application will be marked as Abandoned. Our IP attorneys formulate solid case-law backed replies.',
    deliverables: [
      'Detailed legal analysis of Examiner\'s objections',
      'Drafting formal legal reply under Trade Marks Act 1999',
      'Compilation of supporting evidence, turnover affidavits & invoices',
      'Online submission of reply on the IP India portal'
    ],
    documentsRequired: [
      'Examination Report issued by TMR',
      'Invoices, marketing collateral, website links proving distinctiveness',
      'Original TM Application Number'
    ],
    faqs: [
      {
        q: 'What happens if I miss the 30-day deadline for objection reply?',
        a: 'The Registry will mark your application as "Abandoned". You may file a condonation of delay with valid reasons, but it is best to reply within 30 days.'
      }
    ]
  },
  {
    id: 'copyright-reg',
    category: 'ip',
    categoryName: 'Trademark & IP',
    title: 'Copyright Registration',
    badge: 'IP Security',
    rating: 4.7,
    reviewsCount: 780,
    price: 2999,
    originalPrice: 5999,
    govtFeeNote: '+ Govt fee (₹500 to ₹2,000)',
    turnaround: '15 - 30 Working Days',
    shortDesc: 'Protect software source code, creative artworks, books, musical tracks, and website contents against unauthorized copying.',
    longDesc: 'Copyright provides exclusive legal rights to creators of literary, artistic, and technological works under the Copyright Act 1957. Valid for the lifetime of the author plus 60 years.',
    deliverables: [
      'Form XIV drafting and classification of work',
      'Source code / artistic sample verification & submission',
      'Filing with the Copyright Office, New Delhi',
      'Diary Number generation and response to discrepancies'
    ],
    documentsRequired: [
      '2 copies of original work (or source code in PDF)',
      'NOC from publisher / developer if applicable',
      'Applicant ID and address proofs'
    ],
    faqs: [
      {
        q: 'Can software source code be protected under Indian Copyright Law?',
        a: 'Yes, computer software programs and source code are protected as "Literary Works" under Section 2(o) of the Indian Copyright Act.'
      }
    ]
  },

  // --- Licenses & Approvals ---
  {
    id: 'msme-udyam',
    category: 'licenses',
    categoryName: 'Licenses & Approvals',
    title: 'MSME / Udyam Registration',
    badge: 'Govt Benefits',
    rating: 4.9,
    reviewsCount: 4600,
    price: 499,
    originalPrice: 999,
    govtFeeNote: 'Govt fee: ₹0 (Free on Govt Portal)',
    turnaround: 'Same Day Issuance',
    shortDesc: 'Avail 50% subsidy on patent & trademark fees, collateral-free bank loans (CGTMSE), and protection against delayed payments.',
    longDesc: 'Udyam Registration is the official identification for Micro, Small, and Medium Enterprises issued by the Ministry of MSME. Provides significant subsidies on government tenders and bank interest subventions.',
    deliverables: [
      'Classification under Micro, Small, or Medium criteria',
      'NIC Code selection for all business activities',
      'Filing on the National Udyam Portal',
      'Issuance of official Udyam Certificate with QR verification'
    ],
    documentsRequired: [
      'Aadhaar Card of Applicant / Authorized Signatory',
      'PAN Card of Business or Proprietor',
      'Bank Account Number and IFSC Code',
      'Number of employees and investment in plant/machinery'
    ],
    faqs: [
      {
        q: 'What is the turnover limit for Micro enterprises?',
        a: 'Investment in plant & machinery not exceeding ₹1 Crore and annual turnover not exceeding ₹5 Crores.'
      }
    ]
  },
  {
    id: 'fssai-license',
    category: 'licenses',
    categoryName: 'Licenses & Approvals',
    title: 'FSSAI Food Safety License',
    badge: 'Food Businesses',
    rating: 4.8,
    reviewsCount: 2890,
    price: 999,
    originalPrice: 2499,
    govtFeeNote: '+ Govt statutory license fee',
    turnaround: '3 - 7 Working Days',
    shortDesc: 'Mandatory 14-digit license for restaurants, cloud kitchens, cafes, food manufacturers, caterers, and packaging units.',
    longDesc: 'FSSAI (Food Safety and Standards Authority of India) license ensures the quality and hygiene of food products sold in India. Required for onboarding onto Zomato, Swiggy, and retail shelves.',
    deliverables: [
      'Eligibility assessment (Basic, State, or Central License)',
      'FoSCoS portal application preparation (Form A or Form B)',
      'Food safety management plan & water test report liaison',
      '14-digit FSSAI License Certificate with FoSCoS validity'
    ],
    documentsRequired: [
      'Photo of Food Business Operator',
      'Government ID proof (Aadhaar / Voter ID)',
      'Proof of premises (Electricity bill / Rent deed)',
      'List of food categories & processing equipment'
    ],
    faqs: [
      {
        q: 'Which FSSAI license do I need for a cloud kitchen?',
        a: 'If your annual turnover is under ₹12 Lakhs, a Basic FSSAI Registration suffices (₹100/yr govt fee). For turnover above ₹12 Lakhs, a State License is required.'
      }
    ]
  },
  {
    id: 'iec-code',
    category: 'licenses',
    categoryName: 'Licenses & Approvals',
    title: 'Import Export Code (IEC)',
    badge: 'Global Trade',
    rating: 4.8,
    reviewsCount: 1680,
    price: 999,
    originalPrice: 1999,
    govtFeeNote: '+ ₹500 DGFT Govt Fee',
    turnaround: '24 - 48 Hours',
    shortDesc: '10-digit code issued by DGFT mandatory for exporting goods/services outside India and receiving international payments.',
    longDesc: 'Import Export Code is a lifetime validity registration issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce. Essential for cross-border e-commerce and international wire transfers.',
    deliverables: [
      'Application filing on the DGFT online portal',
      'Bank account authorization validation',
      'Digital Certificate of IEC allotment',
      'Assistance with annual IEC mandatory update'
    ],
    documentsRequired: [
      'PAN Card of entity / applicant',
      'Cancelled cheque leaf / Bank certificate',
      'Address proof of business premise',
      'Active Class 3 DSC or Aadhaar OTP'
    ],
    faqs: [
      {
        q: 'Does IEC have an expiry date?',
        a: 'IEC has lifetime validity. However, DGFT mandates an annual online confirmation/update between April and June every year.'
      }
    ]
  },
  {
    id: 'startup-india',
    category: 'licenses',
    categoryName: 'Licenses & Approvals',
    title: 'Startup India (DPIIT) Recognition',
    badge: 'Tax Holiday 80-IAC',
    rating: 4.9,
    reviewsCount: 1940,
    price: 1999,
    originalPrice: 3999,
    govtFeeNote: 'Govt fee: ₹0 (Free on Govt Portal)',
    turnaround: '5 - 7 Working Days',
    shortDesc: 'Gain recognition under Startup India for 3-year 100% tax holiday (Sec 80-IAC), relaxed tender norms, and capital gains exemptions.',
    longDesc: 'DPIIT recognition unlocks key governmental benefits, including angel tax relief, access to government fund-of-funds, fast-tracked patent applications at 80% rebate, and exemption from prior turnover/experience in public procurement.',
    deliverables: [
      'Innovation pitch deck & problem statement refinement',
      'Application drafting on the Startup India portal',
      'Filing for DPIIT recognition certificate',
      'Guidance on Section 80-IAC Tax Exemption application'
    ],
    documentsRequired: [
      'Certificate of Incorporation (Pvt Ltd or LLP under 10 years old)',
      'Pitch deck explaining innovative product/service and scalability',
      'Website / App link and demo video (if available)',
      'List of awards, grants, or patents (if any)'
    ],
    faqs: [
      {
        q: 'Can a Partnership firm or Proprietorship get DPIIT recognition?',
        a: 'Only Private Limited Companies, LLPs, and Registered Partnership Firms are eligible for DPIIT recognition.'
      }
    ]
  }
];
