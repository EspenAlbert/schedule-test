# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-28 05:41](#error-2026-08-28t0541400000) |  | dev | timeout | 2564.05s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 2 minutes
- 2026-08-07 PASS 2 minutes
- 2026-08-08 PASS 2 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 2 minutes
- 2026-08-11 PASS 2 minutes
- 2026-08-12 PASS 3 minutes
- 2026-08-13 PASS 2 minutes
- 2026-08-14 PASS 2 minutes
- 2026-08-15 PASS 4 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 3 minutes
- 2026-08-18 PASS 2 minutes
- 2026-08-19 PASS 2 minutes
- 2026-08-20 PASS 2 minutes
- 2026-08-21 PASS 12 minutes
- 2026-08-22 PASS 14 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 14 minutes
- 2026-08-25 PASS 14 minutes
- 2026-08-26 PASS 14 minutes
- 2026-08-27 PASS 15 minutes
- 2026-08-28
  - FAIL 42 minutes

### Error 2026-08-28T05:41:40+00:00
```
2026-08-28T05:41:40.9332891Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-08-28T05:41:40.9346904Z    test_step_number=2 test_terraform_path=/home/runner/work/_temp/0ea75092-de95-4af2-8b98-9e15d014e12f/terraform test_name=TestAccStreamRSStreamConnection_kafkaSSL
2026-08-28T05:41:40.9348359Z     resource_stream_connection_test.go:274: Step 2/3 error: Error running apply: exit status 1
2026-08-28T05:41:40.9349318Z         
2026-08-28T05:41:40.9350128Z         Error: error waiting for stream connection to be ready
2026-08-28T05:41:40.9351134Z         
2026-08-28T05:41:40.9351862Z           with mongodbatlas_stream_connection.test,
2026-08-28T05:41:40.9352645Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-08-28T05:41:40.9353423Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-08-28T05:41:40.9353812Z         
2026-08-28T05:41:40.9354327Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-08-28T05:41:40.9354838Z         'PENDING', timeout: 40m0s)
2026-08-28T05:41:40.9355237Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (2564.53s)
```

  - PASS 15 minutes
- 2026-08-29 PASS 13 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 17 minutes
- 2026-09-01 PASS 14 minutes
- 2026-09-02 PASS 15 minutes
- 2026-09-03 PASS 13 minutes
- 2026-09-04 PASS 16 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 2 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 2 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 2 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 14 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 14 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 13 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
