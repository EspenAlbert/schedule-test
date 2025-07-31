# stream/streamconnection/TestAccStreamStreamConnection_https Test Details
# Found 33 TestRuns in dev, qa from 2025-07-01 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 13:24](#error-2025-07-10t1324520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams | qa | flaky_500 | 31.09s
[2025-07-27 00:53](#error-2025-07-27t0053080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573dbea884d723491e609/streams/test-acc-tf-s-2606522514647022798/connections | qa | flaky_500 | 31.01s

## Timeline
- 2025-07-01 PASS 10 seconds
- 2025-07-02 PASS 9 seconds
- 2025-07-03 PASS 10 seconds
- 2025-07-04 PASS 8 seconds
- 2025-07-05 PASS 11 seconds
- 2025-07-06 PASS 14 seconds
- 2025-07-07 PASS 9 seconds
- 2025-07-08 PASS 9 seconds
- 2025-07-09 PASS 9 seconds
- 2025-07-10
  - PASS 14 seconds
  - FAIL 31 seconds

### Error 2025-07-10T13:24:52+00:00
```
2025-07-10T13:24:52.3336068Z === RUN   TestAccStreamStreamConnection_https
2025-07-10T13:24:52.3342280Z === CONT  TestAccStreamStreamConnection_https
2025-07-10T13:24:52.3358589Z === NAME  TestAccStreamStreamConnection_https
2025-07-10T13:24:52.3359155Z     resource_stream_connection_test.go:207: Step 1/4 error: Error running apply: exit status 1
2025-07-10T13:24:52.3359578Z         
2025-07-10T13:24:52.3359857Z         Error: error creating resource
2025-07-10T13:24:52.3360117Z         
2025-07-10T13:24:52.3360439Z           with mongodbatlas_stream_instance.test,
2025-07-10T13:24:52.3361277Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance" "test":
2025-07-10T13:24:52.3361870Z           12: 		resource "mongodbatlas_stream_instance" "test" {
2025-07-10T13:24:52.3362170Z         
2025-07-10T13:24:52.3362676Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams
2025-07-10T13:24:52.3363359Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:24:52.3363933Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3364320Z         BadRequestDetail: 
2025-07-10T13:24:52.3371289Z   
2025-07-10T13:24:52.3411618Z --- FAIL: TestAccStreamStreamConnection_https (31.86s)
```

- 2025-07-11 PASS 10 seconds
- 2025-07-12 PASS 9 seconds
- 2025-07-13 PASS 16 seconds
- 2025-07-14 PASS 12 seconds
- 2025-07-15 PASS 6 seconds
- 2025-07-16 PASS 10 seconds
- 2025-07-17 PASS 7 seconds
- 2025-07-18 PASS 10 seconds
- 2025-07-19 PASS 7 seconds
- 2025-07-20 PASS 6 seconds
- 2025-07-21 PASS 10 seconds
- 2025-07-22 PASS 8 seconds
- 2025-07-23
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-07-24 PASS 7 seconds
- 2025-07-25 PASS 9 seconds
- 2025-07-26 PASS 7 seconds
- 2025-07-27

### Error 2025-07-27T00:53:08+00:00
```
2025-07-27T00:53:08.7897296Z === RUN   TestAccStreamStreamConnection_https
2025-07-27T00:53:08.7901501Z === CONT  TestAccStreamStreamConnection_https
2025-07-27T00:53:08.7975351Z === NAME  TestAccStreamStreamConnection_https
2025-07-27T00:53:08.7975913Z     resource_stream_connection_test.go:257: Step 1/4 error: Error running apply: exit status 1
2025-07-27T00:53:08.7976348Z         
2025-07-27T00:53:08.7976618Z         Error: error creating resource
2025-07-27T00:53:08.7976886Z         
2025-07-27T00:53:08.7977215Z           with mongodbatlas_stream_connection.test,
2025-07-27T00:53:08.7977870Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-07-27T00:53:08.7978483Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-27T00:53:08.7978799Z         
2025-07-27T00:53:08.7979698Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573dbea884d723491e609/streams/test-acc-tf-s-2606522514647022798/connections
2025-07-27T00:53:08.7980594Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:53:08.7981316Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:53:08.7981710Z         BadRequestDetail: 
2025-07-27T00:53:08.7982012Z --- FAIL: TestAccStreamStreamConnection_https (31.12s)
```

- 2025-07-28 PASS 6 seconds
- 2025-07-29 PASS 6 seconds
- 2025-07-30 PASS 6 seconds
- 2025-07-31 PASS 7 seconds