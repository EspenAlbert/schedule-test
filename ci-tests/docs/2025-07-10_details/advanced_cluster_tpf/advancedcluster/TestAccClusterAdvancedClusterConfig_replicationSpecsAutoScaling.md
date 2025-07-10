# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4d7c939f274132515df/clusters | dev | flaky_500 | 37.01s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 26 minutes
- 2025-04-13 PASS 30 minutes
- 2025-04-14 PASS 23 minutes
- 2025-04-15 PASS 40 minutes
- 2025-04-16
  - PASS 24 minutes
  - PASS 36 minutes
- 2025-04-17 PASS 28 minutes
- 2025-04-18 PASS 26 minutes
- 2025-04-19 PASS 26 minutes
- 2025-04-20 PASS 27 minutes
- 2025-04-21 PASS 30 minutes
- 2025-04-22 PASS 26 minutes
- 2025-04-23 PASS 29 minutes
- 2025-04-24 PASS 27 minutes
- 2025-04-25 PASS 28 minutes
- 2025-04-26 PASS 27 minutes
- 2025-04-27 PASS 31 minutes
- 2025-04-28 PASS 26 minutes
- 2025-04-29 PASS 25 minutes
- 2025-04-30 PASS 35 minutes
- 2025-05-01
  - PASS 28 minutes
  - PASS 28 minutes
  - PASS 26 minutes
  - PASS 26 minutes
  - PASS 26 minutes
  - PASS 26 minutes
  - PASS 26 minutes
- 2025-05-02 PASS 31 minutes
- 2025-05-03 PASS 27 minutes
- 2025-05-04 PASS 23 minutes
- 2025-05-05 PASS 25 minutes
- 2025-05-06 PASS 30 minutes
- 2025-05-07 PASS 25 minutes
- 2025-05-08 PASS 29 minutes
- 2025-05-09 PASS 27 minutes
- 2025-05-10 PASS 26 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.7882810Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-05-11T00:30:01.7883369Z     shared_resource.go:84: 
2025-05-11T00:30:01.7884377Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7886393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7888431Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7890482Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7892855Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:524
2025-05-11T00:30:01.7893888Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7894878Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7895698Z         	Test:       	TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-05-11T00:30:01.7896921Z         	Messages:   	Project creation failed: test-acc-tf-p-4300808603366571440, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7897879Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (0.02s)
```

- 2025-05-12 PASS 27 minutes
- 2025-05-13
  - PASS 28 minutes
  - PASS 25 minutes
- 2025-05-14 PASS 27 minutes
- 2025-05-15 PASS 28 minutes
- 2025-05-16 PASS 26 minutes
- 2025-05-17 PASS 28 minutes
- 2025-05-18 PASS 27 minutes
- 2025-05-19 PASS 25 minutes
- 2025-05-20 PASS 27 minutes
- 2025-05-21
  - PASS 24 minutes
  - PASS 22 minutes
- 2025-05-22 PASS 26 minutes
- 2025-05-23 PASS 28 minutes
- 2025-05-24 PASS 24 minutes
- 2025-05-25 PASS 36 minutes
- 2025-05-26 PASS 26 minutes
- 2025-05-27 PASS 25 minutes
- 2025-05-28
  - PASS 22 minutes
  - PASS 26 minutes
  - PASS 29 minutes
- 2025-05-29 PASS 34 minutes
- 2025-05-30
  - PASS an hour
  - PASS 31 minutes
- 2025-05-31 PASS 26 minutes
- 2025-06-01
  - PASS 26 minutes
  - PASS 24 minutes
  - PASS 23 minutes
  - PASS 25 minutes
  - PASS 24 minutes
- 2025-06-02
  - PASS 21 minutes
  - PASS 25 minutes
  - PASS 22 minutes
  - PASS 26 minutes
- 2025-06-03 PASS 28 minutes
- 2025-06-04 PASS 26 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5879953Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-06-05T00:35:38.5946418Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-06-05T00:35:38.6707370Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-06-05T00:35:38.6708002Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:30:01.015276846Z, ProjectID: 6840e4d7c939f274132515df, Cluster name: test-acc-tf-c-2726056272097770398
2025-06-05T00:35:38.6713927Z    test_terraform_path=/home/runner/work/_temp/42fd3dfc-6af2-4f11-bf4e-9449f43560eb/terraform
2025-06-05T00:35:38.6714265Z     resource_advanced_cluster_test.go:538: Step 1/5 error: Error running apply: exit status 1
2025-06-05T00:35:38.6714364Z         
2025-06-05T00:35:38.6714514Z         Error: Error in create
2025-06-05T00:35:38.6714601Z         
2025-06-05T00:35:38.6714829Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6715273Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6715545Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6715636Z         
2025-06-05T00:35:38.6715951Z         cluster name: test-acc-tf-c-2726056272097770398, API error details:
2025-06-05T00:35:38.6716350Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d7c939f274132515df/clusters
2025-06-05T00:35:38.6716710Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6716999Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6717135Z         BadRequestDetail: 
2025-06-05T00:35:38.6717411Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (37.09s)
```

- 2025-06-06 PASS 34 minutes
- 2025-06-07 PASS 28 minutes
- 2025-06-08 PASS 26 minutes
- 2025-06-09 PASS 28 minutes
- 2025-06-10 PASS 26 minutes
- 2025-06-11
  - PASS 25 minutes
  - PASS 31 minutes
- 2025-06-12 PASS 26 minutes
- 2025-06-13 PASS 29 minutes
- 2025-06-14 PASS 48 minutes
- 2025-06-15 PASS 27 minutes
- 2025-06-16 PASS 26 minutes
- 2025-06-17 PASS 26 minutes
- 2025-06-18
  - PASS 28 minutes
  - PASS 26 minutes
- 2025-06-19 PASS 57 minutes
- 2025-06-20 PASS 27 minutes
- 2025-06-21 PASS 25 minutes
- 2025-06-22 PASS 30 minutes
- 2025-06-23 PASS 24 minutes
- 2025-06-24 PASS 26 minutes
- 2025-06-25 PASS 22 minutes
- 2025-06-26
  - PASS 31 minutes
  - PASS 20 minutes
- 2025-06-27 PASS 32 minutes
- 2025-06-28 PASS 27 minutes
- 2025-06-29 PASS 30 minutes
- 2025-06-30 PASS 26 minutes
- 2025-07-01
  - PASS 25 minutes
  - PASS 25 minutes
  - PASS 25 minutes
  - PASS 24 minutes
  - PASS 24 minutes
- 2025-07-02 PASS 28 minutes
- 2025-07-03 PASS 26 minutes
- 2025-07-04 PASS 26 minutes
- 2025-07-05 PASS 23 minutes
- 2025-07-06 PASS 25 minutes
- 2025-07-07 PASS 25 minutes
- 2025-07-08 PASS 24 minutes
- 2025-07-09 PASS 22 minutes
- 2025-07-10 PASS 25 minutes