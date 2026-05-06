# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 26) FAIL(x 8)
Success rate: 76.47%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:44](#error-2026-04-07t0044500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.04s
[2026-04-09 00:38](#error-2026-04-09t0038130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.04s
[2026-04-11 00:42](#error-2026-04-11t0042510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.03s
[2026-04-16 00:50](#error-2026-04-16t0050410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s
[2026-04-21 00:49](#error-2026-04-21t0049100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-04-30 00:55](#error-2026-04-30t0055100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.05s
[2026-05-02 00:52](#error-2026-05-02t0052420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.10s
[2026-05-05 00:51](#error-2026-05-05t0051200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:44:50+00:00
```
2026-04-07T00:44:50.1422777Z === RUN   TestAccPushBasedLogExport_basic
2026-04-07T00:44:50.1425058Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-6440073955049919573
2026-04-07T00:45:57.5718161Z     resource_test.go:24: 
2026-04-07T00:45:57.5719962Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-07T00:45:57.5723268Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-07T00:45:57.5725580Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-07T00:45:57.5727826Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-04-07T00:45:57.5730255Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-04-07T00:45:57.5731607Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-07T00:45:57.5732163Z         	Error:      	Received unexpected error:
2026-04-07T00:45:57.5734329Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:45:57.5735422Z         	Test:       	TestAccPushBasedLogExport_basic
2026-04-07T00:45:57.5737212Z         	Messages:   	Project creation failed: test-acc-tf-p-6440073955049919573, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:45:57.5738586Z --- FAIL: TestAccPushBasedLogExport_basic (67.43s)
```

- 2026-04-08 PASS a minute
- 2026-04-09

### Error 2026-04-09T00:38:13+00:00
```
2026-04-09T00:38:13.9495451Z === RUN   TestAccPushBasedLogExport_basic
2026-04-09T00:38:13.9497337Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-7329807023265947160
2026-04-09T00:39:16.3191458Z     resource_test.go:24: 
2026-04-09T00:39:16.3192688Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:39:16.3195402Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:39:16.3197278Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:39:16.3199238Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-04-09T00:39:16.3201249Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-04-09T00:39:16.3202495Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-09T00:39:16.3203004Z         	Error:      	Received unexpected error:
2026-04-09T00:39:16.3205154Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:39:16.3206219Z         	Test:       	TestAccPushBasedLogExport_basic
2026-04-09T00:39:16.3208026Z         	Messages:   	Project creation failed: test-acc-tf-p-7329807023265947160, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:39:16.3209225Z --- FAIL: TestAccPushBasedLogExport_basic (62.37s)
```

- 2026-04-10 PASS a minute
- 2026-04-11

### Error 2026-04-11T00:42:51+00:00
```
2026-04-11T00:42:51.1356748Z === RUN   TestAccPushBasedLogExport_basic
2026-04-11T00:42:51.1358487Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-6896312369706529158
2026-04-11T00:44:10.4104468Z     resource_test.go:24: 
2026-04-11T00:44:10.4106431Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:44:10.4109986Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:44:10.4113131Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:44:10.4116713Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-04-11T00:44:10.4118908Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-04-11T00:44:10.4120373Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-11T00:44:10.4120881Z         	Error:      	Received unexpected error:
2026-04-11T00:44:10.4122808Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:44:10.4123833Z         	Test:       	TestAccPushBasedLogExport_basic
2026-04-11T00:44:10.4125566Z         	Messages:   	Project creation failed: test-acc-tf-p-6896312369706529158, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:44:10.4126713Z --- FAIL: TestAccPushBasedLogExport_basic (79.27s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS a minute
- 2026-04-14 PASS a minute
- 2026-04-15 PASS a minute
- 2026-04-16

### Error 2026-04-16T00:50:41+00:00
```
2026-04-16T00:50:41.2936263Z === RUN   TestAccPushBasedLogExport_basic
2026-04-16T00:50:41.2939598Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-4802022439920682427
2026-04-16T00:51:43.9560902Z     resource_test.go:24: 
2026-04-16T00:51:43.9563600Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:51:43.9567342Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T00:51:43.9570620Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T00:51:43.9573968Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-04-16T00:51:43.9576546Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-04-16T00:51:43.9577871Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-16T00:51:43.9578400Z         	Error:      	Received unexpected error:
2026-04-16T00:51:43.9580383Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:51:43.9581459Z         	Test:       	TestAccPushBasedLogExport_basic
2026-04-16T00:51:43.9583255Z         	Messages:   	Project creation failed: test-acc-tf-p-4802022439920682427, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:51:43.9584485Z --- FAIL: TestAccPushBasedLogExport_basic (62.66s)
```

- 2026-04-17 PASS a minute
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS a minute
- 2026-04-21

### Error 2026-04-21T00:49:10+00:00
```
2026-04-21T00:49:10.4243875Z === RUN   TestAccPushBasedLogExport_basic
2026-04-21T00:49:10.4246815Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-823706108641815513
2026-04-21T00:50:14.5439176Z     resource_test.go:24: 
2026-04-21T00:50:14.5440960Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-21T00:50:14.5443126Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-21T00:50:14.5445097Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-21T00:50:14.5447992Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-04-21T00:50:14.5450092Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-04-21T00:50:14.5451305Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-21T00:50:14.5451813Z         	Error:      	Received unexpected error:
2026-04-21T00:50:14.5453721Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T00:50:14.5454759Z         	Test:       	TestAccPushBasedLogExport_basic
2026-04-21T00:50:14.5456757Z         	Messages:   	Project creation failed: test-acc-tf-p-823706108641815513, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T00:50:14.5457940Z --- FAIL: TestAccPushBasedLogExport_basic (64.12s)
```

- 2026-04-22 PASS a minute
- 2026-04-23 PASS 2 minutes
- 2026-04-24 PASS a minute
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS a minute
- 2026-04-28 PASS a minute
- 2026-04-29 PASS a minute
- 2026-04-30

### Error 2026-04-30T00:55:10+00:00
```
2026-04-30T00:55:10.3819632Z === RUN   TestAccPushBasedLogExport_basic
2026-04-30T00:55:10.3821288Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-7839447940647190181
2026-04-30T00:56:16.8847873Z     resource_test.go:24: 
2026-04-30T00:56:16.8849032Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:56:16.8851086Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T00:56:16.8853262Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T00:56:16.8855182Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-04-30T00:56:16.8857168Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-04-30T00:56:16.8858417Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T00:56:16.8858979Z         	Error:      	Received unexpected error:
2026-04-30T00:56:16.8860969Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:56:16.8862085Z         	Test:       	TestAccPushBasedLogExport_basic
2026-04-30T00:56:16.8863783Z         	Messages:   	Project creation failed: test-acc-tf-p-7839447940647190181, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:56:16.8865039Z --- FAIL: TestAccPushBasedLogExport_basic (66.50s)
```

- 2026-05-01 PASS a minute
- 2026-05-02

### Error 2026-05-02T00:52:42+00:00
```
2026-05-02T00:52:42.8052345Z === RUN   TestAccPushBasedLogExport_basic
2026-05-02T00:52:42.8053744Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-1798257905142317655
2026-05-02T00:53:48.7718898Z     resource_test.go:24: 
2026-05-02T00:53:48.7721006Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-02T00:53:48.7724303Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-02T00:53:48.7727621Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-02T00:53:48.7729976Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-05-02T00:53:48.7732331Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-05-02T00:53:48.7733761Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-02T00:53:48.7734339Z         	Error:      	Received unexpected error:
2026-05-02T00:53:48.7736826Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-02T00:53:48.7738031Z         	Test:       	TestAccPushBasedLogExport_basic
2026-05-02T00:53:48.7739809Z         	Messages:   	Project creation failed: test-acc-tf-p-1798257905142317655, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-02T00:53:48.7741002Z --- FAIL: TestAccPushBasedLogExport_basic (65.97s)
```

- 2026-05-03: MISSING
- 2026-05-04 PASS a minute
- 2026-05-05

### Error 2026-05-05T00:51:20+00:00
```
2026-05-05T00:51:20.5722797Z === RUN   TestAccPushBasedLogExport_basic
2026-05-05T00:51:20.5726531Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-8220176594549200790
2026-05-05T00:52:29.4689544Z     resource_test.go:24: 
2026-05-05T00:52:29.4691816Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:52:29.4695401Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:52:29.4699535Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T00:52:29.4703195Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-05-05T00:52:29.4705978Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-05-05T00:52:29.4707362Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-05T00:52:29.4707925Z         	Error:      	Received unexpected error:
2026-05-05T00:52:29.4710191Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:52:29.4712133Z         	Test:       	TestAccPushBasedLogExport_basic
2026-05-05T00:52:29.4714084Z         	Messages:   	Project creation failed: test-acc-tf-p-8220176594549200790, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:52:29.4715263Z --- FAIL: TestAccPushBasedLogExport_basic (68.90s)
```

- 2026-05-06 PASS a minute

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS a minute
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a minute
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS a minute
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS a minute
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS a minute
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS a minute
- 2026-05-04 PASS a minute
- 2026-05-05: MISSING
- 2026-05-06 PASS a minute
