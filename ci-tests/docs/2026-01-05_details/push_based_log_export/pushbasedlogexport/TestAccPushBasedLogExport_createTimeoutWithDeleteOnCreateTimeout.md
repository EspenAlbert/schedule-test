# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout Test Details
# Found 7 TestRuns in dev, qa from 2025-12-30 to 2026-01-05 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-03 00:32](#error-2026-01-03t0032560000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6958630e10f74cda5d9045d1/cloudProviderAccess/695863bf14ba9d26b4688494 | dev | 25.10s

### Timeline
- 2025-12-29: MISSING
- 2025-12-30 PASS 27 seconds
- 2025-12-31 PASS 25 seconds
- 2026-01-01 PASS 28 seconds
- 2026-01-02 PASS 28 seconds
- 2026-01-03

### Error 2026-01-03T00:32:56+00:00
```
2026-01-03T00:32:56.0401796Z === RUN   TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-01-03T00:33:05.1417712Z 2026/01/03 00:33:05 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6958630e10f74cda5d9045d1/cloudProviderAccess/695863bf14ba9d26b4688494 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7148398728537676673-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7148398728537676673-policy], BadRequestDetail:  
2026-01-03T00:33:05.1419958Z 2026/01/03 00:33:05 retrying
2026-01-03T00:33:16.1156937Z   
2026-01-03T00:33:16.1157718Z     resource_test.go:121: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-03T00:33:16.1158347Z         
2026-01-03T00:33:16.1159232Z         Error: Error when creating push-based log export configuration
2026-01-03T00:33:16.1159594Z         
2026-01-03T00:33:16.1160082Z           with mongodbatlas_push_based_log_export.test,
2026-01-03T00:33:16.1160800Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2026-01-03T00:33:16.1161452Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2026-01-03T00:33:16.1161799Z         
2026-01-03T00:33:16.1162378Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6958630e10f74cda5d9045d1/pushBasedLogExport
2026-01-03T00:33:16.1163094Z         POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas
2026-01-03T00:33:16.1163555Z         cannot assume the specified role
2026-01-03T00:33:16.1164170Z         ([arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7148398728537676673-policy]).
2026-01-03T00:33:16.1164664Z         Reason: Bad Request. Params:
2026-01-03T00:33:16.1165276Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7148398728537676673-policy]],
2026-01-03T00:33:16.1165741Z         BadRequestDetail: 
2026-01-03T00:33:22.0159322Z --- FAIL: TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout (25.98s)
```

- 2026-01-04: MISSING
- 2026-01-05 PASS 24 seconds

## QA Environment
### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 24 seconds
- 2026-01-05: MISSING
