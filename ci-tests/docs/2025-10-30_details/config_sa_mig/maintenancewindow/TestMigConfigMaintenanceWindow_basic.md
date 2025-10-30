# config_sa_mig/maintenancewindow/TestMigConfigMaintenanceWindow_basic Test Details
# Found 1 TestRuns in dev on 2025-10-30 from master branch: 1 unique tests, FAIL
Success rate: 0.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b133abf4374f32999d14 | dev | flaky_500 | 16.05s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01: MISSING
- 2025-10-02: MISSING
- 2025-10-03: MISSING
- 2025-10-04: MISSING
- 2025-10-05: MISSING
- 2025-10-06: MISSING
- 2025-10-07: MISSING
- 2025-10-08: MISSING
- 2025-10-09: MISSING
- 2025-10-10: MISSING
- 2025-10-11: MISSING
- 2025-10-12: MISSING
- 2025-10-13: MISSING
- 2025-10-14: MISSING
- 2025-10-15: MISSING
- 2025-10-16: MISSING
- 2025-10-17: MISSING
- 2025-10-18: MISSING
- 2025-10-19: MISSING
- 2025-10-20: MISSING
- 2025-10-21: MISSING
- 2025-10-22: MISSING
- 2025-10-23: MISSING
- 2025-10-24: MISSING
- 2025-10-25: MISSING
- 2025-10-26: MISSING
- 2025-10-27: MISSING
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
