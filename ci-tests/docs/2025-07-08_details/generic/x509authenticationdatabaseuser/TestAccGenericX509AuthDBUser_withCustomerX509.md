# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 9 seconds
### 2025-07-03
#### PASS 6 seconds
### 2025-07-04
#### PASS 10 seconds
### 2025-07-05
#### PASS 7 seconds
### 2025-07-06
#### FAIL 32 seconds
```
2025-07-06T00:46:50.1053305Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-06T00:46:50.1057016Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-06T00:46:50.1088902Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-06T00:46:50.1090195Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:46:50.1091147Z         
2025-07-06T00:46:50.1091919Z         Error: error when getting project properties after create
2025-07-06T00:46:50.1092611Z         
2025-07-06T00:46:50.1093395Z           with mongodbatlas_project.test,
2025-07-06T00:46:50.1094579Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:46:50.1095671Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:46:50.1096293Z         
2025-07-06T00:46:50.1097190Z         error getting project (6869c4057267b5775b682e3b): error getting project's
2025-07-06T00:46:50.1098106Z         limits (6869c4057267b5775b682e3b):
2025-07-06T00:46:50.1099252Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4057267b5775b682e3b/limits
2025-07-06T00:46:50.1100578Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:46:50.1101743Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:46:50.1102548Z         BadRequestDetail: 
2025-07-06T00:46:50.1103438Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (32.78s)
```
### 2025-07-07
#### PASS 5 seconds
### 2025-07-08
#### PASS 10 seconds