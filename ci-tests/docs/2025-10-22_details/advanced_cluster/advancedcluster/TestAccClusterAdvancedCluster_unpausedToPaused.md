# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 42) FAIL(x 2)
Success rate: 95.45%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-29 00:29](#error-2025-09-29t0029020000) | CLUSTER_NOT_FOUND /api/atlas/v2/groups/68d9d2ca97534351000f8fd5/clusters | dev | 1256.08s
[2025-10-01 04:55](#error-2025-10-01t0455020000) |  | dev | 20.07s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 20 minutes
- 2025-09-24 PASS 21 minutes
- 2025-09-25 PASS 21 minutes
- 2025-09-26 PASS 20 minutes
- 2025-09-27 PASS 22 minutes
- 2025-09-28 PASS 21 minutes
- 2025-09-29
  - FAIL 20 minutes

### Error 2025-09-29T00:29:02+00:00
```
2025-09-29T00:29:02.0864486Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-09-29T00:30:21.7757770Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-09-29T00:31:01.7085923Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-09-29T00:31:01.7088076Z     pre_check.go:32: Time before creating cluster: 2025-09-29T00:31:01.708285376Z, ProjectID: 68d9d2ca97534351000f8fd5, Cluster name: test-acc-tf-c-8641997345594355445
2025-09-29T00:48:15.9015869Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-09-29T00:48:15.9016839Z     resource_test.go:235: Step 2/4 error: Error running post-apply non-refresh plan: exit status 1
2025-09-29T00:48:15.9017540Z         
2025-09-29T00:48:15.9018088Z         Error: error reading  advanced cluster list
2025-09-29T00:48:15.9018582Z         
2025-09-29T00:48:15.9019200Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-29T00:48:15.9020331Z           on terraform_plugin_test.tf line 41, in data "mongodbatlas_advanced_clusters" "test":
2025-09-29T00:48:15.9021305Z           41: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-29T00:48:15.9021789Z         
2025-09-29T00:48:15.9022297Z         project ID 68d9d2ca97534351000f8fd5. Error
2025-09-29T00:48:15.9023333Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d9d2ca97534351000f8fd5/clusters
2025-09-29T00:48:15.9024681Z         GET: HTTP 404 Not Found (Error code: "CLUSTER_NOT_FOUND") Detail: No cluster
2025-09-29T00:48:15.9025585Z         named test-acc-tf-c-7486524645518276399 exists in group
2025-09-29T00:48:15.9026385Z         68d9d2ca97534351000f8fd5. Reason: Not Found. Params:
2025-09-29T00:48:15.9027231Z         [test-acc-tf-c-7486524645518276399 68d9d2ca97534351000f8fd5],
2025-09-29T00:48:15.9027860Z         BadRequestDetail: 
2025-09-29T00:51:18.4613327Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (1256.75s)
```

  - PASS 17 minutes
- 2025-09-30
  - PASS 24 minutes
  - PASS 15 minutes
  - PASS 21 minutes
  - PASS 19 minutes
  - PASS 16 minutes
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