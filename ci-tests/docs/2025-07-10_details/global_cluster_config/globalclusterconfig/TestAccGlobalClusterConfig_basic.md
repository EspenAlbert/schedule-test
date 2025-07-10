# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_basic Test Details
# Found 112 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 109) FAIL(x 3)
Success rate: 97.32%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-30 00:27](#error-2025-04-30t0027230000) |  | dev | timeout | 10810.09s
[2025-05-11 00:29](#error-2025-05-11t0029470000) |  | qa |  | 0.00s
[2025-06-05 00:28](#error-2025-06-05t0028480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4bec939f27413250887/clusters/test-acc-tf-c-5229481086848732234 | dev | flaky_500 | 201.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 12 minutes
- 2025-04-13 PASS 17 minutes
- 2025-04-14 PASS 12 minutes
- 2025-04-15 PASS 11 minutes
- 2025-04-16
  - PASS 14 minutes
  - PASS 20 minutes
- 2025-04-17 PASS 12 minutes
- 2025-04-18 PASS 12 minutes
- 2025-04-19 PASS 12 minutes
- 2025-04-20 PASS 13 minutes
- 2025-04-21 PASS 13 minutes
- 2025-04-22 PASS 13 minutes
- 2025-04-23 PASS 13 minutes
- 2025-04-24 PASS 13 minutes
- 2025-04-25 PASS 12 minutes
- 2025-04-26 PASS 13 minutes
- 2025-04-27 PASS 14 minutes
- 2025-04-28 PASS 13 minutes
- 2025-04-29 PASS 13 minutes
- 2025-04-30

### Error 2025-04-30T00:27:23+00:00
```
2025-04-30T00:27:23.9641195Z === RUN   TestAccGlobalClusterConfig_basic
2025-04-30T00:51:10.3727915Z === CONT  TestAccGlobalClusterConfig_basic
2025-04-30T00:51:20.3754274Z === NAME  TestAccGlobalClusterConfig_basic
2025-04-30T00:51:20.3755425Z     pre_check.go:40: Time before creating cluster: 2025-04-30T00:51:20.375154154Z, ProjectID: 68116e6ae8bb481772e84537, Cluster name: test-acc-tf-c-6362547323539613612
2025-04-30T03:51:21.2477770Z === NAME  TestAccGlobalClusterConfig_basic
2025-04-30T03:51:21.2480315Z     resource_global_cluster_config_test.go:29: Step 1/3 error: Error running apply: exit status 1
2025-04-30T03:51:21.2481077Z         
2025-04-30T03:51:21.2482236Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-04-30T03:51:21.2483126Z         
2025-04-30T03:51:21.2483900Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-04-30T03:51:21.2484916Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-04-30T03:51:21.2485582Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-04-30T03:51:21.2485916Z         
2025-04-30T03:51:21.2965893Z --- FAIL: TestAccGlobalClusterConfig_basic (10810.92s)
```

- 2025-05-01
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 13 minutes
- 2025-05-02 PASS 16 minutes
- 2025-05-03 PASS 13 minutes
- 2025-05-04 PASS 12 minutes
- 2025-05-05 PASS 13 minutes
- 2025-05-06 PASS 17 minutes
- 2025-05-07 PASS 12 minutes
- 2025-05-08 PASS 15 minutes
- 2025-05-09 PASS 16 minutes
- 2025-05-10 PASS 12 minutes
- 2025-05-11

### Error 2025-05-11T00:29:47+00:00
```
2025-05-11T00:29:47.1053367Z === RUN   TestAccGlobalClusterConfig_basic
2025-05-11T00:29:47.1054259Z     resource_global_cluster_config_test.go:29: Creating execution project: test-acc-tf-p-4797094961158236742
2025-05-11T00:29:47.1096551Z     resource_global_cluster_config_test.go:29: 
2025-05-11T00:29:47.1098843Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:47.1102339Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:47.1104659Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:47.1107640Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:80
2025-05-11T00:29:47.1110376Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:29
2025-05-11T00:29:47.1111229Z         	Error:      	Received unexpected error:
2025-05-11T00:29:47.1112087Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:47.1112639Z         	Test:       	TestAccGlobalClusterConfig_basic
2025-05-11T00:29:47.1113867Z         	Messages:   	Project creation failed: test-acc-tf-p-4797094961158236742, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:47.1114545Z --- FAIL: TestAccGlobalClusterConfig_basic (0.01s)
```

- 2025-05-12 PASS 15 minutes
- 2025-05-13
  - PASS 16 minutes
  - PASS 12 minutes
- 2025-05-14 PASS 15 minutes
- 2025-05-15 PASS 17 minutes
- 2025-05-16 PASS 13 minutes
- 2025-05-17 PASS 13 minutes
- 2025-05-18 PASS 14 minutes
- 2025-05-19 PASS 12 minutes
- 2025-05-20 PASS 13 minutes
- 2025-05-21 PASS 12 minutes
- 2025-05-22 PASS 12 minutes
- 2025-05-23 PASS 31 minutes
- 2025-05-24 PASS 12 minutes
- 2025-05-25 PASS 14 minutes
- 2025-05-26 PASS 12 minutes
- 2025-05-27 PASS 13 minutes
- 2025-05-28
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-05-29 PASS 21 minutes
- 2025-05-30 PASS 13 minutes
- 2025-05-31 PASS 13 minutes
- 2025-06-01
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 13 minutes
- 2025-06-02
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 11 minutes
- 2025-06-03 PASS 11 minutes
- 2025-06-04 PASS 12 minutes
- 2025-06-05

### Error 2025-06-05T00:28:48+00:00
```
2025-06-05T00:28:48.7675570Z === RUN   TestAccGlobalClusterConfig_basic
2025-06-05T00:31:55.3553257Z === CONT  TestAccGlobalClusterConfig_basic
2025-06-05T00:32:15.3679841Z === NAME  TestAccGlobalClusterConfig_basic
2025-06-05T00:32:15.3681108Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:32:15.367702408Z, ProjectID: 6840e4bec939f27413250887, Cluster name: test-acc-tf-c-5229481086848732234
2025-06-05T00:35:04.1107725Z   
2025-06-05T00:35:16.4857822Z === NAME  TestAccGlobalClusterConfig_basic
2025-06-05T00:35:16.4858777Z     resource_global_cluster_config_test.go:29: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:16.4859342Z         
2025-06-05T00:35:16.4861833Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bec939f27413250887/clusters/test-acc-tf-c-5229481086848732234 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:16.4864039Z         
2025-06-05T00:35:16.4864668Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:35:16.4865910Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:35:16.4867108Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:35:16.4867688Z         
2025-06-05T00:35:16.5372665Z --- FAIL: TestAccGlobalClusterConfig_basic (201.18s)
```

- 2025-06-06 PASS 12 minutes
- 2025-06-07 PASS 13 minutes
- 2025-06-08 PASS 12 minutes
- 2025-06-09 PASS 15 minutes
- 2025-06-10 PASS 21 minutes
- 2025-06-11
  - PASS 12 minutes
  - PASS 13 minutes
- 2025-06-12 PASS 12 minutes
- 2025-06-13 PASS 12 minutes
- 2025-06-14 PASS 13 minutes
- 2025-06-15 PASS 14 minutes
- 2025-06-16 PASS 19 minutes
- 2025-06-17 PASS 13 minutes
- 2025-06-18 PASS 13 minutes
- 2025-06-19 PASS 38 minutes
- 2025-06-20 PASS 12 minutes
- 2025-06-21 PASS 12 minutes
- 2025-06-22 PASS 12 minutes
- 2025-06-23 PASS 13 minutes
- 2025-06-24 PASS 13 minutes
- 2025-06-25 PASS 14 minutes
- 2025-06-26 PASS 14 minutes
- 2025-06-27 PASS 11 minutes
- 2025-06-28 PASS 13 minutes
- 2025-06-29 PASS 13 minutes
- 2025-06-30 PASS 13 minutes
- 2025-07-01
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-07-02 PASS 14 minutes
- 2025-07-03 PASS 13 minutes
- 2025-07-04 PASS 14 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06 PASS 12 minutes
- 2025-07-07 PASS 12 minutes
- 2025-07-08 PASS 13 minutes
- 2025-07-09 PASS 15 minutes
- 2025-07-10 PASS 12 minutes