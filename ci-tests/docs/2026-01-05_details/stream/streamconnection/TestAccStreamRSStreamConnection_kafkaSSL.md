# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 7 TestRuns in dev, qa from 2025-12-30 to 2026-01-05 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-02 00:53](#error-2026-01-02t0053150000) | API Error STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections/{connectionName} | dev | unknown | 2.04s

### Timeline
- 2025-12-29: MISSING
- 2025-12-30 PASS 2 minutes
- 2025-12-31 PASS 4 minutes
- 2026-01-01 PASS 3 minutes
- 2026-01-02

### Error 2026-01-02T00:53:15+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-01-02T00:53:15.987000+00:00-TestAccStreamRSStreamConnection_kafkaSSL',confidence=1.0,ts_when='2 days ago')
API Error STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections/{connectionName}
```
2026-01-02T00:53:15.9873390Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-01-02T00:53:15.9883247Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-01-02T00:53:15.9930098Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-01-02T00:53:15.9930731Z     resource_stream_connection_test.go:261: Step 1/3 error: Error running apply: exit status 1
2026-01-02T00:53:15.9931157Z         
2026-01-02T00:53:15.9931430Z         Error: error fetching resource
2026-01-02T00:53:15.9931713Z         
2026-01-02T00:53:15.9932071Z           with data.mongodbatlas_stream_connection.test,
2026-01-02T00:53:15.9932710Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_stream_connection" "test":
2026-01-02T00:53:15.9933274Z           39: data "mongodbatlas_stream_connection" "test" {
2026-01-02T00:53:15.9933575Z         
2026-01-02T00:53:15.9934411Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695711f7bb847ea0da1935d4/streams/test-acc-tf-s-3730062657613000804/connections/kafka-conn-ssl
2026-01-02T00:53:15.9935304Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-01-02T00:53:15.9935882Z         Detail: Stream connection with name kafka-conn-ssl for project
2026-01-02T00:53:15.9936471Z         695711f7bb847ea0da1935d4 and name test-acc-tf-s-3730062657613000804 not
2026-01-02T00:53:15.9937084Z         found. Reason: Not Found. Params: [kafka-conn-ssl 695711f7bb847ea0da1935d4
2026-01-02T00:53:15.9937615Z         test-acc-tf-s-3730062657613000804], BadRequestDetail: 
2026-01-02T00:53:15.9938484Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (2.44s)
```

- 2026-01-03 PASS 3 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 4 minutes

## QA Environment
### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 4 minutes
- 2026-01-05: MISSING
