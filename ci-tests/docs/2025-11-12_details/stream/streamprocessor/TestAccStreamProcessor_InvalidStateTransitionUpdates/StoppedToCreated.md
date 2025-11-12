# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 37) FAIL(x 5)
Success rate: 88.10%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-04 02:32](#error-2025-10-04t0232470000) |  | dev |  | 10.05s
[2025-10-05 00:49](#error-2025-10-05t0049210000) |  | qa |  | 10.02s
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev |  | 300.04s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa |  | 0.06s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev | flaky_500 | 0.05s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04

### Error 2025-10-04T02:32:47+00:00
```
2025-10-04T02:32:47.2211323Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-04T02:32:47.2212043Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-04T02:32:47.2216337Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-04T02:32:47.2229527Z   
2025-10-04T02:32:47.2229924Z     resource_test.go:259: Step 2/3 error: Error running apply: exit status 1
2025-10-04T02:32:47.2230300Z         
2025-10-04T02:32:47.2230692Z         Error: Provider produced inconsistent result after apply
2025-10-04T02:32:47.2231032Z         
2025-10-04T02:32:47.2231516Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-04T02:32:47.2232183Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-04T02:32:47.2232806Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-04T02:32:47.2233250Z         cty.StringVal("CREATED").
2025-10-04T02:32:47.2233515Z         
2025-10-04T02:32:47.2233970Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-04T02:32:47.2234398Z         issue tracker.
2025-10-04T02:32:47.2236921Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (10.55s)
```

- 2025-10-05

### Error 2025-10-05T00:49:21+00:00
```
2025-10-05T00:49:21.9260553Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-05T00:49:21.9261263Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-05T00:49:21.9265707Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-05T00:49:21.9277768Z    test_step_number=2 test_terraform_path=/home/runner/work/_temp/7e5ec1e5-a83e-4690-9c6b-f87bd77b0020/terraform test_working_directory=/tmp/plugintest532082250 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-05T00:49:21.9279122Z     resource_test.go:259: Step 2/3 error: Error running apply: exit status 1
2025-10-05T00:49:21.9279512Z         
2025-10-05T00:49:21.9279908Z         Error: Provider produced inconsistent result after apply
2025-10-05T00:49:21.9280261Z         
2025-10-05T00:49:21.9280747Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-05T00:49:21.9281417Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-05T00:49:21.9282032Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-05T00:49:21.9282482Z         cty.StringVal("CREATED").
2025-10-05T00:49:21.9282754Z         
2025-10-05T00:49:21.9283228Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-05T00:49:21.9283660Z         issue tracker.
2025-10-05T00:49:21.9286157Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (10.23s)
```

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
- 2025-11-09 PASS 5 seconds
- 2025-11-10 PASS 6 seconds
- 2025-11-11 PASS 5 seconds
- 2025-11-12 PASS 6 seconds