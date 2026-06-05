# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 6)
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:58](#error-2026-05-09t0058530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 101.10s
[2026-05-16 01:09](#error-2026-05-16t0109320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.06s
[2026-05-19 01:02](#error-2026-05-19t0102320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.05s
[2026-05-23 01:02](#error-2026-05-23t0102390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.07s
[2026-05-28 01:18](#error-2026-05-28t0118520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.02s
[2026-05-30 01:16](#error-2026-05-30t0116430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 15 seconds
- 2026-05-08 PASS 7 seconds
- 2026-05-09

### Error 2026-05-09T00:58:53+00:00
```
2026-05-09T00:58:53.2278559Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-09T00:58:53.2298328Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-09T00:58:53.2313212Z   
2026-05-09T00:58:53.2313870Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-05-09T00:58:53.2314495Z         
2026-05-09T00:58:53.2315008Z         Error: error creating project: test-acc-tf-p-7235263400525289175
2026-05-09T00:58:53.2315678Z         
2026-05-09T00:58:53.2316067Z           with mongodbatlas_project.test,
2026-05-09T00:58:53.2316818Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:58:53.2317516Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:58:53.2317916Z         
2026-05-09T00:58:53.2318488Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:58:53.2319266Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:58:53.2319987Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:58:53.2321059Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (101.98s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 16 seconds
- 2026-05-13 PASS 12 seconds
- 2026-05-14 PASS 11 seconds
- 2026-05-15 PASS 10 seconds
- 2026-05-16

### Error 2026-05-16T01:09:32+00:00
```
2026-05-16T01:09:32.7938840Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-16T01:09:32.7941969Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-16T01:09:32.7956696Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-16T01:09:32.7957491Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-05-16T01:09:32.7958225Z         
2026-05-16T01:09:32.7958757Z         Error: error creating project: test-acc-tf-p-6515596328809739603
2026-05-16T01:09:32.7959228Z         
2026-05-16T01:09:32.7959627Z           with mongodbatlas_project.test,
2026-05-16T01:09:32.7960633Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T01:09:32.7961321Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T01:09:32.7961733Z         
2026-05-16T01:09:32.7962304Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T01:09:32.7963070Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T01:09:32.7963775Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:09:32.7964347Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (79.65s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 8 seconds
- 2026-05-19

### Error 2026-05-19T01:02:32+00:00
```
2026-05-19T01:02:32.3963470Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-19T01:02:32.3966890Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-19T01:02:32.3982026Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-19T01:02:32.3982897Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-05-19T01:02:32.3983461Z         
2026-05-19T01:02:32.3983948Z         Error: error creating project: test-acc-tf-p-3886694010598174416
2026-05-19T01:02:32.3984394Z         
2026-05-19T01:02:32.3984772Z           with mongodbatlas_project.test,
2026-05-19T01:02:32.3985445Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:02:32.3986268Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:02:32.3986646Z         
2026-05-19T01:02:32.3987164Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:02:32.3988116Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:02:32.3988742Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:02:32.3989253Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (69.53s)
```

- 2026-05-20 PASS 9 seconds
- 2026-05-21 PASS 39 seconds
- 2026-05-22 PASS 9 seconds
- 2026-05-23

### Error 2026-05-23T01:02:39+00:00
```
2026-05-23T01:02:39.2278572Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-23T01:02:39.2297477Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-23T01:02:39.2310715Z   
2026-05-23T01:02:39.2311362Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-05-23T01:02:39.2311984Z         
2026-05-23T01:02:39.2312798Z         Error: error creating project: test-acc-tf-p-1001279261586461285
2026-05-23T01:02:39.2313284Z         
2026-05-23T01:02:39.2313672Z           with mongodbatlas_project.test,
2026-05-23T01:02:39.2314398Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:02:39.2315071Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:02:39.2315476Z         
2026-05-23T01:02:39.2316184Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:02:39.2316955Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:02:39.2317655Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:39.2318220Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (72.69s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 9 seconds
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 9 seconds
- 2026-05-28

### Error 2026-05-28T01:18:52+00:00
```
2026-05-28T01:18:52.5772913Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-28T01:18:52.5775964Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-28T01:18:52.5790552Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-28T01:18:52.5791335Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-05-28T01:18:52.5791942Z         
2026-05-28T01:18:52.5792451Z         Error: error creating project: test-acc-tf-p-9129679065603246661
2026-05-28T01:18:52.5792905Z         
2026-05-28T01:18:52.5793290Z           with mongodbatlas_project.test,
2026-05-28T01:18:52.5794000Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:18:52.5795125Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:18:52.5795546Z         
2026-05-28T01:18:52.5796254Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T01:18:52.5797040Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T01:18:52.5797755Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:18:52.5798320Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (85.19s)
```

- 2026-05-29 PASS 10 seconds
- 2026-05-30

### Error 2026-05-30T01:16:43+00:00
```
2026-05-30T01:16:43.1479959Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-30T01:16:43.1483081Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-30T01:16:43.1499454Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2026-05-30T01:16:43.1500603Z     resource_x509_authentication_database_user_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-05-30T01:16:43.1514525Z         
2026-05-30T01:16:43.1515795Z         Error: error creating project: test-acc-tf-p-6912942626261396896
2026-05-30T01:16:43.1516408Z         
2026-05-30T01:16:43.1516874Z           with mongodbatlas_project.test,
2026-05-30T01:16:43.1518133Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:16:43.1518893Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:16:43.1519353Z         
2026-05-30T01:16:43.1519987Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:16:43.1520805Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:16:43.1521574Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:16:43.1522192Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (78.39s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 10 seconds
- 2026-06-02 PASS 57 seconds
- 2026-06-03 PASS 8 seconds
- 2026-06-04 PASS 39 seconds
- 2026-06-05 PASS 8 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 7 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 8 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 9 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 11 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
