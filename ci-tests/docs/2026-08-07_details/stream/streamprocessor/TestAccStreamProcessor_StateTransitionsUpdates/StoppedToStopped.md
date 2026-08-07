# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.01s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.10s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6249588Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-07-09T01:15:21.6250223Z     resource_test.go:275: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-07-09T01:15:21.6250849Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-7795885160019357254
2026-07-09T01:15:21.6251248Z     resource_test.go:276: 
2026-07-09T01:15:21.6252055Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6253414Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6254769Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6256242Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6257678Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-09T01:15:21.6259112Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-09T01:15:21.6259753Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6261221Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6262146Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-07-09T01:15:21.6263535Z         	Messages:   	Project creation failed: test-acc-tf-p-7795885160019357254, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6355706Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (66.13s)
```

- 2026-07-10 PASS 7 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7544171Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-07-11T01:30:51.7545000Z     resource_test.go:275: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-07-11T01:30:51.7545838Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-3493431852535973388
2026-07-11T01:30:51.7546356Z     resource_test.go:276: 
2026-07-11T01:30:51.7547301Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7549424Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7551406Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7553251Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7555207Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-11T01:30:51.7557156Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-11T01:30:51.7557981Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7560158Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7561394Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-07-11T01:30:51.7563278Z         	Messages:   	Project creation failed: test-acc-tf-p-3493431852535973388, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7677002Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (88.99s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 7 seconds
- 2026-07-14 PASS 9 seconds
- 2026-07-15 PASS 7 seconds
- 2026-07-16 PASS 10 seconds
- 2026-07-17 PASS 8 seconds
- 2026-07-18 PASS 10 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3608518Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-07-21T00:59:13.3609587Z     resource_test.go:275: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-07-21T00:59:13.3610600Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-4247124162011851095
2026-07-21T00:59:13.3611132Z     resource_test.go:276: 
2026-07-21T00:59:13.3612237Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3614583Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3616739Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3618903Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3621159Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-21T00:59:13.3623582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-21T00:59:13.3624449Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3627938Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3629821Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-07-21T00:59:13.3632837Z         	Messages:   	Project creation failed: test-acc-tf-p-4247124162011851095, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3708380Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (0.69s)
```

- 2026-07-22 PASS 6 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6180023Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-07-23T03:35:04.6180854Z     resource_test.go:275: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-07-23T03:35:04.6181685Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-3839931323383099689
2026-07-23T03:35:04.6182205Z     resource_test.go:276: 
2026-07-23T03:35:04.6183136Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6184927Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6186715Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6188846Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-23T03:35:04.6190748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-23T03:35:04.6192644Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-23T03:35:04.6193460Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6196263Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6197967Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-07-23T03:35:04.6200405Z         	Messages:   	Project creation failed: test-acc-tf-p-3839931323383099689, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6227643Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (0.38s)
```

- 2026-07-24 PASS 7 seconds
- 2026-07-25 PASS 6 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 7 seconds
- 2026-07-29 PASS 6 seconds
- 2026-07-30 PASS 6 seconds
- 2026-07-31 PASS 6 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0338168Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-08-03T01:33:30.0338989Z     resource_test.go:275: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-08-03T01:33:30.0350258Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-08-03T01:33:30.0350895Z     resource_test.go:276: Step 1/3 error: Error running apply: exit status 1
2026-08-03T01:33:30.0351299Z         
2026-08-03T01:33:30.0351604Z         Error: error creating resource
2026-08-03T01:33:30.0351903Z         
2026-08-03T01:33:30.0352301Z           with mongodbatlas_stream_processor.processor,
2026-08-03T01:33:30.0353062Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-08-03T01:33:30.0353780Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-08-03T01:33:30.0354271Z         
2026-08-03T01:33:30.0354513Z         Post
2026-08-03T01:33:30.0355331Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/streams/test-acc-tf-s-3083674593888463384/processor":
2026-08-03T01:33:30.0356066Z         dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0360748Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (5.28s)
```

  - PASS 9 seconds
  - PASS 6 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 9 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 9 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 9 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 7 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 10 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 9 seconds
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
