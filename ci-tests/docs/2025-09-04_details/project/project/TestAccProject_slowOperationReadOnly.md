# project/project/TestAccProject_slowOperationReadOnly Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 4)
Success rate: 89.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-23 00:29](#error-2025-08-23t0029480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a90af9b4cd9f3d80a3973b/limits | dev | flaky_500 | 4.07s
[2025-08-24 00:42](#error-2025-08-24t0042090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5dc34192cd1cc58a14b9/limits | qa | flaky_500 | 35.08s
[2025-08-31 00:45](#error-2025-08-31t0045030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b398117e07f9709daf0fa3/limits | qa | flaky_500 | 44.06s
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.10s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 32 seconds
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS 11 seconds
- 2025-08-09 PASS 13 seconds
- 2025-08-10 PASS 43 seconds
- 2025-08-11 PASS 19 seconds
- 2025-08-12
  - PASS 19 seconds
  - PASS 12 seconds
- 2025-08-13 PASS 13 seconds
- 2025-08-14 PASS 12 seconds
- 2025-08-15 PASS 15 seconds
- 2025-08-16 PASS 11 seconds
- 2025-08-17 PASS 11 seconds
- 2025-08-18 PASS 12 seconds
- 2025-08-19 PASS 17 seconds
- 2025-08-20
  - PASS 13 seconds
  - PASS 19 seconds
- 2025-08-21 PASS 16 seconds
- 2025-08-22 PASS 13 seconds
- 2025-08-23

### Error 2025-08-23T00:29:48+00:00
```
2025-08-23T00:29:48.8008596Z === RUN   TestAccProject_slowOperationReadOnly
2025-08-23T00:29:48.8012635Z === CONT  TestAccProject_slowOperationReadOnly
2025-08-23T00:29:48.8030321Z === NAME  TestAccProject_slowOperationReadOnly
2025-08-23T00:29:48.8030973Z     resource_project_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2025-08-23T00:29:48.8031367Z         
2025-08-23T00:29:48.8031744Z         Error: error when getting project properties after create
2025-08-23T00:29:48.8032068Z         
2025-08-23T00:29:48.8032353Z           with mongodbatlas_project.test,
2025-08-23T00:29:48.8032935Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-23T00:29:48.8033462Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-23T00:29:48.8033742Z         
2025-08-23T00:29:48.8034174Z         error getting project (68a90af9b4cd9f3d80a3973b): error getting project's
2025-08-23T00:29:48.8034620Z         limits (68a90af9b4cd9f3d80a3973b):
2025-08-23T00:29:48.8035192Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90af9b4cd9f3d80a3973b/limits
2025-08-23T00:29:48.8035850Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-23T00:29:48.8036410Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-23T00:29:48.8036792Z         BadRequestDetail: 
2025-08-23T00:29:48.8037222Z --- FAIL: TestAccProject_slowOperationReadOnly (4.70s)
```

- 2025-08-24

### Error 2025-08-24T00:42:09+00:00
```
2025-08-24T00:42:09.0468201Z === RUN   TestAccProject_slowOperationReadOnly
2025-08-24T00:42:09.0470879Z === CONT  TestAccProject_slowOperationReadOnly
2025-08-24T00:42:09.0557433Z === NAME  TestAccProject_slowOperationReadOnly
2025-08-24T00:42:09.0557956Z     resource_project_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2025-08-24T00:42:09.0558354Z         
2025-08-24T00:42:09.0558738Z         Error: error when getting project properties after create
2025-08-24T00:42:09.0559068Z         
2025-08-24T00:42:09.0559364Z           with mongodbatlas_project.test,
2025-08-24T00:42:09.0559963Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:42:09.0560508Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:42:09.0560792Z         
2025-08-24T00:42:09.0561236Z         error getting project (68aa5dc34192cd1cc58a14b9): error getting project's
2025-08-24T00:42:09.0561700Z         limits (68aa5dc34192cd1cc58a14b9):
2025-08-24T00:42:09.0562275Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5dc34192cd1cc58a14b9/limits
2025-08-24T00:42:09.0562941Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:09.0563511Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:09.0563905Z         BadRequestDetail: 
2025-08-24T00:42:09.0564217Z --- FAIL: TestAccProject_slowOperationReadOnly (35.81s)
```

- 2025-08-25 PASS 12 seconds
- 2025-08-26 PASS 18 seconds
- 2025-08-27 PASS 13 seconds
- 2025-08-28 PASS 16 seconds
- 2025-08-29 PASS 11 seconds
- 2025-08-30 PASS 10 seconds
- 2025-08-31

### Error 2025-08-31T00:45:03+00:00
```
2025-08-31T00:45:03.7532283Z === RUN   TestAccProject_slowOperationReadOnly
2025-08-31T00:45:03.7533964Z === CONT  TestAccProject_slowOperationReadOnly
2025-08-31T00:45:03.7690214Z === NAME  TestAccProject_slowOperationReadOnly
2025-08-31T00:45:03.7690752Z     resource_project_test.go:1075: Step 2/4 error: Error running pre-apply plan: exit status 1
2025-08-31T00:45:03.7691154Z         
2025-08-31T00:45:03.7691524Z         Error: error when getting project properties after create
2025-08-31T00:45:03.7691846Z         
2025-08-31T00:45:03.7692134Z           with mongodbatlas_project.test,
2025-08-31T00:45:03.7692710Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2025-08-31T00:45:03.7693235Z           18: 		resource "mongodbatlas_project" "test" {
2025-08-31T00:45:03.7693517Z         
2025-08-31T00:45:03.7693950Z         error getting project (68b398117e07f9709daf0fa3): error getting project's
2025-08-31T00:45:03.7694390Z         limits (68b398117e07f9709daf0fa3):
2025-08-31T00:45:03.7694952Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b398117e07f9709daf0fa3/limits
2025-08-31T00:45:03.7695621Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:45:03.7696219Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:45:03.7696600Z         BadRequestDetail: 
2025-08-31T00:45:03.7707982Z === NAME  TestAccProject_slowOperationReadOnly
2025-08-31T00:45:03.7708556Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-31T00:45:03.7708976Z         
2025-08-31T00:45:03.7709263Z         Error: error when destroying resource
2025-08-31T00:45:03.7709529Z         
2025-08-31T00:45:03.7709985Z         error deleting project (68b398117e07f9709daf0fa3):
2025-08-31T00:45:03.7710545Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b398117e07f9709daf0fa3
2025-08-31T00:45:03.7711158Z         DELETE: HTTP 401 Unauthorized (Error code: "USER_UNAUTHORIZED") Detail:
2025-08-31T00:45:03.7711789Z         Current user is not authorized to perform this action. Reason: Unauthorized.
2025-08-31T00:45:03.7712248Z         Params: [], BadRequestDetail: 
2025-08-31T00:45:03.7712737Z --- FAIL: TestAccProject_slowOperationReadOnly (44.61s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2459918Z === RUN   TestAccProject_slowOperationReadOnly
2025-09-01T00:34:53.2461509Z === CONT  TestAccProject_slowOperationReadOnly
2025-09-01T00:34:53.2610661Z === NAME  TestAccProject_slowOperationReadOnly
2025-09-01T00:34:53.2611394Z     resource_project_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2025-09-01T00:34:53.2611786Z         
2025-09-01T00:34:53.2612200Z         Error: error creating project: test-acc-tf-p-8301171867854889380
2025-09-01T00:34:53.2612565Z         
2025-09-01T00:34:53.2612867Z           with mongodbatlas_project.test,
2025-09-01T00:34:53.2613463Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:34:53.2614007Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:34:53.2614294Z         
2025-09-01T00:34:53.2614763Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:34:53.2615406Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:34:53.2616038Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:34:53.2616647Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:34:53.2617058Z         BadRequestDetail: 
2025-09-01T00:34:53.2629237Z   
2025-09-01T00:34:53.2715878Z --- FAIL: TestAccProject_slowOperationReadOnly (1.97s)
```

  - PASS 15 seconds
  - PASS 17 seconds
  - PASS 15 seconds
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 16 seconds
  - PASS 11 seconds
- 2025-09-02 PASS 20 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 12 seconds