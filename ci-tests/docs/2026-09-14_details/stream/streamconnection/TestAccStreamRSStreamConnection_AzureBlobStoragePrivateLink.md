# stream/streamconnection/TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-08 04:29](#error-2026-09-08t0429240000) |  | dev | timeout | 4424.03s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08

### Error 2026-09-08T04:29:24+00:00
```
2026-09-08T04:29:24.6898031Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-08T04:29:24.6899102Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-08T04:29:24.6910225Z    test_terraform_path=/home/runner/work/_temp/ed2dce9e-4d43-4c57-a532-2bde85aca16f/terraform test_working_directory=/tmp/plugintest441196021 test_step_number=1 test_name=TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-08T04:29:24.6911525Z     resource_stream_connection_test.go:1636: Step 1/2 error: Error running apply: exit status 1
2026-09-08T04:29:24.6912032Z         
2026-09-08T04:29:24.6912505Z         Error: error when waiting for status transition in creation
2026-09-08T04:29:24.6912905Z         
2026-09-08T04:29:24.6913355Z           with mongodbatlas_stream_privatelink_endpoint.test,
2026-09-08T04:29:24.6914410Z           on terraform_plugin_test.tf line 103, in resource "mongodbatlas_stream_privatelink_endpoint" "test":
2026-09-08T04:29:24.6915844Z          103: 		resource "mongodbatlas_stream_privatelink_endpoint" "test" {
2026-09-08T04:29:24.6916315Z         
2026-09-08T04:29:24.6916864Z         timeout while waiting for state to become 'DONE, FAILED' (last state: 'IDLE',
2026-09-08T04:29:24.6917361Z         timeout: 1h0m0s)
2026-09-08T04:29:24.6917830Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (4424.26s)
```

- 2026-09-09 PASS 28 minutes
- 2026-09-10 PASS 28 minutes
- 2026-09-11
  - PASS 38 minutes
  - PASS 27 minutes
- 2026-09-12 PASS 29 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 27 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 26 minutes
- 2026-09-14: MISSING
