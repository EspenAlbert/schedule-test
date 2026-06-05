# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 7)
Success rate: 76.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:54](#error-2026-05-09t0054560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.06s
[2026-05-12 00:53](#error-2026-05-12t0053160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-05-16 00:54](#error-2026-05-16t0054050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.08s
[2026-05-19 01:00](#error-2026-05-19t0100500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 96.05s
[2026-05-23 00:59](#error-2026-05-23t0059050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.10s
[2026-05-28 00:56](#error-2026-05-28t0056520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.07s
[2026-06-02 01:07](#error-2026-06-02t0107270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 2 minutes
- 2026-05-08 PASS a minute
- 2026-05-09

### Error 2026-05-09T00:54:56+00:00
```
2026-05-09T00:54:56.2836675Z === RUN   TestAccPushBasedLogExport_basic
2026-05-09T00:54:56.2839744Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-2582310335644070010
2026-05-09T00:56:09.8643064Z     resource_test.go:24: 
2026-05-09T00:56:09.8644181Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:56:09.8645973Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T00:56:09.8648192Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T00:56:09.8650044Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-05-09T00:56:09.8652012Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-05-09T00:56:09.8653353Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T00:56:09.8653862Z         	Error:      	Received unexpected error:
2026-05-09T00:56:09.8655741Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:09.8656751Z         	Test:       	TestAccPushBasedLogExport_basic
2026-05-09T00:56:09.8658425Z         	Messages:   	Project creation failed: test-acc-tf-p-2582310335644070010, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:09.8659523Z --- FAIL: TestAccPushBasedLogExport_basic (73.58s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12

### Error 2026-05-12T00:53:16+00:00
```
2026-05-12T00:53:16.4747365Z === RUN   TestAccPushBasedLogExport_basic
2026-05-12T00:53:16.4750763Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-5524159283042778651
2026-05-12T00:54:18.6542525Z     resource_test.go:24: 
2026-05-12T00:54:18.6545400Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-12T00:54:18.6548605Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-12T00:54:18.6551676Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-12T00:54:18.6554202Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-05-12T00:54:18.6556505Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-05-12T00:54:18.6557908Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-12T00:54:18.6558487Z         	Error:      	Received unexpected error:
2026-05-12T00:54:18.6560749Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T00:54:18.6561958Z         	Test:       	TestAccPushBasedLogExport_basic
2026-05-12T00:54:18.6563882Z         	Messages:   	Project creation failed: test-acc-tf-p-5524159283042778651, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T00:54:18.6565114Z --- FAIL: TestAccPushBasedLogExport_basic (62.18s)
```

- 2026-05-13 PASS a minute
- 2026-05-14 PASS 2 minutes
- 2026-05-15 PASS a minute
- 2026-05-16

### Error 2026-05-16T00:54:05+00:00
```
2026-05-16T00:54:05.0389437Z === RUN   TestAccPushBasedLogExport_basic
2026-05-16T00:54:05.0390995Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-5901127489426877122
2026-05-16T00:55:38.8309078Z     resource_test.go:24: 
2026-05-16T00:55:38.8311649Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:55:38.8315347Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:55:38.8318953Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:55:38.8323000Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-05-16T00:55:38.8325550Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-05-16T00:55:38.8326978Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T00:55:38.8327606Z         	Error:      	Received unexpected error:
2026-05-16T00:55:38.8330100Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:38.8331459Z         	Test:       	TestAccPushBasedLogExport_basic
2026-05-16T00:55:38.8333507Z         	Messages:   	Project creation failed: test-acc-tf-p-5901127489426877122, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:38.8335970Z --- FAIL: TestAccPushBasedLogExport_basic (93.79s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19

### Error 2026-05-19T01:00:50+00:00
```
2026-05-19T01:00:50.9114596Z === RUN   TestAccPushBasedLogExport_basic
2026-05-19T01:00:50.9115890Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-6178162978259574074
2026-05-19T01:02:27.4520519Z     resource_test.go:24: 
2026-05-19T01:02:27.4522077Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:02:27.4524734Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:02:27.4526999Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:02:27.4529067Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-05-19T01:02:27.4531123Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-05-19T01:02:27.4532472Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:02:27.4533035Z         	Error:      	Received unexpected error:
2026-05-19T01:02:27.4535025Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:02:27.4536166Z         	Test:       	TestAccPushBasedLogExport_basic
2026-05-19T01:02:27.4537960Z         	Messages:   	Project creation failed: test-acc-tf-p-6178162978259574074, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:02:27.4539180Z --- FAIL: TestAccPushBasedLogExport_basic (96.54s)
```

- 2026-05-20 PASS a minute
- 2026-05-21 PASS a minute
- 2026-05-22 PASS a minute
- 2026-05-23

### Error 2026-05-23T00:59:05+00:00
```
2026-05-23T00:59:05.2160160Z === RUN   TestAccPushBasedLogExport_basic
2026-05-23T00:59:05.2164553Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-5535979392344532347
2026-05-23T01:00:11.1880166Z     resource_test.go:24: 
2026-05-23T01:00:11.1883004Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:00:11.1886582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:00:11.1888726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:00:11.1890970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-05-23T01:00:11.1893328Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-05-23T01:00:11.1894896Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:00:11.1895487Z         	Error:      	Received unexpected error:
2026-05-23T01:00:11.1897583Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:00:11.1898664Z         	Test:       	TestAccPushBasedLogExport_basic
2026-05-23T01:00:11.1900453Z         	Messages:   	Project creation failed: test-acc-tf-p-5535979392344532347, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:00:11.1901651Z --- FAIL: TestAccPushBasedLogExport_basic (65.97s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS a minute
- 2026-05-26 PASS 2 minutes
- 2026-05-27 PASS a minute
- 2026-05-28

### Error 2026-05-28T00:56:52+00:00
```
2026-05-28T00:56:52.9757636Z === RUN   TestAccPushBasedLogExport_basic
2026-05-28T00:56:52.9758971Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-1516080236046561712
2026-05-28T00:57:59.7076180Z     resource_test.go:24: 
2026-05-28T00:57:59.7077695Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T00:57:59.7079550Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T00:57:59.7081298Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T00:57:59.7083145Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-05-28T00:57:59.7085479Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-05-28T00:57:59.7086735Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T00:57:59.7087284Z         	Error:      	Received unexpected error:
2026-05-28T00:57:59.7089218Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:57:59.7090271Z         	Test:       	TestAccPushBasedLogExport_basic
2026-05-28T00:57:59.7091984Z         	Messages:   	Project creation failed: test-acc-tf-p-1516080236046561712, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:57:59.7093198Z --- FAIL: TestAccPushBasedLogExport_basic (66.73s)
```

- 2026-05-29 PASS a minute
- 2026-05-30 PASS 2 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS a minute
- 2026-06-02

### Error 2026-06-02T01:07:27+00:00
```
2026-06-02T01:07:27.4247154Z === RUN   TestAccPushBasedLogExport_basic
2026-06-02T01:07:27.4249133Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-3385644602205030250
2026-06-02T01:08:51.4638088Z     resource_test.go:24: 
2026-06-02T01:08:51.4640137Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:08:51.4643258Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:08:51.4646566Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:08:51.4649276Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-06-02T01:08:51.4652205Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-06-02T01:08:51.4653495Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:08:51.4654287Z         	Error:      	Received unexpected error:
2026-06-02T01:08:51.4656232Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:08:51.4657271Z         	Test:       	TestAccPushBasedLogExport_basic
2026-06-02T01:08:51.4658995Z         	Messages:   	Project creation failed: test-acc-tf-p-3385644602205030250, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:08:51.4660136Z --- FAIL: TestAccPushBasedLogExport_basic (84.04s)
```

- 2026-06-03 PASS a minute
- 2026-06-04 PASS 2 minutes
- 2026-06-05 PASS a minute

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a minute
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a minute
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a minute
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a minute
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
