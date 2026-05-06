# project/project/TestAccProject_slowOperationReadOnly Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.02s
[2026-04-11 00:48](#error-2026-04-11t0048380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.04s
[2026-04-16 00:54](#error-2026-04-16t0054520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.03s
[2026-04-18 00:47](#error-2026-04-18t0047040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.03s
[2026-04-30 00:57](#error-2026-04-30t0057250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.08s
[2026-05-05 00:53](#error-2026-05-05t0053010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08 PASS 16 seconds
- 2026-04-09

### Error 2026-04-09T00:40:34+00:00
```
2026-04-09T00:40:34.7224258Z === RUN   TestAccProject_slowOperationReadOnly
2026-04-09T00:40:34.7225834Z === CONT  TestAccProject_slowOperationReadOnly
2026-04-09T00:40:34.7246364Z === NAME  TestAccProject_slowOperationReadOnly
2026-04-09T00:40:34.7247440Z     resource_project_test.go:1128: Step 1/4 error: Error running apply: exit status 1
2026-04-09T00:40:34.7248218Z         
2026-04-09T00:40:34.7248998Z         Error: error creating project: test-acc-tf-p-9154410033130840286
2026-04-09T00:40:34.7249575Z         
2026-04-09T00:40:34.7249896Z           with mongodbatlas_project.test,
2026-04-09T00:40:34.7250522Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:34.7251115Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:34.7251424Z         
2026-04-09T00:40:34.7251903Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:34.7252565Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:34.7253332Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:34.7253777Z --- FAIL: TestAccProject_slowOperationReadOnly (64.17s)
```

- 2026-04-10 PASS 15 seconds
- 2026-04-11

### Error 2026-04-11T00:48:38+00:00
```
2026-04-11T00:48:38.3780738Z === RUN   TestAccProject_slowOperationReadOnly
2026-04-11T00:48:38.3785559Z === CONT  TestAccProject_slowOperationReadOnly
2026-04-11T00:48:38.3952173Z === NAME  TestAccProject_slowOperationReadOnly
2026-04-11T00:48:38.3952747Z     resource_project_test.go:1128: Step 1/4 error: Error running apply: exit status 1
2026-04-11T00:48:38.3953179Z         
2026-04-11T00:48:38.3953607Z         Error: error creating project: test-acc-tf-p-9096731072824725738
2026-04-11T00:48:38.3953987Z         
2026-04-11T00:48:38.3954306Z           with mongodbatlas_project.test,
2026-04-11T00:48:38.3954942Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:48:38.3955536Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:48:38.3955854Z         
2026-04-11T00:48:38.3956343Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:48:38.3957018Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:48:38.3957897Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:38.3958347Z --- FAIL: TestAccProject_slowOperationReadOnly (75.41s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 22 seconds
- 2026-04-14 PASS a minute
- 2026-04-15 PASS 17 seconds
- 2026-04-16

### Error 2026-04-16T00:54:52+00:00
```
2026-04-16T00:54:52.7915692Z === RUN   TestAccProject_slowOperationReadOnly
2026-04-16T00:54:52.7918882Z === CONT  TestAccProject_slowOperationReadOnly
2026-04-16T00:54:52.7979367Z === NAME  TestAccProject_slowOperationReadOnly
2026-04-16T00:54:52.7979929Z     resource_project_test.go:1128: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:54:52.7980353Z         
2026-04-16T00:54:52.7980786Z         Error: error creating project: test-acc-tf-p-4126959184302113314
2026-04-16T00:54:52.7981151Z         
2026-04-16T00:54:52.7981465Z           with mongodbatlas_project.test,
2026-04-16T00:54:52.7982083Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-16T00:54:52.7982663Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-16T00:54:52.7982971Z         
2026-04-16T00:54:52.7983446Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-16T00:54:52.7984107Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-16T00:54:52.7984698Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:54:52.7985128Z --- FAIL: TestAccProject_slowOperationReadOnly (74.30s)
```

- 2026-04-17 PASS 15 seconds
- 2026-04-18

### Error 2026-04-18T00:47:04+00:00
```
2026-04-18T00:47:04.4808175Z === RUN   TestAccProject_slowOperationReadOnly
2026-04-18T00:47:04.4808918Z === CONT  TestAccProject_slowOperationReadOnly
2026-04-18T00:47:04.4873740Z === NAME  TestAccProject_slowOperationReadOnly
2026-04-18T00:47:04.4874163Z     resource_project_test.go:1128: Step 1/4 error: Error running apply: exit status 1
2026-04-18T00:47:04.4874484Z         
2026-04-18T00:47:04.4874816Z         Error: error creating project: test-acc-tf-p-6317291863612479038
2026-04-18T00:47:04.4875097Z         
2026-04-18T00:47:04.4875339Z           with mongodbatlas_project.test,
2026-04-18T00:47:04.4875805Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-18T00:47:04.4876256Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-18T00:47:04.4876493Z         
2026-04-18T00:47:04.4876864Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-18T00:47:04.4877382Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-18T00:47:04.4877838Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:47:04.4878173Z --- FAIL: TestAccProject_slowOperationReadOnly (79.29s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 15 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 15 seconds
- 2026-04-23 PASS 51 seconds
- 2026-04-24 PASS 16 seconds
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS 16 seconds
- 2026-04-28 PASS a minute
- 2026-04-29 PASS 14 seconds
- 2026-04-30

### Error 2026-04-30T00:57:25+00:00
```
2026-04-30T00:57:25.2519186Z === RUN   TestAccProject_slowOperationReadOnly
2026-04-30T00:57:25.2520358Z === CONT  TestAccProject_slowOperationReadOnly
2026-04-30T00:57:25.2581652Z === NAME  TestAccProject_slowOperationReadOnly
2026-04-30T00:57:25.2582487Z     resource_project_test.go:1128: Step 1/4 error: Error running apply: exit status 1
2026-04-30T00:57:25.2582909Z         
2026-04-30T00:57:25.2583339Z         Error: error creating project: test-acc-tf-p-7648103771522256062
2026-04-30T00:57:25.2583712Z         
2026-04-30T00:57:25.2583995Z           with mongodbatlas_project.test,
2026-04-30T00:57:25.2584554Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T00:57:25.2585084Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T00:57:25.2585366Z         
2026-04-30T00:57:25.2585798Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T00:57:25.2586402Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T00:57:25.2586946Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:25.2587347Z --- FAIL: TestAccProject_slowOperationReadOnly (66.77s)
```

- 2026-05-01 PASS 16 seconds
- 2026-05-02 PASS 36 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 13 seconds
- 2026-05-05

### Error 2026-05-05T00:53:01+00:00
```
2026-05-05T00:53:01.4217406Z === RUN   TestAccProject_slowOperationReadOnly
2026-05-05T00:53:01.4219940Z === CONT  TestAccProject_slowOperationReadOnly
2026-05-05T00:53:01.4315429Z === NAME  TestAccProject_slowOperationReadOnly
2026-05-05T00:53:01.4315990Z     resource_project_test.go:1128: Step 1/4 error: Error running apply: exit status 1
2026-05-05T00:53:01.4316403Z         
2026-05-05T00:53:01.4316831Z         Error: error creating project: test-acc-tf-p-4383995638263745996
2026-05-05T00:53:01.4317201Z         
2026-05-05T00:53:01.4317506Z           with mongodbatlas_project.test,
2026-05-05T00:53:01.4318148Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T00:53:01.4318969Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-05T00:53:01.4319289Z         
2026-05-05T00:53:01.4319767Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:53:01.4320431Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:53:01.4321153Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:01.4321594Z --- FAIL: TestAccProject_slowOperationReadOnly (70.84s)
```

- 2026-05-06 PASS 21 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 15 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 13 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 12 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 13 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 17 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 11 seconds
- 2026-05-04 PASS 13 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 15 seconds
