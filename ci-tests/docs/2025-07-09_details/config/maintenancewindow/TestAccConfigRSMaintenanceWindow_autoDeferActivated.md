# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_autoDeferActivated Test Details
# Found 115 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 112) FAIL(x 3)
Success rate: 97.39%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 1.02s
2025-06-05 00:30 | dev | 3.05s
2025-06-29 00:34 | qa | 34.04s

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
#### PASS 8 seconds
### 2025-04-13
#### PASS 10 seconds
### 2025-04-14
#### PASS 7 seconds
### 2025-04-15
#### PASS 8 seconds
### 2025-04-16
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-04-17
#### PASS 11 seconds
### 2025-04-18
#### PASS 7 seconds
### 2025-04-19
#### PASS 11 seconds
### 2025-04-20
#### PASS 6 seconds
### 2025-04-21
#### PASS 14 seconds
### 2025-04-22
#### PASS 7 seconds
### 2025-04-23
#### PASS 5 seconds
### 2025-04-24
#### PASS 12 seconds
### 2025-04-25
#### PASS 9 seconds
### 2025-04-26
#### PASS 12 seconds
### 2025-04-27
#### PASS 13 seconds
### 2025-04-28
#### PASS 11 seconds
### 2025-04-29
#### PASS 10 seconds
### 2025-04-30
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-05-01
#### PASS 10 seconds
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 6 seconds
#### PASS 12 seconds
#### PASS 11 seconds
### 2025-05-02
#### PASS 11 seconds
### 2025-05-03
#### PASS 9 seconds
### 2025-05-04
#### PASS 9 seconds
### 2025-05-05
#### PASS 12 seconds
### 2025-05-06
#### PASS 8 seconds
### 2025-05-07
#### PASS 10 seconds
### 2025-05-08
#### PASS 8 seconds
### 2025-05-09
#### PASS 14 seconds
### 2025-05-10
#### PASS 8 seconds
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:29:54.1792454Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-05-11T00:29:54.1795019Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-05-11T00:29:54.1843864Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-05-11T00:29:54.1844963Z     resource_maintenance_window_test.go:100: Step 1/1 error: Error running apply: exit status 1
2025-05-11T00:29:54.1845717Z         
2025-05-11T00:29:54.1846433Z         Error: error creating project: test-acc-tf-p-1908680153992807681
2025-05-11T00:29:54.1847034Z         
2025-05-11T00:29:54.1847546Z           with mongodbatlas_project.test,
2025-05-11T00:29:54.1848592Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:54.1849547Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:54.1850052Z         
2025-05-11T00:29:54.1850875Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:54.1851708Z         type
2025-05-11T00:29:54.1861733Z   
2025-05-11T00:29:54.1895045Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (1.22s)
```
### 2025-05-12
#### PASS 8 seconds
### 2025-05-13
#### PASS 11 seconds
#### PASS 9 seconds
### 2025-05-14
#### PASS 8 seconds
### 2025-05-15
#### PASS 11 seconds
### 2025-05-16
#### PASS 11 seconds
### 2025-05-17
#### PASS 10 seconds
### 2025-05-18
#### PASS 9 seconds
### 2025-05-19
#### PASS 10 seconds
### 2025-05-20
#### PASS 8 seconds
### 2025-05-21
#### PASS 9 seconds
### 2025-05-22
#### PASS 9 seconds
### 2025-05-23
#### PASS 10 seconds
### 2025-05-24
#### PASS 12 seconds
### 2025-05-25
#### PASS 11 seconds
### 2025-05-26
#### PASS 10 seconds
### 2025-05-27
#### PASS 10 seconds
### 2025-05-28
#### PASS 11 seconds
#### PASS 11 seconds
#### PASS 9 seconds
### 2025-05-29
#### PASS 11 seconds
### 2025-05-30
#### PASS 11 seconds
### 2025-05-31
#### PASS 11 seconds
### 2025-06-01
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 8 seconds
#### PASS 10 seconds
#### PASS 9 seconds
### 2025-06-02
#### PASS 9 seconds
#### PASS 6 seconds
#### PASS 16 seconds
### 2025-06-03
#### PASS 13 seconds
### 2025-06-04
#### PASS 11 seconds
### 2025-06-05
#### FAIL 3 seconds
```
2025-06-05T00:30:45.1311908Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-06-05T00:30:45.1313908Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-06-05T00:30:45.1359030Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-06-05T00:30:45.1359654Z     resource_maintenance_window_test.go:100: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:30:45.1360090Z         
2025-06-05T00:30:45.1360511Z         Error: error creating project: test-acc-tf-p-4784939011281653007
2025-06-05T00:30:45.1360868Z         
2025-06-05T00:30:45.1361181Z           with mongodbatlas_project.test,
2025-06-05T00:30:45.1361788Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:30:45.1362342Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:30:45.1362645Z         
2025-06-05T00:30:45.1363116Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:30:45.1363749Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:30:45.1364417Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:30:45.1364906Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (3.47s)
```
### 2025-06-06
#### PASS 10 seconds
### 2025-06-07
#### PASS 11 seconds
### 2025-06-08
#### PASS 8 seconds
### 2025-06-09
#### PASS 9 seconds
### 2025-06-10
#### PASS 12 seconds
### 2025-06-11
#### PASS 12 seconds
#### PASS 7 seconds
### 2025-06-12
#### PASS 10 seconds
### 2025-06-13
#### PASS 10 seconds
### 2025-06-14
#### PASS 11 seconds
### 2025-06-15
#### PASS 11 seconds
### 2025-06-16
#### PASS 15 seconds
### 2025-06-17
#### PASS 13 seconds
### 2025-06-18
#### PASS 11 seconds
#### PASS 10 seconds
### 2025-06-19
#### PASS 9 seconds
### 2025-06-20
#### PASS 12 seconds
### 2025-06-21
#### PASS 9 seconds
### 2025-06-22
#### PASS 9 seconds
### 2025-06-23
#### PASS 10 seconds
### 2025-06-24
#### PASS 11 seconds
### 2025-06-25
#### PASS 10 seconds
### 2025-06-26
#### PASS 9 seconds
### 2025-06-27
#### PASS 11 seconds
### 2025-06-28
#### PASS 7 seconds
### 2025-06-29
#### FAIL 34 seconds
```
2025-06-29T00:34:19.1609128Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-06-29T00:34:19.1610683Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-06-29T00:34:19.1624391Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-06-29T00:34:19.1624996Z     resource_maintenance_window_test.go:100: Step 1/1 error: Error running apply: exit status 1
2025-06-29T00:34:19.1625417Z         
2025-06-29T00:34:19.1625786Z         Error: error when getting project properties after create
2025-06-29T00:34:19.1626111Z         
2025-06-29T00:34:19.1626407Z           with mongodbatlas_project.test,
2025-06-29T00:34:19.1626985Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:34:19.1627524Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:34:19.1627809Z         
2025-06-29T00:34:19.1628250Z         error getting project (686089c349709c3a5a3c9f19): error getting project's
2025-06-29T00:34:19.1628696Z         limits (686089c349709c3a5a3c9f19):
2025-06-29T00:34:19.1629248Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089c349709c3a5a3c9f19/limits
2025-06-29T00:34:19.1629906Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:34:19.1630470Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:34:19.1630852Z         BadRequestDetail: 
2025-06-29T00:34:19.1631315Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (34.41s)
```
### 2025-06-30
#### PASS 10 seconds
### 2025-07-01
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 12 seconds
#### PASS 10 seconds
#### PASS 14 seconds
#### PASS 8 seconds
### 2025-07-02
#### PASS 7 seconds
### 2025-07-03
#### PASS 14 seconds
### 2025-07-04
#### PASS 10 seconds
### 2025-07-05
#### PASS 11 seconds
### 2025-07-06
#### PASS 9 seconds
### 2025-07-07
#### PASS 8 seconds
### 2025-07-08
#### PASS 13 seconds
### 2025-07-09
#### PASS 12 seconds