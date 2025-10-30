# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL(x 2)
Success rate: 95.00%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.08s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 1.01s

## Timeline
- 2025-09-30 PASS 6 seconds
- 2025-10-01
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-10-02 PASS 5 seconds
- 2025-10-03 PASS 6 seconds
- 2025-10-04 PASS 7 seconds
- 2025-10-05 PASS 7 seconds
- 2025-10-06 PASS 6 seconds
- 2025-10-07 PASS 4 seconds
- 2025-10-08 PASS 6 seconds
- 2025-10-09 PASS 6 seconds
- 2025-10-10 PASS 7 seconds
- 2025-10-11 PASS 4 seconds
- 2025-10-12 PASS 6 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.2980559Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-10-13T01:24:12.2981564Z     resource_test.go:179: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-10-13T01:24:12.2994591Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-10-13T01:24:12.3067157Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-10-13T01:24:12.3067815Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-10-13T01:24:12.3068215Z         
2025-10-13T01:24:12.3068735Z         Error: error creating resource
2025-10-13T01:24:12.3069165Z         
2025-10-13T01:24:12.3069615Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3070441Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3071199Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3071567Z         
2025-10-13T01:24:12.3072137Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3081750Z   
2025-10-13T01:24:12.3089707Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (300.79s)
```

- 2025-10-14 PASS 6 seconds
- 2025-10-15 PASS 4 seconds
- 2025-10-16 PASS 5 seconds
- 2025-10-17 PASS 4 seconds
- 2025-10-18 PASS 4 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1820217Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-10-19T00:50:12.1820972Z     resource_test.go:179: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-10-19T00:50:12.1831623Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-10-19T00:50:12.1923472Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-10-19T00:50:12.1924042Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.1924408Z         
2025-10-19T00:50:12.1924689Z         Error: error creating resource
2025-10-19T00:50:12.1925153Z         
2025-10-19T00:50:12.1925536Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.1926366Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.1927161Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.1927488Z         
2025-10-19T00:50:12.1928387Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.1929217Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1929814Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.1930419Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1930988Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.1931374Z         BadRequestDetail: 
2025-10-19T00:50:12.1939909Z   
2025-10-19T00:50:12.1972274Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (1.09s)
```

- 2025-10-20
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-10-21 PASS 6 seconds
- 2025-10-22
  - PASS 4 seconds
  - PASS 6 seconds
- 2025-10-23 PASS 5 seconds
- 2025-10-24 PASS 6 seconds
- 2025-10-25 PASS 5 seconds
- 2025-10-26 PASS 4 seconds
- 2025-10-27 PASS 5 seconds
- 2025-10-28 PASS 4 seconds
- 2025-10-29 PASS 7 seconds
- 2025-10-30 PASS 6 seconds