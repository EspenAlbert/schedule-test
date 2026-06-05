# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 8)
Success rate: 74.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:02](#error-2026-05-09t0102110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.08s
[2026-05-16 01:00](#error-2026-05-16t0100420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.10s
[2026-05-19 01:08](#error-2026-05-19t0108200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.02s
[2026-05-23 01:05](#error-2026-05-23t0105110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.08s
[2026-05-26 02:14](#error-2026-05-26t0214460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.03s
[2026-05-28 01:02](#error-2026-05-28t0102570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 1.00s
[2026-05-30 01:08](#error-2026-05-30t0108140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.06s
[2026-06-02 01:12](#error-2026-06-02t0112090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 35 seconds
  - PASS 25 seconds
- 2026-05-08 PASS 17 seconds
- 2026-05-09

### Error 2026-05-09T01:02:11+00:00
```
2026-05-09T01:02:11.9245647Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-05-09T01:02:11.9248658Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-05-09T01:02:11.9273685Z    test_working_directory=/tmp/plugintest4037472916 test_name=TestAccConfigDSMaintenanceWindow_basic test_terraform_path=/home/runner/work/_temp/9c528ffe-ad57-4314-9294-1f1d47a6c439/terraform
2026-05-09T01:02:11.9320600Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2026-05-09T01:02:11.9321397Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-05-09T01:02:11.9321935Z         
2026-05-09T01:02:11.9322501Z         Error: error creating project: test-acc-tf-p-3597372823170172950
2026-05-09T01:02:11.9322952Z         
2026-05-09T01:02:11.9323496Z           with mongodbatlas_project.test,
2026-05-09T01:02:11.9324298Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T01:02:11.9325026Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T01:02:11.9325411Z         
2026-05-09T01:02:11.9325995Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:02:11.9326828Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:02:11.9327605Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:11.9328304Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (88.77s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 24 seconds
- 2026-05-12 PASS 36 seconds
- 2026-05-13 PASS 31 seconds
- 2026-05-14 PASS 49 seconds
- 2026-05-15 PASS 24 seconds
- 2026-05-16

### Error 2026-05-16T01:00:42+00:00
```
2026-05-16T01:00:42.5810355Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-05-16T01:00:42.5812451Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-05-16T01:00:42.5824536Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2026-05-16T01:00:42.5825135Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-05-16T01:00:42.5825919Z         
2026-05-16T01:00:42.5826352Z         Error: error creating project: test-acc-tf-p-1546156572286843815
2026-05-16T01:00:42.5826826Z         
2026-05-16T01:00:42.5827222Z           with mongodbatlas_project.test,
2026-05-16T01:00:42.5827854Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T01:00:42.5828647Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T01:00:42.5828958Z         
2026-05-16T01:00:42.5829632Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T01:00:42.5830318Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T01:00:42.5831123Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5831636Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (61.96s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 29 seconds
- 2026-05-19

### Error 2026-05-19T01:08:20+00:00
```
2026-05-19T01:08:20.9199911Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-05-19T01:08:20.9205500Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-05-19T01:08:20.9228808Z   
2026-05-19T01:08:20.9229813Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-05-19T01:08:20.9230753Z         
2026-05-19T01:08:20.9231627Z         Error: error creating project: test-acc-tf-p-8833525196653323340
2026-05-19T01:08:20.9232399Z         
2026-05-19T01:08:20.9233079Z           with mongodbatlas_project.test,
2026-05-19T01:08:20.9234526Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:08:20.9235737Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:08:20.9236690Z         
2026-05-19T01:08:20.9237706Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:08:20.9239173Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:08:20.9240249Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.9241036Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (73.17s)
```

- 2026-05-20 PASS 29 seconds
- 2026-05-21 PASS a minute
- 2026-05-22 PASS 24 seconds
- 2026-05-23

### Error 2026-05-23T01:05:11+00:00
```
2026-05-23T01:05:11.5665776Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-05-23T01:05:11.5667564Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-05-23T01:05:11.5691659Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2026-05-23T01:05:11.5692117Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-05-23T01:05:11.5692471Z         
2026-05-23T01:05:11.5692809Z         Error: error creating project: test-acc-tf-p-6790652429330983770
2026-05-23T01:05:11.5693089Z         
2026-05-23T01:05:11.5693441Z           with mongodbatlas_project.test,
2026-05-23T01:05:11.5693920Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:05:11.5694359Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:05:11.5694600Z         
2026-05-23T01:05:11.5694960Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:05:11.5695458Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:05:11.5695912Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:11.5696254Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (77.84s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 29 seconds
- 2026-05-26

### Error 2026-05-26T02:14:46+00:00
```
2026-05-26T02:14:46.0327367Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-05-26T02:14:46.0329690Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-05-26T02:14:46.0340955Z   
2026-05-26T02:14:46.0361846Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2026-05-26T02:14:46.0362608Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-05-26T02:14:46.0363388Z         
2026-05-26T02:14:46.0363991Z         Error: error creating project: test-acc-tf-p-3769276723039711308
2026-05-26T02:14:46.0373537Z         
2026-05-26T02:14:46.0373892Z           with mongodbatlas_project.test,
2026-05-26T02:14:46.0374559Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:14:46.0375159Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:14:46.0375481Z         
2026-05-26T02:14:46.0375963Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:14:46.0376622Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:14:46.0377212Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:46.0377662Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (67.31s)
```

- 2026-05-27 PASS 25 seconds
- 2026-05-28

### Error 2026-05-28T01:02:57+00:00
```
2026-05-28T01:02:57.6246612Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-05-28T01:02:57.6249000Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-05-28T01:02:57.6261700Z    test_name=TestAccConfigRSMaintenanceWindow_basic
2026-05-28T01:02:57.6262433Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-05-28T01:02:57.6262888Z         
2026-05-28T01:02:57.6263317Z         Error: error creating project: test-acc-tf-p-6372591668852080999
2026-05-28T01:02:57.6263683Z         
2026-05-28T01:02:57.6263993Z           with mongodbatlas_project.test,
2026-05-28T01:02:57.6264609Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:02:57.6265189Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:02:57.6265500Z         
2026-05-28T01:02:57.6265983Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:02:57.6266674Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:02:57.6267329Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:02:57.6267963Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:02:57.6268406Z         BadRequestDetail: 
2026-05-28T01:02:57.6268738Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (1.04s)
```

- 2026-05-29 PASS 18 seconds
- 2026-05-30

### Error 2026-05-30T01:08:14+00:00
```
2026-05-30T01:08:14.0340723Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-05-30T01:08:14.0343204Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-05-30T01:08:14.0354334Z    test_step_number=1 test_name=TestAccConfigDSMaintenanceWindow_basic
2026-05-30T01:08:14.0372872Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2026-05-30T01:08:14.0373482Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-05-30T01:08:14.0373959Z         
2026-05-30T01:08:14.0374402Z         Error: error creating project: test-acc-tf-p-7673382546978795280
2026-05-30T01:08:14.0374787Z         
2026-05-30T01:08:14.0375120Z           with mongodbatlas_project.test,
2026-05-30T01:08:14.0375752Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:08:14.0376349Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:08:14.0376677Z         
2026-05-30T01:08:14.0377171Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:08:14.0377963Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:08:14.0378583Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0379038Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (94.55s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 20 seconds
- 2026-06-02

### Error 2026-06-02T01:12:09+00:00
```
2026-06-02T01:12:09.7262239Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-06-02T01:12:09.7264269Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-06-02T01:12:09.7277398Z    test_name=TestAccConfigRSMaintenanceWindow_basic test_terraform_path=/home/runner/work/_temp/4e94aa81-f4f2-43a6-8bf5-caac7fe9141a/terraform test_working_directory=/tmp/plugintest4123452698
2026-06-02T01:12:09.7278912Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-06-02T01:12:09.7279524Z         
2026-06-02T01:12:09.7280038Z         Error: error creating project: test-acc-tf-p-3377630159497057167
2026-06-02T01:12:09.7280419Z         
2026-06-02T01:12:09.7280678Z           with mongodbatlas_project.test,
2026-06-02T01:12:09.7281262Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:09.7282015Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:12:09.7282439Z         
2026-06-02T01:12:09.7282889Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:12:09.7283515Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:12:09.7284322Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:09.7284868Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (62.51s)
```

- 2026-06-03 PASS 27 seconds
- 2026-06-04 PASS 28 seconds
- 2026-06-05 PASS 24 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 22 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 22 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 24 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 20 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
