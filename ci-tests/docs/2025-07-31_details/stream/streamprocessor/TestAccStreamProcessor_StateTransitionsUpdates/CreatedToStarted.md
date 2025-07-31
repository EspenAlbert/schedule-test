# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted Test Details
# Found 33 TestRuns in dev, qa from 2025-07-01 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams | qa | flaky_500 | 31.00s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor | qa |  | 0.09s

## Timeline
- 2025-07-01 PASS 9 seconds
- 2025-07-02 PASS 8 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 8 seconds
- 2025-07-05 PASS 10 seconds
- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
```
2025-07-06T00:48:43.0087288Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-06T00:48:43.0088044Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-07-06T00:48:43.0098817Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-06T00:48:43.0109635Z    test_step_number=1
2025-07-06T00:48:43.0126677Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-06T00:48:43.0127238Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0127699Z         
2025-07-06T00:48:43.0127962Z         Error: error creating resource
2025-07-06T00:48:43.0128224Z         
2025-07-06T00:48:43.0128547Z           with mongodbatlas_stream_instance.instance,
2025-07-06T00:48:43.0129187Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-07-06T00:48:43.0129780Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-07-06T00:48:43.0130094Z         
2025-07-06T00:48:43.0130574Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams
2025-07-06T00:48:43.0131231Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0131802Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0132176Z         BadRequestDetail: 
2025-07-06T00:48:43.0143164Z   
2025-07-06T00:48:43.0202204Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (31.00s)
```

- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 9 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10
  - PASS 11 seconds
  - PASS 9 seconds
- 2025-07-11 PASS 10 seconds
- 2025-07-12 PASS 9 seconds
- 2025-07-13 PASS 14 seconds
- 2025-07-14 PASS 9 seconds
- 2025-07-15 PASS 6 seconds
- 2025-07-16 PASS 9 seconds
- 2025-07-17 PASS 7 seconds
- 2025-07-18 PASS 8 seconds
- 2025-07-19 PASS 8 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.6988016Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-20T00:53:03.6988650Z     resource_test.go:179: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-07-20T00:53:03.6998524Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-20T00:53:03.7105284Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-20T00:53:03.7105970Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:53:03.7106317Z         
2025-07-20T00:53:03.7106585Z         Error: error creating resource
2025-07-20T00:53:03.7106842Z         
2025-07-20T00:53:03.7107184Z           with mongodbatlas_stream_processor.processor,
2025-07-20T00:53:03.7107851Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-07-20T00:53:03.7108475Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-20T00:53:03.7108792Z         
2025-07-20T00:53:03.7109523Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor
2025-07-20T00:53:03.7110331Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7110910Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7111498Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7112043Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7112417Z         BadRequestDetail: 
2025-07-20T00:53:03.7121013Z   
2025-07-20T00:53:03.7131876Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (0.88s)
```

- 2025-07-21 PASS 9 seconds
- 2025-07-22 PASS 7 seconds
- 2025-07-23
  - PASS 7 seconds
  - PASS 12 seconds
- 2025-07-24 PASS 7 seconds
- 2025-07-25 PASS 8 seconds
- 2025-07-26 PASS 8 seconds
- 2025-07-27 PASS 7 seconds
- 2025-07-28 PASS 6 seconds
- 2025-07-29 PASS 6 seconds
- 2025-07-30 PASS 6 seconds
- 2025-07-31 PASS 8 seconds