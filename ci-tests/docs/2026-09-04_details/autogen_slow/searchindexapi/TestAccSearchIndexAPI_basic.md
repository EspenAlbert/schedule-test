# autogen_slow/searchindexapi/TestAccSearchIndexAPI_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-14 01:22](#error-2026-08-14t0122180000) |  | dev |  | 867.09s
[2026-08-27 03:09](#error-2026-08-27t0309330000) |  | dev |  | 940.01s
[2026-08-28 04:08](#error-2026-08-28t0408520000) |  | dev |  | 938.03s
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 11871.02s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS an hour
- 2026-08-07 PASS 57 minutes
- 2026-08-08 PASS 34 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 33 minutes
- 2026-08-11 PASS 39 minutes
- 2026-08-12 PASS 51 minutes
- 2026-08-13 PASS 50 minutes
- 2026-08-14

### Error 2026-08-14T01:22:18+00:00
```
2026-08-14T01:22:18.1394583Z === RUN   TestAccSearchIndexAPI_basic
2026-08-14T01:22:18.1395251Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-1420435862004403352
2026-08-14T01:22:18.1395984Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-4366285902860641581
2026-08-14T01:22:18.1396522Z 2026/08/14 00:33:40 [DEBUG] Waiting for state to become: [IDLE]
2026-08-14T01:22:18.1396956Z 2026/08/14 00:36:40 [TRACE] Waiting 1m0s before next try
2026-08-14T01:22:18.1397371Z 2026/08/14 00:37:41 [TRACE] Waiting 10s before next try
2026-08-14T01:22:18.1398029Z 2026/08/14 00:37:51 [TRACE] Waiting 1m0s before next try
2026-08-14T01:22:18.1398426Z 2026/08/14 00:38:51 [TRACE] Waiting 10s before next try
2026-08-14T01:22:18.1398818Z 2026/08/14 00:39:01 [TRACE] Waiting 1m0s before next try
2026-08-14T01:22:18.1399198Z 2026/08/14 00:40:01 [TRACE] Waiting 10s before next try
2026-08-14T01:22:18.1399568Z 2026/08/14 00:40:12 [TRACE] Waiting 1m0s before next try
2026-08-14T01:22:18.1399984Z 2026/08/14 00:41:12 [TRACE] Waiting 10s before next try
2026-08-14T01:22:18.1400338Z 2026/08/14 00:41:22 [TRACE] Waiting 1m0s before next try
2026-08-14T01:22:18.1400698Z 2026/08/14 00:42:22 [TRACE] Waiting 10s before next try
2026-08-14T01:22:18.1401059Z 2026/08/14 00:42:32 [TRACE] Waiting 1m0s before next try
2026-08-14T01:22:18.1401427Z 2026/08/14 00:43:33 [TRACE] Waiting 10s before next try
2026-08-14T01:22:18.1402025Z 2026/08/14 00:43:43 [TRACE] Waiting 1m0s before next try
2026-08-14T01:22:18.1402411Z 2026/08/14 00:44:43 [TRACE] Waiting 10s before next try
2026-08-14T01:22:18.1402780Z 2026/08/14 00:44:53 [TRACE] Waiting 1m0s before next try
2026-08-14T01:22:18.1403141Z 2026/08/14 00:45:54 [TRACE] Waiting 10s before next try
2026-08-14T01:22:18.1403529Z 2026/08/14 00:46:04 [TRACE] Waiting 1m0s before next try
2026-08-14T01:22:18.1403959Z 2026/08/14 00:47:04 [DEBUG] Waiting for state to become: [COMPLETED]
2026-08-14T01:22:18.1404389Z     resource_test.go:22: 
2026-08-14T01:22:18.1405526Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:198
2026-08-14T01:22:18.1407543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-08-14T01:22:18.1408373Z         	Error:      	Received unexpected error:
2026-08-14T01:22:18.1409286Z         	            	unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-08-14T01:22:18.1410047Z         	Test:       	TestAccSearchIndexAPI_basic
2026-08-14T01:22:18.1410432Z --- FAIL: TestAccSearchIndexAPI_basic (867.89s)
```

- 2026-08-15 PASS an hour
- 2026-08-16: MISSING
- 2026-08-17 PASS 37 minutes
- 2026-08-18 PASS 34 minutes
- 2026-08-19 PASS an hour
- 2026-08-20 PASS an hour
- 2026-08-21 PASS an hour
- 2026-08-22 PASS an hour
- 2026-08-23: MISSING
- 2026-08-24 PASS 57 minutes
- 2026-08-25 PASS 35 minutes
- 2026-08-26 PASS 46 minutes
- 2026-08-27
  - FAIL 15 minutes

### Error 2026-08-27T03:09:33+00:00
```
2026-08-27T03:09:33.5306388Z === RUN   TestAccSearchIndexAPI_basic
2026-08-27T03:09:33.5308315Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-948992123363940925
2026-08-27T03:09:33.5310872Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-3874715849736483179
2026-08-27T03:09:33.5312600Z 2026/08/27 01:47:40 [DEBUG] Waiting for state to become: [IDLE]
2026-08-27T03:09:33.5313841Z 2026/08/27 01:50:41 [TRACE] Waiting 1m0s before next try
2026-08-27T03:09:33.5314992Z 2026/08/27 01:51:41 [TRACE] Waiting 10s before next try
2026-08-27T03:09:33.5315849Z 2026/08/27 01:51:51 [TRACE] Waiting 1m0s before next try
2026-08-27T03:09:33.5316704Z 2026/08/27 01:52:52 [TRACE] Waiting 10s before next try
2026-08-27T03:09:33.5317540Z 2026/08/27 01:53:02 [TRACE] Waiting 1m0s before next try
2026-08-27T03:09:33.5318379Z 2026/08/27 01:54:02 [TRACE] Waiting 10s before next try
2026-08-27T03:09:33.5319209Z 2026/08/27 01:54:12 [TRACE] Waiting 1m0s before next try
2026-08-27T03:09:33.5320051Z 2026/08/27 01:55:13 [TRACE] Waiting 10s before next try
2026-08-27T03:09:33.5321157Z 2026/08/27 01:55:23 [TRACE] Waiting 1m0s before next try
2026-08-27T03:09:33.5322037Z 2026/08/27 01:56:23 [TRACE] Waiting 10s before next try
2026-08-27T03:09:33.5322881Z 2026/08/27 01:56:33 [TRACE] Waiting 1m0s before next try
2026-08-27T03:09:33.5323663Z 2026/08/27 01:57:34 [TRACE] Waiting 10s before next try
2026-08-27T03:09:33.5324385Z 2026/08/27 01:57:44 [TRACE] Waiting 1m0s before next try
2026-08-27T03:09:33.5325103Z 2026/08/27 01:58:44 [TRACE] Waiting 10s before next try
2026-08-27T03:09:33.5325806Z 2026/08/27 01:58:55 [TRACE] Waiting 1m0s before next try
2026-08-27T03:09:33.5326533Z 2026/08/27 01:59:55 [TRACE] Waiting 10s before next try
2026-08-27T03:09:33.5327277Z 2026/08/27 02:00:05 [TRACE] Waiting 1m0s before next try
2026-08-27T03:09:33.5327978Z 2026/08/27 02:01:06 [TRACE] Waiting 10s before next try
2026-08-27T03:09:33.5328665Z 2026/08/27 02:01:16 [TRACE] Waiting 1m0s before next try
2026-08-27T03:09:33.5329434Z 2026/08/27 02:02:17 [DEBUG] Waiting for state to become: [COMPLETED]
2026-08-27T03:09:33.5330212Z     resource_test.go:22: 
2026-08-27T03:09:33.5334214Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-08-27T03:09:33.5337869Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:178
2026-08-27T03:09:33.5342240Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-08-27T03:09:33.5343907Z         	Error:      	Received unexpected error:
2026-08-27T03:09:33.5345613Z         	            	unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-08-27T03:09:33.5346685Z         	Test:       	TestAccSearchIndexAPI_basic
2026-08-27T03:09:33.5347351Z --- FAIL: TestAccSearchIndexAPI_basic (940.10s)
```

  - PASS 37 minutes
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
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-23 01:14](#error-2026-08-23t0114430000) |  | qa | timeout | 1709.05s
[2026-08-27 10:57](#error-2026-08-27t1057010000) |  | qa | flaky_client | 389.04s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS an hour
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS an hour
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 48 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23

### Error 2026-08-23T01:14:43+00:00
```
2026-08-23T01:14:43.8569540Z === RUN   TestAccSearchIndexAPI_basic
2026-08-23T01:14:43.8570253Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-8909096983030194506
2026-08-23T01:14:43.8570838Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-5960356520266734261
2026-08-23T01:14:43.8571354Z 2026/08/23 00:22:28 [DEBUG] Waiting for state to become: [IDLE]
2026-08-23T01:14:43.8571770Z 2026/08/23 00:25:29 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8572162Z 2026/08/23 00:26:29 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8572884Z 2026/08/23 00:26:39 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8573270Z 2026/08/23 00:27:40 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8573659Z 2026/08/23 00:27:50 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8574038Z 2026/08/23 00:28:50 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8574431Z 2026/08/23 00:29:00 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8574867Z 2026/08/23 00:30:01 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8575240Z 2026/08/23 00:30:11 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8575619Z 2026/08/23 00:31:11 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8576024Z 2026/08/23 00:31:21 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8576411Z 2026/08/23 00:32:22 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8576791Z 2026/08/23 00:32:32 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8577141Z 2026/08/23 00:33:32 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8577530Z 2026/08/23 00:33:43 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8577926Z 2026/08/23 00:34:43 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8578286Z 2026/08/23 00:34:53 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8578714Z 2026/08/23 00:35:54 [DEBUG] Waiting for state to become: [COMPLETED]
2026-08-23T01:14:43.8579125Z 2026/08/23 00:36:54 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8579514Z 2026/08/23 00:37:54 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8580037Z 2026/08/23 00:38:04 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8580451Z 2026/08/23 00:39:05 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8580828Z 2026/08/23 00:39:15 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8581220Z 2026/08/23 00:40:15 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8581575Z 2026/08/23 00:40:25 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8581964Z 2026/08/23 00:41:25 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8582485Z 2026/08/23 00:41:35 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8582902Z 2026/08/23 00:42:36 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8583252Z 2026/08/23 00:42:46 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8583660Z 2026/08/23 00:43:46 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8584003Z 2026/08/23 00:43:56 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8584391Z 2026/08/23 00:44:56 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8584738Z 2026/08/23 00:45:06 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8585144Z 2026/08/23 00:46:07 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8585498Z 2026/08/23 00:46:17 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8585886Z 2026/08/23 00:47:17 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8586231Z 2026/08/23 00:47:27 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8586630Z 2026/08/23 00:48:28 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8587007Z 2026/08/23 00:48:38 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8587391Z 2026/08/23 00:49:38 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8587765Z 2026/08/23 00:49:48 [TRACE] Waiting 1m0s before next try
2026-08-23T01:14:43.8588164Z 2026/08/23 00:50:49 [TRACE] Waiting 10s before next try
2026-08-23T01:14:43.8588588Z 2026/08/23 00:50:54 [WARN] WaitForState timeout after 15m0s
2026-08-23T01:14:43.8589036Z 2026/08/23 00:50:54 [WARN] WaitForState starting 30s refresh grace period
2026-08-23T01:14:43.8589467Z     resource_test.go:22: 
2026-08-23T01:14:43.8592102Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:198
2026-08-23T01:14:43.8593791Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-08-23T01:14:43.8594623Z         	Error:      	Received unexpected error:
2026-08-23T01:14:43.8595721Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-08-23T01:14:43.8596440Z         	Test:       	TestAccSearchIndexAPI_basic
2026-08-23T01:14:43.8596912Z --- FAIL: TestAccSearchIndexAPI_basic (1709.45s)
```

- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27

### Error 2026-08-27T10:57:01+00:00
```
2026-08-27T10:57:01.7790212Z === RUN   TestAccSearchIndexAPI_basic
2026-08-27T10:57:01.7791388Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-863616980440053323
2026-08-27T10:57:01.7792612Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-2466243170825042105
2026-08-27T10:57:01.7793582Z 2026/08/27 08:28:02 [DEBUG] Waiting for state to become: [IDLE]
2026-08-27T10:57:01.7794307Z 2026/08/27 08:31:02 [TRACE] Waiting 1m0s before next try
2026-08-27T10:57:01.7795342Z 2026/08/27 08:32:03 [TRACE] Waiting 10s before next try
2026-08-27T10:57:01.7796054Z 2026/08/27 08:32:13 [TRACE] Waiting 1m0s before next try
2026-08-27T10:57:01.7796763Z 2026/08/27 08:33:13 [TRACE] Waiting 10s before next try
2026-08-27T10:57:01.7797436Z 2026/08/27 08:33:24 [TRACE] Waiting 1m0s before next try
2026-08-27T10:57:01.7798113Z     resource_test.go:22: 
2026-08-27T10:57:01.7802020Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:49
2026-08-27T10:57:01.7805568Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:199
2026-08-27T10:57:01.7809452Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:178
2026-08-27T10:57:01.7813353Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-08-27T10:57:01.7814894Z         	Error:      	Received unexpected error:
2026-08-27T10:57:01.7818147Z         	            	Get "https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a8ff50f3c85539dfd68e6ee/clusters/test-acc-tf-c-2466243170825042105": dial tcp: lookup cloud-qa.mongodb.com: i/o timeout
2026-08-27T10:57:01.7820187Z         	Test:       	TestAccSearchIndexAPI_basic
2026-08-27T10:57:01.7823219Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2466243170825042105, err: Get "https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a8ff50f3c85539dfd68e6ee/clusters/test-acc-tf-c-2466243170825042105": dial tcp: lookup cloud-qa.mongodb.com: i/o timeout
2026-08-27T10:57:01.7825233Z --- FAIL: TestAccSearchIndexAPI_basic (389.44s)
```

- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS an hour
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
