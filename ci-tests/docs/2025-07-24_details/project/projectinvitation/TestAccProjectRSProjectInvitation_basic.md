# project/projectinvitation/TestAccProjectRSProjectInvitation_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:37](#error-2025-07-06t0037510000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c44d7267b5775b683ed6/limits | qa | flaky_500 | 35.02s
[2025-07-10 13:15](#error-2025-07-10t1315100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb4f006d8d55bb9e7773/limits | qa | flaky_500 | 32.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 12 seconds
- 2025-06-26 PASS 12 seconds
- 2025-06-27 PASS 10 seconds
- 2025-06-28 PASS 8 seconds
- 2025-06-29 PASS 35 seconds
- 2025-06-30 PASS 12 seconds
- 2025-07-01
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 16 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-07-02 PASS 8 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 7 seconds
- 2025-07-05 PASS 6 seconds
- 2025-07-06

### Error 2025-07-06T00:37:51+00:00
```
2025-07-06T00:37:51.5617983Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-07-06T00:37:51.5630196Z    test_working_directory=/tmp/plugintest3719597593 test_step_number=1
2025-07-06T00:37:51.5630873Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:37:51.5631333Z         
2025-07-06T00:37:51.5631698Z         Error: error when getting project properties after create
2025-07-06T00:37:51.5632018Z         
2025-07-06T00:37:51.5632309Z           with mongodbatlas_project.test,
2025-07-06T00:37:51.5632879Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:37:51.5633545Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:37:51.5633832Z         
2025-07-06T00:37:51.5634259Z         error getting project (6869c44d7267b5775b683ed6): error getting project's
2025-07-06T00:37:51.5634691Z         limits (6869c44d7267b5775b683ed6):
2025-07-06T00:37:51.5635235Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c44d7267b5775b683ed6/limits
2025-07-06T00:37:51.5635889Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:37:51.5636445Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:37:51.5636825Z         BadRequestDetail: 
2025-07-06T00:37:51.5637136Z --- FAIL: TestAccProjectRSProjectInvitation_basic (35.16s)
```

- 2025-07-07 PASS 6 seconds
- 2025-07-08 PASS 8 seconds
- 2025-07-09 PASS 7 seconds
- 2025-07-10
  - PASS 11 seconds
  - FAIL 32 seconds

### Error 2025-07-10T13:15:10+00:00
```
2025-07-10T13:15:10.8854802Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-07-10T13:15:10.8867038Z    test_step_number=1 test_name=TestAccProjectRSProjectInvitation_basic test_terraform_path=/home/runner/work/_temp/7f182905-095e-4083-83db-26e0c86a4e53/terraform
2025-07-10T13:15:10.8867962Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-07-10T13:15:10.8868374Z         
2025-07-10T13:15:10.8868739Z         Error: error when getting project properties after create
2025-07-10T13:15:10.8869053Z         
2025-07-10T13:15:10.8869332Z           with mongodbatlas_project.test,
2025-07-10T13:15:10.8869924Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:15:10.8870447Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:15:10.8870731Z         
2025-07-10T13:15:10.8871174Z         error getting project (686fbb4f006d8d55bb9e7773): error getting project's
2025-07-10T13:15:10.8871635Z         limits (686fbb4f006d8d55bb9e7773):
2025-07-10T13:15:10.8872199Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb4f006d8d55bb9e7773/limits
2025-07-10T13:15:10.8872853Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:15:10.8873416Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:15:10.8873803Z         BadRequestDetail: 
2025-07-10T13:15:10.8874111Z --- FAIL: TestAccProjectRSProjectInvitation_basic (32.86s)
```

- 2025-07-11 PASS 15 seconds
- 2025-07-12 PASS 13 seconds
- 2025-07-13 PASS 35 seconds
- 2025-07-14 PASS 12 seconds
- 2025-07-15 PASS 8 seconds
- 2025-07-16 PASS 9 seconds
- 2025-07-17 PASS 15 seconds
- 2025-07-18 PASS 13 seconds
- 2025-07-19 PASS 8 seconds
- 2025-07-20 PASS 6 seconds
- 2025-07-21 PASS 13 seconds
- 2025-07-22 PASS 12 seconds
- 2025-07-23
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 43 seconds
- 2025-07-24 PASS 11 seconds