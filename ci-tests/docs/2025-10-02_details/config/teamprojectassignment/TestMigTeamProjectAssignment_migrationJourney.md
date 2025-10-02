# config/teamprojectassignment/TestMigTeamProjectAssignment_migrationJourney Test Details
# Found 34 TestRuns in dev, qa from 2025-09-10 to 2025-10-02 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:31](#error-2025-09-14t0031410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60cc01411d835e95b64fa/limits | qa | flaky_500 | 41.00s
[2025-09-15 06:23](#error-2025-09-15t0623490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b0c7d444485797b60e85/limits | qa | flaky_500 | 42.08s
[2025-09-21 00:32](#error-2025-09-21t0032340000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf476f5ccc8c441718d487/limits | qa | flaky_500 | 43.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04: MISSING
- 2025-09-05: MISSING
- 2025-09-06: MISSING
- 2025-09-07: MISSING
- 2025-09-08: MISSING
- 2025-09-09: MISSING
- 2025-09-10 PASS 14 seconds
- 2025-09-11 PASS 15 seconds
- 2025-09-12 PASS 17 seconds
- 2025-09-13 PASS 20 seconds
- 2025-09-14

### Error 2025-09-14T00:31:41+00:00
```
2025-09-14T00:31:41.5735324Z === RUN   TestMigTeamProjectAssignment_migrationJourney
2025-09-14T00:31:41.5748547Z   
2025-09-14T00:31:41.5749197Z     resource_migration_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-09-14T00:31:41.5749672Z         
2025-09-14T00:31:41.5750243Z         Error: error when getting project properties after create
2025-09-14T00:31:41.5750652Z         
2025-09-14T00:31:41.5751163Z           with mongodbatlas_project.migration_path_project1,
2025-09-14T00:31:41.5752137Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_project" "migration_path_project1":
2025-09-14T00:31:41.5753054Z           33: 		resource "mongodbatlas_project" "migration_path_project1" {
2025-09-14T00:31:41.5753553Z         
2025-09-14T00:31:41.5754156Z         error getting project (68c60cc01411d835e95b64fa): error getting project's
2025-09-14T00:31:41.5754686Z         limits (68c60cc01411d835e95b64fa):
2025-09-14T00:31:41.5755457Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60cc01411d835e95b64fa/limits
2025-09-14T00:31:41.5757168Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:31:41.5758113Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:31:41.5758662Z         BadRequestDetail: 
2025-09-14T00:31:41.5759190Z --- FAIL: TestMigTeamProjectAssignment_migrationJourney (41.02s)
```

- 2025-09-15
  - PASS 15 seconds
  - FAIL 42 seconds

### Error 2025-09-15T06:23:49+00:00
```
2025-09-15T06:23:49.4820759Z === RUN   TestMigTeamProjectAssignment_migrationJourney
2025-09-15T06:23:49.4832026Z   
2025-09-15T06:23:49.4832665Z     resource_migration_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-09-15T06:23:49.4833065Z         
2025-09-15T06:23:49.4833447Z         Error: error when getting project properties after create
2025-09-15T06:23:49.4833776Z         
2025-09-15T06:23:49.4834155Z           with mongodbatlas_project.migration_path_project1,
2025-09-15T06:23:49.4834898Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_project" "migration_path_project1":
2025-09-15T06:23:49.4835589Z           33: 		resource "mongodbatlas_project" "migration_path_project1" {
2025-09-15T06:23:49.4835939Z         
2025-09-15T06:23:49.4836389Z         error getting project (68c7b0c7d444485797b60e85): error getting project's
2025-09-15T06:23:49.4836847Z         limits (68c7b0c7d444485797b60e85):
2025-09-15T06:23:49.4837414Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b0c7d444485797b60e85/limits
2025-09-15T06:23:49.4838080Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:23:49.4838658Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:23:49.4839045Z         BadRequestDetail: 
2025-09-15T06:23:49.4839393Z --- FAIL: TestMigTeamProjectAssignment_migrationJourney (42.77s)
```

- 2025-09-16 PASS 16 seconds
- 2025-09-17 PASS 23 seconds
- 2025-09-18 PASS 19 seconds
- 2025-09-19 PASS 17 seconds
- 2025-09-20 PASS 19 seconds
- 2025-09-21

### Error 2025-09-21T00:32:34+00:00
```
2025-09-21T00:32:34.0261180Z === RUN   TestMigTeamProjectAssignment_migrationJourney
2025-09-21T00:32:34.0272019Z    test_terraform_path=/home/runner/work/_temp/649c85c9-9a84-4d4b-bba1-e3f26d65ebf2/terraform test_working_directory=/tmp/plugintest3299435159
2025-09-21T00:32:34.0273255Z     resource_migration_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-09-21T00:32:34.0273672Z         
2025-09-21T00:32:34.0274158Z         Error: error when getting project properties after create
2025-09-21T00:32:34.0274499Z         
2025-09-21T00:32:34.0274981Z           with mongodbatlas_project.migration_path_project1,
2025-09-21T00:32:34.0276086Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_project" "migration_path_project1":
2025-09-21T00:32:34.0277229Z           33: 		resource "mongodbatlas_project" "migration_path_project1" {
2025-09-21T00:32:34.0277790Z         
2025-09-21T00:32:34.0278349Z         error getting project (68cf476f5ccc8c441718d487): error getting project's
2025-09-21T00:32:34.0278986Z         limits (68cf476f5ccc8c441718d487):
2025-09-21T00:32:34.0279717Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf476f5ccc8c441718d487/limits
2025-09-21T00:32:34.0280518Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:32:34.0281109Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:32:34.0281607Z         BadRequestDetail: 
2025-09-21T00:32:34.0291356Z    test_name=TestMigTeamProjectAssignment_migrationJourney test_terraform_path=/home/runner/work/_temp/649c85c9-9a84-4d4b-bba1-e3f26d65ebf2/terraform test_working_directory=/tmp/plugintest3299435159
2025-09-21T00:32:34.0292605Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-21T00:32:34.0293133Z         
2025-09-21T00:32:34.0295345Z         Error: error deleting Team (68cf476f5ccc8c441718d478): error getting teams from project information: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf46e65ccc8c44171880d8/teams GET: HTTP 404 Not Found (Error code: "GROUP_NOT_FOUND") Detail: No group with ID 68cf46e65ccc8c44171880d8 exists. Reason: Not Found. Params: [68cf46e65ccc8c44171880d8], BadRequestDetail: 
2025-09-21T00:32:34.0297012Z         
2025-09-21T00:32:34.0299490Z         Error: error deleting Team (68cf476fbd1cb41a3e707db1): error getting teams from project information: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf46e65ccc8c44171880d8/teams GET: HTTP 404 Not Found (Error code: "GROUP_NOT_FOUND") Detail: No group with ID 68cf46e65ccc8c44171880d8 exists. Reason: Not Found. Params: [68cf46e65ccc8c44171880d8], BadRequestDetail: 
2025-09-21T00:32:34.0301026Z         
2025-09-21T00:32:34.0301326Z --- FAIL: TestMigTeamProjectAssignment_migrationJourney (43.48s)
```

- 2025-09-22 PASS 27 seconds
- 2025-09-23 PASS 13 seconds
- 2025-09-24 PASS 16 seconds
- 2025-09-25 PASS 19 seconds
- 2025-09-26 PASS 17 seconds
- 2025-09-27 PASS 22 seconds
- 2025-09-28 PASS 14 seconds
- 2025-09-29 PASS 15 seconds
- 2025-09-30
  - PASS 15 seconds
  - PASS 19 seconds
  - PASS 15 seconds
- 2025-10-01
  - PASS 13 seconds
  - PASS 14 seconds
  - PASS 18 seconds
  - PASS 16 seconds
  - PASS 13 seconds
  - PASS 14 seconds
  - PASS 18 seconds
  - PASS 15 seconds
  - PASS 18 seconds
- 2025-10-02 PASS 20 seconds