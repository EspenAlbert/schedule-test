# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev | flaky_500 | 0.05s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 7 seconds
- 2025-10-30 PASS 6 seconds
- 2025-10-31 PASS 7 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 5 seconds
- 2025-11-04 PASS 5 seconds
- 2025-11-05
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1469601Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-11-06T00:51:58.1470294Z     resource_test.go:275: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-11-06T00:51:58.1474720Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-11-06T00:51:58.1493556Z    test_terraform_path=/home/runner/work/_temp/c67eacf2-2435-42b6-ba18-88c701e78006/terraform test_working_directory=/tmp/plugintest4165182288 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-11-06T00:51:58.1494633Z     resource_test.go:276: Step 1/3 error: Error running apply: exit status 1
2025-11-06T00:51:58.1495007Z         
2025-11-06T00:51:58.1495401Z         Error: error creating resource
2025-11-06T00:51:58.1495675Z         
2025-11-06T00:51:58.1496042Z           with mongodbatlas_stream_processor.processor,
2025-11-06T00:51:58.1496744Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-11-06T00:51:58.1497403Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-11-06T00:51:58.1497745Z         
2025-11-06T00:51:58.1498517Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor
2025-11-06T00:51:58.1499351Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-11-06T00:51:58.1500013Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-11-06T00:51:58.1500814Z         problem occur: no healthy upstream. Reason: Bad Request. Params:
2025-11-06T00:51:58.1501439Z         [processor-stopped-to-created no healthy upstream], BadRequestDetail: 
2025-11-06T00:51:58.1509196Z    test_working_directory=/tmp/plugintest3270728684 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_step_number=1 test_terraform_path=/home/runner/work/_temp/c67eacf2-2435-42b6-ba18-88c701e78006/terraform
2025-11-06T00:51:58.1552382Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (0.52s)
```

- 2025-11-07 PASS 5 seconds
- 2025-11-08 PASS 5 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 6 seconds
- 2025-11-11 PASS 5 seconds
- 2025-11-12 PASS 6 seconds
- 2025-11-13 PASS 5 seconds
- 2025-11-14 PASS 6 seconds
- 2025-11-15 PASS 5 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 6 seconds
- 2025-11-18 PASS 6 seconds
- 2025-11-19 PASS 5 seconds
- 2025-11-20 PASS 5 seconds
- 2025-11-21 PASS 7 seconds
- 2025-11-22 PASS 5 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 6 seconds
- 2025-11-25 PASS 6 seconds
- 2025-11-26 PASS 5 seconds
- 2025-11-27 PASS 6 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 5 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 5 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 5 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 6 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 5 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
