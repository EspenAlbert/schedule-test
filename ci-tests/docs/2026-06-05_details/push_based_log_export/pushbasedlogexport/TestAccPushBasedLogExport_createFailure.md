# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_createFailure Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 00:56](#error-2026-05-16t0056580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.02s
[2026-05-19 01:03](#error-2026-05-19t0103360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.05s
[2026-05-23 01:01](#error-2026-05-23t0101250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.05s
[2026-05-28 00:59](#error-2026-05-28t0059020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.00s
[2026-06-02 01:10](#error-2026-06-02t0110000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS a second
- 2026-05-08 PASS a moment
- 2026-05-09 PASS 2 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS a second
- 2026-05-12 PASS a moment
- 2026-05-13 PASS a second
- 2026-05-14 PASS a moment
- 2026-05-15 PASS a moment
- 2026-05-16

### Error 2026-05-16T00:56:58+00:00
```
2026-05-16T00:56:58.9339829Z === RUN   TestAccPushBasedLogExport_createFailure
2026-05-16T00:56:58.9340540Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-4466537899540198952
2026-05-16T00:58:24.1250401Z     resource_test.go:98: 
2026-05-16T00:58:24.1253073Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:58:24.1255893Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:58:24.1257734Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:58:24.1259966Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:104
2026-05-16T00:58:24.1261958Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:98
2026-05-16T00:58:24.1263159Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T00:58:24.1263676Z         	Error:      	Received unexpected error:
2026-05-16T00:58:24.1265597Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:24.1266677Z         	Test:       	TestAccPushBasedLogExport_createFailure
2026-05-16T00:58:24.1268425Z         	Messages:   	Project creation failed: test-acc-tf-p-4466537899540198952, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:24.1269917Z --- FAIL: TestAccPushBasedLogExport_createFailure (85.19s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS a moment
- 2026-05-19

### Error 2026-05-19T01:03:36+00:00
```
2026-05-19T01:03:36.5134218Z === RUN   TestAccPushBasedLogExport_createFailure
2026-05-19T01:03:36.5134810Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-6977212369787393831
2026-05-19T01:04:57.9818284Z     resource_test.go:98: 
2026-05-19T01:04:57.9822535Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:04:57.9825726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:04:57.9827577Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:04:57.9829496Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:104
2026-05-19T01:04:57.9831422Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:98
2026-05-19T01:04:57.9832964Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:04:57.9833494Z         	Error:      	Received unexpected error:
2026-05-19T01:04:57.9835400Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:04:57.9836472Z         	Test:       	TestAccPushBasedLogExport_createFailure
2026-05-19T01:04:57.9838205Z         	Messages:   	Project creation failed: test-acc-tf-p-6977212369787393831, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:04:57.9839394Z --- FAIL: TestAccPushBasedLogExport_createFailure (81.47s)
```

- 2026-05-20 PASS a moment
- 2026-05-21 PASS a second
- 2026-05-22 PASS a moment
- 2026-05-23

### Error 2026-05-23T01:01:25+00:00
```
2026-05-23T01:01:25.4884727Z === RUN   TestAccPushBasedLogExport_createFailure
2026-05-23T01:01:25.4885321Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-5456416873595922857
2026-05-23T01:02:38.0238328Z     resource_test.go:98: 
2026-05-23T01:02:38.0240978Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:02:38.0244760Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:02:38.0247307Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:02:38.0249660Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:104
2026-05-23T01:02:38.0251998Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:98
2026-05-23T01:02:38.0253276Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:02:38.0254080Z         	Error:      	Received unexpected error:
2026-05-23T01:02:38.0256042Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:38.0257154Z         	Test:       	TestAccPushBasedLogExport_createFailure
2026-05-23T01:02:38.0258949Z         	Messages:   	Project creation failed: test-acc-tf-p-5456416873595922857, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:38.0261294Z --- FAIL: TestAccPushBasedLogExport_createFailure (72.54s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS a moment
- 2026-05-26 PASS a second
- 2026-05-27 PASS a moment
- 2026-05-28

### Error 2026-05-28T00:59:02+00:00
```
2026-05-28T00:59:02.4472769Z === RUN   TestAccPushBasedLogExport_createFailure
2026-05-28T00:59:02.4473375Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-742872196832499709
2026-05-28T01:00:05.4542881Z     resource_test.go:98: 
2026-05-28T01:00:05.4544856Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:05.4546703Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:05.4548515Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:05.4550436Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:104
2026-05-28T01:00:05.4552373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:98
2026-05-28T01:00:05.4553604Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:00:05.4554154Z         	Error:      	Received unexpected error:
2026-05-28T01:00:05.4556319Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:05.4557442Z         	Test:       	TestAccPushBasedLogExport_createFailure
2026-05-28T01:00:05.4559216Z         	Messages:   	Project creation failed: test-acc-tf-p-742872196832499709, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:05.4560381Z --- FAIL: TestAccPushBasedLogExport_createFailure (63.01s)
```

- 2026-05-29 PASS a moment
- 2026-05-30 PASS a second
- 2026-05-31: MISSING
- 2026-06-01 PASS a second
- 2026-06-02

### Error 2026-06-02T01:10:00+00:00
```
2026-06-02T01:10:00.4170681Z === RUN   TestAccPushBasedLogExport_createFailure
2026-06-02T01:10:00.4171548Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-5188010456604839849
2026-06-02T01:11:18.6195626Z     resource_test.go:98: 
2026-06-02T01:11:18.6197358Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:11:18.6200384Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:11:18.6202882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:11:18.6205211Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:104
2026-06-02T01:11:18.6207145Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:98
2026-06-02T01:11:18.6208411Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:11:18.6208985Z         	Error:      	Received unexpected error:
2026-06-02T01:11:18.6210954Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:11:18.6212138Z         	Test:       	TestAccPushBasedLogExport_createFailure
2026-06-02T01:11:18.6214077Z         	Messages:   	Project creation failed: test-acc-tf-p-5188010456604839849, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:11:18.6215289Z --- FAIL: TestAccPushBasedLogExport_createFailure (78.21s)
```

- 2026-06-03 PASS a moment
- 2026-06-04 PASS a moment
- 2026-06-05 PASS a second

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a moment
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a moment
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a moment
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a moment
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
