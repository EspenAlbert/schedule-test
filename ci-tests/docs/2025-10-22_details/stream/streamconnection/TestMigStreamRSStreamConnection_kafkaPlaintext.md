# stream/streamconnection/TestMigStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 38) FAIL(x 3)
Success rate: 92.68%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-13 01:00](#error-2025-10-13t0100440000) |  | dev |  | 607.05s
[2025-10-14 00:59](#error-2025-10-14t0059120000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68ed98f7d241a8054d217430/streams/test-acc-tf-s-4740060998746993610/connections/kafka-conn-plaintext-mig | dev |  | 6.10s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f43174353f113dafd15147/streams | qa | flaky_500 | 32.10s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 12 seconds
- 2025-09-24 PASS 10 seconds
- 2025-09-25 PASS 14 seconds
- 2025-09-26 PASS 10 seconds
- 2025-09-27 PASS 12 seconds
- 2025-09-28 PASS 13 seconds
- 2025-09-29
  - PASS 12 seconds
  - PASS 14 seconds
- 2025-09-30
  - PASS 13 seconds
  - PASS 10 seconds
  - PASS 13 seconds
  - PASS 14 seconds
  - PASS 12 seconds
- 2025-10-01
  - PASS 15 seconds
  - PASS 12 seconds
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 10 seconds
  - PASS 15 seconds
- 2025-10-02 PASS 11 seconds
- 2025-10-03 PASS 12 seconds
- 2025-10-04 PASS 13 seconds
- 2025-10-05 PASS 13 seconds
- 2025-10-06 PASS 15 seconds
- 2025-10-07 PASS 11 seconds
- 2025-10-08 PASS 13 seconds
- 2025-10-09 PASS 12 seconds
- 2025-10-10 PASS 12 seconds
- 2025-10-11 PASS 11 seconds
- 2025-10-12 PASS 47 seconds
- 2025-10-13

### Error 2025-10-13T01:00:44+00:00
```
2025-10-13T01:00:44.5405313Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-10-13T01:00:44.5406609Z     resource_stream_connection_migration_test.go:12: Creating execution project: test-acc-tf-p-1877246912367131513
2025-10-13T01:00:44.5407855Z     resource_stream_connection_migration_test.go:12: Creating execution stream instance: test-acc-tf-s-3954692709848070617
2025-10-13T01:00:44.5436066Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-10-13T01:00:44.5506757Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-10-13T01:00:44.5507516Z     resource_stream_connection_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-10-13T01:00:44.5507991Z         
2025-10-13T01:00:44.5508494Z         Error: error fetching results
2025-10-13T01:00:44.5508796Z         
2025-10-13T01:00:44.5509230Z           with data.mongodbatlas_stream_connections.test,
2025-10-13T01:00:44.5509992Z           on terraform_plugin_test.tf line 20, in data "mongodbatlas_stream_connections" "test":
2025-10-13T01:00:44.5510651Z           20: data "mongodbatlas_stream_connections" "test" {
2025-10-13T01:00:44.5510977Z         
2025-10-13T01:00:44.5511530Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:00:44.5516713Z    test_terraform_path=/home/runner/work/_temp/6d87958b-7036-4585-be2d-7248c9545d7d/terraform test_working_directory=/tmp/plugintest2734240164 test_name=TestMigStreamRSStreamConnection_cluster
2025-10-13T01:00:44.5538119Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-10-13T01:00:44.5538936Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-13T01:00:44.5539384Z         
2025-10-13T01:00:44.5539702Z         Error: error deleting resource
2025-10-13T01:00:44.5539986Z         
2025-10-13T01:00:44.5540534Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:00:44.5541052Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (607.53s)
```

- 2025-10-14

### Error 2025-10-14T00:59:12+00:00
```
2025-10-14T00:59:12.4596929Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-10-14T00:59:12.4598212Z     resource_stream_connection_migration_test.go:12: Creating execution project: test-acc-tf-p-1610572224703639931
2025-10-14T00:59:12.4599249Z     resource_stream_connection_migration_test.go:12: Creating execution stream instance: test-acc-tf-s-4740060998746993610
2025-10-14T00:59:12.4616113Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-10-14T00:59:12.4629466Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-10-14T00:59:12.4630180Z     resource_stream_connection_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-10-14T00:59:12.4630636Z         
2025-10-14T00:59:12.4631180Z         Error: error fetching resource
2025-10-14T00:59:12.4631635Z         
2025-10-14T00:59:12.4632085Z           with data.mongodbatlas_stream_connection.test,
2025-10-14T00:59:12.4632852Z           on terraform_plugin_test.tf line 14, in data "mongodbatlas_stream_connection" "test":
2025-10-14T00:59:12.4633546Z           14: data "mongodbatlas_stream_connection" "test" {
2025-10-14T00:59:12.4633856Z         
2025-10-14T00:59:12.4634931Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ed98f7d241a8054d217430/streams/test-acc-tf-s-4740060998746993610/connections/kafka-conn-plaintext-mig
2025-10-14T00:59:12.4636018Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-10-14T00:59:12.4636740Z         Detail: Stream connection with name kafka-conn-plaintext-mig for project
2025-10-14T00:59:12.4637359Z         68ed98f7d241a8054d217430 and name test-acc-tf-s-4740060998746993610 not
2025-10-14T00:59:12.4638016Z         found. Reason: Not Found. Params: [kafka-conn-plaintext-mig
2025-10-14T00:59:12.4638550Z         68ed98f7d241a8054d217430 test-acc-tf-s-4740060998746993610],
2025-10-14T00:59:12.4638953Z         BadRequestDetail: 
2025-10-14T00:59:12.4639390Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (6.97s)
```

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