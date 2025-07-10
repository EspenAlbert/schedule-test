# cluster/cluster/TestAccCluster_basicAWS_simple Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029400000) |  | qa |  | 0.00s
[2025-06-05 00:28](#error-2025-06-05t0028440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b9161ca93c1f051d05/clusters/test-acc-tf-c-7990006326842546967 | dev | flaky_500 | 216.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 14 minutes
- 2025-04-13 PASS 15 minutes
- 2025-04-14 PASS 13 minutes
- 2025-04-15 PASS 15 minutes
- 2025-04-16
  - PASS 15 minutes
  - PASS 16 minutes
- 2025-04-17 PASS 14 minutes
- 2025-04-18 PASS 13 minutes
- 2025-04-19 PASS 14 minutes
- 2025-04-20 PASS 13 minutes
- 2025-04-21 PASS 14 minutes
- 2025-04-22 PASS 14 minutes
- 2025-04-23 PASS 14 minutes
- 2025-04-24 PASS 15 minutes
- 2025-04-25 PASS 16 minutes
- 2025-04-26 PASS 15 minutes
- 2025-04-27 PASS 15 minutes
- 2025-04-28 PASS 14 minutes
- 2025-04-29 PASS 12 minutes
- 2025-04-30 PASS 15 minutes
- 2025-05-01
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 14 minutes
  - PASS 14 minutes
- 2025-05-02 PASS 14 minutes
- 2025-05-03 PASS 14 minutes
- 2025-05-04 PASS 13 minutes
- 2025-05-05 PASS 14 minutes
- 2025-05-06 PASS 14 minutes
- 2025-05-07 PASS 14 minutes
- 2025-05-08 PASS 14 minutes
- 2025-05-09 PASS 17 minutes
- 2025-05-10 PASS 12 minutes
- 2025-05-11

### Error 2025-05-11T00:29:40+00:00
```
2025-05-11T00:29:40.2967575Z === RUN   TestAccCluster_basicAWS_simple
2025-05-11T00:29:40.3009795Z     shared_resource.go:84: 
2025-05-11T00:29:40.3011408Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.3013763Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.3016088Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.3018135Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.3020104Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:33
2025-05-11T00:29:40.3021914Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:28
2025-05-11T00:29:40.3022655Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.3023527Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3024068Z         	Test:       	TestAccCluster_basicAWS_simple
2025-05-11T00:29:40.3025067Z         	Messages:   	Project creation failed: test-acc-tf-p-2098537079261467225, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3025746Z --- FAIL: TestAccCluster_basicAWS_simple (0.01s)
```

- 2025-05-12 PASS 15 minutes
- 2025-05-13
  - PASS 15 minutes
  - PASS 12 minutes
- 2025-05-14 PASS 22 minutes
- 2025-05-15 PASS 15 minutes
- 2025-05-16 PASS 17 minutes
- 2025-05-17 PASS 15 minutes
- 2025-05-18 PASS 13 minutes
- 2025-05-19 PASS 16 minutes
- 2025-05-20 PASS 16 minutes
- 2025-05-21 PASS 16 minutes
- 2025-05-22 PASS 17 minutes
- 2025-05-23 PASS 21 minutes
- 2025-05-24 PASS 16 minutes
- 2025-05-25 PASS 14 minutes
- 2025-05-26 PASS 15 minutes
- 2025-05-27 PASS 14 minutes
- 2025-05-28
  - PASS 25 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-05-29
  - PASS 19 minutes
  - PASS 14 minutes
- 2025-05-30
  - PASS 14 minutes
  - PASS 14 minutes
- 2025-05-31 PASS 15 minutes
- 2025-06-01
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 13 minutes
- 2025-06-02
  - PASS 14 minutes
  - PASS 16 minutes
  - PASS 15 minutes
- 2025-06-03 PASS 15 minutes
- 2025-06-04 PASS 15 minutes
- 2025-06-05

### Error 2025-06-05T00:28:44+00:00
```
2025-06-05T00:28:44.4423806Z === RUN   TestAccCluster_basicAWS_simple
2025-06-05T00:28:48.8432941Z === CONT  TestAccCluster_basicAWS_simple
2025-06-05T00:29:23.8522914Z === NAME  TestAccCluster_basicAWS_simple
2025-06-05T00:29:23.8524189Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:23.852050843Z, ProjectID: 6840e4b9161ca93c1f051d05, Cluster name: test-acc-tf-c-7990006326842546967
2025-06-05T00:32:24.8220349Z === NAME  TestAccCluster_basicAWS_simple
2025-06-05T00:32:24.8220904Z     resource_cluster_test.go:28: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:32:24.8221306Z         
2025-06-05T00:32:24.8223441Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9161ca93c1f051d05/clusters/test-acc-tf-c-7990006326842546967 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:24.8224649Z         
2025-06-05T00:32:24.8224953Z           with mongodbatlas_cluster.test,
2025-06-05T00:32:24.8225855Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-05T00:32:24.8226406Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-06-05T00:32:24.8226702Z         
2025-06-05T00:32:24.8673923Z --- FAIL: TestAccCluster_basicAWS_simple (216.02s)
```

- 2025-06-06 PASS 15 minutes
- 2025-06-07 PASS 17 minutes
- 2025-06-08 PASS 13 minutes
- 2025-06-09 PASS 15 minutes
- 2025-06-10 PASS 30 minutes
- 2025-06-11
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-06-12 PASS 16 minutes
- 2025-06-13 PASS 18 minutes
- 2025-06-14 PASS 32 minutes
- 2025-06-15 PASS 15 minutes
- 2025-06-16 PASS 17 minutes
- 2025-06-17 PASS 16 minutes
- 2025-06-18 PASS 24 minutes
- 2025-06-19 PASS 19 minutes
- 2025-06-20 PASS 15 minutes
- 2025-06-21 PASS 17 minutes
- 2025-06-22 PASS 15 minutes
- 2025-06-23 PASS 15 minutes
- 2025-06-24 PASS 13 minutes
- 2025-06-25 PASS 15 minutes
- 2025-06-26 PASS 15 minutes
- 2025-06-27 PASS 14 minutes
- 2025-06-28 PASS 16 minutes
- 2025-06-29 PASS 17 minutes
- 2025-06-30 PASS 18 minutes
- 2025-07-01
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 17 minutes
- 2025-07-02 PASS 17 minutes
- 2025-07-03 PASS 16 minutes
- 2025-07-04 PASS 21 minutes
- 2025-07-05 PASS 14 minutes
- 2025-07-06 PASS 13 minutes
- 2025-07-07 PASS 16 minutes
- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10 PASS 16 minutes