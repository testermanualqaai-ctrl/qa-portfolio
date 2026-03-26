# Bug Reports

## Summary
During testing of the login functionality, the following defects were identified.

---

## BUG-001: Login Button Not Responding

| Field | Value |
|-------|-------|
| Summary | The "Login" button does not respond to clicks |
| Severity | 🔴 Critical |
| Priority | High |
| Environment | URL: https://example.com/login<br>Browser: Chrome 120.0.0<br>OS: Windows 11<br>Device: Desktop |

### Steps to Reproduce
1. Navigate to https://example.com/login
2. Click "Sign In" in the header
3. Enter valid email: test@example.com
4. Enter valid password: TestPass123!
5. Click "Login" button

### Expected Result
User is redirected to dashboard page

### Actual Result
Nothing happens when clicking the Login button. No error message displayed.

### Screenshots
[ScreenShot would be attached here]

### Additional Notes
- Button appears visually normal
- No console errors visible
- Refreshing page does not fix the issue

---

## BUG-002: Login Allows Empty Password

| Field | Value |
|-------|-------|
| Summary | User can log in without entering a password |
| Severity | 🔴 Critical |
| Priority | High |
| Environment | Chrome 120, Windows 11 |

### Steps to Reproduce
1. Open login page
2. Enter valid email
3. Leave password field empty
4. Click "Login"

### Expected Result
Validation error: "Password is required"

### Actual Result
User is successfully logged in without password

### Screenshots
[Screenshot would be attached here]

---

## BUG-003: No Error Message on Invalid Login

| Field | Value |
|-------|-------|
| Summary | No error message when entering invalid credentials |
| Severity | 🟠 Medium |
| Priority | Medium |
| Environment | Chrome 120, Windows 11 |

### Steps to Reproduce
1. Open login page
2. Enter invalid credentials
3. Click "Login"

### Expected Result
Error message: "Invalid email or password"

### Actual Result
Nothing happens — no error message, no loading indicator

### Screenshots
[Screenshot would be attached here]

---

## Bug Statistics

| Severity | Count |
|----------|-------|
| 🔴 Critical | 2 |
| 🟠 Medium | 1 |
| Total | 3 |
