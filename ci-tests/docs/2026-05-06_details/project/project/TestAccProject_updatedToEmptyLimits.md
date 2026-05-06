# project/project/TestAccProject_updatedToEmptyLimits Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 27) FAIL(x 7)
Success rate: 79.41%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.05s
[2026-04-11 00:48](#error-2026-04-11t0048380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.09s
[2026-04-14 00:55](#error-2026-04-14t0055030000) |  | dev | flaky_500 | 61.02s
[2026-04-18 00:47](#error-2026-04-18t0047040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.07s
[2026-04-28 00:58](#error-2026-04-28t0058580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.10s
[2026-04-30 00:57](#error-2026-04-30t0057250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.01s
[2026-05-02 00:58](#error-2026-05-02t0058370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.00s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 56 seconds
- 2026-04-08 PASS 21 seconds
- 2026-04-09

### Error 2026-04-09T00:40:34+00:00
```
2026-04-09T00:40:34.7221006Z === RUN   TestAccProject_updatedToEmptyLimits
2026-04-09T00:40:34.7225227Z === CONT  TestAccProject_updatedToEmptyLimits
2026-04-09T00:40:34.7306564Z === NAME  TestAccProject_updatedToEmptyLimits
2026-04-09T00:40:34.7307115Z     resource_project_test.go:963: Step 1/2 error: Error running apply: exit status 1
2026-04-09T00:40:34.7307880Z         
2026-04-09T00:40:34.7308307Z         Error: error creating project: test-acc-tf-p-5622253778789670663
2026-04-09T00:40:34.7309102Z         
2026-04-09T00:40:34.7309511Z           with mongodbatlas_project.test,
2026-04-09T00:40:34.7310144Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:34.7310741Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:34.7311051Z         
2026-04-09T00:40:34.7311527Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:34.7312186Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:34.7312779Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:34.7313213Z --- FAIL: TestAccProject_updatedToEmptyLimits (79.45s)
```

- 2026-04-10 PASS 18 seconds
- 2026-04-11

### Error 2026-04-11T00:48:38+00:00
```
2026-04-11T00:48:38.3775658Z === RUN   TestAccProject_updatedToEmptyLimits
2026-04-11T00:48:38.3782397Z === CONT  TestAccProject_updatedToEmptyLimits
2026-04-11T00:48:38.3852335Z === NAME  TestAccProject_updatedToEmptyLimits
2026-04-11T00:48:38.3853402Z     resource_project_test.go:963: Step 1/2 error: Error running apply: exit status 1
2026-04-11T00:48:38.3854120Z         
2026-04-11T00:48:38.3854869Z         Error: error creating project: test-acc-tf-p-590345405936497773
2026-04-11T00:48:38.3855505Z         
2026-04-11T00:48:38.3856044Z           with mongodbatlas_project.test,
2026-04-11T00:48:38.3857427Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:48:38.3858704Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:48:38.3859259Z         
2026-04-11T00:48:38.3860099Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:48:38.3861267Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:48:38.3862401Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:38.3863186Z --- FAIL: TestAccProject_updatedToEmptyLimits (65.91s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 27 seconds
- 2026-04-14

### Error 2026-04-14T00:55:03+00:00
```
2026-04-14T00:55:03.8128706Z === RUN   TestAccProject_updatedToEmptyLimits
2026-04-14T00:55:03.8133314Z === CONT  TestAccProject_updatedToEmptyLimits
2026-04-14T00:55:03.8174467Z === NAME  TestAccProject_updatedToEmptyLimits
2026-04-14T00:55:03.8175307Z     resource_project_test.go:963: Step 1/2 error: Error running apply: exit status 1
2026-04-14T00:55:03.8176061Z         
2026-04-14T00:55:03.8176822Z         Error: error creating project: test-acc-tf-p-2450256758404057806
2026-04-14T00:55:03.8177353Z         
2026-04-14T00:55:03.8177671Z           with mongodbatlas_project.test,
2026-04-14T00:55:03.8178286Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-14T00:55:03.8179069Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-14T00:55:03.8179376Z         
2026-04-14T00:55:03.8179843Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-04-14T00:55:03.8180263Z         type
2026-04-14T00:55:03.8195769Z --- FAIL: TestAccProject_updatedToEmptyLimits (61.22s)
```

- 2026-04-15 PASS 16 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 17 seconds
- 2026-04-18

### Error 2026-04-18T00:47:04+00:00
```
2026-04-18T00:47:04.4805870Z === RUN   TestAccProject_updatedToEmptyLimits
2026-04-18T00:47:04.4810566Z === CONT  TestAccProject_updatedToEmptyLimits
2026-04-18T00:47:04.4904396Z === NAME  TestAccProject_updatedToEmptyLimits
2026-04-18T00:47:04.4904813Z     resource_project_test.go:963: Step 1/2 error: Error running apply: exit status 1
2026-04-18T00:47:04.4905131Z         
2026-04-18T00:47:04.4905460Z         Error: error creating project: test-acc-tf-p-1590535617158878221
2026-04-18T00:47:04.4905752Z         
2026-04-18T00:47:04.4905988Z           with mongodbatlas_project.test,
2026-04-18T00:47:04.4906458Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-18T00:47:04.4906915Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-18T00:47:04.4907156Z         
2026-04-18T00:47:04.4907535Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-18T00:47:04.4908049Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-18T00:47:04.4908507Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:47:04.4908838Z --- FAIL: TestAccProject_updatedToEmptyLimits (86.74s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 18 seconds
- 2026-04-21 PASS 34 seconds
- 2026-04-22 PASS 17 seconds
- 2026-04-23 PASS 51 seconds
- 2026-04-24 PASS 17 seconds
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS 20 seconds
- 2026-04-28

### Error 2026-04-28T00:58:58+00:00
```
2026-04-28T00:58:58.2907313Z === RUN   TestAccProject_updatedToEmptyLimits
2026-04-28T00:58:58.2914068Z === CONT  TestAccProject_updatedToEmptyLimits
2026-04-28T00:58:58.2962861Z === NAME  TestAccProject_updatedToEmptyLimits
2026-04-28T00:58:58.2963523Z     resource_project_test.go:963: Step 1/2 error: Error running apply: exit status 1
2026-04-28T00:58:58.2964055Z         
2026-04-28T00:58:58.2964593Z         Error: error creating project: test-acc-tf-p-3838116943115308429
2026-04-28T00:58:58.2965071Z         
2026-04-28T00:58:58.2965699Z           with mongodbatlas_project.test,
2026-04-28T00:58:58.2966428Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-28T00:58:58.2967119Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-28T00:58:58.2967529Z         
2026-04-28T00:58:58.2968124Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-28T00:58:58.2969173Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-28T00:58:58.2969877Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-28T00:58:58.2970418Z --- FAIL: TestAccProject_updatedToEmptyLimits (68.98s)
```

- 2026-04-29 PASS 17 seconds
- 2026-04-30

### Error 2026-04-30T00:57:25+00:00
```
2026-04-30T00:57:25.2515521Z === RUN   TestAccProject_updatedToEmptyLimits
2026-04-30T00:57:25.2521024Z === CONT  TestAccProject_updatedToEmptyLimits
2026-04-30T00:57:25.2648558Z === NAME  TestAccProject_updatedToEmptyLimits
2026-04-30T00:57:25.2649048Z     resource_project_test.go:963: Step 1/2 error: Error running apply: exit status 1
2026-04-30T00:57:25.2649426Z         
2026-04-30T00:57:25.2649823Z         Error: error creating project: test-acc-tf-p-4191560884500412620
2026-04-30T00:57:25.2650161Z         
2026-04-30T00:57:25.2650436Z           with mongodbatlas_project.test,
2026-04-30T00:57:25.2651005Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T00:57:25.2651540Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T00:57:25.2651825Z         
2026-04-30T00:57:25.2652424Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T00:57:25.2653062Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T00:57:25.2653622Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:25.2654022Z --- FAIL: TestAccProject_updatedToEmptyLimits (72.14s)
```

- 2026-05-01 PASS 21 seconds
- 2026-05-02

### Error 2026-05-02T00:58:37+00:00
```
2026-05-02T00:58:37.2187829Z === RUN   TestAccProject_updatedToEmptyLimits
2026-05-02T00:58:37.2192112Z === CONT  TestAccProject_updatedToEmptyLimits
2026-05-02T00:58:37.2277752Z === NAME  TestAccProject_updatedToEmptyLimits
2026-05-02T00:58:37.2278299Z     resource_project_test.go:963: Step 1/2 error: Error running apply: exit status 1
2026-05-02T00:58:37.2278713Z         
2026-05-02T00:58:37.2279132Z         Error: error creating project: test-acc-tf-p-5629572071438058841
2026-05-02T00:58:37.2279493Z         
2026-05-02T00:58:37.2279792Z           with mongodbatlas_project.test,
2026-05-02T00:58:37.2280395Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-02T00:58:37.2280965Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-02T00:58:37.2281269Z         
2026-05-02T00:58:37.2281736Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-02T00:58:37.2282391Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-02T00:58:37.2282986Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-02T00:58:37.2283409Z --- FAIL: TestAccProject_updatedToEmptyLimits (69.04s)
```

- 2026-05-03: MISSING
- 2026-05-04 PASS 16 seconds
- 2026-05-05 PASS 46 seconds
- 2026-05-06 PASS 26 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 17 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 15 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 14 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 15 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 24 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 12 seconds
- 2026-05-04 PASS 15 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 16 seconds
