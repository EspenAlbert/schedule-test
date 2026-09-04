# backup/onlinearchive/TestAccBackupRSOnlineArchiveBasic Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-17 01:13](#error-2026-08-17t0113070000) |  | dev | timeout | 2009.05s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 20 minutes
- 2026-08-07 PASS 21 minutes
- 2026-08-08 PASS 20 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 24 minutes
- 2026-08-11 PASS 20 minutes
- 2026-08-12 PASS 17 minutes
- 2026-08-13 PASS 19 minutes
- 2026-08-14 PASS 19 minutes
- 2026-08-15 PASS 21 minutes
- 2026-08-16: MISSING
- 2026-08-17

### Error 2026-08-17T01:13:07+00:00
```
2026-08-17T01:13:07.0986982Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-08-17T01:13:07.0991831Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-08-17T01:13:07.0997418Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-08-17T01:13:07.0998573Z     pre_check.go:46: Time before creating cluster: 2026-08-17T00:39:51.653615934Z, ProjectID: 6a825846bf57824f43e3c1aa, Cluster name: test-acc-tf-c-3609786809605185998
2026-08-17T01:13:07.1028453Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-08-17T01:13:07.1029446Z     resource_test.go:131: Step 1/3 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-08-17T01:13:07.1030179Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (2009.45s)
```

- 2026-08-18 PASS 21 minutes
- 2026-08-19 PASS 21 minutes
- 2026-08-20 PASS 21 minutes
- 2026-08-21 PASS 22 minutes
- 2026-08-22 PASS 20 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 19 minutes
- 2026-08-25 PASS 19 minutes
- 2026-08-26 PASS 20 minutes
- 2026-08-27 PASS an hour
- 2026-08-28 PASS 46 minutes
- 2026-08-29 PASS 20 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 27 minutes
- 2026-09-01 PASS 37 minutes
- 2026-09-02 PASS 22 minutes
- 2026-09-03 PASS 25 minutes
- 2026-09-04 PASS 27 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-16 01:12](#error-2026-08-16t0112380000) |  | qa | timeout | 1850.04s
[2026-08-23 01:11](#error-2026-08-23t0111420000) |  | qa | timeout | 1798.08s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 18 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 21 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16

### Error 2026-08-16T01:12:38+00:00
```
2026-08-16T01:12:38.8133541Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-08-16T01:12:38.8140779Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-08-16T01:12:38.8144723Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-08-16T01:12:38.8145730Z     pre_check.go:46: Time before creating cluster: 2026-08-16T00:41:02.305490328Z, ProjectID: 6a81071150246cd6ebc4b236, Cluster name: test-acc-tf-c-9008171317839624842
2026-08-16T01:12:38.8179163Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-08-16T01:12:38.8180146Z     resource_test.go:131: Step 1/3 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-08-16T01:12:38.8186398Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1850.40s)
```

- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23

### Error 2026-08-23T01:11:42+00:00
```
2026-08-23T01:11:42.7190930Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-08-23T01:11:42.7195333Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-08-23T01:11:42.7201750Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-08-23T01:11:42.7202696Z     pre_check.go:46: Time before creating cluster: 2026-08-23T00:40:42.309158593Z, ProjectID: 6a8a4174852bf2142d1b8c55, Cluster name: test-acc-tf-c-1098068038876704457
2026-08-23T01:11:42.7222332Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-08-23T01:11:42.7223128Z     resource_test.go:131: Step 1/3 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-08-23T01:11:42.7228023Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1798.84s)
```

- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 19 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 19 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
