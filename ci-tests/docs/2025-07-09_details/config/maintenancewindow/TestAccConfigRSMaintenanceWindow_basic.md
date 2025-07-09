# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 4)
Success rate: 96.52%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 1.03s
2025-06-05 00:30 | dev | 2.07s
2025-06-29 00:34 | qa | 61.07s
2025-07-06 00:34 | qa | 46.08s

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
#### PASS 17 seconds
### 2025-04-12
#### PASS 17 seconds
### 2025-04-13
#### PASS 25 seconds
### 2025-04-14
#### PASS 14 seconds
### 2025-04-15
#### PASS 17 seconds
### 2025-04-16
#### PASS 15 seconds
#### PASS 16 seconds
### 2025-04-17
#### PASS 24 seconds
### 2025-04-18
#### PASS 15 seconds
### 2025-04-19
#### PASS 24 seconds
### 2025-04-20
#### PASS 17 seconds
### 2025-04-21
#### PASS 30 seconds
### 2025-04-22
#### PASS 25 seconds
### 2025-04-23
#### PASS 15 seconds
### 2025-04-24
#### PASS 28 seconds
### 2025-04-25
#### PASS 25 seconds
### 2025-04-26
#### PASS 29 seconds
### 2025-04-27
#### PASS 33 seconds
### 2025-04-28
#### PASS 30 seconds
### 2025-04-29
#### PASS 19 seconds
### 2025-04-30
#### PASS 26 seconds
#### PASS 27 seconds
### 2025-05-01
#### PASS 26 seconds
#### PASS 31 seconds
#### PASS 24 seconds
#### PASS 24 seconds
#### PASS 16 seconds
#### PASS 28 seconds
#### PASS 29 seconds
### 2025-05-02
#### PASS 28 seconds
### 2025-05-03
#### PASS 26 seconds
### 2025-05-04
#### PASS 26 seconds
### 2025-05-05
#### PASS 31 seconds
### 2025-05-06
#### PASS 26 seconds
### 2025-05-07
#### PASS 17 seconds
### 2025-05-08
#### PASS 25 seconds
### 2025-05-09
#### PASS 29 seconds
### 2025-05-10
#### PASS 25 seconds
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:29:54.1789821Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-05-11T00:29:54.1795653Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-05-11T00:29:54.1862133Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2025-05-11T00:29:54.1863133Z     resource_maintenance_window_test.go:42: Step 1/5 error: Error running apply: exit status 1
2025-05-11T00:29:54.1863875Z         
2025-05-11T00:29:54.1864605Z         Error: error creating project: test-acc-tf-p-5947896893064333862
2025-05-11T00:29:54.1865204Z         
2025-05-11T00:29:54.1865712Z           with mongodbatlas_project.test,
2025-05-11T00:29:54.1866762Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:54.1867715Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:54.1868239Z         
2025-05-11T00:29:54.1869053Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:54.1869792Z         type
2025-05-11T00:29:54.1884610Z    test_name=TestAccConfigRSMaintenanceWindow_emptyHourOfDay test_step_number=1 test_working_directory=/tmp/plugintest4068702183 test_terraform_path=/home/runner/work/_temp/9cb30b14-da37-4aae-9179-acc0e8e8f9a4/terraform
2025-05-11T00:29:54.1896956Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (1.28s)
```
### 2025-05-12
#### PASS 26 seconds
### 2025-05-13
#### PASS 31 seconds
#### PASS 26 seconds
### 2025-05-14
#### PASS 25 seconds
### 2025-05-15
#### PASS 27 seconds
### 2025-05-16
#### PASS 29 seconds
### 2025-05-17
#### PASS 17 seconds
### 2025-05-18
#### PASS 27 seconds
### 2025-05-19
#### PASS 22 seconds
### 2025-05-20
#### PASS 25 seconds
### 2025-05-21
#### PASS 24 seconds
### 2025-05-22
#### PASS 24 seconds
### 2025-05-23
#### PASS 24 seconds
### 2025-05-24
#### PASS 26 seconds
### 2025-05-25
#### PASS 25 seconds
### 2025-05-26
#### PASS 24 seconds
### 2025-05-27
#### PASS 25 seconds
### 2025-05-28
#### PASS 30 seconds
#### PASS 25 seconds
#### PASS 24 seconds
### 2025-05-29
#### PASS 25 seconds
### 2025-05-30
#### PASS 28 seconds
### 2025-05-31
#### PASS 29 seconds
### 2025-06-01
#### PASS 16 seconds
#### PASS 25 seconds
#### PASS 15 seconds
#### PASS 27 seconds
#### PASS 26 seconds
#### PASS 18 seconds
### 2025-06-02
#### PASS 18 seconds
#### PASS 17 seconds
#### PASS 37 seconds
### 2025-06-03
#### PASS 28 seconds
### 2025-06-04
#### PASS 23 seconds
### 2025-06-05
#### FAIL 2 seconds
```
2025-06-05T00:30:45.1310313Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-06-05T00:30:45.1313516Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-06-05T00:30:45.1325377Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2025-06-05T00:30:45.1325953Z     resource_maintenance_window_test.go:42: Step 1/5 error: Error running apply: exit status 1
2025-06-05T00:30:45.1326385Z         
2025-06-05T00:30:45.1326805Z         Error: error creating project: test-acc-tf-p-2375643481855984306
2025-06-05T00:30:45.1327162Z         
2025-06-05T00:30:45.1327473Z           with mongodbatlas_project.test,
2025-06-05T00:30:45.1328187Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:30:45.1328742Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:30:45.1329043Z         
2025-06-05T00:30:45.1329516Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:30:45.1330153Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:30:45.1330733Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:30:45.1331166Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (2.69s)
```
### 2025-06-06
#### PASS 22 seconds
### 2025-06-07
#### PASS 29 seconds
### 2025-06-08
#### PASS 17 seconds
### 2025-06-09
#### PASS 25 seconds
### 2025-06-10
#### PASS 29 seconds
### 2025-06-11
#### PASS 29 seconds
#### PASS 16 seconds
### 2025-06-12
#### PASS 25 seconds
### 2025-06-13
#### PASS 25 seconds
### 2025-06-14
#### PASS 24 seconds
### 2025-06-15
#### PASS 22 seconds
### 2025-06-16
#### PASS 28 seconds
### 2025-06-17
#### PASS 30 seconds
### 2025-06-18
#### PASS 24 seconds
#### PASS 26 seconds
### 2025-06-19
#### PASS 16 seconds
### 2025-06-20
#### PASS 29 seconds
### 2025-06-21
#### PASS 18 seconds
### 2025-06-22
#### PASS 38 seconds
### 2025-06-23
#### PASS 30 seconds
### 2025-06-24
#### PASS 22 seconds
### 2025-06-25
#### PASS 21 seconds
### 2025-06-26
#### PASS 26 seconds
### 2025-06-27
#### PASS 32 seconds
### 2025-06-28
#### PASS 15 seconds
### 2025-06-29
#### FAIL a minute
```
2025-06-29T00:34:19.1607616Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-06-29T00:34:19.1611153Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-06-29T00:34:19.1683461Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2025-06-29T00:34:19.1684051Z     resource_maintenance_window_test.go:42: Step 2/5 error: Error running pre-apply plan: exit status 1
2025-06-29T00:34:19.1684493Z         
2025-06-29T00:34:19.1684990Z         Error: error when getting project properties after create
2025-06-29T00:34:19.1685338Z         
2025-06-29T00:34:19.1685634Z           with mongodbatlas_project.test,
2025-06-29T00:34:19.1686244Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:34:19.1686798Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:34:19.1687080Z         
2025-06-29T00:34:19.1687514Z         error getting project (686089c349709c3a5a3c9f01): error getting project's
2025-06-29T00:34:19.1687957Z         limits (686089c349709c3a5a3c9f01):
2025-06-29T00:34:19.1688516Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089c349709c3a5a3c9f01/limits
2025-06-29T00:34:19.1689306Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:34:19.1689873Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:34:19.1690261Z         BadRequestDetail: 
2025-06-29T00:34:19.1690571Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (61.71s)
```
### 2025-06-30
#### PASS 26 seconds
### 2025-07-01
#### PASS 25 seconds
#### PASS 26 seconds
#### PASS 30 seconds
#### PASS 25 seconds
#### PASS 33 seconds
#### PASS 16 seconds
### 2025-07-02
#### PASS 15 seconds
### 2025-07-03
#### PASS 27 seconds
### 2025-07-04
#### PASS 20 seconds
### 2025-07-05
#### PASS 29 seconds
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
### 2025-07-08
#### PASS 30 seconds
### 2025-07-09
#### PASS 31 seconds