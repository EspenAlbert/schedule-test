# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL(x 3)
Success rate: 70.00%

## Timeline
### 2025-07-01
#### PASS 14 seconds
```
2025-07-01T08:50:28.2787430Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-01T08:50:28.2788993Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-07-01T08:50:28.2792247Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-01T08:50:28.2797407Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (14.62s)
```
#### PASS 10 seconds
```
2025-07-01T12:50:20.6101539Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-01T12:50:20.6102330Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-07-01T12:50:20.6104025Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-01T12:50:20.6106032Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.43s)
```
#### PASS 13 seconds
```
2025-07-01T17:50:24.3535645Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-01T17:50:24.3537158Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-07-01T17:50:24.3540312Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-01T17:50:24.3544187Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (13.22s)
```
### 2025-07-02
#### PASS 10 seconds
```
2025-07-02T00:46:31.9259560Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-02T00:46:31.9260414Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-07-02T00:46:31.9262320Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-02T00:46:31.9264388Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.47s)
```
### 2025-07-03
#### PASS 11 seconds
```
2025-07-03T00:46:39.9575493Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-03T00:46:39.9576492Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-07-03T00:46:39.9578131Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-03T00:46:39.9641569Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (11.23s)
```
### 2025-07-04
#### PASS 10 seconds
```
2025-07-04T00:51:07.7089252Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-04T00:51:07.7090092Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-07-04T00:51:07.7091778Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-04T00:51:07.7140295Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.26s)
```
### 2025-07-05
#### PASS 14 seconds
```
2025-07-05T00:44:07.5920999Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-05T00:44:07.5922489Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-07-05T00:44:07.5925586Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-05T00:44:07.6007179Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (14.06s)
```
### 2025-07-06
#### FAIL 31 seconds
```
2025-07-06T00:48:43.0209770Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-06T00:48:43.0210583Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-07-06T00:48:43.0212308Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-06T00:48:43.0259082Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-06T00:48:43.0259623Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-07-06T00:48:43.0259977Z         
2025-07-06T00:48:43.0260238Z         Error: error creating resource
2025-07-06T00:48:43.0260501Z         
2025-07-06T00:48:43.0260832Z           with mongodbatlas_stream_connection.sample,
2025-07-06T00:48:43.0261479Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "sample":
2025-07-06T00:48:43.0262078Z           23: 		resource "mongodbatlas_stream_connection" "sample" {
2025-07-06T00:48:43.0262387Z         
2025-07-06T00:48:43.0263224Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-3633293878086833951-STARTED-STOPPED-/connections
2025-07-06T00:48:43.0264110Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0264672Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0265046Z         BadRequestDetail: 
2025-07-06T00:48:43.0274710Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState test_terraform_path=/home/runner/work/_temp/571f2434-2bee-44d0-b41d-cfc3e67d82b8/terraform
2025-07-06T00:48:43.0281368Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (31.12s)
```
### 2025-07-07
#### FAIL 31 seconds
```
2025-07-07T00:48:05.7843202Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-07T00:48:05.7844121Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-07-07T00:48:05.7846417Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-07T00:48:05.7866763Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-07T00:48:05.7867327Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-07-07T00:48:05.7867779Z         
2025-07-07T00:48:05.7868049Z         Error: error creating resource
2025-07-07T00:48:05.7868415Z         
2025-07-07T00:48:05.7868765Z           with mongodbatlas_stream_processor.processor,
2025-07-07T00:48:05.7869549Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-07T00:48:05.7870275Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-07T00:48:05.7870602Z         
2025-07-07T00:48:05.7871496Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-8280698920455581078-STARTED-STOPPED-/processor
2025-07-07T00:48:05.7872403Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-07T00:48:05.7873008Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-07-07T00:48:05.7873834Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-07T00:48:05.7874477Z         internal error while provisioning resource from global resource manager.
2025-07-07T00:48:05.7875075Z         Reason: Bad Request. Params: [processor-stopped-to- failed to acquire
2025-07-07T00:48:05.7875870Z         resources for stream processor validation: internal error while provisioning
2025-07-07T00:48:05.7876445Z         resource from global resource manager], BadRequestDetail: 
2025-07-07T00:48:05.7892362Z    test_terraform_path=/home/runner/work/_temp/c51b1342-8f8b-48f5-80bd-084902e39212/terraform test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_working_directory=/tmp/plugintest4150747589 test_step_number=1
2025-07-07T00:48:05.7916310Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-07T00:48:05.7916960Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-07T00:48:05.7917389Z         
2025-07-07T00:48:05.7917652Z         Error: error deleting resource
2025-07-07T00:48:05.7917921Z         
2025-07-07T00:48:05.7918874Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-8280698920455581078-STARTED-STOPPED-/connections/sample_stream_solar
2025-07-07T00:48:05.7919703Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-07T00:48:05.7920229Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-07T00:48:05.7920866Z         name test-acc-tf-8280698920455581078-STARTED-STOPPED- has active processors,
2025-07-07T00:48:05.7921393Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-07T00:48:05.7922060Z         [test-acc-tf-8280698920455581078-STARTED-STOPPED-], BadRequestDetail: 
2025-07-07T00:48:05.7934974Z    test_step_number=1
2025-07-07T00:48:05.7942531Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (31.15s)
```
### 2025-07-08
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-08T00:45:56.121000+00:00-TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState',confidence=1.0,ts_when='an hour ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-08T00:45:56.1217193Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-08T00:45:56.1218689Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-07-08T00:45:56.1221645Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-08T00:45:56.1253688Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-08T00:45:56.1254782Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-07-08T00:45:56.1255392Z         
2025-07-08T00:45:56.1255855Z         Error: error creating resource
2025-07-08T00:45:56.1256296Z         
2025-07-08T00:45:56.1256909Z           with mongodbatlas_stream_processor.processor,
2025-07-08T00:45:56.1258151Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-08T00:45:56.1259304Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-08T00:45:56.1259876Z         
2025-07-08T00:45:56.1261417Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686c6668a5ec7701ec2c7a57/streams/test-acc-tf-8380705659193892505-STARTED-STOPPED-/processor
2025-07-08T00:45:56.1263017Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-08T00:45:56.1264116Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-07-08T00:45:56.1265466Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-08T00:45:56.1266591Z         internal error while provisioning resource from global resource manager.
2025-07-08T00:45:56.1267696Z         Reason: Bad Request. Params: [processor-stopped-to- failed to acquire
2025-07-08T00:45:56.1269234Z         resources for stream processor validation: internal error while provisioning
2025-07-08T00:45:56.1270330Z         resource from global resource manager], BadRequestDetail: 
2025-07-08T00:45:56.1295795Z   
2025-07-08T00:45:56.1296639Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-08T00:45:56.1297377Z         
2025-07-08T00:45:56.1297838Z         Error: error deleting resource
2025-07-08T00:45:56.1298296Z         
2025-07-08T00:45:56.1300077Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686c6668a5ec7701ec2c7a57/streams/test-acc-tf-8380705659193892505-STARTED-STOPPED-/connections/sample_stream_solar
2025-07-08T00:45:56.1301577Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-08T00:45:56.1302547Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-08T00:45:56.1303419Z         name sample_stream_solar in stream instance
2025-07-08T00:45:56.1304419Z         test-acc-tf-8380705659193892505-STARTED-STOPPED- has active processors, and
2025-07-08T00:45:56.1305689Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-08T00:45:56.1306750Z         test-acc-tf-8380705659193892505-STARTED-STOPPED-], BadRequestDetail: 
2025-07-08T00:45:56.1310789Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (31.21s)
```