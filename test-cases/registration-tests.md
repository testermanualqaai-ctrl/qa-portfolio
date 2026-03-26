# Registration Functionality — Test Cases

## TC-REG-001: Registration with Empty Fields

| Field | Value |
|-------|-------|
| ID | TC-REG-001 |
| Title | Registration — All Fields Empty |
| Preconditions | User is on registration page |
| Steps | 1. Leave all fields empty<br>2. Click "Register" button |
| Expected Result | Validation errors are shown for all required fields |
| Status | ✅ Pass |

---

## TC-REG-002: Registration with Valid Data

| Field | Value |
|-------|-------|
| ID | TC-REG-002 |
| Title | Registration with Valid Data |
| Preconditions | User is on registration page |
| Steps | 1. Enter valid name<br>2. Enter valid email (not registered)<br>3. Enter valid password<br>4. Click "Register" |
| Expected Result | Account is created — user is redirected to dashboard |
| Status | ⏳ Pending |

---

## TC-REG-003: Registration with Existing Email

| Field | Value |
|-------|-------|
| ID | TC-REG-003 |
| Title | Registration with Already Registered Email |
| Preconditions | User with email "test@example.com" already exists |
| Steps | 1. Enter "John Doe"<br>2. Enter "test@example.com"<br>3. Enter valid password<br>4. Click "Register" |
| Expected Result | Error message: "Email already registered" |
| Status | ⏳ Pending |
