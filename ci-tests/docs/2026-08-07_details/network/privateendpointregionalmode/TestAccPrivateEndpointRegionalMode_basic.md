# network/privateendpointregionalmode/TestAccPrivateEndpointRegionalMode_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 98.04s
[2026-07-11 00:53](#error-2026-07-11t0053200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s
[2026-07-14 00:49](#error-2026-07-14t0049230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.08s
[2026-07-18 00:49](#error-2026-07-18t0049410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s
[2026-07-21 00:51](#error-2026-07-21t0051260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1529569Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2026-07-09T00:58:29.1531807Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2026-07-09T00:58:29.1543675Z    test_working_directory=/tmp/plugintest713777650
2026-07-09T00:58:29.1544376Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-07-09T00:58:29.1545033Z         
2026-07-09T00:58:29.1545502Z         Error: error creating project: test-acc-tf-p-3481746453381474763
2026-07-09T00:58:29.1545905Z         
2026-07-09T00:58:29.1546257Z           with mongodbatlas_project.project,
2026-07-09T00:58:29.1546937Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2026-07-09T00:58:29.1547580Z           12: 		resource "mongodbatlas_project" "project" {
2026-07-09T00:58:29.1547939Z         
2026-07-09T00:58:29.1548449Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:58:29.1549349Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:58:29.1550002Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1550495Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (98.42s)
```

- 2026-07-10 PASS a minute
- 2026-07-11

### Error 2026-07-11T00:53:20+00:00
```
2026-07-11T00:53:20.3353299Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2026-07-11T00:53:20.3355780Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2026-07-11T00:53:20.3367906Z    test_terraform_path=/home/runner/work/_temp/825b680f-ed8c-44f0-9373-12d14ef8b97f/terraform
2026-07-11T00:53:20.3368789Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-07-11T00:53:20.3369350Z         
2026-07-11T00:53:20.3369855Z         Error: error creating project: test-acc-tf-p-2673993376358156279
2026-07-11T00:53:20.3370405Z         
2026-07-11T00:53:20.3370808Z           with mongodbatlas_project.project,
2026-07-11T00:53:20.3371948Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2026-07-11T00:53:20.3373104Z           12: 		resource "mongodbatlas_project" "project" {
2026-07-11T00:53:20.3373699Z         
2026-07-11T00:53:20.3374275Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:53:20.3375210Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:53:20.3375897Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:53:20.3376428Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (61.73s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14

### Error 2026-07-14T00:49:23+00:00
```
2026-07-14T00:49:23.6233092Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2026-07-14T00:49:23.6235710Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2026-07-14T00:49:23.6270919Z    test_terraform_path=/home/runner/work/_temp/8245479f-6b8a-426f-8813-c119934d1018/terraform
2026-07-14T00:49:23.6272329Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-07-14T00:49:23.6273013Z         
2026-07-14T00:49:23.6273610Z         Error: error creating project: test-acc-tf-p-8972539964473630323
2026-07-14T00:49:23.6274117Z         
2026-07-14T00:49:23.6274578Z           with mongodbatlas_project.project,
2026-07-14T00:49:23.6275421Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2026-07-14T00:49:23.6276202Z           12: 		resource "mongodbatlas_project" "project" {
2026-07-14T00:49:23.6276648Z         
2026-07-14T00:49:23.6277301Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-14T00:49:23.6278174Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-14T00:49:23.6279122Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:49:23.6279734Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (74.78s)
```

- 2026-07-15 PASS a minute
- 2026-07-16 PASS 2 minutes
- 2026-07-17 PASS a minute
- 2026-07-18

### Error 2026-07-18T00:49:41+00:00
```
2026-07-18T00:49:41.0994739Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2026-07-18T00:49:41.0996990Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2026-07-18T00:49:41.1007940Z   
2026-07-18T00:49:41.1008486Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-07-18T00:49:41.1008980Z         
2026-07-18T00:49:41.1009432Z         Error: error creating project: test-acc-tf-p-7552213769480964574
2026-07-18T00:49:41.1009829Z         
2026-07-18T00:49:41.1010195Z           with mongodbatlas_project.project,
2026-07-18T00:49:41.1011048Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2026-07-18T00:49:41.1012464Z           12: 		resource "mongodbatlas_project" "project" {
2026-07-18T00:49:41.1012821Z         
2026-07-18T00:49:41.1013325Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:49:41.1013966Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:49:41.1014564Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:41.1015038Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (63.64s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:51:26+00:00
```
2026-07-21T00:51:26.5030043Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2026-07-21T00:51:26.5032361Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2026-07-21T00:51:26.5044266Z    test_step_number=1 test_name=TestAccPrivateEndpointRegionalMode_basic test_terraform_path=/home/runner/work/_temp/8b72dbbb-64b2-4ca7-886a-089204f982e3/terraform
2026-07-21T00:51:26.5045387Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-07-21T00:51:26.5045927Z         
2026-07-21T00:51:26.5046399Z         Error: error creating project: test-acc-tf-p-189032510198446815
2026-07-21T00:51:26.5046822Z         
2026-07-21T00:51:26.5047189Z           with mongodbatlas_project.project,
2026-07-21T00:51:26.5047893Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2026-07-21T00:51:26.5048556Z           12: 		resource "mongodbatlas_project" "project" {
2026-07-21T00:51:26.5049044Z         
2026-07-21T00:51:26.5049561Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:51:26.5050271Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:51:26.5050922Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:26.5051425Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (65.62s)
```

- 2026-07-22 PASS a minute
- 2026-07-23 PASS 3 minutes
- 2026-07-24 PASS a minute
- 2026-07-25 PASS a minute
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS a minute
- 2026-07-29 PASS a minute
- 2026-07-30 PASS a minute
- 2026-07-31 PASS a minute
- 2026-08-01 PASS a minute
- 2026-08-02: MISSING
- 2026-08-03 PASS a minute
- 2026-08-04 PASS a minute
- 2026-08-05 PASS a minute
- 2026-08-06 PASS a minute
- 2026-08-07 PASS a minute

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a minute
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a minute
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a minute
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a minute
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a minute
  - PASS a minute
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a minute
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
