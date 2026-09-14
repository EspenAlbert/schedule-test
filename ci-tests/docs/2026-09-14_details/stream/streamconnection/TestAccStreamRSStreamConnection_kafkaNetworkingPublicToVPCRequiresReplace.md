# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-08 04:29](#error-2026-09-08t0429240000) |  | dev | timeout | 2584.07s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08

### Error 2026-09-08T04:29:24+00:00
```
2026-09-08T04:29:24.6846277Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace
2026-09-08T04:29:24.6856374Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace test_terraform_path=/home/runner/work/_temp/ed2dce9e-4d43-4c57-a532-2bde85aca16f/terraform
2026-09-08T04:29:24.6857501Z     resource_stream_connection_test.go:343: Step 2/2 error: Error running apply: exit status 1
2026-09-08T04:29:24.6858003Z         
2026-09-08T04:29:24.6858435Z         Error: error waiting for stream connection to be ready
2026-09-08T04:29:24.6858807Z         
2026-09-08T04:29:24.6859213Z           with mongodbatlas_stream_connection.test,
2026-09-08T04:29:24.6859961Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-09-08T04:29:24.6860657Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-08T04:29:24.6861028Z         
2026-09-08T04:29:24.6861522Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-09-08T04:29:24.6862708Z         'PENDING', timeout: 40m0s)
2026-09-08T04:29:24.6863323Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace (2584.74s)
```

- 2026-09-09 PASS 14 minutes
- 2026-09-10 PASS 13 minutes
- 2026-09-11
  - PASS 14 minutes
  - PASS 13 minutes
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
- 2026-09-13 PASS 12 minutes
- 2026-09-14: MISSING
