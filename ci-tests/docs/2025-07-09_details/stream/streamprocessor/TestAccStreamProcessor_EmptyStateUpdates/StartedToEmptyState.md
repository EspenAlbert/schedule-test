# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 113) FAIL(x 19)
Success rate: 85.61%

# #  Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
2025-04-13 01:10 |  | qa |  | 5.06s
2025-04-16 00:45 |  | dev |  | 1.01s
2025-04-16 12:49 |  | qa |  | 3.04s
2025-04-16 14:37 |  | dev |  | 1.07s
2025-04-17 00:44 |  | dev |  | 1.00s
2025-04-20 00:49 |  | qa |  | 5.03s
2025-04-24 00:43 |  | dev |  | 6.10s
2025-04-25 00:44 |  | dev |  | 4.02s
2025-04-27 00:47 |  | qa |  | 3.05s
2025-04-30 09:23 |  | qa |  | 4.01s
2025-05-02 00:45 |  | dev |  | 4.04s
2025-05-04 00:47 |  | qa |  | 5.05s
2025-05-05 10:43 |  | qa |  | 3.01s
2025-05-11 00:30 |  | qa |  | 0.00s
2025-05-23 00:49 |  | dev |  | 5.07s
2025-06-22 00:49 |  | qa |  | 38.03s
2025-07-03 00:46 | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.02s
2025-07-06 00:48 |  | qa |  | 30.06s
2025-07-07 00:48 |  | dev |  | 31.02s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 17 seconds
### 2025-04-12
#### PASS 17 seconds
### 2025-04-13
#### FAIL 5 seconds
```
2025-04-13T01:10:38.7872241Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-13T01:10:38.7873091Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-04-13T01:10:38.7877379Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-13T01:10:38.7893654Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-13T01:10:38.8004362Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-13T01:10:38.8004982Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-13T01:10:38.8005359Z         
2025-04-13T01:10:38.8005652Z         Error: error creating resource
2025-04-13T01:10:38.8005926Z         
2025-04-13T01:10:38.8006301Z           with mongodbatlas_stream_processor.processor,
2025-04-13T01:10:38.8007018Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-13T01:10:38.8007669Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-13T01:10:38.8008018Z         
2025-04-13T01:10:38.8008846Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-1678179158960473740--STARTED-/processor
2025-04-13T01:10:38.8009715Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-13T01:10:38.8010786Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-04-13T01:10:38.8011445Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-13T01:10:38.8012104Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-13T01:10:38.8012762Z         [processor-started-to- failed to acquire resources for stream processor
2025-04-13T01:10:38.8013427Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-13T01:10:38.8025914Z    test_terraform_path=/home/runner/work/_temp/34096c15-8473-462c-9c24-11172a2d6b2d/terraform
2025-04-13T01:10:38.8026624Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-13T01:10:38.8027194Z         
2025-04-13T01:10:38.8027499Z         Error: error deleting resource
2025-04-13T01:10:38.8027776Z         
2025-04-13T01:10:38.8028710Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-1678179158960473740--STARTED-/connections/sample_stream_solar
2025-04-13T01:10:38.8029516Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-13T01:10:38.8030174Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-13T01:10:38.8030816Z         name test-acc-tf-1678179158960473740--STARTED- has active processors, and
2025-04-13T01:10:38.8031332Z         cannot be changed. Reason: Forbidden. Params:
2025-04-13T01:10:38.8031847Z         [test-acc-tf-1678179158960473740--STARTED-], BadRequestDetail: 
2025-04-13T01:10:38.8034086Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (5.58s)
```
### 2025-04-14
#### PASS 20 seconds
### 2025-04-15
#### PASS 17 seconds
### 2025-04-16
#### FAIL a second
```
2025-04-16T00:45:12.3622015Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-16T00:45:12.3622694Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-04-16T00:45:12.3624755Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-16T00:45:12.3634131Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_terraform_path=/home/runner/work/_temp/92645992-1140-423c-8ef0-74ddbe0cfc31/terraform test_working_directory=/tmp/plugintest2510935217 test_step_number=1
2025-04-16T00:45:12.3634567Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-16T00:45:12.3634666Z         
2025-04-16T00:45:12.3634836Z         Error: error creating resource
2025-04-16T00:45:12.3634930Z         
2025-04-16T00:45:12.3635195Z           with mongodbatlas_stream_processor.processor,
2025-04-16T00:45:12.3635672Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T00:45:12.3635990Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T00:45:12.3636085Z         
2025-04-16T00:45:12.3636790Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-5621569234583115905--STARTED-/processor
2025-04-16T00:45:12.3637133Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T00:45:12.3637477Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-04-16T00:45:12.3637790Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T00:45:12.3638097Z         [processor-started-to- RBAC: access denied], BadRequestDetail: 
2025-04-16T00:45:12.3641952Z    test_terraform_path=/home/runner/work/_temp/92645992-1140-423c-8ef0-74ddbe0cfc31/terraform test_working_directory=/tmp/plugintest2804849354 test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState test_step_number=1
2025-04-16T00:45:12.3663075Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-16T00:45:12.3663450Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3663548Z         
2025-04-16T00:45:12.3663984Z         Error: error deleting resource
2025-04-16T00:45:12.3664137Z         
2025-04-16T00:45:12.3665039Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-5621569234583115905--STARTED-/connections/sample_stream_solar
2025-04-16T00:45:12.3665536Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3665882Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3666034Z         BadRequestDetail: 
2025-04-16T00:45:12.3671427Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState test_step_number=1
2025-04-16T00:45:12.3683003Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (1.10s)
```
#### FAIL 3 seconds
```
2025-04-16T12:49:32.8689992Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-16T12:49:32.8690566Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-04-16T12:49:32.8692396Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-16T12:49:32.8704572Z   
2025-04-16T12:49:32.8721526Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-16T12:49:32.8721806Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-16T12:49:32.8721899Z         
2025-04-16T12:49:32.8722071Z         Error: error creating resource
2025-04-16T12:49:32.8722166Z         
2025-04-16T12:49:32.8722431Z           with mongodbatlas_stream_processor.processor,
2025-04-16T12:49:32.8722913Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T12:49:32.8723334Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T12:49:32.8723427Z         
2025-04-16T12:49:32.8724132Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-4125721312600867850--STARTED-/processor
2025-04-16T12:49:32.8724464Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T12:49:32.8724809Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-04-16T12:49:32.8725113Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T12:49:32.8725424Z         [processor-started-to- RBAC: access denied], BadRequestDetail: 
2025-04-16T12:49:32.8735784Z    test_terraform_path=/home/runner/work/_temp/c09527d7-de0c-4201-9826-27350f0a89ff/terraform test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-16T12:49:32.8741808Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-16T12:49:32.8742182Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8742274Z         
2025-04-16T12:49:32.8742449Z         Error: error deleting resource
2025-04-16T12:49:32.8742541Z         
2025-04-16T12:49:32.8743363Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-4125721312600867850--STARTED-/connections/sample_stream_solar
2025-04-16T12:49:32.8743697Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8744021Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8744168Z         BadRequestDetail: 
2025-04-16T12:49:32.8747273Z   
2025-04-16T12:49:32.8750852Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (3.42s)
```
#### FAIL a second
```
2025-04-16T14:37:27.0684490Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-16T14:37:27.0685077Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-04-16T14:37:27.0687009Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-16T14:37:27.0693859Z   
2025-04-16T14:37:27.0715980Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-16T14:37:27.0716258Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-16T14:37:27.0716356Z         
2025-04-16T14:37:27.0716530Z         Error: error creating resource
2025-04-16T14:37:27.0716626Z         
2025-04-16T14:37:27.0716879Z           with mongodbatlas_stream_processor.processor,
2025-04-16T14:37:27.0717380Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T14:37:27.0717693Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T14:37:27.0717781Z         
2025-04-16T14:37:27.0718621Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-5043718485341729069--STARTED-/processor
2025-04-16T14:37:27.0718972Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T14:37:27.0719319Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-04-16T14:37:27.0719617Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T14:37:27.0719930Z         [processor-started-to- RBAC: access denied], BadRequestDetail: 
2025-04-16T14:37:27.0725485Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-16T14:37:27.0741945Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-16T14:37:27.0742316Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0742412Z         
2025-04-16T14:37:27.0742587Z         Error: error deleting resource
2025-04-16T14:37:27.0742680Z         
2025-04-16T14:37:27.0743615Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-5043718485341729069--STARTED-/connections/sample_stream_solar
2025-04-16T14:37:27.0744074Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0744406Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0744546Z         BadRequestDetail: 
2025-04-16T14:37:27.0745662Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (1.74s)
```
### 2025-04-17
#### FAIL a second
```
2025-04-17T00:44:44.9650636Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-17T00:44:44.9651214Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-04-17T00:44:44.9653166Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-17T00:44:44.9660011Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-17T00:44:44.9660301Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-17T00:44:44.9660397Z         
2025-04-17T00:44:44.9660575Z         Error: error creating resource
2025-04-17T00:44:44.9660665Z         
2025-04-17T00:44:44.9660930Z           with mongodbatlas_stream_processor.processor,
2025-04-17T00:44:44.9661421Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-17T00:44:44.9661737Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-17T00:44:44.9661830Z         
2025-04-17T00:44:44.9662548Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-4814200938902273825--STARTED-/processor
2025-04-17T00:44:44.9662889Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-17T00:44:44.9663238Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-04-17T00:44:44.9663656Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-17T00:44:44.9663976Z         [processor-started-to- RBAC: access denied], BadRequestDetail: 
2025-04-17T00:44:44.9677936Z    test_terraform_path=/home/runner/work/_temp/7820bfc0-4292-41a1-b17d-9a8aaba10970/terraform test_working_directory=/tmp/plugintest83470338 test_step_number=1 test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-17T00:44:44.9699600Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-17T00:44:44.9699978Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9700074Z         
2025-04-17T00:44:44.9700255Z         Error: error deleting resource
2025-04-17T00:44:44.9700345Z         
2025-04-17T00:44:44.9701190Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-4814200938902273825--STARTED-/connections/sample_stream_solar
2025-04-17T00:44:44.9701540Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9701874Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9702018Z         BadRequestDetail: 
2025-04-17T00:44:44.9707405Z    test_terraform_path=/home/runner/work/_temp/7820bfc0-4292-41a1-b17d-9a8aaba10970/terraform test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-17T00:44:44.9719118Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (1.01s)
```
### 2025-04-18
#### PASS 19 seconds
### 2025-04-19
#### PASS 17 seconds
### 2025-04-20
#### FAIL 5 seconds
```
2025-04-20T00:49:06.9954720Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-20T00:49:06.9956291Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-04-20T00:49:06.9964286Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-20T00:49:06.9993774Z   
2025-04-20T00:49:06.9994463Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-20T00:49:06.9995097Z         
2025-04-20T00:49:06.9995591Z         Error: error creating resource
2025-04-20T00:49:06.9996058Z         
2025-04-20T00:49:06.9996702Z           with mongodbatlas_stream_processor.processor,
2025-04-20T00:49:06.9997978Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-20T00:49:06.9999152Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-20T00:49:06.9999730Z         
2025-04-20T00:49:07.0001216Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68043fe0e9e1f62c2da38572/streams/test-acc-tf-1823092339406356329--STARTED-/processor
2025-04-20T00:49:07.0002965Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-20T00:49:07.0004257Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-04-20T00:49:07.0005461Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-20T00:49:07.0006660Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-20T00:49:07.0007831Z         [processor-started-to- failed to acquire resources for stream processor
2025-04-20T00:49:07.0009055Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-20T00:49:07.0037439Z    test_terraform_path=/home/runner/work/_temp/f6644676-60c6-4c8e-8ae1-a78469633d36/terraform test_working_directory=/tmp/plugintest1281161643
2025-04-20T00:49:07.0106573Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-20T00:49:07.0107240Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-20T00:49:07.0107680Z         
2025-04-20T00:49:07.0107960Z         Error: error deleting resource
2025-04-20T00:49:07.0108222Z         
2025-04-20T00:49:07.0109157Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68043fe0e9e1f62c2da38572/streams/test-acc-tf-1823092339406356329--STARTED-/connections/sample_stream_solar
2025-04-20T00:49:07.0109971Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-20T00:49:07.0110514Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-20T00:49:07.0111145Z         name test-acc-tf-1823092339406356329--STARTED- has active processors, and
2025-04-20T00:49:07.0111661Z         cannot be changed. Reason: Forbidden. Params:
2025-04-20T00:49:07.0112171Z         [test-acc-tf-1823092339406356329--STARTED-], BadRequestDetail: 
2025-04-20T00:49:07.0125088Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-20T00:49:07.0151966Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (5.28s)
```
### 2025-04-21
#### PASS 19 seconds
### 2025-04-22
#### PASS 19 seconds
### 2025-04-23
#### PASS 17 seconds
### 2025-04-24
#### FAIL 6 seconds
```
2025-04-24T00:43:21.1325481Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-24T00:43:21.1326473Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-04-24T00:43:21.1330552Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-24T00:43:21.1345958Z    test_terraform_path=/home/runner/work/_temp/5edcbd20-a505-4ac5-832d-94520538c2a4/terraform test_working_directory=/tmp/plugintest3889108700 test_step_number=1 test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-24T00:43:21.1415130Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-24T00:43:21.1415679Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-24T00:43:21.1416032Z         
2025-04-24T00:43:21.1416309Z         Error: error creating resource
2025-04-24T00:43:21.1416566Z         
2025-04-24T00:43:21.1416920Z           with mongodbatlas_stream_processor.processor,
2025-04-24T00:43:21.1417597Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-24T00:43:21.1418223Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-24T00:43:21.1418543Z         
2025-04-24T00:43:21.1419336Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-8024965478711969697--STARTED-/processor
2025-04-24T00:43:21.1420184Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-24T00:43:21.1420788Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-04-24T00:43:21.1421549Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-24T00:43:21.1422504Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-24T00:43:21.1423151Z         [processor-started-to- failed to acquire resources for stream processor
2025-04-24T00:43:21.1423806Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-24T00:43:21.1437060Z   
2025-04-24T00:43:21.1456478Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-24T00:43:21.1457109Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-24T00:43:21.1457523Z         
2025-04-24T00:43:21.1457786Z         Error: error deleting resource
2025-04-24T00:43:21.1458043Z         
2025-04-24T00:43:21.1458955Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-8024965478711969697--STARTED-/connections/sample_stream_solar
2025-04-24T00:43:21.1459747Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-24T00:43:21.1460267Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-24T00:43:21.1460887Z         name test-acc-tf-8024965478711969697--STARTED- has active processors, and
2025-04-24T00:43:21.1461389Z         cannot be changed. Reason: Forbidden. Params:
2025-04-24T00:43:21.1461882Z         [test-acc-tf-8024965478711969697--STARTED-], BadRequestDetail: 
2025-04-24T00:43:21.1464296Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (6.96s)
```
### 2025-04-25
#### FAIL 4 seconds
```
2025-04-25T00:44:59.2434868Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-25T00:44:59.2436081Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-04-25T00:44:59.2440291Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-25T00:44:59.2457820Z   
2025-04-25T00:44:59.2502761Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-25T00:44:59.2503335Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-25T00:44:59.2503708Z         
2025-04-25T00:44:59.2503996Z         Error: error creating resource
2025-04-25T00:44:59.2504269Z         
2025-04-25T00:44:59.2504638Z           with mongodbatlas_stream_processor.processor,
2025-04-25T00:44:59.2505347Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-25T00:44:59.2506115Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-25T00:44:59.2506455Z         
2025-04-25T00:44:59.2507265Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ad7124656875332b381fe/streams/test-acc-tf-2390344383205358905--STARTED-/processor
2025-04-25T00:44:59.2508138Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-25T00:44:59.2508756Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-04-25T00:44:59.2509405Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-25T00:44:59.2510187Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-25T00:44:59.2510840Z         [processor-started-to- failed to acquire resources for stream processor
2025-04-25T00:44:59.2511516Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-25T00:44:59.2523878Z    test_working_directory=/tmp/plugintest3453616683 test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_step_number=1 test_terraform_path=/home/runner/work/_temp/97b16c68-53af-415f-bd2a-579359186db8/terraform
2025-04-25T00:44:59.2525062Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-25T00:44:59.2525510Z         
2025-04-25T00:44:59.2526051Z         Error: error deleting resource
2025-04-25T00:44:59.2526336Z         
2025-04-25T00:44:59.2527266Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ad7124656875332b381fe/streams/test-acc-tf-2390344383205358905--STARTED-/connections/sample_stream_solar
2025-04-25T00:44:59.2528065Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-25T00:44:59.2528629Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-25T00:44:59.2529270Z         name test-acc-tf-2390344383205358905--STARTED- has active processors, and
2025-04-25T00:44:59.2529800Z         cannot be changed. Reason: Forbidden. Params:
2025-04-25T00:44:59.2530327Z         [test-acc-tf-2390344383205358905--STARTED-], BadRequestDetail: 
2025-04-25T00:44:59.2531968Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (4.16s)
```
### 2025-04-26
#### PASS 28 seconds
### 2025-04-27
#### FAIL 3 seconds
```
2025-04-27T00:47:25.4518342Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-27T00:47:25.4519181Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-04-27T00:47:25.4523442Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-27T00:47:25.4538897Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_terraform_path=/home/runner/work/_temp/a66f83f8-c7ea-48d2-abd1-f97810bc2ede/terraform test_working_directory=/tmp/plugintest1499967917 test_step_number=1
2025-04-27T00:47:25.4540013Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-27T00:47:25.4540378Z         
2025-04-27T00:47:25.4540659Z         Error: error creating resource
2025-04-27T00:47:25.4540935Z         
2025-04-27T00:47:25.4541305Z           with mongodbatlas_stream_processor.processor,
2025-04-27T00:47:25.4542006Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-27T00:47:25.4542649Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-27T00:47:25.4543105Z         
2025-04-27T00:47:25.4543921Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-2598766882997506516--STARTED-/processor
2025-04-27T00:47:25.4544783Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-27T00:47:25.4545403Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-04-27T00:47:25.4546044Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-27T00:47:25.4546840Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-27T00:47:25.4547481Z         [processor-started-to- failed to acquire resources for stream processor
2025-04-27T00:47:25.4548241Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-27T00:47:25.4564360Z   
2025-04-27T00:47:25.4586582Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-27T00:47:25.4587227Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-27T00:47:25.4587657Z         
2025-04-27T00:47:25.4587939Z         Error: error deleting resource
2025-04-27T00:47:25.4588304Z         
2025-04-27T00:47:25.4589241Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-2598766882997506516--STARTED-/connections/sample_stream_solar
2025-04-27T00:47:25.4590052Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-27T00:47:25.4590591Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-27T00:47:25.4591225Z         name test-acc-tf-2598766882997506516--STARTED- has active processors, and
2025-04-27T00:47:25.4591737Z         cannot be changed. Reason: Forbidden. Params:
2025-04-27T00:47:25.4592364Z         [test-acc-tf-2598766882997506516--STARTED-], BadRequestDetail: 
2025-04-27T00:47:25.4605220Z   
2025-04-27T00:47:25.4656391Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (3.53s)
```
### 2025-04-28
#### PASS 12 seconds
### 2025-04-29
#### PASS 11 seconds
### 2025-04-30
#### PASS 13 seconds
#### FAIL 4 seconds
```
2025-04-30T09:23:01.8315457Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-30T09:23:01.8316341Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-04-30T09:23:01.8320801Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-30T09:23:01.8336631Z    test_terraform_path=/home/runner/work/_temp/e9d9e2d7-1093-496a-b712-8e78e21daf85/terraform test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState test_working_directory=/tmp/plugintest1875891898
2025-04-30T09:23:01.8387733Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-30T09:23:01.8388288Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-30T09:23:01.8388650Z         
2025-04-30T09:23:01.8388922Z         Error: error creating resource
2025-04-30T09:23:01.8389182Z         
2025-04-30T09:23:01.8389535Z           with mongodbatlas_stream_processor.processor,
2025-04-30T09:23:01.8390223Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-30T09:23:01.8390865Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-30T09:23:01.8391182Z         
2025-04-30T09:23:01.8391971Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-7138514310576016599--STARTED-/processor
2025-04-30T09:23:01.8392820Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-30T09:23:01.8393529Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-04-30T09:23:01.8394172Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-30T09:23:01.8394810Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-30T09:23:01.8395448Z         [processor-started-to- failed to acquire resources for stream processor
2025-04-30T09:23:01.8396105Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-30T09:23:01.8408996Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/e9d9e2d7-1093-496a-b712-8e78e21daf85/terraform
2025-04-30T09:23:01.8447180Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-30T09:23:01.8447819Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-30T09:23:01.8448246Z         
2025-04-30T09:23:01.8448675Z         Error: error deleting resource
2025-04-30T09:23:01.8448941Z         
2025-04-30T09:23:01.8449856Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-7138514310576016599--STARTED-/connections/sample_stream_solar
2025-04-30T09:23:01.8450670Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-30T09:23:01.8451203Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-30T09:23:01.8451844Z         name test-acc-tf-7138514310576016599--STARTED- has active processors, and
2025-04-30T09:23:01.8452345Z         cannot be changed. Reason: Forbidden. Params:
2025-04-30T09:23:01.8452844Z         [test-acc-tf-7138514310576016599--STARTED-], BadRequestDetail: 
2025-04-30T09:23:01.8455252Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (4.07s)
```
### 2025-05-01
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 13 seconds
#### PASS 11 seconds
#### PASS 14 seconds
#### PASS 11 seconds
#### PASS 11 seconds
### 2025-05-02
#### FAIL 4 seconds
```
2025-05-02T00:45:00.6513920Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-05-02T00:45:00.6515429Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-05-02T00:45:00.6522932Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-05-02T00:45:00.6539380Z   
2025-05-02T00:45:00.6539785Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-05-02T00:45:00.6540178Z         
2025-05-02T00:45:00.6540471Z         Error: error creating resource
2025-05-02T00:45:00.6540754Z         
2025-05-02T00:45:00.6541132Z           with mongodbatlas_stream_processor.processor,
2025-05-02T00:45:00.6541846Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-02T00:45:00.6542631Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-02T00:45:00.6542975Z         
2025-05-02T00:45:00.6543791Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68141187555db3353e4cc5a7/streams/test-acc-tf-4082134892010515642--STARTED-/processor
2025-05-02T00:45:00.6544661Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-02T00:45:00.6545292Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-05-02T00:45:00.6545947Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-02T00:45:00.6546602Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-02T00:45:00.6547249Z         [processor-started-to- failed to acquire resources for stream processor
2025-05-02T00:45:00.6547928Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-05-02T00:45:00.6561096Z   
2025-05-02T00:45:00.6561580Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-02T00:45:00.6562026Z         
2025-05-02T00:45:00.6562478Z         Error: error deleting resource
2025-05-02T00:45:00.6562791Z         
2025-05-02T00:45:00.6563726Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68141187555db3353e4cc5a7/streams/test-acc-tf-4082134892010515642--STARTED-/connections/sample_stream_solar
2025-05-02T00:45:00.6564537Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-02T00:45:00.6565088Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-02T00:45:00.6565724Z         name test-acc-tf-4082134892010515642--STARTED- has active processors, and
2025-05-02T00:45:00.6566247Z         cannot be changed. Reason: Forbidden. Params:
2025-05-02T00:45:00.6566764Z         [test-acc-tf-4082134892010515642--STARTED-], BadRequestDetail: 
2025-05-02T00:45:00.6567767Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (4.36s)
```
### 2025-05-03
#### PASS 11 seconds
### 2025-05-04
#### FAIL 5 seconds
```
2025-05-04T00:47:22.2168127Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-05-04T00:47:22.2168981Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-05-04T00:47:22.2173452Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-05-04T00:47:22.2188573Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState test_terraform_path=/home/runner/work/_temp/2e875f25-0b50-4e0c-86b1-13eb71f11cba/terraform
2025-05-04T00:47:22.2296582Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-05-04T00:47:22.2297514Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-05-04T00:47:22.2298096Z         
2025-05-04T00:47:22.2298564Z         Error: error creating resource
2025-05-04T00:47:22.2299026Z         
2025-05-04T00:47:22.2299632Z           with mongodbatlas_stream_processor.processor,
2025-05-04T00:47:22.2300863Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-04T00:47:22.2301702Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-04T00:47:22.2302049Z         
2025-05-04T00:47:22.2303031Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-7522014205449278958--STARTED-/processor
2025-05-04T00:47:22.2303906Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-04T00:47:22.2304521Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-05-04T00:47:22.2305189Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-04T00:47:22.2305837Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-04T00:47:22.2306476Z         [processor-started-to- failed to acquire resources for stream processor
2025-05-04T00:47:22.2307136Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-05-04T00:47:22.2319633Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-05-04T00:47:22.2320297Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-04T00:47:22.2320744Z         
2025-05-04T00:47:22.2321025Z         Error: error deleting resource
2025-05-04T00:47:22.2321295Z         
2025-05-04T00:47:22.2322354Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-7522014205449278958--STARTED-/connections/sample_stream_solar
2025-05-04T00:47:22.2323150Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-04T00:47:22.2323685Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-04T00:47:22.2324302Z         name test-acc-tf-7522014205449278958--STARTED- has active processors, and
2025-05-04T00:47:22.2324809Z         cannot be changed. Reason: Forbidden. Params:
2025-05-04T00:47:22.2325307Z         [test-acc-tf-7522014205449278958--STARTED-], BadRequestDetail: 
2025-05-04T00:47:22.2327632Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (5.51s)
```
### 2025-05-05
#### PASS 10 seconds
#### FAIL 3 seconds
```
2025-05-05T10:43:53.8705946Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-05-05T10:43:53.8706878Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-05-05T10:43:53.8711070Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-05-05T10:43:53.8726462Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_terraform_path=/home/runner/work/_temp/505e3c05-4642-40db-925f-06835467fcdd/terraform
2025-05-05T10:43:53.8727336Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-05-05T10:43:53.8727719Z         
2025-05-05T10:43:53.8727994Z         Error: error creating resource
2025-05-05T10:43:53.8728256Z         
2025-05-05T10:43:53.8728619Z           with mongodbatlas_stream_processor.processor,
2025-05-05T10:43:53.8729305Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-05T10:43:53.8729948Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-05T10:43:53.8730280Z         
2025-05-05T10:43:53.8731197Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-1020554762387877489--STARTED-/processor
2025-05-05T10:43:53.8732058Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-05T10:43:53.8732665Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-05-05T10:43:53.8733313Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-05T10:43:53.8733953Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-05T10:43:53.8734588Z         [processor-started-to- failed to acquire resources for stream processor
2025-05-05T10:43:53.8735252Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-05-05T10:43:53.8748282Z   
2025-05-05T10:43:53.8748751Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-05T10:43:53.8749176Z         
2025-05-05T10:43:53.8749458Z         Error: error deleting resource
2025-05-05T10:43:53.8749726Z         
2025-05-05T10:43:53.8750639Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-1020554762387877489--STARTED-/connections/sample_stream_solar
2025-05-05T10:43:53.8751439Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-05T10:43:53.8751974Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-05T10:43:53.8752595Z         name test-acc-tf-1020554762387877489--STARTED- has active processors, and
2025-05-05T10:43:53.8753110Z         cannot be changed. Reason: Forbidden. Params:
2025-05-05T10:43:53.8753609Z         [test-acc-tf-1020554762387877489--STARTED-], BadRequestDetail: 
2025-05-05T10:43:53.8769758Z   
2025-05-05T10:43:53.8860247Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (3.12s)
```
### 2025-05-06
#### PASS 11 seconds
### 2025-05-07
#### PASS 13 seconds
#### PASS 13 seconds
#### PASS 11 seconds
#### PASS 14 seconds
### 2025-05-08
#### PASS 13 seconds
### 2025-05-09
#### PASS 12 seconds
### 2025-05-10
#### PASS 11 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:00.1073114Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-05-11T00:30:00.1074724Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-05-11T00:30:00.1076045Z     resource_test.go:210: Creating execution project: test-acc-tf-p-8290037443986876558
2025-05-11T00:30:00.1076505Z     resource_test.go:210: 
2025-05-11T00:30:00.1077501Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.1080243Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:00.1083835Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:352
2025-05-11T00:30:00.1086259Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:210
2025-05-11T00:30:00.1087436Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.1088841Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1090274Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-05-11T00:30:00.1091474Z         	Messages:   	Project creation failed: test-acc-tf-p-8290037443986876558, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1108134Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.02s)
```
### 2025-05-12
#### PASS 13 seconds
### 2025-05-13
#### PASS 11 seconds
#### PASS 10 seconds
### 2025-05-14
#### PASS 11 seconds
### 2025-05-15
#### PASS 11 seconds
### 2025-05-16
#### PASS 10 seconds
### 2025-05-17
#### PASS 11 seconds
### 2025-05-18
#### PASS 14 seconds
### 2025-05-19
#### PASS 13 seconds
### 2025-05-20
#### PASS 11 seconds
#### PASS 13 seconds
### 2025-05-21
#### PASS 14 seconds
### 2025-05-22
#### PASS 13 seconds
#### PASS 12 seconds
#### PASS 11 seconds
### 2025-05-23
#### FAIL 5 seconds
```
2025-05-23T00:49:48.7823166Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-05-23T00:49:48.7824123Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-05-23T00:49:48.7828428Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-05-23T00:49:48.7844642Z    test_step_number=1
2025-05-23T00:49:48.7914007Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-05-23T00:49:48.7914566Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-05-23T00:49:48.7914931Z         
2025-05-23T00:49:48.7915208Z         Error: error creating resource
2025-05-23T00:49:48.7915483Z         
2025-05-23T00:49:48.7915843Z           with mongodbatlas_stream_processor.processor,
2025-05-23T00:49:48.7916536Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-23T00:49:48.7917179Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-23T00:49:48.7917510Z         
2025-05-23T00:49:48.7918322Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-5610320616046346893--STARTED-/processor
2025-05-23T00:49:48.7919183Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-23T00:49:48.7919802Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-05-23T00:49:48.7920443Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-23T00:49:48.7921094Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-23T00:49:48.7921732Z         [processor-started-to- failed to acquire resources for stream processor
2025-05-23T00:49:48.7922394Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-05-23T00:49:48.7936177Z   
2025-05-23T00:49:48.7955856Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-05-23T00:49:48.7956517Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-23T00:49:48.7956957Z         
2025-05-23T00:49:48.7957236Z         Error: error deleting resource
2025-05-23T00:49:48.7957506Z         
2025-05-23T00:49:48.7958433Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-5610320616046346893--STARTED-/connections/sample_stream_solar
2025-05-23T00:49:48.7959237Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-23T00:49:48.7959777Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-23T00:49:48.7960409Z         name test-acc-tf-5610320616046346893--STARTED- has active processors, and
2025-05-23T00:49:48.7960926Z         cannot be changed. Reason: Forbidden. Params:
2025-05-23T00:49:48.7961439Z         [test-acc-tf-5610320616046346893--STARTED-], BadRequestDetail: 
2025-05-23T00:49:48.7963891Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (5.70s)
```
### 2025-05-24
#### PASS 13 seconds
### 2025-05-25
#### PASS 11 seconds
### 2025-05-26
#### PASS 14 seconds
### 2025-05-27
#### PASS 11 seconds
#### PASS 12 seconds
### 2025-05-28
#### PASS 13 seconds
#### PASS 11 seconds
### 2025-05-29
#### PASS 11 seconds
#### PASS 13 seconds
### 2025-05-30
#### PASS 11 seconds
#### PASS 12 seconds
### 2025-05-31
#### PASS 12 seconds
### 2025-06-01
#### PASS 13 seconds
#### PASS 11 seconds
#### PASS 11 seconds
#### PASS 11 seconds
#### PASS 14 seconds
#### PASS 11 seconds
#### PASS 12 seconds
### 2025-06-02
#### PASS 14 seconds
#### PASS 13 seconds
#### PASS 11 seconds
### 2025-06-03
#### PASS 11 seconds
#### PASS 13 seconds
#### PASS 12 seconds
### 2025-06-04
#### PASS 14 seconds
### 2025-06-05
#### PASS 11 seconds
### 2025-06-06
#### PASS 11 seconds
### 2025-06-07
#### PASS 11 seconds
### 2025-06-08
#### PASS 11 seconds
### 2025-06-09
#### PASS 11 seconds
### 2025-06-10
#### PASS 14 seconds
### 2025-06-11
#### PASS 10 seconds
#### PASS 13 seconds
### 2025-06-12
#### PASS 12 seconds
### 2025-06-13
#### PASS 13 seconds
### 2025-06-14
#### PASS 13 seconds
### 2025-06-15
#### PASS 14 seconds
### 2025-06-16
#### PASS 11 seconds
### 2025-06-17
#### PASS 11 seconds
### 2025-06-18
#### PASS 13 seconds
#### PASS 13 seconds
### 2025-06-19
#### PASS 11 seconds
### 2025-06-20
#### PASS 11 seconds
### 2025-06-21
#### PASS 11 seconds
### 2025-06-22
#### FAIL 38 seconds
```
2025-06-22T00:49:55.8391312Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-22T00:49:55.8392314Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-06-22T00:49:55.8396583Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-22T00:49:55.8407079Z    test_terraform_path=/home/runner/work/_temp/7f74e564-488a-4791-a813-f2813e49176c/terraform test_working_directory=/tmp/plugintest3801855713
2025-06-22T00:49:55.8444017Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-22T00:49:55.8444563Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:49:55.8444906Z         
2025-06-22T00:49:55.8445170Z         Error: error creating resource
2025-06-22T00:49:55.8445425Z         
2025-06-22T00:49:55.8445766Z           with mongodbatlas_stream_processor.processor,
2025-06-22T00:49:55.8446432Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-06-22T00:49:55.8447051Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-22T00:49:55.8447359Z         
2025-06-22T00:49:55.8448134Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efbaf7a0954e84ae563/streams/test-acc-tf-449998150795679024--STARTED-/processor
2025-06-22T00:49:55.8449012Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-22T00:49:55.8449725Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-06-22T00:49:55.8450330Z         problem occur: An internal error occurred. Reason: Bad Request. Params:
2025-06-22T00:49:55.8450936Z         [processor-started-to- An internal error occurred], BadRequestDetail: 
2025-06-22T00:49:55.8453400Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (38.26s)
```
### 2025-06-23
#### PASS 14 seconds
### 2025-06-24
#### PASS 11 seconds
### 2025-06-25
#### PASS 11 seconds
#### PASS 11 seconds
### 2025-06-26
#### PASS 11 seconds
#### PASS 12 seconds
### 2025-06-27
#### PASS 11 seconds
### 2025-06-28
#### PASS 14 seconds
### 2025-06-29
#### PASS 12 seconds
### 2025-06-30
#### PASS 13 seconds
### 2025-07-01
#### PASS 14 seconds
#### PASS 11 seconds
#### PASS 14 seconds
#### PASS 11 seconds
#### PASS 14 seconds
#### PASS 14 seconds
#### PASS 11 seconds
#### PASS 13 seconds
### 2025-07-02
#### PASS 11 seconds
### 2025-07-03
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-03T00:46:39.957000+00:00-TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState',confidence=1.0,ts_when='6 days ago')
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
### 2025-07-09
#### PASS 11 seconds