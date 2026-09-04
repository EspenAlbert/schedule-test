# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 8) FAIL(x 2) TIMEOUT
Success rate: 72.73%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-28 03:09](#error-2026-08-28t0309060000) |  | dev | timeout | 13350.10s
[2026-09-01 00:50](#error-2026-09-01t0050170000) |  | dev | timeout | 16358.08s
[2026-09-03 06:31](#error-2026-09-03t0631590000) |  | dev |  | 17901.00s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 45 minutes
- 2026-08-07 PASS 50 minutes
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
- 2026-08-28

### Error 2026-08-28T03:09:06+00:00
```
2026-08-28T03:09:06.4473245Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-08-28T03:10:39.4920778Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-08-28T06:42:18.8942912Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-08-28T06:42:18.8943749Z     resource_test.go:153: Step 2/3 error: Error running apply: exit status 1
2026-08-28T06:42:18.8944417Z         
2026-08-28T06:42:18.8944770Z         Error: Error in create
2026-08-28T06:42:18.8945124Z         
2026-08-28T06:42:18.8945780Z           with mongodbatlas_advanced_cluster.test,
2026-08-28T06:42:18.8946943Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-28T06:42:18.8947637Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-28T06:42:18.8947997Z         
2026-08-28T06:42:18.8948811Z         cluster=test-acc-tf-c-6458958872710011478 didn't reach desired state: IDLE,
2026-08-28T06:42:18.8949341Z         error: context deadline exceeded
2026-08-28T06:53:10.4420279Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (13350.97s)
```

- 2026-08-29 PASS 3 hours
- 2026-08-30: MISSING
- 2026-08-31 PASS an hour
- 2026-09-01

### Error 2026-09-01T00:50:17+00:00
```
2026-09-01T00:50:17.6543040Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-09-01T00:51:41.3879271Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-09-01T05:20:26.4578115Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-09-01T05:20:26.4578907Z     resource_test.go:153: Step 2/3 error: Error running apply: exit status 1
2026-09-01T05:20:26.4579352Z         
2026-09-01T05:20:26.4579962Z         Error: Error in create
2026-09-01T05:20:26.4580417Z         
2026-09-01T05:20:26.4580834Z           with mongodbatlas_advanced_cluster.test,
2026-09-01T05:20:26.4581572Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-01T05:20:26.4582250Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-01T05:20:26.4582614Z         
2026-09-01T05:20:26.4583122Z         cluster=test-acc-tf-c-818525045656877780 didn't reach desired state: IDLE,
2026-09-01T05:20:26.4583634Z         error: context deadline exceeded
2026-09-01T05:24:19.7334218Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (16358.81s)
```

- 2026-09-02 PASS 2 hours
- 2026-09-03
  - PASS an hour
  - TIMEOUT 4 hours

### Error 2026-09-03T06:31:59+00:00
```
2026-09-03T06:31:59.4672135Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-09-03T06:33:28.0704588Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-09-03T11:31:48.8331933Z panic: test timed out after 5h0m0s
2026-09-03T11:31:48.8358040Z 	running tests:
2026-09-03T11:31:48.8358659Z 		TestAccClusterAdvancedCluster_replicaSetMultiCloud (4h58m21s)
```

- 2026-09-04 PASS 2 hours

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
- 2026-08-30 PASS 42 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
