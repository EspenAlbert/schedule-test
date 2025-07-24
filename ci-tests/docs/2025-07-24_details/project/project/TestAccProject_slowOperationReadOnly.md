# project/project/TestAccProject_slowOperationReadOnly Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 00:43](#error-2025-06-29t0043460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089f756291349dce6e312/limits | qa | flaky_500 | 56.05s
[2025-07-20 00:38](#error-2025-07-20t0038280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3993823af9166ef92937/limits | qa | flaky_500 | 38.10s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 18 seconds
- 2025-06-26 PASS 16 seconds
- 2025-06-27 PASS 13 seconds
- 2025-06-28 PASS 12 seconds
- 2025-06-29

### Error 2025-06-29T00:43:46+00:00
```
2025-06-29T00:43:46.9494158Z === RUN   TestAccProject_slowOperationReadOnly
2025-06-29T00:43:46.9513522Z === CONT  TestAccProject_slowOperationReadOnly
2025-06-29T00:43:46.9581665Z === NAME  TestAccProject_slowOperationReadOnly
2025-06-29T00:43:46.9582360Z     resource_project_test.go:1075: Step 3/4, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-06-29T00:43:46.9582869Z         
2025-06-29T00:43:46.9583245Z         Error: error when getting project properties after create
2025-06-29T00:43:46.9583563Z         
2025-06-29T00:43:46.9583850Z           with mongodbatlas_project.test,
2025-06-29T00:43:46.9584434Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2025-06-29T00:43:46.9584968Z           18: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:43:46.9585249Z         
2025-06-29T00:43:46.9585680Z         error getting project (686089f756291349dce6e312): error getting project's
2025-06-29T00:43:46.9586125Z         limits (686089f756291349dce6e312):
2025-06-29T00:43:46.9586678Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089f756291349dce6e312/limits
2025-06-29T00:43:46.9587632Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:43:46.9588230Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:43:46.9588616Z         BadRequestDetail: 
2025-06-29T00:43:46.9598446Z    test_working_directory=/tmp/plugintest4072363705 test_terraform_path=/home/runner/work/_temp/4fa93c7c-b112-43b3-b7cb-5cd37eace8f4/terraform test_name=TestAccProject_slowOperationReadOnly test_step_number=3
2025-06-29T00:43:46.9599562Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-29T00:43:46.9599993Z         
2025-06-29T00:43:46.9600294Z         Error: error when destroying resource
2025-06-29T00:43:46.9600573Z         
2025-06-29T00:43:46.9600906Z         error deleting project (686089f756291349dce6e312):
2025-06-29T00:43:46.9601476Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089f756291349dce6e312
2025-06-29T00:43:46.9602097Z         DELETE: HTTP 401 Unauthorized (Error code: "USER_UNAUTHORIZED") Detail:
2025-06-29T00:43:46.9602747Z         Current user is not authorized to perform this action. Reason: Unauthorized.
2025-06-29T00:43:46.9603201Z         Params: [], BadRequestDetail: 
2025-06-29T00:43:46.9603546Z --- FAIL: TestAccProject_slowOperationReadOnly (56.50s)
```

- 2025-06-30 PASS 18 seconds
- 2025-07-01
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 17 seconds
  - PASS 12 seconds
  - PASS 13 seconds
  - PASS 10 seconds
- 2025-07-02 PASS 14 seconds
- 2025-07-03 PASS 11 seconds
- 2025-07-04 PASS 11 seconds
- 2025-07-05 PASS 10 seconds
- 2025-07-06 PASS 11 seconds
- 2025-07-07 PASS 11 seconds
- 2025-07-08 PASS 10 seconds
- 2025-07-09 PASS 11 seconds
- 2025-07-10
  - PASS 17 seconds
  - PASS 16 seconds
- 2025-07-11 PASS 17 seconds
- 2025-07-12 PASS 18 seconds
- 2025-07-13 PASS 25 seconds
- 2025-07-14 PASS 17 seconds
- 2025-07-15 PASS 12 seconds
- 2025-07-16 PASS 15 seconds
- 2025-07-17 PASS 19 seconds
- 2025-07-18 PASS 17 seconds
- 2025-07-19 PASS 13 seconds
- 2025-07-20

### Error 2025-07-20T00:38:28+00:00
```
2025-07-20T00:38:28.9963934Z === RUN   TestAccProject_slowOperationReadOnly
2025-07-20T00:38:28.9965926Z === CONT  TestAccProject_slowOperationReadOnly
2025-07-20T00:38:29.0056264Z === NAME  TestAccProject_slowOperationReadOnly
2025-07-20T00:38:29.0056808Z     resource_project_test.go:1075: Step 4/4 error: Error running pre-apply plan: exit status 1
2025-07-20T00:38:29.0057211Z         
2025-07-20T00:38:29.0057576Z         Error: error when getting project properties after create
2025-07-20T00:38:29.0057895Z         
2025-07-20T00:38:29.0058181Z           with mongodbatlas_project.test,
2025-07-20T00:38:29.0058866Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T00:38:29.0059415Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-20T00:38:29.0059696Z         
2025-07-20T00:38:29.0060218Z         error getting project (687c3993823af9166ef92937): error getting project's
2025-07-20T00:38:29.0060664Z         limits (687c3993823af9166ef92937):
2025-07-20T00:38:29.0061213Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3993823af9166ef92937/limits
2025-07-20T00:38:29.0061852Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:38:29.0062406Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:38:29.0062786Z         BadRequestDetail: 
2025-07-20T00:38:29.0063754Z --- FAIL: TestAccProject_slowOperationReadOnly (38.98s)
```

- 2025-07-21 PASS 17 seconds
- 2025-07-22 PASS 15 seconds
- 2025-07-23
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 51 seconds
- 2025-07-24 PASS 18 seconds