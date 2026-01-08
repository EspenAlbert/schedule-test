# config/maintenancewindow/TestMigConfigMaintenanceWindow_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 6.07s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 13 seconds
  - PASS 18 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 22 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 22 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 14 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 13 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 24 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 23 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 21 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 13 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 11 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 17 seconds
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:33:25+00:00
```
2026-01-07T00:33:25.9585164Z === RUN   TestMigConfigMaintenanceWindow_basic
2026-01-07T00:33:25.9591047Z === CONT  TestMigConfigMaintenanceWindow_basic
2026-01-07T00:33:25.9632547Z    test_name=TestAccConfigRSMaintenanceWindow_autoDeferActivated test_working_directory=/tmp/plugintest3681574310
2026-01-07T00:33:25.9684352Z === NAME  TestMigConfigMaintenanceWindow_basic
2026-01-07T00:33:25.9685423Z     resource_maintenance_window_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:33:25.9686202Z         
2026-01-07T00:33:25.9686905Z         Error: error creating project: test-acc-tf-p-8683243351964840799
2026-01-07T00:33:25.9687681Z         
2026-01-07T00:33:25.9688212Z           with mongodbatlas_project.test,
2026-01-07T00:33:25.9689306Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2026-01-07T00:33:25.9690276Z           14: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:33:25.9690785Z         
2026-01-07T00:33:25.9691627Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:33:25.9692735Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:33:25.9693740Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:25.9694462Z --- FAIL: TestMigConfigMaintenanceWindow_basic (6.73s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 11 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 11 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 10 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 11 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 21 seconds
