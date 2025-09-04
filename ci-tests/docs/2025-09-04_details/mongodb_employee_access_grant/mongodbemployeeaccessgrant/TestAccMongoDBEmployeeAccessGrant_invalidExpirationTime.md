# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 02:30](#error-2025-09-01t0230140000) |  | dev | timeout | 3600.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a moment
- 2025-08-07 PASS a moment
- 2025-08-08 PASS a moment
- 2025-08-09 PASS a moment
- 2025-08-10 PASS a moment
- 2025-08-11 PASS 13 minutes
- 2025-08-12 PASS a moment
- 2025-08-13 PASS a moment
- 2025-08-14 PASS a moment
- 2025-08-15 PASS a moment
- 2025-08-16 PASS a moment
- 2025-08-17 PASS a moment
- 2025-08-18 PASS a moment
- 2025-08-19 PASS a moment
- 2025-08-20
  - PASS a moment
  - PASS a moment
- 2025-08-21 PASS a moment
- 2025-08-22 PASS a moment
- 2025-08-23 PASS a moment
- 2025-08-24 PASS a moment
- 2025-08-25 PASS a moment
- 2025-08-26 PASS a moment
- 2025-08-27 PASS a moment
- 2025-08-28 PASS a moment
- 2025-08-29 PASS a moment
- 2025-08-30 PASS a moment
- 2025-08-31 PASS a moment
- 2025-09-01
  - FAIL an hour

### Error 2025-09-01T02:30:14+00:00
```
2025-09-01T02:30:14.3421310Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2025-09-01T02:30:14.3421962Z     resource_test.go:66: Creating execution cluster: test-acc-tf-c-8115256789143003268
2025-09-01T02:30:14.9992275Z 2025/09/01 02:30:14 [DEBUG] Waiting for state to become: [IDLE]
2025-09-01T02:33:15.2629720Z 2025/09/01 02:33:15 [TRACE] Waiting 1m0s before next try
2025-09-01T02:34:15.5911223Z 2025/09/01 02:34:15 [TRACE] Waiting 10s before next try
2025-09-01T02:34:25.6862868Z 2025/09/01 02:34:25 [TRACE] Waiting 1m0s before next try
2025-09-01T02:35:25.9357977Z 2025/09/01 02:35:25 [TRACE] Waiting 10s before next try
2025-09-01T02:35:36.0291119Z 2025/09/01 02:35:36 [TRACE] Waiting 1m0s before next try
2025-09-01T02:36:36.1479186Z 2025/09/01 02:36:36 [TRACE] Waiting 10s before next try
2025-09-01T02:36:46.2555643Z 2025/09/01 02:36:46 [TRACE] Waiting 1m0s before next try
2025-09-01T02:37:46.3709523Z 2025/09/01 02:37:46 [TRACE] Waiting 10s before next try
2025-09-01T02:37:56.4643061Z 2025/09/01 02:37:56 [TRACE] Waiting 1m0s before next try
2025-09-01T02:38:56.6734396Z 2025/09/01 02:38:56 [TRACE] Waiting 10s before next try
2025-09-01T02:39:06.7907407Z 2025/09/01 02:39:06 [TRACE] Waiting 1m0s before next try
2025-09-01T02:40:06.9546491Z 2025/09/01 02:40:06 [TRACE] Waiting 10s before next try
2025-09-01T02:40:17.0622183Z 2025/09/01 02:40:17 [TRACE] Waiting 1m0s before next try
2025-09-01T02:41:17.2447653Z 2025/09/01 02:41:17 [TRACE] Waiting 10s before next try
2025-09-01T02:41:27.3414280Z 2025/09/01 02:41:27 [TRACE] Waiting 1m0s before next try
2025-09-01T02:42:27.4952585Z 2025/09/01 02:42:27 [TRACE] Waiting 10s before next try
2025-09-01T02:42:37.5768632Z 2025/09/01 02:42:37 [TRACE] Waiting 1m0s before next try
2025-09-01T02:43:37.6794142Z 2025/09/01 02:43:37 [TRACE] Waiting 10s before next try
2025-09-01T02:43:47.7728026Z 2025/09/01 02:43:47 [TRACE] Waiting 1m0s before next try
2025-09-01T02:44:47.9379906Z 2025/09/01 02:44:47 [TRACE] Waiting 10s before next try
2025-09-01T02:44:58.0255446Z 2025/09/01 02:44:58 [TRACE] Waiting 1m0s before next try
2025-09-01T02:45:58.1601950Z 2025/09/01 02:45:58 [TRACE] Waiting 10s before next try
2025-09-01T02:46:08.2611341Z 2025/09/01 02:46:08 [TRACE] Waiting 1m0s before next try
2025-09-01T02:47:08.5013971Z 2025/09/01 02:47:08 [TRACE] Waiting 10s before next try
2025-09-01T02:47:18.6048544Z 2025/09/01 02:47:18 [TRACE] Waiting 1m0s before next try
2025-09-01T02:48:18.7478704Z 2025/09/01 02:48:18 [TRACE] Waiting 10s before next try
2025-09-01T02:48:28.8502148Z 2025/09/01 02:48:28 [TRACE] Waiting 1m0s before next try
2025-09-01T02:49:29.0453348Z 2025/09/01 02:49:29 [TRACE] Waiting 10s before next try
2025-09-01T02:49:39.1627736Z 2025/09/01 02:49:39 [TRACE] Waiting 1m0s before next try
2025-09-01T02:50:39.3132574Z 2025/09/01 02:50:39 [TRACE] Waiting 10s before next try
2025-09-01T02:50:49.4364097Z 2025/09/01 02:50:49 [TRACE] Waiting 1m0s before next try
2025-09-01T02:51:49.6918475Z 2025/09/01 02:51:49 [TRACE] Waiting 10s before next try
2025-09-01T02:51:59.7954292Z 2025/09/01 02:51:59 [TRACE] Waiting 1m0s before next try
2025-09-01T02:52:59.9360677Z 2025/09/01 02:52:59 [TRACE] Waiting 10s before next try
2025-09-01T02:53:10.0238375Z 2025/09/01 02:53:10 [TRACE] Waiting 1m0s before next try
2025-09-01T02:54:10.1838189Z 2025/09/01 02:54:10 [TRACE] Waiting 10s before next try
2025-09-01T02:54:20.2791732Z 2025/09/01 02:54:20 [TRACE] Waiting 1m0s before next try
2025-09-01T02:55:20.4151991Z 2025/09/01 02:55:20 [TRACE] Waiting 10s before next try
2025-09-01T02:55:30.5022792Z 2025/09/01 02:55:30 [TRACE] Waiting 1m0s before next try
2025-09-01T02:56:30.6556969Z 2025/09/01 02:56:30 [TRACE] Waiting 10s before next try
2025-09-01T02:56:40.7478420Z 2025/09/01 02:56:40 [TRACE] Waiting 1m0s before next try
2025-09-01T02:57:41.0488494Z 2025/09/01 02:57:41 [TRACE] Waiting 10s before next try
2025-09-01T02:57:51.1587882Z 2025/09/01 02:57:51 [TRACE] Waiting 1m0s before next try
2025-09-01T02:58:51.3631361Z 2025/09/01 02:58:51 [TRACE] Waiting 10s before next try
2025-09-01T02:59:01.4680107Z 2025/09/01 02:59:01 [TRACE] Waiting 1m0s before next try
2025-09-01T03:00:01.6307314Z 2025/09/01 03:00:01 [TRACE] Waiting 10s before next try
2025-09-01T03:00:11.7543261Z 2025/09/01 03:00:11 [TRACE] Waiting 1m0s before next try
2025-09-01T03:01:11.9654790Z 2025/09/01 03:01:11 [TRACE] Waiting 10s before next try
2025-09-01T03:01:22.0726980Z 2025/09/01 03:01:22 [TRACE] Waiting 1m0s before next try
2025-09-01T03:02:22.1969472Z 2025/09/01 03:02:22 [TRACE] Waiting 10s before next try
2025-09-01T03:02:32.3017183Z 2025/09/01 03:02:32 [TRACE] Waiting 1m0s before next try
2025-09-01T03:03:32.5473456Z 2025/09/01 03:03:32 [TRACE] Waiting 10s before next try
2025-09-01T03:03:42.6357735Z 2025/09/01 03:03:42 [TRACE] Waiting 1m0s before next try
2025-09-01T03:04:42.8329510Z 2025/09/01 03:04:42 [TRACE] Waiting 10s before next try
2025-09-01T03:04:52.9491316Z 2025/09/01 03:04:52 [TRACE] Waiting 1m0s before next try
2025-09-01T03:05:53.1038098Z 2025/09/01 03:05:53 [TRACE] Waiting 10s before next try
2025-09-01T03:06:03.2065438Z 2025/09/01 03:06:03 [TRACE] Waiting 1m0s before next try
2025-09-01T03:07:03.3412822Z 2025/09/01 03:07:03 [TRACE] Waiting 10s before next try
2025-09-01T03:07:13.4487383Z 2025/09/01 03:07:13 [TRACE] Waiting 1m0s before next try
2025-09-01T03:08:13.6537897Z 2025/09/01 03:08:13 [TRACE] Waiting 10s before next try
2025-09-01T03:08:23.7440071Z 2025/09/01 03:08:23 [TRACE] Waiting 1m0s before next try
2025-09-01T03:09:23.9133459Z 2025/09/01 03:09:23 [TRACE] Waiting 10s before next try
2025-09-01T03:09:34.0014800Z 2025/09/01 03:09:34 [TRACE] Waiting 1m0s before next try
2025-09-01T03:10:34.2183841Z 2025/09/01 03:10:34 [TRACE] Waiting 10s before next try
2025-09-01T03:10:44.3194917Z 2025/09/01 03:10:44 [TRACE] Waiting 1m0s before next try
2025-09-01T03:11:44.6342808Z 2025/09/01 03:11:44 [TRACE] Waiting 10s before next try
2025-09-01T03:11:54.7254287Z 2025/09/01 03:11:54 [TRACE] Waiting 1m0s before next try
2025-09-01T03:12:54.8633441Z 2025/09/01 03:12:54 [TRACE] Waiting 10s before next try
2025-09-01T03:13:04.9607521Z 2025/09/01 03:13:04 [TRACE] Waiting 1m0s before next try
2025-09-01T03:14:05.1810660Z 2025/09/01 03:14:05 [TRACE] Waiting 10s before next try
2025-09-01T03:14:15.2891829Z 2025/09/01 03:14:15 [TRACE] Waiting 1m0s before next try
2025-09-01T03:15:15.4980141Z 2025/09/01 03:15:15 [TRACE] Waiting 10s before next try
2025-09-01T03:15:25.6127567Z 2025/09/01 03:15:25 [TRACE] Waiting 1m0s before next try
2025-09-01T03:16:25.8922181Z 2025/09/01 03:16:25 [TRACE] Waiting 10s before next try
2025-09-01T03:16:35.9899661Z 2025/09/01 03:16:35 [TRACE] Waiting 1m0s before next try
2025-09-01T03:17:36.1646446Z 2025/09/01 03:17:36 [TRACE] Waiting 10s before next try
2025-09-01T03:17:46.2523059Z 2025/09/01 03:17:46 [TRACE] Waiting 1m0s before next try
2025-09-01T03:18:46.4078775Z 2025/09/01 03:18:46 [TRACE] Waiting 10s before next try
2025-09-01T03:18:56.5173980Z 2025/09/01 03:18:56 [TRACE] Waiting 1m0s before next try
2025-09-01T03:19:56.6602050Z 2025/09/01 03:19:56 [TRACE] Waiting 10s before next try
2025-09-01T03:20:06.7617590Z 2025/09/01 03:20:06 [TRACE] Waiting 1m0s before next try
2025-09-01T03:21:06.9117720Z 2025/09/01 03:21:06 [TRACE] Waiting 10s before next try
2025-09-01T03:21:17.0086511Z 2025/09/01 03:21:17 [TRACE] Waiting 1m0s before next try
2025-09-01T03:22:17.1891137Z 2025/09/01 03:22:17 [TRACE] Waiting 10s before next try
2025-09-01T03:22:27.2754748Z 2025/09/01 03:22:27 [TRACE] Waiting 1m0s before next try
2025-09-01T03:23:27.4027268Z 2025/09/01 03:23:27 [TRACE] Waiting 10s before next try
2025-09-01T03:23:37.5041365Z 2025/09/01 03:23:37 [TRACE] Waiting 1m0s before next try
2025-09-01T03:24:37.8457982Z 2025/09/01 03:24:37 [TRACE] Waiting 10s before next try
2025-09-01T03:24:47.9520937Z 2025/09/01 03:24:47 [TRACE] Waiting 1m0s before next try
2025-09-01T03:25:48.0541507Z 2025/09/01 03:25:48 [TRACE] Waiting 10s before next try
2025-09-01T03:25:58.1449127Z 2025/09/01 03:25:58 [TRACE] Waiting 1m0s before next try
2025-09-01T03:26:58.2812849Z 2025/09/01 03:26:58 [TRACE] Waiting 10s before next try
2025-09-01T03:27:08.3831199Z 2025/09/01 03:27:08 [TRACE] Waiting 1m0s before next try
2025-09-01T03:28:08.5098472Z 2025/09/01 03:28:08 [TRACE] Waiting 10s before next try
2025-09-01T03:28:18.6122696Z 2025/09/01 03:28:18 [TRACE] Waiting 1m0s before next try
2025-09-01T03:29:18.8367753Z 2025/09/01 03:29:18 [TRACE] Waiting 10s before next try
2025-09-01T03:29:28.9459228Z 2025/09/01 03:29:28 [TRACE] Waiting 1m0s before next try
2025-09-01T03:30:14.9995948Z 2025/09/01 03:30:14 [WARN] WaitForState timeout after 1h0m0s
2025-09-01T03:30:14.9997066Z 2025/09/01 03:30:14 [WARN] WaitForState starting 30s refresh grace period
2025-09-01T03:30:14.9997884Z     resource_test.go:66: 
2025-09-01T03:30:14.9999180Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-09-01T03:30:15.0002045Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:130
2025-09-01T03:30:15.0006163Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:66
2025-09-01T03:30:15.0007820Z         	Error:      	Received unexpected error:
2025-09-01T03:30:15.0009500Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T03:30:15.0010643Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2025-09-01T03:30:15.0012240Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8115256789143003268, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T03:30:15.0013164Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime (3600.66s)
```

  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
- 2025-09-02 PASS a moment
- 2025-09-03 PASS a moment
- 2025-09-04 PASS a moment