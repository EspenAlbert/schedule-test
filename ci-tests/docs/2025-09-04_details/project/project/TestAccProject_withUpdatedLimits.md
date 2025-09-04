# project/project/TestAccProject_withUpdatedLimits Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 3)
Success rate: 92.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:42](#error-2025-08-24t0042090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5dc34192cd1cc58a14ba/limits | qa | flaky_500 | 40.06s
[2025-08-31 00:45](#error-2025-08-31t0045030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b398110a66c308153f3962/limits | qa | flaky_500 | 40.02s
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 49 seconds
- 2025-08-07 PASS 4 minutes
- 2025-08-08 PASS 16 seconds
- 2025-08-09 PASS 17 seconds
- 2025-08-10 PASS a minute
- 2025-08-11 PASS 33 seconds
- 2025-08-12
  - PASS 34 seconds
  - PASS 16 seconds
- 2025-08-13 PASS 16 seconds
- 2025-08-14 PASS 16 seconds
- 2025-08-15 PASS 22 seconds
- 2025-08-16 PASS 17 seconds
- 2025-08-17 PASS 40 seconds
- 2025-08-18 PASS 17 seconds
- 2025-08-19 PASS 33 seconds
- 2025-08-20
  - PASS 18 seconds
  - PASS 33 seconds
- 2025-08-21 PASS 29 seconds
- 2025-08-22 PASS 18 seconds
- 2025-08-23 PASS 16 seconds
- 2025-08-24

### Error 2025-08-24T00:42:09+00:00
```
2025-08-24T00:42:09.0464714Z === RUN   TestAccProject_withUpdatedLimits
2025-08-24T00:42:09.0469261Z === CONT  TestAccProject_withUpdatedLimits
2025-08-24T00:42:09.0597112Z === NAME  TestAccProject_withUpdatedLimits
2025-08-24T00:42:09.0597694Z     resource_project_test.go:825: Step 1/3 error: Error running post-apply refresh plan: exit status 1
2025-08-24T00:42:09.0598141Z         
2025-08-24T00:42:09.0598522Z         Error: error when getting project properties after create
2025-08-24T00:42:09.0598857Z         
2025-08-24T00:42:09.0599160Z           with mongodbatlas_project.test,
2025-08-24T00:42:09.0599755Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:42:09.0600425Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:42:09.0600716Z         
2025-08-24T00:42:09.0601163Z         error getting project (68aa5dc34192cd1cc58a14ba): error getting project's
2025-08-24T00:42:09.0601622Z         limits (68aa5dc34192cd1cc58a14ba):
2025-08-24T00:42:09.0602194Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5dc34192cd1cc58a14ba/limits
2025-08-24T00:42:09.0602863Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:09.0603440Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:09.0603828Z         BadRequestDetail: 
2025-08-24T00:42:09.0604505Z --- FAIL: TestAccProject_withUpdatedLimits (40.56s)
```

- 2025-08-25 PASS 21 seconds
- 2025-08-26 PASS 32 seconds
- 2025-08-27 PASS 21 seconds
- 2025-08-28 PASS 30 seconds
- 2025-08-29 PASS 18 seconds
- 2025-08-30 PASS 17 seconds
- 2025-08-31

### Error 2025-08-31T00:45:03+00:00
```
2025-08-31T00:45:03.7528991Z === RUN   TestAccProject_withUpdatedLimits
2025-08-31T00:45:03.7533310Z === CONT  TestAccProject_withUpdatedLimits
2025-08-31T00:45:03.7560192Z === NAME  TestAccProject_withUpdatedLimits
2025-08-31T00:45:03.7560721Z     resource_project_test.go:825: Step 1/3 error: Error running apply: exit status 1
2025-08-31T00:45:03.7561112Z         
2025-08-31T00:45:03.7561432Z         Error: error when getting project properties
2025-08-31T00:45:03.7561721Z         
2025-08-31T00:45:03.7562031Z           with data.mongodbatlas_project.test,
2025-08-31T00:45:03.7562609Z           on terraform_plugin_test.tf line 29, in data "mongodbatlas_project" "test":
2025-08-31T00:45:03.7563113Z           29: 		data "mongodbatlas_project" "test" {
2025-08-31T00:45:03.7563392Z         
2025-08-31T00:45:03.7563840Z         error getting project (68b398110a66c308153f3962): error getting project's
2025-08-31T00:45:03.7564287Z         limits (68b398110a66c308153f3962):
2025-08-31T00:45:03.7564849Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b398110a66c308153f3962/limits
2025-08-31T00:45:03.7565503Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:45:03.7566213Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:45:03.7566610Z         BadRequestDetail: 
2025-08-31T00:45:03.7573366Z    test_working_directory=/tmp/plugintest3380329067 test_step_number=1 test_name=TestAccProject_withTags test_terraform_path=/home/runner/work/_temp/19bede8d-e9f3-4e59-9c28-03b9edc97393/terraform
2025-08-31T00:45:03.7638804Z --- FAIL: TestAccProject_withUpdatedLimits (40.22s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2456655Z === RUN   TestAccProject_withUpdatedLimits
2025-09-01T00:34:53.2462125Z === CONT  TestAccProject_withUpdatedLimits
2025-09-01T00:34:53.2645874Z === NAME  TestAccProject_withUpdatedLimits
2025-09-01T00:34:53.2646505Z     resource_project_test.go:825: Step 1/3 error: Error running apply: exit status 1
2025-09-01T00:34:53.2646899Z         
2025-09-01T00:34:53.2647425Z         Error: error creating project: test-acc-tf-p-8950960973717271312
2025-09-01T00:34:53.2647779Z         
2025-09-01T00:34:53.2648177Z           with mongodbatlas_project.test,
2025-09-01T00:34:53.2648884Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:34:53.2649440Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:34:53.2649961Z         
2025-09-01T00:34:53.2650561Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:34:53.2651479Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:34:53.2652211Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:34:53.2652885Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:34:53.2653360Z         BadRequestDetail: 
2025-09-01T00:34:53.2661806Z   
2025-09-01T00:34:53.2712795Z --- FAIL: TestAccProject_withUpdatedLimits (1.91s)
```

  - PASS 29 seconds
  - PASS 33 seconds
  - PASS 28 seconds
  - PASS 18 seconds
  - PASS 18 seconds
  - PASS 30 seconds
  - PASS 17 seconds
- 2025-09-02 PASS 33 seconds
- 2025-09-03 PASS 16 seconds
- 2025-09-04 PASS 17 seconds