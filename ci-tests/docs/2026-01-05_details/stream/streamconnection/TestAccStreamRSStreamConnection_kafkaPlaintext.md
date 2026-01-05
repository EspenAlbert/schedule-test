# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 7 TestRuns in dev, qa from 2025-12-30 to 2026-01-05 from master branch: 1 unique tests, PASS(x 5) FAIL(x 2)
Success rate: 71.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-30 00:55](#error-2025-12-30t0055060000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/69531d47bb0cf4d0314ed4e5/streams/test-acc-tf-s-7846225675842672463/connections/kafka-conn-plaintext | dev |  | 5.06s
[2026-01-02 00:53](#error-2026-01-02t0053150000) | API Error STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections/{connectionName} | dev | unknown | 2.01s

### Timeline
- 2025-12-29: MISSING
- 2025-12-30

### Error 2025-12-30T00:55:06+00:00
```
2025-12-30T00:55:06.9743155Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-12-30T00:55:06.9744212Z     resource_stream_connection_test.go:98: Creating execution project: test-acc-tf-p-2740397150305218794
2025-12-30T00:55:06.9745172Z     resource_stream_connection_test.go:98: Creating execution stream instance: test-acc-tf-s-7846225675842672463
2025-12-30T00:55:06.9755301Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-12-30T00:55:06.9780135Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-12-30T00:55:06.9780697Z     resource_stream_connection_test.go:99: Step 1/3 error: Error running apply: exit status 1
2025-12-30T00:55:06.9781103Z         
2025-12-30T00:55:06.9781378Z         Error: error fetching resource
2025-12-30T00:55:06.9781649Z         
2025-12-30T00:55:06.9781994Z           with data.mongodbatlas_stream_connection.test,
2025-12-30T00:55:06.9782599Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2025-12-30T00:55:06.9783138Z           12: data "mongodbatlas_stream_connection" "test" {
2025-12-30T00:55:06.9783439Z         
2025-12-30T00:55:06.9784248Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69531d47bb0cf4d0314ed4e5/streams/test-acc-tf-s-7846225675842672463/connections/kafka-conn-plaintext
2025-12-30T00:55:06.9785113Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-12-30T00:55:06.9785681Z         Detail: Stream connection with name kafka-conn-plaintext for project
2025-12-30T00:55:06.9786390Z         69531d47bb0cf4d0314ed4e5 and name test-acc-tf-s-7846225675842672463 not
2025-12-30T00:55:06.9786927Z         found. Reason: Not Found. Params: [kafka-conn-plaintext
2025-12-30T00:55:06.9787418Z         69531d47bb0cf4d0314ed4e5 test-acc-tf-s-7846225675842672463],
2025-12-30T00:55:06.9787801Z         BadRequestDetail: 
2025-12-30T00:55:06.9788148Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (5.57s)
```

- 2025-12-31 PASS 7 seconds
- 2026-01-01 PASS 11 seconds
- 2026-01-02

### Error 2026-01-02T00:53:15+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-01-02T00:53:15.987000+00:00-TestAccStreamRSStreamConnection_kafkaPlaintext',confidence=1.0,ts_when='2 days ago')
API Error STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections/{connectionName}
```
2026-01-02T00:53:15.9870799Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-01-02T00:53:15.9882168Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-01-02T00:53:15.9906985Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-01-02T00:53:15.9907587Z     resource_stream_connection_test.go:99: Step 1/3 error: Error running apply: exit status 1
2026-01-02T00:53:15.9908021Z         
2026-01-02T00:53:15.9908312Z         Error: error fetching resource
2026-01-02T00:53:15.9908585Z         
2026-01-02T00:53:15.9908957Z           with data.mongodbatlas_stream_connection.test,
2026-01-02T00:53:15.9909616Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2026-01-02T00:53:15.9910399Z           12: data "mongodbatlas_stream_connection" "test" {
2026-01-02T00:53:15.9910713Z         
2026-01-02T00:53:15.9911590Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695711f7bb847ea0da1935d4/streams/test-acc-tf-s-3730062657613000804/connections/kafka-conn-plaintext
2026-01-02T00:53:15.9912513Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-01-02T00:53:15.9913124Z         Detail: Stream connection with name kafka-conn-plaintext for project
2026-01-02T00:53:15.9913737Z         695711f7bb847ea0da1935d4 and name test-acc-tf-s-3730062657613000804 not
2026-01-02T00:53:15.9914293Z         found. Reason: Not Found. Params: [kafka-conn-plaintext
2026-01-02T00:53:15.9914807Z         695711f7bb847ea0da1935d4 test-acc-tf-s-3730062657613000804],
2026-01-02T00:53:15.9915227Z         BadRequestDetail: 
2026-01-02T00:53:15.9929734Z   
2026-01-02T00:53:15.9938050Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (2.07s)
```

- 2026-01-03 PASS 12 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 8 seconds

## QA Environment
### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 7 seconds
- 2026-01-05: MISSING
