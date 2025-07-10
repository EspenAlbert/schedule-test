# stream/streamconnection/TestAccStreamDSStreamConnection_sample Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 126) FAIL(x 6)
Success rate: 95.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-16 00:45](#error-2025-04-16t0045120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-6452219862207608812/connections/sample_stream_solar | dev | flaky_500 | 5.01s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-6596421397526941528/connections/sample_stream_solar | qa | flaky_500 | 5.02s
[2025-04-16 14:37](#error-2025-04-16t1437260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-586851508293273033/connections/sample_stream_solar | dev | flaky_500 | 5.06s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-6385578223814784894/connections/sample_stream_solar | dev | flaky_500 | 5.01s
[2025-05-11 00:29](#error-2025-05-11t0029580000) |  | qa |  | 0.00s
[2025-06-22 00:49](#error-2025-06-22t0049550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-6440201554514361281/connections/sample_stream_solar | qa | flaky_500 | 34.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 5 seconds
- 2025-04-13 PASS 6 seconds
- 2025-04-14 PASS 6 seconds
- 2025-04-15 PASS 5 seconds
- 2025-04-16
  - FAIL 5 seconds

### Error 2025-04-16T00:45:12+00:00
```
2025-04-16T00:45:12.2906854Z === RUN   TestAccStreamDSStreamConnection_sample
2025-04-16T00:45:12.2956017Z === CONT  TestAccStreamDSStreamConnection_sample
2025-04-16T00:45:12.3073185Z === NAME  TestAccStreamDSStreamConnection_sample
2025-04-16T00:45:12.3073997Z     data_source_stream_connection_test.go:75: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3074504Z         
2025-04-16T00:45:12.3074777Z         Error: error deleting resource
2025-04-16T00:45:12.3075043Z         
2025-04-16T00:45:12.3075911Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-6452219862207608812/connections/sample_stream_solar
2025-04-16T00:45:12.3076804Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3077397Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3077805Z         BadRequestDetail: 
2025-04-16T00:45:12.3078120Z --- FAIL: TestAccStreamDSStreamConnection_sample (5.10s)
```

  - FAIL 5 seconds

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.7936849Z === RUN   TestAccStreamDSStreamConnection_sample
2025-04-16T12:49:32.8001724Z === CONT  TestAccStreamDSStreamConnection_sample
2025-04-16T12:49:32.8013332Z    test_terraform_path=/home/runner/work/_temp/c09527d7-de0c-4201-9826-27350f0a89ff/terraform test_name=TestAccStreamDSStreamConnections_withPageConfig
2025-04-16T12:49:32.8082183Z === NAME  TestAccStreamDSStreamConnection_sample
2025-04-16T12:49:32.8083012Z     data_source_stream_connection_test.go:75: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8083540Z         
2025-04-16T12:49:32.8083810Z         Error: error deleting resource
2025-04-16T12:49:32.8084075Z         
2025-04-16T12:49:32.8084940Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-6596421397526941528/connections/sample_stream_solar
2025-04-16T12:49:32.8085836Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8086472Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8086887Z         BadRequestDetail: 
2025-04-16T12:49:32.8087204Z --- FAIL: TestAccStreamDSStreamConnection_sample (5.19s)
```

  - FAIL 5 seconds

### Error 2025-04-16T14:37:26+00:00
```
2025-04-16T14:37:26.9926364Z === RUN   TestAccStreamDSStreamConnection_sample
2025-04-16T14:37:26.9979133Z === CONT  TestAccStreamDSStreamConnection_sample
2025-04-16T14:37:26.9991049Z    test_step_number=1
2025-04-16T14:37:27.0089407Z === NAME  TestAccStreamDSStreamConnection_sample
2025-04-16T14:37:27.0090142Z     data_source_stream_connection_test.go:75: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0090701Z         
2025-04-16T14:37:27.0090977Z         Error: error deleting resource
2025-04-16T14:37:27.0091242Z         
2025-04-16T14:37:27.0092124Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-586851508293273033/connections/sample_stream_solar
2025-04-16T14:37:27.0093038Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0093844Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0094261Z         BadRequestDetail: 
2025-04-16T14:37:27.0094576Z --- FAIL: TestAccStreamDSStreamConnection_sample (5.62s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.8833828Z === RUN   TestAccStreamDSStreamConnection_sample
2025-04-17T00:44:44.8922385Z === CONT  TestAccStreamDSStreamConnection_sample
2025-04-17T00:44:44.9078178Z === NAME  TestAccStreamDSStreamConnection_sample
2025-04-17T00:44:44.9079218Z     data_source_stream_connection_test.go:75: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9079733Z         
2025-04-17T00:44:44.9080011Z         Error: error deleting resource
2025-04-17T00:44:44.9080282Z         
2025-04-17T00:44:44.9081164Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-6385578223814784894/connections/sample_stream_solar
2025-04-17T00:44:44.9082075Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9082685Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9083100Z         BadRequestDetail: 
2025-04-17T00:44:44.9083422Z --- FAIL: TestAccStreamDSStreamConnection_sample (5.08s)
```

- 2025-04-18 PASS 6 seconds
- 2025-04-19 PASS 6 seconds
- 2025-04-20 PASS 6 seconds
- 2025-04-21 PASS 6 seconds
- 2025-04-22 PASS 6 seconds
- 2025-04-23 PASS 5 seconds
- 2025-04-24 PASS 7 seconds
- 2025-04-25 PASS 5 seconds
- 2025-04-26 PASS 5 seconds
- 2025-04-27 PASS 6 seconds
- 2025-04-28 PASS 5 seconds
- 2025-04-29 PASS 5 seconds
- 2025-04-30
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-05-01
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-02 PASS 6 seconds
- 2025-05-03 PASS 6 seconds
- 2025-05-04 PASS 7 seconds
- 2025-05-05
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-06 PASS 6 seconds
- 2025-05-07
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-08 PASS 6 seconds
- 2025-05-09 PASS 6 seconds
- 2025-05-10 PASS 5 seconds
- 2025-05-11

### Error 2025-05-11T00:29:58+00:00
```
2025-05-11T00:29:58.6052176Z === RUN   TestAccStreamDSStreamConnection_sample
2025-05-11T00:29:58.6053346Z     data_source_stream_connection_test.go:71: Creating execution project: test-acc-tf-p-7053875240275984018
2025-05-11T00:29:58.6054390Z     data_source_stream_connection_test.go:71: 
2025-05-11T00:29:58.6056120Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.6059434Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.6064029Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/data_source_stream_connection_test.go:71
2025-05-11T00:29:58.6065983Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.6068015Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6069656Z         	Test:       	TestAccStreamDSStreamConnection_sample
2025-05-11T00:29:58.6072649Z         	Messages:   	Project creation failed: test-acc-tf-p-7053875240275984018, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6074451Z --- FAIL: TestAccStreamDSStreamConnection_sample (0.02s)
```

- 2025-05-12 PASS 7 seconds
- 2025-05-13
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-05-14 PASS 6 seconds
- 2025-05-15 PASS 6 seconds
- 2025-05-16 PASS 5 seconds
- 2025-05-17 PASS 5 seconds
- 2025-05-18 PASS 6 seconds
- 2025-05-19 PASS 6 seconds
- 2025-05-20
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-21 PASS 6 seconds
- 2025-05-22
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-05-23 PASS 6 seconds
- 2025-05-24 PASS 5 seconds
- 2025-05-25 PASS 5 seconds
- 2025-05-26 PASS 7 seconds
- 2025-05-27
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-28
  - PASS 7 seconds
  - PASS 5 seconds
- 2025-05-29
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-30
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-31 PASS 5 seconds
- 2025-06-01
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-06-02
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-06-03
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-06-04 PASS 7 seconds
- 2025-06-05 PASS 4 seconds
- 2025-06-06 PASS 5 seconds
- 2025-06-07 PASS 5 seconds
- 2025-06-08 PASS 5 seconds
- 2025-06-09 PASS 5 seconds
- 2025-06-10 PASS 7 seconds
- 2025-06-11
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-06-12 PASS 6 seconds
- 2025-06-13 PASS 7 seconds
- 2025-06-14 PASS 6 seconds
- 2025-06-15 PASS 6 seconds
- 2025-06-16 PASS 5 seconds
- 2025-06-17 PASS 5 seconds
- 2025-06-18
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-19 PASS 5 seconds
- 2025-06-20 PASS 5 seconds
- 2025-06-21 PASS 5 seconds
- 2025-06-22

### Error 2025-06-22T00:49:55+00:00
```
2025-06-22T00:49:55.7945781Z === RUN   TestAccStreamDSStreamConnection_sample
2025-06-22T00:49:55.7957534Z === CONT  TestAccStreamDSStreamConnection_sample
2025-06-22T00:49:55.8151590Z === NAME  TestAccStreamDSStreamConnection_sample
2025-06-22T00:49:55.8152456Z     data_source_stream_connection_test.go:75: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8152968Z         
2025-06-22T00:49:55.8153229Z         Error: error deleting resource
2025-06-22T00:49:55.8153483Z         
2025-06-22T00:49:55.8154327Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-6440201554514361281/connections/sample_stream_solar
2025-06-22T00:49:55.8155207Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8155791Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8156187Z         BadRequestDetail: 
2025-06-22T00:49:55.8156500Z --- FAIL: TestAccStreamDSStreamConnection_sample (34.19s)
```

- 2025-06-23 PASS 7 seconds
- 2025-06-24 PASS 5 seconds
- 2025-06-25
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-26
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-06-27 PASS 6 seconds
- 2025-06-28 PASS 6 seconds
- 2025-06-29 PASS 5 seconds
- 2025-06-30 PASS 6 seconds
- 2025-07-01
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 5 seconds
- 2025-07-03 PASS 6 seconds
- 2025-07-04 PASS 5 seconds
- 2025-07-05 PASS 6 seconds
- 2025-07-06 PASS 10 seconds
- 2025-07-07 PASS 5 seconds
- 2025-07-08 PASS 6 seconds
- 2025-07-09 PASS 5 seconds
- 2025-07-10 PASS 8 seconds