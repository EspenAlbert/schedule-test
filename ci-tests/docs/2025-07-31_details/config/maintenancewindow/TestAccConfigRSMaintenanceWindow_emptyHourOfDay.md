# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_emptyHourOfDay Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:34](#error-2025-07-06t0034000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c44a7267b5775b683d73/limits | qa | flaky_500 | 35.01s
[2025-07-10 13:09](#error-2025-07-10t1309010000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb45fd583001f9eec5cb/limits | qa | flaky_500 | 34.05s
[2025-07-13 00:34](#error-2025-07-13t0034200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fec1006d8d55bbaa351f/limits | qa | flaky_500 | 35.06s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 7 seconds
- 2025-07-03 PASS 11 seconds
- 2025-07-04 PASS 10 seconds
- 2025-07-05 PASS 11 seconds
- 2025-07-06

### Error 2025-07-06T00:34:00+00:00
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

- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 12 seconds
- 2025-07-09 PASS 14 seconds
- 2025-07-10
  - PASS 9 seconds
  - FAIL 34 seconds

### Error 2025-07-10T13:09:01+00:00
```
2025-07-10T13:09:01.7507131Z === RUN   TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-10T13:09:01.7511269Z === CONT  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-10T13:09:01.7536882Z === NAME  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-10T13:09:01.7537973Z     resource_maintenance_window_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-07-10T13:09:01.7538725Z         
2025-07-10T13:09:01.7539388Z         Error: error when getting project properties after create
2025-07-10T13:09:01.7539939Z         
2025-07-10T13:09:01.7540727Z           with mongodbatlas_project.test,
2025-07-10T13:09:01.7541774Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:09:01.7542730Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:09:01.7543238Z         
2025-07-10T13:09:01.7543989Z         error getting project (686fbb45fd583001f9eec5cb): error getting project's
2025-07-10T13:09:01.7544766Z         limits (686fbb45fd583001f9eec5cb):
2025-07-10T13:09:01.7545796Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb45fd583001f9eec5cb/limits
2025-07-10T13:09:01.7547265Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:09:01.7548315Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:09:01.7549000Z         BadRequestDetail: 
2025-07-10T13:09:01.7549603Z --- FAIL: TestAccConfigRSMaintenanceWindow_emptyHourOfDay (34.46s)
```

- 2025-07-11 PASS 11 seconds
- 2025-07-12 PASS 9 seconds
- 2025-07-13

### Error 2025-07-13T00:34:20+00:00
```
2025-07-13T00:34:20.7915047Z === RUN   TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-13T00:34:20.7918456Z === CONT  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-13T00:34:20.7980219Z === NAME  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-07-13T00:34:20.7981284Z     resource_maintenance_window_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-07-13T00:34:20.7982035Z         
2025-07-13T00:34:20.7982709Z         Error: error when getting project properties after create
2025-07-13T00:34:20.7983461Z         
2025-07-13T00:34:20.7983980Z           with mongodbatlas_project.test,
2025-07-13T00:34:20.7985043Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-13T00:34:20.7986003Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-13T00:34:20.7986504Z         
2025-07-13T00:34:20.7987305Z         error getting project (6872fec1006d8d55bbaa351f): error getting project's
2025-07-13T00:34:20.7988126Z         limits (6872fec1006d8d55bbaa351f):
2025-07-13T00:34:20.7989289Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fec1006d8d55bbaa351f/limits
2025-07-13T00:34:20.7990488Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:34:20.7991520Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:34:20.7992204Z         BadRequestDetail: 
2025-07-13T00:34:20.7992823Z --- FAIL: TestAccConfigRSMaintenanceWindow_emptyHourOfDay (35.62s)
```

- 2025-07-14 PASS 13 seconds
- 2025-07-15 PASS 9 seconds
- 2025-07-16 PASS 11 seconds
- 2025-07-17 PASS 10 seconds
- 2025-07-18 PASS 8 seconds
- 2025-07-19 PASS 8 seconds
- 2025-07-20 PASS 18 seconds
- 2025-07-21 PASS 10 seconds
- 2025-07-22 PASS 10 seconds
- 2025-07-23
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 17 seconds
- 2025-07-24 PASS 9 seconds
- 2025-07-25: MISSING
- 2025-07-26 PASS 9 seconds
- 2025-07-27 PASS 8 seconds
- 2025-07-28 PASS 10 seconds
- 2025-07-29 PASS 10 seconds
- 2025-07-30 PASS 10 seconds
- 2025-07-31 PASS 13 seconds