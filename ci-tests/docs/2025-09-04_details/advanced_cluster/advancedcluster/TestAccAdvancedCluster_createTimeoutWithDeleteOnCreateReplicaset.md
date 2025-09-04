# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-07 00:32](#error-2025-08-07t0032170000) |  | dev | unknown | 10.00s
[2025-08-17 00:31](#error-2025-08-17t0031520000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68a122f6aafa9a76ca8bdd41/clusters | qa | out_of_capacity | 5.06s
[2025-09-01 00:30](#error-2025-09-01t0030440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558470000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 19 minutes
- 2025-08-07

### Error 2025-08-07T00:32:17+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-08-07T00:32:17.517000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset',confidence=1.0,ts_when='28 days ago')

```
2025-08-07T00:32:17.5172006Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-08-07T00:35:02.1505509Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-08-07T00:35:12.1099004Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-08-07T00:35:12.1100147Z     resource_advanced_cluster_test.go:1422: cluster test-acc-tf-c-595100708333626854 not found in 6893f40f3ccac962b5687354
2025-08-07T00:35:12.1553404Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (10.01s)
```

- 2025-08-08 PASS 26 minutes
- 2025-08-09 PASS 24 minutes
- 2025-08-10 PASS 27 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 22 minutes
  - PASS 23 minutes
- 2025-08-13 PASS 24 minutes
- 2025-08-14 PASS 32 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 52 minutes
- 2025-08-17

### Error 2025-08-17T00:31:52+00:00
```
2025-08-17T00:31:52.9327182Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-08-17T00:32:50.9020175Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-08-17T00:32:56.1374579Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-08-17T00:32:56.1376182Z     resource_advanced_cluster_test.go:1433: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2025-08-17T00:32:56.1377614Z         
2025-08-17T00:32:56.1380935Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122f6aafa9a76ca8bdd41/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2025-08-17T00:32:56.1383255Z         
2025-08-17T00:32:56.1383932Z           with mongodbatlas_advanced_cluster.test,
2025-08-17T00:32:56.1385379Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-17T00:32:56.1386579Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-17T00:32:56.1395108Z         
2025-08-17T00:32:56.1506188Z    test_terraform_path=/home/runner/work/_temp/91465438-2974-45d4-8db3-efd65e97eea8/terraform test_working_directory=/tmp/plugintest3172159978 test_step_number=1 test_name=TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-08-17T00:32:56.4903634Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (5.59s)
```

- 2025-08-18 PASS 17 minutes
- 2025-08-19 PASS 20 minutes
- 2025-08-20
  - PASS 22 minutes
  - PASS 23 minutes
- 2025-08-21 PASS 21 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 26 minutes
- 2025-08-24 PASS 46 minutes
- 2025-08-25 PASS 17 minutes
- 2025-08-26 PASS 22 minutes
- 2025-08-27 PASS 26 minutes
- 2025-08-28 PASS 19 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 19 minutes
- 2025-08-31 PASS 25 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:44+00:00
```
2025-09-01T00:30:44.1434174Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-09-01T00:30:44.2495732Z     shared_resource.go:93: 
2025-09-01T00:30:44.2497189Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:44.2499497Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:44.2501696Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:44.2503533Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:44.2505426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:44.2507844Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1414
2025-09-01T00:30:44.2508711Z         	Error:      	Received unexpected error:
2025-09-01T00:30:44.2511463Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:44.2512947Z         	Test:       	TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-09-01T00:30:44.2515399Z         	Messages:   	Project creation failed: test-acc-tf-p-1145231045837599400, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:44.2517112Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (0.11s)
```

  - FAIL a moment

### Error 2025-09-01T05:58:47+00:00
```
2025-09-01T05:58:47.2178360Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-09-01T05:58:47.3767097Z     shared_resource.go:93: 
2025-09-01T05:58:47.3769073Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T05:58:47.3771323Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T05:58:47.3773558Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T05:58:47.3775479Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T05:58:47.3777661Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T05:58:47.3779836Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1414
2025-09-01T05:58:47.3780729Z         	Error:      	Received unexpected error:
2025-09-01T05:58:47.3783655Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:47.3785178Z         	Test:       	TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-09-01T05:58:47.3787534Z         	Messages:   	Project creation failed: test-acc-tf-p-2072829706863257029, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:47.3789138Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (0.16s)
```

  - PASS an hour
  - PASS 18 minutes
  - PASS 14 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 18 minutes
- 2025-09-02 PASS 21 minutes
- 2025-09-03 PASS 38 minutes
- 2025-09-04 PASS 28 minutes