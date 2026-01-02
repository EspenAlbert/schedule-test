# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted Test Details
# Found 32 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 11 seconds
- 2025-12-05
  - PASS 8 seconds
  - PASS 12 seconds
- 2025-12-06 PASS 11 seconds
- 2025-12-07: MISSING
- 2025-12-08 PASS 9 seconds
- 2025-12-09 PASS 9 seconds
- 2025-12-10
  - PASS 9 seconds
  - PASS 10 seconds
- 2025-12-11 PASS 10 seconds
- 2025-12-12 PASS 10 seconds
- 2025-12-13 PASS 8 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 9 seconds
- 2025-12-16 PASS 10 seconds
- 2025-12-17 PASS 9 seconds
- 2025-12-18 PASS 9 seconds
- 2025-12-19 PASS 10 seconds
- 2025-12-20 PASS 8 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 10 seconds
- 2025-12-23 PASS 11 seconds
- 2025-12-24 PASS 8 seconds
- 2025-12-25 PASS 10 seconds
- 2025-12-26 PASS 10 seconds
- 2025-12-27 PASS 9 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 11 seconds
- 2025-12-31 PASS 7 seconds
- 2026-01-01 PASS 10 seconds
- 2026-01-02 PASS 9 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor/processor-stopped-to-started:start | qa | 13.03s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 10 seconds
- 2025-12-08: MISSING
- 2025-12-09 PASS 9 seconds
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T01:00:24+00:00
```
2025-12-14T01:00:24.2695175Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-12-14T01:00:24.2695843Z     resource_test.go:204: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-12-14T01:00:24.2701612Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-12-14T01:00:24.2811567Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-12-14T01:00:24.2812267Z     resource_test.go:205: Step 1/3 error: Error running apply: exit status 1
2025-12-14T01:00:24.2812757Z         
2025-12-14T01:00:24.2813657Z         Error: Error starting stream processor. You need to fix the processor and import the resource or delete it manually and re-run terraform apply.
2025-12-14T01:00:24.2814344Z         
2025-12-14T01:00:24.2814721Z           with mongodbatlas_stream_processor.processor,
2025-12-14T01:00:24.2815508Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-12-14T01:00:24.2816266Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-12-14T01:00:24.2816704Z         
2025-12-14T01:00:24.2817786Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor/processor-stopped-to-started:start
2025-12-14T01:00:24.2819148Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-14T01:00:24.2819921Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2025-12-14T01:00:24.2820818Z         problem occur: failed to provision resources for stream processor: timed out
2025-12-14T01:00:24.2821425Z         trying to acquire tenant lock. Reason: Bad Request. Params:
2025-12-14T01:00:24.2822133Z         [processor-stopped-to-started failed to provision resources for stream
2025-12-14T01:00:24.2822887Z         processor: timed out trying to acquire tenant lock], BadRequestDetail: 
2025-12-14T01:00:24.2840179Z   
2025-12-14T01:00:24.2890023Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (13.29s)
```

- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 8 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 10 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
