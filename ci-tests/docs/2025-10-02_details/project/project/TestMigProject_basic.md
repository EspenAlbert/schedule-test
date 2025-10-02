# project/project/TestMigProject_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 01:13](#error-2025-09-14t0113040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c4dd444485797b223b8/limits | qa | flaky_500 | 35.05s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b04fd444485797b5e8d0/limits | qa | flaky_500 | 33.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 9 seconds
- 2025-09-05 PASS 9 seconds
- 2025-09-06 PASS 12 seconds
- 2025-09-07 PASS 8 seconds
- 2025-09-08
  - PASS 9 seconds
  - PASS a minute
  - PASS 8 seconds
- 2025-09-09 PASS 15 seconds
- 2025-09-10 PASS 9 seconds
- 2025-09-11 PASS 11 seconds
- 2025-09-12 PASS 17 seconds
- 2025-09-13 PASS 12 seconds
- 2025-09-14

### Error 2025-09-14T01:13:04+00:00
```
2025-09-14T01:13:04.9671480Z === RUN   TestMigProject_basic
2025-09-14T01:13:04.9684187Z    test_terraform_path=/home/runner/work/_temp/73b7e432-0447-480c-b92d-31107786a6db/terraform test_working_directory=/tmp/plugintest1183101770
2025-09-14T01:13:04.9685977Z     resource_project_migration_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-09-14T01:13:04.9686750Z         
2025-09-14T01:13:04.9687432Z         Error: error when getting project properties after create
2025-09-14T01:13:04.9688011Z         
2025-09-14T01:13:04.9688541Z           with mongodbatlas_project.test,
2025-09-14T01:13:04.9689617Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:04.9690602Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:04.9691113Z         
2025-09-14T01:13:04.9692216Z         error getting project (68c60c4dd444485797b223b8): error getting project's
2025-09-14T01:13:04.9693076Z         limits (68c60c4dd444485797b223b8):
2025-09-14T01:13:04.9694326Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c4dd444485797b223b8/limits
2025-09-14T01:13:04.9695736Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:04.9696804Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:04.9697503Z         BadRequestDetail: 
2025-09-14T01:13:04.9697961Z --- FAIL: TestMigProject_basic (35.47s)
```

- 2025-09-15
  - PASS 8 seconds
  - FAIL 33 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6502493Z === RUN   TestMigProject_basic
2025-09-15T07:06:19.6514362Z    test_name=TestMigProject_basic test_step_number=1
2025-09-15T07:06:19.6515105Z     resource_project_migration_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-09-15T07:06:19.6515649Z         
2025-09-15T07:06:19.6516074Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6516406Z         
2025-09-15T07:06:19.6516712Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6517343Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6517889Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6518179Z         
2025-09-15T07:06:19.6518895Z         error getting project (68c7b04fd444485797b5e8d0): error getting project's
2025-09-15T07:06:19.6519369Z         limits (68c7b04fd444485797b5e8d0):
2025-09-15T07:06:19.6519941Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04fd444485797b5e8d0/limits
2025-09-15T07:06:19.6520891Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6521473Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6521873Z         BadRequestDetail: 
2025-09-15T07:06:19.6522149Z --- FAIL: TestMigProject_basic (33.67s)
```

- 2025-09-16 PASS 13 seconds
- 2025-09-17 PASS 11 seconds
- 2025-09-18 PASS 13 seconds
- 2025-09-19 PASS 12 seconds
- 2025-09-20 PASS 13 seconds
- 2025-09-21 PASS 13 seconds
- 2025-09-22 PASS 13 seconds
- 2025-09-23 PASS 12 seconds
- 2025-09-24 PASS 13 seconds
- 2025-09-25 PASS 13 seconds
- 2025-09-26 PASS 9 seconds
- 2025-09-27 PASS 12 seconds
- 2025-09-28 PASS 13 seconds
- 2025-09-29 PASS 9 seconds
- 2025-09-30
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 8 seconds
- 2025-10-01
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 12 seconds
- 2025-10-02 PASS 13 seconds