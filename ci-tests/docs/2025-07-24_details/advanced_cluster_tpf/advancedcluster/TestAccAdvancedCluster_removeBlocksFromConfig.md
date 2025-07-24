# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-19 03:55](#error-2025-07-19t0355490000) |  | dev | timeout | 10809.07s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 43 minutes
- 2025-06-26
  - PASS 41 minutes
  - PASS 42 minutes
- 2025-06-27 PASS 41 minutes
- 2025-06-28 PASS 42 minutes
- 2025-06-29 PASS 45 minutes
- 2025-06-30 PASS 38 minutes
- 2025-07-01
  - PASS 47 minutes
  - PASS 41 minutes
  - PASS 47 minutes
  - PASS 41 minutes
  - PASS an hour
- 2025-07-02 PASS 43 minutes
- 2025-07-03 PASS 47 minutes
- 2025-07-04 PASS 46 minutes
- 2025-07-05 PASS 42 minutes
- 2025-07-06 PASS 43 minutes
- 2025-07-07 PASS 40 minutes
- 2025-07-08 PASS an hour
- 2025-07-09 PASS 40 minutes
- 2025-07-10
  - PASS 42 minutes
  - PASS 43 minutes
- 2025-07-11: MISSING
- 2025-07-12 PASS 47 minutes
- 2025-07-13 PASS 49 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 45 minutes
- 2025-07-16 PASS 41 minutes
- 2025-07-17 PASS 43 minutes
- 2025-07-18 PASS 43 minutes
- 2025-07-19

### Error 2025-07-19T03:55:49+00:00
```
2025-07-19T03:55:49.0005974Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-07-19T03:55:49.0020105Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-07-19T03:55:49.0180336Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-07-19T03:55:49.0180924Z     resource_advanced_cluster_test.go:1392: Step 1/4 error: Error running apply: exit status 1
2025-07-19T03:55:49.0181358Z         
2025-07-19T03:55:49.0181610Z         Error: Error in create
2025-07-19T03:55:49.0181858Z         
2025-07-19T03:55:49.0182178Z           with mongodbatlas_advanced_cluster.test,
2025-07-19T03:55:49.0182995Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-19T03:55:49.0183716Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-19T03:55:49.0184033Z         
2025-07-19T03:55:49.0184616Z         cluster=test-acc-tf-c-9161806768966409793 didn't reach desired state: IDLE,
2025-07-19T03:55:49.0185362Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-07-19T03:55:49.0185814Z         'CREATING', timeout: 3h0m0s)
2025-07-19T03:55:49.0186289Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10809.72s)
```

- 2025-07-20 PASS an hour
- 2025-07-21 PASS 43 minutes
- 2025-07-22 PASS 41 minutes
- 2025-07-23
  - PASS 42 minutes
  - PASS 49 minutes
  - PASS 48 minutes
  - PASS 54 minutes
- 2025-07-24 PASS 46 minutes