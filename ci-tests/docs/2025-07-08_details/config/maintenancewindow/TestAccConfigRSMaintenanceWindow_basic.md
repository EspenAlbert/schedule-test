# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 16 seconds
```
2025-07-01T08:35:29.4637882Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-07-01T08:35:29.4642610Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-07-01T08:35:29.4645920Z --- PASS: TestAccConfigRSMaintenanceWindow_basic (16.48s)
```
### 2025-07-02
#### PASS 15 seconds
```
2025-07-02T00:30:40.8656262Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-07-02T00:30:40.8659743Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-07-02T00:30:40.8662081Z --- PASS: TestAccConfigRSMaintenanceWindow_basic (15.55s)
```
### 2025-07-03
#### PASS 27 seconds
```
2025-07-03T00:31:22.4280929Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-07-03T00:31:22.4287164Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-07-03T00:31:22.4291788Z --- PASS: TestAccConfigRSMaintenanceWindow_basic (27.56s)
```
### 2025-07-04
#### PASS 20 seconds
```
2025-07-04T00:30:47.2465060Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-07-04T00:30:47.2470694Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-07-04T00:30:47.2474460Z --- PASS: TestAccConfigRSMaintenanceWindow_basic (20.56s)
```
### 2025-07-05
#### PASS 29 seconds
```
2025-07-05T00:29:58.2643621Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-07-05T00:29:58.2646758Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-07-05T00:29:58.2649547Z --- PASS: TestAccConfigRSMaintenanceWindow_basic (29.85s)
```
### 2025-07-06
#### FAIL 46 seconds
```
2025-07-06T00:34:00.2668783Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-07-06T00:34:00.2674786Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-07-06T00:34:00.2790016Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2025-07-06T00:34:00.2791088Z     resource_maintenance_window_test.go:42: Step 4/5 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:34:00.2791879Z         
2025-07-06T00:34:00.2792507Z         Error: error when getting project properties after create
2025-07-06T00:34:00.2793035Z         
2025-07-06T00:34:00.2793522Z           with mongodbatlas_project.test,
2025-07-06T00:34:00.2794523Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:34:00.2795614Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:34:00.2795965Z         
2025-07-06T00:34:00.2796389Z         error getting project (6869c44a7267b5775b683d74): error getting project's
2025-07-06T00:34:00.2796828Z         limits (6869c44a7267b5775b683d74):
2025-07-06T00:34:00.2797369Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c44a7267b5775b683d74/limits
2025-07-06T00:34:00.2798019Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:34:00.2798577Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:34:00.2798970Z         BadRequestDetail: 
2025-07-06T00:34:00.2799279Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (46.81s)
```
### 2025-07-07
#### PASS 25 seconds
```
2025-07-07T00:33:18.3604249Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-07-07T00:33:18.3611013Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-07-07T00:33:18.3616013Z --- PASS: TestAccConfigRSMaintenanceWindow_basic (25.92s)
```
### 2025-07-08
#### PASS 30 seconds
```
2025-07-08T00:31:21.0008328Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-07-08T00:31:21.0014861Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-07-08T00:31:21.0019195Z --- PASS: TestAccConfigRSMaintenanceWindow_basic (30.86s)
```