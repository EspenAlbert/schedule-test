# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState Test Details
# Found 32 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 3 seconds
- 2025-12-05
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-12-06 PASS 4 seconds
- 2025-12-07: MISSING
- 2025-12-08 PASS 3 seconds
- 2025-12-09 PASS 3 seconds
- 2025-12-10
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-12-11 PASS 4 seconds
- 2025-12-12 PASS 5 seconds
- 2025-12-13 PASS 4 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 3 seconds
- 2025-12-16 PASS 4 seconds
- 2025-12-17 PASS 5 seconds
- 2025-12-18 PASS 4 seconds
- 2025-12-19 PASS 3 seconds
- 2025-12-20 PASS 4 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 4 seconds
- 2025-12-23 PASS 4 seconds
- 2025-12-24 PASS 3 seconds
- 2025-12-25 PASS 3 seconds
- 2025-12-26 PASS 4 seconds
- 2025-12-27 PASS 4 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 4 seconds
- 2025-12-31 PASS 3 seconds
- 2026-01-01 PASS 4 seconds
- 2026-01-02 PASS 3 seconds

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
- 2025-12-07 PASS 5 seconds
- 2025-12-08: MISSING
- 2025-12-09 PASS 4 seconds
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T01:00:24+00:00
```
2025-12-14T01:00:24.2894484Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-12-14T01:00:24.2895329Z     resource_test.go:238: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-12-14T01:00:24.2899652Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-12-14T01:00:24.2918469Z   
2025-12-14T01:00:24.2977714Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-12-14T01:00:24.2978282Z     resource_test.go:239: Step 1/2 error: Error running apply: exit status 1
2025-12-14T01:00:24.2978654Z         
2025-12-14T01:00:24.2978937Z         Error: error creating resource
2025-12-14T01:00:24.2979218Z         
2025-12-14T01:00:24.2979583Z           with mongodbatlas_stream_processor.processor,
2025-12-14T01:00:24.2980278Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-12-14T01:00:24.2981036Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-12-14T01:00:24.2981382Z         
2025-12-14T01:00:24.2982143Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor
2025-12-14T01:00:24.2982974Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-14T01:00:24.2983595Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-12-14T01:00:24.2984241Z         problem occur: upstream connect error or disconnect/reset before headers.
2025-12-14T01:00:24.2984868Z         retried and the latest reset reason: remote connection failure, transport
2025-12-14T01:00:24.2985879Z         failure reason: delayed connect error: Connection refused. Reason: Bad
2025-12-14T01:00:24.2986492Z         Request. Params: [processor-created-to- upstream connect error or
2025-12-14T01:00:24.2987152Z         disconnect/reset before headers. retried and the latest reset reason: remote
2025-12-14T01:00:24.2987799Z         connection failure, transport failure reason: delayed connect error:
2025-12-14T01:00:24.2988290Z         Connection refused], BadRequestDetail: 
2025-12-14T01:00:24.2990491Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.60s)
```

- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 3 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 4 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
