# project/project/TestAccProject_withUpdatedLimits Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL(x 5)
Success rate: 88.10%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:39](#error-2025-09-07t0039140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd22b8704811492b56f19/limits | qa | flaky_500 | 44.05s
[2025-09-08 09:56](#error-2025-09-08t0956230000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea336341d8a498776d119/limits | qa | flaky_500 | 107.03s
[2025-09-14 01:13](#error-2025-09-14t0113040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60cb61411d835e95b5d84/limits | qa | flaky_500 | 35.05s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b0b9d444485797b60816/limits | qa | flaky_500 | 34.09s
[2025-09-21 00:45](#error-2025-09-21t0045180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf4749bd1cb41a3e7068f7/limits | qa | flaky_500 | 36.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 16 seconds
- 2025-09-04 PASS 17 seconds
- 2025-09-05 PASS 19 seconds
- 2025-09-06 PASS 26 seconds
- 2025-09-07

### Error 2025-09-07T00:39:14+00:00
```
2025-09-07T00:39:14.4245232Z === RUN   TestAccProject_withUpdatedLimits
2025-09-07T00:39:14.4252372Z === CONT  TestAccProject_withUpdatedLimits
2025-09-07T00:39:14.4382742Z === NAME  TestAccProject_withUpdatedLimits
2025-09-07T00:39:14.4383235Z     resource_project_test.go:849: Step 1/3 error: Error running apply: exit status 1
2025-09-07T00:39:14.4383605Z         
2025-09-07T00:39:14.4383921Z         Error: error when getting project properties
2025-09-07T00:39:14.4384215Z         
2025-09-07T00:39:14.4384524Z           with data.mongodbatlas_project.test,
2025-09-07T00:39:14.4385094Z           on terraform_plugin_test.tf line 29, in data "mongodbatlas_project" "test":
2025-09-07T00:39:14.4385608Z           29: 		data "mongodbatlas_project" "test" {
2025-09-07T00:39:14.4385903Z         
2025-09-07T00:39:14.4386351Z         error getting project (68bcd22b8704811492b56f19): error getting project's
2025-09-07T00:39:14.4386798Z         limits (68bcd22b8704811492b56f19):
2025-09-07T00:39:14.4387369Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd22b8704811492b56f19/limits
2025-09-07T00:39:14.4388036Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:39:14.4388605Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:39:14.4388992Z         BadRequestDetail: 
2025-09-07T00:39:14.4389729Z --- FAIL: TestAccProject_withUpdatedLimits (44.46s)
```

- 2025-09-08
  - PASS 18 seconds
  - FAIL a minute

### Error 2025-09-08T09:56:23+00:00
```
2025-09-08T09:56:23.5761159Z === RUN   TestAccProject_withUpdatedLimits
2025-09-08T09:56:23.5767674Z === CONT  TestAccProject_withUpdatedLimits
2025-09-08T09:56:23.5885367Z === NAME  TestAccProject_withUpdatedLimits
2025-09-08T09:56:23.5886184Z     resource_project_test.go:849: Step 3/3 error: Error running post-apply refresh plan: exit status 1
2025-09-08T09:56:23.5886644Z         
2025-09-08T09:56:23.5886970Z         Error: error when getting project properties
2025-09-08T09:56:23.5887268Z         
2025-09-08T09:56:23.5887580Z           with data.mongodbatlas_project.test,
2025-09-08T09:56:23.5888151Z           on terraform_plugin_test.tf line 34, in data "mongodbatlas_project" "test":
2025-09-08T09:56:23.5888658Z           34: 		data "mongodbatlas_project" "test" {
2025-09-08T09:56:23.5888939Z         
2025-09-08T09:56:23.5889549Z         error getting project (68bea336341d8a498776d119): error getting project's
2025-09-08T09:56:23.5890316Z         limits (68bea336341d8a498776d119):
2025-09-08T09:56:23.5891265Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea336341d8a498776d119/limits
2025-09-08T09:56:23.5891948Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:56:23.5892522Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:56:23.5892909Z         BadRequestDetail: 
2025-09-08T09:56:23.5893212Z --- FAIL: TestAccProject_withUpdatedLimits (107.26s)
```

  - PASS 19 seconds
- 2025-09-09 PASS 31 seconds
- 2025-09-10 PASS 19 seconds
- 2025-09-11 PASS 29 seconds
- 2025-09-12 PASS 42 seconds
- 2025-09-13 PASS 28 seconds
- 2025-09-14

### Error 2025-09-14T01:13:04+00:00
```
2025-09-14T01:13:04.9762697Z === RUN   TestAccProject_withUpdatedLimits
2025-09-14T01:13:04.9778287Z === CONT  TestAccProject_withUpdatedLimits
2025-09-14T01:13:04.9946627Z === NAME  TestAccProject_withUpdatedLimits
2025-09-14T01:13:04.9947255Z     resource_project_test.go:867: Step 1/3 error: Error running apply: exit status 1
2025-09-14T01:13:04.9947664Z         
2025-09-14T01:13:04.9957005Z         Error: error when getting project properties after create
2025-09-14T01:13:04.9957621Z         
2025-09-14T01:13:04.9957960Z           with mongodbatlas_project.test,
2025-09-14T01:13:04.9958989Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:04.9959677Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:04.9960228Z         
2025-09-14T01:13:04.9960788Z         error getting project (68c60cb61411d835e95b5d84): error getting project's
2025-09-14T01:13:04.9961271Z         limits (68c60cb61411d835e95b5d84):
2025-09-14T01:13:04.9961974Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60cb61411d835e95b5d84/limits
2025-09-14T01:13:04.9962768Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:04.9963483Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:04.9963897Z         BadRequestDetail: 
2025-09-14T01:13:04.9964304Z --- FAIL: TestAccProject_withUpdatedLimits (35.54s)
```

- 2025-09-15
  - PASS 18 seconds
  - FAIL 34 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6565431Z === RUN   TestAccProject_withUpdatedLimits
2025-09-15T07:06:19.6585174Z === CONT  TestAccProject_withUpdatedLimits
2025-09-15T07:06:19.6703740Z === NAME  TestAccProject_withUpdatedLimits
2025-09-15T07:06:19.6704248Z     resource_project_test.go:867: Step 1/3 error: Error running apply: exit status 1
2025-09-15T07:06:19.6704633Z         
2025-09-15T07:06:19.6705019Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6705351Z         
2025-09-15T07:06:19.6705657Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6706247Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6706788Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6707084Z         
2025-09-15T07:06:19.6707545Z         error getting project (68c7b0b9d444485797b60816): error getting project's
2025-09-15T07:06:19.6707999Z         limits (68c7b0b9d444485797b60816):
2025-09-15T07:06:19.6708568Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b0b9d444485797b60816/limits
2025-09-15T07:06:19.6709228Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6709810Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6710207Z         BadRequestDetail: 
2025-09-15T07:06:19.6722610Z    test_terraform_path=/home/runner/work/_temp/ff231b8d-1d5b-4e26-90c6-7654b29c907d/terraform test_name=TestAccProject_updatedToEmptyLimits
2025-09-15T07:06:19.6730073Z --- FAIL: TestAccProject_withUpdatedLimits (34.85s)
```

- 2025-09-16 PASS 33 seconds
- 2025-09-17 PASS 23 seconds
- 2025-09-18 PASS 30 seconds
- 2025-09-19 PASS 26 seconds
- 2025-09-20 PASS 25 seconds
- 2025-09-21

### Error 2025-09-21T00:45:18+00:00
```
2025-09-21T00:45:18.6480849Z === RUN   TestAccProject_withUpdatedLimits
2025-09-21T00:45:18.6489018Z === CONT  TestAccProject_withUpdatedLimits
2025-09-21T00:45:18.6660720Z === NAME  TestAccProject_withUpdatedLimits
2025-09-21T00:45:18.6661213Z     resource_project_test.go:867: Step 1/3 error: Error running apply: exit status 1
2025-09-21T00:45:18.6661590Z         
2025-09-21T00:45:18.6661960Z         Error: error when getting project properties after create
2025-09-21T00:45:18.6662282Z         
2025-09-21T00:45:18.6662567Z           with mongodbatlas_project.test,
2025-09-21T00:45:18.6663157Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:45:18.6663690Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:45:18.6663974Z         
2025-09-21T00:45:18.6664407Z         error getting project (68cf4749bd1cb41a3e7068f7): error getting project's
2025-09-21T00:45:18.6664856Z         limits (68cf4749bd1cb41a3e7068f7):
2025-09-21T00:45:18.6665460Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf4749bd1cb41a3e7068f7/limits
2025-09-21T00:45:18.6666362Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:45:18.6666934Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:45:18.6667315Z         BadRequestDetail: 
2025-09-21T00:45:18.6667609Z --- FAIL: TestAccProject_withUpdatedLimits (36.48s)
```

- 2025-09-22 PASS 34 seconds
- 2025-09-23 PASS 25 seconds
- 2025-09-24 PASS 32 seconds
- 2025-09-25 PASS 34 seconds
- 2025-09-26 PASS 21 seconds
- 2025-09-27 PASS 28 seconds
- 2025-09-28 PASS 30 seconds
- 2025-09-29 PASS 17 seconds
- 2025-09-30
  - PASS 23 seconds
  - PASS 30 seconds
  - PASS 16 seconds
- 2025-10-01
  - PASS 22 seconds
  - PASS 22 seconds
  - PASS 23 seconds
  - PASS 17 seconds
  - PASS 22 seconds
  - PASS 34 seconds
  - PASS 17 seconds
  - PASS 30 seconds
- 2025-10-02 PASS 31 seconds