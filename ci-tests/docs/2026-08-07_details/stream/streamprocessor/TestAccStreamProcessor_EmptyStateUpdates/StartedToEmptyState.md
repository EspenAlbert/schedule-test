# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.04s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6379058Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-07-09T01:15:21.6379993Z     resource_test.go:309: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-07-09T01:15:21.6381018Z     resource_test.go:310: Creating execution project (1): test-acc-tf-p-6739181297021389946
2026-07-09T01:15:21.6381438Z     resource_test.go:310: 
2026-07-09T01:15:21.6382160Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6383512Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6384867Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6386328Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6387766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-09T01:15:21.6389203Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:310
2026-07-09T01:15:21.6389843Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6391977Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6393127Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-07-09T01:15:21.6395122Z         	Messages:   	Project creation failed: test-acc-tf-p-6739181297021389946, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6414132Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (1.42s)
```

- 2026-07-10 PASS 7 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7704831Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-07-11T01:30:51.7705811Z     resource_test.go:309: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-07-11T01:30:51.7706738Z     resource_test.go:310: Creating execution project (1): test-acc-tf-p-976523262890979187
2026-07-11T01:30:51.7707254Z     resource_test.go:310: 
2026-07-11T01:30:51.7708187Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7710303Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7712139Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7713970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7715894Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-11T01:30:51.7717836Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:310
2026-07-11T01:30:51.7718963Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7721821Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T01:30:51.7723400Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-07-11T01:30:51.7725875Z         	Messages:   	Project creation failed: test-acc-tf-p-976523262890979187, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T01:30:51.7751525Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.30s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 7 seconds
- 2026-07-14 PASS 9 seconds
- 2026-07-15 PASS 6 seconds
- 2026-07-16 PASS 10 seconds
- 2026-07-17 PASS 7 seconds
- 2026-07-18 PASS 10 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3734754Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-07-21T00:59:13.3735713Z     resource_test.go:309: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-07-21T00:59:13.3736650Z     resource_test.go:310: Creating execution project (1): test-acc-tf-p-1120575264261584095
2026-07-21T00:59:13.3737291Z     resource_test.go:310: 
2026-07-21T00:59:13.3738243Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3740121Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3741986Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3743973Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3745923Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-21T00:59:13.3747926Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:310
2026-07-21T00:59:13.3748770Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3751768Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3753452Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-07-21T00:59:13.3755957Z         	Messages:   	Project creation failed: test-acc-tf-p-1120575264261584095, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3781856Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.44s)
```

- 2026-07-22 PASS 6 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6251598Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-07-23T03:35:04.6252547Z     resource_test.go:309: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-07-23T03:35:04.6253468Z     resource_test.go:310: Creating execution project (1): test-acc-tf-p-6882173514790344186
2026-07-23T03:35:04.6254000Z     resource_test.go:310: 
2026-07-23T03:35:04.6254927Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6256711Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6258741Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6260555Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-23T03:35:04.6262429Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-23T03:35:04.6264334Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:310
2026-07-23T03:35:04.6265141Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6268019Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6269508Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-07-23T03:35:04.6271904Z         	Messages:   	Project creation failed: test-acc-tf-p-6882173514790344186, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6297071Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.34s)
```

- 2026-07-24 PASS 7 seconds
- 2026-07-25 PASS 6 seconds
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
2026-08-03T01:33:30.0380614Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-08-03T01:33:30.0381546Z     resource_test.go:309: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-08-03T01:33:30.0392763Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_terraform_path=/home/runner/work/_temp/15c4ca8d-89c8-44b4-a2b6-45595e5990a6/terraform
2026-08-03T01:33:30.0393706Z     resource_test.go:310: Step 1/2 error: Error running apply: exit status 1
2026-08-03T01:33:30.0394237Z         
2026-08-03T01:33:30.0394564Z         Error: error creating resource
2026-08-03T01:33:30.0394867Z         
2026-08-03T01:33:30.0395264Z           with mongodbatlas_stream_processor.processor,
2026-08-03T01:33:30.0396030Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-08-03T01:33:30.0396746Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-08-03T01:33:30.0397122Z         
2026-08-03T01:33:30.0397364Z         Post
2026-08-03T01:33:30.0398186Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/streams/test-acc-tf-s-3083674593888463384/processor":
2026-08-03T01:33:30.0398921Z         dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0420015Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (5.29s)
```

  - PASS 6 seconds
  - PASS 7 seconds
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
- 2026-07-19 PASS 10 seconds
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
  - PASS 5 seconds
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
