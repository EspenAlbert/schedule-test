# cluster/cluster/TestAccCluster_WithBiConnectorGCP Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-21 00:52](#error-2026-07-21t0052250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 32 minutes
- 2026-07-10 PASS 50 minutes
- 2026-07-11 PASS 29 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 39 minutes
- 2026-07-14 PASS 37 minutes
- 2026-07-15 PASS 35 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 41 minutes
- 2026-07-18 PASS 26 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:25+00:00
```
2026-07-21T00:52:25.4132089Z === RUN   TestAccCluster_WithBiConnectorGCP
2026-07-21T00:52:26.3019221Z     shared_resource.go:160: 
2026-07-21T00:52:26.3021777Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:26.3024807Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:26.3028013Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:26.3030175Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:26.3032325Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:26.3034733Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:410
2026-07-21T00:52:26.3035912Z         	Error:      	Received unexpected error:
2026-07-21T00:52:26.3039433Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:26.3040994Z         	Test:       	TestAccCluster_WithBiConnectorGCP
2026-07-21T00:52:26.3043432Z         	Messages:   	Project creation failed: test-acc-tf-p-5257195232465786912, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:26.3045014Z --- FAIL: TestAccCluster_WithBiConnectorGCP (0.89s)
```

- 2026-07-22 PASS an hour
- 2026-07-23 PASS an hour
- 2026-07-24 PASS 34 minutes
- 2026-07-25 PASS 42 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 42 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 29 minutes
- 2026-08-01 PASS 23 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 23 minutes
- 2026-08-04 PASS 25 minutes
- 2026-08-05 PASS 22 minutes
- 2026-08-06 PASS 25 minutes
- 2026-08-07 PASS 24 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 38 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 39 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 42 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 36 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 28 minutes
  - PASS 32 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 23 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
