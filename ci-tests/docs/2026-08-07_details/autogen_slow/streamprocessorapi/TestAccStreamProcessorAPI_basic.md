# autogen_slow/streamprocessorapi/TestAccStreamProcessorAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:36](#error-2026-07-09t0136440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 122.04s
[2026-07-11 00:54](#error-2026-07-11t0054050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.08s
[2026-07-16 01:58](#error-2026-07-16t0158490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.05s
[2026-07-18 01:15](#error-2026-07-18t0115300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.03s
[2026-07-21 01:42](#error-2026-07-21t0142120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.05s
[2026-07-23 02:04](#error-2026-07-23t0204190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:36:44+00:00
```
2026-07-09T01:36:44.3055644Z === RUN   TestAccStreamProcessorAPI_basic
2026-07-09T01:36:44.3056309Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-3027637191056137164
2026-07-09T01:36:44.3056874Z     resource_test.go:40: 
2026-07-09T01:36:44.3057876Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:36:44.3059776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:36:44.3061664Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:36:44.3063687Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-07-09T01:36:44.3064592Z         	Error:      	Received unexpected error:
2026-07-09T01:36:44.3066837Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.3067946Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-07-09T01:36:44.3069791Z         	Messages:   	Project creation failed: test-acc-tf-p-3027637191056137164, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.3071182Z --- FAIL: TestAccStreamProcessorAPI_basic (122.44s)
```

- 2026-07-10 PASS 29 seconds
- 2026-07-11

### Error 2026-07-11T00:54:05+00:00
```
2026-07-11T00:54:05.8148716Z === RUN   TestAccStreamProcessorAPI_basic
2026-07-11T00:54:05.8149763Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-2032224258341864835
2026-07-11T00:54:05.8150665Z     resource_test.go:40: 
2026-07-11T00:54:05.8152392Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:05.8156103Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:05.8159693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:05.8163574Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-07-11T00:54:05.8165164Z         	Error:      	Received unexpected error:
2026-07-11T00:54:05.8169129Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.8171098Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-07-11T00:54:05.8174503Z         	Messages:   	Project creation failed: test-acc-tf-p-2032224258341864835, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.8176869Z --- FAIL: TestAccStreamProcessorAPI_basic (67.84s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 30 seconds
- 2026-07-14 PASS 35 seconds
- 2026-07-15 PASS 29 seconds
- 2026-07-16

### Error 2026-07-16T01:58:49+00:00
```
2026-07-16T01:58:49.2927610Z === RUN   TestAccStreamProcessorAPI_basic
2026-07-16T01:58:49.2928362Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-6399796246864205495
2026-07-16T01:58:49.2928873Z     resource_test.go:40: 
2026-07-16T01:58:49.2929845Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T01:58:49.2931980Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T01:58:49.2934156Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T01:58:49.2936283Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-07-16T01:58:49.2937144Z         	Error:      	Received unexpected error:
2026-07-16T01:58:49.2939306Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T01:58:49.2940375Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-07-16T01:58:49.2942817Z         	Messages:   	Project creation failed: test-acc-tf-p-6399796246864205495, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T01:58:49.2944064Z --- FAIL: TestAccStreamProcessorAPI_basic (89.53s)
```

- 2026-07-17 PASS 30 seconds
- 2026-07-18

### Error 2026-07-18T01:15:30+00:00
```
2026-07-18T01:15:30.9046146Z === RUN   TestAccStreamProcessorAPI_basic
2026-07-18T01:15:30.9046938Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-2755864652081120981
2026-07-18T01:15:30.9047439Z     resource_test.go:40: 
2026-07-18T01:15:30.9048370Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:15:30.9050237Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:15:30.9052095Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:15:30.9054525Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-07-18T01:15:30.9055387Z         	Error:      	Received unexpected error:
2026-07-18T01:15:30.9057403Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.9059437Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-07-18T01:15:30.9062854Z         	Messages:   	Project creation failed: test-acc-tf-p-2755864652081120981, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.9072602Z --- FAIL: TestAccStreamProcessorAPI_basic (93.35s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:42:12+00:00
```
2026-07-21T01:42:12.8349901Z === RUN   TestAccStreamProcessorAPI_basic
2026-07-21T01:42:12.8350512Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-411746900597561544
2026-07-21T01:42:12.8351034Z     resource_test.go:40: 
2026-07-21T01:42:12.8352327Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:42:12.8355504Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:42:12.8358854Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:42:12.8362219Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-07-21T01:42:12.8363840Z         	Error:      	Received unexpected error:
2026-07-21T01:42:12.8367287Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8369916Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-07-21T01:42:12.8373005Z         	Messages:   	Project creation failed: test-acc-tf-p-411746900597561544, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8374983Z --- FAIL: TestAccStreamProcessorAPI_basic (76.48s)
```

- 2026-07-22 PASS 30 seconds
- 2026-07-23

### Error 2026-07-23T02:04:19+00:00
```
2026-07-23T02:04:19.8663638Z === RUN   TestAccStreamProcessorAPI_basic
2026-07-23T02:04:19.8664226Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-6255244044398781983
2026-07-23T02:04:19.8664730Z     resource_test.go:40: 
2026-07-23T02:04:19.8665894Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T02:04:19.8667729Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T02:04:19.8669541Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T02:04:19.8671667Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-07-23T02:04:19.8672513Z         	Error:      	Received unexpected error:
2026-07-23T02:04:19.8674508Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T02:04:19.8675549Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-07-23T02:04:19.8677317Z         	Messages:   	Project creation failed: test-acc-tf-p-6255244044398781983, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T02:04:19.8678461Z --- FAIL: TestAccStreamProcessorAPI_basic (62.93s)
```

- 2026-07-24 PASS 30 seconds
- 2026-07-25 PASS 29 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 32 seconds
- 2026-07-28 PASS 29 seconds
- 2026-07-29 PASS 28 seconds
- 2026-07-30 PASS 29 seconds
- 2026-07-31 PASS 26 seconds
- 2026-08-01 PASS 30 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 28 seconds
- 2026-08-04 PASS 28 seconds
- 2026-08-05 PASS 30 seconds
- 2026-08-06 PASS 27 seconds
- 2026-08-07 PASS 31 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 30 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 33 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 32 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 30 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 27 seconds
  - PASS 33 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 28 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
