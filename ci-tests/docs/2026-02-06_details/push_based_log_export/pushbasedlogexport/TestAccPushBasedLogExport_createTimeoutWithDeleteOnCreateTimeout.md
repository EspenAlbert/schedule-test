# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-14 00:38](#error-2026-01-14t0038200000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6966e4325b4465e94c2f386c/cloudProviderAccess/6966e583dec294f0362d09a6 | dev |  | 25.10s
[2026-01-24 00:33](#error-2026-01-24t0033350000) |  | dev | flaky_client | 16.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 24 seconds
- 2026-01-09 PASS 24 seconds
- 2026-01-10 PASS 27 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 24 seconds
- 2026-01-13 PASS 27 seconds
- 2026-01-14

### Error 2026-01-14T00:38:20+00:00
```
2026-01-14T00:38:20.1286244Z === RUN   TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-01-14T00:38:29.0401086Z 2026/01/14 00:38:29 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6966e4325b4465e94c2f386c/cloudProviderAccess/6966e583dec294f0362d09a6 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6725535038840959705-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6725535038840959705-policy], BadRequestDetail:  
2026-01-14T00:38:29.0403643Z 2026/01/14 00:38:29 retrying
2026-01-14T00:38:40.2645428Z   
2026-01-14T00:38:40.2646051Z     resource_test.go:121: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-14T00:38:40.2646563Z         
2026-01-14T00:38:40.2646984Z         Error: Error when creating push-based log export configuration
2026-01-14T00:38:40.2647346Z         
2026-01-14T00:38:40.2647702Z           with mongodbatlas_push_based_log_export.test,
2026-01-14T00:38:40.2648429Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2026-01-14T00:38:40.2649362Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2026-01-14T00:38:40.2649734Z         
2026-01-14T00:38:40.2650314Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6966e4325b4465e94c2f386c/pushBasedLogExport
2026-01-14T00:38:40.2651047Z         POST: HTTP 400 Bad Request (Error code: "IAM_ROLE_CANNOT_WRITE_TO_S3_BUCKET")
2026-01-14T00:38:40.2651696Z         Detail: The IAM role cannot write to the S3 bucket. Reason: Bad Request.
2026-01-14T00:38:40.2652387Z         Params:
2026-01-14T00:38:40.2652920Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6725535038840959705-policy
2026-01-14T00:38:40.2653577Z         mongodb-atlas-tf-ake7bw1d9j-1 Problem uploading object to S3:
2026-01-14T00:38:40.2654037Z         mongodb-atlas-tf-ake7bw1d9j-1: User:
2026-01-14T00:38:40.2655115Z         arn:aws:sts::358363220050:assumed-role/mongodb-atlas-test-acc-tf-6725535038840959705-policy/MONGODB_CLOUD_PROVIDER_ACCESS_6966e58f5b4465e94c306e8b
2026-01-14T00:38:40.2655959Z         is not authorized to perform: s3:PutObject on resource:
2026-01-14T00:38:40.2656543Z         "arn:aws:s3:::mongodb-atlas-tf-ake7bw1d9j-1/push-log-prefix/atlas-test"
2026-01-14T00:38:40.2657150Z         because no identity-based policy allows the s3:PutObject action]],
2026-01-14T00:38:40.2657573Z         BadRequestDetail: 
2026-01-14T00:38:46.1150369Z --- FAIL: TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout (25.99s)
```

- 2026-01-15 PASS 25 seconds
- 2026-01-16 PASS 27 seconds
- 2026-01-17 PASS 27 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 25 seconds
- 2026-01-20 PASS 27 seconds
- 2026-01-21 PASS 25 seconds
- 2026-01-22 PASS 27 seconds
- 2026-01-23 PASS 24 seconds
- 2026-01-24

### Error 2026-01-24T00:33:35+00:00
```
2026-01-24T00:33:35.9305559Z === RUN   TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-01-24T00:33:47.9585840Z   
2026-01-24T00:33:47.9589072Z     resource_test.go:121: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-24T00:33:47.9590031Z         
2026-01-24T00:33:47.9591986Z         Error: error creating cloud provider access Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups/697412ce674654a762fbdb13/cloudProviderAccess": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-01-24T00:33:47.9593424Z         
2026-01-24T00:33:47.9593883Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-01-24T00:33:47.9594903Z           on terraform_plugin_test.tf line 91, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-01-24T00:33:47.9596117Z           91: resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-01-24T00:33:47.9596520Z         
2026-01-24T00:33:52.4153226Z --- FAIL: TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout (16.48s)
```

- 2026-01-25: MISSING
- 2026-01-26 PASS 24 seconds
- 2026-01-27 PASS 24 seconds
- 2026-01-28 PASS 25 seconds
- 2026-01-29 PASS 25 seconds
- 2026-01-30 PASS 25 seconds
- 2026-01-31 PASS 25 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 24 seconds
- 2026-02-03 PASS 25 seconds
- 2026-02-04 PASS 24 seconds
- 2026-02-05 PASS 24 seconds
- 2026-02-06 PASS 26 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 27 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 26 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 27 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 25 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 29 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 24 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 26 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
