# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:32](#error-2025-08-24t0032390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d2b9bbb8c4ee1f81c37/limits | qa | flaky_500 | 33.04s
[2025-09-01 03:30](#error-2025-09-01t0330180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 8 seconds
- 2025-08-07 PASS 49 seconds
- 2025-08-08 PASS 8 seconds
- 2025-08-09 PASS 7 seconds
- 2025-08-10 PASS 7 seconds
- 2025-08-11 PASS 9 seconds
- 2025-08-12 PASS 8 seconds
- 2025-08-13 PASS 6 seconds
- 2025-08-14 PASS 6 seconds
- 2025-08-15 PASS 6 seconds
- 2025-08-16 PASS 7 seconds
- 2025-08-17 PASS 8 seconds
- 2025-08-18 PASS 5 seconds
- 2025-08-19 PASS 5 seconds
- 2025-08-20
  - PASS 7 seconds
  - PASS 5 seconds
- 2025-08-21 PASS 7 seconds
- 2025-08-22 PASS 10 seconds
- 2025-08-23 PASS 8 seconds
- 2025-08-24

### Error 2025-08-24T00:32:39+00:00
```
2025-08-24T00:32:39.4593922Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-08-24T00:32:39.4596155Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-08-24T00:32:39.4613846Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2025-08-24T00:32:39.4614565Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:32:39.4615139Z         
2025-08-24T00:32:39.4615591Z         Error: error when getting project properties after create
2025-08-24T00:32:39.4615994Z         
2025-08-24T00:32:39.4616358Z           with mongodbatlas_project.test,
2025-08-24T00:32:39.4617061Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:32:39.4617683Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:32:39.4618044Z         
2025-08-24T00:32:39.4618660Z         error getting project (68aa5d2b9bbb8c4ee1f81c37): error getting project's
2025-08-24T00:32:39.4619202Z         limits (68aa5d2b9bbb8c4ee1f81c37):
2025-08-24T00:32:39.4619850Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2b9bbb8c4ee1f81c37/limits
2025-08-24T00:32:39.4620717Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:39.4621381Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:39.4621841Z         BadRequestDetail: 
2025-08-24T00:32:39.4622248Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (33.41s)
```

- 2025-08-25 PASS 9 seconds
- 2025-08-26 PASS 8 seconds
- 2025-08-27 PASS 7 seconds
- 2025-08-28 PASS 8 seconds
- 2025-08-29 PASS 8 seconds
- 2025-08-30 PASS 7 seconds
- 2025-08-31 PASS 5 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T03:30:18+00:00
```
2025-09-01T03:30:18.2339423Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-09-01T03:30:18.2348535Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-09-01T03:30:18.2365633Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2025-09-01T03:30:18.2366480Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:30:18.2367137Z         
2025-09-01T03:30:18.2367734Z         Error: error creating project: test-acc-tf-p-6233471330875175847
2025-09-01T03:30:18.2368195Z         
2025-09-01T03:30:18.2368655Z           with mongodbatlas_project.test,
2025-09-01T03:30:18.2369439Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T03:30:18.2370130Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T03:30:18.2370543Z         
2025-09-01T03:30:18.2371210Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T03:30:18.2372065Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T03:30:18.2373073Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T03:30:18.2373879Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T03:30:18.2374465Z         BadRequestDetail: 
2025-09-01T03:30:18.2374902Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (0.66s)
```

  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 9 seconds
  - PASS 6 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 7 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 6 seconds