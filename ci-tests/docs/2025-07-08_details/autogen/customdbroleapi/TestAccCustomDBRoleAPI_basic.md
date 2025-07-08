# autogen/customdbroleapi/TestAccCustomDBRoleAPI_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 12 seconds
```
2025-07-01T09:00:04.3518167Z === RUN   TestAccCustomDBRoleAPI_basic
2025-07-01T09:00:04.3518995Z === CONT  TestAccCustomDBRoleAPI_basic
2025-07-01T09:00:04.3519684Z --- PASS: TestAccCustomDBRoleAPI_basic (12.45s)
```
### 2025-07-02
#### PASS 6 seconds
```
2025-07-02T00:52:43.3790092Z === RUN   TestAccCustomDBRoleAPI_basic
2025-07-02T00:52:43.3790683Z === CONT  TestAccCustomDBRoleAPI_basic
2025-07-02T00:52:43.3790993Z --- PASS: TestAccCustomDBRoleAPI_basic (6.78s)
```
### 2025-07-03
#### PASS 9 seconds
```
2025-07-03T00:54:41.3288714Z === RUN   TestAccCustomDBRoleAPI_basic
2025-07-03T00:54:41.3289312Z === CONT  TestAccCustomDBRoleAPI_basic
2025-07-03T00:54:41.3289614Z --- PASS: TestAccCustomDBRoleAPI_basic (9.80s)
```
### 2025-07-04
#### PASS 12 seconds
```
2025-07-04T01:01:11.2088545Z === RUN   TestAccCustomDBRoleAPI_basic
2025-07-04T01:01:11.2089356Z === CONT  TestAccCustomDBRoleAPI_basic
2025-07-04T01:01:11.2089792Z --- PASS: TestAccCustomDBRoleAPI_basic (12.17s)
```
### 2025-07-05
#### PASS 7 seconds
```
2025-07-05T00:53:13.1014696Z === RUN   TestAccCustomDBRoleAPI_basic
2025-07-05T00:53:13.1015271Z === CONT  TestAccCustomDBRoleAPI_basic
2025-07-05T00:53:13.1015583Z --- PASS: TestAccCustomDBRoleAPI_basic (7.82s)
```
### 2025-07-06
#### FAIL 35 seconds
```
2025-07-06T00:56:24.9088697Z === RUN   TestAccCustomDBRoleAPI_basic
2025-07-06T00:56:24.9089464Z === CONT  TestAccCustomDBRoleAPI_basic
2025-07-06T00:56:24.9104039Z   
2025-07-06T00:56:24.9104702Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-07-06T00:56:24.9105357Z         
2025-07-06T00:56:24.9106060Z         Error: error when getting project properties after create
2025-07-06T00:56:24.9106668Z         
2025-07-06T00:56:24.9107156Z           with mongodbatlas_project.test,
2025-07-06T00:56:24.9107745Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:56:24.9108290Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:56:24.9108570Z         
2025-07-06T00:56:24.9109004Z         error getting project (6869c45c690ae45e168be415): error getting project's
2025-07-06T00:56:24.9109444Z         limits (6869c45c690ae45e168be415):
2025-07-06T00:56:24.9110268Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c45c690ae45e168be415/limits
2025-07-06T00:56:24.9110955Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:56:24.9111517Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:56:24.9111899Z         BadRequestDetail: 
2025-07-06T00:56:24.9112175Z --- FAIL: TestAccCustomDBRoleAPI_basic (35.30s)
```
### 2025-07-07
#### PASS 7 seconds
```
2025-07-07T00:54:14.6919610Z === RUN   TestAccCustomDBRoleAPI_basic
2025-07-07T00:54:14.6920196Z === CONT  TestAccCustomDBRoleAPI_basic
2025-07-07T00:54:14.6920499Z --- PASS: TestAccCustomDBRoleAPI_basic (7.13s)
```
### 2025-07-08
#### PASS 8 seconds
```
2025-07-08T00:55:27.6875206Z === RUN   TestAccCustomDBRoleAPI_basic
2025-07-08T00:55:27.6876063Z === CONT  TestAccCustomDBRoleAPI_basic
2025-07-08T00:55:27.6876440Z --- PASS: TestAccCustomDBRoleAPI_basic (8.35s)
```