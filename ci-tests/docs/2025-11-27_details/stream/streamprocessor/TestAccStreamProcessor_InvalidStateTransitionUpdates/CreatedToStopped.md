# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev | 0.05s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 4 seconds
- 2025-10-30 PASS 3 seconds
- 2025-10-31 PASS 3 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 2 seconds
- 2025-11-04 PASS 3 seconds
- 2025-11-05
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1467697Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-11-06T00:51:58.1468416Z     resource_test.go:275: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-11-06T00:51:58.1473619Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-11-06T00:51:58.1510309Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-11-06T00:51:58.1511080Z     resource_test.go:276: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:51:58.1511449Z         
2025-11-06T00:51:58.1511737Z         Error: error creating resource
2025-11-06T00:51:58.1512011Z         
2025-11-06T00:51:58.1512385Z           with mongodbatlas_stream_processor.processor,
2025-11-06T00:51:58.1513084Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-11-06T00:51:58.1513746Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-11-06T00:51:58.1514077Z         
2025-11-06T00:51:58.1514838Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor
2025-11-06T00:51:58.1515797Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-11-06T00:51:58.1516463Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-11-06T00:51:58.1517083Z         problem occur: no healthy upstream. Reason: Bad Request. Params:
2025-11-06T00:51:58.1517691Z         [processor-created-to-stopped no healthy upstream], BadRequestDetail: 
2025-11-06T00:51:58.1531371Z    test_working_directory=/tmp/plugintest3524045964 test_step_number=1 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-11-06T00:51:58.1553083Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (0.53s)
```

- 2025-11-07 PASS 2 seconds
- 2025-11-08 PASS 3 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 3 seconds
- 2025-11-11 PASS 3 seconds
- 2025-11-12 PASS 3 seconds
- 2025-11-13 PASS 3 seconds
- 2025-11-14 PASS 3 seconds
- 2025-11-15 PASS 2 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 3 seconds
- 2025-11-18 PASS 3 seconds
- 2025-11-19 PASS 3 seconds
- 2025-11-20 PASS 2 seconds
- 2025-11-21 PASS 3 seconds
- 2025-11-22 PASS 2 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 3 seconds
- 2025-11-25 PASS 3 seconds
- 2025-11-26 PASS 2 seconds
- 2025-11-27 PASS 2 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 2 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 2 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 2 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 3 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 3 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
