# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 2)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor | dev | 0.04s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor | dev | 0.04s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08 PASS 3 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.8930736Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-09-09T02:19:32.8932145Z     resource_test.go:551: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-09-09T02:19:32.8957225Z    test_working_directory=/tmp/plugintest1767774597 test_step_number=1 test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-09-09T02:19:32.8958146Z     resource_test.go:552: Step 1/2 error: Error running apply: exit status 1
2026-09-09T02:19:32.8958587Z         
2026-09-09T02:19:32.8958931Z         Error: error creating resource
2026-09-09T02:19:32.8959421Z         
2026-09-09T02:19:32.8959867Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.8960667Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.8961410Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.8961813Z         
2026-09-09T02:19:32.8962674Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.8963604Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.8964353Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2026-09-09T02:19:32.8965095Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.8965823Z         Params: [processor-created-to-created commandName does not exist in context],
2026-09-09T02:19:32.8966598Z         BadRequestDetail: 
2026-09-09T02:19:32.9098547Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (0.44s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6699259Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-09-10T02:13:36.6699908Z     resource_test.go:551: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-09-10T02:13:36.6712302Z   
2026-09-10T02:13:36.6712644Z     resource_test.go:552: Step 1/2 error: Error running apply: exit status 1
2026-09-10T02:13:36.6712979Z         
2026-09-10T02:13:36.6713243Z         Error: error creating resource
2026-09-10T02:13:36.6713492Z         
2026-09-10T02:13:36.6713819Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6714420Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6714989Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6715300Z         
2026-09-10T02:13:36.6715926Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6716607Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6717252Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2026-09-10T02:13:36.6717858Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.6718443Z         Params: [processor-created-to-created commandName does not exist in context],
2026-09-10T02:13:36.6718847Z         BadRequestDetail: 
2026-09-10T02:13:36.6819126Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (0.37s)
```

- 2026-09-11
  - PASS 4 seconds
  - PASS 3 seconds
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
