# config/maintenancewindow/TestMigConfigMaintenanceWindow_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 4)
Success rate: 96.52%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 3.01s
2025-06-05 00:30 | dev | 10.08s
2025-06-29 00:34 | qa | 62.10s
2025-07-06 00:34 | qa | 34.08s

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
#### PASS 12 seconds
### 2025-04-12
#### PASS 14 seconds
### 2025-04-13
#### PASS 25 seconds
### 2025-04-14
#### PASS 12 seconds
### 2025-04-15
#### PASS 16 seconds
### 2025-04-16
#### PASS 14 seconds
#### PASS 12 seconds
### 2025-04-17
#### PASS 25 seconds
### 2025-04-18
#### PASS 12 seconds
### 2025-04-19
#### PASS 22 seconds
### 2025-04-20
#### PASS 13 seconds
### 2025-04-21
#### PASS 26 seconds
### 2025-04-22
#### PASS 22 seconds
### 2025-04-23
#### PASS 13 seconds
### 2025-04-24
#### PASS 24 seconds
### 2025-04-25
#### PASS 24 seconds
### 2025-04-26
#### PASS 26 seconds
### 2025-04-27
#### PASS 28 seconds
### 2025-04-28
#### PASS 27 seconds
### 2025-04-29
#### PASS 20 seconds
### 2025-04-30
#### PASS 24 seconds
#### PASS 23 seconds
### 2025-05-01
#### PASS 23 seconds
#### PASS 28 seconds
#### PASS 24 seconds
#### PASS 25 seconds
#### PASS 12 seconds
#### PASS 26 seconds
#### PASS 40 seconds
### 2025-05-02
#### PASS 25 seconds
### 2025-05-03
#### PASS 23 seconds
### 2025-05-04
#### PASS 23 seconds
### 2025-05-05
#### PASS 28 seconds
### 2025-05-06
#### PASS 23 seconds
### 2025-05-07
#### PASS 17 seconds
### 2025-05-08
#### PASS 25 seconds
### 2025-05-09
#### PASS 26 seconds
### 2025-05-10
#### PASS 22 seconds
### 2025-05-11
#### FAIL 3 seconds
```
2025-05-11T00:29:54.1788730Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-05-11T00:29:54.1796291Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-05-11T00:29:54.1824750Z   
2025-05-11T00:29:54.1908331Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-05-11T00:29:54.1909461Z     resource_maintenance_window_migration_test.go:23: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:54.1910274Z         
2025-05-11T00:29:54.1910935Z         Error: error creating project: test-acc-tf-p-5406490208522326081
2025-05-11T00:29:54.1911648Z         
2025-05-11T00:29:54.1912146Z           with mongodbatlas_project.test,
2025-05-11T00:29:54.1913214Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:54.1914215Z           14: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:54.1914743Z         
2025-05-11T00:29:54.1915588Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:54.1916313Z         type
2025-05-11T00:29:54.1916794Z --- FAIL: TestMigConfigMaintenanceWindow_basic (3.13s)
```
### 2025-05-12
#### PASS 23 seconds
### 2025-05-13
#### PASS 27 seconds
#### PASS 25 seconds
### 2025-05-14
#### PASS 24 seconds
### 2025-05-15
#### PASS 26 seconds
### 2025-05-16
#### PASS 27 seconds
### 2025-05-17
#### PASS 17 seconds
### 2025-05-18
#### PASS 25 seconds
### 2025-05-19
#### PASS 22 seconds
### 2025-05-20
#### PASS 22 seconds
### 2025-05-21
#### PASS 23 seconds
### 2025-05-22
#### PASS 22 seconds
### 2025-05-23
#### PASS 24 seconds
### 2025-05-24
#### PASS 25 seconds
### 2025-05-25
#### PASS 25 seconds
### 2025-05-26
#### PASS 26 seconds
### 2025-05-27
#### PASS 26 seconds
### 2025-05-28
#### PASS 27 seconds
#### PASS 26 seconds
#### PASS 24 seconds
### 2025-05-29
#### PASS 25 seconds
### 2025-05-30
#### PASS 26 seconds
### 2025-05-31
#### PASS 24 seconds
### 2025-06-01
#### PASS 15 seconds
#### PASS 25 seconds
#### PASS 15 seconds
#### PASS 25 seconds
#### PASS 27 seconds
#### PASS 15 seconds
### 2025-06-02
#### PASS 20 seconds
#### PASS 14 seconds
#### PASS 50 seconds
### 2025-06-03
#### PASS 27 seconds
### 2025-06-04
#### PASS 20 seconds
### 2025-06-05
#### FAIL 10 seconds
```
2025-06-05T00:30:45.1309614Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-06-05T00:30:45.1314392Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-06-05T00:30:45.1325125Z   
2025-06-05T00:30:45.1388960Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-06-05T00:30:45.1389577Z     resource_maintenance_window_migration_test.go:23: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:30:45.1390042Z         
2025-06-05T00:30:45.1390463Z         Error: error creating project: test-acc-tf-p-8113928940001517389
2025-06-05T00:30:45.1390817Z         
2025-06-05T00:30:45.1391129Z           with mongodbatlas_project.test,
2025-06-05T00:30:45.1391729Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-05T00:30:45.1392287Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:30:45.1392586Z         
2025-06-05T00:30:45.1393054Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:30:45.1393683Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:30:45.1394472Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:30:45.1394908Z --- FAIL: TestMigConfigMaintenanceWindow_basic (10.84s)
```
### 2025-06-06
#### PASS 22 seconds
### 2025-06-07
#### PASS 27 seconds
### 2025-06-08
#### PASS 17 seconds
### 2025-06-09
#### PASS 23 seconds
### 2025-06-10
#### PASS 26 seconds
### 2025-06-11
#### PASS 25 seconds
#### PASS 13 seconds
### 2025-06-12
#### PASS 25 seconds
### 2025-06-13
#### PASS 25 seconds
### 2025-06-14
#### PASS 24 seconds
### 2025-06-15
#### PASS 22 seconds
### 2025-06-16
#### PASS 26 seconds
### 2025-06-17
#### PASS 27 seconds
### 2025-06-18
#### PASS 25 seconds
#### PASS 25 seconds
### 2025-06-19
#### PASS 13 seconds
### 2025-06-20
#### PASS 27 seconds
### 2025-06-21
#### PASS 14 seconds
### 2025-06-22
#### PASS 38 seconds
### 2025-06-23
#### PASS 26 seconds
### 2025-06-24
#### PASS 21 seconds
### 2025-06-25
#### PASS 19 seconds
### 2025-06-26
#### PASS 24 seconds
### 2025-06-27
#### PASS 27 seconds
### 2025-06-28
#### PASS 16 seconds
### 2025-06-29
#### FAIL a minute
```
2025-06-29T00:34:19.1606955Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-06-29T00:34:19.1611517Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-06-29T00:34:19.1624111Z   
2025-06-29T00:34:19.1698359Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-06-29T00:34:19.1699019Z     resource_maintenance_window_migration_test.go:23: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:34:19.1699519Z         
2025-06-29T00:34:19.1699892Z         Error: error when getting project properties after create
2025-06-29T00:34:19.1700213Z         
2025-06-29T00:34:19.1700500Z           with mongodbatlas_project.test,
2025-06-29T00:34:19.1701176Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-29T00:34:19.1701707Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:34:19.1701987Z         
2025-06-29T00:34:19.1702530Z         error getting project (686089c549709c3a5a3ca05a): error getting project's
2025-06-29T00:34:19.1702973Z         limits (686089c549709c3a5a3ca05a):
2025-06-29T00:34:19.1703526Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089c549709c3a5a3ca05a/limits
2025-06-29T00:34:19.1704173Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:34:19.1704730Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:34:19.1705109Z         BadRequestDetail: 
2025-06-29T00:34:19.1705422Z --- FAIL: TestMigConfigMaintenanceWindow_basic (62.98s)
```
### 2025-06-30
#### PASS 25 seconds
### 2025-07-01
#### PASS 22 seconds
#### PASS 25 seconds
#### PASS 28 seconds
#### PASS 25 seconds
#### PASS 28 seconds
#### PASS 16 seconds
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
### 2025-07-09
#### PASS 28 seconds