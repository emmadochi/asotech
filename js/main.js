// Asotech Construction - Main Interactive Script

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // 3. Loading Screen Animation (Only if loader exists)
    const loader = document.getElementById('loader');
    if (loader) {
        // Set initial state for hero elements before loader disappears
        const heroReveals = document.querySelectorAll('.hero-reveal');
        const heroBtns = document.getElementById('hero-btns');
        const scrollIndicator = document.getElementById('scroll-indicator');

        if (heroReveals.length > 0) {
            gsap.set(heroReveals, { y: '110%' });
        }
        if (heroBtns) gsap.set(heroBtns, { opacity: 0, y: 20 });
        if (scrollIndicator) gsap.set(scrollIndicator, { opacity: 0, y: 20 });

        const tlLoader = gsap.timeline();
        tlLoader.to("#loader-text", {
            y: 0,
            duration: 1,
            ease: "power4.out"
        })
        .to("#loader", {
            y: "-100%",
            duration: 1.2,
            ease: "power4.inOut",
            delay: 0.5
        })
        .set("#loader", { display: "none" })
        .call(() => {
            // Animate hero elements only after loader is fully hidden
            if (heroReveals.length > 0) {
                gsap.to(heroReveals, {
                    y: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power4.out"
                });
            }
            if (heroBtns || scrollIndicator) {
                const targets = [heroBtns, scrollIndicator].filter(Boolean);
                gsap.to(targets, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    delay: 0.3
                });
            }
        });
    }

    // 4. Navbar Logic
    const navbar = document.getElementById('navbar');
    const navItems = document.querySelectorAll('#nav-item');
    const logoText = document.getElementById('logo-text');
    const isHomePage = document.getElementById('home');
    const menuBtn = document.getElementById('menu-btn');

    // Initial state check for non-homepages
    if (!isHomePage && navbar) {
        navbar.classList.add('bg-dark/90', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/10');
        navbar.classList.remove('bg-transparent', 'py-6');
    }

    window.addEventListener('scroll', () => {
        if (isHomePage) {
            const mainLogo = document.getElementById('main-logo');
            if (window.scrollY > 100) {
                navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'py-4', 'border-b', 'border-accent', 'shadow-sm');
                navbar.classList.remove('bg-transparent', 'py-6', 'bg-dark/90');
                if (logoText) {
                    logoText.classList.remove('text-white');
                    logoText.classList.add('text-dark');
                }
                if (mainLogo) {
                    mainLogo.src = 'logo.png';
                }
                if (menuBtn) {
                    menuBtn.classList.remove('text-white');
                    menuBtn.classList.add('text-dark');
                }
                navItems.forEach(item => {
                    item.classList.remove('text-white');
                    item.classList.add('text-dark');
                });
            } else {
                navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'py-4', 'border-b', 'border-accent', 'shadow-sm');
                navbar.classList.add('bg-transparent', 'py-6');
                if (logoText) {
                    logoText.classList.add('text-white');
                    logoText.classList.remove('text-dark');
                }
                if (mainLogo) {
                    mainLogo.src = 'logo-white.png';
                }
                if (menuBtn) {
                    menuBtn.classList.add('text-white');
                    menuBtn.classList.remove('text-dark');
                }
                navItems.forEach(item => {
                    item.classList.add('text-white');
                    item.classList.remove('text-dark');
                });
            }
        }
    });

    // 5. Parallax Effect for Hero Image
    if (document.getElementById('hero-img') && isHomePage) {
        gsap.to("#hero-img", {
            y: "20%",
            ease: "none",
            scrollTrigger: {
                trigger: "#home",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }

    // 6. Swiper Initializations (Check if containers exist)
    if (document.querySelector('.project-swiper')) {
        new Swiper('.project-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 40 },
                1024: { slidesPerView: 2.5, spaceBetween: 50 }
            }
        });
    }

    if (document.querySelector('.testimonial-swiper')) {
        new Swiper('.testimonial-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    }

    // 7. Counter Animation Logic
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        ScrollTrigger.create({
            trigger: counter,
            start: "top 90%",
            onEnter: () => {
                let count = 0;
                const updateCount = () => {
                    const increment = target / 50;
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            },
            once: true
        });
    });

    // 8. Scroll Trigger Reveals (Global elements)
    const revealElements = [
        { selector: '#about h2, #about p, #about-img-container, #about .grid > div', trigger: '#about' },
        { selector: '.service-card', trigger: '#services' },
        { selector: '.estate-card', trigger: '#estates' },
        { selector: '.estate-card', trigger: '.grid' }, 
        { selector: '.process-step', trigger: '#process' },
        { selector: '.gallery-item', trigger: '.columns-1' },
        { selector: '.faq-reveal', trigger: '#faq' }
    ];

    revealElements.forEach(group => {
        const elements = document.querySelectorAll(group.selector);
        const trigger = document.querySelector(group.trigger);
        
        if (elements.length > 0 && trigger) {
            gsap.to(group.selector, {
                y: 0,
                opacity: 1,
                duration: 1.6,
                stagger: 0.25,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: group.trigger,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });
        }
    });

    // 9. Mobile Menu Logic
    const closeBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (menuBtn && mobileMenu) {
        const tlMenu = gsap.timeline({ paused: true });
        
        tlMenu.to(mobileMenu, {
            x: 0,
            duration: 0.8,
            ease: "power4.inOut"
        })
        .from(".mobile-nav-link", {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out"
        }, "-=0.4")
        .from("#mobile-menu .mt-auto > div", {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.3");

        menuBtn.addEventListener('click', () => {
            tlMenu.play();
            lenis.stop();
        });

        closeBtn.addEventListener('click', () => {
            tlMenu.reverse();
            lenis.start();
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                tlMenu.reverse();
                lenis.start();
            });
        });
    }

    // 10. Premium Estate Card Animations (3D Tilt & Magnetic)
    const estateCards = document.querySelectorAll('.estate-card');
    
    // Check if device is touch-based. If so, skip tilt for better performance/UX
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

    if (!isTouchDevice && estateCards.length > 0) {
        estateCards.forEach(card => {
            // Dynamically add parallax classes to children to avoid cluttering HTML
            const badge = card.querySelector('.absolute.top-6');
            if (badge) badge.classList.add('badge-floating');
            
            const content = card.querySelector('.p-8');
            if (content) content.classList.add('content-floating');
            
            const arrowBtn = card.querySelector('.pt-6 a');
            if (arrowBtn) arrowBtn.classList.add('magnetic-btn');

            // 3D Tilt Logic
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Calculate rotation (max 12 degrees)
                const rotateX = ((y - centerY) / centerY) * -12; 
                const rotateY = ((x - centerX) / centerX) * 12;

                gsap.to(card, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    duration: 0.5,
                    ease: "power2.out",
                    transformPerspective: 1200
                });

                // Magnetic Button Logic
                if (arrowBtn) {
                    const btnRect = arrowBtn.getBoundingClientRect();
                    // Get button center relative to the card
                    const btnCenterX = (btnRect.left - rect.left) + (btnRect.width / 2);
                    const btnCenterY = (btnRect.top - rect.top) + (btnRect.height / 2);
                    
                    const distX = x - btnCenterX;
                    const distY = y - btnCenterY;
                    
                    // Pull if cursor is within 80px radius
                    if (Math.abs(distX) < 80 && Math.abs(distY) < 80) {
                        gsap.to(arrowBtn, {
                            x: distX * 0.4,
                            y: distY * 0.4,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    } else {
                        gsap.to(arrowBtn, {
                            x: 0,
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                }
            });

            // Reset smoothly on mouse leave
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.4)"
                });
                
                if (arrowBtn) {
                    gsap.to(arrowBtn, {
                        x: 0,
                        y: 0,
                        duration: 0.8,
                        ease: "elastic.out(1, 0.4)"
                    });
                }
            });
        });
    }

    // 11. Investment Calculator Logic
    const calcSection = document.getElementById('calculator');
    if (calcSection) {
        const inputs = {
            amount: document.getElementById('calc-amount'),
            appreciation: document.getElementById('calc-appreciation'),
            yield: document.getElementById('calc-yield'),
            duration: document.getElementById('calc-duration')
        };
        const displays = {
            amount: document.getElementById('val-amount'),
            appreciation: document.getElementById('val-appreciation'),
            yield: document.getElementById('val-yield'),
            duration: document.getElementById('val-duration')
        };
        const results = {
            value: document.getElementById('res-value'),
            rent: document.getElementById('res-rent'),
            roi: document.getElementById('res-roi')
        };

        const formatNaira = (num) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(num);

        let currentResults = { value: 0, rent: 0, roi: 0 };

        const updateCalculator = () => {
            const amount = parseFloat(inputs.amount.value);
            const appRate = parseFloat(inputs.appreciation.value) / 100;
            const yieldRate = parseFloat(inputs.yield.value) / 100;
            const years = parseFloat(inputs.duration.value);

            // Update Input Displays
            displays.amount.textContent = formatNaira(amount);
            displays.appreciation.textContent = `${inputs.appreciation.value}%`;
            displays.yield.textContent = `${inputs.yield.value}%`;
            displays.duration.textContent = `${years} Year${years > 1 ? 's' : ''}`;

            // Calculations
            const projectedValue = amount * Math.pow(1 + appRate, years);
            const annualRent = amount * yieldRate;
            const totalRent = annualRent * years;
            const totalProfit = (projectedValue - amount) + totalRent;
            const roiPercentage = (totalProfit / amount) * 100;

            // Animate Results with GSAP
            gsap.to(currentResults, {
                value: projectedValue,
                rent: totalRent,
                roi: roiPercentage,
                duration: 0.6,
                ease: "power2.out",
                onUpdate: () => {
                    results.value.textContent = formatNaira(currentResults.value);
                    results.rent.textContent = formatNaira(currentResults.rent);
                    results.roi.textContent = `${Math.round(currentResults.roi)}%`;
                }
            });
        };

        // Bind Events
        Object.values(inputs).forEach(input => {
            input.addEventListener('input', updateCalculator);
        });

        // Initialize values without animation
        const initialAmount = parseFloat(inputs.amount.value);
        const initialAppRate = parseFloat(inputs.appreciation.value) / 100;
        const initialYieldRate = parseFloat(inputs.yield.value) / 100;
        const initialYears = parseFloat(inputs.duration.value);
        currentResults.value = initialAmount * Math.pow(1 + initialAppRate, initialYears);
        currentResults.rent = (initialAmount * initialYieldRate) * initialYears;
        currentResults.roi = (((currentResults.value - initialAmount) + currentResults.rent) / initialAmount) * 100;
        updateCalculator();

        // Scroll Reveal for Calculator
        gsap.to('.calc-reveal', {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '#calculator',
                start: "top 85%",
            }
        });
    }

    // 12. VIP Exit-Intent Modal Logic
    const vipModal = document.getElementById('vip-modal');
    if (vipModal) {
        const vipBg = document.getElementById('vip-close-bg');
        const vipContent = document.getElementById('vip-modal-content');
        const vipCloseBtn = document.getElementById('vip-close-btn');
        const vipForm = document.getElementById('vip-form');
        const vipFormContainer = document.getElementById('vip-form-container');
        const vipSuccessContainer = document.getElementById('vip-success-container');
        const vipContinueBtn = document.getElementById('vip-continue-btn');

        let modalTriggered = false;

        const openVipModal = () => {
            // Check session storage to prevent annoying users
            if (sessionStorage.getItem('vipModalSeen') || modalTriggered) return;
            
            modalTriggered = true;
            sessionStorage.setItem('vipModalSeen', 'true');

            // Pause lenis scroll
            if (typeof lenis !== 'undefined') lenis.stop();

            // Animate In
            vipModal.classList.remove('pointer-events-none');
            gsap.to(vipModal, { opacity: 1, duration: 0.4, ease: "power2.out" });
            gsap.to(vipContent, { scale: 1, duration: 0.5, ease: "back.out(1.5)", delay: 0.1 });
        };

        const closeVipModal = () => {
            if (typeof lenis !== 'undefined') lenis.start();

            // Animate Out
            gsap.to(vipContent, { scale: 0.95, duration: 0.3, ease: "power2.in" });
            gsap.to(vipModal, { 
                opacity: 0, 
                duration: 0.4, 
                ease: "power2.in",
                onComplete: () => {
                    vipModal.classList.add('pointer-events-none');
                }
            });
        };

        // Trigger 1: Exit Intent (Desktop)
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY < 0) {
                openVipModal();
            }
        });

        // Trigger 2: Time Delay Fallback (30 seconds)
        setTimeout(() => {
            openVipModal();
        }, 30000);

        // Close Event Listeners
        vipCloseBtn.addEventListener('click', closeVipModal);
        vipBg.addEventListener('click', closeVipModal);
        vipContinueBtn.addEventListener('click', closeVipModal);

        // Form Submission Simulation
        if (vipForm) {
            vipForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Simulate API Call / Processing
                const submitBtn = vipForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';
                
                setTimeout(() => {
                    // Hide Form, Show Success
                    gsap.to(vipFormContainer, {
                        opacity: 0,
                        y: -20,
                        duration: 0.4,
                        onComplete: () => {
                            vipFormContainer.style.display = 'none';
                            vipSuccessContainer.style.display = 'flex';
                            gsap.fromTo(vipSuccessContainer, 
                                { opacity: 0, scale: 0.9 }, 
                                { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" }
                            );
                        }
                    });
                }, 1500);
            });
        }
    }

    // 13. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const btn = item.querySelector('.faq-btn');
            const content = item.querySelector('.faq-content');
            const icon = item.querySelector('.faq-icon i');

            btn.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');

                // Close all others
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-btn').classList.remove('text-primary');
                    otherItem.querySelector('.faq-content').style.height = '0px';
                    const otherIcon = otherItem.querySelector('.faq-icon i');
                    otherIcon.className = 'fa-solid fa-plus';
                    otherIcon.parentElement.style.transform = 'rotate(0deg)';
                });

                if (!isOpen) {
                    item.classList.add('active');
                    btn.classList.add('text-primary');
                    content.style.height = content.scrollHeight + 'px';
                    icon.className = 'fa-solid fa-minus';
                    icon.parentElement.style.transform = 'rotate(180deg)';
                }
            });
        });
    }

});
