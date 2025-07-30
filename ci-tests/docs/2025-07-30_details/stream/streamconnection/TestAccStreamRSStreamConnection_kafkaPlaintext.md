# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 13:24](#error-2025-07-10t1324520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams/test-acc-tf-1574293369015409241/connections | qa | flaky_500 | 62.04s
[2025-07-27 00:53](#error-2025-07-27t0053080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573dbea884d723491e609/streams/test-acc-tf-s-2606522514647022798/connections | qa | flaky_500 | 30.09s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-07-02 PASS 7 seconds
- 2025-07-03 PASS 7 seconds
- 2025-07-04 PASS 7 seconds
- 2025-07-05 PASS 8 seconds
- 2025-07-06 PASS 12 seconds
- 2025-07-07 PASS 7 seconds
- 2025-07-08 PASS 7 seconds
- 2025-07-09 PASS 7 seconds
- 2025-07-10
  - PASS 10 seconds
  - FAIL a minute

### Error 2025-07-10T13:24:52+00:00
```
2025-07-10T13:24:52.3332200Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-07-10T13:24:52.3341411Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-07-10T13:24:52.3477475Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-07-10T13:24:52.3478055Z     resource_stream_connection_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-07-10T13:24:52.3478459Z         
2025-07-10T13:24:52.3478734Z         Error: error creating resource
2025-07-10T13:24:52.3478997Z         
2025-07-10T13:24:52.3479344Z           with mongodbatlas_stream_connection.test,
2025-07-10T13:24:52.3480124Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-07-10T13:24:52.3480887Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-10T13:24:52.3481194Z         
2025-07-10T13:24:52.3481947Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams/test-acc-tf-1574293369015409241/connections
2025-07-10T13:24:52.3482788Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:24:52.3483373Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3483756Z         BadRequestDetail: 
2025-07-10T13:24:52.3494750Z    test_name=TestAccStreamRSStreamConnection_AWSLambda test_terraform_path=/home/runner/work/_temp/4d5cd8a7-2970-4d68-aa4b-10ee84c3df9f/terraform
2025-07-10T13:24:52.3647781Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-07-10T13:24:52.3648812Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:24:52.3649513Z         
2025-07-10T13:24:52.3649998Z         Error: error during resource delete
2025-07-10T13:24:52.3650455Z         
2025-07-10T13:24:52.3651796Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams/test-acc-tf-1574293369015409241
2025-07-10T13:24:52.3653150Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-10T13:24:52.3654177Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3654882Z         BadRequestDetail: 
2025-07-10T13:24:52.3655482Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (62.39s)
```

- 2025-07-11 PASS 7 seconds
- 2025-07-12 PASS 7 seconds
- 2025-07-13 PASS 16 seconds
- 2025-07-14 PASS 8 seconds
- 2025-07-15 PASS 5 seconds
- 2025-07-16 PASS 9 seconds
- 2025-07-17 PASS 5 seconds
- 2025-07-18 PASS 8 seconds
- 2025-07-19 PASS 6 seconds
- 2025-07-20 PASS 5 seconds
- 2025-07-21 PASS 8 seconds
- 2025-07-22 PASS 8 seconds
- 2025-07-23
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-07-24 PASS 6 seconds
- 2025-07-25 PASS 9 seconds
- 2025-07-26 PASS 7 seconds
- 2025-07-27

### Error 2025-07-27T00:53:08+00:00
```
2025-07-27T00:53:08.7887004Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-07-27T00:53:08.7903737Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-07-27T00:53:08.7917625Z    test_name=TestAccStreamRSStreamConnection_kafkaPlaintext
2025-07-27T00:53:08.7918243Z     resource_stream_connection_test.go:69: Step 1/3 error: Error running apply: exit status 1
2025-07-27T00:53:08.7918685Z         
2025-07-27T00:53:08.7918955Z         Error: error creating resource
2025-07-27T00:53:08.7919221Z         
2025-07-27T00:53:08.7919545Z           with mongodbatlas_stream_connection.test,
2025-07-27T00:53:08.7920208Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-07-27T00:53:08.7920822Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-27T00:53:08.7921342Z         
2025-07-27T00:53:08.7922274Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573dbea884d723491e609/streams/test-acc-tf-s-2606522514647022798/connections
2025-07-27T00:53:08.7923186Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:53:08.7923813Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:53:08.7924215Z         BadRequestDetail: 
2025-07-27T00:53:08.7924567Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (30.95s)
```

- 2025-07-28 PASS 5 seconds
- 2025-07-29 PASS 5 seconds
- 2025-07-30 PASS 5 seconds