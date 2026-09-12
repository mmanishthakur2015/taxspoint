-- ========================================================================
-- TaxsPoint - Income Tax Filing & Legal Consulting Database Schema
-- Compatible with MySQL 5.7+ / 8.0+ & MariaDB (phpMyAdmin Import Ready)
-- ========================================================================

CREATE DATABASE IF NOT EXISTS `taxspoint` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `taxspoint`;

-- Table 1: services
DROP TABLE IF EXISTS `services`;
CREATE TABLE `services` (
  `id` VARCHAR(50) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  `category_name` VARCHAR(100) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `badge` VARCHAR(50) DEFAULT NULL,
  `rating` DECIMAL(2,1) DEFAULT '4.9',
  `reviews_count` INT(11) DEFAULT '1000',
  `price` INT(11) NOT NULL,
  `original_price` INT(11) NOT NULL,
  `govt_fee_note` VARCHAR(255) DEFAULT NULL,
  `turnaround` VARCHAR(100) NOT NULL,
  `short_desc` TEXT NOT NULL,
  `long_desc` LONGTEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `services` (`id`, `category`, `category_name`, `title`, `badge`, `rating`, `reviews_count`, `price`, `original_price`, `govt_fee_note`, `turnaround`, `short_desc`, `long_desc`) VALUES
('pvt-ltd', 'incorporation', 'Company Registration', 'Private Limited Company Registration', 'Most Popular', 4.9, 3240, 1999, 4999, '+ Govt fees & Stamp Duty as applicable', '7 - 10 Working Days', 'The gold standard for startups and growing businesses in India.', 'Private Limited Company is the most popular corporate legal structure in India.'),
('llp-reg', 'incorporation', 'Company Registration', 'Limited Liability Partnership (LLP)', 'Low Compliance', 4.8, 1820, 1499, 3499, '+ State Stamp Duty', '8 - 12 Working Days', 'Combines partnership flexibility with corporate limited liability.', 'An LLP is ideal for professional services firms and agencies.'),
('opc-reg', 'incorporation', 'Company Registration', 'One Person Company (OPC)', 'Solo Founders', 4.8, 1140, 1999, 3999, '+ State Stamp Duty', '7 - 10 Working Days', 'Enjoy 100% single-handed ownership with full corporate limited liability.', 'Allows a single promoter to create a separate corporate entity.'),
('section-8', 'incorporation', 'Company Registration', 'Section 8 Company (NGO / Non-Profit)', 'Tax Exemption', 4.9, 650, 4999, 8999, '+ Govt License Fee', '15 - 20 Working Days', 'Registered non-profit entity recognized nationwide for CSR funding.', 'Promoting art, science, education, charity, and social welfare.'),
('gst-reg', 'tax', 'Tax & Compliance', 'GST Registration Online', 'Instant Filing', 4.9, 5400, 499, 1499, 'Govt fees: ₹0', '3 - 5 Working Days', 'Mandatory for turnover > ₹20L/₹40L or inter-state sales.', 'Essential tax registration for businesses in India.'),
('gst-return', 'tax', 'Tax & Compliance', 'GST Return Filing (Monthly / Quarterly)', 'CA Assisted', 4.8, 4120, 499, 1299, 'Starting per month', 'Same Day Filing', 'Flawless GSTR-1 & GSTR-3B filings with GSTR-2B ITC reconciliation.', 'Dedicated indirect tax team prepares and files your monthly returns.'),
('itr-filing', 'tax', 'Tax & Compliance', 'Income Tax Return (ITR) Filing', 'AY 2025-26 Ready', 4.9, 6890, 799, 1999, 'Senior CA Support Included', '24 - 48 Hours', 'Maximize tax refunds with CA-assisted comparison between Old vs New regime.', 'AIS, TIS, and Form 26AS review included.'),
('trademark-reg', 'ip', 'Trademark & IP', 'Trademark (TM) Registration', 'Protect Your Brand', 4.9, 3890, 1499, 3499, '+ ₹4,500 Govt Fee for MSME', '24 Hours for Filing', 'Get exclusive right to use ™ symbol within 24 hours.', 'Protect brand name, logo, and slogan nationwide.'),
('msme-udyam', 'licenses', 'Licenses & Approvals', 'MSME / Udyam Registration', 'Govt Benefits', 4.9, 4600, 499, 999, 'Govt fee: ₹0', 'Same Day Issuance', 'Avail 50% subsidy on patent & trademark fees and bank loans.', 'Official identification for Micro, Small, and Medium Enterprises.'),
('startup-india', 'licenses', 'Licenses & Approvals', 'Startup India (DPIIT) Recognition', 'Tax Holiday 80-IAC', 4.9, 1940, 1999, 3999, 'Govt fee: ₹0', '5 - 7 Working Days', 'Gain recognition under Startup India for 3-year 100% tax holiday.', 'Unlocks angel tax relief and fast-tracked patent applications.');

-- Table 2: leads
DROP TABLE IF EXISTS `leads`;
CREATE TABLE `leads` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `lead_code` VARCHAR(50) NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(25) NOT NULL,
  `email` VARCHAR(150) DEFAULT NULL,
  `service` VARCHAR(150) NOT NULL,
  `city` VARCHAR(100) DEFAULT NULL,
  `status` VARCHAR(50) DEFAULT 'Callback Scheduled',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `leads` (`lead_code`, `name`, `phone`, `email`, `service`, `city`, `status`) VALUES
('LEAD-101', 'Gaurav Singhal', '+91 98102 39401', 'gaurav@singhalexports.com', 'Private Limited Company Registration', 'Delhi', 'Callback Scheduled'),
('LEAD-102', 'Sunita Raman', '+91 97401 23894', 'sunita@edunext.ai', 'Trademark Registration', 'Bengaluru', 'New Inquiry'),
('LEAD-103', 'Harpreet Singh', '+91 98881 23456', 'harpreet@punjabagro.in', 'GST Registration', 'Chandigarh', 'Consultation Complete');

-- Table 3: orders
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `order_id` VARCHAR(50) NOT NULL,
  `customer_name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(25) NOT NULL,
  `service_title` VARCHAR(255) NOT NULL,
  `amount` INT(11) NOT NULL,
  `status` VARCHAR(50) NOT NULL,
  `current_stage` INT(2) DEFAULT '1',
  `assigned_ca` VARCHAR(100) DEFAULT 'CA Rajesh Sharma',
  `notes` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `order_id` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `orders` (`order_id`, `customer_name`, `email`, `phone`, `service_title`, `amount`, `status`, `current_stage`, `assigned_ca`, `notes`) VALUES
('TP-92841', 'Rohit Kulkarni', 'rohit@techventures.io', '+91 98201 47291', 'Private Limited Company Registration', 1999, 'In MCA Filing', 3, 'CA Rajesh Sharma', 'SPICe+ Part B uploaded. Awaiting ROC verification certificate.'),
('TP-84192', 'Pooja Aggarwal', 'pooja@bloomfabrics.com', '+91 98112 55319', 'GST Registration Online', 499, 'Approved & Active', 4, 'Vikram Singhania', 'GSTIN issued: 07AABCB1234F1Z5. Certificate ready in vault.'),
('TP-77103', 'Vikramaditya Deshmukh', 'vikram@deshmukhagro.in', '+91 97234 88120', 'Trademark (TM) Registration', 1499, 'Document Verification', 1, 'Adv. Sneha Mukherjee', 'Verifying TM-48 Power of Attorney and User Affidavit proofs.');

-- Table 4: ai_agents
DROP TABLE IF EXISTS `ai_agents`;
CREATE TABLE `ai_agents` (
  `id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `handle` VARCHAR(50) NOT NULL,
  `role` VARCHAR(150) NOT NULL,
  `title` VARCHAR(150) NOT NULL,
  `experience` VARCHAR(100) NOT NULL,
  `avatar` VARCHAR(10) NOT NULL,
  `badge` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `ai_agents` (`id`, `name`, `handle`, `role`, `title`, `experience`, `avatar`, `badge`, `description`) VALUES
('tax-bot', 'CA Rajesh Sharma', '@taxbot', 'Tax & ITR Advisory Specialist', 'Senior Chartered Accountant (FCA)', '14+ Years Experience (Ex-EY)', '👨‍💼', 'Direct Tax Expert', 'Expert in Income Tax Act 1961, Section 115BAC (Old vs New Regime), Presumptive Taxation (44AD/44ADA), Capital Gains.'),
('corp-bot', 'Adv. Priya Nair', '@corpbot', 'MCA Incorporation & Corporate Law Specialist', 'High Court Advocate & MCA Specialist', '11+ Years Experience', '👩‍⚖️', 'Company Formation Pro', 'Specializes in Company Law, SPICe+ Part A & B filings, LLP incorporation, Director DIN/DSC regulations.'),
('gst-bot', 'Vikram Singhania', '@gstbot', 'GST & Indirect Tax Specialist', 'Indirect Tax Consultant & Ex-CBIC Advisor', '12+ Years Experience', '👨‍💻', 'GST Compliance Pro', 'Specializes in GST Registration (REG-01), Input Tax Credit (ITC) reconciliation with GSTR-2B, Export LUT Form RFD-11.'),
('ip-bot', 'Adv. Sneha Mukherjee', '@ipbot', 'Intellectual Property & Trademark Attorney', 'Registered Trademark & Patent Attorney', '10+ Years Experience', '👩‍💼', 'IP & Brand Protection', 'Expert in Trademark Search, NICE Classification (Classes 1 to 45), Filing Form TM-A, overcoming Section 9 & 11 objections.'),
('startup-bot', 'Rohan Mehta', '@startupbot', 'Startup Legal & Fundraising Counsel', 'Venture Legal Counsel & Startup Mentor', '9+ Years Experience', '👨‍🔬', 'Fundraising & Venture Law', 'Specializes in Founders Agreements, Equity Vesting & Cliffs, DPIIT Startup India Recognition, Section 80-IAC.');
