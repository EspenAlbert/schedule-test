# backup/onlinearchive/TestAccBackupRSOnlineArchive Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-25 01:28](#error-2025-08-25t0128190000) |  | dev | timeout | 1723.04s
[2025-08-28 01:28](#error-2025-08-28t0128330000) |  | dev | timeout | 2331.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 32 minutes
- 2025-08-07 PASS 45 minutes
- 2025-08-08 PASS 26 minutes
- 2025-08-09 PASS 24 minutes
- 2025-08-10 PASS 30 minutes
- 2025-08-11 PASS 39 minutes
- 2025-08-12
  - PASS 22 minutes
  - PASS 20 minutes
- 2025-08-13 PASS 32 minutes
- 2025-08-14 PASS 27 minutes
- 2025-08-15 PASS 19 minutes
- 2025-08-16 PASS 29 minutes
- 2025-08-17 PASS 31 minutes
- 2025-08-18 PASS 32 minutes
- 2025-08-19 PASS 30 minutes
- 2025-08-20
  - PASS 29 minutes
  - PASS 20 minutes
- 2025-08-21 PASS 30 minutes
- 2025-08-22 PASS 18 minutes
- 2025-08-23 PASS 33 minutes
- 2025-08-24 PASS 19 minutes
- 2025-08-25

### Error 2025-08-25T01:28:19+00:00
```
2025-08-25T01:28:19.2003529Z === RUN   TestAccBackupRSOnlineArchive
2025-08-25T01:28:19.2008452Z === CONT  TestAccBackupRSOnlineArchive
2025-08-25T01:28:19.2015008Z === NAME  TestAccBackupRSOnlineArchive
2025-08-25T01:28:19.2015893Z     pre_check.go:40: Time before creating cluster: 2025-08-25T00:56:23.828627599Z, ProjectID: 68abb49c16afe76254e99e57, Cluster name: test-acc-tf-c-6169975862555590876
2025-08-25T01:28:19.2025274Z === NAME  TestAccBackupRSOnlineArchive
2025-08-25T01:28:19.2026106Z     resource_online_archive_test.go:35: Step 1/7 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-08-25T01:28:19.2039388Z --- FAIL: TestAccBackupRSOnlineArchive (1723.37s)
```

- 2025-08-26 PASS 36 minutes
- 2025-08-27 PASS 20 minutes
- 2025-08-28

### Error 2025-08-28T01:28:33+00:00
```
2025-08-28T01:28:33.0974260Z === RUN   TestAccBackupRSOnlineArchive
2025-08-28T01:28:33.0983852Z === CONT  TestAccBackupRSOnlineArchive
2025-08-28T01:28:33.0990357Z === NAME  TestAccBackupRSOnlineArchive
2025-08-28T01:28:33.0991913Z     pre_check.go:40: Time before creating cluster: 2025-08-28T00:47:47.337384618Z, ProjectID: 68afa71d459686403a80914b, Cluster name: test-acc-tf-c-3084674887105524017
2025-08-28T01:28:33.1011263Z === NAME  TestAccBackupRSOnlineArchive
2025-08-28T01:28:33.1012824Z     resource_online_archive_test.go:35: Step 1/7 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-08-28T01:28:33.1038728Z --- FAIL: TestAccBackupRSOnlineArchive (2331.72s)
```

- 2025-08-29 PASS 23 minutes
- 2025-08-30 PASS 31 minutes
- 2025-08-31 PASS 22 minutes
- 2025-09-01
  - PASS 2 hours
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 23 minutes
  - PASS 29 minutes
  - PASS 21 minutes
  - PASS 27 minutes
  - PASS 29 minutes
- 2025-09-02 PASS 32 minutes
- 2025-09-03 PASS 28 minutes
- 2025-09-04 PASS 33 minutes