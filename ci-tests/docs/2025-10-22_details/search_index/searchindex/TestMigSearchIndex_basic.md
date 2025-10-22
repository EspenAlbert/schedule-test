# search_index/searchindex/TestMigSearchIndex_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 00:28](#error-2025-10-12t0028360000) |  | qa | timeout | 2339.03s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 13 minutes
- 2025-09-24 PASS 13 minutes
- 2025-09-25 PASS 14 minutes
- 2025-09-26 PASS 15 minutes
- 2025-09-27 PASS 13 minutes
- 2025-09-28 PASS 10 minutes
- 2025-09-29 PASS 13 minutes
- 2025-09-30
  - PASS 15 minutes
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-10-01
  - PASS 12 minutes
  - PASS 10 minutes
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 10 minutes
  - PASS 12 minutes
  - PASS 11 minutes
- 2025-10-02 PASS 12 minutes
- 2025-10-03 PASS 12 minutes
- 2025-10-04 PASS 19 minutes
- 2025-10-05 PASS 12 minutes
- 2025-10-06 PASS 10 minutes
- 2025-10-07 PASS 13 minutes
- 2025-10-08 PASS 13 minutes
- 2025-10-09 PASS 21 minutes
- 2025-10-10 PASS 13 minutes
- 2025-10-11 PASS 16 minutes
- 2025-10-12

### Error 2025-10-12T00:28:36+00:00
```
2025-10-12T00:28:36.6787512Z === RUN   TestMigSearchIndex_basic
2025-10-12T00:28:36.6788706Z     resource_search_index_migration_test.go:11: Creating execution project: test-acc-tf-p-4747484467837635477
2025-10-12T00:28:38.5411030Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-3869730621863071675
2025-10-12T00:28:39.1591168Z 2025/10/12 00:28:39 [DEBUG] Waiting for state to become: [IDLE]
2025-10-12T00:31:39.4221317Z 2025/10/12 00:31:39 [TRACE] Waiting 1m0s before next try
2025-10-12T00:32:39.6185974Z 2025/10/12 00:32:39 [TRACE] Waiting 10s before next try
2025-10-12T00:32:49.7636457Z 2025/10/12 00:32:49 [TRACE] Waiting 1m0s before next try
2025-10-12T00:33:50.0788645Z 2025/10/12 00:33:50 [TRACE] Waiting 10s before next try
2025-10-12T00:34:00.2151315Z 2025/10/12 00:34:00 [TRACE] Waiting 1m0s before next try
2025-10-12T00:35:00.4814502Z 2025/10/12 00:35:00 [TRACE] Waiting 10s before next try
2025-10-12T00:35:10.5973017Z 2025/10/12 00:35:10 [TRACE] Waiting 1m0s before next try
2025-10-12T00:36:10.8852559Z 2025/10/12 00:36:10 [TRACE] Waiting 10s before next try
2025-10-12T00:36:21.0149463Z 2025/10/12 00:36:21 [TRACE] Waiting 1m0s before next try
2025-10-12T00:37:21.3059768Z 2025/10/12 00:37:21 [TRACE] Waiting 10s before next try
2025-10-12T00:37:31.4616009Z 2025/10/12 00:37:31 [TRACE] Waiting 1m0s before next try
2025-10-12T00:38:31.7428202Z 2025/10/12 00:38:31 [TRACE] Waiting 10s before next try
2025-10-12T00:38:41.8940181Z 2025/10/12 00:38:41 [TRACE] Waiting 1m0s before next try
2025-10-12T00:39:42.0920840Z 2025/10/12 00:39:42 [TRACE] Waiting 10s before next try
2025-10-12T00:39:52.2207258Z 2025/10/12 00:39:52 [TRACE] Waiting 1m0s before next try
2025-10-12T00:40:52.4216358Z 2025/10/12 00:40:52 [TRACE] Waiting 10s before next try
2025-10-12T00:41:02.5557841Z 2025/10/12 00:41:02 [TRACE] Waiting 1m0s before next try
2025-10-12T00:42:02.7591599Z 2025/10/12 00:42:02 [TRACE] Waiting 10s before next try
2025-10-12T00:42:12.8836080Z 2025/10/12 00:42:12 [TRACE] Waiting 1m0s before next try
2025-10-12T00:43:13.0870722Z 2025/10/12 00:43:13 [TRACE] Waiting 10s before next try
2025-10-12T00:43:23.2218835Z 2025/10/12 00:43:23 [TRACE] Waiting 1m0s before next try
2025-10-12T00:44:23.4315065Z 2025/10/12 00:44:23 [TRACE] Waiting 10s before next try
2025-10-12T00:44:33.5666871Z 2025/10/12 00:44:33 [TRACE] Waiting 1m0s before next try
2025-10-12T00:45:33.7738456Z 2025/10/12 00:45:33 [TRACE] Waiting 10s before next try
2025-10-12T00:45:43.9065470Z 2025/10/12 00:45:43 [TRACE] Waiting 1m0s before next try
2025-10-12T00:46:44.1630516Z 2025/10/12 00:46:44 [TRACE] Waiting 10s before next try
2025-10-12T00:46:54.3185740Z 2025/10/12 00:46:54 [TRACE] Waiting 1m0s before next try
2025-10-12T00:47:54.4773849Z 2025/10/12 00:47:54 [TRACE] Waiting 10s before next try
2025-10-12T00:48:04.6179617Z 2025/10/12 00:48:04 [TRACE] Waiting 1m0s before next try
2025-10-12T00:49:04.8221844Z 2025/10/12 00:49:04 [TRACE] Waiting 10s before next try
2025-10-12T00:49:14.9444109Z 2025/10/12 00:49:14 [TRACE] Waiting 1m0s before next try
2025-10-12T00:50:15.1782892Z 2025/10/12 00:50:15 [TRACE] Waiting 10s before next try
2025-10-12T00:50:25.3324625Z 2025/10/12 00:50:25 [TRACE] Waiting 1m0s before next try
2025-10-12T00:51:25.5014260Z 2025/10/12 00:51:25 [TRACE] Waiting 10s before next try
2025-10-12T00:51:35.6466850Z 2025/10/12 00:51:35 [TRACE] Waiting 1m0s before next try
2025-10-12T00:52:35.9773163Z 2025/10/12 00:52:35 [DEBUG] Waiting for state to become: [COMPLETED]
2025-10-12T00:53:36.1358562Z 2025/10/12 00:53:36 [TRACE] Waiting 1m0s before next try
2025-10-12T00:54:36.3261391Z 2025/10/12 00:54:36 [TRACE] Waiting 10s before next try
2025-10-12T00:54:46.4143216Z 2025/10/12 00:54:46 [TRACE] Waiting 1m0s before next try
2025-10-12T00:55:46.5599107Z 2025/10/12 00:55:46 [TRACE] Waiting 10s before next try
2025-10-12T00:55:56.6508111Z 2025/10/12 00:55:56 [TRACE] Waiting 1m0s before next try
2025-10-12T00:56:56.8237691Z 2025/10/12 00:56:56 [TRACE] Waiting 10s before next try
2025-10-12T00:57:06.9137857Z 2025/10/12 00:57:06 [TRACE] Waiting 1m0s before next try
2025-10-12T00:58:07.1175664Z 2025/10/12 00:58:07 [TRACE] Waiting 10s before next try
2025-10-12T00:58:17.2058915Z 2025/10/12 00:58:17 [TRACE] Waiting 1m0s before next try
2025-10-12T00:59:17.4506393Z 2025/10/12 00:59:17 [TRACE] Waiting 10s before next try
2025-10-12T00:59:27.5361244Z 2025/10/12 00:59:27 [TRACE] Waiting 1m0s before next try
2025-10-12T01:00:27.7396318Z 2025/10/12 01:00:27 [TRACE] Waiting 10s before next try
2025-10-12T01:00:37.8462668Z 2025/10/12 01:00:37 [TRACE] Waiting 1m0s before next try
2025-10-12T01:01:38.0212690Z 2025/10/12 01:01:38 [TRACE] Waiting 10s before next try
2025-10-12T01:01:48.1028021Z 2025/10/12 01:01:48 [TRACE] Waiting 1m0s before next try
2025-10-12T01:02:48.2761576Z 2025/10/12 01:02:48 [TRACE] Waiting 10s before next try
2025-10-12T01:02:58.3668537Z 2025/10/12 01:02:58 [TRACE] Waiting 1m0s before next try
2025-10-12T01:03:58.5451902Z 2025/10/12 01:03:58 [TRACE] Waiting 10s before next try
2025-10-12T01:04:08.6323613Z 2025/10/12 01:04:08 [TRACE] Waiting 1m0s before next try
2025-10-12T01:05:08.7561869Z 2025/10/12 01:05:08 [TRACE] Waiting 10s before next try
2025-10-12T01:05:18.8439682Z 2025/10/12 01:05:18 [TRACE] Waiting 1m0s before next try
2025-10-12T01:06:18.9981677Z 2025/10/12 01:06:18 [TRACE] Waiting 10s before next try
2025-10-12T01:06:29.0784541Z 2025/10/12 01:06:29 [TRACE] Waiting 1m0s before next try
2025-10-12T01:07:29.1996867Z 2025/10/12 01:07:29 [TRACE] Waiting 10s before next try
2025-10-12T01:07:35.9784456Z 2025/10/12 01:07:35 [WARN] WaitForState timeout after 15m0s
2025-10-12T01:07:35.9785201Z 2025/10/12 01:07:35 [WARN] WaitForState starting 30s refresh grace period
2025-10-12T01:07:35.9788827Z     resource_search_index_migration_test.go:11: 
2025-10-12T01:07:35.9790999Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:139
2025-10-12T01:07:35.9794758Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:150
2025-10-12T01:07:35.9798494Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2025-10-12T01:07:35.9800144Z         	Error:      	Received unexpected error:
2025-10-12T01:07:35.9801926Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-10-12T01:07:35.9802936Z         	Test:       	TestMigSearchIndex_basic
2025-10-12T01:07:35.9803513Z --- FAIL: TestMigSearchIndex_basic (2339.30s)
```

- 2025-10-13 PASS 14 minutes
- 2025-10-14 PASS 12 minutes
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