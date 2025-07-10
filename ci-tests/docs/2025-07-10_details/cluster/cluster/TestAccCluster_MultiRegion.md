# cluster/cluster/TestAccCluster_MultiRegion Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029400000) |  | qa |  | 0.00s
[2025-06-05 00:28](#error-2025-06-05t0028460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4bcc939f27413250702/clusters/test-acc-tf-c-3964912271743159653 | dev | flaky_500 | 183.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 25 minutes
- 2025-04-13 PASS 34 minutes
- 2025-04-14 PASS 25 minutes
- 2025-04-15 PASS 23 minutes
- 2025-04-16
  - PASS 26 minutes
  - PASS 34 minutes
- 2025-04-17 PASS 26 minutes
- 2025-04-18 PASS 26 minutes
- 2025-04-19 PASS 23 minutes
- 2025-04-20 PASS 31 minutes
- 2025-04-21 PASS 25 minutes
- 2025-04-22 PASS 25 minutes
- 2025-04-23 PASS 24 minutes
- 2025-04-24 PASS 25 minutes
- 2025-04-25 PASS 22 minutes
- 2025-04-26 PASS 24 minutes
- 2025-04-27 PASS 28 minutes
- 2025-04-28 PASS 25 minutes
- 2025-04-29 PASS 26 minutes
- 2025-04-30 PASS 26 minutes
- 2025-05-01
  - PASS 24 minutes
  - PASS 25 minutes
  - PASS 26 minutes
  - PASS 25 minutes
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 25 minutes
- 2025-05-02 PASS 25 minutes
- 2025-05-03 PASS 25 minutes
- 2025-05-04 PASS 27 minutes
- 2025-05-05 PASS 23 minutes
- 2025-05-06 PASS 23 minutes
- 2025-05-07 PASS 26 minutes
- 2025-05-08 PASS 28 minutes
- 2025-05-09 PASS 29 minutes
- 2025-05-10 PASS 27 minutes
- 2025-05-11

### Error 2025-05-11T00:29:40+00:00
```
2025-05-11T00:29:40.3439655Z === RUN   TestAccCluster_MultiRegion
2025-05-11T00:29:40.3482939Z     shared_resource.go:84: 
2025-05-11T00:29:40.3484515Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.3487104Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.3488911Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.3490618Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.3492412Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:451
2025-05-11T00:29:40.3493180Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.3494051Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3494574Z         	Test:       	TestAccCluster_MultiRegion
2025-05-11T00:29:40.3495569Z         	Messages:   	Project creation failed: test-acc-tf-p-6979441719249435470, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3496229Z --- FAIL: TestAccCluster_MultiRegion (0.01s)
```

- 2025-05-12 PASS 25 minutes
- 2025-05-13
  - PASS 27 minutes
  - PASS 25 minutes
- 2025-05-14 PASS 32 minutes
- 2025-05-15 PASS 24 minutes
- 2025-05-16 PASS 24 minutes
- 2025-05-17 PASS 22 minutes
- 2025-05-18 PASS 27 minutes
- 2025-05-19 PASS 23 minutes
- 2025-05-20 PASS 24 minutes
- 2025-05-21 PASS 24 minutes
- 2025-05-22 PASS 28 minutes
- 2025-05-23 PASS 23 minutes
- 2025-05-24 PASS 24 minutes
- 2025-05-25 PASS 32 minutes
- 2025-05-26 PASS 24 minutes
- 2025-05-27 PASS 26 minutes
- 2025-05-28
  - PASS 39 minutes
  - PASS 24 minutes
  - PASS 28 minutes
  - PASS 28 minutes
- 2025-05-29
  - PASS 26 minutes
  - PASS 23 minutes
- 2025-05-30
  - PASS 23 minutes
  - PASS 29 minutes
- 2025-05-31 PASS 23 minutes
- 2025-06-01
  - PASS 23 minutes
  - PASS 23 minutes
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 22 minutes
  - PASS 23 minutes
- 2025-06-02
  - PASS 24 minutes
  - PASS 26 minutes
  - PASS 23 minutes
- 2025-06-03 PASS 24 minutes
- 2025-06-04 PASS 24 minutes
- 2025-06-05

### Error 2025-06-05T00:28:46+00:00
```
2025-06-05T00:28:46.0498600Z === RUN   TestAccCluster_MultiRegion
2025-06-05T00:28:48.8433975Z === CONT  TestAccCluster_MultiRegion
2025-06-05T00:31:51.9259629Z === NAME  TestAccCluster_MultiRegion
2025-06-05T00:31:51.9260665Z     resource_cluster_test.go:480: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:31:51.9261485Z         
2025-06-05T00:31:51.9264714Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bcc939f27413250702/clusters/test-acc-tf-c-3964912271743159653 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:51.9268071Z         
2025-06-05T00:31:51.9268680Z           with mongodbatlas_cluster.multi_region,
2025-06-05T00:31:51.9269974Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-06-05T00:31:51.9270994Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-06-05T00:31:51.9271633Z         
2025-06-05T00:31:52.0486398Z --- FAIL: TestAccCluster_MultiRegion (183.21s)
```

- 2025-06-06 PASS 26 minutes
- 2025-06-07 PASS 25 minutes
- 2025-06-08 PASS 26 minutes
- 2025-06-09 PASS 23 minutes
- 2025-06-10 PASS 52 minutes
- 2025-06-11
  - PASS 25 minutes
  - PASS 27 minutes
- 2025-06-12 PASS 27 minutes
- 2025-06-13 PASS 27 minutes
- 2025-06-14 PASS 42 minutes
- 2025-06-15 PASS 27 minutes
- 2025-06-16 PASS 29 minutes
- 2025-06-17 PASS 24 minutes
- 2025-06-18 PASS 26 minutes
- 2025-06-19 PASS 34 minutes
- 2025-06-20 PASS 26 minutes
- 2025-06-21 PASS 25 minutes
- 2025-06-22 PASS 28 minutes
- 2025-06-23 PASS 24 minutes
- 2025-06-24 PASS 23 minutes
- 2025-06-25 PASS 25 minutes
- 2025-06-26 PASS 25 minutes
- 2025-06-27 PASS 23 minutes
- 2025-06-28 PASS 26 minutes
- 2025-06-29 PASS 28 minutes
- 2025-06-30 PASS 33 minutes
- 2025-07-01
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 26 minutes
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 27 minutes
- 2025-07-02 PASS 27 minutes
- 2025-07-03 PASS 26 minutes
- 2025-07-04 PASS 27 minutes
- 2025-07-05 PASS 23 minutes
- 2025-07-06 PASS 25 minutes
- 2025-07-07 PASS 24 minutes
- 2025-07-08 PASS 24 minutes
- 2025-07-09 PASS 42 minutes
- 2025-07-10 PASS 24 minutes