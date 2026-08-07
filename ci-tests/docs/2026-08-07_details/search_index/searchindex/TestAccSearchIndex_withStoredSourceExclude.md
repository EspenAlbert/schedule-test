# search_index/searchindex/TestAccSearchIndex_withStoredSourceExclude Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057300000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:30+00:00
```
2026-07-09T00:57:30.8798684Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2026-07-09T00:57:30.8799412Z     resource_search_index_test.go:286: Creating execution project (1): test-acc-tf-p-3413406464450469743
2026-07-09T00:57:31.7102546Z     resource_search_index_test.go:286: 
2026-07-09T00:57:31.7104585Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:31.7107928Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:31.7110726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:31.7113381Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T00:57:31.7115856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:300
2026-07-09T00:57:31.7118560Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:286
2026-07-09T00:57:31.7119589Z         	Error:      	Received unexpected error:
2026-07-09T00:57:31.7122811Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:31.7124303Z         	Test:       	TestAccSearchIndex_withStoredSourceExclude
2026-07-09T00:57:31.7126915Z         	Messages:   	Project creation failed: test-acc-tf-p-3413406464450469743, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:31.7128497Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (0.83s)
```

- 2026-07-10 PASS 13 seconds
- 2026-07-11 PASS 12 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 12 seconds
- 2026-07-14 PASS 15 seconds
- 2026-07-15 PASS 14 seconds
- 2026-07-16 PASS 12 seconds
- 2026-07-17 PASS 15 seconds
- 2026-07-18 PASS 12 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 12 seconds
- 2026-07-22 PASS 12 seconds
- 2026-07-23 PASS 11 seconds
- 2026-07-24 PASS 13 seconds
- 2026-07-25 PASS 11 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 13 seconds
- 2026-07-28 PASS 10 seconds
- 2026-07-29 PASS 12 seconds
- 2026-07-30 PASS 10 seconds
- 2026-07-31 PASS 13 seconds
- 2026-08-01 PASS 10 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 13 seconds
- 2026-08-04 PASS 11 seconds
- 2026-08-05 PASS 13 seconds
- 2026-08-06 PASS 10 seconds
- 2026-08-07 PASS 13 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 11 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 12 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 13 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 12 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 11 seconds
  - PASS 12 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 12 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
