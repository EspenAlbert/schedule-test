# stream/streamprocessor/TestAccStreamProcessor_clusterType Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 2)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor | dev | 1.02s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor | dev | 1.00s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08 PASS 6 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.9263685Z === RUN   TestAccStreamProcessor_clusterType
2026-09-09T02:19:32.9278281Z    test_terraform_path=/home/runner/work/_temp/ddd9fd78-c493-43ca-bf05-24800b4857e3/terraform
2026-09-09T02:19:32.9278969Z     resource_test.go:637: Step 1/1 error: Error running apply: exit status 1
2026-09-09T02:19:32.9279393Z         
2026-09-09T02:19:32.9279920Z         Error: error creating resource
2026-09-09T02:19:32.9280247Z         
2026-09-09T02:19:32.9280670Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.9281450Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.9282180Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.9282572Z         
2026-09-09T02:19:32.9283377Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.9284253Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.9284967Z         Detail: Streams Processor with this name (new-processorvn12a) had a problem
2026-09-09T02:19:32.9285687Z         occur: commandName does not exist in context. Reason: Bad Request. Params:
2026-09-09T02:19:32.9286646Z         [new-processorvn12a commandName does not exist in context], BadRequestDetail:
2026-09-09T02:19:32.9287200Z --- FAIL: TestAccStreamProcessor_clusterType (1.16s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6984231Z === RUN   TestAccStreamProcessor_clusterType
2026-09-10T02:13:36.6995664Z    test_name=TestAccStreamProcessor_clusterType test_terraform_path=/home/runner/work/_temp/8cc92e9c-1de6-438b-a445-0c9c104f9a5a/terraform
2026-09-10T02:13:36.6996325Z     resource_test.go:637: Step 1/1 error: Error running apply: exit status 1
2026-09-10T02:13:36.6996660Z         
2026-09-10T02:13:36.6996937Z         Error: error creating resource
2026-09-10T02:13:36.6997368Z         
2026-09-10T02:13:36.6997707Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6998315Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6998886Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6999195Z         
2026-09-10T02:13:36.6999824Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.7000518Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.7001079Z         Detail: Streams Processor with this name (new-processorimsxo) had a problem
2026-09-10T02:13:36.7001638Z         occur: commandName does not exist in context. Reason: Bad Request. Params:
2026-09-10T02:13:36.7002208Z         [new-processorimsxo commandName does not exist in context], BadRequestDetail:
2026-09-10T02:13:36.7002628Z --- FAIL: TestAccStreamProcessor_clusterType (1.04s)
```

- 2026-09-11
  - PASS 8 seconds
  - PASS 7 seconds
- 2026-09-12 PASS 7 seconds
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
- 2026-09-13 PASS 7 seconds
- 2026-09-14: MISSING
