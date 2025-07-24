# project/project/TestMigProject_withFalseDefaultSettings Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 00:43](#error-2025-06-29t0043460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089bf49709c3a5a3c9ee8/limits | qa | flaky_500 | 34.07s
[2025-07-06 00:37](#error-2025-07-06t0037510000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c452690ae45e168be395/limits | qa | flaky_500 | 35.03s
[2025-07-10 13:15](#error-2025-07-10t1315100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb3e006d8d55bb9e75d0/limits | qa | flaky_500 | 34.06s

## Timeline
- 2025-06-24: MISSING
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
- 2025-07-10
  - PASS 12 seconds
  - FAIL 34 seconds

### Error 2025-07-10T13:15:10+00:00
```
2025-07-10T13:15:10.8749564Z === RUN   TestMigProject_withFalseDefaultSettings
2025-07-10T13:15:10.8757459Z   
2025-07-10T13:15:10.8757992Z     resource_project_migration_test.go:90: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:15:10.8758409Z         
2025-07-10T13:15:10.8758773Z         Error: error when getting project properties after create
2025-07-10T13:15:10.8759085Z         
2025-07-10T13:15:10.8759365Z           with mongodbatlas_project.test,
2025-07-10T13:15:10.8759947Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-10T13:15:10.8760475Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:15:10.8760749Z         
2025-07-10T13:15:10.8761184Z         error getting project (686fbb3e006d8d55bb9e75d0): error getting project's
2025-07-10T13:15:10.8761632Z         limits (686fbb3e006d8d55bb9e75d0):
2025-07-10T13:15:10.8762192Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb3e006d8d55bb9e75d0/limits
2025-07-10T13:15:10.8762839Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:15:10.8763403Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:15:10.8763907Z         BadRequestDetail: 
2025-07-10T13:15:10.8764215Z --- FAIL: TestMigProject_withFalseDefaultSettings (34.61s)
```

- 2025-07-11 PASS 14 seconds
- 2025-07-12 PASS 12 seconds
- 2025-07-13 PASS 38 seconds
- 2025-07-14 PASS 12 seconds
- 2025-07-15 PASS 8 seconds
- 2025-07-16 PASS 12 seconds
- 2025-07-17 PASS 14 seconds
- 2025-07-18 PASS 12 seconds
- 2025-07-19 PASS 9 seconds
- 2025-07-20 PASS 8 seconds
- 2025-07-21 PASS 12 seconds
- 2025-07-22 PASS 11 seconds
- 2025-07-23
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 40 seconds
- 2025-07-24 PASS 12 seconds