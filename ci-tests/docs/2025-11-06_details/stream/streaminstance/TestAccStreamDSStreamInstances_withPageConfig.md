# stream/streaminstance/TestAccStreamDSStreamInstances_withPageConfig Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f4317421ed692ad0019290/streams | qa | flaky_500 | 31.00s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cb9ec/streams/test-acc-tf-6811694040216411753 | dev | flaky_500 | 2.02s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 3 seconds
- 2025-10-09 PASS 2 seconds
- 2025-10-10 PASS 2 seconds
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
2025-10-19T00:50:12.1684177Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-10-19T00:50:12.1688730Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-10-19T00:50:12.1740361Z === NAME  TestAccStreamDSStreamInstances_withPageConfig
2025-10-19T00:50:12.1740953Z     data_source_stream_instances_test.go:50: Step 1/1 error: Error running apply: exit status 1
2025-10-19T00:50:12.1741380Z         
2025-10-19T00:50:12.1741661Z         Error: error creating resource
2025-10-19T00:50:12.1741933Z         
2025-10-19T00:50:12.1742263Z           with mongodbatlas_stream_instance.test,
2025-10-19T00:50:12.1742899Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-10-19T00:50:12.1743498Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-10-19T00:50:12.1743811Z         
2025-10-19T00:50:12.1744307Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f4317421ed692ad0019290/streams
2025-10-19T00:50:12.1744981Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-10-19T00:50:12.1745560Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-19T00:50:12.1746019Z         BadRequestDetail: 
2025-10-19T00:50:12.1757297Z    test_step_number=1 test_name=TestAccStreamDSStreamInstance_basic
2025-10-19T00:50:12.1763835Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (31.04s)
```

- 2025-10-20
  - PASS 3 seconds
  - PASS 2 seconds
- 2025-10-21 PASS 2 seconds
- 2025-10-22
  - PASS 3 seconds
  - PASS 2 seconds
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
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1115651Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-11-06T00:51:58.1137531Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-11-06T00:51:58.1207012Z === NAME  TestAccStreamDSStreamInstances_withPageConfig
2025-11-06T00:51:58.1207735Z     data_source_stream_instances_test.go:50: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-06T00:51:58.1208369Z         
2025-11-06T00:51:58.1208665Z         Error: error during resource delete
2025-11-06T00:51:58.1208946Z         
2025-11-06T00:51:58.1209626Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cb9ec/streams/test-acc-tf-6811694040216411753
2025-11-06T00:51:58.1210409Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-11-06T00:51:58.1211237Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1211652Z         BadRequestDetail: 
2025-11-06T00:51:58.1212469Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (2.18s)
```
