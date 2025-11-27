# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_autoDeferActivated Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:30](#error-2025-10-30t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b13ae2dc7470847c1f0b | dev | flaky_500 | 9.03s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 8 seconds
- 2025-10-30

### Error 2025-10-30T00:30:58+00:00
```
2025-10-30T00:30:58.3639700Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-10-30T00:30:58.3640892Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-10-30T00:30:58.3652252Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-10-30T00:30:58.3653055Z     resource_maintenance_window_test.go:81: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:30:58.3653568Z         
2025-10-30T00:30:58.3653874Z         Error: error when destroying resource
2025-10-30T00:30:58.3654153Z         
2025-10-30T00:30:58.3654493Z         error deleting project (6902b13ae2dc7470847c1f0b):
2025-10-30T00:30:58.3655102Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b13ae2dc7470847c1f0b
2025-10-30T00:30:58.3655878Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:30:58.3656493Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:30:58.3656904Z         BadRequestDetail: 
2025-10-30T00:30:58.3657270Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (9.30s)
```

- 2025-10-31 PASS 7 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 7 seconds
- 2025-11-04 PASS 8 seconds
- 2025-11-05
  - PASS 14 seconds
  - PASS 11 seconds
- 2025-11-06 PASS 6 seconds
- 2025-11-07 PASS 9 seconds
- 2025-11-08 PASS 7 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 10 seconds
- 2025-11-11 PASS 6 seconds
- 2025-11-12 PASS 8 seconds
- 2025-11-13 PASS 8 seconds
- 2025-11-14 PASS 7 seconds
- 2025-11-15 PASS 8 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 8 seconds
- 2025-11-18 PASS 6 seconds
- 2025-11-19 PASS 8 seconds
- 2025-11-20 PASS 9 seconds
- 2025-11-21 PASS 11 seconds
- 2025-11-22 PASS 8 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 7 seconds
- 2025-11-25 PASS 6 seconds
- 2025-11-26 PASS 8 seconds
- 2025-11-27 PASS 6 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 12 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 8 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 10 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 6 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 9 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
