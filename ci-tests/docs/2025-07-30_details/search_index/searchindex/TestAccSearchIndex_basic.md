# search_index/searchindex/TestAccSearchIndex_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 02:30](#error-2025-07-14t0230570000) |  | dev | timeout | 3600.08s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 7 seconds
- 2025-07-03 PASS 6 seconds
- 2025-07-04 PASS 8 seconds
- 2025-07-05 PASS 7 seconds
- 2025-07-06 PASS 7 seconds
- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 8 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-07-11 PASS 8 seconds
- 2025-07-12 PASS 10 seconds
- 2025-07-13 PASS 7 seconds
- 2025-07-14

### Error 2025-07-14T02:30:57+00:00
```
2025-07-14T02:30:57.6203489Z === RUN   TestAccSearchIndex_basic
2025-07-14T02:30:57.6204405Z     resource_search_index_test.go:16: Creating execution cluster: test-acc-tf-c-2249890129335222644
2025-07-14T02:30:58.4471852Z 2025/07/14 02:30:58 [DEBUG] Waiting for state to become: [IDLE]
2025-07-14T02:33:58.6607488Z 2025/07/14 02:33:58 [TRACE] Waiting 1m0s before next try
2025-07-14T02:34:58.7998722Z 2025/07/14 02:34:58 [TRACE] Waiting 10s before next try
2025-07-14T02:35:08.9234592Z 2025/07/14 02:35:08 [TRACE] Waiting 1m0s before next try
2025-07-14T02:36:09.0557354Z 2025/07/14 02:36:09 [TRACE] Waiting 10s before next try
2025-07-14T02:36:19.1685685Z 2025/07/14 02:36:19 [TRACE] Waiting 1m0s before next try
2025-07-14T02:37:19.3262709Z 2025/07/14 02:37:19 [TRACE] Waiting 10s before next try
2025-07-14T02:37:29.4364766Z 2025/07/14 02:37:29 [TRACE] Waiting 1m0s before next try
2025-07-14T02:38:29.5656665Z 2025/07/14 02:38:29 [TRACE] Waiting 10s before next try
2025-07-14T02:38:39.6734802Z 2025/07/14 02:38:39 [TRACE] Waiting 1m0s before next try
2025-07-14T02:39:39.8404342Z 2025/07/14 02:39:39 [TRACE] Waiting 10s before next try
2025-07-14T02:39:49.9640446Z 2025/07/14 02:39:49 [TRACE] Waiting 1m0s before next try
2025-07-14T02:40:50.1510346Z 2025/07/14 02:40:50 [TRACE] Waiting 10s before next try
2025-07-14T02:41:00.2590494Z 2025/07/14 02:41:00 [TRACE] Waiting 1m0s before next try
2025-07-14T02:42:00.4721397Z 2025/07/14 02:42:00 [TRACE] Waiting 10s before next try
2025-07-14T02:42:10.5986389Z 2025/07/14 02:42:10 [TRACE] Waiting 1m0s before next try
2025-07-14T02:43:10.7470634Z 2025/07/14 02:43:10 [TRACE] Waiting 10s before next try
2025-07-14T02:43:20.8381756Z 2025/07/14 02:43:20 [TRACE] Waiting 1m0s before next try
2025-07-14T02:44:21.0101115Z 2025/07/14 02:44:21 [TRACE] Waiting 10s before next try
2025-07-14T02:44:31.1195023Z 2025/07/14 02:44:31 [TRACE] Waiting 1m0s before next try
2025-07-14T02:45:31.3049669Z 2025/07/14 02:45:31 [TRACE] Waiting 10s before next try
2025-07-14T02:45:41.4146763Z 2025/07/14 02:45:41 [TRACE] Waiting 1m0s before next try
2025-07-14T02:46:41.7473998Z 2025/07/14 02:46:41 [TRACE] Waiting 10s before next try
2025-07-14T02:46:51.8586229Z 2025/07/14 02:46:51 [TRACE] Waiting 1m0s before next try
2025-07-14T02:47:52.0266622Z 2025/07/14 02:47:52 [TRACE] Waiting 10s before next try
2025-07-14T02:48:02.1388100Z 2025/07/14 02:48:02 [TRACE] Waiting 1m0s before next try
2025-07-14T02:49:02.3346173Z 2025/07/14 02:49:02 [TRACE] Waiting 10s before next try
2025-07-14T02:49:12.4527752Z 2025/07/14 02:49:12 [TRACE] Waiting 1m0s before next try
2025-07-14T02:50:12.6280704Z 2025/07/14 02:50:12 [TRACE] Waiting 10s before next try
2025-07-14T02:50:22.7502155Z 2025/07/14 02:50:22 [TRACE] Waiting 1m0s before next try
2025-07-14T02:51:22.9143222Z 2025/07/14 02:51:22 [TRACE] Waiting 10s before next try
2025-07-14T02:51:33.0359125Z 2025/07/14 02:51:33 [TRACE] Waiting 1m0s before next try
2025-07-14T02:52:33.2426394Z 2025/07/14 02:52:33 [TRACE] Waiting 10s before next try
2025-07-14T02:52:43.3401884Z 2025/07/14 02:52:43 [TRACE] Waiting 1m0s before next try
2025-07-14T02:53:43.5730105Z 2025/07/14 02:53:43 [TRACE] Waiting 10s before next try
2025-07-14T02:53:53.7002530Z 2025/07/14 02:53:53 [TRACE] Waiting 1m0s before next try
2025-07-14T02:54:53.8629312Z 2025/07/14 02:54:53 [TRACE] Waiting 10s before next try
2025-07-14T02:55:03.9768399Z 2025/07/14 02:55:03 [TRACE] Waiting 1m0s before next try
2025-07-14T02:56:04.1509933Z 2025/07/14 02:56:04 [TRACE] Waiting 10s before next try
2025-07-14T02:56:14.2567433Z 2025/07/14 02:56:14 [TRACE] Waiting 1m0s before next try
2025-07-14T02:57:14.6389638Z 2025/07/14 02:57:14 [TRACE] Waiting 10s before next try
2025-07-14T02:57:24.7426354Z 2025/07/14 02:57:24 [TRACE] Waiting 1m0s before next try
2025-07-14T02:58:24.8986518Z 2025/07/14 02:58:24 [TRACE] Waiting 10s before next try
2025-07-14T02:58:35.0018388Z 2025/07/14 02:58:35 [TRACE] Waiting 1m0s before next try
2025-07-14T02:59:35.2249053Z 2025/07/14 02:59:35 [TRACE] Waiting 10s before next try
2025-07-14T02:59:45.3069137Z 2025/07/14 02:59:45 [TRACE] Waiting 1m0s before next try
2025-07-14T03:00:45.4881844Z 2025/07/14 03:00:45 [TRACE] Waiting 10s before next try
2025-07-14T03:00:55.5946416Z 2025/07/14 03:00:55 [TRACE] Waiting 1m0s before next try
2025-07-14T03:01:55.8173826Z 2025/07/14 03:01:55 [TRACE] Waiting 10s before next try
2025-07-14T03:02:05.9188491Z 2025/07/14 03:02:05 [TRACE] Waiting 1m0s before next try
2025-07-14T03:03:06.1069355Z 2025/07/14 03:03:06 [TRACE] Waiting 10s before next try
2025-07-14T03:03:16.2227503Z 2025/07/14 03:03:16 [TRACE] Waiting 1m0s before next try
2025-07-14T03:04:16.3838096Z 2025/07/14 03:04:16 [TRACE] Waiting 10s before next try
2025-07-14T03:04:26.4874760Z 2025/07/14 03:04:26 [TRACE] Waiting 1m0s before next try
2025-07-14T03:05:26.6074524Z 2025/07/14 03:05:26 [TRACE] Waiting 10s before next try
2025-07-14T03:05:36.7167656Z 2025/07/14 03:05:36 [TRACE] Waiting 1m0s before next try
2025-07-14T03:06:36.8692361Z 2025/07/14 03:06:36 [TRACE] Waiting 10s before next try
2025-07-14T03:06:46.9529406Z 2025/07/14 03:06:46 [TRACE] Waiting 1m0s before next try
2025-07-14T03:07:47.1574805Z 2025/07/14 03:07:47 [TRACE] Waiting 10s before next try
2025-07-14T03:07:57.2574274Z 2025/07/14 03:07:57 [TRACE] Waiting 1m0s before next try
2025-07-14T03:08:57.4181109Z 2025/07/14 03:08:57 [TRACE] Waiting 10s before next try
2025-07-14T03:09:07.5396406Z 2025/07/14 03:09:07 [TRACE] Waiting 1m0s before next try
2025-07-14T03:10:07.8235741Z 2025/07/14 03:10:07 [TRACE] Waiting 10s before next try
2025-07-14T03:10:17.9156128Z 2025/07/14 03:10:17 [TRACE] Waiting 1m0s before next try
2025-07-14T03:11:18.0737546Z 2025/07/14 03:11:18 [TRACE] Waiting 10s before next try
2025-07-14T03:11:28.1920049Z 2025/07/14 03:11:28 [TRACE] Waiting 1m0s before next try
2025-07-14T03:12:28.3338558Z 2025/07/14 03:12:28 [TRACE] Waiting 10s before next try
2025-07-14T03:12:38.4409989Z 2025/07/14 03:12:38 [TRACE] Waiting 1m0s before next try
2025-07-14T03:13:38.5967311Z 2025/07/14 03:13:38 [TRACE] Waiting 10s before next try
2025-07-14T03:13:48.6918184Z 2025/07/14 03:13:48 [TRACE] Waiting 1m0s before next try
2025-07-14T03:14:48.8192714Z 2025/07/14 03:14:48 [TRACE] Waiting 10s before next try
2025-07-14T03:14:58.9183680Z 2025/07/14 03:14:58 [TRACE] Waiting 1m0s before next try
2025-07-14T03:15:59.1764172Z 2025/07/14 03:15:59 [TRACE] Waiting 10s before next try
2025-07-14T03:16:09.2855821Z 2025/07/14 03:16:09 [TRACE] Waiting 1m0s before next try
2025-07-14T03:17:09.4856545Z 2025/07/14 03:17:09 [TRACE] Waiting 10s before next try
2025-07-14T03:17:19.5957721Z 2025/07/14 03:17:19 [TRACE] Waiting 1m0s before next try
2025-07-14T03:18:19.7548039Z 2025/07/14 03:18:19 [TRACE] Waiting 10s before next try
2025-07-14T03:18:29.8703214Z 2025/07/14 03:18:29 [TRACE] Waiting 1m0s before next try
2025-07-14T03:19:30.0033059Z 2025/07/14 03:19:30 [TRACE] Waiting 10s before next try
2025-07-14T03:19:40.1102867Z 2025/07/14 03:19:40 [TRACE] Waiting 1m0s before next try
2025-07-14T03:20:40.2475693Z 2025/07/14 03:20:40 [TRACE] Waiting 10s before next try
2025-07-14T03:20:50.3484490Z 2025/07/14 03:20:50 [TRACE] Waiting 1m0s before next try
2025-07-14T03:21:50.5251644Z 2025/07/14 03:21:50 [TRACE] Waiting 10s before next try
2025-07-14T03:22:00.6386756Z 2025/07/14 03:22:00 [TRACE] Waiting 1m0s before next try
2025-07-14T03:23:00.8292858Z 2025/07/14 03:23:00 [TRACE] Waiting 10s before next try
2025-07-14T03:23:10.9341800Z 2025/07/14 03:23:10 [TRACE] Waiting 1m0s before next try
2025-07-14T03:24:11.1230262Z 2025/07/14 03:24:11 [TRACE] Waiting 10s before next try
2025-07-14T03:24:21.2288501Z 2025/07/14 03:24:21 [TRACE] Waiting 1m0s before next try
2025-07-14T03:25:21.3737628Z 2025/07/14 03:25:21 [TRACE] Waiting 10s before next try
2025-07-14T03:25:31.5040198Z 2025/07/14 03:25:31 [TRACE] Waiting 1m0s before next try
2025-07-14T03:26:31.6557129Z 2025/07/14 03:26:31 [TRACE] Waiting 10s before next try
2025-07-14T03:26:41.7570152Z 2025/07/14 03:26:41 [TRACE] Waiting 1m0s before next try
2025-07-14T03:27:41.9213421Z 2025/07/14 03:27:41 [TRACE] Waiting 10s before next try
2025-07-14T03:27:52.0305441Z 2025/07/14 03:27:52 [TRACE] Waiting 1m0s before next try
2025-07-14T03:28:52.1719953Z 2025/07/14 03:28:52 [TRACE] Waiting 10s before next try
2025-07-14T03:29:02.2848826Z 2025/07/14 03:29:02 [TRACE] Waiting 1m0s before next try
2025-07-14T03:30:02.4559963Z 2025/07/14 03:30:02 [TRACE] Waiting 10s before next try
2025-07-14T03:30:12.5659557Z 2025/07/14 03:30:12 [TRACE] Waiting 1m0s before next try
2025-07-14T03:30:58.4515439Z 2025/07/14 03:30:58 [WARN] WaitForState timeout after 1h0m0s
2025-07-14T03:30:58.4516596Z 2025/07/14 03:30:58 [WARN] WaitForState starting 30s refresh grace period
2025-07-14T03:30:58.4518949Z     resource_search_index_test.go:16: 
2025-07-14T03:30:58.4521265Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-14T03:30:58.4525582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-14T03:30:58.4529333Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:150
2025-07-14T03:30:58.4532003Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:16
2025-07-14T03:30:58.4532914Z         	Error:      	Received unexpected error:
2025-07-14T03:30:58.4533929Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T03:30:58.4534546Z         	Test:       	TestAccSearchIndex_basic
2025-07-14T03:30:58.4536042Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2249890129335222644, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T03:30:58.4537233Z --- FAIL: TestAccSearchIndex_basic (3600.83s)
```

- 2025-07-15 PASS 8 seconds
- 2025-07-16 PASS 7 seconds
- 2025-07-17 PASS 8 seconds
- 2025-07-18 PASS 8 seconds
- 2025-07-19 PASS 8 seconds
- 2025-07-20 PASS 8 seconds
- 2025-07-21 PASS 8 seconds
- 2025-07-22 PASS 7 seconds
- 2025-07-23
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-07-24 PASS 8 seconds
- 2025-07-25 PASS 8 seconds
- 2025-07-26 PASS 8 seconds
- 2025-07-27 PASS 7 seconds
- 2025-07-28 PASS 7 seconds
- 2025-07-29 PASS 6 seconds
- 2025-07-30 PASS 6 seconds