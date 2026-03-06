# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 24 seconds
- 2026-02-06 PASS 26 seconds
- 2026-02-07 PASS 27 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 26 seconds
- 2026-02-10 PASS 26 seconds
- 2026-02-11 PASS 28 seconds
- 2026-02-12 PASS 24 seconds
- 2026-02-13 PASS 25 seconds
- 2026-02-14 PASS 27 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 24 seconds
- 2026-02-17 PASS 26 seconds
- 2026-02-18 PASS 24 seconds
- 2026-02-19 PASS 26 seconds
- 2026-02-20 PASS 24 seconds
- 2026-02-21 PASS 25 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 27 seconds
- 2026-02-24 PASS 27 seconds
- 2026-02-25 PASS 27 seconds
- 2026-02-26 PASS 25 seconds
- 2026-02-27 PASS 24 seconds
- 2026-02-28 PASS 25 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 27 seconds
- 2026-03-03 PASS 25 seconds
- 2026-03-04 PASS 24 seconds
- 2026-03-05 PASS 24 seconds
- 2026-03-06 PASS 24 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-22 00:42](#error-2026-02-22t0042480000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/699a501862519b89146812a0/cloudProviderAccess/699a510f62519b891468c0f5 | qa | 22.05s

### Timeline
- 2026-02-04 PASS 26 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 27 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 25 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 25 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T00:42:48+00:00
```
2026-02-22T00:42:48.5600473Z === RUN   TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-02-22T00:42:55.9761152Z 2026/02/22 00:42:55 warning issue performing authorize: https://cloud-qa.mongodb.com/api/atlas/v2/groups/699a501862519b89146812a0/cloudProviderAccess/699a510f62519b891468c0f5 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2710897908849662728-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2710897908849662728-policy], BadRequestDetail:  
2026-02-22T00:42:55.9763496Z 2026/02/22 00:42:55 retrying
2026-02-22T00:43:06.4725654Z   
2026-02-22T00:43:06.4726650Z     resource_test.go:121: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-22T00:43:06.4727609Z         
2026-02-22T00:43:06.4728356Z         Error: Error when creating push-based log export configuration
2026-02-22T00:43:06.4728998Z         
2026-02-22T00:43:06.4729642Z           with mongodbatlas_push_based_log_export.test,
2026-02-22T00:43:06.4731779Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2026-02-22T00:43:06.4733117Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2026-02-22T00:43:06.4733808Z         
2026-02-22T00:43:06.4734935Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/699a501862519b89146812a0/pushBasedLogExport
2026-02-22T00:43:06.4736036Z         POST: HTTP 400 Bad Request (Error code:
2026-02-22T00:43:06.4737080Z         "IAM_ROLE_CANNOT_READ_FROM_S3_BUCKET") Detail: The IAM role cannot read from
2026-02-22T00:43:06.4738059Z         the S3 bucket. Reason: Bad Request. Params:
2026-02-22T00:43:06.4739212Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2710897908849662728-policy
2026-02-22T00:43:06.4740612Z         mongodb-atlas-tf-4ke04stt7x-1 Problem retrieving bucket location:
2026-02-22T00:43:06.4741823Z         mongodb-atlas-tf-4ke04stt7x-1: The AWS Access Key Id you provided does not
2026-02-22T00:43:06.4742808Z         exist in our records.]], BadRequestDetail: 
2026-02-22T00:43:11.1007198Z --- FAIL: TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout (22.54s)
```

- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 24 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 24 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
