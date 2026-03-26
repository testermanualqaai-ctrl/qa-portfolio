# API Testing — Test Cases

## Test Environment
- Base URL: https://example-api.com/users
- Tool: Postman
- Method: GET / POST

---

## TC_API_001: Get User by Valid Name

| Field | Value |
|-------|-------|
| ID | TC_API_001 |
| Title | Valid Parameter Returns Correct Response |
| Request | GET /getname=maks |
| Expected Result | Status: 200 OK — Response contains {"name": "maks"} |
| Status | ✅ Pass |

---

## TC_API_002: Get User with Empty Parameter

| Field | Value |
|-------|-------|
| ID | TC_API_002 |
| Title | Empty Parameter Handling |
| Request | GET /getname= |
| Expected Result | Validation error — "Name parameter is required" |
| Status | ✅ Pass |

---

## TC_API_003: Invalid Age — String Instead of Number

| Field | Value |
|-------|-------|
| ID | TC_API_003 |
| Title | Age Parameter Receives String Value |
| Request | GET /get?age=abc |
| Expected Result | Validation error — "age must be a number" |
| Status | ✅ Pass |

---

## TC_API_004: Negative Age Value

| Field | Value |
|-------|-------|
| ID | TC_API_004 |
| Title | Age Parameter Receives Negative Value |
| Request | GET /get?age=-5 |
| Expected Result | Validation error — "age must be a positive number" |
| Status | ✅ Pass |

---

## TC_API_005: Special Characters in Parameter

| Field | Value |
|-------|-------|
| ID | TC_API_005 |
| Title | Special Characters in Request |
| Request | GET /get?name=%$&sergo@ |
| Expected Result | API handles special characters — returns validation error or escapes properly |
| Status | ✅ Pass |

---

## Summary

| Total Test Cases | Passed | Failed |
|------------------|--------|-------|
| 5 | 5 | 0 |
