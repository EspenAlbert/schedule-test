# project/project/TestAccProject_withInvalidLimitNameOnUpdate Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-31 00:45](#error-2025-08-31t0045030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b398117e07f9709daf0fa4/limits | qa | flaky_500 | 44.02s
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.10s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 16 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 9 seconds
- 2025-08-09 PASS 8 seconds
- 2025-08-10 PASS 37 seconds
- 2025-08-11 PASS 14 seconds
- 2025-08-12
  - PASS 16 seconds
  - PASS 8 seconds
- 2025-08-13 PASS 9 seconds
- 2025-08-14 PASS 10 seconds
- 2025-08-15 PASS 12 seconds
- 2025-08-16 PASS 10 seconds
- 2025-08-17 PASS 9 seconds
- 2025-08-18 PASS 8 seconds
- 2025-08-19 PASS 14 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 17 seconds
- 2025-08-21 PASS 13 seconds
- 2025-08-22 PASS 8 seconds
- 2025-08-23 PASS 10 seconds
- 2025-08-24 PASS 12 seconds
- 2025-08-25 PASS 10 seconds
- 2025-08-26 PASS 15 seconds
- 2025-08-27 PASS 11 seconds
- 2025-08-28 PASS 12 seconds
- 2025-08-29 PASS 8 seconds
- 2025-08-30 PASS 9 seconds
- 2025-08-31

### Error 2025-08-31T00:45:03+00:00
```
2025-08-31T00:45:03.7531050Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2025-08-31T00:45:03.7533634Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2025-08-31T00:45:03.7652237Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2025-08-31T00:45:03.7652847Z     resource_project_test.go:968: Step 1/2 error: Error running post-apply non-refresh plan: exit status 1
2025-08-31T00:45:03.7653292Z         
2025-08-31T00:45:03.7653608Z         Error: error when getting project properties
2025-08-31T00:45:03.7653897Z         
2025-08-31T00:45:03.7654209Z           with data.mongodbatlas_project.test,
2025-08-31T00:45:03.7654781Z           on terraform_plugin_test.tf line 19, in data "mongodbatlas_project" "test":
2025-08-31T00:45:03.7655286Z           19: 		data "mongodbatlas_project" "test" {
2025-08-31T00:45:03.7655678Z         
2025-08-31T00:45:03.7656125Z         error getting project (68b398117e07f9709daf0fa4): error getting project's
2025-08-31T00:45:03.7656568Z         limits (68b398117e07f9709daf0fa4):
2025-08-31T00:45:03.7657124Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b398117e07f9709daf0fa4/limits
2025-08-31T00:45:03.7657776Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:45:03.7658347Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:45:03.7658732Z         BadRequestDetail: 
2025-08-31T00:45:03.7670832Z    test_working_directory=/tmp/plugintest2784896514 test_step_number=2
2025-08-31T00:45:03.7696922Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (44.21s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2458642Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2025-09-01T00:34:53.2463926Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2025-09-01T00:34:53.2573547Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2025-09-01T00:34:53.2574089Z     resource_project_test.go:968: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:34:53.2574480Z         
2025-09-01T00:34:53.2574897Z         Error: error creating project: test-acc-tf-p-5218408443388409715
2025-09-01T00:34:53.2575248Z         
2025-09-01T00:34:53.2575548Z           with mongodbatlas_project.test,
2025-09-01T00:34:53.2576148Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:34:53.2576687Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:34:53.2577108Z         
2025-09-01T00:34:53.2577584Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:34:53.2578228Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:34:53.2578844Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:34:53.2579449Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:34:53.2579854Z         BadRequestDetail: 
2025-09-01T00:34:53.2610427Z   
2025-09-01T00:34:53.2714407Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (1.96s)
```

  - PASS 13 seconds
  - PASS 15 seconds
  - PASS 15 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 15 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 14 seconds
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 9 seconds