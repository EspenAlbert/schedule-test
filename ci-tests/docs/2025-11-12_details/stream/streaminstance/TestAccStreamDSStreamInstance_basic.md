# stream/streaminstance/TestAccStreamDSStreamInstance_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f4317421ed692ad0019290/streams | qa | flaky_500 | 33.01s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cb9ec/streams/test-acc-tf-382839235682383328 | dev | flaky_500 | 5.09s

## Timeline
- 2025-10-03: MISSING
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
- 2025-10-23 PASS 5 seconds
- 2025-10-24 PASS 6 seconds
- 2025-10-25 PASS 7 seconds
- 2025-10-26 PASS 5 seconds
- 2025-10-27 PASS 5 seconds
- 2025-10-28 PASS 4 seconds
- 2025-10-29 PASS 6 seconds
- 2025-10-30 PASS 6 seconds
- 2025-10-31 PASS 6 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 4 seconds
- 2025-11-03 PASS 5 seconds
- 2025-11-04 PASS 5 seconds
- 2025-11-05
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1112522Z === RUN   TestAccStreamDSStreamInstance_basic
2025-11-06T00:51:58.1113142Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-6779998157476133312
2025-11-06T00:51:58.1135649Z === CONT  TestAccStreamDSStreamInstance_basic
2025-11-06T00:51:58.1222820Z === NAME  TestAccStreamDSStreamInstance_basic
2025-11-06T00:51:58.1223501Z     data_source_stream_instance_test.go:18: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-06T00:51:58.1224012Z         
2025-11-06T00:51:58.1224308Z         Error: error during resource delete
2025-11-06T00:51:58.1224590Z         
2025-11-06T00:51:58.1225269Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cb9ec/streams/test-acc-tf-382839235682383328
2025-11-06T00:51:58.1226042Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-11-06T00:51:58.1226652Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1227069Z         BadRequestDetail: 
2025-11-06T00:51:58.1227380Z --- FAIL: TestAccStreamDSStreamInstance_basic (5.93s)
```

- 2025-11-07 PASS 5 seconds
- 2025-11-08 PASS 5 seconds
- 2025-11-09 PASS 4 seconds
- 2025-11-10 PASS 5 seconds
- 2025-11-11 PASS 4 seconds
- 2025-11-12 PASS 6 seconds