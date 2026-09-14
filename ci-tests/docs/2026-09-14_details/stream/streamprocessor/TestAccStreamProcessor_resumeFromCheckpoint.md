# stream/streamprocessor/TestAccStreamProcessor_resumeFromCheckpoint Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 2)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-2927139995804411926/processor | dev | 1.07s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-3423340422653996899/processor | dev | 1.06s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08 PASS 25 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.8659309Z === RUN   TestAccStreamProcessor_resumeFromCheckpoint
2026-09-09T02:19:32.9305673Z === CONT  TestAccStreamProcessor_resumeFromCheckpoint
2026-09-09T02:19:32.9346897Z === NAME  TestAccStreamProcessor_resumeFromCheckpoint
2026-09-09T02:19:32.9347472Z     resource_test.go:147: Step 1/6 error: Error running apply: exit status 1
2026-09-09T02:19:32.9347970Z         
2026-09-09T02:19:32.9348302Z         Error: error creating resource
2026-09-09T02:19:32.9348631Z         
2026-09-09T02:19:32.9349049Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.9349812Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.9350540Z           36: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.9350937Z         
2026-09-09T02:19:32.9351732Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-2927139995804411926/processor
2026-09-09T02:19:32.9352767Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.9353499Z         Detail: Streams Processor with this name (new-processor-resume-sfrge) had a
2026-09-09T02:19:32.9354223Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.9354969Z         Params: [new-processor-resume-sfrge commandName does not exist in context],
2026-09-09T02:19:32.9355471Z         BadRequestDetail: 
2026-09-09T02:19:32.9370903Z   
2026-09-09T02:19:32.9393361Z === NAME  TestAccStreamProcessor_resumeFromCheckpoint
2026-09-09T02:19:32.9394015Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-09T02:19:32.9394518Z         
2026-09-09T02:19:32.9394865Z         Error: error during resource delete
2026-09-09T02:19:32.9395192Z         
2026-09-09T02:19:32.9395924Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-2927139995804411926
2026-09-09T02:19:32.9396782Z         DELETE: HTTP 403 Forbidden (Error code:
2026-09-09T02:19:32.9397391Z         "STREAM_TENANT_HAS_STREAM_PROCESSORS") Detail: Stream workspace with name
2026-09-09T02:19:32.9398106Z         test-acc-tf-2927139995804411926 has active processors, and cannot be changed.
2026-09-09T02:19:32.9398771Z         Reason: Forbidden. Params: [test-acc-tf-2927139995804411926],
2026-09-09T02:19:32.9399239Z         BadRequestDetail: 
2026-09-09T02:19:32.9399635Z --- FAIL: TestAccStreamProcessor_resumeFromCheckpoint (1.75s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6600231Z === RUN   TestAccStreamProcessor_resumeFromCheckpoint
2026-09-10T02:13:36.7011696Z === CONT  TestAccStreamProcessor_resumeFromCheckpoint
2026-09-10T02:13:36.7043852Z === NAME  TestAccStreamProcessor_resumeFromCheckpoint
2026-09-10T02:13:36.7044309Z     resource_test.go:147: Step 1/6 error: Error running apply: exit status 1
2026-09-10T02:13:36.7044768Z         
2026-09-10T02:13:36.7045037Z         Error: error creating resource
2026-09-10T02:13:36.7045392Z         
2026-09-10T02:13:36.7045733Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.7046336Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.7046909Z           36: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.7047390Z         
2026-09-10T02:13:36.7048020Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-3423340422653996899/processor
2026-09-10T02:13:36.7048707Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.7049264Z         Detail: Streams Processor with this name (new-processor-resume-ehihj) had a
2026-09-10T02:13:36.7049841Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.7050410Z         Params: [new-processor-resume-ehihj commandName does not exist in context],
2026-09-10T02:13:36.7050803Z         BadRequestDetail: 
2026-09-10T02:13:36.7062766Z   
2026-09-10T02:13:36.7070181Z --- FAIL: TestAccStreamProcessor_resumeFromCheckpoint (1.56s)
```

- 2026-09-11
  - PASS 15 minutes
  - PASS 28 seconds
- 2026-09-12 PASS 26 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 26 seconds

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 26 seconds
- 2026-09-14: MISSING
