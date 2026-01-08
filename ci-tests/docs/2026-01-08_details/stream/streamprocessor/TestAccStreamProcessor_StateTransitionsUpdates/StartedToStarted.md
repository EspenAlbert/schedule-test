# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
# Found 32 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-12-11 PASS 11 seconds
- 2025-12-12 PASS 8 seconds
- 2025-12-13 PASS 10 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 6 seconds
- 2025-12-16 PASS 7 seconds
- 2025-12-17 PASS 10 seconds
- 2025-12-18 PASS 8 seconds
- 2025-12-19 PASS 8 seconds
- 2025-12-20 PASS 8 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 8 seconds
- 2025-12-23 PASS 8 seconds
- 2025-12-24 PASS 8 seconds
- 2025-12-25 PASS 7 seconds
- 2025-12-26 PASS 9 seconds
- 2025-12-27 PASS 9 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 9 seconds
- 2025-12-31 PASS 8 seconds
- 2026-01-01 PASS 10 seconds
- 2026-01-02 PASS 7 seconds
- 2026-01-03 PASS 8 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 7 seconds
- 2026-01-06 PASS 8 seconds
- 2026-01-07 PASS 6 seconds
- 2026-01-08 PASS 9 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor/processor-started-to-started:stop | qa | 5.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T01:00:24+00:00
```
2025-12-14T01:00:24.2693067Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-12-14T01:00:24.2694014Z     resource_test.go:204: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-12-14T01:00:24.2703140Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-12-14T01:00:24.2782778Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-12-14T01:00:24.2783358Z     resource_test.go:205: Step 2/2 error: Error running apply: exit status 1
2025-12-14T01:00:24.2783728Z         
2025-12-14T01:00:24.2784052Z         Error: Error stopping stream processor
2025-12-14T01:00:24.2784343Z         
2025-12-14T01:00:24.2784711Z           with mongodbatlas_stream_processor.processor,
2025-12-14T01:00:24.2785396Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-12-14T01:00:24.2786054Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-12-14T01:00:24.2786389Z         
2025-12-14T01:00:24.2787352Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor/processor-started-to-started:stop
2025-12-14T01:00:24.2788318Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-14T01:00:24.2788974Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2025-12-14T01:00:24.2789556Z         problem occur: access of ProjectID that does not exist
2025-12-14T01:00:24.2790292Z         (/com.xgen.mhouse.services.streamprocessormanager.grpc.v1.ManagerService/StopStreamProcessor).
2025-12-14T01:00:24.2791240Z         Reason: Bad Request. Params: [processor-started-to-started access of
2025-12-14T01:00:24.2791698Z         ProjectID that does not exist
2025-12-14T01:00:24.2792397Z         (/com.xgen.mhouse.services.streamprocessormanager.grpc.v1.ManagerService/StopStreamProcessor)],
2025-12-14T01:00:24.2793087Z         BadRequestDetail: 
2025-12-14T01:00:24.2811169Z   
2025-12-14T01:00:24.2889377Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (5.79s)
```

- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 7 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 9 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 7 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 9 seconds
  - PASS 7 seconds
