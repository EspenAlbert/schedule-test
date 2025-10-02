# generic/x509authenticationdatabaseuser/TestMigGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:49](#error-2025-09-07t0049530000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1ca8704811492b53092/limits | qa | flaky_500 | 42.05s
[2025-09-08 09:32](#error-2025-09-08t0932540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a5341d8a4987761a5b/limits | qa | flaky_500 | 34.04s
[2025-09-14 00:29](#error-2025-09-14t0029130000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c38d444485797b1fad5/limits | qa | flaky_500 | 34.01s
[2025-09-15 06:21](#error-2025-09-15t0621260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b044d444485797b5dc38/limits | qa | flaky_500 | 35.00s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 15 seconds
- 2025-09-04 PASS 11 seconds
- 2025-09-05 PASS 10 seconds
- 2025-09-06 PASS 10 seconds
- 2025-09-07

### Error 2025-09-07T00:49:53+00:00
```
2025-09-07T00:49:53.5879986Z === RUN   TestMigGenericX509AuthDBUser_withCustomerX509
2025-09-07T00:49:53.5899951Z === CONT  TestMigGenericX509AuthDBUser_withCustomerX509
2025-09-07T00:49:53.5959277Z === NAME  TestMigGenericX509AuthDBUser_withCustomerX509
2025-09-07T00:49:53.5960483Z     resource_x509_authentication_database_user_migration_test.go:48: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-09-07T00:49:53.5961409Z         
2025-09-07T00:49:53.5962187Z         Error: error when getting project properties after create
2025-09-07T00:49:53.5963044Z         
2025-09-07T00:49:53.5963738Z           with mongodbatlas_project.test,
2025-09-07T00:49:53.5964712Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:49:53.5965623Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:49:53.5966316Z         
2025-09-07T00:49:53.5967146Z         error getting project (68bcd1ca8704811492b53092): error getting project's
2025-09-07T00:49:53.5968102Z         limits (68bcd1ca8704811492b53092):
2025-09-07T00:49:53.5969161Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1ca8704811492b53092/limits
2025-09-07T00:49:53.5970192Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:49:53.5971161Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:49:53.5971930Z         BadRequestDetail: 
2025-09-07T00:49:53.5972656Z --- FAIL: TestMigGenericX509AuthDBUser_withCustomerX509 (42.49s)
```

- 2025-09-08
  - PASS 12 seconds
  - FAIL 34 seconds

### Error 2025-09-08T09:32:54+00:00
```
2025-09-08T09:32:54.7988354Z === RUN   TestMigGenericX509AuthDBUser_withCustomerX509
2025-09-08T09:32:54.7997247Z === CONT  TestMigGenericX509AuthDBUser_withCustomerX509
2025-09-08T09:32:54.8056956Z === NAME  TestMigGenericX509AuthDBUser_withCustomerX509
2025-09-08T09:32:54.8058297Z     resource_x509_authentication_database_user_migration_test.go:48: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:32:54.8059482Z         
2025-09-08T09:32:54.8060244Z         Error: error when getting project properties after create
2025-09-08T09:32:54.8060923Z         
2025-09-08T09:32:54.8061708Z           with mongodbatlas_project.test,
2025-09-08T09:32:54.8062866Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-08T09:32:54.8063925Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:32:54.8064546Z         
2025-09-08T09:32:54.8065447Z         error getting project (68bea2a5341d8a4987761a5b): error getting project's
2025-09-08T09:32:54.8066365Z         limits (68bea2a5341d8a4987761a5b):
2025-09-08T09:32:54.8067487Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a5341d8a4987761a5b/limits
2025-09-08T09:32:54.8068775Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:32:54.8069915Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:32:54.8070725Z         BadRequestDetail: 
2025-09-08T09:32:54.8071564Z --- FAIL: TestMigGenericX509AuthDBUser_withCustomerX509 (34.36s)
```

  - PASS 11 seconds
- 2025-09-09 PASS 13 seconds
- 2025-09-10 PASS 11 seconds
- 2025-09-11 PASS 15 seconds
- 2025-09-12 PASS 18 seconds
- 2025-09-13 PASS 11 seconds
- 2025-09-14

### Error 2025-09-14T00:29:13+00:00
```
2025-09-14T00:29:13.3169614Z === RUN   TestMigGenericX509AuthDBUser_withCustomerX509
2025-09-14T00:29:13.3174621Z === CONT  TestMigGenericX509AuthDBUser_withCustomerX509
2025-09-14T00:29:13.3230369Z === NAME  TestMigGenericX509AuthDBUser_withCustomerX509
2025-09-14T00:29:13.3231144Z     resource_x509_authentication_database_user_migration_test.go:48: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:29:13.3231736Z         
2025-09-14T00:29:13.3232191Z         Error: error when getting project properties after create
2025-09-14T00:29:13.3232595Z         
2025-09-14T00:29:13.3232958Z           with mongodbatlas_project.test,
2025-09-14T00:29:13.3233627Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-14T00:29:13.3234238Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:29:13.3234609Z         
2025-09-14T00:29:13.3235123Z         error getting project (68c60c38d444485797b1fad5): error getting project's
2025-09-14T00:29:13.3235649Z         limits (68c60c38d444485797b1fad5):
2025-09-14T00:29:13.3236291Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c38d444485797b1fad5/limits
2025-09-14T00:29:13.3237034Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:13.3237846Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:13.3238424Z         BadRequestDetail: 
2025-09-14T00:29:13.3238842Z --- FAIL: TestMigGenericX509AuthDBUser_withCustomerX509 (34.10s)
```

- 2025-09-15
  - PASS 10 seconds
  - FAIL 35 seconds

### Error 2025-09-15T06:21:26+00:00
```
2025-09-15T06:21:26.4012821Z === RUN   TestMigGenericX509AuthDBUser_withCustomerX509
2025-09-15T06:21:26.4018800Z === CONT  TestMigGenericX509AuthDBUser_withCustomerX509
2025-09-15T06:21:26.4072097Z === NAME  TestMigGenericX509AuthDBUser_withCustomerX509
2025-09-15T06:21:26.4072906Z     resource_x509_authentication_database_user_migration_test.go:48: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:21:26.4073520Z         
2025-09-15T06:21:26.4073991Z         Error: error when getting project properties after create
2025-09-15T06:21:26.4074411Z         
2025-09-15T06:21:26.4074783Z           with mongodbatlas_project.test,
2025-09-15T06:21:26.4075483Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-15T06:21:26.4076136Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:21:26.4076516Z         
2025-09-15T06:21:26.4077046Z         error getting project (68c7b044d444485797b5dc38): error getting project's
2025-09-15T06:21:26.4077772Z         limits (68c7b044d444485797b5dc38):
2025-09-15T06:21:26.4078470Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b044d444485797b5dc38/limits
2025-09-15T06:21:26.4079260Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:26.4079961Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:26.4080452Z         BadRequestDetail: 
2025-09-15T06:21:26.4080880Z --- FAIL: TestMigGenericX509AuthDBUser_withCustomerX509 (35.04s)
```

- 2025-09-16 PASS 16 seconds
- 2025-09-17 PASS 12 seconds
- 2025-09-18 PASS 11 seconds
- 2025-09-19 PASS 15 seconds
- 2025-09-20 PASS 11 seconds
- 2025-09-21 PASS 9 seconds
- 2025-09-22 PASS 9 seconds
- 2025-09-23 PASS 12 seconds
- 2025-09-24 PASS 13 seconds
- 2025-09-25 PASS 15 seconds
- 2025-09-26 PASS 14 seconds
- 2025-09-27 PASS 10 seconds
- 2025-09-28 PASS 11 seconds
- 2025-09-29 PASS 15 seconds
- 2025-09-30
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 15 seconds
- 2025-10-01
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 12 seconds
  - PASS 12 seconds
  - PASS 11 seconds
  - PASS 10 seconds
- 2025-10-02 PASS 9 seconds