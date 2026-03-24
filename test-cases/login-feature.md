# Test Cases: Login & Search Features

## TC-001: Successful Login

| Field | Value |
|-------|-------|
| ID | TC-001 |
| Title | Successful Login |
| Preconditions | User is registered |
| Priority | High |

### Steps
1. Open login page
2. Enter valid email
3. Enter valid password
4. Click "Login"

### Expected Result
User is logged in and redirected to dashboard

### Status
✅ Passed

---

## TC-002: Login with Incorrect Password

| Field | Value |
|-------|-------|
| ID | TC-002 |
| Title | Login with Incorrect Password |
| Priority | High |

### Steps
1. Open login page
2. Enter valid email
3. Enter incorrect password
4. Click "Login"

### Expected Result
Error message: "Invalid credentials"

### Status
❌ Failed

---

## TC-003: Registration Validation (Empty Fields)

| Field | Value |
|-------|-------|
| ID | TC-003 |
| Title | Registration Validation (Empty Fields) |
| Preconditions | User is on registration page |
| Priority | Medium |

### Steps
1. Leave all fields empty
2. Click "Register"

### Expected Result
Validation errors are shown

### Status
✅ Passed

---

## TC-004: Search Functionality

| Field | Value |
|-------|-------|
| ID | TC-004 |
| Title | Search Functionality |
| Priority | Medium |

### Steps
1. Open website
2. Enter "laptop" in search
3. Click search

### Expected Result
Relevant results are displayed

### Status
✅ Passed

---

## TC-005: Search Non-Existing Product

| Field | Value |
|-------|-------|
| ID | TC-005 |
| Title | Search Non-Existing Product |
| Priority | Low |

### Steps
1. Enter "asdasdasd123"
2. Click search

### Expected Result
"No results found"

### Status
✅ Passed
