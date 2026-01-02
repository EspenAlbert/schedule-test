# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState Test Details
# Found 32 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 6 seconds
- 2025-12-05
  - PASS 5 seconds
  - PASS 8 seconds
- 2025-12-06 PASS 6 seconds
- 2025-12-07: MISSING
- 2025-12-08 PASS 6 seconds
- 2025-12-09 PASS 6 seconds
- 2025-12-10
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-12-11 PASS 7 seconds
- 2025-12-12 PASS 7 seconds
- 2025-12-13 PASS 6 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 6 seconds
- 2025-12-16 PASS 7 seconds
- 2025-12-17 PASS 8 seconds
- 2025-12-18 PASS 7 seconds
- 2025-12-19 PASS 6 seconds
- 2025-12-20 PASS 6 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 7 seconds
- 2025-12-23 PASS 6 seconds
- 2025-12-24 PASS 5 seconds
- 2025-12-25 PASS 6 seconds
- 2025-12-26 PASS 7 seconds
- 2025-12-27 PASS 7 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 7 seconds
- 2025-12-31 PASS 6 seconds
- 2026-01-01 PASS 7 seconds
- 2026-01-02 PASS 5 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor | qa | flaky_500 | 0.06s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 7 seconds
- 2025-12-08: MISSING
- 2025-12-09 PASS 6 seconds
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T01:00:24+00:00
```
2025-12-14T01:00:24.2892412Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-12-14T01:00:24.2893276Z     resource_test.go:238: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-12-14T01:00:24.2898683Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-12-14T01:00:24.2948195Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-12-14T01:00:24.2948756Z     resource_test.go:239: Step 1/3 error: Error running apply: exit status 1
2025-12-14T01:00:24.2949125Z         
2025-12-14T01:00:24.2949412Z         Error: error creating resource
2025-12-14T01:00:24.2949684Z         
2025-12-14T01:00:24.2950053Z           with mongodbatlas_stream_processor.processor,
2025-12-14T01:00:24.2950967Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-12-14T01:00:24.2951623Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-12-14T01:00:24.2951953Z         
2025-12-14T01:00:24.2952710Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor
2025-12-14T01:00:24.2953536Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-14T01:00:24.2954155Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-12-14T01:00:24.2954795Z         problem occur: upstream connect error or disconnect/reset before headers.
2025-12-14T01:00:24.2955459Z         retried and the latest reset reason: remote connection failure, transport
2025-12-14T01:00:24.2956111Z         failure reason: delayed connect error: Connection refused. Reason: Bad
2025-12-14T01:00:24.2956715Z         Request. Params: [processor-stopped-to- upstream connect error or
2025-12-14T01:00:24.2957356Z         disconnect/reset before headers. retried and the latest reset reason: remote
2025-12-14T01:00:24.2957987Z         connection failure, transport failure reason: delayed connect error:
2025-12-14T01:00:24.2958474Z         Connection refused], BadRequestDetail: 
2025-12-14T01:00:24.2977388Z   
2025-12-14T01:00:24.2989873Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.57s)
```

- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 6 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 7 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
