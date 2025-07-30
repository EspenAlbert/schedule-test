# project/project/TestAccProject_updatedToEmptyRoles Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-20 00:38](#error-2025-07-20t0038280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3993426db7026b5b2e7f/limits | qa | flaky_500 | 38.05s
[2025-07-27 00:37](#error-2025-07-27t0037030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68857424ea884d723491f817/limits | qa | flaky_500 | 37.01s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-07-02 PASS 12 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 9 seconds
- 2025-07-05 PASS 9 seconds
- 2025-07-06 PASS 10 seconds
- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 9 seconds
- 2025-07-09 PASS 10 seconds
- 2025-07-10
  - PASS 17 seconds
  - PASS 14 seconds
- 2025-07-11 PASS 15 seconds
- 2025-07-12 PASS 14 seconds
- 2025-07-13 PASS 22 seconds
- 2025-07-14 PASS 14 seconds
- 2025-07-15 PASS 10 seconds
- 2025-07-16 PASS 11 seconds
- 2025-07-17 PASS 14 seconds
- 2025-07-18 PASS 13 seconds
- 2025-07-19 PASS 9 seconds
- 2025-07-20

### Error 2025-07-20T00:38:28+00:00
```
2025-07-20T00:38:28.9959518Z === RUN   TestAccProject_updatedToEmptyRoles
2025-07-20T00:38:28.9965610Z === CONT  TestAccProject_updatedToEmptyRoles
2025-07-20T00:38:29.0018521Z === NAME  TestAccProject_updatedToEmptyRoles
2025-07-20T00:38:29.0019073Z     resource_project_test.go:768: Step 2/2 error: Error running apply: exit status 1
2025-07-20T00:38:29.0019466Z         
2025-07-20T00:38:29.0019846Z         Error: error when getting project properties after create
2025-07-20T00:38:29.0020281Z         
2025-07-20T00:38:29.0020572Z           with mongodbatlas_project.test,
2025-07-20T00:38:29.0021154Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T00:38:29.0021690Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-20T00:38:29.0022105Z         
2025-07-20T00:38:29.0022544Z         error getting project (687c3993426db7026b5b2e7f): error getting project's
2025-07-20T00:38:29.0022986Z         limits (687c3993426db7026b5b2e7f):
2025-07-20T00:38:29.0023542Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3993426db7026b5b2e7f/limits
2025-07-20T00:38:29.0024191Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:38:29.0024753Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:38:29.0025134Z         BadRequestDetail: 
2025-07-20T00:38:29.0037148Z   
2025-07-20T00:38:29.0063078Z --- FAIL: TestAccProject_updatedToEmptyRoles (38.54s)
```

- 2025-07-21 PASS 13 seconds
- 2025-07-22 PASS 11 seconds
- 2025-07-23
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 39 seconds
- 2025-07-24 PASS 14 seconds
- 2025-07-25 PASS 11 seconds
- 2025-07-26 PASS 11 seconds
- 2025-07-27

### Error 2025-07-27T00:37:03+00:00
```
2025-07-27T00:37:03.6051477Z === RUN   TestAccProject_updatedToEmptyRoles
2025-07-27T00:37:03.6060915Z === CONT  TestAccProject_updatedToEmptyRoles
2025-07-27T00:37:03.6107528Z === NAME  TestAccProject_updatedToEmptyRoles
2025-07-27T00:37:03.6108501Z     resource_project_test.go:768: Step 2/2 error: Error running apply: exit status 1
2025-07-27T00:37:03.6108904Z         
2025-07-27T00:37:03.6109280Z         Error: error when getting project properties after create
2025-07-27T00:37:03.6109606Z         
2025-07-27T00:37:03.6109904Z           with mongodbatlas_project.test,
2025-07-27T00:37:03.6110484Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-27T00:37:03.6111018Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-27T00:37:03.6111302Z         
2025-07-27T00:37:03.6111732Z         error getting project (68857424ea884d723491f817): error getting project's
2025-07-27T00:37:03.6112172Z         limits (68857424ea884d723491f817):
2025-07-27T00:37:03.6112722Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68857424ea884d723491f817/limits
2025-07-27T00:37:03.6113381Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:37:03.6113949Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:37:03.6114331Z         BadRequestDetail: 
2025-07-27T00:37:03.6125995Z    test_name=TestAccProject_withUpdatedLimits test_terraform_path=/home/runner/work/_temp/a94800f0-6753-4cf9-8cee-47970843fff7/terraform test_working_directory=/tmp/plugintest1906477833 test_step_number=2
2025-07-27T00:37:03.6133531Z --- FAIL: TestAccProject_updatedToEmptyRoles (37.09s)
```

- 2025-07-28 PASS 12 seconds
- 2025-07-29 PASS 13 seconds
- 2025-07-30 PASS 10 seconds