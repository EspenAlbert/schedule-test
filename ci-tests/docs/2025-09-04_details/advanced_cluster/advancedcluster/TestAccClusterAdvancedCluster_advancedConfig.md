# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 3)
Success rate: 91.67%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030410000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558400000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s
[2025-09-03 00:26](#error-2025-09-03t0026190000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68b78b2ba89cf4184d270e1b/clusters | dev | 54.00s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS an hour
- 2025-08-07 PASS an hour
- 2025-08-08 PASS an hour
- 2025-08-09 PASS 50 minutes
- 2025-08-10 PASS 55 minutes
- 2025-08-11 PASS 2 hours
- 2025-08-12
  - PASS 47 minutes
  - PASS 39 minutes
- 2025-08-13 PASS 42 minutes
- 2025-08-14 PASS 50 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS an hour
- 2025-08-18 PASS 45 minutes
- 2025-08-19 PASS 46 minutes
- 2025-08-20
  - PASS 45 minutes
  - PASS 47 minutes
- 2025-08-21 PASS 45 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 58 minutes
- 2025-08-24 PASS 48 minutes
- 2025-08-25 PASS 49 minutes
- 2025-08-26 PASS 59 minutes
- 2025-08-27 PASS 53 minutes
- 2025-08-28 PASS 47 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 46 minutes
- 2025-08-31 PASS 45 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:41+00:00
```
2025-09-01T00:30:41.9445442Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-09-01T00:30:42.0649402Z     shared_resource.go:93: 
2025-09-01T00:30:42.0651060Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:42.0653254Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:42.0655689Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:42.0658267Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:42.0660437Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:42.0662930Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:416
2025-09-01T00:30:42.0663955Z         	Error:      	Received unexpected error:
2025-09-01T00:30:42.0667547Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:42.0669216Z         	Test:       	TestAccClusterAdvancedCluster_advancedConfig
2025-09-01T00:30:42.0671927Z         	Messages:   	Project creation failed: test-acc-tf-p-2920231004765560386, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:42.0673405Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (0.12s)
```

  - FAIL a moment

### Error 2025-09-01T05:58:40+00:00
```
2025-09-01T05:58:40.3157891Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-09-01T05:58:40.4811120Z     shared_resource.go:93: 
2025-09-01T05:58:40.4813563Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T05:58:40.4817211Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T05:58:40.4819918Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T05:58:40.4822928Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T05:58:40.4824960Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T05:58:40.4826958Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:416
2025-09-01T05:58:40.4827951Z         	Error:      	Received unexpected error:
2025-09-01T05:58:40.4830637Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:40.4832238Z         	Test:       	TestAccClusterAdvancedCluster_advancedConfig
2025-09-01T05:58:40.4834458Z         	Messages:   	Project creation failed: test-acc-tf-p-7448867036407730461, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:40.4835869Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (0.17s)
```

  - PASS an hour
  - PASS 42 minutes
  - PASS 50 minutes
  - PASS 55 minutes
  - PASS 44 minutes
  - PASS 46 minutes
- 2025-09-02 PASS 48 minutes
- 2025-09-03

### Error 2025-09-03T00:26:19+00:00
```
2025-09-03T00:26:19.9005259Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-09-03T00:27:34.8646563Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-09-03T00:28:24.8589067Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-09-03T00:28:24.8591113Z     pre_check.go:40: Time before creating cluster: 2025-09-03T00:28:24.858598246Z, ProjectID: 68b78b2ba89cf4184d270e1b, Cluster name: test-acc-tf-c-5451650618111936136
2025-09-03T00:28:25.8634321Z   
2025-09-03T00:28:25.8635080Z     resource_advanced_cluster_test.go:460: Step 1/4 error: Error running apply: exit status 1
2025-09-03T00:28:25.8635612Z         
2025-09-03T00:28:25.8640353Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b78b2ba89cf4184d270e1b/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-09-03T00:28:25.8642927Z         
2025-09-03T00:28:25.8643545Z           with mongodbatlas_advanced_cluster.test,
2025-09-03T00:28:25.8644735Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-03T00:28:25.8645837Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-03T00:28:25.8646398Z         
2025-09-03T00:28:25.9102799Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (54.01s)
```

- 2025-09-04 PASS 52 minutes