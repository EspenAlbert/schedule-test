# stream/streamconnection/TestMigStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 126) FAIL(x 6)
Success rate: 95.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-16 00:45](#error-2025-04-16t0045120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-1858919677371713429/connections/test-acc-tf-1858919677371713429 | dev | flaky_500 | 8.03s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-2506581413792337007/connections/test-acc-tf-2506581413792337007 | qa | flaky_500 | 10.01s
[2025-04-16 14:37](#error-2025-04-16t1437260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-8273894675554790696/connections/test-acc-tf-8273894675554790696 | dev | flaky_500 | 9.07s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-8361045520069015489/connections/test-acc-tf-8361045520069015489 | dev | flaky_500 | 7.10s
[2025-05-11 00:29](#error-2025-05-11t0029580000) |  | qa |  | 0.00s
[2025-06-22 00:49](#error-2025-06-22t0049550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-1792197320271371234/connections/test-acc-tf-1792197320271371234 | qa | flaky_500 | 65.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 8 seconds
- 2025-04-13 PASS 8 seconds
- 2025-04-14 PASS 11 seconds
- 2025-04-15 PASS 9 seconds
- 2025-04-16
  - FAIL 8 seconds

### Error 2025-04-16T00:45:12+00:00
```
2025-04-16T00:45:12.2909220Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-04-16T00:45:12.2953682Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-04-16T00:45:12.3252439Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-04-16T00:45:12.3253198Z     resource_stream_connection_migration_test.go:12: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3253747Z         
2025-04-16T00:45:12.3254138Z         Error: error deleting resource
2025-04-16T00:45:12.3254399Z         
2025-04-16T00:45:12.3255343Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-1858919677371713429/connections/test-acc-tf-1858919677371713429
2025-04-16T00:45:12.3256276Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3256882Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3257290Z         BadRequestDetail: 
2025-04-16T00:45:12.3257628Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (8.26s)
```

  - FAIL 10 seconds

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.7939285Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-04-16T12:49:32.7998199Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-04-16T12:49:32.8308519Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-04-16T12:49:32.8309381Z     resource_stream_connection_migration_test.go:12: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8309933Z         
2025-04-16T12:49:32.8310212Z         Error: error deleting resource
2025-04-16T12:49:32.8310479Z         
2025-04-16T12:49:32.8311399Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-2506581413792337007/connections/test-acc-tf-2506581413792337007
2025-04-16T12:49:32.8312335Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8312940Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8313487Z         BadRequestDetail: 
2025-04-16T12:49:32.8313854Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (10.14s)
```

  - FAIL 9 seconds

### Error 2025-04-16T14:37:26+00:00
```
2025-04-16T14:37:26.9929790Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-04-16T14:37:26.9976252Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-04-16T14:37:27.0299841Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-04-16T14:37:27.0300597Z     resource_stream_connection_migration_test.go:12: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0301167Z         
2025-04-16T14:37:27.0301448Z         Error: error deleting resource
2025-04-16T14:37:27.0301717Z         
2025-04-16T14:37:27.0302649Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-8273894675554790696/connections/test-acc-tf-8273894675554790696
2025-04-16T14:37:27.0303708Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0304313Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0304723Z         BadRequestDetail: 
2025-04-16T14:37:27.0305468Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (9.74s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.8837883Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-04-17T00:44:44.8919179Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-04-17T00:44:44.9287990Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-04-17T00:44:44.9288915Z     resource_stream_connection_migration_test.go:12: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9289456Z         
2025-04-17T00:44:44.9289739Z         Error: error deleting resource
2025-04-17T00:44:44.9290017Z         
2025-04-17T00:44:44.9290958Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-8361045520069015489/connections/test-acc-tf-8361045520069015489
2025-04-17T00:44:44.9291896Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9292511Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9292919Z         BadRequestDetail: 
2025-04-17T00:44:44.9293289Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (7.98s)
```

- 2025-04-18 PASS 11 seconds
- 2025-04-19 PASS 9 seconds
- 2025-04-20 PASS 9 seconds
- 2025-04-21 PASS 10 seconds
- 2025-04-22 PASS 10 seconds
- 2025-04-23 PASS 8 seconds
- 2025-04-24 PASS 11 seconds
- 2025-04-25 PASS 9 seconds
- 2025-04-26 PASS 9 seconds
- 2025-04-27 PASS 9 seconds
- 2025-04-28 PASS 9 seconds
- 2025-04-29 PASS 9 seconds
- 2025-04-30
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-05-01
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 11 seconds
  - PASS 8 seconds
  - PASS 12 seconds
- 2025-05-02 PASS 8 seconds
- 2025-05-03 PASS 8 seconds
- 2025-05-04 PASS 10 seconds
- 2025-05-05
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-05-06 PASS 9 seconds
- 2025-05-07
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-05-08 PASS 11 seconds
- 2025-05-09 PASS 10 seconds
- 2025-05-10 PASS 8 seconds
- 2025-05-11

### Error 2025-05-11T00:29:58+00:00
```
2025-05-11T00:29:58.6139645Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-05-11T00:29:58.6141189Z     resource_stream_connection_migration_test.go:12: Creating execution project: test-acc-tf-p-8979308036756727442
2025-05-11T00:29:58.6142618Z     resource_stream_connection_migration_test.go:12: 
2025-05-11T00:29:58.6144754Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.6148623Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.6153175Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:46
2025-05-11T00:29:58.6158010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:12
2025-05-11T00:29:58.6160295Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.6162391Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6163742Z         	Test:       	TestMigStreamRSStreamConnection_kafkaPlaintext
2025-05-11T00:29:58.6165703Z         	Messages:   	Project creation failed: test-acc-tf-p-8979308036756727442, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6167282Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (0.02s)
```

- 2025-05-12 PASS 11 seconds
- 2025-05-13
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-05-14 PASS 9 seconds
- 2025-05-15 PASS 9 seconds
- 2025-05-16 PASS 8 seconds
- 2025-05-17 PASS 8 seconds
- 2025-05-18 PASS 10 seconds
- 2025-05-19 PASS 10 seconds
- 2025-05-20
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-05-21 PASS 10 seconds
- 2025-05-22
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-05-23 PASS 10 seconds
- 2025-05-24 PASS 8 seconds
- 2025-05-25 PASS 8 seconds
- 2025-05-26 PASS 10 seconds
- 2025-05-27
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-05-28
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-05-29
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-05-30
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-05-31 PASS 8 seconds
- 2025-06-01
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-06-02
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 14 seconds
- 2025-06-03
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-06-04 PASS 10 seconds
- 2025-06-05 PASS 7 seconds
- 2025-06-06 PASS 8 seconds
- 2025-06-07 PASS 8 seconds
- 2025-06-08 PASS 8 seconds
- 2025-06-09 PASS 8 seconds
- 2025-06-10 PASS 10 seconds
- 2025-06-11
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-06-12 PASS 9 seconds
- 2025-06-13 PASS 10 seconds
- 2025-06-14 PASS 9 seconds
- 2025-06-15 PASS 10 seconds
- 2025-06-16 PASS 8 seconds
- 2025-06-17 PASS 8 seconds
- 2025-06-18
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-06-19 PASS 8 seconds
- 2025-06-20 PASS 8 seconds
- 2025-06-21 PASS 9 seconds
- 2025-06-22

### Error 2025-06-22T00:49:55+00:00
```
2025-06-22T00:49:55.7948067Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.7960280Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.8179077Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.8179763Z     resource_stream_connection_migration_test.go:12: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-22T00:49:55.8180252Z         
2025-06-22T00:49:55.8180517Z         Error: error fetching resource
2025-06-22T00:49:55.8180778Z         
2025-06-22T00:49:55.8181107Z           with mongodbatlas_stream_connection.test,
2025-06-22T00:49:55.8181756Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-06-22T00:49:55.8182565Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-06-22T00:49:55.8182870Z         
2025-06-22T00:49:55.8183780Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-1792197320271371234/connections/test-acc-tf-1792197320271371234
2025-06-22T00:49:55.8184722Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8185282Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8185662Z         BadRequestDetail: 
2025-06-22T00:49:55.8195888Z    test_step_number=1
2025-06-22T00:49:55.8262473Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.8263065Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8263487Z         
2025-06-22T00:49:55.8263750Z         Error: error deleting resource
2025-06-22T00:49:55.8264011Z         
2025-06-22T00:49:55.8264922Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-1792197320271371234/connections/test-acc-tf-1792197320271371234
2025-06-22T00:49:55.8265838Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8266416Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8266822Z         BadRequestDetail: 
2025-06-22T00:49:55.8267159Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (65.82s)
```

- 2025-06-23 PASS 10 seconds
- 2025-06-24 PASS 8 seconds
- 2025-06-25
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-06-26
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-06-27 PASS 9 seconds
- 2025-06-28 PASS 10 seconds
- 2025-06-29 PASS 9 seconds
- 2025-06-30 PASS 10 seconds
- 2025-07-01
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-07-02 PASS 8 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 8 seconds
- 2025-07-05 PASS 10 seconds
- 2025-07-06 PASS 12 seconds
- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 8 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10 PASS 11 seconds