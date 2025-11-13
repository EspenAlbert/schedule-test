# stream/streamconnection/TestMigStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 21 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 19) FAIL(x 2)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f43174353f113dafd15147/streams | qa | flaky_500 | 32.10s
[2025-10-27 02:08](#error-2025-10-27t0208500000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68febd2529e7601e4645a61b/streams/test-acc-tf-s-9177917880319688769/connections/kafka-conn-plaintext-mig | dev |  | 8.04s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 12 seconds
- 2025-10-16 PASS 14 seconds
- 2025-10-17 PASS 12 seconds
- 2025-10-18: MISSING
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1415898Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-10-19T00:50:12.1417357Z     resource_stream_connection_migration_test.go:12: Creating execution project: test-acc-tf-p-7875320674297935194
2025-10-19T00:50:12.1418969Z     resource_stream_connection_migration_test.go:12: Creating execution stream instance: test-acc-tf-s-3100645711005476142
2025-10-19T00:50:12.1420029Z     resource_stream_connection_migration_test.go:12: 
2025-10-19T00:50:12.1421691Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:103
2025-10-19T00:50:12.1424262Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:166
2025-10-19T00:50:12.1426380Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:138
2025-10-19T00:50:12.1428945Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:12
2025-10-19T00:50:12.1430078Z         	Error:      	Received unexpected error:
2025-10-19T00:50:12.1432195Z         	            	https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-10-19T00:50:12.1433545Z         	Test:       	TestMigStreamRSStreamConnection_kafkaPlaintext
2025-10-19T00:50:12.1435759Z         	Messages:   	Stream instance creation failed: test-acc-tf-s-3100645711005476142, err: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-10-19T00:50:12.1437624Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (32.97s)
```

- 2025-10-20 PASS 14 seconds
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 13 seconds
  - PASS 14 seconds
- 2025-10-23: MISSING
- 2025-10-24 PASS 14 seconds
- 2025-10-25: MISSING
- 2025-10-26 PASS 12 seconds
- 2025-10-27

### Error 2025-10-27T02:08:50+00:00
```
2025-10-27T02:08:50.8513365Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-10-27T02:08:50.8514764Z     resource_stream_connection_migration_test.go:12: Creating execution project: test-acc-tf-p-4028709934538341612
2025-10-27T02:08:50.8516343Z     resource_stream_connection_migration_test.go:12: Creating execution stream instance: test-acc-tf-s-9177917880319688769
2025-10-27T02:08:50.8561012Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-10-27T02:08:50.8598189Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-10-27T02:08:50.8599317Z     resource_stream_connection_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-10-27T02:08:50.8600287Z         
2025-10-27T02:08:50.8600769Z         Error: error fetching resource
2025-10-27T02:08:50.8601237Z         
2025-10-27T02:08:50.8601872Z           with data.mongodbatlas_stream_connection.test,
2025-10-27T02:08:50.8603045Z           on terraform_plugin_test.tf line 14, in data "mongodbatlas_stream_connection" "test":
2025-10-27T02:08:50.8604062Z           14: data "mongodbatlas_stream_connection" "test" {
2025-10-27T02:08:50.8604590Z         
2025-10-27T02:08:50.8606246Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd2529e7601e4645a61b/streams/test-acc-tf-s-9177917880319688769/connections/kafka-conn-plaintext-mig
2025-10-27T02:08:50.8607941Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-10-27T02:08:50.8609069Z         Detail: Stream connection with name kafka-conn-plaintext-mig for project
2025-10-27T02:08:50.8610356Z         68febd2529e7601e4645a61b and name test-acc-tf-s-9177917880319688769 not
2025-10-27T02:08:50.8611385Z         found. Reason: Not Found. Params: [kafka-conn-plaintext-mig
2025-10-27T02:08:50.8612331Z         68febd2529e7601e4645a61b test-acc-tf-s-9177917880319688769],
2025-10-27T02:08:50.8613023Z         BadRequestDetail: 
2025-10-27T02:08:50.8614519Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (8.36s)
```

- 2025-10-28: MISSING
- 2025-10-29 PASS 15 seconds
- 2025-10-30: MISSING
- 2025-10-31 PASS 15 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 12 seconds
- 2025-11-03 PASS 13 seconds
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 14 seconds
  - PASS 15 seconds
- 2025-11-06: MISSING
- 2025-11-07 PASS 11 seconds
- 2025-11-08: MISSING
- 2025-11-09 PASS 11 seconds
- 2025-11-10 PASS 14 seconds
- 2025-11-11: MISSING
- 2025-11-12 PASS 15 seconds
- 2025-11-13 PASS 12 seconds