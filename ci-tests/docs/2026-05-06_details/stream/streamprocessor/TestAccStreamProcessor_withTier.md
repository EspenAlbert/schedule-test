# stream/streamprocessor/TestAccStreamProcessor_withTier Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 01:13](#error-2026-04-11t0113150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s
[2026-04-30 01:31](#error-2026-04-30t0131460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 10 seconds
- 2026-04-08 PASS 12 seconds
- 2026-04-09 PASS 10 seconds
- 2026-04-10 PASS 13 seconds
- 2026-04-11

### Error 2026-04-11T01:13:15+00:00
```
2026-04-11T01:13:15.9916226Z === RUN   TestAccStreamProcessor_withTier
2026-04-11T01:13:15.9916784Z     resource_test.go:58: Creating execution project (1): test-acc-tf-p-1766089703833576163
2026-04-11T01:13:15.9917268Z     resource_test.go:58: 
2026-04-11T01:13:15.9918173Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T01:13:15.9920102Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T01:13:15.9921889Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T01:13:15.9923813Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-11T01:13:15.9925766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:58
2026-04-11T01:13:15.9926999Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-11T01:13:15.9927517Z         	Error:      	Received unexpected error:
2026-04-11T01:13:15.9929572Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:15.9930596Z         	Test:       	TestAccStreamProcessor_withTier
2026-04-11T01:13:15.9932341Z         	Messages:   	Project creation failed: test-acc-tf-p-1766089703833576163, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:15.9933512Z --- FAIL: TestAccStreamProcessor_withTier (63.24s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 12 seconds
- 2026-04-14 PASS a minute
- 2026-04-15 PASS 10 seconds
- 2026-04-16 PASS 13 seconds
- 2026-04-17 PASS 10 seconds
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS 9 seconds
- 2026-04-21 PASS 11 seconds
- 2026-04-22 PASS 9 seconds
- 2026-04-23 PASS 10 seconds
- 2026-04-24 PASS 12 seconds
- 2026-04-25 PASS 12 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 12 seconds
- 2026-04-28 PASS 11 seconds
- 2026-04-29 PASS 13 seconds
- 2026-04-30
  - FAIL a minute

### Error 2026-04-30T01:31:46+00:00
```
2026-04-30T01:31:46.2814616Z === RUN   TestAccStreamProcessor_withTier
2026-04-30T01:31:46.2815181Z     resource_test.go:58: Creating execution project (1): test-acc-tf-p-2138466989283913047
2026-04-30T01:31:46.2815663Z     resource_test.go:58: 
2026-04-30T01:31:46.2816567Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:31:46.2818353Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:31:46.2820147Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:31:46.2822218Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-30T01:31:46.2824105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:58
2026-04-30T01:31:46.2825303Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:31:46.2825824Z         	Error:      	Received unexpected error:
2026-04-30T01:31:46.2827878Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2828916Z         	Test:       	TestAccStreamProcessor_withTier
2026-04-30T01:31:46.2830651Z         	Messages:   	Project creation failed: test-acc-tf-p-2138466989283913047, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2832127Z --- FAIL: TestAccStreamProcessor_withTier (65.36s)
```

  - PASS 14 seconds
- 2026-05-01 PASS 10 seconds
- 2026-05-02 PASS 12 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 13 seconds
- 2026-05-05 PASS 24 seconds
- 2026-05-06 PASS 11 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 10 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 18 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 11 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 11 seconds
  - PASS 10 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 12 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 10 seconds
- 2026-05-04
  - PASS 13 seconds
  - PASS 12 seconds
- 2026-05-05 PASS 10 seconds
- 2026-05-06 PASS 10 seconds
