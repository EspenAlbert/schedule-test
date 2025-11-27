# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections | dev | flaky_500 | 603.08s
[2025-11-15 00:49](#error-2025-11-15t0049570000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6917c8e6d870e7540fcb47ea/streams/test-acc-tf-s-6193237363097962336/processor | dev |  | 596.05s
[2025-11-20 01:03](#error-2025-11-20t0103020000) |  | dev | flaky_client | 740.05s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 13 minutes
- 2025-10-30 PASS 11 minutes
- 2025-10-31 PASS 11 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 10 minutes
- 2025-11-04 PASS 11 minutes
- 2025-11-05
  - PASS 12 minutes
  - PASS 10 minutes
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1235733Z === RUN   TestAccStreamProcessor_withOptions
2025-11-06T00:51:58.1236260Z     resource_test.go:140: Creating execution cluster: test-acc-tf-c-3737702520804349041
2025-11-06T00:51:58.1236741Z 2025/11/06 00:27:29 [DEBUG] Waiting for state to become: [IDLE]
2025-11-06T00:51:58.1237128Z 2025/11/06 00:30:29 [TRACE] Waiting 1m0s before next try
2025-11-06T00:51:58.1237498Z 2025/11/06 00:31:30 [TRACE] Waiting 10s before next try
2025-11-06T00:51:58.1237859Z 2025/11/06 00:31:40 [TRACE] Waiting 1m0s before next try
2025-11-06T00:51:58.1238217Z 2025/11/06 00:32:40 [TRACE] Waiting 10s before next try
2025-11-06T00:51:58.1238573Z 2025/11/06 00:32:50 [TRACE] Waiting 1m0s before next try
2025-11-06T00:51:58.1238931Z 2025/11/06 00:33:50 [TRACE] Waiting 10s before next try
2025-11-06T00:51:58.1239293Z 2025/11/06 00:34:01 [TRACE] Waiting 1m0s before next try
2025-11-06T00:51:58.1239651Z 2025/11/06 00:35:01 [TRACE] Waiting 10s before next try
2025-11-06T00:51:58.1240020Z 2025/11/06 00:35:11 [TRACE] Waiting 1m0s before next try
2025-11-06T00:51:58.1240363Z 2025/11/06 00:36:11 [TRACE] Waiting 10s before next try
2025-11-06T00:51:58.1240961Z 2025/11/06 00:36:21 [TRACE] Waiting 1m0s before next try
2025-11-06T00:51:58.1241311Z 2025/11/06 00:37:21 [TRACE] Waiting 10s before next try
2025-11-06T00:51:58.1557732Z === CONT  TestAccStreamProcessor_withOptions
2025-11-06T00:51:58.1650084Z === NAME  TestAccStreamProcessor_withOptions
2025-11-06T00:51:58.1650380Z     resource_test.go:147: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:51:58.1650670Z         
2025-11-06T00:51:58.1650861Z         Error: error creating resource
2025-11-06T00:51:58.1650960Z         
2025-11-06T00:51:58.1651226Z           with mongodbatlas_stream_connection.cluster_src,
2025-11-06T00:51:58.1651720Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_connection" "cluster_src":
2025-11-06T00:51:58.1652072Z           32:             resource "mongodbatlas_stream_connection" "cluster_src" {
2025-11-06T00:51:58.1652167Z         
2025-11-06T00:51:58.1652844Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections
2025-11-06T00:51:58.1653210Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.1653508Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1653657Z         BadRequestDetail: 
2025-11-06T00:51:58.1653765Z         
2025-11-06T00:51:58.1653939Z         Error: error creating resource
2025-11-06T00:51:58.1654028Z         
2025-11-06T00:51:58.1654289Z           with mongodbatlas_stream_connection.kafka_dest,
2025-11-06T00:51:58.1654770Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_stream_connection" "kafka_dest":
2025-11-06T00:51:58.1655111Z           44:             resource "mongodbatlas_stream_connection" "kafka_dest"{
2025-11-06T00:51:58.1655205Z         
2025-11-06T00:51:58.1655871Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections
2025-11-06T00:51:58.1656234Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.1656527Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1656674Z         BadRequestDetail: 
2025-11-06T00:51:58.1656999Z --- FAIL: TestAccStreamProcessor_withOptions (603.80s)
```

- 2025-11-07 PASS 9 minutes
- 2025-11-08 PASS 38 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 10 minutes
- 2025-11-11 PASS 10 minutes
- 2025-11-12 PASS 10 minutes
- 2025-11-13 PASS 15 minutes
- 2025-11-14 PASS 12 minutes
- 2025-11-15

### Error 2025-11-15T00:49:57+00:00
```
2025-11-15T00:49:57.6488893Z === RUN   TestAccStreamProcessor_withOptions
2025-11-15T00:49:57.6489419Z     resource_test.go:140: Creating execution cluster: test-acc-tf-c-8796690805401241213
2025-11-15T00:49:57.6489896Z 2025/11/15 00:27:21 [DEBUG] Waiting for state to become: [IDLE]
2025-11-15T00:49:57.6490288Z 2025/11/15 00:30:21 [TRACE] Waiting 1m0s before next try
2025-11-15T00:49:57.6490654Z 2025/11/15 00:31:21 [TRACE] Waiting 10s before next try
2025-11-15T00:49:57.6491008Z 2025/11/15 00:31:31 [TRACE] Waiting 1m0s before next try
2025-11-15T00:49:57.6491357Z 2025/11/15 00:32:31 [TRACE] Waiting 10s before next try
2025-11-15T00:49:57.6491902Z 2025/11/15 00:32:41 [TRACE] Waiting 1m0s before next try
2025-11-15T00:49:57.6492250Z 2025/11/15 00:33:42 [TRACE] Waiting 10s before next try
2025-11-15T00:49:57.6492591Z 2025/11/15 00:33:52 [TRACE] Waiting 1m0s before next try
2025-11-15T00:49:57.6492931Z 2025/11/15 00:34:52 [TRACE] Waiting 10s before next try
2025-11-15T00:49:57.6493276Z 2025/11/15 00:35:02 [TRACE] Waiting 1m0s before next try
2025-11-15T00:49:57.6493623Z 2025/11/15 00:36:02 [TRACE] Waiting 10s before next try
2025-11-15T00:49:57.6493962Z 2025/11/15 00:36:12 [TRACE] Waiting 1m0s before next try
2025-11-15T00:49:57.6553257Z === CONT  TestAccStreamProcessor_withOptions
2025-11-15T00:49:57.6579835Z === NAME  TestAccStreamProcessor_withOptions
2025-11-15T00:49:57.6580334Z     resource_test.go:147: Step 1/2 error: Error running apply: exit status 1
2025-11-15T00:49:57.6580719Z         
2025-11-15T00:49:57.6581010Z         Error: error creating resource
2025-11-15T00:49:57.6581285Z         
2025-11-15T00:49:57.6581864Z           with mongodbatlas_stream_processor.processor,
2025-11-15T00:49:57.6582572Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-11-15T00:49:57.6583377Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2025-11-15T00:49:57.6583719Z         
2025-11-15T00:49:57.6584507Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6917c8e6d870e7540fcb47ea/streams/test-acc-tf-s-6193237363097962336/processor
2025-11-15T00:49:57.6585478Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-11-15T00:49:57.6586140Z         Detail: Streams Processor with this name (new-processorc62z2) had a problem
2025-11-15T00:49:57.6586784Z         occur: connection named KafkaConnectionDestc62z2 does not exist. Check
2025-11-15T00:49:57.6587443Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-11-15T00:49:57.6588130Z         [new-processorc62z2 connection named KafkaConnectionDestc62z2 does not exist.
2025-11-15T00:49:57.6588797Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2025-11-15T00:49:57.6589262Z --- FAIL: TestAccStreamProcessor_withOptions (596.46s)
```

- 2025-11-16: MISSING
- 2025-11-17 PASS 12 minutes
- 2025-11-18 PASS 8 minutes
- 2025-11-19 PASS 13 minutes
- 2025-11-20

### Error 2025-11-20T01:03:02+00:00
```
2025-11-20T01:03:02.0715069Z === RUN   TestAccStreamProcessor_withOptions
2025-11-20T01:03:02.0715667Z     resource_test.go:140: Creating execution cluster: test-acc-tf-c-6488134564208112052
2025-11-20T01:03:02.0716227Z 2025/11/20 00:28:01 [DEBUG] Waiting for state to become: [IDLE]
2025-11-20T01:03:02.0716681Z 2025/11/20 00:31:01 [TRACE] Waiting 1m0s before next try
2025-11-20T01:03:02.0717099Z 2025/11/20 00:32:02 [TRACE] Waiting 10s before next try
2025-11-20T01:03:02.0717511Z 2025/11/20 00:32:12 [TRACE] Waiting 1m0s before next try
2025-11-20T01:03:02.0717923Z 2025/11/20 00:33:12 [TRACE] Waiting 10s before next try
2025-11-20T01:03:02.0718332Z 2025/11/20 00:33:22 [TRACE] Waiting 1m0s before next try
2025-11-20T01:03:02.0718957Z 2025/11/20 00:34:22 [TRACE] Waiting 10s before next try
2025-11-20T01:03:02.0719362Z 2025/11/20 00:34:32 [TRACE] Waiting 1m0s before next try
2025-11-20T01:03:02.0719775Z 2025/11/20 00:35:33 [TRACE] Waiting 10s before next try
2025-11-20T01:03:02.0720179Z 2025/11/20 00:35:43 [TRACE] Waiting 1m0s before next try
2025-11-20T01:03:02.0720596Z 2025/11/20 00:36:43 [TRACE] Waiting 10s before next try
2025-11-20T01:03:02.0720992Z 2025/11/20 00:36:53 [TRACE] Waiting 1m0s before next try
2025-11-20T01:03:02.0721404Z 2025/11/20 00:37:53 [TRACE] Waiting 10s before next try
2025-11-20T01:03:02.0721801Z 2025/11/20 00:38:04 [TRACE] Waiting 1m0s before next try
2025-11-20T01:03:02.0722209Z 2025/11/20 00:39:06 [TRACE] Waiting 10s before next try
2025-11-20T01:03:02.0722607Z 2025/11/20 00:39:16 [TRACE] Waiting 1m0s before next try
2025-11-20T01:03:02.0724725Z     resource_test.go:140: 
2025-11-20T01:03:02.0726372Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:47
2025-11-20T01:03:02.0729135Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:137
2025-11-20T01:03:02.0731888Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:140
2025-11-20T01:03:02.0732617Z         	Error:      	Received unexpected error:
2025-11-20T01:03:02.0734209Z         	            	Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/691e608df41e983fa1695c9a/clusters/test-acc-tf-c-6488134564208112052": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-11-20T01:03:02.0735061Z         	Test:       	TestAccStreamProcessor_withOptions
2025-11-20T01:03:02.0736473Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6488134564208112052, err: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/691e608df41e983fa1695c9a/clusters/test-acc-tf-c-6488134564208112052": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-11-20T01:03:02.0737480Z --- FAIL: TestAccStreamProcessor_withOptions (740.54s)
```

- 2025-11-21 PASS 11 minutes
- 2025-11-22 PASS 11 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 10 minutes
- 2025-11-25 PASS 13 minutes
- 2025-11-26 PASS 11 minutes
- 2025-11-27 PASS 9 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 8 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 10 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 11 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 11 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 9 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
