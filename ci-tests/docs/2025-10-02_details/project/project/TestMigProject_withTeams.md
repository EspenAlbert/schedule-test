# project/project/TestMigProject_withTeams Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:39](#error-2025-09-07t0039140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1e08704811492b5506b/limits | qa | flaky_500 | 40.01s
[2025-09-14 01:13](#error-2025-09-14t0113040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c701411d835e95b4ad9/limits | qa | flaky_500 | 35.00s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b071fe60767b7f9b288d/limits | qa | flaky_500 | 34.03s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 9 seconds
- 2025-09-05 PASS 9 seconds
- 2025-09-06 PASS 15 seconds
- 2025-09-07

### Error 2025-09-07T00:39:14+00:00
```
2025-09-07T00:39:14.4185511Z === RUN   TestMigProject_withTeams
2025-09-07T00:39:14.4198660Z   
2025-09-07T00:39:14.4199231Z     resource_project_migration_test.go:63: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-09-07T00:39:14.4199675Z         
2025-09-07T00:39:14.4200063Z         Error: error when getting project properties after create
2025-09-07T00:39:14.4200385Z         
2025-09-07T00:39:14.4200680Z           with mongodbatlas_project.test,
2025-09-07T00:39:14.4201433Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:39:14.4202349Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:39:14.4202643Z         
2025-09-07T00:39:14.4203080Z         error getting project (68bcd1e08704811492b5506b): error getting project's
2025-09-07T00:39:14.4203522Z         limits (68bcd1e08704811492b5506b):
2025-09-07T00:39:14.4204104Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1e08704811492b5506b/limits
2025-09-07T00:39:14.4204768Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:39:14.4205336Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:39:14.4205715Z         BadRequestDetail: 
2025-09-07T00:39:14.4205985Z --- FAIL: TestMigProject_withTeams (40.06s)
```

- 2025-09-08
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 9 seconds
- 2025-09-09 PASS 14 seconds
- 2025-09-10 PASS 11 seconds
- 2025-09-11 PASS 13 seconds
- 2025-09-12 PASS 16 seconds
- 2025-09-13 PASS 13 seconds
- 2025-09-14

### Error 2025-09-14T01:13:04+00:00
```
2025-09-14T01:13:04.9698486Z === RUN   TestMigProject_withTeams
2025-09-14T01:13:04.9710950Z    test_terraform_path=/home/runner/work/_temp/73b7e432-0447-480c-b92d-31107786a6db/terraform test_working_directory=/tmp/plugintest2140435063
2025-09-14T01:13:04.9712664Z     resource_project_migration_test.go:63: Step 1/2 error: Error running apply: exit status 1
2025-09-14T01:13:04.9713457Z         
2025-09-14T01:13:04.9714141Z         Error: error when getting project properties after create
2025-09-14T01:13:04.9714878Z         
2025-09-14T01:13:04.9715389Z           with mongodbatlas_project.test,
2025-09-14T01:13:04.9716482Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:04.9717480Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:04.9718021Z         
2025-09-14T01:13:04.9718829Z         error getting project (68c60c701411d835e95b4ad9): error getting project's
2025-09-14T01:13:04.9719650Z         limits (68c60c701411d835e95b4ad9):
2025-09-14T01:13:04.9720688Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c701411d835e95b4ad9/limits
2025-09-14T01:13:04.9721934Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:04.9723005Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:04.9723710Z         BadRequestDetail: 
2025-09-14T01:13:04.9724194Z --- FAIL: TestMigProject_withTeams (35.00s)
```

- 2025-09-15
  - PASS 9 seconds
  - FAIL 34 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6522643Z === RUN   TestMigProject_withTeams
2025-09-15T07:06:19.6534328Z   
2025-09-15T07:06:19.6535126Z     resource_project_migration_test.go:63: Step 1/2 error: Error running apply: exit status 1
2025-09-15T07:06:19.6535920Z         
2025-09-15T07:06:19.6536619Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6536985Z         
2025-09-15T07:06:19.6537299Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6537908Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6538456Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6538755Z         
2025-09-15T07:06:19.6539208Z         error getting project (68c7b071fe60767b7f9b288d): error getting project's
2025-09-15T07:06:19.6539677Z         limits (68c7b071fe60767b7f9b288d):
2025-09-15T07:06:19.6540255Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b071fe60767b7f9b288d/limits
2025-09-15T07:06:19.6540931Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6541516Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6541922Z         BadRequestDetail: 
2025-09-15T07:06:19.6542212Z --- FAIL: TestMigProject_withTeams (34.34s)
```

- 2025-09-16 PASS 14 seconds
- 2025-09-17 PASS 10 seconds
- 2025-09-18 PASS 14 seconds
- 2025-09-19 PASS 13 seconds
- 2025-09-20 PASS 14 seconds
- 2025-09-21 PASS 31 seconds
- 2025-09-22 PASS 15 seconds
- 2025-09-23 PASS 11 seconds
- 2025-09-24 PASS 14 seconds
- 2025-09-25 PASS 15 seconds
- 2025-09-26 PASS 11 seconds
- 2025-09-27 PASS 12 seconds
- 2025-09-28 PASS 13 seconds
- 2025-09-29 PASS 10 seconds
- 2025-09-30
  - PASS 12 seconds
  - PASS 13 seconds
  - PASS 10 seconds
- 2025-10-01
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 14 seconds
  - PASS 9 seconds
  - PASS 13 seconds
- 2025-10-02 PASS 14 seconds