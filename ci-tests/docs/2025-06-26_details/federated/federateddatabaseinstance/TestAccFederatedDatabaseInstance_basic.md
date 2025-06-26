# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 17 seconds
```
2025-06-20T00:41:29.7105611Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-06-20T00:41:29.7111616Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-06-20T00:41:29.7115082Z --- PASS: TestAccFederatedDatabaseInstance_basic (17.80s)
```
### 2025-06-21
#### PASS 17 seconds
```
2025-06-21T00:42:51.6796317Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-06-21T00:42:51.6802052Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-06-21T00:42:51.6806237Z --- PASS: TestAccFederatedDatabaseInstance_basic (17.48s)
```
### 2025-06-22
#### FAIL 33 seconds
```
2025-06-22T00:46:59.2955647Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-06-22T00:46:59.2961310Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-06-22T00:46:59.2985824Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-06-22T00:46:59.2986518Z     resource_federated_database_instance_test.go:37: Step 1/3 error: Error running apply: exit status 1
2025-06-22T00:46:59.2986972Z         
2025-06-22T00:46:59.2987345Z         Error: error when getting project properties after create
2025-06-22T00:46:59.2987670Z         
2025-06-22T00:46:59.2987958Z           with mongodbatlas_project.test,
2025-06-22T00:46:59.2988541Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-06-22T00:46:59.2989066Z           13: resource "mongodbatlas_project" "test" {
2025-06-22T00:46:59.2989345Z         
2025-06-22T00:46:59.2989792Z         error getting project (68574eeaab82446d9bfb054a): error getting project's
2025-06-22T00:46:59.2990254Z         limits (68574eeaab82446d9bfb054a):
2025-06-22T00:46:59.2990826Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eeaab82446d9bfb054a/limits
2025-06-22T00:46:59.2991483Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:46:59.2992057Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:46:59.2992643Z         BadRequestDetail: 
2025-06-22T00:46:59.2992960Z --- FAIL: TestAccFederatedDatabaseInstance_basic (33.92s)
```
### 2025-06-23
#### PASS 14 seconds
```
2025-06-23T00:45:10.8975019Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-06-23T00:45:10.8981222Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-06-23T00:45:10.8983736Z --- PASS: TestAccFederatedDatabaseInstance_basic (14.64s)
```
### 2025-06-24
#### PASS 11 seconds
```
2025-06-24T00:41:55.7867958Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-06-24T00:41:55.7874827Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-06-24T00:41:55.7877222Z --- PASS: TestAccFederatedDatabaseInstance_basic (11.90s)
```
### 2025-06-25
#### PASS 17 seconds
```
2025-06-25T00:43:35.3856960Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-06-25T00:43:35.3863351Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-06-25T00:43:35.3869343Z --- PASS: TestAccFederatedDatabaseInstance_basic (17.77s)
```
### 2025-06-26
#### PASS 12 seconds
```
2025-06-26T00:43:16.8360293Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-06-26T00:43:16.8366451Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-06-26T00:43:16.8368868Z --- PASS: TestAccFederatedDatabaseInstance_basic (12.94s)
```