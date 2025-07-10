# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-05-28 12:04](#error-2025-05-28t1204460000) |  | qa |  | 1161.04s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4de161ca93c1f0532d2/clusters | dev | flaky_500 | 62.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 17 minutes
- 2025-04-13 PASS 19 minutes
- 2025-04-14 PASS 15 minutes
- 2025-04-15 PASS 16 minutes
- 2025-04-16
  - PASS 17 minutes
  - PASS 19 minutes
- 2025-04-17 PASS 17 minutes
- 2025-04-18 PASS 16 minutes
- 2025-04-19 PASS 19 minutes
- 2025-04-20 PASS 17 minutes
- 2025-04-21 PASS 21 minutes
- 2025-04-22 PASS 18 minutes
- 2025-04-23 PASS 19 minutes
- 2025-04-24 PASS 17 minutes
- 2025-04-25 PASS 22 minutes
- 2025-04-26 PASS 18 minutes
- 2025-04-27 PASS 19 minutes
- 2025-04-28 PASS 18 minutes
- 2025-04-29 PASS 21 minutes
- 2025-04-30 PASS 17 minutes
- 2025-05-01
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 20 minutes
  - PASS 20 minutes
- 2025-05-02 PASS 22 minutes
- 2025-05-03 PASS 18 minutes
- 2025-05-04 PASS 17 minutes
- 2025-05-05 PASS 16 minutes
- 2025-05-06 PASS 21 minutes
- 2025-05-07 PASS 17 minutes
- 2025-05-08 PASS 18 minutes
- 2025-05-09 PASS 22 minutes
- 2025-05-10 PASS 18 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.8107430Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-11T00:30:01.8107882Z     shared_resource.go:84: 
2025-05-11T00:30:01.8108762Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.8110495Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.8112446Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.8114198Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.8116197Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1216
2025-05-11T00:30:01.8117010Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.8117869Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8118604Z         	Test:       	TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-11T00:30:01.8119726Z         	Messages:   	Project creation failed: test-acc-tf-p-5368110449981806804, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8120544Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (0.02s)
```

- 2025-05-12 PASS 22 minutes
- 2025-05-13
  - PASS 18 minutes
  - PASS 17 minutes
- 2025-05-14 PASS 20 minutes
- 2025-05-15 PASS 19 minutes
- 2025-05-16 PASS 17 minutes
- 2025-05-17 PASS 18 minutes
- 2025-05-18 PASS 17 minutes
- 2025-05-19 PASS 19 minutes
- 2025-05-20 PASS 18 minutes
- 2025-05-21
  - PASS 18 minutes
  - PASS 15 minutes
- 2025-05-22 PASS 20 minutes
- 2025-05-23 PASS 24 minutes
- 2025-05-24 PASS 23 minutes
- 2025-05-25 PASS 26 minutes
- 2025-05-26 PASS 23 minutes
- 2025-05-27 PASS 22 minutes
- 2025-05-28
  - PASS 22 minutes
  - FAIL 19 minutes

### Error 2025-05-28T12:04:46+00:00
```
2025-05-28T12:04:46.9815386Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-28T12:04:46.9846565Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-28T12:04:46.9953537Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-28T12:04:46.9954464Z     pre_check.go:40: Time before creating cluster: 2025-05-28T09:04:36.045468203Z, ProjectID: 6836d109e6404f5026cf2025, Cluster name: test-acc-tf-c-1094122749405850305
2025-05-28T12:04:47.0028240Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-28T12:04:47.0028935Z     resource_advanced_cluster_test.go:1221: Step 1/4 error: Error running apply: exit status 1
2025-05-28T12:04:47.0029356Z         
2025-05-28T12:04:47.0029741Z         Error: error reading Advanced Configuration from legacy API
2025-05-28T12:04:47.0030070Z         
2025-05-28T12:04:47.0030448Z           with data.mongodbatlas_advanced_cluster.test,
2025-05-28T12:04:47.0031074Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_advanced_cluster" "test":
2025-05-28T12:04:47.0031634Z           39: 	data "mongodbatlas_advanced_cluster" "test" {
2025-05-28T12:04:47.0032144Z         
2025-05-28T12:04:47.0032595Z         cluster name: test-acc-tf-c-1094122749405850305, API error details: undefined
2025-05-28T12:04:47.0033005Z         response type
2025-05-28T12:04:47.0033221Z         
2025-05-28T12:04:47.0033522Z         Error: error reading Advanced Configuration
2025-05-28T12:04:47.0033800Z         
2025-05-28T12:04:47.0034145Z           with data.mongodbatlas_advanced_clusters.test,
2025-05-28T12:04:47.0034774Z           on terraform_plugin_test.tf line 45, in data "mongodbatlas_advanced_clusters" "test":
2025-05-28T12:04:47.0035336Z           45: 	data "mongodbatlas_advanced_clusters" "test" {
2025-05-28T12:04:47.0035632Z         
2025-05-28T12:04:47.0036050Z         cluster name: test-acc-tf-c-8078458139413025165, API error details: (503
2025-05-28T12:04:47.0036677Z         Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:04:47.0064857Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1161.37s)
```

  - PASS 24 minutes
- 2025-05-29 PASS 28 minutes
- 2025-05-30
  - PASS an hour
  - PASS 28 minutes
- 2025-05-31 PASS 25 minutes
- 2025-06-01
  - PASS 20 minutes
  - PASS 22 minutes
  - PASS 21 minutes
  - PASS 21 minutes
  - PASS 22 minutes
- 2025-06-02
  - PASS 20 minutes
  - PASS 22 minutes
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-06-03 PASS 25 minutes
- 2025-06-04 PASS 24 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5909424Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-05T00:35:38.5950758Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-05T00:35:38.6754018Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-05T00:35:38.6754653Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:30:26.020769897Z, ProjectID: 6840e4de161ca93c1f0532d2, Cluster name: test-acc-tf-c-2409326044586497798
2025-06-05T00:35:38.6760775Z   
2025-06-05T00:35:38.6761127Z     resource_advanced_cluster_test.go:1221: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.6761226Z         
2025-06-05T00:35:38.6761401Z         Error: Error in create (legacy)
2025-06-05T00:35:38.6761485Z         
2025-06-05T00:35:38.6761715Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6762162Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6762433Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6762525Z         
2025-06-05T00:35:38.6762842Z         cluster name: test-acc-tf-c-2409326044586497798, API error details:
2025-06-05T00:35:38.6763254Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4de161ca93c1f0532d2/clusters
2025-06-05T00:35:38.6763612Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6763908Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6764051Z         BadRequestDetail: 
2025-06-05T00:35:38.6764335Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (62.79s)
```

- 2025-06-06 PASS 25 minutes
- 2025-06-07 PASS 17 minutes
- 2025-06-08 PASS 17 minutes
- 2025-06-09 PASS 22 minutes
- 2025-06-10 PASS 20 minutes
- 2025-06-11
  - PASS 17 minutes
  - PASS 19 minutes
- 2025-06-12 PASS 18 minutes
- 2025-06-13 PASS 21 minutes
- 2025-06-14 PASS 28 minutes
- 2025-06-15 PASS 18 minutes
- 2025-06-16 PASS 21 minutes
- 2025-06-17 PASS 18 minutes
- 2025-06-18
  - PASS 20 minutes
  - PASS 16 minutes
- 2025-06-19 PASS 45 minutes
- 2025-06-20 PASS 17 minutes
- 2025-06-21 PASS 19 minutes
- 2025-06-22 PASS 17 minutes
- 2025-06-23 PASS 17 minutes
- 2025-06-24 PASS 20 minutes
- 2025-06-25 PASS 16 minutes
- 2025-06-26
  - PASS 22 minutes
  - PASS 16 minutes
- 2025-06-27 PASS 19 minutes
- 2025-06-28 PASS 16 minutes
- 2025-06-29 PASS 21 minutes
- 2025-06-30 PASS 19 minutes
- 2025-07-01
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 17 minutes
- 2025-07-04 PASS 19 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06 PASS 16 minutes
- 2025-07-07 PASS 19 minutes
- 2025-07-08 PASS 29 minutes
- 2025-07-09 PASS 16 minutes
- 2025-07-10 PASS 17 minutes