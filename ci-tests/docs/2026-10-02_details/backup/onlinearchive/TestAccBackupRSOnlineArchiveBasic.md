# backup/onlinearchive/TestAccBackupRSOnlineArchiveBasic Test Details
# Found 36 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-10 01:27](#error-2026-09-10t0127140000) |  | dev |  | 1024.07s
[2026-09-11 02:45](#error-2026-09-11t0245470000) |  | dev |  | 957.09s
[2026-09-11 08:11](#error-2026-09-11t0811580000) |  | dev |  | 984.08s
[2026-09-16 01:39](#error-2026-09-16t0139160000) |  | dev | timeout | 1877.04s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 22 minutes
- 2026-09-03 PASS 25 minutes
- 2026-09-04 PASS 27 minutes
- 2026-09-05 PASS 21 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 20 minutes
  - PASS 20 minutes
- 2026-09-08 PASS 24 minutes
- 2026-09-09 PASS 23 minutes
- 2026-09-10

### Error 2026-09-10T01:27:14+00:00
```
2026-09-10T01:27:14.0720198Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-09-10T01:27:14.0728951Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-09-10T01:27:14.0742257Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-09-10T01:27:14.0744125Z     pre_check.go:46: Time before creating cluster: 2026-09-10T01:02:52.008418066Z, ProjectID: 6aa201a05b8d9510e8937996, Cluster name: test-acc-tf-c-7879871623990746672
2026-09-10T01:27:14.0752062Z     resource_test.go:131: Step 1/3 error: Check failed: sample dataset load 6aa204ce0a7c0b03b3e45730 failed for cluster 6aa201a05b8d9510e8937996:test-acc-tf-c-7879871623990746672
2026-09-10T01:27:14.0801268Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1024.68s)
```

- 2026-09-11
  - FAIL 15 minutes

### Error 2026-09-11T02:45:47+00:00
```
2026-09-11T02:45:47.6988007Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-09-11T02:45:47.6993312Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-09-11T02:45:47.6999188Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-09-11T02:45:47.7000243Z     pre_check.go:46: Time before creating cluster: 2026-09-11T02:04:47.988596231Z, ProjectID: 6aa361a9b5d7eda74f833c88, Cluster name: test-acc-tf-c-2924751378082017073
2026-09-11T02:45:47.7016527Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-09-11T02:45:47.7017511Z     resource_test.go:131: Step 1/3 error: Check failed: sample dataset load 6aa364d1b5d7eda74f838cae failed for cluster 6aa361a9b5d7eda74f833c88:test-acc-tf-c-2924751378082017073
2026-09-11T02:45:47.7038861Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (957.89s)
```

  - FAIL 16 minutes

### Error 2026-09-11T08:11:58+00:00
```
2026-09-11T08:11:58.5172515Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-09-11T08:11:58.5178415Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-09-11T08:11:58.5183332Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-09-11T08:11:58.5184219Z     pre_check.go:46: Time before creating cluster: 2026-09-11T07:01:32.777088673Z, ProjectID: 6aa3a73a821e0ea7a460aaff, Cluster name: test-acc-tf-c-1426447875227419955
2026-09-11T08:11:58.5209986Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-09-11T08:11:58.5210947Z     resource_test.go:131: Step 1/3 error: Check failed: sample dataset load 6aa3aa60821e0ea7a462739d failed for cluster 6aa3a73a821e0ea7a460aaff:test-acc-tf-c-1426447875227419955
2026-09-11T08:11:58.5227276Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (984.83s)
```

- 2026-09-12 PASS 25 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 30 minutes
- 2026-09-15 PASS 21 minutes
- 2026-09-16

### Error 2026-09-16T01:39:16+00:00
```
2026-09-16T01:39:16.7187535Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-09-16T01:39:16.7195056Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-09-16T01:39:16.7201162Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-09-16T01:39:16.7202925Z     pre_check.go:46: Time before creating cluster: 2026-09-16T01:03:57.256542699Z, ProjectID: 6aa9eaf1013d831ec44eccad, Cluster name: test-acc-tf-c-1697912104677733259
2026-09-16T01:39:16.7239267Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-09-16T01:39:16.7240778Z     resource_test.go:131: Step 1/3 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-16T01:39:16.7275294Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1877.41s)
```

- 2026-09-17 PASS 28 minutes
- 2026-09-18 PASS 23 minutes
- 2026-09-19 PASS 22 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 24 minutes
- 2026-09-22 PASS 21 minutes
- 2026-09-23
  - PASS 25 minutes
  - PASS 23 minutes
- 2026-09-24 PASS 26 minutes
- 2026-09-25 PASS 22 minutes
- 2026-09-26 PASS 21 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 22 minutes
- 2026-09-29 PASS 31 minutes
- 2026-09-30 PASS 21 minutes
- 2026-10-01 PASS 19 minutes
- 2026-10-02 PASS 21 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 19 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 19 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 19 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 20 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 20 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 20 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
