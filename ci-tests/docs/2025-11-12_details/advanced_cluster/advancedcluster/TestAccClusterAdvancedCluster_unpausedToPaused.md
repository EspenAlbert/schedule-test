# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 41) TIMEOUT
Success rate: 100.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028180000) |  | dev | timeout | 17899.00s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 24 minutes
- 2025-10-05 PASS 18 minutes
- 2025-10-06 PASS 19 minutes
- 2025-10-07 PASS 18 minutes
- 2025-10-08 PASS 21 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 23 minutes
- 2025-10-11 PASS 21 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 22 minutes
- 2025-10-14 PASS 20 minutes
- 2025-10-15 PASS 20 minutes
- 2025-10-16 PASS 30 minutes
- 2025-10-17 PASS 23 minutes
- 2025-10-18 PASS 18 minutes
- 2025-10-19 PASS 21 minutes
- 2025-10-20
  - PASS 53 minutes
  - PASS 17 minutes
- 2025-10-21 PASS 17 minutes
- 2025-10-22
  - PASS 26 minutes
  - PASS 19 minutes
- 2025-10-23 PASS 29 minutes
- 2025-10-24 PASS 59 minutes
- 2025-10-25 PASS 38 minutes
- 2025-10-26 PASS 16 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 19 minutes
- 2025-10-29 PASS 28 minutes
- 2025-10-30

### Error 2025-10-30T00:28:18+00:00
```
2025-10-30T00:28:18.3898216Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-10-30T00:29:52.4848305Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-10-30T00:30:37.4708337Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-10-30T00:30:37.4710019Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:37.468604306Z, ProjectID: 6902b11de2dc7470847b8fef, Cluster name: test-acc-tf-c-5453186812358773059
2025-10-30T03:47:54.0984914Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-10-30T03:47:54.0985792Z     resource_test.go:234: Step 2/4 error: Error running apply: exit status 1
2025-10-30T03:47:54.0986183Z         
2025-10-30T03:47:54.0986477Z         Error: Error in pause after update
2025-10-30T03:47:54.0986778Z         
2025-10-30T03:47:54.0987099Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:47:54.0988163Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:47:54.0988888Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:47:54.0989355Z         
2025-10-30T03:47:54.0989804Z         cluster=test-acc-tf-c-5453186812358773059 didn't reach desired state: IDLE,
2025-10-30T03:47:54.0990403Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:47:54.0990819Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:48:26.2851491Z    test_name=TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-30T05:28:11.5681959Z 		TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (4h58m19s)
2025-10-30T05:28:11.5683140Z 		TestAccClusterAdvancedCluster_replicaSetAWSProvider (4h58m19s)
2025-10-30T05:28:11.5683807Z 		TestAccClusterAdvancedCluster_unpausedToPaused (4h58m19s)
```

- 2025-10-31 PASS 23 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 17 minutes
- 2025-11-03 PASS 25 minutes
- 2025-11-04 PASS 19 minutes
- 2025-11-05
  - PASS 18 minutes
  - PASS 18 minutes
- 2025-11-06 PASS 24 minutes
- 2025-11-07 PASS 20 minutes
- 2025-11-08 PASS 46 minutes
- 2025-11-09 PASS 21 minutes
- 2025-11-10 PASS 18 minutes
- 2025-11-11 PASS 18 minutes
- 2025-11-12 PASS 22 minutes