# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDSPlural_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 51 seconds
### 2025-07-03
#### PASS 56 seconds
### 2025-07-04
#### PASS 56 seconds
### 2025-07-05
#### PASS 54 seconds
### 2025-07-06
#### FAIL 2 minutes
```
2025-07-06T00:46:42.9594678Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-07-06T00:46:42.9606766Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-07-06T00:46:42.9707426Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-07-06T00:46:42.9708721Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-07-06T00:46:42.9709508Z         
2025-07-06T00:46:42.9712458Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40f690ae45e168bd7bb/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-06T00:46:42.9714449Z         
2025-07-06T00:46:42.9715095Z           with mongodbatlas_federated_database_instance.test,
2025-07-06T00:46:42.9716541Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-07-06T00:46:42.9717732Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-07-06T00:46:42.9718483Z         
2025-07-06T00:46:42.9798538Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-07-06T00:46:42.9799133Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:46:42.9799550Z         
2025-07-06T00:46:42.9801498Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-3719571083662546171): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40f690ae45e168bd7bb/dataFederation/test-acc-tf-3719571083662546171 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-06T00:46:42.9802978Z         
2025-07-06T00:46:42.9803283Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (164.47s)
```
### 2025-07-07
#### PASS 52 seconds
### 2025-07-08
#### PASS 51 seconds