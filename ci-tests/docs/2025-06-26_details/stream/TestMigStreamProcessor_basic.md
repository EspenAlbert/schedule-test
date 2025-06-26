# stream/TestMigStreamProcessor_basic Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, FAIL(x 8) PASS
Success rate: 11.11%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### FAIL 35 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-20T00:45:53.685000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='6 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-20T00:45:53.6852217Z === RUN   TestMigStreamProcessor_basic
2025-06-20T00:45:53.6852762Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-5431685051428555532
2025-06-20T00:45:53.6908464Z === CONT  TestMigStreamProcessor_basic
2025-06-20T00:45:53.7071633Z === NAME  TestMigStreamProcessor_basic
2025-06-20T00:45:53.7072133Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-20T00:45:53.7072518Z         
2025-06-20T00:45:53.7072780Z         Error: error creating resource
2025-06-20T00:45:53.7073034Z         
2025-06-20T00:45:53.7073385Z           with mongodbatlas_stream_processor.processor,
2025-06-20T00:45:53.7074057Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-20T00:45:53.7074911Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-20T00:45:53.7075232Z         
2025-06-20T00:45:53.7075968Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6854ab42e16f343ef1dd2802/streams/test-acc-tf-864993119731821105/processor
2025-06-20T00:45:53.7076776Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-20T00:45:53.7077414Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-20T00:45:53.7078059Z         failed to acquire resources for stream processor validation: internal error
2025-06-20T00:45:53.7078679Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-20T00:45:53.7079276Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-20T00:45:53.7079917Z         processor validation: internal error while provisioning resource from global
2025-06-20T00:45:53.7080401Z         resource manager], BadRequestDetail: 
2025-06-20T00:45:53.7086645Z    test_name=TestMigStreamProcessor_basic test_terraform_path=/home/runner/work/_temp/dfee7dd1-740b-4dba-9b6f-e85d2699f7a8/terraform test_step_number=1 test_working_directory=/tmp/plugintest835926078
2025-06-20T00:45:53.7087702Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-20T00:45:53.7088122Z         
2025-06-20T00:45:53.7088391Z         Error: error deleting resource
2025-06-20T00:45:53.7088649Z         
2025-06-20T00:45:53.7089499Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6854ab42e16f343ef1dd2802/streams/test-acc-tf-864993119731821105/connections/sample_stream_solar
2025-06-20T00:45:53.7090387Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-20T00:45:53.7090909Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-20T00:45:53.7091518Z         name test-acc-tf-864993119731821105 has active processors, and cannot be
2025-06-20T00:45:53.7092105Z         changed. Reason: Forbidden. Params: [test-acc-tf-864993119731821105],
2025-06-20T00:45:53.7092510Z         BadRequestDetail: 
2025-06-20T00:45:53.7092786Z --- FAIL: TestMigStreamProcessor_basic (35.06s)
```
### 2025-06-21
#### FAIL 34 seconds
```
2025-06-21T00:43:49.5448922Z === RUN   TestMigStreamProcessor_basic
2025-06-21T00:43:49.5449899Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-8183314173918931299
2025-06-21T00:43:49.5553755Z === CONT  TestMigStreamProcessor_basic
2025-06-21T00:43:49.5770498Z === NAME  TestMigStreamProcessor_basic
2025-06-21T00:43:49.5771408Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-21T00:43:49.5772100Z         
2025-06-21T00:43:49.5772574Z         Error: error creating resource
2025-06-21T00:43:49.5773023Z         
2025-06-21T00:43:49.5773645Z           with mongodbatlas_stream_processor.processor,
2025-06-21T00:43:49.5774969Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-21T00:43:49.5776124Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-21T00:43:49.5776696Z         
2025-06-21T00:43:49.5778067Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6855fcb7f3e6555d2acb8682/streams/test-acc-tf-9165113720843800340/processor
2025-06-21T00:43:49.5779719Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-21T00:43:49.5780862Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-21T00:43:49.5782013Z         failed to acquire resources for stream processor validation: internal error
2025-06-21T00:43:49.5783206Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-21T00:43:49.5784524Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-21T00:43:49.5785708Z         processor validation: internal error while provisioning resource from global
2025-06-21T00:43:49.5786599Z         resource manager], BadRequestDetail: 
2025-06-21T00:43:49.5798475Z   
2025-06-21T00:43:49.5799791Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-21T00:43:49.5800405Z         
2025-06-21T00:43:49.5800761Z         Error: error deleting resource
2025-06-21T00:43:49.5801382Z         
2025-06-21T00:43:49.5802591Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6855fcb7f3e6555d2acb8682/streams/test-acc-tf-9165113720843800340/connections/sample_stream_solar
2025-06-21T00:43:49.5803554Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-21T00:43:49.5804087Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-21T00:43:49.5804735Z         name test-acc-tf-9165113720843800340 has active processors, and cannot be
2025-06-21T00:43:49.5805358Z         changed. Reason: Forbidden. Params: [test-acc-tf-9165113720843800340],
2025-06-21T00:43:49.5805771Z         BadRequestDetail: 
2025-06-21T00:43:49.5806060Z --- FAIL: TestMigStreamProcessor_basic (34.62s)
```
### 2025-06-22
#### PASS 15 seconds
```
2025-06-22T00:49:55.8361488Z === RUN   TestMigStreamProcessor_basic
2025-06-22T00:49:55.8362232Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-6807763857103577931
2025-06-22T00:49:55.8473655Z === CONT  TestMigStreamProcessor_basic
2025-06-22T00:49:55.8485245Z --- PASS: TestMigStreamProcessor_basic (15.01s)
```
### 2025-06-23
#### FAIL 36 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-23T00:45:53.885000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='3 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-23T00:45:53.8850923Z === RUN   TestMigStreamProcessor_basic
2025-06-23T00:45:53.8851867Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-90438839018420878
2025-06-23T00:45:53.8950479Z === CONT  TestMigStreamProcessor_basic
2025-06-23T00:45:53.9199043Z === NAME  TestMigStreamProcessor_basic
2025-06-23T00:45:53.9199532Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-23T00:45:53.9199910Z         
2025-06-23T00:45:53.9200181Z         Error: error creating resource
2025-06-23T00:45:53.9200436Z         
2025-06-23T00:45:53.9200780Z           with mongodbatlas_stream_processor.processor,
2025-06-23T00:45:53.9201464Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-23T00:45:53.9202095Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-23T00:45:53.9202459Z         
2025-06-23T00:45:53.9203434Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6858a0519c500e6d1cbd646c/streams/test-acc-tf-4317468122803035948/processor
2025-06-23T00:45:53.9204280Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-23T00:45:53.9204940Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-23T00:45:53.9205586Z         failed to acquire resources for stream processor validation: internal error
2025-06-23T00:45:53.9206209Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-23T00:45:53.9206817Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-23T00:45:53.9207453Z         processor validation: internal error while provisioning resource from global
2025-06-23T00:45:53.9207936Z         resource manager], BadRequestDetail: 
2025-06-23T00:45:53.9214769Z   
2025-06-23T00:45:53.9215229Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-23T00:45:53.9215691Z         
2025-06-23T00:45:53.9215980Z         Error: error deleting resource
2025-06-23T00:45:53.9216243Z         
2025-06-23T00:45:53.9217099Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6858a0519c500e6d1cbd646c/streams/test-acc-tf-4317468122803035948/connections/sample_stream_solar
2025-06-23T00:45:53.9217852Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-23T00:45:53.9218379Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-23T00:45:53.9219011Z         name test-acc-tf-4317468122803035948 has active processors, and cannot be
2025-06-23T00:45:53.9219608Z         changed. Reason: Forbidden. Params: [test-acc-tf-4317468122803035948],
2025-06-23T00:45:53.9220170Z         BadRequestDetail: 
2025-06-23T00:45:53.9220449Z --- FAIL: TestMigStreamProcessor_basic (36.17s)
```
### 2025-06-24
#### FAIL 35 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-24T00:45:42.323000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='2 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-24T00:45:42.3236859Z === RUN   TestMigStreamProcessor_basic
2025-06-24T00:45:42.3237411Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-5314753228643912094
2025-06-24T00:45:42.3293560Z === CONT  TestMigStreamProcessor_basic
2025-06-24T00:45:42.3412827Z === NAME  TestMigStreamProcessor_basic
2025-06-24T00:45:42.3413317Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-24T00:45:42.3413714Z         
2025-06-24T00:45:42.3413974Z         Error: error creating resource
2025-06-24T00:45:42.3414227Z         
2025-06-24T00:45:42.3414574Z           with mongodbatlas_stream_processor.processor,
2025-06-24T00:45:42.3415282Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-24T00:45:42.3415909Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-24T00:45:42.3416227Z         
2025-06-24T00:45:42.3416959Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6859f14f22100658cf2667ae/streams/test-acc-tf-9211548211667407875/processor
2025-06-24T00:45:42.3417759Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-24T00:45:42.3418387Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-24T00:45:42.3419211Z         failed to acquire resources for stream processor validation: internal error
2025-06-24T00:45:42.3419841Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-24T00:45:42.3420441Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-24T00:45:42.3421079Z         processor validation: internal error while provisioning resource from global
2025-06-24T00:45:42.3421567Z         resource manager], BadRequestDetail: 
2025-06-24T00:45:42.3427593Z    test_terraform_path=/home/runner/work/_temp/d8e357a3-8987-4c72-938b-5a44839167de/terraform test_working_directory=/tmp/plugintest2689731502
2025-06-24T00:45:42.3428452Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-24T00:45:42.3429039Z         
2025-06-24T00:45:42.3429305Z         Error: error deleting resource
2025-06-24T00:45:42.3429565Z         
2025-06-24T00:45:42.3430422Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6859f14f22100658cf2667ae/streams/test-acc-tf-9211548211667407875/connections/sample_stream_solar
2025-06-24T00:45:42.3431395Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-24T00:45:42.3431925Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-24T00:45:42.3432539Z         name test-acc-tf-9211548211667407875 has active processors, and cannot be
2025-06-24T00:45:42.3433134Z         changed. Reason: Forbidden. Params: [test-acc-tf-9211548211667407875],
2025-06-24T00:45:42.3433533Z         BadRequestDetail: 
2025-06-24T00:45:42.3433810Z --- FAIL: TestMigStreamProcessor_basic (35.74s)
```
### 2025-06-25
#### FAIL 35 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-25T00:45:03.609000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='a day ago')
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
#### FAIL 35 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-25T06:57:33.829000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='a day ago')
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
### 2025-06-26
#### FAIL 34 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-26T00:44:37.318000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='2 hours ago')
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
#### FAIL 34 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-26T04:28:17.639000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='2 hours ago')
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