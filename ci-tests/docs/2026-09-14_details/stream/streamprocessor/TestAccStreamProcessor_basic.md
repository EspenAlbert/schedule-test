# stream/streamprocessor/TestAccStreamProcessor_basic Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 2)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor | dev | 0.07s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor | dev | 4.00s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08 PASS 10 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.8632630Z === RUN   TestAccStreamProcessor_basic
2026-09-09T02:19:32.8647230Z    test_name=TestAccStreamProcessor_basic test_terraform_path=/home/runner/work/_temp/ddd9fd78-c493-43ca-bf05-24800b4857e3/terraform test_working_directory=/tmp/plugintest3804396221
2026-09-09T02:19:32.8648223Z     resource_test.go:54: Step 1/3 error: Error running apply: exit status 1
2026-09-09T02:19:32.8648666Z         
2026-09-09T02:19:32.8648999Z         Error: error creating resource
2026-09-09T02:19:32.8649318Z         
2026-09-09T02:19:32.8649733Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.8650516Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.8651249Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.8651648Z         
2026-09-09T02:19:32.8652458Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.8653336Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.8654051Z         Detail: Streams Processor with this name (new-processor46qdc) had a problem
2026-09-09T02:19:32.8654804Z         occur: commandName does not exist in context. Reason: Bad Request. Params:
2026-09-09T02:19:32.8655541Z         [new-processor46qdc commandName does not exist in context], BadRequestDetail:
2026-09-09T02:19:32.8656233Z --- FAIL: TestAccStreamProcessor_basic (0.75s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6578339Z === RUN   TestAccStreamProcessor_basic
2026-09-10T02:13:36.6578813Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-9113425937692438096
2026-09-10T02:13:36.6579438Z     resource_test.go:54: Creating execution stream instance: test-acc-tf-s-7356642010655541327
2026-09-10T02:13:36.6591227Z   
2026-09-10T02:13:36.6591586Z     resource_test.go:54: Step 1/3 error: Error running apply: exit status 1
2026-09-10T02:13:36.6591929Z         
2026-09-10T02:13:36.6592198Z         Error: error creating resource
2026-09-10T02:13:36.6592455Z         
2026-09-10T02:13:36.6592792Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6593404Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6593964Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6594268Z         
2026-09-10T02:13:36.6594904Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6595594Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6596155Z         Detail: Streams Processor with this name (new-processorbcsk2) had a problem
2026-09-10T02:13:36.6596716Z         occur: commandName does not exist in context. Reason: Bad Request. Params:
2026-09-10T02:13:36.6597546Z         [new-processorbcsk2 commandName does not exist in context], BadRequestDetail:
2026-09-10T02:13:36.6597957Z --- FAIL: TestAccStreamProcessor_basic (4.02s)
```

- 2026-09-11
  - PASS 9 seconds
  - PASS 7 seconds
- 2026-09-12 PASS 12 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 8 seconds

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
