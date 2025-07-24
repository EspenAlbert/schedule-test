# stream/streamprocessor/TestMigStreamProcessor_basic Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 27) FAIL(x 14)
Success rate: 65.85%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-25 00:45](#error-2025-06-25t0045030000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 35.08s
[2025-06-25 06:57](#error-2025-06-25t0657330000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 35.02s
[2025-06-26 00:44](#error-2025-06-26t0044370000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 34.08s
[2025-06-26 04:28](#error-2025-06-26t0428170000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 34.05s
[2025-06-27 00:44](#error-2025-06-27t0044490000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 35.03s
[2025-06-30 00:47](#error-2025-06-30t0047320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 36.02s
[2025-07-01 00:44](#error-2025-07-01t0044570000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 37.04s
[2025-07-01 02:13](#error-2025-07-01t0213580000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 35.00s
[2025-07-01 05:13](#error-2025-07-01t0513170000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 34.01s
[2025-07-01 06:44](#error-2025-07-01t0644590000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 37.03s
[2025-07-02 00:46](#error-2025-07-02t0046310000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 34.07s
[2025-07-06 00:48](#error-2025-07-06t0048430000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-2853761433766751037/processor | qa |  | 36.02s
[2025-07-13 00:52](#error-2025-07-13t0052250000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-1578256641712202694/processor | qa |  | 34.06s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c393e823af9166ef91845/streams | qa | flaky_500 | 33.08s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - FAIL 35 seconds

### Error 2025-06-25T00:45:03+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-25T00:45:03.609000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-25T00:45:03.6092764Z === RUN   TestMigStreamProcessor_basic
2025-06-25T00:45:03.6093705Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-4518886405312423504
2025-06-25T00:45:03.6191402Z === CONT  TestMigStreamProcessor_basic
2025-06-25T00:45:03.6402970Z === NAME  TestMigStreamProcessor_basic
2025-06-25T00:45:03.6403851Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-25T00:45:03.6404697Z         
2025-06-25T00:45:03.6405152Z         Error: error creating resource
2025-06-25T00:45:03.6405771Z         
2025-06-25T00:45:03.6406378Z           with mongodbatlas_stream_processor.processor,
2025-06-25T00:45:03.6407589Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-25T00:45:03.6408740Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-25T00:45:03.6409327Z         
2025-06-25T00:45:03.6410691Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b42e3b37149039973cb77/streams/test-acc-tf-6588353664423629438/processor
2025-06-25T00:45:03.6412130Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-25T00:45:03.6413303Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-25T00:45:03.6414551Z         failed to acquire resources for stream processor validation: internal error
2025-06-25T00:45:03.6415902Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-25T00:45:03.6417062Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-25T00:45:03.6418260Z         processor validation: internal error while provisioning resource from global
2025-06-25T00:45:03.6419123Z         resource manager], BadRequestDetail: 
2025-06-25T00:45:03.6428348Z    test_terraform_path=/home/runner/work/_temp/9f38391e-f747-44e3-a1c9-4c871819e1cf/terraform test_working_directory=/tmp/plugintest696560629 test_name=TestMigStreamProcessor_basic test_step_number=1
2025-06-25T00:45:03.6429410Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-25T00:45:03.6429851Z         
2025-06-25T00:45:03.6430129Z         Error: error deleting resource
2025-06-25T00:45:03.6430394Z         
2025-06-25T00:45:03.6431262Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b42e3b37149039973cb77/streams/test-acc-tf-6588353664423629438/connections/sample_stream_solar
2025-06-25T00:45:03.6432028Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-25T00:45:03.6432562Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-25T00:45:03.6433332Z         name test-acc-tf-6588353664423629438 has active processors, and cannot be
2025-06-25T00:45:03.6433951Z         changed. Reason: Forbidden. Params: [test-acc-tf-6588353664423629438],
2025-06-25T00:45:03.6434360Z         BadRequestDetail: 
2025-06-25T00:45:03.6434640Z --- FAIL: TestMigStreamProcessor_basic (35.84s)
```

  - FAIL 35 seconds

### Error 2025-06-25T06:57:33+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-25T06:57:33.829000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-25T06:57:33.8298153Z === RUN   TestMigStreamProcessor_basic
2025-06-25T06:57:33.8298726Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-5447834774598610790
2025-06-25T06:57:33.8358346Z === CONT  TestMigStreamProcessor_basic
2025-06-25T06:57:33.8574035Z === NAME  TestMigStreamProcessor_basic
2025-06-25T06:57:33.8574557Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-25T06:57:33.8574968Z         
2025-06-25T06:57:33.8575264Z         Error: error creating resource
2025-06-25T06:57:33.8575544Z         
2025-06-25T06:57:33.8575923Z           with mongodbatlas_stream_processor.processor,
2025-06-25T06:57:33.8576735Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-25T06:57:33.8577503Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-25T06:57:33.8577856Z         
2025-06-25T06:57:33.8578612Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b9a1d2b85d3299b8af326/streams/test-acc-tf-6161439939316808934/processor
2025-06-25T06:57:33.8579451Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-25T06:57:33.8580242Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-25T06:57:33.8581050Z         failed to acquire resources for stream processor validation: internal error
2025-06-25T06:57:33.8581704Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-25T06:57:33.8582332Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-25T06:57:33.8582989Z         processor validation: internal error while provisioning resource from global
2025-06-25T06:57:33.8583504Z         resource manager], BadRequestDetail: 
2025-06-25T06:57:33.8590613Z   
2025-06-25T06:57:33.8591095Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-25T06:57:33.8591548Z         
2025-06-25T06:57:33.8591845Z         Error: error deleting resource
2025-06-25T06:57:33.8592132Z         
2025-06-25T06:57:33.8593014Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b9a1d2b85d3299b8af326/streams/test-acc-tf-6161439939316808934/connections/sample_stream_solar
2025-06-25T06:57:33.8593804Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-25T06:57:33.8594353Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-25T06:57:33.8595001Z         name test-acc-tf-6161439939316808934 has active processors, and cannot be
2025-06-25T06:57:33.8595637Z         changed. Reason: Forbidden. Params: [test-acc-tf-6161439939316808934],
2025-06-25T06:57:33.8596072Z         BadRequestDetail: 
2025-06-25T06:57:33.8596379Z --- FAIL: TestMigStreamProcessor_basic (35.23s)
```

- 2025-06-26
  - FAIL 34 seconds

### Error 2025-06-26T00:44:37+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-26T00:44:37.318000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='28 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-26T00:44:37.3184820Z === RUN   TestMigStreamProcessor_basic
2025-06-26T00:44:37.3185417Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-8697378541223975880
2025-06-26T00:44:37.3245236Z === CONT  TestMigStreamProcessor_basic
2025-06-26T00:44:37.3416748Z === NAME  TestMigStreamProcessor_basic
2025-06-26T00:44:37.3417282Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-26T00:44:37.3417698Z         
2025-06-26T00:44:37.3417996Z         Error: error creating resource
2025-06-26T00:44:37.3418281Z         
2025-06-26T00:44:37.3418660Z           with mongodbatlas_stream_processor.processor,
2025-06-26T00:44:37.3419602Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-26T00:44:37.3420288Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-26T00:44:37.3420643Z         
2025-06-26T00:44:37.3421412Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685c945b5c10882b9844048e/streams/test-acc-tf-8023050657204974770/processor
2025-06-26T00:44:37.3422393Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-26T00:44:37.3423083Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-26T00:44:37.3423772Z         failed to acquire resources for stream processor validation: internal error
2025-06-26T00:44:37.3424435Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-26T00:44:37.3425079Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-26T00:44:37.3425750Z         processor validation: internal error while provisioning resource from global
2025-06-26T00:44:37.3426271Z         resource manager], BadRequestDetail: 
2025-06-26T00:44:37.3433513Z   
2025-06-26T00:44:37.3434023Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-26T00:44:37.3434472Z         
2025-06-26T00:44:37.3434774Z         Error: error deleting resource
2025-06-26T00:44:37.3435066Z         
2025-06-26T00:44:37.3435959Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685c945b5c10882b9844048e/streams/test-acc-tf-8023050657204974770/connections/sample_stream_solar
2025-06-26T00:44:37.3436740Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-26T00:44:37.3437305Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-26T00:44:37.3437967Z         name test-acc-tf-8023050657204974770 has active processors, and cannot be
2025-06-26T00:44:37.3438606Z         changed. Reason: Forbidden. Params: [test-acc-tf-8023050657204974770],
2025-06-26T00:44:37.3439044Z         BadRequestDetail: 
2025-06-26T00:44:37.3439470Z --- FAIL: TestMigStreamProcessor_basic (34.81s)
```

  - FAIL 34 seconds

### Error 2025-06-26T04:28:17+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-26T04:28:17.639000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='28 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-26T04:28:17.6397602Z === RUN   TestMigStreamProcessor_basic
2025-06-26T04:28:17.6398157Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-7937717320619221107
2025-06-26T04:28:17.6454829Z === CONT  TestMigStreamProcessor_basic
2025-06-26T04:28:17.6663522Z === NAME  TestMigStreamProcessor_basic
2025-06-26T04:28:17.6664017Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-26T04:28:17.6664407Z         
2025-06-26T04:28:17.6664672Z         Error: error creating resource
2025-06-26T04:28:17.6664932Z         
2025-06-26T04:28:17.6665280Z           with mongodbatlas_stream_processor.processor,
2025-06-26T04:28:17.6665967Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-26T04:28:17.6666606Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-26T04:28:17.6666928Z         
2025-06-26T04:28:17.6667669Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685cc90e0461cf3cf51967fb/streams/test-acc-tf-2136540787837248328/processor
2025-06-26T04:28:17.6668606Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-26T04:28:17.6669465Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-26T04:28:17.6670122Z         failed to acquire resources for stream processor validation: internal error
2025-06-26T04:28:17.6670743Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-26T04:28:17.6671348Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-26T04:28:17.6671993Z         processor validation: internal error while provisioning resource from global
2025-06-26T04:28:17.6672490Z         resource manager], BadRequestDetail: 
2025-06-26T04:28:17.6678903Z    test_step_number=1 test_name=TestMigStreamProcessor_basic test_terraform_path=/home/runner/work/_temp/cbc21922-5526-4103-a927-c66450bd2cac/terraform
2025-06-26T04:28:17.6679798Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-26T04:28:17.6680225Z         
2025-06-26T04:28:17.6680496Z         Error: error deleting resource
2025-06-26T04:28:17.6680765Z         
2025-06-26T04:28:17.6681622Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685cc90e0461cf3cf51967fb/streams/test-acc-tf-2136540787837248328/connections/sample_stream_solar
2025-06-26T04:28:17.6682377Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-26T04:28:17.6682910Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-26T04:28:17.6683531Z         name test-acc-tf-2136540787837248328 has active processors, and cannot be
2025-06-26T04:28:17.6684136Z         changed. Reason: Forbidden. Params: [test-acc-tf-2136540787837248328],
2025-06-26T04:28:17.6684554Z         BadRequestDetail: 
2025-06-26T04:28:17.6684841Z --- FAIL: TestMigStreamProcessor_basic (34.45s)
```

- 2025-06-27

### Error 2025-06-27T00:44:49+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-27T00:44:49.421000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='27 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-27T00:44:49.4212406Z === RUN   TestMigStreamProcessor_basic
2025-06-27T00:44:49.4213368Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-8565048369092076750
2025-06-27T00:44:49.4312876Z === CONT  TestMigStreamProcessor_basic
2025-06-27T00:44:49.4448044Z === NAME  TestMigStreamProcessor_basic
2025-06-27T00:44:49.4448703Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-27T00:44:49.4449207Z         
2025-06-27T00:44:49.4449550Z         Error: error creating resource
2025-06-27T00:44:49.4449873Z         
2025-06-27T00:44:49.4450311Z           with mongodbatlas_stream_processor.processor,
2025-06-27T00:44:49.4451246Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-27T00:44:49.4452363Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-27T00:44:49.4452785Z         
2025-06-27T00:44:49.4453636Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685de5f30340bc6723c38751/streams/test-acc-tf-8314696096203313936/processor
2025-06-27T00:44:49.4454572Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-27T00:44:49.4455298Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-27T00:44:49.4456043Z         failed to acquire resources for stream processor validation: internal error
2025-06-27T00:44:49.4456748Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-27T00:44:49.4457434Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-27T00:44:49.4458169Z         processor validation: internal error while provisioning resource from global
2025-06-27T00:44:49.4458723Z         resource manager], BadRequestDetail: 
2025-06-27T00:44:49.4465946Z    test_name=TestMigStreamProcessor_basic test_terraform_path=/home/runner/work/_temp/054a7b3c-31d6-4062-b589-9777787a8d27/terraform test_working_directory=/tmp/plugintest3484025580
2025-06-27T00:44:49.4467108Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-27T00:44:49.4467706Z         
2025-06-27T00:44:49.4468003Z         Error: error deleting resource
2025-06-27T00:44:49.4468292Z         
2025-06-27T00:44:49.4469285Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685de5f30340bc6723c38751/streams/test-acc-tf-8314696096203313936/connections/sample_stream_solar
2025-06-27T00:44:49.4470065Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-27T00:44:49.4470591Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-27T00:44:49.4471216Z         name test-acc-tf-8314696096203313936 has active processors, and cannot be
2025-06-27T00:44:49.4471944Z         changed. Reason: Forbidden. Params: [test-acc-tf-8314696096203313936],
2025-06-27T00:44:49.4472357Z         BadRequestDetail: 
2025-06-27T00:44:49.4472638Z --- FAIL: TestMigStreamProcessor_basic (35.30s)
```

- 2025-06-28 PASS 17 seconds
- 2025-06-29 PASS 13 seconds
- 2025-06-30

### Error 2025-06-30T00:47:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-30T00:47:32.811000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='24 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-30T00:47:32.8115958Z === RUN   TestMigStreamProcessor_basic
2025-06-30T00:47:32.8116906Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-5567460454490017322
2025-06-30T00:47:32.8216603Z === CONT  TestMigStreamProcessor_basic
2025-06-30T00:47:32.8360578Z === NAME  TestMigStreamProcessor_basic
2025-06-30T00:47:32.8361064Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-30T00:47:32.8361441Z         
2025-06-30T00:47:32.8361697Z         Error: error creating resource
2025-06-30T00:47:32.8362064Z         
2025-06-30T00:47:32.8362407Z           with mongodbatlas_stream_processor.processor,
2025-06-30T00:47:32.8363084Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-30T00:47:32.8363700Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-30T00:47:32.8364010Z         
2025-06-30T00:47:32.8364736Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6861dabf0fdc646bf5f3519d/streams/test-acc-tf-8535137150456111191/processor
2025-06-30T00:47:32.8365576Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-30T00:47:32.8366206Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-30T00:47:32.8366842Z         failed to acquire resources for stream processor validation: internal error
2025-06-30T00:47:32.8367452Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-30T00:47:32.8368056Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-30T00:47:32.8368686Z         processor validation: internal error while provisioning resource from global
2025-06-30T00:47:32.8369163Z         resource manager], BadRequestDetail: 
2025-06-30T00:47:32.8375737Z   
2025-06-30T00:47:32.8376364Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-30T00:47:32.8376783Z         
2025-06-30T00:47:32.8377041Z         Error: error deleting resource
2025-06-30T00:47:32.8377301Z         
2025-06-30T00:47:32.8378280Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6861dabf0fdc646bf5f3519d/streams/test-acc-tf-8535137150456111191/connections/sample_stream_solar
2025-06-30T00:47:32.8379034Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-30T00:47:32.8379557Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-30T00:47:32.8380398Z         name test-acc-tf-8535137150456111191 has active processors, and cannot be
2025-06-30T00:47:32.8381120Z         changed. Reason: Forbidden. Params: [test-acc-tf-8535137150456111191],
2025-06-30T00:47:32.8381521Z         BadRequestDetail: 
2025-06-30T00:47:32.8381798Z --- FAIL: TestMigStreamProcessor_basic (36.25s)
```

- 2025-07-01
  - FAIL 37 seconds

### Error 2025-07-01T00:44:57+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T00:44:57.286000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='23 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T00:44:57.2861594Z === RUN   TestMigStreamProcessor_basic
2025-07-01T00:44:57.2862135Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-8567333810696895320
2025-07-01T00:44:57.2918796Z === CONT  TestMigStreamProcessor_basic
2025-07-01T00:44:57.3083310Z === NAME  TestMigStreamProcessor_basic
2025-07-01T00:44:57.3083950Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-01T00:44:57.3084341Z         
2025-07-01T00:44:57.3084608Z         Error: error creating resource
2025-07-01T00:44:57.3084865Z         
2025-07-01T00:44:57.3085216Z           with mongodbatlas_stream_processor.processor,
2025-07-01T00:44:57.3086252Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T00:44:57.3086889Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T00:44:57.3087217Z         
2025-07-01T00:44:57.3087941Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68632c108f2a6336ca1cff2e/streams/test-acc-tf-8181445992454115096/processor
2025-07-01T00:44:57.3088748Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T00:44:57.3089380Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-01T00:44:57.3090033Z         failed to acquire resources for stream processor validation: internal error
2025-07-01T00:44:57.3090650Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-01T00:44:57.3091380Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-01T00:44:57.3092025Z         processor validation: internal error while provisioning resource from global
2025-07-01T00:44:57.3092511Z         resource manager], BadRequestDetail: 
2025-07-01T00:44:57.3098856Z    test_terraform_path=/home/runner/work/_temp/2752f1f8-b6df-45dc-9ccb-b3d51c55216e/terraform test_step_number=1 test_working_directory=/tmp/plugintest3711405940
2025-07-01T00:44:57.3099781Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T00:44:57.3100203Z         
2025-07-01T00:44:57.3100475Z         Error: error deleting resource
2025-07-01T00:44:57.3100735Z         
2025-07-01T00:44:57.3101588Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68632c108f2a6336ca1cff2e/streams/test-acc-tf-8181445992454115096/connections/sample_stream_solar
2025-07-01T00:44:57.3102337Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T00:44:57.3102873Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T00:44:57.3103487Z         name test-acc-tf-8181445992454115096 has active processors, and cannot be
2025-07-01T00:44:57.3104086Z         changed. Reason: Forbidden. Params: [test-acc-tf-8181445992454115096],
2025-07-01T00:44:57.3104496Z         BadRequestDetail: 
2025-07-01T00:44:57.3104777Z --- FAIL: TestMigStreamProcessor_basic (37.42s)
```

  - FAIL 35 seconds

### Error 2025-07-01T02:13:58+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T02:13:58.594000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='23 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T02:13:58.5948410Z === RUN   TestMigStreamProcessor_basic
2025-07-01T02:13:58.5948970Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-3595904091326762576
2025-07-01T02:13:58.6025568Z === CONT  TestMigStreamProcessor_basic
2025-07-01T02:13:58.6238408Z === NAME  TestMigStreamProcessor_basic
2025-07-01T02:13:58.6238898Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-01T02:13:58.6239276Z         
2025-07-01T02:13:58.6239634Z         Error: error creating resource
2025-07-01T02:13:58.6239893Z         
2025-07-01T02:13:58.6240244Z           with mongodbatlas_stream_processor.processor,
2025-07-01T02:13:58.6241032Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T02:13:58.6241665Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T02:13:58.6241984Z         
2025-07-01T02:13:58.6242707Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68634094bc45281a05845205/streams/test-acc-tf-9029449505100471126/processor
2025-07-01T02:13:58.6243498Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T02:13:58.6244133Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-01T02:13:58.6244771Z         failed to acquire resources for stream processor validation: internal error
2025-07-01T02:13:58.6245381Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-01T02:13:58.6246014Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-01T02:13:58.6246643Z         processor validation: internal error while provisioning resource from global
2025-07-01T02:13:58.6247128Z         resource manager], BadRequestDetail: 
2025-07-01T02:13:58.6253856Z   
2025-07-01T02:13:58.6254306Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T02:13:58.6254730Z         
2025-07-01T02:13:58.6254998Z         Error: error deleting resource
2025-07-01T02:13:58.6255257Z         
2025-07-01T02:13:58.6256102Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68634094bc45281a05845205/streams/test-acc-tf-9029449505100471126/connections/sample_stream_solar
2025-07-01T02:13:58.6256851Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T02:13:58.6257379Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T02:13:58.6257997Z         name test-acc-tf-9029449505100471126 has active processors, and cannot be
2025-07-01T02:13:58.6258624Z         changed. Reason: Forbidden. Params: [test-acc-tf-9029449505100471126],
2025-07-01T02:13:58.6259029Z         BadRequestDetail: 
2025-07-01T02:13:58.6259312Z --- FAIL: TestMigStreamProcessor_basic (35.01s)
```

  - PASS 45 seconds
  - FAIL 34 seconds

### Error 2025-07-01T05:13:17+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T05:13:17.852000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='23 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T05:13:17.8528734Z === RUN   TestMigStreamProcessor_basic
2025-07-01T05:13:17.8529279Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-4096053625297528380
2025-07-01T05:13:17.8585789Z === CONT  TestMigStreamProcessor_basic
2025-07-01T05:13:17.8800707Z === NAME  TestMigStreamProcessor_basic
2025-07-01T05:13:17.8801203Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-01T05:13:17.8801585Z         
2025-07-01T05:13:17.8801847Z         Error: error creating resource
2025-07-01T05:13:17.8802106Z         
2025-07-01T05:13:17.8802462Z           with mongodbatlas_stream_processor.processor,
2025-07-01T05:13:17.8803145Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T05:13:17.8803993Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T05:13:17.8804320Z         
2025-07-01T05:13:17.8805171Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68636b0990ed24487dfc008d/streams/test-acc-tf-918777966412026813/processor
2025-07-01T05:13:17.8805977Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T05:13:17.8806608Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-01T05:13:17.8807264Z         failed to acquire resources for stream processor validation: internal error
2025-07-01T05:13:17.8807883Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-01T05:13:17.8808625Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-01T05:13:17.8809266Z         processor validation: internal error while provisioning resource from global
2025-07-01T05:13:17.8809748Z         resource manager], BadRequestDetail: 
2025-07-01T05:13:17.8816238Z    test_working_directory=/tmp/plugintest644287121 test_name=TestMigStreamProcessor_basic
2025-07-01T05:13:17.8816930Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T05:13:17.8817355Z         
2025-07-01T05:13:17.8817627Z         Error: error deleting resource
2025-07-01T05:13:17.8817888Z         
2025-07-01T05:13:17.8818734Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68636b0990ed24487dfc008d/streams/test-acc-tf-918777966412026813/connections/sample_stream_solar
2025-07-01T05:13:17.8819480Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T05:13:17.8820008Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T05:13:17.8820618Z         name test-acc-tf-918777966412026813 has active processors, and cannot be
2025-07-01T05:13:17.8821206Z         changed. Reason: Forbidden. Params: [test-acc-tf-918777966412026813],
2025-07-01T05:13:17.8821611Z         BadRequestDetail: 
2025-07-01T05:13:17.8821895Z --- FAIL: TestMigStreamProcessor_basic (34.12s)
```

  - FAIL 37 seconds

### Error 2025-07-01T06:44:59+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T06:44:59.750000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='23 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T06:44:59.0750506Z === RUN   TestMigStreamProcessor_basic
2025-07-01T06:44:59.0751049Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-7757124428237359818
2025-07-01T06:44:59.0807262Z === CONT  TestMigStreamProcessor_basic
2025-07-01T06:44:59.1013754Z === NAME  TestMigStreamProcessor_basic
2025-07-01T06:44:59.1014243Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-01T06:44:59.1014620Z         
2025-07-01T06:44:59.1014880Z         Error: error creating resource
2025-07-01T06:44:59.1015135Z         
2025-07-01T06:44:59.1015484Z           with mongodbatlas_stream_processor.processor,
2025-07-01T06:44:59.1016150Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T06:44:59.1016769Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T06:44:59.1017087Z         
2025-07-01T06:44:59.1017971Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6863805390ed24487dfca318/streams/test-acc-tf-7041944892660654198/processor
2025-07-01T06:44:59.1018777Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T06:44:59.1019395Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-01T06:44:59.1020038Z         failed to acquire resources for stream processor validation: internal error
2025-07-01T06:44:59.1020647Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-01T06:44:59.1021233Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-01T06:44:59.1022151Z         processor validation: internal error while provisioning resource from global
2025-07-01T06:44:59.1022705Z         resource manager], BadRequestDetail: 
2025-07-01T06:44:59.1028881Z    test_name=TestMigStreamProcessor_basic test_working_directory=/tmp/plugintest3293962262 test_step_number=1 test_terraform_path=/home/runner/work/_temp/53b46d5b-2c10-40a7-a27e-e685bc116af8/terraform
2025-07-01T06:44:59.1029914Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T06:44:59.1030345Z         
2025-07-01T06:44:59.1030612Z         Error: error deleting resource
2025-07-01T06:44:59.1030866Z         
2025-07-01T06:44:59.1031701Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6863805390ed24487dfca318/streams/test-acc-tf-7041944892660654198/connections/sample_stream_solar
2025-07-01T06:44:59.1032769Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T06:44:59.1033426Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T06:44:59.1034147Z         name test-acc-tf-7041944892660654198 has active processors, and cannot be
2025-07-01T06:44:59.1034749Z         changed. Reason: Forbidden. Params: [test-acc-tf-7041944892660654198],
2025-07-01T06:44:59.1035302Z         BadRequestDetail: 
2025-07-01T06:44:59.1035699Z --- FAIL: TestMigStreamProcessor_basic (37.34s)
```

  - PASS 16 seconds
  - PASS 10 seconds
  - PASS 13 seconds
- 2025-07-02

### Error 2025-07-02T00:46:31+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.920000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='22 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-02T00:46:31.9206236Z === RUN   TestMigStreamProcessor_basic
2025-07-02T00:46:31.9207255Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-3752186971444699683
2025-07-02T00:46:31.9330864Z === CONT  TestMigStreamProcessor_basic
2025-07-02T00:46:31.9539974Z === NAME  TestMigStreamProcessor_basic
2025-07-02T00:46:31.9540470Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-02T00:46:31.9540857Z         
2025-07-02T00:46:31.9541121Z         Error: error creating resource
2025-07-02T00:46:31.9541381Z         
2025-07-02T00:46:31.9541859Z           with mongodbatlas_stream_processor.processor,
2025-07-02T00:46:31.9542552Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_stream_processor" "processor":
2025-07-02T00:46:31.9543183Z           37: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-02T00:46:31.9543505Z         
2025-07-02T00:46:31.9544241Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-1937701611748670836/processor
2025-07-02T00:46:31.9545057Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-02T00:46:31.9545834Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-02T00:46:31.9546491Z         failed to acquire resources for stream processor validation: internal error
2025-07-02T00:46:31.9547115Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-02T00:46:31.9547723Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-02T00:46:31.9548365Z         processor validation: internal error while provisioning resource from global
2025-07-02T00:46:31.9548855Z         resource manager], BadRequestDetail: 
2025-07-02T00:46:31.9555115Z    test_name=TestMigStreamProcessor_basic test_terraform_path=/home/runner/work/_temp/562e13ef-6059-4fe1-8ce4-2da40aa0a837/terraform test_working_directory=/tmp/plugintest2168144767
2025-07-02T00:46:31.9556132Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-02T00:46:31.9556560Z         
2025-07-02T00:46:31.9556824Z         Error: error deleting resource
2025-07-02T00:46:31.9557085Z         
2025-07-02T00:46:31.9557951Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-1937701611748670836/connections/sample_stream_solar
2025-07-02T00:46:31.9558901Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-02T00:46:31.9559529Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-02T00:46:31.9560436Z         name test-acc-tf-1937701611748670836 has active processors, and cannot be
2025-07-02T00:46:31.9561179Z         changed. Reason: Forbidden. Params: [test-acc-tf-1937701611748670836],
2025-07-02T00:46:31.9561891Z         BadRequestDetail: 
2025-07-02T00:46:31.9562278Z --- FAIL: TestMigStreamProcessor_basic (34.66s)
```

- 2025-07-03 PASS 12 seconds
- 2025-07-04 PASS 24 seconds
- 2025-07-05 PASS 14 seconds
- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
```
2025-07-06T00:48:43.0076571Z === RUN   TestMigStreamProcessor_basic
2025-07-06T00:48:43.0077107Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-7477380993420125797
2025-07-06T00:48:43.0301842Z === CONT  TestMigStreamProcessor_basic
2025-07-06T00:48:43.0385169Z === NAME  TestMigStreamProcessor_basic
2025-07-06T00:48:43.0385662Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0386044Z         
2025-07-06T00:48:43.0386302Z         Error: error creating resource
2025-07-06T00:48:43.0386558Z         
2025-07-06T00:48:43.0386900Z           with mongodbatlas_stream_processor.processor,
2025-07-06T00:48:43.0387685Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_stream_processor" "processor":
2025-07-06T00:48:43.0388306Z           37: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-06T00:48:43.0388624Z         
2025-07-06T00:48:43.0389339Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-2853761433766751037/processor
2025-07-06T00:48:43.0390134Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-06T00:48:43.0390765Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-06T00:48:43.0391396Z         failed to acquire resources for stream processor validation: internal error
2025-07-06T00:48:43.0392002Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-06T00:48:43.0392605Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-06T00:48:43.0393249Z         processor validation: internal error while provisioning resource from global
2025-07-06T00:48:43.0393850Z         resource manager], BadRequestDetail: 
2025-07-06T00:48:43.0400166Z    test_name=TestMigStreamProcessor_basic test_terraform_path=/home/runner/work/_temp/571f2434-2bee-44d0-b41d-cfc3e67d82b8/terraform
2025-07-06T00:48:43.0400989Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:48:43.0401540Z         
2025-07-06T00:48:43.0401809Z         Error: error deleting resource
2025-07-06T00:48:43.0402071Z         
2025-07-06T00:48:43.0402916Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-2853761433766751037/connections/sample_stream_solar
2025-07-06T00:48:43.0403672Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-06T00:48:43.0404202Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-06T00:48:43.0404810Z         name test-acc-tf-2853761433766751037 has active processors, and cannot be
2025-07-06T00:48:43.0405409Z         changed. Reason: Forbidden. Params: [test-acc-tf-2853761433766751037],
2025-07-06T00:48:43.0405812Z         BadRequestDetail: 
2025-07-06T00:48:43.0406089Z --- FAIL: TestMigStreamProcessor_basic (36.16s)
```

- 2025-07-07 PASS 11 seconds
- 2025-07-08 PASS 11 seconds
- 2025-07-09 PASS 14 seconds
- 2025-07-10
  - PASS 32 seconds
  - PASS 35 seconds
- 2025-07-11 PASS 13 seconds
- 2025-07-12 PASS 21 seconds
- 2025-07-13

### Error 2025-07-13T00:52:25+00:00
```
2025-07-13T00:52:25.1925438Z === RUN   TestMigStreamProcessor_basic
2025-07-13T00:52:25.1926606Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-2878050819983717175
2025-07-13T00:52:25.1993520Z === CONT  TestMigStreamProcessor_basic
2025-07-13T00:52:25.2165804Z === NAME  TestMigStreamProcessor_basic
2025-07-13T00:52:25.2166306Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-13T00:52:25.2166696Z         
2025-07-13T00:52:25.2166966Z         Error: error creating resource
2025-07-13T00:52:25.2167226Z         
2025-07-13T00:52:25.2167590Z           with mongodbatlas_stream_processor.processor,
2025-07-13T00:52:25.2168450Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_stream_processor" "processor":
2025-07-13T00:52:25.2169100Z           37: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-13T00:52:25.2169423Z         
2025-07-13T00:52:25.2170174Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-1578256641712202694/processor
2025-07-13T00:52:25.2171183Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-13T00:52:25.2171874Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-13T00:52:25.2172540Z         failed to acquire resources for stream processor validation: internal error
2025-07-13T00:52:25.2173168Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-13T00:52:25.2173777Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-13T00:52:25.2174427Z         processor validation: internal error while provisioning resource from global
2025-07-13T00:52:25.2174930Z         resource manager], BadRequestDetail: 
2025-07-13T00:52:25.2181437Z    test_terraform_path=/home/runner/work/_temp/2b3946cc-f842-4080-aa31-05bfa9ec016b/terraform
2025-07-13T00:52:25.2182145Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-13T00:52:25.2182573Z         
2025-07-13T00:52:25.2182845Z         Error: error deleting resource
2025-07-13T00:52:25.2183111Z         
2025-07-13T00:52:25.2183973Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-1578256641712202694/connections/sample_stream_solar
2025-07-13T00:52:25.2184725Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-13T00:52:25.2185295Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-13T00:52:25.2186092Z         name test-acc-tf-1578256641712202694 has active processors, and cannot be
2025-07-13T00:52:25.2186708Z         changed. Reason: Forbidden. Params: [test-acc-tf-1578256641712202694],
2025-07-13T00:52:25.2187117Z         BadRequestDetail: 
2025-07-13T00:52:25.2187403Z --- FAIL: TestMigStreamProcessor_basic (34.65s)
```

- 2025-07-14 PASS 11 seconds
- 2025-07-15 PASS 11 seconds
- 2025-07-16 PASS 13 seconds
- 2025-07-17 PASS 9 seconds
- 2025-07-18 PASS 12 seconds
- 2025-07-19 PASS 10 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.6957509Z === RUN   TestMigStreamProcessor_basic
2025-07-20T00:53:03.6958055Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-4466811167949558853
2025-07-20T00:53:03.6958789Z     resource_migration_test.go:11: Creating execution stream instance: test-acc-tf-s-9049831376135069608
2025-07-20T00:53:03.6959467Z     resource_migration_test.go:11: 
2025-07-20T00:53:03.6961229Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:104
2025-07-20T00:53:03.6963411Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:154
2025-07-20T00:53:03.6965212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:49
2025-07-20T00:53:03.6967324Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_migration_test.go:11
2025-07-20T00:53:03.6968120Z         	Error:      	Received unexpected error:
2025-07-20T00:53:03.6970185Z         	            	https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-20T00:53:03.6972469Z         	Test:       	TestMigStreamProcessor_basic
2025-07-20T00:53:03.6976215Z         	Messages:   	Stream instance creation failed: test-acc-tf-s-9049831376135069608, err: https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-20T00:53:03.6978196Z --- FAIL: TestMigStreamProcessor_basic (33.82s)
```

- 2025-07-21 PASS 13 seconds
- 2025-07-22 PASS 11 seconds
- 2025-07-23
  - PASS 10 seconds
  - PASS 12 seconds
- 2025-07-24 PASS 11 seconds