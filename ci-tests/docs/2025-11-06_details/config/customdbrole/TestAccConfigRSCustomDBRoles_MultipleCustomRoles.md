# config/customdbrole/TestAccConfigRSCustomDBRoles_MultipleCustomRoles Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:30](#error-2025-10-30t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b119e2dc7470847b6d8c | dev | flaky_500 | 33.07s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 29 seconds
- 2025-10-09 PASS 33 seconds
- 2025-10-10 PASS 28 seconds
- 2025-10-11 PASS 29 seconds
- 2025-10-12 PASS 28 seconds
- 2025-10-13 PASS 35 seconds
- 2025-10-14 PASS 35 seconds
- 2025-10-15 PASS 36 seconds
- 2025-10-16 PASS 35 seconds
- 2025-10-17 PASS 29 seconds
- 2025-10-18 PASS 34 seconds
- 2025-10-19 PASS a minute
- 2025-10-20
  - PASS 32 seconds
  - PASS 29 seconds
- 2025-10-21 PASS 29 seconds
- 2025-10-22
  - PASS 37 seconds
  - PASS 33 seconds
- 2025-10-23 PASS 34 seconds
- 2025-10-24 PASS 33 seconds
- 2025-10-25 PASS 29 seconds
- 2025-10-26 PASS 35 seconds
- 2025-10-27 PASS 31 seconds
- 2025-10-28 PASS 33 seconds
- 2025-10-29 PASS 28 seconds
- 2025-10-30

### Error 2025-10-30T00:30:58+00:00
```
2025-10-30T00:30:58.3531538Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-10-30T00:30:58.3533511Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-10-30T00:30:58.3561753Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-10-30T00:30:58.3562396Z     resource_test.go:405: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:30:58.3562846Z         
2025-10-30T00:30:58.3563145Z         Error: error when destroying resource
2025-10-30T00:30:58.3563427Z         
2025-10-30T00:30:58.3563767Z         error deleting project (6902b119e2dc7470847b6d8c):
2025-10-30T00:30:58.3564339Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b119e2dc7470847b6d8c
2025-10-30T00:30:58.3564964Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:30:58.3565561Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:30:58.3566137Z         BadRequestDetail: 
2025-10-30T00:30:58.3566497Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (33.67s)
```

- 2025-10-31 PASS 30 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 31 seconds
- 2025-11-03 PASS 29 seconds
- 2025-11-04 PASS 32 seconds
- 2025-11-05
  - PASS 37 seconds
  - PASS 33 seconds
- 2025-11-06 PASS 31 seconds