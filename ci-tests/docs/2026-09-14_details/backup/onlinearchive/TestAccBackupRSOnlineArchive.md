# backup/onlinearchive/TestAccBackupRSOnlineArchive Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 3)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 01:27](#error-2026-09-10t0127140000) |  | dev | 1042.01s
[2026-09-11 02:45](#error-2026-09-11t0245470000) |  | dev | 1083.07s
[2026-09-11 08:11](#error-2026-09-11t0811580000) |  | dev | 1055.06s

### Timeline
- 2026-09-07 PASS 23 minutes
- 2026-09-08 PASS 23 minutes
- 2026-09-09 PASS 23 minutes
- 2026-09-10

### Error 2026-09-10T01:27:14+00:00
```
2026-09-10T01:27:14.0717681Z === RUN   TestAccBackupRSOnlineArchive
2026-09-10T01:27:14.0718727Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-3046655871759723922
2026-09-10T01:27:14.0726164Z === CONT  TestAccBackupRSOnlineArchive
2026-09-10T01:27:14.0732630Z === NAME  TestAccBackupRSOnlineArchive
2026-09-10T01:27:14.0734786Z     pre_check.go:46: Time before creating cluster: 2026-09-10T01:02:37.001267667Z, ProjectID: 6aa201a05b8d9510e8937996, Cluster name: test-acc-tf-c-2021580426179983724
2026-09-10T01:27:14.0778460Z === NAME  TestAccBackupRSOnlineArchive
2026-09-10T01:27:14.0780207Z     resource_test.go:35: Step 1/7 error: Check failed: sample dataset load 6aa204de0a7c0b03b3e457f0 failed for cluster 6aa201a05b8d9510e8937996:test-acc-tf-c-2021580426179983724
2026-09-10T01:27:14.0801985Z --- FAIL: TestAccBackupRSOnlineArchive (1042.08s)
```

- 2026-09-11
  - FAIL 18 minutes

### Error 2026-09-11T02:45:47+00:00
```
2026-09-11T02:45:47.6987313Z === RUN   TestAccBackupRSOnlineArchive
2026-09-11T02:45:47.6993668Z === CONT  TestAccBackupRSOnlineArchive
2026-09-11T02:45:47.7000979Z === NAME  TestAccBackupRSOnlineArchive
2026-09-11T02:45:47.7001870Z     pre_check.go:46: Time before creating cluster: 2026-09-11T02:04:52.991902586Z, ProjectID: 6aa361a9b5d7eda74f833c88, Cluster name: test-acc-tf-c-318083583670791995
2026-09-11T02:45:47.7021658Z === NAME  TestAccBackupRSOnlineArchive
2026-09-11T02:45:47.7022623Z     resource_test.go:35: Step 1/7 error: Check failed: sample dataset load 6aa364d61761787ecbe83c00 failed for cluster 6aa361a9b5d7eda74f833c88:test-acc-tf-c-318083583670791995
2026-09-11T02:45:47.7040439Z --- FAIL: TestAccBackupRSOnlineArchive (1083.69s)
```

  - FAIL 17 minutes

### Error 2026-09-11T08:11:58+00:00
```
2026-09-11T08:11:58.5171482Z === RUN   TestAccBackupRSOnlineArchive
2026-09-11T08:11:58.5179171Z === CONT  TestAccBackupRSOnlineArchive
2026-09-11T08:11:58.5187030Z === NAME  TestAccBackupRSOnlineArchive
2026-09-11T08:11:58.5187904Z     pre_check.go:46: Time before creating cluster: 2026-09-11T07:01:42.783478845Z, ProjectID: 6aa3a73a821e0ea7a460aaff, Cluster name: test-acc-tf-c-6438818338645479524
2026-09-11T08:11:58.5206254Z     resource_test.go:35: Step 1/7 error: Check failed: sample dataset load 6aa3aa4cf7fcc4bbebf99985 failed for cluster 6aa3a73a821e0ea7a460aaff:test-acc-tf-c-6438818338645479524
2026-09-11T08:11:58.5228469Z --- FAIL: TestAccBackupRSOnlineArchive (1055.58s)
```

- 2026-09-12 PASS 23 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 32 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 19 minutes
- 2026-09-14: MISSING
