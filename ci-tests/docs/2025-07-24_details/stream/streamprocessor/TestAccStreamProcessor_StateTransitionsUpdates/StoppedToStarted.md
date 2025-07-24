# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 39) FAIL(x 2)
Success rate: 95.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams | qa | flaky_500 | 30.10s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor | qa |  | 0.08s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS 13 seconds
  - PASS 13 seconds
- 2025-06-26
  - PASS 13 seconds
  - PASS 13 seconds
- 2025-06-27 PASS 13 seconds
- 2025-06-28 PASS 17 seconds
- 2025-06-29 PASS 18 seconds
- 2025-06-30 PASS 16 seconds
- 2025-07-01
  - PASS 17 seconds
  - PASS 13 seconds
  - PASS 16 seconds
  - PASS 12 seconds
  - PASS 17 seconds
  - PASS 16 seconds
  - PASS 13 seconds
  - PASS 15 seconds
- 2025-07-02 PASS 12 seconds
- 2025-07-03 PASS 13 seconds
- 2025-07-04 PASS 12 seconds
- 2025-07-05 PASS 16 seconds
- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
```
2025-07-06T00:48:43.0092672Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-06T00:48:43.0093304Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-07-06T00:48:43.0098340Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-06T00:48:43.0109987Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-06T00:48:43.0110542Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-07-06T00:48:43.0110889Z         
2025-07-06T00:48:43.0111152Z         Error: error creating resource
2025-07-06T00:48:43.0111412Z         
2025-07-06T00:48:43.0111733Z           with mongodbatlas_stream_instance.instance,
2025-07-06T00:48:43.0112492Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-07-06T00:48:43.0113095Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-07-06T00:48:43.0113401Z         
2025-07-06T00:48:43.0113881Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams
2025-07-06T00:48:43.0114535Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0115108Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0115484Z         BadRequestDetail: 
2025-07-06T00:48:43.0126367Z   
2025-07-06T00:48:43.0201567Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (30.99s)
```

- 2025-07-07 PASS 12 seconds
- 2025-07-08 PASS 13 seconds
- 2025-07-09 PASS 13 seconds
- 2025-07-10
  - PASS 17 seconds
  - PASS 13 seconds
- 2025-07-11 PASS 14 seconds
- 2025-07-12 PASS 14 seconds
- 2025-07-13 PASS 46 seconds
- 2025-07-14 PASS 14 seconds
- 2025-07-15 PASS 11 seconds
- 2025-07-16 PASS 14 seconds
- 2025-07-17 PASS 11 seconds
- 2025-07-18 PASS 14 seconds
- 2025-07-19 PASS 12 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.6993223Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-20T00:53:03.6993862Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-07-20T00:53:03.6999002Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-20T00:53:03.7013424Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-20T00:53:03.7013994Z     resource_test.go:180: Step 1/3 error: Error running apply: exit status 1
2025-07-20T00:53:03.7014357Z         
2025-07-20T00:53:03.7014629Z         Error: error creating resource
2025-07-20T00:53:03.7014887Z         
2025-07-20T00:53:03.7015229Z           with mongodbatlas_stream_processor.processor,
2025-07-20T00:53:03.7016151Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-07-20T00:53:03.7016791Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-20T00:53:03.7017117Z         
2025-07-20T00:53:03.7017856Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor
2025-07-20T00:53:03.7018799Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7019387Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7019977Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7020536Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7020913Z         BadRequestDetail: 
2025-07-20T00:53:03.7040960Z   
2025-07-20T00:53:03.7129392Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (0.78s)
```

- 2025-07-21 PASS 13 seconds
- 2025-07-22 PASS 11 seconds
- 2025-07-23
  - PASS 11 seconds
  - PASS 14 seconds
- 2025-07-24 PASS 11 seconds