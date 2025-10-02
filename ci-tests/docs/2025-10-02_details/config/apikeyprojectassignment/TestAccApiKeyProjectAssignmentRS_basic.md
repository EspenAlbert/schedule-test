# config/apikeyprojectassignment/TestAccApiKeyProjectAssignmentRS_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 4)
Success rate: 90.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:31](#error-2025-09-07t0031520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd2118704811492b562f7/limits | qa | flaky_500 | 34.01s
[2025-09-14 00:31](#error-2025-09-14t0031200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c8e1411d835e95b5123/limits | qa | flaky_500 | 32.09s
[2025-09-15 06:23](#error-2025-09-15t0623280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b096d444485797b5fc6b/limits | qa | flaky_500 | 33.05s
[2025-09-21 00:32](#error-2025-09-21t0032220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf473d5ccc8c441718c0db/limits | qa | flaky_500 | 18.06s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 11 seconds
- 2025-09-05 PASS 12 seconds
- 2025-09-06 PASS 13 seconds
- 2025-09-07

### Error 2025-09-07T00:31:52+00:00
```
2025-09-07T00:31:52.3856680Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2025-09-07T00:31:52.3857482Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2025-09-07T00:31:52.3869302Z    test_terraform_path=/home/runner/work/_temp/7c1e01b0-15ab-455e-a881-edb5c91d6e22/terraform test_name=TestAccApiKeyProjectAssignmentRS_basic test_working_directory=/tmp/plugintest2782149582
2025-09-07T00:31:52.3870264Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-09-07T00:31:52.3870619Z         
2025-09-07T00:31:52.3870985Z         Error: error when getting project properties after create
2025-09-07T00:31:52.3871301Z         
2025-09-07T00:31:52.3871582Z           with mongodbatlas_project.test,
2025-09-07T00:31:52.3872153Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2025-09-07T00:31:52.3872691Z           18: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:31:52.3872973Z         
2025-09-07T00:31:52.3873396Z         error getting project (68bcd2118704811492b562f7): error getting project's
2025-09-07T00:31:52.3873839Z         limits (68bcd2118704811492b562f7):
2025-09-07T00:31:52.3874383Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd2118704811492b562f7/limits
2025-09-07T00:31:52.3875026Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:31:52.3875705Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:31:52.3876093Z         BadRequestDetail: 
2025-09-07T00:31:52.3876400Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (34.11s)
```

- 2025-09-08
  - PASS 15 seconds
  - PASS 23 seconds
  - PASS 14 seconds
- 2025-09-09 PASS 15 seconds
- 2025-09-10 PASS 10 seconds
- 2025-09-11 PASS 11 seconds
- 2025-09-12 PASS 10 seconds
- 2025-09-13 PASS 17 seconds
- 2025-09-14

### Error 2025-09-14T00:31:20+00:00
```
2025-09-14T00:31:20.4808337Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2025-09-14T00:31:20.4809217Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2025-09-14T00:31:20.4823947Z   
2025-09-14T00:31:20.4824370Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-09-14T00:31:20.4824788Z         
2025-09-14T00:31:20.4825218Z         Error: error when getting project properties after create
2025-09-14T00:31:20.4825597Z         
2025-09-14T00:31:20.4825929Z           with mongodbatlas_project.test,
2025-09-14T00:31:20.4826610Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2025-09-14T00:31:20.4827244Z           18: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:31:20.4827723Z         
2025-09-14T00:31:20.4828238Z         error getting project (68c60c8e1411d835e95b5123): error getting project's
2025-09-14T00:31:20.4828753Z         limits (68c60c8e1411d835e95b5123):
2025-09-14T00:31:20.4829388Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c8e1411d835e95b5123/limits
2025-09-14T00:31:20.4830152Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:31:20.4830825Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:31:20.4831421Z         BadRequestDetail: 
2025-09-14T00:31:20.4831810Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (32.89s)
```

- 2025-09-15
  - PASS 9 seconds
  - FAIL 33 seconds

### Error 2025-09-15T06:23:28+00:00
```
2025-09-15T06:23:28.2363878Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2025-09-15T06:23:28.2364706Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2025-09-15T06:23:28.2376881Z    test_name=TestAccApiKeyProjectAssignmentRS_basic test_terraform_path=/home/runner/work/_temp/daaaf918-dc0f-4c8a-9f19-644c2f5cfb8b/terraform test_working_directory=/tmp/plugintest4040487663 test_step_number=1
2025-09-15T06:23:28.2377900Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-09-15T06:23:28.2378256Z         
2025-09-15T06:23:28.2378638Z         Error: error when getting project properties after create
2025-09-15T06:23:28.2378958Z         
2025-09-15T06:23:28.2379246Z           with mongodbatlas_project.test,
2025-09-15T06:23:28.2379823Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2025-09-15T06:23:28.2380363Z           18: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:23:28.2380657Z         
2025-09-15T06:23:28.2381086Z         error getting project (68c7b096d444485797b5fc6b): error getting project's
2025-09-15T06:23:28.2381544Z         limits (68c7b096d444485797b5fc6b):
2025-09-15T06:23:28.2382109Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b096d444485797b5fc6b/limits
2025-09-15T06:23:28.2382877Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:23:28.2383448Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:23:28.2383837Z         BadRequestDetail: 
2025-09-15T06:23:28.2384154Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (33.50s)
```

- 2025-09-16 PASS 10 seconds
- 2025-09-17 PASS 15 seconds
- 2025-09-18 PASS 13 seconds
- 2025-09-19 PASS 11 seconds
- 2025-09-20 PASS 15 seconds
- 2025-09-21

### Error 2025-09-21T00:32:22+00:00
```
2025-09-21T00:32:22.2368578Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2025-09-21T00:32:22.2369270Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2025-09-21T00:32:22.2381900Z   
2025-09-21T00:32:22.2382279Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-09-21T00:32:22.2382635Z         
2025-09-21T00:32:22.2383010Z         Error: error when getting project properties after create
2025-09-21T00:32:22.2383332Z         
2025-09-21T00:32:22.2383630Z           with mongodbatlas_project.test,
2025-09-21T00:32:22.2384221Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2025-09-21T00:32:22.2384760Z           18: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:32:22.2385041Z         
2025-09-21T00:32:22.2385491Z         error getting project (68cf473d5ccc8c441718c0db): error getting project's
2025-09-21T00:32:22.2386068Z         limits (68cf473d5ccc8c441718c0db):
2025-09-21T00:32:22.2386640Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf473d5ccc8c441718c0db/limits
2025-09-21T00:32:22.2387303Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:32:22.2387885Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:32:22.2388268Z         BadRequestDetail: 
2025-09-21T00:32:22.2388584Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (18.57s)
```

- 2025-09-22 PASS 23 seconds
- 2025-09-23 PASS 10 seconds
- 2025-09-24 PASS 12 seconds
- 2025-09-25 PASS 14 seconds
- 2025-09-26 PASS 12 seconds
- 2025-09-27 PASS 14 seconds
- 2025-09-28 PASS 9 seconds
- 2025-09-29 PASS 10 seconds
- 2025-09-30
  - PASS 11 seconds
  - PASS 13 seconds
  - PASS 9 seconds
- 2025-10-01
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 9 seconds
- 2025-10-02 PASS 14 seconds