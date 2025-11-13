# stream/streaminstance/TestAccStreamRSStreamInstance_withStreamConfig Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f4317421ed692ad0019290/streams | qa | flaky_500 | 30.10s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cb9ec/streams/test-acc-tf-860311008190618911 | dev | flaky_500 | 2.02s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 2 seconds
- 2025-10-16 PASS 2 seconds
- 2025-10-17 PASS 2 seconds
- 2025-10-18 PASS 2 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1686831Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-10-19T00:50:12.1689177Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-10-19T00:50:12.1707621Z === NAME  TestAccStreamRSStreamInstance_withStreamConfig
2025-10-19T00:50:12.1708282Z     resource_stream_instance_test.go:47: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.1708812Z         
2025-10-19T00:50:12.1709098Z         Error: error creating resource
2025-10-19T00:50:12.1709481Z         
2025-10-19T00:50:12.1709960Z           with mongodbatlas_stream_instance.test,
2025-10-19T00:50:12.1710743Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance" "test":
2025-10-19T00:50:12.1711456Z           12: 		resource "mongodbatlas_stream_instance" "test" {
2025-10-19T00:50:12.1711800Z         
2025-10-19T00:50:12.1712390Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f4317421ed692ad0019290/streams
2025-10-19T00:50:12.1713184Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-10-19T00:50:12.1714034Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-19T00:50:12.1714553Z         BadRequestDetail: 
2025-10-19T00:50:12.1722066Z   
2025-10-19T00:50:12.1728866Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (30.98s)
```

- 2025-10-20
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-10-21 PASS 2 seconds
- 2025-10-22
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-10-23 PASS 2 seconds
- 2025-10-24 PASS 3 seconds
- 2025-10-25 PASS 2 seconds
- 2025-10-26 PASS 2 seconds
- 2025-10-27 PASS 2 seconds
- 2025-10-28 PASS 2 seconds
- 2025-10-29 PASS 3 seconds
- 2025-10-30 PASS 2 seconds
- 2025-10-31 PASS 3 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 3 seconds
- 2025-11-03 PASS 2 seconds
- 2025-11-04 PASS 2 seconds
- 2025-11-05
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1134208Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-11-06T00:51:58.1136867Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-11-06T00:51:58.1202183Z === NAME  TestAccStreamRSStreamInstance_withStreamConfig
2025-11-06T00:51:58.1202902Z     resource_stream_instance_test.go:47: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-06T00:51:58.1203405Z         
2025-11-06T00:51:58.1203713Z         Error: error during resource delete
2025-11-06T00:51:58.1203997Z         
2025-11-06T00:51:58.1204829Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cb9ec/streams/test-acc-tf-860311008190618911
2025-11-06T00:51:58.1205629Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-11-06T00:51:58.1206247Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1206674Z         BadRequestDetail: 
2025-11-06T00:51:58.1212013Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (2.18s)
```

- 2025-11-07 PASS 2 seconds
- 2025-11-08 PASS 2 seconds
- 2025-11-09 PASS 2 seconds
- 2025-11-10 PASS 3 seconds
- 2025-11-11 PASS 2 seconds
- 2025-11-12 PASS 3 seconds
- 2025-11-13
  - PASS 2 seconds
  - PASS 2 seconds