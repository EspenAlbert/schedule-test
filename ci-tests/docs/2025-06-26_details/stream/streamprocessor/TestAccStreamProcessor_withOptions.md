# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, FAIL(x 8) PASS
Success rate: 11.11%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### FAIL 9 minutes
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-20T00:45:53.685000+00:00-TestAccStreamProcessor_withOptions',confidence=1.0,ts_when='6 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-20T00:45:53.6855013Z === RUN   TestAccStreamProcessor_withOptions
2025-06-20T00:45:53.6855523Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-4029763040214331569
2025-06-20T00:45:53.6855986Z 2025/06/20 00:28:52 [DEBUG] Waiting for state to become: [IDLE]
2025-06-20T00:45:53.6856357Z 2025/06/20 00:31:52 [TRACE] Waiting 1m0s before next try
2025-06-20T00:45:53.6856697Z 2025/06/20 00:32:52 [TRACE] Waiting 10s before next try
2025-06-20T00:45:53.6857034Z 2025/06/20 00:33:02 [TRACE] Waiting 1m0s before next try
2025-06-20T00:45:53.6857371Z 2025/06/20 00:34:03 [TRACE] Waiting 10s before next try
2025-06-20T00:45:53.6857700Z 2025/06/20 00:34:13 [TRACE] Waiting 1m0s before next try
2025-06-20T00:45:53.6858032Z 2025/06/20 00:35:13 [TRACE] Waiting 10s before next try
2025-06-20T00:45:53.6858358Z 2025/06/20 00:35:23 [TRACE] Waiting 1m0s before next try
2025-06-20T00:45:53.6858689Z 2025/06/20 00:36:23 [TRACE] Waiting 10s before next try
2025-06-20T00:45:53.6859014Z 2025/06/20 00:36:34 [TRACE] Waiting 1m0s before next try
2025-06-20T00:45:53.6908762Z === CONT  TestAccStreamProcessor_withOptions
2025-06-20T00:45:53.7021130Z === NAME  TestAccStreamProcessor_withOptions
2025-06-20T00:45:53.7021591Z     resource_test.go:102: Step 1/2 error: Error running apply: exit status 1
2025-06-20T00:45:53.7021946Z         
2025-06-20T00:45:53.7022214Z         Error: error creating resource
2025-06-20T00:45:53.7022468Z         
2025-06-20T00:45:53.7022920Z           with mongodbatlas_stream_processor.processor,
2025-06-20T00:45:53.7023604Z           on terraform_plugin_test.tf line 57, in resource "mongodbatlas_stream_processor" "processor":
2025-06-20T00:45:53.7024227Z           57: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-20T00:45:53.7024746Z         
2025-06-20T00:45:53.7025491Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6854ab42e16f343ef1dd2802/streams/test-acc-tf-3120398751518286153/processor
2025-06-20T00:45:53.7026301Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-20T00:45:53.7026937Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-20T00:45:53.7027589Z         failed to acquire resources for stream processor validation: internal error
2025-06-20T00:45:53.7028200Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-20T00:45:53.7028794Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-20T00:45:53.7029435Z         processor validation: internal error while provisioning resource from global
2025-06-20T00:45:53.7029919Z         resource manager], BadRequestDetail: 
2025-06-20T00:45:53.7051379Z   
2025-06-20T00:45:53.7051835Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-20T00:45:53.7052255Z         
2025-06-20T00:45:53.7052524Z         Error: error deleting resource
2025-06-20T00:45:53.7052786Z         
2025-06-20T00:45:53.7053645Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6854ab42e16f343ef1dd2802/streams/test-acc-tf-3120398751518286153/connections/ClusterConnectionSrc
2025-06-20T00:45:53.7054400Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-20T00:45:53.7055035Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-20T00:45:53.7056016Z         name test-acc-tf-3120398751518286153 has active processors, and cannot be
2025-06-20T00:45:53.7056634Z         changed. Reason: Forbidden. Params: [test-acc-tf-3120398751518286153],
2025-06-20T00:45:53.7057040Z         BadRequestDetail: 
2025-06-20T00:45:53.7057273Z         
2025-06-20T00:45:53.7057535Z         Error: error deleting resource
2025-06-20T00:45:53.7057792Z         
2025-06-20T00:45:53.7058648Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6854ab42e16f343ef1dd2802/streams/test-acc-tf-3120398751518286153/connections/KafkaConnectionDest
2025-06-20T00:45:53.7059401Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-20T00:45:53.7059922Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-20T00:45:53.7060531Z         name test-acc-tf-3120398751518286153 has active processors, and cannot be
2025-06-20T00:45:53.7061121Z         changed. Reason: Forbidden. Params: [test-acc-tf-3120398751518286153],
2025-06-20T00:45:53.7061521Z         BadRequestDetail: 
2025-06-20T00:45:53.7061824Z --- FAIL: TestAccStreamProcessor_withOptions (554.11s)
```
### 2025-06-21
#### FAIL 10 minutes
```
2025-06-21T00:43:49.5453541Z === RUN   TestAccStreamProcessor_withOptions
2025-06-21T00:43:49.5454488Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-3451046039905084640
2025-06-21T00:43:49.5455330Z 2025/06/21 00:28:41 [DEBUG] Waiting for state to become: [IDLE]
2025-06-21T00:43:49.5455975Z 2025/06/21 00:31:41 [TRACE] Waiting 1m0s before next try
2025-06-21T00:43:49.5456587Z 2025/06/21 00:32:41 [TRACE] Waiting 10s before next try
2025-06-21T00:43:49.5457187Z 2025/06/21 00:32:51 [TRACE] Waiting 1m0s before next try
2025-06-21T00:43:49.5457787Z 2025/06/21 00:33:52 [TRACE] Waiting 10s before next try
2025-06-21T00:43:49.5458376Z 2025/06/21 00:34:02 [TRACE] Waiting 1m0s before next try
2025-06-21T00:43:49.5459134Z 2025/06/21 00:35:02 [TRACE] Waiting 10s before next try
2025-06-21T00:43:49.5459737Z 2025/06/21 00:35:12 [TRACE] Waiting 1m0s before next try
2025-06-21T00:43:49.5460340Z 2025/06/21 00:36:12 [TRACE] Waiting 10s before next try
2025-06-21T00:43:49.5460934Z 2025/06/21 00:36:22 [TRACE] Waiting 1m0s before next try
2025-06-21T00:43:49.5461523Z 2025/06/21 00:37:22 [TRACE] Waiting 10s before next try
2025-06-21T00:43:49.5462109Z 2025/06/21 00:37:33 [TRACE] Waiting 1m0s before next try
2025-06-21T00:43:49.5554836Z === CONT  TestAccStreamProcessor_withOptions
2025-06-21T00:43:49.5680785Z === NAME  TestAccStreamProcessor_withOptions
2025-06-21T00:43:49.5681631Z     resource_test.go:102: Step 1/2 error: Error running apply: exit status 1
2025-06-21T00:43:49.5682258Z         
2025-06-21T00:43:49.5682771Z         Error: error creating resource
2025-06-21T00:43:49.5683314Z         
2025-06-21T00:43:49.5684064Z           with mongodbatlas_stream_processor.processor,
2025-06-21T00:43:49.5685435Z           on terraform_plugin_test.tf line 57, in resource "mongodbatlas_stream_processor" "processor":
2025-06-21T00:43:49.5686573Z           57: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-21T00:43:49.5687166Z         
2025-06-21T00:43:49.5688520Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6855fcb7f3e6555d2acb8682/streams/test-acc-tf-222268263431396133/processor
2025-06-21T00:43:49.5690062Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-21T00:43:49.5691115Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-21T00:43:49.5692194Z         failed to acquire resources for stream processor validation: internal error
2025-06-21T00:43:49.5693213Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-21T00:43:49.5694212Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-21T00:43:49.5695252Z         processor validation: internal error while provisioning resource from global
2025-06-21T00:43:49.5696034Z         resource manager], BadRequestDetail: 
2025-06-21T00:43:49.5734469Z   
2025-06-21T00:43:49.5735305Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-21T00:43:49.5736065Z         
2025-06-21T00:43:49.5736540Z         Error: error deleting resource
2025-06-21T00:43:49.5736991Z         
2025-06-21T00:43:49.5738572Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6855fcb7f3e6555d2acb8682/streams/test-acc-tf-222268263431396133/connections/KafkaConnectionDest
2025-06-21T00:43:49.5740125Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-21T00:43:49.5741100Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-21T00:43:49.5742232Z         name test-acc-tf-222268263431396133 has active processors, and cannot be
2025-06-21T00:43:49.5743331Z         changed. Reason: Forbidden. Params: [test-acc-tf-222268263431396133],
2025-06-21T00:43:49.5744063Z         BadRequestDetail: 
2025-06-21T00:43:49.5744462Z         
2025-06-21T00:43:49.5744914Z         Error: error deleting resource
2025-06-21T00:43:49.5745368Z         
2025-06-21T00:43:49.5746904Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6855fcb7f3e6555d2acb8682/streams/test-acc-tf-222268263431396133/connections/ClusterConnectionSrc
2025-06-21T00:43:49.5748259Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-21T00:43:49.5749430Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-21T00:43:49.5750570Z         name test-acc-tf-222268263431396133 has active processors, and cannot be
2025-06-21T00:43:49.5751699Z         changed. Reason: Forbidden. Params: [test-acc-tf-222268263431396133],
2025-06-21T00:43:49.5752427Z         BadRequestDetail: 
2025-06-21T00:43:49.5752949Z --- FAIL: TestAccStreamProcessor_withOptions (624.57s)
```
### 2025-06-22
#### PASS 11 minutes
```
2025-06-22T00:49:55.8364283Z === RUN   TestAccStreamProcessor_withOptions
2025-06-22T00:49:55.8364776Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-6619967545492636645
2025-06-22T00:49:55.8365230Z 2025/06/22 00:31:57 [DEBUG] Waiting for state to become: [IDLE]
2025-06-22T00:49:55.8365592Z 2025/06/22 00:34:58 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.8365932Z 2025/06/22 00:35:58 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.8366270Z 2025/06/22 00:36:08 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.8366596Z 2025/06/22 00:37:08 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.8366920Z 2025/06/22 00:37:19 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.8367251Z 2025/06/22 00:38:19 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.8367580Z 2025/06/22 00:38:29 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.8367900Z 2025/06/22 00:39:29 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.8368224Z 2025/06/22 00:39:40 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.8368551Z 2025/06/22 00:40:40 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.8368872Z 2025/06/22 00:40:50 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.8369195Z 2025/06/22 00:41:50 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.8369519Z 2025/06/22 00:42:01 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.8474185Z === CONT  TestAccStreamProcessor_withOptions
2025-06-22T00:49:55.8484569Z --- PASS: TestAccStreamProcessor_withOptions (674.59s)
```
### 2025-06-23
#### FAIL 9 minutes
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-23T00:45:53.885000+00:00-TestAccStreamProcessor_withOptions',confidence=1.0,ts_when='3 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-23T00:45:53.8855523Z === RUN   TestAccStreamProcessor_withOptions
2025-06-23T00:45:53.8856405Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-6044778992888011106
2025-06-23T00:45:53.8857195Z 2025/06/23 00:31:15 [DEBUG] Waiting for state to become: [IDLE]
2025-06-23T00:45:53.8857815Z 2025/06/23 00:34:15 [TRACE] Waiting 1m0s before next try
2025-06-23T00:45:53.8858407Z 2025/06/23 00:35:15 [TRACE] Waiting 10s before next try
2025-06-23T00:45:53.8859000Z 2025/06/23 00:35:26 [TRACE] Waiting 1m0s before next try
2025-06-23T00:45:53.8859587Z 2025/06/23 00:36:26 [TRACE] Waiting 10s before next try
2025-06-23T00:45:53.8860165Z 2025/06/23 00:36:36 [TRACE] Waiting 1m0s before next try
2025-06-23T00:45:53.8860749Z 2025/06/23 00:37:37 [TRACE] Waiting 10s before next try
2025-06-23T00:45:53.8861335Z 2025/06/23 00:37:47 [TRACE] Waiting 1m0s before next try
2025-06-23T00:45:53.8861920Z 2025/06/23 00:38:47 [TRACE] Waiting 10s before next try
2025-06-23T00:45:53.8862501Z 2025/06/23 00:38:57 [TRACE] Waiting 1m0s before next try
2025-06-23T00:45:53.8950997Z === CONT  TestAccStreamProcessor_withOptions
2025-06-23T00:45:53.9112722Z === NAME  TestAccStreamProcessor_withOptions
2025-06-23T00:45:53.9113513Z     resource_test.go:102: Step 1/2 error: Error running apply: exit status 1
2025-06-23T00:45:53.9113958Z         
2025-06-23T00:45:53.9114286Z         Error: error creating resource
2025-06-23T00:45:53.9130362Z         
2025-06-23T00:45:53.9130775Z           with mongodbatlas_stream_processor.processor,
2025-06-23T00:45:53.9131626Z           on terraform_plugin_test.tf line 57, in resource "mongodbatlas_stream_processor" "processor":
2025-06-23T00:45:53.9132302Z           57: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-23T00:45:53.9132635Z         
2025-06-23T00:45:53.9133526Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6858a0519c500e6d1cbd646c/streams/test-acc-tf-7652665318978899012/processor
2025-06-23T00:45:53.9134347Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-23T00:45:53.9134990Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-23T00:45:53.9135651Z         failed to acquire resources for stream processor validation: internal error
2025-06-23T00:45:53.9136272Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-23T00:45:53.9136871Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-23T00:45:53.9137515Z         processor validation: internal error while provisioning resource from global
2025-06-23T00:45:53.9137998Z         resource manager], BadRequestDetail: 
2025-06-23T00:45:53.9150383Z   
2025-06-23T00:45:53.9179047Z === NAME  TestAccStreamProcessor_withOptions
2025-06-23T00:45:53.9179615Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-23T00:45:53.9180044Z         
2025-06-23T00:45:53.9180313Z         Error: error deleting resource
2025-06-23T00:45:53.9180573Z         
2025-06-23T00:45:53.9181445Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6858a0519c500e6d1cbd646c/streams/test-acc-tf-7652665318978899012/connections/ClusterConnectionSrc
2025-06-23T00:45:53.9182212Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-23T00:45:53.9182740Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-23T00:45:53.9183473Z         name test-acc-tf-7652665318978899012 has active processors, and cannot be
2025-06-23T00:45:53.9184077Z         changed. Reason: Forbidden. Params: [test-acc-tf-7652665318978899012],
2025-06-23T00:45:53.9184483Z         BadRequestDetail: 
2025-06-23T00:45:53.9184715Z         
2025-06-23T00:45:53.9184981Z         Error: error deleting resource
2025-06-23T00:45:53.9185235Z         
2025-06-23T00:45:53.9186093Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6858a0519c500e6d1cbd646c/streams/test-acc-tf-7652665318978899012/connections/KafkaConnectionDest
2025-06-23T00:45:53.9186853Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-23T00:45:53.9187373Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-23T00:45:53.9187989Z         name test-acc-tf-7652665318978899012 has active processors, and cannot be
2025-06-23T00:45:53.9188591Z         changed. Reason: Forbidden. Params: [test-acc-tf-7652665318978899012],
2025-06-23T00:45:53.9188992Z         BadRequestDetail: 
2025-06-23T00:45:53.9189287Z --- FAIL: TestAccStreamProcessor_withOptions (556.32s)
```
### 2025-06-24
#### FAIL 9 minutes
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-24T00:45:42.323000+00:00-TestAccStreamProcessor_withOptions',confidence=1.0,ts_when='2 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-24T00:45:42.3239939Z === RUN   TestAccStreamProcessor_withOptions
2025-06-24T00:45:42.3240466Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-6803555714027940309
2025-06-24T00:45:42.3240927Z 2025/06/24 00:29:07 [DEBUG] Waiting for state to become: [IDLE]
2025-06-24T00:45:42.3241289Z 2025/06/24 00:32:07 [TRACE] Waiting 1m0s before next try
2025-06-24T00:45:42.3241626Z 2025/06/24 00:33:07 [TRACE] Waiting 10s before next try
2025-06-24T00:45:42.3241963Z 2025/06/24 00:33:17 [TRACE] Waiting 1m0s before next try
2025-06-24T00:45:42.3242292Z 2025/06/24 00:34:17 [TRACE] Waiting 10s before next try
2025-06-24T00:45:42.3242619Z 2025/06/24 00:34:27 [TRACE] Waiting 1m0s before next try
2025-06-24T00:45:42.3242962Z 2025/06/24 00:35:27 [TRACE] Waiting 10s before next try
2025-06-24T00:45:42.3243292Z 2025/06/24 00:35:37 [TRACE] Waiting 1m0s before next try
2025-06-24T00:45:42.3243615Z 2025/06/24 00:36:38 [TRACE] Waiting 10s before next try
2025-06-24T00:45:42.3243946Z 2025/06/24 00:36:48 [TRACE] Waiting 1m0s before next try
2025-06-24T00:45:42.3293857Z === CONT  TestAccStreamProcessor_withOptions
2025-06-24T00:45:42.3362867Z === NAME  TestAccStreamProcessor_withOptions
2025-06-24T00:45:42.3363332Z     resource_test.go:102: Step 1/2 error: Error running apply: exit status 1
2025-06-24T00:45:42.3363677Z         
2025-06-24T00:45:42.3363937Z         Error: error creating resource
2025-06-24T00:45:42.3364196Z         
2025-06-24T00:45:42.3364542Z           with mongodbatlas_stream_processor.processor,
2025-06-24T00:45:42.3365223Z           on terraform_plugin_test.tf line 57, in resource "mongodbatlas_stream_processor" "processor":
2025-06-24T00:45:42.3365850Z           57: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-24T00:45:42.3366170Z         
2025-06-24T00:45:42.3366901Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6859f14f22100658cf2667ae/streams/test-acc-tf-3747982078304467712/processor
2025-06-24T00:45:42.3367709Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-24T00:45:42.3368342Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-24T00:45:42.3369197Z         failed to acquire resources for stream processor validation: internal error
2025-06-24T00:45:42.3369811Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-24T00:45:42.3370409Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-24T00:45:42.3371044Z         processor validation: internal error while provisioning resource from global
2025-06-24T00:45:42.3371527Z         resource manager], BadRequestDetail: 
2025-06-24T00:45:42.3392368Z    test_name=TestAccStreamProcessor_withOptions test_terraform_path=/home/runner/work/_temp/d8e357a3-8987-4c72-938b-5a44839167de/terraform test_working_directory=/tmp/plugintest862836170 test_step_number=1
2025-06-24T00:45:42.3393430Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-24T00:45:42.3393856Z         
2025-06-24T00:45:42.3394120Z         Error: error deleting resource
2025-06-24T00:45:42.3394378Z         
2025-06-24T00:45:42.3395230Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6859f14f22100658cf2667ae/streams/test-acc-tf-3747982078304467712/connections/KafkaConnectionDest
2025-06-24T00:45:42.3395980Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-24T00:45:42.3396502Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-24T00:45:42.3397125Z         name test-acc-tf-3747982078304467712 has active processors, and cannot be
2025-06-24T00:45:42.3397728Z         changed. Reason: Forbidden. Params: [test-acc-tf-3747982078304467712],
2025-06-24T00:45:42.3398131Z         BadRequestDetail: 
2025-06-24T00:45:42.3398363Z         
2025-06-24T00:45:42.3398627Z         Error: error deleting resource
2025-06-24T00:45:42.3399057Z         
2025-06-24T00:45:42.3399920Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6859f14f22100658cf2667ae/streams/test-acc-tf-3747982078304467712/connections/ClusterConnectionSrc
2025-06-24T00:45:42.3400692Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-24T00:45:42.3401215Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-24T00:45:42.3401825Z         name test-acc-tf-3747982078304467712 has active processors, and cannot be
2025-06-24T00:45:42.3402424Z         changed. Reason: Forbidden. Params: [test-acc-tf-3747982078304467712],
2025-06-24T00:45:42.3402825Z         BadRequestDetail: 
2025-06-24T00:45:42.3403130Z --- FAIL: TestAccStreamProcessor_withOptions (553.55s)
```
### 2025-06-25
#### FAIL 8 minutes
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-25T00:45:03.609000+00:00-TestAccStreamProcessor_withOptions',confidence=1.0,ts_when='a day ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-25T00:45:03.6097381Z === RUN   TestAccStreamProcessor_withOptions
2025-06-25T00:45:03.6098275Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-7745968048882310973
2025-06-25T00:45:03.6099058Z 2025/06/25 00:29:26 [DEBUG] Waiting for state to become: [IDLE]
2025-06-25T00:45:03.6099682Z 2025/06/25 00:32:26 [TRACE] Waiting 1m0s before next try
2025-06-25T00:45:03.6100272Z 2025/06/25 00:33:26 [TRACE] Waiting 10s before next try
2025-06-25T00:45:03.6100869Z 2025/06/25 00:33:36 [TRACE] Waiting 1m0s before next try
2025-06-25T00:45:03.6101452Z 2025/06/25 00:34:36 [TRACE] Waiting 10s before next try
2025-06-25T00:45:03.6102044Z 2025/06/25 00:34:47 [TRACE] Waiting 1m0s before next try
2025-06-25T00:45:03.6102623Z 2025/06/25 00:35:47 [TRACE] Waiting 10s before next try
2025-06-25T00:45:03.6103195Z 2025/06/25 00:35:57 [TRACE] Waiting 1m0s before next try
2025-06-25T00:45:03.6103768Z 2025/06/25 00:36:57 [TRACE] Waiting 10s before next try
2025-06-25T00:45:03.6191929Z === CONT  TestAccStreamProcessor_withOptions
2025-06-25T00:45:03.6314004Z === NAME  TestAccStreamProcessor_withOptions
2025-06-25T00:45:03.6314886Z     resource_test.go:102: Step 1/2 error: Error running apply: exit status 1
2025-06-25T00:45:03.6315673Z         
2025-06-25T00:45:03.6316144Z         Error: error creating resource
2025-06-25T00:45:03.6316606Z         
2025-06-25T00:45:03.6317217Z           with mongodbatlas_stream_processor.processor,
2025-06-25T00:45:03.6318434Z           on terraform_plugin_test.tf line 57, in resource "mongodbatlas_stream_processor" "processor":
2025-06-25T00:45:03.6319564Z           57: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-25T00:45:03.6320130Z         
2025-06-25T00:45:03.6321462Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b42e3b37149039973cb77/streams/test-acc-tf-2878817742186390633/processor
2025-06-25T00:45:03.6323092Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-25T00:45:03.6324221Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-25T00:45:03.6325548Z         failed to acquire resources for stream processor validation: internal error
2025-06-25T00:45:03.6326669Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-25T00:45:03.6327749Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-25T00:45:03.6328900Z         processor validation: internal error while provisioning resource from global
2025-06-25T00:45:03.6329762Z         resource manager], BadRequestDetail: 
2025-06-25T00:45:03.6367186Z    test_terraform_path=/home/runner/work/_temp/9f38391e-f747-44e3-a1c9-4c871819e1cf/terraform test_working_directory=/tmp/plugintest162425405 test_step_number=1
2025-06-25T00:45:03.6368826Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-25T00:45:03.6369560Z         
2025-06-25T00:45:03.6370029Z         Error: error deleting resource
2025-06-25T00:45:03.6370480Z         
2025-06-25T00:45:03.6372024Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b42e3b37149039973cb77/streams/test-acc-tf-2878817742186390633/connections/KafkaConnectionDest
2025-06-25T00:45:03.6373362Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-25T00:45:03.6374304Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-25T00:45:03.6375563Z         name test-acc-tf-2878817742186390633 has active processors, and cannot be
2025-06-25T00:45:03.6376658Z         changed. Reason: Forbidden. Params: [test-acc-tf-2878817742186390633],
2025-06-25T00:45:03.6377371Z         BadRequestDetail: 
2025-06-25T00:45:03.6377769Z         
2025-06-25T00:45:03.6378232Z         Error: error deleting resource
2025-06-25T00:45:03.6378688Z         
2025-06-25T00:45:03.6380261Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b42e3b37149039973cb77/streams/test-acc-tf-2878817742186390633/connections/ClusterConnectionSrc
2025-06-25T00:45:03.6381609Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-25T00:45:03.6382555Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-25T00:45:03.6383676Z         name test-acc-tf-2878817742186390633 has active processors, and cannot be
2025-06-25T00:45:03.6384750Z         changed. Reason: Forbidden. Params: [test-acc-tf-2878817742186390633],
2025-06-25T00:45:03.6385609Z         BadRequestDetail: 
2025-06-25T00:45:03.6386131Z --- FAIL: TestAccStreamProcessor_withOptions (493.90s)
```
#### FAIL 10 minutes
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-25T06:57:33.830000+00:00-TestAccStreamProcessor_withOptions',confidence=1.0,ts_when='a day ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-25T06:57:33.8301052Z === RUN   TestAccStreamProcessor_withOptions
2025-06-25T06:57:33.8301577Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-1807525786440199806
2025-06-25T06:57:33.8302061Z 2025/06/25 06:41:36 [DEBUG] Waiting for state to become: [IDLE]
2025-06-25T06:57:33.8302468Z 2025/06/25 06:44:36 [TRACE] Waiting 1m0s before next try
2025-06-25T06:57:33.8302837Z 2025/06/25 06:45:36 [TRACE] Waiting 10s before next try
2025-06-25T06:57:33.8303208Z 2025/06/25 06:45:46 [TRACE] Waiting 1m0s before next try
2025-06-25T06:57:33.8303584Z 2025/06/25 06:46:46 [TRACE] Waiting 10s before next try
2025-06-25T06:57:33.8303946Z 2025/06/25 06:46:57 [TRACE] Waiting 1m0s before next try
2025-06-25T06:57:33.8304310Z 2025/06/25 06:47:57 [TRACE] Waiting 10s before next try
2025-06-25T06:57:33.8304671Z 2025/06/25 06:48:07 [TRACE] Waiting 1m0s before next try
2025-06-25T06:57:33.8305042Z 2025/06/25 06:49:07 [TRACE] Waiting 10s before next try
2025-06-25T06:57:33.8305397Z 2025/06/25 06:49:17 [TRACE] Waiting 1m0s before next try
2025-06-25T06:57:33.8305754Z 2025/06/25 06:50:17 [TRACE] Waiting 10s before next try
2025-06-25T06:57:33.8306121Z 2025/06/25 06:50:27 [TRACE] Waiting 1m0s before next try
2025-06-25T06:57:33.8358670Z === CONT  TestAccStreamProcessor_withOptions
2025-06-25T06:57:33.8521840Z === NAME  TestAccStreamProcessor_withOptions
2025-06-25T06:57:33.8522345Z     resource_test.go:102: Step 1/2 error: Error running apply: exit status 1
2025-06-25T06:57:33.8522722Z         
2025-06-25T06:57:33.8523022Z         Error: error creating resource
2025-06-25T06:57:33.8523320Z         
2025-06-25T06:57:33.8523698Z           with mongodbatlas_stream_processor.processor,
2025-06-25T06:57:33.8524393Z           on terraform_plugin_test.tf line 57, in resource "mongodbatlas_stream_processor" "processor":
2025-06-25T06:57:33.8525041Z           57: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-25T06:57:33.8525398Z         
2025-06-25T06:57:33.8526154Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b9a1d2b85d3299b8af326/streams/test-acc-tf-4049028464281190333/processor
2025-06-25T06:57:33.8526988Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-25T06:57:33.8527799Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-25T06:57:33.8528593Z         failed to acquire resources for stream processor validation: internal error
2025-06-25T06:57:33.8529238Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-25T06:57:33.8529865Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-25T06:57:33.8530520Z         processor validation: internal error while provisioning resource from global
2025-06-25T06:57:33.8531030Z         resource manager], BadRequestDetail: 
2025-06-25T06:57:33.8552926Z    test_terraform_path=/home/runner/work/_temp/15d5fe85-f979-4fd8-8262-c0d2e6804eb4/terraform test_working_directory=/tmp/plugintest1748233452
2025-06-25T06:57:33.8553818Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-25T06:57:33.8554271Z         
2025-06-25T06:57:33.8554564Z         Error: error deleting resource
2025-06-25T06:57:33.8554855Z         
2025-06-25T06:57:33.8555750Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b9a1d2b85d3299b8af326/streams/test-acc-tf-4049028464281190333/connections/ClusterConnectionSrc
2025-06-25T06:57:33.8556540Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-25T06:57:33.8557202Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-25T06:57:33.8557971Z         name test-acc-tf-4049028464281190333 has active processors, and cannot be
2025-06-25T06:57:33.8558601Z         changed. Reason: Forbidden. Params: [test-acc-tf-4049028464281190333],
2025-06-25T06:57:33.8559029Z         BadRequestDetail: 
2025-06-25T06:57:33.8559286Z         
2025-06-25T06:57:33.8559584Z         Error: error deleting resource
2025-06-25T06:57:33.8559866Z         
2025-06-25T06:57:33.8560765Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b9a1d2b85d3299b8af326/streams/test-acc-tf-4049028464281190333/connections/KafkaConnectionDest
2025-06-25T06:57:33.8561546Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-25T06:57:33.8562094Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-25T06:57:33.8562726Z         name test-acc-tf-4049028464281190333 has active processors, and cannot be
2025-06-25T06:57:33.8563349Z         changed. Reason: Forbidden. Params: [test-acc-tf-4049028464281190333],
2025-06-25T06:57:33.8563781Z         BadRequestDetail: 
2025-06-25T06:57:33.8564113Z --- FAIL: TestAccStreamProcessor_withOptions (624.70s)
```
### 2025-06-26
#### FAIL 9 minutes
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-26T00:44:37.318000+00:00-TestAccStreamProcessor_withOptions',confidence=1.0,ts_when='2 hours ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-26T00:44:37.3187670Z === RUN   TestAccStreamProcessor_withOptions
2025-06-26T00:44:37.3188214Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-7114317329423864402
2025-06-26T00:44:37.3188705Z 2025/06/26 00:29:17 [DEBUG] Waiting for state to become: [IDLE]
2025-06-26T00:44:37.3189106Z 2025/06/26 00:32:18 [TRACE] Waiting 1m0s before next try
2025-06-26T00:44:37.3189686Z 2025/06/26 00:33:18 [TRACE] Waiting 10s before next try
2025-06-26T00:44:37.3190060Z 2025/06/26 00:33:28 [TRACE] Waiting 1m0s before next try
2025-06-26T00:44:37.3190435Z 2025/06/26 00:34:28 [TRACE] Waiting 10s before next try
2025-06-26T00:44:37.3190806Z 2025/06/26 00:34:38 [TRACE] Waiting 1m0s before next try
2025-06-26T00:44:37.3191182Z 2025/06/26 00:35:38 [TRACE] Waiting 10s before next try
2025-06-26T00:44:37.3191557Z 2025/06/26 00:35:48 [TRACE] Waiting 1m0s before next try
2025-06-26T00:44:37.3191927Z 2025/06/26 00:36:48 [TRACE] Waiting 10s before next try
2025-06-26T00:44:37.3192293Z 2025/06/26 00:36:58 [TRACE] Waiting 1m0s before next try
2025-06-26T00:44:37.3245574Z === CONT  TestAccStreamProcessor_withOptions
2025-06-26T00:44:37.3363596Z === NAME  TestAccStreamProcessor_withOptions
2025-06-26T00:44:37.3364101Z     resource_test.go:102: Step 1/2 error: Error running apply: exit status 1
2025-06-26T00:44:37.3364484Z         
2025-06-26T00:44:37.3364783Z         Error: error creating resource
2025-06-26T00:44:37.3365088Z         
2025-06-26T00:44:37.3365477Z           with mongodbatlas_stream_processor.processor,
2025-06-26T00:44:37.3366319Z           on terraform_plugin_test.tf line 57, in resource "mongodbatlas_stream_processor" "processor":
2025-06-26T00:44:37.3366984Z           57: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-26T00:44:37.3367330Z         
2025-06-26T00:44:37.3368093Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685c945b5c10882b9844048e/streams/test-acc-tf-401454483653613394/processor
2025-06-26T00:44:37.3368934Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-26T00:44:37.3369809Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-26T00:44:37.3370496Z         failed to acquire resources for stream processor validation: internal error
2025-06-26T00:44:37.3371152Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-26T00:44:37.3371798Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-26T00:44:37.3372604Z         processor validation: internal error while provisioning resource from global
2025-06-26T00:44:37.3373118Z         resource manager], BadRequestDetail: 
2025-06-26T00:44:37.3395200Z   
2025-06-26T00:44:37.3395696Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-26T00:44:37.3396151Z         
2025-06-26T00:44:37.3396444Z         Error: error deleting resource
2025-06-26T00:44:37.3396848Z         
2025-06-26T00:44:37.3397738Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685c945b5c10882b9844048e/streams/test-acc-tf-401454483653613394/connections/KafkaConnectionDest
2025-06-26T00:44:37.3398510Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-26T00:44:37.3399077Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-26T00:44:37.3399845Z         name test-acc-tf-401454483653613394 has active processors, and cannot be
2025-06-26T00:44:37.3400496Z         changed. Reason: Forbidden. Params: [test-acc-tf-401454483653613394],
2025-06-26T00:44:37.3400931Z         BadRequestDetail: 
2025-06-26T00:44:37.3401189Z         
2025-06-26T00:44:37.3401487Z         Error: error deleting resource
2025-06-26T00:44:37.3401768Z         
2025-06-26T00:44:37.3402650Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685c945b5c10882b9844048e/streams/test-acc-tf-401454483653613394/connections/ClusterConnectionSrc
2025-06-26T00:44:37.3403436Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-26T00:44:37.3403991Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-26T00:44:37.3404639Z         name test-acc-tf-401454483653613394 has active processors, and cannot be
2025-06-26T00:44:37.3405279Z         changed. Reason: Forbidden. Params: [test-acc-tf-401454483653613394],
2025-06-26T00:44:37.3405712Z         BadRequestDetail: 
2025-06-26T00:44:37.3406037Z --- FAIL: TestAccStreamProcessor_withOptions (553.66s)
```
#### FAIL 8 minutes
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-26T04:28:17.640000+00:00-TestAccStreamProcessor_withOptions',confidence=1.0,ts_when='2 hours ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-26T04:28:17.6400500Z === RUN   TestAccStreamProcessor_withOptions
2025-06-26T04:28:17.6401021Z     resource_test.go:95: Creating execution cluster: test-acc-tf-c-3500613806040192809
2025-06-26T04:28:17.6401484Z 2025/06/26 04:14:07 [DEBUG] Waiting for state to become: [IDLE]
2025-06-26T04:28:17.6401857Z 2025/06/26 04:17:08 [TRACE] Waiting 1m0s before next try
2025-06-26T04:28:17.6402208Z 2025/06/26 04:18:08 [TRACE] Waiting 10s before next try
2025-06-26T04:28:17.6402560Z 2025/06/26 04:18:18 [TRACE] Waiting 1m0s before next try
2025-06-26T04:28:17.6402900Z 2025/06/26 04:19:18 [TRACE] Waiting 10s before next try
2025-06-26T04:28:17.6403246Z 2025/06/26 04:19:28 [TRACE] Waiting 1m0s before next try
2025-06-26T04:28:17.6403589Z 2025/06/26 04:20:28 [TRACE] Waiting 10s before next try
2025-06-26T04:28:17.6403930Z 2025/06/26 04:20:39 [TRACE] Waiting 1m0s before next try
2025-06-26T04:28:17.6404265Z 2025/06/26 04:21:39 [TRACE] Waiting 10s before next try
2025-06-26T04:28:17.6455271Z === CONT  TestAccStreamProcessor_withOptions
2025-06-26T04:28:17.6612319Z === NAME  TestAccStreamProcessor_withOptions
2025-06-26T04:28:17.6612787Z     resource_test.go:102: Step 1/2 error: Error running apply: exit status 1
2025-06-26T04:28:17.6613281Z         
2025-06-26T04:28:17.6613658Z         Error: error creating resource
2025-06-26T04:28:17.6613926Z         
2025-06-26T04:28:17.6614286Z           with mongodbatlas_stream_processor.processor,
2025-06-26T04:28:17.6614977Z           on terraform_plugin_test.tf line 57, in resource "mongodbatlas_stream_processor" "processor":
2025-06-26T04:28:17.6615624Z           57: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-26T04:28:17.6615951Z         
2025-06-26T04:28:17.6616685Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685cc90e0461cf3cf51967fb/streams/test-acc-tf-2078858846464965805/processor
2025-06-26T04:28:17.6617505Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-26T04:28:17.6618148Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-26T04:28:17.6619065Z         failed to acquire resources for stream processor validation: internal error
2025-06-26T04:28:17.6619707Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-26T04:28:17.6620314Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-26T04:28:17.6620960Z         processor validation: internal error while provisioning resource from global
2025-06-26T04:28:17.6621590Z         resource manager], BadRequestDetail: 
2025-06-26T04:28:17.6643121Z   
2025-06-26T04:28:17.6643579Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-26T04:28:17.6644011Z         
2025-06-26T04:28:17.6644282Z         Error: error deleting resource
2025-06-26T04:28:17.6644555Z         
2025-06-26T04:28:17.6645540Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685cc90e0461cf3cf51967fb/streams/test-acc-tf-2078858846464965805/connections/KafkaConnectionDest
2025-06-26T04:28:17.6646308Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-26T04:28:17.6646849Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-26T04:28:17.6647473Z         name test-acc-tf-2078858846464965805 has active processors, and cannot be
2025-06-26T04:28:17.6648079Z         changed. Reason: Forbidden. Params: [test-acc-tf-2078858846464965805],
2025-06-26T04:28:17.6648489Z         BadRequestDetail: 
2025-06-26T04:28:17.6648953Z         
2025-06-26T04:28:17.6649225Z         Error: error deleting resource
2025-06-26T04:28:17.6649491Z         
2025-06-26T04:28:17.6650478Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685cc90e0461cf3cf51967fb/streams/test-acc-tf-2078858846464965805/connections/ClusterConnectionSrc
2025-06-26T04:28:17.6651244Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-26T04:28:17.6651772Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-26T04:28:17.6652391Z         name test-acc-tf-2078858846464965805 has active processors, and cannot be
2025-06-26T04:28:17.6653001Z         changed. Reason: Forbidden. Params: [test-acc-tf-2078858846464965805],
2025-06-26T04:28:17.6653408Z         BadRequestDetail: 
2025-06-26T04:28:17.6653709Z --- FAIL: TestAccStreamProcessor_withOptions (493.88s)
```