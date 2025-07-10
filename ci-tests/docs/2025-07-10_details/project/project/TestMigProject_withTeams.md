# project/project/TestMigProject_withTeams Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 3)
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030200000) |  | qa |  | 1.04s
[2025-06-05 00:29](#error-2025-06-05t0029340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 5.03s
[2025-07-06 00:37](#error-2025-07-06t0037510000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c430690ae45e168be10c/limits | qa | flaky_500 | 33.09s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 14 seconds
- 2025-04-13 PASS 8 seconds
- 2025-04-14 PASS 13 seconds
- 2025-04-15 PASS 9 seconds
- 2025-04-16
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-04-17 PASS 9 seconds
- 2025-04-18 PASS 16 seconds
- 2025-04-19 PASS 13 seconds
- 2025-04-20 PASS 8 seconds
- 2025-04-21 PASS 13 seconds
- 2025-04-22 PASS 9 seconds
- 2025-04-23 PASS 14 seconds
- 2025-04-24 PASS 9 seconds
- 2025-04-25 PASS 10 seconds
- 2025-04-26 PASS 22 seconds
- 2025-04-27 PASS 14 seconds
- 2025-04-28 PASS 8 seconds
- 2025-04-29 PASS 8 seconds
- 2025-04-30
  - PASS 15 seconds
  - PASS 14 seconds
- 2025-05-01
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 13 seconds
  - PASS 12 seconds
- 2025-05-02 PASS 12 seconds
- 2025-05-03 PASS 9 seconds
- 2025-05-04 PASS 9 seconds
- 2025-05-05 PASS 10 seconds
- 2025-05-06 PASS 8 seconds
- 2025-05-07 PASS 13 seconds
- 2025-05-08 PASS 9 seconds
- 2025-05-09 PASS 16 seconds
- 2025-05-10 PASS 11 seconds
- 2025-05-11

### Error 2025-05-11T00:30:20+00:00
```
2025-05-11T00:30:20.3730118Z === RUN   TestMigProject_withTeams
2025-05-11T00:30:20.3736970Z    test_working_directory=/tmp/plugintest907844424 test_name=TestMigProject_withTeams test_terraform_path=/home/runner/work/_temp/613870aa-2996-4d68-93a5-22f44d0f7261/terraform
2025-05-11T00:30:20.3738724Z     resource_project_migration_test.go:63: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:20.3739496Z         
2025-05-11T00:30:20.3740139Z         Error: error creating project: test-acc-tf-p-4389646435428528167
2025-05-11T00:30:20.3740723Z         
2025-05-11T00:30:20.3741056Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3741796Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3742589Z           14: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3742993Z         
2025-05-11T00:30:20.3743493Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3744011Z         type
2025-05-11T00:30:20.3744264Z --- FAIL: TestMigProject_withTeams (1.44s)
```

- 2025-05-12 PASS 15 seconds
- 2025-05-13
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-05-14 PASS 15 seconds
- 2025-05-15 PASS 10 seconds
- 2025-05-16 PASS 9 seconds
- 2025-05-17 PASS 11 seconds
- 2025-05-18 PASS 10 seconds
- 2025-05-19 PASS 9 seconds
- 2025-05-20 PASS 7 seconds
- 2025-05-21 PASS 8 seconds
- 2025-05-22 PASS 11 seconds
- 2025-05-23 PASS 9 seconds
- 2025-05-24 PASS 12 seconds
- 2025-05-25 PASS 9 seconds
- 2025-05-26 PASS 10 seconds
- 2025-05-27
  - PASS 9 seconds
  - PASS 13 seconds
- 2025-05-28
  - PASS 12 seconds
  - PASS 10 seconds
- 2025-05-29 PASS 13 seconds
- 2025-05-30 PASS 11 seconds
- 2025-05-31 PASS 10 seconds
- 2025-06-01
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-06-02
  - PASS 8 seconds
  - PASS 17 seconds
  - PASS 14 seconds
- 2025-06-03 PASS 11 seconds
- 2025-06-04 PASS 14 seconds
- 2025-06-05

### Error 2025-06-05T00:29:34+00:00
```
2025-06-05T00:29:34.4888481Z === RUN   TestMigProject_withTeams
2025-06-05T00:29:34.4896083Z   
2025-06-05T00:29:34.4896585Z     resource_project_migration_test.go:63: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:34.4897017Z         
2025-06-05T00:29:34.4897441Z         Error: error creating project: test-acc-tf-p-7153184514845741073
2025-06-05T00:29:34.4897795Z         
2025-06-05T00:29:34.4898109Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.4898715Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.4899279Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.4899582Z         
2025-06-05T00:29:34.4900055Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.4900691Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.4901448Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.4901868Z --- FAIL: TestMigProject_withTeams (5.30s)
```

- 2025-06-06 PASS 15 seconds
- 2025-06-07 PASS 10 seconds
- 2025-06-08 PASS 12 seconds
- 2025-06-09 PASS 15 seconds
- 2025-06-10 PASS 13 seconds
- 2025-06-11
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-06-12 PASS 13 seconds
- 2025-06-13 PASS 13 seconds
- 2025-06-14 PASS 9 seconds
- 2025-06-15 PASS 13 seconds
- 2025-06-16 PASS 10 seconds
- 2025-06-17 PASS 8 seconds
- 2025-06-18 PASS 10 seconds
- 2025-06-19 PASS 9 seconds
- 2025-06-20 PASS 9 seconds
- 2025-06-21 PASS 15 seconds
- 2025-06-22 PASS 9 seconds
- 2025-06-23 PASS 9 seconds
- 2025-06-24 PASS 17 seconds
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
- 2025-07-10 PASS 13 seconds