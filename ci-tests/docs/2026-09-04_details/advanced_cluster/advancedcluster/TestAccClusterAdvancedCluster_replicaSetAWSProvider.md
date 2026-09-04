# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 10) FAIL
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-31 00:47](#error-2026-08-31t0047240000) |  | dev | timeout | 12642.01s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS an hour
- 2026-08-07 PASS an hour
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28 PASS an hour
- 2026-08-29 PASS an hour
- 2026-08-30: MISSING
- 2026-08-31

### Error 2026-08-31T00:47:24+00:00
```
2026-08-31T00:47:24.4337683Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-08-31T00:49:44.7551408Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-08-31T00:50:33.9884187Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-08-31T00:50:33.9885898Z     pre_check.go:46: Time before creating cluster: 2026-08-31T00:50:33.988101192Z, ProjectID: 6a94cf190cc71681c0bf3d36, Cluster name: test-acc-tf-c-9134531868113712653
2026-08-31T04:17:24.2452021Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-08-31T04:17:24.2452750Z     resource_test.go:77: Step 2/4 error: Error running apply: exit status 1
2026-08-31T04:17:24.2453400Z         
2026-08-31T04:17:24.2453698Z         Error: Error in update
2026-08-31T04:17:24.2453988Z         
2026-08-31T04:17:24.2454363Z           with mongodbatlas_advanced_cluster.test,
2026-08-31T04:17:24.2455102Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-31T04:17:24.2455773Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-31T04:17:24.2456131Z         
2026-08-31T04:17:24.2456636Z         cluster=test-acc-tf-c-9134531868113712653 didn't reach desired state: IDLE,
2026-08-31T04:17:24.2457504Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-08-31T04:17:24.2457994Z         'UPDATING', timeout: 3h0m0s)
2026-08-31T04:20:26.8548330Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (12642.10s)
```

- 2026-09-01 PASS 2 hours
- 2026-09-02 PASS an hour
- 2026-09-03
  - PASS an hour
  - PASS an hour
- 2026-09-04 PASS an hour

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS an hour
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
