# autogen_slow/pushbasedlogexportapi/TestAccPushBasedLogExportAPI_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-13 01:15](#error-2025-11-13t0115350000) | API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId} | dev | real_test_failure | 25.06s
[2025-11-14 01:02](#error-2025-11-14t0102350000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69167811e6591360dac2c61e/cloudProviderAccess/6916781ce6591360dac2ea74 | dev | flaky_500 | 28.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS a minute
- 2025-10-30 PASS a minute
- 2025-10-31 PASS a minute
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

### Error 2025-11-13T01:15:35+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-11-13T01:15:35.197000+00:00-TestAccPushBasedLogExportAPI_basic',confidence=1.0,ts_when='14 days ago')
API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId}
```
2025-11-13T01:15:35.1975840Z === RUN   TestAccPushBasedLogExportAPI_basic
2025-11-13T01:15:35.1976647Z     resource_test.go:21: Creating execution project: test-acc-tf-p-3015226290703778743
2025-11-13T01:15:35.1979558Z 2025/11/13 00:29:25 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6915265b4f59fa52c614f8b2/cloudProviderAccess/691526654f59fa52c61523a3 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2075520155139347733-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2075520155139347733-policy], BadRequestDetail:  
2025-11-13T01:15:35.1981619Z 2025/11/13 00:29:25 retrying
2025-11-13T01:15:35.1996288Z    test_working_directory=/tmp/plugintest2192804938 test_step_number=1
2025-11-13T01:15:35.1996990Z     resource_test.go:21: Step 1/3 error: Error running apply: exit status 1
2025-11-13T01:15:35.1997373Z         
2025-11-13T01:15:35.1997670Z         Error: Error calling API in Create
2025-11-13T01:15:35.1997950Z         
2025-11-13T01:15:35.1998331Z           with mongodbatlas_push_based_log_export_api.test,
2025-11-13T01:15:35.1999052Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export_api" "test":
2025-11-13T01:15:35.1999741Z          146: 			   resource "mongodbatlas_push_based_log_export_api" "test" {
2025-11-13T01:15:35.2000096Z         
2025-11-13T01:15:35.2000674Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6915265b4f59fa52c614f8b2/pushBasedLogExport
2025-11-13T01:15:35.2001251Z         POST: HTTP 400 Bad Request (Error code:
2025-11-13T01:15:35.2001792Z         "IAM_ROLE_CANNOT_READ_FROM_S3_BUCKET") Detail: The IAM role cannot read from
2025-11-13T01:15:35.2002557Z         the S3 bucket. Reason: Bad Request. Params:
2025-11-13T01:15:35.2003181Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2075520155139347733-policy
2025-11-13T01:15:35.2003876Z         mongodb-atlas-tf-epuo7z9ndt-1 Problem listing objects: The AWS Access Key Id
2025-11-13T01:15:35.2004497Z         you provided does not exist in our records.]], BadRequestDetail: 
2025-11-13T01:15:35.2005011Z --- FAIL: TestAccPushBasedLogExportAPI_basic (25.56s)
```

- 2025-11-14

### Error 2025-11-14T01:02:35+00:00
```
2025-11-14T01:02:35.3370610Z === RUN   TestAccPushBasedLogExportAPI_basic
2025-11-14T01:02:35.3371336Z     resource_test.go:21: Creating execution project: test-acc-tf-p-5864735933597283211
2025-11-14T01:02:35.3373219Z 2025/11/14 00:30:21 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69167811e6591360dac2c61e/cloudProviderAccess/6916781ce6591360dac2ea74 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4055921035848906001-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4055921035848906001-policy], BadRequestDetail:  
2025-11-14T01:02:35.3374855Z 2025/11/14 00:30:21 retrying
2025-11-14T01:02:35.3388227Z   
2025-11-14T01:02:35.3388725Z     resource_test.go:21: Step 1/3 error: Error running apply: exit status 1
2025-11-14T01:02:35.3389081Z         
2025-11-14T01:02:35.3389362Z         Error: Error calling API in Create
2025-11-14T01:02:35.3389626Z         
2025-11-14T01:02:35.3389986Z           with mongodbatlas_push_based_log_export_api.test,
2025-11-14T01:02:35.3390644Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export_api" "test":
2025-11-14T01:02:35.3391349Z          146: 			   resource "mongodbatlas_push_based_log_export_api" "test" {
2025-11-14T01:02:35.3391678Z         
2025-11-14T01:02:35.3392212Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69167811e6591360dac2c61e/pushBasedLogExport
2025-11-14T01:02:35.3392741Z         POST: HTTP 400 Bad Request (Error code:
2025-11-14T01:02:35.3393240Z         "IAM_ROLE_CANNOT_READ_FROM_S3_BUCKET") Detail: The IAM role cannot read from
2025-11-14T01:02:35.3393719Z         the S3 bucket. Reason: Bad Request. Params:
2025-11-14T01:02:35.3394281Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4055921035848906001-policy
2025-11-14T01:02:35.3394928Z         mongodb-atlas-tf-yqyniqheb8-1 Problem listing objects: The AWS Access Key Id
2025-11-14T01:02:35.3395500Z         you provided does not exist in our records.]], BadRequestDetail: 
2025-11-14T01:02:35.3395896Z --- FAIL: TestAccPushBasedLogExportAPI_basic (28.10s)
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
