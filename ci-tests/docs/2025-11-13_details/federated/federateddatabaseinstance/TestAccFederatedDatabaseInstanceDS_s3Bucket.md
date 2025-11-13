# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDS_s3Bucket Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b120e2dc7470847bc0cf | dev | flaky_500 | 53.04s
[2025-11-13 00:54](#error-2025-11-13t0054020000) | API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation | dev | real_test_failure | 48.08s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 56 seconds
- 2025-10-16 PASS 51 seconds
- 2025-10-17 PASS 56 seconds
- 2025-10-18 PASS 55 seconds
- 2025-10-19 PASS a minute
- 2025-10-20
  - PASS 55 seconds
  - PASS 54 seconds
- 2025-10-21 PASS 50 seconds
- 2025-10-22
  - PASS 52 seconds
  - PASS 56 seconds
- 2025-10-23 PASS 53 seconds
- 2025-10-24 PASS 54 seconds
- 2025-10-25 PASS 52 seconds
- 2025-10-26 PASS 54 seconds
- 2025-10-27 PASS 53 seconds
- 2025-10-28 PASS 54 seconds
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
- 2025-11-02 PASS 55 seconds
- 2025-11-03 PASS 51 seconds
- 2025-11-04 PASS 50 seconds
- 2025-11-05
  - PASS 51 seconds
  - PASS 52 seconds
- 2025-11-06 PASS 53 seconds
- 2025-11-07 PASS 56 seconds
- 2025-11-08 PASS 49 seconds
- 2025-11-09 PASS 53 seconds
- 2025-11-10 PASS 52 seconds
- 2025-11-11 PASS 51 seconds
- 2025-11-12 PASS 57 seconds
- 2025-11-13
  - FAIL 48 seconds

### Error 2025-11-13T00:54:02+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-11-13T00:54:02.119000+00:00-TestAccFederatedDatabaseInstanceDS_s3Bucket',confidence=1.0,ts_when='4 hours ago')
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

  - PASS 56 seconds