# stream/streamconnection/TestAccStreamRSStreamConnection_sample Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 40) FAIL
Success rate: 97.56%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 13:24](#error-2025-07-10t1324520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams | qa | flaky_500 | 31.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-26
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-06-27 PASS 6 seconds
- 2025-06-28 PASS 6 seconds
- 2025-06-29 PASS 6 seconds
- 2025-06-30 PASS 6 seconds
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