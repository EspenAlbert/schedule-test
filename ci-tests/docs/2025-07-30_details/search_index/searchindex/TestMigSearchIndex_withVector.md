# search_index/searchindex/TestMigSearchIndex_withVector Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 01:30](#error-2025-07-14t0130570000) |  | dev | timeout | 3600.06s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 12 seconds
  - PASS 12 seconds
  - PASS 10 seconds
- 2025-07-02 PASS 10 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 11 seconds
- 2025-07-05 PASS 10 seconds
- 2025-07-06 PASS 12 seconds
- 2025-07-07 PASS 10 seconds
- 2025-07-08 PASS 10 seconds
- 2025-07-09 PASS 9 seconds
- 2025-07-10
  - PASS 11 seconds
  - PASS 12 seconds
- 2025-07-11 PASS 10 seconds
- 2025-07-12 PASS 14 seconds
- 2025-07-13 PASS 10 seconds
- 2025-07-14

### Error 2025-07-14T01:30:57+00:00
```
2025-07-14T01:30:57.0362906Z === RUN   TestMigSearchIndex_withVector
2025-07-14T01:30:57.0363903Z     resource_search_index_migration_test.go:15: Creating execution cluster: test-acc-tf-c-4300394183665031681
2025-07-14T01:30:57.6151709Z 2025/07/14 01:30:57 [DEBUG] Waiting for state to become: [IDLE]
2025-07-14T01:33:57.8336744Z 2025/07/14 01:33:57 [TRACE] Waiting 1m0s before next try
2025-07-14T01:34:57.9977787Z 2025/07/14 01:34:57 [TRACE] Waiting 10s before next try
2025-07-14T01:35:08.1062553Z 2025/07/14 01:35:08 [TRACE] Waiting 1m0s before next try
2025-07-14T01:36:08.2439833Z 2025/07/14 01:36:08 [TRACE] Waiting 10s before next try
2025-07-14T01:36:18.3655999Z 2025/07/14 01:36:18 [TRACE] Waiting 1m0s before next try
2025-07-14T01:37:18.5332618Z 2025/07/14 01:37:18 [TRACE] Waiting 10s before next try
2025-07-14T01:37:28.6462118Z 2025/07/14 01:37:28 [TRACE] Waiting 1m0s before next try
2025-07-14T01:38:29.0809776Z 2025/07/14 01:38:29 [TRACE] Waiting 10s before next try
2025-07-14T01:38:39.1730045Z 2025/07/14 01:38:39 [TRACE] Waiting 1m0s before next try
2025-07-14T01:39:39.3606174Z 2025/07/14 01:39:39 [TRACE] Waiting 10s before next try
2025-07-14T01:39:49.4683166Z 2025/07/14 01:39:49 [TRACE] Waiting 1m0s before next try
2025-07-14T01:40:49.6252409Z 2025/07/14 01:40:49 [TRACE] Waiting 10s before next try
2025-07-14T01:40:59.7355933Z 2025/07/14 01:40:59 [TRACE] Waiting 1m0s before next try
2025-07-14T01:41:59.8978464Z 2025/07/14 01:41:59 [TRACE] Waiting 10s before next try
2025-07-14T01:42:09.9845142Z 2025/07/14 01:42:09 [TRACE] Waiting 1m0s before next try
2025-07-14T01:43:10.0986520Z 2025/07/14 01:43:10 [TRACE] Waiting 10s before next try
2025-07-14T01:43:20.2184901Z 2025/07/14 01:43:20 [TRACE] Waiting 1m0s before next try
2025-07-14T01:44:20.3695196Z 2025/07/14 01:44:20 [TRACE] Waiting 10s before next try
2025-07-14T01:44:30.4877003Z 2025/07/14 01:44:30 [TRACE] Waiting 1m0s before next try
2025-07-14T01:45:30.7570851Z 2025/07/14 01:45:30 [TRACE] Waiting 10s before next try
2025-07-14T01:45:40.8731972Z 2025/07/14 01:45:40 [TRACE] Waiting 1m0s before next try
2025-07-14T01:46:41.0317729Z 2025/07/14 01:46:41 [TRACE] Waiting 10s before next try
2025-07-14T01:46:51.1279599Z 2025/07/14 01:46:51 [TRACE] Waiting 1m0s before next try
2025-07-14T01:47:51.3012406Z 2025/07/14 01:47:51 [TRACE] Waiting 10s before next try
2025-07-14T01:48:01.4027752Z 2025/07/14 01:48:01 [TRACE] Waiting 1m0s before next try
2025-07-14T01:49:01.5430162Z 2025/07/14 01:49:01 [TRACE] Waiting 10s before next try
2025-07-14T01:49:11.6477487Z 2025/07/14 01:49:11 [TRACE] Waiting 1m0s before next try
2025-07-14T01:50:11.8490768Z 2025/07/14 01:50:11 [TRACE] Waiting 10s before next try
2025-07-14T01:50:21.9495118Z 2025/07/14 01:50:21 [TRACE] Waiting 1m0s before next try
2025-07-14T01:51:22.1119113Z 2025/07/14 01:51:22 [TRACE] Waiting 10s before next try
2025-07-14T01:51:32.2313268Z 2025/07/14 01:51:32 [TRACE] Waiting 1m0s before next try
2025-07-14T01:52:32.4253633Z 2025/07/14 01:52:32 [TRACE] Waiting 10s before next try
2025-07-14T01:52:42.5297216Z 2025/07/14 01:52:42 [TRACE] Waiting 1m0s before next try
2025-07-14T01:53:42.7672478Z 2025/07/14 01:53:42 [TRACE] Waiting 10s before next try
2025-07-14T01:53:52.8706195Z 2025/07/14 01:53:52 [TRACE] Waiting 1m0s before next try
2025-07-14T01:54:53.0442446Z 2025/07/14 01:54:53 [TRACE] Waiting 10s before next try
2025-07-14T01:55:03.1429699Z 2025/07/14 01:55:03 [TRACE] Waiting 1m0s before next try
2025-07-14T01:56:03.3233265Z 2025/07/14 01:56:03 [TRACE] Waiting 10s before next try
2025-07-14T01:56:13.4337775Z 2025/07/14 01:56:13 [TRACE] Waiting 1m0s before next try
2025-07-14T01:57:13.5860555Z 2025/07/14 01:57:13 [TRACE] Waiting 10s before next try
2025-07-14T01:57:23.6898372Z 2025/07/14 01:57:23 [TRACE] Waiting 1m0s before next try
2025-07-14T01:58:23.8260680Z 2025/07/14 01:58:23 [TRACE] Waiting 10s before next try
2025-07-14T01:58:33.9255039Z 2025/07/14 01:58:33 [TRACE] Waiting 1m0s before next try
2025-07-14T01:59:34.1343005Z 2025/07/14 01:59:34 [TRACE] Waiting 10s before next try
2025-07-14T01:59:44.2402663Z 2025/07/14 01:59:44 [TRACE] Waiting 1m0s before next try
2025-07-14T02:00:44.3571335Z 2025/07/14 02:00:44 [TRACE] Waiting 10s before next try
2025-07-14T02:00:54.4484087Z 2025/07/14 02:00:54 [TRACE] Waiting 1m0s before next try
2025-07-14T02:01:54.5731819Z 2025/07/14 02:01:54 [TRACE] Waiting 10s before next try
2025-07-14T02:02:04.6897866Z 2025/07/14 02:02:04 [TRACE] Waiting 1m0s before next try
2025-07-14T02:03:04.8372987Z 2025/07/14 02:03:04 [TRACE] Waiting 10s before next try
2025-07-14T02:03:14.9536087Z 2025/07/14 02:03:14 [TRACE] Waiting 1m0s before next try
2025-07-14T02:04:15.0937485Z 2025/07/14 02:04:15 [TRACE] Waiting 10s before next try
2025-07-14T02:04:25.2011537Z 2025/07/14 02:04:25 [TRACE] Waiting 1m0s before next try
2025-07-14T02:05:25.4174988Z 2025/07/14 02:05:25 [TRACE] Waiting 10s before next try
2025-07-14T02:05:35.5148788Z 2025/07/14 02:05:35 [TRACE] Waiting 1m0s before next try
2025-07-14T02:06:35.7117104Z 2025/07/14 02:06:35 [TRACE] Waiting 10s before next try
2025-07-14T02:06:45.8116383Z 2025/07/14 02:06:45 [TRACE] Waiting 1m0s before next try
2025-07-14T02:07:45.9414799Z 2025/07/14 02:07:45 [TRACE] Waiting 10s before next try
2025-07-14T02:07:56.0582817Z 2025/07/14 02:07:56 [TRACE] Waiting 1m0s before next try
2025-07-14T02:08:56.2169815Z 2025/07/14 02:08:56 [TRACE] Waiting 10s before next try
2025-07-14T02:09:06.3217887Z 2025/07/14 02:09:06 [TRACE] Waiting 1m0s before next try
2025-07-14T02:10:06.5310157Z 2025/07/14 02:10:06 [TRACE] Waiting 10s before next try
2025-07-14T02:10:16.6249695Z 2025/07/14 02:10:16 [TRACE] Waiting 1m0s before next try
2025-07-14T02:11:16.8923156Z 2025/07/14 02:11:16 [TRACE] Waiting 10s before next try
2025-07-14T02:11:27.0104442Z 2025/07/14 02:11:27 [TRACE] Waiting 1m0s before next try
2025-07-14T02:12:27.1842201Z 2025/07/14 02:12:27 [TRACE] Waiting 10s before next try
2025-07-14T02:12:37.2992679Z 2025/07/14 02:12:37 [TRACE] Waiting 1m0s before next try
2025-07-14T02:13:37.4682113Z 2025/07/14 02:13:37 [TRACE] Waiting 10s before next try
2025-07-14T02:13:47.5679580Z 2025/07/14 02:13:47 [TRACE] Waiting 1m0s before next try
2025-07-14T02:14:47.8709358Z 2025/07/14 02:14:47 [TRACE] Waiting 10s before next try
2025-07-14T02:14:57.9628936Z 2025/07/14 02:14:57 [TRACE] Waiting 1m0s before next try
2025-07-14T02:15:58.1692638Z 2025/07/14 02:15:58 [TRACE] Waiting 10s before next try
2025-07-14T02:16:08.2849096Z 2025/07/14 02:16:08 [TRACE] Waiting 1m0s before next try
2025-07-14T02:17:08.4213051Z 2025/07/14 02:17:08 [TRACE] Waiting 10s before next try
2025-07-14T02:17:18.5438172Z 2025/07/14 02:17:18 [TRACE] Waiting 1m0s before next try
2025-07-14T02:18:18.6779556Z 2025/07/14 02:18:18 [TRACE] Waiting 10s before next try
2025-07-14T02:18:28.7965962Z 2025/07/14 02:18:28 [TRACE] Waiting 1m0s before next try
2025-07-14T02:19:29.0296011Z 2025/07/14 02:19:29 [TRACE] Waiting 10s before next try
2025-07-14T02:19:39.1383437Z 2025/07/14 02:19:39 [TRACE] Waiting 1m0s before next try
2025-07-14T02:20:39.3664298Z 2025/07/14 02:20:39 [TRACE] Waiting 10s before next try
2025-07-14T02:20:49.4676438Z 2025/07/14 02:20:49 [TRACE] Waiting 1m0s before next try
2025-07-14T02:21:49.6328643Z 2025/07/14 02:21:49 [TRACE] Waiting 10s before next try
2025-07-14T02:21:59.7293595Z 2025/07/14 02:21:59 [TRACE] Waiting 1m0s before next try
2025-07-14T02:22:59.9113833Z 2025/07/14 02:22:59 [TRACE] Waiting 10s before next try
2025-07-14T02:23:10.0225615Z 2025/07/14 02:23:10 [TRACE] Waiting 1m0s before next try
2025-07-14T02:24:10.1764020Z 2025/07/14 02:24:10 [TRACE] Waiting 10s before next try
2025-07-14T02:24:20.3041147Z 2025/07/14 02:24:20 [TRACE] Waiting 1m0s before next try
2025-07-14T02:25:20.5413522Z 2025/07/14 02:25:20 [TRACE] Waiting 10s before next try
2025-07-14T02:25:30.6586513Z 2025/07/14 02:25:30 [TRACE] Waiting 1m0s before next try
2025-07-14T02:26:30.8290362Z 2025/07/14 02:26:30 [TRACE] Waiting 10s before next try
2025-07-14T02:26:40.9369869Z 2025/07/14 02:26:40 [TRACE] Waiting 1m0s before next try
2025-07-14T02:27:41.0686992Z 2025/07/14 02:27:41 [TRACE] Waiting 10s before next try
2025-07-14T02:27:51.1578919Z 2025/07/14 02:27:51 [TRACE] Waiting 1m0s before next try
2025-07-14T02:28:51.3886037Z 2025/07/14 02:28:51 [TRACE] Waiting 10s before next try
2025-07-14T02:29:01.4883590Z 2025/07/14 02:29:01 [TRACE] Waiting 1m0s before next try
2025-07-14T02:30:01.6245177Z 2025/07/14 02:30:01 [TRACE] Waiting 10s before next try
2025-07-14T02:30:11.7147724Z 2025/07/14 02:30:11 [TRACE] Waiting 1m0s before next try
2025-07-14T02:30:57.6178144Z 2025/07/14 02:30:57 [WARN] WaitForState timeout after 1h0m0s
2025-07-14T02:30:57.6179101Z 2025/07/14 02:30:57 [WARN] WaitForState starting 30s refresh grace period
2025-07-14T02:30:57.6181440Z     resource_search_index_migration_test.go:15: 
2025-07-14T02:30:57.6183599Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-14T02:30:57.6188283Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-14T02:30:57.6191881Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:242
2025-07-14T02:30:57.6195721Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:15
2025-07-14T02:30:57.6197419Z         	Error:      	Received unexpected error:
2025-07-14T02:30:57.6199094Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T02:30:57.6200045Z         	Test:       	TestMigSearchIndex_withVector
2025-07-14T02:30:57.6201839Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4300394183665031681, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T02:30:57.6202979Z --- FAIL: TestMigSearchIndex_withVector (3600.58s)
```

- 2025-07-15 PASS 9 seconds
- 2025-07-16 PASS 10 seconds
- 2025-07-17 PASS 10 seconds
- 2025-07-18 PASS 11 seconds
- 2025-07-19 PASS 10 seconds
- 2025-07-20 PASS 10 seconds
- 2025-07-21 PASS 12 seconds
- 2025-07-22 PASS 10 seconds
- 2025-07-23
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-07-24 PASS 11 seconds
- 2025-07-25 PASS 10 seconds
- 2025-07-26 PASS 10 seconds
- 2025-07-27 PASS 11 seconds
- 2025-07-28 PASS 11 seconds
- 2025-07-29 PASS 10 seconds
- 2025-07-30 PASS 10 seconds