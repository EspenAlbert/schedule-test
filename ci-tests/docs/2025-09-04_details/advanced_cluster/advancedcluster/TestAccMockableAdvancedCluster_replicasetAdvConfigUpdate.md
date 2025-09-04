# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 38 minutes
- 2025-08-07 PASS 54 minutes
- 2025-08-08 PASS 35 minutes
- 2025-08-09 PASS 38 minutes
- 2025-08-10 PASS 39 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 33 minutes
  - PASS 25 minutes
- 2025-08-13 PASS 32 minutes
- 2025-08-14 PASS 38 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 48 minutes
- 2025-08-18 PASS 31 minutes
- 2025-08-19 PASS 38 minutes
- 2025-08-20
  - PASS 32 minutes
  - PASS 31 minutes
- 2025-08-21 PASS 31 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 35 minutes
- 2025-08-24 PASS 22 minutes
- 2025-08-25 PASS 27 minutes
- 2025-08-26 PASS 35 minutes
- 2025-08-27 PASS 38 minutes
- 2025-08-28 PASS 34 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 33 minutes
- 2025-08-31 PASS 33 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:43+00:00
```
2025-09-01T00:30:43.9242715Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-09-01T00:30:44.0213415Z     shared_resource.go:93: 
2025-09-01T00:30:44.0215009Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:44.0217573Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:44.0219511Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:44.0221376Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:44.0223254Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:44.0225498Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1247
2025-09-01T00:30:44.0226384Z         	Error:      	Received unexpected error:
2025-09-01T00:30:44.0229262Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:44.0230679Z         	Test:       	TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-09-01T00:30:44.0233347Z         	Messages:   	Project creation failed: test-acc-tf-p-8679553195038064009, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:44.0234881Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (0.10s)
```

  - FAIL a moment

### Error 2025-09-01T05:58:46+00:00
```
2025-09-01T05:58:46.9035655Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-09-01T05:58:47.0574694Z     shared_resource.go:93: 
2025-09-01T05:58:47.0576681Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T05:58:47.0579416Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T05:58:47.0581813Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T05:58:47.0584219Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T05:58:47.0586603Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T05:58:47.0589099Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1247
2025-09-01T05:58:47.0589947Z         	Error:      	Received unexpected error:
2025-09-01T05:58:47.0592613Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:47.0593953Z         	Test:       	TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-09-01T05:58:47.0596407Z         	Messages:   	Project creation failed: test-acc-tf-p-8041832296922607410, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:47.0597987Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (0.16s)
```

  - PASS an hour
  - PASS 30 minutes
  - PASS 32 minutes
  - PASS 38 minutes
  - PASS 30 minutes
  - PASS 27 minutes
- 2025-09-02 PASS 35 minutes
- 2025-09-03 PASS 48 minutes
- 2025-09-04 PASS 40 minutes