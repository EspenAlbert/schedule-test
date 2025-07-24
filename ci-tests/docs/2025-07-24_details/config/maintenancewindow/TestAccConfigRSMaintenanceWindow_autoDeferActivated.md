# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_autoDeferActivated Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 00:34](#error-2025-06-29t0034190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089c349709c3a5a3c9f19/limits | qa | flaky_500 | 34.04s
[2025-07-10 13:09](#error-2025-07-10t1309010000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb45006d8d55bb9e764d/limits | qa | flaky_500 | 34.08s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 10 seconds
- 2025-06-26 PASS 9 seconds
- 2025-06-27 PASS 11 seconds
- 2025-06-28 PASS 7 seconds
- 2025-06-29

### Error 2025-06-29T00:34:19+00:00
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

- 2025-06-30 PASS 10 seconds
- 2025-07-01
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 8 seconds
- 2025-07-02 PASS 7 seconds
- 2025-07-03 PASS 14 seconds
- 2025-07-04 PASS 10 seconds
- 2025-07-05 PASS 11 seconds
- 2025-07-06 PASS 9 seconds
- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 13 seconds
- 2025-07-09 PASS 12 seconds
- 2025-07-10
  - PASS 10 seconds
  - FAIL 34 seconds

### Error 2025-07-10T13:09:01+00:00
```
2025-07-10T13:09:01.7508806Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-07-10T13:09:01.7512085Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-07-10T13:09:01.7608416Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-07-10T13:09:01.7609509Z     resource_maintenance_window_test.go:102: Step 1/1 error: Error running apply: exit status 1
2025-07-10T13:09:01.7610457Z         
2025-07-10T13:09:01.7611153Z         Error: error when getting project properties after create
2025-07-10T13:09:01.7611738Z         
2025-07-10T13:09:01.7612246Z           with mongodbatlas_project.test,
2025-07-10T13:09:01.7613266Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:09:01.7614183Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:09:01.7614661Z         
2025-07-10T13:09:01.7615413Z         error getting project (686fbb45006d8d55bb9e764d): error getting project's
2025-07-10T13:09:01.7616192Z         limits (686fbb45006d8d55bb9e764d):
2025-07-10T13:09:01.7617351Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb45006d8d55bb9e764d/limits
2025-07-10T13:09:01.7618272Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:09:01.7619023Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:09:01.7619703Z         BadRequestDetail: 
2025-07-10T13:09:01.7620985Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (34.79s)
```

- 2025-07-11 PASS 11 seconds
- 2025-07-12 PASS 9 seconds
- 2025-07-13 PASS 20 seconds
- 2025-07-14 PASS 12 seconds
- 2025-07-15 PASS 9 seconds
- 2025-07-16 PASS 11 seconds
- 2025-07-17 PASS 6 seconds
- 2025-07-18 PASS 9 seconds
- 2025-07-19 PASS 9 seconds
- 2025-07-20 PASS 19 seconds
- 2025-07-21 PASS 12 seconds
- 2025-07-22 PASS 10 seconds
- 2025-07-23
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 51 seconds
- 2025-07-24 PASS 9 seconds