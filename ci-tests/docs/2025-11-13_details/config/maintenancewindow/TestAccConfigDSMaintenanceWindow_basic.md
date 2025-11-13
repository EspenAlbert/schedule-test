# config/maintenancewindow/TestAccConfigDSMaintenanceWindow_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:30](#error-2025-10-30t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b13babf4374f3299a9b9 | dev | flaky_500 | 9.09s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 12 seconds
- 2025-10-16 PASS 13 seconds
- 2025-10-17 PASS 12 seconds
- 2025-10-18 PASS 8 seconds
- 2025-10-19 PASS 10 seconds
- 2025-10-20
  - PASS 11 seconds
  - PASS 5 seconds
- 2025-10-21 PASS 7 seconds
- 2025-10-22
  - PASS 13 seconds
  - PASS 12 seconds
- 2025-10-23 PASS 8 seconds
- 2025-10-24 PASS 9 seconds
- 2025-10-25 PASS 6 seconds
- 2025-10-26 PASS 12 seconds
- 2025-10-27 PASS 12 seconds
- 2025-10-28 PASS 7 seconds
- 2025-10-29 PASS 8 seconds
- 2025-10-30

### Error 2025-10-30T00:30:58+00:00
```
2025-10-30T00:30:58.3638273Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-10-30T00:30:58.3640515Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-10-30T00:30:58.3668042Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2025-10-30T00:30:58.3668743Z     data_source_maintenance_window_test.go:24: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:30:58.3669258Z         
2025-10-30T00:30:58.3669556Z         Error: error when destroying resource
2025-10-30T00:30:58.3669845Z         
2025-10-30T00:30:58.3670186Z         error deleting project (6902b13babf4374f3299a9b9):
2025-10-30T00:30:58.3670769Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b13babf4374f3299a9b9
2025-10-30T00:30:58.3671398Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:30:58.3671988Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:30:58.3672401Z         BadRequestDetail: 
2025-10-30T00:30:58.3672716Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (9.87s)
```

- 2025-10-31 PASS 10 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 13 seconds
- 2025-11-03 PASS 7 seconds
- 2025-11-04 PASS 8 seconds
- 2025-11-05
  - PASS 14 seconds
  - PASS 11 seconds
- 2025-11-06 PASS 8 seconds
- 2025-11-07 PASS 7 seconds
- 2025-11-08 PASS 6 seconds
- 2025-11-09 PASS 8 seconds
- 2025-11-10 PASS 11 seconds
- 2025-11-11 PASS 7 seconds
- 2025-11-12 PASS 7 seconds
- 2025-11-13
  - PASS 8 seconds
  - PASS 11 seconds