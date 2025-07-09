# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 101) FAIL(x 31)
Success rate: 76.52%

# #  Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
2025-04-13 01:10 |  | qa |  | 4.04s
2025-04-16 00:45 |  | dev |  | 1.01s
2025-04-16 12:49 |  | qa |  | 3.10s
2025-04-16 14:37 |  | dev |  | 1.06s
2025-04-17 00:44 |  | dev |  | 1.00s
2025-04-20 00:49 |  | qa |  | 5.04s
2025-04-24 00:43 |  | dev |  | 5.06s
2025-04-25 00:44 |  | dev |  | 2.07s
2025-04-26 00:45 |  | dev |  | 8.01s
2025-04-27 00:47 |  | qa |  | 4.06s
2025-04-28 00:45 |  | dev |  | 2.08s
2025-04-30 09:23 |  | qa |  | 4.01s
2025-05-01 00:44 |  | dev |  | 3.08s
2025-05-01 02:17 |  | dev |  | 3.07s
2025-05-01 03:43 |  | dev |  | 4.02s
2025-05-01 05:07 |  | dev |  | 1.08s
2025-05-01 08:00 |  | dev |  | 3.08s
2025-05-01 09:23 |  | dev |  | 2.09s
2025-05-02 00:45 |  | dev |  | 4.05s
2025-05-03 00:44 |  | dev |  | 4.05s
2025-05-04 00:47 |  | qa |  | 5.03s
2025-05-05 00:44 |  | dev |  | 4.07s
2025-05-05 10:43 |  | qa |  | 4.08s
2025-05-07 19:17 |  | dev |  | 3.10s
2025-05-11 00:30 |  | qa |  | 0.00s
2025-05-23 00:49 |  | dev |  | 4.05s
2025-06-16 00:46 |  | dev |  | 31.01s
2025-07-03 00:46 | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.03s
2025-07-05 00:44 |  | dev |  | 31.05s
2025-07-07 00:48 |  | dev |  | 31.02s
2025-07-09 01:00 | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.02s

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
#### PASS 14 seconds
### 2025-04-12
#### PASS 14 seconds
### 2025-04-13
#### FAIL 4 seconds
```
2025-04-13T01:10:38.8037092Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-13T01:10:38.8037792Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-04-13T01:10:38.8042180Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-13T01:10:38.8059055Z   
2025-04-13T01:10:38.8059467Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-04-13T01:10:38.8059842Z         
2025-04-13T01:10:38.8060256Z         Error: error creating resource
2025-04-13T01:10:38.8060529Z         
2025-04-13T01:10:38.8060902Z           with mongodbatlas_stream_processor.processor,
2025-04-13T01:10:38.8061611Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-13T01:10:38.8062268Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-13T01:10:38.8062610Z         
2025-04-13T01:10:38.8063510Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-7585486447818948505-STARTED-STOPPED-CREATED/processor
2025-04-13T01:10:38.8064443Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-13T01:10:38.8065103Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-04-13T01:10:38.8065774Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-13T01:10:38.8066430Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-13T01:10:38.8067074Z         [processor-stopped-to-created failed to acquire resources for stream
2025-04-13T01:10:38.8067705Z         processor validation: global resource manager returned no resources],
2025-04-13T01:10:38.8068133Z         BadRequestDetail: 
2025-04-13T01:10:38.8081942Z   
2025-04-13T01:10:38.8082428Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-13T01:10:38.8083000Z         
2025-04-13T01:10:38.8083288Z         Error: error deleting resource
2025-04-13T01:10:38.8083569Z         
2025-04-13T01:10:38.8084588Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-7585486447818948505-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-04-13T01:10:38.8085451Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-13T01:10:38.8085997Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-13T01:10:38.8086623Z         name test-acc-tf-7585486447818948505-STARTED-STOPPED-CREATED has active
2025-04-13T01:10:38.8087221Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-04-13T01:10:38.8087866Z         [test-acc-tf-7585486447818948505-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-04-13T01:10:38.8104236Z    test_terraform_path=/home/runner/work/_temp/34096c15-8473-462c-9c24-11172a2d6b2d/terraform
2025-04-13T01:10:38.8180283Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (4.44s)
```
### 2025-04-14
#### PASS 17 seconds
### 2025-04-15
#### PASS 14 seconds
### 2025-04-16
#### FAIL a second
```
2025-04-16T00:45:12.3685428Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-16T00:45:12.3685812Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-04-16T00:45:12.3687655Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-16T00:45:12.3697393Z    test_step_number=1 test_working_directory=/tmp/plugintest2506754205
2025-04-16T00:45:12.3726085Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-16T00:45:12.3726551Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-04-16T00:45:12.3726660Z         
2025-04-16T00:45:12.3726837Z         Error: error creating resource
2025-04-16T00:45:12.3726937Z         
2025-04-16T00:45:12.3727205Z           with mongodbatlas_stream_processor.processor,
2025-04-16T00:45:12.3727697Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T00:45:12.3728014Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T00:45:12.3728106Z         
2025-04-16T00:45:12.3728907Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-2764513957567662022-STARTED-STOPPED-CREATED/processor
2025-04-16T00:45:12.3729248Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T00:45:12.3729628Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-04-16T00:45:12.3729939Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T00:45:12.3730295Z         [processor-stopped-to-created RBAC: access denied], BadRequestDetail: 
2025-04-16T00:45:12.3735925Z    test_working_directory=/tmp/plugintest2506754205 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-16T00:45:12.3753068Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-16T00:45:12.3753436Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3753530Z         
2025-04-16T00:45:12.3753703Z         Error: error deleting resource
2025-04-16T00:45:12.3753923Z         
2025-04-16T00:45:12.3754860Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-2764513957567662022-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-04-16T00:45:12.3755194Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3755513Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3755661Z         BadRequestDetail: 
2025-04-16T00:45:12.3757060Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (1.15s)
```
#### FAIL 3 seconds
```
2025-04-16T12:49:32.8752490Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-16T12:49:32.8752879Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-04-16T12:49:32.8754726Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-16T12:49:32.8767460Z    test_working_directory=/tmp/plugintest366867153 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/c09527d7-de0c-4201-9826-27350f0a89ff/terraform test_step_number=1
2025-04-16T12:49:32.8776306Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-16T12:49:32.8776582Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-04-16T12:49:32.8776678Z         
2025-04-16T12:49:32.8776851Z         Error: error creating resource
2025-04-16T12:49:32.8776939Z         
2025-04-16T12:49:32.8777197Z           with mongodbatlas_stream_processor.processor,
2025-04-16T12:49:32.8777677Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T12:49:32.8777989Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T12:49:32.8778079Z         
2025-04-16T12:49:32.8778870Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-4548234587304054404-STARTED-STOPPED-CREATED/processor
2025-04-16T12:49:32.8779314Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T12:49:32.8779698Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-04-16T12:49:32.8779996Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T12:49:32.8780347Z         [processor-stopped-to-created RBAC: access denied], BadRequestDetail: 
2025-04-16T12:49:32.8784382Z   
2025-04-16T12:49:32.8795130Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-16T12:49:32.8795507Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8795616Z         
2025-04-16T12:49:32.8795894Z         Error: error deleting resource
2025-04-16T12:49:32.8795992Z         
2025-04-16T12:49:32.8797021Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-4548234587304054404-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-04-16T12:49:32.8797429Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8797787Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8797934Z         BadRequestDetail: 
2025-04-16T12:49:32.8807271Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/c09527d7-de0c-4201-9826-27350f0a89ff/terraform test_step_number=1 test_working_directory=/tmp/plugintest366867153
2025-04-16T12:49:32.8817898Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (3.98s)
```
#### FAIL a second
```
2025-04-16T14:37:27.0747099Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-16T14:37:27.0747492Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-04-16T14:37:27.0749317Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-16T14:37:27.0756487Z   
2025-04-16T14:37:27.0768232Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-16T14:37:27.0768514Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-04-16T14:37:27.0768606Z         
2025-04-16T14:37:27.0768782Z         Error: error creating resource
2025-04-16T14:37:27.0768878Z         
2025-04-16T14:37:27.0769136Z           with mongodbatlas_stream_processor.processor,
2025-04-16T14:37:27.0769614Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T14:37:27.0769931Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T14:37:27.0770025Z         
2025-04-16T14:37:27.0770821Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-3381584654343560533-STARTED-STOPPED-CREATED/processor
2025-04-16T14:37:27.0771164Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T14:37:27.0771659Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-04-16T14:37:27.0771969Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T14:37:27.0772322Z         [processor-stopped-to-created RBAC: access denied], BadRequestDetail: 
2025-04-16T14:37:27.0779328Z   
2025-04-16T14:37:27.0789753Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-16T14:37:27.0790134Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0790233Z         
2025-04-16T14:37:27.0790408Z         Error: error deleting resource
2025-04-16T14:37:27.0790504Z         
2025-04-16T14:37:27.0791421Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-3381584654343560533-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-04-16T14:37:27.0791754Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0792082Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0792228Z         BadRequestDetail: 
2025-04-16T14:37:27.0798172Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/cbd85b3d-89a9-420b-96e9-da4975fd1b27/terraform test_working_directory=/tmp/plugintest2272974819 test_step_number=1
2025-04-16T14:37:27.0809870Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (1.63s)
```
### 2025-04-17
#### FAIL a second
```
2025-04-17T00:44:44.9721083Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-17T00:44:44.9721615Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-04-17T00:44:44.9723455Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-17T00:44:44.9730486Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_terraform_path=/home/runner/work/_temp/7820bfc0-4292-41a1-b17d-9a8aaba10970/terraform test_working_directory=/tmp/plugintest68755711
2025-04-17T00:44:44.9753585Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-17T00:44:44.9753990Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-04-17T00:44:44.9754090Z         
2025-04-17T00:44:44.9754271Z         Error: error creating resource
2025-04-17T00:44:44.9754361Z         
2025-04-17T00:44:44.9754629Z           with mongodbatlas_stream_processor.processor,
2025-04-17T00:44:44.9755122Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-17T00:44:44.9755447Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-17T00:44:44.9755541Z         
2025-04-17T00:44:44.9756347Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-7120874818920369868-STARTED-STOPPED-CREATED/processor
2025-04-17T00:44:44.9756728Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-17T00:44:44.9757117Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-04-17T00:44:44.9757432Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-17T00:44:44.9757951Z         [processor-stopped-to-created RBAC: access denied], BadRequestDetail: 
2025-04-17T00:44:44.9763734Z   
2025-04-17T00:44:44.9764112Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9764208Z         
2025-04-17T00:44:44.9764387Z         Error: error deleting resource
2025-04-17T00:44:44.9764479Z         
2025-04-17T00:44:44.9765403Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-7120874818920369868-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-04-17T00:44:44.9765751Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9766085Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9766232Z         BadRequestDetail: 
2025-04-17T00:44:44.9774297Z   
2025-04-17T00:44:44.9783617Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (1.05s)
```
### 2025-04-18
#### PASS 17 seconds
### 2025-04-19
#### PASS 14 seconds
### 2025-04-20
#### FAIL 5 seconds
```
2025-04-20T00:49:07.0156786Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-20T00:49:07.0157670Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-04-20T00:49:07.0179696Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-20T00:49:07.0201179Z    test_working_directory=/tmp/plugintest1245488687
2025-04-20T00:49:07.0276367Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-20T00:49:07.0277496Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-04-20T00:49:07.0278167Z         
2025-04-20T00:49:07.0278678Z         Error: error creating resource
2025-04-20T00:49:07.0279162Z         
2025-04-20T00:49:07.0279828Z           with mongodbatlas_stream_processor.processor,
2025-04-20T00:49:07.0281124Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-20T00:49:07.0282323Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-20T00:49:07.0283145Z         
2025-04-20T00:49:07.0284827Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68043fe0e9e1f62c2da38572/streams/test-acc-tf-9137540306094790364-STARTED-STOPPED-CREATED/processor
2025-04-20T00:49:07.0286557Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-20T00:49:07.0287783Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-04-20T00:49:07.0289041Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-20T00:49:07.0290270Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-20T00:49:07.0291470Z         [processor-stopped-to-created failed to acquire resources for stream
2025-04-20T00:49:07.0292818Z         processor validation: global resource manager returned no resources],
2025-04-20T00:49:07.0293608Z         BadRequestDetail: 
2025-04-20T00:49:07.0324080Z   
2025-04-20T00:49:07.0367556Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-20T00:49:07.0368790Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-20T00:49:07.0369627Z         
2025-04-20T00:49:07.0370138Z         Error: error deleting resource
2025-04-20T00:49:07.0370623Z         
2025-04-20T00:49:07.0372654Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68043fe0e9e1f62c2da38572/streams/test-acc-tf-9137540306094790364-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-04-20T00:49:07.0374270Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-20T00:49:07.0375231Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-20T00:49:07.0376405Z         name test-acc-tf-9137540306094790364-STARTED-STOPPED-CREATED has active
2025-04-20T00:49:07.0377504Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-04-20T00:49:07.0378695Z         [test-acc-tf-9137540306094790364-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-04-20T00:49:07.0403738Z   
2025-04-20T00:49:07.0418829Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (5.36s)
```
### 2025-04-21
#### PASS 17 seconds
### 2025-04-22
#### PASS 17 seconds
### 2025-04-23
#### PASS 14 seconds
### 2025-04-24
#### FAIL 5 seconds
```
2025-04-24T00:43:21.1467134Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-24T00:43:21.1467812Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-04-24T00:43:21.1471949Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-24T00:43:21.1488581Z   
2025-04-24T00:43:21.1541051Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-24T00:43:21.1541686Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-04-24T00:43:21.1542215Z         
2025-04-24T00:43:21.1542506Z         Error: error creating resource
2025-04-24T00:43:21.1542777Z         
2025-04-24T00:43:21.1543133Z           with mongodbatlas_stream_processor.processor,
2025-04-24T00:43:21.1543859Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-24T00:43:21.1544495Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-24T00:43:21.1544817Z         
2025-04-24T00:43:21.1545703Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-3837575501783992376-STARTED-STOPPED-CREATED/processor
2025-04-24T00:43:21.1546610Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-24T00:43:21.1547267Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-04-24T00:43:21.1548061Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-24T00:43:21.1548700Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-24T00:43:21.1549336Z         [processor-stopped-to-created failed to acquire resources for stream
2025-04-24T00:43:21.1549953Z         processor validation: global resource manager returned no resources],
2025-04-24T00:43:21.1550374Z         BadRequestDetail: 
2025-04-24T00:43:21.1563968Z   
2025-04-24T00:43:21.1604436Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-24T00:43:21.1605112Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-24T00:43:21.1605542Z         
2025-04-24T00:43:21.1605813Z         Error: error deleting resource
2025-04-24T00:43:21.1606076Z         
2025-04-24T00:43:21.1607079Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-3837575501783992376-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-04-24T00:43:21.1607927Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-24T00:43:21.1608460Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-24T00:43:21.1609075Z         name test-acc-tf-3837575501783992376-STARTED-STOPPED-CREATED has active
2025-04-24T00:43:21.1609655Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-04-24T00:43:21.1610294Z         [test-acc-tf-3837575501783992376-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-04-24T00:43:21.1613754Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (5.61s)
```
### 2025-04-25
#### FAIL 2 seconds
```
2025-04-25T00:44:59.2535619Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-25T00:44:59.2536478Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-04-25T00:44:59.2540619Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-25T00:44:59.2557875Z   
2025-04-25T00:44:59.2558396Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-04-25T00:44:59.2558764Z         
2025-04-25T00:44:59.2559052Z         Error: error creating resource
2025-04-25T00:44:59.2559326Z         
2025-04-25T00:44:59.2559699Z           with mongodbatlas_stream_processor.processor,
2025-04-25T00:44:59.2560424Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-25T00:44:59.2561076Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-25T00:44:59.2561414Z         
2025-04-25T00:44:59.2562307Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ad7124656875332b381fe/streams/test-acc-tf-3350208021831097634-STARTED-STOPPED-CREATED/processor
2025-04-25T00:44:59.2563231Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-25T00:44:59.2563891Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-04-25T00:44:59.2564573Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-25T00:44:59.2565229Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-25T00:44:59.2566056Z         [processor-stopped-to-created failed to acquire resources for stream
2025-04-25T00:44:59.2566720Z         processor validation: global resource manager returned no resources],
2025-04-25T00:44:59.2567153Z         BadRequestDetail: 
2025-04-25T00:44:59.2580364Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/97b16c68-53af-415f-bd2a-579359186db8/terraform
2025-04-25T00:44:59.2581366Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-25T00:44:59.2581804Z         
2025-04-25T00:44:59.2582093Z         Error: error deleting resource
2025-04-25T00:44:59.2582368Z         
2025-04-25T00:44:59.2583374Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ad7124656875332b381fe/streams/test-acc-tf-3350208021831097634-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-04-25T00:44:59.2584368Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-25T00:44:59.2584912Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-25T00:44:59.2585544Z         name test-acc-tf-3350208021831097634-STARTED-STOPPED-CREATED has active
2025-04-25T00:44:59.2586341Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-04-25T00:44:59.2586994Z         [test-acc-tf-3350208021831097634-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-04-25T00:44:59.2603212Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/97b16c68-53af-415f-bd2a-579359186db8/terraform test_working_directory=/tmp/plugintest4023399890
2025-04-25T00:44:59.2681367Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (2.73s)
```
### 2025-04-26
#### FAIL 8 seconds
```
2025-04-26T00:45:05.5698490Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-26T00:45:05.5699292Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-04-26T00:45:05.5704214Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-26T00:45:05.5723578Z   
2025-04-26T00:45:05.5821224Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-26T00:45:05.5821816Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-04-26T00:45:05.5822187Z         
2025-04-26T00:45:05.5822458Z         Error: error creating resource
2025-04-26T00:45:05.5822725Z         
2025-04-26T00:45:05.5823075Z           with mongodbatlas_stream_processor.processor,
2025-04-26T00:45:05.5823750Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-26T00:45:05.5824392Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-26T00:45:05.5824715Z         
2025-04-26T00:45:05.5825601Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680c286e6f7a760e767795ac/streams/test-acc-tf-5482011547881386524-STARTED-STOPPED-CREATED/processor
2025-04-26T00:45:05.5826519Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-26T00:45:05.5827372Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-04-26T00:45:05.5828037Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-26T00:45:05.5828677Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-26T00:45:05.5829311Z         [processor-stopped-to-created failed to acquire resources for stream
2025-04-26T00:45:05.5829926Z         processor validation: global resource manager returned no resources],
2025-04-26T00:45:05.5830346Z         BadRequestDetail: 
2025-04-26T00:45:05.5843911Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-26T00:45:05.5844601Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-26T00:45:05.5845032Z         
2025-04-26T00:45:05.5845302Z         Error: error deleting resource
2025-04-26T00:45:05.5845566Z         
2025-04-26T00:45:05.5846573Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680c286e6f7a760e767795ac/streams/test-acc-tf-5482011547881386524-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-04-26T00:45:05.5847635Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-26T00:45:05.5848171Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-26T00:45:05.5848783Z         name test-acc-tf-5482011547881386524-STARTED-STOPPED-CREATED has active
2025-04-26T00:45:05.5849366Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-04-26T00:45:05.5849994Z         [test-acc-tf-5482011547881386524-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-04-26T00:45:05.5852574Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (8.07s)
```
### 2025-04-27
#### FAIL 4 seconds
```
2025-04-27T00:47:25.4661450Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-27T00:47:25.4662136Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-04-27T00:47:25.4666328Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-27T00:47:25.4683124Z   
2025-04-27T00:47:25.4728612Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-27T00:47:25.4729329Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-04-27T00:47:25.4729700Z         
2025-04-27T00:47:25.4729976Z         Error: error creating resource
2025-04-27T00:47:25.4730252Z         
2025-04-27T00:47:25.4730616Z           with mongodbatlas_stream_processor.processor,
2025-04-27T00:47:25.4731312Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-27T00:47:25.4731956Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-27T00:47:25.4732284Z         
2025-04-27T00:47:25.4733181Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-5861445080829721334-STARTED-STOPPED-CREATED/processor
2025-04-27T00:47:25.4734105Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-27T00:47:25.4734761Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-04-27T00:47:25.4735431Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-27T00:47:25.4736078Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-27T00:47:25.4736713Z         [processor-stopped-to-created failed to acquire resources for stream
2025-04-27T00:47:25.4737452Z         processor validation: global resource manager returned no resources],
2025-04-27T00:47:25.4737881Z         BadRequestDetail: 
2025-04-27T00:47:25.4754604Z   
2025-04-27T00:47:25.4778279Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-27T00:47:25.4778976Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-27T00:47:25.4779411Z         
2025-04-27T00:47:25.4779689Z         Error: error deleting resource
2025-04-27T00:47:25.4779965Z         
2025-04-27T00:47:25.4780980Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-5861445080829721334-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-04-27T00:47:25.4781842Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-27T00:47:25.4782381Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-27T00:47:25.4782998Z         name test-acc-tf-5861445080829721334-STARTED-STOPPED-CREATED has active
2025-04-27T00:47:25.4783581Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-04-27T00:47:25.4784220Z         [test-acc-tf-5861445080829721334-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-04-27T00:47:25.4804465Z   
2025-04-27T00:47:25.4812988Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (4.57s)
```
### 2025-04-28
#### FAIL 2 seconds
```
2025-04-28T00:45:17.1661646Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-28T00:45:17.1662910Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-04-28T00:45:17.1670586Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-28T00:45:17.1700714Z   
2025-04-28T00:45:17.1701402Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-04-28T00:45:17.1702036Z         
2025-04-28T00:45:17.1702524Z         Error: error creating resource
2025-04-28T00:45:17.1702982Z         
2025-04-28T00:45:17.1703750Z           with mongodbatlas_stream_processor.processor,
2025-04-28T00:45:17.1705019Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-28T00:45:17.1706206Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-28T00:45:17.1706796Z         
2025-04-28T00:45:17.1708445Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ecbcb1ad7050ec5b1f1a8/streams/test-acc-tf-5704481669552244857-STARTED-STOPPED-CREATED/processor
2025-04-28T00:45:17.1710141Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-28T00:45:17.1711334Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-04-28T00:45:17.1712715Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-28T00:45:17.1714327Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-28T00:45:17.1715477Z         [processor-stopped-to-created failed to acquire resources for stream
2025-04-28T00:45:17.1716614Z         processor validation: global resource manager returned no resources],
2025-04-28T00:45:17.1717356Z         BadRequestDetail: 
2025-04-28T00:45:17.1741452Z    test_step_number=1
2025-04-28T00:45:17.1742354Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-28T00:45:17.1743350Z         
2025-04-28T00:45:17.1743853Z         Error: error deleting resource
2025-04-28T00:45:17.1744322Z         
2025-04-28T00:45:17.1746176Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ecbcb1ad7050ec5b1f1a8/streams/test-acc-tf-5704481669552244857-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-04-28T00:45:17.1747746Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-28T00:45:17.1748743Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-28T00:45:17.1749872Z         name test-acc-tf-5704481669552244857-STARTED-STOPPED-CREATED has active
2025-04-28T00:45:17.1750941Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-04-28T00:45:17.1752067Z         [test-acc-tf-5704481669552244857-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-04-28T00:45:17.1782088Z   
2025-04-28T00:45:17.1908346Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (2.82s)
```
### 2025-04-29
#### PASS 9 seconds
### 2025-04-30
#### PASS 12 seconds
#### FAIL 4 seconds
```
2025-04-30T09:23:01.8458203Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-30T09:23:01.8458887Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-04-30T09:23:01.8462903Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-30T09:23:01.8479096Z    test_terraform_path=/home/runner/work/_temp/e9d9e2d7-1093-496a-b712-8e78e21daf85/terraform
2025-04-30T09:23:01.8524651Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-30T09:23:01.8525378Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-04-30T09:23:01.8525854Z         
2025-04-30T09:23:01.8526131Z         Error: error creating resource
2025-04-30T09:23:01.8526395Z         
2025-04-30T09:23:01.8526875Z           with mongodbatlas_stream_processor.processor,
2025-04-30T09:23:01.8527676Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-30T09:23:01.8528581Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-30T09:23:01.8528905Z         
2025-04-30T09:23:01.8530037Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-5543956760656020447-STARTED-STOPPED-CREATED/processor
2025-04-30T09:23:01.8531165Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-30T09:23:01.8531943Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-04-30T09:23:01.8532746Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-30T09:23:01.8533678Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-30T09:23:01.8534424Z         [processor-stopped-to-created failed to acquire resources for stream
2025-04-30T09:23:01.8535175Z         processor validation: global resource manager returned no resources],
2025-04-30T09:23:01.8535615Z         BadRequestDetail: 
2025-04-30T09:23:01.8551563Z   
2025-04-30T09:23:01.8552059Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-30T09:23:01.8552591Z         
2025-04-30T09:23:01.8553252Z         Error: error deleting resource
2025-04-30T09:23:01.8553634Z         
2025-04-30T09:23:01.8555174Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-5543956760656020447-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-04-30T09:23:01.8556448Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-30T09:23:01.8557267Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-30T09:23:01.8558133Z         name test-acc-tf-5543956760656020447-STARTED-STOPPED-CREATED has active
2025-04-30T09:23:01.8559217Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-04-30T09:23:01.8560126Z         [test-acc-tf-5543956760656020447-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-04-30T09:23:01.8589309Z    test_working_directory=/tmp/plugintest56468164 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_terraform_path=/home/runner/work/_temp/e9d9e2d7-1093-496a-b712-8e78e21daf85/terraform
2025-04-30T09:23:01.8620926Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (4.13s)
```
### 2025-05-01
#### FAIL 3 seconds
```
2025-05-01T00:44:07.7395082Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T00:44:07.7395775Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-05-01T00:44:07.7400223Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T00:44:07.7417476Z   
2025-05-01T00:44:07.7468840Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T00:44:07.7469437Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-05-01T00:44:07.7469801Z         
2025-05-01T00:44:07.7470085Z         Error: error creating resource
2025-05-01T00:44:07.7470355Z         
2025-05-01T00:44:07.7470723Z           with mongodbatlas_stream_processor.processor,
2025-05-01T00:44:07.7471514Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T00:44:07.7472162Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T00:44:07.7472498Z         
2025-05-01T00:44:07.7473534Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812c0395870256394092b41/streams/test-acc-tf-4002305286752210972-STARTED-STOPPED-CREATED/processor
2025-05-01T00:44:07.7474458Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T00:44:07.7475113Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-05-01T00:44:07.7475780Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T00:44:07.7476429Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T00:44:07.7477060Z         [processor-stopped-to-created failed to acquire resources for stream
2025-05-01T00:44:07.7477689Z         processor validation: global resource manager returned no resources],
2025-05-01T00:44:07.7478118Z         BadRequestDetail: 
2025-05-01T00:44:07.7494451Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/f3cc3b73-88e8-4794-867e-e835cb9a7cd1/terraform test_working_directory=/tmp/plugintest338294606
2025-05-01T00:44:07.7495620Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T00:44:07.7496056Z         
2025-05-01T00:44:07.7496338Z         Error: error deleting resource
2025-05-01T00:44:07.7496615Z         
2025-05-01T00:44:07.7497613Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812c0395870256394092b41/streams/test-acc-tf-4002305286752210972-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-05-01T00:44:07.7498473Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T00:44:07.7499016Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T00:44:07.7499638Z         name test-acc-tf-4002305286752210972-STARTED-STOPPED-CREATED has active
2025-05-01T00:44:07.7500235Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-01T00:44:07.7500868Z         [test-acc-tf-4002305286752210972-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-05-01T00:44:07.7502759Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (3.83s)
```
#### FAIL 3 seconds
```
2025-05-01T02:17:05.8583501Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T02:17:05.8584216Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-05-01T02:17:05.8588562Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T02:17:05.8605915Z   
2025-05-01T02:17:05.8653481Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T02:17:05.8654115Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-05-01T02:17:05.8654509Z         
2025-05-01T02:17:05.8654816Z         Error: error creating resource
2025-05-01T02:17:05.8655108Z         
2025-05-01T02:17:05.8655491Z           with mongodbatlas_stream_processor.processor,
2025-05-01T02:17:05.8656210Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T02:17:05.8656868Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T02:17:05.8657226Z         
2025-05-01T02:17:05.8658128Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812d5a0c53aa6122b25a1de/streams/test-acc-tf-7748354356000802032-STARTED-STOPPED-CREATED/processor
2025-05-01T02:17:05.8659218Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T02:17:05.8659897Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-05-01T02:17:05.8660586Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T02:17:05.8661381Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T02:17:05.8662039Z         [processor-stopped-to-created failed to acquire resources for stream
2025-05-01T02:17:05.8662678Z         processor validation: global resource manager returned no resources],
2025-05-01T02:17:05.8663133Z         BadRequestDetail: 
2025-05-01T02:17:05.8676469Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/eaead056-25d5-4d1e-98a4-b63773199695/terraform test_working_directory=/tmp/plugintest3559876715 test_step_number=1
2025-05-01T02:17:05.8677718Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T02:17:05.8678172Z         
2025-05-01T02:17:05.8678472Z         Error: error deleting resource
2025-05-01T02:17:05.8678970Z         
2025-05-01T02:17:05.8680014Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812d5a0c53aa6122b25a1de/streams/test-acc-tf-7748354356000802032-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-05-01T02:17:05.8680913Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T02:17:05.8681470Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T02:17:05.8682119Z         name test-acc-tf-7748354356000802032-STARTED-STOPPED-CREATED has active
2025-05-01T02:17:05.8682737Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-01T02:17:05.8683393Z         [test-acc-tf-7748354356000802032-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-05-01T02:17:05.8700885Z   
2025-05-01T02:17:05.8733171Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (3.74s)
```
#### FAIL 4 seconds
```
2025-05-01T03:43:57.6075641Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T03:43:57.6076337Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-05-01T03:43:57.6081425Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T03:43:57.6098436Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/3bfd1ecb-1d1a-4212-85e2-19c3a405fcc1/terraform test_working_directory=/tmp/plugintest3412926867 test_step_number=1
2025-05-01T03:43:57.6099613Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-05-01T03:43:57.6100088Z         
2025-05-01T03:43:57.6100372Z         Error: error creating resource
2025-05-01T03:43:57.6100737Z         
2025-05-01T03:43:57.6101098Z           with mongodbatlas_stream_processor.processor,
2025-05-01T03:43:57.6101887Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T03:43:57.6102622Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T03:43:57.6103052Z         
2025-05-01T03:43:57.6104047Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812ea1ded10397068f81235/streams/test-acc-tf-7444680878111030847-STARTED-STOPPED-CREATED/processor
2025-05-01T03:43:57.6105073Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T03:43:57.6105923Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-05-01T03:43:57.6106822Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T03:43:57.6107626Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T03:43:57.6108367Z         [processor-stopped-to-created failed to acquire resources for stream
2025-05-01T03:43:57.6109093Z         processor validation: global resource manager returned no resources],
2025-05-01T03:43:57.6109624Z         BadRequestDetail: 
2025-05-01T03:43:57.6128024Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/3bfd1ecb-1d1a-4212-85e2-19c3a405fcc1/terraform
2025-05-01T03:43:57.6155485Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T03:43:57.6156197Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T03:43:57.6156638Z         
2025-05-01T03:43:57.6156916Z         Error: error deleting resource
2025-05-01T03:43:57.6157190Z         
2025-05-01T03:43:57.6158205Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812ea1ded10397068f81235/streams/test-acc-tf-7444680878111030847-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-05-01T03:43:57.6159069Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T03:43:57.6159711Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T03:43:57.6160363Z         name test-acc-tf-7444680878111030847-STARTED-STOPPED-CREATED has active
2025-05-01T03:43:57.6160951Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-01T03:43:57.6161709Z         [test-acc-tf-7444680878111030847-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-05-01T03:43:57.6175524Z   
2025-05-01T03:43:57.6185695Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (4.24s)
```
#### FAIL a second
```
2025-05-01T05:07:13.2479741Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T05:07:13.2480438Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-05-01T05:07:13.2484801Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T05:07:13.2501494Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T05:07:13.2502113Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-05-01T05:07:13.2502490Z         
2025-05-01T05:07:13.2502771Z         Error: error creating resource
2025-05-01T05:07:13.2503051Z         
2025-05-01T05:07:13.2503531Z           with mongodbatlas_stream_processor.processor,
2025-05-01T05:07:13.2504223Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T05:07:13.2504870Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T05:07:13.2505207Z         
2025-05-01T05:07:13.2506093Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812fdf713d6b32170fea898/streams/test-acc-tf-8775387711226216693-STARTED-STOPPED-CREATED/processor
2025-05-01T05:07:13.2507012Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T05:07:13.2507669Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-05-01T05:07:13.2508345Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T05:07:13.2508988Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T05:07:13.2509632Z         [processor-stopped-to-created failed to acquire resources for stream
2025-05-01T05:07:13.2510257Z         processor validation: global resource manager returned no resources],
2025-05-01T05:07:13.2510692Z         BadRequestDetail: 
2025-05-01T05:07:13.2524640Z   
2025-05-01T05:07:13.2525112Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T05:07:13.2525550Z         
2025-05-01T05:07:13.2525829Z         Error: error deleting resource
2025-05-01T05:07:13.2526108Z         
2025-05-01T05:07:13.2527109Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812fdf713d6b32170fea898/streams/test-acc-tf-8775387711226216693-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-05-01T05:07:13.2528066Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T05:07:13.2528748Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T05:07:13.2529375Z         name test-acc-tf-8775387711226216693-STARTED-STOPPED-CREATED has active
2025-05-01T05:07:13.2529962Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-01T05:07:13.2530595Z         [test-acc-tf-8775387711226216693-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-05-01T05:07:13.2547600Z   
2025-05-01T05:07:13.2622944Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (1.84s)
```
#### PASS 13 seconds
#### FAIL 3 seconds
```
2025-05-01T08:00:42.5373655Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T08:00:42.5374352Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-05-01T08:00:42.5378482Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T08:00:42.5395497Z   
2025-05-01T08:00:42.5442864Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T08:00:42.5443472Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-05-01T08:00:42.5443844Z         
2025-05-01T08:00:42.5444138Z         Error: error creating resource
2025-05-01T08:00:42.5444415Z         
2025-05-01T08:00:42.5444785Z           with mongodbatlas_stream_processor.processor,
2025-05-01T08:00:42.5445491Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T08:00:42.5446148Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T08:00:42.5446492Z         
2025-05-01T08:00:42.5447550Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68132633f7db2d257067890c/streams/test-acc-tf-1343659306455814900-STARTED-STOPPED-CREATED/processor
2025-05-01T08:00:42.5448484Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T08:00:42.5449156Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-05-01T08:00:42.5449829Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T08:00:42.5450482Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T08:00:42.5451124Z         [processor-stopped-to-created failed to acquire resources for stream
2025-05-01T08:00:42.5451933Z         processor validation: global resource manager returned no resources],
2025-05-01T08:00:42.5452366Z         BadRequestDetail: 
2025-05-01T08:00:42.5466249Z   
2025-05-01T08:00:42.5466737Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T08:00:42.5467175Z         
2025-05-01T08:00:42.5467463Z         Error: error deleting resource
2025-05-01T08:00:42.5467753Z         
2025-05-01T08:00:42.5468771Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68132633f7db2d257067890c/streams/test-acc-tf-1343659306455814900-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-05-01T08:00:42.5469639Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T08:00:42.5470184Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T08:00:42.5470818Z         name test-acc-tf-1343659306455814900-STARTED-STOPPED-CREATED has active
2025-05-01T08:00:42.5471415Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-01T08:00:42.5472219Z         [test-acc-tf-1343659306455814900-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-05-01T08:00:42.5488555Z    test_step_number=1 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/9c737af5-02ca-48a0-8b01-3b29572d16bb/terraform
2025-05-01T08:00:42.5520234Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (3.77s)
```
#### FAIL 2 seconds
```
2025-05-01T09:23:38.6521624Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T09:23:38.6522299Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-05-01T09:23:38.6526301Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-01T09:23:38.6543011Z   
2025-05-01T09:23:38.6543383Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-05-01T09:23:38.6543739Z         
2025-05-01T09:23:38.6544023Z         Error: error creating resource
2025-05-01T09:23:38.6544282Z         
2025-05-01T09:23:38.6544644Z           with mongodbatlas_stream_processor.processor,
2025-05-01T09:23:38.6545330Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T09:23:38.6545963Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T09:23:38.6546287Z         
2025-05-01T09:23:38.6547161Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68133a0d13d6b32170ffaf6b/streams/test-acc-tf-5270748182965458386-STARTED-STOPPED-CREATED/processor
2025-05-01T09:23:38.6548070Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T09:23:38.6548713Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-05-01T09:23:38.6549368Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T09:23:38.6550124Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T09:23:38.6550874Z         [processor-stopped-to-created failed to acquire resources for stream
2025-05-01T09:23:38.6551503Z         processor validation: global resource manager returned no resources],
2025-05-01T09:23:38.6551914Z         BadRequestDetail: 
2025-05-01T09:23:38.6565268Z   
2025-05-01T09:23:38.6565731Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T09:23:38.6566160Z         
2025-05-01T09:23:38.6566433Z         Error: error deleting resource
2025-05-01T09:23:38.6566700Z         
2025-05-01T09:23:38.6567693Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68133a0d13d6b32170ffaf6b/streams/test-acc-tf-5270748182965458386-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-05-01T09:23:38.6568546Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T09:23:38.6569083Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T09:23:38.6569705Z         name test-acc-tf-5270748182965458386-STARTED-STOPPED-CREATED has active
2025-05-01T09:23:38.6570378Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-01T09:23:38.6571008Z         [test-acc-tf-5270748182965458386-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-05-01T09:23:38.6587476Z   
2025-05-01T09:23:38.6619065Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (2.91s)
```
### 2025-05-02
#### FAIL 4 seconds
```
2025-05-02T00:45:00.6571915Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-02T00:45:00.6572721Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-05-02T00:45:00.6576920Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-02T00:45:00.6593209Z    test_terraform_path=/home/runner/work/_temp/befba30b-3dc6-43af-9dea-2a5e9457ecc7/terraform test_step_number=1 test_working_directory=/tmp/plugintest3307661076
2025-05-02T00:45:00.6685176Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-02T00:45:00.6685778Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-05-02T00:45:00.6686148Z         
2025-05-02T00:45:00.6686436Z         Error: error creating resource
2025-05-02T00:45:00.6686722Z         
2025-05-02T00:45:00.6687095Z           with mongodbatlas_stream_processor.processor,
2025-05-02T00:45:00.6687800Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-02T00:45:00.6688446Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-02T00:45:00.6688780Z         
2025-05-02T00:45:00.6689680Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68141187555db3353e4cc5a7/streams/test-acc-tf-8071693286611049694-STARTED-STOPPED-CREATED/processor
2025-05-02T00:45:00.6690599Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-02T00:45:00.6691272Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-05-02T00:45:00.6691945Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-02T00:45:00.6692707Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-02T00:45:00.6693345Z         [processor-stopped-to-created failed to acquire resources for stream
2025-05-02T00:45:00.6693979Z         processor validation: global resource manager returned no resources],
2025-05-02T00:45:00.6694418Z         BadRequestDetail: 
2025-05-02T00:45:00.6708193Z   
2025-05-02T00:45:00.6708663Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-02T00:45:00.6709109Z         
2025-05-02T00:45:00.6709397Z         Error: error deleting resource
2025-05-02T00:45:00.6709679Z         
2025-05-02T00:45:00.6710694Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68141187555db3353e4cc5a7/streams/test-acc-tf-8071693286611049694-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-05-02T00:45:00.6711561Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-02T00:45:00.6712111Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-02T00:45:00.6712975Z         name test-acc-tf-8071693286611049694-STARTED-STOPPED-CREATED has active
2025-05-02T00:45:00.6713579Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-02T00:45:00.6714214Z         [test-acc-tf-8071693286611049694-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-05-02T00:45:00.6716813Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (4.49s)
```
### 2025-05-03
#### FAIL 4 seconds
```
2025-05-03T00:44:49.1526712Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-03T00:44:49.1527423Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-05-03T00:44:49.1531749Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-03T00:44:49.1548257Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/3fe48273-6e42-4737-b419-67f5cd49f308/terraform test_working_directory=/tmp/plugintest3312516753 test_step_number=1
2025-05-03T00:44:49.1641176Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-03T00:44:49.1641778Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-05-03T00:44:49.1642134Z         
2025-05-03T00:44:49.1642412Z         Error: error creating resource
2025-05-03T00:44:49.1642677Z         
2025-05-03T00:44:49.1643034Z           with mongodbatlas_stream_processor.processor,
2025-05-03T00:44:49.1643736Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-03T00:44:49.1644374Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-03T00:44:49.1644703Z         
2025-05-03T00:44:49.1645585Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681562e9f5ab983d4a763d13/streams/test-acc-tf-120019320723231661-STARTED-STOPPED-CREATED/processor
2025-05-03T00:44:49.1646509Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-03T00:44:49.1647164Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-05-03T00:44:49.1647945Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-03T00:44:49.1648593Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-03T00:44:49.1649223Z         [processor-stopped-to-created failed to acquire resources for stream
2025-05-03T00:44:49.1649857Z         processor validation: global resource manager returned no resources],
2025-05-03T00:44:49.1650282Z         BadRequestDetail: 
2025-05-03T00:44:49.1664129Z   
2025-05-03T00:44:49.1664735Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-03T00:44:49.1665157Z         
2025-05-03T00:44:49.1665429Z         Error: error deleting resource
2025-05-03T00:44:49.1665697Z         
2025-05-03T00:44:49.1666694Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681562e9f5ab983d4a763d13/streams/test-acc-tf-120019320723231661-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-05-03T00:44:49.1667665Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-03T00:44:49.1668202Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-03T00:44:49.1668822Z         name test-acc-tf-120019320723231661-STARTED-STOPPED-CREATED has active
2025-05-03T00:44:49.1669416Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-03T00:44:49.1670042Z         [test-acc-tf-120019320723231661-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-05-03T00:44:49.1672633Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (4.47s)
```
### 2025-05-04
#### FAIL 5 seconds
```
2025-05-04T00:47:22.2330455Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-04T00:47:22.2331138Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-05-04T00:47:22.2335372Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-04T00:47:22.2352472Z   
2025-05-04T00:47:22.2352954Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-05-04T00:47:22.2353359Z         
2025-05-04T00:47:22.2353706Z         Error: error creating resource
2025-05-04T00:47:22.2353977Z         
2025-05-04T00:47:22.2354463Z           with mongodbatlas_stream_processor.processor,
2025-05-04T00:47:22.2355264Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-04T00:47:22.2356020Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-04T00:47:22.2356467Z         
2025-05-04T00:47:22.2357463Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-7213116832214335818-STARTED-STOPPED-CREATED/processor
2025-05-04T00:47:22.2358531Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-04T00:47:22.2359296Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-05-04T00:47:22.2360248Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-04T00:47:22.2361003Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-04T00:47:22.2361870Z         [processor-stopped-to-created failed to acquire resources for stream
2025-05-04T00:47:22.2362626Z         processor validation: global resource manager returned no resources],
2025-05-04T00:47:22.2363185Z         BadRequestDetail: 
2025-05-04T00:47:22.2382110Z   
2025-05-04T00:47:22.2434085Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-04T00:47:22.2434758Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-04T00:47:22.2435188Z         
2025-05-04T00:47:22.2435457Z         Error: error deleting resource
2025-05-04T00:47:22.2435718Z         
2025-05-04T00:47:22.2436703Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-7213116832214335818-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-05-04T00:47:22.2437662Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-04T00:47:22.2438186Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-04T00:47:22.2438795Z         name test-acc-tf-7213116832214335818-STARTED-STOPPED-CREATED has active
2025-05-04T00:47:22.2439378Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-04T00:47:22.2439999Z         [test-acc-tf-7213116832214335818-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-05-04T00:47:22.2452766Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-04T00:47:22.2479937Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (5.32s)
```
### 2025-05-05
#### FAIL 4 seconds
```
2025-05-05T00:44:15.7592872Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-05T00:44:15.7593568Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-05-05T00:44:15.7597614Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-05T00:44:15.7614656Z   
2025-05-05T00:44:15.7706326Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-05T00:44:15.7706924Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-05-05T00:44:15.7707298Z         
2025-05-05T00:44:15.7707581Z         Error: error creating resource
2025-05-05T00:44:15.7707855Z         
2025-05-05T00:44:15.7708222Z           with mongodbatlas_stream_processor.processor,
2025-05-05T00:44:15.7709032Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-05T00:44:15.7709667Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-05T00:44:15.7710001Z         
2025-05-05T00:44:15.7710894Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6818067f815eb7429e02a9d7/streams/test-acc-tf-9054235533887923136-STARTED-STOPPED-CREATED/processor
2025-05-05T00:44:15.7712019Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-05T00:44:15.7712674Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-05-05T00:44:15.7713339Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-05T00:44:15.7713987Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-05T00:44:15.7714884Z         [processor-stopped-to-created failed to acquire resources for stream
2025-05-05T00:44:15.7715520Z         processor validation: global resource manager returned no resources],
2025-05-05T00:44:15.7715943Z         BadRequestDetail: 
2025-05-05T00:44:15.7729685Z   
2025-05-05T00:44:15.7730154Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-05T00:44:15.7730584Z         
2025-05-05T00:44:15.7730858Z         Error: error deleting resource
2025-05-05T00:44:15.7731359Z         
2025-05-05T00:44:15.7732378Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6818067f815eb7429e02a9d7/streams/test-acc-tf-9054235533887923136-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-05-05T00:44:15.7733254Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-05T00:44:15.7733786Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-05T00:44:15.7734572Z         name test-acc-tf-9054235533887923136-STARTED-STOPPED-CREATED has active
2025-05-05T00:44:15.7735161Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-05T00:44:15.7735785Z         [test-acc-tf-9054235533887923136-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-05-05T00:44:15.7738375Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (4.67s)
```
#### FAIL 4 seconds
```
2025-05-05T10:43:53.8865081Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-05T10:43:53.8865894Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-05-05T10:43:53.8871128Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-05T10:43:53.8891042Z   
2025-05-05T10:43:53.8984854Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-05T10:43:53.8985441Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-05-05T10:43:53.8985790Z         
2025-05-05T10:43:53.8986172Z         Error: error creating resource
2025-05-05T10:43:53.8986433Z         
2025-05-05T10:43:53.8986785Z           with mongodbatlas_stream_processor.processor,
2025-05-05T10:43:53.8987476Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-05T10:43:53.8988114Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-05T10:43:53.8988437Z         
2025-05-05T10:43:53.8989310Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-2181298330616065294-STARTED-STOPPED-CREATED/processor
2025-05-05T10:43:53.8990213Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-05T10:43:53.8990865Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-05-05T10:43:53.8991518Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-05T10:43:53.8992160Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-05T10:43:53.8992783Z         [processor-stopped-to-created failed to acquire resources for stream
2025-05-05T10:43:53.8993402Z         processor validation: global resource manager returned no resources],
2025-05-05T10:43:53.8993821Z         BadRequestDetail: 
2025-05-05T10:43:53.9007503Z   
2025-05-05T10:43:53.9007965Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-05T10:43:53.9008386Z         
2025-05-05T10:43:53.9008654Z         Error: error deleting resource
2025-05-05T10:43:53.9008918Z         
2025-05-05T10:43:53.9009905Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-2181298330616065294-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-05-05T10:43:53.9010757Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-05T10:43:53.9011286Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-05T10:43:53.9011896Z         name test-acc-tf-2181298330616065294-STARTED-STOPPED-CREATED has active
2025-05-05T10:43:53.9012481Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-05T10:43:53.9013101Z         [test-acc-tf-2181298330616065294-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-05-05T10:43:53.9015635Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (4.75s)
```
### 2025-05-06
#### PASS 9 seconds
### 2025-05-07
#### PASS 12 seconds
#### PASS 10 seconds
#### FAIL 3 seconds
```
2025-05-07T19:17:21.2118062Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-07T19:17:21.2118841Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-05-07T19:17:21.2123783Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-07T19:17:21.2146173Z   
2025-05-07T19:17:21.2146649Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-05-07T19:17:21.2147032Z         
2025-05-07T19:17:21.2147389Z         Error: error creating resource
2025-05-07T19:17:21.2147655Z         
2025-05-07T19:17:21.2148221Z           with mongodbatlas_stream_processor.processor,
2025-05-07T19:17:21.2148943Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-07T19:17:21.2149675Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-07T19:17:21.2150017Z         
2025-05-07T19:17:21.2150901Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681badd2574ca84ab1e767b1/streams/test-acc-tf-7564780491662850922-STARTED-STOPPED-CREATED/processor
2025-05-07T19:17:21.2151902Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-07T19:17:21.2152698Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-05-07T19:17:21.2153357Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-07T19:17:21.2153996Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-07T19:17:21.2154626Z         [processor-stopped-to-created failed to acquire resources for stream
2025-05-07T19:17:21.2155246Z         processor validation: global resource manager returned no resources],
2025-05-07T19:17:21.2155763Z         BadRequestDetail: 
2025-05-07T19:17:21.2169108Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-07T19:17:21.2169805Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-07T19:17:21.2170230Z         
2025-05-07T19:17:21.2170499Z         Error: error deleting resource
2025-05-07T19:17:21.2170769Z         
2025-05-07T19:17:21.2171770Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681badd2574ca84ab1e767b1/streams/test-acc-tf-7564780491662850922-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-05-07T19:17:21.2172823Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-07T19:17:21.2173519Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-07T19:17:21.2174142Z         name test-acc-tf-7564780491662850922-STARTED-STOPPED-CREATED has active
2025-05-07T19:17:21.2174729Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-07T19:17:21.2175356Z         [test-acc-tf-7564780491662850922-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-05-07T19:17:21.2192046Z   
2025-05-07T19:17:21.2221939Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (3.96s)
```
#### PASS 14 seconds
### 2025-05-08
#### PASS 12 seconds
### 2025-05-09
#### PASS 10 seconds
### 2025-05-10
#### PASS 9 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:00.1122752Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-11T00:30:00.1123471Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-05-11T00:30:00.1124166Z     resource_test.go:251: Creating execution project: test-acc-tf-p-5853607997903300678
2025-05-11T00:30:00.1124613Z     resource_test.go:251: 
2025-05-11T00:30:00.1125497Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.1127239Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:00.1129080Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:352
2025-05-11T00:30:00.1130969Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:251
2025-05-11T00:30:00.1131739Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.1133024Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1134056Z         	Test:       	TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-11T00:30:00.1135537Z         	Messages:   	Project creation failed: test-acc-tf-p-5853607997903300678, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1155388Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (0.02s)
```
### 2025-05-12
#### PASS 12 seconds
### 2025-05-13
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-05-14
#### PASS 9 seconds
### 2025-05-15
#### PASS 9 seconds
### 2025-05-16
#### PASS 9 seconds
### 2025-05-17
#### PASS 9 seconds
### 2025-05-18
#### PASS 12 seconds
### 2025-05-19
#### PASS 12 seconds
### 2025-05-20
#### PASS 9 seconds
#### PASS 12 seconds
### 2025-05-21
#### PASS 12 seconds
### 2025-05-22
#### PASS 12 seconds
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-05-23
#### FAIL 4 seconds
```
2025-05-23T00:49:48.7967029Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-23T00:49:48.7967734Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-05-23T00:49:48.7971854Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-23T00:49:48.7988418Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/ff69557a-791e-4b49-8991-15a455b1be89/terraform
2025-05-23T00:49:48.8075625Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-23T00:49:48.8076289Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-05-23T00:49:48.8076798Z         
2025-05-23T00:49:48.8077078Z         Error: error creating resource
2025-05-23T00:49:48.8077364Z         
2025-05-23T00:49:48.8077724Z           with mongodbatlas_stream_processor.processor,
2025-05-23T00:49:48.8078428Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-23T00:49:48.8079102Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-23T00:49:48.8079450Z         
2025-05-23T00:49:48.8080370Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-8431879715554690442-STARTED-STOPPED-CREATED/processor
2025-05-23T00:49:48.8081326Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-23T00:49:48.8082061Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-05-23T00:49:48.8082753Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-23T00:49:48.8083669Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-23T00:49:48.8084335Z         [processor-stopped-to-created failed to acquire resources for stream
2025-05-23T00:49:48.8084988Z         processor validation: global resource manager returned no resources],
2025-05-23T00:49:48.8085432Z         BadRequestDetail: 
2025-05-23T00:49:48.8098894Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/ff69557a-791e-4b49-8991-15a455b1be89/terraform test_working_directory=/tmp/plugintest2222245470 test_step_number=1
2025-05-23T00:49:48.8120243Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-05-23T00:49:48.8120927Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-23T00:49:48.8121358Z         
2025-05-23T00:49:48.8121638Z         Error: error deleting resource
2025-05-23T00:49:48.8121908Z         
2025-05-23T00:49:48.8122908Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-8431879715554690442-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-05-23T00:49:48.8123868Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-23T00:49:48.8124410Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-23T00:49:48.8125030Z         name test-acc-tf-8431879715554690442-STARTED-STOPPED-CREATED has active
2025-05-23T00:49:48.8125613Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-23T00:49:48.8126255Z         [test-acc-tf-8431879715554690442-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-05-23T00:49:48.8128829Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (4.55s)
```
### 2025-05-24
#### PASS 9 seconds
### 2025-05-25
#### PASS 9 seconds
### 2025-05-26
#### PASS 13 seconds
### 2025-05-27
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-05-28
#### PASS 12 seconds
#### PASS 9 seconds
### 2025-05-29
#### PASS 9 seconds
#### PASS 12 seconds
### 2025-05-30
#### PASS 9 seconds
#### PASS 10 seconds
### 2025-05-31
#### PASS 10 seconds
### 2025-06-01
#### PASS 12 seconds
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-06-02
#### PASS 12 seconds
#### PASS 12 seconds
#### PASS 9 seconds
### 2025-06-03
#### PASS 9 seconds
#### PASS 12 seconds
#### PASS 9 seconds
### 2025-06-04
#### PASS 12 seconds
### 2025-06-05
#### PASS 9 seconds
### 2025-06-06
#### PASS 9 seconds
### 2025-06-07
#### PASS 9 seconds
### 2025-06-08
#### PASS 9 seconds
### 2025-06-09
#### PASS 10 seconds
### 2025-06-10
#### PASS 12 seconds
### 2025-06-11
#### PASS 9 seconds
#### PASS 12 seconds
### 2025-06-12
#### PASS 10 seconds
### 2025-06-13
#### PASS 12 seconds
### 2025-06-14
#### PASS 10 seconds
### 2025-06-15
#### PASS 13 seconds
### 2025-06-16
#### FAIL 31 seconds
```
2025-06-16T00:46:42.7808251Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-06-16T00:46:42.7808922Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-06-16T00:46:42.7813104Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-06-16T00:46:42.7836065Z   
2025-06-16T00:46:42.7836433Z     resource_test.go:251: Step 1/3 error: Error running apply: exit status 1
2025-06-16T00:46:42.7836786Z         
2025-06-16T00:46:42.7837053Z         Error: error creating resource
2025-06-16T00:46:42.7837315Z         
2025-06-16T00:46:42.7837666Z           with mongodbatlas_stream_processor.processor,
2025-06-16T00:46:42.7838341Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-06-16T00:46:42.7838966Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-16T00:46:42.7839286Z         
2025-06-16T00:46:42.7840154Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/684f659725b50457df2bed73/streams/test-acc-tf-3220681932891026332-STARTED-STOPPED-CREATED/processor
2025-06-16T00:46:42.7841052Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-16T00:46:42.7841705Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-06-16T00:46:42.7842352Z         problem occur: failed to acquire resources for stream processor validation:
2025-06-16T00:46:42.7842966Z         internal error while provisioning resource from global resource manager.
2025-06-16T00:46:42.7843708Z         Reason: Bad Request. Params: [processor-stopped-to-created failed to acquire
2025-06-16T00:46:42.7844356Z         resources for stream processor validation: internal error while provisioning
2025-06-16T00:46:42.7844915Z         resource from global resource manager], BadRequestDetail: 
2025-06-16T00:46:42.7857843Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/61975e8c-5860-4136-bb19-93ea042d4bfd/terraform test_working_directory=/tmp/plugintest21517599 test_step_number=1
2025-06-16T00:46:42.7859042Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-16T00:46:42.7859469Z         
2025-06-16T00:46:42.7859736Z         Error: error deleting resource
2025-06-16T00:46:42.7859998Z         
2025-06-16T00:46:42.7860991Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/684f659725b50457df2bed73/streams/test-acc-tf-3220681932891026332-STARTED-STOPPED-CREATED/connections/sample_stream_solar
2025-06-16T00:46:42.7861848Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-16T00:46:42.7862364Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-16T00:46:42.7863039Z         name test-acc-tf-3220681932891026332-STARTED-STOPPED-CREATED has active
2025-06-16T00:46:42.7863790Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-06-16T00:46:42.7864404Z         [test-acc-tf-3220681932891026332-STARTED-STOPPED-CREATED], BadRequestDetail: 
2025-06-16T00:46:42.7866950Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (31.09s)
```
### 2025-06-17
#### PASS 9 seconds
### 2025-06-18
#### PASS 12 seconds
#### PASS 12 seconds
### 2025-06-19
#### PASS 9 seconds
### 2025-06-20
#### PASS 9 seconds
### 2025-06-21
#### PASS 9 seconds
### 2025-06-22
#### PASS 12 seconds
### 2025-06-23
#### PASS 12 seconds
### 2025-06-24
#### PASS 9 seconds
### 2025-06-25
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-06-26
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-06-27
#### PASS 10 seconds
### 2025-06-28
#### PASS 13 seconds
### 2025-06-29
#### PASS 10 seconds
### 2025-06-30
#### PASS 12 seconds
### 2025-07-01
#### PASS 13 seconds
#### PASS 10 seconds
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 13 seconds
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 11 seconds
### 2025-07-02
#### PASS 9 seconds
### 2025-07-03
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-03T00:46:39.964000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated',confidence=1.0,ts_when='6 days ago')
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
### 2025-07-09
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-09T01:00:42.625000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated',confidence=1.0,ts_when='18 minutes ago')
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