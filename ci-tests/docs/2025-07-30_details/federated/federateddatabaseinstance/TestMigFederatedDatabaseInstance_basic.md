# federated/federateddatabaseinstance/TestMigFederatedDatabaseInstance_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 35) FAIL(x 2)
Success rate: 94.59%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:46](#error-2025-07-06t0046420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4037267b5775b682b64/dataFederation | qa | flaky_500 | 39.02s
[2025-07-10 13:21](#error-2025-07-10t1321490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbafe006d8d55bb9e63a6/dataFederation | qa | flaky_500 | 129.06s

## Timeline
- 2025-06-30: MISSING
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
- 2025-07-10
  - PASS 17 seconds
  - FAIL 2 minutes

### Error 2025-07-10T13:21:49+00:00
```
2025-07-10T13:21:49.2106455Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-07-10T13:21:49.2113472Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-07-10T13:21:49.2205414Z === NAME  TestMigFederatedDatabaseInstance_basic
2025-07-10T13:21:49.2206073Z     resource_federated_database_instance_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:21:49.2206663Z         
2025-07-10T13:21:49.2208305Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafe006d8d55bb9e63a6/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-10T13:21:49.2209456Z         
2025-07-10T13:21:49.2209822Z           with mongodbatlas_federated_database_instance.test,
2025-07-10T13:21:49.2210530Z           on terraform_plugin_test.tf line 20, in resource "mongodbatlas_federated_database_instance" "test":
2025-07-10T13:21:49.2211191Z           20: resource "mongodbatlas_federated_database_instance" "test" {
2025-07-10T13:21:49.2211531Z         
2025-07-10T13:21:49.2258091Z === NAME  TestMigFederatedDatabaseInstance_basic
2025-07-10T13:21:49.2258782Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:21:49.2259316Z         
2025-07-10T13:21:49.2259779Z         Error: error when destroying resource
2025-07-10T13:21:49.2260186Z         
2025-07-10T13:21:49.2260530Z         error deleting project (686fbafe006d8d55bb9e63a6):
2025-07-10T13:21:49.2261223Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafe006d8d55bb9e63a6
2025-07-10T13:21:49.2261822Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-10T13:21:49.2262345Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_DATA_LAKES") Detail: Cannot close group
2025-07-10T13:21:49.2263142Z         while it has active federated database instances; please terminate all
2025-07-10T13:21:49.2263919Z         federated database instances. Reason: Conflict. Params: [], BadRequestDetail:
2025-07-10T13:21:49.2264504Z --- FAIL: TestMigFederatedDatabaseInstance_basic (129.63s)
```

- 2025-07-11 PASS 16 seconds
- 2025-07-12 PASS 14 seconds
- 2025-07-13 PASS 16 seconds
- 2025-07-14 PASS 20 seconds
- 2025-07-15 PASS 16 seconds
- 2025-07-16 PASS 20 seconds
- 2025-07-17 PASS 17 seconds
- 2025-07-18 PASS 22 seconds
- 2025-07-19 PASS 15 seconds
- 2025-07-20 PASS a minute
- 2025-07-21 PASS 18 seconds
- 2025-07-22 PASS 18 seconds
- 2025-07-23
  - PASS 23 seconds
  - PASS 19 seconds
- 2025-07-24 PASS 17 seconds
- 2025-07-25 PASS 21 seconds
- 2025-07-26 PASS 17 seconds
- 2025-07-27 PASS 57 seconds
- 2025-07-28 PASS 17 seconds
- 2025-07-29 PASS 18 seconds
- 2025-07-30 PASS 20 seconds