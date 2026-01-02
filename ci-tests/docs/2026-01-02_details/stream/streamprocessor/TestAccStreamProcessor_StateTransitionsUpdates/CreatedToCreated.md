# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated Test Details
# Found 32 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 4 seconds
- 2025-12-05
  - PASS 4 seconds
  - PASS 6 seconds
- 2025-12-06 PASS 4 seconds
- 2025-12-07: MISSING
- 2025-12-08 PASS 5 seconds
- 2025-12-09 PASS 6 seconds
- 2025-12-10
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-12-11 PASS 5 seconds
- 2025-12-12 PASS 6 seconds
- 2025-12-13 PASS 4 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 4 seconds
- 2025-12-16 PASS 7 seconds
- 2025-12-17 PASS 6 seconds
- 2025-12-18 PASS 6 seconds
- 2025-12-19 PASS 4 seconds
- 2025-12-20 PASS 4 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 6 seconds
- 2025-12-23 PASS 4 seconds
- 2025-12-24 PASS 4 seconds
- 2025-12-25 PASS 4 seconds
- 2025-12-26 PASS 6 seconds
- 2025-12-27 PASS 5 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 6 seconds
- 2025-12-31 PASS 4 seconds
- 2026-01-01 PASS 5 seconds
- 2026-01-02 PASS 6 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor/processor-created-to-created | qa | 15.06s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 5 seconds
- 2025-12-08: MISSING
- 2025-12-09 PASS 5 seconds
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T01:00:24+00:00
```
2025-12-14T01:00:24.2699005Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-12-14T01:00:24.2699735Z     resource_test.go:204: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-12-14T01:00:24.2702627Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-12-14T01:00:24.2840778Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-12-14T01:00:24.2841541Z     resource_test.go:205: Step 2/2 error: Error running apply: exit status 1
2025-12-14T01:00:24.2841926Z         
2025-12-14T01:00:24.2842377Z         Error: Error modifying stream processor
2025-12-14T01:00:24.2842681Z         
2025-12-14T01:00:24.2843181Z           with mongodbatlas_stream_processor.processor,
2025-12-14T01:00:24.2843997Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-12-14T01:00:24.2844775Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-12-14T01:00:24.2845121Z         
2025-12-14T01:00:24.2846253Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor/processor-created-to-created
2025-12-14T01:00:24.2847570Z         PATCH: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-14T01:00:24.2848366Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2025-12-14T01:00:24.2849157Z         problem occur: timed out trying to acquire tenant lock. Reason: Bad Request.
2025-12-14T01:00:24.2849923Z         Params: [processor-created-to-created timed out trying to acquire tenant
2025-12-14T01:00:24.2850497Z         lock], BadRequestDetail: 
2025-12-14T01:00:24.2859623Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted test_terraform_path=/home/runner/work/_temp/4599e4d6-c372-4194-af63-a6470de1abca/terraform
2025-12-14T01:00:24.2890811Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (15.57s)
```

- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 4 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 6 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
