# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_emptyHourOfDay Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 7 seconds
```
2025-07-01T08:35:29.4639279Z === RUN   TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-01T08:35:29.4642254Z === CONT  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-01T08:35:29.4643325Z --- PASS: TestAccConfigRSMaintenanceWindow_emptyHourOfDay (7.74s)
```
### 2025-07-02
#### PASS 7 seconds
```
2025-07-02T00:30:40.8656949Z === RUN   TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-02T00:30:40.8658990Z === CONT  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-02T00:30:40.8660443Z --- PASS: TestAccConfigRSMaintenanceWindow_emptyHourOfDay (7.04s)
```
### 2025-07-03
#### PASS 11 seconds
```
2025-07-03T00:31:22.4282160Z === RUN   TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-03T00:31:22.4285781Z === CONT  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-03T00:31:22.4288755Z --- PASS: TestAccConfigRSMaintenanceWindow_emptyHourOfDay (11.86s)
```
### 2025-07-04
#### PASS 10 seconds
```
2025-07-04T00:30:47.2466141Z === RUN   TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-04T00:30:47.2469490Z === CONT  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-04T00:30:47.2472610Z --- PASS: TestAccConfigRSMaintenanceWindow_emptyHourOfDay (10.04s)
```
### 2025-07-05
#### PASS 11 seconds
```
2025-07-05T00:29:58.2644311Z === RUN   TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-05T00:29:58.2646389Z === CONT  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-05T00:29:58.2648372Z --- PASS: TestAccConfigRSMaintenanceWindow_emptyHourOfDay (11.93s)
```
### 2025-07-06
#### FAIL 35 seconds
```
2025-07-06T00:34:00.2669967Z === RUN   TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-06T00:34:00.2673503Z === CONT  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-06T00:34:00.2723028Z === NAME  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-06T00:34:00.2724031Z     resource_maintenance_window_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-07-06T00:34:00.2724724Z         
2025-07-06T00:34:00.2725512Z         Error: error when getting project properties after create
2025-07-06T00:34:00.2726064Z         
2025-07-06T00:34:00.2726555Z           with mongodbatlas_project.test,
2025-07-06T00:34:00.2727555Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:34:00.2728470Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:34:00.2728949Z         
2025-07-06T00:34:00.2729695Z         error getting project (6869c44a7267b5775b683d73): error getting project's
2025-07-06T00:34:00.2730456Z         limits (6869c44a7267b5775b683d73):
2025-07-06T00:34:00.2731415Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c44a7267b5775b683d73/limits
2025-07-06T00:34:00.2732522Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:34:00.2733661Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:34:00.2734309Z         BadRequestDetail: 
2025-07-06T00:34:00.2734890Z --- FAIL: TestAccConfigRSMaintenanceWindow_emptyHourOfDay (35.13s)
```
### 2025-07-07
#### PASS 8 seconds
```
2025-07-07T00:33:18.3605911Z === RUN   TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-07T00:33:18.3610363Z === CONT  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-07T00:33:18.3613823Z --- PASS: TestAccConfigRSMaintenanceWindow_emptyHourOfDay (8.93s)
```
### 2025-07-08
#### PASS 12 seconds
```
2025-07-08T00:31:21.0009638Z === RUN   TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-08T00:31:21.0014232Z === CONT  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-08T00:31:21.0016153Z --- PASS: TestAccConfigRSMaintenanceWindow_emptyHourOfDay (12.20s)
```