# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL TIMEOUT
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 04:55](#error-2025-10-01t0455020000) |  | dev |  | 20.07s
[2025-10-30 00:28](#error-2025-10-30t0028180000) |  | dev | timeout | 17899.00s

## Timeline
- 2025-09-30 PASS 16 minutes
- 2025-10-01
  - PASS 21 minutes
  - PASS 18 minutes
  - FAIL 20 seconds

### Error 2025-10-01T04:55:02+00:00
```
2025-10-01T04:55:02.4693602Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-10-01T04:56:43.0208400Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-10-01T04:57:03.0241999Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-10-01T04:57:03.0244134Z     pre_check.go:32: Time before creating cluster: 2025-10-01T04:57:03.023955981Z, ProjectID: 68dcb4225b2d552e98f6de18, Cluster name: test-acc-tf-c-1478415897124172341
2025-10-01T04:57:03.6634496Z    test_name=TestAccClusterAdvancedCluster_unpausedToPaused test_terraform_path=/home/runner/work/_temp/88050b6a-d1f5-4f2f-bde9-462cc5b26331/terraform test_working_directory=/tmp/plugintest3589212329 test_step_number=1
2025-10-01T04:57:03.6635790Z     resource_test.go:235: Step 1/4 error: Error running apply: exit status 1
2025-10-01T04:57:03.6636168Z         
2025-10-01T04:57:03.6636535Z         Error: Error in create
2025-10-01T04:57:03.6636786Z         
2025-10-01T04:57:03.6637296Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T04:57:03.6637960Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T04:57:03.6638561Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T04:57:03.6639058Z         
2025-10-01T04:57:03.6639473Z         cluster name: test-acc-tf-c-1478415897124172341, API error details:
2025-10-01T04:57:03.6640160Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dcb4225b2d552e98f6de18/clusters
2025-10-01T04:57:03.6640686Z         POST: HTTP 403 Forbidden (Error code:
2025-10-01T04:57:03.6641181Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-01T04:57:03.6641757Z         Configuration. Contains selections that are unavailable due to your
2025-10-01T04:57:03.6642336Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-01T04:57:03.6642734Z         BadRequestDetail: 
2025-10-01T04:57:03.7115970Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (20.69s)
```

  - PASS 16 minutes
  - PASS 32 minutes
  - PASS 19 minutes
  - PASS 25 minutes
  - PASS 17 minutes
- 2025-10-02 PASS 29 minutes
- 2025-10-03 PASS 18 minutes
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
