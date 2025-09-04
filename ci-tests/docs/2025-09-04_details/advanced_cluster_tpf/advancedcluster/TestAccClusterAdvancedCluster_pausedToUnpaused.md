# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_pausedToUnpaused Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 49 minutes
- 2025-08-07 PASS 53 minutes
- 2025-08-08 PASS 32 minutes
- 2025-08-09 PASS 39 minutes
- 2025-08-10 PASS 42 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 34 minutes
  - PASS 28 minutes
- 2025-08-13 PASS 42 minutes
- 2025-08-14 PASS 36 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 59 minutes
- 2025-08-17 PASS 49 minutes
- 2025-08-18 PASS 40 minutes
- 2025-08-19 PASS 33 minutes
- 2025-08-20
  - PASS 35 minutes
  - PASS 31 minutes
- 2025-08-21 PASS 32 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 49 minutes
- 2025-08-24 PASS 25 minutes
- 2025-08-25 PASS 38 minutes
- 2025-08-26 PASS 40 minutes
- 2025-08-27 PASS 40 minutes
- 2025-08-28 PASS 35 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 35 minutes
- 2025-08-31 PASS 34 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.6959233Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-09-01T00:30:49.6959853Z     shared_resource.go:93: 
2025-09-01T00:30:49.6961573Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.6964783Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.6968028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.6971260Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.6974679Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.6978366Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:340
2025-09-01T00:30:49.6979880Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.6985111Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6987444Z         	Test:       	TestAccClusterAdvancedCluster_pausedToUnpaused
2025-09-01T00:30:49.6991708Z         	Messages:   	Project creation failed: test-acc-tf-p-4562751984353592900, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6994266Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (0.17s)
```

  - PASS an hour
  - PASS an hour
  - PASS 34 minutes
  - PASS 38 minutes
  - PASS 42 minutes
  - PASS 33 minutes
  - PASS 33 minutes
- 2025-09-02 PASS 37 minutes
- 2025-09-03 PASS 48 minutes
- 2025-09-04 PASS 38 minutes