# search_index/searchindex/TestMigSearchIndex_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-05 to 2026-01-02 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-05 00:30](#error-2025-12-05t0030370000) |  | dev | timeout | 3603.01s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05

### Error 2025-12-05T00:30:37+00:00
```
2025-12-05T00:30:37.2388019Z === RUN   TestMigSearchIndex_basic
2025-12-05T00:30:37.2389026Z     resource_search_index_migration_test.go:11: Creating execution project: test-acc-tf-p-8488869945652414528
2025-12-05T00:30:39.5670292Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-4164970444166185874
2025-12-05T00:30:40.3380792Z 2025/12/05 00:30:40 [DEBUG] Waiting for state to become: [IDLE]
2025-12-05T00:33:40.7819443Z 2025/12/05 00:33:40 [TRACE] Waiting 1m0s before next try
2025-12-05T00:34:41.1899219Z 2025/12/05 00:34:41 [TRACE] Waiting 10s before next try
2025-12-05T00:34:51.4554917Z 2025/12/05 00:34:51 [TRACE] Waiting 1m0s before next try
2025-12-05T00:35:51.9104413Z 2025/12/05 00:35:51 [TRACE] Waiting 10s before next try
2025-12-05T00:36:02.1833777Z 2025/12/05 00:36:02 [TRACE] Waiting 1m0s before next try
2025-12-05T00:37:02.6491387Z 2025/12/05 00:37:02 [TRACE] Waiting 10s before next try
2025-12-05T00:37:12.9352549Z 2025/12/05 00:37:12 [TRACE] Waiting 1m0s before next try
2025-12-05T00:38:13.4116152Z 2025/12/05 00:38:13 [TRACE] Waiting 10s before next try
2025-12-05T00:38:23.6895172Z 2025/12/05 00:38:23 [TRACE] Waiting 1m0s before next try
2025-12-05T00:39:24.0893074Z 2025/12/05 00:39:24 [TRACE] Waiting 10s before next try
2025-12-05T00:39:34.3263526Z 2025/12/05 00:39:34 [TRACE] Waiting 1m0s before next try
2025-12-05T00:40:34.7903530Z 2025/12/05 00:40:34 [TRACE] Waiting 10s before next try
2025-12-05T00:40:45.0779126Z 2025/12/05 00:40:45 [TRACE] Waiting 1m0s before next try
2025-12-05T00:41:45.5075911Z 2025/12/05 00:41:45 [TRACE] Waiting 10s before next try
2025-12-05T00:41:55.7617651Z 2025/12/05 00:41:55 [TRACE] Waiting 1m0s before next try
2025-12-05T00:42:56.2174062Z 2025/12/05 00:42:56 [TRACE] Waiting 10s before next try
2025-12-05T00:43:06.4672373Z 2025/12/05 00:43:06 [TRACE] Waiting 1m0s before next try
2025-12-05T00:44:06.9093459Z 2025/12/05 00:44:06 [TRACE] Waiting 10s before next try
2025-12-05T00:44:17.1685092Z 2025/12/05 00:44:17 [TRACE] Waiting 1m0s before next try
2025-12-05T00:45:17.5891300Z 2025/12/05 00:45:17 [TRACE] Waiting 10s before next try
2025-12-05T00:45:27.8389653Z 2025/12/05 00:45:27 [TRACE] Waiting 1m0s before next try
2025-12-05T00:46:28.2671235Z 2025/12/05 00:46:28 [TRACE] Waiting 10s before next try
2025-12-05T00:46:38.5219930Z 2025/12/05 00:46:38 [TRACE] Waiting 1m0s before next try
2025-12-05T00:47:38.9513492Z 2025/12/05 00:47:38 [TRACE] Waiting 10s before next try
2025-12-05T00:47:49.2293111Z 2025/12/05 00:47:49 [TRACE] Waiting 1m0s before next try
2025-12-05T00:48:49.6540265Z 2025/12/05 00:48:49 [TRACE] Waiting 10s before next try
2025-12-05T00:48:59.9075404Z 2025/12/05 00:48:59 [TRACE] Waiting 1m0s before next try
2025-12-05T00:50:00.4318319Z 2025/12/05 00:50:00 [TRACE] Waiting 10s before next try
2025-12-05T00:50:10.7075978Z 2025/12/05 00:50:10 [TRACE] Waiting 1m0s before next try
2025-12-05T00:51:11.1338225Z 2025/12/05 00:51:11 [TRACE] Waiting 10s before next try
2025-12-05T00:51:21.4120176Z 2025/12/05 00:51:21 [TRACE] Waiting 1m0s before next try
2025-12-05T00:52:21.8443984Z 2025/12/05 00:52:21 [TRACE] Waiting 10s before next try
2025-12-05T00:52:32.0959945Z 2025/12/05 00:52:32 [TRACE] Waiting 1m0s before next try
2025-12-05T00:53:32.5218561Z 2025/12/05 00:53:32 [TRACE] Waiting 10s before next try
2025-12-05T00:53:42.7981246Z 2025/12/05 00:53:42 [TRACE] Waiting 1m0s before next try
2025-12-05T00:54:43.2222009Z 2025/12/05 00:54:43 [TRACE] Waiting 10s before next try
2025-12-05T00:54:53.4899250Z 2025/12/05 00:54:53 [TRACE] Waiting 1m0s before next try
2025-12-05T00:55:53.8954797Z 2025/12/05 00:55:53 [TRACE] Waiting 10s before next try
2025-12-05T00:56:04.1589582Z 2025/12/05 00:56:04 [TRACE] Waiting 1m0s before next try
2025-12-05T00:57:04.5811251Z 2025/12/05 00:57:04 [TRACE] Waiting 10s before next try
2025-12-05T00:57:14.8477952Z 2025/12/05 00:57:14 [TRACE] Waiting 1m0s before next try
2025-12-05T00:58:15.2529110Z 2025/12/05 00:58:15 [TRACE] Waiting 10s before next try
2025-12-05T00:58:25.5206258Z 2025/12/05 00:58:25 [TRACE] Waiting 1m0s before next try
2025-12-05T00:59:25.9344015Z 2025/12/05 00:59:25 [TRACE] Waiting 10s before next try
2025-12-05T00:59:36.1956648Z 2025/12/05 00:59:36 [TRACE] Waiting 1m0s before next try
2025-12-05T01:00:36.6112229Z 2025/12/05 01:00:36 [TRACE] Waiting 10s before next try
2025-12-05T01:00:46.8753332Z 2025/12/05 01:00:46 [TRACE] Waiting 1m0s before next try
2025-12-05T01:01:47.3232958Z 2025/12/05 01:01:47 [TRACE] Waiting 10s before next try
2025-12-05T01:01:57.5812679Z 2025/12/05 01:01:57 [TRACE] Waiting 1m0s before next try
2025-12-05T01:02:58.1160300Z 2025/12/05 01:02:58 [TRACE] Waiting 10s before next try
2025-12-05T01:03:08.3889720Z 2025/12/05 01:03:08 [TRACE] Waiting 1m0s before next try
2025-12-05T01:04:08.8294037Z 2025/12/05 01:04:08 [TRACE] Waiting 10s before next try
2025-12-05T01:04:19.0813392Z 2025/12/05 01:04:19 [TRACE] Waiting 1m0s before next try
2025-12-05T01:05:19.4998571Z 2025/12/05 01:05:19 [TRACE] Waiting 10s before next try
2025-12-05T01:05:29.7427190Z 2025/12/05 01:05:29 [TRACE] Waiting 1m0s before next try
2025-12-05T01:06:30.1635106Z 2025/12/05 01:06:30 [TRACE] Waiting 10s before next try
2025-12-05T01:06:40.4121197Z 2025/12/05 01:06:40 [TRACE] Waiting 1m0s before next try
2025-12-05T01:07:40.8082737Z 2025/12/05 01:07:40 [TRACE] Waiting 10s before next try
2025-12-05T01:07:51.0410922Z 2025/12/05 01:07:51 [TRACE] Waiting 1m0s before next try
2025-12-05T01:08:51.4375917Z 2025/12/05 01:08:51 [TRACE] Waiting 10s before next try
2025-12-05T01:09:01.6837207Z 2025/12/05 01:09:01 [TRACE] Waiting 1m0s before next try
2025-12-05T01:10:02.0612521Z 2025/12/05 01:10:02 [TRACE] Waiting 10s before next try
2025-12-05T01:10:12.3141498Z 2025/12/05 01:10:12 [TRACE] Waiting 1m0s before next try
2025-12-05T01:11:12.7077699Z 2025/12/05 01:11:12 [TRACE] Waiting 10s before next try
2025-12-05T01:11:22.9517030Z 2025/12/05 01:11:22 [TRACE] Waiting 1m0s before next try
2025-12-05T01:12:23.3895588Z 2025/12/05 01:12:23 [TRACE] Waiting 10s before next try
2025-12-05T01:12:33.6385543Z 2025/12/05 01:12:33 [TRACE] Waiting 1m0s before next try
2025-12-05T01:13:34.0290451Z 2025/12/05 01:13:34 [TRACE] Waiting 10s before next try
2025-12-05T01:13:44.2744517Z 2025/12/05 01:13:44 [TRACE] Waiting 1m0s before next try
2025-12-05T01:14:44.6509918Z 2025/12/05 01:14:44 [TRACE] Waiting 10s before next try
2025-12-05T01:14:54.8978213Z 2025/12/05 01:14:54 [TRACE] Waiting 1m0s before next try
2025-12-05T01:15:55.3064487Z 2025/12/05 01:15:55 [TRACE] Waiting 10s before next try
2025-12-05T01:16:05.5382799Z 2025/12/05 01:16:05 [TRACE] Waiting 1m0s before next try
2025-12-05T01:17:05.9323591Z 2025/12/05 01:17:05 [TRACE] Waiting 10s before next try
2025-12-05T01:17:16.1854692Z 2025/12/05 01:17:16 [TRACE] Waiting 1m0s before next try
2025-12-05T01:18:16.6150465Z 2025/12/05 01:18:16 [TRACE] Waiting 10s before next try
2025-12-05T01:18:26.8670130Z 2025/12/05 01:18:26 [TRACE] Waiting 1m0s before next try
2025-12-05T01:19:27.4073601Z 2025/12/05 01:19:27 [TRACE] Waiting 10s before next try
2025-12-05T01:19:37.6501791Z 2025/12/05 01:19:37 [TRACE] Waiting 1m0s before next try
2025-12-05T01:20:38.2189218Z 2025/12/05 01:20:38 [TRACE] Waiting 10s before next try
2025-12-05T01:20:48.4529926Z 2025/12/05 01:20:48 [TRACE] Waiting 1m0s before next try
2025-12-05T01:21:48.8522129Z 2025/12/05 01:21:48 [TRACE] Waiting 10s before next try
2025-12-05T01:21:59.0854321Z 2025/12/05 01:21:59 [TRACE] Waiting 1m0s before next try
2025-12-05T01:22:59.5132826Z 2025/12/05 01:22:59 [TRACE] Waiting 10s before next try
2025-12-05T01:23:09.7633746Z 2025/12/05 01:23:09 [TRACE] Waiting 1m0s before next try
2025-12-05T01:24:10.1592585Z 2025/12/05 01:24:10 [TRACE] Waiting 10s before next try
2025-12-05T01:24:20.3999962Z 2025/12/05 01:24:20 [TRACE] Waiting 1m0s before next try
2025-12-05T01:25:20.8131286Z 2025/12/05 01:25:20 [TRACE] Waiting 10s before next try
2025-12-05T01:25:31.0755628Z 2025/12/05 01:25:31 [TRACE] Waiting 1m0s before next try
2025-12-05T01:26:31.5198000Z 2025/12/05 01:26:31 [TRACE] Waiting 10s before next try
2025-12-05T01:26:41.7802375Z 2025/12/05 01:26:41 [TRACE] Waiting 1m0s before next try
2025-12-05T01:27:42.2262525Z 2025/12/05 01:27:42 [TRACE] Waiting 10s before next try
2025-12-05T01:27:52.4731763Z 2025/12/05 01:27:52 [TRACE] Waiting 1m0s before next try
2025-12-05T01:28:52.8680616Z 2025/12/05 01:28:52 [TRACE] Waiting 10s before next try
2025-12-05T01:29:03.1119673Z 2025/12/05 01:29:03 [TRACE] Waiting 1m0s before next try
2025-12-05T01:30:03.5461858Z 2025/12/05 01:30:03 [TRACE] Waiting 10s before next try
2025-12-05T01:30:13.7931642Z 2025/12/05 01:30:13 [TRACE] Waiting 1m0s before next try
2025-12-05T01:30:40.3445712Z 2025/12/05 01:30:40 [WARN] WaitForState timeout after 1h0m0s
2025-12-05T01:30:40.3447590Z 2025/12/05 01:30:40 [WARN] WaitForState starting 30s refresh grace period
2025-12-05T01:30:40.3450331Z     resource_search_index_migration_test.go:11: 
2025-12-05T01:30:40.3451831Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:47
2025-12-05T01:30:40.3454265Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:137
2025-12-05T01:30:40.3456685Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:198
2025-12-05T01:30:40.3459604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2025-12-05T01:30:40.3460642Z         	Error:      	Received unexpected error:
2025-12-05T01:30:40.3461797Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-12-05T01:30:40.3462447Z         	Test:       	TestMigSearchIndex_basic
2025-12-05T01:30:40.3463733Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4164970444166185874, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-12-05T01:30:40.3464498Z --- FAIL: TestMigSearchIndex_basic (3603.11s)
```

- 2025-12-06: MISSING
- 2025-12-07: MISSING
- 2025-12-08 PASS 13 minutes
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 13 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 12 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 14 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 13 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 14 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 14 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 13 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 14 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 12 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 11 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 12 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 10 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 9 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 10 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
