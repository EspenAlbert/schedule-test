# cluster/cluster/TestAccCluster_ProviderRegionName Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029400000) |  | qa |  | 0.00s
[2025-06-05 00:28](#error-2025-06-05t0028460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4bcc939f27413250702/clusters/test-acc-tf-c-5560686947965136127 | dev | flaky_500 | 183.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 24 minutes
- 2025-04-13 PASS 34 minutes
- 2025-04-14 PASS 22 minutes
- 2025-04-15 PASS 21 minutes
- 2025-04-16
  - PASS 24 minutes
  - PASS 32 minutes
- 2025-04-17 PASS 23 minutes
- 2025-04-18 PASS 24 minutes
- 2025-04-19 PASS 23 minutes
- 2025-04-20 PASS 26 minutes
- 2025-04-21 PASS 23 minutes
- 2025-04-22 PASS 24 minutes
- 2025-04-23 PASS 23 minutes
- 2025-04-24 PASS 26 minutes
- 2025-04-25 PASS 25 minutes
- 2025-04-26 PASS 24 minutes
- 2025-04-27 PASS 28 minutes
- 2025-04-28 PASS 21 minutes
- 2025-04-29 PASS 22 minutes
- 2025-04-30 PASS 27 minutes
- 2025-05-01
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 20 minutes
  - PASS 24 minutes
  - PASS 22 minutes
  - PASS 23 minutes
  - PASS 22 minutes
- 2025-05-02 PASS 25 minutes
- 2025-05-03 PASS 26 minutes
- 2025-05-04 PASS 25 minutes
- 2025-05-05 PASS 21 minutes
- 2025-05-06 PASS 25 minutes
- 2025-05-07 PASS 23 minutes
- 2025-05-08 PASS 24 minutes
- 2025-05-09 PASS 27 minutes
- 2025-05-10 PASS 23 minutes
- 2025-05-11

### Error 2025-05-11T00:29:40+00:00
```
2025-05-11T00:29:40.3496661Z === RUN   TestAccCluster_ProviderRegionName
2025-05-11T00:29:40.3541318Z     shared_resource.go:84: 
2025-05-11T00:29:40.3542886Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.3545073Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.3547389Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.3549290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.3551106Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:522
2025-05-11T00:29:40.3551858Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.3552752Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3553310Z         	Test:       	TestAccCluster_ProviderRegionName
2025-05-11T00:29:40.3554324Z         	Messages:   	Project creation failed: test-acc-tf-p-7119518411414771111, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3555034Z --- FAIL: TestAccCluster_ProviderRegionName (0.01s)
```

- 2025-05-12 PASS 25 minutes
- 2025-05-13
  - PASS 26 minutes
  - PASS 25 minutes
- 2025-05-14 PASS 29 minutes
- 2025-05-15 PASS 22 minutes
- 2025-05-16 PASS 23 minutes
- 2025-05-17 PASS 24 minutes
- 2025-05-18 PASS 25 minutes
- 2025-05-19 PASS 22 minutes
- 2025-05-20 PASS 25 minutes
- 2025-05-21 PASS 23 minutes
- 2025-05-22 PASS 26 minutes
- 2025-05-23 PASS 24 minutes
- 2025-05-24 PASS 22 minutes
- 2025-05-25 PASS 26 minutes
- 2025-05-26 PASS 23 minutes
- 2025-05-27 PASS 23 minutes
- 2025-05-28
  - PASS 58 minutes
  - PASS 20 minutes
  - PASS 24 minutes
  - PASS 28 minutes
- 2025-05-29
  - PASS 22 minutes
  - PASS 24 minutes
- 2025-05-30
  - PASS 22 minutes
  - PASS 21 minutes
- 2025-05-31 PASS 22 minutes
- 2025-06-01
  - PASS 24 minutes
  - PASS 23 minutes
  - PASS 21 minutes
  - PASS 22 minutes
  - PASS 25 minutes
  - PASS 20 minutes
- 2025-06-02
  - PASS 23 minutes
  - PASS 24 minutes
  - PASS 22 minutes
- 2025-06-03 PASS 22 minutes
- 2025-06-04 PASS 25 minutes
- 2025-06-05

### Error 2025-06-05T00:28:46+00:00
```
2025-06-05T00:28:46.0500058Z === RUN   TestAccCluster_ProviderRegionName
2025-06-05T00:28:48.8431945Z === CONT  TestAccCluster_ProviderRegionName
2025-06-05T00:31:51.9768040Z === NAME  TestAccCluster_ProviderRegionName
2025-06-05T00:31:51.9769036Z     resource_cluster_test.go:544: Step 2/3 error: Error running apply: exit status 1
2025-06-05T00:31:51.9769747Z         
2025-06-05T00:31:51.9772835Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bcc939f27413250702/clusters/test-acc-tf-c-5560686947965136127 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:51.9775241Z         
2025-06-05T00:31:51.9776001Z           with mongodbatlas_cluster.multi_region,
2025-06-05T00:31:51.9777205Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-06-05T00:31:51.9778284Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-06-05T00:31:51.9778831Z         
2025-06-05T00:31:52.0803790Z --- FAIL: TestAccCluster_ProviderRegionName (183.24s)
```

- 2025-06-06 PASS 24 minutes
- 2025-06-07 PASS 23 minutes
- 2025-06-08 PASS 23 minutes
- 2025-06-09 PASS 21 minutes
- 2025-06-10 PASS 44 minutes
- 2025-06-11
  - PASS 22 minutes
  - PASS 27 minutes
- 2025-06-12 PASS 27 minutes
- 2025-06-13 PASS 24 minutes
- 2025-06-14 PASS 32 minutes
- 2025-06-15 PASS 25 minutes
- 2025-06-16 PASS 28 minutes
- 2025-06-17 PASS an hour
- 2025-06-18 PASS 24 minutes
- 2025-06-19 PASS 31 minutes
- 2025-06-20 PASS 23 minutes
- 2025-06-21 PASS 24 minutes
- 2025-06-22 PASS 25 minutes
- 2025-06-23 PASS 23 minutes
- 2025-06-24 PASS 25 minutes
- 2025-06-25 PASS 23 minutes
- 2025-06-26 PASS 23 minutes
- 2025-06-27 PASS 22 minutes
- 2025-06-28 PASS 24 minutes
- 2025-06-29 PASS 27 minutes
- 2025-06-30 PASS 28 minutes
- 2025-07-01
  - PASS 24 minutes
  - PASS 24 minutes
  - PASS 23 minutes
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 25 minutes
- 2025-07-02 PASS 25 minutes
- 2025-07-03 PASS 23 minutes
- 2025-07-04 PASS 25 minutes
- 2025-07-05 PASS 24 minutes
- 2025-07-06 PASS 24 minutes
- 2025-07-07 PASS 23 minutes
- 2025-07-08 PASS 23 minutes
- 2025-07-09 PASS 38 minutes
- 2025-07-10 PASS 25 minutes