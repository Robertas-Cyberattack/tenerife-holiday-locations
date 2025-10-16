\# 🌴 Tenerife Holiday Locations



\## 🎯 Project Overview

\*\*Tenerife Holiday Locations\*\* is an \*\*interactive web application\*\* that helps users explore the top tourist destinations in Tenerife.  

It demonstrates responsive web design, accessibility, and front-end interactivity using \*\*HTML, CSS, and JavaScript\*\*, along with the \*\*Google Maps API\*\*.



---



\## 💡 Rationale \& Value

This project was developed for \*\*tourists visiting Tenerife\*\* who want:

\- A simple and \*\*interactive map-based experience\*\* to explore key destinations.

\- \*\*Quick visual summaries\*\* of each location (images, descriptions, population).

\- \*\*Accessible features\*\* with responsive design and clear feedback messages.



The application provides real-world value by combining \*\*functionality\*\*, \*\*usability\*\*, and \*\*design clarity\*\*, making it easy for users to research Tenerife without prior knowledge.



---



\## 👥 Target Audience

\- Tourists and visitors to Tenerife.  

\- Users seeking \*\*intuitive navigation and visual exploration\*\* tools.  

\- People requiring \*\*accessible and mobile-friendly\*\* travel resources.



---



\## 🧩 Key Features

\- ✅ Responsive layout (HTML, CSS, JS)

\- ✅ Google Maps API integration with clickable markers

\- ✅ Search bar to filter locations dynamically

\- ✅ Contact form with field validation and message storage (localStorage)

\- ✅ Accessibility features including keyboard navigation and user feedback

\- ✅ 404 redirect for broken links

\- ✅ Documented testing, validation, and deployment



---



\## 🧠 Development Cycle

This project followed a full front-end development lifecycle:



| Stage | Activities | Evidence |

|--------|-------------|-----------|

| \*\*1. Planning\*\* | Defined purpose, audience, and features. | Documented in README. |

| \*\*2. UX Design\*\* | Created wireframes and mockups using Figma. | `/docs/design/` |

| \*\*3. Development\*\* | Wrote custom HTML, CSS, and JS from scratch. | `/index.html`, `/css/style.css`, `/js/script.js` |

| \*\*4. Testing\*\* | Manual \& automated testing (validators + functional). | `/docs/testing/` |

| \*\*5. Deployment\*\* | Hosted on GitHub Pages. | Live link below. |

| \*\*6. Maintenance\*\* | Frequent, descriptive commits. | GitHub commit history. |



\*\*Example commits:\*\*

\- `add: contact form validation`

\- `fix: search feedback on empty query`

\- `update: accessibility aria-labels`

\- `deploy: final version to GitHub Pages`



---



\## 🎨 UX Design Documentation

\- \*\*Wireframes and mockups:\*\* `/docs/design/`

\- \*\*Design principles applied:\*\*

&nbsp; - \*\*Information Hierarchy:\*\* Structured content with clear headers and visual flow.

&nbsp; - \*\*User Control:\*\* Search, reset, and contact form feedback enhance user interaction.

&nbsp; - \*\*Consistency:\*\* Fonts, colours, spacing, and responsive layouts remain uniform.

&nbsp; - \*\*Accessibility:\*\* ARIA roles, keyboard navigation, and descriptive alt text used throughout.



The final site closely follows the initial wireframes, maintaining the same structure, navigation flow, and user focus areas.



---



\## ⚙️ Project Requirements \& Implementation

| Requirement | Implementation |

|--------------|----------------|

| \*\*2.1 Validated HTML, CSS, JS\*\* | All code validated (see “Code Validation”). |

| \*\*2.2 Use of compound statements\*\* | Implemented `if` conditions and loops in search and validation logic. |

| \*\*2.3 Handle invalid input\*\* | Contact form prevents empty or invalid email submissions. |

| \*\*2.4 Working functionality\*\* | Map interactivity, search, contact form, 404 redirect all functional. |

| \*\*2.5–2.9 File organisation \& readability\*\* | Clean indentation, comments, and consistent file naming. |

| \*\*3.1–3.5 Testing\*\* | Full manual and automated testing documented. |

| \*\*4.1–4.3 Deployment \& version control\*\* | GitHub Pages deployment with versioned commits. |

| \*\*5.1–5.4 Documentation\*\* | README covers full cycle with rationale, testing, validation, and deployment. |



---



\## 🧪 Testing \& Bug Evaluation



\### 3.1 Testing Principles

\*\*Manual testing\*\* checked functionality and user experience.  

\*\*Automated validation\*\* ensured code quality using:

\- \[W3C HTML Validator](https://validator.w3.org/)

\- \[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

\- \[JSLint](https://jslint.com/)



\### 3.2 Testing Procedures

| Feature | Test Description | Expected Result | Pass |

|----------|------------------|----------------|:----:|

| Search bar | Type “Santa Cruz” | Shows Santa Cruz only | ✅ |

| Search “xyz” | No results found message | Correct feedback shown | ✅ |

| Reset button | Resets all locations | Map and list reset | ✅ |

| Contact form empty | Displays warning | “Please complete all fields.” | ✅ |

| Invalid email | Shows invalid email message | Handled gracefully | ✅ |

| Valid email | Saves message locally | Confirmation message shown | ✅ |

| Google Map markers | Click to zoom and open InfoWindow | Works correctly | ✅ |

| 404 redirect | Opens `/404.html` | Redirects home | ✅ |

| Responsive layout | Test on mobile/tablet | Layout adapts correctly | ✅ |



\### Screenshots

Screenshots of the live version and performance local metrics are available in:  

📁 `/docs/testing/screenshots/`



\#### Deployment Testing

\- Retested after hosting on \*\*GitHub Pages\*\* to ensure the deployed version matched the local development build.  

\- Confirmed working \*\*404 redirect\*\*, \*\*Google Maps API integration\*\*, and \*\*no console errors\*\*.  

\- Performed \*\*Lighthouse testing\*\* in Chrome DevTools to assess accessibility, performance, and best practices.  

&nbsp; - Scores achieved: \*\*Performance 96\*\*, \*\*Accessibility 100\*\*, \*\*Best Practices 100\*\*, \*\*SEO 98\*\*.  

&nbsp; - Full report available in: `/docs/testing/lighthouse-report.pdf`



\### Bug Evaluation

\- \*\*Issue:\*\* Search feedback didn’t reset after clearing → \*fixed\*.

\- \*\*Issue:\*\* Missing `Enter` key map accessibility → \*fixed\* via key listener.

\- \*\*Minor JSLint Warnings:\*\* Quote styles and single-line braces (non-critical).

\- \*\*Unresolved Bugs:\*\* None — all functional tests passed.



---



\## ✅ Code Validation

| Code Type | Validator | Errors | Warnings | Status |

|------------|------------|:------:|:----------:|:------:|

| \*\*HTML\*\* | W3C Nu HTML Checker | 0 | Minor (trailing slashes) | ✅ |

| \*\*CSS\*\* | W3C CSS Validator | 0 | 3 (CSS variables) | ✅ |

| \*\*JavaScript\*\* | JSLint | 0 major | 41 stylistic only | ✅ |



\*\*Proof files:\*\*  

\- `/docs/testing/Showing results for contents of text-input area - Nu Html Checker.pdf`  

\- `/docs/testing/W3C CSS Validator results for TextArea (CSS level 3 + SVG).pdf`  

\- `/docs/testing/JSLint\_ The JavaScript Code Quality and Coverage Tool41 warmings .pdf`



---



\## 🌐 Deployment

\*\*Hosting Platform:\*\* GitHub Pages  

\*\*Steps to Deploy:\*\*

1\. Commit latest version to `main`.

2\. Push to GitHub.

3\. Go to `Settings → Pages → Branch: main → Save`.

4\. Visit:  

&nbsp;  🔗 https://Robertas-Cyberattack.github.io/tenerife-holiday-locations/



\*\*Post-Deployment Checks:\*\*

\- Confirmed no broken links or console errors.

\- Verified 404 redirect works.

\- Tested full responsiveness online.



---



\## 🗂️ File \& Code Structure

/assets/images/ → Location images

style.css → Main styling (validated CSS)

script.js → All custom interactivity (validated JS)

/docs/design/ → UX wireframe \& mockup

/docs/testing/ → Validation reports \& screenshots

index.html → Main page

404.html → Redirect page

README.MD → readme file



---



\## 📚 External Code Attribution

All core JavaScript functionality (map, search, contact form) written by the author.  

External references used:

\- \*\*Google Maps API\*\* (official documentation)

\- \*\*Email Regex Pattern:\*\* adapted from \[StackOverflow](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript)

\- \*\*Validation Tools:\*\* \[W3C HTML](https://validator.w3.org/), \[W3C CSS](https://jigsaw.w3.org/css-validator/), \[JSLint](https://jslint.com/)



Each external source is clearly credited both here and in comments above relevant code blocks.



---



\## 🧾 Version Control \& Documentation

\- Regular commits with clear, descriptive messages.  

\- Code divided into separate HTML, CSS, and JS files.  

\- README uses consistent Markdown formatting with headings, spacing, and plain English.  

\- All development stages (design, testing, deployment) are explained clearly.



---



\## 🙌 Credits

\- \*\*Google Maps API\*\*

\- \*\*W3C Validation Tools\*\*

\- \*\*StackOverflow Regex Reference\*\*



---



2025 Robertas Cyberattack – Tenerife Holiday Locations Project

