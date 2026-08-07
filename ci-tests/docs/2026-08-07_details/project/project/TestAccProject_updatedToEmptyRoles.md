# project/project/TestAccProject_updatedToEmptyRoles Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:54](#error-2026-07-11t0054380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.00s
[2026-07-18 00:49](#error-2026-07-18t0049470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.00s
[2026-07-21 00:47](#error-2026-07-21t0047040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.09s
[2026-07-23 00:46](#error-2026-07-23t0046480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 2 minutes
- 2026-07-10 PASS 16 seconds
- 2026-07-11

### Error 2026-07-11T00:54:38+00:00
```
2026-07-11T00:54:38.5462014Z === RUN   TestAccProject_updatedToEmptyRoles
2026-07-11T00:54:38.5476709Z === CONT  TestAccProject_updatedToEmptyRoles
2026-07-11T00:54:38.5498704Z === NAME  TestAccProject_updatedToEmptyRoles
2026-07-11T00:54:38.5499729Z     resource_project_test.go:864: Step 1/2 error: Error running apply: exit status 1
2026-07-11T00:54:38.5500501Z         
2026-07-11T00:54:38.5501283Z         Error: error creating project: test-acc-tf-p-8540830588504384082
2026-07-11T00:54:38.5501965Z         
2026-07-11T00:54:38.5502530Z           with mongodbatlas_project.test,
2026-07-11T00:54:38.5503677Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:54:38.5504752Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:54:38.5505318Z         
2026-07-11T00:54:38.5506201Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:54:38.5507924Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:54:38.5509063Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5509835Z --- FAIL: TestAccProject_updatedToEmptyRoles (63.01s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 18 seconds
- 2026-07-14 PASS 44 seconds
- 2026-07-15 PASS 19 seconds
- 2026-07-16 PASS 46 seconds
- 2026-07-17 PASS 15 seconds
- 2026-07-18

### Error 2026-07-18T00:49:47+00:00
```
2026-07-18T00:49:47.0829799Z === RUN   TestAccProject_updatedToEmptyRoles
2026-07-18T00:49:47.0843899Z === CONT  TestAccProject_updatedToEmptyRoles
2026-07-18T00:49:47.1002363Z === NAME  TestAccProject_updatedToEmptyRoles
2026-07-18T00:49:47.1003445Z     resource_project_test.go:867: Step 1/2 error: Error running apply: exit status 1
2026-07-18T00:49:47.1004279Z         
2026-07-18T00:49:47.1005115Z         Error: error creating project: test-acc-tf-p-4874383537333595950
2026-07-18T00:49:47.1005830Z         
2026-07-18T00:49:47.1006440Z           with mongodbatlas_project.test,
2026-07-18T00:49:47.1007647Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:49:47.1008958Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:49:47.1009568Z         
2026-07-18T00:49:47.1010489Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:49:47.1011886Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:49:47.1012640Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:47.1013175Z --- FAIL: TestAccProject_updatedToEmptyRoles (75.05s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:04+00:00
```
2026-07-21T00:47:04.4170268Z === RUN   TestAccProject_updatedToEmptyRoles
2026-07-21T00:47:04.4180332Z === CONT  TestAccProject_updatedToEmptyRoles
2026-07-21T00:47:04.4193372Z === NAME  TestAccProject_updatedToEmptyRoles
2026-07-21T00:47:04.4193977Z     resource_project_test.go:867: Step 1/2 error: Error running apply: exit status 1
2026-07-21T00:47:04.4194431Z         
2026-07-21T00:47:04.4195035Z         Error: error creating project: test-acc-tf-p-7463955543089756362
2026-07-21T00:47:04.4195692Z         
2026-07-21T00:47:04.4196029Z           with mongodbatlas_project.test,
2026-07-21T00:47:04.4196676Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:47:04.4197291Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:47:04.4197631Z         
2026-07-21T00:47:04.4198144Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:47:04.4198843Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:47:04.4199475Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:04.4199930Z --- FAIL: TestAccProject_updatedToEmptyRoles (64.91s)
```

- 2026-07-22 PASS 17 seconds
- 2026-07-23

### Error 2026-07-23T00:46:48+00:00
```
2026-07-23T00:46:48.1147059Z === RUN   TestAccProject_updatedToEmptyRoles
2026-07-23T00:46:48.1153028Z === CONT  TestAccProject_updatedToEmptyRoles
2026-07-23T00:46:48.1297747Z === NAME  TestAccProject_updatedToEmptyRoles
2026-07-23T00:46:48.1298311Z     resource_project_test.go:867: Step 1/2 error: Error running apply: exit status 1
2026-07-23T00:46:48.1298748Z         
2026-07-23T00:46:48.1299200Z         Error: error creating project: test-acc-tf-p-2702403784113768900
2026-07-23T00:46:48.1299583Z         
2026-07-23T00:46:48.1299914Z           with mongodbatlas_project.test,
2026-07-23T00:46:48.1300870Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:46:48.1301486Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:46:48.1301820Z         
2026-07-23T00:46:48.1302323Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:46:48.1302993Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:46:48.1303610Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:48.1304068Z --- FAIL: TestAccProject_updatedToEmptyRoles (64.19s)
```

- 2026-07-24 PASS 17 seconds
- 2026-07-25 PASS 11 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 25 seconds
- 2026-07-28 PASS 11 seconds
- 2026-07-29 PASS 11 seconds
- 2026-07-30 PASS 12 seconds
- 2026-07-31
  - PASS 11 seconds
  - PASS 15 seconds
  - PASS 8 seconds
- 2026-08-01 PASS 10 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 10 seconds
  - PASS 9 seconds
- 2026-08-04 PASS 14 seconds
- 2026-08-05 PASS 11 seconds
- 2026-08-06 PASS 10 seconds
- 2026-08-07 PASS 12 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 12 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 12 seconds
  - PASS 12 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 12 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 13 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 10 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 11 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
