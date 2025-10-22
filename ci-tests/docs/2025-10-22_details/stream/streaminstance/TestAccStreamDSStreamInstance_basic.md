# stream/streaminstance/TestAccStreamDSStreamInstance_basic Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 43) FAIL
Success rate: 97.73%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f4317421ed692ad0019290/streams | qa | flaky_500 | 33.01s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 4 seconds
- 2025-09-24 PASS 5 seconds
- 2025-09-25 PASS 7 seconds
- 2025-09-26 PASS 4 seconds
- 2025-09-27 PASS 5 seconds
- 2025-09-28 PASS 4 seconds
- 2025-09-29
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-09-30
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-10-01
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-10-02 PASS 4 seconds
- 2025-10-03 PASS 5 seconds
- 2025-10-04 PASS 6 seconds
- 2025-10-05 PASS 6 seconds
- 2025-10-06 PASS 6 seconds
- 2025-10-07 PASS 4 seconds
- 2025-10-08 PASS 7 seconds
- 2025-10-09 PASS 5 seconds
- 2025-10-10 PASS 6 seconds
- 2025-10-11 PASS 5 seconds
- 2025-10-12 PASS 5 seconds
- 2025-10-13 PASS 5 seconds
- 2025-10-14 PASS 6 seconds
- 2025-10-15 PASS 5 seconds
- 2025-10-16 PASS 4 seconds
- 2025-10-17 PASS 4 seconds
- 2025-10-18 PASS 5 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1681463Z === RUN   TestAccStreamDSStreamInstance_basic
2025-10-19T00:50:12.1682205Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-3928387208429572695
2025-10-19T00:50:12.1687936Z === CONT  TestAccStreamDSStreamInstance_basic
2025-10-19T00:50:12.1757702Z === NAME  TestAccStreamDSStreamInstance_basic
2025-10-19T00:50:12.1758396Z     data_source_stream_instance_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-10-19T00:50:12.1758821Z         
2025-10-19T00:50:12.1759097Z         Error: error creating resource
2025-10-19T00:50:12.1759370Z         
2025-10-19T00:50:12.1759695Z           with mongodbatlas_stream_instance.test,
2025-10-19T00:50:12.1760329Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-10-19T00:50:12.1760916Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-10-19T00:50:12.1761335Z         
2025-10-19T00:50:12.1761828Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f4317421ed692ad0019290/streams
2025-10-19T00:50:12.1762502Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-10-19T00:50:12.1763082Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-19T00:50:12.1763481Z         BadRequestDetail: 
2025-10-19T00:50:12.1781113Z --- FAIL: TestAccStreamDSStreamInstance_basic (33.13s)
```

- 2025-10-20
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-10-21 PASS 5 seconds
- 2025-10-22
  - PASS 5 seconds
  - PASS 5 seconds