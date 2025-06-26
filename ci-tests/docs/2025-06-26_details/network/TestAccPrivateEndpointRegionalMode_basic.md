# network/TestAccPrivateEndpointRegionalMode_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS a minute
```
2025-06-20T00:41:01.7724402Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-06-20T00:41:01.7728616Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-06-20T00:41:01.7730095Z --- PASS: TestAccPrivateEndpointRegionalMode_basic (97.63s)
```
### 2025-06-21
#### PASS a minute
```
2025-06-21T00:41:03.3981078Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-06-21T00:41:03.3983733Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-06-21T00:41:03.3984610Z --- PASS: TestAccPrivateEndpointRegionalMode_basic (100.97s)
```
### 2025-06-22
#### FAIL 33 seconds
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
### 2025-06-23
#### PASS a minute
```
2025-06-23T00:43:34.5909441Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-06-23T00:43:34.5912322Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-06-23T00:43:34.5913316Z --- PASS: TestAccPrivateEndpointRegionalMode_basic (101.81s)
```
### 2025-06-24
#### PASS a minute
```
2025-06-24T00:41:41.0059569Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-06-24T00:41:41.0064025Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-06-24T00:41:41.0065496Z --- PASS: TestAccPrivateEndpointRegionalMode_basic (104.44s)
```
### 2025-06-25
#### PASS a minute
```
2025-06-25T00:42:01.3177321Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-06-25T00:42:01.3180098Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-06-25T00:42:01.3180981Z --- PASS: TestAccPrivateEndpointRegionalMode_basic (106.73s)
```
### 2025-06-26
#### PASS a minute
```
2025-06-26T00:41:55.7537331Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-06-26T00:41:55.7541437Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-06-26T00:41:55.7542886Z --- PASS: TestAccPrivateEndpointRegionalMode_basic (104.51s)
```