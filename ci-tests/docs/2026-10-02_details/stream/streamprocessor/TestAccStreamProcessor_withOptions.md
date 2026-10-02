# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 6)
Success rate: 84.21%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-02 02:49](#error-2026-09-02t0249340000) |  | dev | timeout | 2400.09s
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor | dev |  | 1.05s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor | dev |  | 1.06s
[2026-09-15 01:40](#error-2026-09-15t0140260000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa894b95fcf07afdd9b1fed/streams/test-acc-tf-s-6901652075064441451/connections | dev |  | 0.08s
[2026-09-16 01:37](#error-2026-09-16t0137530000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa9e5d7bb07cf48935ec75c/streams/test-acc-tf-s-4074675540921864837/connections | dev |  | 0.09s
[2026-09-17 01:38](#error-2026-09-17t0138500000) | API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections | dev | unknown | 1.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02

### Error 2026-09-02T02:49:34+00:00
```
2026-09-02T02:49:34.6195613Z === RUN   TestAccStreamProcessor_withOptions
2026-09-02T02:49:34.6211003Z    test_step_number=1 test_working_directory=/tmp/plugintest4121403972 test_name=TestAccStreamProcessor_withOptions test_terraform_path=/home/runner/work/_temp/c07b50af-a7d1-4530-9044-4d2066b578cf/terraform
2026-09-02T02:49:34.6212914Z     resource_test.go:322: Step 1/2 error: Error running apply: exit status 1
2026-09-02T02:49:34.6213572Z         
2026-09-02T02:49:34.6214222Z         Error: error waiting for stream connection to be ready
2026-09-02T02:49:34.6214808Z         
2026-09-02T02:49:34.6215458Z           with mongodbatlas_stream_connection.cluster_src,
2026-09-02T02:49:34.6216735Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_connection" "cluster_src":
2026-09-02T02:49:34.6217993Z           32:             resource "mongodbatlas_stream_connection" "cluster_src" {
2026-09-02T02:49:34.6218637Z         
2026-09-02T02:49:34.6219435Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-09-02T02:49:34.6220226Z         'PENDING', timeout: 40m0s)
2026-09-02T02:49:34.6220821Z --- FAIL: TestAccStreamProcessor_withOptions (2400.88s)
```

- 2026-09-03 PASS 8 seconds
- 2026-09-04 PASS 7 seconds
- 2026-09-05 PASS 6 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 8 seconds
- 2026-09-08 PASS 5 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.8843698Z === RUN   TestAccStreamProcessor_withOptions
2026-09-09T02:19:32.8867555Z    test_name=TestAccStreamProcessor_withOptions test_terraform_path=/home/runner/work/_temp/ddd9fd78-c493-43ca-bf05-24800b4857e3/terraform
2026-09-09T02:19:32.8868965Z     resource_test.go:494: Step 1/2 error: Error running apply: exit status 1
2026-09-09T02:19:32.8869630Z         
2026-09-09T02:19:32.8870137Z         Error: error creating resource
2026-09-09T02:19:32.8870627Z         
2026-09-09T02:19:32.8871278Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.8872532Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.8873700Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.8874314Z         
2026-09-09T02:19:32.8875643Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.8877272Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.8878441Z         Detail: Streams Processor with this name (new-processorukfm1) had a problem
2026-09-09T02:19:32.8879618Z         occur: commandName does not exist in context. Reason: Bad Request. Params:
2026-09-09T02:19:32.8880795Z         [new-processorukfm1 commandName does not exist in context], BadRequestDetail:
2026-09-09T02:19:32.8904946Z    test_name=TestAccStreamProcessor_withOptions
2026-09-09T02:19:32.8906172Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-09T02:19:32.8907136Z         
2026-09-09T02:19:32.8907648Z         Error: error deleting resource
2026-09-09T02:19:32.8908131Z         
2026-09-09T02:19:32.8909755Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/connections/ClusterConnectionSrcukfm1
2026-09-09T02:19:32.8911157Z         DELETE: HTTP 403 Forbidden (Error code:
2026-09-09T02:19:32.8912151Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2026-09-09T02:19:32.8913133Z         name ClusterConnectionSrcukfm1 in stream workspace
2026-09-09T02:19:32.8914176Z         test-acc-tf-s-7291791236116398531 has active processors, and cannot be
2026-09-09T02:19:32.8927439Z         changed. Reason: Forbidden. Params: [ClusterConnectionSrcukfm1
2026-09-09T02:19:32.8928451Z         test-acc-tf-s-7291791236116398531], BadRequestDetail: 
2026-09-09T02:19:32.8929164Z --- FAIL: TestAccStreamProcessor_withOptions (1.51s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6679973Z === RUN   TestAccStreamProcessor_withOptions
2026-09-10T02:13:36.6691875Z   
2026-09-10T02:13:36.6692231Z     resource_test.go:494: Step 1/2 error: Error running apply: exit status 1
2026-09-10T02:13:36.6692568Z         
2026-09-10T02:13:36.6692834Z         Error: error creating resource
2026-09-10T02:13:36.6693093Z         
2026-09-10T02:13:36.6693432Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6694048Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6694627Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6694941Z         
2026-09-10T02:13:36.6695568Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6696258Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6696811Z         Detail: Streams Processor with this name (new-processorhpvqy) had a problem
2026-09-10T02:13:36.6697526Z         occur: commandName does not exist in context. Reason: Bad Request. Params:
2026-09-10T02:13:36.6698099Z         [new-processorhpvqy commandName does not exist in context], BadRequestDetail:
2026-09-10T02:13:36.6698519Z --- FAIL: TestAccStreamProcessor_withOptions (1.60s)
```

- 2026-09-11
  - PASS 7 seconds
  - PASS 6 seconds
- 2026-09-12 PASS 7 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 5 seconds
- 2026-09-15

### Error 2026-09-15T01:40:26+00:00
```
2026-09-15T01:40:26.7386853Z === RUN   TestAccStreamProcessor_withOptions
2026-09-15T01:40:26.7401363Z   
2026-09-15T01:40:26.7401836Z     resource_test.go:494: Step 1/2 error: Error running apply: exit status 1
2026-09-15T01:40:26.7402253Z         
2026-09-15T01:40:26.7402567Z         Error: error creating resource
2026-09-15T01:40:26.7402871Z         
2026-09-15T01:40:26.7403285Z           with mongodbatlas_stream_connection.kafka_dest,
2026-09-15T01:40:26.7404083Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_stream_connection" "kafka_dest":
2026-09-15T01:40:26.7404867Z           44:             resource "mongodbatlas_stream_connection" "kafka_dest"{
2026-09-15T01:40:26.7405268Z         
2026-09-15T01:40:26.7406090Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa894b95fcf07afdd9b1fed/streams/test-acc-tf-s-6901652075064441451/connections
2026-09-15T01:40:26.7406995Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-15T01:40:26.7407688Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-15T01:40:26.7408617Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-15T01:40:26.7409146Z --- FAIL: TestAccStreamProcessor_withOptions (0.84s)
```

- 2026-09-16

### Error 2026-09-16T01:37:53+00:00
```
2026-09-16T01:37:53.6874559Z === RUN   TestAccStreamProcessor_withOptions
2026-09-16T01:37:53.6889021Z   
2026-09-16T01:37:53.6889461Z     resource_test.go:494: Step 1/2 error: Error running apply: exit status 1
2026-09-16T01:37:53.6889884Z         
2026-09-16T01:37:53.6890220Z         Error: error creating resource
2026-09-16T01:37:53.6890688Z         
2026-09-16T01:37:53.6891118Z           with mongodbatlas_stream_connection.kafka_dest,
2026-09-16T01:37:53.6891912Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_stream_connection" "kafka_dest":
2026-09-16T01:37:53.6892681Z           44:             resource "mongodbatlas_stream_connection" "kafka_dest"{
2026-09-16T01:37:53.6893091Z         
2026-09-16T01:37:53.6893922Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5d7bb07cf48935ec75c/streams/test-acc-tf-s-4074675540921864837/connections
2026-09-16T01:37:53.6894813Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-16T01:37:53.6895721Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-16T01:37:53.6896458Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-16T01:37:53.6896977Z --- FAIL: TestAccStreamProcessor_withOptions (0.86s)
```

- 2026-09-17

### Error 2026-09-17T01:38:50+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-09-17T01:38:50.273000+00:00-TestAccStreamProcessor_withOptions',confidence=1.0,ts_when='15 days ago')
API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections
```
2026-09-17T01:38:50.2739828Z === RUN   TestAccStreamProcessor_withOptions
2026-09-17T01:38:50.2752386Z    test_name=TestAccStreamProcessor_withOptions test_terraform_path=/home/runner/work/_temp/fb1bcd30-9ea9-40ce-ba2e-82d12a3edae5/terraform
2026-09-17T01:38:50.2753189Z     resource_test.go:494: Step 1/2 error: Error running apply: exit status 1
2026-09-17T01:38:50.2753615Z         
2026-09-17T01:38:50.2753947Z         Error: error creating resource
2026-09-17T01:38:50.2754270Z         
2026-09-17T01:38:50.2754677Z           with mongodbatlas_stream_connection.kafka_dest,
2026-09-17T01:38:50.2755414Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_stream_connection" "kafka_dest":
2026-09-17T01:38:50.2756132Z           44:             resource "mongodbatlas_stream_connection" "kafka_dest"{
2026-09-17T01:38:50.2756523Z         
2026-09-17T01:38:50.2757285Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab376bb7babdea2c8b89b6/streams/test-acc-tf-s-2940797135650315774/connections
2026-09-17T01:38:50.2758120Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-17T01:38:50.2758772Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-17T01:38:50.2759450Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-17T01:38:50.2759953Z --- FAIL: TestAccStreamProcessor_withOptions (1.15s)
```

- 2026-09-18 PASS 5 seconds
- 2026-09-19 PASS 5 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 8 seconds
- 2026-09-22 PASS 6 seconds
- 2026-09-23 PASS 8 seconds
- 2026-09-24 PASS 6 seconds
- 2026-09-25 PASS 5 seconds
- 2026-09-26 PASS 5 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 8 seconds
- 2026-09-29
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 8 seconds
- 2026-09-30
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 8 seconds
- 2026-10-01 PASS 6 seconds
- 2026-10-02 PASS 7 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 8 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 7 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 7 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 7 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 8 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 9 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
