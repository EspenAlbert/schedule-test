# stream/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, FAIL(x 5) PASS(x 4)
Success rate: 44.44%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-20T00:45:53.685000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='6 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-20T00:45:53.6854104Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-20T00:45:53.6909100Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-20T00:45:53.6960017Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-20T00:45:53.6960510Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-06-20T00:45:53.6960880Z         
2025-06-20T00:45:53.6961152Z         Error: error creating resource
2025-06-20T00:45:53.6961413Z         
2025-06-20T00:45:53.6961758Z           with mongodbatlas_stream_processor.processor,
2025-06-20T00:45:53.6962440Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-06-20T00:45:53.6963068Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-20T00:45:53.6963386Z         
2025-06-20T00:45:53.6964107Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6854ab42e16f343ef1dd2802/streams/test-acc-tf-63382174542993392/processor
2025-06-20T00:45:53.6965014Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-20T00:45:53.6965656Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-06-20T00:45:53.6966305Z         problem occur: failed to acquire resources for stream processor validation:
2025-06-20T00:45:53.6966935Z         internal error while provisioning resource from global resource manager.
2025-06-20T00:45:53.6967574Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-06-20T00:45:53.6968215Z         resources for stream processor validation: internal error while provisioning
2025-06-20T00:45:53.6968788Z         resource from global resource manager], BadRequestDetail: 
2025-06-20T00:45:53.6980984Z   
2025-06-20T00:45:53.6999367Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-20T00:45:53.7000041Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-20T00:45:53.7000466Z         
2025-06-20T00:45:53.7000732Z         Error: error deleting resource
2025-06-20T00:45:53.7001011Z         
2025-06-20T00:45:53.7001846Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6854ab42e16f343ef1dd2802/streams/test-acc-tf-63382174542993392/connections/sample_stream_solar
2025-06-20T00:45:53.7002590Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-20T00:45:53.7003116Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-20T00:45:53.7003715Z         name test-acc-tf-63382174542993392 has active processors, and cannot be
2025-06-20T00:45:53.7004301Z         changed. Reason: Forbidden. Params: [test-acc-tf-63382174542993392],
2025-06-20T00:45:53.7004809Z         BadRequestDetail: 
2025-06-20T00:45:53.7005133Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (31.52s)
```
### 2025-06-21
#### FAIL 31 seconds
```
2025-06-21T00:43:49.5452275Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-21T00:43:49.5555445Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-21T00:43:49.5602250Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-21T00:43:49.5603159Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-06-21T00:43:49.5603800Z         
2025-06-21T00:43:49.5604288Z         Error: error creating resource
2025-06-21T00:43:49.5604750Z         
2025-06-21T00:43:49.5605384Z           with mongodbatlas_stream_processor.processor,
2025-06-21T00:43:49.5606637Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-06-21T00:43:49.5607789Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-21T00:43:49.5608354Z         
2025-06-21T00:43:49.5609892Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6855fcb7f3e6555d2acb8682/streams/test-acc-tf-8045444155849844481/processor
2025-06-21T00:43:49.5611389Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-21T00:43:49.5612580Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-06-21T00:43:49.5613796Z         problem occur: failed to acquire resources for stream processor validation:
2025-06-21T00:43:49.5614937Z         internal error while provisioning resource from global resource manager.
2025-06-21T00:43:49.5616118Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-06-21T00:43:49.5617324Z         resources for stream processor validation: internal error while provisioning
2025-06-21T00:43:49.5618372Z         resource from global resource manager], BadRequestDetail: 
2025-06-21T00:43:49.5640941Z   
2025-06-21T00:43:49.5641785Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-21T00:43:49.5642547Z         
2025-06-21T00:43:49.5643034Z         Error: error deleting resource
2025-06-21T00:43:49.5643493Z         
2025-06-21T00:43:49.5645096Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6855fcb7f3e6555d2acb8682/streams/test-acc-tf-8045444155849844481/connections/sample_stream_solar
2025-06-21T00:43:49.5646481Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-21T00:43:49.5647465Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-21T00:43:49.5648664Z         name test-acc-tf-8045444155849844481 has active processors, and cannot be
2025-06-21T00:43:49.5649940Z         changed. Reason: Forbidden. Params: [test-acc-tf-8045444155849844481],
2025-06-21T00:43:49.5650684Z         BadRequestDetail: 
2025-06-21T00:43:49.5651268Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (31.53s)
```
### 2025-06-22
#### PASS 6 seconds
```
2025-06-22T00:49:55.8363583Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-22T00:49:55.8475366Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-22T00:49:55.8484031Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (6.91s)
```
### 2025-06-23
#### PASS 7 seconds
```
2025-06-23T00:45:53.8854348Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-23T00:45:53.8951567Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-23T00:45:53.8967618Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (7.25s)
```
### 2025-06-24
#### PASS 5 seconds
```
2025-06-24T00:45:42.3239015Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-24T00:45:42.3294192Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-24T00:45:42.3303434Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.22s)
```
### 2025-06-25
#### PASS 5 seconds
```
2025-06-25T00:45:03.6096189Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-25T00:45:03.6193049Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-25T00:45:03.6209256Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.54s)
```
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-25T06:57:33.830000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='a day ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-25T06:57:33.8300246Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-25T06:57:33.8359033Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-25T06:57:33.8418264Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-25T06:57:33.8418789Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-06-25T06:57:33.8419168Z         
2025-06-25T06:57:33.8419464Z         Error: error creating resource
2025-06-25T06:57:33.8419753Z         
2025-06-25T06:57:33.8420127Z           with mongodbatlas_stream_processor.processor,
2025-06-25T06:57:33.8420823Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-06-25T06:57:33.8421470Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-25T06:57:33.8421823Z         
2025-06-25T06:57:33.8422582Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b9a1d2b85d3299b8af326/streams/test-acc-tf-6015449888909232416/processor
2025-06-25T06:57:33.8423418Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-25T06:57:33.8424085Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-06-25T06:57:33.8424766Z         problem occur: failed to acquire resources for stream processor validation:
2025-06-25T06:57:33.8425415Z         internal error while provisioning resource from global resource manager.
2025-06-25T06:57:33.8426069Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-06-25T06:57:33.8426748Z         resources for stream processor validation: internal error while provisioning
2025-06-25T06:57:33.8427446Z         resource from global resource manager], BadRequestDetail: 
2025-06-25T06:57:33.8434574Z    test_working_directory=/tmp/plugintest2795380182
2025-06-25T06:57:33.8479886Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-25T06:57:33.8480522Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-25T06:57:33.8480980Z         
2025-06-25T06:57:33.8481274Z         Error: error deleting resource
2025-06-25T06:57:33.8481565Z         
2025-06-25T06:57:33.8482461Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b9a1d2b85d3299b8af326/streams/test-acc-tf-6015449888909232416/connections/sample_stream_solar
2025-06-25T06:57:33.8483361Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-25T06:57:33.8483911Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-25T06:57:33.8484559Z         name test-acc-tf-6015449888909232416 has active processors, and cannot be
2025-06-25T06:57:33.8485195Z         changed. Reason: Forbidden. Params: [test-acc-tf-6015449888909232416],
2025-06-25T06:57:33.8485637Z         BadRequestDetail: 
2025-06-25T06:57:33.8486001Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (31.77s)
```
### 2025-06-26
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-26T00:44:37.318000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='2 hours ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-26T00:44:37.3186903Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-26T00:44:37.3246284Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-26T00:44:37.3279748Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-26T00:44:37.3280284Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-06-26T00:44:37.3280668Z         
2025-06-26T00:44:37.3280973Z         Error: error creating resource
2025-06-26T00:44:37.3281271Z         
2025-06-26T00:44:37.3281655Z           with mongodbatlas_stream_processor.processor,
2025-06-26T00:44:37.3282365Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-06-26T00:44:37.3283037Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-26T00:44:37.3283381Z         
2025-06-26T00:44:37.3284146Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685c945b5c10882b9844048e/streams/test-acc-tf-9105217605710992502/processor
2025-06-26T00:44:37.3284990Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-26T00:44:37.3285669Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-06-26T00:44:37.3286371Z         problem occur: failed to acquire resources for stream processor validation:
2025-06-26T00:44:37.3287036Z         internal error while provisioning resource from global resource manager.
2025-06-26T00:44:37.3287715Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-06-26T00:44:37.3288415Z         resources for stream processor validation: internal error while provisioning
2025-06-26T00:44:37.3289026Z         resource from global resource manager], BadRequestDetail: 
2025-06-26T00:44:37.3299448Z   
2025-06-26T00:44:37.3321589Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-26T00:44:37.3322219Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-26T00:44:37.3322794Z         
2025-06-26T00:44:37.3323088Z         Error: error deleting resource
2025-06-26T00:44:37.3323387Z         
2025-06-26T00:44:37.3324276Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685c945b5c10882b9844048e/streams/test-acc-tf-9105217605710992502/connections/sample_stream_solar
2025-06-26T00:44:37.3325050Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-26T00:44:37.3325616Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-26T00:44:37.3326267Z         name test-acc-tf-9105217605710992502 has active processors, and cannot be
2025-06-26T00:44:37.3326903Z         changed. Reason: Forbidden. Params: [test-acc-tf-9105217605710992502],
2025-06-26T00:44:37.3327338Z         BadRequestDetail: 
2025-06-26T00:44:37.3327694Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (31.39s)
```
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-26T04:28:17.639000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='2 hours ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-26T04:28:17.6399786Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-26T04:28:17.6455625Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-26T04:28:17.6513344Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-26T04:28:17.6513851Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-06-26T04:28:17.6514209Z         
2025-06-26T04:28:17.6514486Z         Error: error creating resource
2025-06-26T04:28:17.6514749Z         
2025-06-26T04:28:17.6515096Z           with mongodbatlas_stream_processor.processor,
2025-06-26T04:28:17.6515784Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-06-26T04:28:17.6516418Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-26T04:28:17.6516740Z         
2025-06-26T04:28:17.6517474Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685cc90e0461cf3cf51967fb/streams/test-acc-tf-577576166184652376/processor
2025-06-26T04:28:17.6518284Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-26T04:28:17.6519104Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-06-26T04:28:17.6519767Z         problem occur: failed to acquire resources for stream processor validation:
2025-06-26T04:28:17.6520408Z         internal error while provisioning resource from global resource manager.
2025-06-26T04:28:17.6521046Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-06-26T04:28:17.6521701Z         resources for stream processor validation: internal error while provisioning
2025-06-26T04:28:17.6522287Z         resource from global resource manager], BadRequestDetail: 
2025-06-26T04:28:17.6531864Z    test_name=TestAccStreamProcessor_clusterType
2025-06-26T04:28:17.6571405Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-26T04:28:17.6571985Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-26T04:28:17.6572416Z         
2025-06-26T04:28:17.6572683Z         Error: error deleting resource
2025-06-26T04:28:17.6572943Z         
2025-06-26T04:28:17.6574063Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685cc90e0461cf3cf51967fb/streams/test-acc-tf-577576166184652376/connections/sample_stream_solar
2025-06-26T04:28:17.6574827Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-26T04:28:17.6575357Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-26T04:28:17.6575980Z         name test-acc-tf-577576166184652376 has active processors, and cannot be
2025-06-26T04:28:17.6576581Z         changed. Reason: Forbidden. Params: [test-acc-tf-577576166184652376],
2025-06-26T04:28:17.6576985Z         BadRequestDetail: 
2025-06-26T04:28:17.6577316Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (31.55s)
```