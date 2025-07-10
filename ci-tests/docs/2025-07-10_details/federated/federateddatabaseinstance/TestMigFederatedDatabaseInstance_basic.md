# federated/federateddatabaseinstance/TestMigFederatedDatabaseInstance_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 109) FAIL(x 4)
Success rate: 96.46%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029590000) |  | qa |  | 4.07s
[2025-06-05 00:32](#error-2025-06-05t0032200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 5.04s
[2025-06-22 00:46](#error-2025-06-22t0046590000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574eecaf7a0954e84ad72a/dataFederation | qa | flaky_500 | 41.05s
[2025-07-06 00:46](#error-2025-07-06t0046420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4037267b5775b682b64/dataFederation | qa | flaky_500 | 39.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 17 seconds
- 2025-04-13 PASS 14 seconds
- 2025-04-14 PASS 19 seconds
- 2025-04-15 PASS 16 seconds
- 2025-04-16
  - PASS 18 seconds
  - PASS 20 seconds
- 2025-04-17 PASS 17 seconds
- 2025-04-18 PASS 18 seconds
- 2025-04-19 PASS 17 seconds
- 2025-04-20 PASS 15 seconds
- 2025-04-21 PASS 16 seconds
- 2025-04-22 PASS 19 seconds
- 2025-04-23 PASS 16 seconds
- 2025-04-24 PASS 18 seconds
- 2025-04-25 PASS 20 seconds
- 2025-04-26 PASS 29 seconds
- 2025-04-27 PASS 21 seconds
- 2025-04-28 PASS 18 seconds
- 2025-04-29 PASS 20 seconds
- 2025-04-30
  - PASS 15 seconds
  - PASS 22 seconds
- 2025-05-01
  - PASS 16 seconds
  - PASS 20 seconds
  - PASS 19 seconds
  - PASS 16 seconds
  - PASS 16 seconds
  - PASS 20 seconds
  - PASS 24 seconds
- 2025-05-02 PASS 19 seconds
- 2025-05-03 PASS 20 seconds
- 2025-05-04 PASS 18 seconds
- 2025-05-05 PASS 14 seconds
- 2025-05-06 PASS 16 seconds
- 2025-05-07 PASS 18 seconds
- 2025-05-08 PASS 16 seconds
- 2025-05-09 PASS 16 seconds
- 2025-05-10 PASS 21 seconds
- 2025-05-11

### Error 2025-05-11T00:29:59+00:00
```
2025-05-11T00:29:59.9925977Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-05-11T00:29:59.9943409Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-05-11T00:29:59.9964403Z === NAME  TestMigFederatedDatabaseInstance_basic
2025-05-11T00:29:59.9965049Z     resource_federated_database_instance_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:59.9965532Z         
2025-05-11T00:29:59.9965939Z         Error: error creating project: test-acc-tf-p-644505047401246251
2025-05-11T00:29:59.9966285Z         
2025-05-11T00:29:59.9966585Z           with mongodbatlas_project.test,
2025-05-11T00:29:59.9967178Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:59.9967706Z           15: resource "mongodbatlas_project" "test" {
2025-05-11T00:29:59.9967987Z         
2025-05-11T00:29:59.9968443Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:59.9968828Z         type
2025-05-11T00:29:59.9969106Z --- FAIL: TestMigFederatedDatabaseInstance_basic (4.65s)
```

- 2025-05-12 PASS 15 seconds
- 2025-05-13
  - PASS 16 seconds
  - PASS 19 seconds
- 2025-05-14 PASS 20 seconds
- 2025-05-15 PASS 19 seconds
- 2025-05-16 PASS 14 seconds
- 2025-05-17 PASS 15 seconds
- 2025-05-18 PASS 15 seconds
- 2025-05-19 PASS 14 seconds
- 2025-05-20 PASS 16 seconds
- 2025-05-21 PASS 17 seconds
- 2025-05-22 PASS 17 seconds
- 2025-05-23 PASS 15 seconds
- 2025-05-24 PASS 16 seconds
- 2025-05-25 PASS 14 seconds
- 2025-05-26 PASS 20 seconds
- 2025-05-27 PASS 18 seconds
- 2025-05-28
  - PASS 19 seconds
  - PASS 14 seconds
- 2025-05-29 PASS 18 seconds
- 2025-05-30 PASS 18 seconds
- 2025-05-31 PASS 16 seconds
- 2025-06-01
  - PASS 15 seconds
  - PASS 16 seconds
  - PASS 20 seconds
  - PASS 16 seconds
  - PASS 18 seconds
  - PASS 15 seconds
- 2025-06-02
  - PASS 17 seconds
  - PASS 18 seconds
  - PASS 24 seconds
- 2025-06-03 PASS 19 seconds
- 2025-06-04 PASS 16 seconds
- 2025-06-05

### Error 2025-06-05T00:32:20+00:00
```
2025-06-05T00:32:20.9992272Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-06-05T00:32:20.9999391Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-06-05T00:32:21.0025063Z === NAME  TestMigFederatedDatabaseInstance_basic
2025-06-05T00:32:21.0025721Z     resource_federated_database_instance_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:32:21.0026207Z         
2025-06-05T00:32:21.0026624Z         Error: error creating project: test-acc-tf-p-205871343804819486
2025-06-05T00:32:21.0026970Z         
2025-06-05T00:32:21.0027276Z           with mongodbatlas_project.test,
2025-06-05T00:32:21.0027872Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_project" "test":
2025-06-05T00:32:21.0028418Z           15: resource "mongodbatlas_project" "test" {
2025-06-05T00:32:21.0028709Z         
2025-06-05T00:32:21.0029169Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:32:21.0029787Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:32:21.0030357Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:21.0032517Z --- FAIL: TestMigFederatedDatabaseInstance_basic (5.39s)
```

- 2025-06-06 PASS 17 seconds
- 2025-06-07 PASS 20 seconds
- 2025-06-08 PASS 15 seconds
- 2025-06-09 PASS 20 seconds
- 2025-06-10 PASS 15 seconds
- 2025-06-11
  - PASS 18 seconds
  - PASS 20 seconds
- 2025-06-12 PASS 17 seconds
- 2025-06-13 PASS 15 seconds
- 2025-06-14 PASS 17 seconds
- 2025-06-15 PASS 19 seconds
- 2025-06-16 PASS 20 seconds
- 2025-06-17 PASS 18 seconds
- 2025-06-18 PASS 18 seconds
- 2025-06-19 PASS 21 seconds
- 2025-06-20 PASS 22 seconds
- 2025-06-21 PASS 21 seconds
- 2025-06-22

### Error 2025-06-22T00:46:59+00:00
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

- 2025-06-23 PASS 17 seconds
- 2025-06-24 PASS 15 seconds
- 2025-06-25 PASS 22 seconds
- 2025-06-26 PASS 17 seconds
- 2025-06-27 PASS 22 seconds
- 2025-06-28 PASS 15 seconds
- 2025-06-29 PASS 15 seconds
- 2025-06-30 PASS 16 seconds
- 2025-07-01
  - PASS 17 seconds
  - PASS 17 seconds
  - PASS 21 seconds
  - PASS 16 seconds
  - PASS 16 seconds
  - PASS 14 seconds
- 2025-07-02 PASS 16 seconds
- 2025-07-03 PASS 20 seconds
- 2025-07-04 PASS 20 seconds
- 2025-07-05 PASS 18 seconds
- 2025-07-06

### Error 2025-07-06T00:46:42+00:00
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

- 2025-07-07 PASS 16 seconds
- 2025-07-08 PASS 17 seconds
- 2025-07-09 PASS 21 seconds
- 2025-07-10 PASS 17 seconds