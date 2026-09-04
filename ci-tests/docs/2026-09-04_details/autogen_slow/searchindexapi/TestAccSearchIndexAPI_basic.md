# autogen_slow/searchindexapi/TestAccSearchIndexAPI_basic Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 9) FAIL(x 2)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-28 04:08](#error-2026-08-28t0408520000) |  | dev |  | 938.03s
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 11871.02s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS an hour
- 2026-08-07 PASS 57 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28

### Error 2026-08-28T04:08:52+00:00
```
2026-08-28T04:08:52.7492395Z === RUN   TestAccSearchIndexAPI_basic
2026-08-28T04:08:52.7493526Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-3754780286845484878
2026-08-28T04:08:52.7494868Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-1159806956717905744
2026-08-28T04:08:52.7495842Z 2026/08/28 03:09:11 [DEBUG] Waiting for state to become: [IDLE]
2026-08-28T04:08:52.7496620Z 2026/08/28 03:12:11 [TRACE] Waiting 1m0s before next try
2026-08-28T04:08:52.7497633Z 2026/08/28 03:13:11 [TRACE] Waiting 10s before next try
2026-08-28T04:08:52.7498468Z 2026/08/28 03:13:21 [TRACE] Waiting 1m0s before next try
2026-08-28T04:08:52.7499197Z 2026/08/28 03:14:22 [TRACE] Waiting 10s before next try
2026-08-28T04:08:52.7499893Z 2026/08/28 03:14:32 [TRACE] Waiting 1m0s before next try
2026-08-28T04:08:52.7500846Z 2026/08/28 03:15:32 [TRACE] Waiting 10s before next try
2026-08-28T04:08:52.7501557Z 2026/08/28 03:15:42 [TRACE] Waiting 1m0s before next try
2026-08-28T04:08:52.7502252Z 2026/08/28 03:16:42 [TRACE] Waiting 10s before next try
2026-08-28T04:08:52.7502945Z 2026/08/28 03:16:53 [TRACE] Waiting 1m0s before next try
2026-08-28T04:08:52.7503632Z 2026/08/28 03:17:53 [TRACE] Waiting 10s before next try
2026-08-28T04:08:52.7504329Z 2026/08/28 03:18:03 [TRACE] Waiting 1m0s before next try
2026-08-28T04:08:52.7504999Z 2026/08/28 03:19:03 [TRACE] Waiting 10s before next try
2026-08-28T04:08:52.7505662Z 2026/08/28 03:19:14 [TRACE] Waiting 1m0s before next try
2026-08-28T04:08:52.7506360Z 2026/08/28 03:20:14 [TRACE] Waiting 10s before next try
2026-08-28T04:08:52.7507052Z 2026/08/28 03:20:25 [TRACE] Waiting 1m0s before next try
2026-08-28T04:08:52.7507742Z 2026/08/28 03:21:25 [TRACE] Waiting 10s before next try
2026-08-28T04:08:52.7508438Z 2026/08/28 03:21:35 [TRACE] Waiting 1m0s before next try
2026-08-28T04:08:52.7509128Z 2026/08/28 03:22:35 [TRACE] Waiting 10s before next try
2026-08-28T04:08:52.7509815Z 2026/08/28 03:22:45 [TRACE] Waiting 1m0s before next try
2026-08-28T04:08:52.7510897Z 2026/08/28 03:23:46 [DEBUG] Waiting for state to become: [COMPLETED]
2026-08-28T04:08:52.7511690Z     resource_test.go:22: 
2026-08-28T04:08:52.7515430Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-08-28T04:08:52.7519228Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:178
2026-08-28T04:08:52.7523593Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-08-28T04:08:52.7525201Z         	Error:      	Received unexpected error:
2026-08-28T04:08:52.7526939Z         	            	unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-08-28T04:08:52.7528009Z         	Test:       	TestAccSearchIndexAPI_basic
2026-08-28T04:08:52.7528668Z --- FAIL: TestAccSearchIndexAPI_basic (938.31s)
```

- 2026-08-29 PASS an hour
- 2026-08-30: MISSING
- 2026-08-31 PASS 38 minutes
- 2026-09-01 PASS an hour
- 2026-09-02 PASS 2 hours
- 2026-09-03
  - PASS 2 hours
  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0668173Z === RUN   TestAccSearchIndexAPI_basic
2026-09-03T10:02:47.0669747Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-3492182154586914006
2026-09-03T10:02:47.0670921Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-571919649677458254
2026-09-03T10:02:47.0672029Z 2026/09/03 06:32:16 [DEBUG] Waiting for state to become: [IDLE]
2026-09-03T10:02:47.0672633Z 2026/09/03 06:35:16 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0673451Z 2026/09/03 06:36:16 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0673956Z 2026/09/03 06:36:27 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0674457Z 2026/09/03 06:37:27 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0674943Z 2026/09/03 06:37:37 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0675421Z 2026/09/03 06:38:37 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0675905Z 2026/09/03 06:38:47 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0676391Z 2026/09/03 06:39:47 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0676876Z 2026/09/03 06:39:57 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0677357Z 2026/09/03 06:40:58 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0677847Z 2026/09/03 06:41:08 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0678330Z 2026/09/03 06:42:08 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0678816Z 2026/09/03 06:42:18 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0679564Z 2026/09/03 06:43:18 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0680050Z 2026/09/03 06:43:28 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0680530Z 2026/09/03 06:44:29 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0681005Z 2026/09/03 06:44:39 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0681540Z 2026/09/03 06:45:39 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-03T10:02:47.0682076Z 2026/09/03 06:46:39 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0682555Z 2026/09/03 06:47:40 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0683034Z 2026/09/03 06:47:50 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0683525Z 2026/09/03 06:48:50 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0684004Z 2026/09/03 06:49:00 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0693460Z === CONT  TestAccSearchIndexAPI_basic
2026-09-03T10:02:47.0748778Z === NAME  TestAccSearchIndexAPI_basic
2026-09-03T10:02:47.0749625Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-09-03T10:02:47.0750080Z         
2026-09-03T10:02:47.0750467Z         Error: Error waiting for changes in Create
2026-09-03T10:02:47.0750820Z         
2026-09-03T10:02:47.0751203Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0751955Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0752659Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0753045Z         
2026-09-03T10:02:47.0753385Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0753880Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0754510Z         index_id="6a99189a8f4e31db6818c200": timeout while waiting for state to
2026-09-03T10:02:47.0755181Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0755890Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-03T10:02:47.0756638Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-03T10:02:47.0757223Z --- FAIL: TestAccSearchIndexAPI_basic (11871.18s)
```

- 2026-09-04 PASS 35 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS an hour
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
