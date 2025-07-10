# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 121) FAIL(x 11)
Success rate: 91.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-13 01:10](#error-2025-04-13t0110380000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-7107278569699693827-STARTED-STOPPED-STOPPED/processor | qa |  | 4.07s
[2025-04-16 00:45](#error-2025-04-16t0045120000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-370528173869205424-STARTED-STOPPED-STOPPED/processor | dev | flaky_500 | 1.06s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-2627383678146954081-STARTED-STOPPED-STOPPED/processor | qa | flaky_500 | 3.02s
[2025-04-16 14:37](#error-2025-04-16t1437270000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-8881488829738089827-STARTED-STOPPED-STOPPED/processor | dev | flaky_500 | 2.02s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-6399735839971617815-STARTED-STOPPED-STOPPED/processor | dev | flaky_500 | 1.06s
[2025-04-24 00:43](#error-2025-04-24t0043210000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-4713082664531073313-STARTED-STOPPED-STOPPED/processor | dev |  | 6.07s
[2025-04-27 00:47](#error-2025-04-27t0047250000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-7871809222707750918-STARTED-STOPPED-STOPPED/processor | qa |  | 5.05s
[2025-05-05 10:43](#error-2025-05-05t1043530000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-5928898598783337120-STARTED-STOPPED-STOPPED/processor | qa |  | 3.07s
[2025-05-11 00:30](#error-2025-05-11t0030000000) |  | qa |  | 0.00s
[2025-05-23 00:49](#error-2025-05-23t0049480000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-445897125689671571-STARTED-STOPPED-STOPPED/processor | dev |  | 4.04s
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-5597241439469417964-STARTED-STOPPED-STOPPED/connections | qa | flaky_500 | 31.05s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 16 seconds
- 2025-04-13

### Error 2025-04-13T01:10:38+00:00
```
2025-04-13T01:10:38.7813265Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-13T01:10:38.7814002Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-04-13T01:10:38.7816174Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-13T01:10:38.7835418Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-13T01:10:38.7836010Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-04-13T01:10:38.7836379Z         
2025-04-13T01:10:38.7836666Z         Error: error creating resource
2025-04-13T01:10:38.7836948Z         
2025-04-13T01:10:38.7837322Z           with mongodbatlas_stream_processor.processor,
2025-04-13T01:10:38.7838039Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-13T01:10:38.7838698Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-13T01:10:38.7839033Z         
2025-04-13T01:10:38.7840111Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-7107278569699693827-STARTED-STOPPED-STOPPED/processor
2025-04-13T01:10:38.7841087Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-13T01:10:38.7841767Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2025-04-13T01:10:38.7842588Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-13T01:10:38.7843248Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-13T01:10:38.7843906Z         [processor-stopped-to-stopped failed to acquire resources for stream
2025-04-13T01:10:38.7844540Z         processor validation: global resource manager returned no resources],
2025-04-13T01:10:38.7844975Z         BadRequestDetail: 
2025-04-13T01:10:38.7858515Z   
2025-04-13T01:10:38.7859119Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-13T01:10:38.7859573Z         
2025-04-13T01:10:38.7859859Z         Error: error deleting resource
2025-04-13T01:10:38.7860291Z         
2025-04-13T01:10:38.7861315Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-7107278569699693827-STARTED-STOPPED-STOPPED/connections/sample_stream_solar
2025-04-13T01:10:38.7862182Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-13T01:10:38.7862730Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-13T01:10:38.7863363Z         name test-acc-tf-7107278569699693827-STARTED-STOPPED-STOPPED has active
2025-04-13T01:10:38.7863960Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-04-13T01:10:38.7864601Z         [test-acc-tf-7107278569699693827-STARTED-STOPPED-STOPPED], BadRequestDetail: 
2025-04-13T01:10:38.7865732Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (4.66s)
```

- 2025-04-14 PASS 20 seconds
- 2025-04-15 PASS 16 seconds
- 2025-04-16
  - FAIL a second

### Error 2025-04-16T00:45:12+00:00
```
2025-04-16T00:45:12.3396150Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-16T00:45:12.3396868Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-04-16T00:45:12.3399465Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-16T00:45:12.3507391Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-16T00:45:12.3507964Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-04-16T00:45:12.3508322Z         
2025-04-16T00:45:12.3508595Z         Error: error creating resource
2025-04-16T00:45:12.3508853Z         
2025-04-16T00:45:12.3509211Z           with mongodbatlas_stream_processor.processor,
2025-04-16T00:45:12.3509894Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T00:45:12.3510529Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T00:45:12.3510851Z         
2025-04-16T00:45:12.3511737Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-370528173869205424-STARTED-STOPPED-STOPPED/processor
2025-04-16T00:45:12.3512645Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T00:45:12.3513296Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2025-04-16T00:45:12.3514130Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T00:45:12.3514729Z         [processor-stopped-to-stopped RBAC: access denied], BadRequestDetail: 
2025-04-16T00:45:12.3523149Z   
2025-04-16T00:45:12.3542482Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-16T00:45:12.3543139Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3543574Z         
2025-04-16T00:45:12.3544053Z         Error: error deleting resource
2025-04-16T00:45:12.3544329Z         
2025-04-16T00:45:12.3545340Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-370528173869205424-STARTED-STOPPED-STOPPED/connections/sample_stream_solar
2025-04-16T00:45:12.3546354Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3546956Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3547367Z         BadRequestDetail: 
2025-04-16T00:45:12.3562507Z    test_working_directory=/tmp/plugintest203054540 test_step_number=1 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-16T00:45:12.3619036Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (1.65s)
```

  - FAIL 3 seconds

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.8457282Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-16T12:49:32.8458131Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-04-16T12:49:32.8461981Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-16T12:49:32.8480036Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-16T12:49:32.8480722Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-04-16T12:49:32.8481101Z         
2025-04-16T12:49:32.8481418Z         Error: error creating resource
2025-04-16T12:49:32.8481757Z         
2025-04-16T12:49:32.8482128Z           with mongodbatlas_stream_processor.processor,
2025-04-16T12:49:32.8482948Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T12:49:32.8483707Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T12:49:32.8484141Z         
2025-04-16T12:49:32.8485154Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-2627383678146954081-STARTED-STOPPED-STOPPED/processor
2025-04-16T12:49:32.8486230Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T12:49:32.8487016Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2025-04-16T12:49:32.8487747Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T12:49:32.8488478Z         [processor-stopped-to-stopped RBAC: access denied], BadRequestDetail: 
2025-04-16T12:49:32.8516504Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-04-16T12:49:32.8613622Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-16T12:49:32.8614295Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8614727Z         
2025-04-16T12:49:32.8615003Z         Error: error deleting resource
2025-04-16T12:49:32.8615276Z         
2025-04-16T12:49:32.8616442Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-2627383678146954081-STARTED-STOPPED-STOPPED/connections/sample_stream_solar
2025-04-16T12:49:32.8617458Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8618063Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8618483Z         BadRequestDetail: 
2025-04-16T12:49:32.8634219Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-04-16T12:49:32.8640229Z    test_terraform_path=/home/runner/work/_temp/c09527d7-de0c-4201-9826-27350f0a89ff/terraform test_working_directory=/tmp/plugintest2096865923
2025-04-16T12:49:32.8686656Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (3.22s)
```

  - FAIL 2 seconds

### Error 2025-04-16T14:37:27+00:00
```
2025-04-16T14:37:27.0436965Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-16T14:37:27.0437834Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-04-16T14:37:27.0441481Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-16T14:37:27.0459522Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-16T14:37:27.0460218Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-04-16T14:37:27.0460689Z         
2025-04-16T14:37:27.0460976Z         Error: error creating resource
2025-04-16T14:37:27.0461487Z         
2025-04-16T14:37:27.0461866Z           with mongodbatlas_stream_processor.processor,
2025-04-16T14:37:27.0462677Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T14:37:27.0463547Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T14:37:27.0463994Z         
2025-04-16T14:37:27.0465011Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-8881488829738089827-STARTED-STOPPED-STOPPED/processor
2025-04-16T14:37:27.0466068Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T14:37:27.0466839Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2025-04-16T14:37:27.0467567Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T14:37:27.0468293Z         [processor-stopped-to-stopped RBAC: access denied], BadRequestDetail: 
2025-04-16T14:37:27.0509496Z   
2025-04-16T14:37:27.0580507Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-16T14:37:27.0581183Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0581645Z         
2025-04-16T14:37:27.0581922Z         Error: error deleting resource
2025-04-16T14:37:27.0582190Z         
2025-04-16T14:37:27.0583224Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-8881488829738089827-STARTED-STOPPED-STOPPED/connections/sample_stream_solar
2025-04-16T14:37:27.0584371Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0584979Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0585403Z         BadRequestDetail: 
2025-04-16T14:37:27.0601668Z   
2025-04-16T14:37:27.0681175Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (2.21s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.9421654Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-17T00:44:44.9422392Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-04-17T00:44:44.9425027Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-17T00:44:44.9512111Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-17T00:44:44.9512686Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-04-17T00:44:44.9513056Z         
2025-04-17T00:44:44.9513332Z         Error: error creating resource
2025-04-17T00:44:44.9513603Z         
2025-04-17T00:44:44.9513966Z           with mongodbatlas_stream_processor.processor,
2025-04-17T00:44:44.9514673Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-17T00:44:44.9515329Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-17T00:44:44.9515658Z         
2025-04-17T00:44:44.9516558Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-6399735839971617815-STARTED-STOPPED-STOPPED/processor
2025-04-17T00:44:44.9517596Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-17T00:44:44.9518448Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2025-04-17T00:44:44.9519080Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-17T00:44:44.9519693Z         [processor-stopped-to-stopped RBAC: access denied], BadRequestDetail: 
2025-04-17T00:44:44.9527568Z    test_step_number=1 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped test_terraform_path=/home/runner/work/_temp/7820bfc0-4292-41a1-b17d-9a8aaba10970/terraform
2025-04-17T00:44:44.9623725Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-17T00:44:44.9624389Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9624824Z         
2025-04-17T00:44:44.9625102Z         Error: error deleting resource
2025-04-17T00:44:44.9625374Z         
2025-04-17T00:44:44.9626403Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-6399735839971617815-STARTED-STOPPED-STOPPED/connections/sample_stream_solar
2025-04-17T00:44:44.9627407Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9628022Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9628630Z         BadRequestDetail: 
2025-04-17T00:44:44.9634993Z   
2025-04-17T00:44:44.9648616Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (1.61s)
```

- 2025-04-18 PASS 20 seconds
- 2025-04-19 PASS 17 seconds
- 2025-04-20 PASS 17 seconds
- 2025-04-21 PASS 20 seconds
- 2025-04-22 PASS 19 seconds
- 2025-04-23 PASS 16 seconds
- 2025-04-24

### Error 2025-04-24T00:43:21+00:00
```
2025-04-24T00:43:21.1163398Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-24T00:43:21.1164150Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-04-24T00:43:21.1166782Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-24T00:43:21.1289420Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-24T00:43:21.1289995Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-04-24T00:43:21.1290382Z         
2025-04-24T00:43:21.1290662Z         Error: error creating resource
2025-04-24T00:43:21.1290938Z         
2025-04-24T00:43:21.1291298Z           with mongodbatlas_stream_processor.processor,
2025-04-24T00:43:21.1291990Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-24T00:43:21.1292907Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-24T00:43:21.1293230Z         
2025-04-24T00:43:21.1294116Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-4713082664531073313-STARTED-STOPPED-STOPPED/processor
2025-04-24T00:43:21.1295019Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-24T00:43:21.1295669Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2025-04-24T00:43:21.1296333Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-24T00:43:21.1296973Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-24T00:43:21.1297618Z         [processor-stopped-to-stopped failed to acquire resources for stream
2025-04-24T00:43:21.1298253Z         processor validation: global resource manager returned no resources],
2025-04-24T00:43:21.1298674Z         BadRequestDetail: 
2025-04-24T00:43:21.1312561Z   
2025-04-24T00:43:21.1313028Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-24T00:43:21.1313453Z         
2025-04-24T00:43:21.1313729Z         Error: error deleting resource
2025-04-24T00:43:21.1313988Z         
2025-04-24T00:43:21.1314988Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-4713082664531073313-STARTED-STOPPED-STOPPED/connections/sample_stream_solar
2025-04-24T00:43:21.1315848Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-24T00:43:21.1316385Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-24T00:43:21.1317009Z         name test-acc-tf-4713082664531073313-STARTED-STOPPED-STOPPED has active
2025-04-24T00:43:21.1317587Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-04-24T00:43:21.1318208Z         [test-acc-tf-4713082664531073313-STARTED-STOPPED-STOPPED], BadRequestDetail: 
2025-04-24T00:43:21.1320566Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (6.68s)
```

- 2025-04-25 PASS 10 seconds
- 2025-04-26 PASS 35 seconds
- 2025-04-27

### Error 2025-04-27T00:47:25+00:00
```
2025-04-27T00:47:25.4411121Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-27T00:47:25.4412224Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-04-27T00:47:25.4414892Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-27T00:47:25.4482075Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-04-27T00:47:25.4482657Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-04-27T00:47:25.4483035Z         
2025-04-27T00:47:25.4483316Z         Error: error creating resource
2025-04-27T00:47:25.4483587Z         
2025-04-27T00:47:25.4483957Z           with mongodbatlas_stream_processor.processor,
2025-04-27T00:47:25.4484647Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-27T00:47:25.4485292Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-27T00:47:25.4485624Z         
2025-04-27T00:47:25.4486524Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-7871809222707750918-STARTED-STOPPED-STOPPED/processor
2025-04-27T00:47:25.4487578Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-27T00:47:25.4488436Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2025-04-27T00:47:25.4489107Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-27T00:47:25.4489748Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-27T00:47:25.4490389Z         [processor-stopped-to-stopped failed to acquire resources for stream
2025-04-27T00:47:25.4491009Z         processor validation: global resource manager returned no resources],
2025-04-27T00:47:25.4491430Z         BadRequestDetail: 
2025-04-27T00:47:25.4504950Z   
2025-04-27T00:47:25.4505418Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-27T00:47:25.4505846Z         
2025-04-27T00:47:25.4506136Z         Error: error deleting resource
2025-04-27T00:47:25.4506408Z         
2025-04-27T00:47:25.4507421Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-7871809222707750918-STARTED-STOPPED-STOPPED/connections/sample_stream_solar
2025-04-27T00:47:25.4508390Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-27T00:47:25.4508923Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-27T00:47:25.4509550Z         name test-acc-tf-7871809222707750918-STARTED-STOPPED-STOPPED has active
2025-04-27T00:47:25.4510158Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-04-27T00:47:25.4510794Z         [test-acc-tf-7871809222707750918-STARTED-STOPPED-STOPPED], BadRequestDetail: 
2025-04-27T00:47:25.4512658Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (5.54s)
```

- 2025-04-28 PASS 11 seconds
- 2025-04-29 PASS 10 seconds
- 2025-04-30
  - PASS 14 seconds
  - PASS 11 seconds
- 2025-05-01
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 11 seconds
  - PASS 15 seconds
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-05-02 PASS 12 seconds
- 2025-05-03 PASS 11 seconds
- 2025-05-04 PASS 11 seconds
- 2025-05-05
  - PASS 10 seconds
  - FAIL 3 seconds

### Error 2025-05-05T10:43:53+00:00
```
2025-05-05T10:43:53.8550779Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-05-05T10:43:53.8551505Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-05-05T10:43:53.8554094Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-05-05T10:43:53.8572325Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-05-05T10:43:53.8572913Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-05-05T10:43:53.8573276Z         
2025-05-05T10:43:53.8573551Z         Error: error creating resource
2025-05-05T10:43:53.8573820Z         
2025-05-05T10:43:53.8574179Z           with mongodbatlas_stream_processor.processor,
2025-05-05T10:43:53.8574876Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-05T10:43:53.8575514Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-05T10:43:53.8575837Z         
2025-05-05T10:43:53.8576964Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-5928898598783337120-STARTED-STOPPED-STOPPED/processor
2025-05-05T10:43:53.8577885Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-05T10:43:53.8578667Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2025-05-05T10:43:53.8579643Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-05T10:43:53.8580422Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-05T10:43:53.8581160Z         [processor-stopped-to-stopped failed to acquire resources for stream
2025-05-05T10:43:53.8581857Z         processor validation: global resource manager returned no resources],
2025-05-05T10:43:53.8582325Z         BadRequestDetail: 
2025-05-05T10:43:53.8598029Z   
2025-05-05T10:43:53.8598618Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-05T10:43:53.8599050Z         
2025-05-05T10:43:53.8599439Z         Error: error deleting resource
2025-05-05T10:43:53.8599708Z         
2025-05-05T10:43:53.8600934Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-5928898598783337120-STARTED-STOPPED-STOPPED/connections/sample_stream_solar
2025-05-05T10:43:53.8601897Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-05T10:43:53.8602504Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-05T10:43:53.8603199Z         name test-acc-tf-5928898598783337120-STARTED-STOPPED-STOPPED has active
2025-05-05T10:43:53.8603888Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-05T10:43:53.8604628Z         [test-acc-tf-5928898598783337120-STARTED-STOPPED-STOPPED], BadRequestDetail: 
2025-05-05T10:43:53.8624232Z   
2025-05-05T10:43:53.8699886Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (3.74s)
```

- 2025-05-06 PASS 12 seconds
- 2025-05-07
  - PASS 14 seconds
  - PASS 13 seconds
  - PASS 10 seconds
  - PASS 15 seconds
- 2025-05-08 PASS 13 seconds
- 2025-05-09 PASS 12 seconds
- 2025-05-10 PASS 10 seconds
- 2025-05-11

### Error 2025-05-11T00:30:00+00:00
```
2025-05-11T00:30:00.1013639Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-05-11T00:30:00.1015033Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-05-11T00:30:00.1016401Z     resource_test.go:172: Creating execution project: test-acc-tf-p-6070109932128087115
2025-05-11T00:30:00.1017207Z     resource_test.go:172: 
2025-05-11T00:30:00.1018868Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.1022449Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:00.1025961Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:352
2025-05-11T00:30:00.1029714Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:172
2025-05-11T00:30:00.1031175Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.1033096Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1034471Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-05-11T00:30:00.1036874Z         	Messages:   	Project creation failed: test-acc-tf-p-6070109932128087115, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1046013Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (0.02s)
```

- 2025-05-12 PASS 14 seconds
- 2025-05-13
  - PASS 11 seconds
  - PASS 10 seconds
- 2025-05-14 PASS 11 seconds
- 2025-05-15 PASS 11 seconds
- 2025-05-16 PASS 11 seconds
- 2025-05-17 PASS 11 seconds
- 2025-05-18 PASS 14 seconds
- 2025-05-19 PASS 15 seconds
- 2025-05-20
  - PASS 11 seconds
  - PASS 14 seconds
- 2025-05-21 PASS 14 seconds
- 2025-05-22
  - PASS 14 seconds
  - PASS 13 seconds
  - PASS 10 seconds
- 2025-05-23

### Error 2025-05-23T00:49:48+00:00
```
2025-05-23T00:49:48.7520918Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-05-23T00:49:48.7521792Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-05-23T00:49:48.7524183Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-05-23T00:49:48.7596935Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-05-23T00:49:48.7597534Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-05-23T00:49:48.7597914Z         
2025-05-23T00:49:48.7598203Z         Error: error creating resource
2025-05-23T00:49:48.7598475Z         
2025-05-23T00:49:48.7598877Z           with mongodbatlas_stream_processor.processor,
2025-05-23T00:49:48.7599574Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-23T00:49:48.7600357Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-23T00:49:48.7600692Z         
2025-05-23T00:49:48.7601596Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-445897125689671571-STARTED-STOPPED-STOPPED/processor
2025-05-23T00:49:48.7602517Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-23T00:49:48.7603184Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2025-05-23T00:49:48.7604028Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-23T00:49:48.7604676Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-23T00:49:48.7605309Z         [processor-stopped-to-stopped failed to acquire resources for stream
2025-05-23T00:49:48.7605931Z         processor validation: global resource manager returned no resources],
2025-05-23T00:49:48.7606363Z         BadRequestDetail: 
2025-05-23T00:49:48.7631291Z   
2025-05-23T00:49:48.7671961Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-05-23T00:49:48.7672621Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-23T00:49:48.7673059Z         
2025-05-23T00:49:48.7673468Z         Error: error deleting resource
2025-05-23T00:49:48.7673742Z         
2025-05-23T00:49:48.7674745Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-445897125689671571-STARTED-STOPPED-STOPPED/connections/sample_stream_solar
2025-05-23T00:49:48.7675637Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-23T00:49:48.7676186Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-23T00:49:48.7676813Z         name test-acc-tf-445897125689671571-STARTED-STOPPED-STOPPED has active
2025-05-23T00:49:48.7677397Z         processors, and cannot be changed. Reason: Forbidden. Params:
2025-05-23T00:49:48.7678029Z         [test-acc-tf-445897125689671571-STARTED-STOPPED-STOPPED], BadRequestDetail: 
2025-05-23T00:49:48.7695157Z   
2025-05-23T00:49:48.7818318Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (4.44s)
```

- 2025-05-24 PASS 10 seconds
- 2025-05-25 PASS 10 seconds
- 2025-05-26 PASS 16 seconds
- 2025-05-27
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-05-28
  - PASS 14 seconds
  - PASS 10 seconds
- 2025-05-29
  - PASS 11 seconds
  - PASS 14 seconds
- 2025-05-30
  - PASS 10 seconds
  - PASS 13 seconds
- 2025-05-31 PASS 11 seconds
- 2025-06-01
  - PASS 14 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 14 seconds
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-06-02
  - PASS 14 seconds
  - PASS 14 seconds
  - PASS 10 seconds
- 2025-06-03
  - PASS 11 seconds
  - PASS 14 seconds
  - PASS 11 seconds
- 2025-06-04 PASS 14 seconds
- 2025-06-05 PASS 10 seconds
- 2025-06-06 PASS 11 seconds
- 2025-06-07 PASS 10 seconds
- 2025-06-08 PASS 10 seconds
- 2025-06-09 PASS 11 seconds
- 2025-06-10 PASS 14 seconds
- 2025-06-11
  - PASS 10 seconds
  - PASS 13 seconds
- 2025-06-12 PASS 13 seconds
- 2025-06-13 PASS 14 seconds
- 2025-06-14 PASS 13 seconds
- 2025-06-15 PASS 14 seconds
- 2025-06-16 PASS 10 seconds
- 2025-06-17 PASS 10 seconds
- 2025-06-18
  - PASS 14 seconds
  - PASS 14 seconds
- 2025-06-19 PASS 10 seconds
- 2025-06-20 PASS 12 seconds
- 2025-06-21 PASS 11 seconds
- 2025-06-22 PASS 14 seconds
- 2025-06-23 PASS 15 seconds
- 2025-06-24 PASS 10 seconds
- 2025-06-25
  - PASS 11 seconds
  - PASS 11 seconds
- 2025-06-26
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-06-27 PASS 11 seconds
- 2025-06-28 PASS 15 seconds
- 2025-06-29 PASS 16 seconds
- 2025-06-30 PASS 14 seconds
- 2025-07-01
  - PASS 14 seconds
  - PASS 11 seconds
  - PASS 15 seconds
  - PASS 10 seconds
  - PASS 15 seconds
  - PASS 15 seconds
  - PASS 10 seconds
  - PASS 14 seconds
- 2025-07-02 PASS 11 seconds
- 2025-07-03 PASS 12 seconds
- 2025-07-04 PASS 11 seconds
- 2025-07-05 PASS 14 seconds
- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
```
2025-07-06T00:48:43.0094336Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-06T00:48:43.0095043Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-07-06T00:48:43.0097099Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-06T00:48:43.0179546Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-06T00:48:43.0180105Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-07-06T00:48:43.0180452Z         
2025-07-06T00:48:43.0180832Z         Error: error creating resource
2025-07-06T00:48:43.0181102Z         
2025-07-06T00:48:43.0181435Z           with mongodbatlas_stream_connection.sample,
2025-07-06T00:48:43.0182079Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "sample":
2025-07-06T00:48:43.0182680Z           23: 		resource "mongodbatlas_stream_connection" "sample" {
2025-07-06T00:48:43.0182991Z         
2025-07-06T00:48:43.0183858Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-5597241439469417964-STARTED-STOPPED-STOPPED/connections
2025-07-06T00:48:43.0184778Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0185338Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0185719Z         BadRequestDetail: 
2025-07-06T00:48:43.0195774Z    test_terraform_path=/home/runner/work/_temp/571f2434-2bee-44d0-b41d-cfc3e67d82b8/terraform
2025-07-06T00:48:43.0203456Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (31.48s)
```

- 2025-07-07 PASS 11 seconds
- 2025-07-08 PASS 11 seconds
- 2025-07-09 PASS 11 seconds
- 2025-07-10 PASS 15 seconds