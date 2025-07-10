# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_singleShardedMultiCloud Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030000000) |  | qa |  | 0.00s
[2025-06-05 00:28](#error-2025-06-05t0028580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4c8161ca93c1f05296a/clusters/test-acc-tf-c-7861125719370222998 | dev | flaky_500 | 183.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 18 minutes
- 2025-04-13 PASS 17 minutes
- 2025-04-14 PASS 15 minutes
- 2025-04-15 PASS 15 minutes
- 2025-04-16
  - PASS 16 minutes
  - PASS 17 minutes
- 2025-04-17 PASS 16 minutes
- 2025-04-18 PASS 16 minutes
- 2025-04-19 PASS 15 minutes
- 2025-04-20 PASS 16 minutes
- 2025-04-21 PASS 15 minutes
- 2025-04-22 PASS 16 minutes
- 2025-04-23 PASS 16 minutes
- 2025-04-24 PASS 15 minutes
- 2025-04-25 PASS 17 minutes
- 2025-04-26 PASS 17 minutes
- 2025-04-27 PASS 18 minutes
- 2025-04-28 PASS 15 minutes
- 2025-04-29 PASS 15 minutes
- 2025-04-30
  - PASS 14 minutes
  - PASS 17 minutes
- 2025-05-01
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 17 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 15 minutes
- 2025-05-02 PASS 15 minutes
- 2025-05-03 PASS 16 minutes
- 2025-05-04 PASS 15 minutes
- 2025-05-05 PASS 15 minutes
- 2025-05-06 PASS 15 minutes
- 2025-05-07
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-05-08 PASS 17 minutes
- 2025-05-09 PASS 17 minutes
- 2025-05-10 PASS 16 minutes
- 2025-05-11

### Error 2025-05-11T00:30:00+00:00
```
2025-05-11T00:30:00.1399433Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-11T00:30:00.1399959Z     resource_advanced_cluster_migration_test.go:26: Running test SDKv2 to TPF
2025-05-11T00:30:00.1601542Z     shared_resource.go:84: 
2025-05-11T00:30:00.1603239Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.1605691Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:00.1607740Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:00.1609761Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:00.1612060Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:282
2025-05-11T00:30:00.1614784Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:290
2025-05-11T00:30:00.1617108Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:26
2025-05-11T00:30:00.1617976Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.1618844Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1619447Z         	Test:       	TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-11T00:30:00.1620497Z         	Messages:   	Project creation failed: test-acc-tf-p-9147846868744665734, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1621240Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (0.02s)
```

- 2025-05-12 PASS 16 minutes
- 2025-05-13
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-05-14 PASS 15 minutes
- 2025-05-15 PASS 15 minutes
- 2025-05-16 PASS 15 minutes
- 2025-05-17 PASS 15 minutes
- 2025-05-18 PASS 17 minutes
- 2025-05-19 PASS 16 minutes
- 2025-05-20 PASS 16 minutes
- 2025-05-21 PASS 16 minutes
- 2025-05-22 PASS 20 minutes
- 2025-05-23 PASS 14 minutes
- 2025-05-24 PASS 16 minutes
- 2025-05-25 PASS 17 minutes
- 2025-05-26 PASS 15 minutes
- 2025-05-27 PASS 15 minutes
- 2025-05-28
  - PASS 27 minutes
  - PASS 17 minutes
- 2025-05-29 PASS 19 minutes
- 2025-05-30 PASS an hour
- 2025-05-31 PASS 15 minutes
- 2025-06-01
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 13 minutes
  - PASS 15 minutes
  - PASS 13 minutes
  - PASS 15 minutes
- 2025-06-02
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 17 minutes
- 2025-06-03 PASS 15 minutes
- 2025-06-04 PASS 18 minutes
- 2025-06-05

### Error 2025-06-05T00:28:58+00:00
```
2025-06-05T00:28:58.6420561Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:28:58.6421537Z     resource_advanced_cluster_migration_test.go:26: Running test SDKv2 to TPF
2025-06-05T00:29:00.2536329Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:32:03.4963825Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:32:03.4964950Z     resource_advanced_cluster_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:32:03.4965958Z         
2025-06-05T00:32:03.4969085Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c8161ca93c1f05296a/clusters/test-acc-tf-c-7861125719370222998 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:03.4971205Z         
2025-06-05T00:32:03.4971837Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:32:03.4973033Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:32:03.4974111Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:32:03.4974694Z         
2025-06-05T00:32:03.6909327Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (183.44s)
```

- 2025-06-06 PASS 17 minutes
- 2025-06-07 PASS 14 minutes
- 2025-06-08 PASS 15 minutes
- 2025-06-09 PASS 15 minutes
- 2025-06-10 PASS 26 minutes
- 2025-06-11
  - PASS 17 minutes
  - PASS 16 minutes
- 2025-06-12 PASS 16 minutes
- 2025-06-13 PASS 18 minutes
- 2025-06-14 PASS 32 minutes
- 2025-06-15 PASS 16 minutes
- 2025-06-16 PASS 17 minutes
- 2025-06-17 PASS 17 minutes
- 2025-06-18 PASS 18 minutes
- 2025-06-19 PASS 23 minutes
- 2025-06-20 PASS 17 minutes
- 2025-06-21 PASS 17 minutes
- 2025-06-22 PASS 17 minutes
- 2025-06-23 PASS 14 minutes
- 2025-06-24 PASS 16 minutes
- 2025-06-25 PASS 16 minutes
- 2025-06-26 PASS 15 minutes
- 2025-06-27 PASS 15 minutes
- 2025-06-28 PASS 16 minutes
- 2025-06-29 PASS 19 minutes
- 2025-06-30 PASS 15 minutes
- 2025-07-01
  - PASS 14 minutes
  - PASS 17 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 17 minutes
- 2025-07-02
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-07-03 PASS 17 minutes
- 2025-07-04 PASS 17 minutes
- 2025-07-05 PASS 16 minutes
- 2025-07-06 PASS 14 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 15 minutes
- 2025-07-09 PASS 18 minutes
- 2025-07-10 PASS 14 minutes