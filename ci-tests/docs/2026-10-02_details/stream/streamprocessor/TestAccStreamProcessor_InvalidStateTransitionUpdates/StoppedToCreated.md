# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor | dev | 0.05s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor | dev | 0.04s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 6 seconds
- 2026-09-03 PASS 6 seconds
- 2026-09-04 PASS 5 seconds
- 2026-09-05 PASS 6 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 6 seconds
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
- 2026-09-15 PASS 5 seconds
- 2026-09-16 PASS 5 seconds
- 2026-09-17 PASS 6 seconds
- 2026-09-18 PASS 5 seconds
- 2026-09-19 PASS 5 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 6 seconds
- 2026-09-22 PASS 6 seconds
- 2026-09-23 PASS 8 seconds
- 2026-09-24 PASS 6 seconds
- 2026-09-25 PASS 5 seconds
- 2026-09-26 PASS 5 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 6 seconds
- 2026-09-29
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2026-09-30
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 8 seconds
- 2026-10-01 PASS 6 seconds
- 2026-10-02 PASS 6 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 5 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 6 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 6 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 8 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 6 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 6 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
