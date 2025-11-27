# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-31 00:30](#error-2025-10-31t0030100000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6904026f4135c478eefcf899/cloudProviderAccess/6904031ef55ba2073d8cd892 | dev |  | 28.07s
[2025-11-13 00:27](#error-2025-11-13t0027410000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/691525fd64d8514eb7447d83/cloudProviderAccess/6915260764d8514eb744e553 | dev | flaky_500 | 26.01s
[2025-11-14 00:29](#error-2025-11-14t0029250000) | API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId} | dev | real_test_failure | 25.08s

### Timeline
- 2025-10-28: MISSING
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
- 2025-11-02: MISSING
- 2025-11-03 PASS a minute
- 2025-11-04 PASS a minute
- 2025-11-05
  - PASS a minute
  - PASS a minute
- 2025-11-06 PASS a minute
- 2025-11-07 PASS a minute
- 2025-11-08 PASS a minute
- 2025-11-09: MISSING
- 2025-11-10 PASS a minute
- 2025-11-11 PASS a minute
- 2025-11-12 PASS a minute
- 2025-11-13

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

- 2025-11-14

### Error 2025-11-14T00:29:25+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-11-14T00:29:25.685000+00:00-TestAccPushBasedLogExport_basic',confidence=1.0,ts_when='13 days ago')
API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId}
```
2025-11-14T00:29:25.6853350Z === RUN   TestAccPushBasedLogExport_basic
2025-11-14T00:29:34.7724537Z 2025/11/14 00:29:34 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691677adaecdd843bb089b54/cloudProviderAccess/691677ed935d094c09bb1ece PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1040758298249761820-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1040758298249761820-policy], BadRequestDetail:  
2025-11-14T00:29:34.7726623Z 2025/11/14 00:29:34 retrying
2025-11-14T00:29:45.7602580Z    test_step_number=1 test_name=TestAccPushBasedLogExport_basic
2025-11-14T00:29:45.7603152Z     resource_test.go:24: Step 1/3 error: Error running apply: exit status 1
2025-11-14T00:29:45.7603631Z         
2025-11-14T00:29:45.7604038Z         Error: Error when creating push-based log export configuration
2025-11-14T00:29:45.7604355Z         
2025-11-14T00:29:45.7604677Z           with mongodbatlas_push_based_log_export.test,
2025-11-14T00:29:45.7605286Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2025-11-14T00:29:45.7605913Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-11-14T00:29:45.7606411Z         
2025-11-14T00:29:45.7606927Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/691677adaecdd843bb089b54/pushBasedLogExport
2025-11-14T00:29:45.7607447Z         POST: HTTP 400 Bad Request (Error code:
2025-11-14T00:29:45.7607939Z         "IAM_ROLE_CANNOT_READ_FROM_S3_BUCKET") Detail: The IAM role cannot read from
2025-11-14T00:29:45.7608383Z         the S3 bucket. Reason: Bad Request. Params:
2025-11-14T00:29:45.7609126Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1040758298249761820-policy
2025-11-14T00:29:45.7609753Z         mongodb-atlas-tf-16tje996yk-1 Problem listing objects: The AWS Access Key Id
2025-11-14T00:29:45.7610327Z         you provided does not exist in our records.]], BadRequestDetail: 
2025-11-14T00:29:51.5129433Z --- FAIL: TestAccPushBasedLogExport_basic (25.83s)
```

- 2025-11-15 PASS a minute
- 2025-11-16: MISSING
- 2025-11-17 PASS a minute
- 2025-11-18 PASS a minute
- 2025-11-19 PASS a minute
- 2025-11-20 PASS a minute
- 2025-11-21 PASS a minute
- 2025-11-22 PASS a minute
- 2025-11-23: MISSING
- 2025-11-24 PASS a minute
- 2025-11-25 PASS a minute
- 2025-11-26 PASS a minute
- 2025-11-27 PASS a minute

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS a minute
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS a minute
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS a minute
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS a minute
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS a minute
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
