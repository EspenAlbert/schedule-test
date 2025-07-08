# config/maintenancewindow/TestAccConfigDSMaintenanceWindow_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 8 seconds
```
2025-07-01T08:35:29.4635572Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-07-01T08:35:29.4641194Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-07-01T08:35:29.4643751Z --- PASS: TestAccConfigDSMaintenanceWindow_basic (8.31s)
```
### 2025-07-02
#### PASS 8 seconds
```
2025-07-02T00:30:40.8654935Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-07-02T00:30:40.8658507Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-07-02T00:30:40.8661341Z --- PASS: TestAccConfigDSMaintenanceWindow_basic (8.09s)
```
### 2025-07-03
#### PASS 12 seconds
```
2025-07-03T00:31:22.4278567Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-07-03T00:31:22.4284989Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-07-03T00:31:22.4289523Z --- PASS: TestAccConfigDSMaintenanceWindow_basic (12.00s)
```
### 2025-07-04
#### PASS 10 seconds
```
2025-07-04T00:30:47.2462991Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-07-04T00:30:47.2468781Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-07-04T00:30:47.2473278Z --- PASS: TestAccConfigDSMaintenanceWindow_basic (10.17s)
```
### 2025-07-05
#### PASS 13 seconds
```
2025-07-05T00:29:58.2642278Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-07-05T00:29:58.2645874Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-07-05T00:29:58.2648789Z --- PASS: TestAccConfigDSMaintenanceWindow_basic (13.08s)
```
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
```
2025-07-07T00:33:18.3600543Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-07-07T00:33:18.3609308Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-07-07T00:33:18.3614710Z --- PASS: TestAccConfigDSMaintenanceWindow_basic (9.10s)
```
### 2025-07-08
#### PASS 14 seconds
```
2025-07-08T00:31:21.0005917Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-07-08T00:31:21.0012647Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-07-08T00:31:21.0017799Z --- PASS: TestAccConfigDSMaintenanceWindow_basic (14.31s)
```