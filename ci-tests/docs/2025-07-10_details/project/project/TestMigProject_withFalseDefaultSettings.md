# project/project/TestMigProject_withFalseDefaultSettings Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 110) FAIL(x 4)
Success rate: 96.49%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030200000) |  | qa |  | 1.05s
[2025-06-05 00:29](#error-2025-06-05t0029340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.06s
[2025-06-29 00:43](#error-2025-06-29t0043460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089bf49709c3a5a3c9ee8/limits | qa | flaky_500 | 34.07s
[2025-07-06 00:37](#error-2025-07-06t0037510000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c452690ae45e168be395/limits | qa | flaky_500 | 35.03s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 14 seconds
- 2025-04-13 PASS 7 seconds
- 2025-04-14 PASS 12 seconds
- 2025-04-15 PASS 7 seconds
- 2025-04-16
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-04-17 PASS 8 seconds
- 2025-04-18 PASS 14 seconds
- 2025-04-19 PASS 12 seconds
- 2025-04-20 PASS 6 seconds
- 2025-04-21 PASS 12 seconds
- 2025-04-22 PASS 8 seconds
- 2025-04-23 PASS 13 seconds
- 2025-04-24 PASS 8 seconds
- 2025-04-25 PASS 8 seconds
- 2025-04-26 PASS 16 seconds
- 2025-04-27 PASS 15 seconds
- 2025-04-28 PASS 7 seconds
- 2025-04-29 PASS 7 seconds
- 2025-04-30
  - PASS 12 seconds
  - PASS 17 seconds
- 2025-05-01
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 13 seconds
  - PASS 10 seconds
- 2025-05-02 PASS 11 seconds
- 2025-05-03 PASS 9 seconds
- 2025-05-04 PASS 9 seconds
- 2025-05-05 PASS 10 seconds
- 2025-05-06 PASS 7 seconds
- 2025-05-07 PASS 13 seconds
- 2025-05-08 PASS 8 seconds
- 2025-05-09 PASS 13 seconds
- 2025-05-10 PASS 9 seconds
- 2025-05-11

### Error 2025-05-11T00:30:20+00:00
```
2025-05-11T00:30:20.3744718Z === RUN   TestMigProject_withFalseDefaultSettings
2025-05-11T00:30:20.3751153Z    test_terraform_path=/home/runner/work/_temp/613870aa-2996-4d68-93a5-22f44d0f7261/terraform test_working_directory=/tmp/plugintest2047921725
2025-05-11T00:30:20.3752271Z     resource_project_migration_test.go:90: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:20.3752812Z         
2025-05-11T00:30:20.3753450Z         Error: error creating project: test-acc-tf-p-3759191040587102371
2025-05-11T00:30:20.3753916Z         
2025-05-11T00:30:20.3754265Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3755280Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3755868Z           14: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3756518Z         
2025-05-11T00:30:20.3757176Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3757594Z         type
2025-05-11T00:30:20.3757990Z --- FAIL: TestMigProject_withFalseDefaultSettings (1.53s)
```

- 2025-05-12 PASS 14 seconds
- 2025-05-13
  - PASS 10 seconds
  - PASS 7 seconds
- 2025-05-14 PASS 12 seconds
- 2025-05-15 PASS 8 seconds
- 2025-05-16 PASS 6 seconds
- 2025-05-17 PASS 11 seconds
- 2025-05-18 PASS 6 seconds
- 2025-05-19 PASS 8 seconds
- 2025-05-20 PASS 7 seconds
- 2025-05-21 PASS 9 seconds
- 2025-05-22 PASS 10 seconds
- 2025-05-23 PASS 8 seconds
- 2025-05-24 PASS 10 seconds
- 2025-05-25 PASS 7 seconds
- 2025-05-26 PASS 8 seconds
- 2025-05-27
  - PASS 7 seconds
  - PASS 9 seconds
- 2025-05-28
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-05-29 PASS 12 seconds
- 2025-05-30 PASS 11 seconds
- 2025-05-31 PASS 8 seconds
- 2025-06-01
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 7 seconds
- 2025-06-02
  - PASS 7 seconds
  - PASS 13 seconds
  - PASS 12 seconds
- 2025-06-03 PASS 8 seconds
- 2025-06-04 PASS 13 seconds
- 2025-06-05

### Error 2025-06-05T00:29:34+00:00
```
2025-06-05T00:29:34.4902219Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-05T00:29:34.4908770Z   
2025-06-05T00:29:34.4909239Z     resource_project_migration_test.go:90: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:34.4909661Z         
2025-06-05T00:29:34.4910079Z         Error: error creating project: test-acc-tf-p-279065433929023149
2025-06-05T00:29:34.4910436Z         
2025-06-05T00:29:34.4910742Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.4911519Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.4912216Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.4912525Z         
2025-06-05T00:29:34.4912997Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.4913625Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.4914202Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.4914629Z --- FAIL: TestMigProject_withFalseDefaultSettings (4.64s)
```

- 2025-06-06 PASS 14 seconds
- 2025-06-07 PASS 8 seconds
- 2025-06-08 PASS 11 seconds
- 2025-06-09 PASS 12 seconds
- 2025-06-10 PASS 14 seconds
- 2025-06-11
  - PASS 8 seconds
  - PASS 6 seconds
- 2025-06-12 PASS 13 seconds
- 2025-06-13 PASS 13 seconds
- 2025-06-14 PASS 10 seconds
- 2025-06-15 PASS 12 seconds
- 2025-06-16 PASS 10 seconds
- 2025-06-17 PASS 7 seconds
- 2025-06-18 PASS 8 seconds
- 2025-06-19 PASS 7 seconds
- 2025-06-20 PASS 8 seconds
- 2025-06-21 PASS 13 seconds
- 2025-06-22 PASS 8 seconds
- 2025-06-23 PASS 8 seconds
- 2025-06-24 PASS 12 seconds
- 2025-06-25 PASS 13 seconds
- 2025-06-26 PASS 12 seconds
- 2025-06-27 PASS 9 seconds
- 2025-06-28 PASS 8 seconds
- 2025-06-29

### Error 2025-06-29T00:43:46+00:00
```
2025-06-29T00:43:46.9467204Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-29T00:43:46.9477214Z    test_name=TestMigProject_withFalseDefaultSettings test_terraform_path=/home/runner/work/_temp/4fa93c7c-b112-43b3-b7cb-5cd37eace8f4/terraform test_working_directory=/tmp/plugintest3946131235
2025-06-29T00:43:46.9478520Z     resource_project_migration_test.go:90: Step 1/2 error: Error running apply: exit status 1
2025-06-29T00:43:46.9478945Z         
2025-06-29T00:43:46.9479332Z         Error: error when getting project properties after create
2025-06-29T00:43:46.9479657Z         
2025-06-29T00:43:46.9479953Z           with mongodbatlas_project.test,
2025-06-29T00:43:46.9480799Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-29T00:43:46.9481364Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:43:46.9481653Z         
2025-06-29T00:43:46.9482107Z         error getting project (686089bf49709c3a5a3c9ee8): error getting project's
2025-06-29T00:43:46.9482575Z         limits (686089bf49709c3a5a3c9ee8):
2025-06-29T00:43:46.9483137Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089bf49709c3a5a3c9ee8/limits
2025-06-29T00:43:46.9483793Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:43:46.9484362Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:43:46.9484755Z         BadRequestDetail: 
2025-06-29T00:43:46.9485076Z --- FAIL: TestMigProject_withFalseDefaultSettings (34.68s)
```

- 2025-06-30 PASS 13 seconds
- 2025-07-01
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 13 seconds
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-07-02 PASS 10 seconds
- 2025-07-03 PASS 7 seconds
- 2025-07-04 PASS 7 seconds
- 2025-07-05 PASS 6 seconds
- 2025-07-06

### Error 2025-07-06T00:37:51+00:00
```
2025-07-06T00:37:51.5485498Z === RUN   TestMigProject_withFalseDefaultSettings
2025-07-06T00:37:51.5492414Z    test_name=TestMigProject_withFalseDefaultSettings test_terraform_path=/home/runner/work/_temp/b4e56d1c-4b8c-4350-92f8-b71e14a8de1b/terraform test_working_directory=/tmp/plugintest561222977 test_step_number=1
2025-07-06T00:37:51.5493823Z     resource_project_migration_test.go:90: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:37:51.5494437Z         
2025-07-06T00:37:51.5494806Z         Error: error when getting project properties after create
2025-07-06T00:37:51.5495120Z         
2025-07-06T00:37:51.5495400Z           with mongodbatlas_project.test,
2025-07-06T00:37:51.5495971Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-06T00:37:51.5496502Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:37:51.5496785Z         
2025-07-06T00:37:51.5497225Z         error getting project (6869c452690ae45e168be395): error getting project's
2025-07-06T00:37:51.5497656Z         limits (6869c452690ae45e168be395):
2025-07-06T00:37:51.5498210Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c452690ae45e168be395/limits
2025-07-06T00:37:51.5498853Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:37:51.5499404Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:37:51.5499786Z         BadRequestDetail: 
2025-07-06T00:37:51.5500089Z --- FAIL: TestMigProject_withFalseDefaultSettings (35.28s)
```

- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 7 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10 PASS 12 seconds