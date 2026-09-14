# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
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
2026-09-09T02:19:32.9019849Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-09-09T02:19:32.9020688Z     resource_test.go:551: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-09-09T02:19:32.9036850Z   
2026-09-09T02:19:32.9037310Z     resource_test.go:552: Step 1/2 error: Error running apply: exit status 1
2026-09-09T02:19:32.9037743Z         
2026-09-09T02:19:32.9038083Z         Error: error creating resource
2026-09-09T02:19:32.9038408Z         
2026-09-09T02:19:32.9038829Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.9039631Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.9040373Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.9040767Z         
2026-09-09T02:19:32.9041736Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.9042639Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.9043375Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2026-09-09T02:19:32.9044111Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.9044833Z         Params: [processor-started-to-started commandName does not exist in context],
2026-09-09T02:19:32.9045341Z         BadRequestDetail: 
2026-09-09T02:19:32.9100589Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (0.51s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6758847Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-09-10T02:13:36.6759490Z     resource_test.go:551: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-09-10T02:13:36.6771946Z   
2026-09-10T02:13:36.6772286Z     resource_test.go:552: Step 1/2 error: Error running apply: exit status 1
2026-09-10T02:13:36.6772615Z         
2026-09-10T02:13:36.6772882Z         Error: error creating resource
2026-09-10T02:13:36.6773131Z         
2026-09-10T02:13:36.6773455Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6774055Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6774629Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6774941Z         
2026-09-10T02:13:36.6775565Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6776255Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6776827Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2026-09-10T02:13:36.6777548Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.6778125Z         Params: [processor-started-to-started commandName does not exist in context],
2026-09-10T02:13:36.6778529Z         BadRequestDetail: 
2026-09-10T02:13:36.6820735Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (0.39s)
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
