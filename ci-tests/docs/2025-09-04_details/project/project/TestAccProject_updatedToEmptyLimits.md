# project/project/TestAccProject_updatedToEmptyLimits Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 3)
Success rate: 92.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:42](#error-2025-08-24t0042090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5dc34192cd1cc58a156d/limits | qa | flaky_500 | 34.03s
[2025-08-31 00:45](#error-2025-08-31t0045030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b398117e07f9709daf0f9f/limits | qa | flaky_500 | 40.01s
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 26 seconds
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS 11 seconds
- 2025-08-09 PASS 13 seconds
- 2025-08-10 PASS 38 seconds
- 2025-08-11 PASS 21 seconds
- 2025-08-12
  - PASS 23 seconds
  - PASS 12 seconds
- 2025-08-13 PASS 14 seconds
- 2025-08-14 PASS 12 seconds
- 2025-08-15 PASS 16 seconds
- 2025-08-16 PASS 12 seconds
- 2025-08-17 PASS 33 seconds
- 2025-08-18 PASS 11 seconds
- 2025-08-19 PASS 21 seconds
- 2025-08-20
  - PASS 12 seconds
  - PASS 21 seconds
- 2025-08-21 PASS 20 seconds
- 2025-08-22 PASS 12 seconds
- 2025-08-23 PASS 13 seconds
- 2025-08-24

### Error 2025-08-24T00:42:09+00:00
```
2025-08-24T00:42:09.0465340Z === RUN   TestAccProject_updatedToEmptyLimits
2025-08-24T00:42:09.0471799Z === CONT  TestAccProject_updatedToEmptyLimits
2025-08-24T00:42:09.0517430Z === NAME  TestAccProject_updatedToEmptyLimits
2025-08-24T00:42:09.0517968Z     resource_project_test.go:910: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:42:09.0518354Z         
2025-08-24T00:42:09.0518735Z         Error: error when getting project properties after create
2025-08-24T00:42:09.0519071Z         
2025-08-24T00:42:09.0519369Z           with mongodbatlas_project.test,
2025-08-24T00:42:09.0519966Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:42:09.0520517Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:42:09.0520810Z         
2025-08-24T00:42:09.0521262Z         error getting project (68aa5dc34192cd1cc58a156d): error getting project's
2025-08-24T00:42:09.0521719Z         limits (68aa5dc34192cd1cc58a156d):
2025-08-24T00:42:09.0522303Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5dc34192cd1cc58a156d/limits
2025-08-24T00:42:09.0522975Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:09.0523672Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:09.0524078Z         BadRequestDetail: 
2025-08-24T00:42:09.0524392Z --- FAIL: TestAccProject_updatedToEmptyLimits (34.35s)
```

- 2025-08-25 PASS 14 seconds
- 2025-08-26 PASS 20 seconds
- 2025-08-27 PASS 14 seconds
- 2025-08-28 PASS 20 seconds
- 2025-08-29 PASS 13 seconds
- 2025-08-30 PASS 12 seconds
- 2025-08-31

### Error 2025-08-31T00:45:03+00:00
```
2025-08-31T00:45:03.7529588Z === RUN   TestAccProject_updatedToEmptyLimits
2025-08-31T00:45:03.7535590Z === CONT  TestAccProject_updatedToEmptyLimits
2025-08-31T00:45:03.7592978Z === NAME  TestAccProject_updatedToEmptyLimits
2025-08-31T00:45:03.7593479Z     resource_project_test.go:910: Step 1/2 error: Error running apply: exit status 1
2025-08-31T00:45:03.7593856Z         
2025-08-31T00:45:03.7594192Z         Error: error when getting project properties
2025-08-31T00:45:03.7594615Z         
2025-08-31T00:45:03.7594924Z           with data.mongodbatlas_project.test,
2025-08-31T00:45:03.7595493Z           on terraform_plugin_test.tf line 24, in data "mongodbatlas_project" "test":
2025-08-31T00:45:03.7596002Z           24: 		data "mongodbatlas_project" "test" {
2025-08-31T00:45:03.7596273Z         
2025-08-31T00:45:03.7596710Z         error getting project (68b398117e07f9709daf0f9f): error getting project's
2025-08-31T00:45:03.7597157Z         limits (68b398117e07f9709daf0f9f):
2025-08-31T00:45:03.7597712Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b398117e07f9709daf0f9f/limits
2025-08-31T00:45:03.7598362Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:45:03.7598925Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:45:03.7599310Z         BadRequestDetail: 
2025-08-31T00:45:03.7611883Z   
2025-08-31T00:45:03.7638147Z --- FAIL: TestAccProject_updatedToEmptyLimits (40.11s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2457342Z === RUN   TestAccProject_updatedToEmptyLimits
2025-09-01T00:34:53.2464583Z === CONT  TestAccProject_updatedToEmptyLimits
2025-09-01T00:34:53.2534168Z    test_name=TestAccProject_withFalseDefaultSettings test_terraform_path=/home/runner/work/_temp/fb33b513-ebaa-40af-9cae-1ded3d2fd2ee/terraform test_working_directory=/tmp/plugintest3797400435
2025-09-01T00:34:53.2678187Z === NAME  TestAccProject_updatedToEmptyLimits
2025-09-01T00:34:53.2678707Z     resource_project_test.go:910: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:34:53.2679095Z         
2025-09-01T00:34:53.2679499Z         Error: error creating project: test-acc-tf-p-1408504615705681088
2025-09-01T00:34:53.2679844Z         
2025-09-01T00:34:53.2680145Z           with mongodbatlas_project.test,
2025-09-01T00:34:53.2680736Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:34:53.2681524Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:34:53.2681836Z         
2025-09-01T00:34:53.2682309Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:34:53.2682940Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:34:53.2683550Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:34:53.2684148Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:34:53.2684554Z         BadRequestDetail: 
2025-09-01T00:34:53.2691861Z    test_name=TestAccProject_withUpdatedSettings
2025-09-01T00:34:53.2713153Z --- FAIL: TestAccProject_updatedToEmptyLimits (1.93s)
```

  - PASS 20 seconds
  - PASS 22 seconds
  - PASS 20 seconds
  - PASS 13 seconds
  - PASS 11 seconds
  - PASS 21 seconds
  - PASS 13 seconds
- 2025-09-02 PASS 22 seconds
- 2025-09-03 PASS 11 seconds
- 2025-09-04 PASS 13 seconds