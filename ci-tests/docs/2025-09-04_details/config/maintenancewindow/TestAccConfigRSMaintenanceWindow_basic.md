# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:33](#error-2025-08-17t0033180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a1231cf746882a383cb422/limits | qa | flaky_500 | 38.10s
[2025-08-20 14:01](#error-2025-08-20t1401040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d4bdf98188003c99b1ca/limits | qa | flaky_500 | 33.09s
[2025-08-24 00:32](#error-2025-08-24t0032340000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d804192cd1cc589ef97/limits | qa | flaky_500 | 34.02s
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 27 seconds
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS 21 seconds
- 2025-08-09 PASS 27 seconds
- 2025-08-10 PASS 25 seconds
- 2025-08-11 PASS 29 seconds
- 2025-08-12 PASS 25 seconds
- 2025-08-13 PASS 27 seconds
- 2025-08-14 PASS 25 seconds
- 2025-08-15 PASS 19 seconds
- 2025-08-16 PASS 25 seconds
- 2025-08-17

### Error 2025-08-17T00:33:18+00:00
```
2025-08-17T00:33:18.6031194Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-08-17T00:33:18.6047745Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-08-17T00:33:18.6081121Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2025-08-17T00:33:18.6082480Z     resource_maintenance_window_test.go:42: Step 1/5 error: Error running post-apply refresh plan: exit status 1
2025-08-17T00:33:18.6083634Z         
2025-08-17T00:33:18.6084459Z         Error: error when getting project properties after create
2025-08-17T00:33:18.6085294Z         
2025-08-17T00:33:18.6085990Z           with mongodbatlas_project.test,
2025-08-17T00:33:18.6087245Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-17T00:33:18.6088534Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-17T00:33:18.6089205Z         
2025-08-17T00:33:18.6090161Z         error getting project (68a1231cf746882a383cb422): error getting project's
2025-08-17T00:33:18.6091104Z         limits (68a1231cf746882a383cb422):
2025-08-17T00:33:18.6092428Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a1231cf746882a383cb422/limits
2025-08-17T00:33:18.6093791Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:33:18.6095592Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:33:18.6096500Z         BadRequestDetail: 
2025-08-17T00:33:18.6097220Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (38.99s)
```

- 2025-08-18 PASS 27 seconds
- 2025-08-19 PASS 30 seconds
- 2025-08-20
  - PASS 27 seconds
  - FAIL 33 seconds

### Error 2025-08-20T14:01:04+00:00
```
2025-08-20T14:01:04.5183269Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-08-20T14:01:04.5189168Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-08-20T14:01:04.5231468Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2025-08-20T14:01:04.5232530Z     resource_maintenance_window_test.go:42: Step 1/5 error: Error running apply: exit status 1
2025-08-20T14:01:04.5233431Z         
2025-08-20T14:01:04.5234093Z         Error: error when getting project properties after create
2025-08-20T14:01:04.5234655Z         
2025-08-20T14:01:04.5235168Z           with mongodbatlas_project.test,
2025-08-20T14:01:04.5236247Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-20T14:01:04.5237241Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-20T14:01:04.5237749Z         
2025-08-20T14:01:04.5238570Z         error getting project (68a5d4bdf98188003c99b1ca): error getting project's
2025-08-20T14:01:04.5239383Z         limits (68a5d4bdf98188003c99b1ca):
2025-08-20T14:01:04.5240437Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d4bdf98188003c99b1ca/limits
2025-08-20T14:01:04.5241648Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T14:01:04.5242699Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T14:01:04.5243566Z         BadRequestDetail: 
2025-08-20T14:01:04.5244130Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (33.85s)
```

- 2025-08-21 PASS 25 seconds
- 2025-08-22 PASS 21 seconds
- 2025-08-23 PASS 28 seconds
- 2025-08-24

### Error 2025-08-24T00:32:34+00:00
```
2025-08-24T00:32:34.9039322Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-08-24T00:32:34.9051300Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-08-24T00:32:34.9076405Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2025-08-24T00:32:34.9077452Z     resource_maintenance_window_test.go:42: Step 1/5 error: Error running apply: exit status 1
2025-08-24T00:32:34.9078242Z         
2025-08-24T00:32:34.9078937Z         Error: error when getting project properties after create
2025-08-24T00:32:34.9079531Z         
2025-08-24T00:32:34.9080132Z           with mongodbatlas_project.test,
2025-08-24T00:32:34.9081240Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:32:34.9082199Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:32:34.9082702Z         
2025-08-24T00:32:34.9083495Z         error getting project (68aa5d804192cd1cc589ef97): error getting project's
2025-08-24T00:32:34.9084301Z         limits (68aa5d804192cd1cc589ef97):
2025-08-24T00:32:34.9085503Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d804192cd1cc589ef97/limits
2025-08-24T00:32:34.9086675Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:34.9087676Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:34.9088353Z         BadRequestDetail: 
2025-08-24T00:32:34.9088886Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (34.17s)
```

- 2025-08-25 PASS 30 seconds
- 2025-08-26 PASS 22 seconds
- 2025-08-27 PASS 18 seconds
- 2025-08-28 PASS 15 seconds
- 2025-08-29 PASS 29 seconds
- 2025-08-30 PASS 25 seconds
- 2025-08-31 PASS 34 seconds
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.1916086Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-09-01T00:31:13.1921295Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-09-01T00:31:13.2025492Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2025-09-01T00:31:13.2026553Z     resource_maintenance_window_test.go:42: Step 1/5 error: Error running apply: exit status 1
2025-09-01T00:31:13.2027333Z         
2025-09-01T00:31:13.2028074Z         Error: error creating project: test-acc-tf-p-2642223800686104910
2025-09-01T00:31:13.2028698Z         
2025-09-01T00:31:13.2029233Z           with mongodbatlas_project.test,
2025-09-01T00:31:13.2030423Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:31:13.2031325Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:31:13.2031805Z         
2025-09-01T00:31:13.2032591Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:31:13.2033647Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:31:13.2034675Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:31:13.2035687Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:31:13.2036357Z         BadRequestDetail: 
2025-09-01T00:31:13.2158061Z    test_step_number=1 test_name=TestAccConfigRSMaintenanceWindow_autoDeferActivated test_terraform_path=/home/runner/work/_temp/c4befcc9-41b8-42b5-bee4-64a560bb5beb/terraform test_working_directory=/tmp/plugintest3420554234
2025-09-01T00:31:13.2475270Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (1.11s)
```

  - PASS 20 seconds
  - PASS 33 seconds
  - PASS 30 seconds
  - PASS 25 seconds
  - PASS 19 seconds
  - PASS 15 seconds
  - PASS 18 seconds
- 2025-09-02 PASS 24 seconds
- 2025-09-03 PASS 18 seconds
- 2025-09-04 PASS 25 seconds