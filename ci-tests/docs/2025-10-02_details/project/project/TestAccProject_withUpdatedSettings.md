# project/project/TestAccProject_withUpdatedSettings Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL(x 5)
Success rate: 88.10%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:39](#error-2025-09-07t0039140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd22cdf5af52d2d4d8bb3/limits | qa | flaky_500 | 33.06s
[2025-09-08 09:56](#error-2025-09-08t0956230000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea3360cddbf4f6e4a5732/limits | qa | flaky_500 | 42.01s
[2025-09-14 01:13](#error-2025-09-14t0113040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60cb6d444485797b24043/limits | qa | flaky_500 | 34.05s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b0b9fe60767b7f9b3751/limits | qa | flaky_500 | 33.06s
[2025-09-21 00:45](#error-2025-09-21t0045180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf4749bd1cb41a3e7068f8/limits | qa | flaky_500 | 29.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 11 seconds
- 2025-09-04 PASS 12 seconds
- 2025-09-05 PASS 12 seconds
- 2025-09-06 PASS 15 seconds
- 2025-09-07

### Error 2025-09-07T00:39:14+00:00
```
2025-09-07T00:39:14.4225758Z === RUN   TestAccProject_withUpdatedSettings
2025-09-07T00:39:14.4250048Z === CONT  TestAccProject_withUpdatedSettings
2025-09-07T00:39:14.4275801Z === NAME  TestAccProject_withUpdatedSettings
2025-09-07T00:39:14.4276325Z     resource_project_test.go:703: Step 1/3 error: Error running apply: exit status 1
2025-09-07T00:39:14.4276708Z         
2025-09-07T00:39:14.4277090Z         Error: error when getting project properties after create
2025-09-07T00:39:14.4277420Z         
2025-09-07T00:39:14.4277724Z           with mongodbatlas_project.test,
2025-09-07T00:39:14.4278316Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:39:14.4278857Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:39:14.4279142Z         
2025-09-07T00:39:14.4279590Z         error getting project (68bcd22cdf5af52d2d4d8bb3): error getting project's
2025-09-07T00:39:14.4280182Z         limits (68bcd22cdf5af52d2d4d8bb3):
2025-09-07T00:39:14.4280761Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd22cdf5af52d2d4d8bb3/limits
2025-09-07T00:39:14.4281430Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:39:14.4282253Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:39:14.4282645Z         BadRequestDetail: 
2025-09-07T00:39:14.4282944Z --- FAIL: TestAccProject_withUpdatedSettings (33.61s)
```

- 2025-09-08
  - PASS 11 seconds
  - FAIL 42 seconds

### Error 2025-09-08T09:56:23+00:00
```
2025-09-08T09:56:23.5759397Z === RUN   TestAccProject_withUpdatedSettings
2025-09-08T09:56:23.5769305Z === CONT  TestAccProject_withUpdatedSettings
2025-09-08T09:56:23.5818565Z === NAME  TestAccProject_withUpdatedSettings
2025-09-08T09:56:23.5819100Z     resource_project_test.go:703: Step 2/3 error: Error running apply: exit status 1
2025-09-08T09:56:23.5819496Z         
2025-09-08T09:56:23.5819869Z         Error: error when getting project properties after create
2025-09-08T09:56:23.5820203Z         
2025-09-08T09:56:23.5820500Z           with mongodbatlas_project.test,
2025-09-08T09:56:23.5821086Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T09:56:23.5821631Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:56:23.5821926Z         
2025-09-08T09:56:23.5822380Z         error getting project (68bea3360cddbf4f6e4a5732): error getting project's
2025-09-08T09:56:23.5822846Z         limits (68bea3360cddbf4f6e4a5732):
2025-09-08T09:56:23.5823408Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea3360cddbf4f6e4a5732/limits
2025-09-08T09:56:23.5824063Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:56:23.5824643Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:56:23.5825032Z         BadRequestDetail: 
2025-09-08T09:56:23.5825335Z --- FAIL: TestAccProject_withUpdatedSettings (42.06s)
```

  - PASS 12 seconds
- 2025-09-09 PASS 18 seconds
- 2025-09-10 PASS 13 seconds
- 2025-09-11 PASS 18 seconds
- 2025-09-12 PASS 23 seconds
- 2025-09-13 PASS 17 seconds
- 2025-09-14

### Error 2025-09-14T01:13:04+00:00
```
2025-09-14T01:13:04.9759388Z === RUN   TestAccProject_withUpdatedSettings
2025-09-14T01:13:04.9775880Z === CONT  TestAccProject_withUpdatedSettings
2025-09-14T01:13:04.9813921Z === NAME  TestAccProject_withUpdatedSettings
2025-09-14T01:13:04.9815019Z     resource_project_test.go:721: Step 1/3 error: Error running apply: exit status 1
2025-09-14T01:13:04.9815739Z         
2025-09-14T01:13:04.9816430Z         Error: error when getting project properties after create
2025-09-14T01:13:04.9817019Z         
2025-09-14T01:13:04.9817536Z           with mongodbatlas_project.test,
2025-09-14T01:13:04.9818638Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:04.9819633Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:04.9820155Z         
2025-09-14T01:13:04.9820966Z         error getting project (68c60cb6d444485797b24043): error getting project's
2025-09-14T01:13:04.9821803Z         limits (68c60cb6d444485797b24043):
2025-09-14T01:13:04.9822857Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60cb6d444485797b24043/limits
2025-09-14T01:13:04.9824094Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:04.9825352Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:04.9826076Z         BadRequestDetail: 
2025-09-14T01:13:04.9826597Z --- FAIL: TestAccProject_withUpdatedSettings (34.53s)
```

- 2025-09-15
  - PASS 13 seconds
  - FAIL 33 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6563512Z === RUN   TestAccProject_withUpdatedSettings
2025-09-15T07:06:19.6582243Z === CONT  TestAccProject_withUpdatedSettings
2025-09-15T07:06:19.6623808Z === NAME  TestAccProject_withUpdatedSettings
2025-09-15T07:06:19.6624566Z     resource_project_test.go:721: Step 1/3 error: Error running apply: exit status 1
2025-09-15T07:06:19.6624966Z         
2025-09-15T07:06:19.6625350Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6625685Z         
2025-09-15T07:06:19.6625986Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6626692Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6627239Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6627530Z         
2025-09-15T07:06:19.6627975Z         error getting project (68c7b0b9fe60767b7f9b3751): error getting project's
2025-09-15T07:06:19.6628433Z         limits (68c7b0b9fe60767b7f9b3751):
2025-09-15T07:06:19.6629013Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b0b9fe60767b7f9b3751/limits
2025-09-15T07:06:19.6629671Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6630252Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6630643Z         BadRequestDetail: 
2025-09-15T07:06:19.6630955Z --- FAIL: TestAccProject_withUpdatedSettings (33.64s)
```

- 2025-09-16 PASS 18 seconds
- 2025-09-17 PASS 14 seconds
- 2025-09-18 PASS 17 seconds
- 2025-09-19 PASS 15 seconds
- 2025-09-20 PASS 15 seconds
- 2025-09-21

### Error 2025-09-21T00:45:18+00:00
```
2025-09-21T00:45:18.6478692Z === RUN   TestAccProject_withUpdatedSettings
2025-09-21T00:45:18.6487987Z === CONT  TestAccProject_withUpdatedSettings
2025-09-21T00:45:18.6531635Z === NAME  TestAccProject_withUpdatedSettings
2025-09-21T00:45:18.6532140Z     resource_project_test.go:721: Step 1/3 error: Error running apply: exit status 1
2025-09-21T00:45:18.6532513Z         
2025-09-21T00:45:18.6532887Z         Error: error when getting project properties after create
2025-09-21T00:45:18.6533206Z         
2025-09-21T00:45:18.6533493Z           with mongodbatlas_project.test,
2025-09-21T00:45:18.6534155Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:45:18.6534696Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:45:18.6534984Z         
2025-09-21T00:45:18.6535418Z         error getting project (68cf4749bd1cb41a3e7068f8): error getting project's
2025-09-21T00:45:18.6535988Z         limits (68cf4749bd1cb41a3e7068f8):
2025-09-21T00:45:18.6536557Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf4749bd1cb41a3e7068f8/limits
2025-09-21T00:45:18.6537206Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:45:18.6537766Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:45:18.6538140Z         BadRequestDetail: 
2025-09-21T00:45:18.6538577Z --- FAIL: TestAccProject_withUpdatedSettings (29.39s)
```

- 2025-09-22 PASS 18 seconds
- 2025-09-23 PASS 14 seconds
- 2025-09-24 PASS 19 seconds
- 2025-09-25 PASS 19 seconds
- 2025-09-26 PASS 14 seconds
- 2025-09-27 PASS 16 seconds
- 2025-09-28 PASS 18 seconds
- 2025-09-29 PASS 12 seconds
- 2025-09-30
  - PASS 14 seconds
  - PASS 17 seconds
  - PASS 11 seconds
- 2025-10-01
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 15 seconds
  - PASS 10 seconds
  - PASS 13 seconds
  - PASS 18 seconds
  - PASS 11 seconds
  - PASS 17 seconds
- 2025-10-02 PASS 17 seconds