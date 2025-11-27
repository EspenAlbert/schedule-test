# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_noPrefixPath Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-07 00:31](#error-2025-11-07t0031040000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/690d3d0aa78815557f586d72/cloudProviderAccess/690d3dcfb092065c921264d2 | dev |  | 22.03s
[2025-11-13 00:28](#error-2025-11-13t0028070000) | API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId} | dev | real_test_failure | 23.07s
[2025-11-14 00:29](#error-2025-11-14t0029510000) | API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId} | dev | real_test_failure | 25.04s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 53 seconds
- 2025-10-30 PASS 56 seconds
- 2025-10-31 PASS 53 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 56 seconds
- 2025-11-04 PASS 53 seconds
- 2025-11-05
  - PASS 52 seconds
  - PASS 53 seconds
- 2025-11-06 PASS 52 seconds
- 2025-11-07

### Error 2025-11-07T00:31:04+00:00
```
2025-11-07T00:31:04.6130216Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2025-11-07T00:31:11.9746454Z 2025/11/07 00:31:11 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/690d3d0aa78815557f586d72/cloudProviderAccess/690d3dcfb092065c921264d2 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8858070128505438848-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8858070128505438848-policy], BadRequestDetail:  
2025-11-07T00:31:11.9748479Z 2025/11/07 00:31:11 retrying
2025-11-07T00:31:22.5109063Z    test_step_number=1 test_name=TestAccPushBasedLogExport_noPrefixPath test_terraform_path=/home/runner/work/_temp/21be4709-2961-4ad8-a6dd-e70c7b4a4c7f/terraform test_working_directory=/tmp/plugintest1069146945
2025-11-07T00:31:22.5112042Z     resource_test.go:68: Step 1/1 error: Error running apply: exit status 1
2025-11-07T00:31:22.5112646Z         
2025-11-07T00:31:22.5113360Z         Error: Error when creating push-based log export configuration
2025-11-07T00:31:22.5113929Z         
2025-11-07T00:31:22.5114535Z           with mongodbatlas_push_based_log_export.test,
2025-11-07T00:31:22.5115690Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2025-11-07T00:31:22.5116635Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-11-07T00:31:22.5116992Z         
2025-11-07T00:31:22.5117580Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690d3d0aa78815557f586d72/pushBasedLogExport
2025-11-07T00:31:22.5118299Z         POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas
2025-11-07T00:31:22.5118772Z         cannot assume the specified role
2025-11-07T00:31:22.5119717Z         ([arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8858070128505438848-policy]).
2025-11-07T00:31:22.5120222Z         Reason: Bad Request. Params:
2025-11-07T00:31:22.5121048Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8858070128505438848-policy]],
2025-11-07T00:31:22.5121523Z         BadRequestDetail: 
2025-11-07T00:31:26.9318420Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (22.32s)
```

- 2025-11-08 PASS 54 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 53 seconds
- 2025-11-11 PASS 56 seconds
- 2025-11-12 PASS 50 seconds
- 2025-11-13

### Error 2025-11-13T00:28:07+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-11-13T00:28:07.479000+00:00-TestAccPushBasedLogExport_noPrefixPath',confidence=1.0,ts_when='14 days ago')
API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId}
```
2025-11-13T00:28:07.4799712Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2025-11-13T00:28:15.2567288Z 2025/11/13 00:28:15 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691525fd64d8514eb7447d83/cloudProviderAccess/6915261e64d8514eb7457efc PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8200731995133345817-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8200731995133345817-policy], BadRequestDetail:  
2025-11-13T00:28:15.2570495Z 2025/11/13 00:28:15 retrying
2025-11-13T00:28:26.2919545Z   
2025-11-13T00:28:26.2920221Z     resource_test.go:68: Step 1/1 error: Error running apply: exit status 1
2025-11-13T00:28:26.2920837Z         
2025-11-13T00:28:26.2921441Z         Error: Error when creating push-based log export configuration
2025-11-13T00:28:26.2921953Z         
2025-11-13T00:28:26.2922600Z           with mongodbatlas_push_based_log_export.test,
2025-11-13T00:28:26.2924027Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2025-11-13T00:28:26.2925349Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-11-13T00:28:26.2925950Z         
2025-11-13T00:28:26.2926960Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/691525fd64d8514eb7447d83/pushBasedLogExport
2025-11-13T00:28:26.2927929Z         POST: HTTP 400 Bad Request (Error code:
2025-11-13T00:28:26.2929095Z         "IAM_ROLE_CANNOT_READ_FROM_S3_BUCKET") Detail: The IAM role cannot read from
2025-11-13T00:28:26.2930043Z         the S3 bucket. Reason: Bad Request. Params:
2025-11-13T00:28:26.2931483Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8200731995133345817-policy
2025-11-13T00:28:26.2932670Z         mongodb-atlas-tf-9t1jwxzhss-1 Problem listing objects: The AWS Access Key Id
2025-11-13T00:28:26.2933740Z         you provided does not exist in our records.]], BadRequestDetail: 
2025-11-13T00:28:31.2099945Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (23.73s)
```

- 2025-11-14

### Error 2025-11-14T00:29:51+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-11-14T00:29:51.513000+00:00-TestAccPushBasedLogExport_noPrefixPath',confidence=1.0,ts_when='13 days ago')
API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId}
```
2025-11-14T00:29:51.5130053Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2025-11-14T00:30:00.3174214Z 2025/11/14 00:30:00 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691677adaecdd843bb089b54/cloudProviderAccess/69167806935d094c09bb2d3a PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2977465309081590108-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2977465309081590108-policy], BadRequestDetail:  
2025-11-14T00:30:00.3176691Z 2025/11/14 00:30:00 retrying
2025-11-14T00:30:11.3375160Z   
2025-11-14T00:30:11.3375792Z     resource_test.go:68: Step 1/1 error: Error running apply: exit status 1
2025-11-14T00:30:11.3376406Z         
2025-11-14T00:30:11.3377097Z         Error: Error when creating push-based log export configuration
2025-11-14T00:30:11.3377638Z         
2025-11-14T00:30:11.3378172Z           with mongodbatlas_push_based_log_export.test,
2025-11-14T00:30:11.3379244Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2025-11-14T00:30:11.3380100Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-11-14T00:30:11.3380658Z         
2025-11-14T00:30:11.3381252Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/691677adaecdd843bb089b54/pushBasedLogExport
2025-11-14T00:30:11.3382011Z         POST: HTTP 400 Bad Request (Error code:
2025-11-14T00:30:11.3382760Z         "IAM_ROLE_CANNOT_READ_FROM_S3_BUCKET") Detail: The IAM role cannot read from
2025-11-14T00:30:11.3383528Z         the S3 bucket. Reason: Bad Request. Params:
2025-11-14T00:30:11.3384455Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2977465309081590108-policy
2025-11-14T00:30:11.3385368Z         mongodb-atlas-tf-493kiic9o8-1 Problem listing objects: The AWS Access Key Id
2025-11-14T00:30:11.3386004Z         you provided does not exist in our records.]], BadRequestDetail: 
2025-11-14T00:30:16.8810059Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (25.37s)
```

- 2025-11-15 PASS 53 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 57 seconds
- 2025-11-18 PASS 53 seconds
- 2025-11-19 PASS 56 seconds
- 2025-11-20 PASS 53 seconds
- 2025-11-21 PASS 56 seconds
- 2025-11-22 PASS 55 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 53 seconds
- 2025-11-25 PASS 55 seconds
- 2025-11-26 PASS 54 seconds
- 2025-11-27 PASS 51 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 50 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 52 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 50 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 56 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 52 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
