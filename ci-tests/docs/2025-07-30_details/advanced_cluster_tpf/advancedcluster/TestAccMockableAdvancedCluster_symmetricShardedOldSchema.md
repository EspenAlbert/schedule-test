# advanced_cluster_tpf/advancedcluster/TestAccMockableAdvancedCluster_symmetricShardedOldSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-17 03:58](#error-2025-07-17t0358430000) |  | dev | timeout | 10808.02s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 29 minutes
  - PASS 27 minutes
  - PASS 28 minutes
  - PASS 27 minutes
  - PASS 28 minutes
- 2025-07-02 PASS 27 minutes
- 2025-07-03 PASS 28 minutes
- 2025-07-04 PASS 31 minutes
- 2025-07-05 PASS 26 minutes
- 2025-07-06 PASS 24 minutes
- 2025-07-07 PASS 28 minutes
- 2025-07-08 PASS 28 minutes
- 2025-07-09 PASS 27 minutes
- 2025-07-10
  - PASS 26 minutes
  - PASS 27 minutes
- 2025-07-11: MISSING
- 2025-07-12 PASS 33 minutes
- 2025-07-13 PASS 35 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 29 minutes
- 2025-07-16 PASS 29 minutes
- 2025-07-17

### Error 2025-07-17T03:58:43+00:00
```
2025-07-17T03:58:43.1681540Z === RUN   TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-07-17T03:58:43.1682132Z     resource_advanced_cluster_test.go:786: Adding variable groupId=68784a34de3dfe20a0f4db14
2025-07-17T03:58:43.1682821Z     resource_advanced_cluster_test.go:786: Adding variable clusterName=test-acc-tf-c-419918203321194142
2025-07-17T03:58:43.1716666Z === CONT  TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-07-17T03:58:43.1869134Z === NAME  TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-07-17T03:58:43.1869742Z     resource_advanced_cluster_test.go:786: Step 1/3 error: Error running apply: exit status 1
2025-07-17T03:58:43.1870423Z         
2025-07-17T03:58:43.1870686Z         Error: Error in create (legacy)
2025-07-17T03:58:43.1870947Z         
2025-07-17T03:58:43.1871248Z           with mongodbatlas_advanced_cluster.test,
2025-07-17T03:58:43.1871860Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-17T03:58:43.1872423Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-17T03:58:43.1872718Z         
2025-07-17T03:58:43.1873136Z         cluster=test-acc-tf-c-419918203321194142 didn't reach desired state: IDLE,
2025-07-17T03:58:43.1873718Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-07-17T03:58:43.1874267Z         'CREATING', timeout: 3h0m0s)
2025-07-17T03:58:43.1874663Z --- FAIL: TestAccMockableAdvancedCluster_symmetricShardedOldSchema (10808.23s)
```

- 2025-07-18 PASS 33 minutes
- 2025-07-19 PASS 29 minutes
- 2025-07-20 PASS 37 minutes
- 2025-07-21 PASS 27 minutes
- 2025-07-22 PASS 27 minutes
- 2025-07-23
  - PASS 26 minutes
  - PASS 33 minutes
  - PASS 37 minutes
  - PASS 29 minutes
- 2025-07-24 PASS 29 minutes
- 2025-07-25 PASS 29 minutes
- 2025-07-26 PASS 37 minutes
- 2025-07-27 PASS 33 minutes
- 2025-07-28 PASS 33 minutes
- 2025-07-29 PASS 32 minutes
- 2025-07-30 PASS 31 minutes