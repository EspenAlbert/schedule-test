# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated Test Details
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
2026-09-09T02:19:32.9209731Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-09-09T02:19:32.9210518Z     resource_test.go:622: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2026-09-09T02:19:32.9225669Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/ddd9fd78-c493-43ca-bf05-24800b4857e3/terraform
2026-09-09T02:19:32.9226768Z     resource_test.go:623: Step 1/3 error: Error running apply: exit status 1
2026-09-09T02:19:32.9227317Z         
2026-09-09T02:19:32.9227656Z         Error: error creating resource
2026-09-09T02:19:32.9227976Z         
2026-09-09T02:19:32.9228398Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.9229176Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.9229895Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.9230286Z         
2026-09-09T02:19:32.9231088Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.9231963Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.9232692Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2026-09-09T02:19:32.9233437Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.9234182Z         Params: [processor-stopped-to-created commandName does not exist in context],
2026-09-09T02:19:32.9234690Z         BadRequestDetail: 
2026-09-09T02:19:32.9262423Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (0.50s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6936903Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-09-10T02:13:36.6938192Z     resource_test.go:622: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2026-09-10T02:13:36.6953924Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/8cc92e9c-1de6-438b-a445-0c9c104f9a5a/terraform test_working_directory=/tmp/plugintest3353078796 test_step_number=1
2026-09-10T02:13:36.6954875Z     resource_test.go:623: Step 1/3 error: Error running apply: exit status 1
2026-09-10T02:13:36.6955211Z         
2026-09-10T02:13:36.6955481Z         Error: error creating resource
2026-09-10T02:13:36.6955747Z         
2026-09-10T02:13:36.6956084Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6956693Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6957447Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6957771Z         
2026-09-10T02:13:36.6958407Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6959094Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6959657Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2026-09-10T02:13:36.6960232Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.6960816Z         Params: [processor-stopped-to-created commandName does not exist in context],
2026-09-10T02:13:36.6961225Z         BadRequestDetail: 
2026-09-10T02:13:36.6983111Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (0.38s)
```

- 2026-09-11
  - PASS 13 seconds
  - PASS 5 seconds
- 2026-09-12 PASS 6 seconds
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
