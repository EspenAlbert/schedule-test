# stream/streamprocessor/TestAccStreamProcessor_workspaceNameAliasMigration Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 2)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor | dev | 0.08s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor | dev | 0.07s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08 PASS 5 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.8656699Z === RUN   TestAccStreamProcessor_workspaceNameAliasMigration
2026-09-09T02:19:32.9298193Z === CONT  TestAccStreamProcessor_workspaceNameAliasMigration
2026-09-09T02:19:32.9321976Z === NAME  TestAccStreamProcessor_workspaceNameAliasMigration
2026-09-09T02:19:32.9322583Z     resource_test.go:66: Step 1/2 error: Error running apply: exit status 1
2026-09-09T02:19:32.9323016Z         
2026-09-09T02:19:32.9323358Z         Error: error creating resource
2026-09-09T02:19:32.9323689Z         
2026-09-09T02:19:32.9324108Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.9324876Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.9325600Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.9326143Z         
2026-09-09T02:19:32.9327226Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.9328126Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.9328822Z         Detail: Streams Processor with this name (alias-migration-60tj6) had a
2026-09-09T02:19:32.9329527Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.9330202Z         Params: [alias-migration-60tj6 commandName does not exist in context],
2026-09-09T02:19:32.9330688Z         BadRequestDetail: 
2026-09-09T02:19:32.9331116Z --- FAIL: TestAccStreamProcessor_workspaceNameAliasMigration (0.80s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6598308Z === RUN   TestAccStreamProcessor_workspaceNameAliasMigration
2026-09-10T02:13:36.7011333Z === CONT  TestAccStreamProcessor_workspaceNameAliasMigration
2026-09-10T02:13:36.7024345Z === NAME  TestAccStreamProcessor_workspaceNameAliasMigration
2026-09-10T02:13:36.7024813Z     resource_test.go:66: Step 1/2 error: Error running apply: exit status 1
2026-09-10T02:13:36.7025148Z         
2026-09-10T02:13:36.7025419Z         Error: error creating resource
2026-09-10T02:13:36.7025679Z         
2026-09-10T02:13:36.7026017Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.7026616Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.7027387Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.7027706Z         
2026-09-10T02:13:36.7028347Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.7029045Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.7029594Z         Detail: Streams Processor with this name (alias-migration-gsgrq) had a
2026-09-10T02:13:36.7030148Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.7030682Z         Params: [alias-migration-gsgrq commandName does not exist in context],
2026-09-10T02:13:36.7031061Z         BadRequestDetail: 
2026-09-10T02:13:36.7031401Z --- FAIL: TestAccStreamProcessor_workspaceNameAliasMigration (0.74s)
```

- 2026-09-11
  - PASS 8 seconds
  - PASS 5 seconds
- 2026-09-12 PASS 5 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 4 seconds

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 5 seconds
- 2026-09-14: MISSING
