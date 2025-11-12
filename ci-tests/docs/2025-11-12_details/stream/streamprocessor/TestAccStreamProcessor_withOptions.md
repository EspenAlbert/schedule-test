# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev |  | 1596.08s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections | qa |  | 595.04s
[2025-10-26 00:50](#error-2025-10-26t0050160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68fd6b7f328f9755b2cea489/streams/test-acc-tf-s-2401127588398043658/processors | qa | flaky_500 | 597.03s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections | dev | flaky_500 | 603.08s

## Timeline
- 2025-10-03: MISSING
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
- 2025-10-23 PASS 10 minutes
- 2025-10-24 PASS 11 minutes
- 2025-10-25 PASS 10 minutes
- 2025-10-26

### Error 2025-10-26T00:50:16+00:00
```
2025-10-26T00:50:16.3477286Z === RUN   TestAccStreamProcessor_withOptions
2025-10-26T00:50:16.3477852Z     resource_test.go:136: Creating execution cluster: test-acc-tf-c-812886679017823826
2025-10-26T00:50:16.3478486Z 2025/10/26 00:29:54 [DEBUG] Waiting for state to become: [IDLE]
2025-10-26T00:50:16.3478888Z 2025/10/26 00:32:54 [TRACE] Waiting 1m0s before next try
2025-10-26T00:50:16.3479263Z 2025/10/26 00:33:54 [TRACE] Waiting 10s before next try
2025-10-26T00:50:16.3479631Z 2025/10/26 00:34:04 [TRACE] Waiting 1m0s before next try
2025-10-26T00:50:16.3480233Z 2025/10/26 00:35:04 [TRACE] Waiting 10s before next try
2025-10-26T00:50:16.3480599Z 2025/10/26 00:35:14 [TRACE] Waiting 1m0s before next try
2025-10-26T00:50:16.3480957Z 2025/10/26 00:36:15 [TRACE] Waiting 10s before next try
2025-10-26T00:50:16.3481309Z 2025/10/26 00:36:25 [TRACE] Waiting 1m0s before next try
2025-10-26T00:50:16.3481665Z 2025/10/26 00:37:25 [TRACE] Waiting 10s before next try
2025-10-26T00:50:16.3482017Z 2025/10/26 00:37:35 [TRACE] Waiting 1m0s before next try
2025-10-26T00:50:16.3482386Z 2025/10/26 00:38:35 [TRACE] Waiting 10s before next try
2025-10-26T00:50:16.3482757Z 2025/10/26 00:38:45 [TRACE] Waiting 1m0s before next try
2025-10-26T00:50:16.3536860Z === CONT  TestAccStreamProcessor_withOptions
2025-10-26T00:50:16.3592670Z === NAME  TestAccStreamProcessor_withOptions
2025-10-26T00:50:16.3593276Z     resource_test.go:143: Step 1/2 error: Error running apply: exit status 1
2025-10-26T00:50:16.3593653Z         
2025-10-26T00:50:16.3593929Z         Error: error fetching results
2025-10-26T00:50:16.3594206Z         
2025-10-26T00:50:16.3594570Z           with data.mongodbatlas_stream_processors.test,
2025-10-26T00:50:16.3595240Z           on terraform_plugin_test.tf line 69, in data "mongodbatlas_stream_processors" "test":
2025-10-26T00:50:16.3595844Z           69: 	data "mongodbatlas_stream_processors" "test" {
2025-10-26T00:50:16.3596161Z         
2025-10-26T00:50:16.3596938Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68fd6b7f328f9755b2cea489/streams/test-acc-tf-s-2401127588398043658/processors
2025-10-26T00:50:16.3597813Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-10-26T00:50:16.3598416Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-26T00:50:16.3598824Z         BadRequestDetail: 
2025-10-26T00:50:16.3619392Z === NAME  TestAccStreamProcessor_withOptions
2025-10-26T00:50:16.3620108Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-26T00:50:16.3620559Z         
2025-10-26T00:50:16.3620847Z         Error: error deleting resource
2025-10-26T00:50:16.3621123Z         
2025-10-26T00:50:16.3622077Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68fd6b7f328f9755b2cea489/streams/test-acc-tf-s-2401127588398043658/connections/ClusterConnectionSrcy9pme
2025-10-26T00:50:16.3623057Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-26T00:50:16.3623681Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-26T00:50:16.3624111Z         BadRequestDetail: 
2025-10-26T00:50:16.3624357Z         
2025-10-26T00:50:16.3624647Z         Error: error deleting resource
2025-10-26T00:50:16.3624919Z         
2025-10-26T00:50:16.3625856Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68fd6b7f328f9755b2cea489/streams/test-acc-tf-s-2401127588398043658/connections/KafkaConnectionDesty9pme
2025-10-26T00:50:16.3626810Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-26T00:50:16.3627429Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-26T00:50:16.3627853Z         BadRequestDetail: 
2025-10-26T00:50:16.3628174Z --- FAIL: TestAccStreamProcessor_withOptions (597.35s)
```

- 2025-10-27 PASS 18 minutes
- 2025-10-28 PASS 11 minutes
- 2025-10-29 PASS 13 minutes
- 2025-10-30 PASS 11 minutes
- 2025-10-31 PASS 11 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 8 minutes
- 2025-11-03 PASS 10 minutes
- 2025-11-04 PASS 11 minutes
- 2025-11-05
  - PASS 12 minutes
  - PASS 10 minutes
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1235733Z === RUN   TestAccStreamProcessor_withOptions
2025-11-06T00:51:58.1236260Z     resource_test.go:140: Creating execution cluster: test-acc-tf-c-3737702520804349041
2025-11-06T00:51:58.1236741Z 2025/11/06 00:27:29 [DEBUG] Waiting for state to become: [IDLE]
2025-11-06T00:51:58.1237128Z 2025/11/06 00:30:29 [TRACE] Waiting 1m0s before next try
2025-11-06T00:51:58.1237498Z 2025/11/06 00:31:30 [TRACE] Waiting 10s before next try
2025-11-06T00:51:58.1237859Z 2025/11/06 00:31:40 [TRACE] Waiting 1m0s before next try
2025-11-06T00:51:58.1238217Z 2025/11/06 00:32:40 [TRACE] Waiting 10s before next try
2025-11-06T00:51:58.1238573Z 2025/11/06 00:32:50 [TRACE] Waiting 1m0s before next try
2025-11-06T00:51:58.1238931Z 2025/11/06 00:33:50 [TRACE] Waiting 10s before next try
2025-11-06T00:51:58.1239293Z 2025/11/06 00:34:01 [TRACE] Waiting 1m0s before next try
2025-11-06T00:51:58.1239651Z 2025/11/06 00:35:01 [TRACE] Waiting 10s before next try
2025-11-06T00:51:58.1240020Z 2025/11/06 00:35:11 [TRACE] Waiting 1m0s before next try
2025-11-06T00:51:58.1240363Z 2025/11/06 00:36:11 [TRACE] Waiting 10s before next try
2025-11-06T00:51:58.1240961Z 2025/11/06 00:36:21 [TRACE] Waiting 1m0s before next try
2025-11-06T00:51:58.1241311Z 2025/11/06 00:37:21 [TRACE] Waiting 10s before next try
2025-11-06T00:51:58.1557732Z === CONT  TestAccStreamProcessor_withOptions
2025-11-06T00:51:58.1650084Z === NAME  TestAccStreamProcessor_withOptions
2025-11-06T00:51:58.1650380Z     resource_test.go:147: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:51:58.1650670Z         
2025-11-06T00:51:58.1650861Z         Error: error creating resource
2025-11-06T00:51:58.1650960Z         
2025-11-06T00:51:58.1651226Z           with mongodbatlas_stream_connection.cluster_src,
2025-11-06T00:51:58.1651720Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_connection" "cluster_src":
2025-11-06T00:51:58.1652072Z           32:             resource "mongodbatlas_stream_connection" "cluster_src" {
2025-11-06T00:51:58.1652167Z         
2025-11-06T00:51:58.1652844Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections
2025-11-06T00:51:58.1653210Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.1653508Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1653657Z         BadRequestDetail: 
2025-11-06T00:51:58.1653765Z         
2025-11-06T00:51:58.1653939Z         Error: error creating resource
2025-11-06T00:51:58.1654028Z         
2025-11-06T00:51:58.1654289Z           with mongodbatlas_stream_connection.kafka_dest,
2025-11-06T00:51:58.1654770Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_stream_connection" "kafka_dest":
2025-11-06T00:51:58.1655111Z           44:             resource "mongodbatlas_stream_connection" "kafka_dest"{
2025-11-06T00:51:58.1655205Z         
2025-11-06T00:51:58.1655871Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections
2025-11-06T00:51:58.1656234Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.1656527Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1656674Z         BadRequestDetail: 
2025-11-06T00:51:58.1656999Z --- FAIL: TestAccStreamProcessor_withOptions (603.80s)
```

- 2025-11-07 PASS 9 minutes
- 2025-11-08 PASS 38 minutes
- 2025-11-09 PASS 10 minutes
- 2025-11-10 PASS 10 minutes
- 2025-11-11 PASS 10 minutes
- 2025-11-12 PASS 10 minutes