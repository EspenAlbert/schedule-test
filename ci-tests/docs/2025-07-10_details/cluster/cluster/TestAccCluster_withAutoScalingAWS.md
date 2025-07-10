# cluster/cluster/TestAccCluster_withAutoScalingAWS Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029400000) |  | qa |  | 0.00s
[2025-06-05 00:28](#error-2025-06-05t0028480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4be161ca93c1f0520b9/clusters/test-acc-tf-c-2926937246814532452 | dev | flaky_500 | 211.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 14 minutes
- 2025-04-13 PASS 13 minutes
- 2025-04-14 PASS 12 minutes
- 2025-04-15 PASS 14 minutes
- 2025-04-16
  - PASS 14 minutes
  - PASS 14 minutes
- 2025-04-17 PASS 14 minutes
- 2025-04-18 PASS 13 minutes
- 2025-04-19 PASS 13 minutes
- 2025-04-20 PASS 12 minutes
- 2025-04-21 PASS 14 minutes
- 2025-04-22 PASS 15 minutes
- 2025-04-23 PASS 13 minutes
- 2025-04-24 PASS 14 minutes
- 2025-04-25 PASS 14 minutes
- 2025-04-26 PASS 14 minutes
- 2025-04-27 PASS 13 minutes
- 2025-04-28 PASS 29 minutes
- 2025-04-29 PASS 12 minutes
- 2025-04-30 PASS 15 minutes
- 2025-05-01
  - PASS 12 minutes
  - PASS 16 minutes
  - PASS 12 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-05-02 PASS 15 minutes
- 2025-05-03 PASS 13 minutes
- 2025-05-04 PASS 12 minutes
- 2025-05-05 PASS 13 minutes
- 2025-05-06 PASS 13 minutes
- 2025-05-07 PASS 14 minutes
- 2025-05-08 PASS 13 minutes
- 2025-05-09 PASS 17 minutes
- 2025-05-10 PASS 11 minutes
- 2025-05-11

### Error 2025-05-11T00:29:40+00:00
```
2025-05-11T00:29:40.3681194Z === RUN   TestAccCluster_withAutoScalingAWS
2025-05-11T00:29:40.3713285Z     shared_resource.go:84: 
2025-05-11T00:29:40.3714454Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.3716203Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.3718073Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.3719807Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.3721599Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:971
2025-05-11T00:29:40.3722338Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.3723208Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3723761Z         	Test:       	TestAccCluster_withAutoScalingAWS
2025-05-11T00:29:40.3724756Z         	Messages:   	Project creation failed: test-acc-tf-p-3038182170860450737, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3725432Z --- FAIL: TestAccCluster_withAutoScalingAWS (0.01s)
```

- 2025-05-12 PASS 12 minutes
- 2025-05-13
  - PASS 14 minutes
  - PASS 12 minutes
- 2025-05-14 PASS 13 minutes
- 2025-05-15 PASS 14 minutes
- 2025-05-16 PASS 15 minutes
- 2025-05-17 PASS 15 minutes
- 2025-05-18 PASS 13 minutes
- 2025-05-19 PASS 17 minutes
- 2025-05-20 PASS 14 minutes
- 2025-05-21 PASS 14 minutes
- 2025-05-22 PASS 16 minutes
- 2025-05-23 PASS 32 minutes
- 2025-05-24 PASS 14 minutes
- 2025-05-25 PASS 12 minutes
- 2025-05-26 PASS 16 minutes
- 2025-05-27 PASS 14 minutes
- 2025-05-28
  - PASS 23 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-05-29
  - PASS 20 minutes
  - PASS 12 minutes
- 2025-05-30
  - PASS 13 minutes
  - PASS 12 minutes
- 2025-05-31 PASS 12 minutes
- 2025-06-01
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-06-02
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 13 minutes
- 2025-06-03 PASS 14 minutes
- 2025-06-04 PASS 16 minutes
- 2025-06-05

### Error 2025-06-05T00:28:48+00:00
```
2025-06-05T00:28:48.8410768Z === RUN   TestAccCluster_withAutoScalingAWS
2025-06-05T00:28:48.8426053Z === CONT  TestAccCluster_withAutoScalingAWS
2025-06-05T00:29:18.8508307Z === NAME  TestAccCluster_withAutoScalingAWS
2025-06-05T00:29:18.8509764Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:18.850561634Z, ProjectID: 6840e4be161ca93c1f0520b9, Cluster name: test-acc-tf-c-2926937246814532452
2025-06-05T00:32:19.8195052Z === NAME  TestAccCluster_withAutoScalingAWS
2025-06-05T00:32:19.8195821Z     resource_cluster_test.go:982: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:32:19.8196332Z         
2025-06-05T00:32:19.8198570Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4be161ca93c1f0520b9/clusters/test-acc-tf-c-2926937246814532452 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:19.8199776Z         
2025-06-05T00:32:19.8200079Z           with mongodbatlas_cluster.test,
2025-06-05T00:32:19.8200672Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-05T00:32:19.8201226Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-06-05T00:32:19.8201518Z         
2025-06-05T00:32:19.8716454Z --- FAIL: TestAccCluster_withAutoScalingAWS (211.03s)
```

- 2025-06-06 PASS 14 minutes
- 2025-06-07 PASS 13 minutes
- 2025-06-08 PASS 12 minutes
- 2025-06-09 PASS 14 minutes
- 2025-06-10 PASS 26 minutes
- 2025-06-11
  - PASS 14 minutes
  - PASS 12 minutes
- 2025-06-12 PASS 15 minutes
- 2025-06-13 PASS 18 minutes
- 2025-06-14 PASS 57 minutes
- 2025-06-15 PASS 12 minutes
- 2025-06-16 PASS 13 minutes
- 2025-06-17 PASS 17 minutes
- 2025-06-18 PASS 14 minutes
- 2025-06-19 PASS 28 minutes
- 2025-06-20 PASS 14 minutes
- 2025-06-21 PASS 14 minutes
- 2025-06-22 PASS 14 minutes
- 2025-06-23 PASS 13 minutes
- 2025-06-24 PASS 12 minutes
- 2025-06-25 PASS 13 minutes
- 2025-06-26 PASS 14 minutes
- 2025-06-27 PASS 13 minutes
- 2025-06-28 PASS 16 minutes
- 2025-06-29 PASS 17 minutes
- 2025-06-30 PASS 13 minutes
- 2025-07-01
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 15 minutes
- 2025-07-02 PASS 15 minutes
- 2025-07-03 PASS 14 minutes
- 2025-07-04 PASS 13 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06 PASS 12 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 14 minutes
- 2025-07-09 PASS 13 minutes
- 2025-07-10 PASS 19 minutes