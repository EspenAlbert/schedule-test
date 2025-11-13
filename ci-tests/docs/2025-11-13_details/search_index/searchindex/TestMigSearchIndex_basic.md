# search_index/searchindex/TestMigSearchIndex_basic Test Details
# Found 21 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-27 00:30](#error-2025-10-27t0030230000) |  | dev | timeout | 2841.01s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 12 minutes
- 2025-10-16 PASS 15 minutes
- 2025-10-17 PASS 14 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 12 minutes
- 2025-10-20 PASS 13 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-10-23: MISSING
- 2025-10-24 PASS 12 minutes
- 2025-10-25: MISSING
- 2025-10-26 PASS 12 minutes
- 2025-10-27

### Error 2025-10-27T00:30:23+00:00
```
2025-10-27T00:30:23.5886297Z === RUN   TestMigSearchIndex_basic
2025-10-27T00:30:23.5887538Z     resource_search_index_migration_test.go:11: Creating execution project: test-acc-tf-p-8167553025893598218
2025-10-27T00:30:26.1538836Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-5054850061385097118
2025-10-27T00:30:26.9116753Z 2025/10/27 00:30:26 [DEBUG] Waiting for state to become: [IDLE]
2025-10-27T00:33:27.3449131Z 2025/10/27 00:33:27 [TRACE] Waiting 1m0s before next try
2025-10-27T00:34:27.7490769Z 2025/10/27 00:34:27 [TRACE] Waiting 10s before next try
2025-10-27T00:34:37.9966988Z 2025/10/27 00:34:37 [TRACE] Waiting 1m0s before next try
2025-10-27T00:35:38.4471851Z 2025/10/27 00:35:38 [TRACE] Waiting 10s before next try
2025-10-27T00:35:48.6997495Z 2025/10/27 00:35:48 [TRACE] Waiting 1m0s before next try
2025-10-27T00:36:49.1862087Z 2025/10/27 00:36:49 [TRACE] Waiting 10s before next try
2025-10-27T00:36:59.4298771Z 2025/10/27 00:36:59 [TRACE] Waiting 1m0s before next try
2025-10-27T00:37:59.8495322Z 2025/10/27 00:37:59 [TRACE] Waiting 10s before next try
2025-10-27T00:38:10.2885509Z 2025/10/27 00:38:10 [TRACE] Waiting 1m0s before next try
2025-10-27T00:39:10.8519118Z 2025/10/27 00:39:10 [TRACE] Waiting 10s before next try
2025-10-27T00:39:21.0917462Z 2025/10/27 00:39:21 [TRACE] Waiting 1m0s before next try
2025-10-27T00:40:21.5027928Z 2025/10/27 00:40:21 [TRACE] Waiting 10s before next try
2025-10-27T00:40:31.7644672Z 2025/10/27 00:40:31 [TRACE] Waiting 1m0s before next try
2025-10-27T00:41:32.1654892Z 2025/10/27 00:41:32 [TRACE] Waiting 10s before next try
2025-10-27T00:41:42.4074174Z 2025/10/27 00:41:42 [TRACE] Waiting 1m0s before next try
2025-10-27T00:42:42.8245116Z 2025/10/27 00:42:42 [TRACE] Waiting 10s before next try
2025-10-27T00:42:53.0630172Z 2025/10/27 00:42:53 [TRACE] Waiting 1m0s before next try
2025-10-27T00:43:53.4724844Z 2025/10/27 00:43:53 [TRACE] Waiting 10s before next try
2025-10-27T00:44:03.7270093Z 2025/10/27 00:44:03 [TRACE] Waiting 1m0s before next try
2025-10-27T00:45:04.1520780Z 2025/10/27 00:45:04 [TRACE] Waiting 10s before next try
2025-10-27T00:45:14.3943996Z 2025/10/27 00:45:14 [TRACE] Waiting 1m0s before next try
2025-10-27T00:46:14.8064904Z 2025/10/27 00:46:14 [TRACE] Waiting 10s before next try
2025-10-27T00:46:25.0702664Z 2025/10/27 00:46:25 [TRACE] Waiting 1m0s before next try
2025-10-27T00:47:25.4789897Z 2025/10/27 00:47:25 [TRACE] Waiting 10s before next try
2025-10-27T00:47:35.7247216Z 2025/10/27 00:47:35 [TRACE] Waiting 1m0s before next try
2025-10-27T00:48:36.1458863Z 2025/10/27 00:48:36 [TRACE] Waiting 10s before next try
2025-10-27T00:48:46.4076018Z 2025/10/27 00:48:46 [TRACE] Waiting 1m0s before next try
2025-10-27T00:49:46.8422220Z 2025/10/27 00:49:46 [TRACE] Waiting 10s before next try
2025-10-27T00:49:57.1005540Z 2025/10/27 00:49:57 [TRACE] Waiting 1m0s before next try
2025-10-27T00:50:57.5043382Z 2025/10/27 00:50:57 [TRACE] Waiting 10s before next try
2025-10-27T00:51:07.7452477Z 2025/10/27 00:51:07 [TRACE] Waiting 1m0s before next try
2025-10-27T00:52:08.1712049Z 2025/10/27 00:52:08 [TRACE] Waiting 10s before next try
2025-10-27T00:52:18.4395352Z 2025/10/27 00:52:18 [TRACE] Waiting 1m0s before next try
2025-10-27T00:53:18.8176529Z 2025/10/27 00:53:18 [TRACE] Waiting 10s before next try
2025-10-27T00:53:29.0635180Z 2025/10/27 00:53:29 [TRACE] Waiting 1m0s before next try
2025-10-27T00:54:29.4822458Z 2025/10/27 00:54:29 [TRACE] Waiting 10s before next try
2025-10-27T00:54:39.7269525Z 2025/10/27 00:54:39 [TRACE] Waiting 1m0s before next try
2025-10-27T00:55:40.1470642Z 2025/10/27 00:55:40 [TRACE] Waiting 10s before next try
2025-10-27T00:55:50.6825505Z 2025/10/27 00:55:50 [TRACE] Waiting 1m0s before next try
2025-10-27T00:56:51.1145063Z 2025/10/27 00:56:51 [TRACE] Waiting 10s before next try
2025-10-27T00:57:01.4124944Z 2025/10/27 00:57:01 [TRACE] Waiting 1m0s before next try
2025-10-27T00:58:01.8269108Z 2025/10/27 00:58:01 [TRACE] Waiting 10s before next try
2025-10-27T00:58:12.0881353Z 2025/10/27 00:58:12 [TRACE] Waiting 1m0s before next try
2025-10-27T00:59:12.5009617Z 2025/10/27 00:59:12 [TRACE] Waiting 10s before next try
2025-10-27T00:59:22.7654014Z 2025/10/27 00:59:22 [TRACE] Waiting 1m0s before next try
2025-10-27T01:00:23.1492979Z 2025/10/27 01:00:23 [TRACE] Waiting 10s before next try
2025-10-27T01:00:33.3919487Z 2025/10/27 01:00:33 [TRACE] Waiting 1m0s before next try
2025-10-27T01:01:33.8002840Z 2025/10/27 01:01:33 [TRACE] Waiting 10s before next try
2025-10-27T01:01:44.0406417Z 2025/10/27 01:01:44 [TRACE] Waiting 1m0s before next try
2025-10-27T01:02:44.6990545Z 2025/10/27 01:02:44 [DEBUG] Waiting for state to become: [COMPLETED]
2025-10-27T01:03:45.0983135Z 2025/10/27 01:03:45 [TRACE] Waiting 1m0s before next try
2025-10-27T01:04:45.4644815Z 2025/10/27 01:04:45 [TRACE] Waiting 10s before next try
2025-10-27T01:04:55.6707750Z 2025/10/27 01:04:55 [TRACE] Waiting 1m0s before next try
2025-10-27T01:05:56.0614997Z 2025/10/27 01:05:56 [TRACE] Waiting 10s before next try
2025-10-27T01:06:06.3083814Z 2025/10/27 01:06:06 [TRACE] Waiting 1m0s before next try
2025-10-27T01:07:06.7042905Z 2025/10/27 01:07:06 [TRACE] Waiting 10s before next try
2025-10-27T01:07:16.9136481Z 2025/10/27 01:07:16 [TRACE] Waiting 1m0s before next try
2025-10-27T01:08:17.2921096Z 2025/10/27 01:08:17 [TRACE] Waiting 10s before next try
2025-10-27T01:08:27.4959944Z 2025/10/27 01:08:27 [TRACE] Waiting 1m0s before next try
2025-10-27T01:09:27.8406206Z 2025/10/27 01:09:27 [TRACE] Waiting 10s before next try
2025-10-27T01:09:38.0427188Z 2025/10/27 01:09:38 [TRACE] Waiting 1m0s before next try
2025-10-27T01:10:38.4345350Z 2025/10/27 01:10:38 [TRACE] Waiting 10s before next try
2025-10-27T01:10:48.6432524Z 2025/10/27 01:10:48 [TRACE] Waiting 1m0s before next try
2025-10-27T01:11:48.9999492Z 2025/10/27 01:11:48 [TRACE] Waiting 10s before next try
2025-10-27T01:11:59.2151970Z 2025/10/27 01:11:59 [TRACE] Waiting 1m0s before next try
2025-10-27T01:12:59.5844168Z 2025/10/27 01:12:59 [TRACE] Waiting 10s before next try
2025-10-27T01:13:09.8087818Z 2025/10/27 01:13:09 [TRACE] Waiting 1m0s before next try
2025-10-27T01:14:10.6740034Z 2025/10/27 01:14:10 [TRACE] Waiting 10s before next try
2025-10-27T01:14:20.8885644Z 2025/10/27 01:14:20 [TRACE] Waiting 1m0s before next try
2025-10-27T01:15:21.2892747Z 2025/10/27 01:15:21 [TRACE] Waiting 10s before next try
2025-10-27T01:15:31.4976009Z 2025/10/27 01:15:31 [TRACE] Waiting 1m0s before next try
2025-10-27T01:16:32.0653911Z 2025/10/27 01:16:32 [TRACE] Waiting 10s before next try
2025-10-27T01:16:42.2715561Z 2025/10/27 01:16:42 [TRACE] Waiting 1m0s before next try
2025-10-27T01:17:42.6281486Z 2025/10/27 01:17:42 [TRACE] Waiting 10s before next try
2025-10-27T01:17:44.6992701Z 2025/10/27 01:17:44 [WARN] WaitForState timeout after 15m0s
2025-10-27T01:17:44.6993612Z 2025/10/27 01:17:44 [WARN] WaitForState starting 30s refresh grace period
2025-10-27T01:17:44.6996638Z     resource_search_index_migration_test.go:11: 
2025-10-27T01:17:44.6999039Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:141
2025-10-27T01:17:44.7003616Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:150
2025-10-27T01:17:44.7007518Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2025-10-27T01:17:44.7009121Z         	Error:      	Received unexpected error:
2025-10-27T01:17:44.7011214Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-10-27T01:17:44.7012220Z         	Test:       	TestMigSearchIndex_basic
2025-10-27T01:17:44.7012791Z --- FAIL: TestMigSearchIndex_basic (2841.11s)
```

- 2025-10-28: MISSING
- 2025-10-29 PASS 13 minutes
- 2025-10-30: MISSING
- 2025-10-31 PASS 12 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 10 minutes
- 2025-11-03 PASS 10 minutes
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 13 minutes
  - PASS 12 minutes
- 2025-11-06: MISSING
- 2025-11-07 PASS 13 minutes
- 2025-11-08: MISSING
- 2025-11-09 PASS 10 minutes
- 2025-11-10 PASS 10 minutes
- 2025-11-11: MISSING
- 2025-11-12 PASS 13 minutes
- 2025-11-13 PASS 12 minutes