# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.08s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6294528Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-07-09T01:15:21.6295094Z     resource_test.go:275: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-07-09T01:15:21.6295777Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-6303030052419726413
2026-07-09T01:15:21.6296184Z     resource_test.go:276: 
2026-07-09T01:15:21.6296895Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6298248Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6299767Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6301124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6302530Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-09T01:15:21.6303992Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-09T01:15:21.6304620Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6306957Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6308150Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-07-09T01:15:21.6309980Z         	Messages:   	Project creation failed: test-acc-tf-p-6303030052419726413, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6357548Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (0.89s)
```

- 2026-07-10 PASS 5 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7605157Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-07-11T01:30:51.7605910Z     resource_test.go:275: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-07-11T01:30:51.7606681Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-3706138376233017813
2026-07-11T01:30:51.7607200Z     resource_test.go:276: 
2026-07-11T01:30:51.7608134Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7610158Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7611985Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7613802Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7615883Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-11T01:30:51.7617843Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-11T01:30:51.7618798Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7620741Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7621985Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-07-11T01:30:51.7624036Z         	Messages:   	Project creation failed: test-acc-tf-p-3706138376233017813, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7679299Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (94.78s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 6 seconds
- 2026-07-14 PASS 8 seconds
- 2026-07-15 PASS 5 seconds
- 2026-07-16 PASS 8 seconds
- 2026-07-17 PASS 6 seconds
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3683689Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-07-21T00:59:13.3684439Z     resource_test.go:275: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-07-21T00:59:13.3685405Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-3019671077534898236
2026-07-21T00:59:13.3685931Z     resource_test.go:276: 
2026-07-21T00:59:13.3686874Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3688731Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3690591Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3692574Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3694528Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-21T00:59:13.3696516Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-21T00:59:13.3697351Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3700247Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3701831Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-07-21T00:59:13.3704456Z         	Messages:   	Project creation failed: test-acc-tf-p-3019671077534898236, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3710498Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (0.91s)
```

- 2026-07-22 PASS 5 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6113931Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-07-23T03:35:04.6114678Z     resource_test.go:275: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-07-23T03:35:04.6115445Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-2901104507509149316
2026-07-23T03:35:04.6115963Z     resource_test.go:276: 
2026-07-23T03:35:04.6116888Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6118784Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6120586Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6122406Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-23T03:35:04.6124290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-23T03:35:04.6126182Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-23T03:35:04.6126991Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6129905Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6131599Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-07-23T03:35:04.6134023Z         	Messages:   	Project creation failed: test-acc-tf-p-2901104507509149316, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6225475Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (0.60s)
```

- 2026-07-24 PASS 5 seconds
- 2026-07-25 PASS 4 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 6 seconds
- 2026-07-28 PASS 5 seconds
- 2026-07-29 PASS 5 seconds
- 2026-07-30 PASS 4 seconds
- 2026-07-31 PASS 5 seconds
- 2026-08-01 PASS 5 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0282591Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-08-03T01:33:30.0283320Z     resource_test.go:275: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-08-03T01:33:30.0294764Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-08-03T01:33:30.0295402Z     resource_test.go:276: Step 1/2 error: Error running apply: exit status 1
2026-08-03T01:33:30.0295812Z         
2026-08-03T01:33:30.0296120Z         Error: error creating resource
2026-08-03T01:33:30.0296428Z         
2026-08-03T01:33:30.0296822Z           with mongodbatlas_stream_processor.processor,
2026-08-03T01:33:30.0297584Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-08-03T01:33:30.0298436Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-08-03T01:33:30.0298810Z         
2026-08-03T01:33:30.0299044Z         Post
2026-08-03T01:33:30.0299869Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/streams/test-acc-tf-s-3083674593888463384/processor":
2026-08-03T01:33:30.0300594Z         dial tcp 3.228.247.77:443: i/o timeout
2026-08-03T01:33:30.0358670Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (5.28s)
```

  - PASS 9 seconds
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
- 2026-07-19 PASS 8 seconds
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
