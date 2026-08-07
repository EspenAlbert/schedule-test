# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.05s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6396486Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-07-09T01:15:21.6397223Z     resource_test.go:309: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-07-09T01:15:21.6397937Z     resource_test.go:310: Creating execution project (1): test-acc-tf-p-3867696183193762181
2026-07-09T01:15:21.6398341Z     resource_test.go:310: 
2026-07-09T01:15:21.6399060Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6400524Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6401879Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6403228Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6404646Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-09T01:15:21.6406204Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:310
2026-07-09T01:15:21.6406850Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6409000Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6410157Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-07-09T01:15:21.6411972Z         	Messages:   	Project creation failed: test-acc-tf-p-3867696183193762181, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6414644Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (1.46s)
```

- 2026-07-10 PASS 7 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7727512Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-07-11T01:30:51.7728610Z     resource_test.go:309: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-07-11T01:30:51.7729545Z     resource_test.go:310: Creating execution project (1): test-acc-tf-p-7756409482536573662
2026-07-11T01:30:51.7730230Z     resource_test.go:310: 
2026-07-11T01:30:51.7731173Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7732996Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7734812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7736626Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7738683Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-11T01:30:51.7740757Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:310
2026-07-11T01:30:51.7741594Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7744436Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T01:30:51.7745994Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-07-11T01:30:51.7748615Z         	Messages:   	Project creation failed: test-acc-tf-p-7756409482536573662, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T01:30:51.7752197Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.34s)
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
2026-07-21T00:59:13.3757609Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-07-21T00:59:13.3758574Z     resource_test.go:309: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-07-21T00:59:13.3759510Z     resource_test.go:310: Creating execution project (1): test-acc-tf-p-4713489835452480980
2026-07-21T00:59:13.3760022Z     resource_test.go:310: 
2026-07-21T00:59:13.3760958Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3762921Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3764972Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3766849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3768802Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-21T00:59:13.3770803Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:310
2026-07-21T00:59:13.3771645Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3774699Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3776415Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-07-21T00:59:13.3778921Z         	Messages:   	Project creation failed: test-acc-tf-p-4713489835452480980, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3782663Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.52s)
```

- 2026-07-22 PASS 6 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6273748Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-07-23T03:35:04.6274703Z     resource_test.go:309: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-07-23T03:35:04.6275619Z     resource_test.go:310: Creating execution project (1): test-acc-tf-p-5756916336023900056
2026-07-23T03:35:04.6276136Z     resource_test.go:310: 
2026-07-23T03:35:04.6277066Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6279083Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6280892Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6282686Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-23T03:35:04.6284688Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-23T03:35:04.6286611Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:310
2026-07-23T03:35:04.6287536Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6290365Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6291889Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-07-23T03:35:04.6294283Z         	Messages:   	Project creation failed: test-acc-tf-p-5756916336023900056, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6297922Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.48s)
```

- 2026-07-24 PASS 7 seconds
- 2026-07-25 PASS 6 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 7 seconds
- 2026-07-29 PASS 6 seconds
- 2026-07-30 PASS 5 seconds
- 2026-07-31 PASS 6 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0399357Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-08-03T01:33:30.0400288Z     resource_test.go:309: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-08-03T01:33:30.0412528Z   
2026-08-03T01:33:30.0412956Z     resource_test.go:310: Step 1/3 error: Error running apply: exit status 1
2026-08-03T01:33:30.0413374Z         
2026-08-03T01:33:30.0413682Z         Error: error creating resource
2026-08-03T01:33:30.0413985Z         
2026-08-03T01:33:30.0414599Z           with mongodbatlas_stream_processor.processor,
2026-08-03T01:33:30.0415394Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-08-03T01:33:30.0416124Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-08-03T01:33:30.0416506Z         
2026-08-03T01:33:30.0416749Z         Post
2026-08-03T01:33:30.0417569Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/streams/test-acc-tf-s-3083674593888463384/processor":
2026-08-03T01:33:30.0418309Z         dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0420690Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (5.28s)
```

  - PASS 6 seconds
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
- 2026-07-12 PASS 7 seconds
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
