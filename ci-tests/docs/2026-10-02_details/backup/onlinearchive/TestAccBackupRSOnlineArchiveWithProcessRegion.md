# backup/onlinearchive/TestAccBackupRSOnlineArchiveWithProcessRegion Test Details
# Found 36 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 30) FAIL(x 6)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-10 01:27](#error-2026-09-10t0127140000) |  | dev |  | 989.04s
[2026-09-11 02:45](#error-2026-09-11t0245470000) |  | dev |  | 975.02s
[2026-09-11 08:11](#error-2026-09-11t0811580000) |  | dev |  | 1096.05s
[2026-09-16 01:39](#error-2026-09-16t0139160000) |  | dev | timeout | 1902.05s
[2026-09-17 01:32](#error-2026-09-17t0132240000) |  | dev | unknown | 1173.02s
[2026-09-23 09:35](#error-2026-09-23t0935430000) |  | dev |  | 972.00s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 22 minutes
- 2026-09-03 PASS 25 minutes
- 2026-09-04 PASS 23 minutes
- 2026-09-05 PASS 20 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 21 minutes
  - PASS 22 minutes
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
- 2026-09-15 PASS 22 minutes
- 2026-09-16

### Error 2026-09-16T01:39:16+00:00
```
2026-09-16T01:39:16.7189071Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-16T01:39:16.7194352Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-16T01:39:16.7197902Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-16T01:39:16.7199830Z     pre_check.go:46: Time before creating cluster: 2026-09-16T01:03:52.253043804Z, ProjectID: 6aa9eaf1013d831ec44eccad, Cluster name: test-acc-tf-c-3427336595013216493
2026-09-16T01:39:16.7256229Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-16T01:39:16.7257813Z     resource_test.go:178: Step 1/4 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-16T01:39:16.7276126Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (1902.49s)
```

- 2026-09-17

### Error 2026-09-17T01:32:24+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-09-17T01:32:24.271000+00:00-TestAccBackupRSOnlineArchiveWithProcessRegion',confidence=1.0,ts_when='15 days ago')

```
2026-09-17T01:32:24.2718919Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-17T01:32:24.2724339Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-17T01:32:24.2731839Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-17T01:32:24.2735644Z     pre_check.go:46: Time before creating cluster: 2026-09-17T01:00:41.696548978Z, ProjectID: 6aab3ba64235cfdb6127c1ca, Cluster name: test-acc-tf-c-1085286902766169957
2026-09-17T01:32:24.2767433Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-17T01:32:24.2769157Z     resource_test.go:178: Step 1/4 error: Check failed: sample dataset load 6aab3f444235cfdb61283007 failed for cluster 6aab3ba64235cfdb6127c1ca:test-acc-tf-c-1085286902766169957
2026-09-17T01:32:24.2770626Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (1173.21s)
```

- 2026-09-18 PASS 22 minutes
- 2026-09-19 PASS 26 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 21 minutes
- 2026-09-22 PASS 24 minutes
- 2026-09-23
  - PASS 19 minutes
  - FAIL 16 minutes

### Error 2026-09-23T09:35:43+00:00
```
2026-09-23T09:35:43.3379792Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-23T09:35:43.3386049Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-23T09:35:43.3390190Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-23T09:35:43.3391867Z     pre_check.go:46: Time before creating cluster: 2026-09-23T08:43:40.604745858Z, ProjectID: 6ab39135aa941871fb3dcab8, Cluster name: test-acc-tf-c-7852834586100425973
2026-09-23T09:35:43.3435625Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-09-23T09:35:43.3438194Z     resource_test.go:178: Step 1/4 error: Check failed: sample dataset load 6ab3944df8a29abe235d3d6e failed for cluster 6ab39135aa941871fb3dcab8:test-acc-tf-c-7852834586100425973: Target cluster does not have enough free space to import dataset
2026-09-23T09:35:43.3477042Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (972.02s)
```

- 2026-09-24 PASS 32 minutes
- 2026-09-25 PASS 24 minutes
- 2026-09-26 PASS 22 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 21 minutes
- 2026-09-29 PASS 35 minutes
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
- 2026-09-06 PASS 20 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 20 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 18 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 19 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 20 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 19 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
