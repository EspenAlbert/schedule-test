# backup/onlinearchive/TestAccBackupRSOnlineArchive Test Details
# Found 36 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 29) FAIL(x 7)
Success rate: 80.56%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-07 01:42](#error-2026-09-07t0142440000) |  | dev | timeout | 2019.04s
[2026-09-10 01:27](#error-2026-09-10t0127140000) |  | dev |  | 1042.01s
[2026-09-11 02:45](#error-2026-09-11t0245470000) |  | dev |  | 1083.07s
[2026-09-11 08:11](#error-2026-09-11t0811580000) |  | dev |  | 1055.06s
[2026-09-16 01:39](#error-2026-09-16t0139160000) |  | dev | timeout | 1922.00s
[2026-09-23 01:44](#error-2026-09-23t0144090000) |  | dev |  | 1072.05s
[2026-09-23 09:35](#error-2026-09-23t0935430000) |  | dev |  | 1077.10s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 26 minutes
- 2026-09-03 PASS 24 minutes
- 2026-09-04 PASS 22 minutes
- 2026-09-05 PASS 22 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - FAIL 33 minutes

### Error 2026-09-07T01:42:44+00:00
```
2026-09-07T01:42:44.8526618Z === RUN   TestAccBackupRSOnlineArchive
2026-09-07T01:42:44.8532351Z === CONT  TestAccBackupRSOnlineArchive
2026-09-07T01:42:44.8540705Z === NAME  TestAccBackupRSOnlineArchive
2026-09-07T01:42:44.8541726Z     pre_check.go:46: Time before creating cluster: 2026-09-07T01:07:11.03998368Z, ProjectID: 6a9e0e23ce994148d5a104c7, Cluster name: test-acc-tf-c-3649990911118702547
2026-09-07T01:42:44.8567321Z === NAME  TestAccBackupRSOnlineArchive
2026-09-07T01:42:44.8568493Z     resource_test.go:35: Step 1/7 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-07T01:42:44.8569207Z --- FAIL: TestAccBackupRSOnlineArchive (2019.38s)
```

  - PASS 23 minutes
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
- 2026-09-15 PASS 23 minutes
- 2026-09-16

### Error 2026-09-16T01:39:16+00:00
```
2026-09-16T01:39:16.7186358Z === RUN   TestAccBackupRSOnlineArchive
2026-09-16T01:39:16.7197048Z === CONT  TestAccBackupRSOnlineArchive
2026-09-16T01:39:16.7210590Z === NAME  TestAccBackupRSOnlineArchive
2026-09-16T01:39:16.7212233Z     pre_check.go:46: Time before creating cluster: 2026-09-16T01:04:12.264294482Z, ProjectID: 6aa9eaf1013d831ec44eccad, Cluster name: test-acc-tf-c-6877563634825697416
2026-09-16T01:39:16.7264207Z === NAME  TestAccBackupRSOnlineArchive
2026-09-16T01:39:16.7265679Z     resource_test.go:35: Step 1/7 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-16T01:39:16.7277787Z --- FAIL: TestAccBackupRSOnlineArchive (1922.04s)
```

- 2026-09-17 PASS 32 minutes
- 2026-09-18 PASS 28 minutes
- 2026-09-19 PASS 25 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 29 minutes
- 2026-09-22 PASS 27 minutes
- 2026-09-23
  - FAIL 17 minutes

### Error 2026-09-23T01:44:09+00:00
```
2026-09-23T01:44:09.7919805Z === RUN   TestAccBackupRSOnlineArchive
2026-09-23T01:44:09.7926677Z === CONT  TestAccBackupRSOnlineArchive
2026-09-23T01:44:09.7932749Z === NAME  TestAccBackupRSOnlineArchive
2026-09-23T01:44:09.7933932Z     pre_check.go:46: Time before creating cluster: 2026-09-23T00:59:08.734534275Z, ProjectID: 6ab3244baad6f205c4268cc9, Cluster name: test-acc-tf-c-1977458718471151905
2026-09-23T01:44:09.7957657Z === NAME  TestAccBackupRSOnlineArchive
2026-09-23T01:44:09.7958736Z     resource_test.go:35: Step 1/7 error: Check failed: sample dataset load 6ab3276eaae4ca92649feebd failed for cluster 6ab3244baad6f205c4268cc9:test-acc-tf-c-1977458718471151905: Target cluster does not have enough free space to import dataset
2026-09-23T01:44:09.7967340Z --- FAIL: TestAccBackupRSOnlineArchive (1072.54s)
```

  - FAIL 17 minutes

### Error 2026-09-23T09:35:43+00:00
```
2026-09-23T09:35:43.3376949Z === RUN   TestAccBackupRSOnlineArchive
2026-09-23T09:35:43.3388517Z === CONT  TestAccBackupRSOnlineArchive
2026-09-23T09:35:43.3400446Z === NAME  TestAccBackupRSOnlineArchive
2026-09-23T09:35:43.3402132Z     pre_check.go:46: Time before creating cluster: 2026-09-23T08:43:55.611396554Z, ProjectID: 6ab39135aa941871fb3dcab8, Cluster name: test-acc-tf-c-7086241003427307881
2026-09-23T09:35:43.3459548Z === NAME  TestAccBackupRSOnlineArchive
2026-09-23T09:35:43.3462088Z     resource_test.go:35: Step 1/7 error: Check failed: sample dataset load 6ab3947bf8a29abe235d417a failed for cluster 6ab39135aa941871fb3dcab8:test-acc-tf-c-7086241003427307881: Target cluster does not have enough free space to import dataset
2026-09-23T09:35:43.3478842Z --- FAIL: TestAccBackupRSOnlineArchive (1077.95s)
```

- 2026-09-24 PASS 28 minutes
- 2026-09-25 PASS 22 minutes
- 2026-09-26 PASS 21 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 21 minutes
- 2026-09-29 PASS 24 minutes
- 2026-09-30 PASS 22 minutes
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
- 2026-09-27 PASS 19 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 20 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
