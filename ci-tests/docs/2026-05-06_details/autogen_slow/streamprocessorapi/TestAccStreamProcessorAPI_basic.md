# autogen_slow/streamprocessorapi/TestAccStreamProcessorAPI_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 01:31](#error-2026-04-09t0131160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-04-11 01:24](#error-2026-04-11t0124580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.05s
[2026-04-30 01:50](#error-2026-04-30t0150260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.00s
[2026-05-05 01:47](#error-2026-05-05t0147290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 32 seconds
- 2026-04-08 PASS 29 seconds
- 2026-04-09

### Error 2026-04-09T01:31:16+00:00
```
2026-04-09T01:31:16.5610364Z === RUN   TestAccStreamProcessorAPI_basic
2026-04-09T01:31:16.5610920Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-5250198891932898593
2026-04-09T01:31:16.5611395Z     resource_test.go:40: 
2026-04-09T01:31:16.5612272Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T01:31:16.5614052Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T01:31:16.5616116Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T01:31:16.5618166Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-04-09T01:31:16.5618980Z         	Error:      	Received unexpected error:
2026-04-09T01:31:16.5620879Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:31:16.5621895Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-04-09T01:31:16.5623618Z         	Messages:   	Project creation failed: test-acc-tf-p-5250198891932898593, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:31:16.5624788Z --- FAIL: TestAccStreamProcessorAPI_basic (62.13s)
```

- 2026-04-10 PASS 28 seconds
- 2026-04-11

### Error 2026-04-11T01:24:58+00:00
```
2026-04-11T01:24:58.2574552Z === RUN   TestAccStreamProcessorAPI_basic
2026-04-11T01:24:58.2575071Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-4050992219584623456
2026-04-11T01:24:58.2575521Z     resource_test.go:40: 
2026-04-11T01:24:58.2576541Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T01:24:58.2578191Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T01:24:58.2579795Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T01:24:58.2581519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-04-11T01:24:58.2582293Z         	Error:      	Received unexpected error:
2026-04-11T01:24:58.2583949Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:24:58.2584875Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-04-11T01:24:58.2586431Z         	Messages:   	Project creation failed: test-acc-tf-p-4050992219584623456, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:24:58.2587615Z --- FAIL: TestAccStreamProcessorAPI_basic (87.53s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 30 seconds
- 2026-04-14 PASS 51 seconds
- 2026-04-15 PASS 30 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 27 seconds
- 2026-04-18 PASS 32 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 31 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 31 seconds
- 2026-04-23 PASS 31 seconds
- 2026-04-24 PASS 29 seconds
- 2026-04-25 PASS 29 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 29 seconds
- 2026-04-28 PASS 31 seconds
- 2026-04-29 PASS 28 seconds
- 2026-04-30

### Error 2026-04-30T01:50:26+00:00
```
2026-04-30T01:50:26.5063065Z === RUN   TestAccStreamProcessorAPI_basic
2026-04-30T01:50:26.5063633Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-4757395080617009075
2026-04-30T01:50:26.5064114Z     resource_test.go:40: 
2026-04-30T01:50:26.5065006Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:50:26.5067061Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:50:26.5069029Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:50:26.5070949Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-04-30T01:50:26.5071762Z         	Error:      	Received unexpected error:
2026-04-30T01:50:26.5073683Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:50:26.5074700Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-04-30T01:50:26.5076807Z         	Messages:   	Project creation failed: test-acc-tf-p-4757395080617009075, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:50:26.5078009Z --- FAIL: TestAccStreamProcessorAPI_basic (79.03s)
```

- 2026-05-01 PASS 33 seconds
- 2026-05-02 PASS 30 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 28 seconds
- 2026-05-05

### Error 2026-05-05T01:47:29+00:00
```
2026-05-05T01:47:29.5987726Z === RUN   TestAccStreamProcessorAPI_basic
2026-05-05T01:47:29.5988307Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-9123332357261105698
2026-05-05T01:47:29.5988798Z     resource_test.go:40: 
2026-05-05T01:47:29.5989708Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T01:47:29.5991548Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T01:47:29.5993365Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T01:47:29.5995637Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-05-05T01:47:29.5996609Z         	Error:      	Received unexpected error:
2026-05-05T01:47:29.5998587Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:47:29.5999613Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-05-05T01:47:29.6001400Z         	Messages:   	Project creation failed: test-acc-tf-p-9123332357261105698, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:47:29.6002590Z --- FAIL: TestAccStreamProcessorAPI_basic (64.61s)
```

- 2026-05-06 PASS 30 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 31 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 31 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 28 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 29 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 33 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 31 seconds
- 2026-05-04 PASS 31 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 31 seconds
