# backup/onlinearchive/TestAccBackupRSOnlineArchiveWithProcessRegion Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 3)
Success rate: 92.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 01:28](#error-2025-08-24t0128520000) |  | qa | timeout | 1744.04s
[2025-08-25 01:28](#error-2025-08-25t0128190000) |  | dev | timeout | 1874.08s
[2025-08-28 01:28](#error-2025-08-28t0128330000) |  | dev | timeout | 2465.00s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 33 minutes
- 2025-08-07 PASS 42 minutes
- 2025-08-08 PASS 25 minutes
- 2025-08-09 PASS 24 minutes
- 2025-08-10 PASS 27 minutes
- 2025-08-11 PASS 40 minutes
- 2025-08-12
  - PASS 20 minutes
  - PASS 23 minutes
- 2025-08-13 PASS 32 minutes
- 2025-08-14 PASS 27 minutes
- 2025-08-15 PASS 21 minutes
- 2025-08-16 PASS 30 minutes
- 2025-08-17 PASS 33 minutes
- 2025-08-18 PASS 29 minutes
- 2025-08-19 PASS 31 minutes
- 2025-08-20
  - PASS 28 minutes
  - PASS 21 minutes
- 2025-08-21 PASS 36 minutes
- 2025-08-22 PASS 17 minutes
- 2025-08-23 PASS 33 minutes
- 2025-08-24

### Error 2025-08-24T01:28:52+00:00
```
2025-08-24T01:28:52.2051406Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2025-08-24T01:28:52.2053982Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-08-24T01:28:52.2055435Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-08-24T01:28:52.2056307Z     pre_check.go:40: Time before creating cluster: 2025-08-24T00:47:21.052206752Z, ProjectID: 68aa610c9bbb8c4ee1f88794, Cluster name: test-acc-tf-c-2329603444246804072
2025-08-24T01:28:52.2074885Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-08-24T01:28:52.2075748Z     resource_online_archive_test.go:178: Step 1/4 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-08-24T01:28:52.2076867Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (1744.36s)
```

- 2025-08-25

### Error 2025-08-25T01:28:19+00:00
```
2025-08-25T01:28:19.2004979Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2025-08-25T01:28:19.2007600Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-08-25T01:28:19.2010943Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-08-25T01:28:19.2012456Z     pre_check.go:40: Time before creating cluster: 2025-08-25T00:56:13.825394335Z, ProjectID: 68abb49c16afe76254e99e57, Cluster name: test-acc-tf-c-2789644852866229408
2025-08-25T01:28:19.2037527Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-08-25T01:28:19.2038677Z     resource_online_archive_test.go:178: Step 1/4 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-08-25T01:28:19.2045444Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (1874.78s)
```

- 2025-08-26 PASS 35 minutes
- 2025-08-27 PASS 21 minutes
- 2025-08-28

### Error 2025-08-28T01:28:33+00:00
```
2025-08-28T01:28:33.0976899Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2025-08-28T01:28:33.0981574Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-08-28T01:28:33.0984509Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-08-28T01:28:33.0986159Z     pre_check.go:40: Time before creating cluster: 2025-08-28T00:47:37.332799911Z, ProjectID: 68afa71d459686403a80914b, Cluster name: test-acc-tf-c-1284746185032153388
2025-08-28T01:28:33.1028169Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-08-28T01:28:33.1029805Z     resource_online_archive_test.go:178: Step 1/4 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-08-28T01:28:33.1041818Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (2465.03s)
```

- 2025-08-29 PASS 22 minutes
- 2025-08-30 PASS 29 minutes
- 2025-08-31 PASS 24 minutes
- 2025-09-01
  - PASS 2 hours
  - PASS 18 minutes
  - PASS 20 minutes
  - PASS 28 minutes
  - PASS 20 minutes
  - PASS 26 minutes
  - PASS 26 minutes
  - PASS 28 minutes
- 2025-09-02 PASS 32 minutes
- 2025-09-03 PASS 31 minutes
- 2025-09-04 PASS 33 minutes