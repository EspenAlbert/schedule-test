# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-09 00:31](#error-2025-12-09t0031510000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69376dbf3c12b02ea317b5b6/cloudProviderAccess/69376dff34dc5f47bd0483f6 | dev | 25.05s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 24 seconds
- 2025-12-05 PASS 24 seconds
- 2025-12-06 PASS 27 seconds
- 2025-12-07: MISSING
- 2025-12-08 PASS 23 seconds
- 2025-12-09

### Error 2025-12-09T00:31:51+00:00
```
2025-12-09T00:31:51.6286113Z === RUN   TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2025-12-09T00:32:01.1819076Z 2025/12/09 00:32:01 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69376dbf3c12b02ea317b5b6/cloudProviderAccess/69376dff34dc5f47bd0483f6 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7186186375255049775-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7186186375255049775-policy], BadRequestDetail:  
2025-12-09T00:32:01.1822163Z 2025/12/09 00:32:01 retrying
2025-12-09T00:32:11.7732650Z    test_working_directory=/tmp/plugintest3333887416 test_step_number=1 test_name=TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2025-12-09T00:32:11.7733894Z     resource_test.go:121: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-12-09T00:32:11.7734380Z         
2025-12-09T00:32:11.7734797Z         Error: Error when creating push-based log export configuration
2025-12-09T00:32:11.7735147Z         
2025-12-09T00:32:11.7735509Z           with mongodbatlas_push_based_log_export.test,
2025-12-09T00:32:11.7736362Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2025-12-09T00:32:11.7737021Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-12-09T00:32:11.7737603Z         
2025-12-09T00:32:11.7738204Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69376dbf3c12b02ea317b5b6/pushBasedLogExport
2025-12-09T00:32:11.7738785Z         POST: HTTP 400 Bad Request (Error code:
2025-12-09T00:32:11.7739339Z         "PUSH_BASED_LOG_EXPORT_ALREADY_CONFIGURED") Detail: Push-based log export
2025-12-09T00:32:11.7739986Z         configuration is already configured (current state = INITIATING) for group
2025-12-09T00:32:11.7740635Z         69376dbf3c12b02ea317b5b6. Push-based log export configuration can only be
2025-12-09T00:32:11.7741280Z         created from the "UNCONFIGURED" state. Reason: Bad Request. Params:
2025-12-09T00:32:11.7741818Z         [INITIATING 69376dbf3c12b02ea317b5b6], BadRequestDetail: 
2025-12-09T00:32:17.1039654Z --- FAIL: TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout (25.48s)
```

- 2025-12-10
  - PASS 24 seconds
  - PASS 24 seconds
- 2025-12-11 PASS 34 seconds
- 2025-12-12 PASS 25 seconds
- 2025-12-13 PASS 24 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 27 seconds
- 2025-12-16 PASS 27 seconds
- 2025-12-17 PASS 25 seconds
- 2025-12-18 PASS 24 seconds
- 2025-12-19 PASS 27 seconds
- 2025-12-20 PASS 27 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 24 seconds
- 2025-12-23 PASS 27 seconds
- 2025-12-24 PASS 24 seconds
- 2025-12-25 PASS 28 seconds
- 2025-12-26 PASS 28 seconds
- 2025-12-27 PASS 24 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 27 seconds
- 2025-12-31 PASS 25 seconds
- 2026-01-01 PASS 28 seconds
- 2026-01-02 PASS 28 seconds

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 24 seconds
- 2025-12-08: MISSING
- 2025-12-09 PASS 27 seconds
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 24 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 25 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 27 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
