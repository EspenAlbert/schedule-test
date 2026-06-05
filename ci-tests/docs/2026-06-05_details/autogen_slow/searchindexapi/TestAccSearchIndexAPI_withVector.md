# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withVector Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-28 02:20](#error-2026-05-28t0220310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 1.04s
[2026-05-30 01:46](#error-2026-05-30t0146340000) |  | dev | flaky_500 | 51.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS a minute
  - PASS 5 minutes
- 2026-05-08 PASS 14 minutes
- 2026-05-09 PASS 2 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 3 minutes
- 2026-05-12 PASS 23 minutes
- 2026-05-13 PASS 2 minutes
- 2026-05-14 PASS 6 minutes
- 2026-05-15 PASS 3 minutes
- 2026-05-16 PASS 24 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 13 minutes
- 2026-05-19 PASS 28 minutes
- 2026-05-20 PASS 20 minutes
- 2026-05-21 PASS 10 minutes
- 2026-05-22 PASS 23 minutes
- 2026-05-23 PASS 30 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 11 minutes
- 2026-05-26 PASS 13 minutes
- 2026-05-27 PASS 4 minutes
- 2026-05-28

### Error 2026-05-28T02:20:31+00:00
```
2026-05-28T02:20:31.2534964Z === RUN   TestAccSearchIndexAPI_withVector
2026-05-28T02:20:31.2535523Z     resource_test.go:141: Creating execution project (1): test-acc-tf-p-6023841217207091322
2026-05-28T02:20:31.2536006Z     resource_test.go:141: 
2026-05-28T02:20:31.2536886Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:20:31.2538621Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:20:31.2540482Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:20:31.2542433Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-28T02:20:31.2544310Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:141
2026-05-28T02:20:31.2545490Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T02:20:31.2545998Z         	Error:      	Received unexpected error:
2026-05-28T02:20:31.2548758Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:20:31.2550046Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-05-28T02:20:31.2552501Z         	Messages:   	Project creation failed: test-acc-tf-p-6023841217207091322, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:20:31.2553921Z --- FAIL: TestAccSearchIndexAPI_withVector (1.40s)
```

- 2026-05-29 PASS 14 minutes
- 2026-05-30

### Error 2026-05-30T01:46:34+00:00
```
2026-05-30T01:46:34.9163892Z === RUN   TestAccSearchIndexAPI_withVector
2026-05-30T01:46:34.9164484Z     resource_test.go:141: Creating execution project (1): test-acc-tf-p-8535000485975343278
2026-05-30T01:46:34.9164994Z     resource_test.go:141: 
2026-05-30T01:46:34.9165923Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:46:34.9167715Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:46:34.9169509Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:46:34.9171516Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-30T01:46:34.9173427Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:141
2026-05-30T01:46:34.9174826Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:46:34.9175372Z         	Error:      	Received unexpected error:
2026-05-30T01:46:34.9176347Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-05-30T01:46:34.9176983Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-05-30T01:46:34.9178106Z         	Messages:   	Project creation failed: test-acc-tf-p-8535000485975343278, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-05-30T01:46:34.9178859Z --- FAIL: TestAccSearchIndexAPI_withVector (51.53s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 8 minutes
- 2026-06-02 PASS 3 minutes
- 2026-06-03 PASS 13 minutes
- 2026-06-04 PASS 8 minutes
- 2026-06-05 PASS 41 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 5 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 2 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 18 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 12 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
