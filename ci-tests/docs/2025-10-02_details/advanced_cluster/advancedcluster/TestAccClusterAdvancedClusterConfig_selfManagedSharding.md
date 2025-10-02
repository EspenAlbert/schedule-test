# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedSharding Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-02 00:26](#error-2025-10-02t0026200000) |  | dev | 10804.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 34 minutes
- 2025-09-04 PASS 28 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 26 minutes
- 2025-09-07 PASS 18 minutes
- 2025-09-08
  - PASS 31 minutes
  - PASS 20 minutes
  - PASS 28 minutes
- 2025-09-09 PASS 28 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 26 minutes
- 2025-09-20 PASS 20 minutes
- 2025-09-21 PASS 15 minutes
- 2025-09-22 PASS 15 minutes
- 2025-09-23 PASS 16 minutes
- 2025-09-24 PASS 15 minutes
- 2025-09-25 PASS 18 minutes
- 2025-09-26 PASS 30 minutes
- 2025-09-27 PASS 27 minutes
- 2025-09-28 PASS 26 minutes
- 2025-09-29
  - PASS 33 minutes
  - PASS 15 minutes
- 2025-09-30
  - PASS 19 minutes
  - PASS 14 minutes
  - PASS 16 minutes
  - PASS 19 minutes
  - PASS 17 minutes
- 2025-10-01
  - PASS 20 minutes
  - PASS 25 minutes
  - PASS an hour
  - PASS 37 minutes
  - PASS 35 minutes
  - PASS 16 minutes
  - PASS 31 minutes
  - PASS 16 minutes
- 2025-10-02

### Error 2025-10-02T00:26:20+00:00
```
2025-10-02T00:26:20.7390534Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-02T00:28:04.4631704Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-02T03:28:08.8952274Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-02T03:28:08.8953190Z     resource_test.go:636: Step 1/3 error: Error running apply: exit status 1
2025-10-02T03:28:08.8953668Z         
2025-10-02T03:28:08.8953991Z         Error: Error in create
2025-10-02T03:28:08.8954278Z         
2025-10-02T03:28:08.8954600Z           with mongodbatlas_advanced_cluster.test,
2025-10-02T03:28:08.8955331Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-02T03:28:08.8956014Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-02T03:28:08.8956347Z         
2025-10-02T03:28:08.8957043Z         cluster=test-acc-tf-c-6760426032199382065 didn't reach desired state: IDLE,
2025-10-02T03:28:08.8957615Z         error: context deadline exceeded
2025-10-02T03:28:08.9427652Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (10804.48s)
```
