// Helper to calculate Indian Income Tax for FY 2024-25 (AY 2025-26)
export function calculateIncomeTax({
  annualIncome = 0,
  regime = 'new', // 'new' or 'old'
  isSalaried = true,
  deduction80C = 0,
  deduction80D = 0,
  hraDeduction = 0,
  homeLoanInterest = 0,
  otherDeductions = 0
}) {
  const income = Math.max(0, Number(annualIncome) || 0);

  if (regime === 'new') {
    // New Tax Regime (Budget 2024-25)
    // Standard deduction for salaried is ₹75,000
    const standardDeduction = isSalaried ? 75000 : 0;
    const netTaxableIncome = Math.max(0, income - standardDeduction);

    let tax = 0;
    // Slabs:
    // 0 - 3,00,000: Nil
    // 3,00,001 - 7,00,000: 5%
    // 7,00,001 - 10,00,000: 10%
    // 10,00,001 - 12,00,000: 15%
    // 12,00,001 - 15,00,000: 20%
    // Above 15,00,000: 30%

    if (netTaxableIncome > 1500000) {
      tax += (netTaxableIncome - 1500000) * 0.30;
      tax += 300000 * 0.20; // 12L to 15L = 60,000
      tax += 200000 * 0.15; // 10L to 12L = 30,000
      tax += 300000 * 0.10; // 7L to 10L = 30,000
      tax += 400000 * 0.05; // 3L to 7L = 20,000
    } else if (netTaxableIncome > 1200000) {
      tax += (netTaxableIncome - 1200000) * 0.20;
      tax += 200000 * 0.15;
      tax += 300000 * 0.10;
      tax += 400000 * 0.05;
    } else if (netTaxableIncome > 1000000) {
      tax += (netTaxableIncome - 1000000) * 0.15;
      tax += 300000 * 0.10;
      tax += 400000 * 0.05;
    } else if (netTaxableIncome > 700000) {
      tax += (netTaxableIncome - 700000) * 0.10;
      tax += 400000 * 0.05;
    } else if (netTaxableIncome > 300000) {
      tax += (netTaxableIncome - 300000) * 0.05;
    }

    // Section 87A Rebate: Under New Regime, if taxable income <= 7,00,000, rebate is full tax (up to ₹25,000)
    let rebate87A = 0;
    if (netTaxableIncome <= 700000) {
      rebate87A = tax;
      tax = 0;
    }

    const cess = tax * 0.04;
    const totalTax = Math.round(tax + cess);

    return {
      grossIncome: income,
      standardDeduction,
      totalDeductions: standardDeduction,
      netTaxableIncome,
      basicTax: Math.round(tax),
      rebate87A: Math.round(rebate87A),
      cess: Math.round(cess),
      totalTax
    };
  } else {
    // Old Tax Regime
    const standardDeduction = isSalaried ? 50000 : 0;
    const capped80C = Math.min(150000, Math.max(0, Number(deduction80C) || 0));
    const capped80D = Math.min(100000, Math.max(0, Number(deduction80D) || 0));
    const cappedHomeLoan = Math.min(200000, Math.max(0, Number(homeLoanInterest) || 0));
    const cappedHRA = Math.max(0, Number(hraDeduction) || 0);
    const cappedOther = Math.max(0, Number(otherDeductions) || 0);

    const totalDeductions = standardDeduction + capped80C + capped80D + cappedHomeLoan + cappedHRA + cappedOther;
    const netTaxableIncome = Math.max(0, income - totalDeductions);

    let tax = 0;
    // Slabs:
    // 0 - 2,50,000: Nil
    // 2,50,001 - 5,00,000: 5%
    // 5,00,001 - 10,00,000: 20%
    // Above 10,00,000: 30%

    if (netTaxableIncome > 1000000) {
      tax += (netTaxableIncome - 1000000) * 0.30;
      tax += 500000 * 0.20; // 1,00,000
      tax += 250000 * 0.05; // 12,500
    } else if (netTaxableIncome > 500000) {
      tax += (netTaxableIncome - 500000) * 0.20;
      tax += 250000 * 0.05;
    } else if (netTaxableIncome > 250000) {
      tax += (netTaxableIncome - 250000) * 0.05;
    }

    // Section 87A Rebate in Old Regime: If taxable income <= 5,00,000, full rebate up to ₹12,500
    let rebate87A = 0;
    if (netTaxableIncome <= 500000) {
      rebate87A = tax;
      tax = 0;
    }

    const cess = tax * 0.04;
    const totalTax = Math.round(tax + cess);

    return {
      grossIncome: income,
      standardDeduction,
      totalDeductions,
      netTaxableIncome,
      basicTax: Math.round(tax),
      rebate87A: Math.round(rebate87A),
      cess: Math.round(cess),
      totalTax
    };
  }
}

// GST Calculator
export function calculateGST({ amount = 0, rate = 18, type = 'exclusive' }) {
  const amt = Math.max(0, Number(amount) || 0);
  const gstRate = Number(rate) || 18;

  if (type === 'exclusive') {
    const gstAmount = (amt * gstRate) / 100;
    const totalAmount = amt + gstAmount;
    return {
      baseAmount: Math.round(amt),
      gstAmount: Math.round(gstAmount),
      totalAmount: Math.round(totalAmount),
      cgst: Math.round(gstAmount / 2),
      sgst: Math.round(gstAmount / 2),
      igst: Math.round(gstAmount)
    };
  } else {
    // Inclusive
    const baseAmount = amt / (1 + gstRate / 100);
    const gstAmount = amt - baseAmount;
    return {
      baseAmount: Math.round(baseAmount),
      gstAmount: Math.round(gstAmount),
      totalAmount: Math.round(amt),
      cgst: Math.round(gstAmount / 2),
      sgst: Math.round(gstAmount / 2),
      igst: Math.round(gstAmount)
    };
  }
}

// MCA Name Checker Simulation
export function checkMcaNameAvailability(name) {
  if (!name || name.trim().length < 3) {
    return {
      status: 'idle',
      message: 'Enter at least 3 characters to check MCA availability.'
    };
  }

  const cleanName = name.trim().toLowerCase();
  const forbiddenWords = ['bharat', 'india', 'national', 'union', 'federal', 'reserve', 'hindustan', 'court', 'statutory', 'governance'];
  const genericWords = ['enterprises', 'solutions', 'technologies', 'consultancy', 'holdings', 'services', 'systems', 'group'];

  // Check forbidden
  for (const word of forbiddenWords) {
    if (cleanName.includes(word) && !cleanName.includes('pv') && !cleanName.includes('llp')) {
      return {
        status: 'restricted',
        score: 40,
        verdict: 'Restricted / Central Government Prior Approval Required',
        reason: `The name contains '${word}', which is restricted under Rule 8 of Companies (Incorporation) Rules without Central Govt sanction.`,
        recommendation: 'Use a unique coined prefix like "Zylor" or "TaxsPoint" before adding your activity.'
      };
    }
  }

  // Check common generic
  const parts = cleanName.split(/\s+/);
  if (parts.length === 1 && genericWords.includes(parts[0])) {
    return {
      status: 'rejected',
      score: 30,
      verdict: 'High Likelihood of Rejection',
      reason: 'The proposed name is too generic and lacks a distinctive coined or personal prefix.',
      recommendation: 'Combine a unique coined word with an activity suffix (e.g., "TaxsPoint Legal Solutions").'
    };
  }

  // Unique name score calculation
  const score = Math.min(98, 75 + (cleanName.length % 20));
  return {
    status: 'available',
    score: score,
    verdict: 'High Likelihood of Approval (Available)',
    reason: `"${name}" appears distinctive and conforms to Rule 8(2) of the Companies Act 2013.`,
    recommendation: 'We recommend reserving this name immediately via MCA SPICe+ Part A to lock priority!'
  };
}

// Initial Sample Inquiries & Orders for LocalStorage
export const initialOrders = [
  {
    orderId: 'TP-92841',
    customerName: 'Rohit Kulkarni',
    email: 'rohit@techventures.io',
    phone: '+91 98201 47291',
    serviceTitle: 'Private Limited Company Registration',
    amount: 1999,
    status: 'In MCA Filing',
    date: '10 Sep 2024',
    currentStage: 3, // 0: Form, 1: KYC, 2: DSC, 3: MCA Filing, 4: Approved
    assignedCA: 'CA Rajesh Sharma',
    notes: 'SPICe+ Part B uploaded. Awaiting ROC verification certificate.'
  },
  {
    orderId: 'TP-84192',
    customerName: 'Pooja Aggarwal',
    email: 'pooja@bloomfabrics.com',
    phone: '+91 98112 55319',
    serviceTitle: 'GST Registration Online',
    amount: 499,
    status: 'Approved & Active',
    date: '05 Sep 2024',
    currentStage: 4,
    assignedCA: 'Vikram Singhania',
    notes: 'GSTIN issued: 07AABCB1234F1Z5. Certificate ready in vault.'
  },
  {
    orderId: 'TP-77103',
    customerName: 'Vikramaditya Deshmukh',
    email: 'vikram@deshmukhagro.in',
    phone: '+91 97234 88120',
    serviceTitle: 'Trademark (TM) Registration',
    amount: 1499,
    status: 'Document Verification',
    date: '11 Sep 2024',
    currentStage: 1,
    assignedCA: 'Adv. Sneha Mukherjee',
    notes: 'Verifying TM-48 Power of Attorney and User Affidavit proofs.'
  }
];

// Helper to get / set LocalStorage safely
export function getStoredData(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    return fallback;
  }
}

export function setStoredData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn('LocalStorage save failed:', e);
  }
}
