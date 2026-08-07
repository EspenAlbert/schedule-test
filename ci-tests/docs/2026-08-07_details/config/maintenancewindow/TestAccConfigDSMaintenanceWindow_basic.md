# config/maintenancewindow/TestAccConfigDSMaintenanceWindow_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 123.04s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-07-16 00:49](#error-2026-07-16t0049020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.08s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.08s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2260517Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-07-09T00:59:33.2262949Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-07-09T00:59:33.2312431Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-07-09T00:59:33.2313060Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-07-09T00:59:33.2313533Z         
2026-07-09T00:59:33.2313974Z         Error: error creating project: test-acc-tf-p-7359983276989163336
2026-07-09T00:59:33.2314363Z         
2026-07-09T00:59:33.2314683Z           with mongodbatlas_project.test,
2026-07-09T00:59:33.2315437Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T00:59:33.2316053Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T00:59:33.2316383Z         
2026-07-09T00:59:33.2316873Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:59:33.2317557Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:59:33.2318182Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2318649Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (123.42s)
```

- 2026-07-10 PASS 11 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.5993604Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-07-11T00:55:51.5996198Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-07-11T00:55:51.6010222Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-07-11T00:55:51.6011011Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-07-11T00:55:51.6011648Z         
2026-07-11T00:55:51.6012145Z         Error: error creating project: test-acc-tf-p-6581360112987461334
2026-07-11T00:55:51.6012539Z         
2026-07-11T00:55:51.6013053Z           with mongodbatlas_project.test,
2026-07-11T00:55:51.6013712Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:55:51.6014509Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:55:51.6014845Z         
2026-07-11T00:55:51.6015536Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:55:51.6016240Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:55:51.6017067Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6017613Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (63.06s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 9 seconds
- 2026-07-14 PASS 46 seconds
- 2026-07-15 PASS 14 seconds
- 2026-07-16

### Error 2026-07-16T00:49:02+00:00
```
2026-07-16T00:49:02.2744617Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-07-16T00:49:02.2748654Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-07-16T00:49:02.2771124Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-07-16T00:49:02.2772454Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-07-16T00:49:02.2773249Z         
2026-07-16T00:49:02.2774016Z         Error: error creating project: test-acc-tf-p-3009348511866202770
2026-07-16T00:49:02.2774664Z         
2026-07-16T00:49:02.2775215Z           with mongodbatlas_project.test,
2026-07-16T00:49:02.2776288Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:49:02.2777287Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:49:02.2777811Z         
2026-07-16T00:49:02.2778663Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:49:02.2779796Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:49:02.2780804Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:02.2781818Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (67.85s)
```

- 2026-07-17 PASS 10 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.8324144Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-07-18T00:51:48.8328248Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-07-18T00:51:48.8347388Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-07-18T00:51:48.8348051Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-07-18T00:51:48.8348580Z         
2026-07-18T00:51:48.8349040Z         Error: error creating project: test-acc-tf-p-1039049129171075742
2026-07-18T00:51:48.8349438Z         
2026-07-18T00:51:48.8349777Z           with mongodbatlas_project.test,
2026-07-18T00:51:48.8350437Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:51:48.8351056Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:51:48.8351394Z         
2026-07-18T00:51:48.8351902Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:51:48.8352936Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:51:48.8353597Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.8354087Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (62.51s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4138424Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-07-21T00:53:42.4140153Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-07-21T00:53:42.4172226Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-07-21T00:53:42.4172643Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-07-21T00:53:42.4172955Z         
2026-07-21T00:53:42.4173253Z         Error: error creating project: test-acc-tf-p-8259491496575816333
2026-07-21T00:53:42.4173505Z         
2026-07-21T00:53:42.4173729Z           with mongodbatlas_project.test,
2026-07-21T00:53:42.4174141Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:53:42.4174537Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:53:42.4174770Z         
2026-07-21T00:53:42.4175098Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:53:42.4175534Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:53:42.4175936Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4176254Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (68.82s)
```

- 2026-07-22 PASS 8 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4620329Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-07-23T00:49:05.4623162Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-07-23T00:49:05.4653371Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-07-23T00:49:05.4654003Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-07-23T00:49:05.4654517Z         
2026-07-23T00:49:05.4655000Z         Error: error creating project: test-acc-tf-p-4554326963320280094
2026-07-23T00:49:05.4655433Z         
2026-07-23T00:49:05.4655844Z           with mongodbatlas_project.test,
2026-07-23T00:49:05.4656499Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:49:05.4657069Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:49:05.4657445Z         
2026-07-23T00:49:05.4658050Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:49:05.4658700Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:49:05.4659316Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:49:05.4659800Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (62.21s)
```

- 2026-07-24 PASS 10 seconds
- 2026-07-25 PASS 8 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 13 seconds
- 2026-07-28 PASS 9 seconds
- 2026-07-29 PASS 11 seconds
- 2026-07-30 PASS 6 seconds
- 2026-07-31 PASS 9 seconds
- 2026-08-01 PASS 8 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 9 seconds
- 2026-08-04 PASS 6 seconds
- 2026-08-05 PASS 11 seconds
- 2026-08-06 PASS 6 seconds
- 2026-08-07 PASS 12 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 13 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 8 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 11 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 8 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 5 seconds
  - PASS 8 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 11 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
