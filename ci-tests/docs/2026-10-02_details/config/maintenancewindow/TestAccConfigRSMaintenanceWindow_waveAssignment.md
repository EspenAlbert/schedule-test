# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_waveAssignment Test Details
# Found 23 TestRuns in dev, qa from 2026-09-16 to 2026-10-02 from master branch: 1 unique tests, PASS(x 22) FAIL
Success rate: 95.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-29 10:46](#error-2026-09-29t1046430000) | USER_UNAUTHORIZED /api/atlas/v2/groups/6abb969a5195ae677923fdbe/maintenanceWindow | dev | flaky_500 | 23.00s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 25 seconds
- 2026-09-17 PASS 19 seconds
- 2026-09-18 PASS 37 seconds
- 2026-09-19 PASS 29 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 41 seconds
- 2026-09-22 PASS 22 seconds
- 2026-09-23 PASS 25 seconds
- 2026-09-24 PASS 22 seconds
- 2026-09-25 PASS 32 seconds
- 2026-09-26 PASS 25 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 28 seconds
- 2026-09-29
  - PASS 25 seconds
  - FAIL 23 seconds

### Error 2026-09-29T10:46:43+00:00
```
2026-09-29T10:46:43.5001798Z === RUN   TestAccConfigRSMaintenanceWindow_waveAssignment
2026-09-29T10:46:43.5005988Z === CONT  TestAccConfigRSMaintenanceWindow_waveAssignment
2026-09-29T10:46:43.5058636Z === NAME  TestAccConfigRSMaintenanceWindow_waveAssignment
2026-09-29T10:46:43.5059319Z     resource_test.go:204: Step 6/8 error: Error running refresh plan: exit status 1
2026-09-29T10:46:43.5059888Z         
2026-09-29T10:46:43.5062246Z         Error: error reading the MongoDB Atlas Maintenance Window (6abb969a5195ae677923fdbe): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abb969a5195ae677923fdbe/maintenanceWindow GET: HTTP 401 Unauthorized (Error code: "USER_UNAUTHORIZED") Detail: Current user is not authorized to perform this action. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-09-29T10:46:43.5063840Z         
2026-09-29T10:46:43.5064424Z           with data.mongodbatlas_maintenance_window.test,
2026-09-29T10:46:43.5065163Z           on terraform_plugin_test.tf line 20, in data "mongodbatlas_maintenance_window" "test":
2026-09-29T10:46:43.5066020Z           20: 		data "mongodbatlas_maintenance_window" "test" {
2026-09-29T10:46:43.5066535Z         
2026-09-29T10:46:43.5067065Z --- FAIL: TestAccConfigRSMaintenanceWindow_waveAssignment (23.00s)
```

  - PASS 21 seconds
- 2026-09-30 PASS 34 seconds
- 2026-10-01 PASS 23 seconds
- 2026-10-02 PASS 39 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 25 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 24 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 36 seconds
- 2026-09-28: MISSING
- 2026-09-29
  - PASS 26 seconds
  - PASS 40 seconds
  - PASS 34 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
