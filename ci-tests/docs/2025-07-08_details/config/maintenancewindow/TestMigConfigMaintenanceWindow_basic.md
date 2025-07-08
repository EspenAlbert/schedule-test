# config/maintenancewindow/TestMigConfigMaintenanceWindow_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 16 seconds
```
2025-07-01T08:35:29.4636738Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-07-01T08:35:29.4642936Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-07-01T08:35:29.4645210Z --- PASS: TestMigConfigMaintenanceWindow_basic (16.27s)
```
### 2025-07-02
#### PASS 14 seconds
```
2025-07-02T00:30:40.8655615Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-07-02T00:30:40.8660065Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-07-02T00:30:40.8661711Z --- PASS: TestMigConfigMaintenanceWindow_basic (14.16s)
```
### 2025-07-03
#### PASS 26 seconds
```
2025-07-03T00:31:22.4279770Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-07-03T00:31:22.4287798Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-07-03T00:31:22.4291105Z --- PASS: TestMigConfigMaintenanceWindow_basic (26.04s)
```
### 2025-07-04
#### PASS 18 seconds
```
2025-07-04T00:30:47.2464039Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-07-04T00:30:47.2471208Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-07-04T00:30:47.2473873Z --- PASS: TestMigConfigMaintenanceWindow_basic (18.56s)
```
### 2025-07-05
#### PASS 25 seconds
```
2025-07-05T00:29:58.2642967Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-07-05T00:29:58.2647492Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-07-05T00:29:58.2649167Z --- PASS: TestMigConfigMaintenanceWindow_basic (25.83s)
```
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
```
2025-07-07T00:33:18.3601793Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-07-07T00:33:18.3611594Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-07-07T00:33:18.3615355Z --- PASS: TestMigConfigMaintenanceWindow_basic (22.45s)
```
### 2025-07-08
#### PASS 26 seconds
```
2025-07-08T00:31:21.0007155Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-07-08T00:31:21.0015454Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-07-08T00:31:21.0018497Z --- PASS: TestMigConfigMaintenanceWindow_basic (26.61s)
```