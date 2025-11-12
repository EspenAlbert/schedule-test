# stream/streaminstance/TestAccStreamRSStreamInstance_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f4317421ed692ad0019290/streams | qa | flaky_500 | 30.10s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cb9ec/streams/test-acc-tf-1523841713075281837 | dev | flaky_500 | 2.01s

## Timeline
- 2025-10-03: MISSING
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
- 2025-10-31 PASS 3 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 2 seconds
- 2025-11-03 PASS 2 seconds
- 2025-11-04 PASS 2 seconds
- 2025-11-05
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1116708Z === RUN   TestAccStreamRSStreamInstance_basic
2025-11-06T00:51:58.1136231Z === CONT  TestAccStreamRSStreamInstance_basic
2025-11-06T00:51:58.1176437Z === NAME  TestAccStreamRSStreamInstance_basic
2025-11-06T00:51:58.1177121Z     resource_stream_instance_test.go:19: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-06T00:51:58.1177692Z         
2025-11-06T00:51:58.1177999Z         Error: error during resource delete
2025-11-06T00:51:58.1178282Z         
2025-11-06T00:51:58.1178971Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cb9ec/streams/test-acc-tf-1523841713075281837
2025-11-06T00:51:58.1179928Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-11-06T00:51:58.1180747Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1181180Z         BadRequestDetail: 
2025-11-06T00:51:58.1181509Z --- FAIL: TestAccStreamRSStreamInstance_basic (2.14s)
```

- 2025-11-07 PASS 2 seconds
- 2025-11-08 PASS 2 seconds
- 2025-11-09 PASS 2 seconds
- 2025-11-10 PASS 2 seconds
- 2025-11-11 PASS 2 seconds
- 2025-11-12 PASS 3 seconds