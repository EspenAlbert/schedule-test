# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped Test Details
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
- 2026-09-08 PASS 2 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.9182920Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2026-09-09T02:19:32.9183714Z     resource_test.go:622: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2026-09-09T02:19:32.9200812Z   
2026-09-09T02:19:32.9201274Z     resource_test.go:623: Step 1/2 error: Error running apply: exit status 1
2026-09-09T02:19:32.9201706Z         
2026-09-09T02:19:32.9202041Z         Error: error creating resource
2026-09-09T02:19:32.9202372Z         
2026-09-09T02:19:32.9202791Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.9203566Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.9204288Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.9204679Z         
2026-09-09T02:19:32.9205480Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.9206529Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.9207256Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2026-09-09T02:19:32.9208016Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.9208754Z         Params: [processor-created-to-stopped commandName does not exist in context],
2026-09-09T02:19:32.9209259Z         BadRequestDetail: 
2026-09-09T02:19:32.9261666Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (0.47s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6903965Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2026-09-10T02:13:36.6904986Z     resource_test.go:622: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2026-09-10T02:13:36.6924937Z    test_working_directory=/tmp/plugintest1012145257 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_step_number=1
2026-09-10T02:13:36.6926129Z     resource_test.go:623: Step 1/2 error: Error running apply: exit status 1
2026-09-10T02:13:36.6926664Z         
2026-09-10T02:13:36.6927068Z         Error: error creating resource
2026-09-10T02:13:36.6927622Z         
2026-09-10T02:13:36.6928150Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6929146Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6930088Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6930576Z         
2026-09-10T02:13:36.6931636Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6932805Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6933744Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2026-09-10T02:13:36.6934698Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.6935652Z         Params: [processor-created-to-stopped commandName does not exist in context],
2026-09-10T02:13:36.6936308Z         BadRequestDetail: 
2026-09-10T02:13:36.6982516Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (0.38s)
```

- 2026-09-11
  - PASS 8 seconds
  - PASS 3 seconds
- 2026-09-12 PASS 3 seconds
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
- 2026-09-13 PASS 3 seconds
- 2026-09-14: MISSING
