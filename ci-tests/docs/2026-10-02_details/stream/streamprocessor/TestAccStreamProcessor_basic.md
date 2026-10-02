# stream/streamprocessor/TestAccStreamProcessor_basic Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor | dev | 0.07s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor | dev | 4.00s
[2026-09-29 15:24](#error-2026-09-29t1524490000) | USER_UNAUTHORIZED /api/atlas/v2/groups/6abbc0e51d8c0f7732567bd3/streams/test-acc-tf-s-584239112224746449/processor/new-processorhx9uj:startWith | dev | 7.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 8 seconds
- 2026-09-03 PASS 12 seconds
- 2026-09-04 PASS 7 seconds
- 2026-09-05 PASS 12 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 9 seconds
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
- 2026-09-15 PASS 11 seconds
- 2026-09-16 PASS 7 seconds
- 2026-09-17 PASS 14 seconds
- 2026-09-18 PASS 8 seconds
- 2026-09-19 PASS 11 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 9 seconds
- 2026-09-22 PASS 14 seconds
- 2026-09-23 PASS 9 seconds
- 2026-09-24 PASS 12 seconds
- 2026-09-25 PASS 7 seconds
- 2026-09-26 PASS 11 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 9 seconds
- 2026-09-29
  - PASS 12 seconds
  - FAIL 7 seconds

### Error 2026-09-29T15:24:49+00:00
```
2026-09-29T15:24:49.0367937Z === RUN   TestAccStreamProcessor_basic
2026-09-29T15:24:49.0379746Z    test_terraform_path=/home/runner/work/_temp/5f3187db-e638-481e-829b-d4aacb731e9e/terraform
2026-09-29T15:24:49.0380448Z     resource_test.go:54: Step 2/3 error: Error running apply: exit status 1
2026-09-29T15:24:49.0380850Z         
2026-09-29T15:24:49.0381220Z         Error: Error starting stream processor
2026-09-29T15:24:49.0381539Z         
2026-09-29T15:24:49.0381947Z           with mongodbatlas_stream_processor.processor,
2026-09-29T15:24:49.0382612Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-29T15:24:49.0383251Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-29T15:24:49.0383573Z         
2026-09-29T15:24:49.0384528Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abbc0e51d8c0f7732567bd3/streams/test-acc-tf-s-584239112224746449/processor/new-processorhx9uj:startWith
2026-09-29T15:24:49.0385337Z         POST: HTTP 401 Unauthorized (Error code: "USER_UNAUTHORIZED") Detail: Current
2026-09-29T15:24:49.0385919Z         user is not authorized to perform this action. Reason: Unauthorized. Params:
2026-09-29T15:24:49.0386336Z         [], BadRequestDetail: 
2026-09-29T15:24:49.0386633Z --- FAIL: TestAccStreamProcessor_basic (7.51s)
```

  - PASS 8 seconds
- 2026-09-30
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 10 seconds
- 2026-10-01 PASS 12 seconds
- 2026-10-02 PASS 9 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 7 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 7 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 8 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 10 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 9 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 9 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
