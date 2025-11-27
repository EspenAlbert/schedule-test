# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev | flaky_500 | 0.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 9 seconds
- 2025-10-30 PASS 10 seconds
- 2025-10-31 PASS 9 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 9 seconds
- 2025-11-04 PASS 8 seconds
- 2025-11-05
  - PASS 7 seconds
  - PASS 9 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1250053Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-11-06T00:51:58.1251022Z     resource_test.go:204: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-11-06T00:51:58.1255540Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-11-06T00:51:58.1270894Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-11-06T00:51:58.1271482Z     resource_test.go:205: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:51:58.1271854Z         
2025-11-06T00:51:58.1272137Z         Error: error creating resource
2025-11-06T00:51:58.1272421Z         
2025-11-06T00:51:58.1272791Z           with mongodbatlas_stream_processor.processor,
2025-11-06T00:51:58.1273636Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-11-06T00:51:58.1274316Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-11-06T00:51:58.1274652Z         
2025-11-06T00:51:58.1275426Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor
2025-11-06T00:51:58.1276266Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-11-06T00:51:58.1276927Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2025-11-06T00:51:58.1277655Z         problem occur: no healthy upstream. Reason: Bad Request. Params:
2025-11-06T00:51:58.1278286Z         [processor-started-to-started no healthy upstream], BadRequestDetail: 
2025-11-06T00:51:58.1292464Z   
2025-11-06T00:51:58.1388419Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (0.82s)
```

- 2025-11-07 PASS 8 seconds
- 2025-11-08 PASS 7 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 8 seconds
- 2025-11-11 PASS 8 seconds
- 2025-11-12 PASS 8 seconds
- 2025-11-13 PASS 8 seconds
- 2025-11-14 PASS 8 seconds
- 2025-11-15 PASS 7 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 8 seconds
- 2025-11-18 PASS 11 seconds
- 2025-11-19 PASS 10 seconds
- 2025-11-20 PASS 8 seconds
- 2025-11-21 PASS 8 seconds
- 2025-11-22 PASS 7 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 8 seconds
- 2025-11-25 PASS 9 seconds
- 2025-11-26 PASS 8 seconds
- 2025-11-27 PASS 9 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 7 seconds
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
- 2025-11-16 PASS 8 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 7 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
