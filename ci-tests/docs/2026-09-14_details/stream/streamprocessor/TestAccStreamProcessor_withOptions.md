# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 2)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor | dev | 1.05s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor | dev | 1.06s

### Timeline
- 2026-09-07: MISSING
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

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 7 seconds
- 2026-09-14: MISSING
