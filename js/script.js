// Start animations immediately
        document.addEventListener('DOMContentLoaded', function () {
            // Animate skill bars
            animateSkillBars();

            // Add fade-in animations to sections
            addSectionAnimations();

            // Initialize particles
            initParticles();

            // Add SEO tracking
            trackAnalytics();

            // Initialize resume functionality
            initResumeFunctionality();
        });

        // Resume Functionality
        function initResumeFunctionality() {
            const resumeModal = document.getElementById('resumeModal');
            const navResumeBtn = document.getElementById('navResumeBtn');
            const sectionResumeBtn = document.getElementById('sectionResumeBtn');
            const closeModal = document.getElementById('closeModal');
            const closeResumeModal = document.getElementById('closeResumeModal');
            const downloadResume = document.getElementById('downloadResume');
            const hamburgerMenu = document.getElementById('hamburgerMenu');
            const navWrap = document.getElementById('navWrap');

            // Open resume modal
            function openResumeModal() {
                resumeModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            // Close resume modal
            function closeResumeModalFunc() {
                resumeModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }

            // Download resume
            function downloadResumeFunc() {
                const resumeUrl = 'image/Nityanand_Resume.jpg';
                const link = document.createElement('a');
                link.href = resumeUrl;
                link.download = 'Nityanand_Resume.jpg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Track download
                console.log('Resume downloaded');
            }

            // Toggle hamburger menu
            function toggleHamburgerMenu() {
                hamburgerMenu.classList.toggle('active');
                navWrap.classList.toggle('active');
                document.body.style.overflow = navWrap.classList.contains('active') ? 'hidden' : 'auto';
            }

            // Close hamburger menu when clicking a nav button
            document.querySelectorAll('.nav-btn').forEach(button => {
                button.addEventListener('click', () => {
                    hamburgerMenu.classList.remove('active');
                    navWrap.classList.remove('active');
                    document.body.style.overflow = 'auto';
                });
            });

            // Event listeners
            navResumeBtn.addEventListener('click', openResumeModal);
            sectionResumeBtn.addEventListener('click', openResumeModal);
            closeModal.addEventListener('click', closeResumeModalFunc);
            closeResumeModal.addEventListener('click', closeResumeModalFunc);
            downloadResume.addEventListener('click', downloadResumeFunc);
            hamburgerMenu.addEventListener('click', toggleHamburgerMenu);

            // Close modal on outside click
            resumeModal.addEventListener('click', (e) => {
                if (e.target === resumeModal) {
                    closeResumeModalFunc();
                }
            });

            // Close modal on ESC key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeResumeModalFunc();
                }
            });
        }

        // Navigation
        document.querySelectorAll('.nav-btn').forEach(button => {
            button.addEventListener('click', function () {
                const target = this.getAttribute('data-target');
                const element = document.querySelector(target);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    // Add active effect to button
                    document.querySelectorAll('.nav-btn').forEach(btn => {
                        btn.style.background = 'linear-gradient(var(--card-bg), var(--card-bg)) padding-box, linear-gradient(45deg, var(--primary), var(--secondary)) border-box';
                        btn.style.color = 'var(--light)';
                    });
                    this.style.background = 'linear-gradient(45deg, var(--primary), var(--secondary)) padding-box, linear-gradient(45deg, var(--primary), var(--secondary)) border-box';
                    this.style.color = 'var(--dark)';
                }
            });
        });

        // Scroll to Top
        const scrollTopBtn = document.getElementById('scrollTopBtn');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Animate Skill Bars
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-fill');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width;
                }, 300);
            });
        }

        // Section Animations
        function addSectionAnimations() {
            const sections = document.querySelectorAll('.section');
            sections.forEach((section, index) => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            });
        }

        // Initialize Particles
        function initParticles() {
            // Floating Particles
            function createParticle() {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.width = Math.random() * 2 + 1 + 'px';
                particle.style.height = particle.style.width;
                particle.style.background = Math.random() > 0.5 ? 'var(--primary)' : 'var(--secondary)';
                particle.style.borderRadius = '50%';
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.top = '0';
                particle.style.opacity = Math.random() * 0.3 + 0.1;
                particle.style.zIndex = '0';
                document.querySelector('.bg-animation').appendChild(particle);

                // Animate
                const animation = particle.animate([
                    { transform: 'translateY(0)', opacity: particle.style.opacity },
                    { transform: `translateY(${window.innerHeight}px)`, opacity: 0 }
                ], {
                    duration: Math.random() * 2000 + 1500,
                    easing: 'linear'
                });

                animation.onfinish = () => particle.remove();
            }

            // Create particles periodically
            setInterval(createParticle, 150);

            // Initialize particles
            for (let i = 0; i < 30; i++) {
                setTimeout(createParticle, Math.random() * 1000);
            }

            // Mouse Move Effect
            document.addEventListener('mousemove', (e) => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;

                document.querySelector('.grid-lines').style.transform =
                    `translate(${x * 15}px, ${y * 15}px)`;
            });
        }

        // Project Hover Effects
        document.querySelectorAll('.project').forEach(project => {
            project.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-8px) scale(1.01)';
            });

            project.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Certificate Hover Effects
        document.querySelectorAll('.certificate-item').forEach(item => {
            item.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = '0 8px 20px rgba(255, 65, 108, 0.3)';
            });

            item.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });

        // Contact Card Effects
        document.querySelectorAll('.contact-card').forEach(card => {
            card.addEventListener('mouseenter', function () {
                this.style.transform = 'translateX(10px) scale(1.01)';
            });

            card.addEventListener('mouseleave', function () {
                this.style.transform = 'translateX(0) scale(1)';
            });
        });

        // Analytics Tracking
        function trackAnalytics() {
            // Track page views
            console.log('ZH Developer Portfolio - Page View');

            // Track button clicks
            document.querySelectorAll('.nav-btn, .project, .verify-btn, .contact-card').forEach(element => {
                element.addEventListener('click', function () {
                    const label = this.getAttribute('aria-label') || this.textContent.substring(0, 30);
                    console.log(`Clicked: ${label}`);
                });
            });
        }

        // Add scroll animations for cards
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card, .skill, .project, .certificate-item, .contact-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(15px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            cardObserver.observe(el);
        });

        // Optimize images loading
        document.querySelectorAll('img').forEach(img => {
            img.loading = 'lazy';
        });