# advanced_cluster_tpf/advancedcluster/TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4dbc939f27413251721/clusters | dev | flaky_500 | 6.05s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 19 minutes
- 2025-04-13 PASS 22 minutes
- 2025-04-14 PASS 17 minutes
- 2025-04-15 PASS 17 minutes
- 2025-04-16
  - PASS 19 minutes
  - PASS 23 minutes
- 2025-04-17 PASS 20 minutes
- 2025-04-18 PASS 19 minutes
- 2025-04-19 PASS 22 minutes
- 2025-04-20 PASS 21 minutes
- 2025-04-21 PASS 25 minutes
- 2025-04-22 PASS 18 minutes
- 2025-04-23 PASS 21 minutes
- 2025-04-24 PASS 18 minutes
- 2025-04-25 PASS 20 minutes
- 2025-04-26 PASS 19 minutes
- 2025-04-27 PASS 24 minutes
- 2025-04-28 PASS 18 minutes
- 2025-04-29 PASS 22 minutes
- 2025-04-30 PASS 19 minutes
- 2025-05-01
  - PASS 17 minutes
  - PASS 21 minutes
  - PASS 17 minutes
  - PASS 21 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 19 minutes
- 2025-05-02 PASS 23 minutes
- 2025-05-03 PASS 20 minutes
- 2025-05-04 PASS 35 minutes
- 2025-05-05 PASS 21 minutes
- 2025-05-06 PASS 21 minutes
- 2025-05-07 PASS 19 minutes
- 2025-05-08 PASS 22 minutes
- 2025-05-09 PASS 21 minutes
- 2025-05-10 PASS 19 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.7990058Z === RUN   TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-05-11T00:30:01.7990559Z     shared_resource.go:84: 
2025-05-11T00:30:01.7991593Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7993340Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7995093Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7996818Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7998792Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:832
2025-05-11T00:30:01.7999603Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.8000600Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8001599Z         	Test:       	TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-05-11T00:30:01.8002767Z         	Messages:   	Project creation failed: test-acc-tf-p-3528723051610762720, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8003634Z --- FAIL: TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel (0.02s)
```

- 2025-05-12 PASS 22 minutes
- 2025-05-13
  - PASS 18 minutes
  - PASS 20 minutes
- 2025-05-14 PASS 23 minutes
- 2025-05-15 PASS 20 minutes
- 2025-05-16 PASS 19 minutes
- 2025-05-17 PASS 18 minutes
- 2025-05-18 PASS 17 minutes
- 2025-05-19 PASS 18 minutes
- 2025-05-20 PASS 18 minutes
- 2025-05-21
  - PASS 31 minutes
  - PASS 16 minutes
- 2025-05-22 PASS 20 minutes
- 2025-05-23 PASS 19 minutes
- 2025-05-24 PASS 17 minutes
- 2025-05-25 PASS 20 minutes
- 2025-05-26 PASS 18 minutes
- 2025-05-27 PASS 17 minutes
- 2025-05-28
  - PASS 17 minutes
  - PASS 19 minutes
  - PASS 22 minutes
- 2025-05-29 PASS 25 minutes
- 2025-05-30
  - PASS an hour
  - PASS 24 minutes
- 2025-05-31 PASS 22 minutes
- 2025-06-01
  - PASS 22 minutes
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 17 minutes
- 2025-06-02
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 19 minutes
- 2025-06-03 PASS 21 minutes
- 2025-06-04 PASS 20 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5891526Z === RUN   TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-06-05T00:35:38.5892222Z     resource_advanced_cluster_test.go:837: Adding variable groupId=6840e4dbc939f27413251721
2025-06-05T00:35:38.5892928Z     resource_advanced_cluster_test.go:837: Adding variable clusterName=test-acc-tf-c-7272354608293381317
2025-06-05T00:35:38.5959854Z === CONT  TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-06-05T00:35:38.5978461Z   
2025-06-05T00:35:38.5978911Z     resource_advanced_cluster_test.go:837: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.5979318Z         
2025-06-05T00:35:38.5979590Z         Error: Error in create (legacy)
2025-06-05T00:35:38.5979951Z         
2025-06-05T00:35:38.5980275Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.5980911Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.5981504Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.5981809Z         
2025-06-05T00:35:38.5982213Z         cluster name: test-acc-tf-c-7272354608293381317, API error details:
2025-06-05T00:35:38.5982881Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4dbc939f27413251721/clusters
2025-06-05T00:35:38.5983557Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.5984144Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.5984531Z         BadRequestDetail: 
2025-06-05T00:35:38.5986554Z --- FAIL: TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel (6.46s)
```

- 2025-06-06 PASS an hour
- 2025-06-07 PASS 17 minutes
- 2025-06-08 PASS 18 minutes
- 2025-06-09 PASS 18 minutes
- 2025-06-10 PASS 45 minutes
- 2025-06-11
  - PASS 18 minutes
  - PASS 19 minutes
- 2025-06-12 PASS 20 minutes
- 2025-06-13 PASS 21 minutes
- 2025-06-14 PASS 35 minutes
- 2025-06-15 PASS 19 minutes
- 2025-06-16 PASS 33 minutes
- 2025-06-17 PASS 17 minutes
- 2025-06-18
  - PASS 23 minutes
  - PASS 22 minutes
- 2025-06-19 PASS 51 minutes
- 2025-06-20 PASS 18 minutes
- 2025-06-21 PASS 20 minutes
- 2025-06-22 PASS 18 minutes
- 2025-06-23 PASS 19 minutes
- 2025-06-24 PASS 22 minutes
- 2025-06-25 PASS 17 minutes
- 2025-06-26
  - PASS 22 minutes
  - PASS 16 minutes
- 2025-06-27 PASS 19 minutes
- 2025-06-28 PASS 18 minutes
- 2025-06-29 PASS 22 minutes
- 2025-06-30 PASS 20 minutes
- 2025-07-01
  - PASS 18 minutes
  - PASS 21 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 19 minutes
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 20 minutes
- 2025-07-04 PASS 20 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06 PASS 18 minutes
- 2025-07-07 PASS 16 minutes
- 2025-07-08 PASS 26 minutes
- 2025-07-09 PASS 18 minutes
- 2025-07-10 PASS 17 minutes