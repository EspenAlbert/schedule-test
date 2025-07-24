# search_index/searchindex/TestAccSearchIndex_withSearchType Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 03:30](#error-2025-07-14t0330580000) |  | dev | timeout | 3600.07s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 7 seconds
- 2025-06-26 PASS 6 seconds
- 2025-06-27 PASS 6 seconds
- 2025-06-28 PASS 7 seconds
- 2025-06-29 PASS 7 seconds
- 2025-06-30 PASS 5 seconds
- 2025-07-01
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-07-02 PASS 5 seconds
- 2025-07-03 PASS 6 seconds
- 2025-07-04 PASS 8 seconds
- 2025-07-05 PASS 6 seconds
- 2025-07-06 PASS 8 seconds
- 2025-07-07 PASS 7 seconds
- 2025-07-08 PASS 6 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10
  - PASS 8 seconds
  - PASS 6 seconds
- 2025-07-11 PASS 7 seconds
- 2025-07-12 PASS 9 seconds
- 2025-07-13 PASS 7 seconds
- 2025-07-14

### Error 2025-07-14T03:30:58+00:00
```
2025-07-14T03:30:58.4537554Z === RUN   TestAccSearchIndex_withSearchType
2025-07-14T03:30:58.4538118Z     resource_search_index_test.go:21: Creating execution cluster: test-acc-tf-c-2114671616048607006
2025-07-14T03:30:59.1327082Z 2025/07/14 03:30:59 [DEBUG] Waiting for state to become: [IDLE]
2025-07-14T03:33:59.3805905Z 2025/07/14 03:33:59 [TRACE] Waiting 1m0s before next try
2025-07-14T03:34:59.5621652Z 2025/07/14 03:34:59 [TRACE] Waiting 10s before next try
2025-07-14T03:35:09.6711642Z 2025/07/14 03:35:09 [TRACE] Waiting 1m0s before next try
2025-07-14T03:36:09.8205168Z 2025/07/14 03:36:09 [TRACE] Waiting 10s before next try
2025-07-14T03:36:19.9256122Z 2025/07/14 03:36:19 [TRACE] Waiting 1m0s before next try
2025-07-14T03:37:20.0631137Z 2025/07/14 03:37:20 [TRACE] Waiting 10s before next try
2025-07-14T03:37:30.1694826Z 2025/07/14 03:37:30 [TRACE] Waiting 1m0s before next try
2025-07-14T03:38:30.4280182Z 2025/07/14 03:38:30 [TRACE] Waiting 10s before next try
2025-07-14T03:38:40.5262058Z 2025/07/14 03:38:40 [TRACE] Waiting 1m0s before next try
2025-07-14T03:39:40.7195268Z 2025/07/14 03:39:40 [TRACE] Waiting 10s before next try
2025-07-14T03:39:50.8188241Z 2025/07/14 03:39:50 [TRACE] Waiting 1m0s before next try
2025-07-14T03:40:51.0782950Z 2025/07/14 03:40:51 [TRACE] Waiting 10s before next try
2025-07-14T03:41:01.1798283Z 2025/07/14 03:41:01 [TRACE] Waiting 1m0s before next try
2025-07-14T03:42:01.3813396Z 2025/07/14 03:42:01 [TRACE] Waiting 10s before next try
2025-07-14T03:42:11.5040326Z 2025/07/14 03:42:11 [TRACE] Waiting 1m0s before next try
2025-07-14T03:43:11.8856130Z 2025/07/14 03:43:11 [TRACE] Waiting 10s before next try
2025-07-14T03:43:21.9887919Z 2025/07/14 03:43:21 [TRACE] Waiting 1m0s before next try
2025-07-14T03:44:22.1337831Z 2025/07/14 03:44:22 [TRACE] Waiting 10s before next try
2025-07-14T03:44:32.2384508Z 2025/07/14 03:44:32 [TRACE] Waiting 1m0s before next try
2025-07-14T03:45:32.3927654Z 2025/07/14 03:45:32 [TRACE] Waiting 10s before next try
2025-07-14T03:45:42.5105616Z 2025/07/14 03:45:42 [TRACE] Waiting 1m0s before next try
2025-07-14T03:46:42.7401754Z 2025/07/14 03:46:42 [TRACE] Waiting 10s before next try
2025-07-14T03:46:52.8780950Z 2025/07/14 03:46:52 [TRACE] Waiting 1m0s before next try
2025-07-14T03:47:53.0656719Z 2025/07/14 03:47:53 [TRACE] Waiting 10s before next try
2025-07-14T03:48:03.1901033Z 2025/07/14 03:48:03 [TRACE] Waiting 1m0s before next try
2025-07-14T03:49:03.3241545Z 2025/07/14 03:49:03 [TRACE] Waiting 10s before next try
2025-07-14T03:49:13.4246343Z 2025/07/14 03:49:13 [TRACE] Waiting 1m0s before next try
2025-07-14T03:50:13.5624877Z 2025/07/14 03:50:13 [TRACE] Waiting 10s before next try
2025-07-14T03:50:23.6505161Z 2025/07/14 03:50:23 [TRACE] Waiting 1m0s before next try
2025-07-14T03:51:23.8451641Z 2025/07/14 03:51:23 [TRACE] Waiting 10s before next try
2025-07-14T03:51:33.9660147Z 2025/07/14 03:51:33 [TRACE] Waiting 1m0s before next try
2025-07-14T03:52:34.3044516Z 2025/07/14 03:52:34 [TRACE] Waiting 10s before next try
2025-07-14T03:52:44.4231114Z 2025/07/14 03:52:44 [TRACE] Waiting 1m0s before next try
2025-07-14T03:53:44.5676387Z 2025/07/14 03:53:44 [TRACE] Waiting 10s before next try
2025-07-14T03:53:54.6784179Z 2025/07/14 03:53:54 [TRACE] Waiting 1m0s before next try
2025-07-14T03:54:54.9163493Z 2025/07/14 03:54:54 [TRACE] Waiting 10s before next try
2025-07-14T03:55:05.0285487Z 2025/07/14 03:55:05 [TRACE] Waiting 1m0s before next try
2025-07-14T03:56:05.1491488Z 2025/07/14 03:56:05 [TRACE] Waiting 10s before next try
2025-07-14T03:56:15.2620648Z 2025/07/14 03:56:15 [TRACE] Waiting 1m0s before next try
2025-07-14T03:57:15.6949432Z 2025/07/14 03:57:15 [TRACE] Waiting 10s before next try
2025-07-14T03:57:25.9619182Z 2025/07/14 03:57:25 [TRACE] Waiting 1m0s before next try
2025-07-14T03:58:26.5050798Z 2025/07/14 03:58:26 [TRACE] Waiting 10s before next try
2025-07-14T03:58:36.7641313Z 2025/07/14 03:58:36 [TRACE] Waiting 1m0s before next try
2025-07-14T03:59:37.3218024Z 2025/07/14 03:59:37 [TRACE] Waiting 10s before next try
2025-07-14T03:59:47.6147252Z 2025/07/14 03:59:47 [TRACE] Waiting 1m0s before next try
2025-07-14T04:00:48.0978706Z 2025/07/14 04:00:48 [TRACE] Waiting 10s before next try
2025-07-14T04:00:58.3956155Z 2025/07/14 04:00:58 [TRACE] Waiting 1m0s before next try
2025-07-14T04:01:58.8718463Z 2025/07/14 04:01:58 [TRACE] Waiting 10s before next try
2025-07-14T04:02:09.1377444Z 2025/07/14 04:02:09 [TRACE] Waiting 1m0s before next try
2025-07-14T04:03:09.2976571Z 2025/07/14 04:03:09 [TRACE] Waiting 10s before next try
2025-07-14T04:03:19.3985672Z 2025/07/14 04:03:19 [TRACE] Waiting 1m0s before next try
2025-07-14T04:04:19.6262270Z 2025/07/14 04:04:19 [TRACE] Waiting 10s before next try
2025-07-14T04:04:29.7317737Z 2025/07/14 04:04:29 [TRACE] Waiting 1m0s before next try
2025-07-14T04:05:29.8925103Z 2025/07/14 04:05:29 [TRACE] Waiting 10s before next try
2025-07-14T04:05:40.0020202Z 2025/07/14 04:05:40 [TRACE] Waiting 1m0s before next try
2025-07-14T04:06:40.3325691Z 2025/07/14 04:06:40 [TRACE] Waiting 10s before next try
2025-07-14T04:06:50.4509132Z 2025/07/14 04:06:50 [TRACE] Waiting 1m0s before next try
2025-07-14T04:07:50.6086189Z 2025/07/14 04:07:50 [TRACE] Waiting 10s before next try
2025-07-14T04:08:00.7231853Z 2025/07/14 04:08:00 [TRACE] Waiting 1m0s before next try
2025-07-14T04:09:00.9409355Z 2025/07/14 04:09:00 [TRACE] Waiting 10s before next try
2025-07-14T04:09:11.0586207Z 2025/07/14 04:09:11 [TRACE] Waiting 1m0s before next try
2025-07-14T04:10:11.2554569Z 2025/07/14 04:10:11 [TRACE] Waiting 10s before next try
2025-07-14T04:10:21.3732146Z 2025/07/14 04:10:21 [TRACE] Waiting 1m0s before next try
2025-07-14T04:11:21.5136547Z 2025/07/14 04:11:21 [TRACE] Waiting 10s before next try
2025-07-14T04:11:31.6341474Z 2025/07/14 04:11:31 [TRACE] Waiting 1m0s before next try
2025-07-14T04:12:31.8574719Z 2025/07/14 04:12:31 [TRACE] Waiting 10s before next try
2025-07-14T04:12:41.9742251Z 2025/07/14 04:12:41 [TRACE] Waiting 1m0s before next try
2025-07-14T04:13:42.1906257Z 2025/07/14 04:13:42 [TRACE] Waiting 10s before next try
2025-07-14T04:13:52.3028674Z 2025/07/14 04:13:52 [TRACE] Waiting 1m0s before next try
2025-07-14T04:14:52.5434380Z 2025/07/14 04:14:52 [TRACE] Waiting 10s before next try
2025-07-14T04:15:02.6679347Z 2025/07/14 04:15:02 [TRACE] Waiting 1m0s before next try
2025-07-14T04:16:02.9465337Z 2025/07/14 04:16:02 [TRACE] Waiting 10s before next try
2025-07-14T04:16:13.0537665Z 2025/07/14 04:16:13 [TRACE] Waiting 1m0s before next try
2025-07-14T04:17:13.2763961Z 2025/07/14 04:17:13 [TRACE] Waiting 10s before next try
2025-07-14T04:17:23.4017585Z 2025/07/14 04:17:23 [TRACE] Waiting 1m0s before next try
2025-07-14T04:18:23.6009866Z 2025/07/14 04:18:23 [TRACE] Waiting 10s before next try
2025-07-14T04:18:33.7233983Z 2025/07/14 04:18:33 [TRACE] Waiting 1m0s before next try
2025-07-14T04:19:33.9350452Z 2025/07/14 04:19:33 [TRACE] Waiting 10s before next try
2025-07-14T04:19:44.0582921Z 2025/07/14 04:19:44 [TRACE] Waiting 1m0s before next try
2025-07-14T04:20:44.2645301Z 2025/07/14 04:20:44 [TRACE] Waiting 10s before next try
2025-07-14T04:20:54.3588644Z 2025/07/14 04:20:54 [TRACE] Waiting 1m0s before next try
2025-07-14T04:21:54.5127845Z 2025/07/14 04:21:54 [TRACE] Waiting 10s before next try
2025-07-14T04:22:04.6311396Z 2025/07/14 04:22:04 [TRACE] Waiting 1m0s before next try
2025-07-14T04:23:04.8041438Z 2025/07/14 04:23:04 [TRACE] Waiting 10s before next try
2025-07-14T04:23:14.9323532Z 2025/07/14 04:23:14 [TRACE] Waiting 1m0s before next try
2025-07-14T04:24:15.0746584Z 2025/07/14 04:24:15 [TRACE] Waiting 10s before next try
2025-07-14T04:24:25.1973752Z 2025/07/14 04:24:25 [TRACE] Waiting 1m0s before next try
2025-07-14T04:25:25.4642287Z 2025/07/14 04:25:25 [TRACE] Waiting 10s before next try
2025-07-14T04:25:35.5535052Z 2025/07/14 04:25:35 [TRACE] Waiting 1m0s before next try
2025-07-14T04:26:35.7391401Z 2025/07/14 04:26:35 [TRACE] Waiting 10s before next try
2025-07-14T04:26:45.8534787Z 2025/07/14 04:26:45 [TRACE] Waiting 1m0s before next try
2025-07-14T04:27:45.9892062Z 2025/07/14 04:27:45 [TRACE] Waiting 10s before next try
2025-07-14T04:27:56.1100195Z 2025/07/14 04:27:56 [TRACE] Waiting 1m0s before next try
2025-07-14T04:28:56.2486446Z 2025/07/14 04:28:56 [TRACE] Waiting 10s before next try
2025-07-14T04:29:06.3704759Z 2025/07/14 04:29:06 [TRACE] Waiting 1m0s before next try
2025-07-14T04:30:06.5603684Z 2025/07/14 04:30:06 [TRACE] Waiting 10s before next try
2025-07-14T04:30:16.6563294Z 2025/07/14 04:30:16 [TRACE] Waiting 1m0s before next try
2025-07-14T04:30:59.1375076Z 2025/07/14 04:30:59 [WARN] WaitForState timeout after 1h0m0s
2025-07-14T04:30:59.1376043Z 2025/07/14 04:30:59 [WARN] WaitForState starting 30s refresh grace period
2025-07-14T04:30:59.1378005Z     resource_search_index_test.go:21: 
2025-07-14T04:30:59.1380008Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-14T04:30:59.1384117Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-14T04:30:59.1387590Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:21
2025-07-14T04:30:59.1388454Z         	Error:      	Received unexpected error:
2025-07-14T04:30:59.1389430Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T04:30:59.1390009Z         	Test:       	TestAccSearchIndex_withSearchType
2025-07-14T04:30:59.1391076Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2114671616048607006, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T04:30:59.1391822Z --- FAIL: TestAccSearchIndex_withSearchType (3600.69s)
```

- 2025-07-15 PASS 8 seconds
- 2025-07-16 PASS 7 seconds
- 2025-07-17 PASS 7 seconds
- 2025-07-18 PASS 8 seconds
- 2025-07-19 PASS 7 seconds
- 2025-07-20 PASS 6 seconds
- 2025-07-21 PASS 8 seconds
- 2025-07-22 PASS 7 seconds
- 2025-07-23
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-07-24 PASS 8 seconds