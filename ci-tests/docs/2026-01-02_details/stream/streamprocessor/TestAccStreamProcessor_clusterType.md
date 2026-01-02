# stream/streamprocessor/TestAccStreamProcessor_clusterType Test Details
# Found 32 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-06 00:53](#error-2025-12-06t0053070000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/693378c825937c7e3dcd5fc3/streams/test-acc-tf-s-3139110494107629009/processor | dev | 1.06s
[2025-12-22 01:02](#error-2025-12-22t0102200000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/694891ba00e5e1eaa5a9a975/streams/test-acc-tf-s-8504268321226888752/processor | dev | 1.06s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 10 seconds
- 2025-12-05
  - PASS 32 minutes
  - PASS 12 seconds
- 2025-12-06

### Error 2025-12-06T00:53:07+00:00
```
2025-12-06T00:53:07.2193512Z === RUN   TestAccStreamProcessor_clusterType
2025-12-06T00:53:07.2198580Z === CONT  TestAccStreamProcessor_clusterType
2025-12-06T00:53:07.2243174Z === NAME  TestAccStreamProcessor_clusterType
2025-12-06T00:53:07.2244024Z     resource_test.go:290: Step 1/1 error: Error running apply: exit status 1
2025-12-06T00:53:07.2244667Z         
2025-12-06T00:53:07.2245159Z         Error: error creating resource
2025-12-06T00:53:07.2245622Z         
2025-12-06T00:53:07.2246269Z           with mongodbatlas_stream_processor.processor,
2025-12-06T00:53:07.2247507Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-12-06T00:53:07.2248649Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2025-12-06T00:53:07.2249225Z         
2025-12-06T00:53:07.2250747Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/693378c825937c7e3dcd5fc3/streams/test-acc-tf-s-3139110494107629009/processor
2025-12-06T00:53:07.2252244Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-06T00:53:07.2253392Z         Detail: Streams Processor with this name (new-processorn4tfs) had a problem
2025-12-06T00:53:07.2254552Z         occur: connection named ClusterConnectionSrcn4tfs does not exist. Check
2025-12-06T00:53:07.2255734Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-12-06T00:53:07.2256904Z         [new-processorn4tfs connection named ClusterConnectionSrcn4tfs does not
2025-12-06T00:53:07.2257958Z         exist. Check sp.listConnections() for available connections],
2025-12-06T00:53:07.2258653Z         BadRequestDetail: 
2025-12-06T00:53:07.2259181Z --- FAIL: TestAccStreamProcessor_clusterType (1.59s)
```

- 2025-12-07: MISSING
- 2025-12-08 PASS 7 seconds
- 2025-12-09 PASS 7 seconds
- 2025-12-10
  - PASS 10 seconds
  - PASS 12 seconds
- 2025-12-11 PASS 11 seconds
- 2025-12-12 PASS 10 seconds
- 2025-12-13 PASS 9 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 8 seconds
- 2025-12-16 PASS 9 seconds
- 2025-12-17 PASS 10 seconds
- 2025-12-18 PASS 9 seconds
- 2025-12-19 PASS 9 seconds
- 2025-12-20 PASS 9 seconds
- 2025-12-21: MISSING
- 2025-12-22

### Error 2025-12-22T01:02:20+00:00
```
2025-12-22T01:02:20.1268964Z === RUN   TestAccStreamProcessor_clusterType
2025-12-22T01:02:20.1273234Z === CONT  TestAccStreamProcessor_clusterType
2025-12-22T01:02:20.1309585Z === NAME  TestAccStreamProcessor_clusterType
2025-12-22T01:02:20.1310306Z     resource_test.go:290: Step 1/1 error: Error running apply: exit status 1
2025-12-22T01:02:20.1310698Z         
2025-12-22T01:02:20.1310995Z         Error: error creating resource
2025-12-22T01:02:20.1311292Z         
2025-12-22T01:02:20.1311679Z           with mongodbatlas_stream_processor.processor,
2025-12-22T01:02:20.1312391Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-12-22T01:02:20.1313046Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2025-12-22T01:02:20.1313388Z         
2025-12-22T01:02:20.1314156Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/694891ba00e5e1eaa5a9a975/streams/test-acc-tf-s-8504268321226888752/processor
2025-12-22T01:02:20.1315022Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-22T01:02:20.1315669Z         Detail: Streams Processor with this name (new-processorw7reh) had a problem
2025-12-22T01:02:20.1316327Z         occur: connection named ClusterConnectionSrcw7reh does not exist. Check
2025-12-22T01:02:20.1316997Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-12-22T01:02:20.1317672Z         [new-processorw7reh connection named ClusterConnectionSrcw7reh does not
2025-12-22T01:02:20.1318271Z         exist. Check sp.listConnections() for available connections],
2025-12-22T01:02:20.1318685Z         BadRequestDetail: 
2025-12-22T01:02:20.1319012Z --- FAIL: TestAccStreamProcessor_clusterType (1.56s)
```

- 2025-12-23 PASS 12 seconds
- 2025-12-24 PASS 8 seconds
- 2025-12-25 PASS 9 seconds
- 2025-12-26 PASS 10 seconds
- 2025-12-27 PASS 8 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 10 seconds
- 2025-12-31 PASS 10 seconds
- 2026-01-01 PASS 8 seconds
- 2026-01-02 PASS 8 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/connections | qa | flaky_500 | 0.08s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 9 seconds
- 2025-12-08: MISSING
- 2025-12-09 PASS 10 seconds
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T01:00:24+00:00
```
2025-12-14T01:00:24.3105806Z === RUN   TestAccStreamProcessor_clusterType
2025-12-14T01:00:24.3110828Z === CONT  TestAccStreamProcessor_clusterType
2025-12-14T01:00:24.3134828Z === NAME  TestAccStreamProcessor_clusterType
2025-12-14T01:00:24.3135320Z     resource_test.go:290: Step 1/1 error: Error running apply: exit status 1
2025-12-14T01:00:24.3135695Z         
2025-12-14T01:00:24.3135989Z         Error: error creating resource
2025-12-14T01:00:24.3136270Z         
2025-12-14T01:00:24.3136656Z           with mongodbatlas_stream_connection.cluster_src,
2025-12-14T01:00:24.3137500Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "cluster_src":
2025-12-14T01:00:24.3138350Z           25:             resource "mongodbatlas_stream_connection" "cluster_src" {
2025-12-14T01:00:24.3138720Z         
2025-12-14T01:00:24.3139495Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/connections
2025-12-14T01:00:24.3140362Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-12-14T01:00:24.3141056Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-12-14T01:00:24.3141469Z         BadRequestDetail: 
2025-12-14T01:00:24.3160795Z    test_working_directory=/tmp/plugintest2690541486 test_step_number=1 test_terraform_path=/home/runner/work/_temp/4599e4d6-c372-4194-af63-a6470de1abca/terraform
2025-12-14T01:00:24.3173776Z --- FAIL: TestAccStreamProcessor_clusterType (0.76s)
```

- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 8 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 11 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
