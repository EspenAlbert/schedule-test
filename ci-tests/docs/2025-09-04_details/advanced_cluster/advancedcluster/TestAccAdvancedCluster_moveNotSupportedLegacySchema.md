# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveNotSupportedLegacySchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2) SKIP(x 2)
Success rate: 94.12%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-06 00:30](#error-2025-08-06t0030580000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v1.0/groups/6892a2432e7dcc2aaecb36e6/clusters | dev | 7.09s
[2025-09-01 00:30](#error-2025-09-01t0030370000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06

### Error 2025-08-06T00:30:58+00:00
```
2025-08-06T00:30:58.9276401Z === RUN   TestAccAdvancedCluster_moveNotSupportedLegacySchema
2025-08-06T00:30:58.9277764Z     move_state_test.go:16: Creating execution project: test-acc-tf-p-5665455751041505843
2025-08-06T00:32:25.7087484Z === CONT  TestAccAdvancedCluster_moveNotSupportedLegacySchema
2025-08-06T00:32:30.0683671Z === NAME  TestAccAdvancedCluster_moveNotSupportedLegacySchema
2025-08-06T00:32:30.0684855Z     move_state_test.go:19: Step 1/3 error: Error running apply: exit status 1
2025-08-06T00:32:30.0685810Z         
2025-08-06T00:32:30.0689336Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6892a2432e7dcc2aaecb36e6/clusters: 403 (request "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies.
2025-08-06T00:32:30.0718075Z         
2025-08-06T00:32:30.0719124Z           with mongodbatlas_cluster.old,
2025-08-06T00:32:30.0720165Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-08-06T00:32:30.0721090Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-08-06T00:32:30.0721574Z         
2025-08-06T00:32:30.6120923Z --- FAIL: TestAccAdvancedCluster_moveNotSupportedLegacySchema (7.88s)
```

- 2025-08-07 PASS 24 minutes
- 2025-08-08 PASS 17 minutes
- 2025-08-09 PASS 22 minutes
- 2025-08-10 PASS 24 minutes
- 2025-08-11 PASS 46 minutes
- 2025-08-12
  - PASS 19 minutes
  - PASS 15 minutes
- 2025-08-13 PASS 17 minutes
- 2025-08-14 PASS 17 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 45 minutes
- 2025-08-17 PASS 33 minutes
- 2025-08-18 PASS 19 minutes
- 2025-08-19 PASS 20 minutes
- 2025-08-20
  - PASS 18 minutes
  - PASS 18 minutes
- 2025-08-21 PASS 15 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 19 minutes
- 2025-08-24 PASS 14 minutes
- 2025-08-25 PASS 13 minutes
- 2025-08-26 PASS 19 minutes
- 2025-08-27 PASS 23 minutes
- 2025-08-28 PASS 17 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 16 minutes
- 2025-08-31 PASS 22 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:37+00:00
```
2025-09-01T00:30:37.1006447Z === RUN   TestAccAdvancedCluster_moveNotSupportedLegacySchema
2025-09-01T00:30:37.1007764Z     move_state_test.go:16: Creating execution project: test-acc-tf-p-4503439201736667956
2025-09-01T00:30:37.3513629Z     move_state_test.go:16: 
2025-09-01T00:30:37.3515731Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:37.3519351Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:37.3522586Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_state_test.go:16
2025-09-01T00:30:37.3523842Z         	Error:      	Received unexpected error:
2025-09-01T00:30:37.3526864Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:37.3528320Z         	Test:       	TestAccAdvancedCluster_moveNotSupportedLegacySchema
2025-09-01T00:30:37.3532666Z         	Messages:   	Project creation failed: test-acc-tf-p-4503439201736667956, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:37.3535789Z --- FAIL: TestAccAdvancedCluster_moveNotSupportedLegacySchema (0.25s)
```

  - PASS 26 minutes
  - PASS an hour
  - PASS 18 minutes
  - PASS 14 minutes
  - PASS 16 minutes
  - SKIP 2 seconds
  - SKIP 4 seconds
- 2025-09-02 PASS 17 minutes
- 2025-09-03 PASS 26 minutes
- 2025-09-04 PASS 18 minutes