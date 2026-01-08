# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped Test Details
# Found 32 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 2 seconds
  - PASS 5 seconds
- 2025-12-11 PASS 3 seconds
- 2025-12-12 PASS 3 seconds
- 2025-12-13 PASS 3 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 3 seconds
- 2025-12-16 PASS 3 seconds
- 2025-12-17 PASS 4 seconds
- 2025-12-18 PASS 3 seconds
- 2025-12-19 PASS 2 seconds
- 2025-12-20 PASS 3 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 3 seconds
- 2025-12-23 PASS 3 seconds
- 2025-12-24 PASS 2 seconds
- 2025-12-25 PASS 2 seconds
- 2025-12-26 PASS 3 seconds
- 2025-12-27 PASS 3 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 3 seconds
- 2025-12-31 PASS 2 seconds
- 2026-01-01 PASS 3 seconds
- 2026-01-02 PASS 2 seconds
- 2026-01-03 PASS 3 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 3 seconds
- 2026-01-06 PASS 3 seconds
- 2026-01-07 PASS 2 seconds
- 2026-01-08 PASS 3 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor | qa | 0.05s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T01:00:24+00:00
```
2025-12-14T01:00:24.2991620Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-12-14T01:00:24.2992335Z     resource_test.go:275: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-12-14T01:00:24.2997415Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-12-14T01:00:24.3055299Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-12-14T01:00:24.3055912Z     resource_test.go:276: Step 1/2 error: Error running apply: exit status 1
2025-12-14T01:00:24.3056292Z         
2025-12-14T01:00:24.3056582Z         Error: error creating resource
2025-12-14T01:00:24.3056872Z         
2025-12-14T01:00:24.3057241Z           with mongodbatlas_stream_processor.processor,
2025-12-14T01:00:24.3057940Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-12-14T01:00:24.3058589Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-12-14T01:00:24.3058935Z         
2025-12-14T01:00:24.3059697Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor
2025-12-14T01:00:24.3060841Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-14T01:00:24.3061679Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-12-14T01:00:24.3062454Z         problem occur: upstream connect error or disconnect/reset before headers.
2025-12-14T01:00:24.3063221Z         retried and the latest reset reason: remote connection failure, transport
2025-12-14T01:00:24.3063970Z         failure reason: delayed connect error: Connection refused. Reason: Bad
2025-12-14T01:00:24.3064734Z         Request. Params: [processor-created-to-stopped upstream connect error or
2025-12-14T01:00:24.3065520Z         disconnect/reset before headers. retried and the latest reset reason: remote
2025-12-14T01:00:24.3066313Z         connection failure, transport failure reason: delayed connect error:
2025-12-14T01:00:24.3066927Z         Connection refused], BadRequestDetail: 
2025-12-14T01:00:24.3089219Z   
2025-12-14T01:00:24.3103363Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (0.53s)
```

- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 2 seconds
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
- 2026-01-04 PASS 2 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 3 seconds
  - PASS 2 seconds
