# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDS_s3Bucket Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b120e2dc7470847bc0cf | dev | flaky_500 | 53.04s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 49 seconds
- 2025-10-07 PASS 51 seconds
- 2025-10-08 PASS 56 seconds
- 2025-10-09 PASS 58 seconds
- 2025-10-10 PASS 57 seconds
- 2025-10-11 PASS 54 seconds
- 2025-10-12 PASS 58 seconds
- 2025-10-13 PASS 53 seconds
- 2025-10-14 PASS 55 seconds
- 2025-10-15 PASS 56 seconds
- 2025-10-16 PASS 51 seconds
- 2025-10-17 PASS 56 seconds
- 2025-10-18 PASS 55 seconds
- 2025-10-19 PASS a minute
- 2025-10-20
  - PASS 55 seconds
  - PASS 54 seconds
- 2025-10-21 PASS 50 seconds
- 2025-10-22
  - PASS 52 seconds
  - PASS 56 seconds
- 2025-10-23 PASS 53 seconds
- 2025-10-24 PASS 54 seconds
- 2025-10-25 PASS 52 seconds
- 2025-10-26 PASS 54 seconds
- 2025-10-27 PASS 53 seconds
- 2025-10-28 PASS 54 seconds
- 2025-10-29 PASS 56 seconds
- 2025-10-30

### Error 2025-10-30T00:44:19+00:00
```
2025-10-30T00:44:19.1610004Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-10-30T00:44:19.1617148Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-10-30T00:44:19.1674114Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-10-30T00:44:19.1674844Z     data_source_federated_database_instance_test.go:29: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:44:19.1675375Z         
2025-10-30T00:44:19.1675982Z         Error: error when destroying resource
2025-10-30T00:44:19.1676284Z         
2025-10-30T00:44:19.1676621Z         error deleting project (6902b120e2dc7470847bc0cf):
2025-10-30T00:44:19.1677188Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b120e2dc7470847bc0cf
2025-10-30T00:44:19.1677804Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:44:19.1678391Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:44:19.1678790Z         BadRequestDetail: 
2025-10-30T00:44:19.1679120Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (53.41s)
```

- 2025-10-31 PASS 56 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 55 seconds
- 2025-11-03 PASS 51 seconds
- 2025-11-04 PASS 50 seconds