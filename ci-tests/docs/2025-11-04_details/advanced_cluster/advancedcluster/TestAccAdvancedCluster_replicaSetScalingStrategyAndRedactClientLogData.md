# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 30) TIMEOUT
Success rate: 100.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028220000) |  | dev | timeout | 17899.00s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 30 minutes
- 2025-10-07 PASS 33 minutes
- 2025-10-08 PASS 40 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 34 minutes
- 2025-10-11 PASS 35 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 38 minutes
- 2025-10-14 PASS 34 minutes
- 2025-10-15 PASS 32 minutes
- 2025-10-16 PASS 39 minutes
- 2025-10-17 PASS 30 minutes
- 2025-10-18 PASS 30 minutes
- 2025-10-19 PASS 30 minutes
- 2025-10-20
  - PASS 39 minutes
  - PASS 30 minutes
- 2025-10-21 PASS 31 minutes
- 2025-10-22
  - PASS 33 minutes
  - PASS 28 minutes
- 2025-10-23 PASS 46 minutes
- 2025-10-24 PASS 46 minutes
- 2025-10-25 PASS 36 minutes
- 2025-10-26 PASS 31 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 32 minutes
- 2025-10-29 PASS 34 minutes
- 2025-10-30

### Error 2025-10-30T00:28:22+00:00
```
2025-10-30T00:28:22.2620624Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-10-30T00:29:52.4753853Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-10-30T03:44:40.2845499Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-10-30T03:44:40.2846593Z     resource_test.go:803: Step 2/5 error: Error running apply: exit status 1
2025-10-30T03:44:40.2847160Z         
2025-10-30T03:44:40.2847605Z         Error: Error in update
2025-10-30T03:44:40.2848016Z         
2025-10-30T03:44:40.2848622Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:44:40.2849508Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:44:40.2850126Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:44:40.2850453Z         
2025-10-30T03:44:40.2850908Z         cluster=test-acc-tf-c-4627852114248743158 didn't reach desired state: IDLE,
2025-10-30T03:44:40.2851576Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:44:40.2852467Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:44:40.8985515Z    test_name=TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset test_terraform_path=/home/runner/work/_temp/393c930d-038d-4707-96f8-6a139002a190/terraform test_working_directory=/tmp/plugintest4284930658
2025-10-30T05:28:11.5671202Z 	running tests:
2025-10-30T05:28:11.5672290Z 		TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (4h58m19s)
2025-10-30T05:28:11.5673981Z 		TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (4h58m19s)
```

- 2025-10-31 PASS 33 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 30 minutes
- 2025-11-03 PASS 30 minutes
- 2025-11-04 PASS 34 minutes