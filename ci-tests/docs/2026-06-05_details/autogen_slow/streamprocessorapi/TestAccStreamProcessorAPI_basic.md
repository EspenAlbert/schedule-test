# autogen_slow/streamprocessorapi/TestAccStreamProcessorAPI_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:56](#error-2026-05-09t0156210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 97.01s
[2026-05-19 01:43](#error-2026-05-19t0143060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.06s
[2026-05-21 02:03](#error-2026-05-21t0203030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.05s
[2026-05-23 02:03](#error-2026-05-23t0203150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.04s
[2026-05-26 03:10](#error-2026-05-26t0310450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.03s
[2026-05-28 02:20](#error-2026-05-28t0220310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 31 seconds
  - PASS 33 seconds
- 2026-05-08 PASS 31 seconds
- 2026-05-09

### Error 2026-05-09T01:56:21+00:00
```
2026-05-09T01:56:21.9591553Z === RUN   TestAccStreamProcessorAPI_basic
2026-05-09T01:56:21.9592478Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-438183028422754234
2026-05-09T01:56:21.9593259Z     resource_test.go:40: 
2026-05-09T01:56:21.9594771Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:56:21.9597803Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:56:21.9600849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:56:21.9604274Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-05-09T01:56:21.9605809Z         	Error:      	Received unexpected error:
2026-05-09T01:56:21.9609063Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:56:21.9610703Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-05-09T01:56:21.9613822Z         	Messages:   	Project creation failed: test-acc-tf-p-438183028422754234, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:56:21.9615670Z --- FAIL: TestAccStreamProcessorAPI_basic (97.06s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 30 seconds
- 2026-05-12 PASS 34 seconds
- 2026-05-13 PASS 31 seconds
- 2026-05-14 PASS a minute
- 2026-05-15 PASS 33 seconds
- 2026-05-16 PASS 51 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 31 seconds
- 2026-05-19

### Error 2026-05-19T01:43:06+00:00
```
2026-05-19T01:43:06.3063499Z === RUN   TestAccStreamProcessorAPI_basic
2026-05-19T01:43:06.3063932Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-2977448677743102820
2026-05-19T01:43:06.3064442Z     resource_test.go:40: 
2026-05-19T01:43:06.3065144Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:43:06.3066504Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:43:06.3068023Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:43:06.3069505Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-05-19T01:43:06.3070139Z         	Error:      	Received unexpected error:
2026-05-19T01:43:06.3071722Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:43:06.3072515Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-05-19T01:43:06.3073843Z         	Messages:   	Project creation failed: test-acc-tf-p-2977448677743102820, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:43:06.3074876Z --- FAIL: TestAccStreamProcessorAPI_basic (68.65s)
```

- 2026-05-20 PASS 31 seconds
- 2026-05-21

### Error 2026-05-21T02:03:03+00:00
```
2026-05-21T02:03:03.6034448Z === RUN   TestAccStreamProcessorAPI_basic
2026-05-21T02:03:03.6035314Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-9102508446466126317
2026-05-21T02:03:03.6036077Z     resource_test.go:40: 
2026-05-21T02:03:03.6037499Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T02:03:03.6040371Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T02:03:03.6043426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T02:03:03.6046548Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-05-21T02:03:03.6047796Z         	Error:      	Received unexpected error:
2026-05-21T02:03:03.6050889Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T02:03:03.6052484Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-05-21T02:03:03.6055389Z         	Messages:   	Project creation failed: test-acc-tf-p-9102508446466126317, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T02:03:03.6057211Z --- FAIL: TestAccStreamProcessorAPI_basic (77.54s)
```

- 2026-05-22 PASS 34 seconds
- 2026-05-23

### Error 2026-05-23T02:03:15+00:00
```
2026-05-23T02:03:15.4062472Z === RUN   TestAccStreamProcessorAPI_basic
2026-05-23T02:03:15.4063724Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-5659394062825186480
2026-05-23T02:03:15.4064595Z     resource_test.go:40: 
2026-05-23T02:03:15.4066303Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T02:03:15.4069687Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T02:03:15.4073367Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T02:03:15.4077370Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-05-23T02:03:15.4078974Z         	Error:      	Received unexpected error:
2026-05-23T02:03:15.4082531Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T02:03:15.4084672Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-05-23T02:03:15.4087899Z         	Messages:   	Project creation failed: test-acc-tf-p-5659394062825186480, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T02:03:15.4090053Z --- FAIL: TestAccStreamProcessorAPI_basic (76.40s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 29 seconds
- 2026-05-26

### Error 2026-05-26T03:10:45+00:00
```
2026-05-26T03:10:45.0046697Z === RUN   TestAccStreamProcessorAPI_basic
2026-05-26T03:10:45.0047255Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-4939127942082751876
2026-05-26T03:10:45.0047725Z     resource_test.go:40: 
2026-05-26T03:10:45.0048600Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T03:10:45.0050335Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T03:10:45.0053130Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T03:10:45.0055048Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-05-26T03:10:45.0055866Z         	Error:      	Received unexpected error:
2026-05-26T03:10:45.0057770Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:10:45.0058762Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-05-26T03:10:45.0060460Z         	Messages:   	Project creation failed: test-acc-tf-p-4939127942082751876, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:10:45.0061892Z --- FAIL: TestAccStreamProcessorAPI_basic (84.33s)
```

- 2026-05-27 PASS 30 seconds
- 2026-05-28

### Error 2026-05-28T02:20:31+00:00
```
2026-05-28T02:20:31.2636534Z === RUN   TestAccStreamProcessorAPI_basic
2026-05-28T02:20:31.2637109Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-8240367808958286484
2026-05-28T02:20:31.2637577Z     resource_test.go:40: 
2026-05-28T02:20:31.2638554Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:20:31.2640325Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:20:31.2642387Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:20:31.2644305Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamprocessorapi/resource_test.go:40
2026-05-28T02:20:31.2645115Z         	Error:      	Received unexpected error:
2026-05-28T02:20:31.2647893Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:20:31.2649397Z         	Test:       	TestAccStreamProcessorAPI_basic
2026-05-28T02:20:31.2651779Z         	Messages:   	Project creation failed: test-acc-tf-p-8240367808958286484, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:20:31.2653228Z --- FAIL: TestAccStreamProcessorAPI_basic (1.00s)
```

- 2026-05-29 PASS 29 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 32 seconds
- 2026-06-02 PASS a minute
- 2026-06-03 PASS 29 seconds
- 2026-06-04 PASS 33 seconds
- 2026-06-05 PASS 32 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 29 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 33 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 34 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 29 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
