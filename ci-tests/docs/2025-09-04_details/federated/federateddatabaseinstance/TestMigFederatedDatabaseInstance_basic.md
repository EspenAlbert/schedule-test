# federated/federateddatabaseinstance/TestMigFederatedDatabaseInstance_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 01:01](#error-2025-08-17t0101160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122d5aafa9a76ca8bbda8/dataFederation/test-acc-tf-6779900111292229845 | qa | flaky_500 | 99.04s
[2025-08-24 00:46](#error-2025-08-24t0046570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d2c9bbb8c4ee1f81df5/limits | qa | flaky_500 | 38.00s
[2025-09-01 03:30](#error-2025-09-01t0330510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 4.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 21 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 19 seconds
- 2025-08-09 PASS 16 seconds
- 2025-08-10 PASS 30 seconds
- 2025-08-11 PASS 19 seconds
- 2025-08-12 PASS 16 seconds
- 2025-08-13 PASS 17 seconds
- 2025-08-14 PASS 20 seconds
- 2025-08-15 PASS 17 seconds
- 2025-08-16 PASS 20 seconds
- 2025-08-17

### Error 2025-08-17T01:01:16+00:00
```
2025-08-17T01:01:16.3480908Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-08-17T01:01:16.3494192Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-08-17T01:01:16.3549177Z === NAME  TestMigFederatedDatabaseInstance_basic
2025-08-17T01:01:16.3550567Z     resource_federated_database_instance_migration_test.go:21: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-08-17T01:01:16.3551521Z         
2025-08-17T01:01:16.3555267Z         Error: error reading MongoDB Atlas Federated Database Instace (test-acc-tf-6779900111292229845): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122d5aafa9a76ca8bbda8/dataFederation/test-acc-tf-6779900111292229845 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-17T01:01:16.3557703Z         
2025-08-17T01:01:16.3558383Z           with mongodbatlas_federated_database_instance.test,
2025-08-17T01:01:16.3559857Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-08-17T01:01:16.3561258Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-08-17T01:01:16.3561874Z         
2025-08-17T01:01:16.3679963Z === NAME  TestMigFederatedDatabaseInstance_basic
2025-08-17T01:01:16.3681015Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-17T01:01:16.3681832Z         
2025-08-17T01:01:16.3685591Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-6779900111292229845): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122d5aafa9a76ca8bbda8/dataFederation/test-acc-tf-6779900111292229845 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-17T01:01:16.3688073Z         
2025-08-17T01:01:16.3688545Z --- FAIL: TestMigFederatedDatabaseInstance_basic (99.40s)
```

- 2025-08-18 PASS 20 seconds
- 2025-08-19 PASS 15 seconds
- 2025-08-20
  - PASS 21 seconds
  - PASS 18 seconds
- 2025-08-21 PASS 16 seconds
- 2025-08-22 PASS 14 seconds
- 2025-08-23 PASS 15 seconds
- 2025-08-24

### Error 2025-08-24T00:46:57+00:00
```
2025-08-24T00:46:57.7632959Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-08-24T00:46:57.7669540Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-08-24T00:46:57.7709617Z === NAME  TestMigFederatedDatabaseInstance_basic
2025-08-24T00:46:57.7710799Z     resource_federated_database_instance_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:46:57.7711658Z         
2025-08-24T00:46:57.7712338Z         Error: error when getting project properties after create
2025-08-24T00:46:57.7712924Z         
2025-08-24T00:46:57.7713461Z           with mongodbatlas_project.test,
2025-08-24T00:46:57.7714522Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_project" "test":
2025-08-24T00:46:57.7715480Z           15: resource "mongodbatlas_project" "test" {
2025-08-24T00:46:57.7715984Z         
2025-08-24T00:46:57.7716800Z         error getting project (68aa5d2c9bbb8c4ee1f81df5): error getting project's
2025-08-24T00:46:57.7717631Z         limits (68aa5d2c9bbb8c4ee1f81df5):
2025-08-24T00:46:57.7718667Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2c9bbb8c4ee1f81df5/limits
2025-08-24T00:46:57.7720035Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:46:57.7721054Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:46:57.7721742Z         BadRequestDetail: 
2025-08-24T00:46:57.7722309Z --- FAIL: TestMigFederatedDatabaseInstance_basic (38.00s)
```

- 2025-08-25 PASS 20 seconds
- 2025-08-26 PASS 15 seconds
- 2025-08-27 PASS 18 seconds
- 2025-08-28 PASS 20 seconds
- 2025-08-29 PASS 19 seconds
- 2025-08-30 PASS 16 seconds
- 2025-08-31 PASS 17 seconds
- 2025-09-01
  - FAIL 4 seconds

### Error 2025-09-01T03:30:51+00:00
```
2025-09-01T03:30:51.8818925Z === RUN   TestMigFederatedDatabaseInstance_basic
2025-09-01T03:30:51.8826667Z === CONT  TestMigFederatedDatabaseInstance_basic
2025-09-01T03:30:51.8838688Z === NAME  TestMigFederatedDatabaseInstance_basic
2025-09-01T03:30:51.8839416Z     resource_federated_database_instance_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:30:51.8840018Z         
2025-09-01T03:30:51.8840546Z         Error: error creating project: test-acc-tf-p-9171532625223130416
2025-09-01T03:30:51.8840904Z         
2025-09-01T03:30:51.8841506Z           with mongodbatlas_project.test,
2025-09-01T03:30:51.8842257Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_project" "test":
2025-09-01T03:30:51.8843029Z           15: resource "mongodbatlas_project" "test" {
2025-09-01T03:30:51.8843337Z         
2025-09-01T03:30:51.8843947Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T03:30:51.8844728Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T03:30:51.8845424Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T03:30:51.8846060Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T03:30:51.8846586Z         BadRequestDetail: 
2025-09-01T03:30:51.8846925Z --- FAIL: TestMigFederatedDatabaseInstance_basic (4.28s)
```

  - PASS 17 seconds
  - PASS 16 seconds
  - PASS 16 seconds
  - PASS 17 seconds
  - PASS 16 seconds
  - PASS 19 seconds
  - PASS 16 seconds
- 2025-09-02 PASS 21 seconds
- 2025-09-03 PASS 21 seconds
- 2025-09-04 PASS 18 seconds