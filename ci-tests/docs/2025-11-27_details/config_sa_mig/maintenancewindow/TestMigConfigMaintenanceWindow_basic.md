# config_sa_mig/maintenancewindow/TestMigConfigMaintenanceWindow_basic Test Details
# Found 12 TestRuns in dev from 2025-10-30 to 2025-11-27 from master branch: 1 unique tests, PASS(x 11) FAIL
Success rate: 91.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b133abf4374f32999d14 | dev | flaky_500 | 16.05s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30

### Error 2025-10-30T00:28:46+00:00
```
2025-10-30T00:28:46.1731228Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-10-30T00:28:46.1737623Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-10-30T00:28:46.1753016Z   
2025-10-30T00:28:46.1756419Z     resource_maintenance_window_migration_test.go:22: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:28:46.1757505Z         
2025-10-30T00:28:46.1758064Z         Error: error when destroying resource
2025-10-30T00:28:46.1758585Z         
2025-10-30T00:28:46.1759240Z         error deleting project (6902b133abf4374f32999d14):
2025-10-30T00:28:46.1760256Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b133abf4374f32999d14
2025-10-30T00:28:46.1761355Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:28:46.1762693Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:28:46.1763416Z         BadRequestDetail: 
2025-10-30T00:28:46.1764176Z --- FAIL: TestMigConfigMaintenanceWindow_basic (16.49s)
```

- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03: MISSING
- 2025-11-04 PASS 18 seconds
- 2025-11-05: MISSING
- 2025-11-06 PASS 18 seconds
- 2025-11-07: MISSING
- 2025-11-08 PASS 17 seconds
- 2025-11-09: MISSING
- 2025-11-10: MISSING
- 2025-11-11 PASS 18 seconds
- 2025-11-12: MISSING
- 2025-11-13 PASS 16 seconds
- 2025-11-14: MISSING
- 2025-11-15 PASS 15 seconds
- 2025-11-16: MISSING
- 2025-11-17: MISSING
- 2025-11-18 PASS 15 seconds
- 2025-11-19: MISSING
- 2025-11-20 PASS 14 seconds
- 2025-11-21: MISSING
- 2025-11-22 PASS 16 seconds
- 2025-11-23: MISSING
- 2025-11-24: MISSING
- 2025-11-25 PASS 15 seconds
- 2025-11-26: MISSING
- 2025-11-27 PASS 16 seconds
