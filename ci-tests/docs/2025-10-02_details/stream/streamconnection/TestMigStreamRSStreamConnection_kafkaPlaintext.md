# stream/streamconnection/TestMigStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 43) FAIL(x 4)
Success rate: 91.49%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:50](#error-2025-09-07t0050490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1d5df5af52d2d4d5831/streams | qa | flaky_500 | 32.03s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c43d444485797b214ed/streams | qa | flaky_500 | 31.05s
[2025-09-15 00:55](#error-2025-09-15t0055510000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c75dd23176ce321a9645d6/streams/test-acc-tf-s-2662992153812109448/connections/kafka-conn-plaintext-mig | dev |  | 8.09s
[2025-09-15 06:36](#error-2025-09-15t0636270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams | qa | flaky_500 | 31.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 10 seconds
- 2025-09-04 PASS 10 seconds
- 2025-09-05 PASS 13 seconds
- 2025-09-06 PASS 12 seconds
- 2025-09-07

### Error 2025-09-07T00:50:49+00:00
```
2025-09-07T00:50:49.0082486Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-09-07T00:50:49.0083651Z     resource_stream_connection_migration_test.go:12: Creating execution project: test-acc-tf-p-591343445973470599
2025-09-07T00:50:49.0084549Z     resource_stream_connection_migration_test.go:12: Creating execution stream instance: test-acc-tf-s-4047930990064627307
2025-09-07T00:50:49.0085223Z     resource_stream_connection_migration_test.go:12: 
2025-09-07T00:50:49.0086487Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:104
2025-09-07T00:50:49.0088252Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:161
2025-09-07T00:50:49.0090272Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:75
2025-09-07T00:50:49.0092485Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:12
2025-09-07T00:50:49.0093357Z         	Error:      	Received unexpected error:
2025-09-07T00:50:49.0095493Z         	            	https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d5df5af52d2d4d5831/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-07T00:50:49.0096905Z         	Test:       	TestMigStreamRSStreamConnection_kafkaPlaintext
2025-09-07T00:50:49.0098828Z         	Messages:   	Stream instance creation failed: test-acc-tf-s-4047930990064627307, err: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d5df5af52d2d4d5831/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-07T00:50:49.0100118Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (32.30s)
```

- 2025-09-08
  - PASS 11 seconds
  - PASS a minute
  - PASS 9 seconds
- 2025-09-09 PASS 10 seconds
- 2025-09-10 PASS 12 seconds
- 2025-09-11 PASS 12 seconds
- 2025-09-12
  - PASS 12 seconds
  - PASS 9 seconds
- 2025-09-13 PASS 12 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.7840435Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-09-14T00:45:38.7841995Z     resource_stream_connection_migration_test.go:12: Creating execution project: test-acc-tf-p-4767285274945649429
2025-09-14T00:45:38.7843630Z     resource_stream_connection_migration_test.go:12: Creating execution stream instance: test-acc-tf-s-1571941844326212806
2025-09-14T00:45:38.7844571Z     resource_stream_connection_migration_test.go:12: 
2025-09-14T00:45:38.7845828Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:104
2025-09-14T00:45:38.7848478Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:174
2025-09-14T00:45:38.7851913Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:75
2025-09-14T00:45:38.7854648Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:12
2025-09-14T00:45:38.7855662Z         	Error:      	Received unexpected error:
2025-09-14T00:45:38.7858274Z         	            	https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c43d444485797b214ed/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-14T00:45:38.7859570Z         	Test:       	TestMigStreamRSStreamConnection_kafkaPlaintext
2025-09-14T00:45:38.7861760Z         	Messages:   	Stream instance creation failed: test-acc-tf-s-1571941844326212806, err: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c43d444485797b214ed/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-14T00:45:38.7863241Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (31.54s)
```

- 2025-09-15
  - FAIL 8 seconds

### Error 2025-09-15T00:55:51+00:00
```
2025-09-15T00:55:51.6144038Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-09-15T00:55:51.6145994Z     resource_stream_connection_migration_test.go:12: Creating execution project: test-acc-tf-p-7826125497557654663
2025-09-15T00:55:51.6147480Z     resource_stream_connection_migration_test.go:12: Creating execution stream instance: test-acc-tf-s-2662992153812109448
2025-09-15T00:55:51.6190074Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-09-15T00:55:51.6233406Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-09-15T00:55:51.6234027Z     resource_stream_connection_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-09-15T00:55:51.6234485Z         
2025-09-15T00:55:51.6234756Z         Error: error fetching resource
2025-09-15T00:55:51.6235032Z         
2025-09-15T00:55:51.6235481Z           with data.mongodbatlas_stream_connection.test,
2025-09-15T00:55:51.6236328Z           on terraform_plugin_test.tf line 14, in data "mongodbatlas_stream_connection" "test":
2025-09-15T00:55:51.6236914Z           14: data "mongodbatlas_stream_connection" "test" {
2025-09-15T00:55:51.6237211Z         
2025-09-15T00:55:51.6238120Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c75dd23176ce321a9645d6/streams/test-acc-tf-s-2662992153812109448/connections/kafka-conn-plaintext-mig
2025-09-15T00:55:51.6239078Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-09-15T00:55:51.6239709Z         Detail: Stream connection with name kafka-conn-plaintext-mig for project
2025-09-15T00:55:51.6240365Z         68c75dd23176ce321a9645d6 and name test-acc-tf-s-2662992153812109448 not
2025-09-15T00:55:51.6240927Z         found. Reason: Not Found. Params: [kafka-conn-plaintext-mig
2025-09-15T00:55:51.6241452Z         68c75dd23176ce321a9645d6 test-acc-tf-s-2662992153812109448],
2025-09-15T00:55:51.6242270Z         BadRequestDetail: 
2025-09-15T00:55:51.6242927Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (8.94s)
```

  - PASS 12 seconds
  - FAIL 31 seconds

### Error 2025-09-15T06:36:27+00:00
```
2025-09-15T06:36:27.9956965Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-09-15T06:36:27.9958983Z     resource_stream_connection_migration_test.go:12: Creating execution project: test-acc-tf-p-8182494512038594839
2025-09-15T06:36:27.9961159Z     resource_stream_connection_migration_test.go:12: Creating execution stream instance: test-acc-tf-s-5005804337291291222
2025-09-15T06:36:27.9962795Z     resource_stream_connection_migration_test.go:12: 
2025-09-15T06:36:27.9965275Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:104
2025-09-15T06:36:27.9969692Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:174
2025-09-15T06:36:27.9973592Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:75
2025-09-15T06:36:27.9978074Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:12
2025-09-15T06:36:27.9979729Z         	Error:      	Received unexpected error:
2025-09-15T06:36:27.9983858Z         	            	https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-15T06:36:27.9986190Z         	Test:       	TestMigStreamRSStreamConnection_kafkaPlaintext
2025-09-15T06:36:27.9989871Z         	Messages:   	Stream instance creation failed: test-acc-tf-s-5005804337291291222, err: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-15T06:36:27.9992291Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (31.66s)
```

- 2025-09-16 PASS 11 seconds
- 2025-09-17 PASS 12 seconds
- 2025-09-18 PASS 13 seconds
- 2025-09-19 PASS 11 seconds
- 2025-09-20 PASS 11 seconds
- 2025-09-21 PASS 11 seconds
- 2025-09-22 PASS 12 seconds
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