# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 43) FAIL
Success rate: 97.73%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-26 00:27](#error-2025-09-26t0027140000) |  | dev | 10839.01s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 47 minutes
- 2025-09-24 PASS 46 minutes
- 2025-09-25 PASS 46 minutes
- 2025-09-26

### Error 2025-09-26T00:27:14+00:00
```
2025-09-26T00:27:14.4551619Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-26T00:28:51.0170020Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-26T03:28:59.2635543Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-26T03:28:59.2636476Z     resource_test.go:165: Step 1/3 error: Error running apply: exit status 1
2025-09-26T03:28:59.2637043Z         
2025-09-26T03:28:59.2637363Z         Error: Error in create
2025-09-26T03:28:59.2637756Z         
2025-09-26T03:28:59.2638189Z           with mongodbatlas_advanced_cluster.test,
2025-09-26T03:28:59.2639091Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-26T03:28:59.2639706Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-26T03:28:59.2640013Z         
2025-09-26T03:28:59.2640462Z         cluster=test-acc-tf-c-4211018845190498295 didn't reach desired state: IDLE,
2025-09-26T03:28:59.2640921Z         error: context deadline exceeded
2025-09-26T03:29:30.1254615Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10839.12s)
```

- 2025-09-27 PASS 40 minutes
- 2025-09-28 PASS 47 minutes
- 2025-09-29
  - PASS an hour
  - PASS 33 minutes
- 2025-09-30
  - PASS 40 minutes
  - PASS 35 minutes
  - PASS 38 minutes
  - PASS 36 minutes
  - PASS 31 minutes
- 2025-10-01
  - PASS 34 minutes
  - PASS 31 minutes
  - PASS an hour
  - PASS 46 minutes
  - PASS 51 minutes
  - PASS 36 minutes
  - PASS 34 minutes
  - PASS 31 minutes
- 2025-10-02 PASS 51 minutes
- 2025-10-03 PASS 40 minutes
- 2025-10-04 PASS 36 minutes
- 2025-10-05 PASS 34 minutes
- 2025-10-06 PASS 36 minutes
- 2025-10-07 PASS 45 minutes
- 2025-10-08 PASS 39 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 42 minutes
- 2025-10-11 PASS 42 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 45 minutes
- 2025-10-14 PASS 33 minutes
- 2025-10-15 PASS 35 minutes
- 2025-10-16 PASS an hour
- 2025-10-17 PASS 43 minutes
- 2025-10-18 PASS 34 minutes
- 2025-10-19 PASS 40 minutes
- 2025-10-20
  - PASS 46 minutes
  - PASS 37 minutes
- 2025-10-21 PASS 34 minutes
- 2025-10-22
  - PASS 44 minutes
  - PASS 36 minutes