# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 3)
Success rate: 91.67%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-14 00:29](#error-2025-08-14t0029210000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/689d2ddd92412a7721aec524/clusters | dev | 0.10s
[2025-09-01 00:30](#error-2025-09-01t0030430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558450000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 59 minutes
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 46 minutes
- 2025-08-09 PASS 46 minutes
- 2025-08-10 PASS an hour
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 47 minutes
  - PASS 35 minutes
- 2025-08-13 PASS 39 minutes
- 2025-08-14

### Error 2025-08-14T00:29:21+00:00
```
2025-08-14T00:29:21.2661247Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-08-14T00:30:28.4040450Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-08-14T00:30:29.3091429Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-08-14T00:30:29.3092692Z     resource_advanced_cluster_test.go:936: Step 1/4 error: Error running apply: exit status 1
2025-08-14T00:30:29.3093398Z         
2025-08-14T00:30:29.3097233Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/689d2ddd92412a7721aec524/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-14T00:30:29.3099768Z         
2025-08-14T00:30:29.3100523Z           with mongodbatlas_advanced_cluster.test,
2025-08-14T00:30:29.3101656Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-14T00:30:29.3102707Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-14T00:30:29.3103237Z         
2025-08-14T00:30:29.3768771Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (0.97s)
```

- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 57 minutes
- 2025-08-18 PASS 45 minutes
- 2025-08-19 PASS 44 minutes
- 2025-08-20
  - PASS 47 minutes
  - PASS 45 minutes
- 2025-08-21 PASS 45 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 45 minutes
- 2025-08-24 PASS an hour
- 2025-08-25 PASS 45 minutes
- 2025-08-26 PASS 55 minutes
- 2025-08-27 PASS 51 minutes
- 2025-08-28 PASS 43 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 43 minutes
- 2025-08-31 PASS 48 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:43+00:00
```
2025-09-01T00:30:43.0386579Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-09-01T00:30:43.1484230Z     shared_resource.go:93: 
2025-09-01T00:30:43.1486247Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:43.1489501Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:43.1491805Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:43.1493811Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:43.1496080Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:43.1498575Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:936
2025-09-01T00:30:43.1499543Z         	Error:      	Received unexpected error:
2025-09-01T00:30:43.1502642Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.1504237Z         	Test:       	TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-09-01T00:30:43.1506870Z         	Messages:   	Project creation failed: test-acc-tf-p-4909127341265271697, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.1508643Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (0.11s)
```

  - FAIL a moment

### Error 2025-09-01T05:58:45+00:00
```
2025-09-01T05:58:45.5863641Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-09-01T05:58:45.7548408Z     shared_resource.go:93: 
2025-09-01T05:58:45.7550421Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T05:58:45.7553555Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T05:58:45.7555470Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T05:58:45.7557334Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T05:58:45.7559720Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T05:58:45.7561891Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:936
2025-09-01T05:58:45.7562773Z         	Error:      	Received unexpected error:
2025-09-01T05:58:45.7565562Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:45.7567081Z         	Test:       	TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-09-01T05:58:45.7569529Z         	Messages:   	Project creation failed: test-acc-tf-p-3963536671295207040, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:45.7571306Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (0.17s)
```

  - PASS an hour
  - PASS 42 minutes
  - PASS 47 minutes
  - PASS 38 minutes
  - PASS 41 minutes
  - PASS 42 minutes
- 2025-09-02 PASS 48 minutes
- 2025-09-03 PASS 57 minutes
- 2025-09-04 PASS 48 minutes