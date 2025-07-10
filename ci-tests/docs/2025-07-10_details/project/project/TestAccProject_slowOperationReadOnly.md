# project/project/TestAccProject_slowOperationReadOnly Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 3)
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030200000) |  | qa |  | 1.07s
[2025-06-05 00:29](#error-2025-06-05t0029340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.01s
[2025-06-29 00:43](#error-2025-06-29t0043460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089f756291349dce6e312/limits | qa | flaky_500 | 56.05s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 18 seconds
- 2025-04-13 PASS 11 seconds
- 2025-04-14 PASS 16 seconds
- 2025-04-15 PASS 10 seconds
- 2025-04-16
  - PASS 11 seconds
  - PASS 10 seconds
- 2025-04-17 PASS 12 seconds
- 2025-04-18 PASS 19 seconds
- 2025-04-19 PASS 18 seconds
- 2025-04-20 PASS 10 seconds
- 2025-04-21 PASS 14 seconds
- 2025-04-22 PASS 12 seconds
- 2025-04-23 PASS 15 seconds
- 2025-04-24 PASS 11 seconds
- 2025-04-25 PASS 12 seconds
- 2025-04-26 PASS 41 seconds
- 2025-04-27 PASS 17 seconds
- 2025-04-28 PASS 10 seconds
- 2025-04-29 PASS 10 seconds
- 2025-04-30
  - PASS 17 seconds
  - PASS 18 seconds
- 2025-05-01
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 12 seconds
  - PASS 18 seconds
  - PASS 12 seconds
- 2025-05-02 PASS 15 seconds
- 2025-05-03 PASS 10 seconds
- 2025-05-04 PASS 11 seconds
- 2025-05-05 PASS 13 seconds
- 2025-05-06 PASS 11 seconds
- 2025-05-07 PASS 16 seconds
- 2025-05-08 PASS 11 seconds
- 2025-05-09 PASS 19 seconds
- 2025-05-10 PASS 13 seconds
- 2025-05-11

### Error 2025-05-11T00:30:20+00:00
```
2025-05-11T00:30:20.3778607Z === RUN   TestAccProject_slowOperationReadOnly
2025-05-11T00:30:20.3781312Z === CONT  TestAccProject_slowOperationReadOnly
2025-05-11T00:30:20.3865800Z === NAME  TestAccProject_slowOperationReadOnly
2025-05-11T00:30:20.3866336Z     resource_project_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2025-05-11T00:30:20.3866736Z         
2025-05-11T00:30:20.3867169Z         Error: error creating project: test-acc-tf-p-8845055356497256559
2025-05-11T00:30:20.3867524Z         
2025-05-11T00:30:20.3867842Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3868460Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3869023Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3869332Z         
2025-05-11T00:30:20.3869948Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3870356Z         type
2025-05-11T00:30:20.3879245Z   
2025-05-11T00:30:20.3937242Z --- FAIL: TestAccProject_slowOperationReadOnly (1.74s)
```

- 2025-05-12 PASS 17 seconds
- 2025-05-13
  - PASS 11 seconds
  - PASS 9 seconds
- 2025-05-14 PASS 17 seconds
- 2025-05-15 PASS 11 seconds
- 2025-05-16 PASS 10 seconds
- 2025-05-17 PASS 13 seconds
- 2025-05-18 PASS 9 seconds
- 2025-05-19 PASS 11 seconds
- 2025-05-20 PASS 10 seconds
- 2025-05-21 PASS 10 seconds
- 2025-05-22 PASS 13 seconds
- 2025-05-23 PASS 10 seconds
- 2025-05-24 PASS 13 seconds
- 2025-05-25 PASS 12 seconds
- 2025-05-26 PASS 12 seconds
- 2025-05-27
  - PASS 12 seconds
  - PASS 11 seconds
- 2025-05-28
  - PASS 11 seconds
  - PASS 12 seconds
- 2025-05-29 PASS 16 seconds
- 2025-05-30 PASS 13 seconds
- 2025-05-31 PASS 11 seconds
- 2025-06-01
  - PASS 13 seconds
  - PASS 12 seconds
  - PASS 13 seconds
  - PASS 12 seconds
  - PASS 14 seconds
  - PASS 12 seconds
- 2025-06-02
  - PASS 11 seconds
  - PASS 17 seconds
  - PASS 12 seconds
- 2025-06-03 PASS 14 seconds
- 2025-06-04 PASS 17 seconds
- 2025-06-05

### Error 2025-06-05T00:29:34+00:00
```
2025-06-05T00:29:34.4935831Z === RUN   TestAccProject_slowOperationReadOnly
2025-06-05T00:29:34.4937768Z === CONT  TestAccProject_slowOperationReadOnly
2025-06-05T00:29:34.5085787Z === NAME  TestAccProject_slowOperationReadOnly
2025-06-05T00:29:34.5086309Z     resource_project_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:29:34.5086709Z         
2025-06-05T00:29:34.5087122Z         Error: error creating project: test-acc-tf-p-5564151936735153788
2025-06-05T00:29:34.5087484Z         
2025-06-05T00:29:34.5087784Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.5088380Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.5088932Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.5089245Z         
2025-06-05T00:29:34.5089706Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.5090338Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.5090905Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.5091417Z --- FAIL: TestAccProject_slowOperationReadOnly (4.08s)
```

- 2025-06-06 PASS 17 seconds
- 2025-06-07 PASS 10 seconds
- 2025-06-08 PASS 16 seconds
- 2025-06-09 PASS 16 seconds
- 2025-06-10 PASS 17 seconds
- 2025-06-11
  - PASS 11 seconds
  - PASS 13 seconds
- 2025-06-12 PASS 16 seconds
- 2025-06-13 PASS 18 seconds
- 2025-06-14 PASS 11 seconds
- 2025-06-15 PASS 14 seconds
- 2025-06-16 PASS 12 seconds
- 2025-06-17 PASS 11 seconds
- 2025-06-18 PASS 11 seconds
- 2025-06-19 PASS 10 seconds
- 2025-06-20 PASS 11 seconds
- 2025-06-21 PASS 18 seconds
- 2025-06-22 PASS 10 seconds
- 2025-06-23 PASS 11 seconds
- 2025-06-24 PASS 17 seconds
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
- 2025-07-10 PASS 17 seconds