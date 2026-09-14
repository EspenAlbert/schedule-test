# stream/streamprocessor/TestAccStreamProcessor_withOptionsDLQAutoscalingCreateStarted Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 2)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_CONNECTION_NAME_ALREADY_EXISTS /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/connections | dev | 0.05s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor | dev | 1.02s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08 PASS 8 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.8767818Z === RUN   TestAccStreamProcessor_withOptionsDLQAutoscalingCreateStarted
2026-09-09T02:19:32.8790058Z    test_working_directory=/tmp/plugintest2591262121 test_name=TestAccStreamProcessor_withOptionsDLQAutoscalingCreateStarted
2026-09-09T02:19:32.8791397Z     resource_test.go:379: Step 1/2 error: Error running apply: exit status 1
2026-09-09T02:19:32.8792065Z         
2026-09-09T02:19:32.8792558Z         Error: error creating resource
2026-09-09T02:19:32.8793046Z         
2026-09-09T02:19:32.8793635Z           with mongodbatlas_stream_connection.cluster,
2026-09-09T02:19:32.8794852Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "cluster":
2026-09-09T02:19:32.8796169Z           12: 	resource "mongodbatlas_stream_connection" "cluster" {
2026-09-09T02:19:32.8796781Z         
2026-09-09T02:19:32.8798110Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/connections
2026-09-09T02:19:32.8799766Z         POST: HTTP 409 Conflict (Error code: "STREAM_CONNECTION_NAME_ALREADY_EXISTS")
2026-09-09T02:19:32.8800936Z         Detail: A Stream connection with the name ClusterConnection already exists.
2026-09-09T02:19:32.8802057Z         Reason: Conflict. Params: [ClusterConnection], BadRequestDetail: 
2026-09-09T02:19:32.8802997Z --- FAIL: TestAccStreamProcessor_withOptionsDLQAutoscalingCreateStarted (0.47s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6640023Z === RUN   TestAccStreamProcessor_withOptionsDLQAutoscalingCreateStarted
2026-09-10T02:13:36.6652267Z    test_name=TestAccStreamProcessor_withOptionsDLQAutoscalingCreateStarted test_terraform_path=/home/runner/work/_temp/8cc92e9c-1de6-438b-a445-0c9c104f9a5a/terraform
2026-09-10T02:13:36.6653012Z     resource_test.go:379: Step 1/2 error: Error running apply: exit status 1
2026-09-10T02:13:36.6653352Z         
2026-09-10T02:13:36.6653615Z         Error: error creating resource
2026-09-10T02:13:36.6653881Z         
2026-09-10T02:13:36.6654207Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6654810Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6655370Z           24: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6655674Z         
2026-09-10T02:13:36.6656300Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6656982Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6657589Z         Detail: Streams Processor with this name
2026-09-10T02:13:36.6658094Z         (new-processor-autoscaling-started-vet10) had a problem occur: commandName
2026-09-10T02:13:36.6658605Z         does not exist in context. Reason: Bad Request. Params:
2026-09-10T02:13:36.6659277Z         [new-processor-autoscaling-started-vet10 commandName does not exist in
2026-09-10T02:13:36.6659695Z         context], BadRequestDetail: 
2026-09-10T02:13:36.6660083Z --- FAIL: TestAccStreamProcessor_withOptionsDLQAutoscalingCreateStarted (1.17s)
```

- 2026-09-11
  - PASS 8 seconds
  - PASS 7 seconds
- 2026-09-12 PASS 8 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 6 seconds

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 9 seconds
- 2026-09-14: MISSING
