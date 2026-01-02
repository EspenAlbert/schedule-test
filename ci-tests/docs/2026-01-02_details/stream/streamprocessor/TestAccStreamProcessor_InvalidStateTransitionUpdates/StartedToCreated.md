# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated Test Details
# Found 32 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 4 seconds
- 2025-12-05
  - PASS 3 seconds
  - PASS 5 seconds
- 2025-12-06 PASS 3 seconds
- 2025-12-07: MISSING
- 2025-12-08 PASS 3 seconds
- 2025-12-09 PASS 4 seconds
- 2025-12-10
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-12-11 PASS 4 seconds
- 2025-12-12 PASS 4 seconds
- 2025-12-13 PASS 4 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 3 seconds
- 2025-12-16 PASS 5 seconds
- 2025-12-17 PASS 5 seconds
- 2025-12-18 PASS 4 seconds
- 2025-12-19 PASS 4 seconds
- 2025-12-20 PASS 4 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 4 seconds
- 2025-12-23 PASS 4 seconds
- 2025-12-24 PASS 3 seconds
- 2025-12-25 PASS 4 seconds
- 2025-12-26 PASS 4 seconds
- 2025-12-27 PASS 5 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 4 seconds
- 2025-12-31 PASS 4 seconds
- 2026-01-01 PASS 4 seconds
- 2026-01-02 PASS 3 seconds

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
- 2025-12-07 PASS 4 seconds
- 2025-12-08: MISSING
- 2025-12-09 PASS 4 seconds
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T01:00:24+00:00
```
2025-12-14T01:00:24.2995555Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-12-14T01:00:24.2996249Z     resource_test.go:275: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-12-14T01:00:24.2997967Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-12-14T01:00:24.3089710Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-12-14T01:00:24.3090466Z     resource_test.go:276: Step 1/2 error: Error running apply: exit status 1
2025-12-14T01:00:24.3090993Z         
2025-12-14T01:00:24.3091429Z         Error: error creating resource
2025-12-14T01:00:24.3091720Z         
2025-12-14T01:00:24.3092223Z           with mongodbatlas_stream_processor.processor,
2025-12-14T01:00:24.3093054Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-12-14T01:00:24.3093840Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-12-14T01:00:24.3094191Z         
2025-12-14T01:00:24.3095090Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor
2025-12-14T01:00:24.3096127Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-14T01:00:24.3096873Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-12-14T01:00:24.3097652Z         problem occur: upstream connect error or disconnect/reset before headers.
2025-12-14T01:00:24.3098408Z         retried and the latest reset reason: remote connection failure, transport
2025-12-14T01:00:24.3099144Z         failure reason: delayed connect error: Connection refused. Reason: Bad
2025-12-14T01:00:24.3099894Z         Request. Params: [processor-started-to-created upstream connect error or
2025-12-14T01:00:24.3100772Z         disconnect/reset before headers. retried and the latest reset reason: remote
2025-12-14T01:00:24.3101532Z         connection failure, transport failure reason: delayed connect error:
2025-12-14T01:00:24.3102139Z         Connection refused], BadRequestDetail: 
2025-12-14T01:00:24.3105266Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.54s)
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
