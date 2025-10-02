# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:49](#error-2025-09-07t0049530000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1c88704811492b52e1c/limits | qa | flaky_500 | 33.06s
[2025-09-08 09:32](#error-2025-09-08t0932540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a40cddbf4f6e498eb9/limits | qa | flaky_500 | 33.08s
[2025-09-14 00:29](#error-2025-09-14t0029130000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c371411d835e95b2044/limits | qa | flaky_500 | 33.08s
[2025-09-15 06:21](#error-2025-09-15t0621260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b043d444485797b5d9e2/limits | qa | flaky_500 | 33.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 6 seconds
- 2025-09-05 PASS 5 seconds
- 2025-09-06 PASS 6 seconds
- 2025-09-07

### Error 2025-09-07T00:49:53+00:00
```
2025-09-07T00:49:53.5883388Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-09-07T00:49:53.5887842Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-09-07T00:49:53.5923538Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2025-09-07T00:49:53.5924701Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:49:53.5925613Z         
2025-09-07T00:49:53.5926506Z         Error: error when getting project properties after create
2025-09-07T00:49:53.5927276Z         
2025-09-07T00:49:53.5928051Z           with mongodbatlas_project.test,
2025-09-07T00:49:53.5929229Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:49:53.5930294Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:49:53.5930996Z         
2025-09-07T00:49:53.5931863Z         error getting project (68bcd1c88704811492b52e1c): error getting project's
2025-09-07T00:49:53.5932743Z         limits (68bcd1c88704811492b52e1c):
2025-09-07T00:49:53.5933727Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1c88704811492b52e1c/limits
2025-09-07T00:49:53.5934863Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:49:53.5935811Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:49:53.5936645Z         BadRequestDetail: 
2025-09-07T00:49:53.5937385Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (33.56s)
```

- 2025-09-08
  - PASS 6 seconds
  - FAIL 33 seconds

### Error 2025-09-08T09:32:54+00:00
```
2025-09-08T09:32:54.7991408Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-09-08T09:32:54.7995117Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-09-08T09:32:54.8026353Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2025-09-08T09:32:54.8027618Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:32:54.8028558Z         
2025-09-08T09:32:54.8029330Z         Error: error when getting project properties after create
2025-09-08T09:32:54.8030013Z         
2025-09-08T09:32:54.8030639Z           with mongodbatlas_project.test,
2025-09-08T09:32:54.8032024Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T09:32:54.8033163Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:32:54.8033788Z         
2025-09-08T09:32:54.8034690Z         error getting project (68bea2a40cddbf4f6e498eb9): error getting project's
2025-09-08T09:32:54.8035618Z         limits (68bea2a40cddbf4f6e498eb9):
2025-09-08T09:32:54.8036752Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a40cddbf4f6e498eb9/limits
2025-09-08T09:32:54.8038069Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:32:54.8039198Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:32:54.8039992Z         BadRequestDetail: 
2025-09-08T09:32:54.8040678Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (33.77s)
```

  - PASS 6 seconds
- 2025-09-09 PASS 6 seconds
- 2025-09-10 PASS 6 seconds
- 2025-09-11 PASS 8 seconds
- 2025-09-12 PASS 10 seconds
- 2025-09-13 PASS 8 seconds
- 2025-09-14

### Error 2025-09-14T00:29:13+00:00
```
2025-09-14T00:29:13.3171315Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-09-14T00:29:13.3173416Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-09-14T00:29:13.3193173Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2025-09-14T00:29:13.3194028Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:29:13.3194685Z         
2025-09-14T00:29:13.3195179Z         Error: error when getting project properties after create
2025-09-14T00:29:13.3213710Z         
2025-09-14T00:29:13.3214229Z           with mongodbatlas_project.test,
2025-09-14T00:29:13.3214963Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:29:13.3215596Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:29:13.3215979Z         
2025-09-14T00:29:13.3216504Z         error getting project (68c60c371411d835e95b2044): error getting project's
2025-09-14T00:29:13.3217057Z         limits (68c60c371411d835e95b2044):
2025-09-14T00:29:13.3217992Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c371411d835e95b2044/limits
2025-09-14T00:29:13.3218753Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:13.3219427Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:13.3219924Z         BadRequestDetail: 
2025-09-14T00:29:13.3220345Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (33.82s)
```

- 2025-09-15
  - PASS 10 seconds
  - FAIL 33 seconds

### Error 2025-09-15T06:21:26+00:00
```
2025-09-15T06:21:26.4014687Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-09-15T06:21:26.4017121Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-09-15T06:21:26.4053110Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2025-09-15T06:21:26.4053895Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:21:26.4054485Z         
2025-09-15T06:21:26.4054962Z         Error: error when getting project properties after create
2025-09-15T06:21:26.4055387Z         
2025-09-15T06:21:26.4055769Z           with mongodbatlas_project.test,
2025-09-15T06:21:26.4056517Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:21:26.4057173Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:21:26.4057723Z         
2025-09-15T06:21:26.4058289Z         error getting project (68c7b043d444485797b5d9e2): error getting project's
2025-09-15T06:21:26.4058838Z         limits (68c7b043d444485797b5d9e2):
2025-09-15T06:21:26.4059511Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b043d444485797b5d9e2/limits
2025-09-15T06:21:26.4060283Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:26.4060980Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:26.4061475Z         BadRequestDetail: 
2025-09-15T06:21:26.4061913Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (33.40s)
```

- 2025-09-16 PASS 9 seconds
- 2025-09-17 PASS 6 seconds
- 2025-09-18 PASS 6 seconds
- 2025-09-19 PASS 9 seconds
- 2025-09-20 PASS 6 seconds
- 2025-09-21 PASS 4 seconds
- 2025-09-22 PASS 5 seconds
- 2025-09-23 PASS 6 seconds
- 2025-09-24 PASS 9 seconds
- 2025-09-25 PASS 10 seconds
- 2025-09-26 PASS 9 seconds
- 2025-09-27 PASS 6 seconds
- 2025-09-28 PASS 6 seconds
- 2025-09-29 PASS 9 seconds
- 2025-09-30
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 9 seconds
- 2025-10-01
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-10-02 PASS 5 seconds