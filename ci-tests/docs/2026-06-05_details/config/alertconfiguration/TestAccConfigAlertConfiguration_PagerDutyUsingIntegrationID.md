# config/alertconfiguration/TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 8)
Success rate: 74.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 00:56](#error-2026-05-07t0056130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.03s
[2026-05-16 00:56](#error-2026-05-16t0056090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.05s
[2026-05-21 01:07](#error-2026-05-21t0107040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.02s
[2026-05-23 01:00](#error-2026-05-23t0100260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.01s
[2026-05-26 02:10](#error-2026-05-26t0210160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.00s
[2026-05-28 01:01](#error-2026-05-28t0101560000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s
[2026-05-30 01:01](#error-2026-05-30t0101450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.09s
[2026-06-02 01:11](#error-2026-06-02t0111000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL a minute

### Error 2026-05-07T00:56:13+00:00
```
2026-05-07T00:56:13.0265629Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-07T00:56:13.0288528Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-07T00:56:13.0324847Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-07T00:56:13.0325502Z     resource_test.go:579: Step 1/1 error: Error running apply: exit status 1
2026-05-07T00:56:13.0325907Z         
2026-05-07T00:56:13.0326389Z         Error: error creating project: test-acc-tf-p-4760355387998336031
2026-05-07T00:56:13.0326777Z         
2026-05-07T00:56:13.0327094Z           with mongodbatlas_project.test,
2026-05-07T00:56:13.0327732Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-07T00:56:13.0328321Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-07T00:56:13.0328800Z         
2026-05-07T00:56:13.0329421Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-07T00:56:13.0330084Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-07T00:56:13.0330688Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-07T00:56:13.0331206Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (69.34s)
```

  - PASS 15 seconds
- 2026-05-08 PASS 31 seconds
- 2026-05-09 PASS 57 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 26 seconds
- 2026-05-12 PASS 43 seconds
- 2026-05-13 PASS 20 seconds
- 2026-05-14 PASS 53 seconds
- 2026-05-15 PASS 19 seconds
- 2026-05-16

### Error 2026-05-16T00:56:09+00:00
```
2026-05-16T00:56:09.3660194Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-16T00:56:09.3681978Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-16T00:56:09.3724128Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-16T00:56:09.3724762Z     resource_test.go:579: Step 1/1 error: Error running apply: exit status 1
2026-05-16T00:56:09.3725159Z         
2026-05-16T00:56:09.3725856Z         Error: error creating project: test-acc-tf-p-3408041062003888898
2026-05-16T00:56:09.3726388Z         
2026-05-16T00:56:09.3726704Z           with mongodbatlas_project.test,
2026-05-16T00:56:09.3727331Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T00:56:09.3727923Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T00:56:09.3728286Z         
2026-05-16T00:56:09.3728920Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T00:56:09.3729602Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T00:56:09.3730204Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:56:09.3730736Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (68.49s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 17 seconds
- 2026-05-19 PASS 25 seconds
- 2026-05-20 PASS 23 seconds
- 2026-05-21

### Error 2026-05-21T01:07:04+00:00
```
2026-05-21T01:07:04.6955537Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-21T01:07:04.6976423Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-21T01:07:04.7021739Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-21T01:07:04.7022345Z     resource_test.go:579: Step 1/1 error: Error running apply: exit status 1
2026-05-21T01:07:04.7022742Z         
2026-05-21T01:07:04.7023299Z         Error: error creating project: test-acc-tf-p-4457635076302387012
2026-05-21T01:07:04.7024224Z         
2026-05-21T01:07:04.7024723Z           with mongodbatlas_project.test,
2026-05-21T01:07:04.7025389Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:07:04.7025996Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:07:04.7026318Z         
2026-05-21T01:07:04.7026831Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:07:04.7027512Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:07:04.7028121Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:07:04.7028662Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (86.15s)
```

- 2026-05-22 PASS 21 seconds
- 2026-05-23

### Error 2026-05-23T01:00:26+00:00
```
2026-05-23T01:00:26.3905535Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-23T01:00:26.3933595Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-23T01:00:26.3979336Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-23T01:00:26.3980148Z     resource_test.go:579: Step 1/1 error: Error running apply: exit status 1
2026-05-23T01:00:26.3980843Z         
2026-05-23T01:00:26.3981411Z         Error: error creating project: test-acc-tf-p-6381877966894844351
2026-05-23T01:00:26.3981886Z         
2026-05-23T01:00:26.3982279Z           with mongodbatlas_project.test,
2026-05-23T01:00:26.3983104Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:00:26.3983879Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:00:26.3984483Z         
2026-05-23T01:00:26.3985107Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:00:26.3985964Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:00:26.3986754Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:00:26.3987437Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (75.09s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 17 seconds
- 2026-05-26

### Error 2026-05-26T02:10:16+00:00
```
2026-05-26T02:10:16.7954054Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-26T02:10:16.7983485Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-26T02:10:16.8051545Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-26T02:10:16.8052624Z     resource_test.go:579: Step 1/1 error: Error running apply: exit status 1
2026-05-26T02:10:16.8053461Z         
2026-05-26T02:10:16.8054196Z         Error: error creating project: test-acc-tf-p-7990977884925188222
2026-05-26T02:10:16.8054809Z         
2026-05-26T02:10:16.8055320Z           with mongodbatlas_project.test,
2026-05-26T02:10:16.8056392Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:10:16.8057590Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:10:16.8058098Z         
2026-05-26T02:10:16.8058917Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:10:16.8060063Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:10:16.8061099Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:16.8061984Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (71.02s)
```

- 2026-05-27 PASS 31 seconds
- 2026-05-28

### Error 2026-05-28T01:01:56+00:00
```
2026-05-28T01:01:56.7236922Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-28T01:01:56.7414547Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-28T01:01:56.7427885Z   
2026-05-28T01:01:56.7428275Z     resource_test.go:579: Step 1/1 error: Error running apply: exit status 1
2026-05-28T01:01:56.7428659Z         
2026-05-28T01:01:56.7429084Z         Error: error creating project: test-acc-tf-p-2259706690418444892
2026-05-28T01:01:56.7429453Z         
2026-05-28T01:01:56.7429758Z           with mongodbatlas_project.test,
2026-05-28T01:01:56.7430367Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:01:56.7431067Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:01:56.7431387Z         
2026-05-28T01:01:56.7431866Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:01:56.7432552Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:01:56.7433202Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:01:56.7433835Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:01:56.7434273Z         BadRequestDetail: 
2026-05-28T01:01:56.7434678Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (0.81s)
```

- 2026-05-29 PASS 30 seconds
- 2026-05-30

### Error 2026-05-30T01:01:45+00:00
```
2026-05-30T01:01:45.0565138Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-30T01:01:45.0593682Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-30T01:01:45.0626404Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-30T01:01:45.0627080Z     resource_test.go:579: Step 1/1 error: Error running apply: exit status 1
2026-05-30T01:01:45.0627627Z         
2026-05-30T01:01:45.0628079Z         Error: error creating project: test-acc-tf-p-5422436122295164619
2026-05-30T01:01:45.0628472Z         
2026-05-30T01:01:45.0628800Z           with mongodbatlas_project.test,
2026-05-30T01:01:45.0629440Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:01:45.0630037Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:01:45.0630545Z         
2026-05-30T01:01:45.0631062Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:01:45.0631756Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:01:45.0632382Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:01:45.0632937Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (72.88s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 24 seconds
- 2026-06-02

### Error 2026-06-02T01:11:00+00:00
```
2026-06-02T01:11:00.7583360Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-06-02T01:11:00.7600817Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-06-02T01:11:00.7635273Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-06-02T01:11:00.7635786Z     resource_test.go:579: Step 1/1 error: Error running apply: exit status 1
2026-06-02T01:11:00.7636124Z         
2026-06-02T01:11:00.7636904Z         Error: error creating project: test-acc-tf-p-3422874992158559516
2026-06-02T01:11:00.7637272Z         
2026-06-02T01:11:00.7637701Z           with mongodbatlas_project.test,
2026-06-02T01:11:00.7638242Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:11:00.7638724Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:11:00.7638988Z         
2026-06-02T01:11:00.7639554Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:11:00.7640099Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:11:00.7640595Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:11:00.7641026Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (75.13s)
```

- 2026-06-03 PASS 33 seconds
- 2026-06-04 PASS 17 seconds
- 2026-06-05 PASS 14 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 31 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 30 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 31 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 32 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
