# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceBool Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-28 02:20](#error-2026-05-28t0220310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s
[2026-05-30 01:46](#error-2026-05-30t0146340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 15 minutes
  - PASS 8 minutes
- 2026-05-08 PASS 52 minutes
- 2026-05-09 PASS 21 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 36 minutes
- 2026-05-12 PASS 38 minutes
- 2026-05-13 PASS 41 minutes
- 2026-05-14 PASS 21 minutes
- 2026-05-15 PASS 42 minutes
- 2026-05-16 PASS 27 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 22 minutes
- 2026-05-19 PASS 18 minutes
- 2026-05-20 PASS 30 minutes
- 2026-05-21 PASS 21 minutes
- 2026-05-22 PASS 31 minutes
- 2026-05-23 PASS 43 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 35 minutes
- 2026-05-26 PASS 36 minutes
- 2026-05-27 PASS 11 minutes
- 2026-05-28

### Error 2026-05-28T02:20:31+00:00
```
2026-05-28T02:20:31.2554304Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-05-28T02:20:31.2554877Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-2211746439147882971
2026-05-28T02:20:31.2555356Z     resource_test.go:159: 
2026-05-28T02:20:31.2556250Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:20:31.2557987Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:20:31.2559723Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:20:31.2561819Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-28T02:20:31.2563666Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:159
2026-05-28T02:20:31.2564827Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T02:20:31.2565331Z         	Error:      	Received unexpected error:
2026-05-28T02:20:31.2568049Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:20:31.2569385Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceBool
2026-05-28T02:20:31.2571844Z         	Messages:   	Project creation failed: test-acc-tf-p-2211746439147882971, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:20:31.2573302Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (0.80s)
```

- 2026-05-29 PASS 25 minutes
- 2026-05-30

### Error 2026-05-30T01:46:34+00:00
```
2026-05-30T01:46:34.9179275Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-05-30T01:46:34.9179893Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-6798433714015322268
2026-05-30T01:46:34.9180407Z     resource_test.go:159: 
2026-05-30T01:46:34.9181506Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:46:34.9183303Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:46:34.9185241Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:46:34.9187047Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-30T01:46:34.9188940Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:159
2026-05-30T01:46:34.9190151Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:46:34.9190903Z         	Error:      	Received unexpected error:
2026-05-30T01:46:34.9192885Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:46:34.9193951Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceBool
2026-05-30T01:46:34.9195714Z         	Messages:   	Project creation failed: test-acc-tf-p-6798433714015322268, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:46:34.9196865Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (74.57s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 19 minutes
- 2026-06-02 PASS 36 minutes
- 2026-06-03 PASS 23 minutes
- 2026-06-04 PASS 19 minutes
- 2026-06-05 PASS an hour

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 19 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 35 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 27 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 37 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
