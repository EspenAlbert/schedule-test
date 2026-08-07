# search_index/searchindex/TestAccSearchIndex_withStoredSourceInclude Test Details
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
2026-07-09T00:57:30.0971395Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2026-07-09T00:57:30.0972061Z     resource_search_index_test.go:282: Creating execution project (1): test-acc-tf-p-1076728708039849518
2026-07-09T00:57:30.8755709Z     resource_search_index_test.go:282: 
2026-07-09T00:57:30.8757994Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:30.8760834Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:30.8763585Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:30.8765865Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T00:57:30.8768571Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:300
2026-07-09T00:57:30.8771146Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:282
2026-07-09T00:57:30.8772184Z         	Error:      	Received unexpected error:
2026-07-09T00:57:30.8775403Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:30.8776990Z         	Test:       	TestAccSearchIndex_withStoredSourceInclude
2026-07-09T00:57:30.8779389Z         	Messages:   	Project creation failed: test-acc-tf-p-1076728708039849518, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:30.8797953Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (0.78s)
```

- 2026-07-10 PASS 11 seconds
- 2026-07-11 PASS 13 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 12 seconds
- 2026-07-14 PASS 15 seconds
- 2026-07-15 PASS 12 seconds
- 2026-07-16 PASS 13 seconds
- 2026-07-17 PASS 13 seconds
- 2026-07-18 PASS 12 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 13 seconds
- 2026-07-22 PASS 11 seconds
- 2026-07-23 PASS 12 seconds
- 2026-07-24 PASS 12 seconds
- 2026-07-25 PASS 11 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 11 seconds
- 2026-07-28 PASS 9 seconds
- 2026-07-29 PASS 10 seconds
- 2026-07-30 PASS 12 seconds
- 2026-07-31 PASS 13 seconds
- 2026-08-01 PASS 11 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 9 seconds
- 2026-08-04 PASS 12 seconds
- 2026-08-05 PASS 14 seconds
- 2026-08-06 PASS 11 seconds
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
- 2026-07-15 PASS 11 seconds
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
- 2026-07-26 PASS 13 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 12 seconds
  - PASS 13 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 13 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
