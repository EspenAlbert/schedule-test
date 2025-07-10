# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 124) FAIL(x 8)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-16 00:45](#error-2025-04-16t0045120000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-913227070571027299-STARTED-STOPPED-STARTED/processor | dev | flaky_500 | 1.07s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-3106833340032500673-STARTED-STOPPED-STARTED/processor | qa | flaky_500 | 3.06s
[2025-04-16 14:37](#error-2025-04-16t1437270000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-526944599452204473-STARTED-STOPPED-STARTED/processor | dev | flaky_500 | 2.02s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-7391731526277391360-STARTED-STOPPED-STARTED/processor | dev | flaky_500 | 1.06s
[2025-04-27 00:47](#error-2025-04-27t0047250000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-8577699112048547047-STARTED-STOPPED-STARTED/processor | qa |  | 4.00s
[2025-05-11 00:30](#error-2025-05-11t0030000000) |  | qa |  | 0.00s
[2025-05-23 00:49](#error-2025-05-23t0049480000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-2676550422031068964-STARTED-STOPPED-STARTED/processor | dev |  | 6.01s
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams | qa | flaky_500 | 30.10s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 20 seconds
- 2025-04-13 PASS 20 seconds
- 2025-04-14 PASS 22 seconds
- 2025-04-15 PASS 19 seconds
- 2025-04-16
  - FAIL a second

### Error 2025-04-16T00:45:12+00:00
```
2025-04-16T00:45:12.3394451Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-16T00:45:12.3395101Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-04-16T00:45:12.3399958Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-16T00:45:12.3499398Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-16T00:45:12.3499975Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-04-16T00:45:12.3500326Z         
2025-04-16T00:45:12.3500602Z         Error: error creating resource
2025-04-16T00:45:12.3500868Z         
2025-04-16T00:45:12.3501232Z           with mongodbatlas_stream_processor.processor,
2025-04-16T00:45:12.3501924Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T00:45:12.3502558Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T00:45:12.3502883Z         
2025-04-16T00:45:12.3503912Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-913227070571027299-STARTED-STOPPED-STARTED/processor
2025-04-16T00:45:12.3504888Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T00:45:12.3505545Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2025-04-16T00:45:12.3506272Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T00:45:12.3506877Z         [processor-stopped-to-started RBAC: access denied], BadRequestDetail: 
2025-04-16T00:45:12.3607092Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-16T00:45:12.3607743Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3608165Z         
2025-04-16T00:45:12.3608447Z         Error: error deleting resource
2025-04-16T00:45:12.3608535Z         
2025-04-16T00:45:12.3609445Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-913227070571027299-STARTED-STOPPED-STARTED/connections/sample_stream_solar
2025-04-16T00:45:12.3609786Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3610116Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3610374Z         BadRequestDetail: 
2025-04-16T00:45:12.3615738Z    test_terraform_path=/home/runner/work/_temp/92645992-1140-423c-8ef0-74ddbe0cfc31/terraform
2025-04-16T00:45:12.3620335Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (1.69s)
```

  - FAIL 3 seconds

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.8455312Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-16T12:49:32.8456089Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-04-16T12:49:32.8462593Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-16T12:49:32.8479581Z   
2025-04-16T12:49:32.8594304Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-16T12:49:32.8594888Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-04-16T12:49:32.8595247Z         
2025-04-16T12:49:32.8595531Z         Error: error creating resource
2025-04-16T12:49:32.8595792Z         
2025-04-16T12:49:32.8596149Z           with mongodbatlas_stream_processor.processor,
2025-04-16T12:49:32.8596842Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T12:49:32.8597489Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T12:49:32.8597814Z         
2025-04-16T12:49:32.8598713Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-3106833340032500673-STARTED-STOPPED-STARTED/processor
2025-04-16T12:49:32.8599843Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T12:49:32.8600510Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2025-04-16T12:49:32.8601256Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T12:49:32.8601868Z         [processor-stopped-to-started RBAC: access denied], BadRequestDetail: 
2025-04-16T12:49:32.8613299Z   
2025-04-16T12:49:32.8677733Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-16T12:49:32.8678097Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8678191Z         
2025-04-16T12:49:32.8678367Z         Error: error deleting resource
2025-04-16T12:49:32.8678459Z         
2025-04-16T12:49:32.8679560Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-3106833340032500673-STARTED-STOPPED-STARTED/connections/sample_stream_solar
2025-04-16T12:49:32.8679902Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8680234Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8680379Z         BadRequestDetail: 
2025-04-16T12:49:32.8683473Z   
2025-04-16T12:49:32.8688061Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (3.56s)
```

  - FAIL 2 seconds

### Error 2025-04-16T14:37:27+00:00
```
2025-04-16T14:37:27.0434872Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-16T14:37:27.0435663Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-04-16T14:37:27.0442103Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-16T14:37:27.0459077Z    test_working_directory=/tmp/plugintest758407955
2025-04-16T14:37:27.0544021Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-16T14:37:27.0544597Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-04-16T14:37:27.0544966Z         
2025-04-16T14:37:27.0545246Z         Error: error creating resource
2025-04-16T14:37:27.0545512Z         
2025-04-16T14:37:27.0545879Z           with mongodbatlas_stream_processor.processor,
2025-04-16T14:37:27.0546575Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T14:37:27.0547224Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T14:37:27.0547685Z         
2025-04-16T14:37:27.0548583Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-526944599452204473-STARTED-STOPPED-STARTED/processor
2025-04-16T14:37:27.0549516Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T14:37:27.0550195Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2025-04-16T14:37:27.0550821Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T14:37:27.0551425Z         [processor-stopped-to-started RBAC: access denied], BadRequestDetail: 
2025-04-16T14:37:27.0560378Z   
2025-04-16T14:37:27.0613725Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-16T14:37:27.0614398Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0614838Z         
2025-04-16T14:37:27.0615113Z         Error: error deleting resource
2025-04-16T14:37:27.0615382Z         
2025-04-16T14:37:27.0616408Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-526944599452204473-STARTED-STOPPED-STARTED/connections/sample_stream_solar
2025-04-16T14:37:27.0617539Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0618150Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0618564Z         BadRequestDetail: 
2025-04-16T14:37:27.0634669Z   
2025-04-16T14:37:27.0681956Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (2.22s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.9419801Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-17T00:44:44.9420589Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-04-17T00:44:44.9425528Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-17T00:44:44.9550989Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-17T00:44:44.9551573Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-04-17T00:44:44.9551934Z         
2025-04-17T00:44:44.9552208Z         Error: error creating resource
2025-04-17T00:44:44.9552478Z         
2025-04-17T00:44:44.9552837Z           with mongodbatlas_stream_processor.processor,
2025-04-17T00:44:44.9553553Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-17T00:44:44.9554199Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-17T00:44:44.9554529Z         
2025-04-17T00:44:44.9555427Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-7391731526277391360-STARTED-STOPPED-STARTED/processor
2025-04-17T00:44:44.9556355Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-17T00:44:44.9557174Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2025-04-17T00:44:44.9557793Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-17T00:44:44.9558509Z         [processor-stopped-to-started RBAC: access denied], BadRequestDetail: 
2025-04-17T00:44:44.9574399Z   
2025-04-17T00:44:44.9644439Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-17T00:44:44.9644812Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9644906Z         
2025-04-17T00:44:44.9645081Z         Error: error deleting resource
2025-04-17T00:44:44.9645175Z         
2025-04-17T00:44:44.9646095Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-7391731526277391360-STARTED-STOPPED-STARTED/connections/sample_stream_solar
2025-04-17T00:44:44.9646435Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9646762Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9646906Z         BadRequestDetail: 
2025-04-17T00:44:44.9649258Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (1.62s)
```

- 2025-04-18 PASS 23 seconds
- 2025-04-19 PASS 20 seconds
- 2025-04-20 PASS 20 seconds
- 2025-04-21 PASS 23 seconds
- 2025-04-22 PASS 22 seconds
- 2025-04-23 PASS 19 seconds
- 2025-04-24 PASS 23 seconds
- 2025-04-25 PASS 13 seconds
- 2025-04-26 PASS 38 seconds
- 2025-04-27

### Error 2025-04-27T00:47:25+00:00
```
2025-04-27T00:47:25.4407749Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-27T00:47:25.4408915Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-04-27T00:47:25.4415387Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-27T00:47:25.4433348Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-04-27T00:47:25.4434045Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-04-27T00:47:25.4434424Z         
2025-04-27T00:47:25.4434818Z         Error: error creating resource
2025-04-27T00:47:25.4435097Z         
2025-04-27T00:47:25.4435552Z           with mongodbatlas_stream_processor.processor,
2025-04-27T00:47:25.4436464Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-27T00:47:25.4437255Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-27T00:47:25.4437596Z         
2025-04-27T00:47:25.4438929Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-8577699112048547047-STARTED-STOPPED-STARTED/processor
2025-04-27T00:47:25.4439967Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-27T00:47:25.4440616Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2025-04-27T00:47:25.4441404Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-27T00:47:25.4442041Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-27T00:47:25.4442673Z         [processor-stopped-to-started failed to acquire resources for stream
2025-04-27T00:47:25.4443301Z         processor validation: global resource manager returned no resources],
2025-04-27T00:47:25.4443839Z         BadRequestDetail: 
2025-04-27T00:47:25.4457968Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted test_terraform_path=/home/runner/work/_temp/a66f83f8-c7ea-48d2-abd1-f97810bc2ede/terraform
2025-04-27T00:47:25.4459177Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-27T00:47:25.4459616Z         
2025-04-27T00:47:25.4459897Z         Error: error deleting resource
2025-04-27T00:47:25.4460167Z         
2025-04-27T00:47:25.4461174Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-8577699112048547047-STARTED-STOPPED-STARTED/connections/sample_stream_solar
2025-04-27T00:47:25.4462038Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-27T00:47:25.4462568Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-27T00:47:25.4463549Z         name test-acc-tf-8577699112048547047-STARTED-STOPPED-STARTED has active
2025-04-27T00:47:25.4464217Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-04-27T00:47:25.4464861Z         [test-acc-tf-8577699112048547047-STARTED-STOPPED-STARTED], BadRequestDetail: 
2025-04-27T00:47:25.4481022Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped test_terraform_path=/home/runner/work/_temp/a66f83f8-c7ea-48d2-abd1-f97810bc2ede/terraform test_working_directory=/tmp/plugintest222090315 test_step_number=1
2025-04-27T00:47:25.4511892Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (4.03s)
```

- 2025-04-28 PASS 14 seconds
- 2025-04-29 PASS 12 seconds
- 2025-04-30
  - PASS 16 seconds
  - PASS 13 seconds
- 2025-05-01
  - PASS 12 seconds
  - PASS 13 seconds
  - PASS 16 seconds
  - PASS 13 seconds
  - PASS 16 seconds
  - PASS 12 seconds
  - PASS 13 seconds
- 2025-05-02 PASS 13 seconds
- 2025-05-03 PASS 12 seconds
- 2025-05-04 PASS 14 seconds
- 2025-05-05
  - PASS 12 seconds
  - PASS 13 seconds
- 2025-05-06 PASS 13 seconds
- 2025-05-07
  - PASS 16 seconds
  - PASS 15 seconds
  - PASS 14 seconds
  - PASS 17 seconds
- 2025-05-08 PASS 15 seconds
- 2025-05-09 PASS 15 seconds
- 2025-05-10 PASS 12 seconds
- 2025-05-11

### Error 2025-05-11T00:30:00+00:00
```
2025-05-11T00:30:00.0994997Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-05-11T00:30:00.0995665Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-05-11T00:30:00.0996338Z     resource_test.go:172: Creating execution project: test-acc-tf-p-761800342598808940
2025-05-11T00:30:00.0996782Z     resource_test.go:172: 
2025-05-11T00:30:00.0997667Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.0999535Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:00.1002104Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:352
2025-05-11T00:30:00.1005731Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:172
2025-05-11T00:30:00.1007065Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.1008775Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1010070Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-05-11T00:30:00.1012241Z         	Messages:   	Project creation failed: test-acc-tf-p-761800342598808940, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1044746Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (0.02s)
```

- 2025-05-12 PASS 15 seconds
- 2025-05-13
  - PASS 13 seconds
  - PASS 11 seconds
- 2025-05-14 PASS 13 seconds
- 2025-05-15 PASS 13 seconds
- 2025-05-16 PASS 12 seconds
- 2025-05-17 PASS 13 seconds
- 2025-05-18 PASS 16 seconds
- 2025-05-19 PASS 16 seconds
- 2025-05-20
  - PASS 13 seconds
  - PASS 16 seconds
- 2025-05-21 PASS 16 seconds
- 2025-05-22
  - PASS 15 seconds
  - PASS 15 seconds
  - PASS 13 seconds
- 2025-05-23

### Error 2025-05-23T00:49:48+00:00
```
2025-05-23T00:49:48.7517554Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-05-23T00:49:48.7518529Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-05-23T00:49:48.7525174Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-05-23T00:49:48.7785887Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-05-23T00:49:48.7786456Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-05-23T00:49:48.7786826Z         
2025-05-23T00:49:48.7787106Z         Error: error creating resource
2025-05-23T00:49:48.7787386Z         
2025-05-23T00:49:48.7787749Z           with mongodbatlas_stream_processor.processor,
2025-05-23T00:49:48.7788436Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-23T00:49:48.7789077Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-23T00:49:48.7789409Z         
2025-05-23T00:49:48.7790441Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-2676550422031068964-STARTED-STOPPED-STARTED/processor
2025-05-23T00:49:48.7791502Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-23T00:49:48.7792264Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2025-05-23T00:49:48.7793051Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-23T00:49:48.7793921Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-23T00:49:48.7794655Z         [processor-stopped-to-started failed to acquire resources for stream
2025-05-23T00:49:48.7795379Z         processor validation: global resource manager returned no resources],
2025-05-23T00:49:48.7795905Z         BadRequestDetail: 
2025-05-23T00:49:48.7809307Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted test_working_directory=/tmp/plugintest138461919 test_step_number=1 test_terraform_path=/home/runner/work/_temp/ff69557a-791e-4b49-8991-15a455b1be89/terraform
2025-05-23T00:49:48.7810481Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-23T00:49:48.7811034Z         
2025-05-23T00:49:48.7811313Z         Error: error deleting resource
2025-05-23T00:49:48.7811582Z         
2025-05-23T00:49:48.7812577Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-2676550422031068964-STARTED-STOPPED-STARTED/connections/sample_stream_solar
2025-05-23T00:49:48.7813549Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-23T00:49:48.7814082Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-23T00:49:48.7814710Z         name test-acc-tf-2676550422031068964-STARTED-STOPPED-STARTED has active
2025-05-23T00:49:48.7815301Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-23T00:49:48.7815938Z         [test-acc-tf-2676550422031068964-STARTED-STOPPED-STARTED], BadRequestDetail: 
2025-05-23T00:49:48.7820195Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (6.09s)
```

- 2025-05-24 PASS 13 seconds
- 2025-05-25 PASS 13 seconds
- 2025-05-26 PASS 17 seconds
- 2025-05-27
  - PASS 14 seconds
  - PASS 14 seconds
- 2025-05-28
  - PASS 16 seconds
  - PASS 13 seconds
- 2025-05-29
  - PASS 13 seconds
  - PASS 16 seconds
- 2025-05-30
  - PASS 13 seconds
  - PASS 15 seconds
- 2025-05-31 PASS 14 seconds
- 2025-06-01
  - PASS 16 seconds
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 16 seconds
  - PASS 12 seconds
  - PASS 12 seconds
- 2025-06-02
  - PASS 16 seconds
  - PASS 17 seconds
  - PASS 13 seconds
- 2025-06-03
  - PASS 14 seconds
  - PASS 16 seconds
  - PASS 14 seconds
- 2025-06-04 PASS 17 seconds
- 2025-06-05 PASS 13 seconds
- 2025-06-06 PASS 13 seconds
- 2025-06-07 PASS 12 seconds
- 2025-06-08 PASS 13 seconds
- 2025-06-09 PASS 13 seconds
- 2025-06-10 PASS 16 seconds
- 2025-06-11
  - PASS 11 seconds
  - PASS 15 seconds
- 2025-06-12 PASS 15 seconds
- 2025-06-13 PASS 16 seconds
- 2025-06-14 PASS 15 seconds
- 2025-06-15 PASS 16 seconds
- 2025-06-16 PASS 12 seconds
- 2025-06-17 PASS 13 seconds
- 2025-06-18
  - PASS 16 seconds
  - PASS 15 seconds
- 2025-06-19 PASS 13 seconds
- 2025-06-20 PASS 14 seconds
- 2025-06-21 PASS 13 seconds
- 2025-06-22 PASS 26 seconds
- 2025-06-23 PASS 16 seconds
- 2025-06-24 PASS 13 seconds
- 2025-06-25
  - PASS 13 seconds
  - PASS 13 seconds
- 2025-06-26
  - PASS 13 seconds
  - PASS 13 seconds
- 2025-06-27 PASS 13 seconds
- 2025-06-28 PASS 17 seconds
- 2025-06-29 PASS 18 seconds
- 2025-06-30 PASS 16 seconds
- 2025-07-01
  - PASS 17 seconds
  - PASS 13 seconds
  - PASS 16 seconds
  - PASS 12 seconds
  - PASS 17 seconds
  - PASS 16 seconds
  - PASS 13 seconds
  - PASS 15 seconds
- 2025-07-02 PASS 12 seconds
- 2025-07-03 PASS 13 seconds
- 2025-07-04 PASS 12 seconds
- 2025-07-05 PASS 16 seconds
- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
```
2025-07-06T00:48:43.0092672Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-06T00:48:43.0093304Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-07-06T00:48:43.0098340Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-06T00:48:43.0109987Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-06T00:48:43.0110542Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-07-06T00:48:43.0110889Z         
2025-07-06T00:48:43.0111152Z         Error: error creating resource
2025-07-06T00:48:43.0111412Z         
2025-07-06T00:48:43.0111733Z           with mongodbatlas_stream_instance.instance,
2025-07-06T00:48:43.0112492Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-07-06T00:48:43.0113095Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-07-06T00:48:43.0113401Z         
2025-07-06T00:48:43.0113881Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams
2025-07-06T00:48:43.0114535Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0115108Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0115484Z         BadRequestDetail: 
2025-07-06T00:48:43.0126367Z   
2025-07-06T00:48:43.0201567Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (30.99s)
```

- 2025-07-07 PASS 12 seconds
- 2025-07-08 PASS 13 seconds
- 2025-07-09 PASS 13 seconds
- 2025-07-10 PASS 17 seconds