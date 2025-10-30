# stream/streaminstance/TestAccStreamRSStreamInstance_basic Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 39) FAIL
Success rate: 97.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f4317421ed692ad0019290/streams | qa | flaky_500 | 30.10s

## Timeline
- 2025-09-30 PASS 3 seconds
- 2025-10-01
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-10-02 PASS 2 seconds
- 2025-10-03 PASS 2 seconds
- 2025-10-04 PASS 2 seconds
- 2025-10-05 PASS 3 seconds
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
- 2025-10-18 PASS 3 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1685863Z === RUN   TestAccStreamRSStreamInstance_basic
2025-10-19T00:50:12.1689986Z === CONT  TestAccStreamRSStreamInstance_basic
2025-10-19T00:50:12.1707165Z    test_name=TestAccStreamRSStreamInstance_withStreamConfig
2025-10-19T00:50:12.1722301Z === NAME  TestAccStreamRSStreamInstance_basic
2025-10-19T00:50:12.1722856Z     resource_stream_instance_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.1723267Z         
2025-10-19T00:50:12.1723548Z         Error: error creating resource
2025-10-19T00:50:12.1723814Z         
2025-10-19T00:50:12.1724141Z           with mongodbatlas_stream_instance.test,
2025-10-19T00:50:12.1724805Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance" "test":
2025-10-19T00:50:12.1725423Z           12: 		resource "mongodbatlas_stream_instance" "test" {
2025-10-19T00:50:12.1725850Z         
2025-10-19T00:50:12.1726352Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f4317421ed692ad0019290/streams
2025-10-19T00:50:12.1727127Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-10-19T00:50:12.1727722Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-19T00:50:12.1728119Z         BadRequestDetail: 
2025-10-19T00:50:12.1728439Z --- FAIL: TestAccStreamRSStreamInstance_basic (30.97s)
```

- 2025-10-20
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-10-21 PASS 2 seconds
- 2025-10-22
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-10-23 PASS 2 seconds
- 2025-10-24 PASS 2 seconds
- 2025-10-25 PASS 2 seconds
- 2025-10-26 PASS 2 seconds
- 2025-10-27 PASS 2 seconds
- 2025-10-28 PASS 2 seconds
- 2025-10-29 PASS 3 seconds
- 2025-10-30 PASS 2 seconds