# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-02 02:49](#error-2026-09-02t0249340000) |  | dev | timeout | 2400.09s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 6 seconds
- 2026-08-07 PASS 7 seconds
- 2026-08-08 PASS 5 seconds
- 2026-08-09: MISSING
- 2026-08-10 PASS 7 seconds
- 2026-08-11 PASS 6 seconds
- 2026-08-12 PASS 8 seconds
- 2026-08-13 PASS 9 seconds
- 2026-08-14 PASS 9 seconds
- 2026-08-15 PASS 7 seconds
- 2026-08-16: MISSING
- 2026-08-17 PASS 7 seconds
- 2026-08-18 PASS 6 seconds
- 2026-08-19 PASS 8 seconds
- 2026-08-20 PASS 6 seconds
- 2026-08-21 PASS 6 seconds
- 2026-08-22 PASS 5 seconds
- 2026-08-23: MISSING
- 2026-08-24 PASS 6 seconds
- 2026-08-25 PASS 6 seconds
- 2026-08-26 PASS 7 seconds
- 2026-08-27 PASS 5 seconds
- 2026-08-28
  - PASS 5 seconds
  - PASS 7 seconds
- 2026-08-29 PASS 6 seconds
- 2026-08-30: MISSING
- 2026-08-31 PASS 4 seconds
- 2026-09-01 PASS 7 seconds
- 2026-09-02

### Error 2026-09-02T02:49:34+00:00
```
2026-09-02T02:49:34.6195613Z === RUN   TestAccStreamProcessor_withOptions
2026-09-02T02:49:34.6211003Z    test_step_number=1 test_working_directory=/tmp/plugintest4121403972 test_name=TestAccStreamProcessor_withOptions test_terraform_path=/home/runner/work/_temp/c07b50af-a7d1-4530-9044-4d2066b578cf/terraform
2026-09-02T02:49:34.6212914Z     resource_test.go:322: Step 1/2 error: Error running apply: exit status 1
2026-09-02T02:49:34.6213572Z         
2026-09-02T02:49:34.6214222Z         Error: error waiting for stream connection to be ready
2026-09-02T02:49:34.6214808Z         
2026-09-02T02:49:34.6215458Z           with mongodbatlas_stream_connection.cluster_src,
2026-09-02T02:49:34.6216735Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_connection" "cluster_src":
2026-09-02T02:49:34.6217993Z           32:             resource "mongodbatlas_stream_connection" "cluster_src" {
2026-09-02T02:49:34.6218637Z         
2026-09-02T02:49:34.6219435Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-09-02T02:49:34.6220226Z         'PENDING', timeout: 40m0s)
2026-09-02T02:49:34.6220821Z --- FAIL: TestAccStreamProcessor_withOptions (2400.88s)
```

- 2026-09-03 PASS 8 seconds
- 2026-09-04 PASS 7 seconds

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 8 seconds
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 8 seconds
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 6 seconds
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 6 seconds
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 5 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 7 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
