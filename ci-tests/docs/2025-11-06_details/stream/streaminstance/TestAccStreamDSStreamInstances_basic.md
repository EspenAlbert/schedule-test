# stream/streaminstance/TestAccStreamDSStreamInstances_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f4317421ed692ad0019290/streams | qa | flaky_500 | 31.01s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cb9ec/streams/test-acc-tf-7873880106307378130 | dev | flaky_500 | 1.10s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 3 seconds
- 2025-10-09 PASS 2 seconds
- 2025-10-10 PASS 3 seconds
- 2025-10-11 PASS 2 seconds
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
2025-10-19T00:50:12.1683186Z === RUN   TestAccStreamDSStreamInstances_basic
2025-10-19T00:50:12.1689634Z === CONT  TestAccStreamDSStreamInstances_basic
2025-10-19T00:50:12.1774991Z === NAME  TestAccStreamDSStreamInstances_basic
2025-10-19T00:50:12.1775557Z     data_source_stream_instances_test.go:26: Step 1/1 error: Error running apply: exit status 1
2025-10-19T00:50:12.1775983Z         
2025-10-19T00:50:12.1776264Z         Error: error creating resource
2025-10-19T00:50:12.1776532Z         
2025-10-19T00:50:12.1776981Z           with mongodbatlas_stream_instance.test,
2025-10-19T00:50:12.1777612Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-10-19T00:50:12.1778204Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-10-19T00:50:12.1778518Z         
2025-10-19T00:50:12.1779020Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f4317421ed692ad0019290/streams
2025-10-19T00:50:12.1779692Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-10-19T00:50:12.1780278Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-19T00:50:12.1780670Z         BadRequestDetail: 
2025-10-19T00:50:12.1781508Z --- FAIL: TestAccStreamDSStreamInstances_basic (31.09s)
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
2025-11-06T00:51:58.1114561Z === RUN   TestAccStreamDSStreamInstances_basic
2025-11-06T00:51:58.1138148Z === CONT  TestAccStreamDSStreamInstances_basic
2025-11-06T00:51:58.1159185Z   
2025-11-06T00:51:58.1160288Z     data_source_stream_instances_test.go:26: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-06T00:51:58.1161424Z         
2025-11-06T00:51:58.1161989Z         Error: error during resource delete
2025-11-06T00:51:58.1162443Z         
2025-11-06T00:51:58.1163688Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cb9ec/streams/test-acc-tf-7873880106307378130
2025-11-06T00:51:58.1164778Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-11-06T00:51:58.1165392Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1165832Z         BadRequestDetail: 
2025-11-06T00:51:58.1166157Z --- FAIL: TestAccStreamDSStreamInstances_basic (1.98s)
```
