# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev |  | 0.07s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 0.06s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 0.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 7 seconds
- 2026-01-09 PASS 6 seconds
- 2026-01-10 PASS 7 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 8 seconds
- 2026-01-13 PASS 6 seconds
- 2026-01-14 PASS 7 seconds
- 2026-01-15 PASS 7 seconds
- 2026-01-16 PASS 5 seconds
- 2026-01-17 PASS 6 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 8 seconds
- 2026-01-20 PASS 7 seconds
- 2026-01-21 PASS 7 seconds
- 2026-01-22 PASS 7 seconds
- 2026-01-23 PASS 6 seconds
- 2026-01-24 PASS 7 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 5 seconds
- 2026-01-27 PASS 7 seconds
- 2026-01-28 PASS 6 seconds
- 2026-01-29 PASS 7 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 7 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 7 seconds
- 2026-02-03
  - PASS 8 seconds
  - PASS 8 seconds
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5680242Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-04T00:54:41.5681105Z     resource_test.go:270: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-02-04T00:54:41.5682948Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-04T00:54:41.5701154Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-04T00:54:41.5701869Z     resource_test.go:271: Step 1/3 error: Error running apply: exit status 1
2026-02-04T00:54:41.5702228Z         
2026-02-04T00:54:41.5702641Z         Error: error creating resource
2026-02-04T00:54:41.5702908Z         
2026-02-04T00:54:41.5703317Z           with mongodbatlas_stream_processor.processor,
2026-02-04T00:54:41.5704024Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-04T00:54:41.5704716Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-04T00:54:41.5705120Z         
2026-02-04T00:54:41.5705908Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor
2026-02-04T00:54:41.5706727Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-04T00:54:41.5707328Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2026-02-04T00:54:41.5708021Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-04T00:54:41.5708818Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-04T00:54:41.5709472Z         [processor-stopped-to- connection named sample_stream_solar does not exist.
2026-02-04T00:54:41.5710103Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2026-02-04T00:54:41.5725644Z   
2026-02-04T00:54:41.5758861Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.69s)
```

- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0904200Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-05T01:04:40.0905084Z     resource_test.go:270: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-02-05T01:04:40.0906814Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-05T01:04:40.0924598Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-05T01:04:40.0925165Z     resource_test.go:271: Step 1/3 error: Error running apply: exit status 1
2026-02-05T01:04:40.0925541Z         
2026-02-05T01:04:40.0925815Z         Error: error creating resource
2026-02-05T01:04:40.0926083Z         
2026-02-05T01:04:40.0926453Z           with mongodbatlas_stream_processor.processor,
2026-02-05T01:04:40.0927176Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-05T01:04:40.0927859Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-05T01:04:40.0928198Z         
2026-02-05T01:04:40.0928946Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor
2026-02-05T01:04:40.0929792Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-05T01:04:40.0930436Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2026-02-05T01:04:40.0931082Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-05T01:04:40.0931755Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-05T01:04:40.0932448Z         [processor-stopped-to- connection named sample_stream_solar does not exist.
2026-02-05T01:04:40.0933260Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2026-02-05T01:04:40.0957040Z   
2026-02-05T01:04:40.0987142Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.64s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.590000+00:00-TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState',confidence=1.0,ts_when='10 minutes ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2026-02-06T00:56:32.5901329Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-06T00:56:32.5902206Z     resource_test.go:270: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-02-06T00:56:32.5903946Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-06T00:56:32.5973792Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-06T00:56:32.5974493Z     resource_test.go:271: Step 1/3 error: Error running apply: exit status 1
2026-02-06T00:56:32.5974880Z         
2026-02-06T00:56:32.5975161Z         Error: error creating resource
2026-02-06T00:56:32.5975429Z         
2026-02-06T00:56:32.5975795Z           with mongodbatlas_stream_processor.processor,
2026-02-06T00:56:32.5976520Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-06T00:56:32.5977195Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-06T00:56:32.5977540Z         
2026-02-06T00:56:32.5978268Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/processor
2026-02-06T00:56:32.5979099Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-06T00:56:32.5979788Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2026-02-06T00:56:32.5980637Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-06T00:56:32.5981334Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-06T00:56:32.5982029Z         [processor-stopped-to- connection named sample_stream_solar does not exist.
2026-02-06T00:56:32.5982716Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2026-02-06T00:56:32.5985154Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.71s)
```


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 7 seconds
  - PASS 5 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 6 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 6 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 6 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 7 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 6 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 8 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
