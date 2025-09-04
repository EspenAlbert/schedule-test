# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_singleShardedMultiCloud Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030410000) |  | dev | timeout | 10802.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 51 minutes
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 57 minutes
- 2025-08-09 PASS 46 minutes
- 2025-08-10 PASS 53 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 55 minutes
  - PASS 43 minutes
- 2025-08-13 PASS 43 minutes
- 2025-08-14 PASS 45 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS an hour
- 2025-08-18 PASS 43 minutes
- 2025-08-19 PASS 46 minutes
- 2025-08-20
  - PASS 45 minutes
  - PASS 49 minutes
- 2025-08-21 PASS 43 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 58 minutes
- 2025-08-24 PASS 39 minutes
- 2025-08-25 PASS 57 minutes
- 2025-08-26 PASS an hour
- 2025-08-27 PASS 51 minutes
- 2025-08-28 PASS 45 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 47 minutes
- 2025-08-31 PASS 44 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T00:30:41+00:00
```
2025-09-01T00:30:41.7232779Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-09-01T00:30:44.5147211Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-09-01T03:30:47.2471103Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-09-01T03:30:47.2472507Z     resource_advanced_cluster_test.go:281: Step 1/3 error: Error running apply: exit status 1
2025-09-01T03:30:47.2473294Z         
2025-09-01T03:30:47.2474537Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:30:47.2475098Z         
2025-09-01T03:30:47.2475718Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T03:30:47.2476501Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T03:30:47.2477407Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T03:30:47.2477732Z         
2025-09-01T03:30:47.2917573Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (10802.79s)
```

  - PASS 57 minutes
  - PASS an hour
  - PASS 49 minutes
  - PASS 51 minutes
  - PASS 52 minutes
  - PASS 43 minutes
  - PASS 45 minutes
- 2025-09-02 PASS 47 minutes
- 2025-09-03 PASS an hour
- 2025-09-04 PASS 54 minutes