# config/atlasuser/TestAccConfigDSAtlasUsers_ByProjectID Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11cabf4374f329915c3 | dev | flaky_500 | 8.03s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 6 seconds
- 2025-10-09 PASS 7 seconds
- 2025-10-10 PASS 5 seconds
- 2025-10-11 PASS 6 seconds
- 2025-10-12 PASS 5 seconds
- 2025-10-13 PASS 11 seconds
- 2025-10-14 PASS 7 seconds
- 2025-10-15 PASS 7 seconds
- 2025-10-16 PASS 8 seconds
- 2025-10-17 PASS 6 seconds
- 2025-10-18 PASS 9 seconds
- 2025-10-19 PASS 37 seconds
- 2025-10-20
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-10-21 PASS 7 seconds
- 2025-10-22
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-10-23 PASS 8 seconds
- 2025-10-24 PASS 8 seconds
- 2025-10-25 PASS 6 seconds
- 2025-10-26 PASS 8 seconds
- 2025-10-27 PASS 7 seconds
- 2025-10-28 PASS 6 seconds
- 2025-10-29 PASS 6 seconds
- 2025-10-30

### Error 2025-10-30T00:28:38+00:00
```
2025-10-30T00:28:38.7438752Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2025-10-30T00:28:38.7492450Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2025-10-30T00:28:38.7512258Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2025-10-30T00:28:38.7512966Z     data_source_atlas_users_test.go:62: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:28:38.7513461Z         
2025-10-30T00:28:38.7513774Z         Error: error when destroying resource
2025-10-30T00:28:38.7514059Z         
2025-10-30T00:28:38.7514409Z         error deleting project (6902b11cabf4374f329915c3):
2025-10-30T00:28:38.7515001Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11cabf4374f329915c3
2025-10-30T00:28:38.7515630Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:28:38.7516361Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:28:38.7516769Z         BadRequestDetail: 
2025-10-30T00:28:38.7517087Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (8.34s)
```

- 2025-10-31 PASS 7 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 8 seconds
- 2025-11-03 PASS 5 seconds
- 2025-11-04 PASS 6 seconds
- 2025-11-05
  - PASS 9 seconds
  - PASS 7 seconds
- 2025-11-06 PASS 6 seconds