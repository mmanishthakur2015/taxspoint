<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($title) ? $title : 'TaxsPoint | Next-Gen AI Legal & Tax Advisory Platform'; ?></title>
    <meta name="description" content="TaxsPoint — India's premier AI-enabled legal & tax tech ecosystem. 100% online company registration, ITR e-filing, GST returns, and trademark protection.">
    <link rel="icon" type="image/png" href="<?php echo base_url('assets/images/taxspoint-logo.png'); ?>">

    <!-- Google Fonts: Space Grotesk & Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        obsidian: {
                            DEFAULT: '#060d17',
                            dark: '#03070d',
                            light: '#0c192c',
                            card: '#11223b'
                        },
                        sapphire: {
                            50: '#eff6ff',
                            100: '#dbeafe',
                            400: '#60a5fa',
                            500: '#3b82f6',
                            600: '#2563eb',
                            700: '#1d4ed8',
                        },
                        emeraldGlow: {
                            DEFAULT: '#10b981',
                            dark: '#059669',
                            light: '#34d399',
                            bg: '#ecfdf5'
                        }
                    },
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <!-- Confetti & Lucide CDN -->
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
    <script src="https://unpkg.com/lucide@latest"></script>

    <style>
        .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
        }
        .mesh-gradient {
            background: radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.08) 0%, transparent 40%),
                        radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 40%);
        }
    </style>
</head>
<body class="bg-[#f8fafc] text-slate-900 antialiased font-sans flex flex-col min-h-screen selection:bg-emerald-500 selection:text-white">

<!-- Top Live Ticker Strip -->
<div class="bg-obsidian text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2">
            <span class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500 text-slate-950 uppercase tracking-wide">
                Live
            </span>
            <span class="text-slate-300 font-medium hidden sm:inline">
                🟢 MCA V3 Active • 140+ Filings Processed Today • Zero Office Visits Needed
            </span>
            <span class="text-slate-300 sm:hidden">
                TaxsPoint AI Legaltech Portal
            </span>
        </div>

        <div class="flex items-center gap-4 text-[11px]">
            <a href="tel:+918447746183" class="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition font-semibold">
                <i data-lucide="phone" class="w-3.5 h-3.5 text-emerald-400"></i>
                <span>+91 84477 46183</span>
            </a>
            <div class="hidden md:flex items-center gap-1.5 text-slate-400">
                <i data-lucide="mail" class="w-3.5 h-3.5 text-blue-400"></i>
                <span>mmanishthakur2015@gmail.com</span>
            </div>
            <div class="flex items-center gap-1 text-emerald-400 font-bold pl-2 border-l border-slate-700">
                <span>★ 4.98/5</span>
                <span class="text-slate-400 font-normal hidden lg:inline">(50k+ Founders)</span>
            </div>
        </div>
    </div>
</div>

<!-- Main Header -->
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
            <!-- Brand Logo -->
            <a href="<?php echo site_url(); ?>" class="flex items-center gap-3 group">
                <img src="<?php echo base_url('assets/images/taxspoint-logo.png'); ?>" alt="TaxsPoint Logo" class="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105">
            </a>

            <!-- Navigation Links -->
            <nav class="hidden xl:flex items-center gap-1 text-[14px] font-semibold text-slate-700">
                <a href="<?php echo site_url('services?category=incorporation'); ?>" class="px-3.5 py-2 rounded-xl hover:text-blue-600 hover:bg-blue-50/70 transition">
                    Company Formation
                </a>
                <a href="<?php echo site_url('services?category=tax'); ?>" class="px-3.5 py-2 rounded-xl hover:text-blue-600 hover:bg-blue-50/70 transition">
                    Tax & GST Filings
                </a>
                <a href="<?php echo site_url('services?category=ip'); ?>" class="px-3.5 py-2 rounded-xl hover:text-blue-600 hover:bg-blue-50/70 transition">
                    Trademark & IP
                </a>
                <a href="<?php echo site_url('calculators'); ?>" class="flex items-center gap-1.5 px-3.5 py-2 rounded-xl hover:text-blue-600 hover:bg-blue-50/70 transition">
                    <span>Calculators</span>
                    <span class="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full">Free</span>
                </a>
                
                <!-- 5 AI Alternative Agents -->
                <a href="<?php echo site_url('ai-agents'); ?>" class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-obsidian to-obsidian-card text-white hover:opacity-95 font-semibold shadow-md transition">
                    <i data-lucide="bot" class="w-4 h-4 text-emerald-400"></i>
                    <span>5 AI Advisors</span>
                    <span class="flex h-2 w-2 relative">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                </a>

                <a href="<?php echo site_url('track'); ?>" class="flex items-center gap-1.5 px-3.5 py-2 rounded-xl hover:text-blue-600 hover:bg-slate-50 transition text-slate-600">
                    <i data-lucide="compass" class="w-4 h-4 text-blue-600"></i>
                    <span>Live Tracker</span>
                </a>
            </nav>

            <!-- Right Buttons -->
            <div class="flex items-center gap-2 sm:gap-3">
                <a href="<?php echo site_url('admin'); ?>" class="hidden md:flex items-center gap-1 text-xs px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition">
                    <i data-lucide="command" class="w-3.5 h-3.5 text-slate-600"></i>
                    <span>Admin</span>
                </a>

                <button onclick="openLeadModal('Priority Consultation')" class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25 transition-all">
                    <i data-lucide="sparkles" class="w-4 h-4 text-amber-300"></i>
                    <span>Talk to CA</span>
                </button>

                <!-- Mobile Menu Button -->
                <button onclick="toggleMobileMenu()" class="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Dropdown -->
    <div id="mobile-menu" class="hidden xl:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-2xl">
        <div class="grid grid-cols-2 gap-2 text-sm font-semibold">
            <a href="<?php echo site_url('services?category=incorporation'); ?>" class="p-3 rounded-xl bg-slate-50 text-slate-800">
                Company Reg
            </a>
            <a href="<?php echo site_url('services?category=tax'); ?>" class="p-3 rounded-xl bg-slate-50 text-slate-800">
                Tax & GST
            </a>
            <a href="<?php echo site_url('services?category=ip'); ?>" class="p-3 rounded-xl bg-slate-50 text-slate-800">
                Trademark & IP
            </a>
            <a href="<?php echo site_url('calculators'); ?>" class="p-3 rounded-xl bg-slate-50 text-slate-800">
                Tax Calculators
            </a>
        </div>

        <div class="space-y-2 pt-2 border-t border-slate-100">
            <a href="<?php echo site_url('ai-agents'); ?>" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-obsidian text-white font-bold">
                <div class="flex items-center gap-2">
                    <i data-lucide="bot" class="w-5 h-5 text-emerald-400"></i>
                    <span>5 AI Alternative Specialists</span>
                </div>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>

            <a href="<?php echo site_url('track'); ?>" class="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 text-slate-800 font-semibold">
                <span>Application Tracker & Vault</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-slate-400"></i>
            </a>

            <button onclick="openLeadModal('Mobile Talk to CA')" class="w-full py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-center shadow-lg">
                Speak to Senior CA Now
            </button>
        </div>
    </div>
</header>
<main class="flex-1 mesh-gradient">
