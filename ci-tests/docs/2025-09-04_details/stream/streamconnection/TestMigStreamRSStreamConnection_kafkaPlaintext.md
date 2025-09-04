# stream/streamconnection/TestMigStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL(x 5)
Success rate: 88.10%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-09 01:05](#error-2025-08-09t0105240000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6896963518106a5d9025959d/streams/test-acc-tf-s-8487051486197621647/connections/kafka-conn-plaintext-mig | dev |  | 6.01s
[2025-08-10 01:15](#error-2025-08-10t0115050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e8cd39cf8e2817e3c9dc/streams/test-acc-tf-s-2539241424947313573/connections | qa | flaky_500 | 39.06s
[2025-08-17 01:18](#error-2025-08-17t0118020000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122d8aafa9a76ca8bc085/streams/test-acc-tf-s-6508215644362021561/connections | qa | flaky_500 | 36.06s
[2025-08-25 01:02](#error-2025-08-25t0102540000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68abae4fcd8afb23a27a2e54/streams/test-acc-tf-s-9135092100345411028/connections/kafka-conn-plaintext-mig | dev | flaky_500 | 7.05s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 11 seconds
- 2025-08-07
  - PASS a minute
  - PASS 14 seconds
- 2025-08-08 PASS 10 seconds
- 2025-08-09

### Error 2025-08-09T01:05:24+00:00
```
2025-08-09T01:05:24.4567626Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-08-09T01:05:24.4569807Z     resource_stream_connection_migration_test.go:12: Creating execution project: test-acc-tf-p-6462306195012845998
2025-08-09T01:05:24.4571535Z     resource_stream_connection_migration_test.go:12: Creating execution stream instance: test-acc-tf-s-8487051486197621647
2025-08-09T01:05:24.4629042Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-08-09T01:05:24.4649954Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-08-09T01:05:24.4651349Z     resource_stream_connection_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-08-09T01:05:24.4652156Z         
2025-08-09T01:05:24.4652631Z         Error: error fetching resource
2025-08-09T01:05:24.4653089Z         
2025-08-09T01:05:24.4653713Z           with data.mongodbatlas_stream_connection.test,
2025-08-09T01:05:24.4655026Z           on terraform_plugin_test.tf line 14, in data "mongodbatlas_stream_connection" "test":
2025-08-09T01:05:24.4656041Z           14: data "mongodbatlas_stream_connection" "test" {
2025-08-09T01:05:24.4656559Z         
2025-08-09T01:05:24.4658283Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6896963518106a5d9025959d/streams/test-acc-tf-s-8487051486197621647/connections/kafka-conn-plaintext-mig
2025-08-09T01:05:24.4659980Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-08-09T01:05:24.4661103Z         Detail: Stream connection with name kafka-conn-plaintext-mig for project
2025-08-09T01:05:24.4662241Z         6896963518106a5d9025959d and name test-acc-tf-s-8487051486197621647 not
2025-08-09T01:05:24.4663253Z         found. Reason: Not Found. Params: [kafka-conn-plaintext-mig
2025-08-09T01:05:24.4664179Z         6896963518106a5d9025959d test-acc-tf-s-8487051486197621647],
2025-08-09T01:05:24.4664990Z         BadRequestDetail: 
2025-08-09T01:05:24.4675885Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (6.15s)
```

- 2025-08-10

### Error 2025-08-10T01:15:05+00:00
```
2025-08-10T01:15:05.6117263Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-08-10T01:15:05.6119285Z     resource_stream_connection_migration_test.go:12: Creating execution project: test-acc-tf-p-7545989679364602771
2025-08-10T01:15:05.6121027Z     resource_stream_connection_migration_test.go:12: Creating execution stream instance: test-acc-tf-s-2539241424947313573
2025-08-10T01:15:05.6182729Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-08-10T01:15:05.6241309Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-08-10T01:15:05.6242413Z     resource_stream_connection_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-08-10T01:15:05.6243193Z         
2025-08-10T01:15:05.6243666Z         Error: error creating resource
2025-08-10T01:15:05.6244114Z         
2025-08-10T01:15:05.6244789Z           with mongodbatlas_stream_connection.test,
2025-08-10T01:15:05.6245988Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-08-10T01:15:05.6247071Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-08-10T01:15:05.6247620Z         
2025-08-10T01:15:05.6249150Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8cd39cf8e2817e3c9dc/streams/test-acc-tf-s-2539241424947313573/connections
2025-08-10T01:15:05.6250716Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T01:15:05.6251752Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:15:05.6252426Z         BadRequestDetail: 
2025-08-10T01:15:05.6253021Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (39.58s)
```

- 2025-08-11 PASS 9 seconds
- 2025-08-12
  - PASS 10 seconds
  - PASS 12 seconds
- 2025-08-13 PASS 11 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15 PASS 11 seconds
- 2025-08-16 PASS 10 seconds
- 2025-08-17

### Error 2025-08-17T01:18:02+00:00
```
2025-08-17T01:18:02.6201844Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-08-17T01:18:02.6203253Z     resource_stream_connection_migration_test.go:12: Creating execution project: test-acc-tf-p-9211533299312728901
2025-08-17T01:18:02.6204891Z     resource_stream_connection_migration_test.go:12: Creating execution stream instance: test-acc-tf-s-6508215644362021561
2025-08-17T01:18:02.6273336Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-08-17T01:18:02.6491476Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-08-17T01:18:02.6492598Z     resource_stream_connection_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-08-17T01:18:02.6493388Z         
2025-08-17T01:18:02.6493858Z         Error: error creating resource
2025-08-17T01:18:02.6494312Z         
2025-08-17T01:18:02.6494903Z           with mongodbatlas_stream_connection.test,
2025-08-17T01:18:02.6496074Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-08-17T01:18:02.6497160Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-08-17T01:18:02.6497715Z         
2025-08-17T01:18:02.6499293Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122d8aafa9a76ca8bc085/streams/test-acc-tf-s-6508215644362021561/connections
2025-08-17T01:18:02.6501181Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T01:18:02.6502242Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T01:18:02.6502924Z         BadRequestDetail: 
2025-08-17T01:18:02.6504253Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (36.64s)
```

- 2025-08-18
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-08-19 PASS 12 seconds
- 2025-08-20
  - PASS 13 seconds
  - PASS 23 seconds
- 2025-08-21 PASS 11 seconds
- 2025-08-22 PASS 12 seconds
- 2025-08-23 PASS 10 seconds
- 2025-08-24 PASS 41 seconds
- 2025-08-25

### Error 2025-08-25T01:02:54+00:00
```
2025-08-25T01:02:54.2357979Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-08-25T01:02:54.2362729Z     resource_stream_connection_migration_test.go:12: Creating execution project: test-acc-tf-p-7905028785748551056
2025-08-25T01:02:54.2364508Z     resource_stream_connection_migration_test.go:12: Creating execution stream instance: test-acc-tf-s-9135092100345411028
2025-08-25T01:02:54.2421502Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-08-25T01:02:54.2442739Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-08-25T01:02:54.2443883Z     resource_stream_connection_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-08-25T01:02:54.2444904Z         
2025-08-25T01:02:54.2445407Z         Error: error fetching resource
2025-08-25T01:02:54.2445883Z         
2025-08-25T01:02:54.2446523Z           with data.mongodbatlas_stream_connection.test,
2025-08-25T01:02:54.2447933Z           on terraform_plugin_test.tf line 14, in data "mongodbatlas_stream_connection" "test":
2025-08-25T01:02:54.2448970Z           14: data "mongodbatlas_stream_connection" "test" {
2025-08-25T01:02:54.2449500Z         
2025-08-25T01:02:54.2451200Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4fcd8afb23a27a2e54/streams/test-acc-tf-s-9135092100345411028/connections/kafka-conn-plaintext-mig
2025-08-25T01:02:54.2452935Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-08-25T01:02:54.2454079Z         Detail: Stream connection with name kafka-conn-plaintext-mig for project
2025-08-25T01:02:54.2455250Z         68abae4fcd8afb23a27a2e54 and name test-acc-tf-s-9135092100345411028 not
2025-08-25T01:02:54.2456310Z         found. Reason: Not Found. Params: [kafka-conn-plaintext-mig
2025-08-25T01:02:54.2457369Z         68abae4fcd8afb23a27a2e54 test-acc-tf-s-9135092100345411028],
2025-08-25T01:02:54.2458233Z         BadRequestDetail: 
2025-08-25T01:02:54.2469048Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (7.55s)
```

- 2025-08-26 PASS 9 seconds
- 2025-08-27 PASS 19 seconds
- 2025-08-28 PASS 12 seconds
- 2025-08-29
  - PASS 12 seconds
  - PASS 10 seconds
- 2025-08-30 PASS 12 seconds
- 2025-08-31 PASS 12 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.8420286Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-09-01T00:30:38.8421867Z     resource_stream_connection_migration_test.go:12: Creating execution project: test-acc-tf-p-8507604841603042284
2025-09-01T00:30:38.8423020Z     resource_stream_connection_migration_test.go:12: 
2025-09-01T00:30:38.8424819Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.8428336Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.8431751Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.8435653Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:75
2025-09-01T00:30:38.8440122Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:12
2025-09-01T00:30:38.8442519Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:38.8443408Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.8448658Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8451148Z         	Test:       	TestMigStreamRSStreamConnection_kafkaPlaintext
2025-09-01T00:30:38.8455535Z         	Messages:   	Project creation failed: test-acc-tf-p-8507604841603042284, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8458409Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (0.29s)
```

  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 12 seconds
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 13 seconds
- 2025-09-02 PASS 11 seconds
- 2025-09-03 PASS 10 seconds
- 2025-09-04 PASS 10 seconds