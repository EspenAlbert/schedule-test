# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDSPlural_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b120e2dc7470847bc678 | dev | flaky_500 | 52.10s
[2025-11-13 00:54](#error-2025-11-13t0054020000) | API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation | dev | real_test_failure | 49.00s
[2025-11-14 00:46](#error-2025-11-14t0046150000) | API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation | dev | real_test_failure | 51.02s
[2025-11-24 00:44](#error-2025-11-24t0044100000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6923a713f47dc059189098a9/dataFederation | dev |  | 38.06s

### Timeline
- 2025-10-28: MISSING
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
- 2025-11-02: MISSING
- 2025-11-03 PASS 50 seconds
- 2025-11-04 PASS 50 seconds
- 2025-11-05
  - PASS 53 seconds
  - PASS 53 seconds
- 2025-11-06 PASS 56 seconds
- 2025-11-07 PASS 55 seconds
- 2025-11-08 PASS 49 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 51 seconds
- 2025-11-11 PASS 50 seconds
- 2025-11-12 PASS 55 seconds
- 2025-11-13

### Error 2025-11-13T00:54:02+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-11-13T00:54:02.119000+00:00-TestAccFederatedDatabaseInstanceDSPlural_basic',confidence=1.0,ts_when='14 days ago')
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

- 2025-11-14

### Error 2025-11-14T00:46:15+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-11-14T00:46:15.402000+00:00-TestAccFederatedDatabaseInstanceDSPlural_basic',confidence=1.0,ts_when='13 days ago')
API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation
```
2025-11-14T00:46:15.4021263Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-11-14T00:46:15.4029584Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-11-14T00:46:15.4108000Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-11-14T00:46:15.4108608Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-11-14T00:46:15.4109047Z         
2025-11-14T00:46:15.4112513Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691677b8aecdd843bb08f30d/dataFederation POST: HTTP 400 Bad Request (Error code: "DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET") Detail: Data Federation cannot access the specified test S3 bucket (691677b8aecdd843bb08f30d) via the provided IAM role. Ensure that the IAM role provides access to read the bucket's contents. ***. Reason: Bad Request. Params: [691677b8aecdd843bb08f30d *** Data Federation cannot retrieve the object metadata from the specified S3 bucket (***) with prefix (templates/)], BadRequestDetail: 
2025-11-14T00:46:15.4114412Z         
2025-11-14T00:46:15.4114783Z           with mongodbatlas_federated_database_instance.test,
2025-11-14T00:46:15.4115445Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-11-14T00:46:15.4116082Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-11-14T00:46:15.4116414Z         
2025-11-14T00:46:15.4117654Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (51.24s)
```

- 2025-11-15 PASS 53 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 53 seconds
- 2025-11-18 PASS 56 seconds
- 2025-11-19 PASS 51 seconds
- 2025-11-20 PASS 53 seconds
- 2025-11-21 PASS 54 seconds
- 2025-11-22 PASS 58 seconds
- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:44:10+00:00
```
2025-11-24T00:44:10.8342761Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-11-24T00:44:10.8352072Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-11-24T00:44:10.8379453Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-11-24T00:44:10.8380231Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-11-24T00:44:10.8380699Z         
2025-11-24T00:44:10.8382620Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6923a713f47dc059189098a9/dataFederation POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (6923a71621519f56cb861da5). Reason: Bad Request. Params: [6923a71621519f56cb861da5], BadRequestDetail: 
2025-11-24T00:44:10.8383935Z         
2025-11-24T00:44:10.8384316Z           with mongodbatlas_federated_database_instance.test,
2025-11-24T00:44:10.8385040Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-11-24T00:44:10.8385852Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-11-24T00:44:10.8386204Z         
2025-11-24T00:44:10.8412749Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (38.57s)
```

- 2025-11-25 PASS 51 seconds
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
- 2025-11-13 PASS 55 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 58 seconds
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
