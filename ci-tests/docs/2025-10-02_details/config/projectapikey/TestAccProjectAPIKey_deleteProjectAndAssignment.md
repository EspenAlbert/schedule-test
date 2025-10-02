# config/projectapikey/TestAccProjectAPIKey_deleteProjectAndAssignment Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 4)
Success rate: 90.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:31](#error-2025-09-07t0031520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd2148704811492b563f7/limits | qa | flaky_500 | 32.10s
[2025-09-14 00:31](#error-2025-09-14t0031200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c8ed444485797b231c4/limits | qa | flaky_500 | 33.08s
[2025-09-15 06:23](#error-2025-09-15t0623280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b094d444485797b5f974/limits | qa | flaky_500 | 34.00s
[2025-09-21 00:32](#error-2025-09-21t0032220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf473a5ccc8c441718bed7/limits | qa | flaky_500 | 62.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 10 seconds
- 2025-09-04 PASS 11 seconds
- 2025-09-05 PASS 10 seconds
- 2025-09-06 PASS 11 seconds
- 2025-09-07

### Error 2025-09-07T00:31:52+00:00
```
2025-09-07T00:31:52.3801789Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-09-07T00:31:52.3804725Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-09-07T00:31:52.3828320Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-09-07T00:31:52.3828888Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:31:52.3829290Z         
2025-09-07T00:31:52.3829655Z         Error: error when getting project properties after create
2025-09-07T00:31:52.3829971Z         
2025-09-07T00:31:52.3830275Z           with mongodbatlas_project.project2,
2025-09-07T00:31:52.3831002Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "project2":
2025-09-07T00:31:52.3831564Z           13: 		resource "mongodbatlas_project" "project2" {
2025-09-07T00:31:52.3831851Z         
2025-09-07T00:31:52.3832279Z         error getting project (68bcd2148704811492b563f7): error getting project's
2025-09-07T00:31:52.3832713Z         limits (68bcd2148704811492b563f7):
2025-09-07T00:31:52.3833260Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd2148704811492b563f7/limits
2025-09-07T00:31:52.3833904Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:31:52.3834472Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:31:52.3834965Z         BadRequestDetail: 
2025-09-07T00:31:52.3835308Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (32.98s)
```

- 2025-09-08
  - PASS 14 seconds
  - PASS 17 seconds
  - PASS 12 seconds
- 2025-09-09 PASS 14 seconds
- 2025-09-10 PASS 9 seconds
- 2025-09-11 PASS 9 seconds
- 2025-09-12 PASS 10 seconds
- 2025-09-13 PASS 14 seconds
- 2025-09-14

### Error 2025-09-14T00:31:20+00:00
```
2025-09-14T00:31:20.4738100Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-09-14T00:31:20.4740605Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-09-14T00:31:20.4774366Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-09-14T00:31:20.4775045Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:31:20.4775517Z         
2025-09-14T00:31:20.4775948Z         Error: error when getting project properties after create
2025-09-14T00:31:20.4776334Z         
2025-09-14T00:31:20.4776685Z           with mongodbatlas_project.project2,
2025-09-14T00:31:20.4777384Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "project2":
2025-09-14T00:31:20.4778390Z           13: 		resource "mongodbatlas_project" "project2" {
2025-09-14T00:31:20.4778753Z         
2025-09-14T00:31:20.4779242Z         error getting project (68c60c8ed444485797b231c4): error getting project's
2025-09-14T00:31:20.4779755Z         limits (68c60c8ed444485797b231c4):
2025-09-14T00:31:20.4780490Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c8ed444485797b231c4/limits
2025-09-14T00:31:20.4781251Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:31:20.4781918Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:31:20.4782373Z         BadRequestDetail: 
2025-09-14T00:31:20.4782802Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (33.82s)
```

- 2025-09-15
  - PASS 11 seconds
  - FAIL 34 seconds

### Error 2025-09-15T06:23:28+00:00
```
2025-09-15T06:23:28.2307257Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-09-15T06:23:28.2310267Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-09-15T06:23:28.2335030Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-09-15T06:23:28.2335596Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:23:28.2336013Z         
2025-09-15T06:23:28.2336388Z         Error: error when getting project properties after create
2025-09-15T06:23:28.2336716Z         
2025-09-15T06:23:28.2337028Z           with mongodbatlas_project.project2,
2025-09-15T06:23:28.2337633Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "project2":
2025-09-15T06:23:28.2338194Z           13: 		resource "mongodbatlas_project" "project2" {
2025-09-15T06:23:28.2338488Z         
2025-09-15T06:23:28.2338925Z         error getting project (68c7b094d444485797b5f974): error getting project's
2025-09-15T06:23:28.2339369Z         limits (68c7b094d444485797b5f974):
2025-09-15T06:23:28.2339925Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b094d444485797b5f974/limits
2025-09-15T06:23:28.2340576Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:23:28.2341144Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:23:28.2341676Z         BadRequestDetail: 
2025-09-15T06:23:28.2354296Z   
2025-09-15T06:23:28.2361292Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (34.00s)
```

- 2025-09-16 PASS 10 seconds
- 2025-09-17 PASS 15 seconds
- 2025-09-18 PASS 11 seconds
- 2025-09-19 PASS 11 seconds
- 2025-09-20 PASS 14 seconds
- 2025-09-21

### Error 2025-09-21T00:32:22+00:00
```
2025-09-21T00:32:22.2312672Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-09-21T00:32:22.2314680Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-09-21T00:32:22.2339493Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-09-21T00:32:22.2340156Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-09-21T00:32:22.2340618Z         
2025-09-21T00:32:22.2340999Z         Error: error when getting project properties after create
2025-09-21T00:32:22.2341327Z         
2025-09-21T00:32:22.2341642Z           with mongodbatlas_project.project2,
2025-09-21T00:32:22.2342262Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "project2":
2025-09-21T00:32:22.2342831Z           13: 		resource "mongodbatlas_project" "project2" {
2025-09-21T00:32:22.2343129Z         
2025-09-21T00:32:22.2343574Z         error getting project (68cf473a5ccc8c441718bed7): error getting project's
2025-09-21T00:32:22.2344026Z         limits (68cf473a5ccc8c441718bed7):
2025-09-21T00:32:22.2344600Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf473a5ccc8c441718bed7/limits
2025-09-21T00:32:22.2345277Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:32:22.2345942Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:32:22.2346327Z         BadRequestDetail: 
2025-09-21T00:32:22.2346681Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (62.05s)
```

- 2025-09-22 PASS 9 seconds
- 2025-09-23 PASS 8 seconds
- 2025-09-24 PASS 10 seconds
- 2025-09-25 PASS 14 seconds
- 2025-09-26 PASS 11 seconds
- 2025-09-27 PASS 16 seconds
- 2025-09-28 PASS 9 seconds
- 2025-09-29 PASS 10 seconds
- 2025-09-30
  - PASS 10 seconds
  - PASS 13 seconds
  - PASS 9 seconds
- 2025-10-01
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-10-02 PASS 15 seconds