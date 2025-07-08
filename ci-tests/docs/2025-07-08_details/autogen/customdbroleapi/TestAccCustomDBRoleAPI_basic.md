# autogen/customdbroleapi/TestAccCustomDBRoleAPI_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 6 seconds
### 2025-07-03
#### PASS 9 seconds
### 2025-07-04
#### PASS 12 seconds
### 2025-07-05
#### PASS 7 seconds
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
### 2025-07-08
#### PASS 8 seconds