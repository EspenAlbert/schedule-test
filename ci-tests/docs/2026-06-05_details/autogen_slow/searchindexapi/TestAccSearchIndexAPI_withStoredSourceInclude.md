# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceInclude Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 02:20](#error-2026-05-28t0220310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 10 minutes
  - PASS 3 minutes
- 2026-05-08 PASS 22 minutes
- 2026-05-09 PASS 10 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 20 minutes
- 2026-05-12 PASS 17 minutes
- 2026-05-13 PASS 36 minutes
- 2026-05-14 PASS 2 minutes
- 2026-05-15 PASS 38 minutes
- 2026-05-16 PASS 23 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 9 minutes
- 2026-05-19 PASS 10 minutes
- 2026-05-20 PASS 24 minutes
- 2026-05-21 PASS 9 minutes
- 2026-05-22 PASS 21 minutes
- 2026-05-23 PASS 22 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 18 minutes
- 2026-05-26 PASS 8 minutes
- 2026-05-27 PASS 4 minutes
- 2026-05-28

### Error 2026-05-28T02:20:31+00:00
```
2026-05-28T02:20:31.2573720Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-05-28T02:20:31.2574532Z     resource_test.go:181: Creating execution project (1): test-acc-tf-p-5898836746549795776
2026-05-28T02:20:31.2575017Z     resource_test.go:181: 
2026-05-28T02:20:31.2575894Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:20:31.2577626Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:20:31.2579349Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:20:31.2581068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-28T02:20:31.2583077Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:181
2026-05-28T02:20:31.2584268Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T02:20:31.2584770Z         	Error:      	Received unexpected error:
2026-05-28T02:20:31.2587707Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:20:31.2589074Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceInclude
2026-05-28T02:20:31.2591349Z         	Messages:   	Project creation failed: test-acc-tf-p-5898836746549795776, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:20:31.2593473Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (1.36s)
```

- 2026-05-29 PASS 12 minutes
- 2026-05-30 PASS 25 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 10 minutes
- 2026-06-02 PASS 8 minutes
- 2026-06-03 PASS 7 minutes
- 2026-06-04 PASS 5 minutes
- 2026-06-05 PASS 40 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 3 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 23 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 6 minutes
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
