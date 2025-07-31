# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 03:39](#error-2025-07-11t0339400000) |  | dev | timeout | 6004.10s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 24 minutes
- 2025-07-03 PASS 25 minutes
- 2025-07-04 PASS 25 minutes
- 2025-07-05 PASS 23 minutes
- 2025-07-06 PASS 21 minutes
- 2025-07-07 PASS 20 minutes
- 2025-07-08 PASS 31 minutes
- 2025-07-09 PASS 21 minutes
- 2025-07-10 PASS 23 minutes
- 2025-07-11

### Error 2025-07-11T03:39:40+00:00
```
2025-07-11T03:39:40.5743970Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-07-11T03:39:40.5745575Z     resource_advanced_cluster_test.go:1316: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-07-11T03:41:02.0359918Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-07-11T05:21:06.9551379Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-07-11T05:21:06.9552244Z     resource_advanced_cluster_test.go:1316: Step 1/4 error: Error running apply: exit status 1
2025-07-11T05:21:06.9552899Z         
2025-07-11T05:21:06.9553737Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h40m0s)
2025-07-11T05:21:06.9554582Z         
2025-07-11T05:21:06.9554964Z           with mongodbatlas_advanced_cluster.test,
2025-07-11T05:21:06.9555721Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-11T05:21:06.9556442Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-11T05:21:06.9556915Z         
2025-07-11T05:21:07.0020233Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (6004.97s)
```

- 2025-07-12 PASS 36 minutes
- 2025-07-13 PASS 27 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 25 minutes
- 2025-07-16 PASS 23 minutes
- 2025-07-17 PASS 23 minutes
- 2025-07-18 PASS 33 minutes
- 2025-07-19 PASS 23 minutes
- 2025-07-20 PASS 20 minutes
- 2025-07-21 PASS 20 minutes
- 2025-07-22 PASS 20 minutes
- 2025-07-23
  - PASS 18 minutes
  - PASS 21 minutes
  - PASS 18 minutes
  - PASS 21 minutes
- 2025-07-24 PASS 29 minutes
- 2025-07-25 PASS 23 minutes
- 2025-07-26 PASS 31 minutes
- 2025-07-27 PASS 26 minutes
- 2025-07-28 PASS 32 minutes
- 2025-07-29 PASS 35 minutes
- 2025-07-30 PASS 26 minutes
- 2025-07-31 PASS 49 minutes