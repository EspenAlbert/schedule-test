# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 1.01s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev | 0.09s

## Timeline
- 2025-10-14: MISSING
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
- 2025-10-31 PASS 6 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 4 seconds
- 2025-11-03 PASS 5 seconds
- 2025-11-04 PASS 4 seconds
- 2025-11-05
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1244526Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-11-06T00:51:58.1245291Z     resource_test.go:204: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-11-06T00:51:58.1256534Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-11-06T00:51:58.1270386Z   
2025-11-06T00:51:58.1336433Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-11-06T00:51:58.1337019Z     resource_test.go:205: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:51:58.1337402Z         
2025-11-06T00:51:58.1337696Z         Error: error creating resource
2025-11-06T00:51:58.1337969Z         
2025-11-06T00:51:58.1338345Z           with mongodbatlas_stream_processor.processor,
2025-11-06T00:51:58.1339039Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-11-06T00:51:58.1339691Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-11-06T00:51:58.1340040Z         
2025-11-06T00:51:58.1341013Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor
2025-11-06T00:51:58.1341849Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-11-06T00:51:58.1342507Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2025-11-06T00:51:58.1343127Z         problem occur: no healthy upstream. Reason: Bad Request. Params:
2025-11-06T00:51:58.1343739Z         [processor-created-to-created no healthy upstream], BadRequestDetail: 
2025-11-06T00:51:58.1363295Z   
2025-11-06T00:51:58.1390369Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (0.86s)
```

- 2025-11-07 PASS 5 seconds
- 2025-11-08 PASS 4 seconds
- 2025-11-09 PASS 5 seconds
- 2025-11-10 PASS 5 seconds
- 2025-11-11 PASS 4 seconds
- 2025-11-12 PASS 6 seconds
- 2025-11-13
  - PASS 6 seconds
  - PASS 5 seconds