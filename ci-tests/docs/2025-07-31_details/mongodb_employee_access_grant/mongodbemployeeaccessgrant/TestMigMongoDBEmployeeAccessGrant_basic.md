# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestMigMongoDBEmployeeAccessGrant_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 00:30](#error-2025-07-14t0030550000) |  | dev | timeout | 3603.01s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 11 minutes
- 2025-07-03 PASS 8 minutes
- 2025-07-04 PASS 10 minutes
- 2025-07-05 PASS 9 minutes
- 2025-07-06 PASS 10 minutes
- 2025-07-07 PASS 8 minutes
- 2025-07-08 PASS 8 minutes
- 2025-07-09 PASS 8 minutes
- 2025-07-10
  - PASS 8 minutes
  - PASS 10 minutes
- 2025-07-11 PASS 8 minutes
- 2025-07-12 PASS 10 minutes
- 2025-07-13 PASS 10 minutes
- 2025-07-14

### Error 2025-07-14T00:30:55+00:00
```
2025-07-14T00:30:55.3596486Z === RUN   TestMigMongoDBEmployeeAccessGrant_basic
2025-07-14T00:30:55.3599202Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-7891031017796291657
2025-07-14T00:30:57.8034297Z     resource_migration_test.go:11: Creating execution cluster: test-acc-tf-c-6848079050373845606
2025-07-14T00:30:58.4306542Z 2025/07/14 00:30:58 [DEBUG] Waiting for state to become: [IDLE]
2025-07-14T00:33:58.6614739Z 2025/07/14 00:33:58 [TRACE] Waiting 1m0s before next try
2025-07-14T00:34:58.8443734Z 2025/07/14 00:34:58 [TRACE] Waiting 10s before next try
2025-07-14T00:35:08.9668827Z 2025/07/14 00:35:08 [TRACE] Waiting 1m0s before next try
2025-07-14T00:36:09.1990307Z 2025/07/14 00:36:09 [TRACE] Waiting 10s before next try
2025-07-14T00:36:19.3359269Z 2025/07/14 00:36:19 [TRACE] Waiting 1m0s before next try
2025-07-14T00:37:19.5280325Z 2025/07/14 00:37:19 [TRACE] Waiting 10s before next try
2025-07-14T00:37:29.6637346Z 2025/07/14 00:37:29 [TRACE] Waiting 1m0s before next try
2025-07-14T00:38:29.8508476Z 2025/07/14 00:38:29 [TRACE] Waiting 10s before next try
2025-07-14T00:38:39.9722673Z 2025/07/14 00:38:39 [TRACE] Waiting 1m0s before next try
2025-07-14T00:39:40.1818868Z 2025/07/14 00:39:40 [TRACE] Waiting 10s before next try
2025-07-14T00:39:50.2977883Z 2025/07/14 00:39:50 [TRACE] Waiting 1m0s before next try
2025-07-14T00:40:50.5048823Z 2025/07/14 00:40:50 [TRACE] Waiting 10s before next try
2025-07-14T00:41:00.6423757Z 2025/07/14 00:41:00 [TRACE] Waiting 1m0s before next try
2025-07-14T00:42:00.9099591Z 2025/07/14 00:42:00 [TRACE] Waiting 10s before next try
2025-07-14T00:42:11.0400997Z 2025/07/14 00:42:11 [TRACE] Waiting 1m0s before next try
2025-07-14T00:43:11.2129061Z 2025/07/14 00:43:11 [TRACE] Waiting 10s before next try
2025-07-14T00:43:21.3561253Z 2025/07/14 00:43:21 [TRACE] Waiting 1m0s before next try
2025-07-14T00:44:21.5275227Z 2025/07/14 00:44:21 [TRACE] Waiting 10s before next try
2025-07-14T00:44:31.6682702Z 2025/07/14 00:44:31 [TRACE] Waiting 1m0s before next try
2025-07-14T00:45:31.8737523Z 2025/07/14 00:45:31 [TRACE] Waiting 10s before next try
2025-07-14T00:45:41.9980051Z 2025/07/14 00:45:41 [TRACE] Waiting 1m0s before next try
2025-07-14T00:46:42.1896676Z 2025/07/14 00:46:42 [TRACE] Waiting 10s before next try
2025-07-14T00:46:52.3228244Z 2025/07/14 00:46:52 [TRACE] Waiting 1m0s before next try
2025-07-14T00:47:52.5227579Z 2025/07/14 00:47:52 [TRACE] Waiting 10s before next try
2025-07-14T00:48:02.6679036Z 2025/07/14 00:48:02 [TRACE] Waiting 1m0s before next try
2025-07-14T00:49:02.8885388Z 2025/07/14 00:49:02 [TRACE] Waiting 10s before next try
2025-07-14T00:49:13.0167379Z 2025/07/14 00:49:13 [TRACE] Waiting 1m0s before next try
2025-07-14T00:50:13.1896610Z 2025/07/14 00:50:13 [TRACE] Waiting 10s before next try
2025-07-14T00:50:23.3249002Z 2025/07/14 00:50:23 [TRACE] Waiting 1m0s before next try
2025-07-14T00:51:23.5007334Z 2025/07/14 00:51:23 [TRACE] Waiting 10s before next try
2025-07-14T00:51:33.6112251Z 2025/07/14 00:51:33 [TRACE] Waiting 1m0s before next try
2025-07-14T00:52:33.7887075Z 2025/07/14 00:52:33 [TRACE] Waiting 10s before next try
2025-07-14T00:52:43.9314467Z 2025/07/14 00:52:43 [TRACE] Waiting 1m0s before next try
2025-07-14T00:53:44.1777974Z 2025/07/14 00:53:44 [TRACE] Waiting 10s before next try
2025-07-14T00:53:54.2994047Z 2025/07/14 00:53:54 [TRACE] Waiting 1m0s before next try
2025-07-14T00:54:54.5004966Z 2025/07/14 00:54:54 [TRACE] Waiting 10s before next try
2025-07-14T00:55:04.6406561Z 2025/07/14 00:55:04 [TRACE] Waiting 1m0s before next try
2025-07-14T00:56:04.8489678Z 2025/07/14 00:56:04 [TRACE] Waiting 10s before next try
2025-07-14T00:56:14.9797502Z 2025/07/14 00:56:14 [TRACE] Waiting 1m0s before next try
2025-07-14T00:57:15.1737676Z 2025/07/14 00:57:15 [TRACE] Waiting 10s before next try
2025-07-14T00:57:25.3177304Z 2025/07/14 00:57:25 [TRACE] Waiting 1m0s before next try
2025-07-14T00:58:25.5060572Z 2025/07/14 00:58:25 [TRACE] Waiting 10s before next try
2025-07-14T00:58:35.6218130Z 2025/07/14 00:58:35 [TRACE] Waiting 1m0s before next try
2025-07-14T00:59:35.8203981Z 2025/07/14 00:59:35 [TRACE] Waiting 10s before next try
2025-07-14T00:59:45.9689783Z 2025/07/14 00:59:45 [TRACE] Waiting 1m0s before next try
2025-07-14T01:00:46.1597259Z 2025/07/14 01:00:46 [TRACE] Waiting 10s before next try
2025-07-14T01:00:56.2971275Z 2025/07/14 01:00:56 [TRACE] Waiting 1m0s before next try
2025-07-14T01:01:56.5022161Z 2025/07/14 01:01:56 [TRACE] Waiting 10s before next try
2025-07-14T01:02:06.6291732Z 2025/07/14 01:02:06 [TRACE] Waiting 1m0s before next try
2025-07-14T01:03:06.8449276Z 2025/07/14 01:03:06 [TRACE] Waiting 10s before next try
2025-07-14T01:03:16.9787962Z 2025/07/14 01:03:16 [TRACE] Waiting 1m0s before next try
2025-07-14T01:04:17.1974222Z 2025/07/14 01:04:17 [TRACE] Waiting 10s before next try
2025-07-14T01:04:27.3268086Z 2025/07/14 01:04:27 [TRACE] Waiting 1m0s before next try
2025-07-14T01:05:27.5110291Z 2025/07/14 01:05:27 [TRACE] Waiting 10s before next try
2025-07-14T01:05:37.6383060Z 2025/07/14 01:05:37 [TRACE] Waiting 1m0s before next try
2025-07-14T01:06:37.9106433Z 2025/07/14 01:06:37 [TRACE] Waiting 10s before next try
2025-07-14T01:06:48.0390526Z 2025/07/14 01:06:48 [TRACE] Waiting 1m0s before next try
2025-07-14T01:07:48.2352935Z 2025/07/14 01:07:48 [TRACE] Waiting 10s before next try
2025-07-14T01:07:58.3614344Z 2025/07/14 01:07:58 [TRACE] Waiting 1m0s before next try
2025-07-14T01:08:58.5983935Z 2025/07/14 01:08:58 [TRACE] Waiting 10s before next try
2025-07-14T01:09:08.7070479Z 2025/07/14 01:09:08 [TRACE] Waiting 1m0s before next try
2025-07-14T01:10:08.9057234Z 2025/07/14 01:10:08 [TRACE] Waiting 10s before next try
2025-07-14T01:10:19.0577429Z 2025/07/14 01:10:19 [TRACE] Waiting 1m0s before next try
2025-07-14T01:11:19.2552865Z 2025/07/14 01:11:19 [TRACE] Waiting 10s before next try
2025-07-14T01:11:29.3941124Z 2025/07/14 01:11:29 [TRACE] Waiting 1m0s before next try
2025-07-14T01:12:29.5865962Z 2025/07/14 01:12:29 [TRACE] Waiting 10s before next try
2025-07-14T01:12:39.7066596Z 2025/07/14 01:12:39 [TRACE] Waiting 1m0s before next try
2025-07-14T01:13:39.8986281Z 2025/07/14 01:13:39 [TRACE] Waiting 10s before next try
2025-07-14T01:13:50.0394170Z 2025/07/14 01:13:50 [TRACE] Waiting 1m0s before next try
2025-07-14T01:14:50.2166495Z 2025/07/14 01:14:50 [TRACE] Waiting 10s before next try
2025-07-14T01:15:00.3472933Z 2025/07/14 01:15:00 [TRACE] Waiting 1m0s before next try
2025-07-14T01:16:00.5152253Z 2025/07/14 01:16:00 [TRACE] Waiting 10s before next try
2025-07-14T01:16:10.6451065Z 2025/07/14 01:16:10 [TRACE] Waiting 1m0s before next try
2025-07-14T01:17:10.8434541Z 2025/07/14 01:17:10 [TRACE] Waiting 10s before next try
2025-07-14T01:17:20.9831169Z 2025/07/14 01:17:20 [TRACE] Waiting 1m0s before next try
2025-07-14T01:18:21.1886029Z 2025/07/14 01:18:21 [TRACE] Waiting 10s before next try
2025-07-14T01:18:31.3054651Z 2025/07/14 01:18:31 [TRACE] Waiting 1m0s before next try
2025-07-14T01:19:31.4982752Z 2025/07/14 01:19:31 [TRACE] Waiting 10s before next try
2025-07-14T01:19:41.6211990Z 2025/07/14 01:19:41 [TRACE] Waiting 1m0s before next try
2025-07-14T01:20:41.8138690Z 2025/07/14 01:20:41 [TRACE] Waiting 10s before next try
2025-07-14T01:20:51.9473501Z 2025/07/14 01:20:51 [TRACE] Waiting 1m0s before next try
2025-07-14T01:21:52.1438176Z 2025/07/14 01:21:52 [TRACE] Waiting 10s before next try
2025-07-14T01:22:02.2873318Z 2025/07/14 01:22:02 [TRACE] Waiting 1m0s before next try
2025-07-14T01:23:02.4861150Z 2025/07/14 01:23:02 [TRACE] Waiting 10s before next try
2025-07-14T01:23:12.6242706Z 2025/07/14 01:23:12 [TRACE] Waiting 1m0s before next try
2025-07-14T01:24:12.8149499Z 2025/07/14 01:24:12 [TRACE] Waiting 10s before next try
2025-07-14T01:24:22.9582483Z 2025/07/14 01:24:22 [TRACE] Waiting 1m0s before next try
2025-07-14T01:25:23.1894885Z 2025/07/14 01:25:23 [TRACE] Waiting 10s before next try
2025-07-14T01:25:33.3213581Z 2025/07/14 01:25:33 [TRACE] Waiting 1m0s before next try
2025-07-14T01:26:33.5574300Z 2025/07/14 01:26:33 [TRACE] Waiting 10s before next try
2025-07-14T01:26:43.7143154Z 2025/07/14 01:26:43 [TRACE] Waiting 1m0s before next try
2025-07-14T01:27:43.8961738Z 2025/07/14 01:27:43 [TRACE] Waiting 10s before next try
2025-07-14T01:27:54.0298784Z 2025/07/14 01:27:54 [TRACE] Waiting 1m0s before next try
2025-07-14T01:28:54.2384052Z 2025/07/14 01:28:54 [TRACE] Waiting 10s before next try
2025-07-14T01:29:04.3736123Z 2025/07/14 01:29:04 [TRACE] Waiting 1m0s before next try
2025-07-14T01:30:04.5647648Z 2025/07/14 01:30:04 [TRACE] Waiting 10s before next try
2025-07-14T01:30:14.6934318Z 2025/07/14 01:30:14 [TRACE] Waiting 1m0s before next try
2025-07-14T01:30:58.4333916Z 2025/07/14 01:30:58 [WARN] WaitForState timeout after 1h0m0s
2025-07-14T01:30:58.4334856Z 2025/07/14 01:30:58 [WARN] WaitForState starting 30s refresh grace period
2025-07-14T01:30:58.4338196Z     resource_migration_test.go:11: 
2025-07-14T01:30:58.4340559Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-14T01:30:58.4344364Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-14T01:30:58.4348456Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2025-07-14T01:30:58.4351509Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_migration_test.go:11
2025-07-14T01:30:58.4352583Z         	Error:      	Received unexpected error:
2025-07-14T01:30:58.4353600Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T01:30:58.4354290Z         	Test:       	TestMigMongoDBEmployeeAccessGrant_basic
2025-07-14T01:30:58.4355428Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6848079050373845606, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T01:30:58.4356251Z --- FAIL: TestMigMongoDBEmployeeAccessGrant_basic (3603.07s)
```

- 2025-07-15 PASS 10 minutes
- 2025-07-16 PASS 10 minutes
- 2025-07-17 PASS 10 minutes
- 2025-07-18 PASS 10 minutes
- 2025-07-19 PASS 10 minutes
- 2025-07-20 PASS 10 minutes
- 2025-07-21 PASS 8 minutes
- 2025-07-22 PASS 8 minutes
- 2025-07-23
  - PASS 10 minutes
  - PASS 9 minutes
- 2025-07-24 PASS 8 minutes
- 2025-07-25 PASS 10 minutes
- 2025-07-26 PASS 7 minutes
- 2025-07-27 PASS 10 minutes
- 2025-07-28 PASS 7 minutes
- 2025-07-29 PASS 8 minutes
- 2025-07-30 PASS 10 minutes
- 2025-07-31 PASS 13 minutes