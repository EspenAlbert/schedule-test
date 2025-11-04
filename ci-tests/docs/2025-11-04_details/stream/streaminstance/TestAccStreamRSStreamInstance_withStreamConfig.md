# stream/streaminstance/TestAccStreamRSStreamInstance_withStreamConfig Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f4317421ed692ad0019290/streams | qa | flaky_500 | 30.10s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 3 seconds
- 2025-10-07 PASS 2 seconds
- 2025-10-08 PASS 3 seconds
- 2025-10-09 PASS 2 seconds
- 2025-10-10 PASS 3 seconds
- 2025-10-11 PASS 3 seconds
- 2025-10-12 PASS 2 seconds
- 2025-10-13 PASS 2 seconds
- 2025-10-14 PASS 3 seconds
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