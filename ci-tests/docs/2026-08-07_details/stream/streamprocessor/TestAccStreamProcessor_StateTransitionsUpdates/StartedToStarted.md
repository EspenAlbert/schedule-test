# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.00s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6311192Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-07-09T01:15:21.6311821Z     resource_test.go:275: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-07-09T01:15:21.6312450Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-5038733082659333447
2026-07-09T01:15:21.6312853Z     resource_test.go:276: 
2026-07-09T01:15:21.6313561Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6314911Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6316367Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6317717Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6319135Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-09T01:15:21.6328298Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-09T01:15:21.6328973Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6331177Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6332390Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-07-09T01:15:21.6334272Z         	Messages:   	Project creation failed: test-acc-tf-p-5038733082659333447, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6358150Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (0.62s)
```

- 2026-07-10 PASS 7 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7625363Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-07-11T01:30:51.7626201Z     resource_test.go:275: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-07-11T01:30:51.7627036Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-4864135121996526356
2026-07-11T01:30:51.7627550Z     resource_test.go:276: 
2026-07-11T01:30:51.7628613Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7630433Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7632255Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7634083Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7636001Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-11T01:30:51.7637951Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-11T01:30:51.7638897Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7640842Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7642058Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-07-11T01:30:51.7643950Z         	Messages:   	Project creation failed: test-acc-tf-p-4864135121996526356, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7679986Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (93.00s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 7 seconds
- 2026-07-14 PASS 9 seconds
- 2026-07-15 PASS 6 seconds
- 2026-07-16 PASS 11 seconds
- 2026-07-17 PASS 7 seconds
- 2026-07-18 PASS 10 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3563823Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-07-21T00:59:13.3564659Z     resource_test.go:275: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-07-21T00:59:13.3565496Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-7736187405795158048
2026-07-21T00:59:13.3566012Z     resource_test.go:276: 
2026-07-21T00:59:13.3566956Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3568814Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3570673Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3572659Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3574612Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-21T00:59:13.3576605Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-21T00:59:13.3577454Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3579446Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3580673Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-07-21T00:59:13.3582698Z         	Messages:   	Project creation failed: test-acc-tf-p-7736187405795158048, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3706912Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (61.64s)
```

- 2026-07-22 PASS 6 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6135730Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-07-23T03:35:04.6136576Z     resource_test.go:275: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-07-23T03:35:04.6137586Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-4515401491316828144
2026-07-23T03:35:04.6138141Z     resource_test.go:276: 
2026-07-23T03:35:04.6139088Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6140876Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6142819Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6144663Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-23T03:35:04.6146534Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-23T03:35:04.6148688Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-23T03:35:04.6149546Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6152347Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6153893Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-07-23T03:35:04.6156273Z         	Messages:   	Project creation failed: test-acc-tf-p-4515401491316828144, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6226161Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (0.34s)
```

- 2026-07-24 PASS 6 seconds
- 2026-07-25 PASS 5 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 7 seconds
- 2026-07-29 PASS 5 seconds
- 2026-07-30 PASS 5 seconds
- 2026-07-31 PASS 5 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0301053Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-08-03T01:33:30.0301870Z     resource_test.go:275: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-08-03T01:33:30.0313491Z   
2026-08-03T01:33:30.0313908Z     resource_test.go:276: Step 1/2 error: Error running apply: exit status 1
2026-08-03T01:33:30.0314439Z         
2026-08-03T01:33:30.0314772Z         Error: error creating resource
2026-08-03T01:33:30.0315069Z         
2026-08-03T01:33:30.0315463Z           with mongodbatlas_stream_processor.processor,
2026-08-03T01:33:30.0316224Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-08-03T01:33:30.0316935Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-08-03T01:33:30.0317316Z         
2026-08-03T01:33:30.0317548Z         Post
2026-08-03T01:33:30.0318360Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/streams/test-acc-tf-s-3083674593888463384/processor":
2026-08-03T01:33:30.0319093Z         dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0359366Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (5.28s)
```

  - PASS 7 seconds
  - PASS 6 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 8 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 8 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 7 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 7 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 11 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 8 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 6 seconds
  - PASS 7 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 6 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
