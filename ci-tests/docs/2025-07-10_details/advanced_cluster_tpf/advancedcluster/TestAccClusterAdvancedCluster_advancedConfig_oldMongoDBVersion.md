# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4d6161ca93c1f05303e/clusters | dev | flaky_500 | 15.09s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 15 minutes
- 2025-04-13 PASS 18 minutes
- 2025-04-14 PASS 12 minutes
- 2025-04-15 PASS 14 minutes
- 2025-04-16
  - PASS 16 minutes
  - PASS 23 minutes
- 2025-04-17 PASS 16 minutes
- 2025-04-18 PASS 15 minutes
- 2025-04-19 PASS 13 minutes
- 2025-04-20 PASS 16 minutes
- 2025-04-21 PASS 23 minutes
- 2025-04-22 PASS 14 minutes
- 2025-04-23 PASS 16 minutes
- 2025-04-24 PASS 13 minutes
- 2025-04-25 PASS 12 minutes
- 2025-04-26 PASS 12 minutes
- 2025-04-27 PASS 19 minutes
- 2025-04-28 PASS 14 minutes
- 2025-04-29 PASS 17 minutes
- 2025-04-30 PASS 15 minutes
- 2025-05-01
  - PASS 13 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 17 minutes
  - PASS 14 minutes
  - PASS 16 minutes
- 2025-05-02 PASS 21 minutes
- 2025-05-03 PASS 16 minutes
- 2025-05-04 PASS 13 minutes
- 2025-05-05 PASS 14 minutes
- 2025-05-06 PASS 16 minutes
- 2025-05-07 PASS 13 minutes
- 2025-05-08 PASS 19 minutes
- 2025-05-09 PASS 18 minutes
- 2025-05-10 PASS 18 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.7840834Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-05-11T00:30:01.7841408Z     shared_resource.go:84: 
2025-05-11T00:30:01.7842291Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7844008Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7845746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7847515Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7849505Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:366
2025-05-11T00:30:01.7850333Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7851208Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7852048Z         	Test:       	TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-05-11T00:30:01.7853143Z         	Messages:   	Project creation failed: test-acc-tf-p-6074792920220854062, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7853932Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (0.02s)
```

- 2025-05-12 PASS 15 minutes
- 2025-05-13
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-05-14 PASS 19 minutes
- 2025-05-15 PASS 16 minutes
- 2025-05-16 PASS 14 minutes
- 2025-05-17 PASS 15 minutes
- 2025-05-18 PASS 17 minutes
- 2025-05-19 PASS 17 minutes
- 2025-05-20 PASS 13 minutes
- 2025-05-21
  - PASS 15 minutes
  - PASS 13 minutes
- 2025-05-22 PASS 15 minutes
- 2025-05-23 PASS 29 minutes
- 2025-05-24 PASS 15 minutes
- 2025-05-25 PASS 26 minutes
- 2025-05-26 PASS 14 minutes
- 2025-05-27 PASS 13 minutes
- 2025-05-28
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 16 minutes
- 2025-05-29 PASS 35 minutes
- 2025-05-30
  - PASS an hour
  - PASS 21 minutes
- 2025-05-31 PASS 12 minutes
- 2025-06-01
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 11 minutes
  - PASS 14 minutes
  - PASS 13 minutes
- 2025-06-02
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 14 minutes
- 2025-06-03 PASS 16 minutes
- 2025-06-04 PASS 16 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5877106Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-06-05T00:35:38.5941976Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-06-05T00:35:38.6665325Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-06-05T00:35:38.6665959Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:41.009759358Z, ProjectID: 6840e4d6161ca93c1f05303e, Cluster name: test-acc-tf-c-5872858934758736812
2025-06-05T00:35:38.6675038Z   
2025-06-05T00:35:38.6675391Z     resource_advanced_cluster_test.go:394: Step 2/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.6675485Z         
2025-06-05T00:35:38.6675637Z         Error: Error in create
2025-06-05T00:35:38.6675723Z         
2025-06-05T00:35:38.6675954Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6676403Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6676784Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6676877Z         
2025-06-05T00:35:38.6677193Z         cluster name: test-acc-tf-c-5872858934758736812, API error details:
2025-06-05T00:35:38.6677599Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d6161ca93c1f05303e/clusters
2025-06-05T00:35:38.6677957Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6678423Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6678564Z         BadRequestDetail: 
2025-06-05T00:35:38.6678828Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (15.85s)
```

- 2025-06-06 PASS 15 minutes
- 2025-06-07 PASS 18 minutes
- 2025-06-08 PASS 17 minutes
- 2025-06-09 PASS 16 minutes
- 2025-06-10 PASS 23 minutes
- 2025-06-11
  - PASS 13 minutes
  - PASS 18 minutes
- 2025-06-12 PASS 16 minutes
- 2025-06-13 PASS 15 minutes
- 2025-06-14 PASS 14 minutes
- 2025-06-15 PASS 15 minutes
- 2025-06-16 PASS 21 minutes
- 2025-06-17 PASS 17 minutes
- 2025-06-18
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-06-19 PASS 45 minutes
- 2025-06-20 PASS 13 minutes
- 2025-06-21 PASS 15 minutes
- 2025-06-22 PASS 15 minutes
- 2025-06-23 PASS 13 minutes
- 2025-06-24 PASS 23 minutes
- 2025-06-25 PASS 13 minutes
- 2025-06-26
  - PASS 18 minutes
  - PASS 12 minutes
- 2025-06-27 PASS 18 minutes
- 2025-06-28 PASS 13 minutes
- 2025-06-29 PASS 19 minutes
- 2025-06-30 PASS 19 minutes
- 2025-07-01
  - PASS 14 minutes
  - PASS 11 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 16 minutes
- 2025-07-02 PASS 14 minutes
- 2025-07-03 PASS 14 minutes
- 2025-07-04 PASS 18 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06 PASS 14 minutes
- 2025-07-07 PASS 14 minutes
- 2025-07-08 PASS 20 minutes
- 2025-07-09 PASS 13 minutes
- 2025-07-10 PASS 15 minutes