# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_autoDeferActivated Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 1.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 11 seconds
- 2025-08-07 PASS 55 seconds
- 2025-08-08 PASS 10 seconds
- 2025-08-09 PASS 11 seconds
- 2025-08-10 PASS 9 seconds
- 2025-08-11 PASS 13 seconds
- 2025-08-12 PASS 9 seconds
- 2025-08-13 PASS 9 seconds
- 2025-08-14 PASS 11 seconds
- 2025-08-15 PASS 10 seconds
- 2025-08-16 PASS 11 seconds
- 2025-08-17 PASS 11 seconds
- 2025-08-18 PASS 9 seconds
- 2025-08-19 PASS 12 seconds
- 2025-08-20
  - PASS 13 seconds
  - PASS 12 seconds
- 2025-08-21 PASS 11 seconds
- 2025-08-22 PASS 10 seconds
- 2025-08-23 PASS 12 seconds
- 2025-08-24 PASS 9 seconds
- 2025-08-25 PASS 12 seconds
- 2025-08-26 PASS 10 seconds
- 2025-08-27 PASS 8 seconds
- 2025-08-28 PASS 7 seconds
- 2025-08-29 PASS 11 seconds
- 2025-08-30 PASS 11 seconds
- 2025-08-31 PASS 12 seconds
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.1918603Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-09-01T00:31:13.1920672Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-09-01T00:31:13.2159840Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-09-01T00:31:13.2161026Z     resource_maintenance_window_test.go:102: Step 1/1 error: Error running apply: exit status 1
2025-09-01T00:31:13.2161855Z         
2025-09-01T00:31:13.2162651Z         Error: error creating project: test-acc-tf-p-1402450048626596620
2025-09-01T00:31:13.2163313Z         
2025-09-01T00:31:13.2163877Z           with mongodbatlas_project.test,
2025-09-01T00:31:13.2165025Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:31:13.2166369Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:31:13.2166931Z         
2025-09-01T00:31:13.2167871Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:31:13.2169169Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:31:13.2170750Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:31:13.2171930Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:31:13.2172720Z         BadRequestDetail: 
2025-09-01T00:31:13.2254992Z    test_working_directory=/tmp/plugintest2373401207 test_step_number=1 test_name=TestAccConfigRSMaintenanceWindow_emptyHourOfDay test_terraform_path=/home/runner/work/_temp/c4befcc9-41b8-42b5-bee4-64a560bb5beb/terraform
2025-09-01T00:31:13.2476082Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (1.12s)
```

  - PASS 9 seconds
  - PASS 15 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 6 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 10 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 11 seconds