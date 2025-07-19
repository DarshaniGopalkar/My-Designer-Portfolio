
// Project data
const projects = [
    {
        id: 0,
        title: ' Status Inn - Restaurant App ',
        description: 'A mobile app for food ordering and table booking with a focus on intuitive navigation and user-friendly design.',
        image: 'images/restaurant-app.jpg',
        tags: ['Mobile App', 'Sustainability', 'User Research'],
        category: 'UX Design',
        challenge: 'How might we design a seamless restaurant experience that allows users to order food and reserve tables with minimal effort?',
        solution: 'Built an interactive, visually appealing app using consistent design language, intuitive navigation, and clean UI to enhance food ordering and booking processes.',
        process: [
            'Conducted user interviews to understand common dining app frustrations',
            'Analyzed popular food delivery platforms (e.g., Zomato, Swiggy)',
            'Created wireframes and interactive mobile prototypes in Figma',
            'Focused on intuitive flow, minimal steps, and bold CTAs',
            'Gathered feedback and iterated design for improved UX',
        ],
        tools: ['Figma', 'Canva', 'Notion'],
        outcomes: [
            '90% of testers completed the order flow without assistance',
            'Booking flow reduced from 7 to 4 steps',
            'High appreciation for minimalist layout and color contrast'
        ],
        mockups: [
            'images/app1.png',
            'images/app3.png',
            'images/app2.png',
        ]
    },
    {
        id: 1,
        title: 'Electro Guru– E-Commerce Website UI',
        description: 'A  responsive web design for an electronics store with a smooth browsing and checkout experience.',
        image: 'images/ElectronicGuru.jpg',
        tags: ['Web App', 'Mental Health', 'Accessibility'],
        category: 'UX/UI Design',
        challenge: 'How can we create a shopping experience that simplifies product discovery and checkout for a tech-focused audience?',
        solution: 'Designed desktop and mobile wireframes for product listings, filters, and checkout. Focused on responsive layout, consistent UI, and accessibility for all user types.',
        process: [
            'Studied user behavior on e-commerce platforms like Amazon & Flipkart',
            'Designed user flows for category browsing, product pages, and cart',
            'Created responsive wireframes and prototypes in Figma',
            'Used grid-based layouts and card components for scalability',
            'Performed heuristic evaluation and iterated designs'
        ],
        tools: ['Figma', 'HTML/CSS (basic', 'Canva'],
        outcomes: [
            '85% of users found checkout easier compared to other sites',
            'Bounce rate reduced in prototype testing by 25%',
            'Positive feedback on clarity and layout of product details'
        ],
        mockups: [
            'images/website1.png',
            'images/website3.png',
            'images/website2.png'
        ]
    },
    {
        id: 2,
        title: 'Social Creatives – Marketing Banners & Carousels',
        description: 'Social Media ad creatives and carousels crafted for fictional campaigns with a focus on engagement and branding.',
        image: 'images/Canva.jpg',
        tags: ['Mobile App', 'Local Business', 'Social Features'],
        category: 'UI/UX Design',
        challenge: 'How do we create ad visuals that are scroll-stopping, consistent with brand identity, and optimized for engagement?',
        solution: 'Designed engaging banners and carousels using Canva, applying visual hierarchy, bold CTAs, and strong color theory to connect with the target audience.',
        process: [
            'Researched popular Instagram design patterns and trends',
            'Designed multiple variants of carousels and ads for A/B testing',
            'Applied branding, typography, and color psychology',
            'Used Canva for fast iteration and visual storytelling',
            'Tested designs with peers and refined based on feedback'
        ],
        tools: ['Canva', 'Kittle', 'Photoshop (Beginner)', 'Figma'],
        outcomes: [
           'Boosted engagement in mock testing by 30%',
           'Consistent branding across creatives',
           'Appreciation for creativity and clarity in messaging'
        ],
        mockups: [
            'images/canva1.png',            
            'images/canva2.png',
            'images/canva3.png'
        ]
    },
];

// DOM elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const projectModal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const contactForm = document.getElementById('contactForm');
const loadingScreen = document.getElementById('loading-screen');

// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1000);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
    // Close mobile menu if open
    mobileMenu.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
}

// Update active navigation link on scroll
function updateActiveNavLink() {
    const sections = ['home', 'about', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                navLinks.forEach(link => link.classList.remove('active'));
                const currentLinks = document.querySelectorAll(`[data-section="${section}"]`);
                currentLinks.forEach(link => link.classList.add('active'));
                break;
            }
        }
    }
}

// Navigation link click handlers
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section') || link.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});

// Project modal functionality
function openProjectModal(projectId) {
    const project = projects[projectId];
    if (!project) return;

    modalTitle.textContent = project.title;
    
    modalBody.innerHTML = `
        <div class="modal-project-content">
            <!-- Project Overview -->
            <div style="margin-bottom: 3rem;">
                <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 20rem; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">
                <p style="font-size: 1.125rem; color: #4a5568; line-height: 1.7; margin-bottom: 1.5rem;">${project.description}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${project.tags.map(tag => `<span style="font-size: 0.875rem; font-weight: 600; color: #667eea; background: rgba(102, 126, 234, 0.1); padding: 0.5rem 1rem; border-radius: 20px;">${tag}</span>`).join('')}
                </div>
            </div>

            <!-- Challenge & Solution -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                <div style="background: #fef5e7; padding: 2rem; border-radius: 12px; border-left: 4px solid #f6ad55;">
                    <h3 style="font-size: 1.25rem; font-weight: 700; color: #1a202c; margin-bottom: 1rem; display: flex; align-items: center;">
                        <svg style="width: 24px; height: 24px; margin-right: 0.5rem; color: #f6ad55;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                            <path d="M12 17h.01"/>
                        </svg>
                        Challenge
                    </h3>
                    <p style="color: #4a5568; line-height: 1.6;">${project.challenge}</p>
                </div>
                <div style="background: #f0fff4; padding: 2rem; border-radius: 12px; border-left: 4px solid #48bb78;">
                    <h3 style="font-size: 1.25rem; font-weight: 700; color: #1a202c; margin-bottom: 1rem; display: flex; align-items: center;">
                        <svg style="width: 24px; height: 24px; margin-right: 0.5rem; color: #48bb78;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 12l2 2 4-4"/>
                            <circle cx="12" cy="12" r="10"/>
                        </svg>
                        Solution
                    </h3>
                    <p style="color: #4a5568; line-height: 1.6;">${project.solution}</p>
                </div>
            </div>

            <!-- Design Process -->
            <div style="margin-bottom: 3rem;">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: #1a202c; margin-bottom: 2rem; text-align: center;">Design Process</h3>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    ${project.process.map((step, index) => `
                        <div style="display: flex; align-items: flex-start; background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);">
                            <div style="flex-shrink: 0; width: 2.5rem; height: 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                                <span style="color: white; font-weight: 600; font-size: 0.875rem;">${index + 1}</span>
                            </div>
                            <p style="color: #4a5568; line-height: 1.6; margin-top: 0.25rem;">${step}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Tools Used -->
            <div style="margin-bottom: 3rem;">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: #1a202c; margin-bottom: 2rem; text-align: center;">Tools & Technologies</h3>
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
                    ${project.tools.map(tool => `<span style="padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); color: #4a5568; border-radius: 25px; font-size: 0.875rem; font-weight: 600; border: 2px solid #e2e8f0;">${tool}</span>`).join('')}
                </div>
            </div>

            <!-- Visual Design -->
            <div style="margin-bottom: 3rem;">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: #1a202c; margin-bottom: 2rem; text-align: center;">Visual Design</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                    ${project.mockups.map((mockup, index) => `
                        <div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);">
                            <img src="${mockup}" alt="${project.title} mockup ${index + 1}" style="width: 100%; height: 15rem; object-fit: cover;">
                            <div style="padding: 1rem;">
                                <p style="color: #4a5568; font-size: 0.875rem; text-align: center;">Design ${index + 1}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Key Outcomes -->
            <div style="margin-bottom: 3rem;">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: #1a202c; margin-bottom: 2rem; text-align: center;">Key Outcomes & Impact</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                    ${project.outcomes.map(outcome => `
                        <div style="display: flex; align-items: flex-start; background: linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%); padding: 1.5rem; border-radius: 12px;">
                            <svg style="width: 1.5rem; height: 1.5rem; color: #48bb78; margin-right: 1rem; margin-top: 0.25rem; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 12l2 2 4-4"/>
                                <circle cx="12" cy="12" r="10"/>
                            </svg>
                            <p style="color: #2d3748; line-height: 1.6; font-weight: 500;">${outcome}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Reflection -->
            <div style="background: linear-gradient(135deg, #edf2f7 0%, #e2e8f0 100%); padding: 2rem; border-radius: 16px; text-align: center;">
                <h3 style="font-size: 1.25rem; font-weight: 700; color: #1a202c; margin-bottom: 1rem;">What I Learned</h3>
                <p style="color: #4a5568; line-height: 1.7; margin-bottom: 1.5rem;">
                    This project taught me the importance of user research and iterative design. I learned how to balance user needs 
                    with business requirements and the value of testing early and often. The experience also highlighted the significance 
                    of accessibility and inclusive design in creating products that truly serve everyone.
                </p>
                <div style="display: flex; align-items: center; justify-content: center; color: #667eea; font-weight: 600;">
                    <span>Thank you for exploring this project!</span>
                    <svg style="width: 1.25rem; height: 1.25rem; margin-left: 0.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z"/>
                    </svg>
                </div>
            </div>
        </div>
    `;

    projectModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Project card click handlers
document.addEventListener('click', (e) => {
    if (e.target.closest('.view-project-btn') || e.target.closest('.project-card')) {
        const projectCard = e.target.closest('.project-card');
        if (projectCard) {
            const projectId = parseInt(projectCard.getAttribute('data-project'));
            openProjectModal(projectId);
        }
    }
});

// Contact form submission

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
}

// Skill progress bars animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const rect = bar.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
            setTimeout(() => {
                bar.style.width = progress + '%';
            }, 200);
        }
    });
}

// Event listeners
window.addEventListener('scroll', () => {
    updateActiveNavLink();
    revealOnScroll();
    animateProgressBars();
});

// Initialize animations on load
document.addEventListener('DOMContentLoaded', () => {
    // Add scroll reveal class to elements
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .contact-item, .tool-item');
    animatedElements.forEach(el => {
        el.classList.add('scroll-reveal');
    });
    
    // Set initial active nav link
    updateActiveNavLink();
    
    // Animate hero elements
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2');
        heroElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 1200);
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.style.display === 'flex') {
        closeModal();
    }
});

// Smooth hover effects for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.skill-card, .tool-item, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    updateActiveNavLink();
    revealOnScroll();
    animateProgressBars();
}, 16)); // ~60fps


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.text();

      if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset(); // clear the form
      } else {
        alert("❌ Failed to send message: " + result);
      }
    } catch (error) {
      console.error("Error sending form:", error);
      alert("❌ Something went wrong. Try again later.");
    }
  });
});
