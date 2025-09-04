# advanced_cluster_tpf/advancedclustertpf/TestAccAdvancedCluster_moveMultisharding Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) SKIP(x 2) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 27 minutes
- 2025-08-07 PASS 26 minutes
- 2025-08-08 PASS 18 minutes
- 2025-08-09 PASS 25 minutes
- 2025-08-10 PASS 34 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 25 minutes
  - PASS 25 minutes
- 2025-08-13 PASS 34 minutes
- 2025-08-14 PASS 22 minutes
- 2025-08-15 PASS 17 minutes
- 2025-08-16 PASS 53 minutes
- 2025-08-17 PASS 31 minutes
- 2025-08-18 PASS 21 minutes
- 2025-08-19 PASS 21 minutes
- 2025-08-20
  - PASS 28 minutes
  - PASS 23 minutes
- 2025-08-21 PASS 21 minutes
- 2025-08-22 PASS 19 minutes
- 2025-08-23 PASS 25 minutes
- 2025-08-24 PASS 16 minutes
- 2025-08-25 PASS 18 minutes
- 2025-08-26 PASS 26 minutes
- 2025-08-27 PASS 31 minutes
- 2025-08-28 PASS 27 minutes
- 2025-08-29 PASS 34 minutes
- 2025-08-30 PASS 24 minutes
- 2025-08-31 PASS 27 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7810947Z === RUN   TestAccAdvancedCluster_moveMultisharding
2025-09-01T00:30:49.7811708Z     shared_resource.go:93: 
2025-09-01T00:30:49.7812678Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7824169Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7825937Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7827653Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7829355Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7831275Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedclustertpf/move_upgrade_state_test.go:43
2025-09-01T00:30:49.7832205Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7835020Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7836315Z         	Test:       	TestAccAdvancedCluster_moveMultisharding
2025-09-01T00:30:49.7838496Z         	Messages:   	Project creation failed: test-acc-tf-p-6219315601883174510, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7840014Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (0.15s)
```

  - PASS an hour
  - PASS an hour
  - PASS 25 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - SKIP a moment
  - SKIP a moment
- 2025-09-02 PASS 30 minutes
- 2025-09-03 PASS 37 minutes
- 2025-09-04 PASS 27 minutes