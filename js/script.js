// nav 滾動變色
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('nav');
    if (window.scrollY >500) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".right").forEach(function(element) {
        gsap.fromTo(element,
            { x: "-100vw", opacity: 0 }, 
            { 
                x: "0", opacity: 1, duration: 0.3, 
                ease: "expo.out",                  
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "top 40%",         
                    toggleActions: "play none none reverse", 
                }
            }
        );
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".left").forEach(function(element) {
        gsap.fromTo(element,
            { x: "100vw", opacity: 0 },  
            { 
                x: "0", opacity: 1, duration: 0.3, 
                ease: "expo.out",                 
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "top 40%",         
                    toggleActions: "play none none reverse", 
                }
            }
        );
    });
});



