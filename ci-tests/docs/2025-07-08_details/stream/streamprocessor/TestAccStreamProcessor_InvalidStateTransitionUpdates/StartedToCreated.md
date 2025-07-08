# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, FAIL(x 6) PASS(x 3)
Success rate: 33.33%

## Timeline
### 2025-07-01
#### PASS 7 seconds
#### PASS 8 seconds
### 2025-07-02
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.926000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='6 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-02T00:46:31.9269863Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-02T00:46:31.9270548Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-02T00:46:31.9272568Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-02T00:46:31.9296802Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-02T00:46:31.9297401Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-02T00:46:31.9297755Z         
2025-07-02T00:46:31.9298025Z         Error: error creating resource
2025-07-02T00:46:31.9298293Z         
2025-07-02T00:46:31.9298641Z           with mongodbatlas_stream_processor.processor,
2025-07-02T00:46:31.9299321Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-02T00:46:31.9299950Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-02T00:46:31.9300278Z         
2025-07-02T00:46:31.9301121Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-6430886400769056754--STARTED-CREATED/processor
2025-07-02T00:46:31.9302232Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-02T00:46:31.9302882Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-02T00:46:31.9303551Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-02T00:46:31.9304180Z         internal error while provisioning resource from global resource manager.
2025-07-02T00:46:31.9304823Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-02T00:46:31.9305476Z         resources for stream processor validation: internal error while provisioning
2025-07-02T00:46:31.9306048Z         resource from global resource manager], BadRequestDetail: 
2025-07-02T00:46:31.9320078Z    test_terraform_path=/home/runner/work/_temp/562e13ef-6059-4fe1-8ce4-2da40aa0a837/terraform test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_working_directory=/tmp/plugintest220322980 test_step_number=1
2025-07-02T00:46:31.9321328Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-02T00:46:31.9321908Z         
2025-07-02T00:46:31.9322182Z         Error: error deleting resource
2025-07-02T00:46:31.9322446Z         
2025-07-02T00:46:31.9323416Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-6430886400769056754--STARTED-CREATED/connections/sample_stream_solar
2025-07-02T00:46:31.9324257Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-02T00:46:31.9324794Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-02T00:46:31.9325471Z         name test-acc-tf-6430886400769056754--STARTED-CREATED has active processors,
2025-07-02T00:46:31.9326025Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-02T00:46:31.9326575Z         [test-acc-tf-6430886400769056754--STARTED-CREATED], BadRequestDetail: 
2025-07-02T00:46:31.9329124Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.08s)
```
### 2025-07-03
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-03T00:46:39.964000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='5 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-03T00:46:39.9647034Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-03T00:46:39.9647700Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-03T00:46:39.9649484Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-03T00:46:39.9674495Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-03T00:46:39.9675069Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-03T00:46:39.9675535Z         
2025-07-03T00:46:39.9675806Z         Error: error creating resource
2025-07-03T00:46:39.9676064Z         
2025-07-03T00:46:39.9676418Z           with mongodbatlas_stream_processor.processor,
2025-07-03T00:46:39.9677089Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-03T00:46:39.9677737Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-03T00:46:39.9678069Z         
2025-07-03T00:46:39.9678896Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6865cef1699daf2aab4cc130/streams/test-acc-tf-6776327642991085805--STARTED-CREATED/processor
2025-07-03T00:46:39.9679767Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-03T00:46:39.9680399Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-03T00:46:39.9681054Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-03T00:46:39.9681668Z         internal error while provisioning resource from global resource manager.
2025-07-03T00:46:39.9682299Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-03T00:46:39.9682943Z         resources for stream processor validation: internal error while provisioning
2025-07-03T00:46:39.9683512Z         resource from global resource manager], BadRequestDetail: 
2025-07-03T00:46:39.9693061Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/ef39a757-d25f-4082-b21a-dc72cb293981/terraform
2025-07-03T00:46:39.9762968Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-03T00:46:39.9763632Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-03T00:46:39.9764057Z         
2025-07-03T00:46:39.9764324Z         Error: error deleting resource
2025-07-03T00:46:39.9764585Z         
2025-07-03T00:46:39.9765746Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6865cef1699daf2aab4cc130/streams/test-acc-tf-6776327642991085805--STARTED-CREATED/connections/sample_stream_solar
2025-07-03T00:46:39.9766577Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-03T00:46:39.9767099Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-03T00:46:39.9768100Z         name test-acc-tf-6776327642991085805--STARTED-CREATED has active processors,
2025-07-03T00:46:39.9768789Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-03T00:46:39.9769344Z         [test-acc-tf-6776327642991085805--STARTED-CREATED], BadRequestDetail: 
2025-07-03T00:46:39.9782145Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-03T00:46:39.9790584Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.28s)
```
### 2025-07-04
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-04T00:51:07.714000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='4 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-04T00:51:07.7146470Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-04T00:51:07.7147168Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-04T00:51:07.7149293Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-04T00:51:07.7171876Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-04T00:51:07.7172578Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-04T00:51:07.7172950Z         
2025-07-04T00:51:07.7173328Z         Error: error creating resource
2025-07-04T00:51:07.7173602Z         
2025-07-04T00:51:07.7174054Z           with mongodbatlas_stream_processor.processor,
2025-07-04T00:51:07.7174836Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-07-04T00:51:07.7175750Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-04T00:51:07.7176096Z         
2025-07-04T00:51:07.7177057Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6867204b579d4c1b1e7ac9f7/streams/test-acc-tf-3753323963700127068--STARTED-CREATED/processor
2025-07-04T00:51:07.7178343Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-04T00:51:07.7179125Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-04T00:51:07.7179898Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-04T00:51:07.7180636Z         internal error while provisioning resource from global resource manager.
2025-07-04T00:51:07.7181377Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-04T00:51:07.7182147Z         resources for stream processor validation: internal error while provisioning
2025-07-04T00:51:07.7182761Z         resource from global resource manager], BadRequestDetail: 
2025-07-04T00:51:07.7197499Z    test_terraform_path=/home/runner/work/_temp/c3d41cd1-2970-494b-9abe-ad1b88c82e94/terraform test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-04T00:51:07.7198757Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-04T00:51:07.7199265Z         
2025-07-04T00:51:07.7199588Z         Error: error deleting resource
2025-07-04T00:51:07.7199923Z         
2025-07-04T00:51:07.7200996Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6867204b579d4c1b1e7ac9f7/streams/test-acc-tf-3753323963700127068--STARTED-CREATED/connections/sample_stream_solar
2025-07-04T00:51:07.7201967Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-04T00:51:07.7202588Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-04T00:51:07.7203353Z         name test-acc-tf-3753323963700127068--STARTED-CREATED has active processors,
2025-07-04T00:51:07.7204157Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-04T00:51:07.7204855Z         [test-acc-tf-3753323963700127068--STARTED-CREATED], BadRequestDetail: 
2025-07-04T00:51:07.7210050Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.04s)
```
### 2025-07-05
#### FAIL 31 seconds
```
2025-07-05T00:44:07.6017934Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-05T00:44:07.6019154Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-05T00:44:07.6022112Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-05T00:44:07.6059538Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-05T00:44:07.6060592Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-05T00:44:07.6061209Z         
2025-07-05T00:44:07.6061664Z         Error: error creating resource
2025-07-05T00:44:07.6062107Z         
2025-07-05T00:44:07.6062709Z           with mongodbatlas_stream_processor.processor,
2025-07-05T00:44:07.6064102Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-05T00:44:07.6064866Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-05T00:44:07.6065193Z         
2025-07-05T00:44:07.6066032Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868719b37c6036ffcf44dbd/streams/test-acc-tf-5112983405997186349--STARTED-CREATED/processor
2025-07-05T00:44:07.6066895Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-05T00:44:07.6067679Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-05T00:44:07.6068343Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-05T00:44:07.6068960Z         internal error while provisioning resource from global resource manager.
2025-07-05T00:44:07.6069578Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-05T00:44:07.6070214Z         resources for stream processor validation: internal error while provisioning
2025-07-05T00:44:07.6070778Z         resource from global resource manager], BadRequestDetail: 
2025-07-05T00:44:07.6088114Z   
2025-07-05T00:44:07.6111097Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-05T00:44:07.6111765Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-05T00:44:07.6112180Z         
2025-07-05T00:44:07.6112444Z         Error: error deleting resource
2025-07-05T00:44:07.6112700Z         
2025-07-05T00:44:07.6113644Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868719b37c6036ffcf44dbd/streams/test-acc-tf-5112983405997186349--STARTED-CREATED/connections/sample_stream_solar
2025-07-05T00:44:07.6114573Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-05T00:44:07.6115083Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-05T00:44:07.6115837Z         name test-acc-tf-5112983405997186349--STARTED-CREATED has active processors,
2025-07-05T00:44:07.6116360Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-05T00:44:07.6116885Z         [test-acc-tf-5112983405997186349--STARTED-CREATED], BadRequestDetail: 
2025-07-05T00:44:07.6129620Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/503c00e9-2f1d-4f06-8735-86b25f02f37b/terraform test_working_directory=/tmp/plugintest4287549 test_step_number=1
2025-07-05T00:44:07.6138149Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.50s)
```
### 2025-07-06
#### PASS 13 seconds
### 2025-07-07
#### FAIL 31 seconds
```
2025-07-07T00:48:05.7948028Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-07T00:48:05.7948696Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-07T00:48:05.7950334Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-07T00:48:05.7995057Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-07T00:48:05.7995777Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-07T00:48:05.7996170Z         
2025-07-07T00:48:05.7996434Z         Error: error creating resource
2025-07-07T00:48:05.7996697Z         
2025-07-07T00:48:05.7997041Z           with mongodbatlas_stream_processor.processor,
2025-07-07T00:48:05.7997717Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-07T00:48:05.7998342Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-07T00:48:05.7998657Z         
2025-07-07T00:48:05.7999481Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-4358267423821056890--STARTED-CREATED/processor
2025-07-07T00:48:05.8000342Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-07T00:48:05.8000975Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-07T00:48:05.8001754Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-07T00:48:05.8002368Z         internal error while provisioning resource from global resource manager.
2025-07-07T00:48:05.8002990Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-07T00:48:05.8003628Z         resources for stream processor validation: internal error while provisioning
2025-07-07T00:48:05.8004199Z         resource from global resource manager], BadRequestDetail: 
2025-07-07T00:48:05.8021489Z   
2025-07-07T00:48:05.8063875Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-07T00:48:05.8064658Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-07T00:48:05.8065080Z         
2025-07-07T00:48:05.8065344Z         Error: error deleting resource
2025-07-07T00:48:05.8065609Z         
2025-07-07T00:48:05.8066721Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-4358267423821056890--STARTED-CREATED/connections/sample_stream_solar
2025-07-07T00:48:05.8067537Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-07T00:48:05.8068063Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-07T00:48:05.8068691Z         name test-acc-tf-4358267423821056890--STARTED-CREATED has active processors,
2025-07-07T00:48:05.8069213Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-07T00:48:05.8069742Z         [test-acc-tf-4358267423821056890--STARTED-CREATED], BadRequestDetail: 
2025-07-07T00:48:05.8082767Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/c51b1342-8f8b-48f5-80bd-084902e39212/terraform test_working_directory=/tmp/plugintest1718479075
2025-07-07T00:48:05.8091686Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.12s)
```
### 2025-07-08
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-08T00:45:56.131000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='3 hours ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-08T00:45:56.1319529Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-08T00:45:56.1320779Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-08T00:45:56.1323816Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-08T00:45:56.1405408Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-08T00:45:56.1406454Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-08T00:45:56.1407066Z         
2025-07-08T00:45:56.1407527Z         Error: error creating resource
2025-07-08T00:45:56.1407993Z         
2025-07-08T00:45:56.1408619Z           with mongodbatlas_stream_processor.processor,
2025-07-08T00:45:56.1409861Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-08T00:45:56.1411025Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-08T00:45:56.1411579Z         
2025-07-08T00:45:56.1413126Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686c6668a5ec7701ec2c7a57/streams/test-acc-tf-1610442013165794056--STARTED-CREATED/processor
2025-07-08T00:45:56.1415115Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-08T00:45:56.1416290Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-08T00:45:56.1417494Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-08T00:45:56.1418641Z         internal error while provisioning resource from global resource manager.
2025-07-08T00:45:56.1419817Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-08T00:45:56.1421009Z         resources for stream processor validation: internal error while provisioning
2025-07-08T00:45:56.1422047Z         resource from global resource manager], BadRequestDetail: 
2025-07-08T00:45:56.1447718Z   
2025-07-08T00:45:56.1448523Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-08T00:45:56.1449250Z         
2025-07-08T00:45:56.1449707Z         Error: error deleting resource
2025-07-08T00:45:56.1450144Z         
2025-07-08T00:45:56.1451924Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686c6668a5ec7701ec2c7a57/streams/test-acc-tf-1610442013165794056--STARTED-CREATED/connections/sample_stream_solar
2025-07-08T00:45:56.1453384Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-08T00:45:56.1454326Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-08T00:45:56.1455322Z         name sample_stream_solar in stream instance
2025-07-08T00:45:56.1456311Z         test-acc-tf-1610442013165794056--STARTED-CREATED has active processors, and
2025-07-08T00:45:56.1457551Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-08T00:45:56.1458611Z         test-acc-tf-1610442013165794056--STARTED-CREATED], BadRequestDetail: 
2025-07-08T00:45:56.1483956Z   
2025-07-08T00:45:56.1503212Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.18s)
```