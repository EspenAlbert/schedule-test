# stream/streamprocessor/TestMigStreamProcessor_basic Test Details
# Found 5 TestRuns in dev, qa from 2026-09-09 to 2026-09-14 from master branch: 1 unique tests, PASS(x 4) FAIL
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor | dev | 6.00s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.8612477Z === RUN   TestMigStreamProcessor_basic
2026-09-09T02:19:32.8613122Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-2377165603653570101
2026-09-09T02:19:32.8613937Z     resource_migration_test.go:11: Creating execution stream instance: test-acc-tf-s-7291791236116398531
2026-09-09T02:19:32.8623552Z   
2026-09-09T02:19:32.8624035Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-09-09T02:19:32.8624497Z         
2026-09-09T02:19:32.8624837Z         Error: error creating resource
2026-09-09T02:19:32.8625163Z         
2026-09-09T02:19:32.8625575Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.8626534Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.8627274Z           14: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.8627678Z         
2026-09-09T02:19:32.8628501Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.8629391Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.8630109Z         Detail: Streams Processor with this name (new-processor7u7lo) had a problem
2026-09-09T02:19:32.8630830Z         occur: commandName does not exist in context. Reason: Bad Request. Params:
2026-09-09T02:19:32.8631565Z         [new-processor7u7lo commandName does not exist in context], BadRequestDetail:
2026-09-09T02:19:32.8632240Z --- FAIL: TestMigStreamProcessor_basic (6.02s)
```

- 2026-09-10: MISSING
- 2026-09-11
  - PASS 15 seconds
  - PASS 11 seconds
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 13 seconds

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 15 seconds
- 2026-09-14: MISSING
