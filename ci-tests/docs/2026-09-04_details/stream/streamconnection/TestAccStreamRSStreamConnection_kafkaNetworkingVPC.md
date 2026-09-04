# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-17 02:42](#error-2026-08-17t0242030000) |  | dev | timeout | 2563.03s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 14 minutes
- 2026-08-07 PASS 13 minutes
- 2026-08-08 PASS 12 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 15 minutes
- 2026-08-11 PASS 13 minutes
- 2026-08-12 PASS 14 minutes
- 2026-08-13 PASS 15 minutes
- 2026-08-14 PASS 15 minutes
- 2026-08-15 PASS 15 minutes
- 2026-08-16: MISSING
- 2026-08-17

### Error 2026-08-17T02:42:03+00:00
```
2026-08-17T02:42:03.9583188Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-08-17T02:42:03.9593968Z   
2026-08-17T02:42:03.9594929Z     resource_stream_connection_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-08-17T02:42:03.9595864Z         
2026-08-17T02:42:03.9596959Z         Error: error waiting for stream connection to be ready
2026-08-17T02:42:03.9597678Z         
2026-08-17T02:42:03.9598404Z           with mongodbatlas_stream_connection.test,
2026-08-17T02:42:03.9599527Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-08-17T02:42:03.9600243Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-08-17T02:42:03.9600671Z         
2026-08-17T02:42:03.9601161Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-08-17T02:42:03.9601666Z         'PENDING', timeout: 40m0s)
2026-08-17T02:42:03.9602101Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (2563.34s)
```

- 2026-08-18 PASS 13 minutes
- 2026-08-19 PASS 15 minutes
- 2026-08-20 PASS 12 minutes
- 2026-08-21 PASS 14 minutes
- 2026-08-22 PASS 13 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 24 minutes
- 2026-08-25 PASS 13 minutes
- 2026-08-26 PASS 14 minutes
- 2026-08-27 PASS 13 minutes
- 2026-08-28
  - PASS 14 minutes
  - PASS 15 minutes
- 2026-08-29 PASS 14 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 14 minutes
- 2026-09-01 PASS 14 minutes
- 2026-09-02 PASS 15 minutes
- 2026-09-03 PASS 17 minutes
- 2026-09-04 PASS 17 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 13 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 14 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 14 minutes
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
