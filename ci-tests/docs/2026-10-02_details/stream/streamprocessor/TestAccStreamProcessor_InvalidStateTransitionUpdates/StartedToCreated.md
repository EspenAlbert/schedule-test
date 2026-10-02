# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated Test Details
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
- 2026-09-02 PASS 4 seconds
- 2026-09-03 PASS 5 seconds
- 2026-09-04 PASS 4 seconds
- 2026-09-05 PASS 4 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 5 seconds
- 2026-09-08 PASS 4 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.9235151Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-09-09T02:19:32.9235937Z     resource_test.go:622: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2026-09-09T02:19:32.9251944Z   
2026-09-09T02:19:32.9252394Z     resource_test.go:623: Step 1/2 error: Error running apply: exit status 1
2026-09-09T02:19:32.9252805Z         
2026-09-09T02:19:32.9253140Z         Error: error creating resource
2026-09-09T02:19:32.9253597Z         
2026-09-09T02:19:32.9254026Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.9254835Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.9255573Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.9256061Z         
2026-09-09T02:19:32.9256886Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.9257819Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.9258548Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2026-09-09T02:19:32.9259290Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.9260017Z         Params: [processor-started-to-created commandName does not exist in context],
2026-09-09T02:19:32.9260527Z         BadRequestDetail: 
2026-09-09T02:19:32.9263156Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.46s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6961595Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-09-10T02:13:36.6962211Z     resource_test.go:622: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2026-09-10T02:13:36.6975019Z   
2026-09-10T02:13:36.6975380Z     resource_test.go:623: Step 1/2 error: Error running apply: exit status 1
2026-09-10T02:13:36.6975716Z         
2026-09-10T02:13:36.6975986Z         Error: error creating resource
2026-09-10T02:13:36.6976245Z         
2026-09-10T02:13:36.6976584Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6977282Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6977856Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6978182Z         
2026-09-10T02:13:36.6978819Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6979512Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6980078Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2026-09-10T02:13:36.6980651Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.6981211Z         Params: [processor-started-to-created commandName does not exist in context],
2026-09-10T02:13:36.6981613Z         BadRequestDetail: 
2026-09-10T02:13:36.6983810Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.40s)
```

- 2026-09-11
  - PASS 4 seconds
  - PASS 4 seconds
- 2026-09-12 PASS 4 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 4 seconds
- 2026-09-15 PASS 3 seconds
- 2026-09-16 PASS 4 seconds
- 2026-09-17 PASS 4 seconds
- 2026-09-18 PASS 4 seconds
- 2026-09-19 PASS 4 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 4 seconds
- 2026-09-22 PASS 4 seconds
- 2026-09-23 PASS 5 seconds
- 2026-09-24 PASS 4 seconds
- 2026-09-25 PASS 4 seconds
- 2026-09-26 PASS 4 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 4 seconds
- 2026-09-29
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 5 seconds
- 2026-09-30
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2026-10-01 PASS 4 seconds
- 2026-10-02 PASS 4 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 4 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 5 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 4 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 5 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 5 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 5 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
