# project/project/TestAccProject_updatedToEmptyLimits Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL(x 5)
Success rate: 88.10%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:39](#error-2025-09-07t0039140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd22cdf5af52d2d4d8bb2/limits | qa | flaky_500 | 46.03s
[2025-09-08 09:56](#error-2025-09-08t0956230000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea3360cddbf4f6e4a578f/limits | qa | flaky_500 | 79.10s
[2025-09-14 01:13](#error-2025-09-14t0113040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60cb6d444485797b24073/limits | qa | flaky_500 | 35.07s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b0b9d444485797b607cb/limits | qa | flaky_500 | 34.09s
[2025-09-21 00:45](#error-2025-09-21t0045180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf4749bd1cb41a3e706911/limits | qa | flaky_500 | 36.02s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 11 seconds
- 2025-09-04 PASS 13 seconds
- 2025-09-05 PASS 13 seconds
- 2025-09-06 PASS 17 seconds
- 2025-09-07

### Error 2025-09-07T00:39:14+00:00
```
2025-09-07T00:39:14.4245879Z === RUN   TestAccProject_updatedToEmptyLimits
2025-09-07T00:39:14.4253759Z === CONT  TestAccProject_updatedToEmptyLimits
2025-09-07T00:39:14.4402492Z === NAME  TestAccProject_updatedToEmptyLimits
2025-09-07T00:39:14.4403082Z     resource_project_test.go:934: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-09-07T00:39:14.4403513Z         
2025-09-07T00:39:14.4403836Z         Error: error when getting project properties
2025-09-07T00:39:14.4404128Z         
2025-09-07T00:39:14.4404448Z           with data.mongodbatlas_project.test,
2025-09-07T00:39:14.4405020Z           on terraform_plugin_test.tf line 24, in data "mongodbatlas_project" "test":
2025-09-07T00:39:14.4405525Z           24: 		data "mongodbatlas_project" "test" {
2025-09-07T00:39:14.4405800Z         
2025-09-07T00:39:14.4406249Z         error getting project (68bcd22cdf5af52d2d4d8bb2): error getting project's
2025-09-07T00:39:14.4406734Z         limits (68bcd22cdf5af52d2d4d8bb2):
2025-09-07T00:39:14.4407315Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd22cdf5af52d2d4d8bb2/limits
2025-09-07T00:39:14.4407973Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:39:14.4408544Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:39:14.4408924Z         BadRequestDetail: 
2025-09-07T00:39:14.4420980Z    test_step_number=4 test_working_directory=/tmp/plugintest3648050121
2025-09-07T00:39:14.4428223Z --- FAIL: TestAccProject_updatedToEmptyLimits (46.26s)
```

- 2025-09-08
  - PASS 13 seconds
  - FAIL a minute

### Error 2025-09-08T09:56:23+00:00
```
2025-09-08T09:56:23.5761741Z === RUN   TestAccProject_updatedToEmptyLimits
2025-09-08T09:56:23.5767363Z === CONT  TestAccProject_updatedToEmptyLimits
2025-09-08T09:56:23.5865096Z === NAME  TestAccProject_updatedToEmptyLimits
2025-09-08T09:56:23.5865839Z     resource_project_test.go:934: Step 2/2 error: Error running apply: exit status 1
2025-09-08T09:56:23.5866251Z         
2025-09-08T09:56:23.5866695Z         Error: error when getting project properties
2025-09-08T09:56:23.5867122Z         
2025-09-08T09:56:23.5867646Z           with data.mongodbatlas_project.test,
2025-09-08T09:56:23.5868361Z           on terraform_plugin_test.tf line 19, in data "mongodbatlas_project" "test":
2025-09-08T09:56:23.5868880Z           19: 		data "mongodbatlas_project" "test" {
2025-09-08T09:56:23.5869267Z         
2025-09-08T09:56:23.5869715Z         error getting project (68bea3360cddbf4f6e4a578f): error getting project's
2025-09-08T09:56:23.5870173Z         limits (68bea3360cddbf4f6e4a578f):
2025-09-08T09:56:23.5870739Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea3360cddbf4f6e4a578f/limits
2025-09-08T09:56:23.5871397Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:56:23.5871963Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:56:23.5872357Z         BadRequestDetail: 
2025-09-08T09:56:23.5872667Z --- FAIL: TestAccProject_updatedToEmptyLimits (79.98s)
```

  - PASS 13 seconds
- 2025-09-09 PASS 21 seconds
- 2025-09-10 PASS 16 seconds
- 2025-09-11 PASS 21 seconds
- 2025-09-12 PASS 27 seconds
- 2025-09-13 PASS 20 seconds
- 2025-09-14

### Error 2025-09-14T01:13:04+00:00
```
2025-09-14T01:13:04.9763807Z === RUN   TestAccProject_updatedToEmptyLimits
2025-09-14T01:13:04.9774716Z === CONT  TestAccProject_updatedToEmptyLimits
2025-09-14T01:13:04.9978490Z === NAME  TestAccProject_updatedToEmptyLimits
2025-09-14T01:13:04.9979201Z     resource_project_test.go:952: Step 1/2 error: Error running apply: exit status 1
2025-09-14T01:13:04.9979628Z         
2025-09-14T01:13:04.9980027Z         Error: error when getting project properties after create
2025-09-14T01:13:04.9980370Z         
2025-09-14T01:13:04.9980675Z           with mongodbatlas_project.test,
2025-09-14T01:13:04.9981296Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:04.9981872Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:04.9982180Z         
2025-09-14T01:13:04.9982648Z         error getting project (68c60cb6d444485797b24073): error getting project's
2025-09-14T01:13:04.9983123Z         limits (68c60cb6d444485797b24073):
2025-09-14T01:13:04.9983719Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60cb6d444485797b24073/limits
2025-09-14T01:13:04.9984720Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:04.9985377Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:04.9985896Z         BadRequestDetail: 
2025-09-14T01:13:04.9987174Z --- FAIL: TestAccProject_updatedToEmptyLimits (35.68s)
```

- 2025-09-15
  - PASS 14 seconds
  - FAIL 34 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6566059Z === RUN   TestAccProject_updatedToEmptyLimits
2025-09-15T07:06:19.6584115Z === CONT  TestAccProject_updatedToEmptyLimits
2025-09-15T07:06:19.6723266Z === NAME  TestAccProject_updatedToEmptyLimits
2025-09-15T07:06:19.6723784Z     resource_project_test.go:952: Step 1/2 error: Error running apply: exit status 1
2025-09-15T07:06:19.6724174Z         
2025-09-15T07:06:19.6724558Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6724892Z         
2025-09-15T07:06:19.6725197Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6725789Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6726333Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6726629Z         
2025-09-15T07:06:19.6727075Z         error getting project (68c7b0b9d444485797b607cb): error getting project's
2025-09-15T07:06:19.6727531Z         limits (68c7b0b9d444485797b607cb):
2025-09-15T07:06:19.6728113Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b0b9d444485797b607cb/limits
2025-09-15T07:06:19.6728774Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6729365Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6729763Z         BadRequestDetail: 
2025-09-15T07:06:19.6730479Z --- FAIL: TestAccProject_updatedToEmptyLimits (34.86s)
```

- 2025-09-16 PASS 24 seconds
- 2025-09-17 PASS 17 seconds
- 2025-09-18 PASS 21 seconds
- 2025-09-19 PASS 20 seconds
- 2025-09-20 PASS 17 seconds
- 2025-09-21

### Error 2025-09-21T00:45:18+00:00
```
2025-09-21T00:45:18.6481584Z === RUN   TestAccProject_updatedToEmptyLimits
2025-09-21T00:45:18.6488584Z === CONT  TestAccProject_updatedToEmptyLimits
2025-09-21T00:45:18.6641103Z === NAME  TestAccProject_updatedToEmptyLimits
2025-09-21T00:45:18.6641617Z     resource_project_test.go:952: Step 1/2 error: Error running apply: exit status 1
2025-09-21T00:45:18.6641990Z         
2025-09-21T00:45:18.6642357Z         Error: error when getting project properties after create
2025-09-21T00:45:18.6642674Z         
2025-09-21T00:45:18.6642957Z           with mongodbatlas_project.test,
2025-09-21T00:45:18.6643537Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:45:18.6644067Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:45:18.6644349Z         
2025-09-21T00:45:18.6644779Z         error getting project (68cf4749bd1cb41a3e706911): error getting project's
2025-09-21T00:45:18.6645220Z         limits (68cf4749bd1cb41a3e706911):
2025-09-21T00:45:18.6645976Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf4749bd1cb41a3e706911/limits
2025-09-21T00:45:18.6646639Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:45:18.6647200Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:45:18.6647576Z         BadRequestDetail: 
2025-09-21T00:45:18.6647868Z --- FAIL: TestAccProject_updatedToEmptyLimits (36.20s)
```

- 2025-09-22 PASS 23 seconds
- 2025-09-23 PASS 16 seconds
- 2025-09-24 PASS 23 seconds
- 2025-09-25 PASS 23 seconds
- 2025-09-26 PASS 15 seconds
- 2025-09-27 PASS 21 seconds
- 2025-09-28 PASS 21 seconds
- 2025-09-29 PASS 13 seconds
- 2025-09-30
  - PASS 17 seconds
  - PASS 21 seconds
  - PASS 13 seconds
- 2025-10-01
  - PASS 15 seconds
  - PASS 14 seconds
  - PASS 16 seconds
  - PASS 12 seconds
  - PASS 15 seconds
  - PASS 23 seconds
  - PASS 13 seconds
  - PASS 20 seconds
- 2025-10-02 PASS 21 seconds