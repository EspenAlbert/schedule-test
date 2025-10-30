# autogen_slow/pushbasedlogexportapi/TestAccPushBasedLogExportAPI_basic Test Details
# Found 26 TestRuns in dev, qa from 2025-10-07 to 2025-10-30 from master branch: 1 unique tests, PASS(x 25) FAIL
Success rate: 96.15%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-15 00:55](#error-2025-10-15t0055190000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/68eeeb4bbe088e40ea2e589a/cloudProviderAccess/68eeeb5515bcc007bd8bcf46 | dev | 27.07s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01: MISSING
- 2025-10-02: MISSING
- 2025-10-03: MISSING
- 2025-10-04: MISSING
- 2025-10-05: MISSING
- 2025-10-06: MISSING
- 2025-10-07 PASS a minute
- 2025-10-08 PASS a minute
- 2025-10-09 PASS a minute
- 2025-10-10 PASS a minute
- 2025-10-11 PASS a minute
- 2025-10-12 PASS a minute
- 2025-10-13 PASS a minute
- 2025-10-14 PASS a minute
- 2025-10-15

### Error 2025-10-15T00:55:19+00:00
```
2025-10-15T00:55:19.0113462Z === RUN   TestAccPushBasedLogExportAPI_basic
2025-10-15T00:55:19.0114358Z     resource_test.go:22: Creating execution project: test-acc-tf-p-2267589063031943148
2025-10-15T00:55:19.0117004Z 2025/10/15 00:31:18 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68eeeb4bbe088e40ea2e589a/cloudProviderAccess/68eeeb5515bcc007bd8bcf46 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6478215148284434731-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6478215148284434731-policy], BadRequestDetail:  
2025-10-15T00:55:19.0118899Z 2025/10/15 00:31:18 retrying
2025-10-15T00:55:19.0134416Z   
2025-10-15T00:55:19.0134800Z     resource_test.go:22: Step 1/3 error: Error running apply: exit status 1
2025-10-15T00:55:19.0135161Z         
2025-10-15T00:55:19.0135445Z         Error: Error calling API in Create
2025-10-15T00:55:19.0135733Z         
2025-10-15T00:55:19.0136097Z           with mongodbatlas_push_based_log_export_api.test,
2025-10-15T00:55:19.0136801Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export_api" "test":
2025-10-15T00:55:19.0137468Z          146: 			   resource "mongodbatlas_push_based_log_export_api" "test" {
2025-10-15T00:55:19.0137809Z         
2025-10-15T00:55:19.0138379Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68eeeb4bbe088e40ea2e589a/pushBasedLogExport
2025-10-15T00:55:19.0138947Z         POST: HTTP 400 Bad Request (Error code:
2025-10-15T00:55:19.0139469Z         "IAM_ROLE_CANNOT_READ_FROM_S3_BUCKET") Detail: The IAM role cannot read from
2025-10-15T00:55:19.0139952Z         the S3 bucket. Reason: Bad Request. Params:
2025-10-15T00:55:19.0140546Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6478215148284434731-policy
2025-10-15T00:55:19.0141178Z         mongodb-atlas-tf-4akqzvysso-1 Problem retrieving bucket location:
2025-10-15T00:55:19.0141998Z         mongodb-atlas-tf-4akqzvysso-1: The AWS Access Key Id you provided does not
2025-10-15T00:55:19.0142505Z         exist in our records.]], BadRequestDetail: 
2025-10-15T00:55:19.0142857Z --- FAIL: TestAccPushBasedLogExportAPI_basic (27.74s)
```

- 2025-10-16 PASS a minute
- 2025-10-17 PASS a minute
- 2025-10-18 PASS a minute
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