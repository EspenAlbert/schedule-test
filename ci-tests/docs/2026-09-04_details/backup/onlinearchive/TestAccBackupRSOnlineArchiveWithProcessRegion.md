# backup/onlinearchive/TestAccBackupRSOnlineArchiveWithProcessRegion Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 21 minutes
- 2026-08-07 PASS 19 minutes
- 2026-08-08 PASS 20 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 24 minutes
- 2026-08-11 PASS 19 minutes
- 2026-08-12 PASS 19 minutes
- 2026-08-13 PASS 19 minutes
- 2026-08-14 PASS 19 minutes
- 2026-08-15 PASS 21 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 18 minutes
- 2026-08-18 PASS 19 minutes
- 2026-08-19 PASS 20 minutes
- 2026-08-20 PASS 20 minutes
- 2026-08-21 PASS 22 minutes
- 2026-08-22 PASS 20 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 20 minutes
- 2026-08-25 PASS 19 minutes
- 2026-08-26 PASS 20 minutes
- 2026-08-27 PASS 50 minutes
- 2026-08-28 PASS 36 minutes
- 2026-08-29 PASS 28 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 27 minutes
- 2026-09-01 PASS 29 minutes
- 2026-09-02 PASS 22 minutes
- 2026-09-03 PASS 25 minutes
- 2026-09-04 PASS 23 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-16 01:12](#error-2026-08-16t0112380000) |  | qa | timeout | 1835.05s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 18 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 20 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16

### Error 2026-08-16T01:12:38+00:00
```
2026-08-16T01:12:38.8134989Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-08-16T01:12:38.8142330Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-08-16T01:12:38.8150639Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-08-16T01:12:38.8151621Z     pre_check.go:46: Time before creating cluster: 2026-08-16T00:41:17.314474071Z, ProjectID: 6a81071150246cd6ebc4b236, Cluster name: test-acc-tf-c-6190572409944913183
2026-08-16T01:12:38.8173195Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-08-16T01:12:38.8174653Z     resource_test.go:178: Step 1/4 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-08-16T01:12:38.8185771Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (1835.46s)
```

- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 22 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 19 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 20 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
