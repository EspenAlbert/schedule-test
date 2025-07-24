# project/project/TestMigProject_withTeams Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:37](#error-2025-07-06t0037510000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c430690ae45e168be10c/limits | qa | flaky_500 | 33.09s
[2025-07-10 13:15](#error-2025-07-10t1315100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb15fd583001f9eebf5c/limits | qa | flaky_500 | 40.07s
[2025-07-13 00:39](#error-2025-07-13t0039280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872feab207f456171041afd/limits | qa | flaky_500 | 35.05s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 14 seconds
- 2025-06-26 PASS 13 seconds
- 2025-06-27 PASS 10 seconds
- 2025-06-28 PASS 10 seconds
- 2025-06-29 PASS 13 seconds
- 2025-06-30 PASS 17 seconds
- 2025-07-01
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 17 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-07-02 PASS 12 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 10 seconds
- 2025-07-05 PASS 10 seconds
- 2025-07-06

### Error 2025-07-06T00:37:51+00:00
```
2025-07-06T00:37:51.5470163Z === RUN   TestMigProject_withTeams
2025-07-06T00:37:51.5477734Z   
2025-07-06T00:37:51.5478181Z     resource_project_migration_test.go:63: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:37:51.5478583Z         
2025-07-06T00:37:51.5478941Z         Error: error when getting project properties after create
2025-07-06T00:37:51.5479256Z         
2025-07-06T00:37:51.5479534Z           with mongodbatlas_project.test,
2025-07-06T00:37:51.5480101Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-06T00:37:51.5480617Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:37:51.5480892Z         
2025-07-06T00:37:51.5481313Z         error getting project (6869c430690ae45e168be10c): error getting project's
2025-07-06T00:37:51.5481747Z         limits (6869c430690ae45e168be10c):
2025-07-06T00:37:51.5482306Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c430690ae45e168be10c/limits
2025-07-06T00:37:51.5482958Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:37:51.5484371Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:37:51.5484763Z         BadRequestDetail: 
2025-07-06T00:37:51.5485029Z --- FAIL: TestMigProject_withTeams (33.93s)
```

- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 9 seconds
- 2025-07-09 PASS 9 seconds
- 2025-07-10
  - PASS 13 seconds
  - FAIL 40 seconds

### Error 2025-07-10T13:15:10+00:00
```
2025-07-10T13:15:10.8726435Z === RUN   TestMigProject_withTeams
2025-07-10T13:15:10.8741400Z    test_terraform_path=/home/runner/work/_temp/7f182905-095e-4083-83db-26e0c86a4e53/terraform test_name=TestMigProject_withTeams test_working_directory=/tmp/plugintest2305435322 test_step_number=2
2025-07-10T13:15:10.8742547Z     resource_project_migration_test.go:63: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-07-10T13:15:10.8743005Z         
2025-07-10T13:15:10.8743381Z         Error: error when getting project properties after create
2025-07-10T13:15:10.8743711Z         
2025-07-10T13:15:10.8743992Z           with mongodbatlas_project.test,
2025-07-10T13:15:10.8744567Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:15:10.8745099Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:15:10.8745574Z         
2025-07-10T13:15:10.8746102Z         error getting project (686fbb15fd583001f9eebf5c): error getting project's
2025-07-10T13:15:10.8746598Z         limits (686fbb15fd583001f9eebf5c):
2025-07-10T13:15:10.8747179Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb15fd583001f9eebf5c/limits
2025-07-10T13:15:10.8747840Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:15:10.8748410Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:15:10.8748975Z         BadRequestDetail: 
2025-07-10T13:15:10.8749242Z --- FAIL: TestMigProject_withTeams (40.71s)
```

- 2025-07-11 PASS 15 seconds
- 2025-07-12 PASS 14 seconds
- 2025-07-13

### Error 2025-07-13T00:39:28+00:00
```
2025-07-13T00:39:28.2900585Z === RUN   TestMigProject_withTeams
2025-07-13T00:39:28.2911943Z   
2025-07-13T00:39:28.2912458Z     resource_project_migration_test.go:63: Step 1/2 error: Error running apply: exit status 1
2025-07-13T00:39:28.2912895Z         
2025-07-13T00:39:28.2913286Z         Error: error when getting project properties after create
2025-07-13T00:39:28.2913893Z         
2025-07-13T00:39:28.2914208Z           with mongodbatlas_project.test,
2025-07-13T00:39:28.2914811Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-13T00:39:28.2915363Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-13T00:39:28.2915653Z         
2025-07-13T00:39:28.2916395Z         error getting project (6872feab207f456171041afd): error getting project's
2025-07-13T00:39:28.2916876Z         limits (6872feab207f456171041afd):
2025-07-13T00:39:28.2917456Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872feab207f456171041afd/limits
2025-07-13T00:39:28.2918135Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:39:28.2918723Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:39:28.2919117Z         BadRequestDetail: 
2025-07-13T00:39:28.2919404Z --- FAIL: TestMigProject_withTeams (35.54s)
```

- 2025-07-14 PASS 16 seconds
- 2025-07-15 PASS 9 seconds
- 2025-07-16 PASS 13 seconds
- 2025-07-17 PASS 15 seconds
- 2025-07-18 PASS 12 seconds
- 2025-07-19 PASS 10 seconds
- 2025-07-20 PASS 29 seconds
- 2025-07-21 PASS 13 seconds
- 2025-07-22 PASS 11 seconds
- 2025-07-23
  - PASS 11 seconds
  - PASS 8 seconds
  - PASS 13 seconds
- 2025-07-24 PASS 15 seconds