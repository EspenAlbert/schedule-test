# autogen_slow/streamprocessorapi/TestAccStreamProcessorAPI_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-10-07 to 2025-10-22 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 01:12](#error-2025-10-13t0112580000) |  | dev | 603.07s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23: MISSING
- 2025-09-24: MISSING
- 2025-09-25: MISSING
- 2025-09-26: MISSING
- 2025-09-27: MISSING
- 2025-09-28: MISSING
- 2025-09-29: MISSING
- 2025-09-30: MISSING
- 2025-10-01: MISSING
- 2025-10-02: MISSING
- 2025-10-03: MISSING
- 2025-10-04: MISSING
- 2025-10-05: MISSING
- 2025-10-06: MISSING
- 2025-10-07 PASS 31 seconds
- 2025-10-08 PASS 28 seconds
- 2025-10-09 PASS 28 seconds
- 2025-10-10 PASS 27 seconds
- 2025-10-11 PASS 28 seconds
- 2025-10-12 PASS 41 seconds
- 2025-10-13

### Error 2025-10-13T01:12:58+00:00
```
2025-10-13T01:12:58.1372048Z === RUN   TestAccStreamProcessorAPI_basic
2025-10-13T01:12:58.1372720Z     resource_test.go:40: Creating execution project: test-acc-tf-p-1545724781625833518
2025-10-13T01:12:58.1373594Z === CONT  TestAccStreamProcessorAPI_basic
2025-10-13T01:12:58.1383655Z   
2025-10-13T01:12:58.1391780Z     resource_test.go:45: Step 1/4 error: Error running apply: exit status 1
2025-10-13T01:12:58.1392290Z         
2025-10-13T01:12:58.1392622Z         Error: Error calling API in Create
2025-10-13T01:12:58.1393008Z         
2025-10-13T01:12:58.1393377Z           with mongodbatlas_stream_processor_api.test,
2025-10-13T01:12:58.1394602Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor_api" "test":
2025-10-13T01:12:58.1395444Z           32: 		resource "mongodbatlas_stream_processor_api" "test" {
2025-10-13T01:12:58.1395789Z         
2025-10-13T01:12:58.1396393Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:12:58.1404736Z   
2025-10-13T01:12:58.1405341Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-13T01:12:58.1405788Z         
2025-10-13T01:12:58.1406069Z         Error: error deleting resource
2025-10-13T01:12:58.1406347Z         
2025-10-13T01:12:58.1406937Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:12:58.1407387Z --- FAIL: TestAccStreamProcessorAPI_basic (603.69s)
```

- 2025-10-14 PASS 30 seconds
- 2025-10-15 PASS 31 seconds
- 2025-10-16 PASS 30 seconds
- 2025-10-17 PASS 27 seconds
- 2025-10-18 PASS 30 seconds
- 2025-10-19 PASS 29 seconds
- 2025-10-20
  - PASS 28 seconds
  - PASS 27 seconds
- 2025-10-21 PASS 27 seconds
- 2025-10-22
  - PASS 29 seconds
  - PASS 30 seconds