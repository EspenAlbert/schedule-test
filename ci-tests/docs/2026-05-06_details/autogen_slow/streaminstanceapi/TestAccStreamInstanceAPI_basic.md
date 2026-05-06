# autogen_slow/streaminstanceapi/TestAccStreamInstanceAPI_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 01:31](#error-2026-04-09t0131160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.05s
[2026-04-11 01:24](#error-2026-04-11t0124580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s
[2026-04-30 01:50](#error-2026-04-30t0150260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.09s
[2026-05-05 01:47](#error-2026-05-05t0147290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 38 seconds
- 2026-04-08 PASS 4 seconds
- 2026-04-09

### Error 2026-04-09T01:31:16+00:00
```
2026-04-09T01:31:16.5593561Z === RUN   TestAccStreamInstanceAPI_basic
2026-04-09T01:31:16.5594130Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-8155956582194326113
2026-04-09T01:31:16.5594610Z     resource_test.go:21: 
2026-04-09T01:31:16.5595500Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T01:31:16.5597820Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T01:31:16.5599799Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T01:31:16.5601702Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-04-09T01:31:16.5602819Z         	Error:      	Received unexpected error:
2026-04-09T01:31:16.5604735Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:31:16.5606001Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-04-09T01:31:16.5607903Z         	Messages:   	Project creation failed: test-acc-tf-p-8155956582194326113, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:31:16.5609069Z --- FAIL: TestAccStreamInstanceAPI_basic (71.46s)
```

- 2026-04-10 PASS 4 seconds
- 2026-04-11

### Error 2026-04-11T01:24:58+00:00
```
2026-04-11T01:24:58.2560284Z === RUN   TestAccStreamInstanceAPI_basic
2026-04-11T01:24:58.2560825Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-4063624501077927571
2026-04-11T01:24:58.2561284Z     resource_test.go:21: 
2026-04-11T01:24:58.2562123Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T01:24:58.2563702Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T01:24:58.2565298Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T01:24:58.2567281Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-04-11T01:24:58.2568029Z         	Error:      	Received unexpected error:
2026-04-11T01:24:58.2569735Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:24:58.2570681Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-04-11T01:24:58.2572240Z         	Messages:   	Project creation failed: test-acc-tf-p-4063624501077927571, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:24:58.2573302Z --- FAIL: TestAccStreamInstanceAPI_basic (62.77s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 4 seconds
- 2026-04-14 PASS a minute
- 2026-04-15 PASS 4 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 4 seconds
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS 6 seconds
- 2026-04-21 PASS 22 seconds
- 2026-04-22 PASS 4 seconds
- 2026-04-23 PASS 32 seconds
- 2026-04-24 PASS 4 seconds
- 2026-04-25 PASS 5 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 4 seconds
- 2026-04-28 PASS 5 seconds
- 2026-04-29 PASS 3 seconds
- 2026-04-30

### Error 2026-04-30T01:50:26+00:00
```
2026-04-30T01:50:26.5047012Z === RUN   TestAccStreamInstanceAPI_basic
2026-04-30T01:50:26.5047729Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-2979171464737484020
2026-04-30T01:50:26.5048222Z     resource_test.go:21: 
2026-04-30T01:50:26.5049128Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:50:26.5050921Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:50:26.5052700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:50:26.5054608Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-04-30T01:50:26.5055414Z         	Error:      	Received unexpected error:
2026-04-30T01:50:26.5057806Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:50:26.5058845Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-04-30T01:50:26.5060577Z         	Messages:   	Project creation failed: test-acc-tf-p-2979171464737484020, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:50:26.5061748Z --- FAIL: TestAccStreamInstanceAPI_basic (72.89s)
```

- 2026-05-01 PASS 5 seconds
- 2026-05-02 PASS 19 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 4 seconds
- 2026-05-05

### Error 2026-05-05T01:47:29+00:00
```
2026-05-05T01:47:29.5970938Z === RUN   TestAccStreamInstanceAPI_basic
2026-05-05T01:47:29.5971513Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-2354474957527300696
2026-05-05T01:47:29.5972002Z     resource_test.go:21: 
2026-05-05T01:47:29.5972940Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T01:47:29.5975046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T01:47:29.5976879Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T01:47:29.5978835Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-05-05T01:47:29.5979652Z         	Error:      	Received unexpected error:
2026-05-05T01:47:29.5981617Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:47:29.5982666Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-05-05T01:47:29.5984857Z         	Messages:   	Project creation failed: test-acc-tf-p-2354474957527300696, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:47:29.5986138Z --- FAIL: TestAccStreamInstanceAPI_basic (83.86s)
```

- 2026-05-06 PASS 5 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 6 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 4 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 4 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 4 seconds
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
- 2026-05-03 PASS 5 seconds
- 2026-05-04 PASS 5 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 4 seconds
