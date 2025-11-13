# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-13 00:28](#error-2025-11-13t0028310000) | API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId} | dev | real_test_failure | 23.07s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 27 seconds
- 2025-10-16 PASS 28 seconds
- 2025-10-17 PASS 25 seconds
- 2025-10-18 PASS 26 seconds
- 2025-10-19 PASS 26 seconds
- 2025-10-20
  - PASS 25 seconds
  - PASS 23 seconds
- 2025-10-21 PASS 25 seconds
- 2025-10-22
  - PASS 28 seconds
  - PASS 24 seconds
- 2025-10-23 PASS 25 seconds
- 2025-10-24 PASS 27 seconds
- 2025-10-25 PASS 27 seconds
- 2025-10-26 PASS 27 seconds
- 2025-10-27 PASS 25 seconds
- 2025-10-28 PASS 25 seconds
- 2025-10-29 PASS 25 seconds
- 2025-10-30 PASS 27 seconds
- 2025-10-31 PASS 24 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 24 seconds
- 2025-11-03 PASS 27 seconds
- 2025-11-04 PASS 26 seconds
- 2025-11-05
  - PASS 24 seconds
  - PASS 24 seconds
- 2025-11-06 PASS 25 seconds
- 2025-11-07 PASS 23 seconds
- 2025-11-08 PASS 26 seconds
- 2025-11-09 PASS 24 seconds
- 2025-11-10 PASS 25 seconds
- 2025-11-11 PASS 28 seconds
- 2025-11-12 PASS 24 seconds
- 2025-11-13
  - FAIL 23 seconds

### Error 2025-11-13T00:28:31+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-11-13T00:28:31.935000+00:00-TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout',confidence=1.0,ts_when='4 hours ago')
API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId}
```
2025-11-13T00:28:31.9352689Z === RUN   TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2025-11-13T00:28:40.3937750Z 2025/11/13 00:28:40 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691525fd64d8514eb7447d83/cloudProviderAccess/6915263764d8514eb745a2c3 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7905814175530752950-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7905814175530752950-policy], BadRequestDetail:  
2025-11-13T00:28:40.3942625Z 2025/11/13 00:28:40 retrying
2025-11-13T00:28:51.0964270Z   
2025-11-13T00:28:51.0964842Z     resource_test.go:121: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-11-13T00:28:51.0965311Z         
2025-11-13T00:28:51.0965715Z         Error: Error when creating push-based log export configuration
2025-11-13T00:28:51.0966054Z         
2025-11-13T00:28:51.0966402Z           with mongodbatlas_push_based_log_export.test,
2025-11-13T00:28:51.0967080Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2025-11-13T00:28:51.0967695Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-11-13T00:28:51.0968021Z         
2025-11-13T00:28:51.0968877Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/691525fd64d8514eb7447d83/pushBasedLogExport
2025-11-13T00:28:51.0969462Z         POST: HTTP 400 Bad Request (Error code:
2025-11-13T00:28:51.0969985Z         "IAM_ROLE_CANNOT_READ_FROM_S3_BUCKET") Detail: The IAM role cannot read from
2025-11-13T00:28:51.0970466Z         the S3 bucket. Reason: Bad Request. Params:
2025-11-13T00:28:51.0971050Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7905814175530752950-policy
2025-11-13T00:28:51.0971714Z         mongodb-atlas-tf-6bzlw4p9rn-1 Problem listing objects: The AWS Access Key Id
2025-11-13T00:28:51.0972320Z         you provided does not exist in our records.]], BadRequestDetail: 
2025-11-13T00:28:55.6902932Z --- FAIL: TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout (23.75s)
```

  - PASS 24 seconds