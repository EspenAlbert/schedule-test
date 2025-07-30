# config/projectapikey/TestAccProjectAPIKey_deleteProjectAndAssignment Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:34](#error-2025-07-06t0034000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4547267b5775b683f9d/limits | qa | flaky_500 | 33.08s
[2025-07-10 13:09](#error-2025-07-10t1309210000) |  | qa | flaky_500 | 34.05s
[2025-07-13 00:34](#error-2025-07-13t0034200000) |  | qa | flaky_500 | 4.07s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 14 seconds
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 11 seconds
- 2025-07-02 PASS 11 seconds
- 2025-07-03 PASS 14 seconds
- 2025-07-04 PASS 12 seconds
- 2025-07-05 PASS 14 seconds
- 2025-07-06

### Error 2025-07-06T00:34:00+00:00
```
2025-07-06T00:34:00.2827133Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-06T00:34:00.2829073Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-06T00:34:00.2996816Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-06T00:34:00.2997784Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:34:00.2998470Z         
2025-07-06T00:34:00.2999115Z         Error: error when getting project properties after create
2025-07-06T00:34:00.2999649Z         
2025-07-06T00:34:00.3000170Z           with mongodbatlas_project.project2,
2025-07-06T00:34:00.3001229Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "project2":
2025-07-06T00:34:00.3002202Z           13: 		resource "mongodbatlas_project" "project2" {
2025-07-06T00:34:00.3002694Z         
2025-07-06T00:34:00.3003453Z         error getting project (6869c4547267b5775b683f9d): error getting project's
2025-07-06T00:34:00.3004207Z         limits (6869c4547267b5775b683f9d):
2025-07-06T00:34:00.3005301Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4547267b5775b683f9d/limits
2025-07-06T00:34:00.3006423Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:34:00.3007398Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:34:00.3008042Z         BadRequestDetail: 
2025-07-06T00:34:00.3008618Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (33.80s)
```

- 2025-07-07 PASS 9 seconds
- 2025-07-08 PASS 15 seconds
- 2025-07-09 PASS 14 seconds
- 2025-07-10
  - PASS 10 seconds
  - FAIL 34 seconds

### Error 2025-07-10T13:09:21+00:00
```
2025-07-10T13:09:21.1989323Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-10T13:09:21.1993743Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-10T13:09:21.2155578Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-10T13:09:21.2156136Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:09:21.2156636Z         
2025-07-10T13:09:21.2157143Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-10T13:09:21.2157544Z         
2025-07-10T13:09:21.2157853Z           with mongodbatlas_project_api_key.test,
2025-07-10T13:09:21.2158474Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project_api_key" "test":
2025-07-10T13:09:21.2159049Z           18: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-10T13:09:21.2159342Z         
2025-07-10T13:09:21.2165249Z    test_name=TestAccProjectAPIKey_changingSingleProject test_terraform_path=/home/runner/work/_temp/4d88fbfe-d7c1-4ace-8448-f77c49f7b3e7/terraform test_working_directory=/tmp/plugintest2973572933 test_step_number=1
2025-07-10T13:09:21.2175142Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-10T13:09:21.2175725Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:09:21.2176143Z         
2025-07-10T13:09:21.2176748Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-10T13:09:21.2177150Z         
2025-07-10T13:09:21.2177661Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (34.54s)
```

- 2025-07-11 PASS 12 seconds
- 2025-07-12 PASS 9 seconds
- 2025-07-13

### Error 2025-07-13T00:34:20+00:00
```
2025-07-13T00:34:20.8068970Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-13T00:34:20.8072983Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-13T00:34:20.8279802Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-13T00:34:20.8280362Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-07-13T00:34:20.8280759Z         
2025-07-13T00:34:20.8281264Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-13T00:34:20.8281667Z         
2025-07-13T00:34:20.8282130Z           with mongodbatlas_project_api_key.test,
2025-07-13T00:34:20.8282764Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project_api_key" "test":
2025-07-13T00:34:20.8283748Z           18: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-13T00:34:20.8284291Z         
2025-07-13T00:34:20.8290526Z    test_step_number=1 test_name=TestAccProjectAPIKey_deleteProjectAndAssignment test_terraform_path=/home/runner/work/_temp/6eb9759b-51ab-473e-abca-270c6d0714e5/terraform
2025-07-13T00:34:20.8291625Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-13T00:34:20.8292043Z         
2025-07-13T00:34:20.8292544Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-13T00:34:20.8292950Z         
2025-07-13T00:34:20.8293242Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (4.71s)
```

- 2025-07-14 PASS 15 seconds
- 2025-07-15 PASS 11 seconds
- 2025-07-16 PASS 10 seconds
- 2025-07-17 PASS 10 seconds
- 2025-07-18 PASS 12 seconds
- 2025-07-19 PASS 9 seconds
- 2025-07-20 PASS 8 seconds
- 2025-07-21 PASS 13 seconds
- 2025-07-22 PASS 11 seconds
- 2025-07-23
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 13 seconds
- 2025-07-24 PASS 11 seconds
- 2025-07-25 PASS 10 seconds
- 2025-07-26 PASS 10 seconds
- 2025-07-27 PASS 12 seconds
- 2025-07-28 PASS 13 seconds
- 2025-07-29 PASS 11 seconds
- 2025-07-30 PASS 9 seconds