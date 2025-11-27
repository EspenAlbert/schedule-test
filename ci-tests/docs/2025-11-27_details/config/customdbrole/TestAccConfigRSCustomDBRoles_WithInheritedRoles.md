# config/customdbrole/TestAccConfigRSCustomDBRoles_WithInheritedRoles Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:30](#error-2025-10-30t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b119abf4374f3298ff74 | dev | flaky_500 | 46.02s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 39 seconds
- 2025-10-30

### Error 2025-10-30T00:30:58+00:00
```
2025-10-30T00:30:58.3530735Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-10-30T00:30:58.3533901Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-10-30T00:30:58.3577210Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-10-30T00:30:58.3577839Z     resource_test.go:214: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:30:58.3578421Z         
2025-10-30T00:30:58.3578720Z         Error: error when destroying resource
2025-10-30T00:30:58.3579003Z         
2025-10-30T00:30:58.3579343Z         error deleting project (6902b119abf4374f3298ff74):
2025-10-30T00:30:58.3579910Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b119abf4374f3298ff74
2025-10-30T00:30:58.3580538Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:30:58.3581173Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:30:58.3581583Z         BadRequestDetail: 
2025-10-30T00:30:58.3581937Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (46.18s)
```

- 2025-10-31 PASS 40 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 37 seconds
- 2025-11-04 PASS 43 seconds
- 2025-11-05
  - PASS 48 seconds
  - PASS 42 seconds
- 2025-11-06 PASS 42 seconds
- 2025-11-07 PASS 39 seconds
- 2025-11-08 PASS 40 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 39 seconds
- 2025-11-11 PASS 43 seconds
- 2025-11-12 PASS 38 seconds
- 2025-11-13 PASS 45 seconds
- 2025-11-14 PASS 39 seconds
- 2025-11-15 PASS 44 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 41 seconds
- 2025-11-18 PASS 42 seconds
- 2025-11-19 PASS 38 seconds
- 2025-11-20 PASS 45 seconds
- 2025-11-21 PASS 47 seconds
- 2025-11-22 PASS 41 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 37 seconds
- 2025-11-25 PASS 41 seconds
- 2025-11-26 PASS 40 seconds
- 2025-11-27 PASS 43 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 44 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 41 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 45 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 37 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 44 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
