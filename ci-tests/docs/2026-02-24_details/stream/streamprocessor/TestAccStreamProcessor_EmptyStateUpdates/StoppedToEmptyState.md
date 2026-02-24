# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState Test Details
# Found 34 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev |  | 0.07s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 0.06s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 0.07s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor | dev |  | 0.08s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 2.04s

### Timeline
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
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.590000+00:00-TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState',confidence=1.0,ts_when='17 days ago')
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

- 2026-02-07
  - FAIL a moment

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6359261Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-07T00:56:32.6360172Z     resource_test.go:270: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-02-07T00:56:32.6365841Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-07T00:56:32.6384323Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-07T00:56:32.6384900Z     resource_test.go:271: Step 1/3 error: Error running apply: exit status 1
2026-02-07T00:56:32.6385284Z         
2026-02-07T00:56:32.6385566Z         Error: error creating resource
2026-02-07T00:56:32.6385840Z         
2026-02-07T00:56:32.6386200Z           with mongodbatlas_stream_processor.processor,
2026-02-07T00:56:32.6386916Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-07T00:56:32.6387596Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-07T00:56:32.6387939Z         
2026-02-07T00:56:32.6388683Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor
2026-02-07T00:56:32.6389524Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-07T00:56:32.6390169Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2026-02-07T00:56:32.6390824Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-07T00:56:32.6391494Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-07T00:56:32.6392181Z         [processor-stopped-to- connection named sample_stream_solar does not exist.
2026-02-07T00:56:32.6393031Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2026-02-07T00:56:32.6418027Z   
2026-02-07T00:56:32.6454173Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.81s)
```

  - PASS 6 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 7 seconds
- 2026-02-10 PASS 7 seconds
- 2026-02-11 PASS 7 seconds
- 2026-02-12
  - PASS 7 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.8130985Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-12T18:47:26.8132604Z     resource_test.go:270: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-02-12T18:47:26.8134228Z     resource_test.go:271: Creating execution project (1): test-acc-tf-p-3417787509453499978
2026-02-12T18:47:26.8135079Z     resource_test.go:271: 
2026-02-12T18:47:26.8136685Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.8140149Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.8143466Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.8146734Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.8150296Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-02-12T18:47:26.8153804Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:271
2026-02-12T18:47:26.8155219Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.8160409Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8163108Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-12T18:47:26.8167623Z         	Messages:   	Project creation failed: test-acc-tf-p-3417787509453499978, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8249733Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.22s)
```

- 2026-02-13 PASS 8 seconds
- 2026-02-14 PASS 7 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 6 seconds
- 2026-02-17 PASS 7 seconds
- 2026-02-18 PASS 6 seconds
- 2026-02-19 PASS 7 seconds
- 2026-02-20 PASS 7 seconds
- 2026-02-21 PASS 7 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 9 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2359536Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-24T01:09:13.2360394Z     resource_test.go:270: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-02-24T01:09:13.2362223Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-24T01:09:13.2388093Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-02-24T01:09:13.2388669Z     resource_test.go:271: Step 1/3 error: Error running apply: exit status 1
2026-02-24T01:09:13.2389049Z         
2026-02-24T01:09:13.2389860Z         Error: Error starting stream processor. You need to fix the processor and import the resource or delete it manually and re-run terraform apply.
2026-02-24T01:09:13.2390472Z         
2026-02-24T01:09:13.2390824Z           with mongodbatlas_stream_processor.processor,
2026-02-24T01:09:13.2391754Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-24T01:09:13.2392444Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-24T01:09:13.2392799Z         
2026-02-24T01:09:13.2393276Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2393697Z         type
2026-02-24T01:09:13.2403052Z   
2026-02-24T01:09:13.2409040Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (2.43s)
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
- 2026-02-15 PASS 6 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 5 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 7 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
