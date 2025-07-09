# generic/x509authenticationdatabaseuser/TestMigGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 116 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 3.02s
2025-06-05 00:28 | dev | 4.08s

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
#### PASS 10 seconds
### 2025-04-12
#### PASS 11 seconds
### 2025-04-13
#### PASS 15 seconds
### 2025-04-14
#### PASS 10 seconds
### 2025-04-15
#### PASS 15 seconds
### 2025-04-16
#### PASS 11 seconds
#### PASS 15 seconds
### 2025-04-17
#### PASS 15 seconds
### 2025-04-18
#### PASS 11 seconds
### 2025-04-19
#### PASS 15 seconds
### 2025-04-20
#### PASS 11 seconds
### 2025-04-21
#### PASS 10 seconds
### 2025-04-22
#### PASS 11 seconds
### 2025-04-23
#### PASS 11 seconds
### 2025-04-24
#### PASS 13 seconds
### 2025-04-25
#### PASS 15 seconds
### 2025-04-26
#### PASS 15 seconds
### 2025-04-27
#### PASS 10 seconds
### 2025-04-28
#### PASS 9 seconds
### 2025-04-29
#### PASS 11 seconds
### 2025-04-30
#### PASS 15 seconds
#### PASS 10 seconds
### 2025-05-01
#### PASS 15 seconds
#### PASS 15 seconds
#### PASS 9 seconds
#### PASS 11 seconds
#### PASS 15 seconds
#### PASS 15 seconds
#### PASS 15 seconds
### 2025-05-02
#### PASS 12 seconds
### 2025-05-03
#### PASS 11 seconds
### 2025-05-04
#### PASS 16 seconds
### 2025-05-05
#### PASS 15 seconds
### 2025-05-06
#### PASS 10 seconds
### 2025-05-07
#### PASS 11 seconds
### 2025-05-08
#### PASS 12 seconds
### 2025-05-09
#### PASS 11 seconds
### 2025-05-10
#### PASS 16 seconds
### 2025-05-11
#### FAIL 3 seconds
```
2025-05-11T00:29:53.9072047Z === RUN   TestMigGenericX509AuthDBUser_withCustomerX509
2025-05-11T00:29:53.9097868Z === CONT  TestMigGenericX509AuthDBUser_withCustomerX509
2025-05-11T00:29:53.9121085Z === NAME  TestMigGenericX509AuthDBUser_withCustomerX509
2025-05-11T00:29:53.9121856Z     resource_x509_authentication_database_user_migration_test.go:48: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:53.9122426Z         
2025-05-11T00:29:53.9122902Z         Error: error creating project: test-acc-tf-p-613033392461132271
2025-05-11T00:29:53.9133478Z         
2025-05-11T00:29:53.9133945Z           with mongodbatlas_project.test,
2025-05-11T00:29:53.9134677Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:53.9135328Z           14: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:53.9135725Z         
2025-05-11T00:29:53.9136303Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:53.9136785Z         type
2025-05-11T00:29:53.9137176Z --- FAIL: TestMigGenericX509AuthDBUser_withCustomerX509 (3.22s)
```
### 2025-05-12
#### PASS 9 seconds
### 2025-05-13
#### PASS 11 seconds
#### PASS 10 seconds
### 2025-05-14
#### PASS 16 seconds
### 2025-05-15
#### PASS 11 seconds
### 2025-05-16
#### PASS 10 seconds
### 2025-05-17
#### PASS 10 seconds
### 2025-05-18
#### PASS 15 seconds
### 2025-05-19
#### PASS 10 seconds
### 2025-05-20
#### PASS 17 seconds
### 2025-05-21
#### PASS 11 seconds
### 2025-05-22
#### PASS 14 seconds
### 2025-05-23
#### PASS 15 seconds
### 2025-05-24
#### PASS 11 seconds
### 2025-05-25
#### PASS 9 seconds
### 2025-05-26
#### PASS 16 seconds
### 2025-05-27
#### PASS 12 seconds
#### PASS 10 seconds
### 2025-05-28
#### PASS 10 seconds
#### PASS 11 seconds
#### PASS 14 seconds
### 2025-05-29
#### PASS 12 seconds
#### PASS 10 seconds
### 2025-05-30
#### PASS 13 seconds
### 2025-05-31
#### PASS 11 seconds
### 2025-06-01
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 11 seconds
#### PASS 13 seconds
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-06-02
#### PASS 15 seconds
#### PASS 10 seconds
#### PASS 15 seconds
### 2025-06-03
#### PASS 11 seconds
### 2025-06-04
#### PASS 16 seconds
### 2025-06-05
#### FAIL 4 seconds
```
2025-06-05T00:28:56.4278542Z === RUN   TestMigGenericX509AuthDBUser_withCustomerX509
2025-06-05T00:28:56.4283207Z === CONT  TestMigGenericX509AuthDBUser_withCustomerX509
2025-06-05T00:28:56.4312125Z === NAME  TestMigGenericX509AuthDBUser_withCustomerX509
2025-06-05T00:28:56.4312909Z     resource_x509_authentication_database_user_migration_test.go:48: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:28:56.4313630Z         
2025-06-05T00:28:56.4314125Z         Error: error creating project: test-acc-tf-p-2865536703884549785
2025-06-05T00:28:56.4314560Z         
2025-06-05T00:28:56.4314936Z           with mongodbatlas_project.test,
2025-06-05T00:28:56.4315615Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-05T00:28:56.4316253Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:28:56.4316633Z         
2025-06-05T00:28:56.4317173Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:28:56.4317903Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:28:56.4319685Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:56.4320427Z --- FAIL: TestMigGenericX509AuthDBUser_withCustomerX509 (4.77s)
```
### 2025-06-06
#### PASS 10 seconds
### 2025-06-07
#### PASS 9 seconds
### 2025-06-08
#### PASS 14 seconds
### 2025-06-09
#### PASS 11 seconds
### 2025-06-10
#### PASS 11 seconds
### 2025-06-11
#### PASS 13 seconds
#### PASS 15 seconds
### 2025-06-12
#### PASS 10 seconds
### 2025-06-13
#### PASS 14 seconds
### 2025-06-14
#### PASS 10 seconds
### 2025-06-15
#### PASS 9 seconds
### 2025-06-16
#### PASS 15 seconds
### 2025-06-17
#### PASS 9 seconds
### 2025-06-18
#### PASS 10 seconds
### 2025-06-19
#### PASS 13 seconds
### 2025-06-20
#### PASS 10 seconds
### 2025-06-21
#### PASS 15 seconds
### 2025-06-22
#### PASS 11 seconds
### 2025-06-23
#### PASS 9 seconds
### 2025-06-24
#### PASS 10 seconds
### 2025-06-25
#### PASS 10 seconds
### 2025-06-26
#### PASS 11 seconds
### 2025-06-27
#### PASS 15 seconds
### 2025-06-28
#### PASS 11 seconds
### 2025-06-29
#### PASS 14 seconds
### 2025-06-30
#### PASS 16 seconds
### 2025-07-01
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 12 seconds
#### PASS 10 seconds
#### PASS 15 seconds
#### PASS 9 seconds
### 2025-07-02
#### PASS 16 seconds
### 2025-07-03
#### PASS 13 seconds
### 2025-07-04
#### PASS 14 seconds
### 2025-07-05
#### PASS 9 seconds
### 2025-07-06
#### PASS 15 seconds
### 2025-07-07
#### PASS 11 seconds
### 2025-07-08
#### PASS 15 seconds
### 2025-07-09
#### PASS 9 seconds