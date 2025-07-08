# config/customdbrole/TestAccConfigRSCustomDBRoles_MultipleCustomRoles Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 28 seconds
```
2025-07-01T08:35:29.4568972Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-01T08:35:29.4570803Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-01T08:35:29.4572931Z --- PASS: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (28.30s)
```
### 2025-07-02
#### PASS 28 seconds
```
2025-07-02T00:30:40.8595735Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-02T00:30:40.8597574Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-02T00:30:40.8599687Z --- PASS: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (28.28s)
```
### 2025-07-03
#### PASS 32 seconds
```
2025-07-03T00:31:22.4203578Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-03T00:31:22.4206874Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-03T00:31:22.4212151Z --- PASS: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (32.75s)
```
### 2025-07-04
#### PASS 28 seconds
```
2025-07-04T00:30:47.2381415Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-04T00:30:47.2384473Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-04T00:30:47.2386131Z --- PASS: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (28.43s)
```
### 2025-07-05
#### PASS 34 seconds
```
2025-07-05T00:29:58.2600987Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-05T00:29:58.2602939Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-05T00:29:58.2605071Z --- PASS: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (34.24s)
```
### 2025-07-06
#### FAIL 55 seconds
```
2025-07-06T00:33:17.8237666Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-06T00:33:17.8240850Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-06T00:33:17.8390098Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-06T00:33:17.8391117Z     resource_custom_db_role_test.go:367: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-07-06T00:33:17.8391828Z         
2025-07-06T00:33:17.8392433Z         Error: error when getting project properties after create
2025-07-06T00:33:17.8392956Z         
2025-07-06T00:33:17.8393435Z           with mongodbatlas_project.test,
2025-07-06T00:33:17.8394430Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:33:17.8397100Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:33:17.8397779Z         
2025-07-06T00:33:17.8398685Z         error getting project (6869c4027267b5775b682a3c): error getting project's
2025-07-06T00:33:17.8399589Z         limits (6869c4027267b5775b682a3c):
2025-07-06T00:33:17.8400532Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4027267b5775b682a3c/limits
2025-07-06T00:33:17.8401812Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:33:17.8402754Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:33:17.8403549Z         BadRequestDetail: 
2025-07-06T00:33:17.8424754Z    test_working_directory=/tmp/plugintest2041085861 test_step_number=2
2025-07-06T00:33:17.8437848Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (55.34s)
```
### 2025-07-07
#### PASS 28 seconds
```
2025-07-07T00:33:18.3424084Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-07T00:33:18.3427303Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-07T00:33:18.3431110Z --- PASS: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (28.07s)
```
### 2025-07-08
#### PASS 35 seconds
```
2025-07-08T00:31:20.9916806Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-08T00:31:20.9918766Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-08T00:31:20.9921639Z --- PASS: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (35.31s)
```