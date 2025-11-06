# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.04s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 0.06s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev | 0.05s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 3 seconds
- 2025-10-09 PASS 2 seconds
- 2025-10-10 PASS 3 seconds
- 2025-10-11 PASS 3 seconds
- 2025-10-12 PASS 2 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.3149707Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-10-13T01:24:12.3150499Z     resource_test.go:258: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-10-13T01:24:12.3155917Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-10-13T01:24:12.3196679Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-10-13T01:24:12.3197348Z     resource_test.go:259: Step 1/2 error: Error running apply: exit status 1
2025-10-13T01:24:12.3197753Z         
2025-10-13T01:24:12.3198089Z         Error: error creating resource
2025-10-13T01:24:12.3198577Z         
2025-10-13T01:24:12.3199120Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3200078Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3200954Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3201429Z         
2025-10-13T01:24:12.3202104Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3204531Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (300.44s)
```

- 2025-10-14 PASS 3 seconds
- 2025-10-15 PASS 3 seconds
- 2025-10-16 PASS 3 seconds
- 2025-10-17 PASS 3 seconds
- 2025-10-18 PASS 2 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.2061438Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-10-19T00:50:12.2062154Z     resource_test.go:258: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-10-19T00:50:12.2067122Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-10-19T00:50:12.2119156Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-10-19T00:50:12.2119592Z     resource_test.go:259: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.2119693Z         
2025-10-19T00:50:12.2119867Z         Error: error creating resource
2025-10-19T00:50:12.2119960Z         
2025-10-19T00:50:12.2120284Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.2120847Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.2121279Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.2121382Z         
2025-10-19T00:50:12.2122151Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.2122634Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.2123090Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.2123434Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.2123841Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.2123991Z         BadRequestDetail: 
2025-10-19T00:50:12.2124707Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (0.59s)
```

- 2025-10-20
  - PASS 3 seconds
  - PASS 2 seconds
- 2025-10-21 PASS 2 seconds
- 2025-10-22
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-10-23 PASS 3 seconds
- 2025-10-24 PASS 3 seconds
- 2025-10-25 PASS 3 seconds
- 2025-10-26 PASS 3 seconds
- 2025-10-27 PASS 2 seconds
- 2025-10-28 PASS 4 seconds
- 2025-10-29 PASS 4 seconds
- 2025-10-30 PASS 3 seconds
- 2025-10-31 PASS 3 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 2 seconds
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
