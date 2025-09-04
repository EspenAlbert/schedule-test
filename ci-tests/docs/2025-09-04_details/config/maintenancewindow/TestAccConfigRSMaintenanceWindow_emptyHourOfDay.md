# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_emptyHourOfDay Test Details
# Found 34 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:32](#error-2025-08-24t0032340000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d809bbb8c4ee1f848f6/limits | qa | flaky_500 | 35.01s
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 11 seconds
- 2025-08-07 PASS 48 seconds
- 2025-08-08: MISSING
- 2025-08-09 PASS 11 seconds
- 2025-08-10 PASS 9 seconds
- 2025-08-11 PASS 12 seconds
- 2025-08-12 PASS 10 seconds
- 2025-08-13 PASS 9 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15: MISSING
- 2025-08-16 PASS 10 seconds
- 2025-08-17 PASS 10 seconds
- 2025-08-18 PASS 10 seconds
- 2025-08-19 PASS 11 seconds
- 2025-08-20
  - PASS 12 seconds
  - PASS 11 seconds
- 2025-08-21 PASS 10 seconds
- 2025-08-22: MISSING
- 2025-08-23 PASS 12 seconds
- 2025-08-24

### Error 2025-08-24T00:32:34+00:00
```
2025-08-24T00:32:34.9041235Z === RUN   TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-08-24T00:32:34.9049558Z === CONT  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-08-24T00:32:34.9112163Z === NAME  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-08-24T00:32:34.9113234Z     resource_maintenance_window_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-08-24T00:32:34.9113970Z         
2025-08-24T00:32:34.9114631Z         Error: error when getting project properties after create
2025-08-24T00:32:34.9115354Z         
2025-08-24T00:32:34.9115867Z           with mongodbatlas_project.test,
2025-08-24T00:32:34.9116904Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:32:34.9117845Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:32:34.9118331Z         
2025-08-24T00:32:34.9119113Z         error getting project (68aa5d809bbb8c4ee1f848f6): error getting project's
2025-08-24T00:32:34.9119908Z         limits (68aa5d809bbb8c4ee1f848f6):
2025-08-24T00:32:34.9120911Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d809bbb8c4ee1f848f6/limits
2025-08-24T00:32:34.9122079Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:34.9123078Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:34.9123750Z         BadRequestDetail: 
2025-08-24T00:32:34.9124346Z --- FAIL: TestAccConfigRSMaintenanceWindow_emptyHourOfDay (35.08s)
```

- 2025-08-25 PASS 14 seconds
- 2025-08-26 PASS 11 seconds
- 2025-08-27 PASS 8 seconds
- 2025-08-28 PASS 8 seconds
- 2025-08-29: MISSING
- 2025-08-30 PASS 9 seconds
- 2025-08-31 PASS 37 seconds
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.1917266Z === RUN   TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-09-01T00:31:13.1921906Z === CONT  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-09-01T00:31:13.2256854Z === NAME  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-09-01T00:31:13.2258035Z     resource_maintenance_window_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-09-01T00:31:13.2259155Z         
2025-09-01T00:31:13.2260124Z         Error: error creating project: test-acc-tf-p-1623613415615186128
2025-09-01T00:31:13.2260722Z         
2025-09-01T00:31:13.2261213Z           with mongodbatlas_project.test,
2025-09-01T00:31:13.2262177Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:31:13.2263056Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:31:13.2263560Z         
2025-09-01T00:31:13.2264338Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:31:13.2265397Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:31:13.2266418Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:31:13.2267393Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:31:13.2268048Z         BadRequestDetail: 
2025-09-01T00:31:13.2377447Z    test_name=TestAccConfigDSMaintenanceWindow_basic test_terraform_path=/home/runner/work/_temp/c4befcc9-41b8-42b5-bee4-64a560bb5beb/terraform
2025-09-01T00:31:13.2476940Z --- FAIL: TestAccConfigRSMaintenanceWindow_emptyHourOfDay (1.12s)
```

  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 14 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 10 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 11 seconds