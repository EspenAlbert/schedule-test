# advanced_cluster_tpf/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-28 03:36](#error-2025-08-28t0336120000) |  | dev | 12.01s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 28 minutes
- 2025-08-07 PASS 38 minutes
- 2025-08-08 PASS 20 minutes
- 2025-08-09 PASS 22 minutes
- 2025-08-10 PASS 40 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 24 minutes
  - PASS 21 minutes
- 2025-08-13 PASS 25 minutes
- 2025-08-14 PASS 25 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 51 minutes
- 2025-08-17 PASS 32 minutes
- 2025-08-18 PASS 23 minutes
- 2025-08-19 PASS 25 minutes
- 2025-08-20
  - PASS 22 minutes
  - PASS 21 minutes
- 2025-08-21 PASS 22 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 30 minutes
- 2025-08-24 PASS 13 minutes
- 2025-08-25 PASS 18 minutes
- 2025-08-26 PASS 30 minutes
- 2025-08-27 PASS 29 minutes
- 2025-08-28

### Error 2025-08-28T03:36:12+00:00
```
2025-08-28T03:36:12.1338513Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-08-28T03:36:12.1414372Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-08-28T03:36:12.1443422Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-08-28T03:36:12.1444421Z     pre_check.go:40: Time before creating cluster: 2025-08-28T00:29:35.619170731Z, ProjectID: 68afa27be2173c2b10936e20, Cluster name: test-acc-tf-c-110191231553629756
2025-08-28T03:36:12.1460733Z    test_name=TestMigAdvancedCluster_replicaSetAWSProvider test_terraform_path=/home/runner/work/_temp/b47025f5-7510-428f-bb0e-0b343f5b8a0a/terraform test_working_directory=/tmp/plugintest2394477647 test_step_number=1
2025-08-28T03:36:12.1461972Z     resource_advanced_cluster_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-08-28T03:36:12.1462514Z         
2025-08-28T03:36:12.1462754Z         Error: Error in create
2025-08-28T03:36:12.1463084Z         
2025-08-28T03:36:12.1463412Z           with mongodbatlas_advanced_cluster.test,
2025-08-28T03:36:12.1464162Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-28T03:36:12.1464855Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-28T03:36:12.1465157Z         
2025-08-28T03:36:12.1465661Z         cluster name: test-acc-tf-c-110191231553629756, API error details:
2025-08-28T03:36:12.1466416Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa27be2173c2b10936e20/clusters
2025-08-28T03:36:12.1467193Z         POST: HTTP 403 Forbidden (Error code:
2025-08-28T03:36:12.1467808Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-08-28T03:36:12.1468409Z         Configuration. Contains selections that are unavailable due to your
2025-08-28T03:36:12.1469105Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-08-28T03:36:12.1469620Z         BadRequestDetail: 
2025-08-28T03:36:12.1469948Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (12.12s)
```

- 2025-08-29: MISSING
- 2025-08-30 PASS 22 minutes
- 2025-08-31 PASS 25 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.6669857Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-09-01T00:30:49.6670508Z     shared_resource.go:93: 
2025-09-01T00:30:49.6672640Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.6676035Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.6679050Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.6680838Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.6682827Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.6684997Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:194
2025-09-01T00:30:49.6687135Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:290
2025-09-01T00:30:49.6689316Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:18
2025-09-01T00:30:49.6690153Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.6693005Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6694372Z         	Test:       	TestMigAdvancedCluster_replicaSetAWSProvider
2025-09-01T00:30:49.6696580Z         	Messages:   	Project creation failed: test-acc-tf-p-8005140928837054417, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6698013Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (0.31s)
```

  - PASS an hour
  - PASS an hour
  - PASS 20 minutes
  - PASS 24 minutes
  - PASS 16 minutes
  - PASS 20 minutes
  - PASS 22 minutes
- 2025-09-02 PASS 27 minutes
- 2025-09-03 PASS 22 minutes
- 2025-09-04 PASS 27 minutes