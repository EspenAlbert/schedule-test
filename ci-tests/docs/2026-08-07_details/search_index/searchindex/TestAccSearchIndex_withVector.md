# search_index/searchindex/TestAccSearchIndex_withVector Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057240000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:24+00:00
```
2026-07-09T00:57:24.0847404Z === RUN   TestAccSearchIndex_withVector
2026-07-09T00:57:24.0848025Z     resource_search_index_test.go:193: Creating execution project (1): test-acc-tf-p-1325694939509053789
2026-07-09T00:57:25.1124377Z     resource_search_index_test.go:193: 
2026-07-09T00:57:25.1126612Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:25.1128907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:25.1131197Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:25.1133469Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T00:57:25.1135867Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:342
2026-07-09T00:57:25.1138183Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:193
2026-07-09T00:57:25.1139012Z         	Error:      	Received unexpected error:
2026-07-09T00:57:25.1141874Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:25.1143275Z         	Test:       	TestAccSearchIndex_withVector
2026-07-09T00:57:25.1145654Z         	Messages:   	Project creation failed: test-acc-tf-p-1325694939509053789, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:25.1147304Z --- FAIL: TestAccSearchIndex_withVector (1.03s)
```

- 2026-07-10 PASS 13 seconds
- 2026-07-11 PASS 12 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 12 seconds
- 2026-07-14 PASS 15 seconds
- 2026-07-15 PASS 13 seconds
- 2026-07-16 PASS 13 seconds
- 2026-07-17 PASS 13 seconds
- 2026-07-18 PASS 13 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 13 seconds
- 2026-07-22 PASS 12 seconds
- 2026-07-23 PASS 12 seconds
- 2026-07-24 PASS 14 seconds
- 2026-07-25 PASS 11 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 13 seconds
- 2026-07-28 PASS 11 seconds
- 2026-07-29 PASS 14 seconds
- 2026-07-30 PASS 10 seconds
- 2026-07-31 PASS 12 seconds
- 2026-08-01 PASS 13 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 13 seconds
- 2026-08-04 PASS 12 seconds
- 2026-08-05 PASS 12 seconds
- 2026-08-06 PASS 11 seconds
- 2026-08-07 PASS 12 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 13 seconds
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
  - PASS 10 seconds
  - PASS 14 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 14 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
