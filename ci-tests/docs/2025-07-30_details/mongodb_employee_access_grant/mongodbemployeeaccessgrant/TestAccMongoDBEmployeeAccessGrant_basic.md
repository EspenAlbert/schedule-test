# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 01:30](#error-2025-07-14t0130580000) |  | dev | timeout | 3600.07s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-07-02 PASS 9 seconds
- 2025-07-03 PASS 5 seconds
- 2025-07-04 PASS 9 seconds
- 2025-07-05 PASS 8 seconds
- 2025-07-06 PASS 6 seconds
- 2025-07-07 PASS 6 seconds
- 2025-07-08 PASS 6 seconds
- 2025-07-09 PASS 5 seconds
- 2025-07-10
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-07-11 PASS 7 seconds
- 2025-07-12 PASS 5 seconds
- 2025-07-13 PASS 5 seconds
- 2025-07-14

### Error 2025-07-14T01:30:58+00:00
```
2025-07-14T01:30:58.4356769Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-07-14T01:30:58.4357634Z     resource_test.go:26: Creating execution cluster: test-acc-tf-c-2923439888741617007
2025-07-14T01:30:59.1502627Z 2025/07/14 01:30:59 [DEBUG] Waiting for state to become: [IDLE]
2025-07-14T01:33:59.3939922Z 2025/07/14 01:33:59 [TRACE] Waiting 1m0s before next try
2025-07-14T01:34:59.6368593Z 2025/07/14 01:34:59 [TRACE] Waiting 10s before next try
2025-07-14T01:35:09.7805353Z 2025/07/14 01:35:09 [TRACE] Waiting 1m0s before next try
2025-07-14T01:36:09.9868182Z 2025/07/14 01:36:09 [TRACE] Waiting 10s before next try
2025-07-14T01:36:20.1143739Z 2025/07/14 01:36:20 [TRACE] Waiting 1m0s before next try
2025-07-14T01:37:20.4228048Z 2025/07/14 01:37:20 [TRACE] Waiting 10s before next try
2025-07-14T01:37:30.5529587Z 2025/07/14 01:37:30 [TRACE] Waiting 1m0s before next try
2025-07-14T01:38:30.7407102Z 2025/07/14 01:38:30 [TRACE] Waiting 10s before next try
2025-07-14T01:38:40.8810991Z 2025/07/14 01:38:40 [TRACE] Waiting 1m0s before next try
2025-07-14T01:39:41.0530229Z 2025/07/14 01:39:41 [TRACE] Waiting 10s before next try
2025-07-14T01:39:51.1800078Z 2025/07/14 01:39:51 [TRACE] Waiting 1m0s before next try
2025-07-14T01:40:51.3704836Z 2025/07/14 01:40:51 [TRACE] Waiting 10s before next try
2025-07-14T01:41:01.4967761Z 2025/07/14 01:41:01 [TRACE] Waiting 1m0s before next try
2025-07-14T01:42:01.7048325Z 2025/07/14 01:42:01 [TRACE] Waiting 10s before next try
2025-07-14T01:42:11.8527253Z 2025/07/14 01:42:11 [TRACE] Waiting 1m0s before next try
2025-07-14T01:43:12.0900113Z 2025/07/14 01:43:12 [TRACE] Waiting 10s before next try
2025-07-14T01:43:22.2364840Z 2025/07/14 01:43:22 [TRACE] Waiting 1m0s before next try
2025-07-14T01:44:22.4156235Z 2025/07/14 01:44:22 [TRACE] Waiting 10s before next try
2025-07-14T01:44:32.5630390Z 2025/07/14 01:44:32 [TRACE] Waiting 1m0s before next try
2025-07-14T01:45:32.7297389Z 2025/07/14 01:45:32 [TRACE] Waiting 10s before next try
2025-07-14T01:45:42.8461927Z 2025/07/14 01:45:42 [TRACE] Waiting 1m0s before next try
2025-07-14T01:46:43.0446566Z 2025/07/14 01:46:43 [TRACE] Waiting 10s before next try
2025-07-14T01:46:53.2008658Z 2025/07/14 01:46:53 [TRACE] Waiting 1m0s before next try
2025-07-14T01:47:53.3766492Z 2025/07/14 01:47:53 [TRACE] Waiting 10s before next try
2025-07-14T01:48:03.5331083Z 2025/07/14 01:48:03 [TRACE] Waiting 1m0s before next try
2025-07-14T01:49:03.7531361Z 2025/07/14 01:49:03 [TRACE] Waiting 10s before next try
2025-07-14T01:49:13.8902130Z 2025/07/14 01:49:13 [TRACE] Waiting 1m0s before next try
2025-07-14T01:50:14.1259042Z 2025/07/14 01:50:14 [TRACE] Waiting 10s before next try
2025-07-14T01:50:24.2708146Z 2025/07/14 01:50:24 [TRACE] Waiting 1m0s before next try
2025-07-14T01:51:24.4713345Z 2025/07/14 01:51:24 [TRACE] Waiting 10s before next try
2025-07-14T01:51:34.6050008Z 2025/07/14 01:51:34 [TRACE] Waiting 1m0s before next try
2025-07-14T01:52:34.7842073Z 2025/07/14 01:52:34 [TRACE] Waiting 10s before next try
2025-07-14T01:52:44.9464653Z 2025/07/14 01:52:44 [TRACE] Waiting 1m0s before next try
2025-07-14T01:53:45.1232561Z 2025/07/14 01:53:45 [TRACE] Waiting 10s before next try
2025-07-14T01:53:55.2680804Z 2025/07/14 01:53:55 [TRACE] Waiting 1m0s before next try
2025-07-14T01:54:55.4506336Z 2025/07/14 01:54:55 [TRACE] Waiting 10s before next try
2025-07-14T01:55:05.5695444Z 2025/07/14 01:55:05 [TRACE] Waiting 1m0s before next try
2025-07-14T01:56:05.7653672Z 2025/07/14 01:56:05 [TRACE] Waiting 10s before next try
2025-07-14T01:56:15.8983893Z 2025/07/14 01:56:15 [TRACE] Waiting 1m0s before next try
2025-07-14T01:57:16.0893299Z 2025/07/14 01:57:16 [TRACE] Waiting 10s before next try
2025-07-14T01:57:26.2158306Z 2025/07/14 01:57:26 [TRACE] Waiting 1m0s before next try
2025-07-14T01:58:26.4013265Z 2025/07/14 01:58:26 [TRACE] Waiting 10s before next try
2025-07-14T01:58:36.5411443Z 2025/07/14 01:58:36 [TRACE] Waiting 1m0s before next try
2025-07-14T01:59:36.7131120Z 2025/07/14 01:59:36 [TRACE] Waiting 10s before next try
2025-07-14T01:59:46.8245428Z 2025/07/14 01:59:46 [TRACE] Waiting 1m0s before next try
2025-07-14T02:00:47.0084140Z 2025/07/14 02:00:47 [TRACE] Waiting 10s before next try
2025-07-14T02:00:57.1232470Z 2025/07/14 02:00:57 [TRACE] Waiting 1m0s before next try
2025-07-14T02:01:57.2839466Z 2025/07/14 02:01:57 [TRACE] Waiting 10s before next try
2025-07-14T02:02:07.4046000Z 2025/07/14 02:02:07 [TRACE] Waiting 1m0s before next try
2025-07-14T02:03:07.6530122Z 2025/07/14 02:03:07 [TRACE] Waiting 10s before next try
2025-07-14T02:03:17.7778887Z 2025/07/14 02:03:17 [TRACE] Waiting 1m0s before next try
2025-07-14T02:04:17.9389782Z 2025/07/14 02:04:17 [TRACE] Waiting 10s before next try
2025-07-14T02:04:28.0503794Z 2025/07/14 02:04:28 [TRACE] Waiting 1m0s before next try
2025-07-14T02:05:28.2407359Z 2025/07/14 02:05:28 [TRACE] Waiting 10s before next try
2025-07-14T02:05:38.3706464Z 2025/07/14 02:05:38 [TRACE] Waiting 1m0s before next try
2025-07-14T02:06:38.6115576Z 2025/07/14 02:06:38 [TRACE] Waiting 10s before next try
2025-07-14T02:06:48.7449108Z 2025/07/14 02:06:48 [TRACE] Waiting 1m0s before next try
2025-07-14T02:07:48.9097167Z 2025/07/14 02:07:48 [TRACE] Waiting 10s before next try
2025-07-14T02:07:59.0363066Z 2025/07/14 02:07:59 [TRACE] Waiting 1m0s before next try
2025-07-14T02:08:59.3419720Z 2025/07/14 02:08:59 [TRACE] Waiting 10s before next try
2025-07-14T02:09:09.4565374Z 2025/07/14 02:09:09 [TRACE] Waiting 1m0s before next try
2025-07-14T02:10:09.6214531Z 2025/07/14 02:10:09 [TRACE] Waiting 10s before next try
2025-07-14T02:10:19.7506193Z 2025/07/14 02:10:19 [TRACE] Waiting 1m0s before next try
2025-07-14T02:11:19.9427556Z 2025/07/14 02:11:19 [TRACE] Waiting 10s before next try
2025-07-14T02:11:30.0571868Z 2025/07/14 02:11:30 [TRACE] Waiting 1m0s before next try
2025-07-14T02:12:30.2548024Z 2025/07/14 02:12:30 [TRACE] Waiting 10s before next try
2025-07-14T02:12:40.3863591Z 2025/07/14 02:12:40 [TRACE] Waiting 1m0s before next try
2025-07-14T02:13:40.5808289Z 2025/07/14 02:13:40 [TRACE] Waiting 10s before next try
2025-07-14T02:13:50.7260661Z 2025/07/14 02:13:50 [TRACE] Waiting 1m0s before next try
2025-07-14T02:14:50.9218059Z 2025/07/14 02:14:50 [TRACE] Waiting 10s before next try
2025-07-14T02:15:01.0496507Z 2025/07/14 02:15:01 [TRACE] Waiting 1m0s before next try
2025-07-14T02:16:01.2380294Z 2025/07/14 02:16:01 [TRACE] Waiting 10s before next try
2025-07-14T02:16:11.3731733Z 2025/07/14 02:16:11 [TRACE] Waiting 1m0s before next try
2025-07-14T02:17:11.5827529Z 2025/07/14 02:17:11 [TRACE] Waiting 10s before next try
2025-07-14T02:17:21.7147817Z 2025/07/14 02:17:21 [TRACE] Waiting 1m0s before next try
2025-07-14T02:18:21.9098295Z 2025/07/14 02:18:21 [TRACE] Waiting 10s before next try
2025-07-14T02:18:32.0478395Z 2025/07/14 02:18:32 [TRACE] Waiting 1m0s before next try
2025-07-14T02:19:32.2381734Z 2025/07/14 02:19:32 [TRACE] Waiting 10s before next try
2025-07-14T02:19:42.3620636Z 2025/07/14 02:19:42 [TRACE] Waiting 1m0s before next try
2025-07-14T02:20:42.5613925Z 2025/07/14 02:20:42 [TRACE] Waiting 10s before next try
2025-07-14T02:20:52.7185710Z 2025/07/14 02:20:52 [TRACE] Waiting 1m0s before next try
2025-07-14T02:21:52.9113694Z 2025/07/14 02:21:52 [TRACE] Waiting 10s before next try
2025-07-14T02:22:03.0442502Z 2025/07/14 02:22:03 [TRACE] Waiting 1m0s before next try
2025-07-14T02:23:03.2675857Z 2025/07/14 02:23:03 [TRACE] Waiting 10s before next try
2025-07-14T02:23:13.4092603Z 2025/07/14 02:23:13 [TRACE] Waiting 1m0s before next try
2025-07-14T02:24:13.5920189Z 2025/07/14 02:24:13 [TRACE] Waiting 10s before next try
2025-07-14T02:24:23.7282412Z 2025/07/14 02:24:23 [TRACE] Waiting 1m0s before next try
2025-07-14T02:25:23.9389205Z 2025/07/14 02:25:23 [TRACE] Waiting 10s before next try
2025-07-14T02:25:34.0876136Z 2025/07/14 02:25:34 [TRACE] Waiting 1m0s before next try
2025-07-14T02:26:34.3081470Z 2025/07/14 02:26:34 [TRACE] Waiting 10s before next try
2025-07-14T02:26:44.4418375Z 2025/07/14 02:26:44 [TRACE] Waiting 1m0s before next try
2025-07-14T02:27:44.6300531Z 2025/07/14 02:27:44 [TRACE] Waiting 10s before next try
2025-07-14T02:27:54.7836835Z 2025/07/14 02:27:54 [TRACE] Waiting 1m0s before next try
2025-07-14T02:28:54.9741134Z 2025/07/14 02:28:54 [TRACE] Waiting 10s before next try
2025-07-14T02:29:05.1166071Z 2025/07/14 02:29:05 [TRACE] Waiting 1m0s before next try
2025-07-14T02:30:05.3044115Z 2025/07/14 02:30:05 [TRACE] Waiting 10s before next try
2025-07-14T02:30:15.4608629Z 2025/07/14 02:30:15 [TRACE] Waiting 1m0s before next try
2025-07-14T02:30:59.1537341Z 2025/07/14 02:30:59 [WARN] WaitForState timeout after 1h0m0s
2025-07-14T02:30:59.1538302Z 2025/07/14 02:30:59 [WARN] WaitForState starting 30s refresh grace period
2025-07-14T02:30:59.1539173Z     resource_test.go:26: 
2025-07-14T02:30:59.1541301Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-14T02:30:59.1544717Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-14T02:30:59.1547290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2025-07-14T02:30:59.1549841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:26
2025-07-14T02:30:59.1550816Z         	Error:      	Received unexpected error:
2025-07-14T02:30:59.1551862Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T02:30:59.1552549Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_basic
2025-07-14T02:30:59.1553686Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2923439888741617007, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T02:30:59.1554449Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (3600.72s)
```

- 2025-07-15 PASS 9 seconds
- 2025-07-16 PASS 5 seconds
- 2025-07-17 PASS 9 seconds
- 2025-07-18 PASS 9 seconds
- 2025-07-19 PASS 6 seconds
- 2025-07-20 PASS 9 seconds
- 2025-07-21 PASS 9 seconds
- 2025-07-22 PASS 9 seconds
- 2025-07-23
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-07-24 PASS 9 seconds
- 2025-07-25 PASS 5 seconds
- 2025-07-26 PASS 5 seconds
- 2025-07-27 PASS 5 seconds
- 2025-07-28 PASS 6 seconds
- 2025-07-29 PASS 9 seconds
- 2025-07-30 PASS 5 seconds