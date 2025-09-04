# backup/onlinearchive/TestAccBackupRSOnlineArchiveInvalidProcessRegion Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-27 01:25](#error-2025-08-27t0125560000) |  | dev | flaky_client | 754.05s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 26 minutes
- 2025-08-07 PASS 36 minutes
- 2025-08-08 PASS 19 minutes
- 2025-08-09 PASS 21 minutes
- 2025-08-10 PASS 23 minutes
- 2025-08-11 PASS 35 minutes
- 2025-08-12
  - PASS 15 minutes
  - PASS 16 minutes
- 2025-08-13 PASS 29 minutes
- 2025-08-14 PASS 24 minutes
- 2025-08-15 PASS 12 minutes
- 2025-08-16 PASS 23 minutes
- 2025-08-17 PASS 29 minutes
- 2025-08-18 PASS 24 minutes
- 2025-08-19 PASS 25 minutes
- 2025-08-20
  - PASS 24 minutes
  - PASS 15 minutes
- 2025-08-21 PASS 22 minutes
- 2025-08-22 PASS 13 minutes
- 2025-08-23 PASS 23 minutes
- 2025-08-24 PASS 12 minutes
- 2025-08-25 PASS 14 minutes
- 2025-08-26 PASS 35 minutes
- 2025-08-27

### Error 2025-08-27T01:25:56+00:00
```
2025-08-27T01:25:56.0289441Z === RUN   TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-08-27T01:25:56.0291394Z === CONT  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-08-27T01:25:56.0296218Z === NAME  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-08-27T01:25:56.0297122Z     pre_check.go:40: Time before creating cluster: 2025-08-27T01:04:04.030240801Z, ProjectID: 68ae596d1868717faa7e3407, Cluster name: test-acc-tf-c-1763355016394823430
2025-08-27T01:25:56.0340751Z === NAME  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-08-27T01:25:56.0342105Z     resource_online_archive_test.go:219: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-27T01:25:56.0343035Z         
2025-08-27T01:25:56.0345666Z         Error: error deleting advanced cluster (test-acc-tf-c-1763355016394823430): Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ae596d1868717faa7e3407/clusters/test-acc-tf-c-1763355016394823430": dial tcp 3.231.133.249:443: i/o timeout
2025-08-27T01:25:56.0347420Z         
2025-08-27T01:25:56.0348022Z --- FAIL: TestAccBackupRSOnlineArchiveInvalidProcessRegion (754.53s)
```

- 2025-08-28 PASS 22 minutes
- 2025-08-29 PASS 18 minutes
- 2025-08-30 PASS 25 minutes
- 2025-08-31 PASS 18 minutes
- 2025-09-01
  - PASS 2 hours
  - PASS 13 minutes
  - PASS 15 minutes
  - PASS 23 minutes
  - PASS 16 minutes
  - PASS 18 minutes
  - PASS 21 minutes
  - PASS 24 minutes
- 2025-09-02 PASS 25 minutes
- 2025-09-03 PASS 26 minutes
- 2025-09-04 PASS 27 minutes