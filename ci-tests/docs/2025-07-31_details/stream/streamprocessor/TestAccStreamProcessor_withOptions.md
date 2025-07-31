# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 33 TestRuns in dev, qa from 2025-07-01 to 2025-07-31 from master branch: 1 unique tests, PASS(x 26) FAIL(x 7)
Success rate: 78.79%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-02 00:46](#error-2025-07-02t0046310000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 634.01s
[2025-07-06 00:48](#error-2025-07-06t0048430000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-5437463184009355335/processor | qa |  | 634.10s
[2025-07-10 00:43](#error-2025-07-10t0043190000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 556.06s
[2025-07-11 02:31](#error-2025-07-11t0231570000) |  | dev | timeout | 3600.06s
[2025-07-13 00:52](#error-2025-07-13t0052250000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-4613923077337729932/processor | qa | flaky_500 | 834.10s
[2025-07-14 04:02](#error-2025-07-14t0402140000) |  | dev | timeout | 3600.06s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/connections | qa |  | 593.00s

## Timeline
- 2025-07-01 PASS 8 minutes
- 2025-07-02

### Error 2025-07-02T00:46:31+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.921000+00:00-TestAccStreamProcessor_withOptions',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-02T00:46:31.9210930Z === RUN   TestAccStreamProcessor_withOptions
2025-07-02T00:46:31.9212414Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-6681606862726743189
2025-07-02T00:46:31.9213254Z 2025/07/02 00:28:55 [DEBUG] Waiting for state to become: [IDLE]
2025-07-02T00:46:31.9213921Z 2025/07/02 00:31:55 [TRACE] Waiting 1m0s before next try
2025-07-02T00:46:31.9214513Z 2025/07/02 00:32:55 [TRACE] Waiting 10s before next try
2025-07-02T00:46:31.9215092Z 2025/07/02 00:33:05 [TRACE] Waiting 1m0s before next try
2025-07-02T00:46:31.9215685Z 2025/07/02 00:34:06 [TRACE] Waiting 10s before next try
2025-07-02T00:46:31.9216253Z 2025/07/02 00:34:16 [TRACE] Waiting 1m0s before next try
2025-07-02T00:46:31.9216824Z 2025/07/02 00:35:16 [TRACE] Waiting 10s before next try
2025-07-02T00:46:31.9217406Z 2025/07/02 00:35:26 [TRACE] Waiting 1m0s before next try
2025-07-02T00:46:31.9218008Z 2025/07/02 00:36:26 [TRACE] Waiting 10s before next try
2025-07-02T00:46:31.9218609Z 2025/07/02 00:36:36 [TRACE] Waiting 1m0s before next try
2025-07-02T00:46:31.9219220Z 2025/07/02 00:37:36 [TRACE] Waiting 10s before next try
2025-07-02T00:46:31.9219856Z 2025/07/02 00:37:46 [TRACE] Waiting 1m0s before next try
2025-07-02T00:46:31.9220550Z 2025/07/02 00:38:47 [TRACE] Waiting 10s before next try
2025-07-02T00:46:31.9331172Z === CONT  TestAccStreamProcessor_withOptions
2025-07-02T00:46:31.9489047Z === NAME  TestAccStreamProcessor_withOptions
2025-07-02T00:46:31.9489517Z     resource_test.go:102: Step 1/2 error: Error running apply: exit status 1
2025-07-02T00:46:31.9489873Z         
2025-07-02T00:46:31.9490136Z         Error: error creating resource
2025-07-02T00:46:31.9490398Z         
2025-07-02T00:46:31.9490749Z           with mongodbatlas_stream_processor.processor,
2025-07-02T00:46:31.9491429Z           on terraform_plugin_test.tf line 60, in resource "mongodbatlas_stream_processor" "processor":
2025-07-02T00:46:31.9492348Z           60: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-02T00:46:31.9492680Z         
2025-07-02T00:46:31.9493423Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-1409803510237471698/processor
2025-07-02T00:46:31.9494237Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-02T00:46:31.9494875Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-02T00:46:31.9495539Z         failed to acquire resources for stream processor validation: internal error
2025-07-02T00:46:31.9496159Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-02T00:46:31.9496761Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-02T00:46:31.9497407Z         processor validation: internal error while provisioning resource from global
2025-07-02T00:46:31.9497896Z         resource manager], BadRequestDetail: 
2025-07-02T00:46:31.9519707Z   
2025-07-02T00:46:31.9520167Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-02T00:46:31.9520598Z         
2025-07-02T00:46:31.9520863Z         Error: error deleting resource
2025-07-02T00:46:31.9521123Z         
2025-07-02T00:46:31.9522080Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-1409803510237471698/connections/KafkaConnectionDest
2025-07-02T00:46:31.9522962Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-02T00:46:31.9523502Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-02T00:46:31.9524124Z         name test-acc-tf-1409803510237471698 has active processors, and cannot be
2025-07-02T00:46:31.9524734Z         changed. Reason: Forbidden. Params: [test-acc-tf-1409803510237471698],
2025-07-02T00:46:31.9525139Z         BadRequestDetail: 
2025-07-02T00:46:31.9525376Z         
2025-07-02T00:46:31.9525643Z         Error: error deleting resource
2025-07-02T00:46:31.9525905Z         
2025-07-02T00:46:31.9526769Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-1409803510237471698/connections/ClusterConnectionSrc
2025-07-02T00:46:31.9527537Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-02T00:46:31.9528064Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-02T00:46:31.9528680Z         name test-acc-tf-1409803510237471698 has active processors, and cannot be
2025-07-02T00:46:31.9529274Z         changed. Reason: Forbidden. Params: [test-acc-tf-1409803510237471698],
2025-07-02T00:46:31.9529681Z         BadRequestDetail: 
2025-07-02T00:46:31.9529987Z --- FAIL: TestAccStreamProcessor_withOptions (634.10s)
```

- 2025-07-03 PASS 10 minutes
- 2025-07-04 PASS 7 minutes
- 2025-07-05 PASS 8 minutes
- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
```
2025-07-06T00:48:43.0079374Z === RUN   TestAccStreamProcessor_withOptions
2025-07-06T00:48:43.0079867Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-442322529755478697
2025-07-06T00:48:43.0080316Z 2025/07/06 00:32:14 [DEBUG] Waiting for state to become: [IDLE]
2025-07-06T00:48:43.0080687Z 2025/07/06 00:35:14 [TRACE] Waiting 1m0s before next try
2025-07-06T00:48:43.0081045Z 2025/07/06 00:36:14 [TRACE] Waiting 10s before next try
2025-07-06T00:48:43.0081390Z 2025/07/06 00:36:24 [TRACE] Waiting 1m0s before next try
2025-07-06T00:48:43.0081725Z 2025/07/06 00:37:25 [TRACE] Waiting 10s before next try
2025-07-06T00:48:43.0082059Z 2025/07/06 00:37:35 [TRACE] Waiting 1m0s before next try
2025-07-06T00:48:43.0082391Z 2025/07/06 00:38:35 [TRACE] Waiting 10s before next try
2025-07-06T00:48:43.0082727Z 2025/07/06 00:38:45 [TRACE] Waiting 1m0s before next try
2025-07-06T00:48:43.0083053Z 2025/07/06 00:39:45 [TRACE] Waiting 10s before next try
2025-07-06T00:48:43.0083390Z 2025/07/06 00:39:55 [TRACE] Waiting 1m0s before next try
2025-07-06T00:48:43.0083715Z 2025/07/06 00:40:56 [TRACE] Waiting 10s before next try
2025-07-06T00:48:43.0084041Z 2025/07/06 00:41:06 [TRACE] Waiting 1m0s before next try
2025-07-06T00:48:43.0084366Z 2025/07/06 00:42:06 [TRACE] Waiting 10s before next try
2025-07-06T00:48:43.0302143Z === CONT  TestAccStreamProcessor_withOptions
2025-07-06T00:48:43.0328580Z === NAME  TestAccStreamProcessor_withOptions
2025-07-06T00:48:43.0329047Z     resource_test.go:102: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0329404Z         
2025-07-06T00:48:43.0329666Z         Error: error creating resource
2025-07-06T00:48:43.0329924Z         
2025-07-06T00:48:43.0330269Z           with mongodbatlas_stream_processor.processor,
2025-07-06T00:48:43.0330944Z           on terraform_plugin_test.tf line 60, in resource "mongodbatlas_stream_processor" "processor":
2025-07-06T00:48:43.0331570Z           60: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-06T00:48:43.0331888Z         
2025-07-06T00:48:43.0332610Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-5437463184009355335/processor
2025-07-06T00:48:43.0333404Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-06T00:48:43.0334033Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-06T00:48:43.0341109Z         failed to acquire resources for stream processor validation: internal error
2025-07-06T00:48:43.0341837Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-06T00:48:43.0342465Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-06T00:48:43.0343123Z         processor validation: internal error while provisioning resource from global
2025-07-06T00:48:43.0343620Z         resource manager], BadRequestDetail: 
2025-07-06T00:48:43.0365184Z   
2025-07-06T00:48:43.0365668Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:48:43.0366101Z         
2025-07-06T00:48:43.0366383Z         Error: error deleting resource
2025-07-06T00:48:43.0366647Z         
2025-07-06T00:48:43.0367815Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-5437463184009355335/connections/ClusterConnectionSrc
2025-07-06T00:48:43.0368596Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-06T00:48:43.0369116Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-06T00:48:43.0369724Z         name test-acc-tf-5437463184009355335 has active processors, and cannot be
2025-07-06T00:48:43.0370316Z         changed. Reason: Forbidden. Params: [test-acc-tf-5437463184009355335],
2025-07-06T00:48:43.0370729Z         BadRequestDetail: 
2025-07-06T00:48:43.0370964Z         
2025-07-06T00:48:43.0371368Z         Error: error deleting resource
2025-07-06T00:48:43.0371639Z         
2025-07-06T00:48:43.0372482Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-5437463184009355335/connections/KafkaConnectionDest
2025-07-06T00:48:43.0373224Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-06T00:48:43.0373738Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-06T00:48:43.0374347Z         name test-acc-tf-5437463184009355335 has active processors, and cannot be
2025-07-06T00:48:43.0374931Z         changed. Reason: Forbidden. Params: [test-acc-tf-5437463184009355335],
2025-07-06T00:48:43.0375328Z         BadRequestDetail: 
2025-07-06T00:48:43.0375628Z --- FAIL: TestAccStreamProcessor_withOptions (634.95s)
```

- 2025-07-07 PASS 10 minutes
- 2025-07-08 PASS 8 minutes
- 2025-07-09 PASS 11 minutes
- 2025-07-10
  - FAIL 9 minutes

### Error 2025-07-10T00:43:19+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-10T00:43:19.374000+00:00-TestAccStreamProcessor_withOptions',confidence=1.0,ts_when='21 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-10T00:43:19.3743742Z === RUN   TestAccStreamProcessor_withOptions
2025-07-10T00:43:19.3744250Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-6592501451131512497
2025-07-10T00:43:19.3744724Z 2025/07/10 00:29:32 [DEBUG] Waiting for state to become: [IDLE]
2025-07-10T00:43:19.3745098Z 2025/07/10 00:32:32 [TRACE] Waiting 1m0s before next try
2025-07-10T00:43:19.3745453Z 2025/07/10 00:33:32 [TRACE] Waiting 10s before next try
2025-07-10T00:43:19.3745813Z 2025/07/10 00:33:43 [TRACE] Waiting 1m0s before next try
2025-07-10T00:43:19.3746160Z 2025/07/10 00:34:43 [TRACE] Waiting 10s before next try
2025-07-10T00:43:19.3746625Z 2025/07/10 00:34:53 [TRACE] Waiting 1m0s before next try
2025-07-10T00:43:19.3746965Z 2025/07/10 00:35:54 [TRACE] Waiting 10s before next try
2025-07-10T00:43:19.3747308Z 2025/07/10 00:36:04 [TRACE] Waiting 1m0s before next try
2025-07-10T00:43:19.3747645Z 2025/07/10 00:37:04 [TRACE] Waiting 10s before next try
2025-07-10T00:43:19.3747985Z 2025/07/10 00:37:15 [TRACE] Waiting 1m0s before next try
2025-07-10T00:43:19.3936646Z === CONT  TestAccStreamProcessor_withOptions
2025-07-10T00:43:19.4008156Z === NAME  TestAccStreamProcessor_withOptions
2025-07-10T00:43:19.4008633Z     resource_test.go:102: Step 1/2 error: Error running apply: exit status 1
2025-07-10T00:43:19.4008991Z         
2025-07-10T00:43:19.4009261Z         Error: error creating resource
2025-07-10T00:43:19.4009528Z         
2025-07-10T00:43:19.4009884Z           with mongodbatlas_stream_processor.processor,
2025-07-10T00:43:19.4010578Z           on terraform_plugin_test.tf line 60, in resource "mongodbatlas_stream_processor" "processor":
2025-07-10T00:43:19.4011226Z           60: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-10T00:43:19.4011549Z         
2025-07-10T00:43:19.4012297Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686f096a964afc762c202930/streams/test-acc-tf-5309798362524485636/processor
2025-07-10T00:43:19.4013119Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-10T00:43:19.4013765Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-10T00:43:19.4014425Z         failed to acquire resources for stream processor validation: internal error
2025-07-10T00:43:19.4015064Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-10T00:43:19.4015686Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-10T00:43:19.4016450Z         processor validation: internal error while provisioning resource from global
2025-07-10T00:43:19.4016946Z         resource manager], BadRequestDetail: 
2025-07-10T00:43:19.4040782Z   
2025-07-10T00:43:19.4041248Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T00:43:19.4041681Z         
2025-07-10T00:43:19.4041980Z         Error: error deleting resource
2025-07-10T00:43:19.4042251Z         
2025-07-10T00:43:19.4043129Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686f096a964afc762c202930/streams/test-acc-tf-5309798362524485636/connections/ClusterConnectionSrc
2025-07-10T00:43:19.4044040Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-10T00:43:19.4044597Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-10T00:43:19.4045261Z         name ClusterConnectionSrc in stream instance test-acc-tf-5309798362524485636
2025-07-10T00:43:19.4045912Z         has active processors, and cannot be changed. Reason: Forbidden. Params:
2025-07-10T00:43:19.4046659Z         [ClusterConnectionSrc test-acc-tf-5309798362524485636], BadRequestDetail: 
2025-07-10T00:43:19.4047052Z         
2025-07-10T00:43:19.4047322Z         Error: error deleting resource
2025-07-10T00:43:19.4047584Z         
2025-07-10T00:43:19.4048462Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686f096a964afc762c202930/streams/test-acc-tf-5309798362524485636/connections/KafkaConnectionDest
2025-07-10T00:43:19.4049225Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-10T00:43:19.4049760Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-10T00:43:19.4050416Z         name KafkaConnectionDest in stream instance test-acc-tf-5309798362524485636
2025-07-10T00:43:19.4051061Z         has active processors, and cannot be changed. Reason: Forbidden. Params:
2025-07-10T00:43:19.4051814Z         [KafkaConnectionDest test-acc-tf-5309798362524485636], BadRequestDetail: 
2025-07-10T00:43:19.4052260Z --- FAIL: TestAccStreamProcessor_withOptions (556.62s)
```

  - PASS 10 minutes
- 2025-07-11

### Error 2025-07-11T02:31:57+00:00
```
2025-07-11T02:31:57.1357690Z === RUN   TestAccStreamProcessor_withOptions
2025-07-11T02:31:57.1358323Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-9057569243170199815
2025-07-11T02:31:57.1358895Z 2025/07/11 00:29:55 [DEBUG] Waiting for state to become: [IDLE]
2025-07-11T02:31:57.1359395Z 2025/07/11 00:32:55 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1360064Z 2025/07/11 00:33:55 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1360477Z 2025/07/11 00:34:06 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1360861Z 2025/07/11 00:35:06 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1361249Z 2025/07/11 00:35:16 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1361774Z 2025/07/11 00:36:16 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1370210Z 2025/07/11 00:36:26 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1370618Z 2025/07/11 00:37:26 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1370984Z 2025/07/11 00:37:37 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1371331Z 2025/07/11 00:38:37 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1371676Z 2025/07/11 00:38:47 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1372036Z 2025/07/11 00:39:47 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1372384Z 2025/07/11 00:39:57 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1372711Z 2025/07/11 00:40:57 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1373037Z 2025/07/11 00:41:08 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1373365Z 2025/07/11 00:42:08 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1373689Z 2025/07/11 00:42:18 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1374099Z 2025/07/11 00:43:18 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1374424Z 2025/07/11 00:43:28 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1374753Z 2025/07/11 00:44:28 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1375081Z 2025/07/11 00:44:39 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1375415Z 2025/07/11 00:45:39 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1375746Z 2025/07/11 00:45:49 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1376078Z 2025/07/11 00:46:49 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1376679Z 2025/07/11 00:46:59 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1377015Z 2025/07/11 00:47:59 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1377347Z 2025/07/11 00:48:10 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1377672Z 2025/07/11 00:49:10 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1377999Z 2025/07/11 00:49:20 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1378326Z 2025/07/11 00:50:20 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1378650Z 2025/07/11 00:50:30 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1378971Z 2025/07/11 00:51:30 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1379295Z 2025/07/11 00:51:40 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1379632Z 2025/07/11 00:52:41 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1380224Z 2025/07/11 00:52:51 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1381137Z 2025/07/11 00:53:51 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1381775Z 2025/07/11 00:54:01 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1382381Z 2025/07/11 00:55:01 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1382756Z 2025/07/11 00:55:11 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1383093Z 2025/07/11 00:56:12 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1383432Z 2025/07/11 00:56:22 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1383763Z 2025/07/11 00:57:22 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1384091Z 2025/07/11 00:57:32 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1384420Z 2025/07/11 00:58:32 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1384748Z 2025/07/11 00:58:42 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1385072Z 2025/07/11 00:59:43 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1385395Z 2025/07/11 00:59:53 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1385747Z 2025/07/11 01:00:53 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1386092Z 2025/07/11 01:01:03 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1386422Z 2025/07/11 01:02:03 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1386755Z 2025/07/11 01:02:13 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1387084Z 2025/07/11 01:03:14 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1387410Z 2025/07/11 01:03:24 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1387736Z 2025/07/11 01:04:24 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1388068Z 2025/07/11 01:04:34 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1388394Z 2025/07/11 01:05:34 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1388720Z 2025/07/11 01:05:44 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1389052Z 2025/07/11 01:06:45 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1389376Z 2025/07/11 01:06:55 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1389707Z 2025/07/11 01:07:55 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1390269Z 2025/07/11 01:08:05 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1390601Z 2025/07/11 01:09:05 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1390928Z 2025/07/11 01:09:15 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1391257Z 2025/07/11 01:10:16 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1391594Z 2025/07/11 01:10:26 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1391924Z 2025/07/11 01:11:26 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1392250Z 2025/07/11 01:11:36 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1392574Z 2025/07/11 01:12:36 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1392905Z 2025/07/11 01:12:46 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1393231Z 2025/07/11 01:13:47 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1393560Z 2025/07/11 01:13:57 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1393910Z 2025/07/11 01:14:57 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1394673Z 2025/07/11 01:15:07 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1395075Z 2025/07/11 01:16:07 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1395428Z 2025/07/11 01:16:17 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1395771Z 2025/07/11 01:17:18 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1396101Z 2025/07/11 01:17:28 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1396427Z 2025/07/11 01:18:28 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1396759Z 2025/07/11 01:18:38 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1397086Z 2025/07/11 01:19:38 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1397411Z 2025/07/11 01:19:48 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1397733Z 2025/07/11 01:20:49 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1398066Z 2025/07/11 01:20:59 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1398531Z 2025/07/11 01:21:59 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1398859Z 2025/07/11 01:22:09 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1399188Z 2025/07/11 01:23:09 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1399513Z 2025/07/11 01:23:20 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1400018Z 2025/07/11 01:24:20 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1400353Z 2025/07/11 01:24:30 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1400684Z 2025/07/11 01:25:30 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1401010Z 2025/07/11 01:25:40 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1401333Z 2025/07/11 01:26:41 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1401662Z 2025/07/11 01:26:51 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1401986Z 2025/07/11 01:27:51 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1402309Z 2025/07/11 01:28:01 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1402640Z 2025/07/11 01:29:01 [TRACE] Waiting 10s before next try
2025-07-11T02:31:57.1402973Z 2025/07/11 01:29:11 [TRACE] Waiting 1m0s before next try
2025-07-11T02:31:57.1403324Z 2025/07/11 01:29:55 [WARN] WaitForState timeout after 1h0m0s
2025-07-11T02:31:57.1403730Z 2025/07/11 01:29:55 [WARN] WaitForState starting 30s refresh grace period
2025-07-11T02:31:57.1404136Z     resource_test.go:95: 
2025-07-11T02:31:57.1405042Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-11T02:31:57.1406776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-11T02:31:57.1408604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:95
2025-07-11T02:31:57.1409356Z         	Error:      	Received unexpected error:
2025-07-11T02:31:57.1410464Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-11T02:31:57.1411050Z         	Test:       	TestAccStreamProcessor_withOptions
2025-07-11T02:31:57.1412450Z         	Messages:   	Cluster creation failed: test-acc-tf-c-9057569243170199815, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-11T02:31:57.1413167Z --- FAIL: TestAccStreamProcessor_withOptions (3600.61s)
```

- 2025-07-12 PASS 9 minutes
- 2025-07-13

### Error 2025-07-13T00:52:25+00:00
```
2025-07-13T00:52:25.1928874Z === RUN   TestAccStreamProcessor_withOptions
2025-07-13T00:52:25.1929424Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-8730951057269518053
2025-07-13T00:52:25.1929915Z 2025/07/13 00:32:25 [DEBUG] Waiting for state to become: [IDLE]
2025-07-13T00:52:25.1930652Z 2025/07/13 00:35:25 [TRACE] Waiting 1m0s before next try
2025-07-13T00:52:25.1931303Z 2025/07/13 00:36:25 [TRACE] Waiting 10s before next try
2025-07-13T00:52:25.1931677Z 2025/07/13 00:36:35 [TRACE] Waiting 1m0s before next try
2025-07-13T00:52:25.1932032Z 2025/07/13 00:37:35 [TRACE] Waiting 10s before next try
2025-07-13T00:52:25.1932389Z 2025/07/13 00:37:45 [TRACE] Waiting 1m0s before next try
2025-07-13T00:52:25.1932752Z 2025/07/13 00:38:46 [TRACE] Waiting 10s before next try
2025-07-13T00:52:25.1933102Z 2025/07/13 00:38:56 [TRACE] Waiting 1m0s before next try
2025-07-13T00:52:25.1933449Z 2025/07/13 00:39:56 [TRACE] Waiting 10s before next try
2025-07-13T00:52:25.1933812Z 2025/07/13 00:40:06 [TRACE] Waiting 1m0s before next try
2025-07-13T00:52:25.1934163Z 2025/07/13 00:41:06 [TRACE] Waiting 10s before next try
2025-07-13T00:52:25.1934511Z 2025/07/13 00:41:16 [TRACE] Waiting 1m0s before next try
2025-07-13T00:52:25.1934859Z 2025/07/13 00:42:16 [TRACE] Waiting 10s before next try
2025-07-13T00:52:25.1935221Z 2025/07/13 00:42:26 [TRACE] Waiting 1m0s before next try
2025-07-13T00:52:25.1935587Z 2025/07/13 00:43:26 [TRACE] Waiting 10s before next try
2025-07-13T00:52:25.1935976Z 2025/07/13 00:43:37 [TRACE] Waiting 1m0s before next try
2025-07-13T00:52:25.1936330Z 2025/07/13 00:44:37 [TRACE] Waiting 10s before next try
2025-07-13T00:52:25.1936678Z 2025/07/13 00:44:47 [TRACE] Waiting 1m0s before next try
2025-07-13T00:52:25.1993826Z === CONT  TestAccStreamProcessor_withOptions
2025-07-13T00:52:25.2113903Z === NAME  TestAccStreamProcessor_withOptions
2025-07-13T00:52:25.2114377Z     resource_test.go:102: Step 1/2 error: Error running apply: exit status 1
2025-07-13T00:52:25.2114732Z         
2025-07-13T00:52:25.2115007Z         Error: error creating resource
2025-07-13T00:52:25.2115281Z         
2025-07-13T00:52:25.2115641Z           with mongodbatlas_stream_processor.processor,
2025-07-13T00:52:25.2116342Z           on terraform_plugin_test.tf line 60, in resource "mongodbatlas_stream_processor" "processor":
2025-07-13T00:52:25.2116992Z           60: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-13T00:52:25.2117312Z         
2025-07-13T00:52:25.2118054Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-4613923077337729932/processor
2025-07-13T00:52:25.2118876Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-13T00:52:25.2119527Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-13T00:52:25.2120373Z         failed to acquire resources for stream processor validation: internal error
2025-07-13T00:52:25.2121201Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-13T00:52:25.2121820Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-13T00:52:25.2122477Z         processor validation: internal error while provisioning resource from global
2025-07-13T00:52:25.2122971Z         resource manager], BadRequestDetail: 
2025-07-13T00:52:25.2145668Z   
2025-07-13T00:52:25.2146153Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-13T00:52:25.2146582Z         
2025-07-13T00:52:25.2146853Z         Error: error deleting resource
2025-07-13T00:52:25.2147121Z         
2025-07-13T00:52:25.2148005Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-4613923077337729932/connections/ClusterConnectionSrc
2025-07-13T00:52:25.2148771Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-13T00:52:25.2149317Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-13T00:52:25.2149948Z         name test-acc-tf-4613923077337729932 has active processors, and cannot be
2025-07-13T00:52:25.2150559Z         changed. Reason: Forbidden. Params: [test-acc-tf-4613923077337729932],
2025-07-13T00:52:25.2151096Z         BadRequestDetail: 
2025-07-13T00:52:25.2151341Z         
2025-07-13T00:52:25.2151620Z         Error: error deleting resource
2025-07-13T00:52:25.2151879Z         
2025-07-13T00:52:25.2152751Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-4613923077337729932/connections/KafkaConnectionDest
2025-07-13T00:52:25.2153507Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-13T00:52:25.2154181Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-13T00:52:25.2154810Z         name test-acc-tf-4613923077337729932 has active processors, and cannot be
2025-07-13T00:52:25.2155425Z         changed. Reason: Forbidden. Params: [test-acc-tf-4613923077337729932],
2025-07-13T00:52:25.2155839Z         BadRequestDetail: 
2025-07-13T00:52:25.2156141Z --- FAIL: TestAccStreamProcessor_withOptions (834.95s)
```

- 2025-07-14

### Error 2025-07-14T04:02:14+00:00
```
2025-07-14T04:02:14.1113358Z === RUN   TestAccStreamProcessor_withOptions
2025-07-14T04:02:14.1114260Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-3497100019717579568
2025-07-14T04:02:14.1115067Z 2025/07/14 00:31:30 [DEBUG] Waiting for state to become: [IDLE]
2025-07-14T04:02:14.1115705Z 2025/07/14 00:34:30 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1116317Z 2025/07/14 00:35:30 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1116918Z 2025/07/14 00:35:40 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1117502Z 2025/07/14 00:36:40 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1118098Z 2025/07/14 00:36:50 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1118720Z 2025/07/14 00:37:50 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1119497Z 2025/07/14 00:38:01 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1120090Z 2025/07/14 00:39:01 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1120676Z 2025/07/14 00:39:11 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1121259Z 2025/07/14 00:40:11 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1121839Z 2025/07/14 00:40:21 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1122429Z 2025/07/14 00:41:21 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1123202Z 2025/07/14 00:41:31 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1123804Z 2025/07/14 00:42:32 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1124390Z 2025/07/14 00:42:42 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1124976Z 2025/07/14 00:43:42 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1125556Z 2025/07/14 00:43:52 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1126137Z 2025/07/14 00:44:52 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1126735Z 2025/07/14 00:45:02 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1127315Z 2025/07/14 00:46:02 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1127894Z 2025/07/14 00:46:12 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1128472Z 2025/07/14 00:47:12 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1129067Z 2025/07/14 00:47:23 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1129644Z 2025/07/14 00:48:23 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1130226Z 2025/07/14 00:48:33 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1130819Z 2025/07/14 00:49:33 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1131403Z 2025/07/14 00:49:43 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1131991Z 2025/07/14 00:50:43 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1132572Z 2025/07/14 00:50:53 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1133614Z 2025/07/14 00:51:53 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1134121Z 2025/07/14 00:52:03 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1134581Z 2025/07/14 00:53:04 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1135033Z 2025/07/14 00:53:14 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1135473Z 2025/07/14 00:54:14 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1135908Z 2025/07/14 00:54:24 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1136346Z 2025/07/14 00:55:24 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1136784Z 2025/07/14 00:55:34 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1137416Z 2025/07/14 00:56:34 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1137866Z 2025/07/14 00:56:44 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1138311Z 2025/07/14 00:57:44 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1138747Z 2025/07/14 00:57:55 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1139181Z 2025/07/14 00:58:55 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1139617Z 2025/07/14 00:59:05 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1140054Z 2025/07/14 01:00:05 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1140488Z 2025/07/14 01:00:15 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1140916Z 2025/07/14 01:01:15 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1141349Z 2025/07/14 01:01:25 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1141778Z 2025/07/14 01:02:25 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1142208Z 2025/07/14 01:02:35 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1142644Z 2025/07/14 01:03:36 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1143275Z 2025/07/14 01:03:46 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1143711Z 2025/07/14 01:04:46 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1144143Z 2025/07/14 01:04:56 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1144582Z 2025/07/14 01:05:56 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1145145Z 2025/07/14 01:06:06 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1145613Z 2025/07/14 01:07:06 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1146044Z 2025/07/14 01:07:16 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1146482Z 2025/07/14 01:08:16 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1146912Z 2025/07/14 01:08:27 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1147342Z 2025/07/14 01:09:27 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1147785Z 2025/07/14 01:09:37 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1148221Z 2025/07/14 01:10:37 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1148574Z 2025/07/14 01:10:47 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1148922Z 2025/07/14 01:11:47 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1149265Z 2025/07/14 01:11:57 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1149613Z 2025/07/14 01:12:57 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1149950Z 2025/07/14 01:13:07 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1150285Z 2025/07/14 01:14:08 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1150608Z 2025/07/14 01:14:18 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1150925Z 2025/07/14 01:15:18 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1151244Z 2025/07/14 01:15:28 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1151566Z 2025/07/14 01:16:28 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1151886Z 2025/07/14 01:16:38 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1152231Z 2025/07/14 01:17:38 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1152583Z 2025/07/14 01:17:48 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1153107Z 2025/07/14 01:18:48 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1153449Z 2025/07/14 01:18:58 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1153777Z 2025/07/14 01:19:59 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1154117Z 2025/07/14 01:20:09 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1154441Z 2025/07/14 01:21:09 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1154764Z 2025/07/14 01:21:19 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1155094Z 2025/07/14 01:22:19 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1155419Z 2025/07/14 01:22:29 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1155747Z 2025/07/14 01:23:29 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1156069Z 2025/07/14 01:23:39 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1156516Z 2025/07/14 01:24:39 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1156852Z 2025/07/14 01:24:50 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1157174Z 2025/07/14 01:25:50 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1157743Z 2025/07/14 01:26:00 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1158187Z 2025/07/14 01:27:00 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1158522Z 2025/07/14 01:27:10 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1158845Z 2025/07/14 01:28:10 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1159175Z 2025/07/14 01:28:20 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1159498Z 2025/07/14 01:29:20 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1159826Z 2025/07/14 01:29:30 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1160152Z 2025/07/14 01:30:31 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.1160475Z 2025/07/14 01:30:41 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.1160835Z 2025/07/14 01:31:30 [WARN] WaitForState timeout after 1h0m0s
2025-07-14T04:02:14.1161260Z 2025/07/14 01:31:30 [WARN] WaitForState starting 30s refresh grace period
2025-07-14T04:02:14.1161670Z     resource_test.go:95: 
2025-07-14T04:02:14.1162551Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-14T04:02:14.1164877Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-14T04:02:14.1166659Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:95
2025-07-14T04:02:14.1167398Z         	Error:      	Received unexpected error:
2025-07-14T04:02:14.1168291Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T04:02:14.1168862Z         	Test:       	TestAccStreamProcessor_withOptions
2025-07-14T04:02:14.1169864Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3497100019717579568, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T04:02:14.1170567Z --- FAIL: TestAccStreamProcessor_withOptions (3600.56s)
```

- 2025-07-15 PASS 8 minutes
- 2025-07-16 PASS 8 minutes
- 2025-07-17 PASS 8 minutes
- 2025-07-18 PASS 8 minutes
- 2025-07-19 PASS 10 minutes
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.6979890Z === RUN   TestAccStreamProcessor_withOptions
2025-07-20T00:53:03.6980409Z     resource_test.go:102: Creating execution cluster: test-acc-tf-c-6043433360466110326
2025-07-20T00:53:03.6980893Z 2025/07/20 00:33:36 [DEBUG] Waiting for state to become: [IDLE]
2025-07-20T00:53:03.6981266Z 2025/07/20 00:36:37 [TRACE] Waiting 1m0s before next try
2025-07-20T00:53:03.6981608Z 2025/07/20 00:37:37 [TRACE] Waiting 10s before next try
2025-07-20T00:53:03.6981955Z 2025/07/20 00:37:47 [TRACE] Waiting 1m0s before next try
2025-07-20T00:53:03.6982475Z 2025/07/20 00:38:47 [TRACE] Waiting 10s before next try
2025-07-20T00:53:03.6982806Z 2025/07/20 00:38:57 [TRACE] Waiting 1m0s before next try
2025-07-20T00:53:03.6983134Z 2025/07/20 00:39:57 [TRACE] Waiting 10s before next try
2025-07-20T00:53:03.6983473Z 2025/07/20 00:40:07 [TRACE] Waiting 1m0s before next try
2025-07-20T00:53:03.6983800Z 2025/07/20 00:41:08 [TRACE] Waiting 10s before next try
2025-07-20T00:53:03.6984128Z 2025/07/20 00:41:18 [TRACE] Waiting 1m0s before next try
2025-07-20T00:53:03.6984456Z 2025/07/20 00:42:18 [TRACE] Waiting 10s before next try
2025-07-20T00:53:03.6984787Z 2025/07/20 00:42:28 [TRACE] Waiting 1m0s before next try
2025-07-20T00:53:03.7325420Z === CONT  TestAccStreamProcessor_withOptions
2025-07-20T00:53:03.7452685Z === NAME  TestAccStreamProcessor_withOptions
2025-07-20T00:53:03.7453170Z     resource_test.go:109: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:53:03.7453544Z         
2025-07-20T00:53:03.7453814Z         Error: error creating resource
2025-07-20T00:53:03.7454079Z         
2025-07-20T00:53:03.7454538Z           with mongodbatlas_stream_connection.cluster_src,
2025-07-20T00:53:03.7455245Z           on terraform_plugin_test.tf line 30, in resource "mongodbatlas_stream_connection" "cluster_src":
2025-07-20T00:53:03.7456036Z           30:             resource "mongodbatlas_stream_connection" "cluster_src" {
2025-07-20T00:53:03.7456382Z         
2025-07-20T00:53:03.7457147Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/connections
2025-07-20T00:53:03.7457979Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7458687Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7459292Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7459846Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7460237Z         BadRequestDetail: 
2025-07-20T00:53:03.7460478Z         
2025-07-20T00:53:03.7460745Z         Error: error creating resource
2025-07-20T00:53:03.7461004Z         
2025-07-20T00:53:03.7461348Z           with mongodbatlas_stream_connection.kafka_dest,
2025-07-20T00:53:03.7462022Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_stream_connection" "kafka_dest":
2025-07-20T00:53:03.7462677Z           42:             resource "mongodbatlas_stream_connection" "kafka_dest"{
2025-07-20T00:53:03.7463004Z         
2025-07-20T00:53:03.7463740Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/connections
2025-07-20T00:53:03.7464693Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7465353Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7466088Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7466647Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7467023Z         BadRequestDetail: 
2025-07-20T00:53:03.7467710Z --- FAIL: TestAccStreamProcessor_withOptions (593.01s)
```

- 2025-07-21 PASS 8 minutes
- 2025-07-22 PASS 8 minutes
- 2025-07-23
  - PASS 10 minutes
  - PASS 9 minutes
- 2025-07-24 PASS 9 minutes
- 2025-07-25 PASS 11 minutes
- 2025-07-26 PASS 10 minutes
- 2025-07-27 PASS 11 minutes
- 2025-07-28 PASS 7 minutes
- 2025-07-29 PASS 9 minutes
- 2025-07-30 PASS 10 minutes
- 2025-07-31 PASS 15 minutes