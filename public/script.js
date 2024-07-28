document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Intersection Observer setup
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation classes and observe elements
    const mainTxt = document.querySelector('.main-txt');
    const eventsTxt = document.querySelector('.events-txt');
    const wrapper = document.querySelector('.wrapper');

    [mainTxt, eventsTxt, wrapper].forEach(el => {
        if (el) {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        }
    });

    // Neon text animation
    const neonElements = document.querySelectorAll('.neon');
    neonElements.forEach(el => {
        const letters = el.textContent.split('');
        el.innerHTML = letters.map(char => 
            `<span class="neon-letter">${char}</span>`
        ).join('');
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Card slider functionality
    const cardContainer = document.querySelector('.card-container');
    const cardsWrapper = document.querySelector('.cards-wrapper');
    const cardSets = document.querySelectorAll('.card-set');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 100;
        cardsWrapper.style.transform = `translateX(${offset}%)`;
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < cardSets.length - 1) {
                currentIndex++;
                updateSlider();
            }
        });
    }

    // Card hover effect
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
            card.style.boxShadow = '0 10px 20px rgba(0, 255, 255, 0.3)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.3)';
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add necessary styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 1.2s ease, transform 1.2s ease;
        }
        .animate-on-scroll.animate {
            opacity: 1;
            transform: translateY(0);
        }
        .neon-letter {
            opacity: 0;
            transform: translateY(20px);
            display: inline-block;
            transition: opacity 1s ease, transform 1s ease;
        }
        .animate .neon-letter {
            opacity: 1;
            transform: translateY(0);
        }
        .card {
            transition: transform 0.8s ease, box-shadow 0.8s ease;
        }
    `;
    document.head.appendChild(style);
});






//partners animation
function animateOnScroll() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const partnersSection = document.querySelector('.partners-section');
    if (partnersSection) {
        observer.observe(partnersSection);
    }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', animateOnScroll);

document.getElementById('butt').addEventListener('click',()=>{
    alert('Query Submitted')
})



