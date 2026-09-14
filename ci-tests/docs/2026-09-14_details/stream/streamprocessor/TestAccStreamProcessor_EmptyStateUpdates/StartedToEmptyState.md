# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState Test Details
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
- 2026-09-08 PASS 6 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.9128790Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-09-09T02:19:32.9129738Z     resource_test.go:585: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-09-09T02:19:32.9145279Z   
2026-09-09T02:19:32.9145722Z     resource_test.go:586: Step 1/2 error: Error running apply: exit status 1
2026-09-09T02:19:32.9146291Z         
2026-09-09T02:19:32.9146626Z         Error: error creating resource
2026-09-09T02:19:32.9147099Z         
2026-09-09T02:19:32.9147526Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.9148297Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.9149008Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.9149394Z         
2026-09-09T02:19:32.9150187Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.9151068Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.9151739Z         Detail: Streams Processor with this name (processor-started-to-) had a
2026-09-09T02:19:32.9152438Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.9153111Z         Params: [processor-started-to- commandName does not exist in context],
2026-09-09T02:19:32.9153580Z         BadRequestDetail: 
2026-09-09T02:19:32.9181169Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.47s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6847031Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-09-10T02:13:36.6847965Z     resource_test.go:585: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-09-10T02:13:36.6859915Z    test_terraform_path=/home/runner/work/_temp/8cc92e9c-1de6-438b-a445-0c9c104f9a5a/terraform test_working_directory=/tmp/plugintest343143991 test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-09-10T02:13:36.6860771Z     resource_test.go:586: Step 1/2 error: Error running apply: exit status 1
2026-09-10T02:13:36.6861107Z         
2026-09-10T02:13:36.6861381Z         Error: error creating resource
2026-09-10T02:13:36.6861632Z         
2026-09-10T02:13:36.6861958Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6862557Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6863124Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6863433Z         
2026-09-10T02:13:36.6864056Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6864742Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6865284Z         Detail: Streams Processor with this name (processor-started-to-) had a
2026-09-10T02:13:36.6865828Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.6866362Z         Params: [processor-started-to- commandName does not exist in context],
2026-09-10T02:13:36.6866799Z         BadRequestDetail: 
2026-09-10T02:13:36.6901489Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.38s)
```

- 2026-09-11
  - PASS 7 seconds
  - PASS 6 seconds
- 2026-09-12 PASS 7 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 6 seconds

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 7 seconds
- 2026-09-14: MISSING
