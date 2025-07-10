# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 124) FAIL(x 8)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-16 00:45](#error-2025-04-16t0045120000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-6200318131627480183--CREATED-STARTED/processor | dev | flaky_500 | 1.07s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-1511071137522432797--CREATED-STARTED/processor | qa | flaky_500 | 3.06s
[2025-04-16 14:37](#error-2025-04-16t1437270000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-1622193010899826147--CREATED-STARTED/processor | dev | flaky_500 | 2.02s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-9209430034348822208--CREATED-STARTED/processor | dev | flaky_500 | 1.06s
[2025-05-04 00:47](#error-2025-05-04t0047220000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-6313859029023430806--CREATED-STARTED/processor | qa |  | 2.04s
[2025-05-11 00:30](#error-2025-05-11t0030000000) |  | qa |  | 0.00s
[2025-05-23 00:49](#error-2025-05-23t0049480000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-6147856931464616588--CREATED-STARTED/processor | dev |  | 5.04s
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams | qa | flaky_500 | 31.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 12 seconds
- 2025-04-13 PASS 12 seconds
- 2025-04-14 PASS 14 seconds
- 2025-04-15 PASS 11 seconds
- 2025-04-16
  - FAIL a second

### Error 2025-04-16T00:45:12+00:00
```
2025-04-16T00:45:12.3388977Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-16T00:45:12.3389627Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-04-16T00:45:12.3400446Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-16T00:45:12.3419415Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped test_terraform_path=/home/runner/work/_temp/92645992-1140-423c-8ef0-74ddbe0cfc31/terraform test_working_directory=/tmp/plugintest203054540
2025-04-16T00:45:12.3458158Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-16T00:45:12.3458733Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-16T00:45:12.3459096Z         
2025-04-16T00:45:12.3459370Z         Error: error creating resource
2025-04-16T00:45:12.3459634Z         
2025-04-16T00:45:12.3459998Z           with mongodbatlas_stream_processor.processor,
2025-04-16T00:45:12.3460687Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T00:45:12.3461329Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T00:45:12.3461652Z         
2025-04-16T00:45:12.3462493Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-6200318131627480183--CREATED-STARTED/processor
2025-04-16T00:45:12.3463377Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T00:45:12.3464227Z         Detail: Streams Processor with this name (processor-created-to-started) had a
2025-04-16T00:45:12.3464848Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T00:45:12.3465588Z         [processor-created-to-started RBAC: access denied], BadRequestDetail: 
2025-04-16T00:45:12.3490742Z   
2025-04-16T00:45:12.3498361Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped test_terraform_path=/home/runner/work/_temp/92645992-1140-423c-8ef0-74ddbe0cfc31/terraform test_working_directory=/tmp/plugintest636743632 test_step_number=1
2025-04-16T00:45:12.3595585Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-16T00:45:12.3596239Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3596664Z         
2025-04-16T00:45:12.3596944Z         Error: error deleting resource
2025-04-16T00:45:12.3597210Z         
2025-04-16T00:45:12.3598189Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-6200318131627480183--CREATED-STARTED/connections/sample_stream_solar
2025-04-16T00:45:12.3599160Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3599759Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3600170Z         BadRequestDetail: 
2025-04-16T00:45:12.3606102Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted test_terraform_path=/home/runner/work/_temp/92645992-1140-423c-8ef0-74ddbe0cfc31/terraform test_working_directory=/tmp/plugintest393882984
2025-04-16T00:45:12.3620013Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (1.68s)
```

  - FAIL 3 seconds

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.8448820Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-16T12:49:32.8449742Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-04-16T12:49:32.8461365Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-16T12:49:32.8577845Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-16T12:49:32.8578417Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-16T12:49:32.8578830Z         
2025-04-16T12:49:32.8579220Z         Error: error creating resource
2025-04-16T12:49:32.8579493Z         
2025-04-16T12:49:32.8579859Z           with mongodbatlas_stream_processor.processor,
2025-04-16T12:49:32.8580565Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T12:49:32.8581205Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T12:49:32.8581529Z         
2025-04-16T12:49:32.8582390Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-1511071137522432797--CREATED-STARTED/processor
2025-04-16T12:49:32.8583293Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T12:49:32.8583957Z         Detail: Streams Processor with this name (processor-created-to-started) had a
2025-04-16T12:49:32.8584571Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T12:49:32.8585178Z         [processor-created-to-started RBAC: access denied], BadRequestDetail: 
2025-04-16T12:49:32.8593234Z    test_terraform_path=/home/runner/work/_temp/c09527d7-de0c-4201-9826-27350f0a89ff/terraform test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted test_working_directory=/tmp/plugintest3092552401 test_step_number=1
2025-04-16T12:49:32.8683696Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-16T12:49:32.8684063Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8684157Z         
2025-04-16T12:49:32.8684324Z         Error: error deleting resource
2025-04-16T12:49:32.8684417Z         
2025-04-16T12:49:32.8685287Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-1511071137522432797--CREATED-STARTED/connections/sample_stream_solar
2025-04-16T12:49:32.8685619Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8685938Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8686112Z         BadRequestDetail: 
2025-04-16T12:49:32.8688383Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (3.56s)
```

  - FAIL 2 seconds

### Error 2025-04-16T14:37:27+00:00
```
2025-04-16T14:37:27.0428147Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-16T14:37:27.0428984Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-04-16T14:37:27.0440926Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-16T14:37:27.0509907Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-16T14:37:27.0510544Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-16T14:37:27.0510935Z         
2025-04-16T14:37:27.0511233Z         Error: error creating resource
2025-04-16T14:37:27.0511511Z         
2025-04-16T14:37:27.0511882Z           with mongodbatlas_stream_processor.processor,
2025-04-16T14:37:27.0512594Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T14:37:27.0513250Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T14:37:27.0513846Z         
2025-04-16T14:37:27.0514726Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-1622193010899826147--CREATED-STARTED/processor
2025-04-16T14:37:27.0515631Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T14:37:27.0516295Z         Detail: Streams Processor with this name (processor-created-to-started) had a
2025-04-16T14:37:27.0516932Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T14:37:27.0517741Z         [processor-created-to-started RBAC: access denied], BadRequestDetail: 
2025-04-16T14:37:27.0526876Z   
2025-04-16T14:37:27.0634995Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-16T14:37:27.0635653Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0636099Z         
2025-04-16T14:37:27.0636372Z         Error: error deleting resource
2025-04-16T14:37:27.0636638Z         
2025-04-16T14:37:27.0637640Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-1622193010899826147--CREATED-STARTED/connections/sample_stream_solar
2025-04-16T14:37:27.0638634Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0639250Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0639671Z         BadRequestDetail: 
2025-04-16T14:37:27.0645872Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-16T14:37:27.0682284Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (2.23s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.9414245Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-17T00:44:44.9414915Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-04-17T00:44:44.9426025Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-17T00:44:44.9445460Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-17T00:44:44.9490158Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-17T00:44:44.9490753Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-17T00:44:44.9491114Z         
2025-04-17T00:44:44.9491395Z         Error: error creating resource
2025-04-17T00:44:44.9491666Z         
2025-04-17T00:44:44.9492031Z           with mongodbatlas_stream_processor.processor,
2025-04-17T00:44:44.9492737Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-17T00:44:44.9493514Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-17T00:44:44.9493840Z         
2025-04-17T00:44:44.9494699Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-9209430034348822208--CREATED-STARTED/processor
2025-04-17T00:44:44.9495600Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-17T00:44:44.9496267Z         Detail: Streams Processor with this name (processor-created-to-started) had a
2025-04-17T00:44:44.9496885Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-17T00:44:44.9497495Z         [processor-created-to-started RBAC: access denied], BadRequestDetail: 
2025-04-17T00:44:44.9511676Z    test_working_directory=/tmp/plugintest2778626932
2025-04-17T00:44:44.9602510Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-17T00:44:44.9603182Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9603619Z         
2025-04-17T00:44:44.9603896Z         Error: error deleting resource
2025-04-17T00:44:44.9604167Z         
2025-04-17T00:44:44.9605137Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-9209430034348822208--CREATED-STARTED/connections/sample_stream_solar
2025-04-17T00:44:44.9606110Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9606720Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9607249Z         BadRequestDetail: 
2025-04-17T00:44:44.9622987Z    test_terraform_path=/home/runner/work/_temp/7820bfc0-4292-41a1-b17d-9a8aaba10970/terraform test_working_directory=/tmp/plugintest2778626932
2025-04-17T00:44:44.9648288Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (1.60s)
```

- 2025-04-18 PASS 14 seconds
- 2025-04-19 PASS 12 seconds
- 2025-04-20 PASS 13 seconds
- 2025-04-21 PASS 15 seconds
- 2025-04-22 PASS 14 seconds
- 2025-04-23 PASS 11 seconds
- 2025-04-24 PASS 14 seconds
- 2025-04-25 PASS 8 seconds
- 2025-04-26 PASS 26 seconds
- 2025-04-27 PASS 9 seconds
- 2025-04-28 PASS 8 seconds
- 2025-04-29 PASS 8 seconds
- 2025-04-30
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-05-01
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-05-02 PASS 8 seconds
- 2025-05-03 PASS 10 seconds
- 2025-05-04

### Error 2025-05-04T00:47:22+00:00
```
2025-05-04T00:47:22.2004992Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-05-04T00:47:22.2005642Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-05-04T00:47:22.2019147Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-05-04T00:47:22.2035162Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/2e875f25-0b50-4e0c-86b1-13eb71f11cba/terraform test_working_directory=/tmp/plugintest2516108005 test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-05-04T00:47:22.2036255Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-05-04T00:47:22.2036614Z         
2025-05-04T00:47:22.2036895Z         Error: error creating resource
2025-05-04T00:47:22.2037158Z         
2025-05-04T00:47:22.2037510Z           with mongodbatlas_stream_processor.processor,
2025-05-04T00:47:22.2038192Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-04T00:47:22.2038821Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-04T00:47:22.2039144Z         
2025-05-04T00:47:22.2040013Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-6313859029023430806--CREATED-STARTED/processor
2025-05-04T00:47:22.2040880Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-04T00:47:22.2042367Z         Detail: Streams Processor with this name (processor-created-to-started) had a
2025-05-04T00:47:22.2043035Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-04T00:47:22.2043804Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-04T00:47:22.2044422Z         [processor-created-to-started failed to acquire resources for stream
2025-05-04T00:47:22.2045031Z         processor validation: global resource manager returned no resources],
2025-05-04T00:47:22.2045449Z         BadRequestDetail: 
2025-05-04T00:47:22.2057852Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/2e875f25-0b50-4e0c-86b1-13eb71f11cba/terraform test_working_directory=/tmp/plugintest2516108005
2025-05-04T00:47:22.2058891Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-04T00:47:22.2059321Z         
2025-05-04T00:47:22.2059590Z         Error: error deleting resource
2025-05-04T00:47:22.2059854Z         
2025-05-04T00:47:22.2060788Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-6313859029023430806--CREATED-STARTED/connections/sample_stream_solar
2025-05-04T00:47:22.2061763Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-04T00:47:22.2062297Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-04T00:47:22.2062959Z         name test-acc-tf-6313859029023430806--CREATED-STARTED has active processors,
2025-05-04T00:47:22.2063498Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-04T00:47:22.2064043Z         [test-acc-tf-6313859029023430806--CREATED-STARTED], BadRequestDetail: 
2025-05-04T00:47:22.2081717Z   
2025-05-04T00:47:22.2161935Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (2.45s)
```

- 2025-05-05
  - PASS 7 seconds
  - PASS 9 seconds
- 2025-05-06 PASS 9 seconds
- 2025-05-07
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 12 seconds
- 2025-05-08 PASS 10 seconds
- 2025-05-09 PASS 9 seconds
- 2025-05-10 PASS 8 seconds
- 2025-05-11

### Error 2025-05-11T00:30:00+00:00
```
2025-05-11T00:30:00.0956127Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-05-11T00:30:00.0956813Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-05-11T00:30:00.0957483Z     resource_test.go:172: Creating execution project: test-acc-tf-p-7621309191940132273
2025-05-11T00:30:00.0957941Z     resource_test.go:172: 
2025-05-11T00:30:00.0958824Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.0960558Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:00.0962508Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:352
2025-05-11T00:30:00.0964398Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:172
2025-05-11T00:30:00.0965162Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.0966026Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.0966720Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-05-11T00:30:00.0967937Z         	Messages:   	Project creation failed: test-acc-tf-p-7621309191940132273, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1040801Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (0.02s)
```

- 2025-05-12 PASS 10 seconds
- 2025-05-13
  - PASS 9 seconds
  - PASS 7 seconds
- 2025-05-14 PASS 8 seconds
- 2025-05-15 PASS 9 seconds
- 2025-05-16 PASS 9 seconds
- 2025-05-17 PASS 8 seconds
- 2025-05-18 PASS 10 seconds
- 2025-05-19 PASS 10 seconds
- 2025-05-20
  - PASS 8 seconds
  - PASS 11 seconds
- 2025-05-21 PASS 10 seconds
- 2025-05-22
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-05-23

### Error 2025-05-23T00:49:48+00:00
```
2025-05-23T00:49:48.7512055Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-05-23T00:49:48.7512712Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-05-23T00:49:48.7525671Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-05-23T00:49:48.7542487Z   
2025-05-23T00:49:48.7740358Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-05-23T00:49:48.7740937Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-05-23T00:49:48.7741305Z         
2025-05-23T00:49:48.7741595Z         Error: error creating resource
2025-05-23T00:49:48.7741871Z         
2025-05-23T00:49:48.7742249Z           with mongodbatlas_stream_processor.processor,
2025-05-23T00:49:48.7742976Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-23T00:49:48.7743739Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-23T00:49:48.7744078Z         
2025-05-23T00:49:48.7744937Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-6147856931464616588--CREATED-STARTED/processor
2025-05-23T00:49:48.7745825Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-23T00:49:48.7746484Z         Detail: Streams Processor with this name (processor-created-to-started) had a
2025-05-23T00:49:48.7747160Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-23T00:49:48.7747819Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-23T00:49:48.7748467Z         [processor-created-to-started failed to acquire resources for stream
2025-05-23T00:49:48.7749096Z         processor validation: global resource manager returned no resources],
2025-05-23T00:49:48.7749526Z         BadRequestDetail: 
2025-05-23T00:49:48.7762228Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted test_terraform_path=/home/runner/work/_temp/ff69557a-791e-4b49-8991-15a455b1be89/terraform test_working_directory=/tmp/plugintest1941048354
2025-05-23T00:49:48.7763570Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-23T00:49:48.7764055Z         
2025-05-23T00:49:48.7764336Z         Error: error deleting resource
2025-05-23T00:49:48.7764613Z         
2025-05-23T00:49:48.7765578Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-6147856931464616588--CREATED-STARTED/connections/sample_stream_solar
2025-05-23T00:49:48.7766412Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-23T00:49:48.7766960Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-23T00:49:48.7767619Z         name test-acc-tf-6147856931464616588--CREATED-STARTED has active processors,
2025-05-23T00:49:48.7768171Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-23T00:49:48.7768720Z         [test-acc-tf-6147856931464616588--CREATED-STARTED], BadRequestDetail: 
2025-05-23T00:49:48.7785271Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/ff69557a-791e-4b49-8991-15a455b1be89/terraform
2025-05-23T00:49:48.7819570Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (5.44s)
```

- 2025-05-24 PASS 10 seconds
- 2025-05-25 PASS 8 seconds
- 2025-05-26 PASS 13 seconds
- 2025-05-27
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-05-28
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-05-29
  - PASS 8 seconds
  - PASS 11 seconds
- 2025-05-30
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-05-31 PASS 10 seconds
- 2025-06-01
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-06-02
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-06-03
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-06-04 PASS 11 seconds
- 2025-06-05 PASS 8 seconds
- 2025-06-06 PASS 9 seconds
- 2025-06-07 PASS 8 seconds
- 2025-06-08 PASS 8 seconds
- 2025-06-09 PASS 8 seconds
- 2025-06-10 PASS 11 seconds
- 2025-06-11
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-06-12 PASS 9 seconds
- 2025-06-13 PASS 10 seconds
- 2025-06-14 PASS 9 seconds
- 2025-06-15 PASS 11 seconds
- 2025-06-16 PASS 8 seconds
- 2025-06-17 PASS 8 seconds
- 2025-06-18
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-06-19 PASS 8 seconds
- 2025-06-20 PASS 8 seconds
- 2025-06-21 PASS 9 seconds
- 2025-06-22 PASS 10 seconds
- 2025-06-23 PASS 11 seconds
- 2025-06-24 PASS 8 seconds
- 2025-06-25
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-06-26
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-06-27 PASS 9 seconds
- 2025-06-28 PASS 12 seconds
- 2025-06-29 PASS 12 seconds
- 2025-06-30 PASS 10 seconds
- 2025-07-01
  - PASS 11 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-07-02 PASS 8 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 8 seconds
- 2025-07-05 PASS 10 seconds
- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
```
2025-07-06T00:48:43.0087288Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-06T00:48:43.0088044Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-07-06T00:48:43.0098817Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-06T00:48:43.0109635Z    test_step_number=1
2025-07-06T00:48:43.0126677Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-06T00:48:43.0127238Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0127699Z         
2025-07-06T00:48:43.0127962Z         Error: error creating resource
2025-07-06T00:48:43.0128224Z         
2025-07-06T00:48:43.0128547Z           with mongodbatlas_stream_instance.instance,
2025-07-06T00:48:43.0129187Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-07-06T00:48:43.0129780Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-07-06T00:48:43.0130094Z         
2025-07-06T00:48:43.0130574Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams
2025-07-06T00:48:43.0131231Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0131802Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0132176Z         BadRequestDetail: 
2025-07-06T00:48:43.0143164Z   
2025-07-06T00:48:43.0202204Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (31.00s)
```

- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 9 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10 PASS 11 seconds