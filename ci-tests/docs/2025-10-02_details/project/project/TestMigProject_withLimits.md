# project/project/TestMigProject_withLimits Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:39](#error-2025-09-07t0039140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd2088704811492b561d6/limits | qa | flaky_500 | 35.01s
[2025-09-14 01:13](#error-2025-09-14t0113040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c931411d835e95b5320/limits | qa | flaky_500 | 34.09s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b093fe60767b7f9b2d8d/limits | qa | flaky_500 | 37.05s
[2025-09-21 00:45](#error-2025-09-21t0045180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf4726bd1cb41a3e7062e2/limits | qa | flaky_500 | 34.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 11 seconds
- 2025-09-04 PASS 12 seconds
- 2025-09-05 PASS 12 seconds
- 2025-09-06 PASS 16 seconds
- 2025-09-07

### Error 2025-09-07T00:39:14+00:00
```
2025-09-07T00:39:14.4207748Z === RUN   TestMigProject_withLimits
2025-09-07T00:39:14.4214634Z    test_working_directory=/tmp/plugintest1249186483 test_name=TestMigProject_withLimits test_terraform_path=/home/runner/work/_temp/b6973140-fd7d-4db4-98ff-f7faa91aad51/terraform
2025-09-07T00:39:14.4215618Z     resource_project_migration_test.go:133: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:39:14.4216026Z         
2025-09-07T00:39:14.4216399Z         Error: error when getting project properties after create
2025-09-07T00:39:14.4216714Z         
2025-09-07T00:39:14.4217007Z           with mongodbatlas_project.test,
2025-09-07T00:39:14.4217593Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-07T00:39:14.4218127Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:39:14.4218404Z         
2025-09-07T00:39:14.4218844Z         error getting project (68bcd2088704811492b561d6): error getting project's
2025-09-07T00:39:14.4219421Z         limits (68bcd2088704811492b561d6):
2025-09-07T00:39:14.4219992Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd2088704811492b561d6/limits
2025-09-07T00:39:14.4220649Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:39:14.4221212Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:39:14.4221818Z         BadRequestDetail: 
2025-09-07T00:39:14.4222252Z --- FAIL: TestMigProject_withLimits (35.07s)
```

- 2025-09-08
  - PASS 13 seconds
  - PASS 49 seconds
  - PASS 12 seconds
- 2025-09-09 PASS 22 seconds
- 2025-09-10 PASS 13 seconds
- 2025-09-11 PASS 20 seconds
- 2025-09-12 PASS 28 seconds
- 2025-09-13 PASS 20 seconds
- 2025-09-14

### Error 2025-09-14T01:13:04+00:00
```
2025-09-14T01:13:04.9727642Z === RUN   TestMigProject_withLimits
2025-09-14T01:13:04.9741616Z   
2025-09-14T01:13:04.9742545Z     resource_project_migration_test.go:133: Step 1/2 error: Error running apply: exit status 1
2025-09-14T01:13:04.9743315Z         
2025-09-14T01:13:04.9743986Z         Error: error when getting project properties after create
2025-09-14T01:13:04.9744720Z         
2025-09-14T01:13:04.9745223Z           with mongodbatlas_project.test,
2025-09-14T01:13:04.9746280Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:04.9747268Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:04.9747773Z         
2025-09-14T01:13:04.9748571Z         error getting project (68c60c931411d835e95b5320): error getting project's
2025-09-14T01:13:04.9749395Z         limits (68c60c931411d835e95b5320):
2025-09-14T01:13:04.9750419Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c931411d835e95b5320/limits
2025-09-14T01:13:04.9751662Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:04.9752725Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:04.9753430Z         BadRequestDetail: 
2025-09-14T01:13:04.9753907Z --- FAIL: TestMigProject_withLimits (34.91s)
```

- 2025-09-15
  - PASS 12 seconds
  - FAIL 37 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6544232Z === RUN   TestMigProject_withLimits
2025-09-15T07:06:19.6551600Z    test_terraform_path=/home/runner/work/_temp/ff231b8d-1d5b-4e26-90c6-7654b29c907d/terraform
2025-09-15T07:06:19.6552829Z     resource_project_migration_test.go:133: Step 1/2 error: Error running apply: exit status 1
2025-09-15T07:06:19.6553655Z         
2025-09-15T07:06:19.6554403Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6555004Z         
2025-09-15T07:06:19.6555328Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6555936Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6556493Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6556789Z         
2025-09-15T07:06:19.6557247Z         error getting project (68c7b093fe60767b7f9b2d8d): error getting project's
2025-09-15T07:06:19.6557712Z         limits (68c7b093fe60767b7f9b2d8d):
2025-09-15T07:06:19.6558295Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b093fe60767b7f9b2d8d/limits
2025-09-15T07:06:19.6558972Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6559553Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6559953Z         BadRequestDetail: 
2025-09-15T07:06:19.6560236Z --- FAIL: TestMigProject_withLimits (37.49s)
```

- 2025-09-16 PASS 22 seconds
- 2025-09-17 PASS 16 seconds
- 2025-09-18 PASS 21 seconds
- 2025-09-19 PASS 21 seconds
- 2025-09-20 PASS 18 seconds
- 2025-09-21

### Error 2025-09-21T00:45:18+00:00
```
2025-09-21T00:45:18.6454069Z === RUN   TestMigProject_withLimits
2025-09-21T00:45:18.6464593Z   
2025-09-21T00:45:18.6465568Z     resource_project_migration_test.go:133: Step 1/2 error: Error running apply: exit status 1
2025-09-21T00:45:18.6466582Z         
2025-09-21T00:45:18.6467214Z         Error: error when getting project properties after create
2025-09-21T00:45:18.6467946Z         
2025-09-21T00:45:18.6468407Z           with mongodbatlas_project.test,
2025-09-21T00:45:18.6469347Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-21T00:45:18.6470349Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:45:18.6470700Z         
2025-09-21T00:45:18.6471289Z         error getting project (68cf4726bd1cb41a3e7062e2): error getting project's
2025-09-21T00:45:18.6471764Z         limits (68cf4726bd1cb41a3e7062e2):
2025-09-21T00:45:18.6472483Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf4726bd1cb41a3e7062e2/limits
2025-09-21T00:45:18.6473271Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:45:18.6473975Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:45:18.6474405Z         BadRequestDetail: 
2025-09-21T00:45:18.6474773Z --- FAIL: TestMigProject_withLimits (34.73s)
```

- 2025-09-22 PASS 24 seconds
- 2025-09-23 PASS 16 seconds
- 2025-09-24 PASS 22 seconds
- 2025-09-25 PASS 22 seconds
- 2025-09-26 PASS 14 seconds
- 2025-09-27 PASS 22 seconds
- 2025-09-28 PASS 22 seconds
- 2025-09-29 PASS 13 seconds
- 2025-09-30
  - PASS 16 seconds
  - PASS 21 seconds
  - PASS 12 seconds
- 2025-10-01
  - PASS 15 seconds
  - PASS 16 seconds
  - PASS 15 seconds
  - PASS 12 seconds
  - PASS 14 seconds
  - PASS 23 seconds
  - PASS 13 seconds
  - PASS 20 seconds
- 2025-10-02 PASS 22 seconds