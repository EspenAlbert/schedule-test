# cluster/cluster/TestAccCluster_basicAWS_PausedToUnpaused Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029400000) |  | qa |  | 0.00s
[2025-06-05 00:28](#error-2025-06-05t0028480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4be161ca93c1f0520b9/clusters/test-acc-tf-c-8144530744812393100 | dev | flaky_500 | 196.01s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 17 minutes
- 2025-04-13 PASS 17 minutes
- 2025-04-14 PASS 17 minutes
- 2025-04-15 PASS 17 minutes
- 2025-04-16
  - PASS 17 minutes
  - PASS 19 minutes
- 2025-04-17 PASS 19 minutes
- 2025-04-18 PASS 18 minutes
- 2025-04-19 PASS 17 minutes
- 2025-04-20 PASS 18 minutes
- 2025-04-21 PASS 17 minutes
- 2025-04-22 PASS 18 minutes
- 2025-04-23 PASS 19 minutes
- 2025-04-24 PASS 17 minutes
- 2025-04-25 PASS 18 minutes
- 2025-04-26 PASS 18 minutes
- 2025-04-27 PASS 18 minutes
- 2025-04-28 PASS 18 minutes
- 2025-04-29 PASS 18 minutes
- 2025-04-30 PASS 19 minutes
- 2025-05-01
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 16 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 17 minutes
- 2025-05-02 PASS 18 minutes
- 2025-05-03 PASS 18 minutes
- 2025-05-04 PASS 17 minutes
- 2025-05-05 PASS 17 minutes
- 2025-05-06 PASS 17 minutes
- 2025-05-07 PASS 19 minutes
- 2025-05-08 PASS 19 minutes
- 2025-05-09 PASS 21 minutes
- 2025-05-10 PASS 18 minutes
- 2025-05-11

### Error 2025-05-11T00:29:40+00:00
```
2025-05-11T00:29:40.4064539Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-05-11T00:29:40.4107249Z     shared_resource.go:84: 
2025-05-11T00:29:40.4108888Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.4111851Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.4115188Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.4118550Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.4122042Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1284
2025-05-11T00:29:40.4123454Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.4125359Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.4126572Z         	Test:       	TestAccCluster_basicAWS_PausedToUnpaused
2025-05-11T00:29:40.4128528Z         	Messages:   	Project creation failed: test-acc-tf-p-8896745551177766812, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.4129809Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (0.01s)
```

- 2025-05-12 PASS 17 minutes
- 2025-05-13
  - PASS 19 minutes
  - PASS 17 minutes
- 2025-05-14 PASS 20 minutes
- 2025-05-15 PASS 19 minutes
- 2025-05-16 PASS 19 minutes
- 2025-05-17 PASS 17 minutes
- 2025-05-18 PASS 18 minutes
- 2025-05-19 PASS 19 minutes
- 2025-05-20 PASS 18 minutes
- 2025-05-21 PASS 18 minutes
- 2025-05-22 PASS 21 minutes
- 2025-05-23 PASS 36 minutes
- 2025-05-24 PASS 18 minutes
- 2025-05-25 PASS 19 minutes
- 2025-05-26 PASS 18 minutes
- 2025-05-27 PASS 18 minutes
- 2025-05-28
  - PASS 28 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-05-29
  - PASS 22 minutes
  - PASS 17 minutes
- 2025-05-30
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-05-31 PASS 17 minutes
- 2025-06-01
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-06-02
  - PASS 18 minutes
  - PASS 20 minutes
  - PASS 18 minutes
- 2025-06-03 PASS 17 minutes
- 2025-06-04 PASS 20 minutes
- 2025-06-05

### Error 2025-06-05T00:28:48+00:00
```
2025-06-05T00:28:48.8417738Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-06-05T00:28:48.8428575Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2025-06-05T00:29:03.8445590Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-06-05T00:29:03.8447437Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:03.844230214Z, ProjectID: 6840e4be161ca93c1f0520b9, Cluster name: test-acc-tf-c-8144530744812393100
2025-06-05T00:32:04.8540770Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-06-05T00:32:04.8541484Z     resource_cluster_test.go:1286: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:32:04.8541960Z         
2025-06-05T00:32:04.8543978Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4be161ca93c1f0520b9/clusters/test-acc-tf-c-8144530744812393100 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:04.8545509Z         
2025-06-05T00:32:04.8545814Z           with mongodbatlas_cluster.test,
2025-06-05T00:32:04.8546499Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-05T00:32:04.8547345Z           12: resource "mongodbatlas_cluster" "test" {
2025-06-05T00:32:04.8547666Z         
2025-06-05T00:32:04.9033921Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (196.06s)
```

- 2025-06-06 PASS 19 minutes
- 2025-06-07 PASS 18 minutes
- 2025-06-08 PASS 16 minutes
- 2025-06-09 PASS 17 minutes
- 2025-06-10 PASS 33 minutes
- 2025-06-11
  - PASS 18 minutes
  - PASS 16 minutes
- 2025-06-12 PASS 20 minutes
- 2025-06-13 PASS 21 minutes
- 2025-06-14 PASS 27 minutes
- 2025-06-15 PASS 17 minutes
- 2025-06-16 PASS 20 minutes
- 2025-06-17 PASS 19 minutes
- 2025-06-18 PASS 19 minutes
- 2025-06-19 PASS 35 minutes
- 2025-06-20 PASS 20 minutes
- 2025-06-21 PASS 19 minutes
- 2025-06-22 PASS 18 minutes
- 2025-06-23 PASS 17 minutes
- 2025-06-24 PASS 18 minutes
- 2025-06-25 PASS 19 minutes
- 2025-06-26 PASS 29 minutes
- 2025-06-27 PASS 18 minutes
- 2025-06-28 PASS 19 minutes
- 2025-06-29 PASS 19 minutes
- 2025-06-30 PASS 19 minutes
- 2025-07-01
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 20 minutes
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 19 minutes
- 2025-07-04 PASS 18 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06 PASS 17 minutes
- 2025-07-07 PASS 18 minutes
- 2025-07-08 PASS 20 minutes
- 2025-07-09 PASS 34 minutes
- 2025-07-10 PASS 24 minutes