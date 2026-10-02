# backup/onlinearchive/TestAccOnlineArchive_deleteOnCreateTimeout Test Details
# Found 36 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 29) FAIL(x 7)
Success rate: 80.56%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-09 01:31](#error-2026-09-09t0131460000) |  | dev |  | 1248.00s
[2026-09-10 01:27](#error-2026-09-10t0127140000) |  | dev |  | 1135.02s
[2026-09-11 02:45](#error-2026-09-11t0245470000) |  | dev |  | 1037.04s
[2026-09-11 08:11](#error-2026-09-11t0811580000) |  | dev |  | 1172.03s
[2026-09-16 01:39](#error-2026-09-16t0139160000) |  | dev | timeout | 1913.01s
[2026-09-23 01:44](#error-2026-09-23t0144090000) |  | dev |  | 1077.07s
[2026-09-23 09:35](#error-2026-09-23t0935430000) |  | dev |  | 1007.04s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 20 minutes
- 2026-09-03 PASS 22 minutes
- 2026-09-04 PASS 19 minutes
- 2026-09-05 PASS 19 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 19 minutes
  - PASS 19 minutes
- 2026-09-08 PASS 19 minutes
- 2026-09-09

### Error 2026-09-09T01:31:46+00:00
```
2026-09-09T01:31:46.7916701Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-09T01:31:46.7919105Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-09T01:31:46.7922295Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-09T01:31:46.7923288Z     pre_check.go:46: Time before creating cluster: 2026-09-09T01:04:10.157762765Z, ProjectID: 6aa0b07d567d318b53059f7a, Cluster name: test-acc-tf-c-8740230486931379971
2026-09-09T01:31:46.7944130Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-09T01:31:46.7945143Z     resource_test.go:536: Step 1/2 error: Check failed: sample dataset load 6aa0b46e567d318b53068bcd failed for cluster 6aa0b07d567d318b53059f7a:test-acc-tf-c-8740230486931379971
2026-09-09T01:31:46.7945992Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1248.01s)
```

- 2026-09-10

### Error 2026-09-10T01:27:14+00:00
```
2026-09-10T01:27:14.0724792Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-10T01:27:14.0727511Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-10T01:27:14.0736143Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-10T01:27:14.0737849Z     pre_check.go:46: Time before creating cluster: 2026-09-10T01:02:42.001454339Z, ProjectID: 6aa201a05b8d9510e8937996, Cluster name: test-acc-tf-c-7030785331902446073
2026-09-10T01:27:14.0797049Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-10T01:27:14.0798858Z     resource_test.go:536: Step 1/2 error: Check failed: sample dataset load 6aa2051f09799f1d96366744 failed for cluster 6aa201a05b8d9510e8937996:test-acc-tf-c-7030785331902446073
2026-09-10T01:27:14.0803817Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1135.15s)
```

- 2026-09-11
  - FAIL 17 minutes

### Error 2026-09-11T02:45:47+00:00
```
2026-09-11T02:45:47.6990762Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-11T02:45:47.6992535Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-11T02:45:47.6995797Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-11T02:45:47.6996714Z     pre_check.go:46: Time before creating cluster: 2026-09-11T02:04:37.98214654Z, ProjectID: 6aa361a9b5d7eda74f833c88, Cluster name: test-acc-tf-c-8932027344365586679
2026-09-11T02:45:47.7037043Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-11T02:45:47.7038036Z     resource_test.go:536: Step 1/2 error: Check failed: sample dataset load 6aa364e51761787ecbe83c78 failed for cluster 6aa361a9b5d7eda74f833c88:test-acc-tf-c-8932027344365586679
2026-09-11T02:45:47.7039857Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1037.41s)
```

  - FAIL 19 minutes

### Error 2026-09-11T08:11:58+00:00
```
2026-09-11T08:11:58.5176348Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-11T08:11:58.5178804Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-11T08:11:58.5185175Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-11T08:11:58.5186308Z     pre_check.go:46: Time before creating cluster: 2026-09-11T07:01:37.78095579Z, ProjectID: 6aa3a73a821e0ea7a460aaff, Cluster name: test-acc-tf-c-7388638014062855015
2026-09-11T08:11:58.5225367Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-11T08:11:58.5226489Z     resource_test.go:536: Step 1/2 error: Check failed: sample dataset load 6aa3aac0821e0ea7a462980d failed for cluster 6aa3a73a821e0ea7a460aaff:test-acc-tf-c-7388638014062855015
2026-09-11T08:11:58.5229456Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1172.27s)
```

- 2026-09-12 PASS 20 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 28 minutes
- 2026-09-15 PASS 28 minutes
- 2026-09-16

### Error 2026-09-16T01:39:16+00:00
```
2026-09-16T01:39:16.7191990Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-16T01:39:16.7195718Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-16T01:39:16.7204302Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-16T01:39:16.7205993Z     pre_check.go:46: Time before creating cluster: 2026-09-16T01:04:02.260011076Z, ProjectID: 6aa9eaf1013d831ec44eccad, Cluster name: test-acc-tf-c-5061641595254645240
2026-09-16T01:39:16.7272483Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-16T01:39:16.7274030Z     resource_test.go:536: Step 1/2 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-16T01:39:16.7277025Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1913.09s)
```

- 2026-09-17 PASS 26 minutes
- 2026-09-18 PASS 27 minutes
- 2026-09-19 PASS 20 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 20 minutes
- 2026-09-22 PASS 20 minutes
- 2026-09-23
  - FAIL 17 minutes

### Error 2026-09-23T01:44:09+00:00
```
2026-09-23T01:44:09.7923862Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-23T01:44:09.7927164Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-23T01:44:09.7934909Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-23T01:44:09.7936230Z     pre_check.go:46: Time before creating cluster: 2026-09-23T00:59:13.738418549Z, ProjectID: 6ab3244baad6f205c4268cc9, Cluster name: test-acc-tf-c-5824336046984205183
2026-09-23T01:44:09.7962503Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-23T01:44:09.7963530Z     resource_test.go:536: Step 1/2 error: Check failed: sample dataset load 6ab32773aad6f205c4290d47 failed for cluster 6ab3244baad6f205c4268cc9:test-acc-tf-c-5824336046984205183: Target cluster does not have enough free space to import dataset
2026-09-23T01:44:09.7967708Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1077.69s)
```

  - FAIL 16 minutes

### Error 2026-09-23T09:35:43+00:00
```
2026-09-23T09:35:43.3383368Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-23T09:35:43.3386867Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-23T09:35:43.3393676Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-23T09:35:43.3395596Z     pre_check.go:46: Time before creating cluster: 2026-09-23T08:43:45.605094362Z, ProjectID: 6ab39135aa941871fb3dcab8, Cluster name: test-acc-tf-c-8342016095691138130
2026-09-23T09:35:43.3447620Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-09-23T09:35:43.3450339Z     resource_test.go:536: Step 1/2 error: Check failed: sample dataset load 6ab39471aa941871fb3f27db failed for cluster 6ab39135aa941871fb3dcab8:test-acc-tf-c-8342016095691138130: Target cluster does not have enough free space to import dataset
2026-09-23T09:35:43.3477966Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1007.45s)
```

- 2026-09-24 PASS 21 minutes
- 2026-09-25 PASS 21 minutes
- 2026-09-26 PASS 19 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 19 minutes
- 2026-09-29 PASS 21 minutes
- 2026-09-30 PASS 18 minutes
- 2026-10-01 PASS 17 minutes
- 2026-10-02 PASS 18 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 18 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 17 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 16 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 17 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 18 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 19 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
