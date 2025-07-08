# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL(x 3)
Success rate: 66.67%

## Timeline
### 2025-07-01
#### PASS 5 seconds
#### PASS 7 seconds
### 2025-07-02
#### PASS 5 seconds
### 2025-07-03
#### PASS 6 seconds
### 2025-07-04
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-04T00:51:07.708000+00:00-TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState',confidence=1.0,ts_when='4 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-04T00:51:07.7084999Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-04T00:51:07.7085854Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-07-04T00:51:07.7091275Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-04T00:51:07.7110941Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-04T00:51:07.7111502Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-07-04T00:51:07.7111886Z         
2025-07-04T00:51:07.7112173Z         Error: error creating resource
2025-07-04T00:51:07.7112446Z         
2025-07-04T00:51:07.7112819Z           with mongodbatlas_stream_processor.processor,
2025-07-04T00:51:07.7113515Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-07-04T00:51:07.7114166Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-04T00:51:07.7114505Z         
2025-07-04T00:51:07.7115319Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6867204b579d4c1b1e7ac9f7/streams/test-acc-tf-7540327099908465412--CREATED-/processor
2025-07-04T00:51:07.7116185Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-04T00:51:07.7116804Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-07-04T00:51:07.7117451Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-04T00:51:07.7118098Z         internal error while provisioning resource from global resource manager.
2025-07-04T00:51:07.7119278Z         Reason: Bad Request. Params: [processor-created-to- failed to acquire
2025-07-04T00:51:07.7119999Z         resources for stream processor validation: internal error while provisioning
2025-07-04T00:51:07.7120598Z         resource from global resource manager], BadRequestDetail: 
2025-07-04T00:51:07.7133118Z    test_terraform_path=/home/runner/work/_temp/c3d41cd1-2970-494b-9abe-ad1b88c82e94/terraform test_working_directory=/tmp/plugintest898226313 test_step_number=1
2025-07-04T00:51:07.7134055Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-04T00:51:07.7134491Z         
2025-07-04T00:51:07.7134778Z         Error: error deleting resource
2025-07-04T00:51:07.7135055Z         
2025-07-04T00:51:07.7135986Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6867204b579d4c1b1e7ac9f7/streams/test-acc-tf-7540327099908465412--CREATED-/connections/sample_stream_solar
2025-07-04T00:51:07.7136803Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-04T00:51:07.7137350Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-04T00:51:07.7137986Z         name test-acc-tf-7540327099908465412--CREATED- has active processors, and
2025-07-04T00:51:07.7138754Z         cannot be changed. Reason: Forbidden. Params:
2025-07-04T00:51:07.7139281Z         [test-acc-tf-7540327099908465412--CREATED-], BadRequestDetail: 
2025-07-04T00:51:07.7141561Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (31.07s)
```
### 2025-07-05
#### FAIL 31 seconds
```
2025-07-05T00:44:07.5913639Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-05T00:44:07.5915350Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-07-05T00:44:07.5924744Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-05T00:44:07.5956953Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-05T00:44:07.5957929Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-07-05T00:44:07.5958550Z         
2025-07-05T00:44:07.5959006Z         Error: error creating resource
2025-07-05T00:44:07.5959453Z         
2025-07-05T00:44:07.5960056Z           with mongodbatlas_stream_processor.processor,
2025-07-05T00:44:07.5961262Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-05T00:44:07.5962386Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-05T00:44:07.5962936Z         
2025-07-05T00:44:07.5964647Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868719b37c6036ffcf44dbd/streams/test-acc-tf-5368064871211553951--CREATED-/processor
2025-07-05T00:44:07.5966197Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-05T00:44:07.5967276Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-07-05T00:44:07.5968384Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-05T00:44:07.5969494Z         internal error while provisioning resource from global resource manager.
2025-07-05T00:44:07.5970562Z         Reason: Bad Request. Params: [processor-created-to- failed to acquire
2025-07-05T00:44:07.5971841Z         resources for stream processor validation: internal error while provisioning
2025-07-05T00:44:07.5972857Z         resource from global resource manager], BadRequestDetail: 
2025-07-05T00:44:07.5994592Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/503c00e9-2f1d-4f06-8735-86b25f02f37b/terraform test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState test_working_directory=/tmp/plugintest611322819
2025-07-05T00:44:07.5996747Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-05T00:44:07.5997497Z         
2025-07-05T00:44:07.5997958Z         Error: error deleting resource
2025-07-05T00:44:07.5998400Z         
2025-07-05T00:44:07.6000065Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868719b37c6036ffcf44dbd/streams/test-acc-tf-5368064871211553951--CREATED-/connections/sample_stream_solar
2025-07-05T00:44:07.6001511Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-05T00:44:07.6002443Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-05T00:44:07.6003553Z         name test-acc-tf-5368064871211553951--CREATED- has active processors, and
2025-07-05T00:44:07.6004618Z         cannot be changed. Reason: Forbidden. Params:
2025-07-05T00:44:07.6005484Z         [test-acc-tf-5368064871211553951--CREATED-], BadRequestDetail: 
2025-07-05T00:44:07.6009397Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (31.47s)
```
### 2025-07-06
#### FAIL a minute
```
2025-07-06T00:48:43.0205681Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-06T00:48:43.0206521Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-07-06T00:48:43.0211848Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-06T00:48:43.0240757Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-06T00:48:43.0241295Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0241653Z         
2025-07-06T00:48:43.0241917Z         Error: error creating resource
2025-07-06T00:48:43.0242168Z         
2025-07-06T00:48:43.0242502Z           with mongodbatlas_stream_connection.sample,
2025-07-06T00:48:43.0243150Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "sample":
2025-07-06T00:48:43.0243755Z           23: 		resource "mongodbatlas_stream_connection" "sample" {
2025-07-06T00:48:43.0244062Z         
2025-07-06T00:48:43.0244849Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-8328272463840259236--CREATED-/connections
2025-07-06T00:48:43.0245715Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0246275Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0246654Z         BadRequestDetail: 
2025-07-06T00:48:43.0258666Z    test_working_directory=/tmp/plugintest2938323192
2025-07-06T00:48:43.0275507Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-06T00:48:43.0276142Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:48:43.0276564Z         
2025-07-06T00:48:43.0276844Z         Error: error during resource delete
2025-07-06T00:48:43.0277108Z         
2025-07-06T00:48:43.0277953Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-8328272463840259236--CREATED-
2025-07-06T00:48:43.0278746Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-06T00:48:43.0279334Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0279731Z         BadRequestDetail: 
2025-07-06T00:48:43.0281964Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (61.00s)
```
### 2025-07-07
#### PASS 6 seconds
### 2025-07-08
#### PASS 6 seconds