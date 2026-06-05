# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceUpdateSearchType Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 02:20](#error-2026-05-28t0220310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 3 minutes
  - PASS 5 minutes
- 2026-05-08 PASS 37 minutes
- 2026-05-09 PASS 8 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 30 minutes
- 2026-05-12 PASS 12 minutes
- 2026-05-13 PASS 25 minutes
- 2026-05-14 PASS 9 minutes
- 2026-05-15 PASS 12 minutes
- 2026-05-16 PASS 14 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 13 minutes
- 2026-05-19 PASS 10 minutes
- 2026-05-20 PASS 19 minutes
- 2026-05-21 PASS 10 minutes
- 2026-05-22 PASS 11 minutes
- 2026-05-23 PASS 28 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 11 minutes
- 2026-05-26 PASS 10 minutes
- 2026-05-27 PASS 5 minutes
- 2026-05-28

### Error 2026-05-28T02:20:31+00:00
```
2026-05-28T02:20:31.2593958Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-05-28T02:20:31.2594863Z     resource_test.go:199: Creating execution project (1): test-acc-tf-p-1258229891380404104
2026-05-28T02:20:31.2595458Z     resource_test.go:199: 
2026-05-28T02:20:31.2596472Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:20:31.2598553Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:20:31.2600502Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:20:31.2602783Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-28T02:20:31.2604907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:199
2026-05-28T02:20:31.2606321Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T02:20:31.2606940Z         	Error:      	Received unexpected error:
2026-05-28T02:20:31.2610237Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:20:31.2612124Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-05-28T02:20:31.2615083Z         	Messages:   	Project creation failed: test-acc-tf-p-1258229891380404104, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:20:31.2616868Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (1.20s)
```

- 2026-05-29 PASS 21 minutes
- 2026-05-30 PASS 11 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 6 minutes
- 2026-06-02 PASS 27 minutes
- 2026-06-03 PASS 19 minutes
- 2026-06-04 PASS 4 minutes
- 2026-06-05 PASS 12 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 15 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 19 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 20 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 18 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
