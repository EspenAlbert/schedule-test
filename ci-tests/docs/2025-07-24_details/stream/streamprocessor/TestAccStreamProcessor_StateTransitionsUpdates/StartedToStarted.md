# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 39) FAIL(x 2)
Success rate: 95.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-2928671464252808851--STARTED-STARTED/connections | qa | flaky_500 | 31.05s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor | qa |  | 0.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS 12 seconds
  - PASS 12 seconds
- 2025-06-26
  - PASS 12 seconds
  - PASS 12 seconds
- 2025-06-27 PASS 12 seconds
- 2025-06-28 PASS 14 seconds
- 2025-06-29 PASS 16 seconds
- 2025-06-30 PASS 14 seconds
- 2025-07-01
  - PASS 14 seconds
  - PASS 11 seconds
  - PASS 14 seconds
  - PASS 12 seconds
  - PASS 14 seconds
  - PASS 14 seconds
  - PASS 12 seconds
  - PASS 14 seconds
- 2025-07-02 PASS 11 seconds
- 2025-07-03 PASS 12 seconds
- 2025-07-04 PASS 12 seconds
- 2025-07-05 PASS 14 seconds
- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
```
2025-07-06T00:48:43.0090868Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-06T00:48:43.0091580Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-07-06T00:48:43.0096620Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-06T00:48:43.0161195Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-06T00:48:43.0161756Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0162104Z         
2025-07-06T00:48:43.0162366Z         Error: error creating resource
2025-07-06T00:48:43.0162624Z         
2025-07-06T00:48:43.0162956Z           with mongodbatlas_stream_connection.sample,
2025-07-06T00:48:43.0163605Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "sample":
2025-07-06T00:48:43.0164206Z           23: 		resource "mongodbatlas_stream_connection" "sample" {
2025-07-06T00:48:43.0164522Z         
2025-07-06T00:48:43.0165339Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-2928671464252808851--STARTED-STARTED/connections
2025-07-06T00:48:43.0166348Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0166915Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0167287Z         BadRequestDetail: 
2025-07-06T00:48:43.0179235Z   
2025-07-06T00:48:43.0204193Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (31.54s)
```

- 2025-07-07 PASS 12 seconds
- 2025-07-08 PASS 12 seconds
- 2025-07-09 PASS 12 seconds
- 2025-07-10
  - PASS 16 seconds
  - PASS 12 seconds
- 2025-07-11 PASS 13 seconds
- 2025-07-12 PASS 12 seconds
- 2025-07-13 PASS a minute
- 2025-07-14 PASS 12 seconds
- 2025-07-15 PASS 10 seconds
- 2025-07-16 PASS 12 seconds
- 2025-07-17 PASS 10 seconds
- 2025-07-18 PASS 12 seconds
- 2025-07-19 PASS 11 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.6991394Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-20T00:53:03.6992116Z     resource_test.go:179: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-07-20T00:53:03.6997565Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-20T00:53:03.7089497Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-20T00:53:03.7090067Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:53:03.7090424Z         
2025-07-20T00:53:03.7090810Z         Error: error creating resource
2025-07-20T00:53:03.7091085Z         
2025-07-20T00:53:03.7091430Z           with mongodbatlas_stream_processor.processor,
2025-07-20T00:53:03.7092095Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-07-20T00:53:03.7092723Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-20T00:53:03.7093046Z         
2025-07-20T00:53:03.7093780Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor
2025-07-20T00:53:03.7094590Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7095173Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7095984Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7096541Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7096924Z         BadRequestDetail: 
2025-07-20T00:53:03.7104809Z    test_working_directory=/tmp/plugintest2079415206 test_step_number=1
2025-07-20T00:53:03.7131258Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (0.88s)
```

- 2025-07-21 PASS 12 seconds
- 2025-07-22 PASS 10 seconds
- 2025-07-23
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-07-24 PASS 10 seconds