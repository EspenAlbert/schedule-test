# config/TestAccConfigRSCustomDBRoles_MultipleCustomRoles Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 34 seconds
```
2025-06-20T00:30:41.1276708Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-20T00:30:41.1278685Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-20T00:30:41.1281049Z --- PASS: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (34.84s)
```
### 2025-06-21
#### PASS 28 seconds
```
2025-06-21T00:30:24.1320431Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-21T00:30:24.1323641Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-21T00:30:24.1327464Z --- PASS: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (28.68s)
```
### 2025-06-22
#### FAIL 53 seconds
```
2025-06-22T00:33:39.3551194Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-22T00:33:39.3554623Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-22T00:33:39.3659900Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-22T00:33:39.3661245Z     resource_custom_db_role_test.go:367: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-22T00:33:39.3662128Z         
2025-06-22T00:33:39.3662819Z         Error: error when getting project properties after create
2025-06-22T00:33:39.3663444Z         
2025-06-22T00:33:39.3663998Z           with mongodbatlas_project.test,
2025-06-22T00:33:39.3665069Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:33:39.3666035Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:33:39.3666573Z         
2025-06-22T00:33:39.3667404Z         error getting project (68574ef0af7a0954e84add93): error getting project's
2025-06-22T00:33:39.3668605Z         limits (68574ef0af7a0954e84add93):
2025-06-22T00:33:39.3669644Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574ef0af7a0954e84add93/limits
2025-06-22T00:33:39.3670902Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:33:39.3672161Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:33:39.3672873Z         BadRequestDetail: 
2025-06-22T00:33:39.3673537Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (53.91s)
```
### 2025-06-23
#### PASS 34 seconds
```
2025-06-23T00:32:57.6855499Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-23T00:32:57.6857424Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-23T00:32:57.6877239Z --- PASS: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (34.90s)
```
### 2025-06-24
#### PASS 29 seconds
```
2025-06-24T00:30:45.8660720Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-24T00:30:45.8663928Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-24T00:30:45.8669276Z --- PASS: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (29.45s)
```
### 2025-06-25
#### PASS 29 seconds
```
2025-06-25T00:31:06.5572567Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-25T00:31:06.5575715Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-25T00:31:06.5580255Z --- PASS: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (29.80s)
```
### 2025-06-26
#### PASS 30 seconds
```
2025-06-26T00:31:01.9425853Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-26T00:31:01.9428913Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-26T00:31:01.9433317Z --- PASS: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (30.24s)
```