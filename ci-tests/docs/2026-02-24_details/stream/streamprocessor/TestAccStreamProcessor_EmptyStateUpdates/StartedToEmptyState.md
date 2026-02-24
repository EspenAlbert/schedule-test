# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState Test Details
# Found 34 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev |  | 1.02s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 1.02s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 0.07s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor | dev |  | 0.09s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 2.04s

### Timeline
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
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.589000+00:00-TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState',confidence=1.0,ts_when='17 days ago')
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

- 2026-02-07
  - FAIL a moment

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6363739Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-07T00:56:32.6364604Z     resource_test.go:270: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-02-07T00:56:32.6366335Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-07T00:56:32.6444460Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-07T00:56:32.6445031Z     resource_test.go:271: Step 1/2 error: Error running apply: exit status 1
2026-02-07T00:56:32.6445412Z         
2026-02-07T00:56:32.6445685Z         Error: error creating resource
2026-02-07T00:56:32.6445959Z         
2026-02-07T00:56:32.6446318Z           with mongodbatlas_stream_processor.processor,
2026-02-07T00:56:32.6447033Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-07T00:56:32.6447703Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-07T00:56:32.6448050Z         
2026-02-07T00:56:32.6448788Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor
2026-02-07T00:56:32.6449626Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-07T00:56:32.6450259Z         Detail: Streams Processor with this name (processor-started-to-) had a
2026-02-07T00:56:32.6450905Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-07T00:56:32.6451573Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-07T00:56:32.6452252Z         [processor-started-to- connection named sample_stream_solar does not exist.
2026-02-07T00:56:32.6453094Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2026-02-07T00:56:32.6455555Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.85s)
```

  - PASS 7 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 6 seconds
- 2026-02-10 PASS 7 seconds
- 2026-02-11 PASS 8 seconds
- 2026-02-12
  - PASS 7 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.8210486Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-12T18:47:26.8212051Z     resource_test.go:270: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-02-12T18:47:26.8213671Z     resource_test.go:271: Creating execution project (1): test-acc-tf-p-1133689731742389907
2026-02-12T18:47:26.8214547Z     resource_test.go:271: 
2026-02-12T18:47:26.8216142Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.8219453Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.8222752Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.8226039Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.8229567Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-02-12T18:47:26.8232744Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:271
2026-02-12T18:47:26.8234044Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.8238846Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8241324Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-12T18:47:26.8245375Z         	Messages:   	Project creation failed: test-acc-tf-p-1133689731742389907, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8252080Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.22s)
```

- 2026-02-13 PASS 8 seconds
- 2026-02-14 PASS 8 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 6 seconds
- 2026-02-17 PASS 7 seconds
- 2026-02-18 PASS 6 seconds
- 2026-02-19 PASS 7 seconds
- 2026-02-20 PASS 7 seconds
- 2026-02-21 PASS 6 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 7 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2357277Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-24T01:09:13.2358321Z     resource_test.go:270: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-02-24T01:09:13.2362711Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-02-24T01:09:13.2376161Z   
2026-02-24T01:09:13.2376556Z     resource_test.go:271: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:09:13.2383078Z    test_terraform_path=/home/runner/work/_temp/aaedc82b-f5f9-4ae8-bb98-eec7ab7049ef/terraform test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState test_working_directory=/tmp/plugintest1284012502 test_step_number=1
2026-02-24T01:09:13.2384040Z         
2026-02-24T01:09:13.2384318Z         Error: error creating resource
2026-02-24T01:09:13.2384595Z         
2026-02-24T01:09:13.2384964Z           with mongodbatlas_stream_processor.processor,
2026-02-24T01:09:13.2385686Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-24T01:09:13.2386358Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-24T01:09:13.2386717Z         
2026-02-24T01:09:13.2387191Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2387753Z         type
2026-02-24T01:09:13.2409675Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (2.43s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
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
- 2026-02-07: MISSING
- 2026-02-08 PASS 7 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 7 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 6 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 7 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
