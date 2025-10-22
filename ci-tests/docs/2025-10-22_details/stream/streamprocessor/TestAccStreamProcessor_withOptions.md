# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 41) FAIL(x 3)
Success rate: 93.18%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-29 00:53](#error-2025-09-29t0053320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68d9d2d197534351000fd533/streams/test-acc-tf-s-7677435686917158706/processor | dev | 671.01s
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 1596.08s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections | qa | 595.04s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 11 minutes
- 2025-09-24 PASS 11 minutes
- 2025-09-25 PASS 11 minutes
- 2025-09-26 PASS 13 minutes
- 2025-09-27 PASS 11 minutes
- 2025-09-28 PASS 13 minutes
- 2025-09-29
  - FAIL 11 minutes

### Error 2025-09-29T00:53:32+00:00
```
2025-09-29T00:53:32.4762194Z === RUN   TestAccStreamProcessor_withOptions
2025-09-29T00:53:32.4762758Z     resource_test.go:102: Creating execution cluster: test-acc-tf-c-7459280607890958083
2025-09-29T00:53:32.4763228Z 2025/09/29 00:29:08 [DEBUG] Waiting for state to become: [IDLE]
2025-09-29T00:53:32.4763591Z 2025/09/29 00:32:08 [TRACE] Waiting 1m0s before next try
2025-09-29T00:53:32.4763930Z 2025/09/29 00:33:08 [TRACE] Waiting 10s before next try
2025-09-29T00:53:32.4764266Z 2025/09/29 00:33:19 [TRACE] Waiting 1m0s before next try
2025-09-29T00:53:32.4764604Z 2025/09/29 00:34:19 [TRACE] Waiting 10s before next try
2025-09-29T00:53:32.4764936Z 2025/09/29 00:34:29 [TRACE] Waiting 1m0s before next try
2025-09-29T00:53:32.4765271Z 2025/09/29 00:35:30 [TRACE] Waiting 10s before next try
2025-09-29T00:53:32.4765604Z 2025/09/29 00:35:40 [TRACE] Waiting 1m0s before next try
2025-09-29T00:53:32.4765931Z 2025/09/29 00:36:40 [TRACE] Waiting 10s before next try
2025-09-29T00:53:32.4766260Z 2025/09/29 00:36:50 [TRACE] Waiting 1m0s before next try
2025-09-29T00:53:32.4766588Z 2025/09/29 00:37:51 [TRACE] Waiting 10s before next try
2025-09-29T00:53:32.4766920Z 2025/09/29 00:38:01 [TRACE] Waiting 1m0s before next try
2025-09-29T00:53:32.4767255Z 2025/09/29 00:39:01 [TRACE] Waiting 10s before next try
2025-09-29T00:53:32.4767583Z 2025/09/29 00:39:12 [TRACE] Waiting 1m0s before next try
2025-09-29T00:53:32.4881327Z === CONT  TestAccStreamProcessor_withOptions
2025-09-29T00:53:32.4908363Z === NAME  TestAccStreamProcessor_withOptions
2025-09-29T00:53:32.4909054Z     resource_test.go:109: Step 1/2 error: Error running apply: exit status 1
2025-09-29T00:53:32.4909413Z         
2025-09-29T00:53:32.4909680Z         Error: error creating resource
2025-09-29T00:53:32.4909944Z         
2025-09-29T00:53:32.4910297Z           with mongodbatlas_stream_processor.processor,
2025-09-29T00:53:32.4910982Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-29T00:53:32.4911625Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2025-09-29T00:53:32.4911943Z         
2025-09-29T00:53:32.4912686Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d9d2d197534351000fd533/streams/test-acc-tf-s-7677435686917158706/processor
2025-09-29T00:53:32.4913501Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-09-29T00:53:32.4914137Z         Detail: Streams Processor with this name (new-processorsj1jx) had a problem
2025-09-29T00:53:32.4914770Z         occur: connection named KafkaConnectionDestsj1jx does not exist. Check
2025-09-29T00:53:32.4915407Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-09-29T00:53:32.4916230Z         [new-processorsj1jx connection named KafkaConnectionDestsj1jx does not exist.
2025-09-29T00:53:32.4916898Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2025-09-29T00:53:32.4917339Z --- FAIL: TestAccStreamProcessor_withOptions (671.09s)
```

  - PASS 8 minutes
- 2025-09-30
  - PASS 12 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 10 minutes
  - PASS 10 minutes
- 2025-10-01
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 9 minutes
  - PASS 8 minutes
  - PASS 9 minutes
  - PASS 10 minutes
  - PASS 9 minutes
  - PASS 10 minutes
- 2025-10-02 PASS 10 minutes
- 2025-10-03 PASS 9 minutes
- 2025-10-04 PASS 11 minutes
- 2025-10-05 PASS 9 minutes
- 2025-10-06 PASS 8 minutes
- 2025-10-07 PASS 11 minutes
- 2025-10-08 PASS 11 minutes
- 2025-10-09 PASS 15 minutes
- 2025-10-10 PASS 13 minutes
- 2025-10-11 PASS 12 minutes
- 2025-10-12 PASS 20 minutes
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.2970720Z === RUN   TestAccStreamProcessor_withOptions
2025-10-13T01:24:12.2971433Z     resource_test.go:102: Creating execution cluster: test-acc-tf-c-1055468173420453405
2025-10-13T01:24:12.2972055Z 2025/10/13 00:34:41 [DEBUG] Waiting for state to become: [IDLE]
2025-10-13T01:24:12.2972577Z 2025/10/13 00:37:41 [TRACE] Waiting 1m0s before next try
2025-10-13T01:24:12.2972983Z 2025/10/13 00:38:41 [TRACE] Waiting 10s before next try
2025-10-13T01:24:12.2973476Z 2025/10/13 00:38:51 [TRACE] Waiting 1m0s before next try
2025-10-13T01:24:12.2973870Z 2025/10/13 00:39:52 [TRACE] Waiting 10s before next try
2025-10-13T01:24:12.2974343Z 2025/10/13 00:40:02 [TRACE] Waiting 1m0s before next try
2025-10-13T01:24:12.2974725Z 2025/10/13 00:41:02 [TRACE] Waiting 10s before next try
2025-10-13T01:24:12.2975218Z 2025/10/13 00:41:12 [TRACE] Waiting 1m0s before next try
2025-10-13T01:24:12.2975623Z 2025/10/13 00:42:12 [TRACE] Waiting 10s before next try
2025-10-13T01:24:12.2976123Z 2025/10/13 00:42:22 [TRACE] Waiting 1m0s before next try
2025-10-13T01:24:12.2976718Z 2025/10/13 00:43:23 [TRACE] Waiting 10s before next try
2025-10-13T01:24:12.2977119Z 2025/10/13 00:43:33 [TRACE] Waiting 1m0s before next try
2025-10-13T01:24:12.2977597Z 2025/10/13 00:44:33 [TRACE] Waiting 10s before next try
2025-10-13T01:24:12.2978001Z 2025/10/13 00:44:43 [TRACE] Waiting 1m0s before next try
2025-10-13T01:24:12.2978640Z 2025/10/13 00:45:43 [TRACE] Waiting 10s before next try
2025-10-13T01:24:12.2979126Z 2025/10/13 00:45:53 [TRACE] Waiting 1m0s before next try
2025-10-13T01:24:12.3210848Z === CONT  TestAccStreamProcessor_withOptions
2025-10-13T01:24:12.3318219Z === NAME  TestAccStreamProcessor_withOptions
2025-10-13T01:24:12.3318901Z     resource_test.go:109: Step 1/2 error: Error running apply: exit status 1
2025-10-13T01:24:12.3319308Z         
2025-10-13T01:24:12.3319651Z         Error: error creating resource
2025-10-13T01:24:12.3319955Z         
2025-10-13T01:24:12.3320416Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3321264Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3322018Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3322387Z         
2025-10-13T01:24:12.3322968Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3338661Z    test_terraform_path=/home/runner/work/_temp/6d87958b-7036-4585-be2d-7248c9545d7d/terraform
2025-10-13T01:24:12.3379362Z === NAME  TestAccStreamProcessor_withOptions
2025-10-13T01:24:12.3380026Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-13T01:24:12.3380497Z         
2025-10-13T01:24:12.3380834Z         Error: error deleting resource
2025-10-13T01:24:12.3381143Z         
2025-10-13T01:24:12.3382244Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ec47f2b8d3122c296501b7/streams/test-acc-tf-s-6101778557580258383/connections/KafkaConnectionDest00ajl
2025-10-13T01:24:12.3383119Z         DELETE: HTTP 403 Forbidden (Error code:
2025-10-13T01:24:12.3383762Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-10-13T01:24:12.3384373Z         name KafkaConnectionDest00ajl in stream instance
2025-10-13T01:24:12.3385034Z         test-acc-tf-s-6101778557580258383 has active processors, and cannot be
2025-10-13T01:24:12.3385721Z         changed. Reason: Forbidden. Params: [KafkaConnectionDest00ajl
2025-10-13T01:24:12.3386331Z         test-acc-tf-s-6101778557580258383], BadRequestDetail: 
2025-10-13T01:24:12.3386699Z         
2025-10-13T01:24:12.3387036Z         Error: error deleting resource
2025-10-13T01:24:12.3387343Z         
2025-10-13T01:24:12.3387908Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3388573Z --- FAIL: TestAccStreamProcessor_withOptions (1596.80s)
```

- 2025-10-14 PASS 10 minutes
- 2025-10-15 PASS 10 minutes
- 2025-10-16 PASS 14 minutes
- 2025-10-17 PASS 12 minutes
- 2025-10-18 PASS 11 minutes
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1814076Z === RUN   TestAccStreamProcessor_withOptions
2025-10-19T00:50:12.1814599Z     resource_test.go:102: Creating execution cluster: test-acc-tf-c-1866517700873327387
2025-10-19T00:50:12.1815076Z 2025/10/19 00:32:22 [DEBUG] Waiting for state to become: [IDLE]
2025-10-19T00:50:12.1815457Z 2025/10/19 00:35:22 [TRACE] Waiting 1m0s before next try
2025-10-19T00:50:12.1815822Z 2025/10/19 00:36:23 [TRACE] Waiting 10s before next try
2025-10-19T00:50:12.1816179Z 2025/10/19 00:36:33 [TRACE] Waiting 1m0s before next try
2025-10-19T00:50:12.1816536Z 2025/10/19 00:37:33 [TRACE] Waiting 10s before next try
2025-10-19T00:50:12.1816997Z 2025/10/19 00:37:44 [TRACE] Waiting 1m0s before next try
2025-10-19T00:50:12.1817343Z 2025/10/19 00:38:44 [TRACE] Waiting 10s before next try
2025-10-19T00:50:12.1817685Z 2025/10/19 00:38:54 [TRACE] Waiting 1m0s before next try
2025-10-19T00:50:12.1818031Z 2025/10/19 00:39:55 [TRACE] Waiting 10s before next try
2025-10-19T00:50:12.1818378Z 2025/10/19 00:40:05 [TRACE] Waiting 1m0s before next try
2025-10-19T00:50:12.1818722Z 2025/10/19 00:41:05 [TRACE] Waiting 10s before next try
2025-10-19T00:50:12.1819065Z 2025/10/19 00:41:16 [TRACE] Waiting 1m0s before next try
2025-10-19T00:50:12.2127585Z === CONT  TestAccStreamProcessor_withOptions
2025-10-19T00:50:12.2193764Z === NAME  TestAccStreamProcessor_withOptions
2025-10-19T00:50:12.2194042Z     resource_test.go:109: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.2194136Z         
2025-10-19T00:50:12.2194304Z         Error: error creating resource
2025-10-19T00:50:12.2194394Z         
2025-10-19T00:50:12.2194658Z           with mongodbatlas_stream_connection.cluster_src,
2025-10-19T00:50:12.2195145Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_connection" "cluster_src":
2025-10-19T00:50:12.2195607Z           32:             resource "mongodbatlas_stream_connection" "cluster_src" {
2025-10-19T00:50:12.2195746Z         
2025-10-19T00:50:12.2196408Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections
2025-10-19T00:50:12.2196955Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.2197286Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.2197623Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.2197901Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.2198045Z         BadRequestDetail: 
2025-10-19T00:50:12.2198137Z         
2025-10-19T00:50:12.2198437Z         Error: error creating resource
2025-10-19T00:50:12.2198529Z         
2025-10-19T00:50:12.2198790Z           with mongodbatlas_stream_connection.kafka_dest,
2025-10-19T00:50:12.2199269Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_stream_connection" "kafka_dest":
2025-10-19T00:50:12.2199602Z           44:             resource "mongodbatlas_stream_connection" "kafka_dest"{
2025-10-19T00:50:12.2199691Z         
2025-10-19T00:50:12.2200338Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections
2025-10-19T00:50:12.2200765Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.2201080Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.2201417Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.2201698Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.2201838Z         BadRequestDetail: 
2025-10-19T00:50:12.2202155Z --- FAIL: TestAccStreamProcessor_withOptions (595.39s)
```

- 2025-10-20
  - PASS 12 minutes
  - PASS 8 minutes
- 2025-10-21 PASS 11 minutes
- 2025-10-22
  - PASS 11 minutes
  - PASS 8 minutes