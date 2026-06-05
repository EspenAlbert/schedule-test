# network/privateendpointregionalmode/TestAccPrivateEndpointRegionalMode_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 01:02](#error-2026-05-07t0102010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s
[2026-05-09 01:03](#error-2026-05-09t0103400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.06s
[2026-05-19 01:08](#error-2026-05-19t0108530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s
[2026-05-27 01:15](#error-2026-05-27t0115060000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a16429ce9f4601a99026628/clusters | dev | flaky_500 | 69.02s
[2026-05-28 01:03](#error-2026-05-28t0103330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a1792cc9d36eb381ac9d1a4/clusters | dev | flaky_500 | 75.04s
[2026-06-04 01:25](#error-2026-06-04t0125160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL a minute

### Error 2026-05-07T01:02:01+00:00
```
2026-05-07T01:02:01.1138727Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2026-05-07T01:02:01.1141062Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2026-05-07T01:02:01.1152197Z    test_terraform_path=/home/runner/work/_temp/b60e4f70-82b6-42d9-9401-d0bb34c6869b/terraform
2026-05-07T01:02:01.1153218Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-05-07T01:02:01.1153719Z         
2026-05-07T01:02:01.1154150Z         Error: error creating project: test-acc-tf-p-4570004403782442313
2026-05-07T01:02:01.1154528Z         
2026-05-07T01:02:01.1154872Z           with mongodbatlas_project.project,
2026-05-07T01:02:01.1155491Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2026-05-07T01:02:01.1156092Z           12: 		resource "mongodbatlas_project" "project" {
2026-05-07T01:02:01.1156423Z         
2026-05-07T01:02:01.1156895Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-07T01:02:01.1157535Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-07T01:02:01.1158125Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-07T01:02:01.1158590Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (63.86s)
```

  - PASS a minute
- 2026-05-08 PASS a minute
- 2026-05-09

### Error 2026-05-09T01:03:40+00:00
```
2026-05-09T01:03:40.8462058Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2026-05-09T01:03:40.8465739Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2026-05-09T01:03:40.8478067Z    test_name=TestAccPrivateEndpointRegionalMode_basic test_working_directory=/tmp/plugintest3310927541 test_step_number=1
2026-05-09T01:03:40.8479058Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-05-09T01:03:40.8479594Z         
2026-05-09T01:03:40.8480054Z         Error: error creating project: test-acc-tf-p-3057733392960697450
2026-05-09T01:03:40.8480447Z         
2026-05-09T01:03:40.8480798Z           with mongodbatlas_project.project,
2026-05-09T01:03:40.8481491Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2026-05-09T01:03:40.8482296Z           12: 		resource "mongodbatlas_project" "project" {
2026-05-09T01:03:40.8482638Z         
2026-05-09T01:03:40.8483145Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:03:40.8483841Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:03:40.8484483Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:03:40.8484972Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (67.57s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12 PASS 3 minutes
- 2026-05-13 PASS a minute
- 2026-05-14 PASS a minute
- 2026-05-15 PASS a minute
- 2026-05-16 PASS 2 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19

### Error 2026-05-19T01:08:53+00:00
```
2026-05-19T01:08:53.3054052Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2026-05-19T01:08:53.3056443Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2026-05-19T01:08:53.3068023Z    test_terraform_path=/home/runner/work/_temp/aabddba6-8d4c-44ff-9fe8-e175c352c3d8/terraform
2026-05-19T01:08:53.3068847Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-05-19T01:08:53.3069380Z         
2026-05-19T01:08:53.3069830Z         Error: error creating project: test-acc-tf-p-7556166256886837552
2026-05-19T01:08:53.3070233Z         
2026-05-19T01:08:53.3070582Z           with mongodbatlas_project.project,
2026-05-19T01:08:53.3071248Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2026-05-19T01:08:53.3071887Z           12: 		resource "mongodbatlas_project" "project" {
2026-05-19T01:08:53.3072235Z         
2026-05-19T01:08:53.3072741Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:08:53.3073432Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:08:53.3074062Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:53.3074548Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (63.49s)
```

- 2026-05-20 PASS a minute
- 2026-05-21 PASS a minute
- 2026-05-22 PASS a minute
- 2026-05-23 PASS a minute
- 2026-05-24: MISSING
- 2026-05-25 PASS a minute
- 2026-05-26 PASS a minute
- 2026-05-27

### Error 2026-05-27T01:15:06+00:00
```
2026-05-27T01:15:06.2446311Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2026-05-27T01:15:06.2448295Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2026-05-27T01:15:06.2457886Z    test_name=TestAccPrivateEndpointRegionalMode_basic test_terraform_path=/home/runner/work/_temp/228b3816-0e8f-40c6-8cd2-b10af2504c28/terraform test_working_directory=/tmp/plugintest2961858557 test_step_number=1
2026-05-27T01:15:06.2458845Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-05-27T01:15:06.2459242Z         
2026-05-27T01:15:06.2460662Z         Error: error updating MongoDB Group `6a16429ce9f4601a99026628` Private Endpoints Regional Mode: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a16429ce9f4601a99026628/clusters GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-27T01:15:06.2461681Z         
2026-05-27T01:15:06.2462030Z           with mongodbatlas_private_endpoint_regional_mode.test,
2026-05-27T01:15:06.2462690Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_private_endpoint_regional_mode" "test":
2026-05-27T01:15:06.2463412Z           17: 		resource "mongodbatlas_private_endpoint_regional_mode" "test" {
2026-05-27T01:15:06.2463733Z         
2026-05-27T01:15:06.2476038Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (69.21s)
```

- 2026-05-28

### Error 2026-05-28T01:03:33+00:00
```
2026-05-28T01:03:33.2334018Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2026-05-28T01:03:33.2336024Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2026-05-28T01:03:33.2346344Z   
2026-05-28T01:03:33.2346802Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-05-28T01:03:33.2347222Z         
2026-05-28T01:03:33.2348710Z         Error: error updating MongoDB Group `6a1792cc9d36eb381ac9d1a4` Private Endpoints Regional Mode: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a1792cc9d36eb381ac9d1a4/clusters GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:03:33.2349854Z         
2026-05-28T01:03:33.2350217Z           with mongodbatlas_private_endpoint_regional_mode.test,
2026-05-28T01:03:33.2350886Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_private_endpoint_regional_mode" "test":
2026-05-28T01:03:33.2351526Z           17: 		resource "mongodbatlas_private_endpoint_regional_mode" "test" {
2026-05-28T01:03:33.2351862Z         
2026-05-28T01:03:33.2352150Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (75.41s)
```

- 2026-05-29 PASS a minute
- 2026-05-30 PASS 2 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS a minute
- 2026-06-02 PASS a minute
- 2026-06-03 PASS a minute
- 2026-06-04

### Error 2026-06-04T01:25:16+00:00
```
2026-06-04T01:25:16.0203084Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2026-06-04T01:25:16.0205767Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2026-06-04T01:25:16.0218712Z   
2026-06-04T01:25:16.0219322Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-06-04T01:25:16.0219887Z         
2026-06-04T01:25:16.0220392Z         Error: error creating project: test-acc-tf-p-713426008903732543
2026-06-04T01:25:16.0220834Z         
2026-06-04T01:25:16.0221231Z           with mongodbatlas_project.project,
2026-06-04T01:25:16.0221952Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2026-06-04T01:25:16.0222639Z           12: 		resource "mongodbatlas_project" "project" {
2026-06-04T01:25:16.0223022Z         
2026-06-04T01:25:16.0223573Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-04T01:25:16.0224310Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-04T01:25:16.0224993Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-04T01:25:16.0225517Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (61.91s)
```

- 2026-06-05 PASS a minute

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a minute
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a minute
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a minute
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a minute
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
