# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_noPrefixPath Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-09 00:31](#error-2025-12-09t0031250000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69376dbf3c12b02ea317b5b6/cloudProviderAccess/69376de534dc5f47bd045017 | dev | 25.08s
[2025-12-11 00:32](#error-2025-12-11t0032420000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/693a10d1b6470d4a06773339/cloudProviderAccess/693a11317e40834017559388 | dev | 23.01s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 51 seconds
- 2025-12-05 PASS 51 seconds
- 2025-12-06 PASS 55 seconds
- 2025-12-07: MISSING
- 2025-12-08 PASS 50 seconds
- 2025-12-09

### Error 2025-12-09T00:31:25+00:00
```
2025-12-09T00:31:25.2517251Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2025-12-09T00:31:34.5020200Z 2025/12/09 00:31:34 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69376dbf3c12b02ea317b5b6/cloudProviderAccess/69376de534dc5f47bd045017 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6670508273402483698-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6670508273402483698-policy], BadRequestDetail:  
2025-12-09T00:31:34.5022411Z 2025/12/09 00:31:34 retrying
2025-12-09T00:31:45.0897989Z    test_name=TestAccPushBasedLogExport_noPrefixPath
2025-12-09T00:31:45.0899027Z     resource_test.go:68: Step 1/1 error: Error running apply: exit status 1
2025-12-09T00:31:45.0899662Z         
2025-12-09T00:31:45.0900384Z         Error: Error when creating push-based log export configuration
2025-12-09T00:31:45.0900993Z         
2025-12-09T00:31:45.0901646Z           with mongodbatlas_push_based_log_export.test,
2025-12-09T00:31:45.0902881Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2025-12-09T00:31:45.0904020Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-12-09T00:31:45.0904571Z         
2025-12-09T00:31:45.0905565Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69376dbf3c12b02ea317b5b6/pushBasedLogExport
2025-12-09T00:31:45.0906882Z         POST: HTTP 400 Bad Request (Error code:
2025-12-09T00:31:45.0909913Z         "PUSH_BASED_LOG_EXPORT_ALREADY_CONFIGURED") Detail: Push-based log export
2025-12-09T00:31:45.0910618Z         configuration is already configured (current state = INITIATING) for group
2025-12-09T00:31:45.0912438Z         69376dbf3c12b02ea317b5b6. Push-based log export configuration can only be
2025-12-09T00:31:45.0913559Z         created from the "UNCONFIGURED" state. Reason: Bad Request. Params:
2025-12-09T00:31:45.0914809Z         [INITIATING 69376dbf3c12b02ea317b5b6], BadRequestDetail: 
2025-12-09T00:31:51.0200060Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (25.77s)
```

- 2025-12-10
  - PASS 51 seconds
  - PASS 51 seconds
- 2025-12-11

### Error 2025-12-11T00:32:42+00:00
```
2025-12-11T00:32:42.9820959Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2025-12-11T00:32:50.6541303Z 2025/12/11 00:32:50 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/693a10d1b6470d4a06773339/cloudProviderAccess/693a11317e40834017559388 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7637382799115242320-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7637382799115242320-policy], BadRequestDetail:  
2025-12-11T00:32:50.6544528Z 2025/12/11 00:32:50 retrying
2025-12-11T00:33:01.4591282Z   
2025-12-11T00:33:01.4591931Z     resource_test.go:68: Step 1/1 error: Error running apply: exit status 1
2025-12-11T00:33:01.4592601Z         
2025-12-11T00:33:01.4593639Z         Error: Error when creating push-based log export configuration
2025-12-11T00:33:01.4594037Z         
2025-12-11T00:33:01.4594400Z           with mongodbatlas_push_based_log_export.test,
2025-12-11T00:33:01.4595320Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2025-12-11T00:33:01.4595972Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-12-11T00:33:01.4596320Z         
2025-12-11T00:33:01.4596892Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/693a10d1b6470d4a06773339/pushBasedLogExport
2025-12-11T00:33:01.4597458Z         POST: HTTP 400 Bad Request (Error code:
2025-12-11T00:33:01.4598013Z         "IAM_ROLE_CANNOT_READ_FROM_S3_BUCKET") Detail: The IAM role cannot read from
2025-12-11T00:33:01.4598509Z         the S3 bucket. Reason: Bad Request. Params:
2025-12-11T00:33:01.4599122Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7637382799115242320-policy
2025-12-11T00:33:01.4599794Z         mongodb-atlas-tf-aeezqg4ov8-1 Problem retrieving bucket location:
2025-12-11T00:33:01.4600450Z         mongodb-atlas-tf-aeezqg4ov8-1: The AWS Access Key Id you provided does not
2025-12-11T00:33:01.4600952Z         exist in our records.]], BadRequestDetail: 
2025-12-11T00:33:06.0522538Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (23.07s)
```

- 2025-12-12 PASS 52 seconds
- 2025-12-13 PASS 51 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 56 seconds
- 2025-12-16 PASS 56 seconds
- 2025-12-17 PASS 52 seconds
- 2025-12-18 PASS 52 seconds
- 2025-12-19 PASS 55 seconds
- 2025-12-20 PASS 57 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 51 seconds
- 2025-12-23 PASS 56 seconds
- 2025-12-24 PASS 52 seconds
- 2025-12-25 PASS 56 seconds
- 2025-12-26 PASS 57 seconds
- 2025-12-27 PASS 52 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 56 seconds
- 2025-12-31 PASS 53 seconds
- 2026-01-01 PASS 56 seconds
- 2026-01-02 PASS 57 seconds

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 51 seconds
- 2025-12-08: MISSING
- 2025-12-09 PASS 56 seconds
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 52 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 52 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 55 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
