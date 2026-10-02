# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor | dev | 0.05s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor | dev | 0.04s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 6 seconds
- 2026-09-03 PASS 7 seconds
- 2026-09-04 PASS 6 seconds
- 2026-09-05 PASS 7 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 8 seconds
- 2026-09-08 PASS 6 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.9154005Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-09-09T02:19:32.9154982Z     resource_test.go:585: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-09-09T02:19:32.9170955Z   
2026-09-09T02:19:32.9171409Z     resource_test.go:586: Step 1/3 error: Error running apply: exit status 1
2026-09-09T02:19:32.9171832Z         
2026-09-09T02:19:32.9172166Z         Error: error creating resource
2026-09-09T02:19:32.9172489Z         
2026-09-09T02:19:32.9172906Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.9173856Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.9174597Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.9174989Z         
2026-09-09T02:19:32.9175804Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.9176947Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.9177642Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2026-09-09T02:19:32.9178347Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.9179035Z         Params: [processor-stopped-to- commandName does not exist in context],
2026-09-09T02:19:32.9179510Z         BadRequestDetail: 
2026-09-09T02:19:32.9181816Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.49s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6867417Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-09-10T02:13:36.6868597Z     resource_test.go:585: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-09-10T02:13:36.6888905Z   
2026-09-10T02:13:36.6889452Z     resource_test.go:586: Step 1/3 error: Error running apply: exit status 1
2026-09-10T02:13:36.6889978Z         
2026-09-10T02:13:36.6890379Z         Error: error creating resource
2026-09-10T02:13:36.6890772Z         
2026-09-10T02:13:36.6891285Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6892272Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6893197Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6893685Z         
2026-09-10T02:13:36.6894725Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6895886Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6896796Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2026-09-10T02:13:36.6897824Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.6898728Z         Params: [processor-stopped-to- commandName does not exist in context],
2026-09-10T02:13:36.6899345Z         BadRequestDetail: 
2026-09-10T02:13:36.6902382Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.38s)
```

- 2026-09-11
  - PASS 18 seconds
  - PASS 6 seconds
- 2026-09-12 PASS 7 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 6 seconds
- 2026-09-15 PASS 6 seconds
- 2026-09-16 PASS 6 seconds
- 2026-09-17 PASS 7 seconds
- 2026-09-18 PASS 6 seconds
- 2026-09-19 PASS 6 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 7 seconds
- 2026-09-22 PASS 6 seconds
- 2026-09-23 PASS 8 seconds
- 2026-09-24 PASS 7 seconds
- 2026-09-25 PASS 6 seconds
- 2026-09-26 PASS 6 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 7 seconds
- 2026-09-29
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2026-09-30
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 9 seconds
- 2026-10-01 PASS 7 seconds
- 2026-10-02 PASS 7 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 6 seconds
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
- 2026-09-20 PASS 9 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 7 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 7 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
