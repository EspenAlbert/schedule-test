# search_index/searchindex/TestAccSearchIndex_withSearchType Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 01:07](#error-2026-01-31t0107330000) |  | dev | timeout | 3601.00s
[2026-02-02 03:38](#error-2026-02-02t0338340000) |  | dev | timeout | 3600.06s
[2026-02-03 00:39](#error-2026-02-03t0039200000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters | dev | out_of_capacity | 0.05s
[2026-02-24 00:50](#error-2026-02-24t0050170000) |  | dev | flaky_500 | 1.08s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 6 seconds
- 2026-01-27 PASS 6 seconds
- 2026-01-28 PASS 6 seconds
- 2026-01-29 PASS 8 seconds
- 2026-01-30 PASS 7 seconds
- 2026-01-31

### Error 2026-01-31T01:07:33+00:00
```
2026-01-31T01:07:33.0945570Z === RUN   TestAccSearchIndex_withSearchType
2026-01-31T01:07:33.0946587Z     resource_search_index_test.go:22: Creating execution cluster: test-acc-tf-c-4789187249654322829
2026-01-31T01:07:34.1000694Z 2026/01/31 01:07:34 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T01:10:34.4975704Z 2026/01/31 01:10:34 [TRACE] Waiting 1m0s before next try
2026-01-31T01:11:34.9011858Z 2026/01/31 01:11:34 [TRACE] Waiting 10s before next try
2026-01-31T01:11:45.1462506Z 2026/01/31 01:11:45 [TRACE] Waiting 1m0s before next try
2026-01-31T01:12:45.5266364Z 2026/01/31 01:12:45 [TRACE] Waiting 10s before next try
2026-01-31T01:12:55.7646515Z 2026/01/31 01:12:55 [TRACE] Waiting 1m0s before next try
2026-01-31T01:13:56.1648273Z 2026/01/31 01:13:56 [TRACE] Waiting 10s before next try
2026-01-31T01:14:06.4226329Z 2026/01/31 01:14:06 [TRACE] Waiting 1m0s before next try
2026-01-31T01:15:06.8170965Z 2026/01/31 01:15:06 [TRACE] Waiting 10s before next try
2026-01-31T01:15:17.0752513Z 2026/01/31 01:15:17 [TRACE] Waiting 1m0s before next try
2026-01-31T01:16:17.5233643Z 2026/01/31 01:16:17 [TRACE] Waiting 10s before next try
2026-01-31T01:16:27.8059004Z 2026/01/31 01:16:27 [TRACE] Waiting 1m0s before next try
2026-01-31T01:17:28.2375051Z 2026/01/31 01:17:28 [TRACE] Waiting 10s before next try
2026-01-31T01:17:38.5141566Z 2026/01/31 01:17:38 [TRACE] Waiting 1m0s before next try
2026-01-31T01:18:39.0049732Z 2026/01/31 01:18:39 [TRACE] Waiting 10s before next try
2026-01-31T01:18:49.2806072Z 2026/01/31 01:18:49 [TRACE] Waiting 1m0s before next try
2026-01-31T01:19:49.7527437Z 2026/01/31 01:19:49 [TRACE] Waiting 10s before next try
2026-01-31T01:20:00.0295848Z 2026/01/31 01:20:00 [TRACE] Waiting 1m0s before next try
2026-01-31T01:21:00.4437944Z 2026/01/31 01:21:00 [TRACE] Waiting 10s before next try
2026-01-31T01:21:10.7184587Z 2026/01/31 01:21:10 [TRACE] Waiting 1m0s before next try
2026-01-31T01:22:11.1716811Z 2026/01/31 01:22:11 [TRACE] Waiting 10s before next try
2026-01-31T01:22:21.4523189Z 2026/01/31 01:22:21 [TRACE] Waiting 1m0s before next try
2026-01-31T01:23:21.8509920Z 2026/01/31 01:23:21 [TRACE] Waiting 10s before next try
2026-01-31T01:23:32.1129914Z 2026/01/31 01:23:32 [TRACE] Waiting 1m0s before next try
2026-01-31T01:24:32.5563337Z 2026/01/31 01:24:32 [TRACE] Waiting 10s before next try
2026-01-31T01:24:42.8077595Z 2026/01/31 01:24:42 [TRACE] Waiting 1m0s before next try
2026-01-31T01:25:43.3566792Z 2026/01/31 01:25:43 [TRACE] Waiting 10s before next try
2026-01-31T01:25:53.6345375Z 2026/01/31 01:25:53 [TRACE] Waiting 1m0s before next try
2026-01-31T01:26:54.0900317Z 2026/01/31 01:26:54 [TRACE] Waiting 10s before next try
2026-01-31T01:27:04.3559271Z 2026/01/31 01:27:04 [TRACE] Waiting 1m0s before next try
2026-01-31T01:28:04.7547629Z 2026/01/31 01:28:04 [TRACE] Waiting 10s before next try
2026-01-31T01:28:15.0159533Z 2026/01/31 01:28:15 [TRACE] Waiting 1m0s before next try
2026-01-31T01:29:15.4359886Z 2026/01/31 01:29:15 [TRACE] Waiting 10s before next try
2026-01-31T01:29:25.6849445Z 2026/01/31 01:29:25 [TRACE] Waiting 1m0s before next try
2026-01-31T01:30:26.0825909Z 2026/01/31 01:30:26 [TRACE] Waiting 10s before next try
2026-01-31T01:30:36.3488151Z 2026/01/31 01:30:36 [TRACE] Waiting 1m0s before next try
2026-01-31T01:31:36.7632192Z 2026/01/31 01:31:36 [TRACE] Waiting 10s before next try
2026-01-31T01:31:47.0127830Z 2026/01/31 01:31:47 [TRACE] Waiting 1m0s before next try
2026-01-31T01:32:47.4425122Z 2026/01/31 01:32:47 [TRACE] Waiting 10s before next try
2026-01-31T01:32:57.6991981Z 2026/01/31 01:32:57 [TRACE] Waiting 1m0s before next try
2026-01-31T01:33:58.1166917Z 2026/01/31 01:33:58 [TRACE] Waiting 10s before next try
2026-01-31T01:34:08.3602839Z 2026/01/31 01:34:08 [TRACE] Waiting 1m0s before next try
2026-01-31T01:35:08.7856333Z 2026/01/31 01:35:08 [TRACE] Waiting 10s before next try
2026-01-31T01:35:19.0440732Z 2026/01/31 01:35:19 [TRACE] Waiting 1m0s before next try
2026-01-31T01:36:19.4346256Z 2026/01/31 01:36:19 [TRACE] Waiting 10s before next try
2026-01-31T01:36:29.6918337Z 2026/01/31 01:36:29 [TRACE] Waiting 1m0s before next try
2026-01-31T01:37:30.0909025Z 2026/01/31 01:37:30 [TRACE] Waiting 10s before next try
2026-01-31T01:37:40.3549227Z 2026/01/31 01:37:40 [TRACE] Waiting 1m0s before next try
2026-01-31T01:38:40.7624904Z 2026/01/31 01:38:40 [TRACE] Waiting 10s before next try
2026-01-31T01:38:51.0121553Z 2026/01/31 01:38:51 [TRACE] Waiting 1m0s before next try
2026-01-31T01:39:51.4447028Z 2026/01/31 01:39:51 [TRACE] Waiting 10s before next try
2026-01-31T01:40:01.7142799Z 2026/01/31 01:40:01 [TRACE] Waiting 1m0s before next try
2026-01-31T01:41:02.1765848Z 2026/01/31 01:41:02 [TRACE] Waiting 10s before next try
2026-01-31T01:41:12.4463228Z 2026/01/31 01:41:12 [TRACE] Waiting 1m0s before next try
2026-01-31T01:42:12.8581429Z 2026/01/31 01:42:12 [TRACE] Waiting 10s before next try
2026-01-31T01:42:23.1145703Z 2026/01/31 01:42:23 [TRACE] Waiting 1m0s before next try
2026-01-31T01:43:23.5436262Z 2026/01/31 01:43:23 [TRACE] Waiting 10s before next try
2026-01-31T01:43:33.8008469Z 2026/01/31 01:43:33 [TRACE] Waiting 1m0s before next try
2026-01-31T01:44:34.2003458Z 2026/01/31 01:44:34 [TRACE] Waiting 10s before next try
2026-01-31T01:44:44.4640118Z 2026/01/31 01:44:44 [TRACE] Waiting 1m0s before next try
2026-01-31T01:45:44.8967478Z 2026/01/31 01:45:44 [TRACE] Waiting 10s before next try
2026-01-31T01:45:55.1524351Z 2026/01/31 01:45:55 [TRACE] Waiting 1m0s before next try
2026-01-31T01:46:55.5659960Z 2026/01/31 01:46:55 [TRACE] Waiting 10s before next try
2026-01-31T01:47:05.8372186Z 2026/01/31 01:47:05 [TRACE] Waiting 1m0s before next try
2026-01-31T01:48:06.2765749Z 2026/01/31 01:48:06 [TRACE] Waiting 10s before next try
2026-01-31T01:48:16.5425833Z 2026/01/31 01:48:16 [TRACE] Waiting 1m0s before next try
2026-01-31T01:49:16.9831026Z 2026/01/31 01:49:16 [TRACE] Waiting 10s before next try
2026-01-31T01:49:27.2496561Z 2026/01/31 01:49:27 [TRACE] Waiting 1m0s before next try
2026-01-31T01:50:27.6772347Z 2026/01/31 01:50:27 [TRACE] Waiting 10s before next try
2026-01-31T01:50:37.9073722Z 2026/01/31 01:50:37 [TRACE] Waiting 1m0s before next try
2026-01-31T01:51:38.3212351Z 2026/01/31 01:51:38 [TRACE] Waiting 10s before next try
2026-01-31T01:51:48.5625474Z 2026/01/31 01:51:48 [TRACE] Waiting 1m0s before next try
2026-01-31T01:52:48.9520099Z 2026/01/31 01:52:48 [TRACE] Waiting 10s before next try
2026-01-31T01:52:59.1890800Z 2026/01/31 01:52:59 [TRACE] Waiting 1m0s before next try
2026-01-31T01:53:59.5764298Z 2026/01/31 01:53:59 [TRACE] Waiting 10s before next try
2026-01-31T01:54:09.8204196Z 2026/01/31 01:54:09 [TRACE] Waiting 1m0s before next try
2026-01-31T01:55:10.2298908Z 2026/01/31 01:55:10 [TRACE] Waiting 10s before next try
2026-01-31T01:55:20.4765368Z 2026/01/31 01:55:20 [TRACE] Waiting 1m0s before next try
2026-01-31T01:56:20.8961424Z 2026/01/31 01:56:20 [TRACE] Waiting 10s before next try
2026-01-31T01:56:31.1679161Z 2026/01/31 01:56:31 [TRACE] Waiting 1m0s before next try
2026-01-31T01:57:31.5489762Z 2026/01/31 01:57:31 [TRACE] Waiting 10s before next try
2026-01-31T01:57:41.8153751Z 2026/01/31 01:57:41 [TRACE] Waiting 1m0s before next try
2026-01-31T01:58:42.2429902Z 2026/01/31 01:58:42 [TRACE] Waiting 10s before next try
2026-01-31T01:58:52.5003174Z 2026/01/31 01:58:52 [TRACE] Waiting 1m0s before next try
2026-01-31T01:59:52.9290021Z 2026/01/31 01:59:52 [TRACE] Waiting 10s before next try
2026-01-31T02:00:03.1891749Z 2026/01/31 02:00:03 [TRACE] Waiting 1m0s before next try
2026-01-31T02:01:03.5888790Z 2026/01/31 02:01:03 [TRACE] Waiting 10s before next try
2026-01-31T02:01:13.8218296Z 2026/01/31 02:01:13 [TRACE] Waiting 1m0s before next try
2026-01-31T02:02:14.2176324Z 2026/01/31 02:02:14 [TRACE] Waiting 10s before next try
2026-01-31T02:02:24.4420007Z 2026/01/31 02:02:24 [TRACE] Waiting 1m0s before next try
2026-01-31T02:03:24.8720126Z 2026/01/31 02:03:24 [TRACE] Waiting 10s before next try
2026-01-31T02:03:35.1113610Z 2026/01/31 02:03:35 [TRACE] Waiting 1m0s before next try
2026-01-31T02:04:35.5066500Z 2026/01/31 02:04:35 [TRACE] Waiting 10s before next try
2026-01-31T02:04:45.7555022Z 2026/01/31 02:04:45 [TRACE] Waiting 1m0s before next try
2026-01-31T02:05:46.1625016Z 2026/01/31 02:05:46 [TRACE] Waiting 10s before next try
2026-01-31T02:05:56.4324160Z 2026/01/31 02:05:56 [TRACE] Waiting 1m0s before next try
2026-01-31T02:06:56.8621094Z 2026/01/31 02:06:56 [TRACE] Waiting 10s before next try
2026-01-31T02:07:07.0869373Z 2026/01/31 02:07:07 [TRACE] Waiting 1m0s before next try
2026-01-31T02:07:34.1002716Z 2026/01/31 02:07:34 [WARN] WaitForState timeout after 1h0m0s
2026-01-31T02:07:34.1003801Z 2026/01/31 02:07:34 [WARN] WaitForState starting 30s refresh grace period
2026-01-31T02:07:34.1004898Z     resource_search_index_test.go:22: 
2026-01-31T02:07:34.1007223Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T02:07:34.1009295Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T02:07:34.1011327Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:22
2026-01-31T02:07:34.1012154Z         	Error:      	Received unexpected error:
2026-01-31T02:07:34.1013147Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T02:07:34.1013769Z         	Test:       	TestAccSearchIndex_withSearchType
2026-01-31T02:07:34.1015303Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4789187249654322829, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T02:07:34.1016089Z --- FAIL: TestAccSearchIndex_withSearchType (3601.01s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:38:34+00:00
```
2026-02-02T03:38:34.0531738Z === RUN   TestAccSearchIndex_withSearchType
2026-02-02T03:38:34.0532323Z     resource_search_index_test.go:22: Creating execution cluster: test-acc-tf-c-8226551282554739710
2026-02-02T03:38:34.6935074Z 2026/02/02 03:38:34 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T03:41:34.9432994Z 2026/02/02 03:41:34 [TRACE] Waiting 1m0s before next try
2026-02-02T03:42:35.1726196Z 2026/02/02 03:42:35 [TRACE] Waiting 10s before next try
2026-02-02T03:42:45.3101781Z 2026/02/02 03:42:45 [TRACE] Waiting 1m0s before next try
2026-02-02T03:43:45.4732601Z 2026/02/02 03:43:45 [TRACE] Waiting 10s before next try
2026-02-02T03:43:55.5928200Z 2026/02/02 03:43:55 [TRACE] Waiting 1m0s before next try
2026-02-02T03:44:55.7748145Z 2026/02/02 03:44:55 [TRACE] Waiting 10s before next try
2026-02-02T03:45:05.9270006Z 2026/02/02 03:45:05 [TRACE] Waiting 1m0s before next try
2026-02-02T03:46:06.1027036Z 2026/02/02 03:46:06 [TRACE] Waiting 10s before next try
2026-02-02T03:46:16.2240461Z 2026/02/02 03:46:16 [TRACE] Waiting 1m0s before next try
2026-02-02T03:47:16.4898761Z 2026/02/02 03:47:16 [TRACE] Waiting 10s before next try
2026-02-02T03:47:26.6186795Z 2026/02/02 03:47:26 [TRACE] Waiting 1m0s before next try
2026-02-02T03:48:26.8436556Z 2026/02/02 03:48:26 [TRACE] Waiting 10s before next try
2026-02-02T03:48:36.9585583Z 2026/02/02 03:48:36 [TRACE] Waiting 1m0s before next try
2026-02-02T03:49:37.1910281Z 2026/02/02 03:49:37 [TRACE] Waiting 10s before next try
2026-02-02T03:49:47.3759056Z 2026/02/02 03:49:47 [TRACE] Waiting 1m0s before next try
2026-02-02T03:50:47.5877003Z 2026/02/02 03:50:47 [TRACE] Waiting 10s before next try
2026-02-02T03:50:57.7255499Z 2026/02/02 03:50:57 [TRACE] Waiting 1m0s before next try
2026-02-02T03:51:57.8839676Z 2026/02/02 03:51:57 [TRACE] Waiting 10s before next try
2026-02-02T03:52:08.0227022Z 2026/02/02 03:52:08 [TRACE] Waiting 1m0s before next try
2026-02-02T03:53:08.1855116Z 2026/02/02 03:53:08 [TRACE] Waiting 10s before next try
2026-02-02T03:53:18.3060291Z 2026/02/02 03:53:18 [TRACE] Waiting 1m0s before next try
2026-02-02T03:54:18.5141813Z 2026/02/02 03:54:18 [TRACE] Waiting 10s before next try
2026-02-02T03:54:28.6467401Z 2026/02/02 03:54:28 [TRACE] Waiting 1m0s before next try
2026-02-02T03:55:28.9315450Z 2026/02/02 03:55:28 [TRACE] Waiting 10s before next try
2026-02-02T03:55:39.0604170Z 2026/02/02 03:55:39 [TRACE] Waiting 1m0s before next try
2026-02-02T03:56:39.2979112Z 2026/02/02 03:56:39 [TRACE] Waiting 10s before next try
2026-02-02T03:56:49.4331072Z 2026/02/02 03:56:49 [TRACE] Waiting 1m0s before next try
2026-02-02T03:57:49.6918259Z 2026/02/02 03:57:49 [TRACE] Waiting 10s before next try
2026-02-02T03:57:59.8162392Z 2026/02/02 03:57:59 [TRACE] Waiting 1m0s before next try
2026-02-02T03:58:59.9502367Z 2026/02/02 03:58:59 [TRACE] Waiting 10s before next try
2026-02-02T03:59:10.0792262Z 2026/02/02 03:59:10 [TRACE] Waiting 1m0s before next try
2026-02-02T04:00:10.2496750Z 2026/02/02 04:00:10 [TRACE] Waiting 10s before next try
2026-02-02T04:00:20.3795442Z 2026/02/02 04:00:20 [TRACE] Waiting 1m0s before next try
2026-02-02T04:01:20.5331724Z 2026/02/02 04:01:20 [TRACE] Waiting 10s before next try
2026-02-02T04:01:30.6516300Z 2026/02/02 04:01:30 [TRACE] Waiting 1m0s before next try
2026-02-02T04:02:30.8002520Z 2026/02/02 04:02:30 [TRACE] Waiting 10s before next try
2026-02-02T04:02:40.9290587Z 2026/02/02 04:02:40 [TRACE] Waiting 1m0s before next try
2026-02-02T04:03:41.1015937Z 2026/02/02 04:03:41 [TRACE] Waiting 10s before next try
2026-02-02T04:03:51.2467693Z 2026/02/02 04:03:51 [TRACE] Waiting 1m0s before next try
2026-02-02T04:04:51.4017295Z 2026/02/02 04:04:51 [TRACE] Waiting 10s before next try
2026-02-02T04:05:01.5334506Z 2026/02/02 04:05:01 [TRACE] Waiting 1m0s before next try
2026-02-02T04:06:01.7154940Z 2026/02/02 04:06:01 [TRACE] Waiting 10s before next try
2026-02-02T04:06:11.8755139Z 2026/02/02 04:06:11 [TRACE] Waiting 1m0s before next try
2026-02-02T04:07:12.0750409Z 2026/02/02 04:07:12 [TRACE] Waiting 10s before next try
2026-02-02T04:07:22.2109561Z 2026/02/02 04:07:22 [TRACE] Waiting 1m0s before next try
2026-02-02T04:08:22.4327019Z 2026/02/02 04:08:22 [TRACE] Waiting 10s before next try
2026-02-02T04:08:32.5543281Z 2026/02/02 04:08:32 [TRACE] Waiting 1m0s before next try
2026-02-02T04:09:32.8827322Z 2026/02/02 04:09:32 [TRACE] Waiting 10s before next try
2026-02-02T04:09:42.9964749Z 2026/02/02 04:09:42 [TRACE] Waiting 1m0s before next try
2026-02-02T04:10:43.1751013Z 2026/02/02 04:10:43 [TRACE] Waiting 10s before next try
2026-02-02T04:10:53.2984044Z 2026/02/02 04:10:53 [TRACE] Waiting 1m0s before next try
2026-02-02T04:11:53.4873376Z 2026/02/02 04:11:53 [TRACE] Waiting 10s before next try
2026-02-02T04:12:03.6062612Z 2026/02/02 04:12:03 [TRACE] Waiting 1m0s before next try
2026-02-02T04:13:03.8191558Z 2026/02/02 04:13:03 [TRACE] Waiting 10s before next try
2026-02-02T04:13:13.9516246Z 2026/02/02 04:13:13 [TRACE] Waiting 1m0s before next try
2026-02-02T04:14:14.1387269Z 2026/02/02 04:14:14 [TRACE] Waiting 10s before next try
2026-02-02T04:14:24.2595168Z 2026/02/02 04:14:24 [TRACE] Waiting 1m0s before next try
2026-02-02T04:15:24.4387215Z 2026/02/02 04:15:24 [TRACE] Waiting 10s before next try
2026-02-02T04:15:34.5637819Z 2026/02/02 04:15:34 [TRACE] Waiting 1m0s before next try
2026-02-02T04:16:34.7903008Z 2026/02/02 04:16:34 [TRACE] Waiting 10s before next try
2026-02-02T04:16:44.9265261Z 2026/02/02 04:16:44 [TRACE] Waiting 1m0s before next try
2026-02-02T04:17:45.1079011Z 2026/02/02 04:17:45 [TRACE] Waiting 10s before next try
2026-02-02T04:17:55.2408276Z 2026/02/02 04:17:55 [TRACE] Waiting 1m0s before next try
2026-02-02T04:18:55.4762244Z 2026/02/02 04:18:55 [TRACE] Waiting 10s before next try
2026-02-02T04:19:05.6371983Z 2026/02/02 04:19:05 [TRACE] Waiting 1m0s before next try
2026-02-02T04:20:05.8262046Z 2026/02/02 04:20:05 [TRACE] Waiting 10s before next try
2026-02-02T04:20:16.1841144Z 2026/02/02 04:20:16 [TRACE] Waiting 1m0s before next try
2026-02-02T04:21:16.4392209Z 2026/02/02 04:21:16 [TRACE] Waiting 10s before next try
2026-02-02T04:21:26.5726706Z 2026/02/02 04:21:26 [TRACE] Waiting 1m0s before next try
2026-02-02T04:22:26.8311376Z 2026/02/02 04:22:26 [TRACE] Waiting 10s before next try
2026-02-02T04:22:36.9607874Z 2026/02/02 04:22:36 [TRACE] Waiting 1m0s before next try
2026-02-02T04:23:37.1346983Z 2026/02/02 04:23:37 [TRACE] Waiting 10s before next try
2026-02-02T04:23:47.2614220Z 2026/02/02 04:23:47 [TRACE] Waiting 1m0s before next try
2026-02-02T04:24:47.4978420Z 2026/02/02 04:24:47 [TRACE] Waiting 10s before next try
2026-02-02T04:24:57.6215942Z 2026/02/02 04:24:57 [TRACE] Waiting 1m0s before next try
2026-02-02T04:25:57.7977855Z 2026/02/02 04:25:57 [TRACE] Waiting 10s before next try
2026-02-02T04:26:07.9198030Z 2026/02/02 04:26:07 [TRACE] Waiting 1m0s before next try
2026-02-02T04:27:08.1124406Z 2026/02/02 04:27:08 [TRACE] Waiting 10s before next try
2026-02-02T04:27:18.2307705Z 2026/02/02 04:27:18 [TRACE] Waiting 1m0s before next try
2026-02-02T04:28:18.4391497Z 2026/02/02 04:28:18 [TRACE] Waiting 10s before next try
2026-02-02T04:28:28.5622369Z 2026/02/02 04:28:28 [TRACE] Waiting 1m0s before next try
2026-02-02T04:29:28.7339022Z 2026/02/02 04:29:28 [TRACE] Waiting 10s before next try
2026-02-02T04:29:38.8662818Z 2026/02/02 04:29:38 [TRACE] Waiting 1m0s before next try
2026-02-02T04:30:39.0834822Z 2026/02/02 04:30:39 [TRACE] Waiting 10s before next try
2026-02-02T04:30:49.2310717Z 2026/02/02 04:30:49 [TRACE] Waiting 1m0s before next try
2026-02-02T04:31:49.4625504Z 2026/02/02 04:31:49 [TRACE] Waiting 10s before next try
2026-02-02T04:31:59.5846627Z 2026/02/02 04:31:59 [TRACE] Waiting 1m0s before next try
2026-02-02T04:32:59.9074784Z 2026/02/02 04:32:59 [TRACE] Waiting 10s before next try
2026-02-02T04:33:10.0850808Z 2026/02/02 04:33:10 [TRACE] Waiting 1m0s before next try
2026-02-02T04:34:10.2931256Z 2026/02/02 04:34:10 [TRACE] Waiting 10s before next try
2026-02-02T04:34:20.4160762Z 2026/02/02 04:34:20 [TRACE] Waiting 1m0s before next try
2026-02-02T04:35:20.5965292Z 2026/02/02 04:35:20 [TRACE] Waiting 10s before next try
2026-02-02T04:35:30.7222011Z 2026/02/02 04:35:30 [TRACE] Waiting 1m0s before next try
2026-02-02T04:36:30.8883316Z 2026/02/02 04:36:30 [TRACE] Waiting 10s before next try
2026-02-02T04:36:41.0258282Z 2026/02/02 04:36:41 [TRACE] Waiting 1m0s before next try
2026-02-02T04:37:41.1743786Z 2026/02/02 04:37:41 [TRACE] Waiting 10s before next try
2026-02-02T04:37:51.3072372Z 2026/02/02 04:37:51 [TRACE] Waiting 1m0s before next try
2026-02-02T04:38:34.6937965Z 2026/02/02 04:38:34 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T04:38:34.6939155Z 2026/02/02 04:38:34 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T04:38:34.6953287Z     resource_search_index_test.go:22: 
2026-02-02T04:38:34.6955111Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T04:38:34.6958504Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T04:38:34.6962034Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:22
2026-02-02T04:38:34.6963469Z         	Error:      	Received unexpected error:
2026-02-02T04:38:34.6965107Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T04:38:34.6966140Z         	Test:       	TestAccSearchIndex_withSearchType
2026-02-02T04:38:34.6968020Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8226551282554739710, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T04:38:34.6969635Z --- FAIL: TestAccSearchIndex_withSearchType (3600.64s)
```

- 2026-02-03

### Error 2026-02-03T00:39:20+00:00
```
2026-02-03T00:39:20.3247787Z === RUN   TestAccSearchIndex_withSearchType
2026-02-03T00:39:20.3248576Z     resource_search_index_test.go:22: Creating execution cluster: test-acc-tf-c-1716690094942960797
2026-02-03T00:39:20.7922414Z     resource_search_index_test.go:22: 
2026-02-03T00:39:20.7924621Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:20.7928456Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:20.7931648Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:22
2026-02-03T00:39:20.7932597Z         	Error:      	Received unexpected error:
2026-02-03T00:39:20.7935458Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:20.7936948Z         	Test:       	TestAccSearchIndex_withSearchType
2026-02-03T00:39:20.7939570Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1716690094942960797, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:20.7941550Z --- FAIL: TestAccSearchIndex_withSearchType (0.47s)
```

- 2026-02-04 PASS 8 seconds
- 2026-02-05 PASS 7 seconds
- 2026-02-06 PASS 7 seconds
- 2026-02-07 PASS 6 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 8 seconds
- 2026-02-10 PASS 7 seconds
- 2026-02-11 PASS 8 seconds
- 2026-02-12 PASS 7 seconds
- 2026-02-13 PASS 7 seconds
- 2026-02-14 PASS 8 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 8 seconds
- 2026-02-17 PASS 7 seconds
- 2026-02-18 PASS 6 seconds
- 2026-02-19 PASS 6 seconds
- 2026-02-20 PASS 8 seconds
- 2026-02-21 PASS 5 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 8 seconds
- 2026-02-24

### Error 2026-02-24T00:50:17+00:00
```
2026-02-24T00:50:17.1599043Z === RUN   TestAccSearchIndex_withSearchType
2026-02-24T01:03:37.6537188Z === CONT  TestAccSearchIndex_withSearchType
2026-02-24T01:03:39.2598563Z === NAME  TestAccSearchIndex_withSearchType
2026-02-24T01:03:39.2629068Z     resource_search_index_test.go:25: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:03:39.2630570Z         
2026-02-24T01:03:39.2633246Z         Error: error creating index: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:03:39.2635007Z         
2026-02-24T01:03:39.2635818Z           with mongodbatlas_search_index.test,
2026-02-24T01:03:39.2637416Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-02-24T01:03:39.2638954Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-02-24T01:03:39.2640202Z         
2026-02-24T01:03:39.2653091Z    test_name=TestAccSearchIndex_withStoredSourceFalse
2026-02-24T01:03:39.4277337Z --- FAIL: TestAccSearchIndex_withSearchType (1.77s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 6 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 8 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 6 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 9 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 8 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 5 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
