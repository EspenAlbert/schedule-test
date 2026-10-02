# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor | dev | 0.06s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor | dev | 0.06s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 3 seconds
- 2026-09-03 PASS 4 seconds
- 2026-09-04 PASS 3 seconds
- 2026-09-05 PASS 4 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 4 seconds
- 2026-09-08 PASS 3 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.8803848Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-09-09T02:19:32.8829109Z   
2026-09-09T02:19:32.8829799Z     resource_test.go:471: Step 1/1 error: Error running apply: exit status 1
2026-09-09T02:19:32.8830450Z         
2026-09-09T02:19:32.8830962Z         Error: error creating resource
2026-09-09T02:19:32.8831445Z         
2026-09-09T02:19:32.8832084Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.8833333Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.8834502Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.8835108Z         
2026-09-09T02:19:32.8836560Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.8838019Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.8839192Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2026-09-09T02:19:32.8840336Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.8841452Z         Params: [new-processor-json-unchanged commandName does not exist in context],
2026-09-09T02:19:32.8842428Z         BadRequestDetail: 
2026-09-09T02:19:32.8843021Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.64s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6660507Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-09-10T02:13:36.6672654Z   
2026-09-10T02:13:36.6673001Z     resource_test.go:471: Step 1/1 error: Error running apply: exit status 1
2026-09-10T02:13:36.6673337Z         
2026-09-10T02:13:36.6673601Z         Error: error creating resource
2026-09-10T02:13:36.6673860Z         
2026-09-10T02:13:36.6674199Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6674801Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6675364Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6675662Z         
2026-09-10T02:13:36.6676284Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6676962Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6677639Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2026-09-10T02:13:36.6678219Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.6678787Z         Params: [new-processor-json-unchanged commandName does not exist in context],
2026-09-10T02:13:36.6679199Z         BadRequestDetail: 
2026-09-10T02:13:36.6679627Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.58s)
```

- 2026-09-11
  - PASS 4 seconds
  - PASS 3 seconds
- 2026-09-12 PASS 4 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 3 seconds
- 2026-09-15 PASS 3 seconds
- 2026-09-16 PASS 3 seconds
- 2026-09-17 PASS 4 seconds
- 2026-09-18 PASS 3 seconds
- 2026-09-19 PASS 3 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 4 seconds
- 2026-09-22 PASS 3 seconds
- 2026-09-23 PASS 4 seconds
- 2026-09-24 PASS 4 seconds
- 2026-09-25 PASS 3 seconds
- 2026-09-26 PASS 3 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 4 seconds
- 2026-09-29
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2026-09-30
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 5 seconds
- 2026-10-01 PASS 3 seconds
- 2026-10-02 PASS 4 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 3 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 4 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 4 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 4 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 4 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 4 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
