# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL TIMEOUT
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 00:28](#error-2025-10-01t0028310000) |  | dev |  | 25.07s
[2025-10-30 00:28](#error-2025-10-30t0028200000) |  | dev | timeout | 17899.00s

## Timeline
- 2025-09-30 PASS 24 minutes
- 2025-10-01
  - FAIL 25 seconds

### Error 2025-10-01T00:28:31+00:00
```
2025-10-01T00:28:31.7122794Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-10-01T00:30:01.0302081Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-10-01T00:30:26.0266391Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-10-01T00:30:26.0268220Z     pre_check.go:32: Time before creating cluster: 2025-10-01T00:30:26.026353051Z, ProjectID: 68dc75ac4c39c348073fbfc1, Cluster name: test-acc-tf-c-4462301416773018234
2025-10-01T00:30:26.6466652Z    test_name=TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling test_terraform_path=/home/runner/work/_temp/8ae01924-27fb-49e9-93af-cb96967eb216/terraform
2025-10-01T00:30:26.6467813Z     resource_test.go:451: Step 1/5 error: Error running apply: exit status 1
2025-10-01T00:30:26.6468243Z         
2025-10-01T00:30:26.6468487Z         Error: Error in create
2025-10-01T00:30:26.6468947Z         
2025-10-01T00:30:26.6469339Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T00:30:26.6470025Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T00:30:26.6470639Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T00:30:26.6470938Z         
2025-10-01T00:30:26.6471346Z         cluster name: test-acc-tf-c-4462301416773018234, API error details:
2025-10-01T00:30:26.6472020Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dc75ac4c39c348073fbfc1/clusters
2025-10-01T00:30:26.6472534Z         POST: HTTP 403 Forbidden (Error code:
2025-10-01T00:30:26.6473027Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-01T00:30:26.6473610Z         Configuration. Contains selections that are unavailable due to your
2025-10-01T00:30:26.6474184Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-01T00:30:26.6474841Z         BadRequestDetail: 
2025-10-01T00:30:26.6892224Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (25.66s)
```

  - PASS 21 minutes
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 43 minutes
  - PASS 24 minutes
  - PASS 42 minutes
  - PASS 23 minutes
- 2025-10-02 PASS 35 minutes
- 2025-10-03 PASS 24 minutes
- 2025-10-04 PASS 37 minutes
- 2025-10-05 PASS 23 minutes
- 2025-10-06 PASS 23 minutes
- 2025-10-07 PASS 2 hours
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
