# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:46](#error-2026-04-07t0046400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s
[2026-04-09 00:41](#error-2026-04-09t0041470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s
[2026-04-11 00:58](#error-2026-04-11t0058580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 108.02s
[2026-04-16 00:51](#error-2026-04-16t0051510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:46:40+00:00
```
2026-04-07T00:46:40.4823323Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-04-07T00:46:40.4827792Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-04-07T00:46:40.4852412Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2026-04-07T00:46:40.4853774Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-04-07T00:46:40.4854797Z         
2026-04-07T00:46:40.4855688Z         Error: error creating project: test-acc-tf-p-1366722286794952288
2026-04-07T00:46:40.4856468Z         
2026-04-07T00:46:40.4857082Z           with mongodbatlas_project.test,
2026-04-07T00:46:40.4858296Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-07T00:46:40.4859420Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-07T00:46:40.4860076Z         
2026-04-07T00:46:40.4861211Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-07T00:46:40.4862509Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-07T00:46:40.4863875Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:46:40.4864809Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (62.58s)
```

- 2026-04-08 PASS 9 seconds
- 2026-04-09

### Error 2026-04-09T00:41:47+00:00
```
2026-04-09T00:41:47.2520117Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-04-09T00:41:47.2525054Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-04-09T00:41:47.2549108Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2026-04-09T00:41:47.2550413Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-04-09T00:41:47.2551623Z         
2026-04-09T00:41:47.2552478Z         Error: error creating project: test-acc-tf-p-4691731354877452983
2026-04-09T00:41:47.2553224Z         
2026-04-09T00:41:47.2553850Z           with mongodbatlas_project.test,
2026-04-09T00:41:47.2555062Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:41:47.2556186Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:41:47.2557077Z         
2026-04-09T00:41:47.2558021Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:41:47.2559279Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:41:47.2560438Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:41:47.2561345Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (62.31s)
```

- 2026-04-10 PASS 11 seconds
- 2026-04-11

### Error 2026-04-11T00:58:58+00:00
```
2026-04-11T00:58:58.7657819Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-04-11T00:58:58.7660820Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-04-11T00:58:58.7676445Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2026-04-11T00:58:58.7677726Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-04-11T00:58:58.7678853Z         
2026-04-11T00:58:58.7680157Z         Error: error creating project: test-acc-tf-p-1403807458241842765
2026-04-11T00:58:58.7681068Z         
2026-04-11T00:58:58.7681782Z           with mongodbatlas_project.test,
2026-04-11T00:58:58.7683176Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:58:58.7684356Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:58:58.7684786Z         
2026-04-11T00:58:58.7685378Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:58:58.7686173Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:58:58.7686882Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:58:58.7687449Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (108.20s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 6 seconds
- 2026-04-14 PASS 13 seconds
- 2026-04-15 PASS 9 seconds
- 2026-04-16

### Error 2026-04-16T00:51:51+00:00
```
2026-04-16T00:51:51.6514827Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-04-16T00:51:51.6532780Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-04-16T00:51:51.6550500Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2026-04-16T00:51:51.6551336Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:51:51.6551936Z         
2026-04-16T00:51:51.6552449Z         Error: error creating project: test-acc-tf-p-2884927128501656433
2026-04-16T00:51:51.6552901Z         
2026-04-16T00:51:51.6553278Z           with mongodbatlas_project.test,
2026-04-16T00:51:51.6553993Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-16T00:51:51.6554664Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-16T00:51:51.6555045Z         
2026-04-16T00:51:51.6555600Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-16T00:51:51.6556339Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-16T00:51:51.6557019Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:51:51.6557572Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (73.56s)
```

- 2026-04-17 PASS 7 seconds
- 2026-04-18 PASS 33 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 7 seconds
- 2026-04-21 PASS 13 seconds
- 2026-04-22
  - PASS 8 seconds
  - PASS 11 seconds
- 2026-04-23 PASS a minute
- 2026-04-24 PASS 10 seconds
- 2026-04-25 PASS 22 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 9 seconds
- 2026-04-28 PASS a minute
- 2026-04-29 PASS 9 seconds
- 2026-04-30 PASS 14 seconds
- 2026-05-01 PASS 10 seconds
- 2026-05-02 PASS 19 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 9 seconds
- 2026-05-05 PASS 58 seconds
- 2026-05-06 PASS 10 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 8 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 8 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 7 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 7 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 6 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 5 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 7 seconds
