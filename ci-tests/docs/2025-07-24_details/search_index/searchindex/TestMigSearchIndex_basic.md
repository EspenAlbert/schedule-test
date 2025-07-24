# search_index/searchindex/TestMigSearchIndex_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 00:30](#error-2025-07-14t0030540000) |  | dev | timeout | 3602.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 10 minutes
- 2025-06-26 PASS 10 minutes
- 2025-06-27 PASS 11 minutes
- 2025-06-28 PASS 9 minutes
- 2025-06-29 PASS 11 minutes
- 2025-06-30 PASS 10 minutes
- 2025-07-01
  - PASS 12 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 13 minutes
- 2025-07-02 PASS 13 minutes
- 2025-07-03 PASS 12 minutes
- 2025-07-04 PASS 11 minutes
- 2025-07-05 PASS 9 minutes
- 2025-07-06 PASS 12 minutes
- 2025-07-07 PASS 10 minutes
- 2025-07-08 PASS 10 minutes
- 2025-07-09 PASS 10 minutes
- 2025-07-10
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-07-11 PASS 10 minutes
- 2025-07-12 PASS 12 minutes
- 2025-07-13 PASS 13 minutes
- 2025-07-14

### Error 2025-07-14T00:30:54+00:00
```
2025-07-14T00:30:54.1456508Z === RUN   TestMigSearchIndex_basic
2025-07-14T00:30:54.1459854Z     resource_search_index_migration_test.go:11: Creating execution project: test-acc-tf-p-3466947524077944139
2025-07-14T00:30:56.4093175Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-6980468384916209956
2025-07-14T00:30:57.0307954Z 2025/07/14 00:30:57 [DEBUG] Waiting for state to become: [IDLE]
2025-07-14T00:33:57.1774999Z 2025/07/14 00:33:57 [TRACE] Waiting 1m0s before next try
2025-07-14T00:34:57.3584064Z 2025/07/14 00:34:57 [TRACE] Waiting 10s before next try
2025-07-14T00:35:07.4484141Z 2025/07/14 00:35:07 [TRACE] Waiting 1m0s before next try
2025-07-14T00:36:07.6571515Z 2025/07/14 00:36:07 [TRACE] Waiting 10s before next try
2025-07-14T00:36:17.7649601Z 2025/07/14 00:36:17 [TRACE] Waiting 1m0s before next try
2025-07-14T00:37:18.3497557Z 2025/07/14 00:37:18 [TRACE] Waiting 10s before next try
2025-07-14T00:37:28.4558055Z 2025/07/14 00:37:28 [TRACE] Waiting 1m0s before next try
2025-07-14T00:38:28.5890035Z 2025/07/14 00:38:28 [TRACE] Waiting 10s before next try
2025-07-14T00:38:38.6897141Z 2025/07/14 00:38:38 [TRACE] Waiting 1m0s before next try
2025-07-14T00:39:38.8184609Z 2025/07/14 00:39:38 [TRACE] Waiting 10s before next try
2025-07-14T00:39:48.9262888Z 2025/07/14 00:39:48 [TRACE] Waiting 1m0s before next try
2025-07-14T00:40:49.0637492Z 2025/07/14 00:40:49 [TRACE] Waiting 10s before next try
2025-07-14T00:40:59.1637852Z 2025/07/14 00:40:59 [TRACE] Waiting 1m0s before next try
2025-07-14T00:41:59.3478279Z 2025/07/14 00:41:59 [TRACE] Waiting 10s before next try
2025-07-14T00:42:09.4352496Z 2025/07/14 00:42:09 [TRACE] Waiting 1m0s before next try
2025-07-14T00:43:09.7367564Z 2025/07/14 00:43:09 [TRACE] Waiting 10s before next try
2025-07-14T00:43:19.8607326Z 2025/07/14 00:43:19 [TRACE] Waiting 1m0s before next try
2025-07-14T00:44:20.0007643Z 2025/07/14 00:44:20 [TRACE] Waiting 10s before next try
2025-07-14T00:44:30.1002371Z 2025/07/14 00:44:30 [TRACE] Waiting 1m0s before next try
2025-07-14T00:45:30.2822639Z 2025/07/14 00:45:30 [TRACE] Waiting 10s before next try
2025-07-14T00:45:40.3925351Z 2025/07/14 00:45:40 [TRACE] Waiting 1m0s before next try
2025-07-14T00:46:40.5417431Z 2025/07/14 00:46:40 [TRACE] Waiting 10s before next try
2025-07-14T00:46:50.6565625Z 2025/07/14 00:46:50 [TRACE] Waiting 1m0s before next try
2025-07-14T00:47:50.7800162Z 2025/07/14 00:47:50 [TRACE] Waiting 10s before next try
2025-07-14T00:48:00.8998447Z 2025/07/14 00:48:00 [TRACE] Waiting 1m0s before next try
2025-07-14T00:49:01.1210847Z 2025/07/14 00:49:01 [TRACE] Waiting 10s before next try
2025-07-14T00:49:11.2309591Z 2025/07/14 00:49:11 [TRACE] Waiting 1m0s before next try
2025-07-14T00:50:11.3975394Z 2025/07/14 00:50:11 [TRACE] Waiting 10s before next try
2025-07-14T00:50:21.4875370Z 2025/07/14 00:50:21 [TRACE] Waiting 1m0s before next try
2025-07-14T00:51:21.6913849Z 2025/07/14 00:51:21 [TRACE] Waiting 10s before next try
2025-07-14T00:51:31.7968374Z 2025/07/14 00:51:31 [TRACE] Waiting 1m0s before next try
2025-07-14T00:52:31.9159337Z 2025/07/14 00:52:31 [TRACE] Waiting 10s before next try
2025-07-14T00:52:42.0205058Z 2025/07/14 00:52:42 [TRACE] Waiting 1m0s before next try
2025-07-14T00:53:42.1542785Z 2025/07/14 00:53:42 [TRACE] Waiting 10s before next try
2025-07-14T00:53:52.2567505Z 2025/07/14 00:53:52 [TRACE] Waiting 1m0s before next try
2025-07-14T00:54:52.3884884Z 2025/07/14 00:54:52 [TRACE] Waiting 10s before next try
2025-07-14T00:55:02.5055799Z 2025/07/14 00:55:02 [TRACE] Waiting 1m0s before next try
2025-07-14T00:56:02.6540661Z 2025/07/14 00:56:02 [TRACE] Waiting 10s before next try
2025-07-14T00:56:12.7522237Z 2025/07/14 00:56:12 [TRACE] Waiting 1m0s before next try
2025-07-14T00:57:12.9242052Z 2025/07/14 00:57:12 [TRACE] Waiting 10s before next try
2025-07-14T00:57:23.0248166Z 2025/07/14 00:57:23 [TRACE] Waiting 1m0s before next try
2025-07-14T00:58:23.2098204Z 2025/07/14 00:58:23 [TRACE] Waiting 10s before next try
2025-07-14T00:58:33.3241268Z 2025/07/14 00:58:33 [TRACE] Waiting 1m0s before next try
2025-07-14T00:59:33.4754720Z 2025/07/14 00:59:33 [TRACE] Waiting 10s before next try
2025-07-14T00:59:43.5674550Z 2025/07/14 00:59:43 [TRACE] Waiting 1m0s before next try
2025-07-14T01:00:43.7224468Z 2025/07/14 01:00:43 [TRACE] Waiting 10s before next try
2025-07-14T01:00:53.8241412Z 2025/07/14 01:00:53 [TRACE] Waiting 1m0s before next try
2025-07-14T01:01:53.9609954Z 2025/07/14 01:01:53 [TRACE] Waiting 10s before next try
2025-07-14T01:02:04.0935255Z 2025/07/14 01:02:04 [TRACE] Waiting 1m0s before next try
2025-07-14T01:03:04.2491493Z 2025/07/14 01:03:04 [TRACE] Waiting 10s before next try
2025-07-14T01:03:14.3582094Z 2025/07/14 01:03:14 [TRACE] Waiting 1m0s before next try
2025-07-14T01:04:14.6689488Z 2025/07/14 01:04:14 [TRACE] Waiting 10s before next try
2025-07-14T01:04:24.7676140Z 2025/07/14 01:04:24 [TRACE] Waiting 1m0s before next try
2025-07-14T01:05:24.9405816Z 2025/07/14 01:05:24 [TRACE] Waiting 10s before next try
2025-07-14T01:05:35.0394621Z 2025/07/14 01:05:35 [TRACE] Waiting 1m0s before next try
2025-07-14T01:06:35.2220368Z 2025/07/14 01:06:35 [TRACE] Waiting 10s before next try
2025-07-14T01:06:45.3105322Z 2025/07/14 01:06:45 [TRACE] Waiting 1m0s before next try
2025-07-14T01:07:45.8619206Z 2025/07/14 01:07:45 [TRACE] Waiting 10s before next try
2025-07-14T01:07:55.9645160Z 2025/07/14 01:07:55 [TRACE] Waiting 1m0s before next try
2025-07-14T01:08:56.1312031Z 2025/07/14 01:08:56 [TRACE] Waiting 10s before next try
2025-07-14T01:09:06.2362841Z 2025/07/14 01:09:06 [TRACE] Waiting 1m0s before next try
2025-07-14T01:10:06.4299960Z 2025/07/14 01:10:06 [TRACE] Waiting 10s before next try
2025-07-14T01:10:16.5441941Z 2025/07/14 01:10:16 [TRACE] Waiting 1m0s before next try
2025-07-14T01:11:16.6997861Z 2025/07/14 01:11:16 [TRACE] Waiting 10s before next try
2025-07-14T01:11:26.7862716Z 2025/07/14 01:11:26 [TRACE] Waiting 1m0s before next try
2025-07-14T01:12:26.9132757Z 2025/07/14 01:12:26 [TRACE] Waiting 10s before next try
2025-07-14T01:12:37.0024260Z 2025/07/14 01:12:37 [TRACE] Waiting 1m0s before next try
2025-07-14T01:13:37.1673118Z 2025/07/14 01:13:37 [TRACE] Waiting 10s before next try
2025-07-14T01:13:47.2741862Z 2025/07/14 01:13:47 [TRACE] Waiting 1m0s before next try
2025-07-14T01:14:47.4901933Z 2025/07/14 01:14:47 [TRACE] Waiting 10s before next try
2025-07-14T01:14:57.5967596Z 2025/07/14 01:14:57 [TRACE] Waiting 1m0s before next try
2025-07-14T01:15:57.8108190Z 2025/07/14 01:15:57 [TRACE] Waiting 10s before next try
2025-07-14T01:16:07.9258434Z 2025/07/14 01:16:07 [TRACE] Waiting 1m0s before next try
2025-07-14T01:17:08.1158224Z 2025/07/14 01:17:08 [TRACE] Waiting 10s before next try
2025-07-14T01:17:18.2416739Z 2025/07/14 01:17:18 [TRACE] Waiting 1m0s before next try
2025-07-14T01:18:18.4443154Z 2025/07/14 01:18:18 [TRACE] Waiting 10s before next try
2025-07-14T01:18:28.5474713Z 2025/07/14 01:18:28 [TRACE] Waiting 1m0s before next try
2025-07-14T01:19:28.7418118Z 2025/07/14 01:19:28 [TRACE] Waiting 10s before next try
2025-07-14T01:19:38.8435790Z 2025/07/14 01:19:38 [TRACE] Waiting 1m0s before next try
2025-07-14T01:20:38.9997484Z 2025/07/14 01:20:38 [TRACE] Waiting 10s before next try
2025-07-14T01:20:49.0975022Z 2025/07/14 01:20:49 [TRACE] Waiting 1m0s before next try
2025-07-14T01:21:49.2591323Z 2025/07/14 01:21:49 [TRACE] Waiting 10s before next try
2025-07-14T01:21:59.3680868Z 2025/07/14 01:21:59 [TRACE] Waiting 1m0s before next try
2025-07-14T01:22:59.5136725Z 2025/07/14 01:22:59 [TRACE] Waiting 10s before next try
2025-07-14T01:23:09.6080504Z 2025/07/14 01:23:09 [TRACE] Waiting 1m0s before next try
2025-07-14T01:24:09.7193167Z 2025/07/14 01:24:09 [TRACE] Waiting 10s before next try
2025-07-14T01:24:19.8193447Z 2025/07/14 01:24:19 [TRACE] Waiting 1m0s before next try
2025-07-14T01:25:19.9866495Z 2025/07/14 01:25:19 [TRACE] Waiting 10s before next try
2025-07-14T01:25:30.0872652Z 2025/07/14 01:25:30 [TRACE] Waiting 1m0s before next try
2025-07-14T01:26:30.2799400Z 2025/07/14 01:26:30 [TRACE] Waiting 10s before next try
2025-07-14T01:26:40.4054448Z 2025/07/14 01:26:40 [TRACE] Waiting 1m0s before next try
2025-07-14T01:27:40.6341756Z 2025/07/14 01:27:40 [TRACE] Waiting 10s before next try
2025-07-14T01:27:50.7271924Z 2025/07/14 01:27:50 [TRACE] Waiting 1m0s before next try
2025-07-14T01:28:50.9664754Z 2025/07/14 01:28:50 [TRACE] Waiting 10s before next try
2025-07-14T01:29:01.0672700Z 2025/07/14 01:29:01 [TRACE] Waiting 1m0s before next try
2025-07-14T01:30:01.2285037Z 2025/07/14 01:30:01 [TRACE] Waiting 10s before next try
2025-07-14T01:30:11.3555126Z 2025/07/14 01:30:11 [TRACE] Waiting 1m0s before next try
2025-07-14T01:30:57.0331686Z 2025/07/14 01:30:57 [WARN] WaitForState timeout after 1h0m0s
2025-07-14T01:30:57.0332865Z 2025/07/14 01:30:57 [WARN] WaitForState starting 30s refresh grace period
2025-07-14T01:30:57.0337714Z     resource_search_index_migration_test.go:11: 
2025-07-14T01:30:57.0345138Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-14T01:30:57.0348366Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-14T01:30:57.0352022Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:150
2025-07-14T01:30:57.0355613Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2025-07-14T01:30:57.0357146Z         	Error:      	Received unexpected error:
2025-07-14T01:30:57.0358689Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T01:30:57.0359530Z         	Test:       	TestMigSearchIndex_basic
2025-07-14T01:30:57.0361206Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6980468384916209956, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T01:30:57.0362392Z --- FAIL: TestMigSearchIndex_basic (3602.89s)
```

- 2025-07-15 PASS 12 minutes
- 2025-07-16 PASS 10 minutes
- 2025-07-17 PASS 12 minutes
- 2025-07-18 PASS 10 minutes
- 2025-07-19 PASS 12 minutes
- 2025-07-20 PASS 12 minutes
- 2025-07-21 PASS 11 minutes
- 2025-07-22 PASS 10 minutes
- 2025-07-23
  - PASS 10 minutes
  - PASS 14 minutes
- 2025-07-24 PASS 10 minutes