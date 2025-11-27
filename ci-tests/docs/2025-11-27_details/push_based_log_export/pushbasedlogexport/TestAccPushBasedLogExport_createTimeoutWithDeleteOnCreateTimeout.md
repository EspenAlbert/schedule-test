# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-13 00:28](#error-2025-11-13t0028310000) | API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId} | dev | real_test_failure | 23.07s
[2025-11-14 00:30](#error-2025-11-14t0030170000) | API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId} | dev | real_test_failure | 25.05s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 25 seconds
- 2025-10-30 PASS 27 seconds
- 2025-10-31 PASS 24 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 27 seconds
- 2025-11-04 PASS 26 seconds
- 2025-11-05
  - PASS 24 seconds
  - PASS 24 seconds
- 2025-11-06 PASS 25 seconds
- 2025-11-07 PASS 23 seconds
- 2025-11-08 PASS 26 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 25 seconds
- 2025-11-11 PASS 28 seconds
- 2025-11-12 PASS 24 seconds
- 2025-11-13

### Error 2025-11-13T00:28:31+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-11-13T00:28:31.935000+00:00-TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout',confidence=1.0,ts_when='14 days ago')
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

- 2025-11-14

### Error 2025-11-14T00:30:17+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-11-14T00:30:17.747000+00:00-TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout',confidence=1.0,ts_when='13 days ago')
API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId}
```
2025-11-14T00:30:17.7474382Z === RUN   TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2025-11-14T00:30:26.5594665Z 2025/11/14 00:30:26 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691677adaecdd843bb089b54/cloudProviderAccess/69167821e6591360dac2ed43 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7056003243773839934-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7056003243773839934-policy], BadRequestDetail:  
2025-11-14T00:30:26.5599279Z 2025/11/14 00:30:26 retrying
2025-11-14T00:30:37.5819928Z   
2025-11-14T00:30:37.5822569Z     resource_test.go:121: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-11-14T00:30:37.5823219Z         
2025-11-14T00:30:37.5823792Z         Error: Error when creating push-based log export configuration
2025-11-14T00:30:37.5824251Z         
2025-11-14T00:30:37.5824718Z           with mongodbatlas_push_based_log_export.test,
2025-11-14T00:30:37.5826100Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2025-11-14T00:30:37.5827066Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-11-14T00:30:37.5827593Z         
2025-11-14T00:30:37.5828617Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/691677adaecdd843bb089b54/pushBasedLogExport
2025-11-14T00:30:37.5829297Z         POST: HTTP 400 Bad Request (Error code:
2025-11-14T00:30:37.5830510Z         "IAM_ROLE_CANNOT_READ_FROM_S3_BUCKET") Detail: The IAM role cannot read from
2025-11-14T00:30:37.5831070Z         the S3 bucket. Reason: Bad Request. Params:
2025-11-14T00:30:37.5831679Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7056003243773839934-policy
2025-11-14T00:30:37.5832375Z         mongodb-atlas-tf-8qjb67h72x-1 Problem listing objects: The AWS Access Key Id
2025-11-14T00:30:37.5833085Z         you provided does not exist in our records.]], BadRequestDetail: 
2025-11-14T00:30:43.2096796Z --- FAIL: TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout (25.46s)
```

- 2025-11-15 PASS 25 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 27 seconds
- 2025-11-18 PASS 26 seconds
- 2025-11-19 PASS 27 seconds
- 2025-11-20 PASS 25 seconds
- 2025-11-21 PASS 27 seconds
- 2025-11-22 PASS 27 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 25 seconds
- 2025-11-25 PASS 27 seconds
- 2025-11-26 PASS 26 seconds
- 2025-11-27 PASS 24 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 24 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 24 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 24 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 27 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 25 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
