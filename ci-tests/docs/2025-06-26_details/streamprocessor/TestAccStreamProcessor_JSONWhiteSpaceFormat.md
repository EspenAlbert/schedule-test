# streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 47 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL(x 9)
Success rate: 80.85%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 7 seconds
```
2025-05-28T01:07:43.6586439Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-28T01:07:43.6672790Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-28T01:07:43.6682751Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (7.34s)
```
#### PASS 5 seconds
```
2025-05-28T08:53:26.7123952Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-28T08:53:26.7186457Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-28T08:53:26.7195666Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.22s)
```
### 2025-05-29
#### PASS 5 seconds
```
2025-05-29T01:00:46.6703444Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-29T01:00:46.6786198Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-29T01:00:46.6797000Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.19s)
```
#### FAIL 31 seconds
```
2025-05-29T07:17:39.5362821Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-29T07:17:39.5434933Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-29T07:17:39.5462162Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-29T07:17:39.5462672Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-05-29T07:17:39.5463046Z         
2025-05-29T07:17:39.5463328Z         Error: error creating resource
2025-05-29T07:17:39.5463612Z         
2025-05-29T07:17:39.5463987Z           with mongodbatlas_stream_processor.processor,
2025-05-29T07:17:39.5464693Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-05-29T07:17:39.5465340Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-29T07:17:39.5465672Z         
2025-05-29T07:17:39.5466424Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6838069bba50867780ba4b6a/streams/test-acc-tf-7748004705547818090/processor
2025-05-29T07:17:39.5467256Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-29T07:17:39.5467908Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-05-29T07:17:39.5468580Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-29T07:17:39.5469386Z         internal error while provisioning resource from global resource manager.
2025-05-29T07:17:39.5470045Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-05-29T07:17:39.5470882Z         resources for stream processor validation: internal error while provisioning
2025-05-29T07:17:39.5471472Z         resource from global resource manager], BadRequestDetail: 
2025-05-29T07:17:39.5483473Z    test_working_directory=/tmp/plugintest4064612264 test_step_number=1 test_name=TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-29T07:17:39.5484299Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-29T07:17:39.5484734Z         
2025-05-29T07:17:39.5485019Z         Error: error deleting resource
2025-05-29T07:17:39.5485289Z         
2025-05-29T07:17:39.5486165Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6838069bba50867780ba4b6a/streams/test-acc-tf-7748004705547818090/connections/sample_stream_solar
2025-05-29T07:17:39.5486932Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-29T07:17:39.5487490Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-29T07:17:39.5488134Z         name test-acc-tf-7748004705547818090 has active processors, and cannot be
2025-05-29T07:17:39.5488930Z         changed. Reason: Forbidden. Params: [test-acc-tf-7748004705547818090],
2025-05-29T07:17:39.5489381Z         BadRequestDetail: 
2025-05-29T07:17:39.5489726Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (31.93s)
```
### 2025-05-30
#### PASS 5 seconds
```
2025-05-30T01:23:57.2977509Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-30T01:23:57.3035067Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-30T01:23:57.3044986Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.60s)
```
#### PASS 7 seconds
```
2025-05-30T07:48:04.6980080Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-30T07:48:04.7049912Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-30T07:48:04.7059559Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (7.44s)
```
### 2025-05-31
#### PASS 6 seconds
```
2025-05-31T00:52:21.0441582Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-31T00:52:21.0550288Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-05-31T00:52:21.0555748Z   diagnostic_detail=
2025-05-31T00:52:21.0559129Z   
2025-05-31T00:52:21.0565333Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (6.46s)
```
### 2025-06-01
#### PASS 7 seconds
```
2025-06-01T00:57:09.6293652Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-01T00:57:09.6379047Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-01T00:57:09.6388646Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (7.06s)
```
#### PASS 6 seconds
```
2025-06-01T05:05:05.5407851Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-01T05:05:05.5469599Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-01T05:05:05.5480880Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (6.95s)
```
#### PASS 5 seconds
```
2025-06-01T09:13:36.5654230Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-01T09:13:36.5711317Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-01T09:13:36.5720593Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.35s)
```
#### PASS 5 seconds
```
2025-06-01T13:23:08.9049081Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-01T13:23:08.9116464Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-01T13:23:08.9126112Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.52s)
```
#### PASS 7 seconds
```
2025-06-01T17:32:31.2707886Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-01T17:32:31.2823482Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-01T17:32:31.2840510Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (7.43s)
```
#### PASS 5 seconds
```
2025-06-01T21:41:05.5697767Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-01T21:41:05.5796538Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-01T21:41:05.5812710Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.49s)
```
#### PASS 5 seconds
```
2025-06-01T21:51:39.1385842Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-01T21:51:39.1464324Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-01T21:51:39.1472798Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.98s)
```
### 2025-06-02
#### PASS 7 seconds
```
2025-06-02T00:54:43.9671106Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-02T00:54:43.9785225Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-02T00:54:43.9794181Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (7.61s)
```
#### PASS 7 seconds
```
2025-06-02T01:50:38.5599382Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-02T01:50:38.5666882Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-02T01:50:38.5677490Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (7.33s)
```
#### PASS 5 seconds
```
2025-06-02T06:04:58.7327671Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-02T06:04:58.7399936Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-02T06:04:58.7410031Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.54s)
```
### 2025-06-03
#### PASS 5 seconds
```
2025-06-03T00:53:56.2489550Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-03T00:53:56.2593309Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-03T00:53:56.2610541Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.59s)
```
#### PASS 7 seconds
```
2025-06-03T18:15:23.6567552Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-03T18:15:23.6649921Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-03T18:15:23.6659538Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (7.23s)
```
#### PASS 6 seconds
```
2025-06-03T19:21:20.0918832Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-03T19:21:20.0976658Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-03T19:21:20.0986245Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (6.31s)
```
### 2025-06-04
#### PASS 7 seconds
```
2025-06-04T00:44:38.9482561Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-04T00:44:38.9551070Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-04T00:44:38.9560600Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (7.55s)
```
### 2025-06-05
#### PASS 5 seconds
```
2025-06-05T01:03:58.7128238Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-05T01:03:58.7208082Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-05T01:03:58.7217185Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.11s)
```
### 2025-06-06
#### PASS 5 seconds
```
2025-06-06T00:46:43.0285341Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-06T00:46:43.0341834Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-06T00:46:43.0351267Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.55s)
```
### 2025-06-07
#### PASS 5 seconds
```
2025-06-07T00:46:29.1358449Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-07T00:46:29.1416642Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-07T00:46:29.1426238Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.04s)
```
### 2025-06-08
#### PASS 5 seconds
```
2025-06-08T00:48:12.6345106Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-08T00:48:12.6411041Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-08T00:48:12.6420658Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.30s)
```
### 2025-06-09
#### FAIL 31 seconds
```
2025-06-09T00:46:27.3754068Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-09T00:46:27.3827838Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-09T00:46:27.3855594Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-09T00:46:27.3856287Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-06-09T00:46:27.3856691Z         
2025-06-09T00:46:27.3857010Z         Error: error creating resource
2025-06-09T00:46:27.3857302Z         
2025-06-09T00:46:27.3857687Z           with mongodbatlas_stream_processor.processor,
2025-06-09T00:46:27.3858417Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-06-09T00:46:27.3859085Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-09T00:46:27.3859436Z         
2025-06-09T00:46:27.3860206Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68462b4be21315547b360fb4/streams/test-acc-tf-3328538082692922079/processor
2025-06-09T00:46:27.3861051Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-09T00:46:27.3861719Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-06-09T00:46:27.3862548Z         problem occur: failed to acquire resources for stream processor validation:
2025-06-09T00:46:27.3863211Z         internal error while provisioning resource from global resource manager.
2025-06-09T00:46:27.3863879Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-06-09T00:46:27.3864557Z         resources for stream processor validation: internal error while provisioning
2025-06-09T00:46:27.3865160Z         resource from global resource manager], BadRequestDetail: 
2025-06-09T00:46:27.3882076Z    test_step_number=1
2025-06-09T00:46:27.3949237Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-09T00:46:27.3949854Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-09T00:46:27.3950306Z         
2025-06-09T00:46:27.3950595Z         Error: error deleting resource
2025-06-09T00:46:27.3950884Z         
2025-06-09T00:46:27.3951761Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68462b4be21315547b360fb4/streams/test-acc-tf-3328538082692922079/connections/sample_stream_solar
2025-06-09T00:46:27.3952649Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-09T00:46:27.3953207Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-09T00:46:27.3953983Z         name test-acc-tf-3328538082692922079 has active processors, and cannot be
2025-06-09T00:46:27.3954613Z         changed. Reason: Forbidden. Params: [test-acc-tf-3328538082692922079],
2025-06-09T00:46:27.3955042Z         BadRequestDetail: 
2025-06-09T00:46:27.3955408Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (31.50s)
```
### 2025-06-10
#### PASS 7 seconds
```
2025-06-10T01:03:02.7202801Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-10T01:03:02.7264885Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-10T01:03:02.7273845Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (7.27s)
```
### 2025-06-11
#### PASS 4 seconds
```
2025-06-11T00:44:41.0772722Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-11T00:44:41.0871772Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-11T00:44:41.0881901Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (4.82s)
```
#### PASS 6 seconds
```
2025-06-11T07:54:27.5979448Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-11T07:54:27.6083538Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-11T07:54:27.6098769Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (6.47s)
```
### 2025-06-12
#### PASS 6 seconds
```
2025-06-12T00:44:51.7287896Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-12T00:44:51.7344584Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-12T00:44:51.7353590Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (6.01s)
```
### 2025-06-13
#### PASS 7 seconds
```
2025-06-13T00:46:48.4067088Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-13T00:46:48.4150411Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-13T00:46:48.4176072Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (7.10s)
```
### 2025-06-14
#### PASS 6 seconds
```
2025-06-14T00:44:17.0806049Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-14T00:44:17.0882495Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-14T00:44:17.0891935Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (6.13s)
```
### 2025-06-15
#### PASS 8 seconds
```
2025-06-15T00:48:57.1213227Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-15T00:48:57.1269487Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-15T00:48:57.1278329Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (8.53s)
```
### 2025-06-16
#### PASS 31 seconds
```
2025-06-16T00:46:42.7769955Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-16T00:46:42.7869626Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-16T00:46:42.7938725Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (31.48s)
```
### 2025-06-17
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-17T00:46:36.966000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='6 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-17T00:46:36.0966409Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-17T00:46:36.1069065Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-17T00:46:36.1158314Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-17T00:46:36.1159349Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-06-17T00:46:36.1159963Z         
2025-06-17T00:46:36.1160431Z         Error: error creating resource
2025-06-17T00:46:36.1160900Z         
2025-06-17T00:46:36.1161531Z           with mongodbatlas_stream_processor.processor,
2025-06-17T00:46:36.1162767Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-06-17T00:46:36.1163922Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-17T00:46:36.1164508Z         
2025-06-17T00:46:36.1165861Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6850b6d36200565f4c9cfff7/streams/test-acc-tf-1004422136285131694/processor
2025-06-17T00:46:36.1167335Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-17T00:46:36.1168508Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-06-17T00:46:36.1171219Z         problem occur: failed to acquire resources for stream processor validation:
2025-06-17T00:46:36.1172368Z         internal error while provisioning resource from global resource manager.
2025-06-17T00:46:36.1173531Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-06-17T00:46:36.1174723Z         resources for stream processor validation: internal error while provisioning
2025-06-17T00:46:36.1175762Z         resource from global resource manager], BadRequestDetail: 
2025-06-17T00:46:36.1197699Z   
2025-06-17T00:46:36.1230915Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-17T00:46:36.1232000Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-17T00:46:36.1232760Z         
2025-06-17T00:46:36.1233244Z         Error: error deleting resource
2025-06-17T00:46:36.1233766Z         
2025-06-17T00:46:36.1235337Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6850b6d36200565f4c9cfff7/streams/test-acc-tf-1004422136285131694/connections/sample_stream_solar
2025-06-17T00:46:36.1236687Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-17T00:46:36.1237646Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-17T00:46:36.1238758Z         name test-acc-tf-1004422136285131694 has active processors, and cannot be
2025-06-17T00:46:36.1240034Z         changed. Reason: Forbidden. Params: [test-acc-tf-1004422136285131694],
2025-06-17T00:46:36.1240791Z         BadRequestDetail: 
2025-06-17T00:46:36.1241389Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (31.47s)
```
### 2025-06-18
#### PASS 7 seconds
```
2025-06-18T00:46:10.9220716Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-18T00:46:10.9281299Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-18T00:46:10.9291997Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (7.51s)
```
#### PASS 6 seconds
```
2025-06-18T07:44:25.4812615Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-18T07:44:25.4887612Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-18T07:44:25.4897264Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (6.88s)
```
### 2025-06-19
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-19T00:46:33.450000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='6 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-19T00:46:33.0450354Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-19T00:46:33.0549052Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-19T00:46:33.0583297Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-19T00:46:33.0583810Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-06-19T00:46:33.0584175Z         
2025-06-19T00:46:33.0584444Z         Error: error creating resource
2025-06-19T00:46:33.0584713Z         
2025-06-19T00:46:33.0585060Z           with mongodbatlas_stream_processor.processor,
2025-06-19T00:46:33.0585743Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-06-19T00:46:33.0586379Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-19T00:46:33.0586694Z         
2025-06-19T00:46:33.0587435Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685359e5e16f343ef1d9d221/streams/test-acc-tf-4410999101451641330/processor
2025-06-19T00:46:33.0588267Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-19T00:46:33.0588917Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-06-19T00:46:33.0589571Z         problem occur: failed to acquire resources for stream processor validation:
2025-06-19T00:46:33.0590188Z         internal error while provisioning resource from global resource manager.
2025-06-19T00:46:33.0590822Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-06-19T00:46:33.0591703Z         resources for stream processor validation: internal error while provisioning
2025-06-19T00:46:33.0592297Z         resource from global resource manager], BadRequestDetail: 
2025-06-19T00:46:33.0611302Z   
2025-06-19T00:46:33.0636599Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-06-19T00:46:33.0637292Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-19T00:46:33.0637824Z         
2025-06-19T00:46:33.0638086Z         Error: error deleting resource
2025-06-19T00:46:33.0638448Z         
2025-06-19T00:46:33.0639417Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685359e5e16f343ef1d9d221/streams/test-acc-tf-4410999101451641330/connections/sample_stream_solar
2025-06-19T00:46:33.0640315Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-19T00:46:33.0640950Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-19T00:46:33.0641855Z         name test-acc-tf-4410999101451641330 has active processors, and cannot be
2025-06-19T00:46:33.0642548Z         changed. Reason: Forbidden. Params: [test-acc-tf-4410999101451641330],
2025-06-19T00:46:33.0642982Z         BadRequestDetail: 
2025-06-19T00:46:33.0643417Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (31.40s)
```
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