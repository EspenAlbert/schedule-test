# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL(x 3)
Success rate: 66.67%

## Timeline
### 2025-07-01
#### PASS 5 seconds
#### PASS 6 seconds
### 2025-07-02
#### PASS 5 seconds
### 2025-07-03
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-03T00:46:39.964000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped',confidence=1.0,ts_when='5 days ago')
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
### 2025-07-04
#### PASS 30 seconds
### 2025-07-05
#### PASS 31 seconds
### 2025-07-06
#### PASS 11 seconds
### 2025-07-07
#### FAIL 31 seconds
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
### 2025-07-08
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-08T00:45:56.131000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped',confidence=1.0,ts_when='3 hours ago')
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