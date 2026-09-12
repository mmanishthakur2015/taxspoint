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
                        myntra: {
                            DEFAULT: '#ff3f6c',
                            hover: '#e7335d',
                            dark: '#c21e45',
                            light: '#fff0f4',
                            50: '#fff1f4',
                            100: '#ffe4e8',
                            200: '#fecdd6',
                            300: '#fda4b4',
                            400: '#fb718b',
                            500: '#ff3f6c',
                            600: '#e7335d',
                            700: '#c21e45',
                            800: '#9f1d3c',
                            900: '#841c36',
                            sunset: '#ff905a',
                            coral: '#ff527b',
                            teal: '#03a685'
                        },
                        charcoal: {
                            DEFAULT: '#282c3f',
                            dark: '#1e212f',
                            light: '#3e4152',
                            card: '#2c3044',
                            muted: '#535766',
                            subtle: '#94969f'
                        },
                        // Map legacy obsidian tokens to Myntra's deep charcoal palette
                        obsidian: {
                            DEFAULT: '#282c3f',
                            dark: '#1e212f',
                            light: '#353a4e',
                            card: '#2e3347'
                        },
                        // Map sapphire tokens to Myntra vibrant pink & coral
                        sapphire: {
                            50: '#fff1f4',
                            100: '#ffe4e8',
                            400: '#fb718b',
                            500: '#ff527b',
                            600: '#ff3f6c',
                            700: '#e7335d',
                        },
                        // Map emeraldGlow to Myntra's official trust teal/green
                        emeraldGlow: {
                            DEFAULT: '#03a685',
                            dark: '#028569',
                            light: '#10b981',
                            bg: '#e8fbf6'
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
            background: rgba(255, 255, 255, 0.96);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
        }
        .mesh-gradient {
            background: radial-gradient(circle at 10% 20%, rgba(255, 63, 108, 0.05) 0%, transparent 40%),
                        radial-gradient(circle at 90% 80%, rgba(3, 166, 133, 0.05) 0%, transparent 40%),
                        radial-gradient(circle at 50% 50%, rgba(255, 144, 90, 0.03) 0%, transparent 50%);
        }
        .btn-myntra-gradient {
            background: linear-gradient(90deg, #ff3f6c 0%, #ff527b 50%, #ff905a 100%);
        }
        .btn-myntra-gradient:hover {
            box-shadow: 0 10px 25px -4px rgba(255, 63, 108, 0.35);
        }
    </style>
</head>
<body class="bg-[#f5f5f6] text-[#282c3f] antialiased font-sans flex flex-col min-h-screen selection:bg-[#ff3f6c] selection:text-white">

<!-- Top Live Ticker Strip (Myntra Charcoal with Pink & Trust Green Accents) -->
<div class="bg-[#282c3f] text-slate-200 text-xs py-2 px-4 border-b border-[#353a4e]">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2">
            <span class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-black bg-[#ff3f6c] text-white uppercase tracking-wider shadow-sm">
                Live
            </span>
            <span class="text-slate-200 font-medium hidden sm:inline">
                <span class="text-[#03a685]">●</span> MCA V3 Active • 140+ Filings Processed Today • Zero Office Visits Needed
            </span>
            <span class="text-slate-200 sm:hidden">
                TaxsPoint Legaltech Portal
            </span>
        </div>

        <div class="flex items-center gap-4 text-[11px]">
            <a href="tel:+918447746183" class="flex items-center gap-1.5 text-slate-200 hover:text-[#ff3f6c] transition font-semibold">
                <i data-lucide="phone" class="w-3.5 h-3.5 text-[#ff3f6c]"></i>
                <span>+91 84477 46183</span>
            </a>
            <div class="hidden md:flex items-center gap-1.5 text-slate-300">
                <i data-lucide="mail" class="w-3.5 h-3.5 text-[#ff527b]"></i>
                <span>mmanishthakur2015@gmail.com</span>
            </div>
            <div class="flex items-center gap-1 text-[#03a685] font-bold pl-2 border-l border-slate-600">
                <span>★ 4.98/5</span>
                <span class="text-slate-300 font-normal hidden lg:inline">(50k+ Founders)</span>
            </div>
        </div>
    </div>
</div>

<!-- Main Header -->
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
            <!-- Brand Logo -->
            <a href="<?php echo site_url(); ?>" class="flex items-center gap-3 group">
                <img src="<?php echo base_url('assets/images/taxspoint-logo.png'); ?>" alt="TaxsPoint Logo" class="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105">
            </a>

            <!-- Navigation Links -->
            <nav class="hidden xl:flex items-center gap-1 text-[14px] font-semibold text-[#282c3f]">
                <a href="<?php echo site_url('services?category=incorporation'); ?>" class="px-3.5 py-2 rounded-xl hover:text-[#ff3f6c] hover:bg-[#fff1f4] transition">
                    Company Formation
                </a>
                <a href="<?php echo site_url('services?category=tax'); ?>" class="px-3.5 py-2 rounded-xl hover:text-[#ff3f6c] hover:bg-[#fff1f4] transition">
                    Tax & GST Filings
                </a>
                <a href="<?php echo site_url('services?category=ip'); ?>" class="px-3.5 py-2 rounded-xl hover:text-[#ff3f6c] hover:bg-[#fff1f4] transition">
                    Trademark & IP
                </a>
                <a href="<?php echo site_url('calculators'); ?>" class="flex items-center gap-1.5 px-3.5 py-2 rounded-xl hover:text-[#ff3f6c] hover:bg-[#fff1f4] transition">
                    <span>Calculators</span>
                    <span class="text-[10px] font-bold bg-[#fff1f4] text-[#ff3f6c] px-1.5 py-0.5 rounded-full border border-[#ffe4e8]">Free</span>
                </a>
                
                <!-- 5 AI Alternative Agents -->
                <a href="<?php echo site_url('ai-agents'); ?>" class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#282c3f] to-[#3a3f55] text-white hover:opacity-95 font-semibold shadow-md transition border border-[#ff3f6c]/30 hover:border-[#ff3f6c]">
                    <i data-lucide="bot" class="w-4 h-4 text-[#ff527b]"></i>
                    <span>5 AI Advisors</span>
                    <span class="flex h-2 w-2 relative">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3f6c] opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-[#ff3f6c]"></span>
                    </span>
                </a>

                <a href="<?php echo site_url('track'); ?>" class="flex items-center gap-1.5 px-3.5 py-2 rounded-xl hover:text-[#ff3f6c] hover:bg-[#fff1f4] transition text-[#535766]">
                    <i data-lucide="compass" class="w-4 h-4 text-[#ff3f6c]"></i>
                    <span>Live Tracker</span>
                </a>
            </nav>

            <!-- Right Buttons -->
            <div class="flex items-center gap-2 sm:gap-3">
                <a href="<?php echo site_url('admin'); ?>" class="hidden md:flex items-center gap-1 text-xs px-3.5 py-2 rounded-xl bg-[#f5f5f6] hover:bg-[#eaeaec] text-[#282c3f] font-semibold transition border border-[#eaeaec]">
                    <i data-lucide="command" class="w-3.5 h-3.5 text-[#535766]"></i>
                    <span>Admin</span>
                </a>

                <button onclick="openLeadModal('Priority Consultation')" class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#ff3f6c] hover:bg-[#e7335d] text-white shadow-lg shadow-[#ff3f6c]/25 transition-all transform active:scale-95">
                    <i data-lucide="sparkles" class="w-4 h-4 text-[#ff905a]"></i>
                    <span>Talk to CA</span>
                </button>

                <!-- Mobile Menu Button -->
                <button onclick="toggleMobileMenu()" class="xl:hidden p-2 rounded-xl text-[#282c3f] hover:bg-[#f5f5f6]">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Dropdown -->
    <div id="mobile-menu" class="hidden xl:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-2xl">
        <div class="grid grid-cols-2 gap-2 text-sm font-semibold">
            <a href="<?php echo site_url('services?category=incorporation'); ?>" class="p-3 rounded-xl bg-[#f5f5f6] text-[#282c3f] hover:text-[#ff3f6c]">
                Company Reg
            </a>
            <a href="<?php echo site_url('services?category=tax'); ?>" class="p-3 rounded-xl bg-[#f5f5f6] text-[#282c3f] hover:text-[#ff3f6c]">
                Tax & GST
            </a>
            <a href="<?php echo site_url('services?category=ip'); ?>" class="p-3 rounded-xl bg-[#f5f5f6] text-[#282c3f] hover:text-[#ff3f6c]">
                Trademark & IP
            </a>
            <a href="<?php echo site_url('calculators'); ?>" class="p-3 rounded-xl bg-[#f5f5f6] text-[#282c3f] hover:text-[#ff3f6c]">
                Tax Calculators
            </a>
        </div>

        <div class="space-y-2 pt-2 border-t border-slate-100">
            <a href="<?php echo site_url('ai-agents'); ?>" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#282c3f] text-white font-bold border border-[#ff3f6c]/30">
                <div class="flex items-center gap-2">
                    <i data-lucide="bot" class="w-5 h-5 text-[#ff527b]"></i>
                    <span>5 AI Alternative Specialists</span>
                </div>
                <i data-lucide="arrow-right" class="w-4 h-4 text-[#ff3f6c]"></i>
            </a>

            <a href="<?php echo site_url('track'); ?>" class="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 text-[#282c3f] font-semibold hover:bg-[#fff1f4]">
                <span>Application Tracker & Vault</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-slate-400"></i>
            </a>

            <button onclick="openLeadModal('Mobile Talk to CA')" class="w-full py-3.5 rounded-xl bg-[#ff3f6c] hover:bg-[#e7335d] text-white font-bold text-center shadow-lg shadow-[#ff3f6c]/30">
                Speak to Senior CA Now
            </button>
        </div>
    </div>
</header>
<main class="flex-1 mesh-gradient">
