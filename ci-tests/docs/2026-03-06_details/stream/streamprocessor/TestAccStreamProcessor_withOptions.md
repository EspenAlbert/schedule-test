# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL(x 2)
Success rate: 94.59%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 956.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 15 minutes
- 2026-02-06 PASS 17 minutes
- 2026-02-07
  - PASS 13 minutes
  - PASS 12 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 17 minutes
- 2026-02-10 PASS 13 minutes
- 2026-02-11 PASS 12 minutes
- 2026-02-12
  - PASS 17 minutes
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.7852979Z === RUN   TestAccStreamProcessor_withOptions
2026-02-12T18:47:26.7853938Z     resource_test.go:171: Creating execution project (1): test-acc-tf-p-4814721306699207532
2026-02-12T18:47:26.7854823Z     resource_test.go:171: 
2026-02-12T18:47:26.7856349Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.7859794Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.7863468Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.7866557Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.7870042Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:171
2026-02-12T18:47:26.7872111Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:26.7873259Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.7878271Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.7880558Z         	Test:       	TestAccStreamProcessor_withOptions
2026-02-12T18:47:26.7884791Z         	Messages:   	Project creation failed: test-acc-tf-p-4814721306699207532, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.7887629Z --- FAIL: TestAccStreamProcessor_withOptions (0.22s)
```

- 2026-02-13 PASS 17 minutes
- 2026-02-14 PASS 15 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 17 minutes
- 2026-02-17 PASS 14 minutes
- 2026-02-18 PASS 16 minutes
- 2026-02-19 PASS 20 minutes
- 2026-02-20 PASS 15 minutes
- 2026-02-21 PASS 14 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 17 minutes
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2230783Z === RUN   TestAccStreamProcessor_withOptions
2026-02-24T01:09:13.2231324Z     resource_test.go:172: Creating execution cluster: test-acc-tf-c-4372720692558590315
2026-02-24T01:09:13.2232077Z 2026/02/24 00:37:05 [DEBUG] Waiting for state to become: [IDLE]
2026-02-24T01:09:13.2232487Z 2026/02/24 00:40:05 [TRACE] Waiting 1m0s before next try
2026-02-24T01:09:13.2232862Z 2026/02/24 00:41:05 [TRACE] Waiting 10s before next try
2026-02-24T01:09:13.2233225Z 2026/02/24 00:41:15 [TRACE] Waiting 1m0s before next try
2026-02-24T01:09:13.2233575Z 2026/02/24 00:42:16 [TRACE] Waiting 10s before next try
2026-02-24T01:09:13.2233919Z 2026/02/24 00:42:26 [TRACE] Waiting 1m0s before next try
2026-02-24T01:09:13.2234270Z 2026/02/24 00:43:26 [TRACE] Waiting 10s before next try
2026-02-24T01:09:13.2234612Z 2026/02/24 00:43:36 [TRACE] Waiting 1m0s before next try
2026-02-24T01:09:13.2234959Z 2026/02/24 00:44:37 [TRACE] Waiting 10s before next try
2026-02-24T01:09:13.2235301Z 2026/02/24 00:44:47 [TRACE] Waiting 1m0s before next try
2026-02-24T01:09:13.2235648Z 2026/02/24 00:45:47 [TRACE] Waiting 10s before next try
2026-02-24T01:09:13.2235987Z 2026/02/24 00:45:57 [TRACE] Waiting 1m0s before next try
2026-02-24T01:09:13.2236334Z 2026/02/24 00:46:57 [TRACE] Waiting 10s before next try
2026-02-24T01:09:13.2236675Z 2026/02/24 00:47:08 [TRACE] Waiting 1m0s before next try
2026-02-24T01:09:13.2237023Z 2026/02/24 00:48:08 [TRACE] Waiting 10s before next try
2026-02-24T01:09:13.2237554Z 2026/02/24 00:48:18 [TRACE] Waiting 1m0s before next try
2026-02-24T01:09:13.2237923Z 2026/02/24 00:49:21 [TRACE] Waiting 10s before next try
2026-02-24T01:09:13.2238273Z 2026/02/24 00:49:33 [TRACE] Waiting 1m0s before next try
2026-02-24T01:09:13.2238626Z 2026/02/24 00:50:33 [TRACE] Waiting 10s before next try
2026-02-24T01:09:13.2238972Z 2026/02/24 00:50:44 [TRACE] Waiting 1m0s before next try
2026-02-24T01:09:13.2239316Z 2026/02/24 00:51:44 [TRACE] Waiting 10s before next try
2026-02-24T01:09:13.2239668Z 2026/02/24 00:51:56 [TRACE] Waiting 1m0s before next try
2026-02-24T01:09:13.2457061Z === CONT  TestAccStreamProcessor_withOptions
2026-02-24T01:09:13.2489352Z === NAME  TestAccStreamProcessor_withOptions
2026-02-24T01:09:13.2489989Z     resource_test.go:179: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:09:13.2490410Z         
2026-02-24T01:09:13.2490695Z         Error: error creating resource
2026-02-24T01:09:13.2490983Z         
2026-02-24T01:09:13.2491358Z           with mongodbatlas_stream_connection.cluster_src,
2026-02-24T01:09:13.2492222Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_connection" "cluster_src":
2026-02-24T01:09:13.2492949Z           32:             resource "mongodbatlas_stream_connection" "cluster_src" {
2026-02-24T01:09:13.2493331Z         
2026-02-24T01:09:13.2493811Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2494234Z         type
2026-02-24T01:09:13.2494450Z         
2026-02-24T01:09:13.2494741Z         Error: error creating resource
2026-02-24T01:09:13.2495029Z         
2026-02-24T01:09:13.2495398Z           with mongodbatlas_stream_connection.kafka_dest,
2026-02-24T01:09:13.2496132Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_stream_connection" "kafka_dest":
2026-02-24T01:09:13.2496847Z           44:             resource "mongodbatlas_stream_connection" "kafka_dest"{
2026-02-24T01:09:13.2497215Z         
2026-02-24T01:09:13.2497675Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2498090Z         type
2026-02-24T01:09:13.2506692Z    test_name=TestAccStreamProcessor_withTier test_terraform_path=/home/runner/work/_temp/aaedc82b-f5f9-4ae8-bb98-eec7ab7049ef/terraform test_working_directory=/tmp/plugintest1053040792 test_step_number=1
2026-02-24T01:09:13.2512794Z --- FAIL: TestAccStreamProcessor_withOptions (956.77s)
```

- 2026-02-25
  - PASS 14 minutes
  - PASS 14 minutes
- 2026-02-26 PASS 12 minutes
- 2026-02-27
  - PASS 14 minutes
  - PASS 31 minutes
- 2026-02-28 PASS 14 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 17 minutes
- 2026-03-03 PASS 17 minutes
- 2026-03-04 PASS 13 minutes
- 2026-03-05 PASS 17 minutes
- 2026-03-06 PASS 19 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 10 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 11 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 12 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 11 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 13 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 13 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 13 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
