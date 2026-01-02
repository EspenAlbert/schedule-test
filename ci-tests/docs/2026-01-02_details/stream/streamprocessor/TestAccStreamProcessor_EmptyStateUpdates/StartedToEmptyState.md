# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState Test Details
# Found 32 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 6 seconds
- 2025-12-05
  - PASS 5 seconds
  - PASS 8 seconds
- 2025-12-06 PASS 7 seconds
- 2025-12-07: MISSING
- 2025-12-08 PASS 5 seconds
- 2025-12-09 PASS 7 seconds
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
- 2025-12-19 PASS 5 seconds
- 2025-12-20 PASS 7 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 7 seconds
- 2025-12-23 PASS 6 seconds
- 2025-12-24 PASS 5 seconds
- 2025-12-25 PASS 7 seconds
- 2025-12-26 PASS 6 seconds
- 2025-12-27 PASS 7 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 6 seconds
- 2025-12-31 PASS 5 seconds
- 2026-01-01 PASS 7 seconds
- 2026-01-02 PASS 6 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor | qa | 0.06s

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
2025-12-14T01:00:24.2896663Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-12-14T01:00:24.2897493Z     resource_test.go:238: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-12-14T01:00:24.2899168Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-12-14T01:00:24.2918798Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-12-14T01:00:24.2919364Z     resource_test.go:239: Step 1/2 error: Error running apply: exit status 1
2025-12-14T01:00:24.2919737Z         
2025-12-14T01:00:24.2920162Z         Error: error creating resource
2025-12-14T01:00:24.2920440Z         
2025-12-14T01:00:24.2920942Z           with mongodbatlas_stream_processor.processor,
2025-12-14T01:00:24.2921631Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-12-14T01:00:24.2922274Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-12-14T01:00:24.2922617Z         
2025-12-14T01:00:24.2923377Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor
2025-12-14T01:00:24.2924201Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-14T01:00:24.2924825Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-12-14T01:00:24.2925460Z         problem occur: upstream connect error or disconnect/reset before headers.
2025-12-14T01:00:24.2926089Z         retried and the latest reset reason: remote connection failure, transport
2025-12-14T01:00:24.2926835Z         failure reason: delayed connect error: Connection refused. Reason: Bad
2025-12-14T01:00:24.2927433Z         Request. Params: [processor-started-to- upstream connect error or
2025-12-14T01:00:24.2928070Z         disconnect/reset before headers. retried and the latest reset reason: remote
2025-12-14T01:00:24.2928702Z         connection failure, transport failure reason: delayed connect error:
2025-12-14T01:00:24.2929193Z         Connection refused], BadRequestDetail: 
2025-12-14T01:00:24.2947469Z    test_terraform_path=/home/runner/work/_temp/4599e4d6-c372-4194-af63-a6470de1abca/terraform test_working_directory=/tmp/plugintest1273294165
2025-12-14T01:00:24.2989242Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.55s)
```

- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 5 seconds
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
