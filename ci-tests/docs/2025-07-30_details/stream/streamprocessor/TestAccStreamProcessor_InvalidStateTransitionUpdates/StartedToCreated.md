# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 27) FAIL(x 12)
Success rate: 69.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-02 00:46](#error-2025-07-02t0046310000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.01s
[2025-07-03 00:46](#error-2025-07-03t0046390000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.03s
[2025-07-04 00:51](#error-2025-07-04t0051070000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.00s
[2025-07-05 00:44](#error-2025-07-05t0044070000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6868719b37c6036ffcf44dbd/streams/test-acc-tf-5112983405997186349--STARTED-CREATED/processor | dev |  | 31.05s
[2025-07-07 00:48](#error-2025-07-07t0048050000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-4358267423821056890--STARTED-CREATED/processor | dev |  | 31.01s
[2025-07-08 00:45](#error-2025-07-08t0045560000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.02s
[2025-07-09 01:00](#error-2025-07-09t0100420000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.02s
[2025-07-10 00:43](#error-2025-07-10t0043190000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.08s
[2025-07-11 02:31](#error-2025-07-11t0231570000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68705b004f431f68780bdce6/streams/test-acc-tf-3593283012887446184--STARTED-CREATED/processor | dev |  | 31.09s
[2025-07-12 00:48](#error-2025-07-12t0048120000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6871ac5247d9ab465fd0f148/streams/test-acc-tf-3329758383117538255--STARTED-CREATED/processor | dev |  | 31.02s
[2025-07-14 04:02](#error-2025-07-14t0402140000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68744fdf52cba864e5f10a3b/streams/test-acc-tf-7515563133604987921--STARTED-CREATED/processor | dev |  | 31.02s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor | qa |  | 0.05s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-07-02

### Error 2025-07-02T00:46:31+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.926000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='28 days ago')
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

- 2025-07-03

### Error 2025-07-03T00:46:39+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-03T00:46:39.964000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='27 days ago')
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

- 2025-07-04

### Error 2025-07-04T00:51:07+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-04T00:51:07.714000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='26 days ago')
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

- 2025-07-05

### Error 2025-07-05T00:44:07+00:00
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

- 2025-07-06 PASS 13 seconds
- 2025-07-07

### Error 2025-07-07T00:48:05+00:00
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

- 2025-07-08

### Error 2025-07-08T00:45:56+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-08T00:45:56.131000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='22 days ago')
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

- 2025-07-09

### Error 2025-07-09T01:00:42+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-09T01:00:42.625000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='21 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-09T01:00:42.6259645Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-09T01:00:42.6260320Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-09T01:00:42.6262086Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-09T01:00:42.6314068Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-09T01:00:42.6314643Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-09T01:00:42.6314987Z         
2025-07-09T01:00:42.6315245Z         Error: error creating resource
2025-07-09T01:00:42.6315504Z         
2025-07-09T01:00:42.6315851Z           with mongodbatlas_stream_processor.processor,
2025-07-09T01:00:42.6316525Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-09T01:00:42.6317147Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-09T01:00:42.6317637Z         
2025-07-09T01:00:42.6318477Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686db7ff725a79527bea68dc/streams/test-acc-tf-2533026301715539594--STARTED-CREATED/processor
2025-07-09T01:00:42.6319348Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-09T01:00:42.6319992Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-09T01:00:42.6320633Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-09T01:00:42.6321245Z         internal error while provisioning resource from global resource manager.
2025-07-09T01:00:42.6321875Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-09T01:00:42.6322517Z         resources for stream processor validation: internal error while provisioning
2025-07-09T01:00:42.6323084Z         resource from global resource manager], BadRequestDetail: 
2025-07-09T01:00:42.6334899Z   
2025-07-09T01:00:42.6401022Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-09T01:00:42.6401687Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-09T01:00:42.6402112Z         
2025-07-09T01:00:42.6402376Z         Error: error deleting resource
2025-07-09T01:00:42.6402632Z         
2025-07-09T01:00:42.6403588Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686db7ff725a79527bea68dc/streams/test-acc-tf-2533026301715539594--STARTED-CREATED/connections/sample_stream_solar
2025-07-09T01:00:42.6404412Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-09T01:00:42.6404926Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-09T01:00:42.6405403Z         name sample_stream_solar in stream instance
2025-07-09T01:00:42.6405954Z         test-acc-tf-2533026301715539594--STARTED-CREATED has active processors, and
2025-07-09T01:00:42.6406551Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-09T01:00:42.6407255Z         test-acc-tf-2533026301715539594--STARTED-CREATED], BadRequestDetail: 
2025-07-09T01:00:42.6409869Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.19s)
```

- 2025-07-10
  - FAIL 31 seconds

### Error 2025-07-10T00:43:19+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-10T00:43:19.378000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='20 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-10T00:43:19.3782632Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-10T00:43:19.3783333Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-10T00:43:19.3785166Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-10T00:43:19.3830778Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-10T00:43:19.3831373Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-10T00:43:19.3831744Z         
2025-07-10T00:43:19.3832018Z         Error: error creating resource
2025-07-10T00:43:19.3832281Z         
2025-07-10T00:43:19.3832637Z           with mongodbatlas_stream_processor.processor,
2025-07-10T00:43:19.3833457Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-10T00:43:19.3834097Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-10T00:43:19.3834421Z         
2025-07-10T00:43:19.3835265Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686f096a964afc762c202930/streams/test-acc-tf-5788351779435508655--STARTED-CREATED/processor
2025-07-10T00:43:19.3836166Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-10T00:43:19.3836943Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-10T00:43:19.3837611Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-10T00:43:19.3838258Z         internal error while provisioning resource from global resource manager.
2025-07-10T00:43:19.3838901Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-10T00:43:19.3839567Z         resources for stream processor validation: internal error while provisioning
2025-07-10T00:43:19.3840159Z         resource from global resource manager], BadRequestDetail: 
2025-07-10T00:43:19.3857869Z   
2025-07-10T00:43:19.3904059Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-10T00:43:19.3904747Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T00:43:19.3905179Z         
2025-07-10T00:43:19.3905457Z         Error: error deleting resource
2025-07-10T00:43:19.3905727Z         
2025-07-10T00:43:19.3906789Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686f096a964afc762c202930/streams/test-acc-tf-5788351779435508655--STARTED-CREATED/connections/sample_stream_solar
2025-07-10T00:43:19.3907739Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-10T00:43:19.3908277Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-10T00:43:19.3908769Z         name sample_stream_solar in stream instance
2025-07-10T00:43:19.3909330Z         test-acc-tf-5788351779435508655--STARTED-CREATED has active processors, and
2025-07-10T00:43:19.3909950Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-10T00:43:19.3910550Z         test-acc-tf-5788351779435508655--STARTED-CREATED], BadRequestDetail: 
2025-07-10T00:43:19.3924889Z   
2025-07-10T00:43:19.3933732Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.76s)
```

  - PASS 7 seconds
- 2025-07-11

### Error 2025-07-11T02:31:57+00:00
```
2025-07-11T02:31:57.1509590Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-11T02:31:57.1510975Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-11T02:31:57.1513941Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-11T02:31:57.1546399Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-11T02:31:57.1547443Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-11T02:31:57.1548254Z         
2025-07-11T02:31:57.1548709Z         Error: error creating resource
2025-07-11T02:31:57.1549149Z         
2025-07-11T02:31:57.1549766Z           with mongodbatlas_stream_processor.processor,
2025-07-11T02:31:57.1551179Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-11T02:31:57.1552315Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-11T02:31:57.1552872Z         
2025-07-11T02:31:57.1554372Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705b004f431f68780bdce6/streams/test-acc-tf-3593283012887446184--STARTED-CREATED/processor
2025-07-11T02:31:57.1555943Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-11T02:31:57.1557083Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-11T02:31:57.1558244Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-11T02:31:57.1559374Z         internal error while provisioning resource from global resource manager.
2025-07-11T02:31:57.1560727Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-11T02:31:57.1561889Z         resources for stream processor validation: internal error while provisioning
2025-07-11T02:31:57.1562916Z         resource from global resource manager], BadRequestDetail: 
2025-07-11T02:31:57.1588130Z   
2025-07-11T02:31:57.1588932Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-11T02:31:57.1589665Z         
2025-07-11T02:31:57.1590286Z         Error: error deleting resource
2025-07-11T02:31:57.1590710Z         
2025-07-11T02:31:57.1592449Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705b004f431f68780bdce6/streams/test-acc-tf-3593283012887446184--STARTED-CREATED/connections/sample_stream_solar
2025-07-11T02:31:57.1594122Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-11T02:31:57.1595052Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-11T02:31:57.1595928Z         name sample_stream_solar in stream instance
2025-07-11T02:31:57.1596936Z         test-acc-tf-3593283012887446184--STARTED-CREATED has active processors, and
2025-07-11T02:31:57.1598029Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-11T02:31:57.1599101Z         test-acc-tf-3593283012887446184--STARTED-CREATED], BadRequestDetail: 
2025-07-11T02:31:57.1630601Z   
2025-07-11T02:31:57.1730661Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.89s)
```

- 2025-07-12

### Error 2025-07-12T00:48:12+00:00
```
2025-07-12T00:48:12.3563873Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-12T00:48:12.3564550Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-12T00:48:12.3566446Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-12T00:48:12.3614449Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-12T00:48:12.3615138Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-12T00:48:12.3615715Z         
2025-07-12T00:48:12.3615994Z         Error: error creating resource
2025-07-12T00:48:12.3616329Z         
2025-07-12T00:48:12.3616705Z           with mongodbatlas_stream_processor.processor,
2025-07-12T00:48:12.3617480Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-12T00:48:12.3618204Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-12T00:48:12.3618536Z         
2025-07-12T00:48:12.3619502Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6871ac5247d9ab465fd0f148/streams/test-acc-tf-3329758383117538255--STARTED-CREATED/processor
2025-07-12T00:48:12.3620497Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-12T00:48:12.3621218Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-12T00:48:12.3621945Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-12T00:48:12.3622575Z         internal error while provisioning resource from global resource manager.
2025-07-12T00:48:12.3623287Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-12T00:48:12.3623931Z         resources for stream processor validation: internal error while provisioning
2025-07-12T00:48:12.3624691Z         resource from global resource manager], BadRequestDetail: 
2025-07-12T00:48:12.3659263Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-12T00:48:12.3726999Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-12T00:48:12.3727668Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-12T00:48:12.3728101Z         
2025-07-12T00:48:12.3728375Z         Error: error deleting resource
2025-07-12T00:48:12.3728640Z         
2025-07-12T00:48:12.3729730Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6871ac5247d9ab465fd0f148/streams/test-acc-tf-3329758383117538255--STARTED-CREATED/connections/sample_stream_solar
2025-07-12T00:48:12.3730562Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-12T00:48:12.3731079Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-12T00:48:12.3731573Z         name sample_stream_solar in stream instance
2025-07-12T00:48:12.3732126Z         test-acc-tf-3329758383117538255--STARTED-CREATED has active processors, and
2025-07-12T00:48:12.3732730Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-12T00:48:12.3733314Z         test-acc-tf-3329758383117538255--STARTED-CREATED], BadRequestDetail: 
2025-07-12T00:48:12.3735998Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.21s)
```

- 2025-07-13 PASS 32 seconds
- 2025-07-14

### Error 2025-07-14T04:02:14+00:00
```
2025-07-14T04:02:14.1303539Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-14T04:02:14.1304418Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-14T04:02:14.1306730Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-14T04:02:14.1363345Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-14T04:02:14.1363969Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-14T04:02:14.1364340Z         
2025-07-14T04:02:14.1364616Z         Error: error creating resource
2025-07-14T04:02:14.1364890Z         
2025-07-14T04:02:14.1365253Z           with mongodbatlas_stream_processor.processor,
2025-07-14T04:02:14.1365936Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-14T04:02:14.1366567Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-14T04:02:14.1366895Z         
2025-07-14T04:02:14.1367727Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fdf52cba864e5f10a3b/streams/test-acc-tf-7515563133604987921--STARTED-CREATED/processor
2025-07-14T04:02:14.1368609Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-14T04:02:14.1369252Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-14T04:02:14.1369905Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-14T04:02:14.1370618Z         internal error while provisioning resource from global resource manager.
2025-07-14T04:02:14.1371442Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-14T04:02:14.1372097Z         resources for stream processor validation: internal error while provisioning
2025-07-14T04:02:14.1372669Z         resource from global resource manager], BadRequestDetail: 
2025-07-14T04:02:14.1389693Z    test_terraform_path=/home/runner/work/_temp/a5da4b3c-7f27-4c7f-a536-72a9efc4bb70/terraform
2025-07-14T04:02:14.1420371Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-14T04:02:14.1421041Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T04:02:14.1421468Z         
2025-07-14T04:02:14.1421796Z         Error: error deleting resource
2025-07-14T04:02:14.1422083Z         
2025-07-14T04:02:14.1423298Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fdf52cba864e5f10a3b/streams/test-acc-tf-7515563133604987921--STARTED-CREATED/connections/sample_stream_solar
2025-07-14T04:02:14.1424136Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-14T04:02:14.1424660Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-14T04:02:14.1425146Z         name sample_stream_solar in stream instance
2025-07-14T04:02:14.1425711Z         test-acc-tf-7515563133604987921--STARTED-CREATED has active processors, and
2025-07-14T04:02:14.1426319Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-14T04:02:14.1426911Z         test-acc-tf-7515563133604987921--STARTED-CREATED], BadRequestDetail: 
2025-07-14T04:02:14.1434206Z    test_working_directory=/tmp/plugintest2508787338 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/a5da4b3c-7f27-4c7f-a536-72a9efc4bb70/terraform test_step_number=1
2025-07-14T04:02:14.1464547Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.15s)
```

- 2025-07-15 PASS 5 seconds
- 2025-07-16 PASS 6 seconds
- 2025-07-17 PASS 6 seconds
- 2025-07-18 PASS 6 seconds
- 2025-07-19 PASS 5 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.7210406Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-20T00:53:03.7211078Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-20T00:53:03.7212857Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-20T00:53:03.7269132Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-20T00:53:03.7269807Z     resource_test.go:259: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:53:03.7270197Z         
2025-07-20T00:53:03.7270492Z         Error: error creating resource
2025-07-20T00:53:03.7270770Z         
2025-07-20T00:53:03.7271157Z           with mongodbatlas_stream_processor.processor,
2025-07-20T00:53:03.7271862Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-07-20T00:53:03.7272524Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-20T00:53:03.7272887Z         
2025-07-20T00:53:03.7273821Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor
2025-07-20T00:53:03.7274673Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7275273Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7276243Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7276831Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7277254Z         BadRequestDetail: 
2025-07-20T00:53:03.7284982Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/b448e69b-90e1-46c0-857c-8546e15106bc/terraform
2025-07-20T00:53:03.7321899Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.48s)
```

- 2025-07-21 PASS 6 seconds
- 2025-07-22 PASS 5 seconds
- 2025-07-23
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-07-24 PASS 5 seconds
- 2025-07-25 PASS 6 seconds
- 2025-07-26 PASS 6 seconds
- 2025-07-27 PASS 6 seconds
- 2025-07-28 PASS 5 seconds
- 2025-07-29 PASS 5 seconds
- 2025-07-30 PASS 5 seconds