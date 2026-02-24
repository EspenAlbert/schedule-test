# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped Test Details
# Found 34 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev |  | 1.07s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 1.05s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 1.07s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor | dev |  | 2.04s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 2.08s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 7 seconds
- 2026-01-27 PASS 6 seconds
- 2026-01-28 PASS 7 seconds
- 2026-01-29 PASS 7 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 9 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 7 seconds
- 2026-02-03
  - PASS 14 seconds
  - PASS 12 seconds
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5517182Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-04T00:54:41.5517963Z     resource_test.go:236: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-02-04T00:54:41.5519959Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-04T00:54:41.5635694Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-04T00:54:41.5636246Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-04T00:54:41.5636603Z         
2026-02-04T00:54:41.5636889Z         Error: error creating resource
2026-02-04T00:54:41.5637160Z         
2026-02-04T00:54:41.5637639Z           with mongodbatlas_stream_processor.processor,
2026-02-04T00:54:41.5638347Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-04T00:54:41.5638993Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-04T00:54:41.5639332Z         
2026-02-04T00:54:41.5640023Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor
2026-02-04T00:54:41.5640803Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-04T00:54:41.5641452Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2026-02-04T00:54:41.5642093Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-04T00:54:41.5642711Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-04T00:54:41.5643360Z         [processor-started-to-stopped connection named sample_stream_solar does not
2026-02-04T00:54:41.5643936Z         exist. Check sp.listConnections() for available connections],
2026-02-04T00:54:41.5644331Z         BadRequestDetail: 
2026-02-04T00:54:41.5659829Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-04T00:54:41.5673107Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (1.71s)
```

- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0713165Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-05T01:04:40.0713842Z     resource_test.go:236: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-02-05T01:04:40.0721534Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-05T01:04:40.0744056Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-05T01:04:40.0744798Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-05T01:04:40.0745192Z         
2026-02-05T01:04:40.0745602Z         Error: error creating resource
2026-02-05T01:04:40.0745893Z         
2026-02-05T01:04:40.0746366Z           with mongodbatlas_stream_processor.processor,
2026-02-05T01:04:40.0747245Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-05T01:04:40.0748058Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-05T01:04:40.0748417Z         
2026-02-05T01:04:40.0749346Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor
2026-02-05T01:04:40.0750348Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-05T01:04:40.0751163Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2026-02-05T01:04:40.0751989Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-05T01:04:40.0752803Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-05T01:04:40.0753821Z         [processor-started-to-stopped connection named sample_stream_solar does not
2026-02-05T01:04:40.0754524Z         exist. Check sp.listConnections() for available connections],
2026-02-05T01:04:40.0755075Z         BadRequestDetail: 
2026-02-05T01:04:40.0775495Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-05T01:04:40.0895594Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (1.52s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.567000+00:00-TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped',confidence=1.0,ts_when='17 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2026-02-06T00:56:32.5674289Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-06T00:56:32.5675510Z     resource_test.go:236: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-02-06T00:56:32.5689957Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-06T00:56:32.5855675Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-06T00:56:32.5856261Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-06T00:56:32.5856638Z         
2026-02-06T00:56:32.5856914Z         Error: error creating resource
2026-02-06T00:56:32.5857185Z         
2026-02-06T00:56:32.5857546Z           with mongodbatlas_stream_processor.processor,
2026-02-06T00:56:32.5858265Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-06T00:56:32.5858941Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-06T00:56:32.5859285Z         
2026-02-06T00:56:32.5860012Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/processor
2026-02-06T00:56:32.5860942Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-06T00:56:32.5861618Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2026-02-06T00:56:32.5862302Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-06T00:56:32.5862969Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-06T00:56:32.5863658Z         [processor-started-to-stopped connection named sample_stream_solar does not
2026-02-06T00:56:32.5864282Z         exist. Check sp.listConnections() for available connections],
2026-02-06T00:56:32.5864688Z         BadRequestDetail: 
2026-02-06T00:56:32.5881108Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted test_terraform_path=/home/runner/work/_temp/4658afad-353d-4993-8600-6b48e8658f13/terraform test_working_directory=/tmp/plugintest910092811 test_step_number=1
2026-02-06T00:56:32.5894585Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (1.71s)
```

- 2026-02-07
  - FAIL 2 seconds

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6171186Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-07T00:56:32.6171869Z     resource_test.go:236: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-02-07T00:56:32.6182165Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-07T00:56:32.6344586Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-07T00:56:32.6345185Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-07T00:56:32.6345563Z         
2026-02-07T00:56:32.6345840Z         Error: error creating resource
2026-02-07T00:56:32.6346118Z         
2026-02-07T00:56:32.6346481Z           with mongodbatlas_stream_processor.processor,
2026-02-07T00:56:32.6347202Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-07T00:56:32.6348005Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-07T00:56:32.6348369Z         
2026-02-07T00:56:32.6349114Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor
2026-02-07T00:56:32.6349952Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-07T00:56:32.6350624Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2026-02-07T00:56:32.6351299Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-07T00:56:32.6351961Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-07T00:56:32.6352822Z         [processor-started-to-stopped connection named sample_stream_solar does not
2026-02-07T00:56:32.6353471Z         exist. Check sp.listConnections() for available connections],
2026-02-07T00:56:32.6353886Z         BadRequestDetail: 
2026-02-07T00:56:32.6358338Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (2.42s)
```

  - PASS 8 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 6 seconds
- 2026-02-10 PASS 8 seconds
- 2026-02-11 PASS 9 seconds
- 2026-02-12
  - PASS 8 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.8004617Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-12T18:47:26.8005892Z     resource_test.go:236: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-02-12T18:47:26.8007170Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-7389721919775070889
2026-02-12T18:47:26.8008216Z     resource_test.go:237: 
2026-02-12T18:47:26.8009800Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.8012939Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.8016127Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.8019534Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.8022932Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-02-12T18:47:26.8026326Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-02-12T18:47:26.8027918Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.8032883Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8035585Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-12T18:47:26.8040038Z         	Messages:   	Project creation failed: test-acc-tf-p-7389721919775070889, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8126487Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (0.23s)
```

- 2026-02-13 PASS 8 seconds
- 2026-02-14 PASS 6 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 6 seconds
- 2026-02-17 PASS 7 seconds
- 2026-02-18 PASS 6 seconds
- 2026-02-19 PASS 8 seconds
- 2026-02-20 PASS 7 seconds
- 2026-02-21 PASS 6 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 7 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2248523Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-24T01:09:13.2249174Z     resource_test.go:236: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-02-24T01:09:13.2253743Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-24T01:09:13.2286889Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-24T01:09:13.2287489Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:09:13.2287878Z         
2026-02-24T01:09:13.2288167Z         Error: error creating resource
2026-02-24T01:09:13.2288451Z         
2026-02-24T01:09:13.2288826Z           with mongodbatlas_stream_processor.processor,
2026-02-24T01:09:13.2289556Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-24T01:09:13.2290425Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-24T01:09:13.2290786Z         
2026-02-24T01:09:13.2291270Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2291825Z         type
2026-02-24T01:09:13.2298662Z   
2026-02-24T01:09:13.2352912Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (2.77s)
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
- 2026-02-08 PASS 6 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 6 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 7 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 7 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
