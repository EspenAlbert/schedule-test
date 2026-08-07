# search_index/searchindex/TestAccSearchIndex_withStoredSourceFalse Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057280000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:28+00:00
```
2026-07-09T00:57:28.1883065Z === RUN   TestAccSearchIndex_withStoredSourceFalse
2026-07-09T00:57:28.1883717Z     resource_search_index_test.go:274: Creating execution project (1): test-acc-tf-p-3051791433653087611
2026-07-09T00:57:29.1901767Z     resource_search_index_test.go:274: 
2026-07-09T00:57:29.1903815Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:29.1907431Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:29.1910948Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:29.1913573Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T00:57:29.1916437Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:300
2026-07-09T00:57:29.1919257Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:274
2026-07-09T00:57:29.1920384Z         	Error:      	Received unexpected error:
2026-07-09T00:57:29.1923805Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:29.1925273Z         	Test:       	TestAccSearchIndex_withStoredSourceFalse
2026-07-09T00:57:29.1927765Z         	Messages:   	Project creation failed: test-acc-tf-p-3051791433653087611, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:29.1929349Z --- FAIL: TestAccSearchIndex_withStoredSourceFalse (1.00s)
```

- 2026-07-10 PASS 12 seconds
- 2026-07-11 PASS 11 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 11 seconds
- 2026-07-14 PASS 14 seconds
- 2026-07-15 PASS 13 seconds
- 2026-07-16 PASS 13 seconds
- 2026-07-17 PASS 13 seconds
- 2026-07-18 PASS 12 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 13 seconds
- 2026-07-22 PASS 12 seconds
- 2026-07-23 PASS 12 seconds
- 2026-07-24 PASS 12 seconds
- 2026-07-25 PASS 11 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 12 seconds
- 2026-07-28 PASS 10 seconds
- 2026-07-29 PASS 11 seconds
- 2026-07-30 PASS 10 seconds
- 2026-07-31 PASS 12 seconds
- 2026-08-01 PASS 14 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 10 seconds
- 2026-08-04 PASS 13 seconds
- 2026-08-05 PASS 13 seconds
- 2026-08-06 PASS 11 seconds
- 2026-08-07 PASS 11 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 12 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 13 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 11 seconds
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
  - PASS 11 seconds
  - PASS 12 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 13 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
