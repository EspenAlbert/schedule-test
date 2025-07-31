# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped Test Details
# Found 33 TestRuns in dev, qa from 2025-07-01 to 2025-07-31 from master branch: 1 unique tests, PASS(x 23) FAIL(x 10)
Success rate: 69.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-03 00:46](#error-2025-07-03t0046390000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.03s
[2025-07-07 00:48](#error-2025-07-07t0048050000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-208803609599161300--CREATED-STOPPED/processor | dev |  | 31.01s
[2025-07-08 00:45](#error-2025-07-08t0045560000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.02s
[2025-07-09 01:00](#error-2025-07-09t0100420000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.02s
[2025-07-10 00:43](#error-2025-07-10t0043190000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.08s
[2025-07-10 13:24](#error-2025-07-10t1324520000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | qa | flaky_400 | 31.03s
[2025-07-11 02:31](#error-2025-07-11t0231570000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68705b004f431f68780bdce6/streams/test-acc-tf-8122185017806316108--CREATED-STOPPED/processor | dev |  | 32.10s
[2025-07-12 00:48](#error-2025-07-12t0048120000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6871ac5247d9ab465fd0f148/streams/test-acc-tf-8352210932207206264--CREATED-STOPPED/processor | dev |  | 31.02s
[2025-07-14 04:02](#error-2025-07-14t0402140000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68744fdf52cba864e5f10a3b/streams/test-acc-tf-8488738863730808747--CREATED-STOPPED/processor | dev | flaky_500 | 31.02s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor | qa |  | 0.05s

## Timeline
- 2025-07-01 PASS 6 seconds
- 2025-07-02 PASS 5 seconds
- 2025-07-03

### Error 2025-07-03T00:46:39+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-03T00:46:39.964000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped',confidence=1.0,ts_when='28 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-03T00:46:39.9643159Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-03T00:46:39.9643856Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-07-03T00:46:39.9648956Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-03T00:46:39.9693916Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-03T00:46:39.9694494Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-03T00:46:39.9694842Z         
2025-07-03T00:46:39.9695114Z         Error: error creating resource
2025-07-03T00:46:39.9695634Z         
2025-07-03T00:46:39.9695991Z           with mongodbatlas_stream_processor.processor,
2025-07-03T00:46:39.9696673Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-03T00:46:39.9697296Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-03T00:46:39.9697615Z         
2025-07-03T00:46:39.9698443Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6865cef1699daf2aab4cc130/streams/test-acc-tf-5638331412912824631--CREATED-STOPPED/processor
2025-07-03T00:46:39.9699316Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-03T00:46:39.9699952Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-07-03T00:46:39.9700602Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-03T00:46:39.9701218Z         internal error while provisioning resource from global resource manager.
2025-07-03T00:46:39.9701851Z         Reason: Bad Request. Params: [processor-created-to-stopped failed to acquire
2025-07-03T00:46:39.9702501Z         resources for stream processor validation: internal error while provisioning
2025-07-03T00:46:39.9703064Z         resource from global resource manager], BadRequestDetail: 
2025-07-03T00:46:39.9720439Z   
2025-07-03T00:46:39.9782708Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-03T00:46:39.9783388Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-03T00:46:39.9783822Z         
2025-07-03T00:46:39.9784092Z         Error: error deleting resource
2025-07-03T00:46:39.9784468Z         
2025-07-03T00:46:39.9785653Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6865cef1699daf2aab4cc130/streams/test-acc-tf-5638331412912824631--CREATED-STOPPED/connections/sample_stream_solar
2025-07-03T00:46:39.9786493Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-03T00:46:39.9787015Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-03T00:46:39.9787667Z         name test-acc-tf-5638331412912824631--CREATED-STOPPED has active processors,
2025-07-03T00:46:39.9788202Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-03T00:46:39.9788744Z         [test-acc-tf-5638331412912824631--CREATED-STOPPED], BadRequestDetail: 
2025-07-03T00:46:39.9791266Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (31.33s)
```

- 2025-07-04 PASS 30 seconds
- 2025-07-05 PASS 31 seconds
- 2025-07-06 PASS 11 seconds
- 2025-07-07

### Error 2025-07-07T00:48:05+00:00
```
2025-07-07T00:48:05.7944104Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-07T00:48:05.7944790Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-07-07T00:48:05.7949809Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-07T00:48:05.7968598Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-07T00:48:05.7969181Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-07T00:48:05.7969529Z         
2025-07-07T00:48:05.7969793Z         Error: error creating resource
2025-07-07T00:48:05.7970050Z         
2025-07-07T00:48:05.7970398Z           with mongodbatlas_stream_processor.processor,
2025-07-07T00:48:05.7971086Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-07T00:48:05.7971705Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-07T00:48:05.7972027Z         
2025-07-07T00:48:05.7972849Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-208803609599161300--CREATED-STOPPED/processor
2025-07-07T00:48:05.7973707Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-07T00:48:05.7974347Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-07-07T00:48:05.7975025Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-07T00:48:05.7975815Z         internal error while provisioning resource from global resource manager.
2025-07-07T00:48:05.7976491Z         Reason: Bad Request. Params: [processor-created-to-stopped failed to acquire
2025-07-07T00:48:05.7977137Z         resources for stream processor validation: internal error while provisioning
2025-07-07T00:48:05.7977727Z         resource from global resource manager], BadRequestDetail: 
2025-07-07T00:48:05.7994335Z    test_working_directory=/tmp/plugintest4237475889 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-07T00:48:05.8044468Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-07T00:48:05.8045130Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-07T00:48:05.8045546Z         
2025-07-07T00:48:05.8045984Z         Error: error deleting resource
2025-07-07T00:48:05.8046251Z         
2025-07-07T00:48:05.8047183Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-208803609599161300--CREATED-STOPPED/connections/sample_stream_solar
2025-07-07T00:48:05.8047996Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-07T00:48:05.8048515Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-07T00:48:05.8049146Z         name test-acc-tf-208803609599161300--CREATED-STOPPED has active processors,
2025-07-07T00:48:05.8049794Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-07T00:48:05.8050323Z         [test-acc-tf-208803609599161300--CREATED-STOPPED], BadRequestDetail: 
2025-07-07T00:48:05.8063543Z   
2025-07-07T00:48:05.8091001Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (31.07s)
```

- 2025-07-08

### Error 2025-07-08T00:45:56+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-08T00:45:56.131000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped',confidence=1.0,ts_when='23 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-08T00:45:56.1312673Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-08T00:45:56.1313933Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-07-08T00:45:56.1322821Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-08T00:45:56.1357217Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-08T00:45:56.1358268Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-08T00:45:56.1358911Z         
2025-07-08T00:45:56.1359398Z         Error: error creating resource
2025-07-08T00:45:56.1359851Z         
2025-07-08T00:45:56.1360472Z           with mongodbatlas_stream_processor.processor,
2025-07-08T00:45:56.1361728Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-08T00:45:56.1362864Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-08T00:45:56.1363411Z         
2025-07-08T00:45:56.1365130Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686c6668a5ec7701ec2c7a57/streams/test-acc-tf-7538268314743422495--CREATED-STOPPED/processor
2025-07-08T00:45:56.1366755Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-08T00:45:56.1367908Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-07-08T00:45:56.1369087Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-08T00:45:56.1370427Z         internal error while provisioning resource from global resource manager.
2025-07-08T00:45:56.1371588Z         Reason: Bad Request. Params: [processor-created-to-stopped failed to acquire
2025-07-08T00:45:56.1372768Z         resources for stream processor validation: internal error while provisioning
2025-07-08T00:45:56.1373811Z         resource from global resource manager], BadRequestDetail: 
2025-07-08T00:45:56.1404557Z    test_step_number=1
2025-07-08T00:45:56.1484896Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-08T00:45:56.1486135Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-08T00:45:56.1486869Z         
2025-07-08T00:45:56.1487313Z         Error: error deleting resource
2025-07-08T00:45:56.1487750Z         
2025-07-08T00:45:56.1489526Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686c6668a5ec7701ec2c7a57/streams/test-acc-tf-7538268314743422495--CREATED-STOPPED/connections/sample_stream_solar
2025-07-08T00:45:56.1491028Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-08T00:45:56.1491975Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-08T00:45:56.1492835Z         name sample_stream_solar in stream instance
2025-07-08T00:45:56.1493831Z         test-acc-tf-7538268314743422495--CREATED-STOPPED has active processors, and
2025-07-08T00:45:56.1495170Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-08T00:45:56.1496227Z         test-acc-tf-7538268314743422495--CREATED-STOPPED], BadRequestDetail: 
2025-07-08T00:45:56.1504501Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (31.20s)
```

- 2025-07-09

### Error 2025-07-09T01:00:42+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-09T01:00:42.625000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped',confidence=1.0,ts_when='22 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-09T01:00:42.6255837Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-09T01:00:42.6256534Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-07-09T01:00:42.6261432Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-09T01:00:42.6280268Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-09T01:00:42.6280837Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-09T01:00:42.6281182Z         
2025-07-09T01:00:42.6281449Z         Error: error creating resource
2025-07-09T01:00:42.6281715Z         
2025-07-09T01:00:42.6282059Z           with mongodbatlas_stream_processor.processor,
2025-07-09T01:00:42.6282735Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-09T01:00:42.6283361Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-09T01:00:42.6283673Z         
2025-07-09T01:00:42.6284499Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686db7ff725a79527bea68dc/streams/test-acc-tf-7134197343900082237--CREATED-STOPPED/processor
2025-07-09T01:00:42.6285371Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-09T01:00:42.6286141Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-07-09T01:00:42.6286785Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-09T01:00:42.6287551Z         internal error while provisioning resource from global resource manager.
2025-07-09T01:00:42.6288215Z         Reason: Bad Request. Params: [processor-created-to-stopped failed to acquire
2025-07-09T01:00:42.6288868Z         resources for stream processor validation: internal error while provisioning
2025-07-09T01:00:42.6289434Z         resource from global resource manager], BadRequestDetail: 
2025-07-09T01:00:42.6313735Z   
2025-07-09T01:00:42.6373170Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-09T01:00:42.6373983Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-09T01:00:42.6374403Z         
2025-07-09T01:00:42.6374663Z         Error: error deleting resource
2025-07-09T01:00:42.6374923Z         
2025-07-09T01:00:42.6375867Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686db7ff725a79527bea68dc/streams/test-acc-tf-7134197343900082237--CREATED-STOPPED/connections/sample_stream_solar
2025-07-09T01:00:42.6376683Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-09T01:00:42.6377210Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-09T01:00:42.6377825Z         name sample_stream_solar in stream instance
2025-07-09T01:00:42.6378369Z         test-acc-tf-7134197343900082237--CREATED-STOPPED has active processors, and
2025-07-09T01:00:42.6378969Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-09T01:00:42.6379554Z         test-acc-tf-7134197343900082237--CREATED-STOPPED], BadRequestDetail: 
2025-07-09T01:00:42.6408500Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (31.18s)
```

- 2025-07-10
  - FAIL 31 seconds

### Error 2025-07-10T00:43:19+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-10T00:43:19.377000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped',confidence=1.0,ts_when='21 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-10T00:43:19.3778906Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-10T00:43:19.3779619Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-07-10T00:43:19.3784620Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-10T00:43:19.3858216Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-10T00:43:19.3858804Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-10T00:43:19.3859164Z         
2025-07-10T00:43:19.3859437Z         Error: error creating resource
2025-07-10T00:43:19.3859700Z         
2025-07-10T00:43:19.3860054Z           with mongodbatlas_stream_processor.processor,
2025-07-10T00:43:19.3860749Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-10T00:43:19.3861385Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-10T00:43:19.3861710Z         
2025-07-10T00:43:19.3862570Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686f096a964afc762c202930/streams/test-acc-tf-4936540549384448723--CREATED-STOPPED/processor
2025-07-10T00:43:19.3863454Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-10T00:43:19.3864110Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-07-10T00:43:19.3864787Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-10T00:43:19.3865419Z         internal error while provisioning resource from global resource manager.
2025-07-10T00:43:19.3866062Z         Reason: Bad Request. Params: [processor-created-to-stopped failed to acquire
2025-07-10T00:43:19.3866844Z         resources for stream processor validation: internal error while provisioning
2025-07-10T00:43:19.3867424Z         resource from global resource manager], BadRequestDetail: 
2025-07-10T00:43:19.3881770Z    test_terraform_path=/home/runner/work/_temp/f29cbc8a-ca73-47a9-ae39-889e2f729155/terraform
2025-07-10T00:43:19.3925235Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-10T00:43:19.3925916Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T00:43:19.3926467Z         
2025-07-10T00:43:19.3926830Z         Error: error deleting resource
2025-07-10T00:43:19.3927101Z         
2025-07-10T00:43:19.3928072Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686f096a964afc762c202930/streams/test-acc-tf-4936540549384448723--CREATED-STOPPED/connections/sample_stream_solar
2025-07-10T00:43:19.3928905Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-10T00:43:19.3929438Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-10T00:43:19.3929929Z         name sample_stream_solar in stream instance
2025-07-10T00:43:19.3930501Z         test-acc-tf-4936540549384448723--CREATED-STOPPED has active processors, and
2025-07-10T00:43:19.3931120Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-10T00:43:19.3931851Z         test-acc-tf-4936540549384448723--CREATED-STOPPED], BadRequestDetail: 
2025-07-10T00:43:19.3934448Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (31.78s)
```

  - FAIL 31 seconds

### Error 2025-07-10T13:24:52+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-10T13:24:52.389000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped',confidence=1.0,ts_when='20 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-10T13:24:52.3890834Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-10T13:24:52.3891789Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-07-10T13:24:52.3896928Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-10T13:24:52.3921032Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-10T13:24:52.3921614Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:24:52.3921992Z         
2025-07-10T13:24:52.3922264Z         Error: error creating resource
2025-07-10T13:24:52.3922525Z         
2025-07-10T13:24:52.3923016Z           with mongodbatlas_stream_processor.processor,
2025-07-10T13:24:52.3923707Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-10T13:24:52.3924339Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-10T13:24:52.3924653Z         
2025-07-10T13:24:52.3925501Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb06fd583001f9eeb866/streams/test-acc-tf-7747354437930528400--CREATED-STOPPED/processor
2025-07-10T13:24:52.3926386Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-10T13:24:52.3927035Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-07-10T13:24:52.3927698Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-10T13:24:52.3928327Z         internal error while provisioning resource from global resource manager.
2025-07-10T13:24:52.3928969Z         Reason: Bad Request. Params: [processor-created-to-stopped failed to acquire
2025-07-10T13:24:52.3929632Z         resources for stream processor validation: internal error while provisioning
2025-07-10T13:24:52.3930207Z         resource from global resource manager], BadRequestDetail: 
2025-07-10T13:24:52.3942936Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/4d5cd8a7-2970-4d68-aa4b-10ee84c3df9f/terraform test_working_directory=/tmp/plugintest2460759140 test_step_number=1
2025-07-10T13:24:52.3944144Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:24:52.3944564Z         
2025-07-10T13:24:52.3944844Z         Error: error deleting resource
2025-07-10T13:24:52.3945109Z         
2025-07-10T13:24:52.3946071Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb06fd583001f9eeb866/streams/test-acc-tf-7747354437930528400--CREATED-STOPPED/connections/sample_stream_solar
2025-07-10T13:24:52.3946891Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-10T13:24:52.3947431Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-10T13:24:52.3948200Z         name test-acc-tf-7747354437930528400--CREATED-STOPPED has active processors,
2025-07-10T13:24:52.3948735Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-10T13:24:52.3949289Z         [test-acc-tf-7747354437930528400--CREATED-STOPPED], BadRequestDetail: 
2025-07-10T13:24:52.3951916Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (31.27s)
```

- 2025-07-11

### Error 2025-07-11T02:31:57+00:00
```
2025-07-11T02:31:57.1503048Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-11T02:31:57.1504259Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-07-11T02:31:57.1512984Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-11T02:31:57.1699572Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-11T02:31:57.1700429Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-11T02:31:57.1700789Z         
2025-07-11T02:31:57.1701053Z         Error: error creating resource
2025-07-11T02:31:57.1701309Z         
2025-07-11T02:31:57.1701654Z           with mongodbatlas_stream_processor.processor,
2025-07-11T02:31:57.1702481Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-11T02:31:57.1703105Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-11T02:31:57.1703420Z         
2025-07-11T02:31:57.1704252Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705b004f431f68780bdce6/streams/test-acc-tf-8122185017806316108--CREATED-STOPPED/processor
2025-07-11T02:31:57.1705121Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-11T02:31:57.1705756Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-07-11T02:31:57.1706412Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-11T02:31:57.1707026Z         internal error while provisioning resource from global resource manager.
2025-07-11T02:31:57.1707650Z         Reason: Bad Request. Params: [processor-created-to-stopped failed to acquire
2025-07-11T02:31:57.1708303Z         resources for stream processor validation: internal error while provisioning
2025-07-11T02:31:57.1708873Z         resource from global resource manager], BadRequestDetail: 
2025-07-11T02:31:57.1723217Z   
2025-07-11T02:31:57.1723670Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-11T02:31:57.1724090Z         
2025-07-11T02:31:57.1724360Z         Error: error deleting resource
2025-07-11T02:31:57.1724612Z         
2025-07-11T02:31:57.1725558Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705b004f431f68780bdce6/streams/test-acc-tf-8122185017806316108--CREATED-STOPPED/connections/sample_stream_solar
2025-07-11T02:31:57.1726375Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-11T02:31:57.1727025Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-11T02:31:57.1727513Z         name sample_stream_solar in stream instance
2025-07-11T02:31:57.1728074Z         test-acc-tf-8122185017806316108--CREATED-STOPPED has active processors, and
2025-07-11T02:31:57.1728685Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-11T02:31:57.1729272Z         test-acc-tf-8122185017806316108--CREATED-STOPPED], BadRequestDetail: 
2025-07-11T02:31:57.1732024Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (32.96s)
```

- 2025-07-12

### Error 2025-07-12T00:48:12+00:00
```
2025-07-12T00:48:12.3560190Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-12T00:48:12.3560891Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-07-12T00:48:12.3565903Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-12T00:48:12.3659837Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-12T00:48:12.3660451Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-12T00:48:12.3660824Z         
2025-07-12T00:48:12.3661103Z         Error: error creating resource
2025-07-12T00:48:12.3661378Z         
2025-07-12T00:48:12.3661731Z           with mongodbatlas_stream_processor.processor,
2025-07-12T00:48:12.3662413Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-12T00:48:12.3663065Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-12T00:48:12.3663391Z         
2025-07-12T00:48:12.3664221Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6871ac5247d9ab465fd0f148/streams/test-acc-tf-8352210932207206264--CREATED-STOPPED/processor
2025-07-12T00:48:12.3665096Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-12T00:48:12.3665965Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-07-12T00:48:12.3666623Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-12T00:48:12.3667375Z         internal error while provisioning resource from global resource manager.
2025-07-12T00:48:12.3668025Z         Reason: Bad Request. Params: [processor-created-to-stopped failed to acquire
2025-07-12T00:48:12.3668673Z         resources for stream processor validation: internal error while provisioning
2025-07-12T00:48:12.3669252Z         resource from global resource manager], BadRequestDetail: 
2025-07-12T00:48:12.3684050Z   
2025-07-12T00:48:12.3711949Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-12T00:48:12.3712623Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-12T00:48:12.3713046Z         
2025-07-12T00:48:12.3713321Z         Error: error deleting resource
2025-07-12T00:48:12.3713589Z         
2025-07-12T00:48:12.3714526Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6871ac5247d9ab465fd0f148/streams/test-acc-tf-8352210932207206264--CREATED-STOPPED/connections/sample_stream_solar
2025-07-12T00:48:12.3715589Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-12T00:48:12.3716171Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-12T00:48:12.3716658Z         name sample_stream_solar in stream instance
2025-07-12T00:48:12.3717340Z         test-acc-tf-8352210932207206264--CREATED-STOPPED has active processors, and
2025-07-12T00:48:12.3717964Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-12T00:48:12.3718549Z         test-acc-tf-8352210932207206264--CREATED-STOPPED], BadRequestDetail: 
2025-07-12T00:48:12.3726619Z    test_step_number=1
2025-07-12T00:48:12.3735198Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (31.21s)
```

- 2025-07-13 PASS 31 seconds
- 2025-07-14

### Error 2025-07-14T04:02:14+00:00
```
2025-07-14T04:02:14.1299059Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-14T04:02:14.1299871Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-07-14T04:02:14.1305930Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-14T04:02:14.1335107Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-14T04:02:14.1335868Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-14T04:02:14.1343995Z         
2025-07-14T04:02:14.1344461Z         Error: error creating resource
2025-07-14T04:02:14.1344756Z         
2025-07-14T04:02:14.1345128Z           with mongodbatlas_stream_processor.processor,
2025-07-14T04:02:14.1345862Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-14T04:02:14.1346517Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-14T04:02:14.1346854Z         
2025-07-14T04:02:14.1347695Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fdf52cba864e5f10a3b/streams/test-acc-tf-8488738863730808747--CREATED-STOPPED/processor
2025-07-14T04:02:14.1348757Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-14T04:02:14.1349399Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-07-14T04:02:14.1350053Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-14T04:02:14.1350676Z         internal error while provisioning resource from global resource manager.
2025-07-14T04:02:14.1351315Z         Reason: Bad Request. Params: [processor-created-to-stopped failed to acquire
2025-07-14T04:02:14.1351960Z         resources for stream processor validation: internal error while provisioning
2025-07-14T04:02:14.1352527Z         resource from global resource manager], BadRequestDetail: 
2025-07-14T04:02:14.1362297Z    test_working_directory=/tmp/plugintest235449572 test_step_number=1 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-14T04:02:14.1435439Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-14T04:02:14.1436120Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T04:02:14.1436547Z         
2025-07-14T04:02:14.1436821Z         Error: error deleting resource
2025-07-14T04:02:14.1437083Z         
2025-07-14T04:02:14.1438044Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fdf52cba864e5f10a3b/streams/test-acc-tf-8488738863730808747--CREATED-STOPPED/connections/sample_stream_solar
2025-07-14T04:02:14.1438872Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-14T04:02:14.1439392Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-14T04:02:14.1439880Z         name sample_stream_solar in stream instance
2025-07-14T04:02:14.1440434Z         test-acc-tf-8488738863730808747--CREATED-STOPPED has active processors, and
2025-07-14T04:02:14.1441038Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-14T04:02:14.1441625Z         test-acc-tf-8488738863730808747--CREATED-STOPPED], BadRequestDetail: 
2025-07-14T04:02:14.1456074Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-14T04:02:14.1465243Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (31.15s)
```

- 2025-07-15 PASS 3 seconds
- 2025-07-16 PASS 4 seconds
- 2025-07-17 PASS 3 seconds
- 2025-07-18 PASS 4 seconds
- 2025-07-19 PASS 3 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.7206770Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-20T00:53:03.7207460Z     resource_test.go:258: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-07-20T00:53:03.7212328Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-20T00:53:03.7227735Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-20T00:53:03.7228318Z     resource_test.go:259: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:53:03.7228673Z         
2025-07-20T00:53:03.7228937Z         Error: error creating resource
2025-07-20T00:53:03.7229195Z         
2025-07-20T00:53:03.7229546Z           with mongodbatlas_stream_processor.processor,
2025-07-20T00:53:03.7230212Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-07-20T00:53:03.7230835Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-20T00:53:03.7231156Z         
2025-07-20T00:53:03.7231888Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor
2025-07-20T00:53:03.7232703Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7233287Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7233875Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7234544Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7234921Z         BadRequestDetail: 
2025-07-20T00:53:03.7268621Z   
2025-07-20T00:53:03.7321210Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (0.48s)
```

- 2025-07-21 PASS 4 seconds
- 2025-07-22 PASS 3 seconds
- 2025-07-23
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-07-24 PASS 3 seconds
- 2025-07-25 PASS 4 seconds
- 2025-07-26 PASS 4 seconds
- 2025-07-27 PASS 3 seconds
- 2025-07-28 PASS 3 seconds
- 2025-07-29 PASS 3 seconds
- 2025-07-30 PASS 3 seconds
- 2025-07-31 PASS 3 seconds