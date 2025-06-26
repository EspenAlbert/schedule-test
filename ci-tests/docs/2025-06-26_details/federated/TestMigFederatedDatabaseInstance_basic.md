# federated/TestMigFederatedDatabaseInstance_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 22 seconds
```
2025-06-20T00:41:29.7104393Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-06-20T00:41:29.7112354Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-06-20T00:41:29.7122927Z --- PASS: TestMigFederatedDatabaseInstance_basic (22.02s)
```
### 2025-06-21
#### PASS 21 seconds
```
2025-06-21T00:42:51.6795076Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-06-21T00:42:51.6803890Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-06-21T00:42:51.6811123Z --- PASS: TestMigFederatedDatabaseInstance_basic (21.76s)
```
### 2025-06-22
#### FAIL 41 seconds
```
2025-06-22T00:46:59.2954369Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-06-22T00:46:59.2961721Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-06-22T00:46:59.3000199Z === NAME  TestMigFederatedDatabaseInstance_basic
2025-06-22T00:46:59.3000841Z     resource_federated_database_instance_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:46:59.3001481Z         
2025-06-22T00:46:59.3003464Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eecaf7a0954e84ad72a/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-22T00:46:59.3004635Z         
2025-06-22T00:46:59.3005004Z           with mongodbatlas_federated_database_instance.test,
2025-06-22T00:46:59.3005717Z           on terraform_plugin_test.tf line 20, in resource "mongodbatlas_federated_database_instance" "test":
2025-06-22T00:46:59.3006396Z           20: resource "mongodbatlas_federated_database_instance" "test" {
2025-06-22T00:46:59.3006734Z         
2025-06-22T00:46:59.3024153Z --- FAIL: TestMigFederatedDatabaseInstance_basic (41.45s)
```
### 2025-06-23
#### PASS 17 seconds
```
2025-06-23T00:45:10.8973962Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-06-23T00:45:10.8980323Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-06-23T00:45:10.8984252Z --- PASS: TestMigFederatedDatabaseInstance_basic (17.34s)
```
### 2025-06-24
#### PASS 15 seconds
```
2025-06-24T00:41:55.7866602Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-06-24T00:41:55.7873903Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-06-24T00:41:55.7877768Z --- PASS: TestMigFederatedDatabaseInstance_basic (15.28s)
```
### 2025-06-25
#### PASS 22 seconds
```
2025-06-25T00:43:35.3855444Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-06-25T00:43:35.3863942Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-06-25T00:43:35.3883502Z --- PASS: TestMigFederatedDatabaseInstance_basic (22.36s)
```
### 2025-06-26
#### PASS 17 seconds
```
2025-06-26T00:43:16.8359048Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-06-26T00:43:16.8364983Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-06-26T00:43:16.8369363Z --- PASS: TestMigFederatedDatabaseInstance_basic (17.62s)
```