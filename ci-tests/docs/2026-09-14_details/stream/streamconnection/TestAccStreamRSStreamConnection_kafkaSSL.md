# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-08 04:29](#error-2026-09-08t0429240000) |  | dev | timeout | 2565.01s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08

### Error 2026-09-08T04:29:24+00:00
```
2026-09-08T04:29:24.6823949Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-09-08T04:29:24.6837501Z    test_working_directory=/tmp/plugintest3617601674 test_step_number=2
2026-09-08T04:29:24.6838790Z     resource_stream_connection_test.go:272: Step 2/3 error: Error running apply: exit status 1
2026-09-08T04:29:24.6839612Z         
2026-09-08T04:29:24.6840315Z         Error: error waiting for stream connection to be ready
2026-09-08T04:29:24.6840945Z         
2026-09-08T04:29:24.6841621Z           with mongodbatlas_stream_connection.test,
2026-09-08T04:29:24.6842604Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-09-08T04:29:24.6843327Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-08T04:29:24.6843716Z         
2026-09-08T04:29:24.6844233Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-09-08T04:29:24.6844748Z         'PENDING', timeout: 40m0s)
2026-09-08T04:29:24.6845438Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (2565.11s)
```

- 2026-09-09 PASS 14 minutes
- 2026-09-10 PASS 15 minutes
- 2026-09-11
  - PASS 14 minutes
  - PASS 13 minutes
- 2026-09-12 PASS 12 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 13 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 14 minutes
- 2026-09-14: MISSING
