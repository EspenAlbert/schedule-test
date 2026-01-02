# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_createFailure Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-09 00:31](#error-2025-12-09t0031510000) |  | dev | 0.06s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS a moment
- 2025-12-05 PASS a moment
- 2025-12-06 PASS a moment
- 2025-12-07: MISSING
- 2025-12-08 PASS a moment
- 2025-12-09

### Error 2025-12-09T00:31:51+00:00
```
2025-12-09T00:31:51.0200787Z === RUN   TestAccPushBasedLogExport_createFailure
2025-12-09T00:31:51.5792888Z   
2025-12-09T00:31:51.5793452Z     resource_test.go:98: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-12-09T00:31:51.5793926Z         
2025-12-09T00:31:51.5794658Z         Error: Error when creating push-based log export configuration
2025-12-09T00:31:51.5795030Z         
2025-12-09T00:31:51.5795390Z           with mongodbatlas_push_based_log_export.test,
2025-12-09T00:31:51.5796082Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_push_based_log_export" "test":
2025-12-09T00:31:51.5796719Z           11: resource "mongodbatlas_push_based_log_export" "test" {
2025-12-09T00:31:51.5797297Z         
2025-12-09T00:31:51.5798128Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69376dbf3c12b02ea317b5b6/pushBasedLogExport
2025-12-09T00:31:51.5798717Z         POST: HTTP 400 Bad Request (Error code:
2025-12-09T00:31:51.5799248Z         "PUSH_BASED_LOG_EXPORT_ALREADY_CONFIGURED") Detail: Push-based log export
2025-12-09T00:31:51.5799889Z         configuration is already configured (current state = INITIATING) for group
2025-12-09T00:31:51.5800544Z         69376dbf3c12b02ea317b5b6. Push-based log export configuration can only be
2025-12-09T00:31:51.5801352Z         created from the "UNCONFIGURED" state. Reason: Bad Request. Params:
2025-12-09T00:31:51.5801898Z         [INITIATING 69376dbf3c12b02ea317b5b6], BadRequestDetail: 
2025-12-09T00:31:51.6285216Z --- FAIL: TestAccPushBasedLogExport_createFailure (0.61s)
```

- 2025-12-10
  - PASS a moment
  - PASS a moment
- 2025-12-11 PASS a moment
- 2025-12-12 PASS a moment
- 2025-12-13 PASS a moment
- 2025-12-14: MISSING
- 2025-12-15 PASS a second
- 2025-12-16 PASS a moment
- 2025-12-17 PASS a moment
- 2025-12-18 PASS a moment
- 2025-12-19 PASS a moment
- 2025-12-20 PASS a moment
- 2025-12-21: MISSING
- 2025-12-22 PASS a moment
- 2025-12-23 PASS a moment
- 2025-12-24 PASS a moment
- 2025-12-25 PASS a moment
- 2025-12-26 PASS a moment
- 2025-12-27 PASS a moment
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS a moment
- 2025-12-31 PASS a moment
- 2026-01-01 PASS a moment
- 2026-01-02 PASS a moment

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS a moment
- 2025-12-08: MISSING
- 2025-12-09 PASS a moment
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS a moment
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS a moment
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS a moment
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
