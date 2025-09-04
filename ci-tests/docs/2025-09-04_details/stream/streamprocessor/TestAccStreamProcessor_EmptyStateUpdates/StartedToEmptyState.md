# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 01:18](#error-2025-08-17t0118020000) | STREAM_PROCESSOR_TIMEOUT /api/atlas/v2/groups/68a122d9aafa9a76ca8bc1e2/streams/test-acc-tf-s-2685455548006222732/processor/processor-started-to- | qa |  | 37.06s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 10 seconds
- 2025-08-07
  - PASS 45 seconds
  - PASS 12 seconds
- 2025-08-08 PASS 10 seconds
- 2025-08-09 PASS 9 seconds
- 2025-08-10 PASS 22 seconds
- 2025-08-11 PASS 9 seconds
- 2025-08-12
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-08-13 PASS 10 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15 PASS 11 seconds
- 2025-08-16 PASS 9 seconds
- 2025-08-17

### Error 2025-08-17T01:18:02+00:00
```
2025-08-17T01:18:02.6557314Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-08-17T01:18:02.6558140Z     resource_test.go:217: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-08-17T01:18:02.6562304Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-08-17T01:18:02.6576575Z   
2025-08-17T01:18:02.6576943Z     resource_test.go:218: Step 2/2 error: Error running apply: exit status 1
2025-08-17T01:18:02.6577292Z         
2025-08-17T01:18:02.6577594Z         Error: Error modifying stream processor
2025-08-17T01:18:02.6577874Z         
2025-08-17T01:18:02.6578220Z           with mongodbatlas_stream_processor.processor,
2025-08-17T01:18:02.6578980Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-08-17T01:18:02.6579610Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-08-17T01:18:02.6580053Z         
2025-08-17T01:18:02.6580926Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122d9aafa9a76ca8bc1e2/streams/test-acc-tf-s-2685455548006222732/processor/processor-started-to-
2025-08-17T01:18:02.6581832Z         PATCH: HTTP 504 Gateway Timeout (Error code: "STREAM_PROCESSOR_TIMEOUT")
2025-08-17T01:18:02.6582447Z         Detail: Streams Processor with this name (test-acc-tf-s-2685455548006222732)
2025-08-17T01:18:02.6583006Z         timed out while processing. Reason: Gateway Timeout. Params:
2025-08-17T01:18:02.6583607Z         [test-acc-tf-s-2685455548006222732 processor-started-to-], BadRequestDetail: 
2025-08-17T01:18:02.6586121Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (37.63s)
```

- 2025-08-18
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-08-19 PASS 11 seconds
- 2025-08-20
  - PASS 11 seconds
  - PASS 11 seconds
- 2025-08-21 PASS 11 seconds
- 2025-08-22 PASS 11 seconds
- 2025-08-23 PASS 11 seconds
- 2025-08-24 PASS 33 seconds
- 2025-08-25 PASS 10 seconds
- 2025-08-26 PASS 10 seconds
- 2025-08-27 PASS 11 seconds
- 2025-08-28 PASS 11 seconds
- 2025-08-29
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-08-30 PASS 11 seconds
- 2025-08-31 PASS 18 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.9576382Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-01T00:30:38.9578103Z     resource_test.go:217: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-09-01T00:30:38.9579586Z     resource_test.go:218: Creating execution project: test-acc-tf-p-6684840510324851187
2025-09-01T00:30:38.9580384Z     resource_test.go:218: 
2025-09-01T00:30:38.9581981Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.9585176Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.9588587Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.9591908Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:362
2025-09-01T00:30:38.9595304Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:218
2025-09-01T00:30:38.9597532Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:38.9598358Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.9603126Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9605582Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-01T00:30:38.9609987Z         	Messages:   	Project creation failed: test-acc-tf-p-6684840510324851187, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9650500Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.18s)
```

  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 12 seconds
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 11 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 11 seconds