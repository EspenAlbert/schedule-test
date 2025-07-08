# config/maintenancewindow/TestMigConfigMaintenanceWindow_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 14 seconds
### 2025-07-03
#### PASS 26 seconds
### 2025-07-04
#### PASS 18 seconds
### 2025-07-05
#### PASS 25 seconds
### 2025-07-06
#### FAIL 34 seconds
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
### 2025-07-07
#### PASS 22 seconds
### 2025-07-08
#### PASS 26 seconds