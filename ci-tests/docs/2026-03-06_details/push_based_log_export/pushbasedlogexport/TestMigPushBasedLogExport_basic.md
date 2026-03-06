# push_based_log_export/pushbasedlogexport/TestMigPushBasedLogExport_basic Test Details
# Found 20 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06 PASS a minute
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS a minute
- 2026-02-10: MISSING
- 2026-02-11 PASS a minute
- 2026-02-12: MISSING
- 2026-02-13 PASS a minute
- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16 PASS a minute
- 2026-02-17: MISSING
- 2026-02-18 PASS a minute
- 2026-02-19: MISSING
- 2026-02-20 PASS a minute
- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23 PASS a minute
- 2026-02-24: MISSING
- 2026-02-25 PASS a minute
- 2026-02-26: MISSING
- 2026-02-27 PASS a minute
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02 PASS a minute
- 2026-03-03: MISSING
- 2026-03-04 PASS a minute
- 2026-03-05: MISSING
- 2026-03-06 PASS a minute

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-22 00:38](#error-2026-02-22t0038480000) | IAM_ROLE_CANNOT_WRITE_TO_S3_BUCKET /api/atlas/v2/groups/699a501862519b89146812a0/pushBasedLogExport | qa | 27.09s

### Timeline
- 2026-02-04 PASS a minute
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS a minute
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS a minute
- 2026-02-16: MISSING
- 2026-02-17 PASS a minute
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T00:38:48+00:00
```
2026-02-22T00:38:48.0088845Z === RUN   TestMigPushBasedLogExport_basic
2026-02-22T00:38:48.0090205Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-5592231835410764981
2026-02-22T00:39:11.2483806Z    test_terraform_path=/home/runner/work/_temp/f536def6-b156-463f-82e4-95c442b72f19/terraform test_name=TestMigPushBasedLogExport_basic test_working_directory=/tmp/plugintest3140805392
2026-02-22T00:39:11.2485941Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-02-22T00:39:11.2486756Z         
2026-02-22T00:39:11.2487553Z         Error: Error when creating push-based log export configuration
2026-02-22T00:39:11.2488264Z         
2026-02-22T00:39:11.2488957Z           with mongodbatlas_push_based_log_export.test,
2026-02-22T00:39:11.2490578Z           on terraform_plugin_test.tf line 148, in resource "mongodbatlas_push_based_log_export" "test":
2026-02-22T00:39:11.2491619Z          148: 			   resource "mongodbatlas_push_based_log_export" "test" {
2026-02-22T00:39:11.2491989Z         
2026-02-22T00:39:11.2492587Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/699a501862519b89146812a0/pushBasedLogExport
2026-02-22T00:39:11.2493803Z         POST: HTTP 400 Bad Request (Error code: "IAM_ROLE_CANNOT_WRITE_TO_S3_BUCKET")
2026-02-22T00:39:11.2494777Z         Detail: The IAM role cannot write to the S3 bucket. Reason: Bad Request.
2026-02-22T00:39:11.2495268Z         Params:
2026-02-22T00:39:11.2495958Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8852516409431060105-policy
2026-02-22T00:39:11.2496757Z         mongodb-atlas-tf-rii4bwzomo-1 Problem uploading object to S3:
2026-02-22T00:39:11.2497661Z         mongodb-atlas-tf-rii4bwzomo-1: The AWS Access Key Id you provided does not
2026-02-22T00:39:11.2498336Z         exist in our records.]], BadRequestDetail: 
2026-02-22T00:39:15.9263950Z --- FAIL: TestMigPushBasedLogExport_basic (27.92s)
```

- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS a minute
- 2026-03-02: MISSING
- 2026-03-03 PASS a minute
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
