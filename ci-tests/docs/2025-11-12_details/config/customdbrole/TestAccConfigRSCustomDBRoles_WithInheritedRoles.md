# config/customdbrole/TestAccConfigRSCustomDBRoles_WithInheritedRoles Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:30](#error-2025-10-30t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b119abf4374f3298ff74 | dev | flaky_500 | 46.02s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 48 seconds
- 2025-10-05 PASS 38 seconds
- 2025-10-06 PASS 44 seconds
- 2025-10-07 PASS 46 seconds
- 2025-10-08 PASS 41 seconds
- 2025-10-09 PASS 47 seconds
- 2025-10-10 PASS 38 seconds
- 2025-10-11 PASS 45 seconds
- 2025-10-12 PASS 38 seconds
- 2025-10-13 PASS 52 seconds
- 2025-10-14 PASS 48 seconds
- 2025-10-15 PASS 51 seconds
- 2025-10-16 PASS 49 seconds
- 2025-10-17 PASS 44 seconds
- 2025-10-18 PASS 46 seconds
- 2025-10-19 PASS a minute
- 2025-10-20
  - PASS 40 seconds
  - PASS 41 seconds
- 2025-10-21 PASS 39 seconds
- 2025-10-22
  - PASS 50 seconds
  - PASS 43 seconds
- 2025-10-23 PASS 45 seconds
- 2025-10-24 PASS 45 seconds
- 2025-10-25 PASS 41 seconds
- 2025-10-26 PASS 46 seconds
- 2025-10-27 PASS 46 seconds
- 2025-10-28 PASS 44 seconds
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
- 2025-11-02 PASS 44 seconds
- 2025-11-03 PASS 37 seconds
- 2025-11-04 PASS 43 seconds
- 2025-11-05
  - PASS 48 seconds
  - PASS 42 seconds
- 2025-11-06 PASS 42 seconds
- 2025-11-07 PASS 39 seconds
- 2025-11-08 PASS 40 seconds
- 2025-11-09 PASS 41 seconds
- 2025-11-10 PASS 39 seconds
- 2025-11-11 PASS 43 seconds
- 2025-11-12 PASS 38 seconds