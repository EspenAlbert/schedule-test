# advanced_cluster_tpf/advancedcluster/TestMigAdvancedCluster_singleShardedMultiCloud Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-05-28 12:04](#error-2025-05-28t1204460000) |  | qa | timeout | 10806.05s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4c6161ca93c1f0527b5/clusters | dev | flaky_500 | 6.06s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 14 minutes
- 2025-04-13 PASS 19 minutes
- 2025-04-14 PASS 15 minutes
- 2025-04-15 PASS 33 minutes
- 2025-04-16
  - PASS 16 minutes
  - PASS 20 minutes
- 2025-04-17 PASS 16 minutes
- 2025-04-18 PASS 16 minutes
- 2025-04-19 PASS 18 minutes
- 2025-04-20 PASS 16 minutes
- 2025-04-21 PASS 17 minutes
- 2025-04-22 PASS 15 minutes
- 2025-04-23 PASS 17 minutes
- 2025-04-24 PASS 16 minutes
- 2025-04-25 PASS 19 minutes
- 2025-04-26 PASS 17 minutes
- 2025-04-27 PASS 19 minutes
- 2025-04-28 PASS 16 minutes
- 2025-04-29 PASS 17 minutes
- 2025-04-30 PASS 16 minutes
- 2025-05-01
  - PASS 17 minutes
  - PASS 19 minutes
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 16 minutes
- 2025-05-02 PASS 18 minutes
- 2025-05-03 PASS 16 minutes
- 2025-05-04 PASS 16 minutes
- 2025-05-05 PASS 16 minutes
- 2025-05-06 PASS 17 minutes
- 2025-05-07 PASS 14 minutes
- 2025-05-08 PASS 16 minutes
- 2025-05-09 PASS 18 minutes
- 2025-05-10 PASS 15 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.7649113Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-11T00:30:01.7649570Z     shared_resource.go:84: 
2025-05-11T00:30:01.7650568Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7653380Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7655603Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7657568Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7659837Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:282
2025-05-11T00:30:01.7662498Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:290
2025-05-11T00:30:01.7664957Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:26
2025-05-11T00:30:01.7665813Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7666717Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7667383Z         	Test:       	TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-11T00:30:01.7668411Z         	Messages:   	Project creation failed: test-acc-tf-p-4576389774791095206, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7669133Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (0.02s)
```

- 2025-05-12 PASS 15 minutes
- 2025-05-13
  - PASS 16 minutes
  - PASS 16 minutes
- 2025-05-14 PASS 19 minutes
- 2025-05-15 PASS 16 minutes
- 2025-05-16 PASS 17 minutes
- 2025-05-17 PASS 15 minutes
- 2025-05-18 PASS 16 minutes
- 2025-05-19 PASS 16 minutes
- 2025-05-20 PASS 15 minutes
- 2025-05-21
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-05-22 PASS 16 minutes
- 2025-05-23 PASS 27 minutes
- 2025-05-24 PASS 16 minutes
- 2025-05-25 PASS 16 minutes
- 2025-05-26 PASS 15 minutes
- 2025-05-27 PASS 15 minutes
- 2025-05-28
  - PASS 15 minutes
  - FAIL 3 hours

### Error 2025-05-28T12:04:46+00:00
```
2025-05-28T12:04:46.9750245Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-28T12:04:46.9844021Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-28T12:04:47.0084295Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-28T12:04:47.0084917Z     resource_advanced_cluster_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-05-28T12:04:47.0085359Z         
2025-05-28T12:04:47.0085606Z         Error: Error in create
2025-05-28T12:04:47.0085840Z         
2025-05-28T12:04:47.0086159Z           with mongodbatlas_advanced_cluster.test,
2025-05-28T12:04:47.0086797Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-28T12:04:47.0087546Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2025-05-28T12:04:47.0087849Z         
2025-05-28T12:04:47.0088305Z         cluster=test-acc-tf-c-5738060353040705697 didn't reach desired state: IDLE,
2025-05-28T12:04:47.0088910Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-05-28T12:04:47.0089329Z         'CREATING', timeout: 3h0m0s)
2025-05-28T12:04:47.0089696Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (10806.47s)
```

  - PASS 18 minutes
- 2025-05-29 PASS 24 minutes
- 2025-05-30
  - PASS an hour
  - PASS 22 minutes
- 2025-05-31 PASS 18 minutes
- 2025-06-01
  - PASS 14 minutes
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-06-02
  - PASS 14 minutes
  - PASS 17 minutes
  - PASS 14 minutes
  - PASS 15 minutes
- 2025-06-03 PASS 15 minutes
- 2025-06-04 PASS 16 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5805359Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:35:38.5954660Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:35:38.6499004Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:35:38.6500139Z     resource_advanced_cluster_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:35:38.6500937Z         
2025-06-05T00:35:38.6501391Z         Error: Error in create
2025-06-05T00:35:38.6501815Z         
2025-06-05T00:35:38.6502404Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6503601Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6504661Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6505208Z         
2025-06-05T00:35:38.6505978Z         cluster name: test-acc-tf-c-5699110514341908503, API error details:
2025-06-05T00:35:38.6507216Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c6161ca93c1f0527b5/clusters
2025-06-05T00:35:38.6508672Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6509753Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6510436Z         BadRequestDetail: 
2025-06-05T00:35:38.6539577Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (6.59s)
```

- 2025-06-06 PASS 15 minutes
- 2025-06-07 PASS 16 minutes
- 2025-06-08 PASS 16 minutes
- 2025-06-09 PASS 16 minutes
- 2025-06-10 PASS 24 minutes
- 2025-06-11
  - PASS 16 minutes
  - PASS 19 minutes
- 2025-06-12 PASS 17 minutes
- 2025-06-13 PASS 15 minutes
- 2025-06-14 PASS 14 minutes
- 2025-06-15 PASS 15 minutes
- 2025-06-16 PASS 20 minutes
- 2025-06-17 PASS 15 minutes
- 2025-06-18
  - PASS 19 minutes
  - PASS 16 minutes
- 2025-06-19 PASS 57 minutes
- 2025-06-20 PASS 16 minutes
- 2025-06-21 PASS 18 minutes
- 2025-06-22 PASS 16 minutes
- 2025-06-23 PASS 15 minutes
- 2025-06-24 PASS 23 minutes
- 2025-06-25 PASS 16 minutes
- 2025-06-26
  - PASS 21 minutes
  - PASS 14 minutes
- 2025-06-27 PASS 15 minutes
- 2025-06-28 PASS 15 minutes
- 2025-06-29 PASS 18 minutes
- 2025-06-30 PASS 17 minutes
- 2025-07-01
  - PASS 17 minutes
  - PASS 19 minutes
  - PASS 14 minutes
  - PASS 16 minutes
  - PASS 15 minutes
- 2025-07-02 PASS 15 minutes
- 2025-07-03 PASS 15 minutes
- 2025-07-04 PASS 18 minutes
- 2025-07-05 PASS 16 minutes
- 2025-07-06 PASS 16 minutes
- 2025-07-07 PASS 15 minutes
- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 16 minutes
- 2025-07-10 PASS 15 minutes