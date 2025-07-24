# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 39) FAIL(x 2)
Success rate: 95.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-5597241439469417964-STARTED-STOPPED-STOPPED/connections | qa | flaky_500 | 31.05s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor | qa |  | 0.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS 11 seconds
  - PASS 11 seconds
- 2025-06-26
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-06-27 PASS 11 seconds
- 2025-06-28 PASS 15 seconds
- 2025-06-29 PASS 16 seconds
- 2025-06-30 PASS 14 seconds
- 2025-07-01
  - PASS 14 seconds
  - PASS 11 seconds
  - PASS 15 seconds
  - PASS 10 seconds
  - PASS 15 seconds
  - PASS 15 seconds
  - PASS 10 seconds
  - PASS 14 seconds
- 2025-07-02 PASS 11 seconds
- 2025-07-03 PASS 12 seconds
- 2025-07-04 PASS 11 seconds
- 2025-07-05 PASS 14 seconds
- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
```
2025-07-06T00:48:43.0094336Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-06T00:48:43.0095043Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-07-06T00:48:43.0097099Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-06T00:48:43.0179546Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-06T00:48:43.0180105Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-07-06T00:48:43.0180452Z         
2025-07-06T00:48:43.0180832Z         Error: error creating resource
2025-07-06T00:48:43.0181102Z         
2025-07-06T00:48:43.0181435Z           with mongodbatlas_stream_connection.sample,
2025-07-06T00:48:43.0182079Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "sample":
2025-07-06T00:48:43.0182680Z           23: 		resource "mongodbatlas_stream_connection" "sample" {
2025-07-06T00:48:43.0182991Z         
2025-07-06T00:48:43.0183858Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-5597241439469417964-STARTED-STOPPED-STOPPED/connections
2025-07-06T00:48:43.0184778Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0185338Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0185719Z         BadRequestDetail: 
2025-07-06T00:48:43.0195774Z    test_terraform_path=/home/runner/work/_temp/571f2434-2bee-44d0-b41d-cfc3e67d82b8/terraform
2025-07-06T00:48:43.0203456Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (31.48s)
```

- 2025-07-07 PASS 11 seconds
- 2025-07-08 PASS 11 seconds
- 2025-07-09 PASS 11 seconds
- 2025-07-10
  - PASS 15 seconds
  - PASS 11 seconds
- 2025-07-11 PASS 12 seconds
- 2025-07-12 PASS 11 seconds
- 2025-07-13 PASS a minute
- 2025-07-14 PASS 11 seconds
- 2025-07-15 PASS 10 seconds
- 2025-07-16 PASS 12 seconds
- 2025-07-17 PASS 10 seconds
- 2025-07-18 PASS 12 seconds
- 2025-07-19 PASS 10 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.6994894Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-20T00:53:03.6995913Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-07-20T00:53:03.6998046Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-20T00:53:03.7121325Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-20T00:53:03.7121878Z     resource_test.go:180: Step 1/3 error: Error running apply: exit status 1
2025-07-20T00:53:03.7122264Z         
2025-07-20T00:53:03.7122531Z         Error: error creating resource
2025-07-20T00:53:03.7122789Z         
2025-07-20T00:53:03.7123131Z           with mongodbatlas_stream_processor.processor,
2025-07-20T00:53:03.7123800Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-07-20T00:53:03.7124425Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-20T00:53:03.7124743Z         
2025-07-20T00:53:03.7125470Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor
2025-07-20T00:53:03.7126405Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7126977Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7127566Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7128114Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7128484Z         BadRequestDetail: 
2025-07-20T00:53:03.7132489Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (0.88s)
```

- 2025-07-21 PASS 11 seconds
- 2025-07-22 PASS 9 seconds
- 2025-07-23
  - PASS 9 seconds
  - PASS 12 seconds
- 2025-07-24 PASS 10 seconds