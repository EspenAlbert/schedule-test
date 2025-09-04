# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 28 minutes
- 2025-08-07 PASS 42 minutes
- 2025-08-08 PASS 35 minutes
- 2025-08-09 PASS 24 minutes
- 2025-08-10 PASS 30 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 33 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 42 minutes
- 2025-08-14 PASS 34 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 51 minutes
- 2025-08-17 PASS 44 minutes
- 2025-08-18 PASS 28 minutes
- 2025-08-19 PASS 26 minutes
- 2025-08-20
  - PASS 25 minutes
  - PASS 41 minutes
- 2025-08-21 PASS 43 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 30 minutes
- 2025-08-24 PASS 32 minutes
- 2025-08-25 PASS 32 minutes
- 2025-08-26 PASS 39 minutes
- 2025-08-27 PASS 29 minutes
- 2025-08-28 PASS 27 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 29 minutes
- 2025-08-31 PASS 34 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7129116Z === RUN   TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-09-01T00:30:49.7129607Z     shared_resource.go:93: 
2025-09-01T00:30:49.7130468Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7132390Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7134123Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7135839Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7137561Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7139665Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:639
2025-09-01T00:30:49.7140483Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7143265Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7144767Z         	Test:       	TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-09-01T00:30:49.7147235Z         	Messages:   	Project creation failed: test-acc-tf-p-4835251749610615464, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7148812Z --- FAIL: TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError (0.16s)
```

  - PASS an hour
  - PASS an hour
  - PASS 33 minutes
  - PASS 39 minutes
  - PASS 25 minutes
  - PASS 24 minutes
  - PASS 23 minutes
- 2025-09-02 PASS 29 minutes
- 2025-09-03 PASS 42 minutes
- 2025-09-04 PASS 31 minutes