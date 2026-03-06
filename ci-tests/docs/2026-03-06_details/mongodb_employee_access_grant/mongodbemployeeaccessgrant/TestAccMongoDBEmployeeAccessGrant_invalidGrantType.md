# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidGrantType Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:51](#error-2026-02-24t0051480000) |  | dev | flaky_500 | 1.01s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS a moment
- 2026-02-06 PASS a moment
- 2026-02-07 PASS a moment
- 2026-02-08: MISSING
- 2026-02-09 PASS a moment
- 2026-02-10 PASS a moment
- 2026-02-11 PASS a moment
- 2026-02-12 PASS a moment
- 2026-02-13 PASS a moment
- 2026-02-14 PASS a moment
- 2026-02-15: MISSING
- 2026-02-16 PASS a moment
- 2026-02-17 PASS a moment
- 2026-02-18 PASS a moment
- 2026-02-19 PASS a moment
- 2026-02-20 PASS a moment
- 2026-02-21 PASS a moment
- 2026-02-22: MISSING
- 2026-02-23 PASS a moment
- 2026-02-24

### Error 2026-02-24T00:51:48+00:00
```
2026-02-24T00:51:48.4031492Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2026-02-24T00:51:49.4978648Z   
2026-02-24T00:51:49.4979631Z     resource_test.go:101: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-24T00:51:49.4980477Z         
2026-02-24T00:51:49.4981418Z         Error: Error setting resource mongodbatlas_mongodb_employee_access_grant
2026-02-24T00:51:49.4982065Z         
2026-02-24T00:51:49.4982737Z           with mongodbatlas_mongodb_employee_access_grant.test,
2026-02-24T00:51:49.4983987Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_mongodb_employee_access_grant" "test":
2026-02-24T00:51:49.4984841Z           12: 		resource "mongodbatlas_mongodb_employee_access_grant" "test" {
2026-02-24T00:51:49.4985246Z         
2026-02-24T00:51:49.4986118Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T00:51:49.4986849Z         type
2026-02-24T00:51:49.5467491Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (1.14s)
```

- 2026-02-25 PASS a moment
- 2026-02-26 PASS a moment
- 2026-02-27 PASS a moment
- 2026-02-28 PASS a moment
- 2026-03-01: MISSING
- 2026-03-02 PASS a moment
- 2026-03-03 PASS a moment
- 2026-03-04 PASS a moment
- 2026-03-05 PASS a moment
- 2026-03-06 PASS a moment

## QA Environment
### Timeline
- 2026-02-04 PASS a moment
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS a moment
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS a moment
- 2026-02-16: MISSING
- 2026-02-17 PASS a moment
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS a moment
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS a moment
- 2026-03-02: MISSING
- 2026-03-03 PASS a moment
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
