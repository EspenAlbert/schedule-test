# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev |  | 1.02s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 1.02s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 0.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 7 seconds
- 2026-01-09 PASS 6 seconds
- 2026-01-10 PASS 7 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 7 seconds
- 2026-01-13 PASS 6 seconds
- 2026-01-14 PASS 6 seconds
- 2026-01-15 PASS 6 seconds
- 2026-01-16 PASS 6 seconds
- 2026-01-17 PASS 6 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 7 seconds
- 2026-01-20 PASS 7 seconds
- 2026-01-21 PASS 7 seconds
- 2026-01-22 PASS 7 seconds
- 2026-01-23 PASS 6 seconds
- 2026-01-24 PASS 7 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 6 seconds
- 2026-01-27 PASS 6 seconds
- 2026-01-28 PASS 6 seconds
- 2026-01-29 PASS 6 seconds
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
2026-02-04T00:54:41.5678058Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-04T00:54:41.5679008Z     resource_test.go:270: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-02-04T00:54:41.5683517Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-04T00:54:41.5700713Z   
2026-02-04T00:54:41.5749684Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-04T00:54:41.5750212Z     resource_test.go:271: Step 1/2 error: Error running apply: exit status 1
2026-02-04T00:54:41.5750581Z         
2026-02-04T00:54:41.5750857Z         Error: error creating resource
2026-02-04T00:54:41.5751137Z         
2026-02-04T00:54:41.5751481Z           with mongodbatlas_stream_processor.processor,
2026-02-04T00:54:41.5752144Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-04T00:54:41.5752763Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-04T00:54:41.5753098Z         
2026-02-04T00:54:41.5753774Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor
2026-02-04T00:54:41.5754617Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-04T00:54:41.5755207Z         Detail: Streams Processor with this name (processor-started-to-) had a
2026-02-04T00:54:41.5755822Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-04T00:54:41.5756447Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-04T00:54:41.5757081Z         [processor-started-to- connection named sample_stream_solar does not exist.
2026-02-04T00:54:41.5757862Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2026-02-04T00:54:41.5760043Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (1.17s)
```

- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0901963Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-05T01:04:40.0902962Z     resource_test.go:270: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-02-05T01:04:40.0907303Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-05T01:04:40.0924277Z   
2026-02-05T01:04:40.0957355Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-05T01:04:40.0957929Z     resource_test.go:271: Step 1/2 error: Error running apply: exit status 1
2026-02-05T01:04:40.0958307Z         
2026-02-05T01:04:40.0958583Z         Error: error creating resource
2026-02-05T01:04:40.0958855Z         
2026-02-05T01:04:40.0959215Z           with mongodbatlas_stream_processor.processor,
2026-02-05T01:04:40.0959938Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-05T01:04:40.0960615Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-05T01:04:40.0960958Z         
2026-02-05T01:04:40.0961828Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor
2026-02-05T01:04:40.0962670Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-05T01:04:40.0963418Z         Detail: Streams Processor with this name (processor-started-to-) had a
2026-02-05T01:04:40.0964066Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-05T01:04:40.0964738Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-05T01:04:40.0965426Z         [processor-started-to- connection named sample_stream_solar does not exist.
2026-02-05T01:04:40.0966100Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2026-02-05T01:04:40.0975603Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState test_terraform_path=/home/runner/work/_temp/0be78826-63c2-4d6e-a87b-d6c482ad4b9d/terraform test_step_number=1
2026-02-05T01:04:40.0988705Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (1.17s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.589000+00:00-TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState',confidence=1.0,ts_when='10 minutes ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2026-02-06T00:56:32.5899091Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-06T00:56:32.5899977Z     resource_test.go:270: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-02-06T00:56:32.5904430Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-06T00:56:32.5920957Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-06T00:56:32.5921549Z     resource_test.go:271: Step 1/2 error: Error running apply: exit status 1
2026-02-06T00:56:32.5921924Z         
2026-02-06T00:56:32.5922221Z         Error: error creating resource
2026-02-06T00:56:32.5922495Z         
2026-02-06T00:56:32.5922863Z           with mongodbatlas_stream_processor.processor,
2026-02-06T00:56:32.5923697Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-06T00:56:32.5924441Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-06T00:56:32.5924785Z         
2026-02-06T00:56:32.5925526Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/processor
2026-02-06T00:56:32.5926672Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-06T00:56:32.5927330Z         Detail: Streams Processor with this name (processor-started-to-) had a
2026-02-06T00:56:32.5927984Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-06T00:56:32.5928658Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-06T00:56:32.5929406Z         [processor-started-to- connection named sample_stream_solar does not exist.
2026-02-06T00:56:32.5930083Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2026-02-06T00:56:32.5954314Z   
2026-02-06T00:56:32.5983776Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.71s)
```


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 7 seconds
  - PASS 6 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 8 seconds
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
