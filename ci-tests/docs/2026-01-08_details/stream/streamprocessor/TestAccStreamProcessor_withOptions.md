# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 32 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:45](#error-2026-01-07t0045550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da931d59b8466ea725024/clusters/test-acc-tf-c-337996212744021775 | dev | flaky_500 | 180.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 12 minutes
  - PASS 11 minutes
- 2025-12-11 PASS 11 minutes
- 2025-12-12 PASS 10 minutes
- 2025-12-13 PASS 13 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 10 minutes
- 2025-12-16 PASS 11 minutes
- 2025-12-17 PASS 13 minutes
- 2025-12-18 PASS 12 minutes
- 2025-12-19 PASS 12 minutes
- 2025-12-20 PASS 12 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 12 minutes
- 2025-12-23 PASS 12 minutes
- 2025-12-24 PASS 12 minutes
- 2025-12-25 PASS 12 minutes
- 2025-12-26 PASS 10 minutes
- 2025-12-27 PASS 12 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 10 minutes
- 2025-12-31 PASS 11 minutes
- 2026-01-01 PASS 10 minutes
- 2026-01-02 PASS 9 minutes
- 2026-01-03 PASS 10 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 11 minutes
- 2026-01-06 PASS 11 minutes
- 2026-01-07

### Error 2026-01-07T00:45:55+00:00
```
2026-01-07T00:45:55.2686849Z === RUN   TestAccStreamProcessor_withOptions
2026-01-07T00:45:55.2687363Z     resource_test.go:140: Creating execution cluster: test-acc-tf-c-337996212744021775
2026-01-07T00:45:55.2688329Z 2026/01/07 00:30:46 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T00:45:55.2688725Z     resource_test.go:140: 
2026-01-07T00:45:55.2689731Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T00:45:55.2691471Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T00:45:55.2693391Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:140
2026-01-07T00:45:55.2694164Z         	Error:      	Received unexpected error:
2026-01-07T00:45:55.2696521Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da931d59b8466ea725024/clusters/test-acc-tf-c-337996212744021775 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:45:55.2697744Z         	Test:       	TestAccStreamProcessor_withOptions
2026-01-07T00:45:55.2699744Z         	Messages:   	Cluster creation failed: test-acc-tf-c-337996212744021775, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da931d59b8466ea725024/clusters/test-acc-tf-c-337996212744021775 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:45:55.2701078Z --- FAIL: TestAccStreamProcessor_withOptions (180.84s)
```

- 2026-01-08 PASS 11 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/connections | qa | flaky_500 | 593.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T01:00:24+00:00
```
2025-12-14T01:00:24.2681276Z === RUN   TestAccStreamProcessor_withOptions
2025-12-14T01:00:24.2681824Z     resource_test.go:140: Creating execution cluster: test-acc-tf-c-8689216405378287671
2025-12-14T01:00:24.2682317Z 2025/12/14 00:33:46 [DEBUG] Waiting for state to become: [IDLE]
2025-12-14T01:00:24.2682716Z 2025/12/14 00:36:46 [TRACE] Waiting 1m0s before next try
2025-12-14T01:00:24.2683084Z 2025/12/14 00:37:46 [TRACE] Waiting 10s before next try
2025-12-14T01:00:24.2683444Z 2025/12/14 00:37:56 [TRACE] Waiting 1m0s before next try
2025-12-14T01:00:24.2683807Z 2025/12/14 00:38:57 [TRACE] Waiting 10s before next try
2025-12-14T01:00:24.2684163Z 2025/12/14 00:39:07 [TRACE] Waiting 1m0s before next try
2025-12-14T01:00:24.2684519Z 2025/12/14 00:40:07 [TRACE] Waiting 10s before next try
2025-12-14T01:00:24.2684877Z 2025/12/14 00:40:17 [TRACE] Waiting 1m0s before next try
2025-12-14T01:00:24.2685234Z 2025/12/14 00:41:17 [TRACE] Waiting 10s before next try
2025-12-14T01:00:24.2685581Z 2025/12/14 00:41:27 [TRACE] Waiting 1m0s before next try
2025-12-14T01:00:24.2685939Z 2025/12/14 00:42:28 [TRACE] Waiting 10s before next try
2025-12-14T01:00:24.2686514Z 2025/12/14 00:42:38 [TRACE] Waiting 1m0s before next try
2025-12-14T01:00:24.3109324Z === CONT  TestAccStreamProcessor_withOptions
2025-12-14T01:00:24.3161513Z === NAME  TestAccStreamProcessor_withOptions
2025-12-14T01:00:24.3162007Z     resource_test.go:147: Step 1/2 error: Error running apply: exit status 1
2025-12-14T01:00:24.3162382Z         
2025-12-14T01:00:24.3162677Z         Error: error creating resource
2025-12-14T01:00:24.3162959Z         
2025-12-14T01:00:24.3163341Z           with mongodbatlas_stream_connection.cluster_src,
2025-12-14T01:00:24.3164051Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_connection" "cluster_src":
2025-12-14T01:00:24.3164755Z           32:             resource "mongodbatlas_stream_connection" "cluster_src" {
2025-12-14T01:00:24.3165110Z         
2025-12-14T01:00:24.3165889Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/connections
2025-12-14T01:00:24.3166756Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-12-14T01:00:24.3167362Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-12-14T01:00:24.3167774Z         BadRequestDetail: 
2025-12-14T01:00:24.3168028Z         
2025-12-14T01:00:24.3168315Z         Error: error creating resource
2025-12-14T01:00:24.3168592Z         
2025-12-14T01:00:24.3168964Z           with mongodbatlas_stream_connection.kafka_dest,
2025-12-14T01:00:24.3169668Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_stream_connection" "kafka_dest":
2025-12-14T01:00:24.3170350Z           44:             resource "mongodbatlas_stream_connection" "kafka_dest"{
2025-12-14T01:00:24.3170819Z         
2025-12-14T01:00:24.3171595Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/connections
2025-12-14T01:00:24.3172452Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-12-14T01:00:24.3173053Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-12-14T01:00:24.3173456Z         BadRequestDetail: 
2025-12-14T01:00:24.3174170Z --- FAIL: TestAccStreamProcessor_withOptions (593.17s)
```

- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 9 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 10 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 11 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 10 minutes
  - PASS 12 minutes
