# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 01:13](#error-2026-04-11t0113150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.07s
[2026-04-30 01:31](#error-2026-04-30t0131460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 4 seconds
- 2026-04-08 PASS 5 seconds
- 2026-04-09 PASS 4 seconds
- 2026-04-10 PASS 5 seconds
- 2026-04-11

### Error 2026-04-11T01:13:15+00:00
```
2026-04-11T01:13:15.9933902Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-04-11T01:13:15.9934489Z     resource_test.go:151: Creating execution project (1): test-acc-tf-p-2566451242932143319
2026-04-11T01:13:15.9934980Z     resource_test.go:151: 
2026-04-11T01:13:15.9936002Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T01:13:15.9937796Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T01:13:15.9939721Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T01:13:15.9941507Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-11T01:13:15.9943384Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:151
2026-04-11T01:13:15.9944590Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-11T01:13:15.9945106Z         	Error:      	Received unexpected error:
2026-04-11T01:13:15.9947027Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:15.9948105Z         	Test:       	TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-04-11T01:13:15.9950164Z         	Messages:   	Project creation failed: test-acc-tf-p-2566451242932143319, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:15.9951410Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (75.67s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 5 seconds
- 2026-04-14 PASS 4 seconds
- 2026-04-15 PASS 4 seconds
- 2026-04-16 PASS 5 seconds
- 2026-04-17 PASS 4 seconds
- 2026-04-18 PASS 4 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 3 seconds
- 2026-04-21 PASS 4 seconds
- 2026-04-22 PASS 4 seconds
- 2026-04-23 PASS 4 seconds
- 2026-04-24 PASS 5 seconds
- 2026-04-25 PASS 5 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 4 seconds
- 2026-04-28 PASS 4 seconds
- 2026-04-29 PASS 5 seconds
- 2026-04-30
  - FAIL a minute

### Error 2026-04-30T01:31:46+00:00
```
2026-04-30T01:31:46.2832530Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-04-30T01:31:46.2833123Z     resource_test.go:151: Creating execution project (1): test-acc-tf-p-5746155686172096668
2026-04-30T01:31:46.2833621Z     resource_test.go:151: 
2026-04-30T01:31:46.2834531Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:31:46.2836315Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:31:46.2838100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:31:46.2839896Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-30T01:31:46.2841901Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:151
2026-04-30T01:31:46.2843104Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:31:46.2843613Z         	Error:      	Received unexpected error:
2026-04-30T01:31:46.2845540Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2846620Z         	Test:       	TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-04-30T01:31:46.2848395Z         	Messages:   	Project creation failed: test-acc-tf-p-5746155686172096668, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2849797Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (70.21s)
```

  - PASS 5 seconds
- 2026-05-01 PASS 4 seconds
- 2026-05-02 PASS 5 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 5 seconds
- 2026-05-05 PASS 4 seconds
- 2026-05-06 PASS 4 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 4 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 5 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 4 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 4 seconds
  - PASS 4 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 4 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 4 seconds
- 2026-05-04
  - PASS 5 seconds
  - PASS 4 seconds
- 2026-05-05 PASS 4 seconds
- 2026-05-06 PASS 4 seconds
