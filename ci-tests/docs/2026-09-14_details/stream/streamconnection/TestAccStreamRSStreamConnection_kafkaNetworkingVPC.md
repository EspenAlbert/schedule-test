# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-08 04:29](#error-2026-09-08t0429240000) |  | dev | timeout | 2572.03s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08

### Error 2026-09-08T04:29:24+00:00
```
2026-09-08T04:29:24.6801296Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-09-08T04:29:24.6815713Z   
2026-09-08T04:29:24.6816625Z     resource_stream_connection_test.go:241: Step 1/2 error: Error running apply: exit status 1
2026-09-08T04:29:24.6817458Z         
2026-09-08T04:29:24.6818164Z         Error: error waiting for stream connection to be ready
2026-09-08T04:29:24.6818766Z         
2026-09-08T04:29:24.6819392Z           with mongodbatlas_stream_connection.test,
2026-09-08T04:29:24.6820640Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-09-08T04:29:24.6821578Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-08T04:29:24.6821969Z         
2026-09-08T04:29:24.6822479Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-09-08T04:29:24.6822991Z         'PENDING', timeout: 40m0s)
2026-09-08T04:29:24.6823441Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (2572.31s)
```

- 2026-09-09 PASS 14 minutes
- 2026-09-10 PASS 13 minutes
- 2026-09-11
  - PASS 36 minutes
  - PASS 15 minutes
- 2026-09-12 PASS 13 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 15 minutes

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
