# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.05s
[2026-07-11 00:47](#error-2026-07-11t0047430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 106.06s
[2026-07-16 00:44](#error-2026-07-16t0044280000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.07s
[2026-07-21 00:48](#error-2026-07-21t0048140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.04s
[2026-07-23 00:48](#error-2026-07-23t0048220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:19+00:00
```
2026-07-09T01:15:19.7802730Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-07-09T01:15:19.7805916Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-07-09T01:15:19.7820317Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2026-07-09T01:15:19.7821125Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-07-09T01:15:19.7821736Z         
2026-07-09T01:15:19.7822258Z         Error: error creating project: test-acc-tf-p-4913881251238225706
2026-07-09T01:15:19.7822728Z         
2026-07-09T01:15:19.7823128Z           with mongodbatlas_project.test,
2026-07-09T01:15:19.7823859Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T01:15:19.7824772Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T01:15:19.7825194Z         
2026-07-09T01:15:19.7825774Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T01:15:19.7826547Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T01:15:19.7827258Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:19.7827962Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (78.50s)
```

- 2026-07-10 PASS 9 seconds
- 2026-07-11

### Error 2026-07-11T00:47:43+00:00
```
2026-07-11T00:47:43.5267620Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-07-11T00:47:43.5298354Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-07-11T00:47:43.5319304Z   
2026-07-11T00:47:43.5320341Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-07-11T00:47:43.5321340Z         
2026-07-11T00:47:43.5322164Z         Error: error creating project: test-acc-tf-p-9211373134690796671
2026-07-11T00:47:43.5322898Z         
2026-07-11T00:47:43.5323494Z           with mongodbatlas_project.test,
2026-07-11T00:47:43.5324651Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:47:43.5325926Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:47:43.5326755Z         
2026-07-11T00:47:43.5327676Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:47:43.5328935Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:47:43.5330074Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:47:43.5330979Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (106.55s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 10 seconds
- 2026-07-14 PASS 48 seconds
- 2026-07-15 PASS 8 seconds
- 2026-07-16

### Error 2026-07-16T00:44:28+00:00
```
2026-07-16T00:44:28.9645269Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-07-16T00:44:28.9648178Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-07-16T00:44:28.9663881Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2026-07-16T00:44:28.9665153Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-07-16T00:44:28.9666301Z         
2026-07-16T00:44:28.9667327Z         Error: error creating project: test-acc-tf-p-9125731898913267848
2026-07-16T00:44:28.9668253Z         
2026-07-16T00:44:28.9669017Z           with mongodbatlas_project.test,
2026-07-16T00:44:28.9670698Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:28.9671470Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:44:28.9672089Z         
2026-07-16T00:44:28.9672708Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:28.9673532Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:28.9674271Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:28.9674869Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (65.68s)
```

- 2026-07-17 PASS 8 seconds
- 2026-07-18 PASS 25 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:48:14+00:00
```
2026-07-21T00:48:14.5714386Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-07-21T00:48:14.5731329Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-07-21T00:48:14.5743036Z    test_name=TestAccGenericX509AuthDBUser_withCustomerX509
2026-07-21T00:48:14.5743826Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-07-21T00:48:14.5744386Z         
2026-07-21T00:48:14.5744898Z         Error: error creating project: test-acc-tf-p-8437982614332914197
2026-07-21T00:48:14.5745346Z         
2026-07-21T00:48:14.5745752Z           with mongodbatlas_project.test,
2026-07-21T00:48:14.5746550Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:48:14.5747213Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:48:14.5747617Z         
2026-07-21T00:48:14.5748158Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:48:14.5748865Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:48:14.5749508Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:48:14.5750052Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (72.39s)
```

- 2026-07-22 PASS 10 seconds
- 2026-07-23

### Error 2026-07-23T00:48:22+00:00
```
2026-07-23T00:48:22.2397237Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-07-23T00:48:22.2424556Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-07-23T00:48:22.2438364Z    test_step_number=1
2026-07-23T00:48:22.2439055Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-07-23T00:48:22.2439957Z         
2026-07-23T00:48:22.2440499Z         Error: error creating project: test-acc-tf-p-1239638161415283126
2026-07-23T00:48:22.2440968Z         
2026-07-23T00:48:22.2441364Z           with mongodbatlas_project.test,
2026-07-23T00:48:22.2442091Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:48:22.2442776Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:48:22.2443190Z         
2026-07-23T00:48:22.2443764Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:48:22.2444537Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:48:22.2445243Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:22.2445812Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (62.19s)
```

- 2026-07-24 PASS 6 seconds
- 2026-07-25 PASS 6 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 9 seconds
- 2026-07-28 PASS 7 seconds
- 2026-07-29 PASS 9 seconds
- 2026-07-30 PASS 6 seconds
- 2026-07-31 PASS 8 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 9 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 10 seconds
- 2026-08-06 PASS 6 seconds
- 2026-08-07 PASS 10 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 7 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 7 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 7 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 9 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 6 seconds
  - PASS 5 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 6 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
