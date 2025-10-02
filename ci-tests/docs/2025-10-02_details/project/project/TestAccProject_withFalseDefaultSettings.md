# project/project/TestAccProject_withFalseDefaultSettings Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:39](#error-2025-09-07t0039140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd22b8704811492b56f1a/limits | qa | flaky_500 | 46.09s
[2025-09-14 01:13](#error-2025-09-14t0113040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60cb61411d835e95b5d82/limits | qa | flaky_500 | 35.02s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b0b9d444485797b607da/limits | qa | flaky_500 | 33.03s
[2025-09-21 00:45](#error-2025-09-21t0045180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf4749bd1cb41a3e7068f9/limits | qa | flaky_500 | 13.06s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 8 seconds
- 2025-09-05 PASS 6 seconds
- 2025-09-06 PASS 11 seconds
- 2025-09-07

### Error 2025-09-07T00:39:14+00:00
```
2025-09-07T00:39:14.4225089Z === RUN   TestAccProject_withFalseDefaultSettings
2025-09-07T00:39:14.4252687Z === CONT  TestAccProject_withFalseDefaultSettings
2025-09-07T00:39:14.4421380Z === NAME  TestAccProject_withFalseDefaultSettings
2025-09-07T00:39:14.4422039Z     resource_project_test.go:667: Step 4/4 error: Error running pre-apply plan: exit status 1
2025-09-07T00:39:14.4422453Z         
2025-09-07T00:39:14.4422827Z         Error: error when getting project properties after create
2025-09-07T00:39:14.4423144Z         
2025-09-07T00:39:14.4423442Z           with mongodbatlas_project.test,
2025-09-07T00:39:14.4424035Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:39:14.4424569Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:39:14.4424856Z         
2025-09-07T00:39:14.4425303Z         error getting project (68bcd22b8704811492b56f1a): error getting project's
2025-09-07T00:39:14.4425754Z         limits (68bcd22b8704811492b56f1a):
2025-09-07T00:39:14.4426317Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd22b8704811492b56f1a/limits
2025-09-07T00:39:14.4426972Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:39:14.4427544Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:39:14.4427926Z         BadRequestDetail: 
2025-09-07T00:39:14.4428603Z --- FAIL: TestAccProject_withFalseDefaultSettings (46.85s)
```

- 2025-09-08
  - PASS 12 seconds
  - PASS 43 seconds
  - PASS 8 seconds
- 2025-09-09 PASS 13 seconds
- 2025-09-10 PASS 10 seconds
- 2025-09-11 PASS 13 seconds
- 2025-09-12 PASS 16 seconds
- 2025-09-13 PASS 15 seconds
- 2025-09-14

### Error 2025-09-14T01:13:04+00:00
```
2025-09-14T01:13:04.9758176Z === RUN   TestAccProject_withFalseDefaultSettings
2025-09-14T01:13:04.9773378Z === CONT  TestAccProject_withFalseDefaultSettings
2025-09-14T01:13:04.9890989Z === NAME  TestAccProject_withFalseDefaultSettings
2025-09-14T01:13:04.9891535Z     resource_project_test.go:685: Step 1/4 error: Error running apply: exit status 1
2025-09-14T01:13:04.9891938Z         
2025-09-14T01:13:04.9892332Z         Error: error when getting project properties after create
2025-09-14T01:13:04.9892689Z         
2025-09-14T01:13:04.9892987Z           with mongodbatlas_project.test,
2025-09-14T01:13:04.9893602Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:04.9894179Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:04.9894672Z         
2025-09-14T01:13:04.9895160Z         error getting project (68c60cb61411d835e95b5d82): error getting project's
2025-09-14T01:13:04.9895637Z         limits (68c60cb61411d835e95b5d82):
2025-09-14T01:13:04.9896231Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60cb61411d835e95b5d82/limits
2025-09-14T01:13:04.9896939Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:04.9897556Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:04.9897970Z         BadRequestDetail: 
2025-09-14T01:13:04.9899327Z --- FAIL: TestAccProject_withFalseDefaultSettings (35.17s)
```

- 2025-09-15
  - PASS 9 seconds
  - FAIL 33 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6562830Z === RUN   TestAccProject_withFalseDefaultSettings
2025-09-15T07:06:19.6582770Z === CONT  TestAccProject_withFalseDefaultSettings
2025-09-15T07:06:19.6604141Z === NAME  TestAccProject_withFalseDefaultSettings
2025-09-15T07:06:19.6604697Z     resource_project_test.go:685: Step 1/4 error: Error running apply: exit status 1
2025-09-15T07:06:19.6605099Z         
2025-09-15T07:06:19.6605505Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6605841Z         
2025-09-15T07:06:19.6606143Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6606750Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6607298Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6607593Z         
2025-09-15T07:06:19.6608039Z         error getting project (68c7b0b9d444485797b607da): error getting project's
2025-09-15T07:06:19.6608498Z         limits (68c7b0b9d444485797b607da):
2025-09-15T07:06:19.6609070Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b0b9d444485797b607da/limits
2025-09-15T07:06:19.6609736Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6610311Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6610706Z         BadRequestDetail: 
2025-09-15T07:06:19.6611039Z --- FAIL: TestAccProject_withFalseDefaultSettings (33.35s)
```

- 2025-09-16 PASS 14 seconds
- 2025-09-17 PASS 12 seconds
- 2025-09-18 PASS 12 seconds
- 2025-09-19 PASS 12 seconds
- 2025-09-20 PASS 11 seconds
- 2025-09-21

### Error 2025-09-21T00:45:18+00:00
```
2025-09-21T00:45:18.6477952Z === RUN   TestAccProject_withFalseDefaultSettings
2025-09-21T00:45:18.6490091Z === CONT  TestAccProject_withFalseDefaultSettings
2025-09-21T00:45:18.6511175Z === NAME  TestAccProject_withFalseDefaultSettings
2025-09-21T00:45:18.6511770Z     resource_project_test.go:685: Step 1/4 error: Error running apply: exit status 1
2025-09-21T00:45:18.6512147Z         
2025-09-21T00:45:18.6512521Z         Error: error when getting project properties after create
2025-09-21T00:45:18.6512839Z         
2025-09-21T00:45:18.6513124Z           with mongodbatlas_project.test,
2025-09-21T00:45:18.6513710Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:45:18.6514343Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:45:18.6514630Z         
2025-09-21T00:45:18.6515218Z         error getting project (68cf4749bd1cb41a3e7068f9): error getting project's
2025-09-21T00:45:18.6515681Z         limits (68cf4749bd1cb41a3e7068f9):
2025-09-21T00:45:18.6516523Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf4749bd1cb41a3e7068f9/limits
2025-09-21T00:45:18.6517330Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:45:18.6517898Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:45:18.6518283Z         BadRequestDetail: 
2025-09-21T00:45:18.6518594Z --- FAIL: TestAccProject_withFalseDefaultSettings (13.62s)
```

- 2025-09-22 PASS 17 seconds
- 2025-09-23 PASS 12 seconds
- 2025-09-24 PASS 15 seconds
- 2025-09-25 PASS 13 seconds
- 2025-09-26 PASS 11 seconds
- 2025-09-27 PASS 12 seconds
- 2025-09-28 PASS 13 seconds
- 2025-09-29 PASS 8 seconds
- 2025-09-30
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 9 seconds
- 2025-10-01
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 9 seconds
  - PASS 12 seconds
- 2025-10-02 PASS 13 seconds