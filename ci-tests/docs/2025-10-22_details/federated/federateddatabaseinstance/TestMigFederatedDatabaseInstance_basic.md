# federated/federateddatabaseinstance/TestMigFederatedDatabaseInstance_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:45](#error-2025-10-19t0045410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f4317221ed692ad0018f9d/dataFederation | qa | flaky_500 | 64.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 22 seconds
- 2025-09-24 PASS 21 seconds
- 2025-09-25 PASS 16 seconds
- 2025-09-26 PASS 17 seconds
- 2025-09-27 PASS 18 seconds
- 2025-09-28 PASS 16 seconds
- 2025-09-29 PASS 21 seconds
- 2025-09-30
  - PASS 21 seconds
  - PASS 21 seconds
  - PASS 18 seconds
  - PASS 21 seconds
- 2025-10-01
  - PASS 17 seconds
  - PASS 20 seconds
  - PASS 18 seconds
  - PASS 17 seconds
  - PASS 18 seconds
  - PASS 18 seconds
  - PASS 19 seconds
  - PASS 20 seconds
- 2025-10-02 PASS 21 seconds
- 2025-10-03 PASS 18 seconds
- 2025-10-04 PASS 18 seconds
- 2025-10-05 PASS 18 seconds
- 2025-10-06 PASS 17 seconds
- 2025-10-07 PASS 17 seconds
- 2025-10-08 PASS 18 seconds
- 2025-10-09 PASS 21 seconds
- 2025-10-10 PASS 21 seconds
- 2025-10-11 PASS 19 seconds
- 2025-10-12 PASS 20 seconds
- 2025-10-13 PASS 19 seconds
- 2025-10-14 PASS 20 seconds
- 2025-10-15 PASS 23 seconds
- 2025-10-16 PASS 18 seconds
- 2025-10-17 PASS 19 seconds
- 2025-10-18: MISSING
- 2025-10-19

### Error 2025-10-19T00:45:41+00:00
```
2025-10-19T00:45:41.1035290Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-10-19T00:45:41.1044027Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-10-19T00:45:41.1092083Z === NAME  TestMigFederatedDatabaseInstance_basic
2025-10-19T00:45:41.1092760Z     resource_federated_database_instance_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:45:41.1093265Z         
2025-10-19T00:45:41.1094962Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f4317221ed692ad0018f9d/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-10-19T00:45:41.1096156Z         
2025-10-19T00:45:41.1096553Z           with mongodbatlas_federated_database_instance.test,
2025-10-19T00:45:41.1097644Z           on terraform_plugin_test.tf line 20, in resource "mongodbatlas_federated_database_instance" "test":
2025-10-19T00:45:41.1098350Z           20: resource "mongodbatlas_federated_database_instance" "test" {
2025-10-19T00:45:41.1098716Z         
2025-10-19T00:45:41.1099006Z --- FAIL: TestMigFederatedDatabaseInstance_basic (64.63s)
```

- 2025-10-20 PASS 18 seconds
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 19 seconds
  - PASS 21 seconds