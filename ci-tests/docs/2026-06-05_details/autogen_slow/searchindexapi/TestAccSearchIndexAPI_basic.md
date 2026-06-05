# autogen_slow/searchindexapi/TestAccSearchIndexAPI_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 9)
Success rate: 70.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:56](#error-2026-05-09t0156210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.05s
[2026-05-12 01:54](#error-2026-05-12t0154400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s
[2026-05-14 01:54](#error-2026-05-14t0154240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.01s
[2026-05-19 01:43](#error-2026-05-19t0143060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.06s
[2026-05-21 02:03](#error-2026-05-21t0203030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 97.08s
[2026-05-26 03:10](#error-2026-05-26t0310440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 106.08s
[2026-05-28 02:20](#error-2026-05-28t0220310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.08s
[2026-05-30 01:46](#error-2026-05-30t0146340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.09s
[2026-06-02 02:04](#error-2026-06-02t0204500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 21 minutes
  - PASS 54 minutes
- 2026-05-08 PASS 28 minutes
- 2026-05-09

### Error 2026-05-09T01:56:21+00:00
```
2026-05-09T01:56:21.9445751Z === RUN   TestAccSearchIndexAPI_basic
2026-05-09T01:56:21.9446828Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-8843560405999266812
2026-05-09T01:56:21.9447648Z     resource_test.go:22: 
2026-05-09T01:56:21.9449183Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:56:21.9454397Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:56:21.9457865Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:56:21.9461069Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-09T01:56:21.9464532Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-05-09T01:56:21.9466575Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:56:21.9467415Z         	Error:      	Received unexpected error:
2026-05-09T01:56:21.9470742Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:56:21.9472610Z         	Test:       	TestAccSearchIndexAPI_basic
2026-05-09T01:56:21.9475550Z         	Messages:   	Project creation failed: test-acc-tf-p-8843560405999266812, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:56:21.9477462Z --- FAIL: TestAccSearchIndexAPI_basic (73.53s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 20 minutes
- 2026-05-12

### Error 2026-05-12T01:54:40+00:00
```
2026-05-12T01:54:40.5713499Z === RUN   TestAccSearchIndexAPI_basic
2026-05-12T01:54:40.5714795Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-2811540626956332081
2026-05-12T01:54:40.5715665Z     resource_test.go:22: 
2026-05-12T01:54:40.5717300Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-12T01:54:40.5721108Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-12T01:54:40.5724823Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-12T01:54:40.5728285Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-12T01:54:40.5732142Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-05-12T01:54:40.5734395Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-12T01:54:40.5735341Z         	Error:      	Received unexpected error:
2026-05-12T01:54:40.5739036Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T01:54:40.5740992Z         	Test:       	TestAccSearchIndexAPI_basic
2026-05-12T01:54:40.5744492Z         	Messages:   	Project creation failed: test-acc-tf-p-2811540626956332081, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T01:54:40.5746615Z --- FAIL: TestAccSearchIndexAPI_basic (63.18s)
```

- 2026-05-13 PASS 27 minutes
- 2026-05-14

### Error 2026-05-14T01:54:24+00:00
```
2026-05-14T01:54:24.5165932Z === RUN   TestAccSearchIndexAPI_basic
2026-05-14T01:54:24.5166626Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-3834995731665185046
2026-05-14T01:54:24.5167127Z     resource_test.go:22: 
2026-05-14T01:54:24.5168054Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-14T01:54:24.5169774Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-14T01:54:24.5171476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-14T01:54:24.5173163Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-14T01:54:24.5175328Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-05-14T01:54:24.5176507Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-14T01:54:24.5177029Z         	Error:      	Received unexpected error:
2026-05-14T01:54:24.5178928Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:54:24.5182366Z         	Test:       	TestAccSearchIndexAPI_basic
2026-05-14T01:54:24.5184652Z         	Messages:   	Project creation failed: test-acc-tf-p-3834995731665185046, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:54:24.5185786Z --- FAIL: TestAccSearchIndexAPI_basic (68.14s)
```

- 2026-05-15 PASS 44 minutes
- 2026-05-16 PASS 36 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 22 minutes
- 2026-05-19

### Error 2026-05-19T01:43:06+00:00
```
2026-05-19T01:43:06.2967131Z === RUN   TestAccSearchIndexAPI_basic
2026-05-19T01:43:06.2967907Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-821224944412829107
2026-05-19T01:43:06.2968485Z     resource_test.go:22: 
2026-05-19T01:43:06.2969605Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:43:06.2971135Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:43:06.2972522Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:43:06.2973901Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-19T01:43:06.2975928Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-05-19T01:43:06.2976893Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:43:06.2977305Z         	Error:      	Received unexpected error:
2026-05-19T01:43:06.2978811Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:43:06.2979593Z         	Test:       	TestAccSearchIndexAPI_basic
2026-05-19T01:43:06.2980914Z         	Messages:   	Project creation failed: test-acc-tf-p-821224944412829107, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:43:06.2981772Z --- FAIL: TestAccSearchIndexAPI_basic (85.55s)
```

- 2026-05-20 PASS 29 minutes
- 2026-05-21

### Error 2026-05-21T02:03:03+00:00
```
2026-05-21T02:03:03.5871220Z === RUN   TestAccSearchIndexAPI_basic
2026-05-21T02:03:03.5874796Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-5521511369372372562
2026-05-21T02:03:03.5876945Z     resource_test.go:22: 
2026-05-21T02:03:03.5878549Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T02:03:03.5881887Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T02:03:03.5885188Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T02:03:03.5888169Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-21T02:03:03.5891300Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-05-21T02:03:03.5893378Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-21T02:03:03.5894193Z         	Error:      	Received unexpected error:
2026-05-21T02:03:03.5897358Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T02:03:03.5898937Z         	Test:       	TestAccSearchIndexAPI_basic
2026-05-21T02:03:03.5901743Z         	Messages:   	Project creation failed: test-acc-tf-p-5521511369372372562, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T02:03:03.5903916Z --- FAIL: TestAccSearchIndexAPI_basic (97.78s)
```

- 2026-05-22 PASS 39 minutes
- 2026-05-23 PASS 43 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 28 minutes
- 2026-05-26

### Error 2026-05-26T03:10:44+00:00
```
2026-05-26T03:10:44.9944808Z === RUN   TestAccSearchIndexAPI_basic
2026-05-26T03:10:44.9945842Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-8420614687875444118
2026-05-26T03:10:44.9946609Z     resource_test.go:22: 
2026-05-26T03:10:44.9948116Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T03:10:44.9950039Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T03:10:44.9952133Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T03:10:44.9953882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-26T03:10:44.9955817Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-05-26T03:10:44.9957016Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-26T03:10:44.9957556Z         	Error:      	Received unexpected error:
2026-05-26T03:10:44.9959493Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:10:44.9960478Z         	Test:       	TestAccSearchIndexAPI_basic
2026-05-26T03:10:44.9962563Z         	Messages:   	Project creation failed: test-acc-tf-p-8420614687875444118, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:10:44.9963978Z --- FAIL: TestAccSearchIndexAPI_basic (106.81s)
```

- 2026-05-27 PASS 34 minutes
- 2026-05-28

### Error 2026-05-28T02:20:31+00:00
```
2026-05-28T02:20:31.2443087Z === RUN   TestAccSearchIndexAPI_basic
2026-05-28T02:20:31.2443690Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-176554740420430598
2026-05-28T02:20:31.2444185Z     resource_test.go:22: 
2026-05-28T02:20:31.2445076Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:20:31.2446850Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:20:31.2448583Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:20:31.2450299Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-28T02:20:31.2452296Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-05-28T02:20:31.2453483Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T02:20:31.2453994Z         	Error:      	Received unexpected error:
2026-05-28T02:20:31.2455899Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:20:31.2456999Z         	Test:       	TestAccSearchIndexAPI_basic
2026-05-28T02:20:31.2458692Z         	Messages:   	Project creation failed: test-acc-tf-p-176554740420430598, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:20:31.2459987Z --- FAIL: TestAccSearchIndexAPI_basic (94.79s)
```

- 2026-05-29 PASS 36 minutes
- 2026-05-30

### Error 2026-05-30T01:46:34+00:00
```
2026-05-30T01:46:34.9055041Z === RUN   TestAccSearchIndexAPI_basic
2026-05-30T01:46:34.9055710Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-7205537036932803101
2026-05-30T01:46:34.9056244Z     resource_test.go:22: 
2026-05-30T01:46:34.9057187Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:46:34.9061449Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:46:34.9064406Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:46:34.9067399Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-30T01:46:34.9069471Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-05-30T01:46:34.9071105Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:46:34.9071847Z         	Error:      	Received unexpected error:
2026-05-30T01:46:34.9085194Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:46:34.9086371Z         	Test:       	TestAccSearchIndexAPI_basic
2026-05-30T01:46:34.9088173Z         	Messages:   	Project creation failed: test-acc-tf-p-7205537036932803101, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:46:34.9089293Z --- FAIL: TestAccSearchIndexAPI_basic (66.88s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 27 minutes
- 2026-06-02

### Error 2026-06-02T02:04:50+00:00
```
2026-06-02T02:04:50.9488301Z === RUN   TestAccSearchIndexAPI_basic
2026-06-02T02:04:50.9489452Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-7691083064960284474
2026-06-02T02:04:50.9490359Z     resource_test.go:22: 
2026-06-02T02:04:50.9492451Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T02:04:50.9496177Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T02:04:50.9499955Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T02:04:50.9502993Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-06-02T02:04:50.9505226Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-06-02T02:04:50.9506864Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T02:04:50.9507442Z         	Error:      	Received unexpected error:
2026-06-02T02:04:50.9509439Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T02:04:50.9510502Z         	Test:       	TestAccSearchIndexAPI_basic
2026-06-02T02:04:50.9512645Z         	Messages:   	Project creation failed: test-acc-tf-p-7691083064960284474, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T02:04:50.9514950Z --- FAIL: TestAccSearchIndexAPI_basic (66.91s)
```

- 2026-06-03 PASS 34 minutes
- 2026-06-04 PASS 45 minutes
- 2026-06-05 PASS 27 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 28 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 27 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 37 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 27 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
