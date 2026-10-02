# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
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
- 2026-09-02 PASS 7 seconds
- 2026-09-03 PASS 7 seconds
- 2026-09-04 PASS 6 seconds
- 2026-09-05 PASS 7 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 7 seconds
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
- 2026-09-15 PASS 6 seconds
- 2026-09-16 PASS 6 seconds
- 2026-09-17 PASS 7 seconds
- 2026-09-18 PASS 6 seconds
- 2026-09-19 PASS 6 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 7 seconds
- 2026-09-22 PASS 7 seconds
- 2026-09-23 PASS 7 seconds
- 2026-09-24 PASS 7 seconds
- 2026-09-25 PASS 6 seconds
- 2026-09-26 PASS 7 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 7 seconds
- 2026-09-29
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2026-09-30
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 9 seconds
- 2026-10-01 PASS 7 seconds
- 2026-10-02 PASS 7 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 6 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 7 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 7 seconds
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
- 2026-09-27 PASS 7 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 8 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
