# backup/onlinearchive/TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions Test Details
# Found 6 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 4) FAIL(x 2)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 02:45](#error-2026-09-11t0245470000) |  | dev | 1128.01s
[2026-09-11 08:11](#error-2026-09-11t0811580000) |  | dev | 1010.08s

### Timeline
- 2026-09-07 PASS 22 minutes
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

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 20 minutes
- 2026-09-14: MISSING
