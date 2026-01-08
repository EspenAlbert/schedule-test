# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:31](#error-2026-01-07t0031470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 3.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-12-11 PASS 7 seconds
- 2025-12-12 PASS 10 seconds
- 2025-12-13 PASS 9 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 8 seconds
- 2025-12-16 PASS 9 seconds
- 2025-12-17 PASS 7 seconds
- 2025-12-18 PASS 7 seconds
- 2025-12-19 PASS 9 seconds
- 2025-12-20 PASS 8 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 5 seconds
- 2025-12-23 PASS 9 seconds
- 2025-12-24 PASS 7 seconds
- 2025-12-25 PASS 8 seconds
- 2025-12-26 PASS 7 seconds
- 2025-12-27 PASS 8 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 10 seconds
- 2025-12-31 PASS 11 seconds
- 2026-01-01 PASS 9 seconds
- 2026-01-02 PASS 9 seconds
- 2026-01-03 PASS 8 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 9 seconds
- 2026-01-06 PASS 8 seconds
- 2026-01-07

### Error 2026-01-07T00:31:47+00:00
```
2026-01-07T00:31:47.1240980Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-01-07T00:31:47.1243217Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-01-07T00:31:47.1257357Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2026-01-07T00:31:47.1258032Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:31:47.1258564Z         
2026-01-07T00:31:47.1259013Z         Error: error creating project: test-acc-tf-p-6530459142272258334
2026-01-07T00:31:47.1259406Z         
2026-01-07T00:31:47.1259750Z           with mongodbatlas_project.test,
2026-01-07T00:31:47.1260364Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:31:47.1260937Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:31:47.1261427Z         
2026-01-07T00:31:47.1261991Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:31:47.1262638Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:31:47.1263244Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:31:47.1263741Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (3.35s)
```

- 2026-01-08 PASS 8 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 7 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 5 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 8 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 7 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 8 seconds
