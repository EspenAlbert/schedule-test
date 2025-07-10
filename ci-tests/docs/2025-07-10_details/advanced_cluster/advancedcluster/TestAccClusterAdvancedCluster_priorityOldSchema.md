# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_priorityOldSchema Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 2)
Success rate: 98.26%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030100000) |  | qa |  | 0.01s
[2025-06-05 00:35](#error-2025-06-05t0035390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e657161ca93c1f054546/clusters/test-acc-tf-c-972706612068098744 | dev | flaky_500 | 185.09s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 16 minutes
- 2025-04-13 PASS 18 minutes
- 2025-04-14 PASS 15 minutes
- 2025-04-15 PASS 29 minutes
- 2025-04-16
  - PASS 16 minutes
  - PASS 21 minutes
- 2025-04-17 PASS 14 minutes
- 2025-04-18 PASS 18 minutes
- 2025-04-19 PASS 15 minutes
- 2025-04-20 PASS 16 minutes
- 2025-04-21 PASS 17 minutes
- 2025-04-22 PASS 19 minutes
- 2025-04-23 PASS 14 minutes
- 2025-04-24 PASS 18 minutes
- 2025-04-25 PASS 17 minutes
- 2025-04-26 PASS 15 minutes
- 2025-04-27 PASS 19 minutes
- 2025-04-28 PASS 16 minutes
- 2025-04-29 PASS 16 minutes
- 2025-04-30 PASS 24 minutes
- 2025-05-01
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 12 minutes
- 2025-05-02 PASS 17 minutes
- 2025-05-03 PASS 15 minutes
- 2025-05-04 PASS 16 minutes
- 2025-05-05 PASS 14 minutes
- 2025-05-06 PASS 20 minutes
- 2025-05-07 PASS 16 minutes
- 2025-05-08 PASS 19 minutes
- 2025-05-09 PASS 22 minutes
- 2025-05-10 PASS 14 minutes
- 2025-05-11

### Error 2025-05-11T00:30:10+00:00
```
2025-05-11T00:30:10.8421718Z === RUN   TestAccClusterAdvancedCluster_priorityOldSchema
2025-05-11T00:30:10.9032426Z     shared_resource.go:84: 
2025-05-11T00:30:10.9033829Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:10.9036236Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:10.9038551Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:10.9040464Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:10.9042580Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1062
2025-05-11T00:30:10.9043385Z         	Error:      	Received unexpected error:
2025-05-11T00:30:10.9044236Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.9044841Z         	Test:       	TestAccClusterAdvancedCluster_priorityOldSchema
2025-05-11T00:30:10.9045859Z         	Messages:   	Project creation failed: test-acc-tf-p-4201872662484735207, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.9046863Z --- FAIL: TestAccClusterAdvancedCluster_priorityOldSchema (0.06s)
```

- 2025-05-12 PASS 20 minutes
- 2025-05-13
  - PASS 19 minutes
  - PASS 15 minutes
- 2025-05-14 PASS 17 minutes
- 2025-05-15 PASS 19 minutes
- 2025-05-16 PASS 17 minutes
- 2025-05-17 PASS 17 minutes
- 2025-05-18 PASS 19 minutes
- 2025-05-19 PASS 15 minutes
- 2025-05-20 PASS 17 minutes
- 2025-05-21 PASS 18 minutes
- 2025-05-22 PASS 16 minutes
- 2025-05-23 PASS 17 minutes
- 2025-05-24 PASS 15 minutes
- 2025-05-25 PASS 16 minutes
- 2025-05-26 PASS 15 minutes
- 2025-05-27 PASS 15 minutes
- 2025-05-28
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 16 minutes
- 2025-05-29
  - PASS 24 minutes
  - PASS 14 minutes
- 2025-05-30
  - PASS an hour
  - PASS 21 minutes
- 2025-05-31 PASS 15 minutes
- 2025-06-01
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 13 minutes
- 2025-06-02
  - PASS 19 minutes
  - PASS 14 minutes
  - PASS 15 minutes
- 2025-06-03 PASS 19 minutes
- 2025-06-04 PASS 16 minutes
- 2025-06-05

### Error 2025-06-05T00:35:39+00:00
```
2025-06-05T00:35:39.9463480Z === RUN   TestAccClusterAdvancedCluster_priorityOldSchema
2025-06-05T00:35:42.8652417Z === CONT  TestAccClusterAdvancedCluster_priorityOldSchema
2025-06-05T00:38:48.6827479Z === NAME  TestAccClusterAdvancedCluster_priorityOldSchema
2025-06-05T00:38:48.6828191Z     resource_advanced_cluster_test.go:1066: Step 2/5 error: Error running apply: exit status 1
2025-06-05T00:38:48.6828752Z         
2025-06-05T00:38:48.6831129Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e657161ca93c1f054546/clusters/test-acc-tf-c-972706612068098744 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:48.6832532Z         
2025-06-05T00:38:48.6832883Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:48.6833535Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:48.6834129Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:48.6834440Z         
2025-06-05T00:38:48.7299454Z --- FAIL: TestAccClusterAdvancedCluster_priorityOldSchema (185.89s)
```

- 2025-06-06 PASS 20 minutes
- 2025-06-07 PASS 15 minutes
- 2025-06-08 PASS 18 minutes
- 2025-06-09 PASS 35 minutes
- 2025-06-10 PASS 12 minutes
- 2025-06-11
  - PASS 16 minutes
  - PASS 19 minutes
- 2025-06-12 PASS 16 minutes
- 2025-06-13 PASS 19 minutes
- 2025-06-14 PASS 25 minutes
- 2025-06-15 PASS 13 minutes
- 2025-06-16 PASS 18 minutes
- 2025-06-17 PASS 18 minutes
- 2025-06-18
  - PASS 20 minutes
  - PASS 18 minutes
- 2025-06-19 PASS 48 minutes
- 2025-06-20 PASS 19 minutes
- 2025-06-21 PASS 19 minutes
- 2025-06-22 PASS 35 minutes
- 2025-06-23 PASS 16 minutes
- 2025-06-24 PASS 26 minutes
- 2025-06-25 PASS 15 minutes
- 2025-06-26 PASS 13 minutes
- 2025-06-27 PASS 21 minutes
- 2025-06-28 PASS 18 minutes
- 2025-06-29 PASS 17 minutes
- 2025-06-30 PASS 20 minutes
- 2025-07-01
  - PASS 14 minutes
  - PASS 17 minutes
  - PASS 15 minutes
  - PASS 17 minutes
  - PASS 16 minutes
- 2025-07-02 PASS 16 minutes
- 2025-07-03 PASS 18 minutes
- 2025-07-04 PASS 16 minutes
- 2025-07-05 PASS 16 minutes
- 2025-07-06 PASS 16 minutes
- 2025-07-07 PASS 16 minutes
- 2025-07-08 PASS 14 minutes
- 2025-07-09 PASS 16 minutes
- 2025-07-10 PASS 17 minutes