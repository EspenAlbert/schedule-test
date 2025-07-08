# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL(x 3)
Success rate: 70.00%

## Timeline
### 2025-07-01
#### PASS 12 seconds
```
2025-07-01T08:50:28.2802831Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-01T08:50:28.2804307Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-01T08:50:28.2811806Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-01T08:50:28.2832156Z     --- PASS: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (12.89s)
```
#### PASS 9 seconds
```
2025-07-01T12:50:20.6109567Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-01T12:50:20.6110224Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-01T12:50:20.6114234Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-01T12:50:20.6124650Z     --- PASS: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (9.70s)
```
#### PASS 11 seconds
```
2025-07-01T17:50:24.3550328Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-01T17:50:24.3551563Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-01T17:50:24.3559098Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-01T17:50:24.3578098Z     --- PASS: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (11.89s)
```
### 2025-07-02
#### PASS 9 seconds
```
2025-07-02T00:46:31.9268020Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-02T00:46:31.9268720Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-02T00:46:31.9273121Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-02T00:46:31.9296466Z   
2025-07-02T00:46:31.9328424Z     --- PASS: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (9.63s)
```
### 2025-07-03
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-03T00:46:39.964000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated',confidence=1.0,ts_when='5 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-03T00:46:39.9644999Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-03T00:46:39.9645897Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-03T00:46:39.9650011Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-03T00:46:39.9673938Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-03T00:46:39.9720776Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-03T00:46:39.9721348Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-07-03T00:46:39.9721706Z         
2025-07-03T00:46:39.9721977Z         Error: error creating resource
2025-07-03T00:46:39.9722241Z         
2025-07-03T00:46:39.9722587Z           with mongodbatlas_stream_processor.processor,
2025-07-03T00:46:39.9723260Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-03T00:46:39.9723889Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-03T00:46:39.9724205Z         
2025-07-03T00:46:39.9725066Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6865cef1699daf2aab4cc130/streams/test-acc-tf-8481121546760680612-STARTED-STOPPED-CREATED/processor
2025-07-03T00:46:39.9726182Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-03T00:46:39.9726814Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-07-03T00:46:39.9727458Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-03T00:46:39.9728077Z         internal error while provisioning resource from global resource manager.
2025-07-03T00:46:39.9728705Z         Reason: Bad Request. Params: [processor-stopped-to-created failed to acquire
2025-07-03T00:46:39.9729352Z         resources for stream processor validation: internal error while provisioning
2025-07-03T00:46:39.9729915Z         resource from global resource manager], BadRequestDetail: 
2025-07-03T00:46:39.9743796Z   
2025-07-03T00:46:39.9744257Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-03T00:46:39.9744684Z         
2025-07-03T00:46:39.9744949Z         Error: error deleting resource
2025-07-03T00:46:39.9745405Z         
2025-07-03T00:46:39.9746413Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6865cef1699daf2aab4cc130/streams/test-acc-tf-8481121546760680612-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-07-03T00:46:39.9747261Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-03T00:46:39.9747790Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-03T00:46:39.9748396Z         name test-acc-tf-8481121546760680612-STARTED-STOPPED-CREATED has active
2025-07-03T00:46:39.9748976Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-07-03T00:46:39.9749621Z         [test-acc-tf-8481121546760680612-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-07-03T00:46:39.9762354Z    test_step_number=1 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-03T00:46:39.9789886Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (31.27s)
```
### 2025-07-04
#### PASS 33 seconds
```
2025-07-04T00:51:07.7144610Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-04T00:51:07.7145312Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-04T00:51:07.7149847Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-04T00:51:07.7171421Z   
2025-07-04T00:51:07.7210772Z     --- PASS: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (33.72s)
```
### 2025-07-05
#### FAIL 31 seconds
```
2025-07-05T00:44:07.6014686Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-05T00:44:07.6015928Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-05T00:44:07.6023056Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-05T00:44:07.6058537Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-05T00:44:07.6088454Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-05T00:44:07.6089046Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-07-05T00:44:07.6089395Z         
2025-07-05T00:44:07.6089658Z         Error: error creating resource
2025-07-05T00:44:07.6089920Z         
2025-07-05T00:44:07.6090261Z           with mongodbatlas_stream_processor.processor,
2025-07-05T00:44:07.6091057Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-05T00:44:07.6091678Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-05T00:44:07.6091991Z         
2025-07-05T00:44:07.6092855Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868719b37c6036ffcf44dbd/streams/test-acc-tf-5167471963251347488-STARTED-STOPPED-CREATED/processor
2025-07-05T00:44:07.6093864Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-05T00:44:07.6094501Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-07-05T00:44:07.6095145Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-05T00:44:07.6095909Z         internal error while provisioning resource from global resource manager.
2025-07-05T00:44:07.6096538Z         Reason: Bad Request. Params: [processor-stopped-to-created failed to acquire
2025-07-05T00:44:07.6097180Z         resources for stream processor validation: internal error while provisioning
2025-07-05T00:44:07.6097736Z         resource from global resource manager], BadRequestDetail: 
2025-07-05T00:44:07.6110372Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_working_directory=/tmp/plugintest1867201844
2025-07-05T00:44:07.6130689Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-05T00:44:07.6131686Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-05T00:44:07.6132157Z         
2025-07-05T00:44:07.6132433Z         Error: error deleting resource
2025-07-05T00:44:07.6132701Z         
2025-07-05T00:44:07.6133698Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868719b37c6036ffcf44dbd/streams/test-acc-tf-5167471963251347488-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-07-05T00:44:07.6134683Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-05T00:44:07.6135199Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-05T00:44:07.6135812Z         name test-acc-tf-5167471963251347488-STARTED-STOPPED-CREATED has active
2025-07-05T00:44:07.6136376Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-07-05T00:44:07.6136983Z         [test-acc-tf-5167471963251347488-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-07-05T00:44:07.6138835Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (31.51s)
```
### 2025-07-06
#### PASS 16 seconds
```
2025-07-06T00:48:43.0284759Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-06T00:48:43.0285436Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-06T00:48:43.0289530Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-06T00:48:43.0300121Z     --- PASS: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (16.65s)
```
### 2025-07-07
#### FAIL 31 seconds
```
2025-07-07T00:48:05.7946244Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-07T00:48:05.7946920Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-07T00:48:05.7950864Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-07T00:48:05.7967451Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/c51b1342-8f8b-48f5-80bd-084902e39212/terraform test_working_directory=/tmp/plugintest1881823664
2025-07-07T00:48:05.8021827Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-07T00:48:05.8022394Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-07-07T00:48:05.8022737Z         
2025-07-07T00:48:05.8022997Z         Error: error creating resource
2025-07-07T00:48:05.8023249Z         
2025-07-07T00:48:05.8023592Z           with mongodbatlas_stream_processor.processor,
2025-07-07T00:48:05.8024257Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-07T00:48:05.8024876Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-07T00:48:05.8025304Z         
2025-07-07T00:48:05.8026337Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-6313782029487882125-STARTED-STOPPED-CREATED/processor
2025-07-07T00:48:05.8027238Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-07T00:48:05.8027875Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-07-07T00:48:05.8028525Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-07T00:48:05.8029147Z         internal error while provisioning resource from global resource manager.
2025-07-07T00:48:05.8029771Z         Reason: Bad Request. Params: [processor-stopped-to-created failed to acquire
2025-07-07T00:48:05.8030414Z         resources for stream processor validation: internal error while provisioning
2025-07-07T00:48:05.8030978Z         resource from global resource manager], BadRequestDetail: 
2025-07-07T00:48:05.8044130Z   
2025-07-07T00:48:05.8083802Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-07T00:48:05.8084474Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-07T00:48:05.8084893Z         
2025-07-07T00:48:05.8085155Z         Error: error deleting resource
2025-07-07T00:48:05.8085424Z         
2025-07-07T00:48:05.8086570Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-6313782029487882125-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-07-07T00:48:05.8087419Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-07T00:48:05.8087942Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-07T00:48:05.8088540Z         name test-acc-tf-6313782029487882125-STARTED-STOPPED-CREATED has active
2025-07-07T00:48:05.8089228Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-07-07T00:48:05.8089844Z         [test-acc-tf-6313782029487882125-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-07-07T00:48:05.8092371Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (31.24s)
```
### 2025-07-08
#### PASS 35 seconds
```
2025-07-08T00:45:56.1316206Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-08T00:45:56.1317504Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-08T00:45:56.1324996Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-08T00:45:56.1356621Z   
2025-07-08T00:45:56.1505961Z     --- PASS: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (35.65s)
```