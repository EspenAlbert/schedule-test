# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted Test Details
# Found 32 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:45](#error-2026-01-07t0045550000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/695da931d59b8466ea725024/streams/test-acc-tf-s-2241396692592931656/processor/processor-created-to-started:start | dev | flaky_500 | 4.06s

### Timeline
- 2025-12-09: MISSING
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
- 2026-01-03 PASS 8 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 7 seconds
- 2026-01-06 PASS 6 seconds
- 2026-01-07

### Error 2026-01-07T00:45:55+00:00
```
2026-01-07T00:45:55.2704020Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-01-07T00:45:55.2704692Z     resource_test.go:204: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-01-07T00:45:55.2714765Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-01-07T00:45:55.2760634Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-01-07T00:45:55.2761201Z     resource_test.go:205: Step 2/2 error: Error running apply: exit status 1
2026-01-07T00:45:55.2761570Z         
2026-01-07T00:45:55.2761874Z         Error: Error starting stream processor
2026-01-07T00:45:55.2762342Z         
2026-01-07T00:45:55.2762704Z           with mongodbatlas_stream_processor.processor,
2026-01-07T00:45:55.2763607Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-01-07T00:45:55.2764376Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-01-07T00:45:55.2764718Z         
2026-01-07T00:45:55.2765676Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da931d59b8466ea725024/streams/test-acc-tf-s-2241396692592931656/processor/processor-created-to-started:start
2026-01-07T00:45:55.2766641Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-01-07T00:45:55.2767298Z         Detail: Streams Processor with this name (processor-created-to-started) had a
2026-01-07T00:45:55.2767903Z         problem occur: error getting project '695da931d59b8466ea725024'
2026-01-07T00:45:55.2768494Z         [500/UNEXPECTED_ERROR]: Unexpected error.. Reason: Bad Request. Params:
2026-01-07T00:45:55.2769044Z         [processor-created-to-started error getting project
2026-01-07T00:45:55.2769603Z         '695da931d59b8466ea725024' [500/UNEXPECTED_ERROR]: Unexpected error.],
2026-01-07T00:45:55.2770024Z         BadRequestDetail: 
2026-01-07T00:45:55.2771633Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (4.56s)
```

- 2026-01-08 PASS 7 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor/processor-created-to-started | qa | 420.10s

### Timeline
- 2025-12-09: MISSING
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
- 2026-01-03: MISSING
- 2026-01-04 PASS 6 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 6 seconds
  - PASS 6 seconds
