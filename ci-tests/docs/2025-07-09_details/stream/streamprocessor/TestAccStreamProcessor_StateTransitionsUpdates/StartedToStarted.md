# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 122) FAIL(x 10)
Success rate: 92.42%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-16 00:45 | dev | 1.07s
2025-04-16 12:49 | qa | 3.03s
2025-04-16 14:37 | dev | 2.02s
2025-04-17 00:44 | dev | 1.05s
2025-04-30 09:23 | qa | 4.08s
2025-05-04 00:47 | qa | 3.04s
2025-05-05 10:43 | qa | 5.01s
2025-05-11 00:30 | qa | 0.00s
2025-05-23 00:49 | dev | 4.08s
2025-07-06 00:48 | qa | 31.05s

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
#### PASS 18 seconds
### 2025-04-13
#### PASS 17 seconds
### 2025-04-14
#### PASS 19 seconds
### 2025-04-15
#### PASS 17 seconds
### 2025-04-16
#### FAIL a second
```
2025-04-16T00:45:12.3392375Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-16T00:45:12.3393104Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-04-16T00:45:12.3398482Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-16T00:45:12.3523473Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-16T00:45:12.3524272Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-16T00:45:12.3524638Z         
2025-04-16T00:45:12.3524918Z         Error: error creating resource
2025-04-16T00:45:12.3525183Z         
2025-04-16T00:45:12.3525548Z           with mongodbatlas_stream_processor.processor,
2025-04-16T00:45:12.3526237Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T00:45:12.3526877Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T00:45:12.3527197Z         
2025-04-16T00:45:12.3528037Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-1335278794610622072--STARTED-STARTED/processor
2025-04-16T00:45:12.3528922Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T00:45:12.3529697Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2025-04-16T00:45:12.3530317Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T00:45:12.3530913Z         [processor-started-to-started RBAC: access denied], BadRequestDetail: 
2025-04-16T00:45:12.3541922Z    test_terraform_path=/home/runner/work/_temp/92645992-1140-423c-8ef0-74ddbe0cfc31/terraform
2025-04-16T00:45:12.3615963Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-16T00:45:12.3616333Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3616429Z         
2025-04-16T00:45:12.3616607Z         Error: error deleting resource
2025-04-16T00:45:12.3616702Z         
2025-04-16T00:45:12.3617567Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-1335278794610622072--STARTED-STARTED/connections/sample_stream_solar
2025-04-16T00:45:12.3617899Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3618235Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3618382Z         BadRequestDetail: 
2025-04-16T00:45:12.3620652Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (1.69s)
```
#### FAIL 3 seconds
```
2025-04-16T12:49:32.8453056Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-16T12:49:32.8453921Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-04-16T12:49:32.8460250Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-16T12:49:32.8533842Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-16T12:49:32.8534420Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-16T12:49:32.8534782Z         
2025-04-16T12:49:32.8535056Z         Error: error creating resource
2025-04-16T12:49:32.8535324Z         
2025-04-16T12:49:32.8535692Z           with mongodbatlas_stream_processor.processor,
2025-04-16T12:49:32.8536383Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T12:49:32.8537036Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T12:49:32.8537486Z         
2025-04-16T12:49:32.8538345Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-1722193975380353842--STARTED-STARTED/processor
2025-04-16T12:49:32.8539336Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T12:49:32.8539999Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2025-04-16T12:49:32.8540618Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T12:49:32.8541221Z         [processor-started-to-started RBAC: access denied], BadRequestDetail: 
2025-04-16T12:49:32.8549556Z    test_terraform_path=/home/runner/work/_temp/c09527d7-de0c-4201-9826-27350f0a89ff/terraform
2025-04-16T12:49:32.8640967Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-16T12:49:32.8641632Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8642068Z         
2025-04-16T12:49:32.8642341Z         Error: error deleting resource
2025-04-16T12:49:32.8642607Z         
2025-04-16T12:49:32.8643704Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-1722193975380353842--STARTED-STARTED/connections/sample_stream_solar
2025-04-16T12:49:32.8644690Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8645292Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8645704Z         BadRequestDetail: 
2025-04-16T12:49:32.8687101Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (3.32s)
```
#### FAIL 2 seconds
```
2025-04-16T14:37:27.0432260Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-16T14:37:27.0433134Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-04-16T14:37:27.0439727Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-16T14:37:27.0527199Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-16T14:37:27.0527787Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-16T14:37:27.0528153Z         
2025-04-16T14:37:27.0528437Z         Error: error creating resource
2025-04-16T14:37:27.0528706Z         
2025-04-16T14:37:27.0529077Z           with mongodbatlas_stream_processor.processor,
2025-04-16T14:37:27.0529798Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T14:37:27.0530457Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T14:37:27.0530805Z         
2025-04-16T14:37:27.0531692Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-412415528319867428--STARTED-STARTED/processor
2025-04-16T14:37:27.0532617Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T14:37:27.0533297Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2025-04-16T14:37:27.0534178Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T14:37:27.0534789Z         [processor-started-to-started RBAC: access denied], BadRequestDetail: 
2025-04-16T14:37:27.0542808Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted test_terraform_path=/home/runner/work/_temp/cbd85b3d-89a9-420b-96e9-da4975fd1b27/terraform test_working_directory=/tmp/plugintest1141338876 test_step_number=1
2025-04-16T14:37:27.0601996Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-16T14:37:27.0602670Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0603123Z         
2025-04-16T14:37:27.0603405Z         Error: error deleting resource
2025-04-16T14:37:27.0603859Z         
2025-04-16T14:37:27.0604850Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-412415528319867428--STARTED-STARTED/connections/sample_stream_solar
2025-04-16T14:37:27.0605833Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0606439Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0606855Z         BadRequestDetail: 
2025-04-16T14:37:27.0613231Z   
2025-04-16T14:37:27.0681502Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (2.22s)
```
### 2025-04-17
#### FAIL a second
```
2025-04-17T00:44:44.9417756Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-17T00:44:44.9418674Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-04-17T00:44:44.9424029Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-17T00:44:44.9445988Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-17T00:44:44.9446555Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-17T00:44:44.9446922Z         
2025-04-17T00:44:44.9447204Z         Error: error creating resource
2025-04-17T00:44:44.9447473Z         
2025-04-17T00:44:44.9447844Z           with mongodbatlas_stream_processor.processor,
2025-04-17T00:44:44.9448707Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-17T00:44:44.9449362Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-17T00:44:44.9449691Z         
2025-04-17T00:44:44.9450555Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-5142034971588513374--STARTED-STARTED/processor
2025-04-17T00:44:44.9451449Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-17T00:44:44.9452111Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2025-04-17T00:44:44.9452744Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-17T00:44:44.9453362Z         [processor-started-to-started RBAC: access denied], BadRequestDetail: 
2025-04-17T00:44:44.9461671Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated test_terraform_path=/home/runner/work/_temp/7820bfc0-4292-41a1-b17d-9a8aaba10970/terraform
2025-04-17T00:44:44.9574719Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-17T00:44:44.9575382Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9575818Z         
2025-04-17T00:44:44.9576097Z         Error: error deleting resource
2025-04-17T00:44:44.9576369Z         
2025-04-17T00:44:44.9577345Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-5142034971588513374--STARTED-STARTED/connections/sample_stream_solar
2025-04-17T00:44:44.9578602Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9579231Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9579653Z         BadRequestDetail: 
2025-04-17T00:44:44.9585336Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated test_terraform_path=/home/runner/work/_temp/7820bfc0-4292-41a1-b17d-9a8aaba10970/terraform test_working_directory=/tmp/plugintest223475821
2025-04-17T00:44:44.9647547Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (1.49s)
```
### 2025-04-18
#### PASS 20 seconds
### 2025-04-19
#### PASS 18 seconds
### 2025-04-20
#### PASS 18 seconds
### 2025-04-21
#### PASS 20 seconds
### 2025-04-22
#### PASS 19 seconds
### 2025-04-23
#### PASS 17 seconds
### 2025-04-24
#### PASS 20 seconds
### 2025-04-25
#### PASS 11 seconds
### 2025-04-26
#### PASS 31 seconds
### 2025-04-27
#### PASS 12 seconds
### 2025-04-28
#### PASS 12 seconds
### 2025-04-29
#### PASS 10 seconds
### 2025-04-30
#### PASS 15 seconds
#### FAIL 4 seconds
```
2025-04-30T09:23:01.8202719Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-30T09:23:01.8203651Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-04-30T09:23:01.8208756Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-30T09:23:01.8274170Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-30T09:23:01.8275028Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-30T09:23:01.8275515Z         
2025-04-30T09:23:01.8275792Z         Error: error creating resource
2025-04-30T09:23:01.8276173Z         
2025-04-30T09:23:01.8276532Z           with mongodbatlas_stream_processor.processor,
2025-04-30T09:23:01.8277316Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-30T09:23:01.8278066Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-30T09:23:01.8278489Z         
2025-04-30T09:23:01.8279432Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-5218043260387399917--STARTED-STARTED/processor
2025-04-30T09:23:01.8280418Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-30T09:23:01.8281176Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2025-04-30T09:23:01.8281954Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-30T09:23:01.8282702Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-30T09:23:01.8283590Z         [processor-started-to-started failed to acquire resources for stream
2025-04-30T09:23:01.8284317Z         processor validation: global resource manager returned no resources],
2025-04-30T09:23:01.8284889Z         BadRequestDetail: 
2025-04-30T09:23:01.8299927Z   
2025-04-30T09:23:01.8300417Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-30T09:23:01.8300969Z         
2025-04-30T09:23:01.8301247Z         Error: error deleting resource
2025-04-30T09:23:01.8301625Z         
2025-04-30T09:23:01.8302889Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-5218043260387399917--STARTED-STARTED/connections/sample_stream_solar
2025-04-30T09:23:01.8304180Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-30T09:23:01.8304834Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-30T09:23:01.8305562Z         name test-acc-tf-5218043260387399917--STARTED-STARTED has active processors,
2025-04-30T09:23:01.8306149Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-30T09:23:01.8306803Z         [test-acc-tf-5218043260387399917--STARTED-STARTED], BadRequestDetail: 
2025-04-30T09:23:01.8308765Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (4.83s)
```
### 2025-05-01
#### PASS 11 seconds
#### PASS 11 seconds
#### PASS 14 seconds
#### PASS 12 seconds
#### PASS 14 seconds
#### PASS 10 seconds
#### PASS 11 seconds
### 2025-05-02
#### PASS 12 seconds
### 2025-05-03
#### PASS 11 seconds
### 2025-05-04
#### FAIL 3 seconds
```
2025-05-04T00:47:22.2008425Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-05-04T00:47:22.2009799Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-05-04T00:47:22.2017029Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-05-04T00:47:22.2082047Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-05-04T00:47:22.2082608Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-05-04T00:47:22.2082968Z         
2025-05-04T00:47:22.2083247Z         Error: error creating resource
2025-05-04T00:47:22.2083517Z         
2025-05-04T00:47:22.2084265Z           with mongodbatlas_stream_processor.processor,
2025-05-04T00:47:22.2084995Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-04T00:47:22.2085637Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-04T00:47:22.2085968Z         
2025-05-04T00:47:22.2086792Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-6066852708065687658--STARTED-STARTED/processor
2025-05-04T00:47:22.2087674Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-04T00:47:22.2088316Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2025-05-04T00:47:22.2088973Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-04T00:47:22.2089604Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-04T00:47:22.2090223Z         [processor-started-to-started failed to acquire resources for stream
2025-05-04T00:47:22.2090842Z         processor validation: global resource manager returned no resources],
2025-05-04T00:47:22.2091258Z         BadRequestDetail: 
2025-05-04T00:47:22.2105546Z   
2025-05-04T00:47:22.2106030Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-04T00:47:22.2106563Z         
2025-05-04T00:47:22.2106839Z         Error: error deleting resource
2025-05-04T00:47:22.2107190Z         
2025-05-04T00:47:22.2108233Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-6066852708065687658--STARTED-STARTED/connections/sample_stream_solar
2025-05-04T00:47:22.2109143Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-04T00:47:22.2109770Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-04T00:47:22.2110663Z         name test-acc-tf-6066852708065687658--STARTED-STARTED has active processors,
2025-05-04T00:47:22.2111324Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-04T00:47:22.2112064Z         [test-acc-tf-6066852708065687658--STARTED-STARTED], BadRequestDetail: 
2025-05-04T00:47:22.2130798Z   
2025-05-04T00:47:22.2162562Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (3.40s)
```
### 2025-05-05
#### PASS 11 seconds
#### FAIL 5 seconds
```
2025-05-05T10:43:53.8547204Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-05-05T10:43:53.8547932Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-05-05T10:43:53.8553115Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-05-05T10:43:53.8671229Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-05-05T10:43:53.8671789Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-05-05T10:43:53.8672140Z         
2025-05-05T10:43:53.8672418Z         Error: error creating resource
2025-05-05T10:43:53.8672677Z         
2025-05-05T10:43:53.8673030Z           with mongodbatlas_stream_processor.processor,
2025-05-05T10:43:53.8673719Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-05T10:43:53.8674355Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-05T10:43:53.8674677Z         
2025-05-05T10:43:53.8675505Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-422545339011060161--STARTED-STARTED/processor
2025-05-05T10:43:53.8676478Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-05T10:43:53.8677124Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2025-05-05T10:43:53.8677778Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-05T10:43:53.8678423Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-05T10:43:53.8679053Z         [processor-started-to-started failed to acquire resources for stream
2025-05-05T10:43:53.8679667Z         processor validation: global resource manager returned no resources],
2025-05-05T10:43:53.8680085Z         BadRequestDetail: 
2025-05-05T10:43:53.8693289Z   
2025-05-05T10:43:53.8693755Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-05T10:43:53.8694179Z         
2025-05-05T10:43:53.8694448Z         Error: error deleting resource
2025-05-05T10:43:53.8694714Z         
2025-05-05T10:43:53.8695652Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-422545339011060161--STARTED-STARTED/connections/sample_stream_solar
2025-05-05T10:43:53.8696582Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-05T10:43:53.8697114Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-05T10:43:53.8697752Z         name test-acc-tf-422545339011060161--STARTED-STARTED has active processors,
2025-05-05T10:43:53.8698291Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-05T10:43:53.8698826Z         [test-acc-tf-422545339011060161--STARTED-STARTED], BadRequestDetail: 
2025-05-05T10:43:53.8701160Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (5.13s)
```
### 2025-05-06
#### PASS 13 seconds
### 2025-05-07
#### PASS 14 seconds
#### PASS 13 seconds
#### PASS 11 seconds
#### PASS 15 seconds
### 2025-05-08
#### PASS 13 seconds
### 2025-05-09
#### PASS 13 seconds
### 2025-05-10
#### PASS 11 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:00.0981689Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-05-11T00:30:00.0982802Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-05-11T00:30:00.0983531Z     resource_test.go:172: Creating execution project: test-acc-tf-p-523656589133859483
2025-05-11T00:30:00.0983977Z     resource_test.go:172: 
2025-05-11T00:30:00.0984864Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.0986613Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:00.0988620Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:352
2025-05-11T00:30:00.0990528Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:172
2025-05-11T00:30:00.0991294Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.0992417Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.0993125Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-05-11T00:30:00.0994227Z         	Messages:   	Project creation failed: test-acc-tf-p-523656589133859483, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1043485Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (0.02s)
```
### 2025-05-12
#### PASS 14 seconds
### 2025-05-13
#### PASS 12 seconds
#### PASS 11 seconds
### 2025-05-14
#### PASS 11 seconds
### 2025-05-15
#### PASS 12 seconds
### 2025-05-16
#### PASS 11 seconds
### 2025-05-17
#### PASS 11 seconds
### 2025-05-18
#### PASS 14 seconds
### 2025-05-19
#### PASS 14 seconds
### 2025-05-20
#### PASS 11 seconds
#### PASS 14 seconds
### 2025-05-21
#### PASS 14 seconds
### 2025-05-22
#### PASS 14 seconds
#### PASS 13 seconds
#### PASS 11 seconds
### 2025-05-23
#### FAIL 4 seconds
```
2025-05-23T00:49:48.7515716Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-05-23T00:49:48.7516435Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-05-23T00:49:48.7523682Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-05-23T00:49:48.7695488Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-05-23T00:49:48.7696059Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-05-23T00:49:48.7696433Z         
2025-05-23T00:49:48.7696711Z         Error: error creating resource
2025-05-23T00:49:48.7696990Z         
2025-05-23T00:49:48.7697350Z           with mongodbatlas_stream_processor.processor,
2025-05-23T00:49:48.7698046Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-23T00:49:48.7698717Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-23T00:49:48.7699060Z         
2025-05-23T00:49:48.7699903Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-636813399617297648--STARTED-STARTED/processor
2025-05-23T00:49:48.7700789Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-23T00:49:48.7701446Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2025-05-23T00:49:48.7702114Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-23T00:49:48.7702764Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-23T00:49:48.7703487Z         [processor-started-to-started failed to acquire resources for stream
2025-05-23T00:49:48.7704113Z         processor validation: global resource manager returned no resources],
2025-05-23T00:49:48.7704534Z         BadRequestDetail: 
2025-05-23T00:49:48.7717495Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-05-23T00:49:48.7718172Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-23T00:49:48.7718611Z         
2025-05-23T00:49:48.7718890Z         Error: error deleting resource
2025-05-23T00:49:48.7719165Z         
2025-05-23T00:49:48.7720119Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-636813399617297648--STARTED-STARTED/connections/sample_stream_solar
2025-05-23T00:49:48.7720957Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-23T00:49:48.7721489Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-23T00:49:48.7722141Z         name test-acc-tf-636813399617297648--STARTED-STARTED has active processors,
2025-05-23T00:49:48.7722680Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-23T00:49:48.7723344Z         [test-acc-tf-636813399617297648--STARTED-STARTED], BadRequestDetail: 
2025-05-23T00:49:48.7739789Z    test_terraform_path=/home/runner/work/_temp/ff69557a-791e-4b49-8991-15a455b1be89/terraform
2025-05-23T00:49:48.7818949Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (4.81s)
```
### 2025-05-24
#### PASS 13 seconds
### 2025-05-25
#### PASS 11 seconds
### 2025-05-26
#### PASS 15 seconds
### 2025-05-27
#### PASS 13 seconds
#### PASS 11 seconds
### 2025-05-28
#### PASS 14 seconds
#### PASS 11 seconds
### 2025-05-29
#### PASS 11 seconds
#### PASS 14 seconds
### 2025-05-30
#### PASS 11 seconds
#### PASS 13 seconds
### 2025-05-31
#### PASS 12 seconds
### 2025-06-01
#### PASS 14 seconds
#### PASS 11 seconds
#### PASS 11 seconds
#### PASS 12 seconds
#### PASS 14 seconds
#### PASS 11 seconds
#### PASS 11 seconds
### 2025-06-02
#### PASS 14 seconds
#### PASS 15 seconds
#### PASS 13 seconds
### 2025-06-03
#### PASS 12 seconds
#### PASS 14 seconds
#### PASS 13 seconds
### 2025-06-04
#### PASS 14 seconds
### 2025-06-05
#### PASS 11 seconds
### 2025-06-06
#### PASS 13 seconds
### 2025-06-07
#### PASS 11 seconds
### 2025-06-08
#### PASS 12 seconds
### 2025-06-09
#### PASS 11 seconds
### 2025-06-10
#### PASS 14 seconds
### 2025-06-11
#### PASS 10 seconds
#### PASS 13 seconds
### 2025-06-12
#### PASS 13 seconds
### 2025-06-13
#### PASS 14 seconds
### 2025-06-14
#### PASS 13 seconds
### 2025-06-15
#### PASS 14 seconds
### 2025-06-16
#### PASS 11 seconds
### 2025-06-17
#### PASS 11 seconds
### 2025-06-18
#### PASS 14 seconds
#### PASS 14 seconds
### 2025-06-19
#### PASS 11 seconds
### 2025-06-20
#### PASS 13 seconds
### 2025-06-21
#### PASS 12 seconds
### 2025-06-22
#### PASS 14 seconds
### 2025-06-23
#### PASS 14 seconds
### 2025-06-24
#### PASS 11 seconds
### 2025-06-25
#### PASS 12 seconds
#### PASS 12 seconds
### 2025-06-26
#### PASS 12 seconds
#### PASS 12 seconds
### 2025-06-27
#### PASS 12 seconds
### 2025-06-28
#### PASS 14 seconds
### 2025-06-29
#### PASS 16 seconds
### 2025-06-30
#### PASS 14 seconds
### 2025-07-01
#### PASS 14 seconds
#### PASS 11 seconds
#### PASS 14 seconds
#### PASS 12 seconds
#### PASS 14 seconds
#### PASS 14 seconds
#### PASS 12 seconds
#### PASS 14 seconds
### 2025-07-02
#### PASS 11 seconds
### 2025-07-03
#### PASS 12 seconds
### 2025-07-04
#### PASS 12 seconds
### 2025-07-05
#### PASS 14 seconds
### 2025-07-06
#### FAIL 31 seconds
```
2025-07-06T00:48:43.0090868Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-06T00:48:43.0091580Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-07-06T00:48:43.0096620Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-06T00:48:43.0161195Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-06T00:48:43.0161756Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0162104Z         
2025-07-06T00:48:43.0162366Z         Error: error creating resource
2025-07-06T00:48:43.0162624Z         
2025-07-06T00:48:43.0162956Z           with mongodbatlas_stream_connection.sample,
2025-07-06T00:48:43.0163605Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "sample":
2025-07-06T00:48:43.0164206Z           23: 		resource "mongodbatlas_stream_connection" "sample" {
2025-07-06T00:48:43.0164522Z         
2025-07-06T00:48:43.0165339Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-2928671464252808851--STARTED-STARTED/connections
2025-07-06T00:48:43.0166348Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0166915Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0167287Z         BadRequestDetail: 
2025-07-06T00:48:43.0179235Z   
2025-07-06T00:48:43.0204193Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (31.54s)
```
### 2025-07-07
#### PASS 12 seconds
### 2025-07-08
#### PASS 12 seconds
### 2025-07-09
#### PASS 12 seconds