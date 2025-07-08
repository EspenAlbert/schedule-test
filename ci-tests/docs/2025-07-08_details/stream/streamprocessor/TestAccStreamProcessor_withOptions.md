# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL(x 2)
Success rate: 77.78%

## Timeline
### 2025-07-01
#### PASS 8 minutes
#### PASS 8 minutes
### 2025-07-02
#### FAIL 10 minutes
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.921000+00:00-TestAccStreamProcessor_withOptions',confidence=1.0,ts_when='6 days ago')
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
### 2025-07-04
#### PASS 7 minutes
### 2025-07-05
#### PASS 8 minutes
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
### 2025-07-08
#### PASS 8 minutes