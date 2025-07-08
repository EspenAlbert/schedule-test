# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL(x 3)
Success rate: 66.67%

## Timeline
### 2025-07-01
#### PASS 11 seconds
#### PASS 13 seconds
### 2025-07-02
#### PASS 11 seconds
### 2025-07-03
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-03T00:46:39.957000+00:00-TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState',confidence=1.0,ts_when='5 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-03T00:46:39.9573350Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-03T00:46:39.9574168Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-07-03T00:46:39.9578595Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-03T00:46:39.9595358Z   
2025-07-03T00:46:39.9595757Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-07-03T00:46:39.9596120Z         
2025-07-03T00:46:39.9612804Z         Error: error creating resource
2025-07-03T00:46:39.9613264Z         
2025-07-03T00:46:39.9613862Z           with mongodbatlas_stream_processor.processor,
2025-07-03T00:46:39.9614747Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-03T00:46:39.9615608Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-03T00:46:39.9615963Z         
2025-07-03T00:46:39.9616962Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6865cef1699daf2aab4cc130/streams/test-acc-tf-998488491684853251--STARTED-/processor
2025-07-03T00:46:39.9617838Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-03T00:46:39.9618448Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-07-03T00:46:39.9619077Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-03T00:46:39.9619707Z         internal error while provisioning resource from global resource manager.
2025-07-03T00:46:39.9620315Z         Reason: Bad Request. Params: [processor-started-to- failed to acquire
2025-07-03T00:46:39.9620943Z         resources for stream processor validation: internal error while provisioning
2025-07-03T00:46:39.9621512Z         resource from global resource manager], BadRequestDetail: 
2025-07-03T00:46:39.9634326Z   
2025-07-03T00:46:39.9634808Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-03T00:46:39.9635439Z         
2025-07-03T00:46:39.9635718Z         Error: error deleting resource
2025-07-03T00:46:39.9635982Z         
2025-07-03T00:46:39.9636889Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6865cef1699daf2aab4cc130/streams/test-acc-tf-998488491684853251--STARTED-/connections/sample_stream_solar
2025-07-03T00:46:39.9637694Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-03T00:46:39.9638220Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-03T00:46:39.9638840Z         name test-acc-tf-998488491684853251--STARTED- has active processors, and
2025-07-03T00:46:39.9639347Z         cannot be changed. Reason: Forbidden. Params:
2025-07-03T00:46:39.9639839Z         [test-acc-tf-998488491684853251--STARTED-], BadRequestDetail: 
2025-07-03T00:46:39.9642181Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (31.20s)
```
### 2025-07-04
#### PASS 11 seconds
### 2025-07-05
#### PASS 14 seconds
### 2025-07-06
#### FAIL 30 seconds
```
2025-07-06T00:48:43.0207800Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-06T00:48:43.0208619Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-07-06T00:48:43.0212765Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-06T00:48:43.0223298Z    test_working_directory=/tmp/plugintest3457435091 test_step_number=1
2025-07-06T00:48:43.0223825Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0224172Z         
2025-07-06T00:48:43.0224433Z         Error: error creating resource
2025-07-06T00:48:43.0224689Z         
2025-07-06T00:48:43.0225011Z           with mongodbatlas_stream_instance.instance,
2025-07-06T00:48:43.0225646Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-07-06T00:48:43.0226357Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-07-06T00:48:43.0226674Z         
2025-07-06T00:48:43.0227156Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams
2025-07-06T00:48:43.0227923Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0228498Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0228875Z         BadRequestDetail: 
2025-07-06T00:48:43.0240270Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-06T00:48:43.0280759Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (30.57s)
```
### 2025-07-07
#### FAIL 31 seconds
```
2025-07-07T00:48:05.7840928Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-07T00:48:05.7841841Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-07-07T00:48:05.7847163Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-07T00:48:05.7865794Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState test_terraform_path=/home/runner/work/_temp/c51b1342-8f8b-48f5-80bd-084902e39212/terraform
2025-07-07T00:48:05.7893376Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-07T00:48:05.7893916Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-07-07T00:48:05.7894274Z         
2025-07-07T00:48:05.7894539Z         Error: error creating resource
2025-07-07T00:48:05.7894794Z         
2025-07-07T00:48:05.7895137Z           with mongodbatlas_stream_processor.processor,
2025-07-07T00:48:05.7895995Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-07T00:48:05.7896616Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-07T00:48:05.7896927Z         
2025-07-07T00:48:05.7897932Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-7368587854316558678--STARTED-/processor
2025-07-07T00:48:05.7898845Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-07T00:48:05.7899447Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-07-07T00:48:05.7900071Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-07T00:48:05.7900688Z         internal error while provisioning resource from global resource manager.
2025-07-07T00:48:05.7901272Z         Reason: Bad Request. Params: [processor-started-to- failed to acquire
2025-07-07T00:48:05.7901897Z         resources for stream processor validation: internal error while provisioning
2025-07-07T00:48:05.7902458Z         resource from global resource manager], BadRequestDetail: 
2025-07-07T00:48:05.7915995Z   
2025-07-07T00:48:05.7935313Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-07T00:48:05.7936137Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-07T00:48:05.7936563Z         
2025-07-07T00:48:05.7936826Z         Error: error deleting resource
2025-07-07T00:48:05.7937090Z         
2025-07-07T00:48:05.7937992Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-7368587854316558678--STARTED-/connections/sample_stream_solar
2025-07-07T00:48:05.7938776Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-07T00:48:05.7939289Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-07T00:48:05.7939921Z         name test-acc-tf-7368587854316558678--STARTED- has active processors, and
2025-07-07T00:48:05.7940454Z         cannot be changed. Reason: Forbidden. Params:
2025-07-07T00:48:05.7940946Z         [test-acc-tf-7368587854316558678--STARTED-], BadRequestDetail: 
2025-07-07T00:48:05.7943143Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (31.16s)
```
### 2025-07-08
#### PASS 11 seconds