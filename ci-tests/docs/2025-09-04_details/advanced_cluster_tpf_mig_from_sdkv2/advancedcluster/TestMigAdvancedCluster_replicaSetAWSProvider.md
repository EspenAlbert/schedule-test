# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 37 TestRuns in dev, qa from 2025-08-05 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-08-06 PASS 20 minutes
- 2025-08-07 PASS 32 minutes
- 2025-08-08 PASS 17 minutes
- 2025-08-09 PASS 23 minutes
- 2025-08-10 PASS 26 minutes
- 2025-08-11 PASS an hour
- 2025-08-12 PASS 18 minutes
- 2025-08-13 PASS 19 minutes
- 2025-08-14 PASS 20 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 49 minutes
- 2025-08-17 PASS 34 minutes
- 2025-08-18 PASS 19 minutes
- 2025-08-19 PASS 21 minutes
- 2025-08-20
  - PASS 18 minutes
  - PASS 18 minutes
- 2025-08-21 PASS 16 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 20 minutes
- 2025-08-24 PASS 17 minutes
- 2025-08-25 PASS 14 minutes
- 2025-08-26 PASS 23 minutes
- 2025-08-27 PASS 22 minutes
- 2025-08-28 PASS 18 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 18 minutes
- 2025-08-31 PASS 21 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:31+00:00
```
2025-09-01T00:30:31.4287962Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-09-01T00:30:31.4289073Z     resource_advanced_cluster_migration_test.go:18: Running test SDKv2 to TPF
2025-09-01T00:30:31.6168913Z     shared_resource.go:93: 
2025-09-01T00:30:31.6171225Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:31.6175701Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:31.6179986Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:31.6183231Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:31.6186568Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:31.6189744Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:194
2025-09-01T00:30:31.6192190Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:290
2025-09-01T00:30:31.6194659Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:18
2025-09-01T00:30:31.6195501Z         	Error:      	Received unexpected error:
2025-09-01T00:30:31.6198432Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:31.6199764Z         	Test:       	TestMigAdvancedCluster_replicaSetAWSProvider
2025-09-01T00:30:31.6201994Z         	Messages:   	Project creation failed: test-acc-tf-p-5643509498739278151, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:31.6203431Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (0.19s)
```

  - PASS an hour
  - PASS an hour
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 16 minutes
  - PASS 15 minutes
- 2025-09-02 PASS 21 minutes
- 2025-09-03 PASS 23 minutes
- 2025-09-04 PASS 27 minutes