# stream/streaminstance/TestAccStreamDSStreamInstances_basic Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 39) FAIL(x 2)
Success rate: 95.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 13:24](#error-2025-07-10t1324520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb05006d8d55bb9e68ef/streams/test-acc-tf-1573712372077924828 | qa | flaky_500 | 32.04s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c393d426db7026b5b1cb4/streams | qa | flaky_500 | 30.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-06-26
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-06-27 PASS 2 seconds
- 2025-06-28 PASS 3 seconds
- 2025-06-29 PASS 2 seconds
- 2025-06-30 PASS 3 seconds
- 2025-07-01
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-07-02 PASS 2 seconds
- 2025-07-03 PASS 2 seconds
- 2025-07-04 PASS 2 seconds
- 2025-07-05 PASS 2 seconds
- 2025-07-06 PASS 2 seconds
- 2025-07-07 PASS 2 seconds
- 2025-07-08 PASS 2 seconds
- 2025-07-09 PASS 2 seconds
- 2025-07-10
  - PASS 3 seconds
  - FAIL 32 seconds

### Error 2025-07-10T13:24:52+00:00
```
2025-07-10T13:24:52.3752883Z === RUN   TestAccStreamDSStreamInstances_basic
2025-07-10T13:24:52.3757396Z === CONT  TestAccStreamDSStreamInstances_basic
2025-07-10T13:24:52.3768977Z === NAME  TestAccStreamDSStreamInstances_basic
2025-07-10T13:24:52.3769775Z     data_source_stream_instances_test.go:26: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:24:52.3770290Z         
2025-07-10T13:24:52.3770578Z         Error: error during resource delete
2025-07-10T13:24:52.3770961Z         
2025-07-10T13:24:52.3771617Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb05006d8d55bb9e68ef/streams/test-acc-tf-1573712372077924828
2025-07-10T13:24:52.3772396Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-10T13:24:52.3772996Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3773404Z         BadRequestDetail: 
2025-07-10T13:24:52.3773703Z --- FAIL: TestAccStreamDSStreamInstances_basic (32.36s)
```

- 2025-07-11 PASS 2 seconds
- 2025-07-12 PASS 2 seconds
- 2025-07-13 PASS 2 seconds
- 2025-07-14 PASS 2 seconds
- 2025-07-15 PASS 2 seconds
- 2025-07-16 PASS 3 seconds
- 2025-07-17 PASS 2 seconds
- 2025-07-18 PASS 3 seconds
- 2025-07-19 PASS 2 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.6912649Z === RUN   TestAccStreamDSStreamInstances_basic
2025-07-20T00:53:03.6917295Z === CONT  TestAccStreamDSStreamInstances_basic
2025-07-20T00:53:03.6946481Z === NAME  TestAccStreamDSStreamInstances_basic
2025-07-20T00:53:03.6947033Z     data_source_stream_instances_test.go:26: Step 1/1 error: Error running apply: exit status 1
2025-07-20T00:53:03.6947447Z         
2025-07-20T00:53:03.6947724Z         Error: error creating resource
2025-07-20T00:53:03.6947990Z         
2025-07-20T00:53:03.6948295Z           with mongodbatlas_stream_instance.test,
2025-07-20T00:53:03.6948908Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-07-20T00:53:03.6949481Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-07-20T00:53:03.6949985Z         
2025-07-20T00:53:03.6950477Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393d426db7026b5b1cb4/streams
2025-07-20T00:53:03.6951133Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:53:03.6951700Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:53:03.6952082Z         BadRequestDetail: 
2025-07-20T00:53:03.6952752Z --- FAIL: TestAccStreamDSStreamInstances_basic (30.88s)
```

- 2025-07-21 PASS 3 seconds
- 2025-07-22 PASS 2 seconds
- 2025-07-23
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-07-24 PASS 2 seconds