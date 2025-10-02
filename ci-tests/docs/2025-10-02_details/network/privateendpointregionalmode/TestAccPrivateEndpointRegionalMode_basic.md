# network/privateendpointregionalmode/TestAccPrivateEndpointRegionalMode_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 4)
Success rate: 90.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:41](#error-2025-09-07t0041460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1d8df5af52d2d4d5c91/limits | qa | flaky_500 | 35.03s
[2025-09-08 09:46](#error-2025-09-08t0946170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a50cddbf4f6e498fb9/limits | qa | flaky_500 | 33.09s
[2025-09-14 00:41](#error-2025-09-14t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c3f1411d835e95b2f06/limits | qa | flaky_500 | 32.09s
[2025-09-15 06:33](#error-2025-09-15t0633080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b03cd444485797b5c27f/limits | qa | flaky_500 | 32.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute
- 2025-09-05 PASS a minute
- 2025-09-06 PASS a minute
- 2025-09-07

### Error 2025-09-07T00:41:46+00:00
```
2025-09-07T00:41:46.8404615Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-09-07T00:41:46.8409092Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-09-07T00:41:46.8456235Z    test_name=TestAccPrivateEndpointRegionalMode_basic test_terraform_path=/home/runner/work/_temp/1d1aff74-e7bf-43f0-9434-1c4bae418332/terraform
2025-09-07T00:41:46.8457610Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:41:46.8458193Z         
2025-09-07T00:41:46.8458648Z         Error: error when getting project properties after create
2025-09-07T00:41:46.8459067Z         
2025-09-07T00:41:46.8459445Z           with mongodbatlas_project.project,
2025-09-07T00:41:46.8460172Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-09-07T00:41:46.8460859Z           12: 		resource "mongodbatlas_project" "project" {
2025-09-07T00:41:46.8461229Z         
2025-09-07T00:41:46.8461759Z         error getting project (68bcd1d8df5af52d2d4d5c91): error getting project's
2025-09-07T00:41:46.8462329Z         limits (68bcd1d8df5af52d2d4d5c91):
2025-09-07T00:41:46.8463015Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d8df5af52d2d4d5c91/limits
2025-09-07T00:41:46.8463805Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:41:46.8464483Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:41:46.8464953Z         BadRequestDetail: 
2025-09-07T00:41:46.8465343Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (35.32s)
```

- 2025-09-08
  - PASS a minute
  - FAIL 33 seconds

### Error 2025-09-08T09:46:17+00:00
```
2025-09-08T09:46:17.9892163Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-09-08T09:46:17.9894782Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-09-08T09:46:17.9908515Z   
2025-09-08T09:46:17.9909050Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:46:17.9909540Z         
2025-09-08T09:46:17.9909956Z         Error: error when getting project properties after create
2025-09-08T09:46:17.9910312Z         
2025-09-08T09:46:17.9910658Z           with mongodbatlas_project.project,
2025-09-08T09:46:17.9911307Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-09-08T09:46:17.9911907Z           12: 		resource "mongodbatlas_project" "project" {
2025-09-08T09:46:17.9912235Z         
2025-09-08T09:46:17.9912724Z         error getting project (68bea2a50cddbf4f6e498fb9): error getting project's
2025-09-08T09:46:17.9913222Z         limits (68bea2a50cddbf4f6e498fb9):
2025-09-08T09:46:17.9931249Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a50cddbf4f6e498fb9/limits
2025-09-08T09:46:17.9932077Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:46:17.9932717Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:46:17.9933151Z         BadRequestDetail: 
2025-09-08T09:46:17.9933528Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (33.89s)
```

  - PASS a minute
- 2025-09-09 PASS a minute
- 2025-09-10 PASS a minute
- 2025-09-11 PASS a minute
- 2025-09-12 PASS a minute
- 2025-09-13 PASS a minute
- 2025-09-14

### Error 2025-09-14T00:41:24+00:00
```
2025-09-14T00:41:24.6548325Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-09-14T00:41:24.6550745Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-09-14T00:41:24.6566287Z    test_terraform_path=/home/runner/work/_temp/5195edd2-1b08-477f-9acd-9a077a7c8fb3/terraform test_name=TestAccPrivateEndpointRegionalMode_basic
2025-09-14T00:41:24.6567479Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:41:24.6568030Z         
2025-09-14T00:41:24.6568570Z         Error: error when getting project properties after create
2025-09-14T00:41:24.6568923Z         
2025-09-14T00:41:24.6569381Z           with mongodbatlas_project.project,
2025-09-14T00:41:24.6570145Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-09-14T00:41:24.6570843Z           12: 		resource "mongodbatlas_project" "project" {
2025-09-14T00:41:24.6571202Z         
2025-09-14T00:41:24.6571793Z         error getting project (68c60c3f1411d835e95b2f06): error getting project's
2025-09-14T00:41:24.6572283Z         limits (68c60c3f1411d835e95b2f06):
2025-09-14T00:41:24.6573319Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c3f1411d835e95b2f06/limits
2025-09-14T00:41:24.6574374Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:24.6575120Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:24.6575545Z         BadRequestDetail: 
2025-09-14T00:41:24.6576030Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (32.91s)
```

- 2025-09-15
  - PASS a minute
  - FAIL 32 seconds

### Error 2025-09-15T06:33:08+00:00
```
2025-09-15T06:33:08.3262190Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-09-15T06:33:08.3264703Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-09-15T06:33:08.3276904Z    test_name=TestAccPrivateEndpointRegionalMode_basic test_terraform_path=/home/runner/work/_temp/e6841990-d3ba-4b3b-b7ea-c824237aad61/terraform
2025-09-15T06:33:08.3277838Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:33:08.3278508Z         
2025-09-15T06:33:08.3278903Z         Error: error when getting project properties after create
2025-09-15T06:33:08.3279256Z         
2025-09-15T06:33:08.3279582Z           with mongodbatlas_project.project,
2025-09-15T06:33:08.3280203Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-09-15T06:33:08.3280776Z           12: 		resource "mongodbatlas_project" "project" {
2025-09-15T06:33:08.3281088Z         
2025-09-15T06:33:08.3281548Z         error getting project (68c7b03cd444485797b5c27f): error getting project's
2025-09-15T06:33:08.3282009Z         limits (68c7b03cd444485797b5c27f):
2025-09-15T06:33:08.3282723Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03cd444485797b5c27f/limits
2025-09-15T06:33:08.3283410Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:08.3283999Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:08.3284399Z         BadRequestDetail: 
2025-09-15T06:33:08.3284745Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (32.73s)
```

- 2025-09-16 PASS a minute
- 2025-09-17 PASS a minute
- 2025-09-18 PASS a minute
- 2025-09-19 PASS a minute
- 2025-09-20 PASS a minute
- 2025-09-21 PASS a minute
- 2025-09-22 PASS a minute
- 2025-09-23 PASS a minute
- 2025-09-24 PASS a minute
- 2025-09-25 PASS a minute
- 2025-09-26 PASS a minute
- 2025-09-27 PASS a minute
- 2025-09-28 PASS a minute
- 2025-09-29 PASS a minute
- 2025-09-30
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-02 PASS a minute