# backup/onlinearchive/TestAccOnlineArchive_deleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-06 01:18](#error-2026-08-06t0118480000) |  | dev | 1100.07s
[2026-08-14 01:46](#error-2026-08-14t0146120000) |  | dev | 1069.05s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06

### Error 2026-08-06T01:18:48+00:00
```
2026-08-06T01:18:48.4891071Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-06T01:18:48.4892614Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-06T01:18:48.4894875Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-06T01:18:48.4895569Z     pre_check.go:46: Time before creating cluster: 2026-08-06T00:57:08.037378686Z, ProjectID: 6a73dbd7357372fed321f6c5, Cluster name: test-acc-tf-c-100727777596898314
2026-08-06T01:18:48.4910643Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-06T01:18:48.4911287Z     resource_test.go:536: Step 1/2 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-08-06T01:18:48.4914830Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1100.74s)
```

- 2026-08-07 PASS 18 minutes
- 2026-08-08 PASS 18 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 18 minutes
- 2026-08-11 PASS 17 minutes
- 2026-08-12 PASS 18 minutes
- 2026-08-13 PASS 17 minutes
- 2026-08-14

### Error 2026-08-14T01:46:12+00:00
```
2026-08-14T01:46:12.3409191Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-14T01:46:12.3411167Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-14T01:46:12.3413590Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-14T01:46:12.3414395Z     pre_check.go:46: Time before creating cluster: 2026-08-14T00:53:03.704822358Z, ProjectID: 6a7e66e35c1e3c8ecb0d0c0d, Cluster name: test-acc-tf-c-5638388944339534559
2026-08-14T01:46:12.3429467Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-14T01:46:12.3430163Z     resource_test.go:536: Step 1/2 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-08-14T01:46:12.3433536Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1069.50s)
```

- 2026-08-15 PASS 19 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 17 minutes
- 2026-08-18 PASS 17 minutes
- 2026-08-19 PASS 18 minutes
- 2026-08-20 PASS 18 minutes
- 2026-08-21 PASS 19 minutes
- 2026-08-22 PASS 20 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 17 minutes
- 2026-08-25 PASS 17 minutes
- 2026-08-26 PASS 17 minutes
- 2026-08-27 PASS 39 minutes
- 2026-08-28 PASS 32 minutes
- 2026-08-29 PASS 20 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 23 minutes
- 2026-09-01 PASS 25 minutes
- 2026-09-02 PASS 20 minutes
- 2026-09-03 PASS 22 minutes
- 2026-09-04 PASS 19 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-16 01:12](#error-2026-08-16t0112380000) |  | qa | timeout | 1905.09s
[2026-08-23 01:11](#error-2026-08-23t0111420000) |  | qa | timeout | 1879.07s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 16 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 18 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16

### Error 2026-08-16T01:12:38+00:00
```
2026-08-16T01:12:38.8137988Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-16T01:12:38.8140249Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-16T01:12:38.8142877Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-16T01:12:38.8143900Z     pre_check.go:46: Time before creating cluster: 2026-08-16T00:40:57.302351535Z, ProjectID: 6a81071150246cd6ebc4b236, Cluster name: test-acc-tf-c-5298725601211156417
2026-08-16T01:12:38.8166886Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-16T01:12:38.8167829Z     resource_test.go:536: Step 1/2 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-08-16T01:12:38.8186967Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1905.93s)
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
2026-08-23T01:11:42.7193334Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-23T01:11:42.7196251Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-23T01:11:42.7198713Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-23T01:11:42.7199547Z     pre_check.go:46: Time before creating cluster: 2026-08-23T00:40:32.302394968Z, ProjectID: 6a8a4174852bf2142d1b8c55, Cluster name: test-acc-tf-c-9000159541839541065
2026-08-23T01:11:42.7226476Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-23T01:11:42.7227262Z     resource_test.go:536: Step 1/2 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-08-23T01:11:42.7228470Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1879.69s)
```

- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 16 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 19 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
