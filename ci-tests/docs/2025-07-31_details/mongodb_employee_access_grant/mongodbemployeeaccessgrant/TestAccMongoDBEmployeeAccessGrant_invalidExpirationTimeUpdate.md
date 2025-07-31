# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 03:30](#error-2025-07-14t0330590000) |  | dev | timeout | 3600.08s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 2 seconds
- 2025-07-03 PASS a second
- 2025-07-04 PASS 3 seconds
- 2025-07-05 PASS 2 seconds
- 2025-07-06 PASS a second
- 2025-07-07 PASS 2 seconds
- 2025-07-08 PASS 2 seconds
- 2025-07-09 PASS a second
- 2025-07-10
  - PASS a second
  - PASS 2 seconds
- 2025-07-11 PASS 2 seconds
- 2025-07-12 PASS a second
- 2025-07-13 PASS a second
- 2025-07-14

### Error 2025-07-14T03:30:59+00:00
```
2025-07-14T03:30:59.9119265Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2025-07-14T03:30:59.9120091Z     resource_test.go:81: Creating execution cluster: test-acc-tf-c-4991342200954420243
2025-07-14T03:31:00.6989189Z 2025/07/14 03:31:00 [DEBUG] Waiting for state to become: [IDLE]
2025-07-14T03:34:00.9555554Z 2025/07/14 03:34:00 [TRACE] Waiting 1m0s before next try
2025-07-14T03:35:01.1838490Z 2025/07/14 03:35:01 [TRACE] Waiting 10s before next try
2025-07-14T03:35:11.3263026Z 2025/07/14 03:35:11 [TRACE] Waiting 1m0s before next try
2025-07-14T03:36:11.5943215Z 2025/07/14 03:36:11 [TRACE] Waiting 10s before next try
2025-07-14T03:36:21.7478393Z 2025/07/14 03:36:21 [TRACE] Waiting 1m0s before next try
2025-07-14T03:37:21.9736974Z 2025/07/14 03:37:21 [TRACE] Waiting 10s before next try
2025-07-14T03:37:32.1298187Z 2025/07/14 03:37:32 [TRACE] Waiting 1m0s before next try
2025-07-14T03:38:32.3110760Z 2025/07/14 03:38:32 [TRACE] Waiting 10s before next try
2025-07-14T03:38:42.4511223Z 2025/07/14 03:38:42 [TRACE] Waiting 1m0s before next try
2025-07-14T03:39:42.6470495Z 2025/07/14 03:39:42 [TRACE] Waiting 10s before next try
2025-07-14T03:39:52.7969214Z 2025/07/14 03:39:52 [TRACE] Waiting 1m0s before next try
2025-07-14T03:40:53.0170013Z 2025/07/14 03:40:53 [TRACE] Waiting 10s before next try
2025-07-14T03:41:03.1413823Z 2025/07/14 03:41:03 [TRACE] Waiting 1m0s before next try
2025-07-14T03:42:03.3240997Z 2025/07/14 03:42:03 [TRACE] Waiting 10s before next try
2025-07-14T03:42:13.4527361Z 2025/07/14 03:42:13 [TRACE] Waiting 1m0s before next try
2025-07-14T03:43:13.6398783Z 2025/07/14 03:43:13 [TRACE] Waiting 10s before next try
2025-07-14T03:43:23.7516602Z 2025/07/14 03:43:23 [TRACE] Waiting 1m0s before next try
2025-07-14T03:44:23.9394027Z 2025/07/14 03:44:23 [TRACE] Waiting 10s before next try
2025-07-14T03:44:34.0950021Z 2025/07/14 03:44:34 [TRACE] Waiting 1m0s before next try
2025-07-14T03:45:34.3085882Z 2025/07/14 03:45:34 [TRACE] Waiting 10s before next try
2025-07-14T03:45:44.4321672Z 2025/07/14 03:45:44 [TRACE] Waiting 1m0s before next try
2025-07-14T03:46:44.6732038Z 2025/07/14 03:46:44 [TRACE] Waiting 10s before next try
2025-07-14T03:46:54.8194941Z 2025/07/14 03:46:54 [TRACE] Waiting 1m0s before next try
2025-07-14T03:47:55.0273388Z 2025/07/14 03:47:55 [TRACE] Waiting 10s before next try
2025-07-14T03:48:05.1637306Z 2025/07/14 03:48:05 [TRACE] Waiting 1m0s before next try
2025-07-14T03:49:05.3347799Z 2025/07/14 03:49:05 [TRACE] Waiting 10s before next try
2025-07-14T03:49:15.4672535Z 2025/07/14 03:49:15 [TRACE] Waiting 1m0s before next try
2025-07-14T03:50:15.6537533Z 2025/07/14 03:50:15 [TRACE] Waiting 10s before next try
2025-07-14T03:50:25.7927648Z 2025/07/14 03:50:25 [TRACE] Waiting 1m0s before next try
2025-07-14T03:51:25.9904106Z 2025/07/14 03:51:25 [TRACE] Waiting 10s before next try
2025-07-14T03:51:36.1211095Z 2025/07/14 03:51:36 [TRACE] Waiting 1m0s before next try
2025-07-14T03:52:36.3413896Z 2025/07/14 03:52:36 [TRACE] Waiting 10s before next try
2025-07-14T03:52:46.4986760Z 2025/07/14 03:52:46 [TRACE] Waiting 1m0s before next try
2025-07-14T03:53:46.6883258Z 2025/07/14 03:53:46 [TRACE] Waiting 10s before next try
2025-07-14T03:53:56.8178263Z 2025/07/14 03:53:56 [TRACE] Waiting 1m0s before next try
2025-07-14T03:54:57.0442991Z 2025/07/14 03:54:57 [TRACE] Waiting 10s before next try
2025-07-14T03:55:07.1760349Z 2025/07/14 03:55:07 [TRACE] Waiting 1m0s before next try
2025-07-14T03:56:07.4219070Z 2025/07/14 03:56:07 [TRACE] Waiting 10s before next try
2025-07-14T03:56:17.5415055Z 2025/07/14 03:56:17 [TRACE] Waiting 1m0s before next try
2025-07-14T03:57:18.0160819Z 2025/07/14 03:57:18 [TRACE] Waiting 10s before next try
2025-07-14T03:57:28.2486421Z 2025/07/14 03:57:28 [TRACE] Waiting 1m0s before next try
2025-07-14T03:58:28.8531854Z 2025/07/14 03:58:28 [TRACE] Waiting 10s before next try
2025-07-14T03:58:39.1202726Z 2025/07/14 03:58:39 [TRACE] Waiting 1m0s before next try
2025-07-14T03:59:39.3439761Z 2025/07/14 03:59:39 [TRACE] Waiting 10s before next try
2025-07-14T03:59:49.4644728Z 2025/07/14 03:59:49 [TRACE] Waiting 1m0s before next try
2025-07-14T04:00:50.0713960Z 2025/07/14 04:00:50 [TRACE] Waiting 10s before next try
2025-07-14T04:01:00.3521161Z 2025/07/14 04:01:00 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:00.8426215Z 2025/07/14 04:02:00 [TRACE] Waiting 10s before next try
2025-07-14T04:02:11.1321789Z 2025/07/14 04:02:11 [TRACE] Waiting 1m0s before next try
2025-07-14T04:03:11.3251880Z 2025/07/14 04:03:11 [TRACE] Waiting 10s before next try
2025-07-14T04:03:21.4674789Z 2025/07/14 04:03:21 [TRACE] Waiting 1m0s before next try
2025-07-14T04:04:21.7104137Z 2025/07/14 04:04:21 [TRACE] Waiting 10s before next try
2025-07-14T04:04:31.8401009Z 2025/07/14 04:04:31 [TRACE] Waiting 1m0s before next try
2025-07-14T04:05:32.0278991Z 2025/07/14 04:05:32 [TRACE] Waiting 10s before next try
2025-07-14T04:05:42.1623170Z 2025/07/14 04:05:42 [TRACE] Waiting 1m0s before next try
2025-07-14T04:06:42.3974928Z 2025/07/14 04:06:42 [TRACE] Waiting 10s before next try
2025-07-14T04:06:52.5519803Z 2025/07/14 04:06:52 [TRACE] Waiting 1m0s before next try
2025-07-14T04:07:52.7235220Z 2025/07/14 04:07:52 [TRACE] Waiting 10s before next try
2025-07-14T04:08:02.8771260Z 2025/07/14 04:08:02 [TRACE] Waiting 1m0s before next try
2025-07-14T04:09:03.1012781Z 2025/07/14 04:09:03 [TRACE] Waiting 10s before next try
2025-07-14T04:09:13.2285991Z 2025/07/14 04:09:13 [TRACE] Waiting 1m0s before next try
2025-07-14T04:10:13.4623297Z 2025/07/14 04:10:13 [TRACE] Waiting 10s before next try
2025-07-14T04:10:23.5970770Z 2025/07/14 04:10:23 [TRACE] Waiting 1m0s before next try
2025-07-14T04:11:23.7712503Z 2025/07/14 04:11:23 [TRACE] Waiting 10s before next try
2025-07-14T04:11:33.9237244Z 2025/07/14 04:11:33 [TRACE] Waiting 1m0s before next try
2025-07-14T04:12:34.1656226Z 2025/07/14 04:12:34 [TRACE] Waiting 10s before next try
2025-07-14T04:12:44.2824718Z 2025/07/14 04:12:44 [TRACE] Waiting 1m0s before next try
2025-07-14T04:13:44.4899995Z 2025/07/14 04:13:44 [TRACE] Waiting 10s before next try
2025-07-14T04:13:54.6238547Z 2025/07/14 04:13:54 [TRACE] Waiting 1m0s before next try
2025-07-14T04:14:54.8020091Z 2025/07/14 04:14:54 [TRACE] Waiting 10s before next try
2025-07-14T04:15:04.9322191Z 2025/07/14 04:15:04 [TRACE] Waiting 1m0s before next try
2025-07-14T04:16:05.1635654Z 2025/07/14 04:16:05 [TRACE] Waiting 10s before next try
2025-07-14T04:16:15.2915514Z 2025/07/14 04:16:15 [TRACE] Waiting 1m0s before next try
2025-07-14T04:17:15.5428445Z 2025/07/14 04:17:15 [TRACE] Waiting 10s before next try
2025-07-14T04:17:25.6769876Z 2025/07/14 04:17:25 [TRACE] Waiting 1m0s before next try
2025-07-14T04:18:25.8346437Z 2025/07/14 04:18:25 [TRACE] Waiting 10s before next try
2025-07-14T04:18:35.9517733Z 2025/07/14 04:18:35 [TRACE] Waiting 1m0s before next try
2025-07-14T04:19:36.1924458Z 2025/07/14 04:19:36 [TRACE] Waiting 10s before next try
2025-07-14T04:19:46.3361290Z 2025/07/14 04:19:46 [TRACE] Waiting 1m0s before next try
2025-07-14T04:20:46.5057748Z 2025/07/14 04:20:46 [TRACE] Waiting 10s before next try
2025-07-14T04:20:56.6411241Z 2025/07/14 04:20:56 [TRACE] Waiting 1m0s before next try
2025-07-14T04:21:56.9012339Z 2025/07/14 04:21:56 [TRACE] Waiting 10s before next try
2025-07-14T04:22:07.0393017Z 2025/07/14 04:22:07 [TRACE] Waiting 1m0s before next try
2025-07-14T04:23:07.2141155Z 2025/07/14 04:23:07 [TRACE] Waiting 10s before next try
2025-07-14T04:23:17.3498911Z 2025/07/14 04:23:17 [TRACE] Waiting 1m0s before next try
2025-07-14T04:24:17.5458496Z 2025/07/14 04:24:17 [TRACE] Waiting 10s before next try
2025-07-14T04:24:27.6958922Z 2025/07/14 04:24:27 [TRACE] Waiting 1m0s before next try
2025-07-14T04:25:27.9408055Z 2025/07/14 04:25:27 [TRACE] Waiting 10s before next try
2025-07-14T04:25:38.0725492Z 2025/07/14 04:25:38 [TRACE] Waiting 1m0s before next try
2025-07-14T04:26:38.2746249Z 2025/07/14 04:26:38 [TRACE] Waiting 10s before next try
2025-07-14T04:26:48.4347485Z 2025/07/14 04:26:48 [TRACE] Waiting 1m0s before next try
2025-07-14T04:27:48.6432851Z 2025/07/14 04:27:48 [TRACE] Waiting 10s before next try
2025-07-14T04:27:58.7593616Z 2025/07/14 04:27:58 [TRACE] Waiting 1m0s before next try
2025-07-14T04:28:58.9966204Z 2025/07/14 04:28:58 [TRACE] Waiting 10s before next try
2025-07-14T04:29:09.1367801Z 2025/07/14 04:29:09 [TRACE] Waiting 1m0s before next try
2025-07-14T04:30:09.3840619Z 2025/07/14 04:30:09 [TRACE] Waiting 10s before next try
2025-07-14T04:30:19.5178682Z 2025/07/14 04:30:19 [TRACE] Waiting 1m0s before next try
2025-07-14T04:31:00.7034234Z 2025/07/14 04:31:00 [WARN] WaitForState timeout after 1h0m0s
2025-07-14T04:31:00.7035782Z 2025/07/14 04:31:00 [WARN] WaitForState starting 30s refresh grace period
2025-07-14T04:31:00.7037357Z     resource_test.go:81: 
2025-07-14T04:31:00.7038999Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-14T04:31:00.7042219Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-14T04:31:00.7044525Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:81
2025-07-14T04:31:00.7045450Z         	Error:      	Received unexpected error:
2025-07-14T04:31:00.7046484Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T04:31:00.7047285Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2025-07-14T04:31:00.7048395Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4991342200954420243, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T04:31:00.7049224Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate (3600.79s)
```

- 2025-07-15 PASS 2 seconds
- 2025-07-16 PASS a second
- 2025-07-17 PASS 2 seconds
- 2025-07-18 PASS 2 seconds
- 2025-07-19 PASS a second
- 2025-07-20 PASS 2 seconds
- 2025-07-21 PASS 2 seconds
- 2025-07-22 PASS 3 seconds
- 2025-07-23
  - PASS a second
  - PASS a second
- 2025-07-24 PASS 2 seconds
- 2025-07-25 PASS a second
- 2025-07-26 PASS a second
- 2025-07-27 PASS a second
- 2025-07-28 PASS a second
- 2025-07-29 PASS 2 seconds
- 2025-07-30 PASS a second
- 2025-07-31 PASS 3 seconds