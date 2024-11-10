document.addEventListener("DOMContentLoaded", () => {
    // Cursor-following ball with added delay
    const cursorBall = document.createElement("div");
    cursorBall.classList.add("cursor-ball");
    document.body.appendChild(cursorBall);

    document.addEventListener("mousemove", (e) => {
        cursorBall.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Function for text scramble effect
    function scrambleText(target, text, targetText, delay) {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let iteration = 0;
        clearInterval(target.interval);

        target.interval = setInterval(() => {
            target.innerText = targetText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return targetText[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            if (iteration >= targetText.length) {
                clearInterval(target.interval);
                target.innerText = targetText;  // End with the final target
            }

            iteration += 1 / 3;
        }, delay);
    }

    // Handling h1 (Jagadeesh Mummana -> Hello World!! on hover)
    const header1 = document.querySelector("h1");
    const originalTextH1 = "Jagadeesh Mummana";
    const newTextH1 = "Hello World!!";

    header1.addEventListener("mouseover", () => {
        scrambleText(header1, originalTextH1, newTextH1, 100);
    });

    header1.addEventListener("mouseout", () => {
        scrambleText(header1, newTextH1, originalTextH1, 100);
    });

    // Handling all h2 headers (scramble effect on hover)
    const headers = document.querySelectorAll("h2");

    headers.forEach(header => {
        const originalText = header.innerText;  // Get original text of each h2 header

        header.addEventListener("mouseover", () => {
            scrambleText(header, originalText, originalText, 100);  // Scramble the text on hover
        });

        header.addEventListener("mouseout", () => {
            scrambleText(header, originalText, originalText, 100);  // Return to the original text after mouse out
        });
    });
});

// // Intersection Observer for scrolling effect
// const sections = document.querySelectorAll('.section');
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('active');
//         }
//     });
// });
// sections.forEach(section => {
//     observer.observe(section);
// });


// Intersection Observer for scrolling effect
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
(entries) => {
    entries.forEach((entry) => {
        // Check if the section is intersecting with the viewport
        if (entry.isIntersecting) {
            // Add 'active' class when entering the viewport
            entry.target.classList.add('active');
        } else {
            // Remove 'active' class when exiting the viewport
            entry.target.classList.remove('active');
        }
    });
},
{
    threshold: 0.3, // Trigger when 10% of the section is visible
}
);

// Observe each section
sections.forEach((section) => observer.observe(section));


// Toggle menu for mobile
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');
menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuIcon.textContent = menuIcon.textContent === '✖' ? '☰' : '✖';
});

// Create background stars
const background = document.querySelector('.background-stars');
const numStars = 150;

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.width = `${Math.random() * 3 + 1}px`;
    star.style.height = star.style.width;
    star.style.animationDuration = `${Math.random() * 3 + 1}s`; // Random blink duration
    background.appendChild(star);
}

// Mouse hover effect for interactive stars
document.body.addEventListener('mousemove', (e) => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const rect = star.getBoundingClientRect();
        const dx = e.clientX - rect.left;
        const dy = e.clientY - rect.top;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            star.style.transform = `translate(${dx * 0.1}px, ${dy * 0.1}px)`;
        } else {
            star.style.transform = 'translate(0, 0)';
        }
    });
});

// Cursor-following ball effect
const cursorBall = document.createElement('div');
cursorBall.style.width = '12px';
cursorBall.style.height = '12px';
cursorBall.style.borderRadius = '50%';
cursorBall.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
cursorBall.style.position = 'fixed';
cursorBall.style.pointerEvents = 'none';
cursorBall.style.transform = 'translate(-50%, -50%)';
cursorBall.style.transition = 'transform 0.05s ease';
document.body.appendChild(cursorBall);

document.addEventListener('mousemove', (e) => {
    cursorBall.style.left = `${e.clientX}px`;
    cursorBall.style.top = `${e.clientY}px`;
});