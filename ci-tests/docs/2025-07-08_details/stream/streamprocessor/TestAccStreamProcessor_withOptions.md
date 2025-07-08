# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 8) FAIL(x 2)
Success rate: 80.00%

## Timeline
### 2025-07-01
#### PASS 8 minutes
```
2025-07-01T08:50:28.2734651Z === RUN   TestAccStreamProcessor_withOptions
2025-07-01T08:50:28.2735599Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-6444803593168021600
2025-07-01T08:50:28.2736447Z 2025/07/01 08:33:51 [DEBUG] Waiting for state to become: [IDLE]
2025-07-01T08:50:28.2737106Z 2025/07/01 08:36:52 [TRACE] Waiting 1m0s before next try
2025-07-01T08:50:28.2737736Z 2025/07/01 08:37:52 [TRACE] Waiting 10s before next try
2025-07-01T08:50:28.2738366Z 2025/07/01 08:38:02 [TRACE] Waiting 1m0s before next try
2025-07-01T08:50:28.2738977Z 2025/07/01 08:39:03 [TRACE] Waiting 10s before next try
2025-07-01T08:50:28.2739587Z 2025/07/01 08:39:13 [TRACE] Waiting 1m0s before next try
2025-07-01T08:50:28.2740227Z 2025/07/01 08:40:13 [TRACE] Waiting 10s before next try
2025-07-01T08:50:28.2740850Z 2025/07/01 08:40:23 [TRACE] Waiting 1m0s before next try
2025-07-01T08:50:28.2741472Z 2025/07/01 08:41:24 [TRACE] Waiting 10s before next try
2025-07-01T08:50:28.2742105Z 2025/07/01 08:41:34 [TRACE] Waiting 1m0s before next try
2025-07-01T08:50:28.2836117Z === CONT  TestAccStreamProcessor_withOptions
2025-07-01T08:50:28.2855107Z --- PASS: TestAccStreamProcessor_withOptions (534.03s)
```
#### PASS 8 minutes
```
2025-07-01T12:50:20.6074188Z === RUN   TestAccStreamProcessor_withOptions
2025-07-01T12:50:20.6074681Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-3786857106469482011
2025-07-01T12:50:20.6075138Z 2025/07/01 12:35:12 [DEBUG] Waiting for state to become: [IDLE]
2025-07-01T12:50:20.6075507Z 2025/07/01 12:38:12 [TRACE] Waiting 1m0s before next try
2025-07-01T12:50:20.6075849Z 2025/07/01 12:39:12 [TRACE] Waiting 10s before next try
2025-07-01T12:50:20.6076185Z 2025/07/01 12:39:22 [TRACE] Waiting 1m0s before next try
2025-07-01T12:50:20.6076514Z 2025/07/01 12:40:23 [TRACE] Waiting 10s before next try
2025-07-01T12:50:20.6076842Z 2025/07/01 12:40:33 [TRACE] Waiting 1m0s before next try
2025-07-01T12:50:20.6077168Z 2025/07/01 12:41:33 [TRACE] Waiting 10s before next try
2025-07-01T12:50:20.6077500Z 2025/07/01 12:41:43 [TRACE] Waiting 1m0s before next try
2025-07-01T12:50:20.6077985Z 2025/07/01 12:42:43 [TRACE] Waiting 10s before next try
2025-07-01T12:50:20.6078338Z 2025/07/01 12:42:53 [TRACE] Waiting 1m0s before next try
2025-07-01T12:50:20.6126777Z === CONT  TestAccStreamProcessor_withOptions
2025-07-01T12:50:20.6136401Z --- PASS: TestAccStreamProcessor_withOptions (529.88s)
```
#### PASS 8 minutes
```
2025-07-01T17:50:24.3485320Z === RUN   TestAccStreamProcessor_withOptions
2025-07-01T17:50:24.3486234Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-9135282385753856451
2025-07-01T17:50:24.3487035Z 2025/07/01 17:36:23 [DEBUG] Waiting for state to become: [IDLE]
2025-07-01T17:50:24.3487735Z 2025/07/01 17:39:23 [TRACE] Waiting 1m0s before next try
2025-07-01T17:50:24.3488338Z 2025/07/01 17:40:23 [TRACE] Waiting 10s before next try
2025-07-01T17:50:24.3488941Z 2025/07/01 17:40:34 [TRACE] Waiting 1m0s before next try
2025-07-01T17:50:24.3489532Z 2025/07/01 17:41:34 [TRACE] Waiting 10s before next try
2025-07-01T17:50:24.3490128Z 2025/07/01 17:41:44 [TRACE] Waiting 1m0s before next try
2025-07-01T17:50:24.3490721Z 2025/07/01 17:42:44 [TRACE] Waiting 10s before next try
2025-07-01T17:50:24.3491306Z 2025/07/01 17:42:55 [TRACE] Waiting 1m0s before next try
2025-07-01T17:50:24.3492090Z 2025/07/01 17:43:55 [TRACE] Waiting 10s before next try
2025-07-01T17:50:24.3492669Z 2025/07/01 17:44:05 [TRACE] Waiting 1m0s before next try
2025-07-01T17:50:24.3582011Z === CONT  TestAccStreamProcessor_withOptions
2025-07-01T17:50:24.3599134Z --- PASS: TestAccStreamProcessor_withOptions (532.60s)
```
### 2025-07-02
#### FAIL 10 minutes
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.921000+00:00-TestAccStreamProcessor_withOptions',confidence=1.0,ts_when='5 days ago')
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
### 2025-07-03
#### PASS 10 minutes
```
2025-07-03T00:46:39.9542511Z === RUN   TestAccStreamProcessor_withOptions
2025-07-03T00:46:39.9543293Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-6661317215715319465
2025-07-03T00:46:39.9544164Z 2025/07/03 00:29:40 [DEBUG] Waiting for state to become: [IDLE]
2025-07-03T00:46:39.9544614Z 2025/07/03 00:32:40 [TRACE] Waiting 1m0s before next try
2025-07-03T00:46:39.9544968Z 2025/07/03 00:33:40 [TRACE] Waiting 10s before next try
2025-07-03T00:46:39.9545524Z 2025/07/03 00:33:50 [TRACE] Waiting 1m0s before next try
2025-07-03T00:46:39.9545867Z 2025/07/03 00:34:50 [TRACE] Waiting 10s before next try
2025-07-03T00:46:39.9546203Z 2025/07/03 00:35:01 [TRACE] Waiting 1m0s before next try
2025-07-03T00:46:39.9546545Z 2025/07/03 00:36:01 [TRACE] Waiting 10s before next try
2025-07-03T00:46:39.9546886Z 2025/07/03 00:36:11 [TRACE] Waiting 1m0s before next try
2025-07-03T00:46:39.9547222Z 2025/07/03 00:37:11 [TRACE] Waiting 10s before next try
2025-07-03T00:46:39.9547554Z 2025/07/03 00:37:21 [TRACE] Waiting 1m0s before next try
2025-07-03T00:46:39.9547898Z 2025/07/03 00:38:21 [TRACE] Waiting 10s before next try
2025-07-03T00:46:39.9548239Z 2025/07/03 00:38:31 [TRACE] Waiting 1m0s before next try
2025-07-03T00:46:39.9793439Z === CONT  TestAccStreamProcessor_withOptions
2025-07-03T00:46:39.9803405Z --- PASS: TestAccStreamProcessor_withOptions (610.24s)
```
### 2025-07-04
#### PASS 7 minutes
```
2025-07-04T00:51:07.7055649Z === RUN   TestAccStreamProcessor_withOptions
2025-07-04T00:51:07.7056643Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-3287679127615181865
2025-07-04T00:51:07.7057531Z 2025/07/04 00:29:02 [DEBUG] Waiting for state to become: [IDLE]
2025-07-04T00:51:07.7058487Z 2025/07/04 00:32:02 [TRACE] Waiting 1m0s before next try
2025-07-04T00:51:07.7059159Z 2025/07/04 00:33:02 [TRACE] Waiting 10s before next try
2025-07-04T00:51:07.7059823Z 2025/07/04 00:33:12 [TRACE] Waiting 1m0s before next try
2025-07-04T00:51:07.7060487Z 2025/07/04 00:34:12 [TRACE] Waiting 10s before next try
2025-07-04T00:51:07.7060976Z 2025/07/04 00:34:22 [TRACE] Waiting 1m0s before next try
2025-07-04T00:51:07.7061420Z 2025/07/04 00:35:22 [TRACE] Waiting 10s before next try
2025-07-04T00:51:07.7061927Z 2025/07/04 00:35:32 [TRACE] Waiting 1m0s before next try
2025-07-04T00:51:07.7213008Z === CONT  TestAccStreamProcessor_withOptions
2025-07-04T00:51:07.7223547Z --- PASS: TestAccStreamProcessor_withOptions (458.61s)
```
### 2025-07-05
#### PASS 8 minutes
```
2025-07-05T00:44:07.5871226Z === RUN   TestAccStreamProcessor_withOptions
2025-07-05T00:44:07.5872106Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-2286538213274754724
2025-07-05T00:44:07.5872899Z 2025/07/05 00:28:13 [DEBUG] Waiting for state to become: [IDLE]
2025-07-05T00:44:07.5873531Z 2025/07/05 00:31:13 [TRACE] Waiting 1m0s before next try
2025-07-05T00:44:07.5874297Z 2025/07/05 00:32:14 [TRACE] Waiting 10s before next try
2025-07-05T00:44:07.5874901Z 2025/07/05 00:32:24 [TRACE] Waiting 1m0s before next try
2025-07-05T00:44:07.5875485Z 2025/07/05 00:33:24 [TRACE] Waiting 10s before next try
2025-07-05T00:44:07.5876073Z 2025/07/05 00:33:34 [TRACE] Waiting 1m0s before next try
2025-07-05T00:44:07.5876660Z 2025/07/05 00:34:35 [TRACE] Waiting 10s before next try
2025-07-05T00:44:07.5877240Z 2025/07/05 00:34:45 [TRACE] Waiting 1m0s before next try
2025-07-05T00:44:07.5877821Z 2025/07/05 00:35:45 [TRACE] Waiting 10s before next try
2025-07-05T00:44:07.5878399Z 2025/07/05 00:35:55 [TRACE] Waiting 1m0s before next try
2025-07-05T00:44:07.6141616Z === CONT  TestAccStreamProcessor_withOptions
2025-07-05T00:44:07.6151338Z --- PASS: TestAccStreamProcessor_withOptions (531.86s)
```
### 2025-07-06
#### FAIL 10 minutes
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
### 2025-07-07
#### PASS 10 minutes
```
2025-07-07T00:48:05.7812547Z === RUN   TestAccStreamProcessor_withOptions
2025-07-07T00:48:05.7813035Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-391132233592282694
2025-07-07T00:48:05.7813491Z 2025/07/07 00:31:41 [DEBUG] Waiting for state to become: [IDLE]
2025-07-07T00:48:05.7813865Z 2025/07/07 00:34:41 [TRACE] Waiting 1m0s before next try
2025-07-07T00:48:05.7814209Z 2025/07/07 00:35:41 [TRACE] Waiting 10s before next try
2025-07-07T00:48:05.7814547Z 2025/07/07 00:35:51 [TRACE] Waiting 1m0s before next try
2025-07-07T00:48:05.7814877Z 2025/07/07 00:36:52 [TRACE] Waiting 10s before next try
2025-07-07T00:48:05.7815212Z 2025/07/07 00:37:02 [TRACE] Waiting 1m0s before next try
2025-07-07T00:48:05.7815551Z 2025/07/07 00:38:02 [TRACE] Waiting 10s before next try
2025-07-07T00:48:05.7816051Z 2025/07/07 00:38:12 [TRACE] Waiting 1m0s before next try
2025-07-07T00:48:05.7816387Z 2025/07/07 00:39:12 [TRACE] Waiting 10s before next try
2025-07-07T00:48:05.7816713Z 2025/07/07 00:39:22 [TRACE] Waiting 1m0s before next try
2025-07-07T00:48:05.7817037Z 2025/07/07 00:40:22 [TRACE] Waiting 10s before next try
2025-07-07T00:48:05.7817369Z 2025/07/07 00:40:33 [TRACE] Waiting 1m0s before next try
2025-07-07T00:48:05.8094376Z === CONT  TestAccStreamProcessor_withOptions
2025-07-07T00:48:05.8104810Z --- PASS: TestAccStreamProcessor_withOptions (602.29s)
```
### 2025-07-08
#### PASS 8 minutes
```
2025-07-08T00:45:56.1167327Z === RUN   TestAccStreamProcessor_withOptions
2025-07-08T00:45:56.1168246Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-7139045443622962844
2025-07-08T00:45:56.1169056Z 2025/07/08 00:29:30 [DEBUG] Waiting for state to become: [IDLE]
2025-07-08T00:45:56.1169703Z 2025/07/08 00:32:30 [TRACE] Waiting 1m0s before next try
2025-07-08T00:45:56.1170343Z 2025/07/08 00:33:31 [TRACE] Waiting 10s before next try
2025-07-08T00:45:56.1170957Z 2025/07/08 00:33:41 [TRACE] Waiting 1m0s before next try
2025-07-08T00:45:56.1171559Z 2025/07/08 00:34:41 [TRACE] Waiting 10s before next try
2025-07-08T00:45:56.1172161Z 2025/07/08 00:34:51 [TRACE] Waiting 1m0s before next try
2025-07-08T00:45:56.1172746Z 2025/07/08 00:35:51 [TRACE] Waiting 10s before next try
2025-07-08T00:45:56.1173343Z 2025/07/08 00:36:01 [TRACE] Waiting 1m0s before next try
2025-07-08T00:45:56.1173920Z 2025/07/08 00:37:01 [TRACE] Waiting 10s before next try
2025-07-08T00:45:56.1174513Z 2025/07/08 00:37:11 [TRACE] Waiting 1m0s before next try
2025-07-08T00:45:56.1509420Z === CONT  TestAccStreamProcessor_withOptions
2025-07-08T00:45:56.1526938Z --- PASS: TestAccStreamProcessor_withOptions (529.67s)
```