# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_biConnectorConfig Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 41) TIMEOUT
Success rate: 100.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028220000) |  | dev | timeout | 17899.00s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 22 minutes
- 2025-10-05 PASS 16 minutes
- 2025-10-06 PASS 17 minutes
- 2025-10-07 PASS 21 minutes
- 2025-10-08 PASS 22 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 24 minutes
- 2025-10-11 PASS 19 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 30 minutes
- 2025-10-14 PASS 18 minutes
- 2025-10-15 PASS 19 minutes
- 2025-10-16 PASS 33 minutes
- 2025-10-17 PASS 24 minutes
- 2025-10-18 PASS 19 minutes
- 2025-10-19 PASS 20 minutes
- 2025-10-20
  - PASS 31 minutes
  - PASS 14 minutes
- 2025-10-21 PASS 17 minutes
- 2025-10-22
  - PASS 26 minutes
  - PASS 16 minutes
- 2025-10-23 PASS 31 minutes
- 2025-10-24 PASS 18 minutes
- 2025-10-25 PASS 21 minutes
- 2025-10-26 PASS 17 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 20 minutes
- 2025-10-29 PASS 28 minutes
- 2025-10-30

### Error 2025-10-30T00:28:22+00:00
```
2025-10-30T00:28:22.2622653Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-10-30T00:29:52.4634169Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-10-30T00:29:57.4615923Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-10-30T00:29:57.4617568Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:29:57.461394937Z, ProjectID: 6902b124abf4374f3299781b, Cluster name: test-acc-tf-c-8380702737292064106
2025-10-30T00:29:59.2444572Z    test_name=TestAccClusterAdvancedCluster_withLabelIgnored
2025-10-30T03:46:40.9435322Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-10-30T03:46:40.9436087Z     resource_test.go:862: Step 2/3 error: Error running apply: exit status 1
2025-10-30T03:46:40.9436463Z         
2025-10-30T03:46:40.9436719Z         Error: Error in update
2025-10-30T03:46:40.9436968Z         
2025-10-30T03:46:40.9437353Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:46:40.9438041Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:46:40.9438725Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:46:40.9439122Z         
2025-10-30T03:46:40.9439587Z         cluster=test-acc-tf-c-8380702737292064106 didn't reach desired state: IDLE,
2025-10-30T03:46:40.9440487Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:46:40.9440995Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:46:41.7279160Z    test_step_number=2
2025-10-30T05:28:11.5677105Z 		TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (4h58m19s)
2025-10-30T05:28:11.5678726Z 		TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (4h58m19s)
2025-10-30T05:28:11.5680097Z 		TestAccClusterAdvancedCluster_biConnectorConfig (4h58m19s)
```

- 2025-10-31 PASS 23 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 16 minutes
- 2025-11-03 PASS 21 minutes
- 2025-11-04 PASS 22 minutes
- 2025-11-05
  - PASS 21 minutes
  - PASS 17 minutes
- 2025-11-06 PASS 26 minutes
- 2025-11-07 PASS 21 minutes
- 2025-11-08 PASS 45 minutes
- 2025-11-09 PASS 15 minutes
- 2025-11-10 PASS 19 minutes
- 2025-11-11 PASS 19 minutes
- 2025-11-12 PASS 20 minutes