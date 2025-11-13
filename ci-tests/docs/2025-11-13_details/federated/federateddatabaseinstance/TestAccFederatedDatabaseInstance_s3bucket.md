# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_s3bucket Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b120abf4374f32995d7d | dev | flaky_500 | 66.01s
[2025-11-13 00:54](#error-2025-11-13t0054020000) | API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation | dev | real_test_failure | 48.08s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS a minute
- 2025-10-16 PASS a minute
- 2025-10-17 PASS a minute
- 2025-10-18 PASS a minute
- 2025-10-19 PASS 2 minutes
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
- 2025-10-30

### Error 2025-10-30T00:44:19+00:00
```
2025-10-30T00:44:19.1613323Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-10-30T00:44:19.1617514Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-10-30T00:44:19.1689589Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-10-30T00:44:19.1690330Z     resource_federated_database_instance_test.go:83: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:44:19.1690858Z         
2025-10-30T00:44:19.1691161Z         Error: error when destroying resource
2025-10-30T00:44:19.1691442Z         
2025-10-30T00:44:19.1691777Z         error deleting project (6902b120abf4374f32995d7d):
2025-10-30T00:44:19.1692341Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b120abf4374f32995d7d
2025-10-30T00:44:19.1692963Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:44:19.1693547Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:44:19.1693948Z         BadRequestDetail: 
2025-10-30T00:44:19.1694271Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (66.06s)
```

- 2025-10-31 PASS a minute
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
  - FAIL 48 seconds

### Error 2025-11-13T00:54:02+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-11-13T00:54:02.119000+00:00-TestAccFederatedDatabaseInstance_s3bucket',confidence=1.0,ts_when='4 hours ago')
API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation
```
2025-11-13T00:54:02.1198913Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-11-13T00:54:02.1206139Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-11-13T00:54:02.1261685Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-11-13T00:54:02.1262326Z     resource_federated_database_instance_test.go:83: Step 1/2 error: Error running apply: exit status 1
2025-11-13T00:54:02.1262794Z         
2025-11-13T00:54:02.1266445Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6915260764d8514eb744e551/dataFederation POST: HTTP 400 Bad Request (Error code: "DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET") Detail: Data Federation cannot access the specified test S3 bucket (6915260764d8514eb744e551) via the provided IAM role. Ensure that the IAM role provides access to read the bucket's contents. ***. Reason: Bad Request. Params: [6915260764d8514eb744e551 *** Data Federation cannot retrieve the object metadata from the specified S3 bucket (***) with prefix (templates/)], BadRequestDetail: 
2025-11-13T00:54:02.1269307Z         
2025-11-13T00:54:02.1269696Z           with mongodbatlas_federated_database_instance.test,
2025-11-13T00:54:02.1270423Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-11-13T00:54:02.1271098Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-11-13T00:54:02.1271506Z         
2025-11-13T00:54:02.1288204Z    test_working_directory=/tmp/plugintest868770213
2025-11-13T00:54:02.1324034Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (48.84s)
```

  - PASS a minute