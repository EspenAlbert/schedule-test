# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL
Success rate: 96.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 01:02](#error-2026-05-28t0102440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS a minute
- 2026-05-08 PASS 35 seconds
- 2026-05-09 PASS 20 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12 PASS a minute
- 2026-05-13 PASS 55 seconds
- 2026-05-14 PASS 50 seconds
- 2026-05-15 PASS a minute
- 2026-05-16 PASS 15 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 55 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS a minute
- 2026-05-21 PASS a minute
- 2026-05-22 PASS 25 seconds
- 2026-05-23 PASS 5 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS a minute
- 2026-05-26 PASS 45 seconds
- 2026-05-27 PASS 50 seconds
- 2026-05-28

### Error 2026-05-28T01:02:44+00:00
```
2026-05-28T01:02:44.4881129Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType
2026-05-28T01:02:44.8640025Z     shared_resource.go:160: 
2026-05-28T01:02:44.8641613Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:44.8643464Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:02:44.8645301Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:02:44.8647070Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:02:44.8649019Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:02:44.8650899Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:634
2026-05-28T01:02:44.8651721Z         	Error:      	Received unexpected error:
2026-05-28T01:02:44.8654594Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:44.8656773Z         	Test:       	TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType
2026-05-28T01:02:44.8659415Z         	Messages:   	Project creation failed: test-acc-tf-p-2031379499328166258, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:44.8661076Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType (0.38s)
```

- 2026-05-29 PASS 30 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 15 seconds
- 2026-06-02 PASS a minute
- 2026-06-03 PASS 50 seconds
- 2026-06-04 PASS a minute
- 2026-06-05 PASS a minute

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a minute
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a minute
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 50 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 45 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
