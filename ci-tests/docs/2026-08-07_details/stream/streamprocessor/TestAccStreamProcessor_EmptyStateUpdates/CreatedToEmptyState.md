# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.00s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 1.04s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6359910Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-07-09T01:15:21.6360737Z     resource_test.go:309: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-07-09T01:15:21.6361578Z     resource_test.go:310: Creating execution project (1): test-acc-tf-p-7295063920648136367
2026-07-09T01:15:21.6362066Z     resource_test.go:310: 
2026-07-09T01:15:21.6362889Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6364590Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6366236Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6367790Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6369417Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-09T01:15:21.6371059Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:310
2026-07-09T01:15:21.6371788Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6374317Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6375767Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-07-09T01:15:21.6377741Z         	Messages:   	Project creation failed: test-acc-tf-p-7295063920648136367, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6413611Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (1.02s)
```

- 2026-07-10 PASS 4 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7681841Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-07-11T01:30:51.7682819Z     resource_test.go:309: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-07-11T01:30:51.7683764Z     resource_test.go:310: Creating execution project (1): test-acc-tf-p-8098420942439717824
2026-07-11T01:30:51.7684316Z     resource_test.go:310: 
2026-07-11T01:30:51.7685270Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7687081Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7689111Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7690941Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7692851Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-11T01:30:51.7694937Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:310
2026-07-11T01:30:51.7695762Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7698728Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T01:30:51.7700293Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-07-11T01:30:51.7703115Z         	Messages:   	Project creation failed: test-acc-tf-p-8098420942439717824, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T01:30:51.7750839Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.26s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 4 seconds
- 2026-07-14 PASS 5 seconds
- 2026-07-15 PASS 4 seconds
- 2026-07-16 PASS 5 seconds
- 2026-07-17 PASS 4 seconds
- 2026-07-18 PASS 6 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3711682Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-07-21T00:59:13.3712925Z     resource_test.go:309: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-07-21T00:59:13.3713907Z     resource_test.go:310: Creating execution project (1): test-acc-tf-p-6567493637843055120
2026-07-21T00:59:13.3714430Z     resource_test.go:310: 
2026-07-21T00:59:13.3715379Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3717238Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3719105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3720970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3723055Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-21T00:59:13.3725051Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:310
2026-07-21T00:59:13.3725889Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3728801Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3730391Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-07-21T00:59:13.3733088Z         	Messages:   	Project creation failed: test-acc-tf-p-6567493637843055120, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3781170Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.41s)
```

- 2026-07-22 PASS 4 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6229343Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-07-23T03:35:04.6230299Z     resource_test.go:309: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-07-23T03:35:04.6231213Z     resource_test.go:310: Creating execution project (1): test-acc-tf-p-527083961757056614
2026-07-23T03:35:04.6231732Z     resource_test.go:310: 
2026-07-23T03:35:04.6232661Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6234445Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6236411Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6238443Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-23T03:35:04.6240351Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-23T03:35:04.6242258Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:310
2026-07-23T03:35:04.6243071Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6245879Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6247502Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-07-23T03:35:04.6250041Z         	Messages:   	Project creation failed: test-acc-tf-p-527083961757056614, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6296392Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (1.37s)
```

- 2026-07-24 PASS 4 seconds
- 2026-07-25 PASS 3 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 4 seconds
- 2026-07-28 PASS 4 seconds
- 2026-07-29 PASS 3 seconds
- 2026-07-30 PASS 3 seconds
- 2026-07-31 PASS 3 seconds
- 2026-08-01 PASS 4 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0361724Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-08-03T01:33:30.0362675Z     resource_test.go:309: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-08-03T01:33:30.0374576Z   
2026-08-03T01:33:30.0374994Z     resource_test.go:310: Step 1/2 error: Error running apply: exit status 1
2026-08-03T01:33:30.0375545Z         
2026-08-03T01:33:30.0375852Z         Error: error creating resource
2026-08-03T01:33:30.0376151Z         
2026-08-03T01:33:30.0376551Z           with mongodbatlas_stream_processor.processor,
2026-08-03T01:33:30.0377312Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-08-03T01:33:30.0378031Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-08-03T01:33:30.0378402Z         
2026-08-03T01:33:30.0378632Z         Post
2026-08-03T01:33:30.0379446Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/streams/test-acc-tf-s-3083674593888463384/processor":
2026-08-03T01:33:30.0380180Z         dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0419337Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (5.28s)
```

  - PASS 4 seconds
  - PASS 3 seconds
- 2026-08-04 PASS 4 seconds
- 2026-08-05 PASS 5 seconds
- 2026-08-06 PASS 4 seconds
- 2026-08-07 PASS 5 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 4 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 4 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 5 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 5 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 seconds
  - PASS 4 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
