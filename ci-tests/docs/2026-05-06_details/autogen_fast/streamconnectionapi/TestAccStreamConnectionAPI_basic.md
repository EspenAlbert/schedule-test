# autogen_fast/streamconnectionapi/TestAccStreamConnectionAPI_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-30 01:02](#error-2026-04-30t0102360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.00s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 25 seconds
- 2026-04-08 PASS 25 seconds
- 2026-04-09 PASS 26 seconds
- 2026-04-10 PASS 25 seconds
- 2026-04-11 PASS a minute
- 2026-04-12: MISSING
- 2026-04-13 PASS 26 seconds
- 2026-04-14 PASS 28 seconds
- 2026-04-15 PASS 24 seconds
- 2026-04-16 PASS 26 seconds
- 2026-04-17 PASS 27 seconds
- 2026-04-18 PASS 50 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 26 seconds
- 2026-04-21 PASS 26 seconds
- 2026-04-22 PASS 26 seconds
- 2026-04-23 PASS 28 seconds
- 2026-04-24 PASS 26 seconds
- 2026-04-25 PASS 27 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 25 seconds
- 2026-04-28 PASS 28 seconds
- 2026-04-29 PASS 24 seconds
- 2026-04-30

### Error 2026-04-30T01:02:36+00:00
```
2026-04-30T01:02:36.0973466Z === RUN   TestAccStreamConnectionAPI_basic
2026-04-30T01:02:36.0974028Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-6961523728761583876
2026-04-30T01:02:36.0974519Z     resource_test.go:18: 
2026-04-30T01:02:36.0975392Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:02:36.0977157Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:02:36.0978841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:02:36.0980672Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-30T01:02:36.0982481Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamconnectionapi/resource_test.go:18
2026-04-30T01:02:36.0983665Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:02:36.0984189Z         	Error:      	Received unexpected error:
2026-04-30T01:02:36.0985978Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:02:36.0987177Z         	Test:       	TestAccStreamConnectionAPI_basic
2026-04-30T01:02:36.0988894Z         	Messages:   	Project creation failed: test-acc-tf-p-6961523728761583876, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:02:36.0990059Z --- FAIL: TestAccStreamConnectionAPI_basic (84.04s)
```

- 2026-05-01 PASS 25 seconds
- 2026-05-02 PASS 26 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 25 seconds
- 2026-05-05 PASS 40 seconds
- 2026-05-06 PASS 25 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 24 seconds
  - PASS 26 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 25 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 25 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 26 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 26 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 26 seconds
- 2026-05-04 PASS 25 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 28 seconds
