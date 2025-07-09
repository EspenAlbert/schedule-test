# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 18)
Success rate: 86.36%

# #  Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
2025-04-13 01:10 |  | qa |  | 4.02s
2025-04-16 00:45 |  | dev |  | 1.01s
2025-04-16 12:49 |  | qa |  | 3.04s
2025-04-16 14:37 |  | dev |  | 1.07s
2025-04-17 00:44 |  | dev |  | 1.01s
2025-04-20 00:49 |  | qa |  | 5.04s
2025-04-24 00:43 |  | dev |  | 6.09s
2025-04-27 00:47 |  | qa |  | 5.01s
2025-04-30 09:23 |  | qa |  | 3.09s
2025-05-04 00:47 |  | qa |  | 4.01s
2025-05-05 10:43 |  | qa |  | 4.05s
2025-05-11 00:30 |  | qa |  | 0.00s
2025-05-23 00:49 |  | dev |  | 5.05s
2025-06-22 00:49 |  | qa |  | 30.07s
2025-07-06 00:48 |  | qa |  | 31.01s
2025-07-07 00:48 |  | dev |  | 31.02s
2025-07-08 00:45 | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.02s
2025-07-09 01:00 | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.01s

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
#### PASS 16 seconds
### 2025-04-12
#### PASS 16 seconds
### 2025-04-13
#### FAIL 4 seconds
```
2025-04-13T01:10:38.7874282Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-13T01:10:38.7875132Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-04-13T01:10:38.7876894Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-13T01:10:38.7894161Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-13T01:10:38.7894736Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-04-13T01:10:38.7895118Z         
2025-04-13T01:10:38.7895403Z         Error: error creating resource
2025-04-13T01:10:38.7895684Z         
2025-04-13T01:10:38.7896059Z           with mongodbatlas_stream_processor.processor,
2025-04-13T01:10:38.7896772Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-13T01:10:38.7897430Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-13T01:10:38.7897760Z         
2025-04-13T01:10:38.7898620Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-8123828052272620163-STARTED-STOPPED-/processor
2025-04-13T01:10:38.7899509Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-13T01:10:38.7900375Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-04-13T01:10:38.7901046Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-13T01:10:38.7901707Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-13T01:10:38.7902367Z         [processor-stopped-to- failed to acquire resources for stream processor
2025-04-13T01:10:38.7903048Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-13T01:10:38.7916407Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState test_terraform_path=/home/runner/work/_temp/34096c15-8473-462c-9c24-11172a2d6b2d/terraform
2025-04-13T01:10:38.7917379Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-13T01:10:38.7917817Z         
2025-04-13T01:10:38.7918106Z         Error: error deleting resource
2025-04-13T01:10:38.7918380Z         
2025-04-13T01:10:38.7919361Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-8123828052272620163-STARTED-STOPPED-/connections/sample_stream_solar
2025-04-13T01:10:38.7920381Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-13T01:10:38.7920940Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-13T01:10:38.7921614Z         name test-acc-tf-8123828052272620163-STARTED-STOPPED- has active processors,
2025-04-13T01:10:38.7922177Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-13T01:10:38.7922741Z         [test-acc-tf-8123828052272620163-STARTED-STOPPED-], BadRequestDetail: 
2025-04-13T01:10:38.7938848Z   
2025-04-13T01:10:38.8032846Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (4.22s)
```
### 2025-04-14
#### PASS 21 seconds
### 2025-04-15
#### PASS 15 seconds
### 2025-04-16
#### FAIL a second
```
2025-04-16T00:45:12.3623116Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-16T00:45:12.3623682Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-04-16T00:45:12.3624555Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-16T00:45:12.3653257Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-16T00:45:12.3653541Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-04-16T00:45:12.3653639Z         
2025-04-16T00:45:12.3653934Z         Error: error creating resource
2025-04-16T00:45:12.3654027Z         
2025-04-16T00:45:12.3654291Z           with mongodbatlas_stream_processor.processor,
2025-04-16T00:45:12.3654784Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T00:45:12.3655227Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T00:45:12.3655327Z         
2025-04-16T00:45:12.3656087Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-4404851020507700089-STARTED-STOPPED-/processor
2025-04-16T00:45:12.3656437Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T00:45:12.3656778Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-04-16T00:45:12.3657086Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T00:45:12.3657407Z         [processor-stopped-to- RBAC: access denied], BadRequestDetail: 
2025-04-16T00:45:12.3662864Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_terraform_path=/home/runner/work/_temp/92645992-1140-423c-8ef0-74ddbe0cfc31/terraform test_working_directory=/tmp/plugintest2510935217 test_step_number=1
2025-04-16T00:45:12.3679920Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-16T00:45:12.3680294Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3680389Z         
2025-04-16T00:45:12.3680565Z         Error: error deleting resource
2025-04-16T00:45:12.3680655Z         
2025-04-16T00:45:12.3681683Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-4404851020507700089-STARTED-STOPPED-/connections/sample_stream_solar
2025-04-16T00:45:12.3682033Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3682353Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3682498Z         BadRequestDetail: 
2025-04-16T00:45:12.3683618Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (1.13s)
```
#### FAIL 3 seconds
```
2025-04-16T12:49:32.8690985Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-16T12:49:32.8691558Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-04-16T12:49:32.8692185Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-16T12:49:32.8712945Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-16T12:49:32.8713224Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-04-16T12:49:32.8713317Z         
2025-04-16T12:49:32.8713496Z         Error: error creating resource
2025-04-16T12:49:32.8713590Z         
2025-04-16T12:49:32.8713844Z           with mongodbatlas_stream_processor.processor,
2025-04-16T12:49:32.8714324Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T12:49:32.8714637Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T12:49:32.8714725Z         
2025-04-16T12:49:32.8715520Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-2663860307997392976-STARTED-STOPPED-/processor
2025-04-16T12:49:32.8715876Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T12:49:32.8716397Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-04-16T12:49:32.8716708Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T12:49:32.8717126Z         [processor-stopped-to- RBAC: access denied], BadRequestDetail: 
2025-04-16T12:49:32.8721315Z   
2025-04-16T12:49:32.8736003Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-16T12:49:32.8736489Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8736585Z         
2025-04-16T12:49:32.8736762Z         Error: error deleting resource
2025-04-16T12:49:32.8736848Z         
2025-04-16T12:49:32.8737725Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-2663860307997392976-STARTED-STOPPED-/connections/sample_stream_solar
2025-04-16T12:49:32.8738064Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8738387Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8738532Z         BadRequestDetail: 
2025-04-16T12:49:32.8741587Z   
2025-04-16T12:49:32.8750541Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (3.42s)
```
#### FAIL a second
```
2025-04-16T14:37:27.0685617Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-16T14:37:27.0686190Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-04-16T14:37:27.0686812Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-16T14:37:27.0704982Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-16T14:37:27.0705265Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-04-16T14:37:27.0705361Z         
2025-04-16T14:37:27.0705533Z         Error: error creating resource
2025-04-16T14:37:27.0705747Z         
2025-04-16T14:37:27.0706013Z           with mongodbatlas_stream_processor.processor,
2025-04-16T14:37:27.0706499Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T14:37:27.0706811Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T14:37:27.0706905Z         
2025-04-16T14:37:27.0707664Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-7624723444621564019-STARTED-STOPPED-/processor
2025-04-16T14:37:27.0708005Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T14:37:27.0708348Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-04-16T14:37:27.0708657Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T14:37:27.0708975Z         [processor-stopped-to- RBAC: access denied], BadRequestDetail: 
2025-04-16T14:37:27.0715770Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-16T14:37:27.0733901Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-16T14:37:27.0734287Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0734501Z         
2025-04-16T14:37:27.0734675Z         Error: error deleting resource
2025-04-16T14:37:27.0734770Z         
2025-04-16T14:37:27.0735676Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-7624723444621564019-STARTED-STOPPED-/connections/sample_stream_solar
2025-04-16T14:37:27.0736015Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0736336Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0736482Z         BadRequestDetail: 
2025-04-16T14:37:27.0741732Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-16T14:37:27.0745360Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (1.67s)
```
### 2025-04-17
#### FAIL a second
```
2025-04-17T00:44:44.9651749Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-17T00:44:44.9652326Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-04-17T00:44:44.9652952Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-17T00:44:44.9678300Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-17T00:44:44.9678780Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-04-17T00:44:44.9678884Z         
2025-04-17T00:44:44.9679074Z         Error: error creating resource
2025-04-17T00:44:44.9679169Z         
2025-04-17T00:44:44.9679443Z           with mongodbatlas_stream_processor.processor,
2025-04-17T00:44:44.9679955Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-17T00:44:44.9680288Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-17T00:44:44.9680382Z         
2025-04-17T00:44:44.9681160Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-8816619330087269795-STARTED-STOPPED-/processor
2025-04-17T00:44:44.9681521Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-17T00:44:44.9681883Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-04-17T00:44:44.9682210Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-17T00:44:44.9682537Z         [processor-stopped-to- RBAC: access denied], BadRequestDetail: 
2025-04-17T00:44:44.9689403Z   
2025-04-17T00:44:44.9715931Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-17T00:44:44.9716306Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9716400Z         
2025-04-17T00:44:44.9716583Z         Error: error deleting resource
2025-04-17T00:44:44.9716671Z         
2025-04-17T00:44:44.9717670Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-8816619330087269795-STARTED-STOPPED-/connections/sample_stream_solar
2025-04-17T00:44:44.9718017Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9718462Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9718613Z         BadRequestDetail: 
2025-04-17T00:44:44.9719742Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (1.08s)
```
### 2025-04-18
#### PASS 19 seconds
### 2025-04-19
#### PASS 16 seconds
### 2025-04-20
#### FAIL 5 seconds
```
2025-04-20T00:49:06.9958469Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-20T00:49:06.9960030Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-04-20T00:49:06.9963409Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-20T00:49:07.0084056Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-20T00:49:07.0084641Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-04-20T00:49:07.0085013Z         
2025-04-20T00:49:07.0085293Z         Error: error creating resource
2025-04-20T00:49:07.0085564Z         
2025-04-20T00:49:07.0085932Z           with mongodbatlas_stream_processor.processor,
2025-04-20T00:49:07.0086632Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-20T00:49:07.0087281Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-20T00:49:07.0087778Z         
2025-04-20T00:49:07.0088650Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68043fe0e9e1f62c2da38572/streams/test-acc-tf-6663785932813667326-STARTED-STOPPED-/processor
2025-04-20T00:49:07.0089689Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-20T00:49:07.0090314Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-04-20T00:49:07.0090973Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-20T00:49:07.0091632Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-20T00:49:07.0092290Z         [processor-stopped-to- failed to acquire resources for stream processor
2025-04-20T00:49:07.0093148Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-20T00:49:07.0106256Z   
2025-04-20T00:49:07.0144992Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-20T00:49:07.0145647Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-20T00:49:07.0146215Z         
2025-04-20T00:49:07.0146489Z         Error: error deleting resource
2025-04-20T00:49:07.0146773Z         
2025-04-20T00:49:07.0147747Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68043fe0e9e1f62c2da38572/streams/test-acc-tf-6663785932813667326-STARTED-STOPPED-/connections/sample_stream_solar
2025-04-20T00:49:07.0148578Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-20T00:49:07.0149131Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-20T00:49:07.0149804Z         name test-acc-tf-6663785932813667326-STARTED-STOPPED- has active processors,
2025-04-20T00:49:07.0150367Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-20T00:49:07.0150927Z         [test-acc-tf-6663785932813667326-STARTED-STOPPED-], BadRequestDetail: 
2025-04-20T00:49:07.0153486Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (5.40s)
```
### 2025-04-21
#### PASS 19 seconds
### 2025-04-22
#### PASS 19 seconds
### 2025-04-23
#### PASS 16 seconds
### 2025-04-24
#### FAIL 6 seconds
```
2025-04-24T00:43:21.1327643Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-24T00:43:21.1328463Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-04-24T00:43:21.1330088Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-24T00:43:21.1390132Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-24T00:43:21.1390685Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-04-24T00:43:21.1391034Z         
2025-04-24T00:43:21.1391311Z         Error: error creating resource
2025-04-24T00:43:21.1391571Z         
2025-04-24T00:43:21.1391928Z           with mongodbatlas_stream_processor.processor,
2025-04-24T00:43:21.1392837Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-24T00:43:21.1393471Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-24T00:43:21.1393786Z         
2025-04-24T00:43:21.1394616Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-583899218338350816-STARTED-STOPPED-/processor
2025-04-24T00:43:21.1395489Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-24T00:43:21.1396102Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-04-24T00:43:21.1396735Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-24T00:43:21.1397371Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-24T00:43:21.1398137Z         [processor-stopped-to- failed to acquire resources for stream processor
2025-04-24T00:43:21.1398815Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-24T00:43:21.1414779Z    test_step_number=1
2025-04-24T00:43:21.1437364Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-24T00:43:21.1438008Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-24T00:43:21.1438430Z         
2025-04-24T00:43:21.1438700Z         Error: error deleting resource
2025-04-24T00:43:21.1438959Z         
2025-04-24T00:43:21.1439917Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-583899218338350816-STARTED-STOPPED-/connections/sample_stream_solar
2025-04-24T00:43:21.1440739Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-24T00:43:21.1441272Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-24T00:43:21.1441913Z         name test-acc-tf-583899218338350816-STARTED-STOPPED- has active processors,
2025-04-24T00:43:21.1442556Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-24T00:43:21.1443099Z         [test-acc-tf-583899218338350816-STARTED-STOPPED-], BadRequestDetail: 
2025-04-24T00:43:21.1455464Z    test_terraform_path=/home/runner/work/_temp/5edcbd20-a505-4ac5-832d-94520538c2a4/terraform test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_working_directory=/tmp/plugintest352964961 test_step_number=1
2025-04-24T00:43:21.1463685Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (6.88s)
```
### 2025-04-25
#### PASS 9 seconds
### 2025-04-26
#### PASS 30 seconds
### 2025-04-27
#### FAIL 5 seconds
```
2025-04-27T00:47:25.4520477Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-27T00:47:25.4521315Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-04-27T00:47:25.4522965Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-27T00:47:25.4627596Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-27T00:47:25.4628258Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-04-27T00:47:25.4628633Z         
2025-04-27T00:47:25.4628909Z         Error: error creating resource
2025-04-27T00:47:25.4629174Z         
2025-04-27T00:47:25.4629538Z           with mongodbatlas_stream_processor.processor,
2025-04-27T00:47:25.4630231Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-27T00:47:25.4630871Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-27T00:47:25.4631196Z         
2025-04-27T00:47:25.4632178Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-8096766518762902593-STARTED-STOPPED-/processor
2025-04-27T00:47:25.4633090Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-27T00:47:25.4633703Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-04-27T00:47:25.4634354Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-27T00:47:25.4635000Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-27T00:47:25.4635645Z         [processor-stopped-to- failed to acquire resources for stream processor
2025-04-27T00:47:25.4636305Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-27T00:47:25.4649576Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-27T00:47:25.4650242Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-27T00:47:25.4650673Z         
2025-04-27T00:47:25.4650949Z         Error: error deleting resource
2025-04-27T00:47:25.4651224Z         
2025-04-27T00:47:25.4652199Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-8096766518762902593-STARTED-STOPPED-/connections/sample_stream_solar
2025-04-27T00:47:25.4653047Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-27T00:47:25.4653584Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-27T00:47:25.4654243Z         name test-acc-tf-8096766518762902593-STARTED-STOPPED- has active processors,
2025-04-27T00:47:25.4654793Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-27T00:47:25.4655351Z         [test-acc-tf-8096766518762902593-STARTED-STOPPED-], BadRequestDetail: 
2025-04-27T00:47:25.4658567Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (5.07s)
```
### 2025-04-28
#### PASS 10 seconds
### 2025-04-29
#### PASS 10 seconds
### 2025-04-30
#### PASS 13 seconds
#### FAIL 3 seconds
```
2025-04-30T09:23:01.8317609Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-30T09:23:01.8318574Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-04-30T09:23:01.8320329Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-30T09:23:01.8337743Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-30T09:23:01.8338298Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-04-30T09:23:01.8338652Z         
2025-04-30T09:23:01.8338923Z         Error: error creating resource
2025-04-30T09:23:01.8339184Z         
2025-04-30T09:23:01.8339536Z           with mongodbatlas_stream_processor.processor,
2025-04-30T09:23:01.8340226Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-30T09:23:01.8340860Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-30T09:23:01.8341178Z         
2025-04-30T09:23:01.8342024Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-5437256190399636504-STARTED-STOPPED-/processor
2025-04-30T09:23:01.8342904Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-30T09:23:01.8343628Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-04-30T09:23:01.8344260Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-30T09:23:01.8345041Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-30T09:23:01.8345680Z         [processor-stopped-to- failed to acquire resources for stream processor
2025-04-30T09:23:01.8346336Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-30T09:23:01.8362370Z   
2025-04-30T09:23:01.8409584Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-30T09:23:01.8410223Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-30T09:23:01.8410641Z         
2025-04-30T09:23:01.8410911Z         Error: error deleting resource
2025-04-30T09:23:01.8411163Z         
2025-04-30T09:23:01.8412128Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-5437256190399636504-STARTED-STOPPED-/connections/sample_stream_solar
2025-04-30T09:23:01.8412946Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-30T09:23:01.8413674Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-30T09:23:01.8414330Z         name test-acc-tf-5437256190399636504-STARTED-STOPPED- has active processors,
2025-04-30T09:23:01.8414873Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-30T09:23:01.8415414Z         [test-acc-tf-5437256190399636504-STARTED-STOPPED-], BadRequestDetail: 
2025-04-30T09:23:01.8427690Z    test_terraform_path=/home/runner/work/_temp/e9d9e2d7-1093-496a-b712-8e78e21daf85/terraform test_working_directory=/tmp/plugintest3583141957 test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-30T09:23:01.8454020Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (3.86s)
```
### 2025-05-01
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 13 seconds
#### PASS 10 seconds
#### PASS 13 seconds
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-05-02
#### PASS 10 seconds
### 2025-05-03
#### PASS 10 seconds
### 2025-05-04
#### FAIL 4 seconds
```
2025-05-04T00:47:22.2170131Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-05-04T00:47:22.2171173Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-05-04T00:47:22.2172990Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-05-04T00:47:22.2214139Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-05-04T00:47:22.2214681Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-05-04T00:47:22.2215042Z         
2025-05-04T00:47:22.2215307Z         Error: error creating resource
2025-05-04T00:47:22.2215568Z         
2025-05-04T00:47:22.2215930Z           with mongodbatlas_stream_processor.processor,
2025-05-04T00:47:22.2216598Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-04T00:47:22.2217342Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-04T00:47:22.2217663Z         
2025-05-04T00:47:22.2218479Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-7292154116793624611-STARTED-STOPPED-/processor
2025-05-04T00:47:22.2219336Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-04T00:47:22.2219952Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-05-04T00:47:22.2220582Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-04T00:47:22.2221215Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-04T00:47:22.2221966Z         [processor-stopped-to- failed to acquire resources for stream processor
2025-05-04T00:47:22.2222612Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-05-04T00:47:22.2235345Z   
2025-05-04T00:47:22.2254544Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-05-04T00:47:22.2255187Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-04T00:47:22.2255607Z         
2025-05-04T00:47:22.2255882Z         Error: error deleting resource
2025-05-04T00:47:22.2256141Z         
2025-05-04T00:47:22.2257219Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-7292154116793624611-STARTED-STOPPED-/connections/sample_stream_solar
2025-05-04T00:47:22.2258046Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-04T00:47:22.2258572Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-04T00:47:22.2259215Z         name test-acc-tf-7292154116793624611-STARTED-STOPPED- has active processors,
2025-05-04T00:47:22.2259749Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-04T00:47:22.2260290Z         [test-acc-tf-7292154116793624611-STARTED-STOPPED-], BadRequestDetail: 
2025-05-04T00:47:22.2294886Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_terraform_path=/home/runner/work/_temp/2e875f25-0b50-4e0c-86b1-13eb71f11cba/terraform test_working_directory=/tmp/plugintest1712262741 test_step_number=1
2025-05-04T00:47:22.2327024Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (4.09s)
```
### 2025-05-05
#### PASS 9 seconds
#### FAIL 4 seconds
```
2025-05-05T10:43:53.8708140Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-05-05T10:43:53.8708973Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-05-05T10:43:53.8710597Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-05-05T10:43:53.8813117Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-05-05T10:43:53.8813676Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-05-05T10:43:53.8814035Z         
2025-05-05T10:43:53.8814303Z         Error: error creating resource
2025-05-05T10:43:53.8814560Z         
2025-05-05T10:43:53.8814923Z           with mongodbatlas_stream_processor.processor,
2025-05-05T10:43:53.8815609Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-05T10:43:53.8816367Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-05T10:43:53.8816690Z         
2025-05-05T10:43:53.8817511Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-7106585349990984418-STARTED-STOPPED-/processor
2025-05-05T10:43:53.8818471Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-05T10:43:53.8819339Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-05-05T10:43:53.8820072Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-05T10:43:53.8820904Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-05T10:43:53.8821647Z         [processor-stopped-to- failed to acquire resources for stream processor
2025-05-05T10:43:53.8822509Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-05-05T10:43:53.8852206Z   
2025-05-05T10:43:53.8852813Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-05T10:43:53.8853256Z         
2025-05-05T10:43:53.8853644Z         Error: error deleting resource
2025-05-05T10:43:53.8853924Z         
2025-05-05T10:43:53.8855016Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-7106585349990984418-STARTED-STOPPED-/connections/sample_stream_solar
2025-05-05T10:43:53.8856192Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-05T10:43:53.8856984Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-05T10:43:53.8857769Z         name test-acc-tf-7106585349990984418-STARTED-STOPPED- has active processors,
2025-05-05T10:43:53.8858342Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-05T10:43:53.8859005Z         [test-acc-tf-7106585349990984418-STARTED-STOPPED-], BadRequestDetail: 
2025-05-05T10:43:53.8861711Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (4.53s)
```
### 2025-05-06
#### PASS 10 seconds
### 2025-05-07
#### PASS 14 seconds
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 15 seconds
### 2025-05-08
#### PASS 13 seconds
### 2025-05-09
#### PASS 12 seconds
### 2025-05-10
#### PASS 10 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:00.1092775Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-05-11T00:30:00.1094098Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-05-11T00:30:00.1095040Z     resource_test.go:210: Creating execution project: test-acc-tf-p-6891725831321660819
2025-05-11T00:30:00.1095495Z     resource_test.go:210: 
2025-05-11T00:30:00.1096383Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.1098126Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:00.1099979Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:352
2025-05-11T00:30:00.1101856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:210
2025-05-11T00:30:00.1103006Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.1103884Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1104628Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-05-11T00:30:00.1106175Z         	Messages:   	Project creation failed: test-acc-tf-p-6891725831321660819, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1108753Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.02s)
```
### 2025-05-12
#### PASS 13 seconds
### 2025-05-13
#### PASS 11 seconds
#### PASS 9 seconds
### 2025-05-14
#### PASS 10 seconds
### 2025-05-15
#### PASS 10 seconds
### 2025-05-16
#### PASS 10 seconds
### 2025-05-17
#### PASS 10 seconds
### 2025-05-18
#### PASS 14 seconds
### 2025-05-19
#### PASS 14 seconds
### 2025-05-20
#### PASS 10 seconds
#### PASS 14 seconds
### 2025-05-21
#### PASS 14 seconds
### 2025-05-22
#### PASS 13 seconds
#### PASS 11 seconds
#### PASS 10 seconds
### 2025-05-23
#### FAIL 5 seconds
```
2025-05-23T00:49:48.7825307Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-05-23T00:49:48.7826155Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-05-23T00:49:48.7827831Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-05-23T00:49:48.7888754Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-05-23T00:49:48.7889322Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-05-23T00:49:48.7889687Z         
2025-05-23T00:49:48.7889973Z         Error: error creating resource
2025-05-23T00:49:48.7890245Z         
2025-05-23T00:49:48.7890611Z           with mongodbatlas_stream_processor.processor,
2025-05-23T00:49:48.7891301Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-23T00:49:48.7891945Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-23T00:49:48.7892274Z         
2025-05-23T00:49:48.7893124Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-4357436884112129286-STARTED-STOPPED-/processor
2025-05-23T00:49:48.7894117Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-23T00:49:48.7894739Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-05-23T00:49:48.7895398Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-23T00:49:48.7896052Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-23T00:49:48.7896699Z         [processor-stopped-to- failed to acquire resources for stream processor
2025-05-23T00:49:48.7897359Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-05-23T00:49:48.7913688Z   
2025-05-23T00:49:48.7936494Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-05-23T00:49:48.7937150Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-23T00:49:48.7937594Z         
2025-05-23T00:49:48.7937872Z         Error: error deleting resource
2025-05-23T00:49:48.7938148Z         
2025-05-23T00:49:48.7939116Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-4357436884112129286-STARTED-STOPPED-/connections/sample_stream_solar
2025-05-23T00:49:48.7939961Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-23T00:49:48.7940500Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-23T00:49:48.7941154Z         name test-acc-tf-4357436884112129286-STARTED-STOPPED- has active processors,
2025-05-23T00:49:48.7941708Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-23T00:49:48.7942340Z         [test-acc-tf-4357436884112129286-STARTED-STOPPED-], BadRequestDetail: 
2025-05-23T00:49:48.7954703Z    test_working_directory=/tmp/plugintest3064334491 test_step_number=1 test_terraform_path=/home/runner/work/_temp/ff69557a-791e-4b49-8991-15a455b1be89/terraform test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-05-23T00:49:48.7963067Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (5.48s)
```
### 2025-05-24
#### PASS 10 seconds
### 2025-05-25
#### PASS 10 seconds
### 2025-05-26
#### PASS 14 seconds
### 2025-05-27
#### PASS 10 seconds
#### PASS 11 seconds
### 2025-05-28
#### PASS 13 seconds
#### PASS 10 seconds
### 2025-05-29
#### PASS 10 seconds
#### PASS 13 seconds
### 2025-05-30
#### PASS 10 seconds
#### PASS 11 seconds
### 2025-05-31
#### PASS 10 seconds
### 2025-06-01
#### PASS 13 seconds
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 14 seconds
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-06-02
#### PASS 14 seconds
#### PASS 14 seconds
#### PASS 10 seconds
### 2025-06-03
#### PASS 10 seconds
#### PASS 14 seconds
#### PASS 10 seconds
### 2025-06-04
#### PASS 14 seconds
### 2025-06-05
#### PASS 10 seconds
### 2025-06-06
#### PASS 10 seconds
### 2025-06-07
#### PASS 10 seconds
### 2025-06-08
#### PASS 10 seconds
### 2025-06-09
#### PASS 10 seconds
### 2025-06-10
#### PASS 14 seconds
### 2025-06-11
#### PASS 9 seconds
#### PASS 12 seconds
### 2025-06-12
#### PASS 11 seconds
### 2025-06-13
#### PASS 14 seconds
### 2025-06-14
#### PASS 11 seconds
### 2025-06-15
#### PASS 14 seconds
### 2025-06-16
#### PASS 10 seconds
### 2025-06-17
#### PASS 10 seconds
### 2025-06-18
#### PASS 14 seconds
#### PASS 13 seconds
### 2025-06-19
#### PASS 10 seconds
### 2025-06-20
#### PASS 10 seconds
### 2025-06-21
#### PASS 11 seconds
### 2025-06-22
#### FAIL 30 seconds
```
2025-06-22T00:49:55.8393612Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-22T00:49:55.8394530Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-06-22T00:49:55.8396130Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-22T00:49:55.8407775Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-22T00:49:55.8408327Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-06-22T00:49:55.8408675Z         
2025-06-22T00:49:55.8408941Z         Error: error creating resource
2025-06-22T00:49:55.8409187Z         
2025-06-22T00:49:55.8409510Z           with mongodbatlas_stream_instance.instance,
2025-06-22T00:49:55.8410157Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-06-22T00:49:55.8410745Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-06-22T00:49:55.8411051Z         
2025-06-22T00:49:55.8411539Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efbaf7a0954e84ae563/streams
2025-06-22T00:49:55.8412411Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8412978Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8413357Z         BadRequestDetail: 
2025-06-22T00:49:55.8424376Z   
2025-06-22T00:49:55.8452082Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (30.71s)
```
### 2025-06-23
#### PASS 14 seconds
### 2025-06-24
#### PASS 10 seconds
### 2025-06-25
#### PASS 11 seconds
#### PASS 10 seconds
### 2025-06-26
#### PASS 10 seconds
#### PASS 11 seconds
### 2025-06-27
#### PASS 11 seconds
### 2025-06-28
#### PASS 14 seconds
### 2025-06-29
#### PASS 11 seconds
### 2025-06-30
#### PASS 13 seconds
### 2025-07-01
#### PASS 14 seconds
#### PASS 10 seconds
#### PASS 14 seconds
#### PASS 10 seconds
#### PASS 14 seconds
#### PASS 14 seconds
#### PASS 10 seconds
#### PASS 13 seconds
### 2025-07-02
#### PASS 10 seconds
### 2025-07-03
#### PASS 11 seconds
### 2025-07-04
#### PASS 10 seconds
### 2025-07-05
#### PASS 14 seconds
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
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-08T00:45:56.121000+00:00-TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState',confidence=1.0,ts_when='a day ago')
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
### 2025-07-09
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-09T01:00:42.617000+00:00-TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState',confidence=1.0,ts_when='18 minutes ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-09T01:00:42.6179152Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-09T01:00:42.6180699Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-07-09T01:00:42.6183582Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-09T01:00:42.6215210Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-09T01:00:42.6216183Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-07-09T01:00:42.6216795Z         
2025-07-09T01:00:42.6217248Z         Error: error creating resource
2025-07-09T01:00:42.6217821Z         
2025-07-09T01:00:42.6218418Z           with mongodbatlas_stream_processor.processor,
2025-07-09T01:00:42.6219624Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-09T01:00:42.6220769Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-09T01:00:42.6221332Z         
2025-07-09T01:00:42.6222869Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686db7ff725a79527bea68dc/streams/test-acc-tf-3580454882893657731-STARTED-STOPPED-/processor
2025-07-09T01:00:42.6224452Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-09T01:00:42.6225539Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-07-09T01:00:42.6227028Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-09T01:00:42.6228353Z         internal error while provisioning resource from global resource manager.
2025-07-09T01:00:42.6229463Z         Reason: Bad Request. Params: [processor-stopped-to- failed to acquire
2025-07-09T01:00:42.6230583Z         resources for stream processor validation: internal error while provisioning
2025-07-09T01:00:42.6231589Z         resource from global resource manager], BadRequestDetail: 
2025-07-09T01:00:42.6246308Z   
2025-07-09T01:00:42.6246781Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-09T01:00:42.6247205Z         
2025-07-09T01:00:42.6247668Z         Error: error deleting resource
2025-07-09T01:00:42.6248006Z         
2025-07-09T01:00:42.6248972Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686db7ff725a79527bea68dc/streams/test-acc-tf-3580454882893657731-STARTED-STOPPED-/connections/sample_stream_solar
2025-07-09T01:00:42.6249794Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-09T01:00:42.6250313Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-09T01:00:42.6250804Z         name sample_stream_solar in stream instance
2025-07-09T01:00:42.6251349Z         test-acc-tf-3580454882893657731-STARTED-STOPPED- has active processors, and
2025-07-09T01:00:42.6251957Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-09T01:00:42.6252532Z         test-acc-tf-3580454882893657731-STARTED-STOPPED-], BadRequestDetail: 
2025-07-09T01:00:42.6254877Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (31.13s)
```