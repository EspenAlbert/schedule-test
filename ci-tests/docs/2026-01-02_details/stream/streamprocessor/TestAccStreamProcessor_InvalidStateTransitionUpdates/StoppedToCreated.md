# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated Test Details
# Found 32 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 5 seconds
- 2025-12-05
  - PASS 5 seconds
  - PASS 7 seconds
- 2025-12-06 PASS 5 seconds
- 2025-12-07: MISSING
- 2025-12-08 PASS 6 seconds
- 2025-12-09 PASS 6 seconds
- 2025-12-10
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-12-11 PASS 6 seconds
- 2025-12-12 PASS 6 seconds
- 2025-12-13 PASS 5 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 5 seconds
- 2025-12-16 PASS 6 seconds
- 2025-12-17 PASS 7 seconds
- 2025-12-18 PASS 6 seconds
- 2025-12-19 PASS 5 seconds
- 2025-12-20 PASS 6 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 6 seconds
- 2025-12-23 PASS 6 seconds
- 2025-12-24 PASS 5 seconds
- 2025-12-25 PASS 5 seconds
- 2025-12-26 PASS 6 seconds
- 2025-12-27 PASS 6 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 6 seconds
- 2025-12-31 PASS 5 seconds
- 2026-01-01 PASS 6 seconds
- 2026-01-02 PASS 5 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor | qa | 0.05s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 6 seconds
- 2025-12-08: MISSING
- 2025-12-09 PASS 5 seconds
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T01:00:24+00:00
```
2025-12-14T01:00:24.2993673Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-12-14T01:00:24.2994378Z     resource_test.go:275: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-12-14T01:00:24.2998635Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-12-14T01:00:24.3033015Z    test_step_number=1
2025-12-14T01:00:24.3033533Z     resource_test.go:276: Step 1/3 error: Error running apply: exit status 1
2025-12-14T01:00:24.3033933Z         
2025-12-14T01:00:24.3034239Z         Error: error creating resource
2025-12-14T01:00:24.3034527Z         
2025-12-14T01:00:24.3034912Z           with mongodbatlas_stream_processor.processor,
2025-12-14T01:00:24.3035613Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-12-14T01:00:24.3036289Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-12-14T01:00:24.3036635Z         
2025-12-14T01:00:24.3037409Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor
2025-12-14T01:00:24.3038237Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-14T01:00:24.3038911Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2025-12-14T01:00:24.3039578Z         problem occur: upstream connect error or disconnect/reset before headers.
2025-12-14T01:00:24.3040204Z         retried and the latest reset reason: remote connection failure, transport
2025-12-14T01:00:24.3040993Z         failure reason: delayed connect error: Connection refused. Reason: Bad
2025-12-14T01:00:24.3041634Z         Request. Params: [processor-stopped-to-created upstream connect error or
2025-12-14T01:00:24.3042299Z         disconnect/reset before headers. retried and the latest reset reason: remote
2025-12-14T01:00:24.3042934Z         connection failure, transport failure reason: delayed connect error:
2025-12-14T01:00:24.3043434Z         Connection refused], BadRequestDetail: 
2025-12-14T01:00:24.3054777Z   
2025-12-14T01:00:24.3104446Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (0.53s)
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
