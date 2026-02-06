# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev |  | 0.07s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 1.02s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 0.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 4 seconds
- 2026-01-09 PASS 3 seconds
- 2026-01-10 PASS 4 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 4 seconds
- 2026-01-13 PASS 3 seconds
- 2026-01-14 PASS 4 seconds
- 2026-01-15 PASS 4 seconds
- 2026-01-16 PASS 3 seconds
- 2026-01-17 PASS 3 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 5 seconds
- 2026-01-20 PASS 4 seconds
- 2026-01-21 PASS 4 seconds
- 2026-01-22 PASS 4 seconds
- 2026-01-23 PASS 3 seconds
- 2026-01-24 PASS 4 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 4 seconds
- 2026-01-27 PASS 4 seconds
- 2026-01-28 PASS 3 seconds
- 2026-01-29 PASS 4 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 4 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 4 seconds
- 2026-02-03
  - PASS 5 seconds
  - PASS 4 seconds
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5675437Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-04T00:54:41.5676433Z     resource_test.go:270: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-02-04T00:54:41.5682434Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-04T00:54:41.5725955Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-04T00:54:41.5726489Z     resource_test.go:271: Step 1/2 error: Error running apply: exit status 1
2026-02-04T00:54:41.5726854Z         
2026-02-04T00:54:41.5727130Z         Error: error creating resource
2026-02-04T00:54:41.5727402Z         
2026-02-04T00:54:41.5727814Z           with mongodbatlas_stream_processor.processor,
2026-02-04T00:54:41.5728476Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-04T00:54:41.5729105Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-04T00:54:41.5729433Z         
2026-02-04T00:54:41.5730107Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor
2026-02-04T00:54:41.5730866Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-04T00:54:41.5731468Z         Detail: Streams Processor with this name (processor-created-to-) had a
2026-02-04T00:54:41.5732136Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-04T00:54:41.5732763Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-04T00:54:41.5733395Z         [processor-created-to- connection named sample_stream_solar does not exist.
2026-02-04T00:54:41.5734028Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2026-02-04T00:54:41.5749369Z   
2026-02-04T00:54:41.5759454Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.69s)
```

- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0899816Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-05T01:04:40.0900714Z     resource_test.go:270: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-02-05T01:04:40.0906325Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-05T01:04:40.0976552Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-05T01:04:40.0977132Z     resource_test.go:271: Step 1/2 error: Error running apply: exit status 1
2026-02-05T01:04:40.0977510Z         
2026-02-05T01:04:40.0977797Z         Error: error creating resource
2026-02-05T01:04:40.0978071Z         
2026-02-05T01:04:40.0978442Z           with mongodbatlas_stream_processor.processor,
2026-02-05T01:04:40.0979167Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-05T01:04:40.0979862Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-05T01:04:40.0980209Z         
2026-02-05T01:04:40.0980960Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor
2026-02-05T01:04:40.0981796Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-05T01:04:40.0982440Z         Detail: Streams Processor with this name (processor-created-to-) had a
2026-02-05T01:04:40.0983201Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-05T01:04:40.0983873Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-05T01:04:40.0984747Z         [processor-created-to- connection named sample_stream_solar does not exist.
2026-02-05T01:04:40.0985566Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2026-02-05T01:04:40.0987936Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (1.17s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.589000+00:00-TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState',confidence=1.0,ts_when='10 minutes ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2026-02-06T00:56:32.5896814Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-06T00:56:32.5897713Z     resource_test.go:270: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-02-06T00:56:32.5903447Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-06T00:56:32.5954641Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-06T00:56:32.5955215Z     resource_test.go:271: Step 1/2 error: Error running apply: exit status 1
2026-02-06T00:56:32.5955607Z         
2026-02-06T00:56:32.5955890Z         Error: error creating resource
2026-02-06T00:56:32.5956173Z         
2026-02-06T00:56:32.5956541Z           with mongodbatlas_stream_processor.processor,
2026-02-06T00:56:32.5957267Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-06T00:56:32.5957956Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-06T00:56:32.5958298Z         
2026-02-06T00:56:32.5959037Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/processor
2026-02-06T00:56:32.5959872Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-06T00:56:32.5960619Z         Detail: Streams Processor with this name (processor-created-to-) had a
2026-02-06T00:56:32.5961272Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-06T00:56:32.5961954Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-06T00:56:32.5962650Z         [processor-created-to- connection named sample_stream_solar does not exist.
2026-02-06T00:56:32.5963327Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2026-02-06T00:56:32.5973474Z   
2026-02-06T00:56:32.5984410Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.71s)
```


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 4 seconds
  - PASS 3 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 4 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 3 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 4 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 4 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 5 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
