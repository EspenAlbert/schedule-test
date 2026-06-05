# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:04](#error-2026-05-19t0104570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-05-23 01:02](#error-2026-05-23t0102380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.01s
[2026-05-28 01:00](#error-2026-05-28t0100050000) |  | dev | flaky_500 | 60.06s
[2026-06-02 01:11](#error-2026-06-02t0111180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 25 seconds
- 2026-05-08 PASS 23 seconds
- 2026-05-09 PASS 32 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 27 seconds
- 2026-05-12 PASS 25 seconds
- 2026-05-13 PASS 27 seconds
- 2026-05-14 PASS 23 seconds
- 2026-05-15 PASS 23 seconds
- 2026-05-16 PASS 40 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 24 seconds
- 2026-05-19

### Error 2026-05-19T01:04:57+00:00
```
2026-05-19T01:04:57.9839891Z === RUN   TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-05-19T01:04:57.9840566Z     resource_test.go:121: Creating execution project (1): test-acc-tf-p-8364559823919208257
2026-05-19T01:06:00.0329709Z     resource_test.go:121: 
2026-05-19T01:06:00.0333629Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:06:00.0339133Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:06:00.0341602Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:06:00.0344398Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:128
2026-05-19T01:06:00.0347046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:121
2026-05-19T01:06:00.0348291Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:06:00.0348809Z         	Error:      	Received unexpected error:
2026-05-19T01:06:00.0353995Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:06:00.0357730Z         	Test:       	TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-05-19T01:06:00.0361120Z         	Messages:   	Project creation failed: test-acc-tf-p-8364559823919208257, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:06:00.0362612Z --- FAIL: TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout (62.05s)
```

- 2026-05-20 PASS 24 seconds
- 2026-05-21 PASS 25 seconds
- 2026-05-22 PASS 24 seconds
- 2026-05-23

### Error 2026-05-23T01:02:38+00:00
```
2026-05-23T01:02:38.0262225Z === RUN   TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-05-23T01:02:38.0263807Z     resource_test.go:121: Creating execution project (1): test-acc-tf-p-8147482846677455409
2026-05-23T01:03:48.0979132Z     resource_test.go:121: 
2026-05-23T01:03:48.0983901Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:03:48.0990433Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:03:48.0994746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:03:48.0997598Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:128
2026-05-23T01:03:48.0999847Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:121
2026-05-23T01:03:48.1001350Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:03:48.1002418Z         	Error:      	Received unexpected error:
2026-05-23T01:03:48.1006382Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:03:48.1007776Z         	Test:       	TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-05-23T01:03:48.1009698Z         	Messages:   	Project creation failed: test-acc-tf-p-8147482846677455409, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:03:48.1011030Z --- FAIL: TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout (70.08s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 24 seconds
- 2026-05-26 PASS 29 seconds
- 2026-05-27 PASS 24 seconds
- 2026-05-28

### Error 2026-05-28T01:00:05+00:00
```
2026-05-28T01:00:05.4560911Z === RUN   TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-05-28T01:00:05.4561625Z     resource_test.go:121: Creating execution project (1): test-acc-tf-p-532820097209660404
2026-05-28T01:01:06.0918432Z     resource_test.go:121: 
2026-05-28T01:01:06.0925502Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:06.0927535Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:06.0929561Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:06.0931665Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:128
2026-05-28T01:01:06.0934064Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:121
2026-05-28T01:01:06.0936949Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:01:06.0938952Z         	Error:      	Received unexpected error:
2026-05-28T01:01:06.0942087Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-05-28T01:01:06.0944929Z         	Test:       	TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-05-28T01:01:06.0946663Z         	Messages:   	Project creation failed: test-acc-tf-p-532820097209660404, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-05-28T01:01:06.0947845Z --- FAIL: TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout (60.64s)
```

- 2026-05-29 PASS 24 seconds
- 2026-05-30 PASS 27 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 27 seconds
- 2026-06-02

### Error 2026-06-02T01:11:18+00:00
```
2026-06-02T01:11:18.6215831Z === RUN   TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-06-02T01:11:18.6216573Z     resource_test.go:121: Creating execution project (1): test-acc-tf-p-2840262371821884254
2026-06-02T01:12:22.8749750Z     resource_test.go:121: 
2026-06-02T01:12:22.8753952Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:12:22.8756701Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:12:22.8758848Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:12:22.8760996Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:128
2026-06-02T01:12:22.8766033Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:121
2026-06-02T01:12:22.8768354Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:12:22.8768995Z         	Error:      	Received unexpected error:
2026-06-02T01:12:22.8770945Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:22.8772173Z         	Test:       	TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-06-02T01:12:22.8774304Z         	Messages:   	Project creation failed: test-acc-tf-p-2840262371821884254, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:22.8776037Z --- FAIL: TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout (64.25s)
```

- 2026-06-03 PASS 24 seconds
- 2026-06-04 PASS 24 seconds
- 2026-06-05 PASS 28 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 25 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 24 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 24 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 23 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
