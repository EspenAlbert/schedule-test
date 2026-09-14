# backup/onlinearchive/TestAccBackupRSOnlineArchiveWithProcessRegion Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 3)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 01:27](#error-2026-09-10t0127140000) |  | dev | 989.04s
[2026-09-11 02:45](#error-2026-09-11t0245470000) |  | dev | 975.02s
[2026-09-11 08:11](#error-2026-09-11t0811580000) |  | dev | 1096.05s

### Timeline
- 2026-09-07 PASS 22 minutes
- 2026-09-08 PASS 24 minutes
- 2026-09-09 PASS 23 minutes
- 2026-09-10

### Error 2026-09-10T01:27:14+00:00
```
2026-09-10T01:27:14.0721538Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-10T01:27:14.0728248Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-10T01:27:14.0739245Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-10T01:27:14.0740943Z     pre_check.go:46: Time before creating cluster: 2026-09-10T01:02:47.005419379Z, ProjectID: 6aa201a05b8d9510e8937996, Cluster name: test-acc-tf-c-912507074771558755
2026-09-10T01:27:14.0787865Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-10T01:27:14.0789699Z     resource_test.go:178: Step 1/4 error: Check failed: sample dataset load 6aa204e809799f1d9636659f failed for cluster 6aa201a05b8d9510e8937996:test-acc-tf-c-912507074771558755
2026-09-10T01:27:14.0800426Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (989.37s)
```

- 2026-09-11
  - FAIL 16 minutes

### Error 2026-09-11T02:45:47+00:00
```
2026-09-11T02:45:47.6988779Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-11T02:45:47.6992119Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-11T02:45:47.6994050Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-11T02:45:47.6995018Z     pre_check.go:46: Time before creating cluster: 2026-09-11T02:04:32.978750393Z, ProjectID: 6aa361a9b5d7eda74f833c88, Cluster name: test-acc-tf-c-5156277164059995237
2026-09-11T02:45:47.7031996Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-11T02:45:47.7033151Z     resource_test.go:178: Step 1/4 error: Check failed: sample dataset load 6aa364e11761787ecbe83c56 failed for cluster 6aa361a9b5d7eda74f833c88:test-acc-tf-c-5156277164059995237
2026-09-11T02:45:47.7039350Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (975.18s)
```

  - FAIL 18 minutes

### Error 2026-09-11T08:11:58+00:00
```
2026-09-11T08:11:58.5173640Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-11T08:11:58.5177995Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-11T08:11:58.5179941Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-11T08:11:58.5180914Z     pre_check.go:46: Time before creating cluster: 2026-09-11T07:01:22.77111717Z, ProjectID: 6aa3a73a821e0ea7a460aaff, Cluster name: test-acc-tf-c-5139397615255169183
2026-09-11T08:11:58.5214737Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-11T08:11:58.5215906Z     resource_test.go:178: Step 1/4 error: Check failed: sample dataset load 6aa3aa93821e0ea7a4629007 failed for cluster 6aa3a73a821e0ea7a460aaff:test-acc-tf-c-5139397615255169183
2026-09-11T08:11:58.5228950Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (1096.46s)
```

- 2026-09-12 PASS 24 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 31 minutes

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
