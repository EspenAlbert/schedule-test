# stream/TestAccStreamProcessor_basic Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, FAIL(x 6) PASS(x 3)
Success rate: 33.33%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-20T00:45:53.685000+00:00-TestAccStreamProcessor_basic',confidence=1.0,ts_when='6 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-20T00:45:53.6853505Z === RUN   TestAccStreamProcessor_basic
2025-06-20T00:45:53.6909739Z === CONT  TestAccStreamProcessor_basic
2025-06-20T00:45:53.6941262Z === NAME  TestAccStreamProcessor_basic
2025-06-20T00:45:53.6941715Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-06-20T00:45:53.6942067Z         
2025-06-20T00:45:53.6942335Z         Error: error creating resource
2025-06-20T00:45:53.6942598Z         
2025-06-20T00:45:53.6942945Z           with mongodbatlas_stream_processor.processor,
2025-06-20T00:45:53.6943619Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-06-20T00:45:53.6944252Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-20T00:45:53.6944770Z         
2025-06-20T00:45:53.6945507Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6854ab42e16f343ef1dd2802/streams/test-acc-tf-3207246684481205344/processor
2025-06-20T00:45:53.6946314Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-20T00:45:53.6946949Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-20T00:45:53.6947596Z         failed to acquire resources for stream processor validation: internal error
2025-06-20T00:45:53.6948206Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-20T00:45:53.6948805Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-20T00:45:53.6949440Z         processor validation: internal error while provisioning resource from global
2025-06-20T00:45:53.6949919Z         resource manager], BadRequestDetail: 
2025-06-20T00:45:53.6959769Z   
2025-06-20T00:45:53.6981203Z === NAME  TestAccStreamProcessor_basic
2025-06-20T00:45:53.6981755Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-20T00:45:53.6982210Z         
2025-06-20T00:45:53.6982477Z         Error: error deleting resource
2025-06-20T00:45:53.6982736Z         
2025-06-20T00:45:53.6983585Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6854ab42e16f343ef1dd2802/streams/test-acc-tf-3207246684481205344/connections/sample_stream_solar
2025-06-20T00:45:53.6984334Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-20T00:45:53.6985055Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-20T00:45:53.6985675Z         name test-acc-tf-3207246684481205344 has active processors, and cannot be
2025-06-20T00:45:53.6986273Z         changed. Reason: Forbidden. Params: [test-acc-tf-3207246684481205344],
2025-06-20T00:45:53.6986677Z         BadRequestDetail: 
2025-06-20T00:45:53.6986958Z --- FAIL: TestAccStreamProcessor_basic (31.50s)
```
### 2025-06-21
#### PASS 10 seconds
```
2025-06-21T00:43:49.5451170Z === RUN   TestAccStreamProcessor_basic
2025-06-21T00:43:49.5556570Z === CONT  TestAccStreamProcessor_basic
2025-06-21T00:43:49.5559800Z   diagnostic_detail=
2025-06-21T00:43:49.5564286Z    diagnostic_severity=ERROR tf_req_id=30f82bbb-8359-b4af-0dd3-3ebc4fb882fe tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_rpc=ValidateResourceConfig tf_proto_version=6.9
2025-06-21T00:43:49.5571443Z --- PASS: TestAccStreamProcessor_basic (10.33s)
```
### 2025-06-22
#### PASS 12 seconds
```
2025-06-22T00:49:55.8362986Z === RUN   TestAccStreamProcessor_basic
2025-06-22T00:49:55.8475690Z === CONT  TestAccStreamProcessor_basic
2025-06-22T00:49:55.8476769Z   diagnostic_detail=
2025-06-22T00:49:55.8479583Z    diagnostic_severity=ERROR tf_proto_version=6.9 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_req_id=1498526d-9f2a-2a6b-1ac8-3b7926b75199 tf_resource_type=mongodbatlas_stream_processor diagnostic_summary="Invalid JSON String Value" tf_rpc=ValidateResourceConfig
2025-06-22T00:49:55.8484915Z --- PASS: TestAccStreamProcessor_basic (12.17s)
```
### 2025-06-23
#### FAIL 32 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-23T00:45:53.885000+00:00-TestAccStreamProcessor_basic',confidence=1.0,ts_when='3 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-23T00:45:53.8853281Z === RUN   TestAccStreamProcessor_basic
2025-06-23T00:45:53.8952122Z === CONT  TestAccStreamProcessor_basic
2025-06-23T00:45:53.8996629Z === NAME  TestAccStreamProcessor_basic
2025-06-23T00:45:53.8997411Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-06-23T00:45:53.8998004Z         
2025-06-23T00:45:53.8998466Z         Error: error creating resource
2025-06-23T00:45:53.8998899Z         
2025-06-23T00:45:53.8999519Z           with mongodbatlas_stream_processor.processor,
2025-06-23T00:45:53.9000720Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-06-23T00:45:53.9001825Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-23T00:45:53.9002374Z         
2025-06-23T00:45:53.9003876Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6858a0519c500e6d1cbd646c/streams/test-acc-tf-5177305600228970583/processor
2025-06-23T00:45:53.9005317Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-23T00:45:53.9006458Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-23T00:45:53.9007599Z         failed to acquire resources for stream processor validation: internal error
2025-06-23T00:45:53.9008690Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-23T00:45:53.9009762Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-23T00:45:53.9010896Z         processor validation: internal error while provisioning resource from global
2025-06-23T00:45:53.9011750Z         resource manager], BadRequestDetail: 
2025-06-23T00:45:53.9039189Z    test_working_directory=/tmp/plugintest4240802613 test_name=TestAccStreamProcessor_clusterType
2025-06-23T00:45:53.9076718Z === NAME  TestAccStreamProcessor_basic
2025-06-23T00:45:53.9077690Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-23T00:45:53.9078425Z         
2025-06-23T00:45:53.9078880Z         Error: error deleting resource
2025-06-23T00:45:53.9079317Z         
2025-06-23T00:45:53.9080852Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6858a0519c500e6d1cbd646c/streams/test-acc-tf-5177305600228970583/connections/sample_stream_solar
2025-06-23T00:45:53.9082178Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-23T00:45:53.9083260Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-23T00:45:53.9084387Z         name test-acc-tf-5177305600228970583 has active processors, and cannot be
2025-06-23T00:45:53.9085457Z         changed. Reason: Forbidden. Params: [test-acc-tf-5177305600228970583],
2025-06-23T00:45:53.9086203Z         BadRequestDetail: 
2025-06-23T00:45:53.9086684Z --- FAIL: TestAccStreamProcessor_basic (32.00s)
```
### 2025-06-24
#### PASS 8 seconds
```
2025-06-24T00:45:42.3238156Z === RUN   TestAccStreamProcessor_basic
2025-06-24T00:45:42.3295126Z === CONT  TestAccStreamProcessor_basic
2025-06-24T00:45:42.3296816Z   diagnostic_detail=
2025-06-24T00:45:42.3299504Z    tf_req_id=f7ff0dac-e452-2e57-84d9-fdd6a5995df0 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas diagnostic_severity=ERROR diagnostic_attribute="AttributeName(\"pipeline\")"
2025-06-24T00:45:42.3303808Z --- PASS: TestAccStreamProcessor_basic (8.70s)
```
### 2025-06-25
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-25T00:45:03.609000+00:00-TestAccStreamProcessor_basic',confidence=1.0,ts_when='a day ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-25T00:45:03.6094977Z === RUN   TestAccStreamProcessor_basic
2025-06-25T00:45:03.6193618Z === CONT  TestAccStreamProcessor_basic
2025-06-25T00:45:03.6238649Z === NAME  TestAccStreamProcessor_basic
2025-06-25T00:45:03.6239623Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-06-25T00:45:03.6240231Z         
2025-06-25T00:45:03.6240707Z         Error: error creating resource
2025-06-25T00:45:03.6241153Z         
2025-06-25T00:45:03.6241773Z           with mongodbatlas_stream_processor.processor,
2025-06-25T00:45:03.6242986Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-06-25T00:45:03.6244102Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-25T00:45:03.6244658Z         
2025-06-25T00:45:03.6246144Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b42e3b37149039973cb77/streams/test-acc-tf-1583134071281578418/processor
2025-06-25T00:45:03.6247600Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-25T00:45:03.6248729Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-25T00:45:03.6249897Z         failed to acquire resources for stream processor validation: internal error
2025-06-25T00:45:03.6251001Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-25T00:45:03.6252083Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-25T00:45:03.6253222Z         processor validation: internal error while provisioning resource from global
2025-06-25T00:45:03.6254089Z         resource manager], BadRequestDetail: 
2025-06-25T00:45:03.6274798Z    test_terraform_path=/home/runner/work/_temp/9f38391e-f747-44e3-a1c9-4c871819e1cf/terraform test_name=TestAccStreamProcessor_basic
2025-06-25T00:45:03.6276452Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-25T00:45:03.6277193Z         
2025-06-25T00:45:03.6277655Z         Error: error deleting resource
2025-06-25T00:45:03.6278107Z         
2025-06-25T00:45:03.6279652Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b42e3b37149039973cb77/streams/test-acc-tf-1583134071281578418/connections/sample_stream_solar
2025-06-25T00:45:03.6280990Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-25T00:45:03.6282152Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-25T00:45:03.6283266Z         name test-acc-tf-1583134071281578418 has active processors, and cannot be
2025-06-25T00:45:03.6284345Z         changed. Reason: Forbidden. Params: [test-acc-tf-1583134071281578418],
2025-06-25T00:45:03.6285058Z         BadRequestDetail: 
2025-06-25T00:45:03.6285681Z --- FAIL: TestAccStreamProcessor_basic (31.50s)
```
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-25T06:57:33.829000+00:00-TestAccStreamProcessor_basic',confidence=1.0,ts_when='a day ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-25T06:57:33.8299532Z === RUN   TestAccStreamProcessor_basic
2025-06-25T06:57:33.8359383Z === CONT  TestAccStreamProcessor_basic
2025-06-25T06:57:33.8457701Z === NAME  TestAccStreamProcessor_basic
2025-06-25T06:57:33.8458293Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-06-25T06:57:33.8458668Z         
2025-06-25T06:57:33.8458964Z         Error: error creating resource
2025-06-25T06:57:33.8459245Z         
2025-06-25T06:57:33.8459616Z           with mongodbatlas_stream_processor.processor,
2025-06-25T06:57:33.8460319Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-06-25T06:57:33.8460974Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-25T06:57:33.8461318Z         
2025-06-25T06:57:33.8462077Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b9a1d2b85d3299b8af326/streams/test-acc-tf-8402264185004675183/processor
2025-06-25T06:57:33.8462916Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-25T06:57:33.8463571Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-25T06:57:33.8464244Z         failed to acquire resources for stream processor validation: internal error
2025-06-25T06:57:33.8464887Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-25T06:57:33.8465508Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-25T06:57:33.8466168Z         processor validation: internal error while provisioning resource from global
2025-06-25T06:57:33.8466680Z         resource manager], BadRequestDetail: 
2025-06-25T06:57:33.8479594Z   
2025-06-25T06:57:33.8498981Z === NAME  TestAccStreamProcessor_basic
2025-06-25T06:57:33.8499553Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-25T06:57:33.8500010Z         
2025-06-25T06:57:33.8500301Z         Error: error deleting resource
2025-06-25T06:57:33.8500592Z         
2025-06-25T06:57:33.8501468Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b9a1d2b85d3299b8af326/streams/test-acc-tf-8402264185004675183/connections/sample_stream_solar
2025-06-25T06:57:33.8502254Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-25T06:57:33.8502805Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-25T06:57:33.8503441Z         name test-acc-tf-8402264185004675183 has active processors, and cannot be
2025-06-25T06:57:33.8504187Z         changed. Reason: Forbidden. Params: [test-acc-tf-8402264185004675183],
2025-06-25T06:57:33.8504626Z         BadRequestDetail: 
2025-06-25T06:57:33.8504935Z --- FAIL: TestAccStreamProcessor_basic (31.79s)
```
### 2025-06-26
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-26T00:44:37.318000+00:00-TestAccStreamProcessor_basic',confidence=1.0,ts_when='2 hours ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-26T00:44:37.3186234Z === RUN   TestAccStreamProcessor_basic
2025-06-26T00:44:37.3246984Z === CONT  TestAccStreamProcessor_basic
2025-06-26T00:44:37.3248524Z   diagnostic_detail=
2025-06-26T00:44:37.3251632Z    diagnostic_severity=ERROR diagnostic_attribute="AttributeName(\"pipeline\")" tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_rpc=ValidateResourceConfig tf_resource_type=mongodbatlas_stream_processor
2025-06-26T00:44:37.3299687Z === NAME  TestAccStreamProcessor_basic
2025-06-26T00:44:37.3300175Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-06-26T00:44:37.3300565Z         
2025-06-26T00:44:37.3300863Z         Error: error creating resource
2025-06-26T00:44:37.3301149Z         
2025-06-26T00:44:37.3301532Z           with mongodbatlas_stream_processor.processor,
2025-06-26T00:44:37.3302251Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-06-26T00:44:37.3302911Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-26T00:44:37.3303260Z         
2025-06-26T00:44:37.3304027Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685c945b5c10882b9844048e/streams/test-acc-tf-8975898838440339955/processor
2025-06-26T00:44:37.3304877Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-26T00:44:37.3305562Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-26T00:44:37.3306254Z         failed to acquire resources for stream processor validation: internal error
2025-06-26T00:44:37.3306912Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-26T00:44:37.3307552Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-26T00:44:37.3308234Z         processor validation: internal error while provisioning resource from global
2025-06-26T00:44:37.3308761Z         resource manager], BadRequestDetail: 
2025-06-26T00:44:37.3321175Z    test_name=TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-26T00:44:37.3340527Z === NAME  TestAccStreamProcessor_basic
2025-06-26T00:44:37.3341112Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-26T00:44:37.3341577Z         
2025-06-26T00:44:37.3341873Z         Error: error deleting resource
2025-06-26T00:44:37.3342299Z         
2025-06-26T00:44:37.3343194Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685c945b5c10882b9844048e/streams/test-acc-tf-8975898838440339955/connections/sample_stream_solar
2025-06-26T00:44:37.3343975Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-26T00:44:37.3344534Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-26T00:44:37.3345189Z         name test-acc-tf-8975898838440339955 has active processors, and cannot be
2025-06-26T00:44:37.3345833Z         changed. Reason: Forbidden. Params: [test-acc-tf-8975898838440339955],
2025-06-26T00:44:37.3346264Z         BadRequestDetail: 
2025-06-26T00:44:37.3346577Z --- FAIL: TestAccStreamProcessor_basic (31.40s)
```
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-26T04:28:17.639000+00:00-TestAccStreamProcessor_basic',confidence=1.0,ts_when='2 hours ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-26T04:28:17.6399137Z === RUN   TestAccStreamProcessor_basic
2025-06-26T04:28:17.6456588Z === CONT  TestAccStreamProcessor_basic
2025-06-26T04:28:17.6459251Z   diagnostic_detail=
2025-06-26T04:28:17.6461429Z    diagnostic_summary="Invalid JSON String Value" diagnostic_attribute="AttributeName(\"pipeline\")"
2025-06-26T04:28:17.6494257Z === NAME  TestAccStreamProcessor_basic
2025-06-26T04:28:17.6494721Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-06-26T04:28:17.6495074Z         
2025-06-26T04:28:17.6495350Z         Error: error creating resource
2025-06-26T04:28:17.6495614Z         
2025-06-26T04:28:17.6495964Z           with mongodbatlas_stream_processor.processor,
2025-06-26T04:28:17.6496644Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-06-26T04:28:17.6497279Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-26T04:28:17.6497609Z         
2025-06-26T04:28:17.6498343Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685cc90e0461cf3cf51967fb/streams/test-acc-tf-8661527369882070672/processor
2025-06-26T04:28:17.6499389Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-26T04:28:17.6500037Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-26T04:28:17.6500686Z         failed to acquire resources for stream processor validation: internal error
2025-06-26T04:28:17.6501302Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-26T04:28:17.6501916Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-26T04:28:17.6502563Z         processor validation: internal error while provisioning resource from global
2025-06-26T04:28:17.6503051Z         resource manager], BadRequestDetail: 
2025-06-26T04:28:17.6513095Z   
2025-06-26T04:28:17.6589994Z === NAME  TestAccStreamProcessor_basic
2025-06-26T04:28:17.6590550Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-26T04:28:17.6590973Z         
2025-06-26T04:28:17.6591240Z         Error: error deleting resource
2025-06-26T04:28:17.6591505Z         
2025-06-26T04:28:17.6592360Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685cc90e0461cf3cf51967fb/streams/test-acc-tf-8661527369882070672/connections/sample_stream_solar
2025-06-26T04:28:17.6593115Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-26T04:28:17.6593645Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-26T04:28:17.6594270Z         name test-acc-tf-8661527369882070672 has active processors, and cannot be
2025-06-26T04:28:17.6594881Z         changed. Reason: Forbidden. Params: [test-acc-tf-8661527369882070672],
2025-06-26T04:28:17.6595297Z         BadRequestDetail: 
2025-06-26T04:28:17.6595582Z --- FAIL: TestAccStreamProcessor_basic (31.57s)
```