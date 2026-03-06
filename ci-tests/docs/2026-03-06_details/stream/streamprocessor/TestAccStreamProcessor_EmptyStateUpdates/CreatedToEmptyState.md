# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 5)
Success rate: 86.49%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 1.02s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 0.07s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor | dev |  | 0.08s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 15.01s

### Timeline
- 2026-02-04: MISSING
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
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.589000+00:00-TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState',confidence=1.0,ts_when='27 days ago')
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

- 2026-02-07
  - FAIL a moment

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6361435Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-07T00:56:32.6362304Z     resource_test.go:270: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-02-07T00:56:32.6366829Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-07T00:56:32.6383291Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState test_terraform_path=/home/runner/work/_temp/5ba02dfd-50c6-4d59-9ca4-2e4dd9b61655/terraform test_working_directory=/tmp/plugintest2063528258
2026-02-07T00:56:32.6418349Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-07T00:56:32.6418942Z     resource_test.go:271: Step 1/2 error: Error running apply: exit status 1
2026-02-07T00:56:32.6419327Z         
2026-02-07T00:56:32.6419612Z         Error: error creating resource
2026-02-07T00:56:32.6419884Z         
2026-02-07T00:56:32.6420255Z           with mongodbatlas_stream_processor.processor,
2026-02-07T00:56:32.6420981Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-07T00:56:32.6421656Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-07T00:56:32.6422003Z         
2026-02-07T00:56:32.6422958Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor
2026-02-07T00:56:32.6423843Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-07T00:56:32.6424476Z         Detail: Streams Processor with this name (processor-created-to-) had a
2026-02-07T00:56:32.6425130Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-07T00:56:32.6425794Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-07T00:56:32.6426482Z         [processor-created-to- connection named sample_stream_solar does not exist.
2026-02-07T00:56:32.6427148Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2026-02-07T00:56:32.6444144Z   
2026-02-07T00:56:32.6454933Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.84s)
```

  - PASS 4 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 4 seconds
- 2026-02-10 PASS 4 seconds
- 2026-02-11 PASS 5 seconds
- 2026-02-12
  - PASS 4 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.8170528Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-12T18:47:26.8172164Z     resource_test.go:270: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-02-12T18:47:26.8173786Z     resource_test.go:271: Creating execution project (1): test-acc-tf-p-3584161293928838264
2026-02-12T18:47:26.8174636Z     resource_test.go:271: 
2026-02-12T18:47:26.8176227Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.8179594Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.8182920Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.8186429Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.8190030Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-02-12T18:47:26.8193757Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:271
2026-02-12T18:47:26.8195221Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.8200452Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8203167Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-12T18:47:26.8207625Z         	Messages:   	Project creation failed: test-acc-tf-p-3584161293928838264, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8250906Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.23s)
```

- 2026-02-13 PASS 4 seconds
- 2026-02-14 PASS 4 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 4 seconds
- 2026-02-17 PASS 4 seconds
- 2026-02-18 PASS 3 seconds
- 2026-02-19 PASS 4 seconds
- 2026-02-20 PASS 4 seconds
- 2026-02-21 PASS 4 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 5 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2355104Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-24T01:09:13.2356010Z     resource_test.go:270: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-02-24T01:09:13.2361724Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-24T01:09:13.2403371Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-02-24T01:09:13.2403955Z     resource_test.go:271: Step 2/2 error: Error running apply: exit status 1
2026-02-24T01:09:13.2404339Z         
2026-02-24T01:09:13.2404660Z         Error: Error modifying stream processor
2026-02-24T01:09:13.2404957Z         
2026-02-24T01:09:13.2405326Z           with mongodbatlas_stream_processor.processor,
2026-02-24T01:09:13.2406199Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-24T01:09:13.2406916Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-24T01:09:13.2407266Z         
2026-02-24T01:09:13.2407746Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2408162Z         type
2026-02-24T01:09:13.2410311Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (15.11s)
```

- 2026-02-25
  - PASS 4 seconds
  - PASS 3 seconds
- 2026-02-26 PASS 5 seconds
- 2026-02-27
  - PASS 4 seconds
  - PASS 5 seconds
- 2026-02-28 PASS 5 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 4 seconds
- 2026-03-03 PASS 4 seconds
- 2026-03-04 PASS 3 seconds
- 2026-03-05 PASS 4 seconds
- 2026-03-06 PASS 5 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 5 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 4 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 3 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 3 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 4 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 3 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 3 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
