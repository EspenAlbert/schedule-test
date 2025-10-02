# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 4)
Success rate: 90.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:47](#error-2025-09-07t0047560000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1c5df5af52d2d4d4031/dataFederation/test-acc-tf-8584451608958356127 | qa | flaky_500 | 96.03s
[2025-09-08 09:49](#error-2025-09-08t0949220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a50cddbf4f6e498ff3/limits | qa | flaky_500 | 33.03s
[2025-09-14 00:41](#error-2025-09-14t0041180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c37d444485797b1f9c6/limits | qa | flaky_500 | 35.08s
[2025-09-15 06:33](#error-2025-09-15t0633000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b043d444485797b5d7fa/limits | qa | flaky_500 | 35.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 16 seconds
- 2025-09-04 PASS 15 seconds
- 2025-09-05 PASS 14 seconds
- 2025-09-06 PASS 14 seconds
- 2025-09-07

### Error 2025-09-07T00:47:56+00:00
```
2025-09-07T00:47:56.6564826Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-09-07T00:47:56.6572102Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-09-07T00:47:56.6687317Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-09-07T00:47:56.6687978Z     resource_federated_database_instance_test.go:41: Step 1/3 error: Error running post-apply refresh plan: exit status 1
2025-09-07T00:47:56.6688474Z         
2025-09-07T00:47:56.6690700Z         Error: error reading MongoDB Atlas Federated Database Instace (test-acc-tf-8584451608958356127): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1c5df5af52d2d4d4031/dataFederation/test-acc-tf-8584451608958356127 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-07T00:47:56.6692049Z         
2025-09-07T00:47:56.6692404Z           with mongodbatlas_federated_database_instance.test,
2025-09-07T00:47:56.6693104Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-09-07T00:47:56.6693753Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-09-07T00:47:56.6694195Z         
2025-09-07T00:47:56.6704969Z    test_terraform_path=/home/runner/work/_temp/6c10dbbb-c6ae-4454-815f-dcde75bf0cf3/terraform test_working_directory=/tmp/plugintest1498459142
2025-09-07T00:47:56.6739658Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-09-07T00:47:56.6740278Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-07T00:47:56.6740718Z         
2025-09-07T00:47:56.6742703Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-8584451608958356127): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1c5df5af52d2d4d4031/dataFederation/test-acc-tf-8584451608958356127 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-07T00:47:56.6744210Z         
2025-09-07T00:47:56.6744488Z --- FAIL: TestAccFederatedDatabaseInstance_basic (96.30s)
```

- 2025-09-08
  - PASS 12 seconds
  - FAIL 33 seconds

### Error 2025-09-08T09:49:22+00:00
```
2025-09-08T09:49:22.3703283Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-09-08T09:49:22.3714383Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-09-08T09:49:22.3775420Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-09-08T09:49:22.3776514Z     resource_federated_database_instance_test.go:41: Step 1/3 error: Error running apply: exit status 1
2025-09-08T09:49:22.3777321Z         
2025-09-08T09:49:22.3777994Z         Error: error when getting project properties after create
2025-09-08T09:49:22.3778752Z         
2025-09-08T09:49:22.3779283Z           with mongodbatlas_project.test,
2025-09-08T09:49:22.3780506Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-08T09:49:22.3781494Z           13: resource "mongodbatlas_project" "test" {
2025-09-08T09:49:22.3782015Z         
2025-09-08T09:49:22.3782817Z         error getting project (68bea2a50cddbf4f6e498ff3): error getting project's
2025-09-08T09:49:22.3783646Z         limits (68bea2a50cddbf4f6e498ff3):
2025-09-08T09:49:22.3784669Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a50cddbf4f6e498ff3/limits
2025-09-08T09:49:22.3786040Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:49:22.3787062Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:49:22.3787751Z         BadRequestDetail: 
2025-09-08T09:49:22.3788305Z --- FAIL: TestAccFederatedDatabaseInstance_basic (33.26s)
```

  - PASS 17 seconds
- 2025-09-09 PASS 17 seconds
- 2025-09-10 PASS 13 seconds
- 2025-09-11 PASS 14 seconds
- 2025-09-12 PASS 12 seconds
- 2025-09-13 PASS 15 seconds
- 2025-09-14

### Error 2025-09-14T00:41:18+00:00
```
2025-09-14T00:41:18.3202854Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-09-14T00:41:18.3214290Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-09-14T00:41:18.3237567Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-09-14T00:41:18.3238581Z     resource_federated_database_instance_test.go:41: Step 1/3 error: Error running apply: exit status 1
2025-09-14T00:41:18.3239469Z         
2025-09-14T00:41:18.3240220Z         Error: error when getting project properties after create
2025-09-14T00:41:18.3240739Z         
2025-09-14T00:41:18.3241053Z           with mongodbatlas_project.test,
2025-09-14T00:41:18.3241663Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-14T00:41:18.3242227Z           13: resource "mongodbatlas_project" "test" {
2025-09-14T00:41:18.3242532Z         
2025-09-14T00:41:18.3242992Z         error getting project (68c60c37d444485797b1f9c6): error getting project's
2025-09-14T00:41:18.3243662Z         limits (68c60c37d444485797b1f9c6):
2025-09-14T00:41:18.3244264Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c37d444485797b1f9c6/limits
2025-09-14T00:41:18.3244941Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:18.3245528Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:18.3245929Z         BadRequestDetail: 
2025-09-14T00:41:18.3246265Z --- FAIL: TestAccFederatedDatabaseInstance_basic (35.81s)
```

- 2025-09-15
  - PASS 15 seconds
  - FAIL 35 seconds

### Error 2025-09-15T06:33:00+00:00
```
2025-09-15T06:33:00.5995294Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-09-15T06:33:00.6004150Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-09-15T06:33:00.6063150Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-09-15T06:33:00.6063779Z     resource_federated_database_instance_test.go:41: Step 1/3 error: Error running apply: exit status 1
2025-09-15T06:33:00.6064294Z         
2025-09-15T06:33:00.6064921Z         Error: error when getting project properties after create
2025-09-15T06:33:00.6065260Z         
2025-09-15T06:33:00.6065559Z           with mongodbatlas_project.test,
2025-09-15T06:33:00.6066155Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-15T06:33:00.6066801Z           13: resource "mongodbatlas_project" "test" {
2025-09-15T06:33:00.6067084Z         
2025-09-15T06:33:00.6067698Z         error getting project (68c7b043d444485797b5d7fa): error getting project's
2025-09-15T06:33:00.6068182Z         limits (68c7b043d444485797b5d7fa):
2025-09-15T06:33:00.6068750Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b043d444485797b5d7fa/limits
2025-09-15T06:33:00.6069409Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:00.6069984Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:00.6070366Z         BadRequestDetail: 
2025-09-15T06:33:00.6070690Z --- FAIL: TestAccFederatedDatabaseInstance_basic (35.55s)
```

- 2025-09-16 PASS 16 seconds
- 2025-09-17 PASS 15 seconds
- 2025-09-18 PASS 13 seconds
- 2025-09-19 PASS 15 seconds
- 2025-09-20 PASS 12 seconds
- 2025-09-21 PASS 11 seconds
- 2025-09-22 PASS 15 seconds
- 2025-09-23 PASS 16 seconds
- 2025-09-24 PASS 19 seconds
- 2025-09-25 PASS 12 seconds
- 2025-09-26 PASS 11 seconds
- 2025-09-27 PASS 15 seconds
- 2025-09-28 PASS 12 seconds
- 2025-09-29 PASS 17 seconds
- 2025-09-30
  - PASS 14 seconds
  - PASS 15 seconds
  - PASS 12 seconds
  - PASS 16 seconds
- 2025-10-01
  - PASS 12 seconds
  - PASS 16 seconds
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 14 seconds
  - PASS 15 seconds
  - PASS 15 seconds
- 2025-10-02 PASS 17 seconds