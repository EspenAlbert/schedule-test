# project/project/TestAccProject_slowOperationReadOnly Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:39](#error-2025-09-07t0039140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd22cdf5af52d2d4d8bb1/limits | qa | flaky_500 | 34.02s
[2025-09-14 01:13](#error-2025-09-14t0113040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60cb6d444485797b24071/limits | qa | flaky_500 | 34.08s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b0b9d444485797b6080e/limits | qa | flaky_500 | 33.10s
[2025-09-21 00:45](#error-2025-09-21t0045180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf47495ccc8c441718c6d4/limits | qa | flaky_500 | 37.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 12 seconds
- 2025-09-05 PASS 13 seconds
- 2025-09-06 PASS 16 seconds
- 2025-09-07

### Error 2025-09-07T00:39:14+00:00
```
2025-09-07T00:39:14.4248428Z === RUN   TestAccProject_slowOperationReadOnly
2025-09-07T00:39:14.4250362Z === CONT  TestAccProject_slowOperationReadOnly
2025-09-07T00:39:14.4295707Z === NAME  TestAccProject_slowOperationReadOnly
2025-09-07T00:39:14.4296226Z     resource_project_test.go:1099: Step 1/4 error: Error running apply: exit status 1
2025-09-07T00:39:14.4296609Z         
2025-09-07T00:39:14.4296983Z         Error: error when getting project properties after create
2025-09-07T00:39:14.4297308Z         
2025-09-07T00:39:14.4297604Z           with mongodbatlas_project.test,
2025-09-07T00:39:14.4298191Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:39:14.4298721Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:39:14.4299012Z         
2025-09-07T00:39:14.4299451Z         error getting project (68bcd22cdf5af52d2d4d8bb1): error getting project's
2025-09-07T00:39:14.4299902Z         limits (68bcd22cdf5af52d2d4d8bb1):
2025-09-07T00:39:14.4300466Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd22cdf5af52d2d4d8bb1/limits
2025-09-07T00:39:14.4301134Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:39:14.4301891Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:39:14.4302281Z         BadRequestDetail: 
2025-09-07T00:39:14.4302600Z --- FAIL: TestAccProject_slowOperationReadOnly (34.16s)
```

- 2025-09-08
  - PASS 11 seconds
  - PASS 45 seconds
  - PASS 12 seconds
- 2025-09-09 PASS 17 seconds
- 2025-09-10 PASS 12 seconds
- 2025-09-11 PASS 18 seconds
- 2025-09-12 PASS 20 seconds
- 2025-09-13 PASS 16 seconds
- 2025-09-14

### Error 2025-09-14T01:13:04+00:00
```
2025-09-14T01:13:04.9769971Z === RUN   TestAccProject_slowOperationReadOnly
2025-09-14T01:13:04.9775311Z === CONT  TestAccProject_slowOperationReadOnly
2025-09-14T01:13:04.9848345Z === NAME  TestAccProject_slowOperationReadOnly
2025-09-14T01:13:04.9849154Z     resource_project_test.go:1118: Step 1/4 error: Error running apply: exit status 1
2025-09-14T01:13:04.9849579Z         
2025-09-14T01:13:04.9849979Z         Error: error when getting project properties after create
2025-09-14T01:13:04.9850447Z         
2025-09-14T01:13:04.9850748Z           with mongodbatlas_project.test,
2025-09-14T01:13:04.9851366Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:04.9851935Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:04.9852239Z         
2025-09-14T01:13:04.9852691Z         error getting project (68c60cb6d444485797b24071): error getting project's
2025-09-14T01:13:04.9853163Z         limits (68c60cb6d444485797b24071):
2025-09-14T01:13:04.9853758Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60cb6d444485797b24071/limits
2025-09-14T01:13:04.9854651Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:04.9855341Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:04.9855752Z         BadRequestDetail: 
2025-09-14T01:13:04.9856078Z --- FAIL: TestAccProject_slowOperationReadOnly (34.76s)
```

- 2025-09-15
  - PASS 12 seconds
  - FAIL 33 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6570308Z === RUN   TestAccProject_slowOperationReadOnly
2025-09-15T07:06:19.6585507Z === CONT  TestAccProject_slowOperationReadOnly
2025-09-15T07:06:19.6664091Z === NAME  TestAccProject_slowOperationReadOnly
2025-09-15T07:06:19.6664609Z     resource_project_test.go:1118: Step 1/4 error: Error running apply: exit status 1
2025-09-15T07:06:19.6665011Z         
2025-09-15T07:06:19.6665393Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6665732Z         
2025-09-15T07:06:19.6666033Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6666630Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6667180Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6667475Z         
2025-09-15T07:06:19.6667920Z         error getting project (68c7b0b9d444485797b6080e): error getting project's
2025-09-15T07:06:19.6668380Z         limits (68c7b0b9d444485797b6080e):
2025-09-15T07:06:19.6668950Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b0b9d444485797b6080e/limits
2025-09-15T07:06:19.6669613Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6670186Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6670902Z         BadRequestDetail: 
2025-09-15T07:06:19.6671234Z --- FAIL: TestAccProject_slowOperationReadOnly (33.96s)
```

- 2025-09-16 PASS 19 seconds
- 2025-09-17 PASS 15 seconds
- 2025-09-18 PASS 17 seconds
- 2025-09-19 PASS 16 seconds
- 2025-09-20 PASS 15 seconds
- 2025-09-21

### Error 2025-09-21T00:45:18+00:00
```
2025-09-21T00:45:18.6485405Z === RUN   TestAccProject_slowOperationReadOnly
2025-09-21T00:45:18.6489766Z === CONT  TestAccProject_slowOperationReadOnly
2025-09-21T00:45:18.6680448Z === NAME  TestAccProject_slowOperationReadOnly
2025-09-21T00:45:18.6680973Z     resource_project_test.go:1118: Step 1/4 error: Error running apply: exit status 1
2025-09-21T00:45:18.6681351Z         
2025-09-21T00:45:18.6681719Z         Error: error when getting project properties after create
2025-09-21T00:45:18.6682033Z         
2025-09-21T00:45:18.6682315Z           with mongodbatlas_project.test,
2025-09-21T00:45:18.6682890Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:45:18.6683420Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:45:18.6683699Z         
2025-09-21T00:45:18.6684134Z         error getting project (68cf47495ccc8c441718c6d4): error getting project's
2025-09-21T00:45:18.6684572Z         limits (68cf47495ccc8c441718c6d4):
2025-09-21T00:45:18.6685131Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf47495ccc8c441718c6d4/limits
2025-09-21T00:45:18.6685910Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:45:18.6686472Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:45:18.6686861Z         BadRequestDetail: 
2025-09-21T00:45:18.6687161Z --- FAIL: TestAccProject_slowOperationReadOnly (37.48s)
```

- 2025-09-22 PASS 18 seconds
- 2025-09-23 PASS 13 seconds
- 2025-09-24 PASS 18 seconds
- 2025-09-25 PASS 17 seconds
- 2025-09-26 PASS 13 seconds
- 2025-09-27 PASS 16 seconds
- 2025-09-28 PASS 15 seconds
- 2025-09-29 PASS 11 seconds
- 2025-09-30
  - PASS 14 seconds
  - PASS 16 seconds
  - PASS 12 seconds
- 2025-10-01
  - PASS 14 seconds
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 11 seconds
  - PASS 13 seconds
  - PASS 19 seconds
  - PASS 12 seconds
  - PASS 20 seconds
- 2025-10-02 PASS 18 seconds