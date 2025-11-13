# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-18 00:26](#error-2025-10-18t0026430000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/68f2dec43c4aee113d17d985/cloudProviderAccess/68f2dece3c4aee113d183997 | dev |  | 28.08s
[2025-10-31 00:30](#error-2025-10-31t0030100000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6904026f4135c478eefcf899/cloudProviderAccess/6904031ef55ba2073d8cd892 | dev |  | 28.07s
[2025-11-13 00:27](#error-2025-11-13t0027410000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/691525fd64d8514eb7447d83/cloudProviderAccess/6915260764d8514eb744e553 | dev | flaky_500 | 26.01s

## Timeline
- 2025-10-14: MISSING
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
- 2025-10-23 PASS a minute
- 2025-10-24 PASS a minute
- 2025-10-25 PASS a minute
- 2025-10-26 PASS a minute
- 2025-10-27 PASS a minute
- 2025-10-28 PASS a minute
- 2025-10-29 PASS a minute
- 2025-10-30 PASS a minute
- 2025-10-31

### Error 2025-10-31T00:30:10+00:00
```
2025-10-31T00:30:10.0308025Z === RUN   TestAccPushBasedLogExport_basic
2025-10-31T00:30:23.0106667Z 2025/10/31 00:30:23 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6904026f4135c478eefcf899/cloudProviderAccess/6904031ef55ba2073d8cd892 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3116273934828881119-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3116273934828881119-policy], BadRequestDetail:  
2025-10-31T00:30:23.0109587Z 2025/10/31 00:30:23 retrying
2025-10-31T00:30:33.5439879Z    test_name=TestAccPushBasedLogExport_basic test_terraform_path=/home/runner/work/_temp/64a3196f-81ac-4f2a-86af-b7fd436fa007/terraform test_working_directory=/tmp/plugintest2128387925 test_step_number=1
2025-10-31T00:30:33.5441734Z     resource_test.go:24: Step 1/3 error: Error running apply: exit status 1
2025-10-31T00:30:33.5442379Z         
2025-10-31T00:30:33.5443103Z         Error: Error when creating push-based log export configuration
2025-10-31T00:30:33.5443655Z         
2025-10-31T00:30:33.5444018Z           with mongodbatlas_push_based_log_export.test,
2025-10-31T00:30:33.5444702Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2025-10-31T00:30:33.5445378Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-10-31T00:30:33.5445715Z         
2025-10-31T00:30:33.5446295Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6904026f4135c478eefcf899/pushBasedLogExport
2025-10-31T00:30:33.5447320Z         POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas
2025-10-31T00:30:33.5447787Z         cannot assume the specified role
2025-10-31T00:30:33.5448383Z         ([arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3116273934828881119-policy]).
2025-10-31T00:30:33.5448882Z         Reason: Bad Request. Params:
2025-10-31T00:30:33.5449446Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3116273934828881119-policy]],
2025-10-31T00:30:33.5449905Z         BadRequestDetail: 
2025-10-31T00:30:38.7640636Z --- FAIL: TestAccPushBasedLogExport_basic (28.73s)
```

- 2025-11-01: MISSING
- 2025-11-02 PASS a minute
- 2025-11-03 PASS a minute
- 2025-11-04 PASS a minute
- 2025-11-05
  - PASS a minute
  - PASS a minute
- 2025-11-06 PASS a minute
- 2025-11-07 PASS a minute
- 2025-11-08 PASS a minute
- 2025-11-09 PASS a minute
- 2025-11-10 PASS a minute
- 2025-11-11 PASS a minute
- 2025-11-12 PASS a minute
- 2025-11-13
  - FAIL 26 seconds

### Error 2025-11-13T00:27:41+00:00
```
2025-11-13T00:27:41.3716271Z === RUN   TestAccPushBasedLogExport_basic
2025-11-13T00:27:41.3719568Z     resource_test.go:24: Creating execution project: test-acc-tf-p-6524980874967099141
2025-11-13T00:27:51.7868348Z 2025/11/13 00:27:51 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691525fd64d8514eb7447d83/cloudProviderAccess/6915260764d8514eb744e553 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5988100344904700679-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5988100344904700679-policy], BadRequestDetail:  
2025-11-13T00:27:51.7871100Z 2025/11/13 00:27:51 retrying
2025-11-13T00:28:02.5703484Z    test_terraform_path=/home/runner/work/_temp/bc9586bc-a9f5-4cf8-8f6f-38b45363db2a/terraform
2025-11-13T00:28:02.5704214Z     resource_test.go:24: Step 1/3 error: Error running apply: exit status 1
2025-11-13T00:28:02.5704597Z         
2025-11-13T00:28:02.5705004Z         Error: Error when creating push-based log export configuration
2025-11-13T00:28:02.5705366Z         
2025-11-13T00:28:02.5705726Z           with mongodbatlas_push_based_log_export.test,
2025-11-13T00:28:02.5706406Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2025-11-13T00:28:02.5707045Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-11-13T00:28:02.5707376Z         
2025-11-13T00:28:02.5707939Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/691525fd64d8514eb7447d83/pushBasedLogExport
2025-11-13T00:28:02.5708777Z         POST: HTTP 400 Bad Request (Error code:
2025-11-13T00:28:02.5709315Z         "IAM_ROLE_CANNOT_READ_FROM_S3_BUCKET") Detail: The IAM role cannot read from
2025-11-13T00:28:02.5709800Z         the S3 bucket. Reason: Bad Request. Params:
2025-11-13T00:28:02.5710652Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5988100344904700679-policy
2025-11-13T00:28:02.5711354Z         mongodb-atlas-tf-z2oz3odxjd-1 Problem listing objects: The AWS Access Key Id
2025-11-13T00:28:02.5711964Z         you provided does not exist in our records.]], BadRequestDetail: 
2025-11-13T00:28:07.4798232Z --- FAIL: TestAccPushBasedLogExport_basic (26.11s)
```

  - PASS a minute