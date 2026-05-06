# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-20 01:19](#error-2026-04-20t0119280000) |  | dev | 300.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 9 seconds
- 2026-04-08 PASS 6 seconds
- 2026-04-09 PASS 7 seconds
- 2026-04-10 PASS 7 seconds
- 2026-04-11 PASS 9 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 6 seconds
- 2026-04-14 PASS a minute
- 2026-04-15 PASS 6 seconds
- 2026-04-16 PASS 7 seconds
- 2026-04-17 PASS 6 seconds
- 2026-04-18 PASS 7 seconds
- 2026-04-19: MISSING
- 2026-04-20

### Error 2026-04-20T01:19:28+00:00
```
2026-04-20T01:19:28.2798351Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-04-20T01:19:28.2799044Z     resource_test.go:236: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-04-20T01:19:28.2805019Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-04-20T01:19:28.2817794Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-04-20T01:19:28.2818407Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-04-20T01:19:28.2818803Z         
2026-04-20T01:19:28.2819117Z         Error: error creating resource
2026-04-20T01:19:28.2819409Z         
2026-04-20T01:19:28.2820283Z           with mongodbatlas_stream_processor.processor,
2026-04-20T01:19:28.2821045Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-04-20T01:19:28.2821739Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-04-20T01:19:28.2822095Z         
2026-04-20T01:19:28.2822597Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2026-04-20T01:19:28.2827088Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (300.78s)
```

- 2026-04-21 PASS 7 seconds
- 2026-04-22 PASS 6 seconds
- 2026-04-23 PASS a minute
- 2026-04-24 PASS 8 seconds
- 2026-04-25 PASS 7 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 7 seconds
- 2026-04-28 PASS 7 seconds
- 2026-04-29 PASS 8 seconds
- 2026-04-30
  - PASS 7 seconds
  - PASS 7 seconds
- 2026-05-01 PASS 6 seconds
- 2026-05-02 PASS 7 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 7 seconds
- 2026-05-05 PASS 7 seconds
- 2026-05-06 PASS a minute

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 6 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 8 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 6 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS a minute
  - PASS a minute
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 8 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 6 seconds
- 2026-05-04
  - PASS 9 seconds
  - PASS 7 seconds
- 2026-05-05 PASS 6 seconds
- 2026-05-06 PASS 6 seconds
