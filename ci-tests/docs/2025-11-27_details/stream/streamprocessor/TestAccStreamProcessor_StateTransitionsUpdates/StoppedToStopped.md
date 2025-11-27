# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev | 0.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 8 seconds
- 2025-10-30 PASS 8 seconds
- 2025-10-31 PASS 10 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 7 seconds
- 2025-11-04 PASS 7 seconds
- 2025-11-05
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1242481Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-11-06T00:51:58.1243367Z     resource_test.go:204: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-11-06T00:51:58.1254035Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-11-06T00:51:58.1292803Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-11-06T00:51:58.1293390Z     resource_test.go:205: Step 1/3 error: Error running apply: exit status 1
2025-11-06T00:51:58.1293777Z         
2025-11-06T00:51:58.1294060Z         Error: error creating resource
2025-11-06T00:51:58.1294336Z         
2025-11-06T00:51:58.1294703Z           with mongodbatlas_stream_processor.processor,
2025-11-06T00:51:58.1295409Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-11-06T00:51:58.1296070Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-11-06T00:51:58.1296407Z         
2025-11-06T00:51:58.1297171Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor
2025-11-06T00:51:58.1298260Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-11-06T00:51:58.1298939Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2025-11-06T00:51:58.1299563Z         problem occur: no healthy upstream. Reason: Bad Request. Params:
2025-11-06T00:51:58.1300185Z         [processor-stopped-to-stopped no healthy upstream], BadRequestDetail: 
2025-11-06T00:51:58.1314344Z   
2025-11-06T00:51:58.1389074Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (0.84s)
```

- 2025-11-07 PASS 7 seconds
- 2025-11-08 PASS 8 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 8 seconds
- 2025-11-11 PASS 7 seconds
- 2025-11-12 PASS 8 seconds
- 2025-11-13 PASS 7 seconds
- 2025-11-14 PASS 9 seconds
- 2025-11-15 PASS 8 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 9 seconds
- 2025-11-18 PASS 8 seconds
- 2025-11-19 PASS 8 seconds
- 2025-11-20 PASS 7 seconds
- 2025-11-21 PASS 10 seconds
- 2025-11-22 PASS 9 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 8 seconds
- 2025-11-25 PASS 11 seconds
- 2025-11-26 PASS 7 seconds
- 2025-11-27 PASS 8 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 6 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 7 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 7 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 9 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 6 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
