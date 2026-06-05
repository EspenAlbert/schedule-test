# config/maintenancewindow/TestAccConfigDSMaintenanceWindow_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:02](#error-2026-05-09t0102110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.04s
[2026-05-21 01:09](#error-2026-05-21t0109260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 102.01s
[2026-05-26 02:14](#error-2026-05-26t0214460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.08s
[2026-05-28 01:02](#error-2026-05-28t0102570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.06s
[2026-05-30 01:08](#error-2026-05-30t0108140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.03s
[2026-06-02 01:12](#error-2026-06-02t0112090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 17 seconds
  - PASS 10 seconds
- 2026-05-08 PASS 8 seconds
- 2026-05-09

### Error 2026-05-09T01:02:11+00:00
```
2026-05-09T01:02:11.9244752Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-05-09T01:02:11.9247678Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-05-09T01:02:11.9274796Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-05-09T01:02:11.9275594Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-05-09T01:02:11.9276188Z         
2026-05-09T01:02:11.9276755Z         Error: error creating project: test-acc-tf-p-1651334054362208404
2026-05-09T01:02:11.9277221Z         
2026-05-09T01:02:11.9277614Z           with mongodbatlas_project.test,
2026-05-09T01:02:11.9278417Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T01:02:11.9279161Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T01:02:11.9279551Z         
2026-05-09T01:02:11.9280165Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:02:11.9281012Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:02:11.9281788Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:11.9282349Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (63.40s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 10 seconds
- 2026-05-12 PASS 12 seconds
- 2026-05-13 PASS 13 seconds
- 2026-05-14 PASS 27 seconds
- 2026-05-15 PASS 12 seconds
- 2026-05-16 PASS a minute
- 2026-05-17: MISSING
- 2026-05-18 PASS 12 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 13 seconds
- 2026-05-21

### Error 2026-05-21T01:09:26+00:00
```
2026-05-21T01:09:26.8471544Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-05-21T01:09:26.8482726Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-05-21T01:09:26.8514488Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-05-21T01:09:26.8515108Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-05-21T01:09:26.8515623Z         
2026-05-21T01:09:26.8516061Z         Error: error creating project: test-acc-tf-p-7515653673553860317
2026-05-21T01:09:26.8516439Z         
2026-05-21T01:09:26.8516759Z           with mongodbatlas_project.test,
2026-05-21T01:09:26.8517387Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:09:26.8517989Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:09:26.8518302Z         
2026-05-21T01:09:26.8518784Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:09:26.8519460Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:09:26.8520477Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:26.8520949Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (102.13s)
```

- 2026-05-22 PASS 11 seconds
- 2026-05-23 PASS 57 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 14 seconds
- 2026-05-26

### Error 2026-05-26T02:14:46+00:00
```
2026-05-26T02:14:46.0326654Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-05-26T02:14:46.0328917Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-05-26T02:14:46.0341199Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-05-26T02:14:46.0343938Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-05-26T02:14:46.0344426Z         
2026-05-26T02:14:46.0344854Z         Error: error creating project: test-acc-tf-p-5628101735473648825
2026-05-26T02:14:46.0345222Z         
2026-05-26T02:14:46.0345527Z           with mongodbatlas_project.test,
2026-05-26T02:14:46.0346154Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:14:46.0346734Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:14:46.0347039Z         
2026-05-26T02:14:46.0347501Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:14:46.0348143Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:14:46.0348728Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:46.0349161Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (65.77s)
```

- 2026-05-27 PASS 12 seconds
- 2026-05-28

### Error 2026-05-28T01:02:57+00:00
```
2026-05-28T01:02:57.6245541Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-05-28T01:02:57.6248223Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-05-28T01:02:57.6281915Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-05-28T01:02:57.6282520Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-05-28T01:02:57.6282984Z         
2026-05-28T01:02:57.6283403Z         Error: error creating project: test-acc-tf-p-2612286266321934547
2026-05-28T01:02:57.6283770Z         
2026-05-28T01:02:57.6284077Z           with mongodbatlas_project.test,
2026-05-28T01:02:57.6284686Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:02:57.6285260Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:02:57.6285569Z         
2026-05-28T01:02:57.6286053Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:02:57.6286867Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:02:57.6287525Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:02:57.6288167Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:02:57.6288599Z         BadRequestDetail: 
2026-05-28T01:02:57.6301023Z    test_name=TestAccConfigRSMaintenanceWindow_autoDeferActivated test_terraform_path=/home/runner/work/_temp/ff6f3694-e1bc-4ea6-9338-ce694b2a54fc/terraform
2026-05-28T01:02:57.6308731Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (1.56s)
```

- 2026-05-29 PASS 10 seconds
- 2026-05-30

### Error 2026-05-30T01:08:14+00:00
```
2026-05-30T01:08:14.0339974Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-05-30T01:08:14.0342383Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-05-30T01:08:14.0354791Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-05-30T01:08:14.0355423Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-05-30T01:08:14.0355904Z         
2026-05-30T01:08:14.0356358Z         Error: error creating project: test-acc-tf-p-3604694163018204535
2026-05-30T01:08:14.0356747Z         
2026-05-30T01:08:14.0357071Z           with mongodbatlas_project.test,
2026-05-30T01:08:14.0357861Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:08:14.0358481Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:08:14.0358818Z         
2026-05-30T01:08:14.0359340Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:08:14.0360023Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:08:14.0360645Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0361105Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (79.29s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 9 seconds
- 2026-06-02

### Error 2026-06-02T01:12:09+00:00
```
2026-06-02T01:12:09.7261235Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-06-02T01:12:09.7263614Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-06-02T01:12:09.7311252Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-06-02T01:12:09.7311980Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-06-02T01:12:09.7312364Z         
2026-06-02T01:12:09.7312782Z         Error: error creating project: test-acc-tf-p-5685471165933512307
2026-06-02T01:12:09.7313089Z         
2026-06-02T01:12:09.7313346Z           with mongodbatlas_project.test,
2026-06-02T01:12:09.7313971Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:09.7314439Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:12:09.7314706Z         
2026-06-02T01:12:09.7315106Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:12:09.7315648Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:12:09.7316130Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:09.7316489Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (76.80s)
```

- 2026-06-03 PASS 12 seconds
- 2026-06-04 PASS 12 seconds
- 2026-06-05 PASS 10 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 8 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 9 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 11 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 8 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
