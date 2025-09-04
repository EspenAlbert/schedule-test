# config/maintenancewindow/TestAccConfigDSMaintenanceWindow_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.01s
[2025-09-01 05:59](#error-2025-09-01t0559570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 2.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 11 seconds
- 2025-08-07 PASS 57 seconds
- 2025-08-08 PASS 9 seconds
- 2025-08-09 PASS 10 seconds
- 2025-08-10 PASS 9 seconds
- 2025-08-11 PASS 12 seconds
- 2025-08-12 PASS 9 seconds
- 2025-08-13 PASS 9 seconds
- 2025-08-14 PASS 10 seconds
- 2025-08-15 PASS 11 seconds
- 2025-08-16 PASS 11 seconds
- 2025-08-17 PASS 11 seconds
- 2025-08-18 PASS 11 seconds
- 2025-08-19 PASS 13 seconds
- 2025-08-20
  - PASS 11 seconds
  - PASS 12 seconds
- 2025-08-21 PASS 9 seconds
- 2025-08-22 PASS 10 seconds
- 2025-08-23 PASS 12 seconds
- 2025-08-24 PASS 10 seconds
- 2025-08-25 PASS 13 seconds
- 2025-08-26 PASS 12 seconds
- 2025-08-27 PASS 9 seconds
- 2025-08-28 PASS 7 seconds
- 2025-08-29 PASS 11 seconds
- 2025-08-30 PASS 11 seconds
- 2025-08-31 PASS 12 seconds
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.1913736Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-09-01T00:31:13.1920047Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-09-01T00:31:13.2378633Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2025-09-01T00:31:13.2407890Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-09-01T00:31:13.2410786Z         
2025-09-01T00:31:13.2412666Z         Error: error creating project: test-acc-tf-p-8719924902064542589
2025-09-01T00:31:13.2414327Z         
2025-09-01T00:31:13.2415889Z           with mongodbatlas_project.test,
2025-09-01T00:31:13.2420709Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:31:13.2424352Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:31:13.2427490Z         
2025-09-01T00:31:13.2469986Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:31:13.2471375Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:31:13.2472848Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:31:13.2473981Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:31:13.2474715Z         BadRequestDetail: 
2025-09-01T00:31:13.2477718Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (1.13s)
```

  - FAIL 2 seconds

### Error 2025-09-01T05:59:57+00:00
```
2025-09-01T05:59:57.8584243Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-09-01T05:59:57.8588038Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-09-01T05:59:57.8601742Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2025-09-01T05:59:57.8602323Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-09-01T05:59:57.8602757Z         
2025-09-01T05:59:57.8603169Z         Error: error creating project: test-acc-tf-p-2583417334807133191
2025-09-01T05:59:57.8603508Z         
2025-09-01T05:59:57.8603797Z           with mongodbatlas_project.test,
2025-09-01T05:59:57.8604372Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T05:59:57.8604912Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T05:59:57.8605193Z         
2025-09-01T05:59:57.8605655Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T05:59:57.8606284Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T05:59:57.8606896Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T05:59:57.8607676Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T05:59:57.8608075Z         BadRequestDetail: 
2025-09-01T05:59:57.8608391Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (2.32s)
```

  - PASS 14 seconds
  - PASS 13 seconds
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 7 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 10 seconds
- 2025-09-03 PASS 10 seconds
- 2025-09-04 PASS 12 seconds