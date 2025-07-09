# config/maintenancewindow/TestAccConfigDSMaintenanceWindow_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 4)
Success rate: 96.52%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 1.03s
2025-06-05 00:30 | dev | 2.08s
2025-06-29 00:34 | qa | 36.09s
2025-07-06 00:34 | qa | 39.03s

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
#### PASS 8 seconds
### 2025-04-12
#### PASS 7 seconds
### 2025-04-13
#### PASS 12 seconds
### 2025-04-14
#### PASS 6 seconds
### 2025-04-15
#### PASS 10 seconds
### 2025-04-16
#### PASS 7 seconds
#### PASS 6 seconds
### 2025-04-17
#### PASS 11 seconds
### 2025-04-18
#### PASS 7 seconds
### 2025-04-19
#### PASS 12 seconds
### 2025-04-20
#### PASS 7 seconds
### 2025-04-21
#### PASS 14 seconds
### 2025-04-22
#### PASS 9 seconds
### 2025-04-23
#### PASS 6 seconds
### 2025-04-24
#### PASS 14 seconds
### 2025-04-25
#### PASS 9 seconds
### 2025-04-26
#### PASS 12 seconds
### 2025-04-27
#### PASS 13 seconds
### 2025-04-28
#### PASS 13 seconds
### 2025-04-29
#### PASS 10 seconds
### 2025-04-30
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-05-01
#### PASS 9 seconds
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 7 seconds
#### PASS 12 seconds
#### PASS 12 seconds
### 2025-05-02
#### PASS 11 seconds
### 2025-05-03
#### PASS 10 seconds
### 2025-05-04
#### PASS 10 seconds
### 2025-05-05
#### PASS 13 seconds
### 2025-05-06
#### PASS 9 seconds
### 2025-05-07
#### PASS 10 seconds
### 2025-05-08
#### PASS 9 seconds
### 2025-05-09
#### PASS 12 seconds
### 2025-05-10
#### PASS 9 seconds
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:29:54.1787519Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-05-11T00:29:54.1793787Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-05-11T00:29:54.1825153Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2025-05-11T00:29:54.1826182Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-05-11T00:29:54.1826966Z         
2025-05-11T00:29:54.1827671Z         Error: error creating project: test-acc-tf-p-8507959475636604905
2025-05-11T00:29:54.1828263Z         
2025-05-11T00:29:54.1828765Z           with mongodbatlas_project.test,
2025-05-11T00:29:54.1829793Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:54.1830752Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:54.1831261Z         
2025-05-11T00:29:54.1832304Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:54.1833014Z         type
2025-05-11T00:29:54.1843383Z   
2025-05-11T00:29:54.1897681Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (1.30s)
```
### 2025-05-12
#### PASS 10 seconds
### 2025-05-13
#### PASS 11 seconds
#### PASS 10 seconds
### 2025-05-14
#### PASS 8 seconds
### 2025-05-15
#### PASS 10 seconds
### 2025-05-16
#### PASS 11 seconds
### 2025-05-17
#### PASS 10 seconds
### 2025-05-18
#### PASS 12 seconds
### 2025-05-19
#### PASS 10 seconds
### 2025-05-20
#### PASS 9 seconds
### 2025-05-21
#### PASS 8 seconds
### 2025-05-22
#### PASS 10 seconds
### 2025-05-23
#### PASS 10 seconds
### 2025-05-24
#### PASS 11 seconds
### 2025-05-25
#### PASS 12 seconds
### 2025-05-26
#### PASS 11 seconds
### 2025-05-27
#### PASS 11 seconds
### 2025-05-28
#### PASS 12 seconds
#### PASS 11 seconds
#### PASS 10 seconds
### 2025-05-29
#### PASS 11 seconds
### 2025-05-30
#### PASS 12 seconds
### 2025-05-31
#### PASS 10 seconds
### 2025-06-01
#### PASS 8 seconds
#### PASS 10 seconds
#### PASS 8 seconds
#### PASS 10 seconds
#### PASS 11 seconds
#### PASS 9 seconds
### 2025-06-02
#### PASS 10 seconds
#### PASS 8 seconds
#### PASS 15 seconds
### 2025-06-03
#### PASS 12 seconds
### 2025-06-04
#### PASS 11 seconds
### 2025-06-05
#### FAIL 2 seconds
```
2025-06-05T00:30:45.1308897Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-06-05T00:30:45.1312744Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-06-05T00:30:45.1341966Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2025-06-05T00:30:45.1342561Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:30:45.1342997Z         
2025-06-05T00:30:45.1343422Z         Error: error creating project: test-acc-tf-p-689452804728008596
2025-06-05T00:30:45.1343783Z         
2025-06-05T00:30:45.1344099Z           with mongodbatlas_project.test,
2025-06-05T00:30:45.1344799Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:30:45.1345361Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:30:45.1345664Z         
2025-06-05T00:30:45.1346136Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:30:45.1346771Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:30:45.1347353Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:30:45.1347900Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (2.79s)
```
### 2025-06-06
#### PASS 11 seconds
### 2025-06-07
#### PASS 11 seconds
### 2025-06-08
#### PASS 10 seconds
### 2025-06-09
#### PASS 9 seconds
### 2025-06-10
#### PASS 12 seconds
### 2025-06-11
#### PASS 12 seconds
#### PASS 6 seconds
### 2025-06-12
#### PASS 9 seconds
### 2025-06-13
#### PASS 13 seconds
### 2025-06-14
#### PASS 12 seconds
### 2025-06-15
#### PASS 10 seconds
### 2025-06-16
#### PASS 12 seconds
### 2025-06-17
#### PASS 16 seconds
### 2025-06-18
#### PASS 11 seconds
#### PASS 10 seconds
### 2025-06-19
#### PASS 6 seconds
### 2025-06-20
#### PASS 14 seconds
### 2025-06-21
#### PASS 8 seconds
### 2025-06-22
#### PASS 9 seconds
### 2025-06-23
#### PASS 12 seconds
### 2025-06-24
#### PASS 12 seconds
### 2025-06-25
#### PASS 11 seconds
### 2025-06-26
#### PASS 9 seconds
### 2025-06-27
#### PASS 13 seconds
### 2025-06-28
#### PASS 8 seconds
### 2025-06-29
#### FAIL 36 seconds
```
2025-06-29T00:34:19.1606275Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-06-29T00:34:19.1609918Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-06-29T00:34:19.1663942Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2025-06-29T00:34:19.1664499Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-06-29T00:34:19.1664916Z         
2025-06-29T00:34:19.1665292Z         Error: error when getting project properties after create
2025-06-29T00:34:19.1665608Z         
2025-06-29T00:34:19.1665902Z           with mongodbatlas_project.test,
2025-06-29T00:34:19.1666486Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:34:19.1667144Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:34:19.1667426Z         
2025-06-29T00:34:19.1667855Z         error getting project (686089c356291349dce6dca5): error getting project's
2025-06-29T00:34:19.1668304Z         limits (686089c356291349dce6dca5):
2025-06-29T00:34:19.1668854Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089c356291349dce6dca5/limits
2025-06-29T00:34:19.1669501Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:34:19.1670065Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:34:19.1670452Z         BadRequestDetail: 
2025-06-29T00:34:19.1670764Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (36.91s)
```
### 2025-06-30
#### PASS 10 seconds
### 2025-07-01
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 13 seconds
#### PASS 10 seconds
#### PASS 13 seconds
#### PASS 8 seconds
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
### 2025-07-09
#### PASS 14 seconds