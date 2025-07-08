# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 5 seconds
```
2025-07-01T08:46:21.8539060Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-01T08:46:21.8543979Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-01T08:46:21.8548223Z --- PASS: TestAccGenericX509AuthDBUser_withCustomerX509 (5.64s)
```
### 2025-07-02
#### PASS 9 seconds
```
2025-07-02T00:42:41.6709908Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-02T00:42:41.6712545Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-02T00:42:41.6715713Z --- PASS: TestAccGenericX509AuthDBUser_withCustomerX509 (9.13s)
```
### 2025-07-03
#### PASS 6 seconds
```
2025-07-03T00:43:41.3494192Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-03T00:43:41.3496615Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-03T00:43:41.3499360Z --- PASS: TestAccGenericX509AuthDBUser_withCustomerX509 (6.75s)
```
### 2025-07-04
#### PASS 10 seconds
```
2025-07-04T00:45:35.9940284Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-04T00:45:35.9942570Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-04T00:45:35.9945797Z --- PASS: TestAccGenericX509AuthDBUser_withCustomerX509 (10.12s)
```
### 2025-07-05
#### PASS 7 seconds
```
2025-07-05T00:38:37.6823638Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-05T00:38:37.6827696Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-05T00:38:37.6833056Z --- PASS: TestAccGenericX509AuthDBUser_withCustomerX509 (7.89s)
```
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
```
2025-07-07T00:43:47.0863371Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-07T00:43:47.0865800Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-07T00:43:47.0868450Z --- PASS: TestAccGenericX509AuthDBUser_withCustomerX509 (5.71s)
```
### 2025-07-08
#### PASS 10 seconds
```
2025-07-08T00:43:11.4333127Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-08T00:43:11.4338706Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-08T00:43:11.4341940Z --- PASS: TestAccGenericX509AuthDBUser_withCustomerX509 (10.07s)
```