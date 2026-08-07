# project/project/TestAccProject_withInvalidLimitNameOnUpdate Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 6)
Success rate: 83.78%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101390000) |  | dev | flaky_500 | 54.02s
[2026-07-11 00:54](#error-2026-07-11t0054380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.01s
[2026-07-16 00:44](#error-2026-07-16t0044260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.02s
[2026-07-18 00:49](#error-2026-07-18t0049470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 109.00s
[2026-07-21 00:47](#error-2026-07-21t0047040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.02s
[2026-07-23 00:46](#error-2026-07-23t0046480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:39+00:00
```
2026-07-09T01:01:39.8540133Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-07-09T01:01:39.8549346Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-07-09T01:01:39.8701644Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-07-09T01:01:39.8702681Z     resource_project_test.go:1064: Step 1/2 error: Error running apply: exit status 1
2026-07-09T01:01:39.8703625Z         
2026-07-09T01:01:39.8704415Z         Error: error creating project: test-acc-tf-p-1676651945722202642
2026-07-09T01:01:39.8705089Z         
2026-07-09T01:01:39.8705641Z           with mongodbatlas_project.test,
2026-07-09T01:01:39.8706808Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T01:01:39.8707886Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T01:01:39.8708451Z         
2026-07-09T01:01:39.8709351Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-07-09T01:01:39.8710112Z         type
2026-07-09T01:01:39.8712804Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (54.22s)
```

- 2026-07-10 PASS 15 seconds
- 2026-07-11

### Error 2026-07-11T00:54:38+00:00
```
2026-07-11T00:54:38.5467359Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-07-11T00:54:38.5477346Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-07-11T00:54:38.5498262Z   
2026-07-11T00:54:38.5663460Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-07-11T00:54:38.5664091Z     resource_project_test.go:1064: Step 1/2 error: Error running apply: exit status 1
2026-07-11T00:54:38.5664552Z         
2026-07-11T00:54:38.5665010Z         Error: error creating project: test-acc-tf-p-575192322469418594
2026-07-11T00:54:38.5665407Z         
2026-07-11T00:54:38.5665734Z           with mongodbatlas_project.test,
2026-07-11T00:54:38.5666394Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:54:38.5667019Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:54:38.5667357Z         
2026-07-11T00:54:38.5668030Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:54:38.5668747Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:54:38.5669383Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5669871Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (78.09s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 18 seconds
- 2026-07-14 PASS 52 seconds
- 2026-07-15 PASS 21 seconds
- 2026-07-16

### Error 2026-07-16T00:44:26+00:00
```
2026-07-16T00:44:26.3856742Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-07-16T00:44:26.3861188Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-07-16T00:44:26.3914548Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-07-16T00:44:26.3915126Z     resource_project_test.go:1064: Step 1/2 error: Error running apply: exit status 1
2026-07-16T00:44:26.3915563Z         
2026-07-16T00:44:26.3916002Z         Error: error creating project: test-acc-tf-p-4217833883585716012
2026-07-16T00:44:26.3916392Z         
2026-07-16T00:44:26.3916717Z           with mongodbatlas_project.test,
2026-07-16T00:44:26.3917361Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:26.3917976Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:44:26.3918303Z         
2026-07-16T00:44:26.3918791Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:26.3919482Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:26.3920108Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:26.3920593Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (72.19s)
```

- 2026-07-17 PASS 15 seconds
- 2026-07-18

### Error 2026-07-18T00:49:47+00:00
```
2026-07-18T00:49:47.0835287Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-07-18T00:49:47.0841077Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-07-18T00:49:47.1069962Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-07-18T00:49:47.1070733Z     resource_project_test.go:1067: Step 1/2 error: Error running apply: exit status 1
2026-07-18T00:49:47.1071298Z         
2026-07-18T00:49:47.1071756Z         Error: error creating project: test-acc-tf-p-5639761047496937933
2026-07-18T00:49:47.1072156Z         
2026-07-18T00:49:47.1072492Z           with mongodbatlas_project.test,
2026-07-18T00:49:47.1073150Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:49:47.1073767Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:49:47.1074102Z         
2026-07-18T00:49:47.1074610Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:49:47.1075310Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:49:47.1075953Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:47.1076447Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (109.02s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:04+00:00
```
2026-07-21T00:47:04.4174217Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-07-21T00:47:04.4178840Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-07-21T00:47:04.4271993Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-07-21T00:47:04.4272607Z     resource_project_test.go:1067: Step 1/2 error: Error running apply: exit status 1
2026-07-21T00:47:04.4273192Z         
2026-07-21T00:47:04.4273642Z         Error: error creating project: test-acc-tf-p-7941800500031106697
2026-07-21T00:47:04.4274035Z         
2026-07-21T00:47:04.4274359Z           with mongodbatlas_project.test,
2026-07-21T00:47:04.4275006Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:47:04.4275889Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:47:04.4276226Z         
2026-07-21T00:47:04.4276731Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:47:04.4277424Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:47:04.4278049Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:04.4278534Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (75.23s)
```

- 2026-07-22 PASS 18 seconds
- 2026-07-23

### Error 2026-07-23T00:46:48+00:00
```
2026-07-23T00:46:48.1149818Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-07-23T00:46:48.1175098Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-07-23T00:46:48.1244075Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-07-23T00:46:48.1244663Z     resource_project_test.go:1067: Step 1/2 error: Error running apply: exit status 1
2026-07-23T00:46:48.1245115Z         
2026-07-23T00:46:48.1245566Z         Error: error creating project: test-acc-tf-p-913078622859827750
2026-07-23T00:46:48.1245955Z         
2026-07-23T00:46:48.1246286Z           with mongodbatlas_project.test,
2026-07-23T00:46:48.1246932Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:46:48.1247532Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:46:48.1247864Z         
2026-07-23T00:46:48.1248364Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:46:48.1249042Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:46:48.1249654Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:48.1250134Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (63.64s)
```

- 2026-07-24 PASS 17 seconds
- 2026-07-25 PASS 14 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 24 seconds
- 2026-07-28 PASS 11 seconds
- 2026-07-29 PASS 11 seconds
- 2026-07-30 PASS 12 seconds
- 2026-07-31
  - PASS 12 seconds
  - PASS 16 seconds
  - PASS 11 seconds
- 2026-08-01 PASS 11 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 11 seconds
  - PASS 10 seconds
- 2026-08-04 PASS 12 seconds
- 2026-08-05 PASS 12 seconds
- 2026-08-06 PASS 9 seconds
- 2026-08-07 PASS 11 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 11 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 12 seconds
  - PASS 12 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 13 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 14 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 12 seconds
  - PASS 8 seconds
  - PASS 9 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 10 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
