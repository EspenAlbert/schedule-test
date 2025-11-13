# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDSPlural_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:45](#error-2025-10-19t0045410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f4317d21ed692ad0019bf5/dataFederation | qa | flaky_500 | 96.04s
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b120e2dc7470847bc678 | dev | flaky_500 | 52.10s
[2025-11-13 00:54](#error-2025-11-13t0054020000) | API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation | dev | real_test_failure | 49.00s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 57 seconds
- 2025-10-16 PASS 54 seconds
- 2025-10-17 PASS 58 seconds
- 2025-10-18 PASS 53 seconds
- 2025-10-19

### Error 2025-10-19T00:45:41+00:00
```
2025-10-19T00:45:41.1034216Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-10-19T00:45:41.1045582Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-10-19T00:45:41.1139378Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-10-19T00:45:41.1140068Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-10-19T00:45:41.1140563Z         
2025-10-19T00:45:41.1142273Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f4317d21ed692ad0019bf5/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-10-19T00:45:41.1143468Z         
2025-10-19T00:45:41.1143865Z           with mongodbatlas_federated_database_instance.test,
2025-10-19T00:45:41.1144621Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-10-19T00:45:41.1145317Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-10-19T00:45:41.1145679Z         
2025-10-19T00:45:41.1147975Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f4317d21ed692ad0019bf5/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-10-19T00:45:41.1149194Z         
2025-10-19T00:45:41.1149593Z           with mongodbatlas_federated_database_instance.test2,
2025-10-19T00:45:41.1150354Z           on terraform_plugin_test.tf line 165, in resource "mongodbatlas_federated_database_instance" "test2":
2025-10-19T00:45:41.1151061Z          165: resource "mongodbatlas_federated_database_instance" "test2" {
2025-10-19T00:45:41.1151430Z         
2025-10-19T00:45:41.1151760Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (96.37s)
```

- 2025-10-20
  - PASS 56 seconds
  - PASS 54 seconds
- 2025-10-21 PASS 51 seconds
- 2025-10-22
  - PASS 51 seconds
  - PASS 58 seconds
- 2025-10-23 PASS 53 seconds
- 2025-10-24 PASS 55 seconds
- 2025-10-25 PASS 51 seconds
- 2025-10-26 PASS 55 seconds
- 2025-10-27 PASS 53 seconds
- 2025-10-28 PASS 53 seconds
- 2025-10-29 PASS 56 seconds
- 2025-10-30

### Error 2025-10-30T00:44:19+00:00
```
2025-10-30T00:44:19.1611466Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-10-30T00:44:19.1619073Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-10-30T00:44:19.1658909Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-10-30T00:44:19.1659692Z     data_source_federated_database_instances_test.go:24: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:44:19.1660239Z         
2025-10-30T00:44:19.1660546Z         Error: error when destroying resource
2025-10-30T00:44:19.1660820Z         
2025-10-30T00:44:19.1661159Z         error deleting project (6902b120e2dc7470847bc678):
2025-10-30T00:44:19.1661722Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b120e2dc7470847bc678
2025-10-30T00:44:19.1662346Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:44:19.1662934Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:44:19.1663342Z         BadRequestDetail: 
2025-10-30T00:44:19.1663692Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (52.97s)
```

- 2025-10-31 PASS 56 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 55 seconds
- 2025-11-03 PASS 50 seconds
- 2025-11-04 PASS 50 seconds
- 2025-11-05
  - PASS 53 seconds
  - PASS 53 seconds
- 2025-11-06 PASS 56 seconds
- 2025-11-07 PASS 55 seconds
- 2025-11-08 PASS 49 seconds
- 2025-11-09 PASS 53 seconds
- 2025-11-10 PASS 51 seconds
- 2025-11-11 PASS 50 seconds
- 2025-11-12 PASS 55 seconds
- 2025-11-13
  - FAIL 49 seconds

### Error 2025-11-13T00:54:02+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-11-13T00:54:02.119000+00:00-TestAccFederatedDatabaseInstanceDSPlural_basic',confidence=1.0,ts_when='4 hours ago')
API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation
```
2025-11-13T00:54:02.1196342Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-11-13T00:54:02.1209682Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-11-13T00:54:02.1288597Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-11-13T00:54:02.1289241Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-11-13T00:54:02.1289708Z         
2025-11-13T00:54:02.1293209Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6915260764d8514eb744ec40/dataFederation POST: HTTP 400 Bad Request (Error code: "DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET") Detail: Data Federation cannot access the specified test S3 bucket (6915260764d8514eb744ec40) via the provided IAM role. Ensure that the IAM role provides access to read the bucket's contents. ***. Reason: Bad Request. Params: [6915260764d8514eb744ec40 *** Data Federation cannot retrieve the object metadata from the specified S3 bucket (***) with prefix (templates/)], BadRequestDetail: 
2025-11-13T00:54:02.1295286Z         
2025-11-13T00:54:02.1295798Z           with mongodbatlas_federated_database_instance.test,
2025-11-13T00:54:02.1296506Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-11-13T00:54:02.1297170Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-11-13T00:54:02.1297658Z         
2025-11-13T00:54:02.1324478Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (49.00s)
```

  - PASS 55 seconds