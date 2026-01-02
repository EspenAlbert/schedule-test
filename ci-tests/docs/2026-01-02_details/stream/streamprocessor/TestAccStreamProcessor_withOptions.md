# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 32 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-05 02:17](#error-2025-12-05t0217270000) |  | dev | timeout | 3600.06s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 11 minutes
- 2025-12-05
  - FAIL an hour

### Error 2025-12-05T02:17:27+00:00
```
2025-12-05T02:17:27.7875863Z === RUN   TestAccStreamProcessor_withOptions
2025-12-05T02:17:27.7876447Z     resource_test.go:140: Creating execution cluster: test-acc-tf-c-6120894154278189797
2025-12-05T02:17:27.7877058Z 2025/12/05 00:30:46 [DEBUG] Waiting for state to become: [IDLE]
2025-12-05T02:17:27.7877697Z 2025/12/05 00:33:46 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7878082Z 2025/12/05 00:34:46 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7878571Z 2025/12/05 00:34:56 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7878927Z 2025/12/05 00:35:56 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7879397Z 2025/12/05 00:36:06 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7879747Z 2025/12/05 00:37:06 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7880211Z 2025/12/05 00:37:17 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7880581Z 2025/12/05 00:38:17 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7881057Z 2025/12/05 00:38:27 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7881402Z 2025/12/05 00:39:27 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7881864Z 2025/12/05 00:39:37 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7882212Z 2025/12/05 00:40:37 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7882680Z 2025/12/05 00:40:47 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7883032Z 2025/12/05 00:41:48 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7883495Z 2025/12/05 00:41:58 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7883848Z 2025/12/05 00:42:58 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7884312Z 2025/12/05 00:43:08 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7884788Z 2025/12/05 00:44:08 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7885262Z 2025/12/05 00:44:18 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7885611Z 2025/12/05 00:45:18 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7886079Z 2025/12/05 00:45:29 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7886430Z 2025/12/05 00:46:29 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7886892Z 2025/12/05 00:46:39 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7887247Z 2025/12/05 00:47:39 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7887713Z 2025/12/05 00:47:49 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7888063Z 2025/12/05 00:48:49 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7888523Z 2025/12/05 00:48:59 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7888873Z 2025/12/05 00:50:00 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7889331Z 2025/12/05 00:50:10 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7889684Z 2025/12/05 00:51:10 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7890146Z 2025/12/05 00:51:20 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7890493Z 2025/12/05 00:52:20 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7890963Z 2025/12/05 00:52:30 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7891311Z 2025/12/05 00:53:31 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7891774Z 2025/12/05 00:53:41 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7892118Z 2025/12/05 00:54:41 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7892586Z 2025/12/05 00:54:51 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7892933Z 2025/12/05 00:55:51 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7893406Z 2025/12/05 00:56:01 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7893774Z 2025/12/05 00:57:01 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7894250Z 2025/12/05 00:57:11 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7894606Z 2025/12/05 00:58:12 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7895177Z 2025/12/05 00:58:22 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7895530Z 2025/12/05 00:59:22 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7896148Z 2025/12/05 00:59:32 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7896570Z 2025/12/05 01:00:32 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7896974Z 2025/12/05 01:00:42 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7897381Z 2025/12/05 01:01:42 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7897910Z 2025/12/05 01:01:52 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7898391Z 2025/12/05 01:02:53 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7898743Z 2025/12/05 01:03:03 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7899207Z 2025/12/05 01:04:03 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7899561Z 2025/12/05 01:04:13 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7900023Z 2025/12/05 01:05:13 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7900376Z 2025/12/05 01:05:23 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7900834Z 2025/12/05 01:06:23 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7901202Z 2025/12/05 01:06:34 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7901653Z 2025/12/05 01:07:34 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7902015Z 2025/12/05 01:07:44 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7902441Z 2025/12/05 01:08:44 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7902834Z 2025/12/05 01:08:54 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7903254Z 2025/12/05 01:09:54 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7903646Z 2025/12/05 01:10:04 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7904045Z 2025/12/05 01:11:04 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7904459Z 2025/12/05 01:11:15 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7905062Z 2025/12/05 01:12:15 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7905423Z 2025/12/05 01:12:25 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7905883Z 2025/12/05 01:13:25 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7906247Z 2025/12/05 01:13:35 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7906709Z 2025/12/05 01:14:35 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7907072Z 2025/12/05 01:14:45 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7907526Z 2025/12/05 01:15:45 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7907888Z 2025/12/05 01:15:55 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7908335Z 2025/12/05 01:16:56 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7908698Z 2025/12/05 01:17:06 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7909126Z 2025/12/05 01:18:06 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7909511Z 2025/12/05 01:18:16 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7909930Z 2025/12/05 01:19:16 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7910324Z 2025/12/05 01:19:26 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7910740Z 2025/12/05 01:20:26 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7911147Z 2025/12/05 01:20:37 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7911562Z 2025/12/05 01:21:37 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7911978Z 2025/12/05 01:21:47 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7912391Z 2025/12/05 01:22:47 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7912817Z 2025/12/05 01:22:57 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7913233Z 2025/12/05 01:23:57 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7913649Z 2025/12/05 01:24:07 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7914079Z 2025/12/05 01:25:08 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7914488Z 2025/12/05 01:25:18 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7915087Z 2025/12/05 01:26:18 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7915443Z 2025/12/05 01:26:28 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7916110Z 2025/12/05 01:27:28 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7916468Z 2025/12/05 01:27:38 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7916934Z 2025/12/05 01:28:38 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7917288Z 2025/12/05 01:28:49 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7917752Z 2025/12/05 01:29:49 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7918280Z 2025/12/05 01:29:59 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7918728Z 2025/12/05 01:30:46 [WARN] WaitForState timeout after 1h0m0s
2025-12-05T02:17:27.7919154Z 2025/12/05 01:30:46 [WARN] WaitForState starting 30s refresh grace period
2025-12-05T02:17:27.7919688Z     resource_test.go:140: 
2025-12-05T02:17:27.7920571Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:47
2025-12-05T02:17:27.7922400Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:137
2025-12-05T02:17:27.7924316Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:140
2025-12-05T02:17:27.7925282Z         	Error:      	Received unexpected error:
2025-12-05T02:17:27.7926192Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-12-05T02:17:27.7926831Z         	Test:       	TestAccStreamProcessor_withOptions
2025-12-05T02:17:27.7927919Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6120894154278189797, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-12-05T02:17:27.7928639Z --- FAIL: TestAccStreamProcessor_withOptions (3600.59s)
```

  - PASS 10 minutes
- 2025-12-06 PASS 11 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 11 minutes
- 2025-12-09 PASS 11 minutes
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

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/connections | qa | flaky_500 | 593.02s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 8 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 8 minutes
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
