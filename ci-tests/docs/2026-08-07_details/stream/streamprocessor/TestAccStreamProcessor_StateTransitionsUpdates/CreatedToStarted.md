# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 96.02s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.05s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.09s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6279734Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-07-09T01:15:21.6280310Z     resource_test.go:275: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-07-09T01:15:21.6280899Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-8872291332656039146
2026-07-09T01:15:21.6281304Z     resource_test.go:276: 
2026-07-09T01:15:21.6282021Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6283388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6284758Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6286220Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6287699Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-09T01:15:21.6289165Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-09T01:15:21.6289798Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6291295Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6292196Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-07-09T01:15:21.6293591Z         	Messages:   	Project creation failed: test-acc-tf-p-8872291332656039146, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6356890Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (96.24s)
```

- 2026-07-10 PASS 5 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7584832Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-07-11T01:30:51.7585580Z     resource_test.go:275: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-07-11T01:30:51.7586355Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-1649731448085023720
2026-07-11T01:30:51.7587010Z     resource_test.go:276: 
2026-07-11T01:30:51.7587953Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7590074Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7591900Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7593715Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7595624Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-11T01:30:51.7597592Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-11T01:30:51.7598581Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7600768Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7601996Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-07-11T01:30:51.7603867Z         	Messages:   	Project creation failed: test-acc-tf-p-1649731448085023720, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7678599Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (61.54s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 5 seconds
- 2026-07-14 PASS 6 seconds
- 2026-07-15 PASS 6 seconds
- 2026-07-16 PASS 7 seconds
- 2026-07-17 PASS 6 seconds
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0596849Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-07-18T01:45:13.0598193Z     resource_test.go:275: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-07-18T01:45:13.0599854Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-967435132351812089
2026-07-18T01:45:13.0600801Z     resource_test.go:276: 
2026-07-18T01:45:13.0602539Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0606264Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0609690Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0613185Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-18T01:45:13.0617093Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-18T01:45:13.0620827Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-18T01:45:13.0622310Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0626221Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0628483Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-07-18T01:45:13.0632161Z         	Messages:   	Project creation failed: test-acc-tf-p-967435132351812089, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0650851Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (89.91s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3660638Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-07-21T00:59:13.3661402Z     resource_test.go:275: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-07-21T00:59:13.3662174Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-8694632935538235734
2026-07-21T00:59:13.3662823Z     resource_test.go:276: 
2026-07-21T00:59:13.3663774Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3665799Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3667818Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3669686Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3671812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-21T00:59:13.3673933Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-21T00:59:13.3674767Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3677653Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3679384Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-07-21T00:59:13.3681898Z         	Messages:   	Project creation failed: test-acc-tf-p-8694632935538235734, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3709795Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (0.65s)
```

- 2026-07-22 PASS 5 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6091939Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-07-23T03:35:04.6092688Z     resource_test.go:275: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-07-23T03:35:04.6093446Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-2012424685317804971
2026-07-23T03:35:04.6094104Z     resource_test.go:276: 
2026-07-23T03:35:04.6095025Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6096816Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6098856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6100665Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-23T03:35:04.6102528Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-23T03:35:04.6104429Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-23T03:35:04.6105274Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6108365Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6109918Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-07-23T03:35:04.6112313Z         	Messages:   	Project creation failed: test-acc-tf-p-2012424685317804971, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6224777Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (0.18s)
```

- 2026-07-24 PASS 5 seconds
- 2026-07-25 PASS 4 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 5 seconds
- 2026-07-28 PASS 5 seconds
- 2026-07-29 PASS 3 seconds
- 2026-07-30 PASS 3 seconds
- 2026-07-31 PASS 3 seconds
- 2026-08-01 PASS 5 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0264254Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-08-03T01:33:30.0264997Z     resource_test.go:275: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-08-03T01:33:30.0276529Z   
2026-08-03T01:33:30.0276946Z     resource_test.go:276: Step 1/2 error: Error running apply: exit status 1
2026-08-03T01:33:30.0277360Z         
2026-08-03T01:33:30.0277669Z         Error: error creating resource
2026-08-03T01:33:30.0277970Z         
2026-08-03T01:33:30.0278375Z           with mongodbatlas_stream_processor.processor,
2026-08-03T01:33:30.0279141Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-08-03T01:33:30.0279851Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-08-03T01:33:30.0280222Z         
2026-08-03T01:33:30.0280455Z         Post
2026-08-03T01:33:30.0281390Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/streams/test-acc-tf-s-3083674593888463384/processor":
2026-08-03T01:33:30.0282131Z         dial tcp 3.228.247.77:443: i/o timeout
2026-08-03T01:33:30.0357845Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (5.29s)
```

  - PASS 5 seconds
  - PASS 5 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 6 seconds
- 2026-08-06 PASS 5 seconds
- 2026-08-07 PASS 6 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 6 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 6 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 6 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 6 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 5 seconds
  - PASS 5 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 5 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
