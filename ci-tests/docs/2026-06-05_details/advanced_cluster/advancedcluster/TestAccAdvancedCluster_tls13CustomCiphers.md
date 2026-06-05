# advanced_cluster/advancedcluster/TestAccAdvancedCluster_tls13CustomCiphers Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL
Success rate: 96.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 01:02](#error-2026-05-28t0102470000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 37 minutes
- 2026-05-08 PASS 22 minutes
- 2026-05-09 PASS 27 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 23 minutes
- 2026-05-12 PASS 25 minutes
- 2026-05-13 PASS 21 minutes
- 2026-05-14 PASS 45 minutes
- 2026-05-15 PASS 18 minutes
- 2026-05-16 PASS 18 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 29 minutes
- 2026-05-19 PASS 18 minutes
- 2026-05-20 PASS 23 minutes
- 2026-05-21 PASS 19 minutes
- 2026-05-22 PASS 38 minutes
- 2026-05-23 PASS 27 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 22 minutes
- 2026-05-26 PASS 22 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:02:47+00:00
```
2026-05-28T01:02:47.9912234Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-05-28T01:02:48.2947939Z     shared_resource.go:160: 
2026-05-28T01:02:48.2949347Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:48.2951204Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:02:48.2953019Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:02:48.2954827Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:02:48.2957000Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:02:48.2959526Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2126
2026-05-28T01:02:48.2960357Z         	Error:      	Received unexpected error:
2026-05-28T01:02:48.2963198Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:48.2964593Z         	Test:       	TestAccAdvancedCluster_tls13CustomCiphers
2026-05-28T01:02:48.2966961Z         	Messages:   	Project creation failed: test-acc-tf-p-284411806906511738, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:48.2968580Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (0.31s)
```

- 2026-05-29 PASS 19 minutes
- 2026-05-30 PASS 16 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 29 minutes
- 2026-06-02 PASS 18 minutes
- 2026-06-03 PASS 26 minutes
- 2026-06-04 PASS 56 minutes
- 2026-06-05 PASS 26 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 21 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 22 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 21 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 21 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
