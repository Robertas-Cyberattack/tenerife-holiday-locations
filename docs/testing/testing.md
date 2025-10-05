# Testing Report

## Principles
-**Manual testing** for user flows.
-**Automated testing** (HMTL validation through https://validator.w3.org/)
-**Automated testing** (CSS validation through https://jigsaw.w3.org/css-validator/)
-**Automated testing** (JS validation through JSLint).

## Test Cases

| Feature             | Input/Action                        | Expected Result                           | Pass? |
|---------------------|-------------------------------------|-------------------------------------------|-------|
| Search Bar          | "Santa Cruz"                        | Only Santa Cruz card visible              | ✅    |
| Search Bar          | "xyz"                               | Feedback: "No results"                    | ✅    |
| Reset Button        | Click                               | All cards visible                         | ✅    |
| Contact Form        | Empty fields                        | "Complete all fields" error               | ✅    |
| Contact Form        | Invalid email                       | "Enter valid email" error                 | ✅    |
| Contact Form        | Valid input                         | "Thanks! Message saved locally" success   | ✅    |
| Map                 | Click marker                        | InfoWindow with name + zoom               | ✅    |
| Map                 | API blocked                         | Error message shown                       | ✅    |
| Responsive Layout   | Screen < 600px                      | Layout adapts to single column            | ✅    |
| 404 Redirect        | Access `/404.html`                  | Redirects to home in 3 seconds            | ✅    |