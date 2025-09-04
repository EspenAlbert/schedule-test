# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:31](#error-2025-08-17t0031440000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68a122eff746882a383ca4bb/clusters | qa | out_of_capacity | 5.07s
[2025-09-01 00:30](#error-2025-09-01t0030420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 43 minutes
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 48 minutes
- 2025-08-09 PASS 46 minutes
- 2025-08-10 PASS 47 minutes
- 2025-08-11 PASS 2 hours
- 2025-08-12
  - PASS 38 minutes
  - PASS 32 minutes
- 2025-08-13 PASS 49 minutes
- 2025-08-14 PASS an hour
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17

### Error 2025-08-17T00:31:44+00:00
```
2025-08-17T00:31:44.7454493Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-08-17T00:32:50.8949766Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-08-17T00:32:56.1739261Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-08-17T00:32:56.1740372Z     resource_advanced_cluster_test.go:806: Step 1/3 error: Error running apply: exit status 1
2025-08-17T00:32:56.1741080Z         
2025-08-17T00:32:56.1744050Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122eff746882a383ca4bb/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2025-08-17T00:32:56.1746799Z         
2025-08-17T00:32:56.1747359Z           with mongodbatlas_advanced_cluster.test,
2025-08-17T00:32:56.1748478Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-17T00:32:56.1749526Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-17T00:32:56.1750037Z         
2025-08-17T00:32:56.5989868Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema (5.71s)
```

- 2025-08-18 PASS 41 minutes
- 2025-08-19 PASS 42 minutes
- 2025-08-20
  - PASS 40 minutes
  - PASS 43 minutes
- 2025-08-21 PASS 37 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 41 minutes
- 2025-08-24 PASS 31 minutes
- 2025-08-25 PASS 44 minutes
- 2025-08-26 PASS 59 minutes
- 2025-08-27 PASS 44 minutes
- 2025-08-28 PASS 38 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 39 minutes
- 2025-08-31 PASS 48 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:42+00:00
```
2025-09-01T00:30:42.7695893Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-09-01T00:30:42.9109769Z     shared_resource.go:93: 
2025-09-01T00:30:42.9111514Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:42.9114119Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:42.9117012Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:42.9136809Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:42.9138607Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:42.9140601Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:812
2025-09-01T00:30:42.9142705Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:807
2025-09-01T00:30:42.9143525Z         	Error:      	Received unexpected error:
2025-09-01T00:30:42.9146358Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:42.9147808Z         	Test:       	TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-09-01T00:30:42.9150122Z         	Messages:   	Project creation failed: test-acc-tf-p-2646399370231836486, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:42.9151630Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema (0.14s)
```

  - PASS 40 minutes
  - PASS an hour
  - PASS 50 minutes
  - PASS 47 minutes
  - PASS 35 minutes
  - PASS 36 minutes
  - PASS 36 minutes
- 2025-09-02 PASS 40 minutes
- 2025-09-03 PASS 54 minutes
- 2025-09-04 PASS 44 minutes