# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 116 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.06s
2025-06-05 00:28 | dev | 2.02s
2025-07-06 00:46 | qa | 32.08s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 6 seconds
### 2025-04-12
#### PASS 7 seconds
### 2025-04-13
#### PASS 8 seconds
### 2025-04-14
#### PASS 8 seconds
### 2025-04-15
#### PASS 8 seconds
### 2025-04-16
#### PASS 6 seconds
#### PASS 8 seconds
### 2025-04-17
#### PASS 7 seconds
### 2025-04-18
#### PASS 8 seconds
### 2025-04-19
#### PASS 8 seconds
### 2025-04-20
#### PASS 6 seconds
### 2025-04-21
#### PASS 7 seconds
### 2025-04-22
#### PASS 7 seconds
### 2025-04-23
#### PASS 6 seconds
### 2025-04-24
#### PASS 7 seconds
### 2025-04-25
#### PASS 9 seconds
### 2025-04-26
#### PASS 8 seconds
### 2025-04-27
#### PASS 7 seconds
### 2025-04-28
#### PASS 7 seconds
### 2025-04-29
#### PASS 7 seconds
### 2025-04-30
#### PASS 7 seconds
#### PASS 6 seconds
### 2025-05-01
#### PASS 11 seconds
#### PASS 9 seconds
#### PASS 6 seconds
#### PASS 5 seconds
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 6 seconds
### 2025-05-02
#### PASS 6 seconds
### 2025-05-03
#### PASS 6 seconds
### 2025-05-04
#### PASS 10 seconds
### 2025-05-05
#### PASS 10 seconds
### 2025-05-06
#### PASS 5 seconds
### 2025-05-07
#### PASS 6 seconds
### 2025-05-08
#### PASS 5 seconds
### 2025-05-09
#### PASS 6 seconds
### 2025-05-10
#### PASS 12 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:53.9085030Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-05-11T00:29:53.9098331Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-05-11T00:29:53.9108165Z    test_name=TestAccGenericX509AuthDBUser_withCustomerX509
2025-05-11T00:29:53.9108907Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:53.9109453Z         
2025-05-11T00:29:53.9109933Z         Error: error creating project: test-acc-tf-p-6492564687633459727
2025-05-11T00:29:53.9110346Z         
2025-05-11T00:29:53.9110702Z           with mongodbatlas_project.test,
2025-05-11T00:29:53.9111595Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:53.9112215Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:53.9112572Z         
2025-05-11T00:29:53.9113108Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:53.9113577Z         type
2025-05-11T00:29:53.9113944Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (0.63s)
```
### 2025-05-12
#### PASS 6 seconds
### 2025-05-13
#### PASS 6 seconds
#### PASS 7 seconds
### 2025-05-14
#### PASS 9 seconds
### 2025-05-15
#### PASS 6 seconds
### 2025-05-16
#### PASS 6 seconds
### 2025-05-17
#### PASS 6 seconds
### 2025-05-18
#### PASS 7 seconds
### 2025-05-19
#### PASS 7 seconds
### 2025-05-20
#### PASS 8 seconds
### 2025-05-21
#### PASS 7 seconds
### 2025-05-22
#### PASS 8 seconds
### 2025-05-23
#### PASS 9 seconds
### 2025-05-24
#### PASS 7 seconds
### 2025-05-25
#### PASS 5 seconds
### 2025-05-26
#### PASS 8 seconds
### 2025-05-27
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-28
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 9 seconds
### 2025-05-29
#### PASS 8 seconds
#### PASS 6 seconds
### 2025-05-30
#### PASS 9 seconds
### 2025-05-31
#### PASS 7 seconds
### 2025-06-01
#### PASS 8 seconds
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 8 seconds
#### PASS 5 seconds
#### PASS 5 seconds
### 2025-06-02
#### PASS 9 seconds
#### PASS 6 seconds
#### PASS 7 seconds
### 2025-06-03
#### PASS 8 seconds
### 2025-06-04
#### PASS 9 seconds
### 2025-06-05
#### FAIL 2 seconds
```
2025-06-05T00:28:56.4280556Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-06-05T00:28:56.4282761Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-06-05T00:28:56.4296861Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2025-06-05T00:28:56.4297602Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:28:56.4298181Z         
2025-06-05T00:28:56.4298709Z         Error: error creating project: test-acc-tf-p-2722706447821855615
2025-06-05T00:28:56.4299147Z         
2025-06-05T00:28:56.4299666Z           with mongodbatlas_project.test,
2025-06-05T00:28:56.4300395Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:28:56.4301040Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:28:56.4301422Z         
2025-06-05T00:28:56.4301972Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:28:56.4302689Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:28:56.4303355Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:56.4303904Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (2.18s)
```
### 2025-06-06
#### PASS 10 seconds
### 2025-06-07
#### PASS 8 seconds
### 2025-06-08
#### PASS 9 seconds
### 2025-06-09
#### PASS 7 seconds
### 2025-06-10
#### PASS 8 seconds
### 2025-06-11
#### PASS 7 seconds
#### PASS 9 seconds
### 2025-06-12
#### PASS 6 seconds
### 2025-06-13
#### PASS 8 seconds
### 2025-06-14
#### PASS 5 seconds
### 2025-06-15
#### PASS 5 seconds
### 2025-06-16
#### PASS 8 seconds
### 2025-06-17
#### PASS 6 seconds
### 2025-06-18
#### PASS 5 seconds
### 2025-06-19
#### PASS 8 seconds
### 2025-06-20
#### PASS 5 seconds
### 2025-06-21
#### PASS 9 seconds
### 2025-06-22
#### PASS 9 seconds
### 2025-06-23
#### PASS 6 seconds
### 2025-06-24
#### PASS 7 seconds
### 2025-06-25
#### PASS 6 seconds
### 2025-06-26
#### PASS 7 seconds
### 2025-06-27
#### PASS 9 seconds
### 2025-06-28
#### PASS 8 seconds
### 2025-06-29
#### PASS 7 seconds
### 2025-06-30
#### PASS 9 seconds
### 2025-07-01
#### PASS 6 seconds
#### PASS 5 seconds
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 9 seconds
#### PASS 5 seconds
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
### 2025-07-09
#### PASS 5 seconds