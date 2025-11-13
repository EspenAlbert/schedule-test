# config_sa_mig/teamprojectassignment/TestMigTeamProjectAssignment_migrationJourney Test Details
# Found 6 TestRuns in dev from 2025-10-30 to 2025-11-13 from master branch: 1 unique tests, PASS(x 5) FAIL
Success rate: 83.33%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:29](#error-2025-10-30t0029260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b153abf4374f3299c9fb | dev | flaky_500 | 14.04s

## Timeline
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

### Error 2025-10-30T00:29:26+00:00
```
2025-10-30T00:29:26.9303720Z === RUN   TestMigTeamProjectAssignment_migrationJourney
2025-10-30T00:29:26.9325210Z   
2025-10-30T00:29:26.9326239Z     resource_migration_test.go:32: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:29:26.9327162Z         
2025-10-30T00:29:26.9327723Z         Error: error when destroying resource
2025-10-30T00:29:26.9328256Z         
2025-10-30T00:29:26.9328891Z         error deleting project (6902b153abf4374f3299c9fb):
2025-10-30T00:29:26.9329979Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b153abf4374f3299c9fb
2025-10-30T00:29:26.9331176Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:29:26.9335443Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:29:26.9336235Z         BadRequestDetail: 
2025-10-30T00:29:26.9336872Z --- FAIL: TestMigTeamProjectAssignment_migrationJourney (14.39s)
```

- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03: MISSING
- 2025-11-04 PASS 14 seconds
- 2025-11-05: MISSING
- 2025-11-06 PASS 16 seconds
- 2025-11-07: MISSING
- 2025-11-08 PASS 17 seconds
- 2025-11-09: MISSING
- 2025-11-10: MISSING
- 2025-11-11 PASS 18 seconds
- 2025-11-12: MISSING
- 2025-11-13 PASS 13 seconds