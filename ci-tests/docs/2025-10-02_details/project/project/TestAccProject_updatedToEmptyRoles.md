# project/project/TestAccProject_updatedToEmptyRoles Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 01:13](#error-2025-09-14t0113040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60cb6d444485797b24072/limits | qa | flaky_500 | 36.02s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b0b9fe60767b7f9b374e/limits | qa | flaky_500 | 35.00s
[2025-09-21 00:45](#error-2025-09-21t0045180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf47495ccc8c441718c6d7/limits | qa | flaky_500 | 35.02s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 9 seconds
- 2025-09-05 PASS 11 seconds
- 2025-09-06 PASS 12 seconds
- 2025-09-07 PASS 17 seconds
- 2025-09-08
  - PASS 9 seconds
  - PASS 43 seconds
  - PASS 11 seconds
- 2025-09-09 PASS 14 seconds
- 2025-09-10 PASS 11 seconds
- 2025-09-11 PASS 15 seconds
- 2025-09-12 PASS 16 seconds
- 2025-09-13 PASS 15 seconds
- 2025-09-14

### Error 2025-09-14T01:13:04+00:00
```
2025-09-14T01:13:04.9761591Z === RUN   TestAccProject_updatedToEmptyRoles
2025-09-14T01:13:04.9779498Z === CONT  TestAccProject_updatedToEmptyRoles
2025-09-14T01:13:05.0021890Z === NAME  TestAccProject_updatedToEmptyRoles
2025-09-14T01:13:05.0022430Z     resource_project_test.go:810: Step 1/2 error: Error running apply: exit status 1
2025-09-14T01:13:05.0022841Z         
2025-09-14T01:13:05.0023233Z         Error: error when getting project properties after create
2025-09-14T01:13:05.0023582Z         
2025-09-14T01:13:05.0023879Z           with mongodbatlas_project.test,
2025-09-14T01:13:05.0024585Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:05.0025154Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:05.0025482Z         
2025-09-14T01:13:05.0025935Z         error getting project (68c60cb6d444485797b24072): error getting project's
2025-09-14T01:13:05.0026406Z         limits (68c60cb6d444485797b24072):
2025-09-14T01:13:05.0026990Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60cb6d444485797b24072/limits
2025-09-14T01:13:05.0027686Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:05.0028296Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:05.0028705Z         BadRequestDetail: 
2025-09-14T01:13:05.0029031Z --- FAIL: TestAccProject_updatedToEmptyRoles (36.15s)
```

- 2025-09-15
  - PASS 10 seconds
  - FAIL 35 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6564787Z === RUN   TestAccProject_updatedToEmptyRoles
2025-09-15T07:06:19.6583426Z === CONT  TestAccProject_updatedToEmptyRoles
2025-09-15T07:06:19.6743295Z === NAME  TestAccProject_updatedToEmptyRoles
2025-09-15T07:06:19.6743815Z     resource_project_test.go:810: Step 1/2 error: Error running apply: exit status 1
2025-09-15T07:06:19.6744195Z         
2025-09-15T07:06:19.6744577Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6744912Z         
2025-09-15T07:06:19.6745214Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6745803Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6746344Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6746643Z         
2025-09-15T07:06:19.6747095Z         error getting project (68c7b0b9fe60767b7f9b374e): error getting project's
2025-09-15T07:06:19.6747550Z         limits (68c7b0b9fe60767b7f9b374e):
2025-09-15T07:06:19.6748122Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b0b9fe60767b7f9b374e/limits
2025-09-15T07:06:19.6748787Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6749360Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6749751Z         BadRequestDetail: 
2025-09-15T07:06:19.6750059Z --- FAIL: TestAccProject_updatedToEmptyRoles (35.01s)
```

- 2025-09-16 PASS 14 seconds
- 2025-09-17 PASS 12 seconds
- 2025-09-18 PASS 13 seconds
- 2025-09-19 PASS 14 seconds
- 2025-09-20 PASS 12 seconds
- 2025-09-21

### Error 2025-09-21T00:45:18+00:00
```
2025-09-21T00:45:18.6480094Z === RUN   TestAccProject_updatedToEmptyRoles
2025-09-21T00:45:18.6489324Z === CONT  TestAccProject_updatedToEmptyRoles
2025-09-21T00:45:18.6571669Z === NAME  TestAccProject_updatedToEmptyRoles
2025-09-21T00:45:18.6572227Z     resource_project_test.go:810: Step 1/2 error: Error running apply: exit status 1
2025-09-21T00:45:18.6572601Z         
2025-09-21T00:45:18.6572970Z         Error: error when getting project properties after create
2025-09-21T00:45:18.6573290Z         
2025-09-21T00:45:18.6573577Z           with mongodbatlas_project.test,
2025-09-21T00:45:18.6574166Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:45:18.6574708Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:45:18.6574992Z         
2025-09-21T00:45:18.6575432Z         error getting project (68cf47495ccc8c441718c6d7): error getting project's
2025-09-21T00:45:18.6576046Z         limits (68cf47495ccc8c441718c6d7):
2025-09-21T00:45:18.6576669Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf47495ccc8c441718c6d7/limits
2025-09-21T00:45:18.6577315Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:45:18.6577876Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:45:18.6578265Z         BadRequestDetail: 
2025-09-21T00:45:18.6578561Z --- FAIL: TestAccProject_updatedToEmptyRoles (35.16s)
```

- 2025-09-22 PASS 15 seconds
- 2025-09-23 PASS 12 seconds
- 2025-09-24 PASS 15 seconds
- 2025-09-25 PASS 16 seconds
- 2025-09-26 PASS 10 seconds
- 2025-09-27 PASS 13 seconds
- 2025-09-28 PASS 13 seconds
- 2025-09-29 PASS 11 seconds
- 2025-09-30
  - PASS 12 seconds
  - PASS 14 seconds
  - PASS 8 seconds
- 2025-10-01
  - PASS 11 seconds
  - PASS 13 seconds
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 15 seconds
  - PASS 10 seconds
  - PASS 15 seconds
- 2025-10-02 PASS 15 seconds