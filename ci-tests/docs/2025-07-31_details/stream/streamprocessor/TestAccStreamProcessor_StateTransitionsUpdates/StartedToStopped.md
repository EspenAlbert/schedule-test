# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped Test Details
# Found 33 TestRuns in dev, qa from 2025-07-01 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams | qa | flaky_500 | 31.00s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor | qa |  | 0.09s

## Timeline
- 2025-07-01 PASS 12 seconds
- 2025-07-02 PASS 9 seconds
- 2025-07-03 PASS 10 seconds
- 2025-07-04 PASS 9 seconds
- 2025-07-05 PASS 12 seconds
- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
```
2025-07-06T00:48:43.0089077Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-06T00:48:43.0089709Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-07-06T00:48:43.0097695Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-06T00:48:43.0143480Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-06T00:48:43.0144031Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0144379Z         
2025-07-06T00:48:43.0144639Z         Error: error creating resource
2025-07-06T00:48:43.0144897Z         
2025-07-06T00:48:43.0145220Z           with mongodbatlas_stream_instance.instance,
2025-07-06T00:48:43.0145865Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-07-06T00:48:43.0146462Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-07-06T00:48:43.0146768Z         
2025-07-06T00:48:43.0147248Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams
2025-07-06T00:48:43.0148004Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0148576Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0148949Z         BadRequestDetail: 
2025-07-06T00:48:43.0160203Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted test_terraform_path=/home/runner/work/_temp/571f2434-2bee-44d0-b41d-cfc3e67d82b8/terraform test_working_directory=/tmp/plugintest3822302746
2025-07-06T00:48:43.0202826Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (31.01s)
```

- 2025-07-07 PASS 9 seconds
- 2025-07-08 PASS 10 seconds
- 2025-07-09 PASS 10 seconds
- 2025-07-10
  - PASS 13 seconds
  - PASS 10 seconds
- 2025-07-11 PASS 11 seconds
- 2025-07-12 PASS 10 seconds
- 2025-07-13 PASS 14 seconds
- 2025-07-14 PASS 10 seconds
- 2025-07-15 PASS 8 seconds
- 2025-07-16 PASS 10 seconds
- 2025-07-17 PASS 8 seconds
- 2025-07-18 PASS 10 seconds
- 2025-07-19 PASS 9 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.6989712Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-20T00:53:03.6990358Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-07-20T00:53:03.6999486Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-20T00:53:03.7012851Z    test_step_number=1 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-20T00:53:03.7041282Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-20T00:53:03.7041846Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:53:03.7042206Z         
2025-07-20T00:53:03.7042474Z         Error: error creating resource
2025-07-20T00:53:03.7042739Z         
2025-07-20T00:53:03.7043463Z           with mongodbatlas_stream_processor.processor,
2025-07-20T00:53:03.7044215Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-07-20T00:53:03.7044852Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-20T00:53:03.7045173Z         
2025-07-20T00:53:03.7046038Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor
2025-07-20T00:53:03.7046854Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7047432Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7048021Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7048567Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7048947Z         BadRequestDetail: 
2025-07-20T00:53:03.7056745Z    test_step_number=1 test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated test_terraform_path=/home/runner/work/_temp/b448e69b-90e1-46c0-857c-8546e15106bc/terraform test_working_directory=/tmp/plugintest3915729128
2025-07-20T00:53:03.7130642Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (0.87s)
```

- 2025-07-21 PASS 10 seconds
- 2025-07-22 PASS 8 seconds
- 2025-07-23
  - PASS 8 seconds
  - PASS 11 seconds
- 2025-07-24 PASS 9 seconds
- 2025-07-25 PASS 11 seconds
- 2025-07-26 PASS 9 seconds
- 2025-07-27 PASS 8 seconds
- 2025-07-28 PASS 9 seconds
- 2025-07-29 PASS 8 seconds
- 2025-07-30 PASS 8 seconds
- 2025-07-31 PASS 9 seconds