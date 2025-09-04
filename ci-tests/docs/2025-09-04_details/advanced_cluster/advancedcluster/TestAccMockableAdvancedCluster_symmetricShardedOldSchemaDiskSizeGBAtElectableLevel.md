# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 3)
Success rate: 91.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-20 13:59](#error-2025-08-20t1359000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68a5d4a45734606989a3468d/clusters | qa | out_of_capacity | 8.09s
[2025-09-01 00:30](#error-2025-09-01t0030420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558450000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 37 minutes
- 2025-08-07 PASS 46 minutes
- 2025-08-08 PASS 31 minutes
- 2025-08-09 PASS 29 minutes
- 2025-08-10 PASS 40 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 29 minutes
  - PASS 25 minutes
- 2025-08-13 PASS 26 minutes
- 2025-08-14 PASS 32 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 54 minutes
- 2025-08-17 PASS 47 minutes
- 2025-08-18 PASS 29 minutes
- 2025-08-19 PASS 33 minutes
- 2025-08-20
  - PASS 30 minutes
  - FAIL 8 seconds

### Error 2025-08-20T13:59:00+00:00
```
2025-08-20T13:59:00.8657428Z === RUN   TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-08-20T13:59:04.3653721Z     resource_advanced_cluster_test.go:838: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-08-20T14:00:09.6841648Z === CONT  TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-08-20T14:00:14.8096479Z === NAME  TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-08-20T14:00:14.8099165Z     resource_advanced_cluster_test.go:838: Step 1/3 error: Error running apply: exit status 1
2025-08-20T14:00:14.8101493Z         
2025-08-20T14:00:14.8105745Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d4a45734606989a3468d/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2025-08-20T14:00:14.8122948Z         
2025-08-20T14:00:14.8123501Z           with mongodbatlas_advanced_cluster.test,
2025-08-20T14:00:14.8124559Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-20T14:00:14.8125508Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-20T14:00:14.8126342Z         
2025-08-20T14:00:15.0628923Z --- FAIL: TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel (8.91s)
```

- 2025-08-21 PASS 25 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 32 minutes
- 2025-08-24 PASS 22 minutes
- 2025-08-25 PASS 21 minutes
- 2025-08-26 PASS 30 minutes
- 2025-08-27 PASS 40 minutes
- 2025-08-28 PASS 28 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 25 minutes
- 2025-08-31 PASS 33 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:42+00:00
```
2025-09-01T00:30:42.9152273Z === RUN   TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-09-01T00:30:43.0358786Z     shared_resource.go:93: 
2025-09-01T00:30:43.0360969Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:43.0363723Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:43.0366033Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:43.0368033Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:43.0370028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:43.0372062Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:837
2025-09-01T00:30:43.0373115Z         	Error:      	Received unexpected error:
2025-09-01T00:30:43.0376111Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.0377677Z         	Test:       	TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-09-01T00:30:43.0380093Z         	Messages:   	Project creation failed: test-acc-tf-p-4739279135041961958, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.0381696Z --- FAIL: TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel (0.12s)
```

  - FAIL a moment

### Error 2025-09-01T05:58:45+00:00
```
2025-09-01T05:58:45.4091427Z === RUN   TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-09-01T05:58:45.5835344Z     shared_resource.go:93: 
2025-09-01T05:58:45.5837041Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T05:58:45.5840768Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T05:58:45.5843965Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T05:58:45.5846040Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T05:58:45.5847955Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T05:58:45.5850223Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:837
2025-09-01T05:58:45.5851059Z         	Error:      	Received unexpected error:
2025-09-01T05:58:45.5853717Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:45.5855229Z         	Test:       	TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-09-01T05:58:45.5857641Z         	Messages:   	Project creation failed: test-acc-tf-p-7021269042771610616, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:45.5859191Z --- FAIL: TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel (0.17s)
```

  - PASS an hour
  - PASS 30 minutes
  - PASS 40 minutes
  - PASS 30 minutes
  - PASS 29 minutes
  - PASS 27 minutes
- 2025-09-02 PASS 32 minutes
- 2025-09-03 PASS 44 minutes
- 2025-09-04 PASS 28 minutes