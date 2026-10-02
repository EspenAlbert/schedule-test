# backup/onlinearchive/TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions Test Details
# Found 23 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 19) FAIL(x 4)
Success rate: 82.61%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-11 02:45](#error-2026-09-11t0245470000) |  | dev |  | 1128.01s
[2026-09-11 08:11](#error-2026-09-11t0811580000) |  | dev |  | 1010.08s
[2026-09-16 01:39](#error-2026-09-16t0139160000) |  | dev | timeout | 1963.04s
[2026-09-23 09:35](#error-2026-09-23t0935430000) |  | dev |  | 1153.02s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 30 minutes
- 2026-09-03: MISSING
- 2026-09-04 PASS 27 minutes
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 22 minutes
  - PASS 22 minutes
- 2026-09-08: MISSING
- 2026-09-09 PASS 27 minutes
- 2026-09-10: MISSING
- 2026-09-11
  - FAIL 18 minutes

### Error 2026-09-11T02:45:47+00:00
```
2026-09-11T02:45:47.6985497Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-09-11T02:45:47.6986239Z     resource_migration_test.go:16: Creating execution project (1): test-acc-tf-p-7716646525314231165
2026-09-11T02:45:47.6991624Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-09-11T02:45:47.7026729Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-09-11T02:45:47.7027836Z     resource_migration_test.go:26: Step 1/3 error: Check failed: sample dataset load 6aa364deb5d7eda74f838d05 failed for cluster 6aa361a9b5d7eda74f833c88:test-acc-tf-c-4910912153880691490
2026-09-11T02:45:47.7041436Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (1128.09s)
```

  - FAIL 16 minutes

### Error 2026-09-11T08:11:58+00:00
```
2026-09-11T08:11:58.5167408Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-09-11T08:11:58.5168126Z     resource_migration_test.go:16: Creating execution project (1): test-acc-tf-p-8733943711636205409
2026-09-11T08:11:58.5177488Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-09-11T08:11:58.5220083Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-09-11T08:11:58.5221154Z     resource_migration_test.go:26: Step 1/3 error: Check failed: sample dataset load 6aa3aa93f7fcc4bbebf9b776 failed for cluster 6aa3a73a821e0ea7a460aaff:test-acc-tf-c-795751386182580552
2026-09-11T08:11:58.5227811Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (1010.77s)
```

- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 29 minutes
- 2026-09-15: MISSING
- 2026-09-16

### Error 2026-09-16T01:39:16+00:00
```
2026-09-16T01:39:16.7183151Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-09-16T01:39:16.7184437Z     resource_migration_test.go:16: Creating execution project (1): test-acc-tf-p-5989809472856164658
2026-09-16T01:39:16.7193501Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-09-16T01:39:16.7247690Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-09-16T01:39:16.7249649Z     resource_migration_test.go:26: Step 1/3 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-16T01:39:16.7279183Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (1963.42s)
```

- 2026-09-17: MISSING
- 2026-09-18 PASS 28 minutes
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21 PASS 24 minutes
- 2026-09-22: MISSING
- 2026-09-23
  - PASS 25 minutes
  - FAIL 19 minutes

### Error 2026-09-23T09:35:43+00:00
```
2026-09-23T09:35:43.3373341Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-09-23T09:35:43.3374872Z     resource_migration_test.go:16: Creating execution project (1): test-acc-tf-p-2574498092814435723
2026-09-23T09:35:43.3385108Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-09-23T09:35:43.3471696Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-09-23T09:35:43.3474811Z     resource_migration_test.go:26: Step 1/3 error: Check failed: sample dataset load 6ab394691bc84b2f3adf2de9 failed for cluster 6ab39135aa941871fb3dcab8:test-acc-tf-c-3107823273193202115: Target cluster does not have enough free space to import dataset
2026-09-23T09:35:43.3479801Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (1153.20s)
```

- 2026-09-24: MISSING
- 2026-09-25 PASS 27 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 22 minutes
- 2026-09-29: MISSING
- 2026-09-30 PASS 22 minutes
- 2026-10-01: MISSING
- 2026-10-02 PASS 20 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 21 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 20 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 19 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 22 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 25 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 21 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
