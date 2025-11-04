# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.07s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 1.01s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 8 seconds
- 2025-10-07 PASS 6 seconds
- 2025-10-08 PASS 8 seconds
- 2025-10-09 PASS 9 seconds
- 2025-10-10 PASS 9 seconds
- 2025-10-11 PASS 9 seconds
- 2025-10-12 PASS 8 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.2982945Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-10-13T01:24:12.2983804Z     resource_test.go:179: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-10-13T01:24:12.2997465Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-10-13T01:24:12.3006822Z    test_working_directory=/tmp/plugintest973137936 test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-10-13T01:24:12.3007662Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-10-13T01:24:12.3008061Z         
2025-10-13T01:24:12.3008563Z         Error: error creating resource
2025-10-13T01:24:12.3008875Z         
2025-10-13T01:24:12.3009321Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3010161Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3010931Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3011297Z         
2025-10-13T01:24:12.3011882Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3024189Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped test_terraform_path=/home/runner/work/_temp/6d87958b-7036-4585-be2d-7248c9545d7d/terraform test_working_directory=/tmp/plugintest2128731677 test_step_number=1
2025-10-13T01:24:12.3088027Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (300.67s)
```

- 2025-10-14 PASS 8 seconds
- 2025-10-15 PASS 8 seconds
- 2025-10-16 PASS 6 seconds
- 2025-10-17 PASS 6 seconds
- 2025-10-18 PASS 7 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1822111Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-10-19T00:50:12.1822774Z     resource_test.go:179: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-10-19T00:50:12.1833726Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-10-19T00:50:12.1906164Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-10-19T00:50:12.1907002Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.1907558Z         
2025-10-19T00:50:12.1907843Z         Error: error creating resource
2025-10-19T00:50:12.1908119Z         
2025-10-19T00:50:12.1908486Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.1909189Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.1909834Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.1910178Z         
2025-10-19T00:50:12.1910935Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.1911766Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1912366Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.1912977Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1913554Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.1913944Z         BadRequestDetail: 
2025-10-19T00:50:12.1922741Z    test_terraform_path=/home/runner/work/_temp/900806b3-a17f-4fd8-9610-14d4dc9797f0/terraform test_working_directory=/tmp/plugintest2954595890
2025-10-19T00:50:12.1971638Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (1.09s)
```

- 2025-10-20
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-10-21 PASS 8 seconds
- 2025-10-22
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-10-23 PASS 8 seconds
- 2025-10-24 PASS 8 seconds
- 2025-10-25 PASS 7 seconds
- 2025-10-26 PASS 6 seconds
- 2025-10-27 PASS 6 seconds
- 2025-10-28 PASS 6 seconds
- 2025-10-29 PASS 8 seconds
- 2025-10-30 PASS 7 seconds
- 2025-10-31 PASS 8 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 6 seconds
- 2025-11-03 PASS 7 seconds
- 2025-11-04 PASS 7 seconds