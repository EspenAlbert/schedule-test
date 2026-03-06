# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:51](#error-2026-02-24t0051490000) |  | dev | flaky_500 | 2.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 2 seconds
- 2026-02-06 PASS 2 seconds
- 2026-02-07 PASS 4 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 2 seconds
- 2026-02-10 PASS 3 seconds
- 2026-02-11 PASS 3 seconds
- 2026-02-12 PASS 3 seconds
- 2026-02-13 PASS 3 seconds
- 2026-02-14 PASS 2 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 2 seconds
- 2026-02-17 PASS 2 seconds
- 2026-02-18 PASS 2 seconds
- 2026-02-19 PASS 3 seconds
- 2026-02-20 PASS 2 seconds
- 2026-02-21 PASS 3 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 3 seconds
- 2026-02-24

### Error 2026-02-24T00:51:49+00:00
```
2026-02-24T00:51:49.5468145Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate
2026-02-24T00:51:51.8672090Z    test_name=TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate test_terraform_path=/home/runner/work/_temp/9322ef59-96d2-4f85-b49e-dd6a0a361943/terraform
2026-02-24T00:51:51.8673247Z     resource_test.go:116: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:51:51.8673791Z         
2026-02-24T00:51:51.8674365Z         Error: Error setting resource mongodbatlas_mongodb_employee_access_grant
2026-02-24T00:51:51.8674750Z         
2026-02-24T00:51:51.8675228Z           with mongodbatlas_mongodb_employee_access_grant.test,
2026-02-24T00:51:51.8676094Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_mongodb_employee_access_grant" "test":
2026-02-24T00:51:51.8676989Z           12: 		resource "mongodbatlas_mongodb_employee_access_grant" "test" {
2026-02-24T00:51:51.8677352Z         
2026-02-24T00:51:51.8677805Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T00:51:51.8678207Z         type
2026-02-24T00:51:51.9172673Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate (2.37s)
```

- 2026-02-25 PASS 2 seconds
- 2026-02-26 PASS 4 seconds
- 2026-02-27 PASS 2 seconds
- 2026-02-28 PASS 3 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 3 seconds
- 2026-03-03 PASS 2 seconds
- 2026-03-04 PASS 2 seconds
- 2026-03-05 PASS 2 seconds
- 2026-03-06 PASS 3 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 2 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS a second
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS a second
- 2026-02-16: MISSING
- 2026-02-17 PASS 2 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 2 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS a second
- 2026-03-02: MISSING
- 2026-03-03 PASS a second
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
