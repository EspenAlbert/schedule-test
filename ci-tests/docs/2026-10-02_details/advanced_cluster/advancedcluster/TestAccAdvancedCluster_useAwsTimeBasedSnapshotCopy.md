# advanced_cluster/advancedcluster/TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-29 10:44](#error-2026-09-29t1044580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6abb965705da69d77cf37f86/clusters/test-acc-tf-c-8999001198204940037 | dev | flaky_500 | 1568.06s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 26 minutes
- 2026-09-03
  - PASS 27 minutes
  - PASS 21 minutes
- 2026-09-04 PASS 37 minutes
- 2026-09-05 PASS 17 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 20 minutes
- 2026-09-08 PASS 18 minutes
- 2026-09-09 PASS 19 minutes
- 2026-09-10 PASS 18 minutes
- 2026-09-11
  - PASS an hour
  - PASS 23 minutes
- 2026-09-12 PASS 17 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 20 minutes
- 2026-09-15 PASS 20 minutes
- 2026-09-16 PASS 17 minutes
- 2026-09-17 PASS 19 minutes
- 2026-09-18 PASS 24 minutes
- 2026-09-19 PASS 19 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 19 minutes
- 2026-09-22
  - PASS 19 minutes
  - PASS 20 minutes
- 2026-09-23
  - PASS 17 minutes
  - PASS 19 minutes
- 2026-09-24 PASS 20 minutes
- 2026-09-25 PASS 19 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 18 minutes
- 2026-09-29
  - PASS 19 minutes
  - FAIL 26 minutes

### Error 2026-09-29T10:44:58+00:00
```
2026-09-29T10:44:58.1769270Z === RUN   TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy
2026-09-29T10:44:58.2825856Z === CONT  TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy
2026-09-29T10:45:38.1831286Z === NAME  TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy
2026-09-29T10:45:38.1832373Z     pre_check.go:46: Time before creating cluster: 2026-09-29T10:45:38.18280079Z, ProjectID: 6abb965705da69d77cf37f86, Cluster name: test-acc-tf-c-8999001198204940037
2026-09-29T11:09:05.1006566Z === NAME  TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy
2026-09-29T11:09:05.1007693Z     resource_test.go:3078: Step 3/4 error: Error running apply: exit status 1
2026-09-29T11:09:05.1008693Z         
2026-09-29T11:09:05.1009290Z         Error: Error in update
2026-09-29T11:09:05.1009877Z         
2026-09-29T11:09:05.1010609Z           with mongodbatlas_advanced_cluster.test,
2026-09-29T11:09:05.1011949Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-29T11:09:05.1013218Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-29T11:09:05.1013949Z         
2026-09-29T11:09:05.1014848Z         cluster name: test-acc-tf-c-8999001198204940037, API error details:
2026-09-29T11:09:05.1016527Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abb965705da69d77cf37f86/clusters/test-acc-tf-c-8999001198204940037
2026-09-29T11:09:05.1018520Z         PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-09-29T11:09:05.1019754Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-09-29T11:09:05.1020668Z         BadRequestDetail: 
2026-09-29T11:11:06.8096708Z --- FAIL: TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy (1568.63s)
```

  - PASS 20 minutes
- 2026-09-30 PASS 19 minutes
- 2026-10-01 PASS 15 minutes
- 2026-10-02 PASS 17 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 17 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 18 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 19 minutes
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
- 2026-09-27 PASS 19 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 17 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
