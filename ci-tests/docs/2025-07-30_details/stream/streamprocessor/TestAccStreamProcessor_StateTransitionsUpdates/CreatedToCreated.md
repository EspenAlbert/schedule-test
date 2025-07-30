# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-6684480946218533807--CREATED-CREATED | qa | flaky_500 | 37.01s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor | qa |  | 0.09s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 9 seconds
  - PASS 6 seconds
  - PASS 9 seconds
  - PASS 6 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 6 seconds
  - PASS 8 seconds
- 2025-07-02 PASS 6 seconds
- 2025-07-03 PASS 7 seconds
- 2025-07-04 PASS 6 seconds
- 2025-07-05 PASS 8 seconds
- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
```
2025-07-06T00:48:43.0085460Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-06T00:48:43.0086189Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-07-06T00:48:43.0096139Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-06T00:48:43.0196321Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-06T00:48:43.0196991Z     resource_test.go:172: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:48:43.0197543Z         
2025-07-06T00:48:43.0197820Z         Error: error during resource delete
2025-07-06T00:48:43.0198087Z         
2025-07-06T00:48:43.0198843Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-6684480946218533807--CREATED-CREATED
2025-07-06T00:48:43.0199667Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-06T00:48:43.0200251Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0200653Z         BadRequestDetail: 
2025-07-06T00:48:43.0204818Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (37.11s)
```

- 2025-07-07 PASS 7 seconds
- 2025-07-08 PASS 7 seconds
- 2025-07-09 PASS 7 seconds
- 2025-07-10
  - PASS 10 seconds
  - PASS 7 seconds
- 2025-07-11 PASS 8 seconds
- 2025-07-12 PASS 7 seconds
- 2025-07-13 PASS 11 seconds
- 2025-07-14 PASS 6 seconds
- 2025-07-15 PASS 5 seconds
- 2025-07-16 PASS 6 seconds
- 2025-07-17 PASS 5 seconds
- 2025-07-18 PASS 6 seconds
- 2025-07-19 PASS 5 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.6986165Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-20T00:53:03.6986902Z     resource_test.go:179: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-07-20T00:53:03.6997073Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-20T00:53:03.7057804Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-20T00:53:03.7058368Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:53:03.7058723Z         
2025-07-20T00:53:03.7058990Z         Error: error creating resource
2025-07-20T00:53:03.7059251Z         
2025-07-20T00:53:03.7059592Z           with mongodbatlas_stream_processor.processor,
2025-07-20T00:53:03.7060261Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-07-20T00:53:03.7060887Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-20T00:53:03.7061204Z         
2025-07-20T00:53:03.7061932Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor
2025-07-20T00:53:03.7062750Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7063325Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7063918Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7064469Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7064848Z         BadRequestDetail: 
2025-07-20T00:53:03.7089185Z   
2025-07-20T00:53:03.7130022Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (0.86s)
```

- 2025-07-21 PASS 6 seconds
- 2025-07-22 PASS 5 seconds
- 2025-07-23
  - PASS 5 seconds
  - PASS 9 seconds
- 2025-07-24 PASS 5 seconds
- 2025-07-25 PASS 6 seconds
- 2025-07-26 PASS 6 seconds
- 2025-07-27 PASS 5 seconds
- 2025-07-28 PASS 4 seconds
- 2025-07-29 PASS 4 seconds
- 2025-07-30 PASS 5 seconds