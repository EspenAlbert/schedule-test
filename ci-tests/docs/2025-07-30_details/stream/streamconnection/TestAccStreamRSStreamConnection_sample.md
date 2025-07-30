# stream/streamconnection/TestAccStreamRSStreamConnection_sample Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 13:24](#error-2025-07-10t1324520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams | qa | flaky_500 | 31.09s
[2025-07-27 00:53](#error-2025-07-27t0053080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573dbea884d723491e609/streams/test-acc-tf-s-3175169043289886702/connections | qa | flaky_500 | 61.05s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 6 seconds
- 2025-07-03 PASS 6 seconds
- 2025-07-04 PASS 6 seconds
- 2025-07-05 PASS 6 seconds
- 2025-07-06 PASS 10 seconds
- 2025-07-07 PASS 6 seconds
- 2025-07-08 PASS 6 seconds
- 2025-07-09 PASS 6 seconds
- 2025-07-10
  - PASS 8 seconds
  - FAIL 31 seconds

### Error 2025-07-10T13:24:52+00:00
```
2025-07-10T13:24:52.3335395Z === RUN   TestAccStreamRSStreamConnection_sample
2025-07-10T13:24:52.3342608Z === CONT  TestAccStreamRSStreamConnection_sample
2025-07-10T13:24:52.3388250Z === NAME  TestAccStreamRSStreamConnection_sample
2025-07-10T13:24:52.3388828Z     resource_stream_connection_test.go:173: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:24:52.3389252Z         
2025-07-10T13:24:52.3389672Z         Error: error creating resource
2025-07-10T13:24:52.3389934Z         
2025-07-10T13:24:52.3390260Z           with mongodbatlas_stream_instance.test,
2025-07-10T13:24:52.3391078Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-07-10T13:24:52.3391665Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-07-10T13:24:52.3391964Z         
2025-07-10T13:24:52.3392474Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams
2025-07-10T13:24:52.3393149Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:24:52.3393732Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3394120Z         BadRequestDetail: 
2025-07-10T13:24:52.3405145Z   
2025-07-10T13:24:52.3412451Z --- FAIL: TestAccStreamRSStreamConnection_sample (31.87s)
```

- 2025-07-11 PASS 6 seconds
- 2025-07-12 PASS 6 seconds
- 2025-07-13 PASS 15 seconds
- 2025-07-14 PASS 6 seconds
- 2025-07-15 PASS 4 seconds
- 2025-07-16 PASS 6 seconds
- 2025-07-17 PASS 4 seconds
- 2025-07-18 PASS 6 seconds
- 2025-07-19 PASS 4 seconds
- 2025-07-20 PASS 4 seconds
- 2025-07-21 PASS 6 seconds
- 2025-07-22 PASS 5 seconds
- 2025-07-23
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-07-24 PASS 4 seconds
- 2025-07-25 PASS 6 seconds
- 2025-07-26 PASS 5 seconds
- 2025-07-27

### Error 2025-07-27T00:53:08+00:00
```
2025-07-27T00:53:08.7896488Z === RUN   TestAccStreamRSStreamConnection_sample
2025-07-27T00:53:08.7901956Z === CONT  TestAccStreamRSStreamConnection_sample
2025-07-27T00:53:08.8013398Z === NAME  TestAccStreamRSStreamConnection_sample
2025-07-27T00:53:08.8014027Z     resource_stream_connection_test.go:221: Step 1/2 error: Error running apply: exit status 1
2025-07-27T00:53:08.8014467Z         
2025-07-27T00:53:08.8014728Z         Error: error creating resource
2025-07-27T00:53:08.8014988Z         
2025-07-27T00:53:08.8015314Z           with mongodbatlas_stream_connection.test,
2025-07-27T00:53:08.8015974Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_connection" "test":
2025-07-27T00:53:08.8016593Z           34: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-27T00:53:08.8016901Z         
2025-07-27T00:53:08.8017682Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573dbea884d723491e609/streams/test-acc-tf-s-3175169043289886702/connections
2025-07-27T00:53:08.8018572Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:53:08.8019219Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:53:08.8019721Z         BadRequestDetail: 
2025-07-27T00:53:08.8027715Z   
2025-07-27T00:53:08.8076000Z === NAME  TestAccStreamRSStreamConnection_sample
2025-07-27T00:53:08.8076582Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-27T00:53:08.8077154Z         
2025-07-27T00:53:08.8077430Z         Error: error during resource delete
2025-07-27T00:53:08.8077704Z         
2025-07-27T00:53:08.8078397Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573dbea884d723491e609/streams/test-acc-tf-s-3175169043289886702
2025-07-27T00:53:08.8079203Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-27T00:53:08.8079800Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:53:08.8080213Z         BadRequestDetail: 
2025-07-27T00:53:08.8080530Z --- FAIL: TestAccStreamRSStreamConnection_sample (61.52s)
```

- 2025-07-28 PASS 4 seconds
- 2025-07-29 PASS 4 seconds
- 2025-07-30 PASS 4 seconds