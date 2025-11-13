# project/project/TestAccProject_updatedToEmptyRoles Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11ee2dc7470847bab55 | dev | flaky_500 | 11.05s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 10 seconds
- 2025-10-16 PASS 17 seconds
- 2025-10-17 PASS 15 seconds
- 2025-10-18 PASS 13 seconds
- 2025-10-19 PASS 16 seconds
- 2025-10-20
  - PASS 10 seconds
  - PASS 12 seconds
- 2025-10-21 PASS 13 seconds
- 2025-10-22
  - PASS 18 seconds
  - PASS 14 seconds
- 2025-10-23 PASS 13 seconds
- 2025-10-24 PASS 16 seconds
- 2025-10-25 PASS 13 seconds
- 2025-10-26 PASS 12 seconds
- 2025-10-27 PASS 15 seconds
- 2025-10-28 PASS 12 seconds
- 2025-10-29 PASS 12 seconds
- 2025-10-30

### Error 2025-10-30T00:31:58+00:00
```
2025-10-30T00:31:58.1669753Z === RUN   TestAccProject_updatedToEmptyRoles
2025-10-30T00:31:58.1679855Z === CONT  TestAccProject_updatedToEmptyRoles
2025-10-30T00:31:58.1718786Z === NAME  TestAccProject_updatedToEmptyRoles
2025-10-30T00:31:58.1719457Z     resource_project_test.go:812: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:31:58.1719947Z         
2025-10-30T00:31:58.1720261Z         Error: error when destroying resource
2025-10-30T00:31:58.1720560Z         
2025-10-30T00:31:58.1720906Z         error deleting project (6902b11ee2dc7470847bab55):
2025-10-30T00:31:58.1721507Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11ee2dc7470847bab55
2025-10-30T00:31:58.1722145Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:31:58.1722756Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:31:58.1723173Z         BadRequestDetail: 
2025-10-30T00:31:58.1723482Z --- FAIL: TestAccProject_updatedToEmptyRoles (11.51s)
```

- 2025-10-31 PASS 17 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 8 seconds
- 2025-11-03 PASS 11 seconds
- 2025-11-04 PASS 13 seconds
- 2025-11-05
  - PASS 12 seconds
  - PASS 11 seconds
- 2025-11-06 PASS 11 seconds
- 2025-11-07 PASS 11 seconds
- 2025-11-08 PASS 10 seconds
- 2025-11-09 PASS 13 seconds
- 2025-11-10 PASS 12 seconds
- 2025-11-11 PASS 13 seconds
- 2025-11-12 PASS 15 seconds
- 2025-11-13
  - PASS 10 seconds
  - PASS 10 seconds