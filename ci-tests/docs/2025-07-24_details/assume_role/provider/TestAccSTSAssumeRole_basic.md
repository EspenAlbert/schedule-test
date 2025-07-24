# assume_role/provider/TestAccSTSAssumeRole_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 34) FAIL(x 3)
Success rate: 91.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:31](#error-2025-07-06t0031550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c3fd690ae45e168bc9c8/limits | qa | flaky_500 | 35.07s
[2025-07-10 13:07](#error-2025-07-10t1307100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbaff006d8d55bb9e65e9/limits | qa | flaky_500 | 36.02s
[2025-07-20 00:32](#error-2025-07-20t0032530000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3936426db7026b5b15ec/limits | qa | flaky_500 | 35.05s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 10 seconds
- 2025-06-26 PASS 12 seconds
- 2025-06-27 PASS 10 seconds
- 2025-06-28 PASS 14 seconds
- 2025-06-29 PASS 7 seconds
- 2025-06-30 PASS 9 seconds
- 2025-07-01
  - PASS 6 seconds
  - PASS 13 seconds
  - PASS 6 seconds
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 12 seconds
- 2025-07-03 PASS 11 seconds
- 2025-07-04 PASS 11 seconds
- 2025-07-05 PASS 6 seconds
- 2025-07-06

### Error 2025-07-06T00:31:55+00:00
```
2025-07-06T00:31:55.8285718Z === RUN   TestAccSTSAssumeRole_basic
2025-07-06T00:31:55.8289324Z === CONT  TestAccSTSAssumeRole_basic
2025-07-06T00:32:30.5783612Z   
2025-07-06T00:32:30.5784653Z     provider_authentication_test.go:18: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:32:30.5785377Z         
2025-07-06T00:32:30.5786025Z         Error: error when getting project properties after create
2025-07-06T00:32:30.5786514Z         
2025-07-06T00:32:30.5786902Z           with mongodbatlas_project.test,
2025-07-06T00:32:30.5787729Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:32:30.5788508Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:32:30.5788811Z         
2025-07-06T00:32:30.5789387Z         error getting project (6869c3fd690ae45e168bc9c8): error getting project's
2025-07-06T00:32:30.5789957Z         limits (6869c3fd690ae45e168bc9c8):
2025-07-06T00:32:30.5790552Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c3fd690ae45e168bc9c8/limits
2025-07-06T00:32:30.5791701Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:32:30.5792347Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:32:30.5792743Z         BadRequestDetail: 
2025-07-06T00:32:31.5029098Z --- FAIL: TestAccSTSAssumeRole_basic (35.67s)
```

- 2025-07-07 PASS 6 seconds
- 2025-07-08 PASS 10 seconds
- 2025-07-09 PASS 6 seconds
- 2025-07-10
  - PASS 12 seconds
  - FAIL 36 seconds

### Error 2025-07-10T13:07:10+00:00
```
2025-07-10T13:07:10.8466013Z === RUN   TestAccSTSAssumeRole_basic
2025-07-10T13:07:10.8467797Z === CONT  TestAccSTSAssumeRole_basic
2025-07-10T13:07:46.1097001Z    test_working_directory=/tmp/plugintest3554989183 test_name=TestAccSTSAssumeRole_basic test_terraform_path=/home/runner/work/_temp/df8c8c1c-bc9c-49c9-be9d-b2b0a81a3260/terraform test_step_number=1
2025-07-10T13:07:46.1099257Z     provider_authentication_test.go:18: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-10T13:07:46.1100318Z         
2025-07-10T13:07:46.1101015Z         Error: error when getting project properties after create
2025-07-10T13:07:46.1101605Z         
2025-07-10T13:07:46.1102101Z           with mongodbatlas_project.test,
2025-07-10T13:07:46.1102855Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:07:46.1103847Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:07:46.1104342Z         
2025-07-10T13:07:46.1105140Z         error getting project (686fbaff006d8d55bb9e65e9): error getting project's
2025-07-10T13:07:46.1105893Z         limits (686fbaff006d8d55bb9e65e9):
2025-07-10T13:07:46.1106591Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbaff006d8d55bb9e65e9/limits
2025-07-10T13:07:46.1107342Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:07:46.1108181Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:07:46.1108747Z         BadRequestDetail: 
2025-07-10T13:07:47.0432990Z --- FAIL: TestAccSTSAssumeRole_basic (36.20s)
```

- 2025-07-11 PASS 11 seconds
- 2025-07-12 PASS 7 seconds
- 2025-07-13 PASS 7 seconds
- 2025-07-14 PASS 7 seconds
- 2025-07-15 PASS 11 seconds
- 2025-07-16 PASS 13 seconds
- 2025-07-17 PASS 8 seconds
- 2025-07-18 PASS 11 seconds
- 2025-07-19 PASS 8 seconds
- 2025-07-20

### Error 2025-07-20T00:32:53+00:00
```
2025-07-20T00:32:53.4268066Z === RUN   TestAccSTSAssumeRole_basic
2025-07-20T00:32:53.4269177Z === CONT  TestAccSTSAssumeRole_basic
2025-07-20T00:33:28.0222902Z    test_working_directory=/tmp/plugintest72260043 test_step_number=2 test_name=TestAccSTSAssumeRole_basic test_terraform_path=/home/runner/work/_temp/7fab7829-5b4b-40b7-87c9-d3c5e36bdf18/terraform
2025-07-20T00:33:28.0224482Z     provider_authentication_test.go:18: Step 2/2 error running import: exit status 1
2025-07-20T00:33:28.0225012Z         
2025-07-20T00:33:28.0225726Z         Error: error when getting project properties after create
2025-07-20T00:33:28.0226321Z         
2025-07-20T00:33:28.0227127Z         error getting project (687c3936426db7026b5b15ec): error getting project's
2025-07-20T00:33:28.0227943Z         limits (687c3936426db7026b5b15ec):
2025-07-20T00:33:28.0228688Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3936426db7026b5b15ec/limits
2025-07-20T00:33:28.0229733Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:33:28.0230423Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:33:28.0230888Z         BadRequestDetail: 
2025-07-20T00:33:28.0231209Z         
2025-07-20T00:33:28.9571374Z --- FAIL: TestAccSTSAssumeRole_basic (35.53s)
```

- 2025-07-21 PASS 7 seconds
- 2025-07-22 PASS 13 seconds
- 2025-07-23
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-07-24 PASS 6 seconds