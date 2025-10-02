# federated/federateddatabaseinstance/TestMigFederatedDatabaseInstance_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:47](#error-2025-09-07t0047560000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1c8df5af52d2d4d46c5/dataFederation | qa | flaky_500 | 38.10s
[2025-09-14 00:41](#error-2025-09-14t0041180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c3a1411d835e95b22f1/limits | qa | flaky_500 | 37.08s
[2025-09-15 06:33](#error-2025-09-15t0633000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b045d444485797b5dd6e/limits | qa | flaky_500 | 36.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 21 seconds
- 2025-09-04 PASS 18 seconds
- 2025-09-05 PASS 16 seconds
- 2025-09-06 PASS 17 seconds
- 2025-09-07

### Error 2025-09-07T00:47:56+00:00
```
2025-09-07T00:47:56.6563635Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-09-07T00:47:56.6573537Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-09-07T00:47:56.6616395Z === NAME  TestMigFederatedDatabaseInstance_basic
2025-09-07T00:47:56.6617029Z     resource_federated_database_instance_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:47:56.6617620Z         
2025-09-07T00:47:56.6619497Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1c8df5af52d2d4d46c5/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-07T00:47:56.6620652Z         
2025-09-07T00:47:56.6621010Z           with mongodbatlas_federated_database_instance.test,
2025-09-07T00:47:56.6621713Z           on terraform_plugin_test.tf line 20, in resource "mongodbatlas_federated_database_instance" "test":
2025-09-07T00:47:56.6622366Z           20: resource "mongodbatlas_federated_database_instance" "test" {
2025-09-07T00:47:56.6622701Z         
2025-09-07T00:47:56.6622970Z --- FAIL: TestMigFederatedDatabaseInstance_basic (38.96s)
```

- 2025-09-08
  - PASS 15 seconds
  - PASS a minute
  - PASS 21 seconds
- 2025-09-09 PASS 22 seconds
- 2025-09-10 PASS 17 seconds
- 2025-09-11 PASS 18 seconds
- 2025-09-12 PASS 16 seconds
- 2025-09-13 PASS 19 seconds
- 2025-09-14

### Error 2025-09-14T00:41:18+00:00
```
2025-09-14T00:41:18.3201693Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-09-14T00:41:18.3212570Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-09-14T00:41:18.3274173Z === NAME  TestMigFederatedDatabaseInstance_basic
2025-09-14T00:41:18.3274839Z     resource_federated_database_instance_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:41:18.3275339Z         
2025-09-14T00:41:18.3275719Z         Error: error when getting project properties after create
2025-09-14T00:41:18.3276067Z         
2025-09-14T00:41:18.3276369Z           with mongodbatlas_project.test,
2025-09-14T00:41:18.3277110Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_project" "test":
2025-09-14T00:41:18.3277658Z           15: resource "mongodbatlas_project" "test" {
2025-09-14T00:41:18.3277952Z         
2025-09-14T00:41:18.3278398Z         error getting project (68c60c3a1411d835e95b22f1): error getting project's
2025-09-14T00:41:18.3278856Z         limits (68c60c3a1411d835e95b22f1):
2025-09-14T00:41:18.3279433Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c3a1411d835e95b22f1/limits
2025-09-14T00:41:18.3280117Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:18.3280695Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:18.3281093Z         BadRequestDetail: 
2025-09-14T00:41:18.3281422Z --- FAIL: TestMigFederatedDatabaseInstance_basic (37.79s)
```

- 2025-09-15
  - PASS 20 seconds
  - FAIL 36 seconds

### Error 2025-09-15T06:33:00+00:00
```
2025-09-15T06:33:00.5994048Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-09-15T06:33:00.6003670Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-09-15T06:33:00.6078479Z === NAME  TestMigFederatedDatabaseInstance_basic
2025-09-15T06:33:00.6079137Z     resource_federated_database_instance_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:33:00.6079616Z         
2025-09-15T06:33:00.6079991Z         Error: error when getting project properties after create
2025-09-15T06:33:00.6080314Z         
2025-09-15T06:33:00.6080608Z           with mongodbatlas_project.test,
2025-09-15T06:33:00.6081198Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_project" "test":
2025-09-15T06:33:00.6081723Z           15: resource "mongodbatlas_project" "test" {
2025-09-15T06:33:00.6082010Z         
2025-09-15T06:33:00.6082447Z         error getting project (68c7b045d444485797b5dd6e): error getting project's
2025-09-15T06:33:00.6082895Z         limits (68c7b045d444485797b5dd6e):
2025-09-15T06:33:00.6083460Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b045d444485797b5dd6e/limits
2025-09-15T06:33:00.6084121Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:00.6084685Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:00.6085066Z         BadRequestDetail: 
2025-09-15T06:33:00.6085384Z --- FAIL: TestMigFederatedDatabaseInstance_basic (36.73s)
```

- 2025-09-16 PASS 20 seconds
- 2025-09-17 PASS 20 seconds
- 2025-09-18 PASS 18 seconds
- 2025-09-19 PASS 18 seconds
- 2025-09-20 PASS 17 seconds
- 2025-09-21 PASS 17 seconds
- 2025-09-22 PASS 18 seconds
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