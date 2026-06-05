# autogen_slow/streaminstanceapi/TestAccStreamInstanceAPI_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 9)
Success rate: 70.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:56](#error-2026-05-09t0156210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.04s
[2026-05-16 01:46](#error-2026-05-16t0146090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.10s
[2026-05-19 01:43](#error-2026-05-19t0143060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.02s
[2026-05-21 02:03](#error-2026-05-21t0203030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s
[2026-05-23 02:03](#error-2026-05-23t0203150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.10s
[2026-05-26 03:10](#error-2026-05-26t0310450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.07s
[2026-05-28 02:20](#error-2026-05-28t0220310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.09s
[2026-05-30 01:46](#error-2026-05-30t0146340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 109.04s
[2026-06-02 02:04](#error-2026-06-02t0204500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 4 seconds
  - PASS 6 seconds
- 2026-05-08 PASS 6 seconds
- 2026-05-09

### Error 2026-05-09T01:56:21+00:00
```
2026-05-09T01:56:21.9565139Z === RUN   TestAccStreamInstanceAPI_basic
2026-05-09T01:56:21.9566053Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-3830689810012239272
2026-05-09T01:56:21.9566825Z     resource_test.go:21: 
2026-05-09T01:56:21.9568313Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:56:21.9571543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:56:21.9574615Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:56:21.9577869Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-05-09T01:56:21.9579230Z         	Error:      	Received unexpected error:
2026-05-09T01:56:21.9582687Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:56:21.9584284Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-05-09T01:56:21.9587195Z         	Messages:   	Project creation failed: test-acc-tf-p-3830689810012239272, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:56:21.9589091Z --- FAIL: TestAccStreamInstanceAPI_basic (75.41s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 4 seconds
- 2026-05-12 PASS 15 seconds
- 2026-05-13 PASS 4 seconds
- 2026-05-14 PASS 40 seconds
- 2026-05-15 PASS 6 seconds
- 2026-05-16

### Error 2026-05-16T01:46:09+00:00
```
2026-05-16T01:46:09.5925401Z === RUN   TestAccStreamInstanceAPI_basic
2026-05-16T01:46:09.5925971Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-1321934396649021237
2026-05-16T01:46:09.5926632Z     resource_test.go:21: 
2026-05-16T01:46:09.5927531Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:46:09.5929257Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:46:09.5930978Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:46:09.5932842Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-05-16T01:46:09.5933655Z         	Error:      	Received unexpected error:
2026-05-16T01:46:09.5935556Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:09.5936783Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-05-16T01:46:09.5938482Z         	Messages:   	Project creation failed: test-acc-tf-p-1321934396649021237, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:09.5939590Z --- FAIL: TestAccStreamInstanceAPI_basic (61.99s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 4 seconds
- 2026-05-19

### Error 2026-05-19T01:43:06+00:00
```
2026-05-19T01:43:06.3051340Z === RUN   TestAccStreamInstanceAPI_basic
2026-05-19T01:43:06.3051782Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-156487080687019779
2026-05-19T01:43:06.3052166Z     resource_test.go:21: 
2026-05-19T01:43:06.3052870Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:43:06.3054383Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:43:06.3055776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:43:06.3057221Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-05-19T01:43:06.3057852Z         	Error:      	Received unexpected error:
2026-05-19T01:43:06.3059337Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:43:06.3060110Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-05-19T01:43:06.3061598Z         	Messages:   	Project creation failed: test-acc-tf-p-156487080687019779, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:43:06.3062479Z --- FAIL: TestAccStreamInstanceAPI_basic (88.22s)
```

- 2026-05-20 PASS 4 seconds
- 2026-05-21

### Error 2026-05-21T02:03:03+00:00
```
2026-05-21T02:03:03.6009160Z === RUN   TestAccStreamInstanceAPI_basic
2026-05-21T02:03:03.6010230Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-7375874602261662498
2026-05-21T02:03:03.6010981Z     resource_test.go:21: 
2026-05-21T02:03:03.6012416Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T02:03:03.6015416Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T02:03:03.6018318Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T02:03:03.6021413Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-05-21T02:03:03.6022709Z         	Error:      	Received unexpected error:
2026-05-21T02:03:03.6025994Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T02:03:03.6027556Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-05-21T02:03:03.6030490Z         	Messages:   	Project creation failed: test-acc-tf-p-7375874602261662498, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T02:03:03.6032274Z --- FAIL: TestAccStreamInstanceAPI_basic (62.68s)
```

- 2026-05-22 PASS 4 seconds
- 2026-05-23

### Error 2026-05-23T02:03:15+00:00
```
2026-05-23T02:03:15.4030254Z === RUN   TestAccStreamInstanceAPI_basic
2026-05-23T02:03:15.4031237Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-8730889742054353895
2026-05-23T02:03:15.4032101Z     resource_test.go:21: 
2026-05-23T02:03:15.4035829Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T02:03:15.4039275Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T02:03:15.4043078Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T02:03:15.4046940Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-05-23T02:03:15.4048506Z         	Error:      	Received unexpected error:
2026-05-23T02:03:15.4052280Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T02:03:15.4054641Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-05-23T02:03:15.4057883Z         	Messages:   	Project creation failed: test-acc-tf-p-8730889742054353895, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T02:03:15.4060090Z --- FAIL: TestAccStreamInstanceAPI_basic (64.98s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 4 seconds
- 2026-05-26

### Error 2026-05-26T03:10:45+00:00
```
2026-05-26T03:10:45.0031116Z === RUN   TestAccStreamInstanceAPI_basic
2026-05-26T03:10:45.0031898Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-920630810130817010
2026-05-26T03:10:45.0032380Z     resource_test.go:21: 
2026-05-26T03:10:45.0033269Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T03:10:45.0035018Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T03:10:45.0036756Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T03:10:45.0038739Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-05-26T03:10:45.0039554Z         	Error:      	Received unexpected error:
2026-05-26T03:10:45.0041616Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:10:45.0042614Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-05-26T03:10:45.0044296Z         	Messages:   	Project creation failed: test-acc-tf-p-920630810130817010, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:10:45.0045393Z --- FAIL: TestAccStreamInstanceAPI_basic (70.69s)
```

- 2026-05-27 PASS 4 seconds
- 2026-05-28

### Error 2026-05-28T02:20:31+00:00
```
2026-05-28T02:20:31.2618484Z === RUN   TestAccStreamInstanceAPI_basic
2026-05-28T02:20:31.2619110Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-4441352310908090257
2026-05-28T02:20:31.2619676Z     resource_test.go:21: 
2026-05-28T02:20:31.2620752Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:20:31.2622916Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:20:31.2625010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:20:31.2627114Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-05-28T02:20:31.2628064Z         	Error:      	Received unexpected error:
2026-05-28T02:20:31.2630282Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:20:31.2631661Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-05-28T02:20:31.2633645Z         	Messages:   	Project creation failed: test-acc-tf-p-4441352310908090257, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:20:31.2635109Z --- FAIL: TestAccStreamInstanceAPI_basic (68.87s)
```

- 2026-05-29 PASS 3 seconds
- 2026-05-30

### Error 2026-05-30T01:46:34+00:00
```
2026-05-30T01:46:34.9212252Z === RUN   TestAccStreamInstanceAPI_basic
2026-05-30T01:46:34.9212843Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-5658253198243040546
2026-05-30T01:46:34.9213344Z     resource_test.go:21: 
2026-05-30T01:46:34.9214269Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:46:34.9216075Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:46:34.9217865Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:46:34.9219778Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-05-30T01:46:34.9220774Z         	Error:      	Received unexpected error:
2026-05-30T01:46:34.9222762Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:46:34.9223766Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-05-30T01:46:34.9225503Z         	Messages:   	Project creation failed: test-acc-tf-p-5658253198243040546, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:46:34.9226628Z --- FAIL: TestAccStreamInstanceAPI_basic (109.38s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 6 seconds
- 2026-06-02

### Error 2026-06-02T02:04:50+00:00
```
2026-06-02T02:04:50.9545830Z === RUN   TestAccStreamInstanceAPI_basic
2026-06-02T02:04:50.9546413Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-263989722700943467
2026-06-02T02:04:50.9546918Z     resource_test.go:21: 
2026-06-02T02:04:50.9547846Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T02:04:50.9549704Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T02:04:50.9551550Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T02:04:50.9553785Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-06-02T02:04:50.9554775Z         	Error:      	Received unexpected error:
2026-06-02T02:04:50.9556772Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T02:04:50.9557820Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-06-02T02:04:50.9559609Z         	Messages:   	Project creation failed: test-acc-tf-p-263989722700943467, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T02:04:50.9560803Z --- FAIL: TestAccStreamInstanceAPI_basic (90.40s)
```

- 2026-06-03 PASS 4 seconds
- 2026-06-04 PASS 8 seconds
- 2026-06-05 PASS 4 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 3 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 5 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 5 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 4 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
