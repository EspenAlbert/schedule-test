# network/privateendpointregionalmode/TestAccPrivateEndpointRegionalMode_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 108) FAIL(x 5)
Success rate: 95.58%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029570000) |  | qa |  | 1.07s
[2025-06-05 00:54](#error-2025-06-05t0054090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 2.08s
[2025-06-22 00:44](#error-2025-06-22t0044140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574eeeaf7a0954e84ad945/limits | qa | flaky_500 | 33.01s
[2025-06-29 00:44](#error-2025-06-29t0044250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860898349709c3a5a3c86f1/limits | qa | flaky_500 | 94.09s
[2025-07-06 00:44](#error-2025-07-06t0044460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4047267b5775b682c01/limits | qa | flaky_500 | 99.03s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 17 seconds
- 2025-04-13 PASS 17 seconds
- 2025-04-14 PASS 21 seconds
- 2025-04-15 PASS 16 seconds
- 2025-04-16
  - PASS 22 seconds
  - PASS 18 seconds
- 2025-04-17 PASS 18 seconds
- 2025-04-18 PASS 17 seconds
- 2025-04-19 PASS 22 seconds
- 2025-04-20 PASS 22 seconds
- 2025-04-21 PASS 23 seconds
- 2025-04-22 PASS 17 seconds
- 2025-04-23 PASS 17 seconds
- 2025-04-24 PASS 16 seconds
- 2025-04-25 PASS 22 seconds
- 2025-04-26 PASS 50 seconds
- 2025-04-27 PASS 21 seconds
- 2025-04-28 PASS 22 seconds
- 2025-04-29 PASS 17 seconds
- 2025-04-30
  - PASS 21 seconds
  - PASS 18 seconds
- 2025-05-01
  - PASS 15 seconds
  - PASS 22 seconds
  - PASS 16 seconds
  - PASS 18 seconds
  - PASS 16 seconds
  - PASS 22 seconds
  - PASS 17 seconds
- 2025-05-02 PASS 16 seconds
- 2025-05-03 PASS 16 seconds
- 2025-05-04 PASS 24 seconds
- 2025-05-05 PASS 16 seconds
- 2025-05-06 PASS 16 seconds
- 2025-05-07 PASS 16 seconds
- 2025-05-08 PASS 17 seconds
- 2025-05-09 PASS a minute
- 2025-05-10 PASS a minute
- 2025-05-11

### Error 2025-05-11T00:29:57+00:00
```
2025-05-11T00:29:57.8810300Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-05-11T00:29:57.8812908Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-05-11T00:29:57.8822140Z    test_name=TestAccPrivateEndpointRegionalMode_basic test_terraform_path=/home/runner/work/_temp/ffc2262a-5740-46ce-ae59-28106014b618/terraform
2025-05-11T00:29:57.8823116Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:57.8823631Z         
2025-05-11T00:29:57.8824621Z         Error: error creating project: test-acc-tf-p-6295101367721794245
2025-05-11T00:29:57.8825072Z         
2025-05-11T00:29:57.8825435Z           with mongodbatlas_project.project,
2025-05-11T00:29:57.8826092Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-05-11T00:29:57.8826699Z           12: 		resource "mongodbatlas_project" "project" {
2025-05-11T00:29:57.8827045Z         
2025-05-11T00:29:57.8827546Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:57.8827987Z         type
2025-05-11T00:29:57.8828322Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (1.70s)
```

- 2025-05-12 PASS a minute
- 2025-05-13
  - PASS a minute
  - PASS a minute
- 2025-05-14 PASS a minute
- 2025-05-15 PASS a minute
- 2025-05-16 PASS a minute
- 2025-05-17 PASS a minute
- 2025-05-18 PASS a minute
- 2025-05-19 PASS a minute
- 2025-05-20 PASS a minute
- 2025-05-21 PASS a minute
- 2025-05-22 PASS a minute
- 2025-05-23 PASS a minute
- 2025-05-24 PASS a minute
- 2025-05-25 PASS a minute
- 2025-05-26 PASS a minute
- 2025-05-27 PASS a minute
- 2025-05-28
  - PASS a minute
  - PASS a minute
- 2025-05-29 PASS a minute
- 2025-05-30 PASS a minute
- 2025-05-31 PASS a minute
- 2025-06-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-06-02
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-06-03 PASS a minute
- 2025-06-04 PASS a minute
- 2025-06-05

### Error 2025-06-05T00:54:09+00:00
```
2025-06-05T00:54:09.2570072Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-06-05T00:54:09.2572712Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-06-05T00:54:09.2583362Z    test_name=TestAccPrivateEndpointRegionalMode_basic test_terraform_path=/home/runner/work/_temp/42386c02-8164-4f5b-ada4-e3e5d7e6fb7b/terraform test_working_directory=/tmp/plugintest591990273
2025-06-05T00:54:09.2584512Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:54:09.2584999Z         
2025-06-05T00:54:09.2585548Z         Error: error creating project: test-acc-tf-p-420481464726407649
2025-06-05T00:54:09.2585928Z         
2025-06-05T00:54:09.2586269Z           with mongodbatlas_project.project,
2025-06-05T00:54:09.2586922Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-06-05T00:54:09.2587522Z           12: 		resource "mongodbatlas_project" "project" {
2025-06-05T00:54:09.2587846Z         
2025-06-05T00:54:09.2588342Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:54:09.2589156Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:54:09.2589768Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:54:09.2590241Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (2.82s)
```

- 2025-06-06 PASS a minute
- 2025-06-07 PASS a minute
- 2025-06-08 PASS a minute
- 2025-06-09 PASS a minute
- 2025-06-10 PASS a minute
- 2025-06-11
  - PASS a minute
  - PASS a minute
- 2025-06-12 PASS a minute
- 2025-06-13 PASS a minute
- 2025-06-14 PASS a minute
- 2025-06-15 PASS a minute
- 2025-06-16 PASS a minute
- 2025-06-17 PASS a minute
- 2025-06-18 PASS a minute
- 2025-06-19 PASS a minute
- 2025-06-20 PASS a minute
- 2025-06-21 PASS a minute
- 2025-06-22

### Error 2025-06-22T00:44:14+00:00
```
2025-06-22T00:44:14.8907471Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-06-22T00:44:14.8912127Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-06-22T00:44:14.8935395Z    test_step_number=1
2025-06-22T00:44:14.8936386Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:44:14.8937220Z         
2025-06-22T00:44:14.8937908Z         Error: error when getting project properties after create
2025-06-22T00:44:14.8938523Z         
2025-06-22T00:44:14.8939091Z           with mongodbatlas_project.project,
2025-06-22T00:44:14.8940193Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-06-22T00:44:14.8941217Z           12: 		resource "mongodbatlas_project" "project" {
2025-06-22T00:44:14.8941770Z         
2025-06-22T00:44:14.8942590Z         error getting project (68574eeeaf7a0954e84ad945): error getting project's
2025-06-22T00:44:14.8943424Z         limits (68574eeeaf7a0954e84ad945):
2025-06-22T00:44:14.8944614Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eeeaf7a0954e84ad945/limits
2025-06-22T00:44:14.8945830Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:44:14.8946879Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:44:14.8947597Z         BadRequestDetail: 
2025-06-22T00:44:14.8948198Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (33.07s)
```

- 2025-06-23 PASS a minute
- 2025-06-24 PASS a minute
- 2025-06-25 PASS a minute
- 2025-06-26 PASS a minute
- 2025-06-27 PASS a minute
- 2025-06-28 PASS a minute
- 2025-06-29

### Error 2025-06-29T00:44:25+00:00
```
2025-06-29T00:44:25.8062289Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-06-29T00:44:25.8066511Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-06-29T00:44:25.8088292Z    test_terraform_path=/home/runner/work/_temp/ed926ef8-ba6c-45b8-b680-dede15945ee1/terraform test_name=TestAccPrivateEndpointRegionalMode_basic test_working_directory=/tmp/plugintest3700592994 test_step_number=1
2025-06-29T00:44:25.8090751Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:44:25.8091680Z         
2025-06-29T00:44:25.8092386Z         Error: error when getting project properties after create
2025-06-29T00:44:25.8092974Z         
2025-06-29T00:44:25.8093534Z           with mongodbatlas_project.project,
2025-06-29T00:44:25.8094649Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-06-29T00:44:25.8095708Z           12: 		resource "mongodbatlas_project" "project" {
2025-06-29T00:44:25.8096250Z         
2025-06-29T00:44:25.8097056Z         error getting project (6860898349709c3a5a3c86f1): error getting project's
2025-06-29T00:44:25.8097872Z         limits (6860898349709c3a5a3c86f1):
2025-06-29T00:44:25.8098899Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860898349709c3a5a3c86f1/limits
2025-06-29T00:44:25.8100269Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:44:25.8101332Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:44:25.8102046Z         BadRequestDetail: 
2025-06-29T00:44:25.8123857Z    test_name=TestMigPrivateEndpointRegionalMode_basic
2025-06-29T00:44:25.8133284Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (94.86s)
```

- 2025-06-30 PASS a minute
- 2025-07-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04 PASS a minute
- 2025-07-05 PASS a minute
- 2025-07-06

### Error 2025-07-06T00:44:46+00:00
```
2025-07-06T00:44:46.6398062Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-07-06T00:44:46.6400501Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-07-06T00:44:46.6430210Z   
2025-07-06T00:44:46.6430837Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:44:46.6431378Z         
2025-07-06T00:44:46.6431787Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6432136Z         
2025-07-06T00:44:46.6432477Z           with mongodbatlas_project.project,
2025-07-06T00:44:46.6433116Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-07-06T00:44:46.6433704Z           12: 		resource "mongodbatlas_project" "project" {
2025-07-06T00:44:46.6434026Z         
2025-07-06T00:44:46.6434844Z         error getting project (6869c4047267b5775b682c01): error getting project's
2025-07-06T00:44:46.6435327Z         limits (6869c4047267b5775b682c01):
2025-07-06T00:44:46.6435921Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4047267b5775b682c01/limits
2025-07-06T00:44:46.6436608Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6437208Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6437621Z         BadRequestDetail: 
2025-07-06T00:44:46.6445763Z   
2025-07-06T00:44:46.6453678Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (99.31s)
```

- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10 PASS a minute