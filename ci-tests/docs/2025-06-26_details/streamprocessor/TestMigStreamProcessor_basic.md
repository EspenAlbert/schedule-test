# streamprocessor/TestMigStreamProcessor_basic Test Details
# Found 47 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 28) FAIL(x 19)
Success rate: 59.57%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 15 seconds
```
2025-05-28T01:07:43.6584502Z === RUN   TestMigStreamProcessor_basic
2025-05-28T01:07:43.6585058Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-6820997184027359970
2025-05-28T01:07:43.6672123Z === CONT  TestMigStreamProcessor_basic
2025-05-28T01:07:43.6683869Z --- PASS: TestMigStreamProcessor_basic (15.96s)
```
#### PASS 10 seconds
```
2025-05-28T08:53:26.7120434Z === RUN   TestMigStreamProcessor_basic
2025-05-28T08:53:26.7121363Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-6104789652173421457
2025-05-28T08:53:26.7185486Z === CONT  TestMigStreamProcessor_basic
2025-05-28T08:53:26.7196435Z --- PASS: TestMigStreamProcessor_basic (10.38s)
```
### 2025-05-29
#### FAIL 34 seconds
```
2025-05-29T01:00:46.6701207Z === RUN   TestMigStreamProcessor_basic
2025-05-29T01:00:46.6701771Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-7368001957873500241
2025-05-29T01:00:46.6785186Z === CONT  TestMigStreamProcessor_basic
2025-05-29T01:00:46.6807935Z === NAME  TestMigStreamProcessor_basic
2025-05-29T01:00:46.6808451Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-05-29T01:00:46.6808849Z         
2025-05-29T01:00:46.6809121Z         Error: error creating resource
2025-05-29T01:00:46.6809393Z         
2025-05-29T01:00:46.6809748Z           with mongodbatlas_stream_processor.processor,
2025-05-29T01:00:46.6810431Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-05-29T01:00:46.6811061Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-29T01:00:46.6811383Z         
2025-05-29T01:00:46.6812120Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6837ac503945df7a919156b2/streams/test-acc-tf-8956464075368940473/processor
2025-05-29T01:00:46.6813082Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-29T01:00:46.6813724Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-05-29T01:00:46.6814366Z         failed to acquire resources for stream processor validation: internal error
2025-05-29T01:00:46.6814993Z         while provisioning resource from global resource manager. Reason: Bad
2025-05-29T01:00:46.6815593Z         Request. Params: [new-processor failed to acquire resources for stream
2025-05-29T01:00:46.6816232Z         processor validation: internal error while provisioning resource from global
2025-05-29T01:00:46.6816726Z         resource manager], BadRequestDetail: 
2025-05-29T01:00:46.6823232Z    test_name=TestMigStreamProcessor_basic test_working_directory=/tmp/plugintest3238447998 test_step_number=1
2025-05-29T01:00:46.6823996Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-29T01:00:46.6824429Z         
2025-05-29T01:00:46.6824705Z         Error: error deleting resource
2025-05-29T01:00:46.6824976Z         
2025-05-29T01:00:46.6825826Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6837ac503945df7a919156b2/streams/test-acc-tf-8956464075368940473/connections/sample_stream_solar
2025-05-29T01:00:46.6826713Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-29T01:00:46.6827242Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-29T01:00:46.6827858Z         name test-acc-tf-8956464075368940473 has active processors, and cannot be
2025-05-29T01:00:46.6828454Z         changed. Reason: Forbidden. Params: [test-acc-tf-8956464075368940473],
2025-05-29T01:00:46.6828866Z         BadRequestDetail: 
2025-05-29T01:00:46.6829161Z --- FAIL: TestMigStreamProcessor_basic (34.79s)
```
#### FAIL 36 seconds
```
2025-05-29T07:17:39.5359256Z === RUN   TestMigStreamProcessor_basic
2025-05-29T07:17:39.5360142Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-647008362295415907
2025-05-29T07:17:39.5434263Z === CONT  TestMigStreamProcessor_basic
2025-05-29T07:17:39.5558027Z === NAME  TestMigStreamProcessor_basic
2025-05-29T07:17:39.5558539Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-05-29T07:17:39.5559103Z         
2025-05-29T07:17:39.5559381Z         Error: error creating resource
2025-05-29T07:17:39.5559654Z         
2025-05-29T07:17:39.5560017Z           with mongodbatlas_stream_processor.processor,
2025-05-29T07:17:39.5560725Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-05-29T07:17:39.5561369Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-29T07:17:39.5561704Z         
2025-05-29T07:17:39.5562455Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6838069bba50867780ba4b6a/streams/test-acc-tf-4624691614621250592/processor
2025-05-29T07:17:39.5563285Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-29T07:17:39.5563936Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-05-29T07:17:39.5564605Z         failed to acquire resources for stream processor validation: internal error
2025-05-29T07:17:39.5565245Z         while provisioning resource from global resource manager. Reason: Bad
2025-05-29T07:17:39.5565863Z         Request. Params: [new-processor failed to acquire resources for stream
2025-05-29T07:17:39.5566645Z         processor validation: internal error while provisioning resource from global
2025-05-29T07:17:39.5567153Z         resource manager], BadRequestDetail: 
2025-05-29T07:17:39.5573599Z    test_terraform_path=/home/runner/work/_temp/ee17ef91-6556-450b-9817-0e52a46fe2b7/terraform test_working_directory=/tmp/plugintest2728091170 test_name=TestMigStreamProcessor_basic
2025-05-29T07:17:39.5574611Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-29T07:17:39.5575048Z         
2025-05-29T07:17:39.5575324Z         Error: error deleting resource
2025-05-29T07:17:39.5575596Z         
2025-05-29T07:17:39.5576465Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6838069bba50867780ba4b6a/streams/test-acc-tf-4624691614621250592/connections/sample_stream_solar
2025-05-29T07:17:39.5577233Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-29T07:17:39.5577776Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-29T07:17:39.5578419Z         name test-acc-tf-4624691614621250592 has active processors, and cannot be
2025-05-29T07:17:39.5579202Z         changed. Reason: Forbidden. Params: [test-acc-tf-4624691614621250592],
2025-05-29T07:17:39.5579625Z         BadRequestDetail: 
2025-05-29T07:17:39.5579917Z --- FAIL: TestMigStreamProcessor_basic (36.90s)
```
### 2025-05-30
#### PASS 12 seconds
```
2025-05-30T01:23:57.2975027Z === RUN   TestMigStreamProcessor_basic
2025-05-30T01:23:57.2975590Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-8981679418406471685
2025-05-30T01:23:57.3034392Z === CONT  TestMigStreamProcessor_basic
2025-05-30T01:23:57.3045787Z --- PASS: TestMigStreamProcessor_basic (12.22s)
```
#### PASS 14 seconds
```
2025-05-30T07:48:04.6977867Z === RUN   TestMigStreamProcessor_basic
2025-05-30T07:48:04.6978464Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-8496664849386955416
2025-05-30T07:48:04.7049253Z === CONT  TestMigStreamProcessor_basic
2025-05-30T07:48:04.7060832Z --- PASS: TestMigStreamProcessor_basic (14.16s)
```
### 2025-05-31
#### PASS 12 seconds
```
2025-05-31T00:52:21.0437834Z === RUN   TestMigStreamProcessor_basic
2025-05-31T00:52:21.0438714Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-5364060595597496730
2025-05-31T00:52:21.0547457Z === CONT  TestMigStreamProcessor_basic
2025-05-31T00:52:21.0566354Z --- PASS: TestMigStreamProcessor_basic (12.16s)
```
### 2025-06-01
#### PASS 16 seconds
```
2025-06-01T00:57:09.6289881Z === RUN   TestMigStreamProcessor_basic
2025-06-01T00:57:09.6291048Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-4660525665171671411
2025-06-01T00:57:09.6378387Z === CONT  TestMigStreamProcessor_basic
2025-06-01T00:57:09.6390275Z --- PASS: TestMigStreamProcessor_basic (16.61s)
```
#### PASS 11 seconds
```
2025-06-01T05:05:05.5405614Z === RUN   TestMigStreamProcessor_basic
2025-06-01T05:05:05.5406197Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-7490862680678713035
2025-06-01T05:05:05.5468820Z === CONT  TestMigStreamProcessor_basic
2025-06-01T05:05:05.5481775Z --- PASS: TestMigStreamProcessor_basic (11.50s)
```
#### PASS 11 seconds
```
2025-06-01T09:13:36.5652172Z === RUN   TestMigStreamProcessor_basic
2025-06-01T09:13:36.5652727Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-1698935044262964167
2025-06-01T09:13:36.5710345Z === CONT  TestMigStreamProcessor_basic
2025-06-01T09:13:36.5721456Z --- PASS: TestMigStreamProcessor_basic (11.38s)
```
#### PASS 12 seconds
```
2025-06-01T13:23:08.9046766Z === RUN   TestMigStreamProcessor_basic
2025-06-01T13:23:08.9047543Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-4804426550153857135
2025-06-01T13:23:08.9115793Z === CONT  TestMigStreamProcessor_basic
2025-06-01T13:23:08.9126891Z --- PASS: TestMigStreamProcessor_basic (12.31s)
```
#### PASS 15 seconds
```
2025-06-01T17:32:31.2704421Z === RUN   TestMigStreamProcessor_basic
2025-06-01T17:32:31.2705431Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-5121102382707207830
2025-06-01T17:32:31.2822334Z === CONT  TestMigStreamProcessor_basic
2025-06-01T17:32:31.2842504Z --- PASS: TestMigStreamProcessor_basic (15.84s)
```
#### PASS 12 seconds
```
2025-06-01T21:41:05.5693893Z === RUN   TestMigStreamProcessor_basic
2025-06-01T21:41:05.5694859Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-391542746717361042
2025-06-01T21:41:05.5794685Z === CONT  TestMigStreamProcessor_basic
2025-06-01T21:41:05.5814638Z --- PASS: TestMigStreamProcessor_basic (12.01s)
```
#### PASS 11 seconds
```
2025-06-01T21:51:39.1383658Z === RUN   TestMigStreamProcessor_basic
2025-06-01T21:51:39.1384240Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-3507375900765666601
2025-06-01T21:51:39.1462909Z === CONT  TestMigStreamProcessor_basic
2025-06-01T21:51:39.1473882Z --- PASS: TestMigStreamProcessor_basic (11.17s)
```
### 2025-06-02
#### PASS 17 seconds
```
2025-06-02T00:54:43.9667628Z === RUN   TestMigStreamProcessor_basic
2025-06-02T00:54:43.9668660Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-2499899722578381536
2025-06-02T00:54:43.9783452Z === CONT  TestMigStreamProcessor_basic
2025-06-02T00:54:43.9795965Z --- PASS: TestMigStreamProcessor_basic (17.59s)
```
#### PASS 18 seconds
```
2025-06-02T01:50:38.5583364Z === RUN   TestMigStreamProcessor_basic
2025-06-02T01:50:38.5596690Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-3677887969738853731
2025-06-02T01:50:38.5665842Z === CONT  TestMigStreamProcessor_basic
2025-06-02T01:50:38.5679119Z --- PASS: TestMigStreamProcessor_basic (18.60s)
```
#### PASS 15 seconds
```
2025-06-02T06:04:58.7325541Z === RUN   TestMigStreamProcessor_basic
2025-06-02T06:04:58.7326115Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-3077917159346586141
2025-06-02T06:04:58.7398462Z === CONT  TestMigStreamProcessor_basic
2025-06-02T06:04:58.7411956Z --- PASS: TestMigStreamProcessor_basic (15.30s)
```
### 2025-06-03
#### PASS 11 seconds
```
2025-06-03T00:53:56.2470722Z === RUN   TestMigStreamProcessor_basic
2025-06-03T00:53:56.2471876Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-1408694717281188109
2025-06-03T00:53:56.2592134Z === CONT  TestMigStreamProcessor_basic
2025-06-03T00:53:56.2612762Z --- PASS: TestMigStreamProcessor_basic (11.66s)
```
#### PASS 15 seconds
```
2025-06-03T18:15:23.6565565Z === RUN   TestMigStreamProcessor_basic
2025-06-03T18:15:23.6566129Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-9035834468137125748
2025-06-03T18:15:23.6648916Z === CONT  TestMigStreamProcessor_basic
2025-06-03T18:15:23.6660686Z --- PASS: TestMigStreamProcessor_basic (15.39s)
```
#### PASS 11 seconds
```
2025-06-03T19:21:20.0916616Z === RUN   TestMigStreamProcessor_basic
2025-06-03T19:21:20.0917260Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-6770854515212398444
2025-06-03T19:21:20.0975991Z === CONT  TestMigStreamProcessor_basic
2025-06-03T19:21:20.0987349Z --- PASS: TestMigStreamProcessor_basic (11.99s)
```
### 2025-06-04
#### PASS 15 seconds
```
2025-06-04T00:44:38.9480622Z === RUN   TestMigStreamProcessor_basic
2025-06-04T00:44:38.9481173Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-5276573237815295917
2025-06-04T00:44:38.9550095Z === CONT  TestMigStreamProcessor_basic
2025-06-04T00:44:38.9562062Z --- PASS: TestMigStreamProcessor_basic (15.86s)
```
### 2025-06-05
#### PASS 10 seconds
```
2025-06-05T01:03:58.7126193Z === RUN   TestMigStreamProcessor_basic
2025-06-05T01:03:58.7126771Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-621842086176994263
2025-06-05T01:03:58.7207722Z === CONT  TestMigStreamProcessor_basic
2025-06-05T01:03:58.7217586Z --- PASS: TestMigStreamProcessor_basic (10.90s)
```
### 2025-06-06
#### FAIL 35 seconds
```
2025-06-06T00:46:43.0283364Z === RUN   TestMigStreamProcessor_basic
2025-06-06T00:46:43.0283922Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-3702621171846604669
2025-06-06T00:46:43.0341166Z === CONT  TestMigStreamProcessor_basic
2025-06-06T00:46:43.0362515Z === NAME  TestMigStreamProcessor_basic
2025-06-06T00:46:43.0363028Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-06T00:46:43.0363431Z         
2025-06-06T00:46:43.0363714Z         Error: error creating resource
2025-06-06T00:46:43.0363987Z         
2025-06-06T00:46:43.0364355Z           with mongodbatlas_stream_processor.processor,
2025-06-06T00:46:43.0365047Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-06T00:46:43.0365684Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-06T00:46:43.0366157Z         
2025-06-06T00:46:43.0366889Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68423696c64ff333daf68c99/streams/test-acc-tf-79568300559920452/processor
2025-06-06T00:46:43.0367699Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-06T00:46:43.0368352Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-06T00:46:43.0369011Z         failed to acquire resources for stream processor validation: internal error
2025-06-06T00:46:43.0369637Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-06T00:46:43.0370246Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-06T00:46:43.0370896Z         processor validation: internal error while provisioning resource from global
2025-06-06T00:46:43.0371394Z         resource manager], BadRequestDetail: 
2025-06-06T00:46:43.0378184Z   
2025-06-06T00:46:43.0378665Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-06T00:46:43.0379095Z         
2025-06-06T00:46:43.0379378Z         Error: error deleting resource
2025-06-06T00:46:43.0379649Z         
2025-06-06T00:46:43.0380500Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68423696c64ff333daf68c99/streams/test-acc-tf-79568300559920452/connections/sample_stream_solar
2025-06-06T00:46:43.0381255Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-06T00:46:43.0381791Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-06T00:46:43.0382597Z         name test-acc-tf-79568300559920452 has active processors, and cannot be
2025-06-06T00:46:43.0383310Z         changed. Reason: Forbidden. Params: [test-acc-tf-79568300559920452],
2025-06-06T00:46:43.0383731Z         BadRequestDetail: 
2025-06-06T00:46:43.0384036Z --- FAIL: TestMigStreamProcessor_basic (35.22s)
```
### 2025-06-07
#### FAIL 35 seconds
```
2025-06-07T00:46:29.1356436Z === RUN   TestMigStreamProcessor_basic
2025-06-07T00:46:29.1357016Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-3924418726489673823
2025-06-07T00:46:29.1415957Z === CONT  TestMigStreamProcessor_basic
2025-06-07T00:46:29.1492571Z === NAME  TestMigStreamProcessor_basic
2025-06-07T00:46:29.1493046Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-07T00:46:29.1493425Z         
2025-06-07T00:46:29.1493692Z         Error: error creating resource
2025-06-07T00:46:29.1493954Z         
2025-06-07T00:46:29.1494405Z           with mongodbatlas_stream_processor.processor,
2025-06-07T00:46:29.1495058Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-07T00:46:29.1495658Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-07T00:46:29.1495976Z         
2025-06-07T00:46:29.1496670Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/684387c23cccfc2b22afa404/streams/test-acc-tf-4271576555399227563/processor
2025-06-07T00:46:29.1497452Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-07T00:46:29.1498061Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-07T00:46:29.1498683Z         failed to acquire resources for stream processor validation: internal error
2025-06-07T00:46:29.1499282Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-07T00:46:29.1499861Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-07T00:46:29.1500476Z         processor validation: internal error while provisioning resource from global
2025-06-07T00:46:29.1500940Z         resource manager], BadRequestDetail: 
2025-06-07T00:46:29.1507495Z   
2025-06-07T00:46:29.1507943Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-07T00:46:29.1508353Z         
2025-06-07T00:46:29.1508623Z         Error: error deleting resource
2025-06-07T00:46:29.1508885Z         
2025-06-07T00:46:29.1509804Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/684387c23cccfc2b22afa404/streams/test-acc-tf-4271576555399227563/connections/sample_stream_solar
2025-06-07T00:46:29.1510525Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-07T00:46:29.1511031Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-07T00:46:29.1511624Z         name test-acc-tf-4271576555399227563 has active processors, and cannot be
2025-06-07T00:46:29.1512197Z         changed. Reason: Forbidden. Params: [test-acc-tf-4271576555399227563],
2025-06-07T00:46:29.1512587Z         BadRequestDetail: 
2025-06-07T00:46:29.1512867Z --- FAIL: TestMigStreamProcessor_basic (35.41s)
```
### 2025-06-08
#### PASS 10 seconds
```
2025-06-08T00:48:12.6342957Z === RUN   TestMigStreamProcessor_basic
2025-06-08T00:48:12.6343647Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-3955691182387799862
2025-06-08T00:48:12.6409696Z === CONT  TestMigStreamProcessor_basic
2025-06-08T00:48:12.6421459Z --- PASS: TestMigStreamProcessor_basic (10.17s)
```
### 2025-06-09
#### FAIL 35 seconds
```
2025-06-09T00:46:27.3751874Z === RUN   TestMigStreamProcessor_basic
2025-06-09T00:46:27.3752591Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-6590256699842344390
2025-06-09T00:46:27.3827154Z === CONT  TestMigStreamProcessor_basic
2025-06-09T00:46:27.3999197Z === NAME  TestMigStreamProcessor_basic
2025-06-09T00:46:27.3999742Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-09T00:46:27.4000163Z         
2025-06-09T00:46:27.4000453Z         Error: error creating resource
2025-06-09T00:46:27.4000740Z         
2025-06-09T00:46:27.4001115Z           with mongodbatlas_stream_processor.processor,
2025-06-09T00:46:27.4001827Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-09T00:46:27.4002891Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-09T00:46:27.4003251Z         
2025-06-09T00:46:27.4004012Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68462b4be21315547b360fb4/streams/test-acc-tf-1271555009245287241/processor
2025-06-09T00:46:27.4004853Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-09T00:46:27.4005515Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-09T00:46:27.4006184Z         failed to acquire resources for stream processor validation: internal error
2025-06-09T00:46:27.4006825Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-09T00:46:27.4007454Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-09T00:46:27.4008115Z         processor validation: internal error while provisioning resource from global
2025-06-09T00:46:27.4008622Z         resource manager], BadRequestDetail: 
2025-06-09T00:46:27.4015137Z    test_name=TestMigStreamProcessor_basic test_terraform_path=/home/runner/work/_temp/dc9a4a20-bc85-46a9-a0fb-ecc723236841/terraform
2025-06-09T00:46:27.4015999Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-09T00:46:27.4016442Z         
2025-06-09T00:46:27.4016738Z         Error: error deleting resource
2025-06-09T00:46:27.4017027Z         
2025-06-09T00:46:27.4017908Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68462b4be21315547b360fb4/streams/test-acc-tf-1271555009245287241/connections/sample_stream_solar
2025-06-09T00:46:27.4018680Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-09T00:46:27.4019241Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-09T00:46:27.4019893Z         name test-acc-tf-1271555009245287241 has active processors, and cannot be
2025-06-09T00:46:27.4020524Z         changed. Reason: Forbidden. Params: [test-acc-tf-1271555009245287241],
2025-06-09T00:46:27.4020964Z         BadRequestDetail: 
2025-06-09T00:46:27.4021267Z --- FAIL: TestMigStreamProcessor_basic (35.43s)
```
### 2025-06-10
#### FAIL 37 seconds
```
2025-06-10T01:03:02.7200912Z === RUN   TestMigStreamProcessor_basic
2025-06-10T01:03:02.7201462Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-737571919701193057
2025-06-10T01:03:02.7264243Z === CONT  TestMigStreamProcessor_basic
2025-06-10T01:03:02.7285405Z === NAME  TestMigStreamProcessor_basic
2025-06-10T01:03:02.7285901Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-10T01:03:02.7286305Z         
2025-06-10T01:03:02.7286583Z         Error: error creating resource
2025-06-10T01:03:02.7286841Z         
2025-06-10T01:03:02.7287200Z           with mongodbatlas_stream_processor.processor,
2025-06-10T01:03:02.7287885Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-10T01:03:02.7288534Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-10T01:03:02.7288863Z         
2025-06-10T01:03:02.7289606Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68477e6ba888514df22a76ab/streams/test-acc-tf-6070243909649137907/processor
2025-06-10T01:03:02.7290419Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-10T01:03:02.7291048Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-10T01:03:02.7291688Z         failed to acquire resources for stream processor validation: internal error
2025-06-10T01:03:02.7292302Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-10T01:03:02.7293313Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-10T01:03:02.7294705Z         processor validation: internal error while provisioning resource from global
2025-06-10T01:03:02.7295600Z         resource manager], BadRequestDetail: 
2025-06-10T01:03:02.7307740Z   
2025-06-10T01:03:02.7308586Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-10T01:03:02.7309500Z         
2025-06-10T01:03:02.7309986Z         Error: error deleting resource
2025-06-10T01:03:02.7310442Z         
2025-06-10T01:03:02.7312020Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68477e6ba888514df22a76ab/streams/test-acc-tf-6070243909649137907/connections/sample_stream_solar
2025-06-10T01:03:02.7313364Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-10T01:03:02.7314487Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-10T01:03:02.7315620Z         name test-acc-tf-6070243909649137907 has active processors, and cannot be
2025-06-10T01:03:02.7316718Z         changed. Reason: Forbidden. Params: [test-acc-tf-6070243909649137907],
2025-06-10T01:03:02.7317437Z         BadRequestDetail: 
2025-06-10T01:03:02.7317907Z --- FAIL: TestMigStreamProcessor_basic (37.13s)
```
### 2025-06-11
#### FAIL 35 seconds
```
2025-06-11T00:44:41.0769391Z === RUN   TestMigStreamProcessor_basic
2025-06-11T00:44:41.0770355Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-624116285407370163
2025-06-11T00:44:41.0870510Z === CONT  TestMigStreamProcessor_basic
2025-06-11T00:44:41.1045431Z === NAME  TestMigStreamProcessor_basic
2025-06-11T00:44:41.1045921Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-11T00:44:41.1046305Z         
2025-06-11T00:44:41.1046565Z         Error: error creating resource
2025-06-11T00:44:41.1046819Z         
2025-06-11T00:44:41.1047291Z           with mongodbatlas_stream_processor.processor,
2025-06-11T00:44:41.1047970Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-11T00:44:41.1048590Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-11T00:44:41.1048907Z         
2025-06-11T00:44:41.1049631Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6848cdc469b57d1e7dbafb36/streams/test-acc-tf-747968897153225572/processor
2025-06-11T00:44:41.1050433Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-11T00:44:41.1051068Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-11T00:44:41.1051711Z         failed to acquire resources for stream processor validation: internal error
2025-06-11T00:44:41.1052322Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-11T00:44:41.1052918Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-11T00:44:41.1053554Z         processor validation: internal error while provisioning resource from global
2025-06-11T00:44:41.1054032Z         resource manager], BadRequestDetail: 
2025-06-11T00:44:41.1060094Z    test_name=TestMigStreamProcessor_basic test_terraform_path=/home/runner/work/_temp/6bff00f8-f292-4739-b7e7-acd8f60e01b0/terraform test_working_directory=/tmp/plugintest1453739694
2025-06-11T00:44:41.1061078Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-11T00:44:41.1061494Z         
2025-06-11T00:44:41.1061756Z         Error: error deleting resource
2025-06-11T00:44:41.1062029Z         
2025-06-11T00:44:41.1062864Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6848cdc469b57d1e7dbafb36/streams/test-acc-tf-747968897153225572/connections/sample_stream_solar
2025-06-11T00:44:41.1063599Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-11T00:44:41.1064130Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-11T00:44:41.1064735Z         name test-acc-tf-747968897153225572 has active processors, and cannot be
2025-06-11T00:44:41.1065316Z         changed. Reason: Forbidden. Params: [test-acc-tf-747968897153225572],
2025-06-11T00:44:41.1065716Z         BadRequestDetail: 
2025-06-11T00:44:41.1065994Z --- FAIL: TestMigStreamProcessor_basic (35.63s)
```
#### PASS 13 seconds
```
2025-06-11T07:54:27.5975810Z === RUN   TestMigStreamProcessor_basic
2025-06-11T07:54:27.5977044Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-8455133674200894657
2025-06-11T07:54:27.6080775Z === CONT  TestMigStreamProcessor_basic
2025-06-11T07:54:27.6100675Z --- PASS: TestMigStreamProcessor_basic (13.56s)
```
### 2025-06-12
#### PASS 13 seconds
```
2025-06-12T00:44:51.7285954Z === RUN   TestMigStreamProcessor_basic
2025-06-12T00:44:51.7286518Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-8137007609389280305
2025-06-12T00:44:51.7343631Z === CONT  TestMigStreamProcessor_basic
2025-06-12T00:44:51.7354673Z --- PASS: TestMigStreamProcessor_basic (13.35s)
```
### 2025-06-13
#### PASS 14 seconds
```
2025-06-13T00:46:48.4063575Z === RUN   TestMigStreamProcessor_basic
2025-06-13T00:46:48.4064538Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-380705281955580526
2025-06-13T00:46:48.4149786Z === CONT  TestMigStreamProcessor_basic
2025-06-13T00:46:48.4176834Z --- PASS: TestMigStreamProcessor_basic (14.98s)
```
### 2025-06-14
#### FAIL 35 seconds
```
2025-06-14T00:44:17.0802437Z === RUN   TestMigStreamProcessor_basic
2025-06-14T00:44:17.0803597Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-5123019318866194143
2025-06-14T00:44:17.0881837Z === CONT  TestMigStreamProcessor_basic
2025-06-14T00:44:17.1004984Z === NAME  TestMigStreamProcessor_basic
2025-06-14T00:44:17.1005490Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-14T00:44:17.1005888Z         
2025-06-14T00:44:17.1006166Z         Error: error creating resource
2025-06-14T00:44:17.1006433Z         
2025-06-14T00:44:17.1006801Z           with mongodbatlas_stream_processor.processor,
2025-06-14T00:44:17.1007533Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-14T00:44:17.1008182Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-14T00:44:17.1008560Z         
2025-06-14T00:44:17.1009314Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/684cc21e25b50457df29a4d8/streams/test-acc-tf-5386235166274459307/processor
2025-06-14T00:44:17.1010139Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-14T00:44:17.1010799Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-14T00:44:17.1011459Z         failed to acquire resources for stream processor validation: internal error
2025-06-14T00:44:17.1012087Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-14T00:44:17.1012702Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-14T00:44:17.1013577Z         processor validation: internal error while provisioning resource from global
2025-06-14T00:44:17.1014075Z         resource manager], BadRequestDetail: 
2025-06-14T00:44:17.1020396Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/35b409ee-ce81-45e4-8806-e1b4c42fa422/terraform
2025-06-14T00:44:17.1021166Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-14T00:44:17.1021601Z         
2025-06-14T00:44:17.1021875Z         Error: error deleting resource
2025-06-14T00:44:17.1022140Z         
2025-06-14T00:44:17.1023013Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/684cc21e25b50457df29a4d8/streams/test-acc-tf-5386235166274459307/connections/sample_stream_solar
2025-06-14T00:44:17.1024053Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-14T00:44:17.1024587Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-14T00:44:17.1025323Z         name test-acc-tf-5386235166274459307 has active processors, and cannot be
2025-06-14T00:44:17.1025948Z         changed. Reason: Forbidden. Params: [test-acc-tf-5386235166274459307],
2025-06-14T00:44:17.1026363Z         BadRequestDetail: 
2025-06-14T00:44:17.1026650Z --- FAIL: TestMigStreamProcessor_basic (35.53s)
```
### 2025-06-15
#### PASS 15 seconds
```
2025-06-15T00:48:57.1211336Z === RUN   TestMigStreamProcessor_basic
2025-06-15T00:48:57.1211880Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-2975732930939417307
2025-06-15T00:48:57.1268243Z === CONT  TestMigStreamProcessor_basic
2025-06-15T00:48:57.1279410Z --- PASS: TestMigStreamProcessor_basic (15.23s)
```
### 2025-06-16
#### PASS 33 seconds
```
2025-06-16T00:46:42.7768082Z === RUN   TestMigStreamProcessor_basic
2025-06-16T00:46:42.7768623Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-1566803623795768473
2025-06-16T00:46:42.7868680Z === CONT  TestMigStreamProcessor_basic
2025-06-16T00:46:42.7903538Z --- PASS: TestMigStreamProcessor_basic (33.69s)
```
### 2025-06-17
#### FAIL 34 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-17T00:46:36.962000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='6 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-17T00:46:36.0962999Z === RUN   TestMigStreamProcessor_basic
2025-06-17T00:46:36.0963988Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-8885788798807252391
2025-06-17T00:46:36.1066668Z === CONT  TestMigStreamProcessor_basic
2025-06-17T00:46:36.1355642Z === NAME  TestMigStreamProcessor_basic
2025-06-17T00:46:36.1356162Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-17T00:46:36.1356557Z         
2025-06-17T00:46:36.1356835Z         Error: error creating resource
2025-06-17T00:46:36.1357093Z         
2025-06-17T00:46:36.1357449Z           with mongodbatlas_stream_processor.processor,
2025-06-17T00:46:36.1358138Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-17T00:46:36.1358948Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-17T00:46:36.1359331Z         
2025-06-17T00:46:36.1360085Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6850b6d36200565f4c9cfff7/streams/test-acc-tf-2617366023840690126/processor
2025-06-17T00:46:36.1360918Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-17T00:46:36.1361554Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-17T00:46:36.1362203Z         failed to acquire resources for stream processor validation: internal error
2025-06-17T00:46:36.1362828Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-17T00:46:36.1363430Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-17T00:46:36.1364079Z         processor validation: internal error while provisioning resource from global
2025-06-17T00:46:36.1364569Z         resource manager], BadRequestDetail: 
2025-06-17T00:46:36.1372642Z   
2025-06-17T00:46:36.1373395Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-17T00:46:36.1374064Z         
2025-06-17T00:46:36.1374489Z         Error: error deleting resource
2025-06-17T00:46:36.1374903Z         
2025-06-17T00:46:36.1375953Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6850b6d36200565f4c9cfff7/streams/test-acc-tf-2617366023840690126/connections/sample_stream_solar
2025-06-17T00:46:36.1376706Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-17T00:46:36.1377237Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-17T00:46:36.1377865Z         name test-acc-tf-2617366023840690126 has active processors, and cannot be
2025-06-17T00:46:36.1378601Z         changed. Reason: Forbidden. Params: [test-acc-tf-2617366023840690126],
2025-06-17T00:46:36.1379290Z         BadRequestDetail: 
2025-06-17T00:46:36.1379582Z --- FAIL: TestMigStreamProcessor_basic (34.44s)
```
### 2025-06-18
#### FAIL 40 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-18T00:46:10.921000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='6 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-18T00:46:10.9218810Z === RUN   TestMigStreamProcessor_basic
2025-06-18T00:46:10.9219371Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-4289174773104894300
2025-06-18T00:46:10.9280056Z === CONT  TestMigStreamProcessor_basic
2025-06-18T00:46:10.9405029Z === NAME  TestMigStreamProcessor_basic
2025-06-18T00:46:10.9405516Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-18T00:46:10.9405903Z         
2025-06-18T00:46:10.9406162Z         Error: error creating resource
2025-06-18T00:46:10.9406668Z         
2025-06-18T00:46:10.9407025Z           with mongodbatlas_stream_processor.processor,
2025-06-18T00:46:10.9407734Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-18T00:46:10.9408357Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-18T00:46:10.9408679Z         
2025-06-18T00:46:10.9409413Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68520860f5c9a6304ddbfe9a/streams/test-acc-tf-7768853129902020265/processor
2025-06-18T00:46:10.9410231Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-18T00:46:10.9410870Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-18T00:46:10.9411516Z         failed to acquire resources for stream processor validation: internal error
2025-06-18T00:46:10.9412131Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-18T00:46:10.9412735Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-18T00:46:10.9413367Z         processor validation: internal error while provisioning resource from global
2025-06-18T00:46:10.9413848Z         resource manager], BadRequestDetail: 
2025-06-18T00:46:10.9420232Z    test_working_directory=/tmp/plugintest1180421711 test_step_number=1
2025-06-18T00:46:10.9420980Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-18T00:46:10.9421404Z         
2025-06-18T00:46:10.9421664Z         Error: error deleting resource
2025-06-18T00:46:10.9421917Z         
2025-06-18T00:46:10.9422766Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68520860f5c9a6304ddbfe9a/streams/test-acc-tf-7768853129902020265/connections/sample_stream_solar
2025-06-18T00:46:10.9423620Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-18T00:46:10.9424151Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-18T00:46:10.9424764Z         name test-acc-tf-7768853129902020265 has active processors, and cannot be
2025-06-18T00:46:10.9425368Z         changed. Reason: Forbidden. Params: [test-acc-tf-7768853129902020265],
2025-06-18T00:46:10.9425776Z         BadRequestDetail: 
2025-06-18T00:46:10.9426058Z --- FAIL: TestMigStreamProcessor_basic (40.32s)
```
#### PASS 37 seconds
```
2025-06-18T07:44:25.4809311Z === RUN   TestMigStreamProcessor_basic
2025-06-18T07:44:25.4810307Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-6873834722944942264
2025-06-18T07:44:25.4886870Z === CONT  TestMigStreamProcessor_basic
2025-06-18T07:44:25.4996609Z --- PASS: TestMigStreamProcessor_basic (37.57s)
```
### 2025-06-19
#### FAIL 35 seconds
GoTestErrorClassification(error_class='flaky_400',author='human',run_id='2025-06-19T00:46:33.447000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='6 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-19T00:46:33.0447003Z === RUN   TestMigStreamProcessor_basic
2025-06-19T00:46:33.0447958Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-3409123327874510161
2025-06-19T00:46:33.0547898Z === CONT  TestMigStreamProcessor_basic
2025-06-19T00:46:33.0729907Z === NAME  TestMigStreamProcessor_basic
2025-06-19T00:46:33.0730404Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-19T00:46:33.0730783Z         
2025-06-19T00:46:33.0731045Z         Error: error creating resource
2025-06-19T00:46:33.0731293Z         
2025-06-19T00:46:33.0731861Z           with mongodbatlas_stream_processor.processor,
2025-06-19T00:46:33.0732544Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-06-19T00:46:33.0733181Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-19T00:46:33.0733499Z         
2025-06-19T00:46:33.0734236Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685359e5e16f343ef1d9d221/streams/test-acc-tf-6842883073459020526/processor
2025-06-19T00:46:33.0735028Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-19T00:46:33.0735656Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-19T00:46:33.0736308Z         failed to acquire resources for stream processor validation: internal error
2025-06-19T00:46:33.0736925Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-19T00:46:33.0737525Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-19T00:46:33.0738163Z         processor validation: internal error while provisioning resource from global
2025-06-19T00:46:33.0738659Z         resource manager], BadRequestDetail: 
2025-06-19T00:46:33.0744843Z    test_terraform_path=/home/runner/work/_temp/fcf13e4d-8355-4e3e-a753-8789348fa32d/terraform test_working_directory=/tmp/plugintest2554878610 test_name=TestMigStreamProcessor_basic test_step_number=1
2025-06-19T00:46:33.0745895Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-19T00:46:33.0746313Z         
2025-06-19T00:46:33.0746574Z         Error: error deleting resource
2025-06-19T00:46:33.0746837Z         
2025-06-19T00:46:33.0747694Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685359e5e16f343ef1d9d221/streams/test-acc-tf-6842883073459020526/connections/sample_stream_solar
2025-06-19T00:46:33.0748442Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-19T00:46:33.0748976Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-19T00:46:33.0749591Z         name test-acc-tf-6842883073459020526 has active processors, and cannot be
2025-06-19T00:46:33.0750570Z         changed. Reason: Forbidden. Params: [test-acc-tf-6842883073459020526],
2025-06-19T00:46:33.0751016Z         BadRequestDetail: 
2025-06-19T00:46:33.0751298Z --- FAIL: TestMigStreamProcessor_basic (35.88s)
```
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