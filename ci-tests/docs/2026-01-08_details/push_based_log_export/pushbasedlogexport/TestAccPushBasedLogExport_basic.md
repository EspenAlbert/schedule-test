# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033350000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/695da933d59b8466ea7264dc/cloudProviderAccess/695da9e7d59b8466ea7399f8 | dev | 25.05s

### Timeline
- 2025-12-09: MISSING
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
- 2026-01-03 PASS a minute
- 2026-01-04: MISSING
- 2026-01-05 PASS a minute
- 2026-01-06 PASS a minute
- 2026-01-07

### Error 2026-01-07T00:33:35+00:00
```
2026-01-07T00:33:35.9897856Z === RUN   TestAccPushBasedLogExport_basic
2026-01-07T00:33:45.0755420Z 2026/01/07 00:33:45 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da933d59b8466ea7264dc/cloudProviderAccess/695da9e7d59b8466ea7399f8 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4461923074375362694-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4461923074375362694-policy], BadRequestDetail:  
2026-01-07T00:33:45.0758206Z 2026/01/07 00:33:45 retrying
2026-01-07T00:33:56.1643259Z    test_name=TestAccPushBasedLogExport_basic
2026-01-07T00:33:56.1644243Z     resource_test.go:24: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:33:56.1644866Z         
2026-01-07T00:33:56.1645549Z         Error: Error when creating push-based log export configuration
2026-01-07T00:33:56.1646177Z         
2026-01-07T00:33:56.1647034Z           with mongodbatlas_push_based_log_export.test,
2026-01-07T00:33:56.1648331Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2026-01-07T00:33:56.1649554Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2026-01-07T00:33:56.1650147Z         
2026-01-07T00:33:56.1651163Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da933d59b8466ea7264dc/pushBasedLogExport
2026-01-07T00:33:56.1652449Z         POST: HTTP 400 Bad Request (Error code: "IAM_ROLE_CANNOT_WRITE_TO_S3_BUCKET")
2026-01-07T00:33:56.1653554Z         Detail: The IAM role cannot write to the S3 bucket. Reason: Bad Request.
2026-01-07T00:33:56.1654254Z         Params:
2026-01-07T00:33:56.1655183Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4461923074375362694-policy
2026-01-07T00:33:56.1656524Z         mongodb-atlas-tf-xhddblkwxy-1 Problem uploading object to S3:
2026-01-07T00:33:56.1657033Z         mongodb-atlas-tf-xhddblkwxy-1: User:
2026-01-07T00:33:56.1658374Z         arn:aws:sts::358363220050:assumed-role/mongodb-atlas-test-acc-tf-4461923074375362694-policy/MONGODB_CLOUD_PROVIDER_ACCESS_695da9f3af4f6cc389e953ae
2026-01-07T00:33:56.1659192Z         is not authorized to perform: s3:PutObject on resource:
2026-01-07T00:33:56.1659774Z         "arn:aws:s3:::mongodb-atlas-tf-xhddblkwxy-1/push-log-prefix/atlas-test"
2026-01-07T00:33:56.1660364Z         because no identity-based policy allows the s3:PutObject action]],
2026-01-07T00:33:56.1660769Z         BadRequestDetail: 
2026-01-07T00:34:01.4492058Z --- FAIL: TestAccPushBasedLogExport_basic (25.46s)
```

- 2026-01-08 PASS a minute

## QA Environment
### Timeline
- 2025-12-09: MISSING
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
- 2026-01-03: MISSING
- 2026-01-04 PASS a minute
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS a minute
