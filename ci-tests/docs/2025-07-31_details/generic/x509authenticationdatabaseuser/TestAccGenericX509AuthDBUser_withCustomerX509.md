# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:46](#error-2025-07-06t0046500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4057267b5775b682e3b/limits | qa | flaky_500 | 32.08s
[2025-07-10 13:08](#error-2025-07-10t1308520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb01fd583001f9eeb5a0/limits | qa | flaky_500 | 33.06s
[2025-07-20 00:34](#error-2025-07-20t0034050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3937823af9166ef911af/limits | qa | flaky_500 | 33.01s
[2025-07-27 00:48](#error-2025-07-27t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573d9ef1f7377717a89e3/limits | qa | flaky_500 | 33.05s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 9 seconds
- 2025-07-03 PASS 6 seconds
- 2025-07-04 PASS 10 seconds
- 2025-07-05 PASS 7 seconds
- 2025-07-06

### Error 2025-07-06T00:46:50+00:00
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

- 2025-07-07 PASS 5 seconds
- 2025-07-08 PASS 10 seconds
- 2025-07-09 PASS 5 seconds
- 2025-07-10
  - PASS 5 seconds
  - FAIL 33 seconds

### Error 2025-07-10T13:08:52+00:00
```
2025-07-10T13:08:52.8262068Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-10T13:08:52.8264523Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-10T13:08:52.8303080Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-10T13:08:52.8303824Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:08:52.8304363Z         
2025-07-10T13:08:52.8304821Z         Error: error when getting project properties after create
2025-07-10T13:08:52.8305217Z         
2025-07-10T13:08:52.8305571Z           with mongodbatlas_project.test,
2025-07-10T13:08:52.8306381Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:08:52.8306989Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:08:52.8307489Z         
2025-07-10T13:08:52.8308010Z         error getting project (686fbb01fd583001f9eeb5a0): error getting project's
2025-07-10T13:08:52.8308535Z         limits (686fbb01fd583001f9eeb5a0):
2025-07-10T13:08:52.8309170Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb01fd583001f9eeb5a0/limits
2025-07-10T13:08:52.8309907Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:08:52.8310555Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:08:52.8311015Z         BadRequestDetail: 
2025-07-10T13:08:52.8311423Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (33.59s)
```

- 2025-07-11 PASS 6 seconds
- 2025-07-12 PASS 9 seconds
- 2025-07-13 PASS 5 seconds
- 2025-07-14 PASS 6 seconds
- 2025-07-15 PASS 6 seconds
- 2025-07-16 PASS 9 seconds
- 2025-07-17 PASS 7 seconds
- 2025-07-18 PASS 8 seconds
- 2025-07-19 PASS 8 seconds
- 2025-07-20

### Error 2025-07-20T00:34:05+00:00
```
2025-07-20T00:34:05.9570997Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-20T00:34:05.9573355Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-20T00:34:05.9592201Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-20T00:34:05.9592963Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:34:05.9593530Z         
2025-07-20T00:34:05.9593992Z         Error: error when getting project properties after create
2025-07-20T00:34:05.9594402Z         
2025-07-20T00:34:05.9594770Z           with mongodbatlas_project.test,
2025-07-20T00:34:05.9595463Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T00:34:05.9596086Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-20T00:34:05.9596454Z         
2025-07-20T00:34:05.9597161Z         error getting project (687c3937823af9166ef911af): error getting project's
2025-07-20T00:34:05.9597708Z         limits (687c3937823af9166ef911af):
2025-07-20T00:34:05.9598368Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3937823af9166ef911af/limits
2025-07-20T00:34:05.9599526Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:34:05.9600343Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:34:05.9600833Z         BadRequestDetail: 
2025-07-20T00:34:05.9601254Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (33.07s)
```

- 2025-07-21 PASS 9 seconds
- 2025-07-22 PASS 9 seconds
- 2025-07-23
  - PASS 10 seconds
  - PASS 6 seconds
- 2025-07-24 PASS 8 seconds
- 2025-07-25 PASS 9 seconds
- 2025-07-26 PASS 5 seconds
- 2025-07-27

### Error 2025-07-27T00:48:43+00:00
```
2025-07-27T00:48:43.7393591Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-27T00:48:43.7397504Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-27T00:48:43.7429577Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2025-07-27T00:48:43.7431089Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2025-07-27T00:48:43.7432089Z         
2025-07-27T00:48:43.7432965Z         Error: error when getting project properties after create
2025-07-27T00:48:43.7433759Z         
2025-07-27T00:48:43.7434422Z           with mongodbatlas_project.test,
2025-07-27T00:48:43.7435651Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-27T00:48:43.7436785Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-27T00:48:43.7437444Z         
2025-07-27T00:48:43.7438391Z         error getting project (688573d9ef1f7377717a89e3): error getting project's
2025-07-27T00:48:43.7439369Z         limits (688573d9ef1f7377717a89e3):
2025-07-27T00:48:43.7440774Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573d9ef1f7377717a89e3/limits
2025-07-27T00:48:43.7442162Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:48:43.7443363Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:48:43.7444208Z         BadRequestDetail: 
2025-07-27T00:48:43.7444934Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (33.53s)
```

- 2025-07-28 PASS 6 seconds
- 2025-07-29 PASS 7 seconds
- 2025-07-30 PASS 6 seconds
- 2025-07-31 PASS 16 seconds