# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_symmetricShardedOldSchema Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 2)
Success rate: 98.26%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030100000) |  | qa |  | 0.01s
[2025-06-05 00:35](#error-2025-06-05t0035300000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e652161ca93c1f05447f/clusters/test-acc-tf-c-7891764918706179241 | dev | flaky_500 | 187.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 26 minutes
- 2025-04-13 PASS 29 minutes
- 2025-04-14 PASS 25 minutes
- 2025-04-15 PASS 35 minutes
- 2025-04-16
  - PASS 27 minutes
  - PASS 33 minutes
- 2025-04-17 PASS 28 minutes
- 2025-04-18 PASS 27 minutes
- 2025-04-19 PASS 27 minutes
- 2025-04-20 PASS 28 minutes
- 2025-04-21 PASS 33 minutes
- 2025-04-22 PASS 28 minutes
- 2025-04-23 PASS 29 minutes
- 2025-04-24 PASS 25 minutes
- 2025-04-25 PASS 53 minutes
- 2025-04-26 PASS 27 minutes
- 2025-04-27 PASS 28 minutes
- 2025-04-28 PASS 26 minutes
- 2025-04-29 PASS 28 minutes
- 2025-04-30 PASS 30 minutes
- 2025-05-01
  - PASS 24 minutes
  - PASS 27 minutes
  - PASS 27 minutes
  - PASS 35 minutes
  - PASS 26 minutes
  - PASS 49 minutes
  - PASS 28 minutes
- 2025-05-02 PASS 40 minutes
- 2025-05-03 PASS 27 minutes
- 2025-05-04 PASS 26 minutes
- 2025-05-05 PASS 24 minutes
- 2025-05-06 PASS 34 minutes
- 2025-05-07 PASS 28 minutes
- 2025-05-08 PASS 31 minutes
- 2025-05-09 PASS 30 minutes
- 2025-05-10 PASS 37 minutes
- 2025-05-11

### Error 2025-05-11T00:30:10+00:00
```
2025-05-11T00:30:10.4671037Z === RUN   TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-05-11T00:30:10.5281209Z     shared_resource.go:84: 
2025-05-11T00:30:10.5283303Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:10.5287157Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:10.5289490Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:10.5292073Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:10.5294098Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:780
2025-05-11T00:30:10.5295494Z         	Error:      	Received unexpected error:
2025-05-11T00:30:10.5296363Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.5296994Z         	Test:       	TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-05-11T00:30:10.5298035Z         	Messages:   	Project creation failed: test-acc-tf-p-1634101231649754106, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.5298783Z --- FAIL: TestAccMockableAdvancedCluster_symmetricShardedOldSchema (0.06s)
```

- 2025-05-12 PASS 26 minutes
- 2025-05-13
  - PASS 27 minutes
  - PASS 30 minutes
- 2025-05-14 PASS 35 minutes
- 2025-05-15 PASS 32 minutes
- 2025-05-16 PASS 28 minutes
- 2025-05-17 PASS 27 minutes
- 2025-05-18 PASS 29 minutes
- 2025-05-19 PASS 26 minutes
- 2025-05-20 PASS 31 minutes
- 2025-05-21 PASS 28 minutes
- 2025-05-22 PASS 26 minutes
- 2025-05-23 PASS 38 minutes
- 2025-05-24 PASS 28 minutes
- 2025-05-25 PASS 36 minutes
- 2025-05-26 PASS 26 minutes
- 2025-05-27 PASS 34 minutes
- 2025-05-28
  - PASS 28 minutes
  - PASS 35 minutes
  - PASS 31 minutes
- 2025-05-29
  - PASS 40 minutes
  - PASS 28 minutes
- 2025-05-30
  - PASS 2 hours
  - PASS 58 minutes
- 2025-05-31 PASS 27 minutes
- 2025-06-01
  - PASS 35 minutes
  - PASS 29 minutes
  - PASS 27 minutes
  - PASS 56 minutes
  - PASS 26 minutes
  - PASS 26 minutes
- 2025-06-02
  - PASS 27 minutes
  - PASS 23 minutes
  - PASS 26 minutes
- 2025-06-03 PASS 25 minutes
- 2025-06-04 PASS 30 minutes
- 2025-06-05

### Error 2025-06-05T00:35:30+00:00
```
2025-06-05T00:35:30.3576242Z === RUN   TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-06-05T00:35:32.1568647Z     resource_advanced_cluster_test.go:786: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-05T00:35:42.8661426Z === CONT  TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-06-05T00:38:48.2707949Z === NAME  TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-06-05T00:38:48.2709234Z     resource_advanced_cluster_test.go:786: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:38:48.2710014Z         
2025-06-05T00:38:48.2712988Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e652161ca93c1f05447f/clusters/test-acc-tf-c-7891764918706179241 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:48.2715113Z         
2025-06-05T00:38:48.2715884Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:48.2717124Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:48.2718228Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:48.2718802Z         
2025-06-05T00:38:48.2884487Z    test_working_directory=/tmp/plugintest508753461 test_step_number=1 test_name=TestAccAdvancedCluster_moveNotSupportedLegacySchema
2025-06-05T00:38:48.4453129Z --- FAIL: TestAccMockableAdvancedCluster_symmetricShardedOldSchema (187.38s)
```

- 2025-06-06 PASS 43 minutes
- 2025-06-07 PASS 34 minutes
- 2025-06-08 PASS 25 minutes
- 2025-06-09 PASS 36 minutes
- 2025-06-10 PASS 30 minutes
- 2025-06-11
  - PASS 27 minutes
  - PASS an hour
- 2025-06-12 PASS 33 minutes
- 2025-06-13 PASS 28 minutes
- 2025-06-14 PASS an hour
- 2025-06-15 PASS 25 minutes
- 2025-06-16 PASS 40 minutes
- 2025-06-17 PASS an hour
- 2025-06-18
  - PASS 29 minutes
  - PASS 28 minutes
- 2025-06-19 PASS an hour
- 2025-06-20 PASS 29 minutes
- 2025-06-21 PASS 33 minutes
- 2025-06-22 PASS 44 minutes
- 2025-06-23 PASS 26 minutes
- 2025-06-24 PASS 58 minutes
- 2025-06-25 PASS 26 minutes
- 2025-06-26 PASS 28 minutes
- 2025-06-27 PASS 34 minutes
- 2025-06-28 PASS 29 minutes
- 2025-06-29 PASS 31 minutes
- 2025-06-30 PASS 41 minutes
- 2025-07-01
  - PASS 29 minutes
  - PASS 29 minutes
  - PASS 27 minutes
  - PASS 28 minutes
  - PASS 31 minutes
- 2025-07-02 PASS 28 minutes
- 2025-07-03 PASS 27 minutes
- 2025-07-04 PASS 29 minutes
- 2025-07-05 PASS 36 minutes
- 2025-07-06 PASS 28 minutes
- 2025-07-07 PASS 30 minutes
- 2025-07-08 PASS an hour
- 2025-07-09 PASS 27 minutes
- 2025-07-10 PASS 29 minutes