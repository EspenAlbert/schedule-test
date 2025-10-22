# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_basic Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 40) FAIL
Success rate: 97.56%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-18 00:26](#error-2025-10-18t0026430000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/68f2dec43c4aee113d17d985/cloudProviderAccess/68f2dece3c4aee113d183997 | dev | 28.08s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS a minute
- 2025-09-24 PASS a minute
- 2025-09-25 PASS a minute
- 2025-09-26 PASS a minute
- 2025-09-27 PASS a minute
- 2025-09-28 PASS a minute
- 2025-09-29 PASS a minute
- 2025-09-30
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-02 PASS a minute
- 2025-10-03 PASS a minute
- 2025-10-04 PASS a minute
- 2025-10-05 PASS a minute
- 2025-10-06 PASS a minute
- 2025-10-07 PASS a minute
- 2025-10-08 PASS a minute
- 2025-10-09 PASS a minute
- 2025-10-10 PASS a minute
- 2025-10-11 PASS a minute
- 2025-10-12 PASS a minute
- 2025-10-13 PASS a minute
- 2025-10-14 PASS a minute
- 2025-10-15 PASS a minute
- 2025-10-16 PASS a minute
- 2025-10-17 PASS a minute
- 2025-10-18

### Error 2025-10-18T00:26:43+00:00
```
2025-10-18T00:26:43.9633505Z === RUN   TestAccPushBasedLogExport_basic
2025-10-18T00:26:43.9636559Z     resource_test.go:24: Creating execution project: test-acc-tf-p-6964403430348810116
2025-10-18T00:26:56.4860452Z 2025/10/18 00:26:56 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f2dec43c4aee113d17d985/cloudProviderAccess/68f2dece3c4aee113d183997 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7445048092407282847-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7445048092407282847-policy], BadRequestDetail:  
2025-10-18T00:26:56.4863018Z 2025/10/18 00:26:56 retrying
2025-10-18T00:27:07.3706615Z    test_working_directory=/tmp/plugintest1454287769 test_step_number=1
2025-10-18T00:27:07.3707335Z     resource_test.go:24: Step 1/3 error: Error running apply: exit status 1
2025-10-18T00:27:07.3707710Z         
2025-10-18T00:27:07.3708130Z         Error: Error when creating push-based log export configuration
2025-10-18T00:27:07.3708476Z         
2025-10-18T00:27:07.3708826Z           with mongodbatlas_push_based_log_export.test,
2025-10-18T00:27:07.3709531Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2025-10-18T00:27:07.3710188Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-10-18T00:27:07.3710522Z         
2025-10-18T00:27:07.3711107Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f2dec43c4aee113d17d985/pushBasedLogExport
2025-10-18T00:27:07.3711840Z         POST: HTTP 400 Bad Request (Error code: "IAM_ROLE_CANNOT_WRITE_TO_S3_BUCKET")
2025-10-18T00:27:07.3712853Z         Detail: The IAM role cannot write to the S3 bucket. Reason: Bad Request.
2025-10-18T00:27:07.3713244Z         Params:
2025-10-18T00:27:07.3713772Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7445048092407282847-policy
2025-10-18T00:27:07.3714422Z         mongodb-atlas-tf-ckg1h4xdvt-1 Problem retrieving bucket location:
2025-10-18T00:27:07.3714901Z         mongodb-atlas-tf-ckg1h4xdvt-1: User:
2025-10-18T00:27:07.3715840Z         arn:aws:sts::358363220050:assumed-role/mongodb-atlas-test-acc-tf-7445048092407282847-policy/MONGODB_CLOUD_PROVIDER_ACCESS_68f2deda8a4bcb28a6665c31
2025-10-18T00:27:07.3716656Z         is not authorized to perform: s3:PutObject on resource:
2025-10-18T00:27:07.3717223Z         "arn:aws:s3:::mongodb-atlas-tf-ckg1h4xdvt-1/push-log-prefix/atlas-test"
2025-10-18T00:27:07.3717818Z         because no identity-based policy allows the s3:PutObject action]],
2025-10-18T00:27:07.3718232Z         BadRequestDetail: 
2025-10-18T00:27:12.7911321Z --- FAIL: TestAccPushBasedLogExport_basic (28.83s)
```

- 2025-10-19 PASS a minute
- 2025-10-20
  - PASS a minute
  - PASS a minute
- 2025-10-21 PASS a minute
- 2025-10-22
  - PASS a minute
  - PASS a minute