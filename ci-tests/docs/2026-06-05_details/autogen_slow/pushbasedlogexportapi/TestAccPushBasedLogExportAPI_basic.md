# autogen_slow/pushbasedlogexportapi/TestAccPushBasedLogExportAPI_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 8)
Success rate: 74.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:02](#error-2026-05-09t0102470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.05s
[2026-05-14 01:49](#error-2026-05-14t0149220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.02s
[2026-05-16 01:10](#error-2026-05-16t0110490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.05s
[2026-05-19 01:06](#error-2026-05-19t0106130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.02s
[2026-05-21 01:27](#error-2026-05-21t0127270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 103.05s
[2026-05-26 02:15](#error-2026-05-26t0215080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.07s
[2026-05-28 01:01](#error-2026-05-28t0101280000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 120.00s
[2026-06-02 01:14](#error-2026-06-02t0114070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS a minute
  - PASS a minute
- 2026-05-08 PASS a minute
- 2026-05-09

### Error 2026-05-09T01:02:47+00:00
```
2026-05-09T01:02:47.9539359Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-05-09T01:02:47.9539955Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-5438536297588954146
2026-05-09T01:02:47.9540433Z     resource_test.go:21: 
2026-05-09T01:02:47.9541496Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:02:47.9543275Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:02:47.9545021Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:02:47.9546920Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-05-09T01:02:47.9549062Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-05-09T01:02:47.9550264Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:02:47.9550778Z         	Error:      	Received unexpected error:
2026-05-09T01:02:47.9552872Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:47.9553883Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-05-09T01:02:47.9555596Z         	Messages:   	Project creation failed: test-acc-tf-p-5438536297588954146, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:47.9556717Z --- FAIL: TestAccPushBasedLogExportAPI_basic (77.47s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12 PASS 2 minutes
- 2026-05-13 PASS a minute
- 2026-05-14

### Error 2026-05-14T01:49:22+00:00
```
2026-05-14T01:49:22.3464716Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-05-14T01:49:22.3465270Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-7134207171743991091
2026-05-14T01:49:22.3465730Z     resource_test.go:21: 
2026-05-14T01:49:22.3466602Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-14T01:49:22.3469225Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-14T01:49:22.3471480Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-14T01:49:22.3473858Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-05-14T01:49:22.3475842Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-05-14T01:49:22.3477034Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-14T01:49:22.3477542Z         	Error:      	Received unexpected error:
2026-05-14T01:49:22.3479443Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:49:22.3480421Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-05-14T01:49:22.3482101Z         	Messages:   	Project creation failed: test-acc-tf-p-7134207171743991091, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:49:22.3483191Z --- FAIL: TestAccPushBasedLogExportAPI_basic (68.21s)
```

- 2026-05-15 PASS a minute
- 2026-05-16

### Error 2026-05-16T01:10:49+00:00
```
2026-05-16T01:10:49.6396042Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-05-16T01:10:49.6396927Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-6554100544102064347
2026-05-16T01:10:49.6397415Z     resource_test.go:21: 
2026-05-16T01:10:49.6398318Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:10:49.6400168Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:10:49.6401925Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:10:49.6403838Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-05-16T01:10:49.6405809Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-05-16T01:10:49.6407184Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T01:10:49.6407714Z         	Error:      	Received unexpected error:
2026-05-16T01:10:49.6409653Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:10:49.6410658Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-05-16T01:10:49.6412566Z         	Messages:   	Project creation failed: test-acc-tf-p-6554100544102064347, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:10:49.6413752Z --- FAIL: TestAccPushBasedLogExportAPI_basic (66.48s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19

### Error 2026-05-19T01:06:13+00:00
```
2026-05-19T01:06:13.4574472Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-05-19T01:06:13.4574935Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-6649931526934637062
2026-05-19T01:06:13.4575317Z     resource_test.go:21: 
2026-05-19T01:06:13.4576014Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:06:13.4577383Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:06:13.4578746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:06:13.4580680Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-05-19T01:06:13.4582208Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-05-19T01:06:13.4583159Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:06:13.4583563Z         	Error:      	Received unexpected error:
2026-05-19T01:06:13.4585191Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:06:13.4585992Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-05-19T01:06:13.4587323Z         	Messages:   	Project creation failed: test-acc-tf-p-6649931526934637062, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:06:13.4588202Z --- FAIL: TestAccPushBasedLogExportAPI_basic (89.21s)
```

- 2026-05-20 PASS a minute
- 2026-05-21

### Error 2026-05-21T01:27:27+00:00
```
2026-05-21T01:27:27.5747413Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-05-21T01:27:27.5747966Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-8975934413406788177
2026-05-21T01:27:27.5748428Z     resource_test.go:21: 
2026-05-21T01:27:27.5749562Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:27:27.5751289Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:27:27.5753013Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:27:27.5755016Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-05-21T01:27:27.5756951Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-05-21T01:27:27.5759088Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-21T01:27:27.5759674Z         	Error:      	Received unexpected error:
2026-05-21T01:27:27.5761570Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:27:27.5762577Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-05-21T01:27:27.5765068Z         	Messages:   	Project creation failed: test-acc-tf-p-8975934413406788177, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:27:27.5766451Z --- FAIL: TestAccPushBasedLogExportAPI_basic (103.51s)
```

- 2026-05-22 PASS a minute
- 2026-05-23 PASS 2 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS a minute
- 2026-05-26

### Error 2026-05-26T02:15:08+00:00
```
2026-05-26T02:15:08.3768088Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-05-26T02:15:08.3768650Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-5110813272480347502
2026-05-26T02:15:08.3769111Z     resource_test.go:21: 
2026-05-26T02:15:08.3769995Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:15:08.3771963Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:15:08.3773917Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:15:08.3775837Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-05-26T02:15:08.3777793Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-05-26T02:15:08.3778979Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-26T02:15:08.3779504Z         	Error:      	Received unexpected error:
2026-05-26T02:15:08.3781536Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:15:08.3782545Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-05-26T02:15:08.3784224Z         	Messages:   	Project creation failed: test-acc-tf-p-5110813272480347502, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:15:08.3785323Z --- FAIL: TestAccPushBasedLogExportAPI_basic (69.74s)
```

- 2026-05-27 PASS a minute
- 2026-05-28

### Error 2026-05-28T01:01:28+00:00
```
2026-05-28T01:01:28.8797986Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-05-28T01:01:28.8798536Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-3803139359387501230
2026-05-28T01:01:28.8799006Z     resource_test.go:21: 
2026-05-28T01:01:28.8799869Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:28.8801730Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:28.8803713Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:28.8805572Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-05-28T01:01:28.8807494Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-05-28T01:01:28.8808671Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:01:28.8809181Z         	Error:      	Received unexpected error:
2026-05-28T01:01:28.8811026Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:28.8812141Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-05-28T01:01:28.8813811Z         	Messages:   	Project creation failed: test-acc-tf-p-3803139359387501230, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:28.8814927Z --- FAIL: TestAccPushBasedLogExportAPI_basic (120.05s)
```

- 2026-05-29 PASS a minute
- 2026-05-30 PASS 2 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS a minute
- 2026-06-02

### Error 2026-06-02T01:14:07+00:00
```
2026-06-02T01:14:07.1495894Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-06-02T01:14:07.1496499Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-214872483743975190
2026-06-02T01:14:07.1497014Z     resource_test.go:21: 
2026-06-02T01:14:07.1497954Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:14:07.1499814Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:14:07.1501957Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:14:07.1504013Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-06-02T01:14:07.1506105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-06-02T01:14:07.1507385Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:14:07.1507923Z         	Error:      	Received unexpected error:
2026-06-02T01:14:07.1509914Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:14:07.1511144Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-06-02T01:14:07.1513240Z         	Messages:   	Project creation failed: test-acc-tf-p-214872483743975190, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:14:07.1514460Z --- FAIL: TestAccPushBasedLogExportAPI_basic (91.11s)
```

- 2026-06-03 PASS a minute
- 2026-06-04 PASS a minute
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
