# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-19 00:28](#error-2025-08-19t0028430000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68a3c53bc1be074b83c5af7b/clusters | dev | 91.05s
[2025-09-01 00:30](#error-2025-09-01t0030370000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 23 minutes
- 2025-08-07 PASS 39 minutes
- 2025-08-08 PASS 18 minutes
- 2025-08-09 PASS 24 minutes
- 2025-08-10 PASS 36 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 25 minutes
  - PASS 18 minutes
- 2025-08-13 PASS 23 minutes
- 2025-08-14 PASS 30 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 51 minutes
- 2025-08-17 PASS 44 minutes
- 2025-08-18 PASS 24 minutes
- 2025-08-19

### Error 2025-08-19T00:28:43+00:00
```
2025-08-19T00:28:43.5027255Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-08-19T00:29:52.8187589Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-08-19T00:31:19.1445195Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-08-19T00:31:19.1446478Z     pre_check.go:40: Time before creating cluster: 2025-08-19T00:31:19.144154702Z, ProjectID: 68a3c53bc1be074b83c5af7b, Cluster name: test-acc-tf-c-6082235770045964675
2025-08-19T00:31:21.2623030Z   
2025-08-19T00:31:21.2623532Z     resource_advanced_cluster_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-08-19T00:31:21.2623982Z         
2025-08-19T00:31:21.2626015Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a3c53bc1be074b83c5af7b/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-19T00:31:21.2627570Z         
2025-08-19T00:31:21.2627888Z           with mongodbatlas_advanced_cluster.test,
2025-08-19T00:31:21.2628518Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-19T00:31:21.2629294Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-19T00:31:21.2629605Z         
2025-08-19T00:31:21.4478767Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (91.48s)
```

- 2025-08-20
  - PASS 20 minutes
  - PASS 20 minutes
- 2025-08-21 PASS 20 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 30 minutes
- 2025-08-24 PASS 18 minutes
- 2025-08-25 PASS 25 minutes
- 2025-08-26 PASS 41 minutes
- 2025-08-27 PASS 30 minutes
- 2025-08-28 PASS 30 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 23 minutes
- 2025-08-31 PASS 34 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:37+00:00
```
2025-09-01T00:30:37.3536663Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-09-01T00:30:37.4602210Z     shared_resource.go:93: 
2025-09-01T00:30:37.4604295Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:37.4607924Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:37.4611360Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:37.4614752Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:37.4618450Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:37.4622425Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:194
2025-09-01T00:30:37.4626919Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:290
2025-09-01T00:30:37.4631238Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:18
2025-09-01T00:30:37.4632893Z         	Error:      	Received unexpected error:
2025-09-01T00:30:37.4638474Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:37.4640093Z         	Test:       	TestMigAdvancedCluster_replicaSetAWSProvider
2025-09-01T00:30:37.4642353Z         	Messages:   	Project creation failed: test-acc-tf-p-3446134282665723776, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:37.4645367Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (0.11s)
```

  - PASS 28 minutes
  - PASS an hour
  - PASS 19 minutes
  - PASS 27 minutes
  - PASS 17 minutes
  - PASS 20 minutes
  - PASS 23 minutes
- 2025-09-02 PASS 25 minutes
- 2025-09-03 PASS 34 minutes
- 2025-09-04 PASS 32 minutes