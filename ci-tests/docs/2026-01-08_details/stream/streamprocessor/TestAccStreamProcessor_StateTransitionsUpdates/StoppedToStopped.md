# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
# Found 32 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-12-11 PASS 8 seconds
- 2025-12-12 PASS 9 seconds
- 2025-12-13 PASS 8 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 8 seconds
- 2025-12-16 PASS 10 seconds
- 2025-12-17 PASS 9 seconds
- 2025-12-18 PASS 10 seconds
- 2025-12-19 PASS 7 seconds
- 2025-12-20 PASS 8 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 9 seconds
- 2025-12-23 PASS 7 seconds
- 2025-12-24 PASS 7 seconds
- 2025-12-25 PASS 9 seconds
- 2025-12-26 PASS 7 seconds
- 2025-12-27 PASS 8 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 8 seconds
- 2025-12-31 PASS 6 seconds
- 2026-01-01 PASS 10 seconds
- 2026-01-02 PASS 8 seconds
- 2026-01-03 PASS 9 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 9 seconds
- 2026-01-06 PASS 8 seconds
- 2026-01-07 PASS 7 seconds
- 2026-01-08 PASS 8 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor/processor-stopped-to-stopped:stop | qa | 4.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T01:00:24+00:00
```
2025-12-14T01:00:24.2696929Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-12-14T01:00:24.2697821Z     resource_test.go:204: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-12-14T01:00:24.2702118Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-12-14T01:00:24.2723560Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-12-14T01:00:24.2724155Z     resource_test.go:205: Step 2/3 error: Error running apply: exit status 1
2025-12-14T01:00:24.2724530Z         
2025-12-14T01:00:24.2724865Z         Error: Error stopping stream processor
2025-12-14T01:00:24.2725161Z         
2025-12-14T01:00:24.2725534Z           with mongodbatlas_stream_processor.processor,
2025-12-14T01:00:24.2726226Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-12-14T01:00:24.2726887Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-12-14T01:00:24.2727234Z         
2025-12-14T01:00:24.2728199Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor/processor-stopped-to-stopped:stop
2025-12-14T01:00:24.2729168Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-14T01:00:24.2729832Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2025-12-14T01:00:24.2730415Z         problem occur: access of ProjectID that does not exist
2025-12-14T01:00:24.2731757Z         (/com.xgen.mhouse.services.streamprocessormanager.grpc.v1.ManagerService/StopStreamProcessor).
2025-12-14T01:00:24.2732532Z         Reason: Bad Request. Params: [processor-stopped-to-stopped access of
2025-12-14T01:00:24.2732989Z         ProjectID that does not exist
2025-12-14T01:00:24.2733687Z         (/com.xgen.mhouse.services.streamprocessormanager.grpc.v1.ManagerService/StopStreamProcessor)],
2025-12-14T01:00:24.2734250Z         BadRequestDetail: 
2025-12-14T01:00:24.2752503Z    test_step_number=2 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped test_terraform_path=/home/runner/work/_temp/4599e4d6-c372-4194-af63-a6470de1abca/terraform
2025-12-14T01:00:24.2888077Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (4.83s)
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
