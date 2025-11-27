# stream/streamprocessor/TestAccStreamProcessor_clusterType Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections | dev | flaky_500 | 0.07s
[2025-11-18 00:52](#error-2025-11-18t0052240000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/691bbda149da6618f234f16a/streams/test-acc-tf-s-3932732504536418090/processor/new-processorxo8u1:start | dev | flaky_500 | 11.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 9 seconds
- 2025-10-30 PASS 21 seconds
- 2025-10-31 PASS 12 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 9 seconds
- 2025-11-04 PASS 9 seconds
- 2025-11-05
  - PASS 11 seconds
  - PASS 10 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1554265Z === RUN   TestAccStreamProcessor_clusterType
2025-11-06T00:51:58.1557404Z === CONT  TestAccStreamProcessor_clusterType
2025-11-06T00:51:58.1640410Z === NAME  TestAccStreamProcessor_clusterType
2025-11-06T00:51:58.1640961Z     resource_test.go:290: Step 1/1 error: Error running apply: exit status 1
2025-11-06T00:51:58.1641057Z         
2025-11-06T00:51:58.1641237Z         Error: error creating resource
2025-11-06T00:51:58.1641332Z         
2025-11-06T00:51:58.1641602Z           with mongodbatlas_stream_connection.cluster_src,
2025-11-06T00:51:58.1642106Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "cluster_src":
2025-11-06T00:51:58.1642461Z           25:             resource "mongodbatlas_stream_connection" "cluster_src" {
2025-11-06T00:51:58.1642555Z         
2025-11-06T00:51:58.1643234Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections
2025-11-06T00:51:58.1643597Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.1643898Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1644047Z         BadRequestDetail: 
2025-11-06T00:51:58.1649944Z    test_terraform_path=/home/runner/work/_temp/c67eacf2-2435-42b6-ba18-88c701e78006/terraform test_step_number=1 test_working_directory=/tmp/plugintest1149091322
2025-11-06T00:51:58.1656834Z --- FAIL: TestAccStreamProcessor_clusterType (0.73s)
```

- 2025-11-07 PASS 9 seconds
- 2025-11-08 PASS 10 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 10 seconds
- 2025-11-11 PASS 11 seconds
- 2025-11-12 PASS 11 seconds
- 2025-11-13 PASS 11 seconds
- 2025-11-14 PASS 12 seconds
- 2025-11-15 PASS 11 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 10 seconds
- 2025-11-18

### Error 2025-11-18T00:52:24+00:00
```
2025-11-18T00:52:24.1447878Z === RUN   TestAccStreamProcessor_clusterType
2025-11-18T00:52:24.1450960Z === CONT  TestAccStreamProcessor_clusterType
2025-11-18T00:52:24.1493457Z === NAME  TestAccStreamProcessor_clusterType
2025-11-18T00:52:24.1493948Z     resource_test.go:290: Step 1/1 error: Error running apply: exit status 1
2025-11-18T00:52:24.1494317Z         
2025-11-18T00:52:24.1495251Z         Error: Error starting stream processor. You need to fix the processor and import the resource or delete it manually and re-run terraform apply.
2025-11-18T00:52:24.1495845Z         
2025-11-18T00:52:24.1496213Z           with mongodbatlas_stream_processor.processor,
2025-11-18T00:52:24.1496910Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-11-18T00:52:24.1497568Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2025-11-18T00:52:24.1497900Z         
2025-11-18T00:52:24.1498931Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/691bbda149da6618f234f16a/streams/test-acc-tf-s-3932732504536418090/processor/new-processorxo8u1:start
2025-11-18T00:52:24.1499872Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-11-18T00:52:24.1500527Z         Detail: Streams Processor with this name (new-processorxo8u1) had a problem
2025-11-18T00:52:24.1501183Z         occur: Stream processor does not exist: new-processorxo8u1. Reason: Bad
2025-11-18T00:52:24.1501811Z         Request. Params: [new-processorxo8u1 Stream processor does not exist:
2025-11-18T00:52:24.1502309Z         new-processorxo8u1], BadRequestDetail: 
2025-11-18T00:52:24.1516392Z   
2025-11-18T00:52:24.1516877Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-18T00:52:24.1517325Z         
2025-11-18T00:52:24.1517610Z         Error: error deleting resource
2025-11-18T00:52:24.1517889Z         
2025-11-18T00:52:24.1518828Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/691bbda149da6618f234f16a/streams/test-acc-tf-s-3932732504536418090/connections/ClusterConnectionSrcxo8u1
2025-11-18T00:52:24.1519649Z         DELETE: HTTP 403 Forbidden (Error code:
2025-11-18T00:52:24.1520191Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-11-18T00:52:24.1520885Z         name ClusterConnectionSrcxo8u1 in stream workspace
2025-11-18T00:52:24.1521463Z         test-acc-tf-s-3932732504536418090 has active processors, and cannot be
2025-11-18T00:52:24.1522062Z         changed. Reason: Forbidden. Params: [ClusterConnectionSrcxo8u1
2025-11-18T00:52:24.1522682Z         test-acc-tf-s-3932732504536418090], BadRequestDetail: 
2025-11-18T00:52:24.1523081Z --- FAIL: TestAccStreamProcessor_clusterType (11.14s)
```

- 2025-11-19 PASS 8 seconds
- 2025-11-20 PASS 19 minutes
- 2025-11-21 PASS 10 seconds
- 2025-11-22 PASS 10 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 9 seconds
- 2025-11-25 PASS 10 seconds
- 2025-11-26 PASS 10 seconds
- 2025-11-27 PASS 7 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 9 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 13 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 9 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 13 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 9 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
