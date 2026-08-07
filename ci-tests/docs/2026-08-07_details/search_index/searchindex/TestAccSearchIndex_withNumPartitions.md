# search_index/searchindex/TestAccSearchIndex_withNumPartitions Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:25+00:00
```
2026-07-09T00:57:25.1147670Z === RUN   TestAccSearchIndex_withNumPartitions
2026-07-09T00:57:25.1148320Z     resource_search_index_test.go:198: Creating execution project (1): test-acc-tf-p-4840897446566839128
2026-07-09T00:57:26.3723906Z     resource_search_index_test.go:198: 
2026-07-09T00:57:26.3726917Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:26.3730462Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:26.3733734Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:26.3736719Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T00:57:26.3739694Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:198
2026-07-09T00:57:26.3741770Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:57:26.3742881Z         	Error:      	Received unexpected error:
2026-07-09T00:57:26.3746755Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:26.3748611Z         	Test:       	TestAccSearchIndex_withNumPartitions
2026-07-09T00:57:26.3751846Z         	Messages:   	Project creation failed: test-acc-tf-p-4840897446566839128, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:26.3753727Z --- FAIL: TestAccSearchIndex_withNumPartitions (1.26s)
```

- 2026-07-10 PASS 27 minutes
- 2026-07-11 PASS 13 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 21 minutes
- 2026-07-14 PASS 17 minutes
- 2026-07-15 PASS 23 minutes
- 2026-07-16 PASS 42 minutes
- 2026-07-17 PASS 27 minutes
- 2026-07-18 PASS 14 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 11 minutes
- 2026-07-22 PASS 46 minutes
- 2026-07-23 PASS 30 minutes
- 2026-07-24 PASS 31 minutes
- 2026-07-25 PASS 25 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS 42 minutes
- 2026-07-29 PASS 22 minutes
- 2026-07-30 PASS 38 minutes
- 2026-07-31 PASS 13 minutes
- 2026-08-01 PASS 11 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 13 minutes
- 2026-08-04 PASS 13 minutes
- 2026-08-05 PASS 13 minutes
- 2026-08-06 PASS 10 minutes
- 2026-08-07 PASS 12 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 20 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 19 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 16 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 17 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 12 minutes
  - PASS 18 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 9 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
