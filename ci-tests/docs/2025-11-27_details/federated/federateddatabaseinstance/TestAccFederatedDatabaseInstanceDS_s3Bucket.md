# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDS_s3Bucket Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b120e2dc7470847bc0cf | dev | flaky_500 | 53.04s
[2025-11-13 00:54](#error-2025-11-13t0054020000) | API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation | dev | real_test_failure | 48.08s
[2025-11-14 00:46](#error-2025-11-14t0046150000) | API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation | dev | real_test_failure | 51.00s
[2025-11-24 00:44](#error-2025-11-24t0044100000) | DATA_FEDERATION_CANNOT_GET_S3_BUCKET_REGION /api/atlas/v2/groups/6923a714f47dc05918909c9e/dataFederation | dev |  | 39.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 56 seconds
- 2025-10-30

### Error 2025-10-30T00:44:19+00:00
```
2025-10-30T00:44:19.1610004Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-10-30T00:44:19.1617148Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-10-30T00:44:19.1674114Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-10-30T00:44:19.1674844Z     data_source_federated_database_instance_test.go:29: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:44:19.1675375Z         
2025-10-30T00:44:19.1675982Z         Error: error when destroying resource
2025-10-30T00:44:19.1676284Z         
2025-10-30T00:44:19.1676621Z         error deleting project (6902b120e2dc7470847bc0cf):
2025-10-30T00:44:19.1677188Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b120e2dc7470847bc0cf
2025-10-30T00:44:19.1677804Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:44:19.1678391Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:44:19.1678790Z         BadRequestDetail: 
2025-10-30T00:44:19.1679120Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (53.41s)
```

- 2025-10-31 PASS 56 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 51 seconds
- 2025-11-04 PASS 50 seconds
- 2025-11-05
  - PASS 51 seconds
  - PASS 52 seconds
- 2025-11-06 PASS 53 seconds
- 2025-11-07 PASS 56 seconds
- 2025-11-08 PASS 49 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 52 seconds
- 2025-11-11 PASS 51 seconds
- 2025-11-12 PASS 57 seconds
- 2025-11-13

### Error 2025-11-13T00:54:02+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-11-13T00:54:02.119000+00:00-TestAccFederatedDatabaseInstanceDS_s3Bucket',confidence=1.0,ts_when='14 days ago')
API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation
```
2025-11-13T00:54:02.1195112Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-11-13T00:54:02.1205416Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-11-13T00:54:02.1314343Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-11-13T00:54:02.1314961Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-11-13T00:54:02.1315417Z         
2025-11-13T00:54:02.1319007Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6915260764d8514eb744ef05/dataFederation POST: HTTP 400 Bad Request (Error code: "DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET") Detail: Data Federation cannot access the specified test S3 bucket (6915260764d8514eb744ef05) via the provided IAM role. Ensure that the IAM role provides access to read the bucket's contents. ***. Reason: Bad Request. Params: [6915260764d8514eb744ef05 *** Data Federation cannot retrieve the object metadata from the specified S3 bucket (***) with prefix (templates/)], BadRequestDetail: 
2025-11-13T00:54:02.1321079Z         
2025-11-13T00:54:02.1321446Z           with mongodbatlas_federated_database_instance.test,
2025-11-13T00:54:02.1322289Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-11-13T00:54:02.1322963Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-11-13T00:54:02.1323307Z         
2025-11-13T00:54:02.1323597Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (48.77s)
```

- 2025-11-14

### Error 2025-11-14T00:46:15+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-11-14T00:46:15.401000+00:00-TestAccFederatedDatabaseInstanceDS_s3Bucket',confidence=1.0,ts_when='13 days ago')
API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation
```
2025-11-14T00:46:15.4019880Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-11-14T00:46:15.4027337Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-11-14T00:46:15.4083588Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-11-14T00:46:15.4084186Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-11-14T00:46:15.4084615Z         
2025-11-14T00:46:15.4088030Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691677b8935d094c09ba8e3a/dataFederation POST: HTTP 400 Bad Request (Error code: "DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET") Detail: Data Federation cannot access the specified test S3 bucket (691677b8935d094c09ba8e3a) via the provided IAM role. Ensure that the IAM role provides access to read the bucket's contents. ***. Reason: Bad Request. Params: [691677b8935d094c09ba8e3a *** Data Federation cannot retrieve the object metadata from the specified S3 bucket (***) with prefix (templates/)], BadRequestDetail: 
2025-11-14T00:46:15.4089932Z         
2025-11-14T00:46:15.4090314Z           with mongodbatlas_federated_database_instance.test,
2025-11-14T00:46:15.4091001Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-11-14T00:46:15.4092348Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-11-14T00:46:15.4092694Z         
2025-11-14T00:46:15.4117206Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (51.03s)
```

- 2025-11-15 PASS 53 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 54 seconds
- 2025-11-18 PASS 53 seconds
- 2025-11-19 PASS 51 seconds
- 2025-11-20 PASS 51 seconds
- 2025-11-21 PASS 55 seconds
- 2025-11-22 PASS 59 seconds
- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:44:10+00:00
```
2025-11-24T00:44:10.8341261Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-11-24T00:44:10.8349686Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-11-24T00:44:10.8403254Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-11-24T00:44:10.8403877Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-11-24T00:44:10.8404334Z         
2025-11-24T00:44:10.8408058Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6923a714f47dc05918909c9e/dataFederation POST: HTTP 400 Bad Request (Error code: "DATA_FEDERATION_CANNOT_GET_S3_BUCKET_REGION") Detail: Data Federation cannot determine the region for the specified test S3 bucket (***) with the provided IAM role. Ensure that the IAM role provides access to retrieve the bucket's location. Data Federation cannot retrieve region of specified S3 bucket (***). Reason: Bad Request. Params: [*** Data Federation cannot retrieve region of specified S3 bucket (***)], BadRequestDetail: 
2025-11-24T00:44:10.8410306Z         
2025-11-24T00:44:10.8410702Z           with mongodbatlas_federated_database_instance.test,
2025-11-24T00:44:10.8411428Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-11-24T00:44:10.8412103Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-11-24T00:44:10.8412442Z         
2025-11-24T00:44:10.8413342Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (39.83s)
```

- 2025-11-25 PASS 50 seconds
- 2025-11-26 PASS 51 seconds
- 2025-11-27 PASS 56 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 55 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 53 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 56 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 57 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 53 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
