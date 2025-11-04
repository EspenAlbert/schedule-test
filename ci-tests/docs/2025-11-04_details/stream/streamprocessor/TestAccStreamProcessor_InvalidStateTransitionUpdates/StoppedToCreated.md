# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.04s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 0.06s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 9 seconds
- 2025-10-07 PASS 6 seconds
- 2025-10-08 PASS 8 seconds
- 2025-10-09 PASS 7 seconds
- 2025-10-10 PASS 8 seconds
- 2025-10-11 PASS 7 seconds
- 2025-10-12 PASS 7 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.3151771Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-13T01:24:12.3152576Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-13T01:24:12.3157118Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-13T01:24:12.3166349Z    test_terraform_path=/home/runner/work/_temp/6d87958b-7036-4585-be2d-7248c9545d7d/terraform
2025-10-13T01:24:12.3184903Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-13T01:24:12.3185587Z     resource_test.go:259: Step 1/3 error: Error running apply: exit status 1
2025-10-13T01:24:12.3185985Z         
2025-10-13T01:24:12.3186321Z         Error: error creating resource
2025-10-13T01:24:12.3186619Z         
2025-10-13T01:24:12.3187068Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3187893Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3188753Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3189120Z         
2025-10-13T01:24:12.3189702Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3195758Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_working_directory=/tmp/plugintest1077359722
2025-10-13T01:24:12.3205518Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (300.44s)
```

- 2025-10-14 PASS 8 seconds
- 2025-10-15 PASS 7 seconds
- 2025-10-16 PASS 8 seconds
- 2025-10-17 PASS 6 seconds
- 2025-10-18 PASS 7 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.2063314Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-19T00:50:12.2064004Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-19T00:50:12.2068199Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-19T00:50:12.2092891Z   
2025-10-19T00:50:12.2109950Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-19T00:50:12.2110542Z     resource_test.go:259: Step 1/3 error: Error running apply: exit status 1
2025-10-19T00:50:12.2110904Z         
2025-10-19T00:50:12.2111179Z         Error: error creating resource
2025-10-19T00:50:12.2111452Z         
2025-10-19T00:50:12.2111807Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.2112282Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.2112591Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.2112692Z         
2025-10-19T00:50:12.2113335Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.2113674Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.2114003Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.2114357Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.2114656Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.2114797Z         BadRequestDetail: 
2025-10-19T00:50:12.2118906Z    test_terraform_path=/home/runner/work/_temp/900806b3-a17f-4fd8-9610-14d4dc9797f0/terraform test_step_number=1
2025-10-19T00:50:12.2125113Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (0.60s)
```

- 2025-10-20
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-10-21 PASS 6 seconds
- 2025-10-22
  - PASS 5 seconds
  - PASS 8 seconds
- 2025-10-23 PASS 6 seconds
- 2025-10-24 PASS 6 seconds
- 2025-10-25 PASS 5 seconds
- 2025-10-26 PASS 6 seconds
- 2025-10-27 PASS 6 seconds
- 2025-10-28 PASS 5 seconds
- 2025-10-29 PASS 7 seconds
- 2025-10-30 PASS 6 seconds
- 2025-10-31 PASS 7 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 5 seconds
- 2025-11-03 PASS 5 seconds
- 2025-11-04 PASS 5 seconds