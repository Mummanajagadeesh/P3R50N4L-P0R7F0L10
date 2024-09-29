# [Jagadeesh Mummana - Portfolio](https://mummanajagadeesh.github.io/P3R50N4L-P0R7F0L10/)

#### Video Demo: [Watch here](https://youtu.be/bhk5Z-jfDsY)

---

## Description

Welcome to my personal portfolio! This website showcases my skills and projects, offering a blend of aesthetic appeal and functionality. You can explore various projects I've worked on, learn about the technologies I use, and contact me directly. This portfolio adheres to [CS50's Academic Honesty Policy](https://cs50.harvard.edu/x/2023/honesty/) and includes some use of AI-assisted features, which are clearly marked where applicable.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Code Structure](#code-structure)
- [HTML Overview](#html-overview)
- [CSS Breakdown](#css-breakdown)
- [JavaScript Functionality](#javascript-functionality)
- [AI Assistance](#ai-assistance)
- [Deployment Instructions](#deployment-instructions)
- [Contact](#contact)

---

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **Google Fonts**
- **Icons from Icons8**
- **AI-Powered Features** (Used responsibly, adhering to CS50's policy)

---

## Code Structure

The portfolio is structured into three core sections:

1. **HTML**: Provides the basic structure and layout of the website.
2. **CSS**: Adds style and responsiveness, making the site visually engaging.
3. **JavaScript**: Handles interactive and dynamic content for a better user experience.

### HTML Overview

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jagadeesh Mummana - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap" rel="stylesheet">
    ...
</head>
<body>
    <nav>
        <div class="menu-icon">&#9776;</div>
        ...
    </nav>
    ...
</body>
</html>
```

- **DOCTYPE Declaration**: Identifies the document as HTML5.
- **HTML Language Attribute**: Specifies English as the language of the document.
- **Head Section**: Contains metadata such as character encoding, viewport settings, title, and external stylesheets.
- **Body Section**: Holds the visual elements of the page like the navigation bar, project sections, and contact details.

### CSS Breakdown

The styling is located within an external stylesheet, linked in the `<head>` tag. Key elements include:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Fira Mono', monospace;
    background-color: #000;
    color: #fff;
    overflow-x: hidden;
}
nav {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    z-index: 10;
}
```

- **Universal Selector**: Resets margin and padding to zero for consistency.
- **Body Styling**: Defines the site's font, background color, and prevents horizontal scrolling.
- **Navigation Bar**: Styled to be fixed at the top-right for ease of access throughout the page.

#### Additional CSS Features

- **Responsive Design**: Media queries ensure the site is mobile-friendly, adjusting elements for smaller screen sizes.
- **Hover Effects**: Subtle transitions add smooth hover effects to buttons, links, and project cards.
- **CSS Grid**: Utilized to create a flexible grid layout for displaying project thumbnails.

### JavaScript Functionality

The site features JavaScript for smooth animations and interactive behavior, including a mobile menu toggle and section animations.

```javascript
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});
sections.forEach(section => {
    observer.observe(section);
});
```

- **Intersection Observer**: This feature animates sections as they enter the viewport, creating a dynamic scrolling effect.
- **Mobile Menu**: JavaScript toggles the visibility of the navigation menu on smaller devices, improving accessibility.

### AI Assistance

In this project, AI was used to enhance certain elements responsibly:

- **AI-generated content suggestions**: Some sections of text were enhanced or suggested using AI, but final review and edits were done manually to ensure the content aligns with my vision and the guidelines of CS50's Academic Honesty Policy.
- **Interactive components**: AI-assisted tools were used to fine-tune user interaction features, like the responsiveness of the site and smooth scroll animations.

All instances of AI assistance were verified to comply with the policy, and I made sure to fully understand and modify the outputs where necessary to align with my personal understanding and project goals.

---

### Deployment Instructions

To set up this portfolio locally or deploy it online:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Mummanajagadeesh/portfolio.git
   cd portfolio
   ```

2. **Open in Browser**: Open the `index.html` file in a modern web browser.
3. **Hosting Online**: You can easily deploy this project using platforms like GitHub Pages, Netlify, or Vercel for live hosting.

---

### Contact

If you'd like to get in touch for collaborations or questions, feel free to reach out:

- **Email**: [mummanajagadeesh97@gmail.com](mailto:mummanajagadeesh97@gmail.com)
- **LinkedIn**: [Jagadeesh Mummana](https://www.linkedin.com/in/jagadeeeshmummana)
- **GitHub**: [Mummanajagadeesh](https://github.com/Mummanajagadeesh)
- **Instagram**: [jagadeesh__97__](https://www.instagram.com/jagadeesh__97__)

---

Thank you for visiting my portfolio! Looking forward to connecting with you.
