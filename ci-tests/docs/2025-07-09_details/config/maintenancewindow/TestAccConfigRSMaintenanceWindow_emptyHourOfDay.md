# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_emptyHourOfDay Test Details
# Found 115 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 4)
Success rate: 96.52%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 1.03s
2025-06-05 00:30 | dev | 4.01s
2025-06-29 00:34 | qa | 34.05s
2025-07-06 00:34 | qa | 35.01s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 7 seconds
### 2025-04-12
#### PASS 7 seconds
### 2025-04-13
#### PASS 10 seconds
### 2025-04-14
#### PASS 6 seconds
### 2025-04-15
#### PASS 8 seconds
### 2025-04-16
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-04-17
#### PASS 11 seconds
### 2025-04-18
#### PASS 6 seconds
### 2025-04-19
#### PASS 12 seconds
### 2025-04-20
#### PASS 7 seconds
### 2025-04-21
#### PASS 13 seconds
### 2025-04-22
#### PASS 9 seconds
### 2025-04-23
#### PASS 7 seconds
### 2025-04-24
#### PASS 12 seconds
### 2025-04-25
#### PASS 11 seconds
### 2025-04-26
#### PASS 12 seconds
### 2025-04-27
#### PASS 11 seconds
### 2025-04-28
#### PASS 12 seconds
### 2025-04-29
#### PASS 10 seconds
### 2025-04-30
#### PASS 9 seconds
#### PASS 11 seconds
### 2025-05-01
#### PASS 10 seconds
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 7 seconds
#### PASS 12 seconds
#### PASS 11 seconds
### 2025-05-02
#### PASS 12 seconds
### 2025-05-03
#### PASS 10 seconds
### 2025-05-04
#### PASS 9 seconds
### 2025-05-05
#### PASS 14 seconds
### 2025-05-06
#### PASS 11 seconds
### 2025-05-07
#### PASS 9 seconds
### 2025-05-08
#### PASS 9 seconds
### 2025-05-09
#### PASS 12 seconds
### 2025-05-10
#### PASS 9 seconds
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:29:54.1790997Z === RUN   TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-05-11T00:29:54.1794373Z === CONT  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-05-11T00:29:54.1886343Z === NAME  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-05-11T00:29:54.1887397Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2025-05-11T00:29:54.1888154Z         
2025-05-11T00:29:54.1888880Z         Error: error creating project: test-acc-tf-p-2395837797423203612
2025-05-11T00:29:54.1889475Z         
2025-05-11T00:29:54.1889998Z           with mongodbatlas_project.test,
2025-05-11T00:29:54.1891083Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:54.1892354Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:54.1892888Z         
2025-05-11T00:29:54.1893749Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:54.1894458Z         type
2025-05-11T00:29:54.1896115Z --- FAIL: TestAccConfigRSMaintenanceWindow_emptyHourOfDay (1.27s)
```
### 2025-05-12
#### PASS 8 seconds
### 2025-05-13
#### PASS 11 seconds
#### PASS 8 seconds
### 2025-05-14
#### PASS 9 seconds
### 2025-05-15
#### PASS 10 seconds
### 2025-05-16
#### PASS 12 seconds
### 2025-05-17
#### PASS 8 seconds
### 2025-05-18
#### PASS 10 seconds
### 2025-05-19
#### PASS 13 seconds
### 2025-05-20
#### PASS 9 seconds
### 2025-05-21
#### PASS 8 seconds
### 2025-05-22
#### PASS 8 seconds
### 2025-05-23
#### PASS 10 seconds
### 2025-05-24
#### PASS 10 seconds
### 2025-05-25
#### PASS 11 seconds
### 2025-05-26
#### PASS 10 seconds
### 2025-05-27
#### PASS 12 seconds
### 2025-05-28
#### PASS 12 seconds
#### PASS 11 seconds
#### PASS 10 seconds
### 2025-05-29
#### PASS 12 seconds
### 2025-05-30
#### PASS 12 seconds
### 2025-05-31
#### PASS 10 seconds
### 2025-06-01
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 9 seconds
### 2025-06-02
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 14 seconds
### 2025-06-03
#### PASS 12 seconds
### 2025-06-04
#### PASS 11 seconds
### 2025-06-05
#### FAIL 4 seconds
```
2025-06-05T00:30:45.1311055Z === RUN   TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-06-05T00:30:45.1313130Z === CONT  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-06-05T00:30:45.1376117Z === NAME  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-06-05T00:30:45.1376861Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:30:45.1377300Z         
2025-06-05T00:30:45.1377720Z         Error: error creating project: test-acc-tf-p-8083027615162706183
2025-06-05T00:30:45.1378075Z         
2025-06-05T00:30:45.1378387Z           with mongodbatlas_project.test,
2025-06-05T00:30:45.1378980Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:30:45.1379534Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:30:45.1379834Z         
2025-06-05T00:30:45.1380303Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:30:45.1380938Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:30:45.1381512Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:30:45.1381979Z --- FAIL: TestAccConfigRSMaintenanceWindow_emptyHourOfDay (4.09s)
```
### 2025-06-06
#### PASS 11 seconds
### 2025-06-07
#### PASS 10 seconds
### 2025-06-08
#### PASS 9 seconds
### 2025-06-09
#### PASS 9 seconds
### 2025-06-10
#### PASS 11 seconds
### 2025-06-11
#### PASS 10 seconds
#### PASS 7 seconds
### 2025-06-12
#### PASS 8 seconds
### 2025-06-13
#### PASS 11 seconds
### 2025-06-14
#### PASS 10 seconds
### 2025-06-15
#### PASS 10 seconds
### 2025-06-16
#### PASS 10 seconds
### 2025-06-17
#### PASS 11 seconds
### 2025-06-18
#### PASS 11 seconds
#### PASS 10 seconds
### 2025-06-19
#### PASS 6 seconds
### 2025-06-20
#### PASS 14 seconds
### 2025-06-21
#### PASS 9 seconds
### 2025-06-22
#### PASS 10 seconds
### 2025-06-23
#### PASS 12 seconds
### 2025-06-24
#### PASS 12 seconds
### 2025-06-25
#### PASS 9 seconds
### 2025-06-26
#### PASS 11 seconds
### 2025-06-27
#### PASS 11 seconds
### 2025-06-28
#### PASS 7 seconds
### 2025-06-29
#### FAIL 34 seconds
```
2025-06-29T00:34:19.1608333Z === RUN   TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-06-29T00:34:19.1610289Z === CONT  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-06-29T00:34:19.1644402Z === NAME  TestAccConfigRSMaintenanceWindow_emptyHourOfDay
2025-06-29T00:34:19.1644985Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2025-06-29T00:34:19.1645403Z         
2025-06-29T00:34:19.1645783Z         Error: error when getting project properties after create
2025-06-29T00:34:19.1646099Z         
2025-06-29T00:34:19.1646389Z           with mongodbatlas_project.test,
2025-06-29T00:34:19.1646980Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:34:19.1647511Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:34:19.1647791Z         
2025-06-29T00:34:19.1648224Z         error getting project (686089c349709c3a5a3c9f1f): error getting project's
2025-06-29T00:34:19.1648675Z         limits (686089c349709c3a5a3c9f1f):
2025-06-29T00:34:19.1649226Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089c349709c3a5a3c9f1f/limits
2025-06-29T00:34:19.1649880Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:34:19.1650453Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:34:19.1650836Z         BadRequestDetail: 
2025-06-29T00:34:19.1651316Z --- FAIL: TestAccConfigRSMaintenanceWindow_emptyHourOfDay (34.50s)
```
### 2025-06-30
#### PASS 10 seconds
### 2025-07-01
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 12 seconds
#### PASS 11 seconds
#### PASS 15 seconds
#### PASS 7 seconds
### 2025-07-02
#### PASS 7 seconds
### 2025-07-03
#### PASS 11 seconds
### 2025-07-04
#### PASS 10 seconds
### 2025-07-05
#### PASS 11 seconds
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
### 2025-07-08
#### PASS 12 seconds
### 2025-07-09
#### PASS 14 seconds