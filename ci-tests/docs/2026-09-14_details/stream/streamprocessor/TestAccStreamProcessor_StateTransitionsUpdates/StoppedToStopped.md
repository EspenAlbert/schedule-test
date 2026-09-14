# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
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
- 2026-09-08 PASS 6 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.9071687Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-09-09T02:19:32.9072518Z     resource_test.go:551: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-09-09T02:19:32.9088054Z    test_working_directory=/tmp/plugintest1016192704 test_step_number=1 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped test_terraform_path=/home/runner/work/_temp/ddd9fd78-c493-43ca-bf05-24800b4857e3/terraform
2026-09-09T02:19:32.9089277Z     resource_test.go:552: Step 1/3 error: Error running apply: exit status 1
2026-09-09T02:19:32.9089710Z         
2026-09-09T02:19:32.9090051Z         Error: error creating resource
2026-09-09T02:19:32.9090378Z         
2026-09-09T02:19:32.9090812Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.9091595Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.9092328Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.9092724Z         
2026-09-09T02:19:32.9093535Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.9094426Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.9095318Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2026-09-09T02:19:32.9096224Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.9096964Z         Params: [processor-stopped-to-stopped commandName does not exist in context],
2026-09-09T02:19:32.9097478Z         BadRequestDetail: 
2026-09-09T02:19:32.9101960Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (0.44s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6798694Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-09-10T02:13:36.6799341Z     resource_test.go:551: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-09-10T02:13:36.6811423Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-09-10T02:13:36.6811926Z     resource_test.go:552: Step 1/3 error: Error running apply: exit status 1
2026-09-10T02:13:36.6812256Z         
2026-09-10T02:13:36.6812676Z         Error: error creating resource
2026-09-10T02:13:36.6812934Z         
2026-09-10T02:13:36.6813265Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6813859Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6814423Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6814728Z         
2026-09-10T02:13:36.6815351Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6816034Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6816602Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2026-09-10T02:13:36.6817306Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.6817895Z         Params: [processor-stopped-to-stopped commandName does not exist in context],
2026-09-10T02:13:36.6818310Z         BadRequestDetail: 
2026-09-10T02:13:36.6821813Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (0.38s)
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
