# config/TestAccCustomDBRoles_Basic Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 19 seconds
```
2025-06-20T00:30:41.1275186Z === RUN   TestAccCustomDBRoles_Basic
2025-06-20T00:30:41.1279900Z === CONT  TestAccCustomDBRoles_Basic
2025-06-20T00:30:41.1280241Z --- PASS: TestAccCustomDBRoles_Basic (19.99s)
```
### 2025-06-21
#### PASS 17 seconds
```
2025-06-21T00:30:24.1318033Z === RUN   TestAccCustomDBRoles_Basic
2025-06-21T00:30:24.1325666Z === CONT  TestAccCustomDBRoles_Basic
2025-06-21T00:30:24.1326183Z --- PASS: TestAccCustomDBRoles_Basic (17.62s)
```
### 2025-06-22
#### FAIL 13 seconds
```
2025-06-22T00:33:39.3547901Z === RUN   TestAccCustomDBRoles_Basic
2025-06-22T00:33:39.3556642Z === CONT  TestAccCustomDBRoles_Basic
2025-06-22T00:33:39.3579668Z   
2025-06-22T00:33:39.3580461Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-06-22T00:33:39.3581537Z         
2025-06-22T00:33:39.3585207Z         Error: error updating custom db role (test-acc-tf-5302981608677911054): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eedab82446d9bfb0630/customDBRoles/roles/test-acc-tf-5302981608677911054 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-22T00:33:39.3587934Z         
2025-06-22T00:33:39.3588766Z           with mongodbatlas_custom_db_role.test,
2025-06-22T00:33:39.3590332Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-06-22T00:33:39.3591736Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-06-22T00:33:39.3592306Z         
2025-06-22T00:33:39.3592732Z --- FAIL: TestAccCustomDBRoles_Basic (13.99s)
```
### 2025-06-23
#### PASS 20 seconds
```
2025-06-23T00:32:57.6854063Z === RUN   TestAccCustomDBRoles_Basic
2025-06-23T00:32:57.6858136Z === CONT  TestAccCustomDBRoles_Basic
2025-06-23T00:32:57.6858833Z --- PASS: TestAccCustomDBRoles_Basic (20.03s)
```
### 2025-06-24
#### PASS 16 seconds
```
2025-06-24T00:30:45.8653130Z === RUN   TestAccCustomDBRoles_Basic
2025-06-24T00:30:45.8667357Z === CONT  TestAccCustomDBRoles_Basic
2025-06-24T00:30:45.8667903Z --- PASS: TestAccCustomDBRoles_Basic (16.13s)
```
### 2025-06-25
#### PASS 17 seconds
```
2025-06-25T00:31:06.5570243Z === RUN   TestAccCustomDBRoles_Basic
2025-06-25T00:31:06.5577566Z === CONT  TestAccCustomDBRoles_Basic
2025-06-25T00:31:06.5578055Z --- PASS: TestAccCustomDBRoles_Basic (17.45s)
```
### 2025-06-26
#### PASS 16 seconds
```
2025-06-26T00:31:01.9423589Z === RUN   TestAccCustomDBRoles_Basic
2025-06-26T00:31:01.9430704Z === CONT  TestAccCustomDBRoles_Basic
2025-06-26T00:31:01.9431182Z --- PASS: TestAccCustomDBRoles_Basic (16.89s)
```