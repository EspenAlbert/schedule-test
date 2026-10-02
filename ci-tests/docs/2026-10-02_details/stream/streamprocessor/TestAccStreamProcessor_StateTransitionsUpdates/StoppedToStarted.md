# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted Test Details
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
- 2026-09-02 PASS 8 seconds
- 2026-09-03 PASS 8 seconds
- 2026-09-04 PASS 7 seconds
- 2026-09-05 PASS 8 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 10 seconds
- 2026-09-08 PASS 8 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.9045787Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-09-09T02:19:32.9046761Z     resource_test.go:551: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-09-09T02:19:32.9062546Z    test_step_number=1
2026-09-09T02:19:32.9063031Z     resource_test.go:552: Step 1/3 error: Error running apply: exit status 1
2026-09-09T02:19:32.9063457Z         
2026-09-09T02:19:32.9063793Z         Error: error creating resource
2026-09-09T02:19:32.9064126Z         
2026-09-09T02:19:32.9064554Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.9065362Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.9066272Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.9066706Z         
2026-09-09T02:19:32.9067511Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.9068558Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.9069284Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2026-09-09T02:19:32.9070020Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.9070744Z         Params: [processor-stopped-to-started commandName does not exist in context],
2026-09-09T02:19:32.9071245Z         BadRequestDetail: 
2026-09-09T02:19:32.9101275Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (0.49s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6778867Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-09-10T02:13:36.6779451Z     resource_test.go:551: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-09-10T02:13:36.6791699Z   
2026-09-10T02:13:36.6792157Z     resource_test.go:552: Step 1/3 error: Error running apply: exit status 1
2026-09-10T02:13:36.6792493Z         
2026-09-10T02:13:36.6792760Z         Error: error creating resource
2026-09-10T02:13:36.6793009Z         
2026-09-10T02:13:36.6793338Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6793938Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6794497Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6794808Z         
2026-09-10T02:13:36.6795443Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6796139Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6796706Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2026-09-10T02:13:36.6797367Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.6797952Z         Params: [processor-stopped-to-started commandName does not exist in context],
2026-09-10T02:13:36.6798355Z         BadRequestDetail: 
2026-09-10T02:13:36.6821276Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (0.38s)
```

- 2026-09-11
  - PASS 9 seconds
  - PASS 8 seconds
- 2026-09-12 PASS 8 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 7 seconds
- 2026-09-15 PASS 8 seconds
- 2026-09-16 PASS 7 seconds
- 2026-09-17 PASS 8 seconds
- 2026-09-18 PASS 8 seconds
- 2026-09-19 PASS 7 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 9 seconds
- 2026-09-22 PASS 8 seconds
- 2026-09-23 PASS 10 seconds
- 2026-09-24 PASS 8 seconds
- 2026-09-25 PASS 8 seconds
- 2026-09-26 PASS 8 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 8 seconds
- 2026-09-29
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2026-09-30
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 11 seconds
- 2026-10-01 PASS 8 seconds
- 2026-10-02 PASS 9 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 8 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 8 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 8 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 10 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 9 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 9 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
