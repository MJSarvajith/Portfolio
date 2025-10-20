
        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.innerHTML = navMenu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a nav link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Back to top button
        const backToTopBtn = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Scroll animation for sections
        function checkScroll() {
            const sections = document.querySelectorAll('.section');
            const sectionTitles = document.querySelectorAll('.section-title');
            const heroText = document.querySelector('.hero-text');
            const heroImage = document.querySelector('.hero-image');
            const aboutText = document.querySelector('.about-text');
            const aboutImage = document.querySelector('.about-image');
            const projectCards = document.querySelectorAll('.project-card');
            const timelineItems = document.querySelectorAll('.timeline-item');
            const contactInfo = document.querySelector('.contact-info');
            const contactForm = document.querySelector('.contact-form');
            
            // Hero section animation
            if (window.scrollY >= 100) {
                heroText.classList.add('visible');
                heroImage.classList.add('visible');
            }
            
            // Other sections animation
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (window.scrollY >= sectionTop - window.innerHeight + sectionHeight / 2) {
                    section.classList.add('visible');
                }
            });
            
            sectionTitles.forEach(title => {
                const titleTop = title.offsetTop;
                
                if (window.scrollY >= titleTop - window.innerHeight + 100) {
                    title.classList.add('visible');
                }
            });
            
            // About section elements
            if (aboutText && window.scrollY >= aboutText.offsetTop - window.innerHeight + 100) {
                aboutText.classList.add('visible');
            }
            
            if (aboutImage && window.scrollY >= aboutImage.offsetTop - window.innerHeight + 100) {
                aboutImage.classList.add('visible');
            }
            
            // Project cards
            projectCards.forEach((card, index) => {
                if (window.scrollY >= card.offsetTop - window.innerHeight + 100) {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 200);
                }
            });
            
            // Timeline items
            timelineItems.forEach((item, index) => {
                if (window.scrollY >= item.offsetTop - window.innerHeight + 100) {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 200);
                }
            });
            
            // Contact section elements
            if (contactInfo && window.scrollY >= contactInfo.offsetTop - window.innerHeight + 100) {
                contactInfo.classList.add('visible');
            }
            
            if (contactForm && window.scrollY >= contactForm.offsetTop - window.innerHeight + 100) {
                contactForm.classList.add('visible');
            }
        }
        
        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);
   
