# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 3)
Success rate: 91.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-06 02:05](#error-2025-08-06t0205370000) |  | dev | unknown | 1715.03s
[2025-08-26 03:49](#error-2025-08-26t0349020000) |  | dev | timeout | 11978.03s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06

### Error 2025-08-06T02:05:37+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-08-06T02:05:37.429000+00:00-TestAccClusterAdvancedCluster_replicaSetAWSProvider',confidence=1.0,ts_when='28 days ago')

```
2025-08-06T02:05:37.4299828Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-06T02:05:37.4354712Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-06T02:05:37.4459196Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-06T02:05:37.4460073Z     pre_check.go:40: Time before creating cluster: 2025-08-06T00:33:47.225857641Z, ProjectID: 6892a24beb5d0951971651f5, Cluster name: test-acc-tf-c-8518263672847905275
2025-08-06T02:05:37.4565132Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-06T02:05:37.4565724Z     resource_advanced_cluster_test.go:187: Step 1/5 error: Error running apply: exit status 1
2025-08-06T02:05:37.4566134Z         
2025-08-06T02:05:37.4566442Z         Error: error reading  advanced cluster list
2025-08-06T02:05:37.4566726Z         
2025-08-06T02:05:37.4567074Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-06T02:05:37.4567714Z           on terraform_plugin_test.tf line 42, in data "mongodbatlas_advanced_clusters" "test":
2025-08-06T02:05:37.4568420Z           42: 	data "mongodbatlas_advanced_clusters" "test" {
2025-08-06T02:05:37.4568727Z         
2025-08-06T02:05:37.4569027Z         project ID 6892a24beb5d0951971651f5. Error
2025-08-06T02:05:37.4569634Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6892a24beb5d0951971651f5/clusters
2025-08-06T02:05:37.4570156Z         GET: HTTP 400 Bad Request (Error code:
2025-08-06T02:05:37.4570631Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-08-06T02:05:37.4571238Z         test-acc-tf-c-4567813620323913581 cannot be used in the Cluster API. Reason:
2025-08-06T02:05:37.4571881Z         Bad Request. Params: [test-acc-tf-c-4567813620323913581], BadRequestDetail: 
2025-08-06T02:05:37.4620235Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (1715.32s)
```

- 2025-08-07 PASS an hour
- 2025-08-08 PASS an hour
- 2025-08-09 PASS an hour
- 2025-08-10 PASS an hour
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS an hour
  - PASS 58 minutes
- 2025-08-13 PASS an hour
- 2025-08-14 PASS an hour
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS an hour
- 2025-08-18 PASS an hour
- 2025-08-19 PASS an hour
- 2025-08-20
  - PASS an hour
  - PASS an hour
- 2025-08-21 PASS an hour
- 2025-08-22: MISSING
- 2025-08-23 PASS an hour
- 2025-08-24 PASS 54 minutes
- 2025-08-25 PASS an hour
- 2025-08-26

### Error 2025-08-26T03:49:02+00:00
```
2025-08-26T03:49:02.9019893Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-26T03:49:02.9078997Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-26T03:49:02.9131956Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-26T03:49:02.9132859Z     pre_check.go:40: Time before creating cluster: 2025-08-26T00:29:36.006161144Z, ProjectID: 68acff7652781c2812cff244, Cluster name: test-acc-tf-c-4014559418549118196
2025-08-26T03:49:02.9264675Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-26T03:49:02.9265267Z     resource_advanced_cluster_test.go:188: Step 3/5 error: Error running apply: exit status 1
2025-08-26T03:49:02.9265692Z         
2025-08-26T03:49:02.9265938Z         Error: Error in update
2025-08-26T03:49:02.9266183Z         
2025-08-26T03:49:02.9266504Z           with mongodbatlas_advanced_cluster.test,
2025-08-26T03:49:02.9267145Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-26T03:49:02.9267735Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-26T03:49:02.9268156Z         
2025-08-26T03:49:02.9268610Z         cluster=test-acc-tf-c-4014559418549118196 didn't reach desired state: IDLE,
2025-08-26T03:49:02.9269227Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-08-26T03:49:02.9269653Z         'UPDATING', timeout: 3h0m0s)
2025-08-26T03:49:02.9270050Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11978.31s)
```

- 2025-08-27 PASS an hour
- 2025-08-28 PASS an hour
- 2025-08-29: MISSING
- 2025-08-30 PASS an hour
- 2025-08-31 PASS an hour
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.6845811Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-09-01T00:30:49.6846424Z     shared_resource.go:93: 
2025-09-01T00:30:49.6847930Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.6850983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.6854174Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.6857232Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.6860270Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.6863925Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:194
2025-09-01T00:30:49.6867643Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:188
2025-09-01T00:30:49.6869048Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.6873965Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6876262Z         	Test:       	TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-09-01T00:30:49.6880427Z         	Messages:   	Project creation failed: test-acc-tf-p-3955270113611495188, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6883077Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (0.15s)
```

  - PASS an hour
  - PASS an hour
  - PASS an hour
  - PASS an hour
  - PASS 57 minutes
  - PASS an hour
  - PASS 58 minutes
- 2025-09-02 PASS an hour
- 2025-09-03 PASS an hour
- 2025-09-04 PASS an hour