# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 12 seconds
```
2025-07-01T08:46:24.2983942Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-07-01T08:46:24.2990185Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-07-01T08:46:24.2992527Z --- PASS: TestAccFederatedDatabaseInstance_basic (12.86s)
```
### 2025-07-02
#### PASS 12 seconds
```
2025-07-02T00:41:47.8798381Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-07-02T00:41:47.8805083Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-07-02T00:41:47.8811641Z --- PASS: TestAccFederatedDatabaseInstance_basic (12.04s)
```
### 2025-07-03
#### PASS 17 seconds
```
2025-07-03T00:43:17.6275271Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-07-03T00:43:17.6280477Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-07-03T00:43:17.6283896Z --- PASS: TestAccFederatedDatabaseInstance_basic (17.26s)
```
### 2025-07-04
#### PASS 16 seconds
```
2025-07-04T00:42:31.4231171Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-07-04T00:42:31.4239707Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-07-04T00:42:31.4245961Z --- PASS: TestAccFederatedDatabaseInstance_basic (16.67s)
```
### 2025-07-05
#### PASS 13 seconds
```
2025-07-05T00:40:35.5950758Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-07-05T00:40:35.5955632Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-07-05T00:40:35.5960056Z --- PASS: TestAccFederatedDatabaseInstance_basic (13.26s)
```
### 2025-07-06
#### FAIL 34 seconds
```
2025-07-06T00:46:42.9597339Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-07-06T00:46:42.9603846Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-07-06T00:46:42.9650527Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-07-06T00:46:42.9651604Z     resource_federated_database_instance_test.go:37: Step 1/3 error: Error running apply: exit status 1
2025-07-06T00:46:42.9652379Z         
2025-07-06T00:46:42.9653034Z         Error: error when getting project properties after create
2025-07-06T00:46:42.9653578Z         
2025-07-06T00:46:42.9654081Z           with mongodbatlas_project.test,
2025-07-06T00:46:42.9655105Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-07-06T00:46:42.9656034Z           13: resource "mongodbatlas_project" "test" {
2025-07-06T00:46:42.9656518Z         
2025-07-06T00:46:42.9657288Z         error getting project (6869c400690ae45e168bcc72): error getting project's
2025-07-06T00:46:42.9658073Z         limits (6869c400690ae45e168bcc72):
2025-07-06T00:46:42.9659209Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c400690ae45e168bcc72/limits
2025-07-06T00:46:42.9660355Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:46:42.9661340Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:46:42.9662010Z         BadRequestDetail: 
2025-07-06T00:46:42.9662553Z --- FAIL: TestAccFederatedDatabaseInstance_basic (34.90s)
```
### 2025-07-07
#### PASS 12 seconds
```
2025-07-07T00:45:41.9630191Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-07-07T00:45:41.9635647Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-07-07T00:45:41.9639591Z --- PASS: TestAccFederatedDatabaseInstance_basic (12.23s)
```
### 2025-07-08
#### PASS 13 seconds
```
2025-07-08T00:43:40.0037508Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-07-08T00:43:40.0043413Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-07-08T00:43:40.0049671Z --- PASS: TestAccFederatedDatabaseInstance_basic (13.76s)
```