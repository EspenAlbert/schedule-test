# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState Test Details
# Found 33 TestRuns in dev, qa from 2025-07-01 to 2025-07-31 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-04 00:51](#error-2025-07-04t0051070000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.01s
[2025-07-05 00:44](#error-2025-07-05t0044070000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6868719b37c6036ffcf44dbd/streams/test-acc-tf-5368064871211553951--CREATED-/processor | dev |  | 31.05s
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-8328272463840259236--CREATED-/connections | qa | flaky_500 | 61.00s
[2025-07-10 13:24](#error-2025-07-10t1324520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb06fd583001f9eeb866/streams/test-acc-tf-725132295663855287--CREATED-/connections/sample_stream_solar | qa | flaky_500 | 36.04s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor | qa |  | 0.05s

## Timeline
- 2025-07-01 PASS 7 seconds
- 2025-07-02 PASS 5 seconds
- 2025-07-03 PASS 6 seconds
- 2025-07-04

### Error 2025-07-04T00:51:07+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-04T00:51:07.708000+00:00-TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState',confidence=1.0,ts_when='27 days ago')
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

- 2025-07-05

### Error 2025-07-05T00:44:07+00:00
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

- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
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

- 2025-07-07 PASS 6 seconds
- 2025-07-08 PASS 6 seconds
- 2025-07-09 PASS 6 seconds
- 2025-07-10
  - PASS 9 seconds
  - FAIL 36 seconds

### Error 2025-07-10T13:24:52+00:00
```
2025-07-10T13:24:52.3841634Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-10T13:24:52.3842739Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-07-10T13:24:52.3848008Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-10T13:24:52.3860341Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-10T13:24:52.3861352Z     resource_test.go:210: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:24:52.3861800Z         
2025-07-10T13:24:52.3862077Z         Error: error deleting resource
2025-07-10T13:24:52.3862340Z         
2025-07-10T13:24:52.3863261Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb06fd583001f9eeb866/streams/test-acc-tf-725132295663855287--CREATED-/connections/sample_stream_solar
2025-07-10T13:24:52.3864185Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-10T13:24:52.3864778Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3865188Z         BadRequestDetail: 
2025-07-10T13:24:52.3878795Z    test_step_number=2 test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_terraform_path=/home/runner/work/_temp/4d5cd8a7-2970-4d68-aa4b-10ee84c3df9f/terraform
2025-07-10T13:24:52.3888326Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (36.42s)
```

- 2025-07-11 PASS 7 seconds
- 2025-07-12 PASS 6 seconds
- 2025-07-13 PASS 7 seconds
- 2025-07-14 PASS 6 seconds
- 2025-07-15 PASS 4 seconds
- 2025-07-16 PASS 5 seconds
- 2025-07-17 PASS 4 seconds
- 2025-07-18 PASS 5 seconds
- 2025-07-19 PASS 4 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.7133358Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-20T00:53:03.7134193Z     resource_test.go:217: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-07-20T00:53:03.7139655Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-20T00:53:03.7196456Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-20T00:53:03.7196997Z     resource_test.go:218: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:53:03.7197374Z         
2025-07-20T00:53:03.7197650Z         Error: error creating resource
2025-07-20T00:53:03.7197906Z         
2025-07-20T00:53:03.7198249Z           with mongodbatlas_stream_processor.processor,
2025-07-20T00:53:03.7198922Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-07-20T00:53:03.7199544Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-20T00:53:03.7199864Z         
2025-07-20T00:53:03.7200594Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor
2025-07-20T00:53:03.7201419Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7201997Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7202593Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7203139Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7203518Z         BadRequestDetail: 
2025-07-20T00:53:03.7205800Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.50s)
```

- 2025-07-21 PASS 5 seconds
- 2025-07-22 PASS 4 seconds
- 2025-07-23
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-07-24 PASS 4 seconds
- 2025-07-25 PASS 5 seconds
- 2025-07-26 PASS 4 seconds
- 2025-07-27 PASS 4 seconds
- 2025-07-28 PASS 4 seconds
- 2025-07-29 PASS 3 seconds
- 2025-07-30 PASS 4 seconds
- 2025-07-31 PASS 5 seconds