# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped Test Details
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
- 2026-09-08 PASS 5 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.8993755Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-09-09T02:19:32.8994522Z     resource_test.go:551: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-09-09T02:19:32.9009984Z    test_step_number=1 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped test_terraform_path=/home/runner/work/_temp/ddd9fd78-c493-43ca-bf05-24800b4857e3/terraform test_working_directory=/tmp/plugintest1201085721
2026-09-09T02:19:32.9011186Z     resource_test.go:552: Step 1/2 error: Error running apply: exit status 1
2026-09-09T02:19:32.9011608Z         
2026-09-09T02:19:32.9011943Z         Error: error creating resource
2026-09-09T02:19:32.9012267Z         
2026-09-09T02:19:32.9012693Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.9013486Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.9014228Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.9014781Z         
2026-09-09T02:19:32.9015611Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.9016678Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.9017424Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2026-09-09T02:19:32.9018173Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.9018904Z         Params: [processor-started-to-stopped commandName does not exist in context],
2026-09-09T02:19:32.9019406Z         BadRequestDetail: 
2026-09-09T02:19:32.9099912Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (0.48s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6739052Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-09-10T02:13:36.6739620Z     resource_test.go:551: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-09-10T02:13:36.6751593Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped test_terraform_path=/home/runner/work/_temp/8cc92e9c-1de6-438b-a445-0c9c104f9a5a/terraform
2026-09-10T02:13:36.6752339Z     resource_test.go:552: Step 1/2 error: Error running apply: exit status 1
2026-09-10T02:13:36.6752667Z         
2026-09-10T02:13:36.6752931Z         Error: error creating resource
2026-09-10T02:13:36.6753180Z         
2026-09-10T02:13:36.6753504Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6754099Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6754649Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6754950Z         
2026-09-10T02:13:36.6755561Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6756275Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6756835Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2026-09-10T02:13:36.6757545Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.6758116Z         Params: [processor-started-to-stopped commandName does not exist in context],
2026-09-10T02:13:36.6758511Z         BadRequestDetail: 
2026-09-10T02:13:36.6820203Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (0.38s)
```

- 2026-09-11
  - PASS 6 seconds
  - PASS 5 seconds
- 2026-09-12 PASS 5 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 5 seconds

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 6 seconds
- 2026-09-14: MISSING
