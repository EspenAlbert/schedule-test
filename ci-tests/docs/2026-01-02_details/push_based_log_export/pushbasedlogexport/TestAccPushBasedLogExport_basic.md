# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-09 00:30](#error-2025-12-09t0030550000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69376dbf3c12b02ea317b5b6/cloudProviderAccess/69376dca3c12b02ea318123a | dev | flaky_500 | 29.06s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS a minute
- 2025-12-05 PASS a minute
- 2025-12-06 PASS a minute
- 2025-12-07: MISSING
- 2025-12-08 PASS a minute
- 2025-12-09

### Error 2025-12-09T00:30:55+00:00
```
2025-12-09T00:30:55.6513804Z === RUN   TestAccPushBasedLogExport_basic
2025-12-09T00:30:55.6514917Z     resource_test.go:24: Creating execution project: test-acc-tf-p-114467563154021265
2025-12-09T00:31:08.4022222Z 2025/12/09 00:31:08 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69376dbf3c12b02ea317b5b6/cloudProviderAccess/69376dca3c12b02ea318123a PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6626943956757648027-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6626943956757648027-policy], BadRequestDetail:  
2025-12-09T00:31:08.4024636Z 2025/12/09 00:31:08 retrying
2025-12-09T00:31:19.3165974Z   
2025-12-09T00:31:19.3166540Z     resource_test.go:24: Step 1/3 error: Error running apply: exit status 1
2025-12-09T00:31:19.3166919Z         
2025-12-09T00:31:19.3167641Z         Error: Error when creating push-based log export configuration
2025-12-09T00:31:19.3168122Z         
2025-12-09T00:31:19.3168711Z           with mongodbatlas_push_based_log_export.test,
2025-12-09T00:31:19.3169551Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2025-12-09T00:31:19.3170213Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-12-09T00:31:19.3170549Z         
2025-12-09T00:31:19.3171145Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69376dbf3c12b02ea317b5b6/pushBasedLogExport
2025-12-09T00:31:19.3171892Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-12-09T00:31:19.3172477Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-12-09T00:31:19.3172870Z         BadRequestDetail: 
2025-12-09T00:31:25.2516440Z --- FAIL: TestAccPushBasedLogExport_basic (29.60s)
```

- 2025-12-10
  - PASS a minute
  - PASS a minute
- 2025-12-11 PASS a minute
- 2025-12-12 PASS a minute
- 2025-12-13 PASS a minute
- 2025-12-14: MISSING
- 2025-12-15 PASS a minute
- 2025-12-16 PASS a minute
- 2025-12-17 PASS a minute
- 2025-12-18 PASS a minute
- 2025-12-19 PASS a minute
- 2025-12-20 PASS a minute
- 2025-12-21: MISSING
- 2025-12-22 PASS a minute
- 2025-12-23 PASS a minute
- 2025-12-24 PASS a minute
- 2025-12-25 PASS a minute
- 2025-12-26 PASS a minute
- 2025-12-27 PASS a minute
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS a minute
- 2025-12-31 PASS a minute
- 2026-01-01 PASS a minute
- 2026-01-02 PASS a minute

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS a minute
- 2025-12-08: MISSING
- 2025-12-09 PASS a minute
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS a minute
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS a minute
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS a minute
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
