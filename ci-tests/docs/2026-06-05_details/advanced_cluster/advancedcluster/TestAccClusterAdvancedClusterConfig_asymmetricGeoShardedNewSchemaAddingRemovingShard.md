# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-15 00:57](#error-2026-05-15t0057150000) |  | dev | timeout | 10806.02s
[2026-05-28 01:02](#error-2026-05-28t0102450000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS an hour
- 2026-05-09 PASS 42 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 57 minutes
- 2026-05-12 PASS 44 minutes
- 2026-05-13 PASS 45 minutes
- 2026-05-14 PASS an hour
- 2026-05-15

### Error 2026-05-15T00:57:15+00:00
```
2026-05-15T00:57:15.5971143Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-05-15T00:58:37.3590385Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-05-15T03:58:43.1012924Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-05-15T03:58:43.1013837Z     resource_test.go:753: Step 1/4 error: Error running apply: exit status 1
2026-05-15T03:58:43.1014334Z         
2026-05-15T03:58:43.1014597Z         Error: Error in create
2026-05-15T03:58:43.1014854Z         
2026-05-15T03:58:43.1015294Z           with mongodbatlas_advanced_cluster.test,
2026-05-15T03:58:43.1016096Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-15T03:58:43.1016838Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-15T03:58:43.1017162Z         
2026-05-15T03:58:43.1017752Z         cluster=test-acc-tf-c-7262216551546464470 didn't reach desired state: IDLE,
2026-05-15T03:58:43.1018342Z         error: context deadline exceeded
2026-05-15T03:58:43.1530855Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (10806.20s)
```

- 2026-05-16 PASS 50 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS an hour
- 2026-05-19 PASS 37 minutes
- 2026-05-20 PASS 47 minutes
- 2026-05-21 PASS an hour
- 2026-05-22 PASS an hour
- 2026-05-23 PASS 50 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 56 minutes
- 2026-05-26 PASS 38 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:02:45+00:00
```
2026-05-28T01:02:45.2940872Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-05-28T01:02:45.7429871Z     shared_resource.go:160: 
2026-05-28T01:02:45.7432017Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:45.7435296Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:02:45.7438089Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:02:45.7440541Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:02:45.7443043Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:02:45.7445553Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:759
2026-05-28T01:02:45.7448195Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:754
2026-05-28T01:02:45.7449597Z         	Error:      	Received unexpected error:
2026-05-28T01:02:45.7453157Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:45.7454898Z         	Test:       	TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-05-28T01:02:45.7457434Z         	Messages:   	Project creation failed: test-acc-tf-p-1692720495872568499, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:45.7459265Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (0.45s)
```

- 2026-05-29 PASS 58 minutes
- 2026-05-30 PASS 35 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 34 minutes
- 2026-06-03 PASS an hour
- 2026-06-04 PASS an hour
- 2026-06-05 PASS 49 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 45 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 39 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 41 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 39 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
