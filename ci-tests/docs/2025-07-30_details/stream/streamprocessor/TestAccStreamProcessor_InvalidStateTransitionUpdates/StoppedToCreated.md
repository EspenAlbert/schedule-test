# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 30) FAIL(x 9)
Success rate: 76.92%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-03 00:46](#error-2025-07-03t0046390000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.03s
[2025-07-05 00:44](#error-2025-07-05t0044070000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6868719b37c6036ffcf44dbd/streams/test-acc-tf-5167471963251347488-STARTED-STOPPED-CREATED/processor | dev |  | 31.05s
[2025-07-07 00:48](#error-2025-07-07t0048050000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-6313782029487882125-STARTED-STOPPED-CREATED/processor | dev |  | 31.02s
[2025-07-09 01:00](#error-2025-07-09t0100420000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.02s
[2025-07-10 00:43](#error-2025-07-10t0043190000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.07s
[2025-07-11 02:31](#error-2025-07-11t0231570000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68705b004f431f68780bdce6/streams/test-acc-tf-7633430293460688275-STARTED-STOPPED-CREATED/processor | dev |  | 32.05s
[2025-07-12 00:48](#error-2025-07-12t0048120000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6871ac5247d9ab465fd0f148/streams/test-acc-tf-5781398686518972894-STARTED-STOPPED-CREATED/processor | dev |  | 31.02s
[2025-07-14 04:02](#error-2025-07-14t0402140000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68744fdf52cba864e5f10a3b/streams/test-acc-tf-3190265013517760957-STARTED-STOPPED-CREATED/processor | dev |  | 31.02s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor | qa |  | 0.05s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 13 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 13 seconds
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 11 seconds
- 2025-07-02 PASS 9 seconds
- 2025-07-03

### Error 2025-07-03T00:46:39+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-03T00:46:39.964000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated',confidence=1.0,ts_when='27 days ago')
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

- 2025-07-04 PASS 33 seconds
- 2025-07-05

### Error 2025-07-05T00:44:07+00:00
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

- 2025-07-06 PASS 16 seconds
- 2025-07-07

### Error 2025-07-07T00:48:05+00:00
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

- 2025-07-08 PASS 35 seconds
- 2025-07-09

### Error 2025-07-09T01:00:42+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-09T01:00:42.625000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated',confidence=1.0,ts_when='21 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-09T01:00:42.6257840Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-09T01:00:42.6258528Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-09T01:00:42.6262610Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-09T01:00:42.6279930Z   
2025-07-09T01:00:42.6335230Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-09T01:00:42.6335802Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-07-09T01:00:42.6336150Z         
2025-07-09T01:00:42.6336407Z         Error: error creating resource
2025-07-09T01:00:42.6336662Z         
2025-07-09T01:00:42.6336999Z           with mongodbatlas_stream_processor.processor,
2025-07-09T01:00:42.6337828Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-09T01:00:42.6338452Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-09T01:00:42.6338764Z         
2025-07-09T01:00:42.6339642Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686db7ff725a79527bea68dc/streams/test-acc-tf-9116325427461559586-STARTED-STOPPED-CREATED/processor
2025-07-09T01:00:42.6340543Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-09T01:00:42.6341176Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-07-09T01:00:42.6341820Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-09T01:00:42.6342431Z         internal error while provisioning resource from global resource manager.
2025-07-09T01:00:42.6343144Z         Reason: Bad Request. Params: [processor-stopped-to-created failed to acquire
2025-07-09T01:00:42.6343804Z         resources for stream processor validation: internal error while provisioning
2025-07-09T01:00:42.6344379Z         resource from global resource manager], BadRequestDetail: 
2025-07-09T01:00:42.6364856Z   
2025-07-09T01:00:42.6372129Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/ac271bf9-f112-4694-97db-53a9fe244f9d/terraform test_working_directory=/tmp/plugintest738403838
2025-07-09T01:00:42.6380077Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-09T01:00:42.6380740Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-09T01:00:42.6381162Z         
2025-07-09T01:00:42.6381419Z         Error: error deleting resource
2025-07-09T01:00:42.6381671Z         
2025-07-09T01:00:42.6382655Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686db7ff725a79527bea68dc/streams/test-acc-tf-9116325427461559586-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-07-09T01:00:42.6383630Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-09T01:00:42.6384139Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-09T01:00:42.6384611Z         name sample_stream_solar in stream instance
2025-07-09T01:00:42.6385111Z         test-acc-tf-9116325427461559586-STARTED-STOPPED-CREATED has active
2025-07-09T01:00:42.6385662Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-07-09T01:00:42.6386051Z         [sample_stream_solar
2025-07-09T01:00:42.6386568Z         test-acc-tf-9116325427461559586-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-07-09T01:00:42.6399982Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_terraform_path=/home/runner/work/_temp/ac271bf9-f112-4694-97db-53a9fe244f9d/terraform test_working_directory=/tmp/plugintest1531726185
2025-07-09T01:00:42.6409188Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (31.18s)
```

- 2025-07-10
  - FAIL 31 seconds

### Error 2025-07-10T00:43:19+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-10T00:43:19.378000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated',confidence=1.0,ts_when='20 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-10T00:43:19.3780784Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-10T00:43:19.3781475Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-10T00:43:19.3785711Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-10T00:43:19.3802831Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/f29cbc8a-ca73-47a9-ae39-889e2f729155/terraform test_working_directory=/tmp/plugintest142669367 test_step_number=1
2025-07-10T00:43:19.3803990Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-07-10T00:43:19.3804358Z         
2025-07-10T00:43:19.3804633Z         Error: error creating resource
2025-07-10T00:43:19.3804898Z         
2025-07-10T00:43:19.3805259Z           with mongodbatlas_stream_processor.processor,
2025-07-10T00:43:19.3805956Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-10T00:43:19.3806827Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-10T00:43:19.3807163Z         
2025-07-10T00:43:19.3808071Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686f096a964afc762c202930/streams/test-acc-tf-8911499951727269164-STARTED-STOPPED-CREATED/processor
2025-07-10T00:43:19.3808995Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-10T00:43:19.3809805Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-07-10T00:43:19.3810476Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-10T00:43:19.3811115Z         internal error while provisioning resource from global resource manager.
2025-07-10T00:43:19.3811767Z         Reason: Bad Request. Params: [processor-stopped-to-created failed to acquire
2025-07-10T00:43:19.3812431Z         resources for stream processor validation: internal error while provisioning
2025-07-10T00:43:19.3813016Z         resource from global resource manager], BadRequestDetail: 
2025-07-10T00:43:19.3829844Z    test_step_number=1 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_terraform_path=/home/runner/work/_temp/f29cbc8a-ca73-47a9-ae39-889e2f729155/terraform
2025-07-10T00:43:19.3882501Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-10T00:43:19.3883185Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T00:43:19.3883614Z         
2025-07-10T00:43:19.3883883Z         Error: error deleting resource
2025-07-10T00:43:19.3884155Z         
2025-07-10T00:43:19.3885172Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686f096a964afc762c202930/streams/test-acc-tf-8911499951727269164-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-07-10T00:43:19.3886045Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-10T00:43:19.3886814Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-10T00:43:19.3887326Z         name sample_stream_solar in stream instance
2025-07-10T00:43:19.3887852Z         test-acc-tf-8911499951727269164-STARTED-STOPPED-CREATED has active
2025-07-10T00:43:19.3888437Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-07-10T00:43:19.3888830Z         [sample_stream_solar
2025-07-10T00:43:19.3889366Z         test-acc-tf-8911499951727269164-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-07-10T00:43:19.3903008Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_terraform_path=/home/runner/work/_temp/f29cbc8a-ca73-47a9-ae39-889e2f729155/terraform test_working_directory=/tmp/plugintest1383144642
2025-07-10T00:43:19.3933019Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (31.75s)
```

  - PASS 10 seconds
- 2025-07-11

### Error 2025-07-11T02:31:57+00:00
```
2025-07-11T02:31:57.1506236Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-11T02:31:57.1507610Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-11T02:31:57.1514895Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-11T02:31:57.1544744Z    test_step_number=1 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_terraform_path=/home/runner/work/_temp/6369477f-582e-4c02-bb93-54d3b949efda/terraform
2025-07-11T02:31:57.1631198Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-11T02:31:57.1632230Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-07-11T02:31:57.1632854Z         
2025-07-11T02:31:57.1633323Z         Error: error creating resource
2025-07-11T02:31:57.1633831Z         
2025-07-11T02:31:57.1634444Z           with mongodbatlas_stream_processor.processor,
2025-07-11T02:31:57.1635868Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-11T02:31:57.1637012Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-11T02:31:57.1637579Z         
2025-07-11T02:31:57.1639192Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705b004f431f68780bdce6/streams/test-acc-tf-7633430293460688275-STARTED-STOPPED-CREATED/processor
2025-07-11T02:31:57.1641007Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-11T02:31:57.1642178Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-07-11T02:31:57.1643364Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-11T02:31:57.1644498Z         internal error while provisioning resource from global resource manager.
2025-07-11T02:31:57.1645662Z         Reason: Bad Request. Params: [processor-stopped-to-created failed to acquire
2025-07-11T02:31:57.1646850Z         resources for stream processor validation: internal error while provisioning
2025-07-11T02:31:57.1647878Z         resource from global resource manager], BadRequestDetail: 
2025-07-11T02:31:57.1672381Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/6369477f-582e-4c02-bb93-54d3b949efda/terraform test_working_directory=/tmp/plugintest1584012136 test_step_number=1
2025-07-11T02:31:57.1673967Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-11T02:31:57.1674498Z         
2025-07-11T02:31:57.1674824Z         Error: error deleting resource
2025-07-11T02:31:57.1675150Z         
2025-07-11T02:31:57.1676406Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705b004f431f68780bdce6/streams/test-acc-tf-7633430293460688275-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-07-11T02:31:57.1677687Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-11T02:31:57.1678344Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-11T02:31:57.1678949Z         name sample_stream_solar in stream instance
2025-07-11T02:31:57.1679576Z         test-acc-tf-7633430293460688275-STARTED-STOPPED-CREATED has active
2025-07-11T02:31:57.1680511Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-07-11T02:31:57.1680984Z         [sample_stream_solar
2025-07-11T02:31:57.1681532Z         test-acc-tf-7633430293460688275-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-07-11T02:31:57.1699237Z   
2025-07-11T02:31:57.1731351Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (32.55s)
```

- 2025-07-12

### Error 2025-07-12T00:48:12+00:00
```
2025-07-12T00:48:12.3562047Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-12T00:48:12.3562733Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-12T00:48:12.3566979Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-12T00:48:12.3586556Z   
2025-07-12T00:48:12.3586941Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-07-12T00:48:12.3587312Z         
2025-07-12T00:48:12.3587587Z         Error: error creating resource
2025-07-12T00:48:12.3587860Z         
2025-07-12T00:48:12.3588213Z           with mongodbatlas_stream_processor.processor,
2025-07-12T00:48:12.3588892Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-12T00:48:12.3589532Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-12T00:48:12.3589863Z         
2025-07-12T00:48:12.3590728Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6871ac5247d9ab465fd0f148/streams/test-acc-tf-5781398686518972894-STARTED-STOPPED-CREATED/processor
2025-07-12T00:48:12.3591631Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-12T00:48:12.3592275Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-07-12T00:48:12.3592934Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-12T00:48:12.3593560Z         internal error while provisioning resource from global resource manager.
2025-07-12T00:48:12.3594195Z         Reason: Bad Request. Params: [processor-stopped-to-created failed to acquire
2025-07-12T00:48:12.3594846Z         resources for stream processor validation: internal error while provisioning
2025-07-12T00:48:12.3595616Z         resource from global resource manager], BadRequestDetail: 
2025-07-12T00:48:12.3614093Z   
2025-07-12T00:48:12.3684395Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-12T00:48:12.3685073Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-12T00:48:12.3685714Z         
2025-07-12T00:48:12.3685989Z         Error: error deleting resource
2025-07-12T00:48:12.3686260Z         
2025-07-12T00:48:12.3687239Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6871ac5247d9ab465fd0f148/streams/test-acc-tf-5781398686518972894-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-07-12T00:48:12.3688098Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-12T00:48:12.3688622Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-12T00:48:12.3689114Z         name sample_stream_solar in stream instance
2025-07-12T00:48:12.3689633Z         test-acc-tf-5781398686518972894-STARTED-STOPPED-CREATED has active
2025-07-12T00:48:12.3690198Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-07-12T00:48:12.3690591Z         [sample_stream_solar
2025-07-12T00:48:12.3691106Z         test-acc-tf-5781398686518972894-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-07-12T00:48:12.3711600Z   
2025-07-12T00:48:12.3734463Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (31.20s)
```

- 2025-07-13 PASS 35 seconds
- 2025-07-14

### Error 2025-07-14T04:02:14+00:00
```
2025-07-14T04:02:14.1301164Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-14T04:02:14.1301946Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-14T04:02:14.1307382Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-14T04:02:14.1333904Z    test_working_directory=/tmp/plugintest2508787338 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/a5da4b3c-7f27-4c7f-a536-72a9efc4bb70/terraform test_step_number=1
2025-07-14T04:02:14.1390276Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-14T04:02:14.1390861Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-07-14T04:02:14.1391218Z         
2025-07-14T04:02:14.1391489Z         Error: error creating resource
2025-07-14T04:02:14.1391750Z         
2025-07-14T04:02:14.1392101Z           with mongodbatlas_stream_processor.processor,
2025-07-14T04:02:14.1392794Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-14T04:02:14.1393655Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-14T04:02:14.1393982Z         
2025-07-14T04:02:14.1394860Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fdf52cba864e5f10a3b/streams/test-acc-tf-3190265013517760957-STARTED-STOPPED-CREATED/processor
2025-07-14T04:02:14.1395893Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-14T04:02:14.1396532Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-07-14T04:02:14.1397189Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-14T04:02:14.1397809Z         internal error while provisioning resource from global resource manager.
2025-07-14T04:02:14.1398449Z         Reason: Bad Request. Params: [processor-stopped-to-created failed to acquire
2025-07-14T04:02:14.1399103Z         resources for stream processor validation: internal error while provisioning
2025-07-14T04:02:14.1399675Z         resource from global resource manager], BadRequestDetail: 
2025-07-14T04:02:14.1419219Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_terraform_path=/home/runner/work/_temp/a5da4b3c-7f27-4c7f-a536-72a9efc4bb70/terraform test_working_directory=/tmp/plugintest235449572
2025-07-14T04:02:14.1456644Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-14T04:02:14.1457308Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T04:02:14.1457741Z         
2025-07-14T04:02:14.1458014Z         Error: error deleting resource
2025-07-14T04:02:14.1458287Z         
2025-07-14T04:02:14.1459284Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fdf52cba864e5f10a3b/streams/test-acc-tf-3190265013517760957-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-07-14T04:02:14.1460258Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-14T04:02:14.1460783Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-14T04:02:14.1461265Z         name sample_stream_solar in stream instance
2025-07-14T04:02:14.1461786Z         test-acc-tf-3190265013517760957-STARTED-STOPPED-CREATED has active
2025-07-14T04:02:14.1462348Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-07-14T04:02:14.1462740Z         [sample_stream_solar
2025-07-14T04:02:14.1463374Z         test-acc-tf-3190265013517760957-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-07-14T04:02:14.1465942Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (31.17s)
```

- 2025-07-15 PASS 8 seconds
- 2025-07-16 PASS 9 seconds
- 2025-07-17 PASS 6 seconds
- 2025-07-18 PASS 9 seconds
- 2025-07-19 PASS 8 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.7208598Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-20T00:53:03.7209274Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-07-20T00:53:03.7213388Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-20T00:53:03.7227395Z   
2025-07-20T00:53:03.7290691Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-07-20T00:53:03.7291754Z     resource_test.go:259: Step 1/3 error: Error running apply: exit status 1
2025-07-20T00:53:03.7292424Z         
2025-07-20T00:53:03.7292922Z         Error: error creating resource
2025-07-20T00:53:03.7314047Z         
2025-07-20T00:53:03.7314472Z           with mongodbatlas_stream_processor.processor,
2025-07-20T00:53:03.7315180Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-07-20T00:53:03.7316185Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-20T00:53:03.7316535Z         
2025-07-20T00:53:03.7317296Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor
2025-07-20T00:53:03.7318119Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7318697Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7319291Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7319842Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7320219Z         BadRequestDetail: 
2025-07-20T00:53:03.7322563Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (0.49s)
```

- 2025-07-21 PASS 9 seconds
- 2025-07-22 PASS 8 seconds
- 2025-07-23
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-07-24 PASS 8 seconds
- 2025-07-25 PASS 9 seconds
- 2025-07-26 PASS 8 seconds
- 2025-07-27 PASS 7 seconds
- 2025-07-28 PASS 8 seconds
- 2025-07-29 PASS 7 seconds
- 2025-07-30 PASS 8 seconds