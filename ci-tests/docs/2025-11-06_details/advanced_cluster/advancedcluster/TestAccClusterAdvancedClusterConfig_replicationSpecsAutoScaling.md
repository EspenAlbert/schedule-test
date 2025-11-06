# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 31) TIMEOUT
Success rate: 100.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028200000) |  | dev | timeout | 17899.00s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 2 hours
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 29 minutes
- 2025-10-11 PASS 29 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 29 minutes
- 2025-10-14 PASS 34 minutes
- 2025-10-15 PASS 26 minutes
- 2025-10-16 PASS 43 minutes
- 2025-10-17 PASS 30 minutes
- 2025-10-18 PASS 28 minutes
- 2025-10-19 PASS 25 minutes
- 2025-10-20
  - PASS 41 minutes
  - PASS 23 minutes
- 2025-10-21 PASS 23 minutes
- 2025-10-22
  - PASS 33 minutes
  - PASS 27 minutes
- 2025-10-23 PASS 52 minutes
- 2025-10-24 PASS an hour
- 2025-10-25 PASS 43 minutes
- 2025-10-26 PASS 24 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 27 minutes
- 2025-10-29 PASS 34 minutes
- 2025-10-30

### Error 2025-10-30T00:28:20+00:00
```
2025-10-30T00:28:20.8259672Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-10-30T00:29:52.4843608Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-10-30T00:30:12.4638077Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-10-30T00:30:12.4640354Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:12.463463581Z, ProjectID: 6902b122abf4374f32996ea1, Cluster name: test-acc-tf-c-7936247648180074126
2025-10-30T03:47:21.4033275Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-10-30T03:47:21.4034047Z     resource_test.go:441: Step 2/5 error: Error running apply: exit status 1
2025-10-30T03:47:21.4034476Z         
2025-10-30T03:47:21.4034798Z         Error: Error in update
2025-10-30T03:47:21.4035118Z         
2025-10-30T03:47:21.4035480Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:47:21.4036292Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:47:21.4037139Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:47:21.4037573Z         
2025-10-30T03:47:21.4038084Z         cluster=test-acc-tf-c-7936247648180074126 didn't reach desired state: IDLE,
2025-10-30T03:47:21.4038772Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:47:21.4039198Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:47:54.0984260Z    test_working_directory=/tmp/plugintest815472381
2025-10-30T05:28:11.5673981Z 		TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (4h58m19s)
2025-10-30T05:28:11.5675579Z 		TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (4h58m19s)
2025-10-30T05:28:11.5677105Z 		TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (4h58m19s)
```

- 2025-10-31 PASS 29 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 26 minutes
- 2025-11-03 PASS 28 minutes
- 2025-11-04 PASS 26 minutes
- 2025-11-05
  - PASS 29 minutes
  - PASS 28 minutes
- 2025-11-06 PASS 31 minutes