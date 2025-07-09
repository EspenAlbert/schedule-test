# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 123) FAIL(x 9)
Success rate: 93.18%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-16 00:45 | dev | 1.07s
2025-04-16 12:49 | qa | 3.03s
2025-04-16 14:37 | dev | 3.01s
2025-04-17 00:44 | dev | 1.06s
2025-04-24 00:43 | dev | 5.07s
2025-04-30 09:23 | qa | 3.02s
2025-05-11 00:30 | qa | 0.00s
2025-05-23 00:49 | dev | 4.02s
2025-07-06 00:48 | qa | 31.00s

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
#### PASS 15 seconds
### 2025-04-13
#### PASS 14 seconds
### 2025-04-14
#### PASS 17 seconds
### 2025-04-15
#### PASS 14 seconds
### 2025-04-16
#### FAIL a second
```
2025-04-16T00:45:12.3390679Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-16T00:45:12.3391325Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-04-16T00:45:12.3398972Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-16T00:45:12.3420405Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-16T00:45:12.3420979Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-16T00:45:12.3421338Z         
2025-04-16T00:45:12.3421617Z         Error: error creating resource
2025-04-16T00:45:12.3421876Z         
2025-04-16T00:45:12.3422243Z           with mongodbatlas_stream_processor.processor,
2025-04-16T00:45:12.3422929Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T00:45:12.3423572Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T00:45:12.3424103Z         
2025-04-16T00:45:12.3424951Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-4762836075541776075--STARTED-STOPPED/processor
2025-04-16T00:45:12.3425832Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T00:45:12.3426485Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2025-04-16T00:45:12.3427094Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T00:45:12.3427696Z         [processor-started-to-stopped RBAC: access denied], BadRequestDetail: 
2025-04-16T00:45:12.3436308Z   
2025-04-16T00:45:12.3563244Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-16T00:45:12.3564183Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3564622Z         
2025-04-16T00:45:12.3564907Z         Error: error deleting resource
2025-04-16T00:45:12.3565179Z         
2025-04-16T00:45:12.3566154Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-4762836075541776075--STARTED-STOPPED/connections/sample_stream_solar
2025-04-16T00:45:12.3567121Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3567716Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3568130Z         BadRequestDetail: 
2025-04-16T00:45:12.3573563Z    test_terraform_path=/home/runner/work/_temp/92645992-1140-423c-8ef0-74ddbe0cfc31/terraform test_working_directory=/tmp/plugintest1278613930 test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated test_step_number=1
2025-04-16T00:45:12.3619374Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (1.66s)
```
#### FAIL 3 seconds
```
2025-04-16T12:49:32.8451071Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-16T12:49:32.8451851Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-04-16T12:49:32.8460778Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-16T12:49:32.8517156Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-16T12:49:32.8517739Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-16T12:49:32.8518103Z         
2025-04-16T12:49:32.8518383Z         Error: error creating resource
2025-04-16T12:49:32.8518652Z         
2025-04-16T12:49:32.8519019Z           with mongodbatlas_stream_processor.processor,
2025-04-16T12:49:32.8519914Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T12:49:32.8520572Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T12:49:32.8520898Z         
2025-04-16T12:49:32.8521887Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-3747229597966984091--STARTED-STOPPED/processor
2025-04-16T12:49:32.8522805Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T12:49:32.8523466Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2025-04-16T12:49:32.8524232Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T12:49:32.8524850Z         [processor-started-to-stopped RBAC: access denied], BadRequestDetail: 
2025-04-16T12:49:32.8533266Z    test_terraform_path=/home/runner/work/_temp/c09527d7-de0c-4201-9826-27350f0a89ff/terraform
2025-04-16T12:49:32.8646080Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-16T12:49:32.8646738Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8647164Z         
2025-04-16T12:49:32.8647440Z         Error: error deleting resource
2025-04-16T12:49:32.8647702Z         
2025-04-16T12:49:32.8648671Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-3747229597966984091--STARTED-STOPPED/connections/sample_stream_solar
2025-04-16T12:49:32.8649887Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8650493Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8651039Z         BadRequestDetail: 
2025-04-16T12:49:32.8661330Z    test_terraform_path=/home/runner/work/_temp/c09527d7-de0c-4201-9826-27350f0a89ff/terraform test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated test_working_directory=/tmp/plugintest3853627706
2025-04-16T12:49:32.8687424Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (3.32s)
```
#### FAIL 3 seconds
```
2025-04-16T14:37:27.0430286Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-16T14:37:27.0431002Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-04-16T14:37:27.0440354Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-16T14:37:27.0665595Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-16T14:37:27.0666168Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-16T14:37:27.0666668Z         
2025-04-16T14:37:27.0666949Z         Error: error creating resource
2025-04-16T14:37:27.0667218Z         
2025-04-16T14:37:27.0667582Z           with mongodbatlas_stream_processor.processor,
2025-04-16T14:37:27.0668287Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T14:37:27.0668945Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T14:37:27.0669272Z         
2025-04-16T14:37:27.0670157Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-615775965140021153--STARTED-STOPPED/processor
2025-04-16T14:37:27.0671090Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T14:37:27.0671485Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2025-04-16T14:37:27.0671794Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T14:37:27.0672288Z         [processor-started-to-stopped RBAC: access denied], BadRequestDetail: 
2025-04-16T14:37:27.0678146Z   
2025-04-16T14:37:27.0678587Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0678688Z         
2025-04-16T14:37:27.0678866Z         Error: error deleting resource
2025-04-16T14:37:27.0678959Z         
2025-04-16T14:37:27.0679835Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-615775965140021153--STARTED-STOPPED/connections/sample_stream_solar
2025-04-16T14:37:27.0680170Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0680497Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0680643Z         BadRequestDetail: 
2025-04-16T14:37:27.0682925Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (3.06s)
```
### 2025-04-17
#### FAIL a second
```
2025-04-17T00:44:44.9416019Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-17T00:44:44.9416682Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-04-17T00:44:44.9424529Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-17T00:44:44.9528552Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-17T00:44:44.9529146Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-17T00:44:44.9529511Z         
2025-04-17T00:44:44.9529789Z         Error: error creating resource
2025-04-17T00:44:44.9530060Z         
2025-04-17T00:44:44.9530422Z           with mongodbatlas_stream_processor.processor,
2025-04-17T00:44:44.9531126Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-17T00:44:44.9531766Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-17T00:44:44.9532090Z         
2025-04-17T00:44:44.9533094Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-2811629387704144113--STARTED-STOPPED/processor
2025-04-17T00:44:44.9533993Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-17T00:44:44.9534659Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2025-04-17T00:44:44.9535277Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-17T00:44:44.9535880Z         [processor-started-to-stopped RBAC: access denied], BadRequestDetail: 
2025-04-17T00:44:44.9550662Z   
2025-04-17T00:44:44.9635316Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-17T00:44:44.9635975Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9636408Z         
2025-04-17T00:44:44.9636696Z         Error: error deleting resource
2025-04-17T00:44:44.9636790Z         
2025-04-17T00:44:44.9637674Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-2811629387704144113--STARTED-STOPPED/connections/sample_stream_solar
2025-04-17T00:44:44.9638014Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9638454Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9638600Z         BadRequestDetail: 
2025-04-17T00:44:44.9644217Z    test_step_number=1 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted test_terraform_path=/home/runner/work/_temp/7820bfc0-4292-41a1-b17d-9a8aaba10970/terraform test_working_directory=/tmp/plugintest1656053749
2025-04-17T00:44:44.9648941Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (1.61s)
```
### 2025-04-18
#### PASS 17 seconds
### 2025-04-19
#### PASS 14 seconds
### 2025-04-20
#### PASS 14 seconds
### 2025-04-21
#### PASS 17 seconds
### 2025-04-22
#### PASS 16 seconds
### 2025-04-23
#### PASS 14 seconds
### 2025-04-24
#### FAIL 5 seconds
```
2025-04-24T00:43:21.1155771Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-24T00:43:21.1156418Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-04-24T00:43:21.1166291Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-24T00:43:21.1242370Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-24T00:43:21.1242952Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-24T00:43:21.1243309Z         
2025-04-24T00:43:21.1243584Z         Error: error creating resource
2025-04-24T00:43:21.1243857Z         
2025-04-24T00:43:21.1244215Z           with mongodbatlas_stream_processor.processor,
2025-04-24T00:43:21.1244908Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-24T00:43:21.1245550Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-24T00:43:21.1245872Z         
2025-04-24T00:43:21.1246715Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-4877651260837758271--STARTED-STOPPED/processor
2025-04-24T00:43:21.1247594Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-24T00:43:21.1248896Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2025-04-24T00:43:21.1250187Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-24T00:43:21.1250856Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-24T00:43:21.1251504Z         [processor-started-to-stopped failed to acquire resources for stream
2025-04-24T00:43:21.1252348Z         processor validation: global resource manager returned no resources],
2025-04-24T00:43:21.1252813Z         BadRequestDetail: 
2025-04-24T00:43:21.1266494Z   
2025-04-24T00:43:21.1266991Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-24T00:43:21.1267426Z         
2025-04-24T00:43:21.1267701Z         Error: error deleting resource
2025-04-24T00:43:21.1267962Z         
2025-04-24T00:43:21.1268929Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-4877651260837758271--STARTED-STOPPED/connections/sample_stream_solar
2025-04-24T00:43:21.1269754Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-24T00:43:21.1270293Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-24T00:43:21.1270942Z         name test-acc-tf-4877651260837758271--STARTED-STOPPED has active processors,
2025-04-24T00:43:21.1271487Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-24T00:43:21.1272223Z         [test-acc-tf-4877651260837758271--STARTED-STOPPED], BadRequestDetail: 
2025-04-24T00:43:21.1289096Z   
2025-04-24T00:43:21.1319937Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (5.70s)
```
### 2025-04-25
#### PASS 9 seconds
### 2025-04-26
#### PASS 28 seconds
### 2025-04-27
#### PASS 10 seconds
### 2025-04-28
#### PASS 9 seconds
### 2025-04-29
#### PASS 9 seconds
### 2025-04-30
#### PASS 12 seconds
#### FAIL 3 seconds
```
2025-04-30T09:23:01.8200881Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-30T09:23:01.8201528Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-04-30T09:23:01.8209359Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-30T09:23:01.8227944Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-30T09:23:01.8228508Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-30T09:23:01.8228873Z         
2025-04-30T09:23:01.8229141Z         Error: error creating resource
2025-04-30T09:23:01.8229401Z         
2025-04-30T09:23:01.8229755Z           with mongodbatlas_stream_processor.processor,
2025-04-30T09:23:01.8230431Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-30T09:23:01.8231060Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-30T09:23:01.8231381Z         
2025-04-30T09:23:01.8232209Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-3111902867949509958--STARTED-STOPPED/processor
2025-04-30T09:23:01.8233412Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-30T09:23:01.8234064Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2025-04-30T09:23:01.8234726Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-30T09:23:01.8235353Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-30T09:23:01.8235971Z         [processor-started-to-stopped failed to acquire resources for stream
2025-04-30T09:23:01.8236586Z         processor validation: global resource manager returned no resources],
2025-04-30T09:23:01.8237005Z         BadRequestDetail: 
2025-04-30T09:23:01.8250059Z   
2025-04-30T09:23:01.8250558Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-30T09:23:01.8250983Z         
2025-04-30T09:23:01.8251259Z         Error: error deleting resource
2025-04-30T09:23:01.8251519Z         
2025-04-30T09:23:01.8252462Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-3111902867949509958--STARTED-STOPPED/connections/sample_stream_solar
2025-04-30T09:23:01.8253684Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-30T09:23:01.8254286Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-30T09:23:01.8254935Z         name test-acc-tf-3111902867949509958--STARTED-STOPPED has active processors,
2025-04-30T09:23:01.8255468Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-30T09:23:01.8256021Z         [test-acc-tf-3111902867949509958--STARTED-STOPPED], BadRequestDetail: 
2025-04-30T09:23:01.8273774Z   
2025-04-30T09:23:01.8308079Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (3.23s)
```
### 2025-05-01
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 12 seconds
#### PASS 11 seconds
#### PASS 13 seconds
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-05-02
#### PASS 11 seconds
### 2025-05-03
#### PASS 9 seconds
### 2025-05-04
#### PASS 10 seconds
### 2025-05-05
#### PASS 9 seconds
#### PASS 10 seconds
### 2025-05-06
#### PASS 11 seconds
### 2025-05-07
#### PASS 12 seconds
#### PASS 11 seconds
#### PASS 9 seconds
#### PASS 13 seconds
### 2025-05-08
#### PASS 11 seconds
### 2025-05-09
#### PASS 10 seconds
### 2025-05-10
#### PASS 9 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:00.0968705Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-05-11T00:30:00.0969374Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-05-11T00:30:00.0970040Z     resource_test.go:172: Creating execution project: test-acc-tf-p-4388204409771367287
2025-05-11T00:30:00.0970484Z     resource_test.go:172: 
2025-05-11T00:30:00.0971359Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.0973204Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:00.0975052Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:352
2025-05-11T00:30:00.0977278Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:172
2025-05-11T00:30:00.0978053Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.0979082Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.0979794Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-05-11T00:30:00.0980902Z         	Messages:   	Project creation failed: test-acc-tf-p-4388204409771367287, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1042220Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (0.02s)
```
### 2025-05-12
#### PASS 12 seconds
### 2025-05-13
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-05-14
#### PASS 9 seconds
### 2025-05-15
#### PASS 10 seconds
### 2025-05-16
#### PASS 9 seconds
### 2025-05-17
#### PASS 10 seconds
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
2025-05-23T00:49:48.7514000Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-05-23T00:49:48.7514661Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-05-23T00:49:48.7524675Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-05-23T00:49:48.7542821Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-05-23T00:49:48.7543547Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-05-23T00:49:48.7543930Z         
2025-05-23T00:49:48.7544210Z         Error: error creating resource
2025-05-23T00:49:48.7544491Z         
2025-05-23T00:49:48.7544982Z           with mongodbatlas_stream_processor.processor,
2025-05-23T00:49:48.7545691Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-23T00:49:48.7546333Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-23T00:49:48.7546668Z         
2025-05-23T00:49:48.7547509Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-1025975150831818244--STARTED-STOPPED/processor
2025-05-23T00:49:48.7548396Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-23T00:49:48.7549054Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2025-05-23T00:49:48.7549720Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-23T00:49:48.7550499Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-23T00:49:48.7551136Z         [processor-started-to-stopped failed to acquire resources for stream
2025-05-23T00:49:48.7551763Z         processor validation: global resource manager returned no resources],
2025-05-23T00:49:48.7552185Z         BadRequestDetail: 
2025-05-23T00:49:48.7568615Z   
2025-05-23T00:49:48.7631801Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-05-23T00:49:48.7632516Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-23T00:49:48.7632961Z         
2025-05-23T00:49:48.7633422Z         Error: error deleting resource
2025-05-23T00:49:48.7633792Z         
2025-05-23T00:49:48.7634791Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-1025975150831818244--STARTED-STOPPED/connections/sample_stream_solar
2025-05-23T00:49:48.7635631Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-23T00:49:48.7636182Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-23T00:49:48.7636848Z         name test-acc-tf-1025975150831818244--STARTED-STOPPED has active processors,
2025-05-23T00:49:48.7637666Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-23T00:49:48.7638245Z         [test-acc-tf-1025975150831818244--STARTED-STOPPED], BadRequestDetail: 
2025-05-23T00:49:48.7651049Z    test_working_directory=/tmp/plugintest1620962605 test_step_number=1 test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-05-23T00:49:48.7817052Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (4.23s)
```
### 2025-05-24
#### PASS 9 seconds
### 2025-05-25
#### PASS 9 seconds
### 2025-05-26
#### PASS 13 seconds
### 2025-05-27
#### PASS 11 seconds
#### PASS 9 seconds
### 2025-05-28
#### PASS 12 seconds
#### PASS 9 seconds
### 2025-05-29
#### PASS 9 seconds
#### PASS 12 seconds
### 2025-05-30
#### PASS 9 seconds
#### PASS 11 seconds
### 2025-05-31
#### PASS 10 seconds
### 2025-06-01
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 11 seconds
### 2025-06-02
#### PASS 12 seconds
#### PASS 13 seconds
#### PASS 9 seconds
### 2025-06-03
#### PASS 9 seconds
#### PASS 12 seconds
#### PASS 9 seconds
### 2025-06-04
#### PASS 13 seconds
### 2025-06-05
#### PASS 9 seconds
### 2025-06-06
#### PASS 10 seconds
### 2025-06-07
#### PASS 9 seconds
### 2025-06-08
#### PASS 9 seconds
### 2025-06-09
#### PASS 9 seconds
### 2025-06-10
#### PASS 12 seconds
### 2025-06-11
#### PASS 9 seconds
#### PASS 11 seconds
### 2025-06-12
#### PASS 11 seconds
### 2025-06-13
#### PASS 12 seconds
### 2025-06-14
#### PASS 11 seconds
### 2025-06-15
#### PASS 12 seconds
### 2025-06-16
#### PASS 9 seconds
### 2025-06-17
#### PASS 9 seconds
### 2025-06-18
#### PASS 12 seconds
#### PASS 12 seconds
### 2025-06-19
#### PASS 9 seconds
### 2025-06-20
#### PASS 10 seconds
### 2025-06-21
#### PASS 9 seconds
### 2025-06-22
#### PASS 12 seconds
### 2025-06-23
#### PASS 12 seconds
### 2025-06-24
#### PASS 9 seconds
### 2025-06-25
#### PASS 9 seconds
#### PASS 10 seconds
### 2025-06-26
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-06-27
#### PASS 10 seconds
### 2025-06-28
#### PASS 12 seconds
### 2025-06-29
#### PASS 10 seconds
### 2025-06-30
#### PASS 12 seconds
### 2025-07-01
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 13 seconds
#### PASS 12 seconds
#### PASS 10 seconds
#### PASS 12 seconds
### 2025-07-02
#### PASS 9 seconds
### 2025-07-03
#### PASS 10 seconds
### 2025-07-04
#### PASS 9 seconds
### 2025-07-05
#### PASS 12 seconds
### 2025-07-06
#### FAIL 31 seconds
```
2025-07-06T00:48:43.0089077Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-06T00:48:43.0089709Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-07-06T00:48:43.0097695Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-06T00:48:43.0143480Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-06T00:48:43.0144031Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0144379Z         
2025-07-06T00:48:43.0144639Z         Error: error creating resource
2025-07-06T00:48:43.0144897Z         
2025-07-06T00:48:43.0145220Z           with mongodbatlas_stream_instance.instance,
2025-07-06T00:48:43.0145865Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-07-06T00:48:43.0146462Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-07-06T00:48:43.0146768Z         
2025-07-06T00:48:43.0147248Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams
2025-07-06T00:48:43.0148004Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0148576Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0148949Z         BadRequestDetail: 
2025-07-06T00:48:43.0160203Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted test_terraform_path=/home/runner/work/_temp/571f2434-2bee-44d0-b41d-cfc3e67d82b8/terraform test_working_directory=/tmp/plugintest3822302746
2025-07-06T00:48:43.0202826Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (31.01s)
```
### 2025-07-07
#### PASS 9 seconds
### 2025-07-08
#### PASS 10 seconds
### 2025-07-09
#### PASS 10 seconds