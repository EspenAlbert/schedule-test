# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-22 08:27](#error-2025-10-22t0827280000) |  | qa |  | 10.08s
[2025-10-30 00:28](#error-2025-10-30t0028180000) |  | dev | timeout | 11571.02s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 18 minutes
- 2025-10-16 PASS 29 minutes
- 2025-10-17 PASS 18 minutes
- 2025-10-18 PASS 15 minutes
- 2025-10-19 PASS 16 minutes
- 2025-10-20
  - PASS 52 minutes
  - PASS 13 minutes
- 2025-10-21 PASS 15 minutes
- 2025-10-22
  - PASS 23 minutes
  - FAIL 10 seconds

### Error 2025-10-22T08:27:28+00:00
```
2025-10-22T08:27:28.3614530Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-22T08:29:11.0321147Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-22T08:29:21.0327380Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-22T08:29:21.0329444Z     pre_check.go:36: Time before creating cluster: 2025-10-22T08:29:21.032405524Z, ProjectID: 68f8956dab288813b27fd674, Cluster name: test-acc-tf-c-6804064570412143892
2025-10-22T08:29:21.7757275Z    test_terraform_path=/home/runner/work/_temp/3c69cffc-8930-4a85-9b1e-bd78d3cc51dc/terraform test_working_directory=/tmp/plugintest154942978 test_step_number=2 test_name=TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-22T08:29:21.7758633Z     resource_test.go:308: Step 2/3 error: Error running apply: exit status 1
2025-10-22T08:29:21.7759060Z         
2025-10-22T08:29:21.7759330Z         Error: Error in create
2025-10-22T08:29:21.7759651Z         
2025-10-22T08:29:21.7759986Z           with mongodbatlas_advanced_cluster.test,
2025-10-22T08:29:21.7760627Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-22T08:29:21.7761215Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-22T08:29:21.7761530Z         
2025-10-22T08:29:21.7762352Z         cluster name: test-acc-tf-c-6804064570412143892, API error details:
2025-10-22T08:29:21.7763037Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f8956dab288813b27fd674/clusters
2025-10-22T08:29:21.7763549Z         POST: HTTP 403 Forbidden (Error code:
2025-10-22T08:29:21.7764044Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-22T08:29:21.7764635Z         Configuration. Contains selections that are unavailable due to your
2025-10-22T08:29:21.7765203Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-22T08:29:21.7765594Z         BadRequestDetail: 
2025-10-22T08:29:21.8241449Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10.79s)
```

- 2025-10-23 PASS 25 minutes
- 2025-10-24 PASS 44 minutes
- 2025-10-25 PASS 37 minutes
- 2025-10-26 PASS 15 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 16 minutes
- 2025-10-29 PASS 23 minutes
- 2025-10-30

### Error 2025-10-30T00:28:18+00:00
```
2025-10-30T00:28:18.3900963Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-30T00:29:52.4846448Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-30T00:30:27.4672141Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-30T00:30:27.4673963Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:27.466938878Z, ProjectID: 6902b11de2dc7470847b8fef, Cluster name: test-acc-tf-c-1853270400503789627
2025-10-30T03:42:43.7097019Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-30T03:42:43.7097803Z     resource_test.go:308: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:42:43.7098289Z         
2025-10-30T03:42:43.7098558Z         Error: Error in delete
2025-10-30T03:42:43.7098814Z         
2025-10-30T03:42:43.7099254Z         cluster=test-acc-tf-c-1853270400503789627 didn't reach desired state:
2025-10-30T03:42:43.7099913Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T03:42:43.7100392Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:42:43.7100870Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (11571.23s)
```

- 2025-10-31 PASS 21 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 15 minutes
- 2025-11-03 PASS 15 minutes
- 2025-11-04 PASS 16 minutes
- 2025-11-05
  - PASS 17 minutes
  - PASS 16 minutes
- 2025-11-06 PASS 22 minutes
- 2025-11-07 PASS 18 minutes
- 2025-11-08 PASS 46 minutes
- 2025-11-09 PASS 14 minutes
- 2025-11-10 PASS 18 minutes
- 2025-11-11 PASS 15 minutes
- 2025-11-12 PASS 16 minutes
- 2025-11-13
  - PASS 30 minutes
  - PASS 17 minutes