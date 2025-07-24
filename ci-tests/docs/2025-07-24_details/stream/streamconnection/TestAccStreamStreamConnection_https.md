# stream/streamconnection/TestAccStreamStreamConnection_https Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 40) FAIL
Success rate: 97.56%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 13:24](#error-2025-07-10t1324520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams | qa | flaky_500 | 31.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-06-26
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-06-27 PASS 10 seconds
- 2025-06-28 PASS 13 seconds
- 2025-06-29 PASS 10 seconds
- 2025-06-30 PASS 11 seconds
- 2025-07-01
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 13 seconds
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 10 seconds
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