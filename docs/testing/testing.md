# 🧪 Testing Report

## Principles
Testing was carried out using both **manual** and **automated** methods to ensure full functionality, responsiveness, and code quality.

### Manual Testing
Used to check real user interactions:
- Navigation, search, and map functionality.
- Contact form input handling and feedback.
- Accessibility and responsiveness across devices.

### Automated Testing
Used to validate code quality and compliance:
- **HTML Validation:** [W3C HTML Validator](https://validator.w3.org/)
- **CSS Validation:** [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- **JavaScript Linting:** [JSLint](https://jslint.com/)

Results and screenshots are stored in `/docs/testing/`.

---

## Manual Test Cases

| Feature | Input/Action | Expected Result | Pass? |
|----------|---------------|-----------------|:----:|
| **Search Bar** | Type `"Santa Cruz"` | Only Santa Cruz card visible | ✅ |
| **Search Bar** | Type `"xyz"` | Feedback: “No results found” | ✅ |
| **Reset Button** | Click reset | All cards visible again | ✅ |
| **Contact Form** | Submit empty fields | Error: “⚠️ Please complete all fields.” | ✅ |
| **Contact Form** | Enter invalid email | Error: “⚠️ Please enter a valid email address.” | ✅ |
| **Contact Form** | Enter valid input | Success: “✅ Thank you! Your message has been saved locally.” | ✅ |
| **Google Map** | Click a marker | InfoWindow appears and map zooms | ✅ |
| **Google Map** | API blocked or fails | Error message displayed gracefully | ✅ |
| **Responsive Layout** | Resize below 600px | Layout adapts to single-column view | ✅ |
| **404 Redirect** | Open `/404.html` | Redirects to homepage within 3 seconds | ✅ |

---

## Automated Testing Results

| Code Type | Validator Used | Result | Notes |
|------------|----------------|---------|-------|
| **HTML** | W3C HTML Validator | ✅ Passed | Only minor self-closing tag notes |
| **CSS** | W3C CSS Validator | ✅ Passed | 3 warnings for CSS variables (expected) |
| **JavaScript** | JSLint | ✅ Passed (no major issues) | 41 stylistic warnings (quotes, braces) |

**Validation proof files:**
- `/docs/testing/Showing results for contents of text-input area - Nu Html Checker.pdf`
- `/docs/testing/W3C CSS Validator results for TextArea (CSS level 3 + SVG).pdf`
- `/docs/testing/JSLint_The JavaScript Code Quality and Coverage Tool.pdf`

---

## Bug Evaluation

| Bug Found | Description | Fix Implemented | Status |
|------------|--------------|------------------|:------:|
| **Search feedback not resetting** | “No results” message remained after reset. | Cleared feedback text inside reset event listener. | ✅ Fixed |
| **Accessibility (Enter key on location cards)** | Enter key did not trigger marker click. | Added `keypress` listener for `"Enter"`. | ✅ Fixed |
| **JSLint warnings** | Style-related only (single quotes, braces). | Not critical — noted for future cleanup. | ⚠️ Not fixed (stylistic only) |

---

## Device & Browser Compatibility
Manual testing was performed on the following:
- **Browsers:** Chrome, Edge, Firefox  
- **Devices:** Desktop (1080p), Tablet (iPad), Mobile (iPhone & Android)  
✅ Layout and interactivity consistent across all platforms.

---

## Summary
All key features work as intended.  
The site passes both **functional** and **validation** tests, with only minor stylistic warnings from the JavaScript linter.  
No functional bugs remain unresolved.

**Status:** ✅ Fully functional, tested, and validated.