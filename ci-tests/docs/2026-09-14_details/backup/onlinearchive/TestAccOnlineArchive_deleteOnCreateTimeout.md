# backup/onlinearchive/TestAccOnlineArchive_deleteOnCreateTimeout Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 5) FAIL(x 4)
Success rate: 55.56%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 01:31](#error-2026-09-09t0131460000) |  | dev | 1248.00s
[2026-09-10 01:27](#error-2026-09-10t0127140000) |  | dev | 1135.02s
[2026-09-11 02:45](#error-2026-09-11t0245470000) |  | dev | 1037.04s
[2026-09-11 08:11](#error-2026-09-11t0811580000) |  | dev | 1172.03s

### Timeline
- 2026-09-07 PASS 19 minutes
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

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 17 minutes
- 2026-09-14: MISSING
