# project/project/TestAccProject_withInvalidLimitNameOnUpdate Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:39](#error-2025-09-07t0039140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd22bdf5af52d2d4d8baf/limits | qa | flaky_500 | 44.04s
[2025-09-14 01:13](#error-2025-09-14t0113040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60cb6d444485797b24042/limits | qa | flaky_500 | 35.01s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b0b9d444485797b60810/limits | qa | flaky_500 | 33.08s
[2025-09-21 00:45](#error-2025-09-21t0045180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf47495ccc8c441718c6d5/limits | qa | flaky_500 | 34.06s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 9 seconds
- 2025-09-05 PASS 10 seconds
- 2025-09-06 PASS 13 seconds
- 2025-09-07

### Error 2025-09-07T00:39:14+00:00
```
2025-09-07T00:39:14.4247168Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2025-09-07T00:39:14.4251267Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2025-09-07T00:39:14.4363935Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2025-09-07T00:39:14.4364461Z     resource_project_test.go:992: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:39:14.4364847Z         
2025-09-07T00:39:14.4365171Z         Error: error when getting project properties
2025-09-07T00:39:14.4365456Z         
2025-09-07T00:39:14.4365766Z           with data.mongodbatlas_project.test,
2025-09-07T00:39:14.4366342Z           on terraform_plugin_test.tf line 19, in data "mongodbatlas_project" "test":
2025-09-07T00:39:14.4366848Z           19: 		data "mongodbatlas_project" "test" {
2025-09-07T00:39:14.4367123Z         
2025-09-07T00:39:14.4367569Z         error getting project (68bcd22bdf5af52d2d4d8baf): error getting project's
2025-09-07T00:39:14.4368023Z         limits (68bcd22bdf5af52d2d4d8baf):
2025-09-07T00:39:14.4368592Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd22bdf5af52d2d4d8baf/limits
2025-09-07T00:39:14.4369367Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:39:14.4369941Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:39:14.4370321Z         BadRequestDetail: 
2025-09-07T00:39:14.4382521Z   
2025-09-07T00:39:14.4389329Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (44.41s)
```

- 2025-09-08
  - PASS 10 seconds
  - PASS 45 seconds
  - PASS 10 seconds
- 2025-09-09 PASS 15 seconds
- 2025-09-10 PASS 11 seconds
- 2025-09-11 PASS 13 seconds
- 2025-09-12 PASS 17 seconds
- 2025-09-13 PASS 14 seconds
- 2025-09-14

### Error 2025-09-14T01:13:04+00:00
```
2025-09-14T01:13:04.9766346Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2025-09-14T01:13:04.9777228Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2025-09-14T01:13:04.9869781Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2025-09-14T01:13:04.9870354Z     resource_project_test.go:1010: Step 1/2 error: Error running apply: exit status 1
2025-09-14T01:13:04.9870771Z         
2025-09-14T01:13:04.9871160Z         Error: error when getting project properties after create
2025-09-14T01:13:04.9871500Z         
2025-09-14T01:13:04.9871800Z           with mongodbatlas_project.test,
2025-09-14T01:13:04.9872414Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:04.9872996Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:04.9873303Z         
2025-09-14T01:13:04.9874078Z         error getting project (68c60cb6d444485797b24042): error getting project's
2025-09-14T01:13:04.9874683Z         limits (68c60cb6d444485797b24042):
2025-09-14T01:13:04.9875413Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60cb6d444485797b24042/limits
2025-09-14T01:13:04.9876117Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:04.9876731Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:04.9877156Z         BadRequestDetail: 
2025-09-14T01:13:04.9890737Z   
2025-09-14T01:13:04.9898538Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (35.12s)
```

- 2025-09-15
  - PASS 8 seconds
  - FAIL 33 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6567469Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2025-09-15T07:06:19.6583768Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2025-09-15T07:06:19.6643947Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2025-09-15T07:06:19.6644494Z     resource_project_test.go:1010: Step 1/2 error: Error running apply: exit status 1
2025-09-15T07:06:19.6644882Z         
2025-09-15T07:06:19.6645263Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6645592Z         
2025-09-15T07:06:19.6645896Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6646486Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6647027Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6647318Z         
2025-09-15T07:06:19.6647905Z         error getting project (68c7b0b9d444485797b60810): error getting project's
2025-09-15T07:06:19.6648366Z         limits (68c7b0b9d444485797b60810):
2025-09-15T07:06:19.6648934Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b0b9d444485797b60810/limits
2025-09-15T07:06:19.6649778Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6650358Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6650750Z         BadRequestDetail: 
2025-09-15T07:06:19.6651086Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (33.81s)
```

- 2025-09-16 PASS 15 seconds
- 2025-09-17 PASS 10 seconds
- 2025-09-18 PASS 14 seconds
- 2025-09-19 PASS 13 seconds
- 2025-09-20 PASS 12 seconds
- 2025-09-21

### Error 2025-09-21T00:45:18+00:00
```
2025-09-21T00:45:18.6483098Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2025-09-21T00:45:18.6490720Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2025-09-21T00:45:18.6551446Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2025-09-21T00:45:18.6551976Z     resource_project_test.go:1010: Step 1/2 error: Error running apply: exit status 1
2025-09-21T00:45:18.6552352Z         
2025-09-21T00:45:18.6552724Z         Error: error when getting project properties after create
2025-09-21T00:45:18.6553080Z         
2025-09-21T00:45:18.6553376Z           with mongodbatlas_project.test,
2025-09-21T00:45:18.6554116Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:45:18.6554674Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:45:18.6554959Z         
2025-09-21T00:45:18.6555415Z         error getting project (68cf47495ccc8c441718c6d5): error getting project's
2025-09-21T00:45:18.6556153Z         limits (68cf47495ccc8c441718c6d5):
2025-09-21T00:45:18.6556726Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf47495ccc8c441718c6d5/limits
2025-09-21T00:45:18.6557396Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:45:18.6557968Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:45:18.6558353Z         BadRequestDetail: 
2025-09-21T00:45:18.6558680Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (34.61s)
```

- 2025-09-22 PASS 15 seconds
- 2025-09-23 PASS 13 seconds
- 2025-09-24 PASS 15 seconds
- 2025-09-25 PASS 14 seconds
- 2025-09-26 PASS 10 seconds
- 2025-09-27 PASS 13 seconds
- 2025-09-28 PASS 13 seconds
- 2025-09-29 PASS 9 seconds
- 2025-09-30
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 10 seconds
- 2025-10-01
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 15 seconds
  - PASS 9 seconds
  - PASS 14 seconds
- 2025-10-02 PASS 14 seconds