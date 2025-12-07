# Tenerife Holiday Locations

## Table of Contents
1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colours](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks--tools)
5. [Features](#features)
6. [Testing](#testing)
    1. [HTML Validation](#html-validation)
    2. [CSS Validation](#css-validation)
    3. [JavaScript Validation](#javascript-validation)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Device Testing](#device-testing)
    7. [Browser Compatibility](#browser-compatibility)
    8. [Testing User Stories](#testing-user-stories)
7. [Bugs](#bugs)
8. [Deployment](#deployment)
9. [Credits](#credits)
10. [Acknowledgements](#acknowledgements)

---

<a id="project-goals"></a>
## 1. Project Goals

**Tenerife Holiday Locations** is an interactive web application designed to help tourists discover key destinations in Tenerife using a responsive interface, an interactive map, and intuitive search features.

<a id="user-goals"></a>
### 1.1 User Goals

- Easily explore Tenerife’s most popular locations.
- Interact with a live map to view markers, images, and descriptions.
- Navigate smoothly across all devices.
- Receive meaningful feedback from searches and form submissions.

<a id="site-owner-goals"></a>
### 1.2 Site Owner Goals

- Provide a valuable, visually engaging tourist resource.
- Demonstrate strong front-end skills in HTML, CSS, and JavaScript.
- Incorporate accessibility, usability, and clean UI principles.
- Deliver clear documentation, testing, and validation.

---

<a id="user-experience"></a>
## 2. User Experience

<a id="target-audience"></a>
### 2.1 Target Audience

- Tourists planning to visit Tenerife.
- Casual users wanting a simple visual exploration tool.
- Users with accessibility needs or mobile devices.

<a id="user-requirements-and-expectations"></a>
### 2.2 User Requirements and Expectations

Users expect:

- Fast loading and simple navigation.
- Accurate search functionality with clear results.
- Map markers that reveal relevant information.
- Accessible design with keyboard navigation and alt text.
- A functional and validated contact form.

<a id="user-stories"></a>
### 2.3 User Stories

As a user, I want to:

- Explore Tenerife on a map with helpful markers.
- Search locations to find specific information quickly.
- See images, descriptions, and population details.
- Submit a form with validation to ensure my message is correct.
- Use the site easily on mobile and desktop.

---

<a id="design"></a>
## 3. Design

<a id="design-choices"></a>
### 3.1 Design Choices

- Clean, minimal UI supporting intuitive navigation.
- Clear section hierarchy with consistent spacing.
- Accessible colour contrasts and ARIA labels.
- Responsive page structure across all viewports.

<a id="colours"></a>
### 3.2 Colours

A calming colour palette reflecting Tenerife’s natural scenery:

- Blue tones for trust and clarity.
- Light neutral backgrounds for readability.
- High-contrast accents for accessibility.

<a id="fonts"></a>
### 3.3 Fonts

- Modern sans-serif fonts chosen for clarity and readability.
- Consistent typographic scale for structure and emphasis.

<a id="structure"></a>
### 3.4 Structure

The site uses a simple, intuitive structure that guides the user from introduction to interaction:

- A header with navigation elements.
- An introductory section explaining the site's purpose.
- An interactive map with markers for each Tenerife location.
- A locations list containing descriptions and images.
- A search bar that filters results dynamically.
- A contact form with validation and user feedback.
- A footer with supporting information.

This structure prioritises ease of use, accessibility, and clean information flow.

<a id="wireframes"></a>
### 3.5 Wireframes

- Wireframes produced in Figma.
- Stored in `/docs/design/`.
- Final site accurately follows the intended structure.

---

<a id="technologies-used"></a>
## 4. Technologies Used

<a id="languages"></a>
### 4.1 Languages

- HTML5
- CSS3
- JavaScript ES6

<a id="frameworks--tools"></a>
### 4.2 Frameworks & Tools

- Google Maps API
- W3C Validators (HTML & CSS)
- JSLint
- Figma for wireframes
- Git & GitHub for version control and deployment
- Chrome Lighthouse for performance testing

---

<a id="features"></a>
## 5. Features

- Fully responsive layout.
- Interactive Google Map with custom markers.
- Dynamic search bar with instant filtering.
- Contact form with validation and `localStorage` integration.
- Accessible design (keyboard navigation, ARIA labels, alt text).
- 404 error page redirecting users back to the site.
- User feedback messages for errors, searches, and form submissions.

---

<a id="testing"></a>
## 6. Testing

<a id="html-validation"></a>
### 6.1 HTML Validation

- Tested using W3C Nu HTML Checker.
- 0 errors, only minor warnings.
- Screenshots located in `/docs/testing/`.

<a id="css-validation"></a>
### 6.2 CSS Validation

- Tested using W3C CSS Validator.
- 0 errors, minor warnings for custom properties.

<a id="javascript-validation"></a>
### 6.3 JavaScript Validation

- JSLint used for validation.
- No major issues.
- 41 stylistic warnings (non-functional).

<a id="accessibility"></a>
### 6.4 Accessibility

- Lighthouse Accessibility Score: 100.
- Includes proper ARIA roles, alt text, and keyboard navigation.

<a id="performance"></a>
### 6.5 Performance

- Lighthouse Performance Score: 96.
- Optimised images and clean JavaScript logic.

  <a id="device-testing"></a>
### 6.6 Device Testing

Successfully tested on:

- Desktop (Windows & macOS)
- Mobile (iPhone, Samsung)
- Tablet devices

<a id="browser-compatibility"></a>
### 6.7 Browser Compatibility

Tested on:

- Chrome
- Firefox
- Safari
- Edge

<a id="testing-user-stories"></a>
### 6.8 Testing User Stories

- All user stories were tested and passed successfully.
- Full test documentation is stored in `/docs/testing/`.

---

<a id="bugs"></a>
## 7. Bugs

### Fixed

- Search results not resetting correctly.
- Missing keyboard accessibility for markers.
- Minor JSLint styling warnings.

### Unresolved

- None — all tests passed successfully.

---

<a id="deployment"></a>
## 8. Deployment

### Deployment Method

The project is hosted using GitHub Pages.

### Steps

1. Commit all changes to the `main` branch.
2. Push to GitHub.
3. Go to **Settings → Pages**.
4. Set source to the `main` branch.
5. Save and view the live URL:  
   <https://Robertas-Cyberattack.github.io/tenerife-holiday-locations/>

### Post-deployment checks

- No console errors.
- Fully responsive.
- Google Maps API loads correctly.
- 404 redirect confirmed.

---

<a id="credits"></a>
## 9. Credits

- Google Maps API Documentation.
- W3C HTML & CSS Validators.
- JSLint.
- StackOverflow Email Regex Reference.
- Icons, tools, and frameworks are used under their respective licenses.
- Core development by **Robertas Cyberattack**.

---

<a id="acknowledgements"></a>
## 10. Acknowledgements

- Tutors and peers for guidance.
- Online documentation for supporting code validation and accessibility techniques.
- Inspiration from Tenerife tourism resources.
