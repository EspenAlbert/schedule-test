# project/project/TestAccProject_updatedToEmptyRoles Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 27) FAIL(x 7)
Success rate: 79.41%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:48](#error-2026-04-11t0048380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.10s
[2026-04-14 00:55](#error-2026-04-14t0055030000) |  | dev | flaky_500 | 61.02s
[2026-04-16 00:54](#error-2026-04-16t0054520000) |  | dev | flaky_500 | 77.00s
[2026-04-21 00:50](#error-2026-04-21t0050450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.07s
[2026-04-23 00:57](#error-2026-04-23t0057470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s
[2026-04-25 00:48](#error-2026-04-25t0048210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.08s
[2026-05-05 00:53](#error-2026-05-05t0053010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 44 seconds
- 2026-04-08 PASS 15 seconds
- 2026-04-09 PASS 2 minutes
- 2026-04-10 PASS 12 seconds
- 2026-04-11

### Error 2026-04-11T00:48:38+00:00
```
2026-04-11T00:48:38.3773363Z === RUN   TestAccProject_updatedToEmptyRoles
2026-04-11T00:48:38.3784072Z === CONT  TestAccProject_updatedToEmptyRoles
2026-04-11T00:48:38.3934156Z === NAME  TestAccProject_updatedToEmptyRoles
2026-04-11T00:48:38.3934697Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-04-11T00:48:38.3935121Z         
2026-04-11T00:48:38.3935547Z         Error: error creating project: test-acc-tf-p-3476524660775606850
2026-04-11T00:48:38.3935918Z         
2026-04-11T00:48:38.3936220Z           with mongodbatlas_project.test,
2026-04-11T00:48:38.3936841Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:48:38.3937566Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:48:38.3938197Z         
2026-04-11T00:48:38.3938689Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:48:38.3939352Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:48:38.3939969Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:38.3940408Z --- FAIL: TestAccProject_updatedToEmptyRoles (68.96s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 18 seconds
- 2026-04-14

### Error 2026-04-14T00:55:03+00:00
```
2026-04-14T00:55:03.8126328Z === RUN   TestAccProject_updatedToEmptyRoles
2026-04-14T00:55:03.8136707Z === CONT  TestAccProject_updatedToEmptyRoles
2026-04-14T00:55:03.8191132Z === NAME  TestAccProject_updatedToEmptyRoles
2026-04-14T00:55:03.8191658Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-04-14T00:55:03.8192066Z         
2026-04-14T00:55:03.8192474Z         Error: error creating project: test-acc-tf-p-2228688348935899207
2026-04-14T00:55:03.8192832Z         
2026-04-14T00:55:03.8193131Z           with mongodbatlas_project.test,
2026-04-14T00:55:03.8193742Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-14T00:55:03.8194311Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-14T00:55:03.8194621Z         
2026-04-14T00:55:03.8195081Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-04-14T00:55:03.8195493Z         type
2026-04-14T00:55:03.8196479Z --- FAIL: TestAccProject_updatedToEmptyRoles (61.22s)
```

- 2026-04-15 PASS 11 seconds
- 2026-04-16

### Error 2026-04-16T00:54:52+00:00
```
2026-04-16T00:54:52.7910071Z === RUN   TestAccProject_updatedToEmptyRoles
2026-04-16T00:54:52.7917025Z === CONT  TestAccProject_updatedToEmptyRoles
2026-04-16T00:54:52.8004091Z === NAME  TestAccProject_updatedToEmptyRoles
2026-04-16T00:54:52.8004620Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:54:52.8005059Z         
2026-04-16T00:54:52.8005509Z         Error: error creating project: test-acc-tf-p-3927092351968486312
2026-04-16T00:54:52.8005889Z         
2026-04-16T00:54:52.8006205Z           with mongodbatlas_project.test,
2026-04-16T00:54:52.8006827Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-16T00:54:52.8007406Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-16T00:54:52.8007917Z         
2026-04-16T00:54:52.8008411Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-04-16T00:54:52.8008845Z         type
2026-04-16T00:54:52.8014573Z --- FAIL: TestAccProject_updatedToEmptyRoles (77.05s)
```

- 2026-04-17 PASS 11 seconds
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS 13 seconds
- 2026-04-21

### Error 2026-04-21T00:50:45+00:00
```
2026-04-21T00:50:45.8475355Z === RUN   TestAccProject_updatedToEmptyRoles
2026-04-21T00:50:45.8484483Z === CONT  TestAccProject_updatedToEmptyRoles
2026-04-21T00:50:45.8538368Z === NAME  TestAccProject_updatedToEmptyRoles
2026-04-21T00:50:45.8538909Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-04-21T00:50:45.8539325Z         
2026-04-21T00:50:45.8539751Z         Error: error creating project: test-acc-tf-p-5388570420977039759
2026-04-21T00:50:45.8540112Z         
2026-04-21T00:50:45.8540411Z           with mongodbatlas_project.test,
2026-04-21T00:50:45.8541037Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-21T00:50:45.8541625Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-21T00:50:45.8541931Z         
2026-04-21T00:50:45.8542419Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-21T00:50:45.8543096Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-21T00:50:45.8543710Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T00:50:45.8544144Z --- FAIL: TestAccProject_updatedToEmptyRoles (67.71s)
```

- 2026-04-22 PASS 12 seconds
- 2026-04-23

### Error 2026-04-23T00:57:47+00:00
```
2026-04-23T00:57:47.4697287Z === RUN   TestAccProject_updatedToEmptyRoles
2026-04-23T00:57:47.4705483Z === CONT  TestAccProject_updatedToEmptyRoles
2026-04-23T00:57:47.4771765Z === NAME  TestAccProject_updatedToEmptyRoles
2026-04-23T00:57:47.4772451Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-04-23T00:57:47.4772960Z         
2026-04-23T00:57:47.4773477Z         Error: error creating project: test-acc-tf-p-6159880311516657314
2026-04-23T00:57:47.4773937Z         
2026-04-23T00:57:47.4774312Z           with mongodbatlas_project.test,
2026-04-23T00:57:47.4775072Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-23T00:57:47.4775781Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-23T00:57:47.4776169Z         
2026-04-23T00:57:47.4776746Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-23T00:57:47.4777714Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-23T00:57:47.4778469Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-23T00:57:47.4779157Z --- FAIL: TestAccProject_updatedToEmptyRoles (65.32s)
```

- 2026-04-24 PASS 13 seconds
- 2026-04-25

### Error 2026-04-25T00:48:21+00:00
```
2026-04-25T00:48:21.5501280Z === RUN   TestAccProject_updatedToEmptyRoles
2026-04-25T00:48:21.5509782Z === CONT  TestAccProject_updatedToEmptyRoles
2026-04-25T00:48:21.5550944Z === NAME  TestAccProject_updatedToEmptyRoles
2026-04-25T00:48:21.5551478Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-04-25T00:48:21.5551889Z         
2026-04-25T00:48:21.5552314Z         Error: error creating project: test-acc-tf-p-3886028864126572325
2026-04-25T00:48:21.5552677Z         
2026-04-25T00:48:21.5552986Z           with mongodbatlas_project.test,
2026-04-25T00:48:21.5553596Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-25T00:48:21.5554188Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-25T00:48:21.5554500Z         
2026-04-25T00:48:21.5554977Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-25T00:48:21.5555897Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-25T00:48:21.5556491Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T00:48:21.5556936Z --- FAIL: TestAccProject_updatedToEmptyRoles (66.82s)
```

- 2026-04-26: MISSING
- 2026-04-27 PASS 13 seconds
- 2026-04-28 PASS a minute
- 2026-04-29 PASS 13 seconds
- 2026-04-30 PASS 50 seconds
- 2026-05-01 PASS 13 seconds
- 2026-05-02 PASS 25 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 12 seconds
- 2026-05-05

### Error 2026-05-05T00:53:01+00:00
```
2026-05-05T00:53:01.4213143Z === RUN   TestAccProject_updatedToEmptyRoles
2026-05-05T00:53:01.4219301Z === CONT  TestAccProject_updatedToEmptyRoles
2026-05-05T00:53:01.4256274Z === NAME  TestAccProject_updatedToEmptyRoles
2026-05-05T00:53:01.4256809Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-05-05T00:53:01.4257229Z         
2026-05-05T00:53:01.4257653Z         Error: error creating project: test-acc-tf-p-8374073263691845668
2026-05-05T00:53:01.4258026Z         
2026-05-05T00:53:01.4258329Z           with mongodbatlas_project.test,
2026-05-05T00:53:01.4259178Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T00:53:01.4259775Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-05T00:53:01.4260082Z         
2026-05-05T00:53:01.4260558Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:53:01.4261231Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:53:01.4261837Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:01.4262400Z --- FAIL: TestAccProject_updatedToEmptyRoles (65.45s)
```

- 2026-05-06 PASS 17 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 13 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 11 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 10 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 12 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 15 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 10 seconds
- 2026-05-04 PASS 11 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 13 seconds
