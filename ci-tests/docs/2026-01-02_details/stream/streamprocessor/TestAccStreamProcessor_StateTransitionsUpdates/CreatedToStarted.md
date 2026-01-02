# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted Test Details
# Found 32 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 7 seconds
- 2025-12-05
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-12-06 PASS 7 seconds
- 2025-12-07: MISSING
- 2025-12-08 PASS 6 seconds
- 2025-12-09 PASS 7 seconds
- 2025-12-10
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-12-11 PASS 7 seconds
- 2025-12-12 PASS 7 seconds
- 2025-12-13 PASS 6 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 7 seconds
- 2025-12-16 PASS 7 seconds
- 2025-12-17 PASS 7 seconds
- 2025-12-18 PASS 7 seconds
- 2025-12-19 PASS 8 seconds
- 2025-12-20 PASS 8 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 7 seconds
- 2025-12-23 PASS 6 seconds
- 2025-12-24 PASS 5 seconds
- 2025-12-25 PASS 6 seconds
- 2025-12-26 PASS 6 seconds
- 2025-12-27 PASS 7 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 7 seconds
- 2025-12-31 PASS 6 seconds
- 2026-01-01 PASS 6 seconds
- 2026-01-02 PASS 6 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor/processor-created-to-started | qa | 420.10s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 7 seconds
- 2025-12-08: MISSING
- 2025-12-09 PASS 8 seconds
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T01:00:24+00:00
```
2025-12-14T01:00:24.2688626Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-12-14T01:00:24.2689611Z     resource_test.go:204: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-12-14T01:00:24.2701093Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-12-14T01:00:24.2860475Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-12-14T01:00:24.2861300Z     resource_test.go:205: Step 2/2 error: Error running apply: exit status 1
2025-12-14T01:00:24.2861686Z         
2025-12-14T01:00:24.2862002Z         Error: Error starting stream processor
2025-12-14T01:00:24.2862299Z         
2025-12-14T01:00:24.2862665Z           with mongodbatlas_stream_processor.processor,
2025-12-14T01:00:24.2863361Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-12-14T01:00:24.2864007Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-12-14T01:00:24.2864345Z         
2025-12-14T01:00:24.2864814Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-12-14T01:00:24.2879551Z    test_step_number=2 test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted test_terraform_path=/home/runner/work/_temp/4599e4d6-c372-4194-af63-a6470de1abca/terraform
2025-12-14T01:00:24.2880703Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-12-14T01:00:24.2881246Z         
2025-12-14T01:00:24.2881584Z         Error: error deleting resource
2025-12-14T01:00:24.2881866Z         
2025-12-14T01:00:24.2882792Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor/processor-created-to-started
2025-12-14T01:00:24.2883742Z         DELETE: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-14T01:00:24.2884405Z         Detail: Streams Processor with this name (processor-created-to-started) had a
2025-12-14T01:00:24.2885077Z         problem occur: upstream connect error or disconnect/reset before headers.
2025-12-14T01:00:24.2885690Z         reset reason: connection termination. Reason: Bad Request. Params:
2025-12-14T01:00:24.2886323Z         [processor-created-to-started upstream connect error or disconnect/reset
2025-12-14T01:00:24.2886968Z         before headers. reset reason: connection termination], BadRequestDetail: 
2025-12-14T01:00:24.2891480Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (420.98s)
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
- 2025-12-28 PASS 7 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
