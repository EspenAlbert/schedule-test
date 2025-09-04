# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 3)
Success rate: 91.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s
[2025-09-01 07:49](#error-2025-09-01t0749130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s
[2025-09-01 11:01](#error-2025-09-01t1101140000) |  | dev | timeout | 10806.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 51 minutes
- 2025-08-07 PASS 54 minutes
- 2025-08-08 PASS 41 minutes
- 2025-08-09 PASS 36 minutes
- 2025-08-10 PASS 43 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 37 minutes
  - PASS 26 minutes
- 2025-08-13 PASS 32 minutes
- 2025-08-14 PASS 32 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 56 minutes
- 2025-08-17 PASS 44 minutes
- 2025-08-18 PASS 36 minutes
- 2025-08-19 PASS 33 minutes
- 2025-08-20
  - PASS 40 minutes
  - PASS 30 minutes
- 2025-08-21 PASS 26 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 41 minutes
- 2025-08-24 PASS 45 minutes
- 2025-08-25 PASS 56 minutes
- 2025-08-26 PASS 40 minutes
- 2025-08-27 PASS 39 minutes
- 2025-08-28 PASS 31 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 30 minutes
- 2025-08-31 PASS 35 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7318302Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-09-01T00:30:49.7318772Z     shared_resource.go:93: 
2025-09-01T00:30:49.7319634Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7321486Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7323272Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7324963Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7326801Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7328747Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:983
2025-09-01T00:30:49.7329556Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7332406Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7333876Z         	Test:       	TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-09-01T00:30:49.7336305Z         	Messages:   	Project creation failed: test-acc-tf-p-2380412060988967251, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7337851Z --- FAIL: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (0.15s)
```

  - FAIL a moment

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6635320Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-09-01T07:49:13.6635800Z     shared_resource.go:93: 
2025-09-01T07:49:13.6636771Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T07:49:13.6638519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T07:49:13.6640370Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T07:49:13.6642114Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T07:49:13.6643849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T07:49:13.6645831Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:983
2025-09-01T07:49:13.6646651Z         	Error:      	Received unexpected error:
2025-09-01T07:49:13.6649577Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T07:49:13.6651080Z         	Test:       	TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-09-01T07:49:13.6653444Z         	Messages:   	Project creation failed: test-acc-tf-p-8964016604487302440, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T07:49:13.6655130Z --- FAIL: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (0.12s)
```

  - FAIL 3 hours

### Error 2025-09-01T11:01:14+00:00
```
2025-09-01T11:01:14.4481150Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-09-01T11:01:14.4554720Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-09-01T11:01:14.4806255Z === NAME  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-09-01T11:01:14.4806971Z     resource_advanced_cluster_test.go:985: Step 1/3 error: Error running apply: exit status 1
2025-09-01T11:01:14.4807380Z         
2025-09-01T11:01:14.4807662Z         Error: Error in create (legacy)
2025-09-01T11:01:14.4807921Z         
2025-09-01T11:01:14.4808252Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T11:01:14.4808888Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T11:01:14.4809473Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T11:01:14.4809908Z         
2025-09-01T11:01:14.4810366Z         cluster=test-acc-tf-c-6973629868498208899 didn't reach desired state: IDLE,
2025-09-01T11:01:14.4810967Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-09-01T11:01:14.4811397Z         'REPAIRING', timeout: 3h0m0s)
2025-09-01T11:01:14.4811886Z --- FAIL: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (10806.15s)
```

  - PASS 38 minutes
  - PASS 26 minutes
  - PASS 32 minutes
  - PASS 27 minutes
  - PASS 34 minutes
- 2025-09-02 PASS 34 minutes
- 2025-09-03 PASS 43 minutes
- 2025-09-04 PASS 34 minutes