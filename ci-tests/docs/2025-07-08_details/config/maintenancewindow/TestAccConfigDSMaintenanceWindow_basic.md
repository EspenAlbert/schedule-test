# config/maintenancewindow/TestAccConfigDSMaintenanceWindow_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 8 seconds
### 2025-07-03
#### PASS 12 seconds
### 2025-07-04
#### PASS 10 seconds
### 2025-07-05
#### PASS 13 seconds
### 2025-07-06
#### FAIL 39 seconds
```
2025-07-06T00:34:00.2666358Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-07-06T00:34:00.2672896Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-07-06T00:34:00.2756551Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2025-07-06T00:34:00.2757708Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:34:00.2758494Z         
2025-07-06T00:34:00.2759134Z         Error: error when getting project properties after create
2025-07-06T00:34:00.2759668Z         
2025-07-06T00:34:00.2760166Z           with mongodbatlas_project.test,
2025-07-06T00:34:00.2761169Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:34:00.2762086Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:34:00.2762559Z         
2025-07-06T00:34:00.2763310Z         error getting project (6869c44a7267b5775b683d75): error getting project's
2025-07-06T00:34:00.2764089Z         limits (6869c44a7267b5775b683d75):
2025-07-06T00:34:00.2765036Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c44a7267b5775b683d75/limits
2025-07-06T00:34:00.2766339Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:34:00.2767327Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:34:00.2768020Z         BadRequestDetail: 
2025-07-06T00:34:00.2768549Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (39.28s)
```
### 2025-07-07
#### PASS 9 seconds
### 2025-07-08
#### PASS 14 seconds