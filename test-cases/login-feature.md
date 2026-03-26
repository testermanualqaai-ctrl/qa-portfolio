# Login Functionality — Test Cases

## TC-001: Successful Login

| Field | Value |
|-------|-------|
| ID | TC-001 |
| Title | Successful Login with Valid Credentials |
| Preconditions | User is registered in the system |
| Priority | High |
| Steps | 1. Open login page<br>2. Enter valid email<br>3. Enter valid password<br>4. Click "Login" button |
| Expected Result | User is logged in and redirected to dashboard |
| Status | ✅ Pass |

---

## TC-002: Login with Incorrect Password

| Field | Value |
|-------|-------|
| ID | TC-002 |
| Title | Login with Incorrect Password |
| Preconditions | User is registered in the system |
| Priority | High |
| Steps | 1. Open login page<br>2. Enter valid email<br>3. Enter incorrect password<br>4. Click "Login" |
| Expected Result | Error message: "Invalid credentials" |
| Status | ✅ Pass |

---

## TC-003: Login with Empty Password

| Field | Value |
|-------|-------|
| ID | TC-003 |
| Title | Login with Empty Password Field |
| Preconditions | User is registered |
| Priority | Critical |
| Steps | 1. Open login page<br>2. Enter valid email<br>3. Leave password empty<br>4. Click "Login" |
| Expected Result | Validation error: "Password is required" |
| Actual Result | ❌ User is logged in without password — BUG FOUND |
| Status | ❌ Fail |
| Bug ID | BUG-001 |

---

## TC-004: Login with Empty Email

| Field | Value |
|-------|-------|
| ID | TC-004 |
| Title | Login with Empty Email Field |
| Preconditions | User is registered |
| Priority | High |
| Steps | 1. Open login page<br>2. Leave email empty<br>3. Enter valid password<br>4. Click "Login" |
| Expected Result | Validation error: "Email is required" |
| Status | ⏳ Pending |

---

## TC-005: Login with Invalid Email Format

| Field | Value |
|-------|-------|
| ID | TC-005 |
| Title | Login with Invalid Email Format |
| Preconditions | User is registered |
| Priority | Medium |
| Steps | 1. Open login page<br>2. Enter "testuser@" (without domain)<br>3. Enter valid password<br>4. Click "Login" |
| Expected Result | Validation error: "Please enter a valid email address" |
| Status | ⏳ Pending |
