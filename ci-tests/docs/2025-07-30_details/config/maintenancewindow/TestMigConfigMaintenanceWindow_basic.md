# config/maintenancewindow/TestMigConfigMaintenanceWindow_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:34](#error-2025-07-06t0034000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c44c7267b5775b683e7d/limits | qa | flaky_500 | 34.08s
[2025-07-10 13:09](#error-2025-07-10t1309010000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb4b006d8d55bb9e770c/limits | qa | flaky_500 | 42.07s
[2025-07-13 00:34](#error-2025-07-13t0034200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fec5207f456171041ef8/limits | qa | flaky_500 | 39.06s
[2025-07-23 13:25](#error-2025-07-23t1325360000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6880e2790afa8a5c6050815a/limits | qa | flaky_500 | 48.02s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 22 seconds
  - PASS 25 seconds
  - PASS 28 seconds
  - PASS 25 seconds
  - PASS 28 seconds
  - PASS 16 seconds
- 2025-07-02 PASS 14 seconds
- 2025-07-03 PASS 26 seconds
- 2025-07-04 PASS 18 seconds
- 2025-07-05 PASS 25 seconds
- 2025-07-06

### Error 2025-07-06T00:34:00+00:00
```
2025-07-06T00:34:00.2667634Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-07-06T00:34:00.2675544Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-07-06T00:34:00.2689380Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-07-06T00:34:00.2690427Z     resource_maintenance_window_migration_test.go:23: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:34:00.2691182Z         
2025-07-06T00:34:00.2691824Z         Error: error when getting project properties after create
2025-07-06T00:34:00.2692361Z         
2025-07-06T00:34:00.2692846Z           with mongodbatlas_project.test,
2025-07-06T00:34:00.2693848Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-06T00:34:00.2694867Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:34:00.2695744Z         
2025-07-06T00:34:00.2696518Z         error getting project (6869c44c7267b5775b683e7d): error getting project's
2025-07-06T00:34:00.2697274Z         limits (6869c44c7267b5775b683e7d):
2025-07-06T00:34:00.2698221Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c44c7267b5775b683e7d/limits
2025-07-06T00:34:00.2699329Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:34:00.2700303Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:34:00.2700946Z         BadRequestDetail: 
2025-07-06T00:34:00.2701446Z --- FAIL: TestMigConfigMaintenanceWindow_basic (34.77s)
```

- 2025-07-07 PASS 22 seconds
- 2025-07-08 PASS 26 seconds
- 2025-07-09 PASS 28 seconds
- 2025-07-10
  - PASS 23 seconds
  - FAIL 42 seconds

### Error 2025-07-10T13:09:01+00:00
```
2025-07-10T13:09:01.7502342Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-07-10T13:09:01.7513563Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-07-10T13:09:01.7534980Z    test_terraform_path=/home/runner/work/_temp/4d88fbfe-d7c1-4ace-8448-f77c49f7b3e7/terraform test_name=TestAccConfigRSMaintenanceWindow_emptyHourOfDay test_working_directory=/tmp/plugintest785190041 test_step_number=1
2025-07-10T13:09:01.7671026Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-07-10T13:09:01.7674617Z     resource_maintenance_window_migration_test.go:23: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:09:01.7675484Z         
2025-07-10T13:09:01.7676153Z         Error: error when getting project properties after create
2025-07-10T13:09:01.7676949Z         
2025-07-10T13:09:01.7677458Z           with mongodbatlas_project.test,
2025-07-10T13:09:01.7678493Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-10T13:09:01.7679426Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:09:01.7679938Z         
2025-07-10T13:09:01.7680731Z         error getting project (686fbb4b006d8d55bb9e770c): error getting project's
2025-07-10T13:09:01.7681571Z         limits (686fbb4b006d8d55bb9e770c):
2025-07-10T13:09:01.7682601Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb4b006d8d55bb9e770c/limits
2025-07-10T13:09:01.7683778Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:09:01.7684793Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:09:01.7685464Z         BadRequestDetail: 
2025-07-10T13:09:01.7685987Z --- FAIL: TestMigConfigMaintenanceWindow_basic (42.74s)
```

- 2025-07-11 PASS 27 seconds
- 2025-07-12 PASS 22 seconds
- 2025-07-13

### Error 2025-07-13T00:34:20+00:00
```
2025-07-13T00:34:20.7912663Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-07-13T00:34:20.7919830Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-07-13T00:34:20.8006658Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-07-13T00:34:20.8007735Z     resource_maintenance_window_migration_test.go:23: Step 1/2 error: Error running apply: exit status 1
2025-07-13T00:34:20.8008873Z         
2025-07-13T00:34:20.8009565Z         Error: error when getting project properties after create
2025-07-13T00:34:20.8010141Z         
2025-07-13T00:34:20.8010660Z           with mongodbatlas_project.test,
2025-07-13T00:34:20.8011723Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-13T00:34:20.8012737Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-13T00:34:20.8013237Z         
2025-07-13T00:34:20.8014033Z         error getting project (6872fec5207f456171041ef8): error getting project's
2025-07-13T00:34:20.8014835Z         limits (6872fec5207f456171041ef8):
2025-07-13T00:34:20.8015842Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fec5207f456171041ef8/limits
2025-07-13T00:34:20.8017022Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:34:20.8018046Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:34:20.8018885Z         BadRequestDetail: 
2025-07-13T00:34:20.8019468Z --- FAIL: TestMigConfigMaintenanceWindow_basic (39.56s)
```

- 2025-07-14 PASS 25 seconds
- 2025-07-15 PASS 21 seconds
- 2025-07-16 PASS 24 seconds
- 2025-07-17 PASS 21 seconds
- 2025-07-18 PASS 22 seconds
- 2025-07-19 PASS 21 seconds
- 2025-07-20 PASS 21 seconds
- 2025-07-21 PASS 24 seconds
- 2025-07-22 PASS 22 seconds
- 2025-07-23
  - PASS 18 seconds
  - PASS 24 seconds
  - FAIL 48 seconds

### Error 2025-07-23T13:25:36+00:00
```
2025-07-23T13:25:36.7730620Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-07-23T13:25:36.7735503Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-07-23T13:25:36.7743880Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-07-23T13:25:36.7744752Z     resource_maintenance_window_migration_test.go:23: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-23T13:25:36.7745276Z         
2025-07-23T13:25:36.7745653Z         Error: error when getting project properties after create
2025-07-23T13:25:36.7745989Z         
2025-07-23T13:25:36.7746573Z           with mongodbatlas_project.test,
2025-07-23T13:25:36.7747334Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-23T13:25:36.7747885Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-23T13:25:36.7748184Z         
2025-07-23T13:25:36.7748629Z         error getting project (6880e2790afa8a5c6050815a): error getting project's
2025-07-23T13:25:36.7749100Z         limits (6880e2790afa8a5c6050815a):
2025-07-23T13:25:36.7749674Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6880e2790afa8a5c6050815a/limits
2025-07-23T13:25:36.7750347Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T13:25:36.7750927Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T13:25:36.7751318Z         BadRequestDetail: 
2025-07-23T13:25:36.7751637Z --- FAIL: TestMigConfigMaintenanceWindow_basic (48.18s)
```

- 2025-07-24 PASS 24 seconds
- 2025-07-25 PASS 14 seconds
- 2025-07-26 PASS 18 seconds
- 2025-07-27 PASS 15 seconds
- 2025-07-28 PASS 26 seconds
- 2025-07-29 PASS 18 seconds
- 2025-07-30 PASS 25 seconds