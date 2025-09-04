# advanced_cluster_tpf/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 33 minutes
- 2025-08-07 PASS 52 minutes
- 2025-08-08 PASS 30 minutes
- 2025-08-09 PASS 37 minutes
- 2025-08-10 PASS 51 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 32 minutes
  - PASS 25 minutes
- 2025-08-13 PASS 32 minutes
- 2025-08-14 PASS 36 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 59 minutes
- 2025-08-17 PASS 48 minutes
- 2025-08-18 PASS 34 minutes
- 2025-08-19 PASS 33 minutes
- 2025-08-20
  - PASS 31 minutes
  - PASS 30 minutes
- 2025-08-21 PASS 33 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 33 minutes
- 2025-08-24 PASS 22 minutes
- 2025-08-25 PASS 27 minutes
- 2025-08-26 PASS 35 minutes
- 2025-08-27 PASS 34 minutes
- 2025-08-28 PASS 33 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 32 minutes
- 2025-08-31 PASS 28 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7439692Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-09-01T00:30:49.7440084Z     shared_resource.go:93: 
2025-09-01T00:30:49.7440937Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7442894Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7444614Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7446305Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7448004Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7449954Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1247
2025-09-01T00:30:49.7450759Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7453592Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7454950Z         	Test:       	TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-09-01T00:30:49.7457176Z         	Messages:   	Project creation failed: test-acc-tf-p-5830107292474425197, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7458660Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (0.16s)
```

  - PASS an hour
  - PASS an hour
  - PASS 30 minutes
  - PASS 32 minutes
  - PASS 37 minutes
  - PASS 31 minutes
  - PASS 28 minutes
- 2025-09-02 PASS 37 minutes
- 2025-09-03 PASS 37 minutes
- 2025-09-04 PASS 37 minutes