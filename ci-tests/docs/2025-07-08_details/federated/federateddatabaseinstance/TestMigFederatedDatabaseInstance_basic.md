# federated/federateddatabaseinstance/TestMigFederatedDatabaseInstance_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 16 seconds
### 2025-07-03
#### PASS 20 seconds
### 2025-07-04
#### PASS 20 seconds
### 2025-07-05
#### PASS 18 seconds
### 2025-07-06
#### FAIL 39 seconds
```
2025-07-06T00:46:42.9596094Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-07-06T00:46:42.9605774Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-07-06T00:46:42.9675350Z === NAME  TestMigFederatedDatabaseInstance_basic
2025-07-06T00:46:42.9676496Z     resource_federated_database_instance_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:46:42.9677326Z         
2025-07-06T00:46:42.9680450Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4037267b5775b682b64/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-06T00:46:42.9682447Z         
2025-07-06T00:46:42.9683105Z           with mongodbatlas_federated_database_instance.test,
2025-07-06T00:46:42.9684382Z           on terraform_plugin_test.tf line 20, in resource "mongodbatlas_federated_database_instance" "test":
2025-07-06T00:46:42.9685564Z           20: resource "mongodbatlas_federated_database_instance" "test" {
2025-07-06T00:46:42.9686151Z         
2025-07-06T00:46:42.9686610Z --- FAIL: TestMigFederatedDatabaseInstance_basic (39.20s)
```
### 2025-07-07
#### PASS 16 seconds
### 2025-07-08
#### PASS 17 seconds