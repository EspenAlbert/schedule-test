# project/project/TestAccProject_basic Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-14 00:43](#error-2026-07-14t0043070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.03s
[2026-07-16 00:44](#error-2026-07-16t0044260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.06s
[2026-07-21 00:47](#error-2026-07-21t0047040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.06s
[2026-07-23 00:46](#error-2026-07-23t0046480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 12 minutes
- 2026-07-10 PASS 6 minutes
- 2026-07-11 PASS 11 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 7 minutes
- 2026-07-14

### Error 2026-07-14T00:43:07+00:00
```
2026-07-14T00:43:07.8926043Z === RUN   TestAccProject_basic
2026-07-14T00:43:07.8938298Z === CONT  TestAccProject_basic
2026-07-14T00:43:07.9060942Z === NAME  TestAccProject_basic
2026-07-14T00:43:07.9061459Z     resource_project_test.go:567: Step 1/4 error: Error running apply: exit status 1
2026-07-14T00:43:07.9061891Z         
2026-07-14T00:43:07.9062334Z         Error: error creating project: test-acc-tf-p-8498508579546083485
2026-07-14T00:43:07.9062721Z         
2026-07-14T00:43:07.9063046Z           with mongodbatlas_project.test,
2026-07-14T00:43:07.9063844Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-14T00:43:07.9064454Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-14T00:43:07.9064780Z         
2026-07-14T00:43:07.9065277Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-14T00:43:07.9065965Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-14T00:43:07.9066856Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:43:07.9067268Z --- FAIL: TestAccProject_basic (89.31s)
```

- 2026-07-15 PASS 8 minutes
- 2026-07-16

### Error 2026-07-16T00:44:26+00:00
```
2026-07-16T00:44:26.3843263Z === RUN   TestAccProject_basic
2026-07-16T00:44:26.3859722Z === CONT  TestAccProject_basic
2026-07-16T00:44:26.3896252Z === NAME  TestAccProject_basic
2026-07-16T00:44:26.3896783Z     resource_project_test.go:567: Step 1/4 error: Error running apply: exit status 1
2026-07-16T00:44:26.3897228Z         
2026-07-16T00:44:26.3897666Z         Error: error creating project: test-acc-tf-p-4587116295047363315
2026-07-16T00:44:26.3898048Z         
2026-07-16T00:44:26.3898368Z           with mongodbatlas_project.test,
2026-07-16T00:44:26.3899002Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:26.3899611Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:44:26.3899941Z         
2026-07-16T00:44:26.3900443Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:26.3901124Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:26.3901920Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:26.3902329Z --- FAIL: TestAccProject_basic (69.64s)
```

- 2026-07-17 PASS 7 minutes
- 2026-07-18 PASS 8 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:04+00:00
```
2026-07-21T00:47:04.4163103Z === RUN   TestAccProject_basic
2026-07-21T00:47:04.4177630Z === CONT  TestAccProject_basic
2026-07-21T00:47:04.4230846Z === NAME  TestAccProject_basic
2026-07-21T00:47:04.4231375Z     resource_project_test.go:568: Step 1/4 error: Error running apply: exit status 1
2026-07-21T00:47:04.4231820Z         
2026-07-21T00:47:04.4232266Z         Error: error creating project: test-acc-tf-p-7633631429455815697
2026-07-21T00:47:04.4232657Z         
2026-07-21T00:47:04.4232987Z           with mongodbatlas_project.test,
2026-07-21T00:47:04.4233637Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:47:04.4234255Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:47:04.4234587Z         
2026-07-21T00:47:04.4235317Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:47:04.4236056Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:47:04.4236691Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:04.4237112Z --- FAIL: TestAccProject_basic (71.58s)
```

- 2026-07-22 PASS 7 minutes
- 2026-07-23

### Error 2026-07-23T00:46:48+00:00
```
2026-07-23T00:46:48.1141525Z === RUN   TestAccProject_basic
2026-07-23T00:46:48.1152355Z === CONT  TestAccProject_basic
2026-07-23T00:46:48.1225897Z === NAME  TestAccProject_basic
2026-07-23T00:46:48.1226430Z     resource_project_test.go:568: Step 1/4 error: Error running apply: exit status 1
2026-07-23T00:46:48.1226872Z         
2026-07-23T00:46:48.1227329Z         Error: error creating project: test-acc-tf-p-4496329524061973861
2026-07-23T00:46:48.1227722Z         
2026-07-23T00:46:48.1228064Z           with mongodbatlas_project.test,
2026-07-23T00:46:48.1228722Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:46:48.1229333Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:46:48.1229679Z         
2026-07-23T00:46:48.1230191Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:46:48.1231102Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:46:48.1231727Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:48.1232151Z --- FAIL: TestAccProject_basic (63.48s)
```

- 2026-07-24 PASS 6 minutes
- 2026-07-25 PASS 2 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 5 minutes
- 2026-07-28 PASS 2 minutes
- 2026-07-29 PASS 2 minutes
- 2026-07-30 PASS 4 minutes
- 2026-07-31
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 23 seconds
- 2026-08-01 PASS a minute
- 2026-08-02: MISSING
- 2026-08-03
  - PASS a minute
  - PASS 36 seconds
- 2026-08-04 PASS 2 minutes
- 2026-08-05 PASS 2 minutes
- 2026-08-06 PASS a minute
- 2026-08-07 PASS 2 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 3 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 4 minutes
  - PASS 2 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 5 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 5 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 minutes
  - PASS 2 minutes
  - PASS a minute
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
