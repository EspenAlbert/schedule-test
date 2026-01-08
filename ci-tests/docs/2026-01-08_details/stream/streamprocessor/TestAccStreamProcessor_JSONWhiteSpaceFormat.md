# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 32 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-12-11 PASS 4 seconds
- 2025-12-12 PASS 5 seconds
- 2025-12-13 PASS 3 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 3 seconds
- 2025-12-16 PASS 4 seconds
- 2025-12-17 PASS 4 seconds
- 2025-12-18 PASS 4 seconds
- 2025-12-19 PASS 3 seconds
- 2025-12-20 PASS 3 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 4 seconds
- 2025-12-23 PASS 3 seconds
- 2025-12-24 PASS 3 seconds
- 2025-12-25 PASS 3 seconds
- 2025-12-26 PASS 4 seconds
- 2025-12-27 PASS 4 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 3 seconds
- 2025-12-31 PASS 3 seconds
- 2026-01-01 PASS 4 seconds
- 2026-01-02 PASS 3 seconds
- 2026-01-03 PASS 3 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 4 seconds
- 2026-01-06 PASS 4 seconds
- 2026-01-07 PASS 3 seconds
- 2026-01-08 PASS 4 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor | qa | 0.10s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T01:00:24+00:00
```
2025-12-14T01:00:24.2680236Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-12-14T01:00:24.3110132Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-12-14T01:00:24.3222174Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-12-14T01:00:24.3222683Z     resource_test.go:124: Step 1/1 error: Error running apply: exit status 1
2025-12-14T01:00:24.3223053Z         
2025-12-14T01:00:24.3223346Z         Error: error creating resource
2025-12-14T01:00:24.3223628Z         
2025-12-14T01:00:24.3224001Z           with mongodbatlas_stream_processor.processor,
2025-12-14T01:00:24.3224695Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-12-14T01:00:24.3225353Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2025-12-14T01:00:24.3225696Z         
2025-12-14T01:00:24.3226459Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor
2025-12-14T01:00:24.3227418Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-14T01:00:24.3228074Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-12-14T01:00:24.3228744Z         problem occur: upstream connect error or disconnect/reset before headers.
2025-12-14T01:00:24.3229372Z         retried and the latest reset reason: remote connection failure, transport
2025-12-14T01:00:24.3230152Z         failure reason: delayed connect error: Connection refused. Reason: Bad
2025-12-14T01:00:24.3230890Z         Request. Params: [new-processor-json-unchanged upstream connect error or
2025-12-14T01:00:24.3231550Z         disconnect/reset before headers. retried and the latest reset reason: remote
2025-12-14T01:00:24.3232190Z         connection failure, transport failure reason: delayed connect error:
2025-12-14T01:00:24.3232680Z         Connection refused], BadRequestDetail: 
2025-12-14T01:00:24.3233950Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.98s)
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
- 2026-01-03: MISSING
- 2026-01-04 PASS 3 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 4 seconds
  - PASS 3 seconds
