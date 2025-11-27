# config/customdbrole/TestAccConfigRSCustomDBRoles_UpdatedInheritRoles Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:30](#error-2025-10-30t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b119abf4374f3298feb5 | dev | flaky_500 | 31.06s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 28 seconds
- 2025-10-30

### Error 2025-10-30T00:30:58+00:00
```
2025-10-30T00:30:58.3532428Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-10-30T00:30:58.3534637Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-10-30T00:30:58.3546204Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-10-30T00:30:58.3546943Z     resource_test.go:560: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:30:58.3547396Z         
2025-10-30T00:30:58.3547699Z         Error: error when destroying resource
2025-10-30T00:30:58.3547984Z         
2025-10-30T00:30:58.3548326Z         error deleting project (6902b119abf4374f3298feb5):
2025-10-30T00:30:58.3548900Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b119abf4374f3298feb5
2025-10-30T00:30:58.3549536Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:30:58.3550134Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:30:58.3550546Z         BadRequestDetail: 
2025-10-30T00:30:58.3550906Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (31.58s)
```

- 2025-10-31 PASS 31 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 27 seconds
- 2025-11-04 PASS 30 seconds
- 2025-11-05
  - PASS 36 seconds
  - PASS 32 seconds
- 2025-11-06 PASS 30 seconds
- 2025-11-07 PASS 28 seconds
- 2025-11-08 PASS 30 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 32 seconds
- 2025-11-11 PASS 30 seconds
- 2025-11-12 PASS 27 seconds
- 2025-11-13 PASS 32 seconds
- 2025-11-14 PASS 30 seconds
- 2025-11-15 PASS 31 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 29 seconds
- 2025-11-18 PASS 29 seconds
- 2025-11-19 PASS 28 seconds
- 2025-11-20 PASS 34 seconds
- 2025-11-21 PASS 35 seconds
- 2025-11-22 PASS 30 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 27 seconds
- 2025-11-25 PASS 29 seconds
- 2025-11-26 PASS 29 seconds
- 2025-11-27 PASS 29 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 33 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 27 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 33 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 26 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 33 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
