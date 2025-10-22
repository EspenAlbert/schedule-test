# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 42) FAIL(x 2)
Success rate: 95.45%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.04s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 0.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 4 seconds
- 2025-09-24 PASS 3 seconds
- 2025-09-25 PASS 4 seconds
- 2025-09-26 PASS 3 seconds
- 2025-09-27 PASS 5 seconds
- 2025-09-28 PASS 4 seconds
- 2025-09-29
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-09-30
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 5 seconds
- 2025-10-01
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-10-02 PASS 4 seconds
- 2025-10-03 PASS 3 seconds
- 2025-10-04 PASS 4 seconds
- 2025-10-05 PASS 4 seconds
- 2025-10-06 PASS 4 seconds
- 2025-10-07 PASS 2 seconds
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