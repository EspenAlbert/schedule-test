# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 2)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor | dev | 0.05s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor | dev | 0.04s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08 PASS 3 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.9102982Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-09-09T02:19:32.9103947Z     resource_test.go:585: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-09-09T02:19:32.9119911Z   
2026-09-09T02:19:32.9120361Z     resource_test.go:586: Step 1/2 error: Error running apply: exit status 1
2026-09-09T02:19:32.9120934Z         
2026-09-09T02:19:32.9121272Z         Error: error creating resource
2026-09-09T02:19:32.9121589Z         
2026-09-09T02:19:32.9122016Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.9122793Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.9123524Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.9123916Z         
2026-09-09T02:19:32.9124729Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.9125613Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.9126508Z         Detail: Streams Processor with this name (processor-created-to-) had a
2026-09-09T02:19:32.9127215Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.9127909Z         Params: [processor-created-to- commandName does not exist in context],
2026-09-09T02:19:32.9128377Z         BadRequestDetail: 
2026-09-09T02:19:32.9180505Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.48s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6822594Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-09-10T02:13:36.6823459Z     resource_test.go:585: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-09-10T02:13:36.6835662Z   
2026-09-10T02:13:36.6840461Z     resource_test.go:586: Step 1/2 error: Error running apply: exit status 1
2026-09-10T02:13:36.6840860Z         
2026-09-10T02:13:36.6841145Z         Error: error creating resource
2026-09-10T02:13:36.6841412Z         
2026-09-10T02:13:36.6841753Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6842370Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6842944Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6843252Z         
2026-09-10T02:13:36.6843955Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6844659Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6845197Z         Detail: Streams Processor with this name (processor-created-to-) had a
2026-09-10T02:13:36.6845752Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.6846291Z         Params: [processor-created-to- commandName does not exist in context],
2026-09-10T02:13:36.6846678Z         BadRequestDetail: 
2026-09-10T02:13:36.6900616Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.38s)
```

- 2026-09-11
  - PASS 4 seconds
  - PASS 4 seconds
- 2026-09-12 PASS 4 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 3 seconds

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 4 seconds
- 2026-09-14: MISSING
