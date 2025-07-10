# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 2)
Success rate: 98.26%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030080000) |  | qa |  | 0.01s
[2025-06-05 00:29](#error-2025-06-05t0029040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4d0c939f2741325135e/clusters/test-acc-tf-c-4155985570261078771 | dev | flaky_500 | 245.10s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 18 minutes
- 2025-04-13 PASS 21 minutes
- 2025-04-14 PASS 16 minutes
- 2025-04-15 PASS 29 minutes
- 2025-04-16
  - PASS 17 minutes
  - PASS 21 minutes
- 2025-04-17 PASS 19 minutes
- 2025-04-18 PASS 21 minutes
- 2025-04-19 PASS 20 minutes
- 2025-04-20 PASS 17 minutes
- 2025-04-21 PASS 21 minutes
- 2025-04-22 PASS 16 minutes
- 2025-04-23 PASS 18 minutes
- 2025-04-24 PASS 17 minutes
- 2025-04-25 PASS 19 minutes
- 2025-04-26 PASS 15 minutes
- 2025-04-27 PASS 20 minutes
- 2025-04-28 PASS 15 minutes
- 2025-04-29 PASS 15 minutes
- 2025-04-30 PASS 26 minutes
- 2025-05-01
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 14 minutes
  - PASS 16 minutes
  - PASS 15 minutes
- 2025-05-02 PASS 19 minutes
- 2025-05-03 PASS 19 minutes
- 2025-05-04 PASS 16 minutes
- 2025-05-05 PASS 15 minutes
- 2025-05-06 PASS 16 minutes
- 2025-05-07 PASS 17 minutes
- 2025-05-08 PASS 22 minutes
- 2025-05-09 PASS 21 minutes
- 2025-05-10 PASS 20 minutes
- 2025-05-11

### Error 2025-05-11T00:30:08+00:00
```
2025-05-11T00:30:08.9293196Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-11T00:30:08.9898531Z     shared_resource.go:84: 
2025-05-11T00:30:08.9900569Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:08.9904105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:08.9907317Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:08.9909198Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:08.9911937Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:189
2025-05-11T00:30:08.9914238Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:290
2025-05-11T00:30:08.9916391Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:18
2025-05-11T00:30:08.9917230Z         	Error:      	Received unexpected error:
2025-05-11T00:30:08.9918077Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:08.9918660Z         	Test:       	TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-11T00:30:08.9919689Z         	Messages:   	Project creation failed: test-acc-tf-p-5447097329719031606, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:08.9920400Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (0.06s)
```

- 2025-05-12 PASS 15 minutes
- 2025-05-13
  - PASS 19 minutes
  - PASS 15 minutes
- 2025-05-14 PASS 17 minutes
- 2025-05-15 PASS 17 minutes
- 2025-05-16 PASS 16 minutes
- 2025-05-17 PASS 16 minutes
- 2025-05-18 PASS 17 minutes
- 2025-05-19 PASS 21 minutes
- 2025-05-20 PASS 18 minutes
- 2025-05-21 PASS 17 minutes
- 2025-05-22 PASS 17 minutes
- 2025-05-23 PASS 27 minutes
- 2025-05-24 PASS 15 minutes
- 2025-05-25 PASS 19 minutes
- 2025-05-26 PASS 16 minutes
- 2025-05-27 PASS 17 minutes
- 2025-05-28
  - PASS 16 minutes
  - PASS 18 minutes
  - PASS 19 minutes
- 2025-05-29
  - PASS 28 minutes
  - PASS 10 minutes
- 2025-05-30
  - PASS an hour
  - PASS 13 minutes
- 2025-05-31 PASS 19 minutes
- 2025-06-01
  - PASS 13 minutes
  - PASS 16 minutes
  - PASS 13 minutes
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-06-02
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 15 minutes
- 2025-06-03 PASS 18 minutes
- 2025-06-04 PASS 16 minutes
- 2025-06-05

### Error 2025-06-05T00:29:04+00:00
```
2025-06-05T00:29:04.6666016Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:35:42.8421121Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:36:42.8227893Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:36:42.8230010Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:36:42.822444062Z, ProjectID: 6840e4d0c939f2741325135e, Cluster name: test-acc-tf-c-4155985570261078771
2025-06-05T00:39:46.1658852Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:39:46.1659503Z     resource_advanced_cluster_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:39:46.1659958Z         
2025-06-05T00:39:46.1661667Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d0c939f2741325135e/clusters/test-acc-tf-c-4155985570261078771 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:39:46.1662846Z         
2025-06-05T00:39:46.1663184Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:39:46.1663836Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:39:46.1664441Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:39:46.1664750Z         
2025-06-05T00:39:46.3441616Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (245.99s)
```

- 2025-06-06 PASS 20 minutes
- 2025-06-07 PASS 15 minutes
- 2025-06-08 PASS 16 minutes
- 2025-06-09 PASS 28 minutes
- 2025-06-10 PASS 14 minutes
- 2025-06-11
  - PASS 16 minutes
  - PASS 19 minutes
- 2025-06-12 PASS 16 minutes
- 2025-06-13 PASS 20 minutes
- 2025-06-14 PASS 34 minutes
- 2025-06-15 PASS 17 minutes
- 2025-06-16 PASS 37 minutes
- 2025-06-17 PASS 15 minutes
- 2025-06-18
  - PASS 16 minutes
  - PASS 19 minutes
- 2025-06-19 PASS 43 minutes
- 2025-06-20 PASS 20 minutes
- 2025-06-21 PASS 19 minutes
- 2025-06-22 PASS 17 minutes
- 2025-06-23 PASS 18 minutes
- 2025-06-24 PASS 19 minutes
- 2025-06-25 PASS 14 minutes
- 2025-06-26 PASS 15 minutes
- 2025-06-27 PASS 22 minutes
- 2025-06-28 PASS 16 minutes
- 2025-06-29 PASS 20 minutes
- 2025-06-30 PASS 17 minutes
- 2025-07-01
  - PASS 22 minutes
  - PASS 16 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 16 minutes
- 2025-07-02 PASS 16 minutes
- 2025-07-03 PASS 16 minutes
- 2025-07-04 PASS 13 minutes
- 2025-07-05 PASS 14 minutes
- 2025-07-06 PASS 14 minutes
- 2025-07-07 PASS 17 minutes
- 2025-07-08 PASS 19 minutes
- 2025-07-09 PASS 16 minutes
- 2025-07-10 PASS 17 minutes