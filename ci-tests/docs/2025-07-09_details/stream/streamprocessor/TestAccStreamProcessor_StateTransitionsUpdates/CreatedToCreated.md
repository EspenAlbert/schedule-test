# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 122) FAIL(x 10)
Success rate: 92.42%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-16 00:45 | dev | 1.07s
2025-04-16 12:49 | qa | 3.04s
2025-04-16 14:37 | dev | 2.02s
2025-04-17 00:44 | dev | 1.05s
2025-04-24 00:43 | dev | 5.03s
2025-05-04 00:47 | qa | 5.08s
2025-05-05 10:43 | qa | 4.00s
2025-05-11 00:30 | qa | 0.00s
2025-05-23 00:49 | dev | 4.03s
2025-07-06 00:48 | qa | 37.01s

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
#### PASS 9 seconds
### 2025-04-12
#### PASS 9 seconds
### 2025-04-13
#### PASS 9 seconds
### 2025-04-14
#### PASS 11 seconds
### 2025-04-15
#### PASS 9 seconds
### 2025-04-16
#### FAIL a second
```
2025-04-16T00:45:12.3386947Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-16T00:45:12.3387846Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-04-16T00:45:12.3397996Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-16T00:45:12.3436632Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-16T00:45:12.3437192Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-16T00:45:12.3437550Z         
2025-04-16T00:45:12.3437827Z         Error: error creating resource
2025-04-16T00:45:12.3438090Z         
2025-04-16T00:45:12.3438453Z           with mongodbatlas_stream_processor.processor,
2025-04-16T00:45:12.3439149Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T00:45:12.3439794Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T00:45:12.3440114Z         
2025-04-16T00:45:12.3440952Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-711024356284316974--CREATED-CREATED/processor
2025-04-16T00:45:12.3441968Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T00:45:12.3442613Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2025-04-16T00:45:12.3443220Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T00:45:12.3443911Z         [processor-created-to-created RBAC: access denied], BadRequestDetail: 
2025-04-16T00:45:12.3457332Z    test_terraform_path=/home/runner/work/_temp/92645992-1140-423c-8ef0-74ddbe0cfc31/terraform test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-04-16T00:45:12.3574728Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-16T00:45:12.3575388Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3575812Z         
2025-04-16T00:45:12.3576091Z         Error: error deleting resource
2025-04-16T00:45:12.3576353Z         
2025-04-16T00:45:12.3577317Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-711024356284316974--CREATED-CREATED/connections/sample_stream_solar
2025-04-16T00:45:12.3578270Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3578861Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3579407Z         BadRequestDetail: 
2025-04-16T00:45:12.3595266Z   
2025-04-16T00:45:12.3619702Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (1.66s)
```
#### FAIL 3 seconds
```
2025-04-16T12:49:32.8446612Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-16T12:49:32.8447487Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-04-16T12:49:32.8459598Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-16T12:49:32.8550118Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-16T12:49:32.8550693Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-16T12:49:32.8551054Z         
2025-04-16T12:49:32.8551329Z         Error: error creating resource
2025-04-16T12:49:32.8551726Z         
2025-04-16T12:49:32.8552084Z           with mongodbatlas_stream_processor.processor,
2025-04-16T12:49:32.8552779Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T12:49:32.8553424Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T12:49:32.8553751Z         
2025-04-16T12:49:32.8554601Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-645072618191433503--CREATED-CREATED/processor
2025-04-16T12:49:32.8555487Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T12:49:32.8556149Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2025-04-16T12:49:32.8556765Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T12:49:32.8557376Z         [processor-created-to-created RBAC: access denied], BadRequestDetail: 
2025-04-16T12:49:32.8577518Z   
2025-04-16T12:49:32.8662336Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-16T12:49:32.8663005Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8663438Z         
2025-04-16T12:49:32.8663712Z         Error: error deleting resource
2025-04-16T12:49:32.8663982Z         
2025-04-16T12:49:32.8664945Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-645072618191433503--CREATED-CREATED/connections/sample_stream_solar
2025-04-16T12:49:32.8665921Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8666524Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8666942Z         BadRequestDetail: 
2025-04-16T12:49:32.8677506Z    test_terraform_path=/home/runner/work/_temp/c09527d7-de0c-4201-9826-27350f0a89ff/terraform
2025-04-16T12:49:32.8687744Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (3.40s)
```
#### FAIL 2 seconds
```
2025-04-16T14:37:27.0425757Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-16T14:37:27.0426516Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-04-16T14:37:27.0439116Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-16T14:37:27.0560701Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-16T14:37:27.0561277Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-16T14:37:27.0561639Z         
2025-04-16T14:37:27.0561917Z         Error: error creating resource
2025-04-16T14:37:27.0562185Z         
2025-04-16T14:37:27.0562553Z           with mongodbatlas_stream_processor.processor,
2025-04-16T14:37:27.0563253Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T14:37:27.0564082Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T14:37:27.0564408Z         
2025-04-16T14:37:27.0565264Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-8866741984367000486--CREATED-CREATED/processor
2025-04-16T14:37:27.0566295Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T14:37:27.0566957Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2025-04-16T14:37:27.0567578Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T14:37:27.0568189Z         [processor-created-to-created RBAC: access denied], BadRequestDetail: 
2025-04-16T14:37:27.0580181Z   
2025-04-16T14:37:27.0646398Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-16T14:37:27.0647058Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0647512Z         
2025-04-16T14:37:27.0647786Z         Error: error deleting resource
2025-04-16T14:37:27.0648182Z         
2025-04-16T14:37:27.0649171Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-8866741984367000486--CREATED-CREATED/connections/sample_stream_solar
2025-04-16T14:37:27.0650167Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0650782Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0651209Z         BadRequestDetail: 
2025-04-16T14:37:27.0665266Z   
2025-04-16T14:37:27.0682603Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (2.23s)
```
### 2025-04-17
#### FAIL a second
```
2025-04-17T00:44:44.9412221Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-17T00:44:44.9413095Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-04-17T00:44:44.9423530Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-17T00:44:44.9462497Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-17T00:44:44.9463087Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-17T00:44:44.9463456Z         
2025-04-17T00:44:44.9463735Z         Error: error creating resource
2025-04-17T00:44:44.9464005Z         
2025-04-17T00:44:44.9464371Z           with mongodbatlas_stream_processor.processor,
2025-04-17T00:44:44.9465077Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-17T00:44:44.9465728Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-17T00:44:44.9466057Z         
2025-04-17T00:44:44.9466922Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-472688581636542775--CREATED-CREATED/processor
2025-04-17T00:44:44.9467816Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-17T00:44:44.9468825Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2025-04-17T00:44:44.9469449Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-17T00:44:44.9470059Z         [processor-created-to-created RBAC: access denied], BadRequestDetail: 
2025-04-17T00:44:44.9489095Z    test_step_number=1 test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted test_terraform_path=/home/runner/work/_temp/7820bfc0-4292-41a1-b17d-9a8aaba10970/terraform test_working_directory=/tmp/plugintest1090367760
2025-04-17T00:44:44.9586343Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-17T00:44:44.9587012Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9587444Z         
2025-04-17T00:44:44.9587719Z         Error: error deleting resource
2025-04-17T00:44:44.9587990Z         
2025-04-17T00:44:44.9589177Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-472688581636542775--CREATED-CREATED/connections/sample_stream_solar
2025-04-17T00:44:44.9590155Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9590754Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9591294Z         BadRequestDetail: 
2025-04-17T00:44:44.9601684Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted test_terraform_path=/home/runner/work/_temp/7820bfc0-4292-41a1-b17d-9a8aaba10970/terraform
2025-04-17T00:44:44.9647873Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (1.50s)
```
### 2025-04-18
#### PASS 11 seconds
### 2025-04-19
#### PASS 10 seconds
### 2025-04-20
#### PASS 9 seconds
### 2025-04-21
#### PASS 12 seconds
### 2025-04-22
#### PASS 11 seconds
### 2025-04-23
#### PASS 9 seconds
### 2025-04-24
#### FAIL 5 seconds
```
2025-04-24T00:43:21.1151819Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-24T00:43:21.1152808Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-04-24T00:43:21.1165308Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-24T00:43:21.1195940Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-04-24T00:43:21.1196533Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-04-24T00:43:21.1196903Z         
2025-04-24T00:43:21.1197177Z         Error: error creating resource
2025-04-24T00:43:21.1197449Z         
2025-04-24T00:43:21.1197813Z           with mongodbatlas_stream_processor.processor,
2025-04-24T00:43:21.1198514Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-24T00:43:21.1199152Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-24T00:43:21.1199476Z         
2025-04-24T00:43:21.1200322Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-2108887333233345304--CREATED-CREATED/processor
2025-04-24T00:43:21.1201195Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-24T00:43:21.1202182Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2025-04-24T00:43:21.1202924Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-24T00:43:21.1203575Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-24T00:43:21.1204207Z         [processor-created-to-created failed to acquire resources for stream
2025-04-24T00:43:21.1204817Z         processor validation: global resource manager returned no resources],
2025-04-24T00:43:21.1205233Z         BadRequestDetail: 
2025-04-24T00:43:21.1217629Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated test_terraform_path=/home/runner/work/_temp/5edcbd20-a505-4ac5-832d-94520538c2a4/terraform test_working_directory=/tmp/plugintest3501871053 test_step_number=1
2025-04-24T00:43:21.1218817Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-24T00:43:21.1219241Z         
2025-04-24T00:43:21.1219515Z         Error: error deleting resource
2025-04-24T00:43:21.1219776Z         
2025-04-24T00:43:21.1220743Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-2108887333233345304--CREATED-CREATED/connections/sample_stream_solar
2025-04-24T00:43:21.1221565Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-24T00:43:21.1222291Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-24T00:43:21.1222950Z         name test-acc-tf-2108887333233345304--CREATED-CREATED has active processors,
2025-04-24T00:43:21.1223494Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-24T00:43:21.1224054Z         [test-acc-tf-2108887333233345304--CREATED-CREATED], BadRequestDetail: 
2025-04-24T00:43:21.1241875Z   
2025-04-24T00:43:21.1319302Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (5.29s)
```
### 2025-04-25
#### PASS 6 seconds
### 2025-04-26
#### PASS 21 seconds
### 2025-04-27
#### PASS 7 seconds
### 2025-04-28
#### PASS 6 seconds
### 2025-04-29
#### PASS 6 seconds
### 2025-04-30
#### PASS 9 seconds
#### PASS 7 seconds
### 2025-05-01
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 9 seconds
#### PASS 6 seconds
#### PASS 9 seconds
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-02
#### PASS 8 seconds
### 2025-05-03
#### PASS 7 seconds
### 2025-05-04
#### FAIL 5 seconds
```
2025-05-04T00:47:22.2003126Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-05-04T00:47:22.2003881Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-05-04T00:47:22.2016528Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-05-04T00:47:22.2131128Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-05-04T00:47:22.2131902Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-05-04T00:47:22.2132301Z         
2025-05-04T00:47:22.2132646Z         Error: error creating resource
2025-05-04T00:47:22.2132912Z         
2025-05-04T00:47:22.2133386Z           with mongodbatlas_stream_processor.processor,
2025-05-04T00:47:22.2134177Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-04T00:47:22.2134912Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-04T00:47:22.2135243Z         
2025-05-04T00:47:22.2136181Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-6126367169483793838--CREATED-CREATED/processor
2025-05-04T00:47:22.2137183Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-04T00:47:22.2138104Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2025-05-04T00:47:22.2138860Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-04T00:47:22.2139585Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-04T00:47:22.2140319Z         [processor-created-to-created failed to acquire resources for stream
2025-05-04T00:47:22.2141052Z         processor validation: global resource manager returned no resources],
2025-05-04T00:47:22.2141689Z         BadRequestDetail: 
2025-05-04T00:47:22.2155184Z   
2025-05-04T00:47:22.2155642Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-04T00:47:22.2156063Z         
2025-05-04T00:47:22.2156331Z         Error: error deleting resource
2025-05-04T00:47:22.2156597Z         
2025-05-04T00:47:22.2157539Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-6126367169483793838--CREATED-CREATED/connections/sample_stream_solar
2025-05-04T00:47:22.2158499Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-04T00:47:22.2159045Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-04T00:47:22.2159686Z         name test-acc-tf-6126367169483793838--CREATED-CREATED has active processors,
2025-05-04T00:47:22.2160221Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-04T00:47:22.2160757Z         [test-acc-tf-6126367169483793838--CREATED-CREATED], BadRequestDetail: 
2025-05-04T00:47:22.2163343Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (5.79s)
```
### 2025-05-05
#### PASS 6 seconds
#### FAIL 4 seconds
```
2025-05-05T10:43:53.8541720Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-05-05T10:43:53.8542460Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-05-05T10:43:53.8552623Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-05-05T10:43:53.8624598Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-05-05T10:43:53.8625234Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-05-05T10:43:53.8625707Z         
2025-05-05T10:43:53.8625980Z         Error: error creating resource
2025-05-05T10:43:53.8626460Z         
2025-05-05T10:43:53.8626819Z           with mongodbatlas_stream_processor.processor,
2025-05-05T10:43:53.8627617Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-05T10:43:53.8628357Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-05T10:43:53.8628748Z         
2025-05-05T10:43:53.8629733Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-8646542163688777608--CREATED-CREATED/processor
2025-05-05T10:43:53.8630732Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-05T10:43:53.8631492Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2025-05-05T10:43:53.8632267Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-05T10:43:53.8633008Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-05T10:43:53.8633707Z         [processor-created-to-created failed to acquire resources for stream
2025-05-05T10:43:53.8634359Z         processor validation: global resource manager returned no resources],
2025-05-05T10:43:53.8634891Z         BadRequestDetail: 
2025-05-05T10:43:53.8648579Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-05-05T10:43:53.8649256Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-05T10:43:53.8649683Z         
2025-05-05T10:43:53.8650038Z         Error: error deleting resource
2025-05-05T10:43:53.8650361Z         
2025-05-05T10:43:53.8651319Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-8646542163688777608--CREATED-CREATED/connections/sample_stream_solar
2025-05-05T10:43:53.8652139Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-05T10:43:53.8652666Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-05T10:43:53.8653314Z         name test-acc-tf-8646542163688777608--CREATED-CREATED has active processors,
2025-05-05T10:43:53.8653846Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-05T10:43:53.8654385Z         [test-acc-tf-8646542163688777608--CREATED-CREATED], BadRequestDetail: 
2025-05-05T10:43:53.8670554Z    test_working_directory=/tmp/plugintest372612312 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-05-05T10:43:53.8700529Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (4.00s)
```
### 2025-05-06
#### PASS 6 seconds
### 2025-05-07
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 8 seconds
### 2025-05-08
#### PASS 8 seconds
### 2025-05-09
#### PASS 7 seconds
### 2025-05-10
#### PASS 6 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:00.0943124Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-05-11T00:30:00.0943877Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-05-11T00:30:00.0944600Z     resource_test.go:172: Creating execution project: test-acc-tf-p-6052864762303844351
2025-05-11T00:30:00.0945046Z     resource_test.go:172: 
2025-05-11T00:30:00.0945942Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.0947673Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:00.0949518Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:352
2025-05-11T00:30:00.0951416Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:172
2025-05-11T00:30:00.0952569Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.0953442Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.0954140Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-05-11T00:30:00.0955244Z         	Messages:   	Project creation failed: test-acc-tf-p-6052864762303844351, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1039521Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (0.02s)
```
### 2025-05-12
#### PASS 9 seconds
### 2025-05-13
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-14
#### PASS 6 seconds
### 2025-05-15
#### PASS 7 seconds
### 2025-05-16
#### PASS 5 seconds
### 2025-05-17
#### PASS 7 seconds
### 2025-05-18
#### PASS 8 seconds
### 2025-05-19
#### PASS 9 seconds
### 2025-05-20
#### PASS 6 seconds
#### PASS 8 seconds
### 2025-05-21
#### PASS 8 seconds
### 2025-05-22
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 7 seconds
### 2025-05-23
#### FAIL 4 seconds
```
2025-05-23T00:49:48.7510167Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-05-23T00:49:48.7510916Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-05-23T00:49:48.7522985Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-05-23T00:49:48.7569053Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-05-23T00:49:48.7569631Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-05-23T00:49:48.7569995Z         
2025-05-23T00:49:48.7570274Z         Error: error creating resource
2025-05-23T00:49:48.7570541Z         
2025-05-23T00:49:48.7570902Z           with mongodbatlas_stream_processor.processor,
2025-05-23T00:49:48.7571587Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-23T00:49:48.7572226Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-23T00:49:48.7572557Z         
2025-05-23T00:49:48.7573663Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-806468734244217132--CREATED-CREATED/processor
2025-05-23T00:49:48.7575697Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-23T00:49:48.7576403Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2025-05-23T00:49:48.7577101Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-23T00:49:48.7577751Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-23T00:49:48.7578390Z         [processor-created-to-created failed to acquire resources for stream
2025-05-23T00:49:48.7579011Z         processor validation: global resource manager returned no resources],
2025-05-23T00:49:48.7579444Z         BadRequestDetail: 
2025-05-23T00:49:48.7596605Z   
2025-05-23T00:49:48.7651783Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-05-23T00:49:48.7652452Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-23T00:49:48.7652882Z         
2025-05-23T00:49:48.7653165Z         Error: error deleting resource
2025-05-23T00:49:48.7653644Z         
2025-05-23T00:49:48.7654617Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-806468734244217132--CREATED-CREATED/connections/sample_stream_solar
2025-05-23T00:49:48.7655449Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-23T00:49:48.7656000Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-23T00:49:48.7656776Z         name test-acc-tf-806468734244217132--CREATED-CREATED has active processors,
2025-05-23T00:49:48.7657340Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-23T00:49:48.7657892Z         [test-acc-tf-806468734244217132--CREATED-CREATED], BadRequestDetail: 
2025-05-23T00:49:48.7670911Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped test_terraform_path=/home/runner/work/_temp/ff69557a-791e-4b49-8991-15a455b1be89/terraform test_working_directory=/tmp/plugintest7056830 test_step_number=1
2025-05-23T00:49:48.7817693Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (4.25s)
```
### 2025-05-24
#### PASS 8 seconds
### 2025-05-25
#### PASS 6 seconds
### 2025-05-26
#### PASS 10 seconds
### 2025-05-27
#### PASS 6 seconds
#### PASS 7 seconds
### 2025-05-28
#### PASS 8 seconds
#### PASS 6 seconds
### 2025-05-29
#### PASS 6 seconds
#### PASS 8 seconds
### 2025-05-30
#### PASS 6 seconds
#### PASS 9 seconds
### 2025-05-31
#### PASS 6 seconds
### 2025-06-01
#### PASS 8 seconds
#### PASS 6 seconds
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 8 seconds
#### PASS 6 seconds
#### PASS 7 seconds
### 2025-06-02
#### PASS 8 seconds
#### PASS 9 seconds
#### PASS 7 seconds
### 2025-06-03
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-06-04
#### PASS 9 seconds
### 2025-06-05
#### PASS 6 seconds
### 2025-06-06
#### PASS 6 seconds
### 2025-06-07
#### PASS 6 seconds
### 2025-06-08
#### PASS 6 seconds
### 2025-06-09
#### PASS 6 seconds
### 2025-06-10
#### PASS 9 seconds
### 2025-06-11
#### PASS 6 seconds
#### PASS 7 seconds
### 2025-06-12
#### PASS 7 seconds
### 2025-06-13
#### PASS 9 seconds
### 2025-06-14
#### PASS 7 seconds
### 2025-06-15
#### PASS 9 seconds
### 2025-06-16
#### PASS 6 seconds
### 2025-06-17
#### PASS 6 seconds
### 2025-06-18
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-06-19
#### PASS 6 seconds
### 2025-06-20
#### PASS 6 seconds
### 2025-06-21
#### PASS 6 seconds
### 2025-06-22
#### PASS 8 seconds
### 2025-06-23
#### PASS 9 seconds
### 2025-06-24
#### PASS 6 seconds
### 2025-06-25
#### PASS 6 seconds
#### PASS 7 seconds
### 2025-06-26
#### PASS 7 seconds
#### PASS 7 seconds
### 2025-06-27
#### PASS 7 seconds
### 2025-06-28
#### PASS 9 seconds
### 2025-06-29
#### PASS 11 seconds
### 2025-06-30
#### PASS 8 seconds
### 2025-07-01
#### PASS 9 seconds
#### PASS 6 seconds
#### PASS 9 seconds
#### PASS 6 seconds
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 6 seconds
#### PASS 8 seconds
### 2025-07-02
#### PASS 6 seconds
### 2025-07-03
#### PASS 7 seconds
### 2025-07-04
#### PASS 6 seconds
### 2025-07-05
#### PASS 8 seconds
### 2025-07-06
#### FAIL 37 seconds
```
2025-07-06T00:48:43.0085460Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-06T00:48:43.0086189Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-07-06T00:48:43.0096139Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-06T00:48:43.0196321Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-06T00:48:43.0196991Z     resource_test.go:172: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:48:43.0197543Z         
2025-07-06T00:48:43.0197820Z         Error: error during resource delete
2025-07-06T00:48:43.0198087Z         
2025-07-06T00:48:43.0198843Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-6684480946218533807--CREATED-CREATED
2025-07-06T00:48:43.0199667Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-06T00:48:43.0200251Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0200653Z         BadRequestDetail: 
2025-07-06T00:48:43.0204818Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (37.11s)
```
### 2025-07-07
#### PASS 7 seconds
### 2025-07-08
#### PASS 7 seconds
### 2025-07-09
#### PASS 7 seconds