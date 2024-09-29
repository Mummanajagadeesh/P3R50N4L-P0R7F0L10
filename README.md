# [Jagadeesh Mummana - Portfolio](https://mummanajagadeesh.github.io/P3R50N4L-P0R7F0L10/)


#### Video Demo: https://youtu.be/bhk5Z-jfDsY

#### Description:
Welcome to the portfolio of Jagadeesh Mummana! This portfolio showcases my projects and skills in robotics and artificial intelligence. The site is designed to be both visually appealing and functional, enabling visitors to easily navigate through my work and get in touch with me. Below, I will explain the various elements of the code used to create this portfolio.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Code Structure](#code-structure)
- [HTML Overview](#html-overview)
- [CSS Breakdown](#css-breakdown)
- [JavaScript Functionality](#javascript-functionality)
- [Deployment Instructions](#deployment-instructions)
- [Contact](#contact)

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Icons from Icons8

---

## Code Structure

The code is organized into three main sections:

1. **HTML**: Defines the structure of the web page.
2. **CSS**: Provides styling for the elements, ensuring a cohesive look and feel.
3. **JavaScript**: Adds interactivity to the portfolio, enhancing user experience.

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

- **DOCTYPE Declaration**: The document begins with `<!DOCTYPE html>`, indicating it is an HTML5 document.
- **HTML Language Attribute**: The `lang` attribute in the `<html>` tag specifies the language of the document, which is set to English.
- **Head Section**: Contains meta tags for character set and viewport settings, a title for the page, and links to external stylesheets.
- **Body Section**: This is where all visible elements of the portfolio are defined, including the navigation bar, content sections, and social media links.

### CSS Breakdown

The CSS is embedded within a `<style>` tag in the head section of the HTML. Here are some key components:

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

- **Universal Selector**: The universal selector `*` is used to remove default margin and padding from all elements.
- **Body Styling**: Sets the font family, background color, and text color for the entire page. It also prevents horizontal scrolling with `overflow-x: hidden;`.
- **Navigation Bar**: The `nav` element is fixed to the top right of the page, creating a consistent and accessible navigation experience as the user scrolls.

#### Additional CSS Features

- **Responsive Design**: Media queries are used to adjust the layout for smaller screens, ensuring the portfolio is mobile-friendly.
- **Hover Effects**: CSS transitions are employed for interactive elements such as links and project cards, enhancing user experience.
- **Grid Layout for Projects**: The `.projects-grid` class uses CSS Grid to create a responsive grid layout for displaying project cards.

### JavaScript Functionality

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

- **Intersection Observer**: This script enables animations for each section when they come into the viewport, creating a smooth scrolling effect.
- **Mobile Menu Toggle**: JavaScript is used to toggle the visibility of navigation links on smaller screens when the menu icon is clicked.

### Deployment Instructions

To deploy this portfolio:

1. **Clone the Repository**: Use Git to clone the project repository to your local machine.
2. **Open in a Web Browser**: Simply open the `index.html` file in any modern web browser.
3. **Host Online (Optional)**: You can host this portfolio on platforms like GitHub Pages, Netlify, or Vercel for online accessibility.

### Contact

For inquiries or collaboration opportunities, feel free to reach out through any of my social media platforms or email:

- **Email**: [mummanajagadeesh97@gmail.com](mailto:mummanajagadeesh97@gmail.com)
- **LinkedIn**: [Jagadeesh Mummana](https://www.linkedin.com/in/jagadeeeshmummana)
- **GitHub**: [Mummanajagadeesh](https://github.com/Mummanajagadeesh)
- **Instagram**: [jagadeesh__97__](https://www.instagram.com/jagadeesh__97__)

Thank you for visiting my portfolio! I look forward to connecting with you.

