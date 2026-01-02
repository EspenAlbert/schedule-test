# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestMigMongoDBEmployeeAccessGrant_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-05 to 2026-01-02 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-05 00:30](#error-2025-12-05t0030270000) |  | dev | timeout | 3603.08s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05

### Error 2025-12-05T00:30:27+00:00
```
2025-12-05T00:30:27.3076064Z === RUN   TestMigMongoDBEmployeeAccessGrant_basic
2025-12-05T00:30:27.3077532Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-6958163118220184562
2025-12-05T00:30:29.9564065Z     resource_migration_test.go:11: Creating execution cluster: test-acc-tf-c-3865929836985634932
2025-12-05T00:30:31.0688313Z 2025/12/05 00:30:31 [DEBUG] Waiting for state to become: [IDLE]
2025-12-05T00:33:31.2517440Z 2025/12/05 00:33:31 [TRACE] Waiting 1m0s before next try
2025-12-05T00:34:31.5659163Z 2025/12/05 00:34:31 [TRACE] Waiting 10s before next try
2025-12-05T00:34:41.6890839Z 2025/12/05 00:34:41 [TRACE] Waiting 1m0s before next try
2025-12-05T00:35:42.0143978Z 2025/12/05 00:35:42 [TRACE] Waiting 10s before next try
2025-12-05T00:35:52.1403144Z 2025/12/05 00:35:52 [TRACE] Waiting 1m0s before next try
2025-12-05T00:36:52.4410794Z 2025/12/05 00:36:52 [TRACE] Waiting 10s before next try
2025-12-05T00:37:02.6150322Z 2025/12/05 00:37:02 [TRACE] Waiting 1m0s before next try
2025-12-05T00:38:02.9012945Z 2025/12/05 00:38:02 [TRACE] Waiting 10s before next try
2025-12-05T00:38:13.0284424Z 2025/12/05 00:38:13 [TRACE] Waiting 1m0s before next try
2025-12-05T00:39:13.2444965Z 2025/12/05 00:39:13 [TRACE] Waiting 10s before next try
2025-12-05T00:39:23.3527055Z 2025/12/05 00:39:23 [TRACE] Waiting 1m0s before next try
2025-12-05T00:40:23.4952821Z 2025/12/05 00:40:23 [TRACE] Waiting 10s before next try
2025-12-05T00:40:33.6209851Z 2025/12/05 00:40:33 [TRACE] Waiting 1m0s before next try
2025-12-05T00:41:33.8050422Z 2025/12/05 00:41:33 [TRACE] Waiting 10s before next try
2025-12-05T00:41:43.9115901Z 2025/12/05 00:41:43 [TRACE] Waiting 1m0s before next try
2025-12-05T00:42:44.1129566Z 2025/12/05 00:42:44 [TRACE] Waiting 10s before next try
2025-12-05T00:42:54.2335617Z 2025/12/05 00:42:54 [TRACE] Waiting 1m0s before next try
2025-12-05T00:43:54.3811541Z 2025/12/05 00:43:54 [TRACE] Waiting 10s before next try
2025-12-05T00:44:04.4852982Z 2025/12/05 00:44:04 [TRACE] Waiting 1m0s before next try
2025-12-05T00:45:04.6570881Z 2025/12/05 00:45:04 [TRACE] Waiting 10s before next try
2025-12-05T00:45:14.7868754Z 2025/12/05 00:45:14 [TRACE] Waiting 1m0s before next try
2025-12-05T00:46:15.0344471Z 2025/12/05 00:46:15 [TRACE] Waiting 10s before next try
2025-12-05T00:46:25.1670561Z 2025/12/05 00:46:25 [TRACE] Waiting 1m0s before next try
2025-12-05T00:47:25.5430955Z 2025/12/05 00:47:25 [TRACE] Waiting 10s before next try
2025-12-05T00:47:35.6782065Z 2025/12/05 00:47:35 [TRACE] Waiting 1m0s before next try
2025-12-05T00:48:36.0110085Z 2025/12/05 00:48:36 [TRACE] Waiting 10s before next try
2025-12-05T00:48:46.1278836Z 2025/12/05 00:48:46 [TRACE] Waiting 1m0s before next try
2025-12-05T00:49:46.2715211Z 2025/12/05 00:49:46 [TRACE] Waiting 10s before next try
2025-12-05T00:49:56.3996382Z 2025/12/05 00:49:56 [TRACE] Waiting 1m0s before next try
2025-12-05T00:50:56.5630552Z 2025/12/05 00:50:56 [TRACE] Waiting 10s before next try
2025-12-05T00:51:06.6806148Z 2025/12/05 00:51:06 [TRACE] Waiting 1m0s before next try
2025-12-05T00:52:06.9183651Z 2025/12/05 00:52:06 [TRACE] Waiting 10s before next try
2025-12-05T00:52:17.0572012Z 2025/12/05 00:52:17 [TRACE] Waiting 1m0s before next try
2025-12-05T00:53:17.2733133Z 2025/12/05 00:53:17 [TRACE] Waiting 10s before next try
2025-12-05T00:53:27.3947134Z 2025/12/05 00:53:27 [TRACE] Waiting 1m0s before next try
2025-12-05T00:54:27.6220805Z 2025/12/05 00:54:27 [TRACE] Waiting 10s before next try
2025-12-05T00:54:37.7242974Z 2025/12/05 00:54:37 [TRACE] Waiting 1m0s before next try
2025-12-05T00:55:37.9673617Z 2025/12/05 00:55:37 [TRACE] Waiting 10s before next try
2025-12-05T00:55:48.0790085Z 2025/12/05 00:55:48 [TRACE] Waiting 1m0s before next try
2025-12-05T00:56:48.2403075Z 2025/12/05 00:56:48 [TRACE] Waiting 10s before next try
2025-12-05T00:56:58.3650202Z 2025/12/05 00:56:58 [TRACE] Waiting 1m0s before next try
2025-12-05T00:57:58.4946753Z 2025/12/05 00:57:58 [TRACE] Waiting 10s before next try
2025-12-05T00:58:08.6118354Z 2025/12/05 00:58:08 [TRACE] Waiting 1m0s before next try
2025-12-05T00:59:08.7660067Z 2025/12/05 00:59:08 [TRACE] Waiting 10s before next try
2025-12-05T00:59:18.8790503Z 2025/12/05 00:59:18 [TRACE] Waiting 1m0s before next try
2025-12-05T01:00:19.0493388Z 2025/12/05 01:00:19 [TRACE] Waiting 10s before next try
2025-12-05T01:00:29.1504130Z 2025/12/05 01:00:29 [TRACE] Waiting 1m0s before next try
2025-12-05T01:01:29.3530144Z 2025/12/05 01:01:29 [TRACE] Waiting 10s before next try
2025-12-05T01:01:39.4775097Z 2025/12/05 01:01:39 [TRACE] Waiting 1m0s before next try
2025-12-05T01:02:39.7093669Z 2025/12/05 01:02:39 [TRACE] Waiting 10s before next try
2025-12-05T01:02:49.8199631Z 2025/12/05 01:02:49 [TRACE] Waiting 1m0s before next try
2025-12-05T01:03:50.1380679Z 2025/12/05 01:03:50 [TRACE] Waiting 10s before next try
2025-12-05T01:04:00.2559074Z 2025/12/05 01:04:00 [TRACE] Waiting 1m0s before next try
2025-12-05T01:05:00.5276234Z 2025/12/05 01:05:00 [TRACE] Waiting 10s before next try
2025-12-05T01:05:10.6490688Z 2025/12/05 01:05:10 [TRACE] Waiting 1m0s before next try
2025-12-05T01:06:10.8788297Z 2025/12/05 01:06:10 [TRACE] Waiting 10s before next try
2025-12-05T01:06:21.0118348Z 2025/12/05 01:06:21 [TRACE] Waiting 1m0s before next try
2025-12-05T01:07:21.2404017Z 2025/12/05 01:07:21 [TRACE] Waiting 10s before next try
2025-12-05T01:07:31.3628500Z 2025/12/05 01:07:31 [TRACE] Waiting 1m0s before next try
2025-12-05T01:08:31.5225511Z 2025/12/05 01:08:31 [TRACE] Waiting 10s before next try
2025-12-05T01:08:41.6412267Z 2025/12/05 01:08:41 [TRACE] Waiting 1m0s before next try
2025-12-05T01:09:41.8539654Z 2025/12/05 01:09:41 [TRACE] Waiting 10s before next try
2025-12-05T01:09:51.9529496Z 2025/12/05 01:09:51 [TRACE] Waiting 1m0s before next try
2025-12-05T01:10:52.1033275Z 2025/12/05 01:10:52 [TRACE] Waiting 10s before next try
2025-12-05T01:11:02.2138626Z 2025/12/05 01:11:02 [TRACE] Waiting 1m0s before next try
2025-12-05T01:12:02.3517915Z 2025/12/05 01:12:02 [TRACE] Waiting 10s before next try
2025-12-05T01:12:12.4551972Z 2025/12/05 01:12:12 [TRACE] Waiting 1m0s before next try
2025-12-05T01:13:12.6573088Z 2025/12/05 01:13:12 [TRACE] Waiting 10s before next try
2025-12-05T01:13:22.7791866Z 2025/12/05 01:13:22 [TRACE] Waiting 1m0s before next try
2025-12-05T01:14:22.9248312Z 2025/12/05 01:14:22 [TRACE] Waiting 10s before next try
2025-12-05T01:14:33.0378848Z 2025/12/05 01:14:33 [TRACE] Waiting 1m0s before next try
2025-12-05T01:15:33.4035201Z 2025/12/05 01:15:33 [TRACE] Waiting 10s before next try
2025-12-05T01:15:43.5217072Z 2025/12/05 01:15:43 [TRACE] Waiting 1m0s before next try
2025-12-05T01:16:43.6984364Z 2025/12/05 01:16:43 [TRACE] Waiting 10s before next try
2025-12-05T01:16:53.7979394Z 2025/12/05 01:16:53 [TRACE] Waiting 1m0s before next try
2025-12-05T01:17:53.9651152Z 2025/12/05 01:17:53 [TRACE] Waiting 10s before next try
2025-12-05T01:18:04.0713804Z 2025/12/05 01:18:04 [TRACE] Waiting 1m0s before next try
2025-12-05T01:19:04.2268280Z 2025/12/05 01:19:04 [TRACE] Waiting 10s before next try
2025-12-05T01:19:14.3438564Z 2025/12/05 01:19:14 [TRACE] Waiting 1m0s before next try
2025-12-05T01:20:14.5194567Z 2025/12/05 01:20:14 [TRACE] Waiting 10s before next try
2025-12-05T01:20:24.6264237Z 2025/12/05 01:20:24 [TRACE] Waiting 1m0s before next try
2025-12-05T01:21:24.8157561Z 2025/12/05 01:21:24 [TRACE] Waiting 10s before next try
2025-12-05T01:21:34.9244507Z 2025/12/05 01:21:34 [TRACE] Waiting 1m0s before next try
2025-12-05T01:22:35.1042030Z 2025/12/05 01:22:35 [TRACE] Waiting 10s before next try
2025-12-05T01:22:45.2133974Z 2025/12/05 01:22:45 [TRACE] Waiting 1m0s before next try
2025-12-05T01:23:45.3334558Z 2025/12/05 01:23:45 [TRACE] Waiting 10s before next try
2025-12-05T01:23:55.4445853Z 2025/12/05 01:23:55 [TRACE] Waiting 1m0s before next try
2025-12-05T01:24:55.5716751Z 2025/12/05 01:24:55 [TRACE] Waiting 10s before next try
2025-12-05T01:25:05.6713525Z 2025/12/05 01:25:05 [TRACE] Waiting 1m0s before next try
2025-12-05T01:26:05.8256818Z 2025/12/05 01:26:05 [TRACE] Waiting 10s before next try
2025-12-05T01:26:15.9338857Z 2025/12/05 01:26:15 [TRACE] Waiting 1m0s before next try
2025-12-05T01:27:16.0880016Z 2025/12/05 01:27:16 [TRACE] Waiting 10s before next try
2025-12-05T01:27:26.2155908Z 2025/12/05 01:27:26 [TRACE] Waiting 1m0s before next try
2025-12-05T01:28:26.4348509Z 2025/12/05 01:28:26 [TRACE] Waiting 10s before next try
2025-12-05T01:28:36.5455552Z 2025/12/05 01:28:36 [TRACE] Waiting 1m0s before next try
2025-12-05T01:29:36.6635193Z 2025/12/05 01:29:36 [TRACE] Waiting 10s before next try
2025-12-05T01:29:46.7892151Z 2025/12/05 01:29:46 [TRACE] Waiting 1m0s before next try
2025-12-05T01:30:31.0692176Z 2025/12/05 01:30:31 [WARN] WaitForState timeout after 1h0m0s
2025-12-05T01:30:31.0694647Z 2025/12/05 01:30:31 [WARN] WaitForState starting 30s refresh grace period
2025-12-05T01:30:31.0707140Z     resource_migration_test.go:11: 
2025-12-05T01:30:31.0709462Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:47
2025-12-05T01:30:31.0712644Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:137
2025-12-05T01:30:31.0716236Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2025-12-05T01:30:31.0720273Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_migration_test.go:11
2025-12-05T01:30:31.0721289Z         	Error:      	Received unexpected error:
2025-12-05T01:30:31.0722319Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-12-05T01:30:31.0723144Z         	Test:       	TestMigMongoDBEmployeeAccessGrant_basic
2025-12-05T01:30:31.0724378Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3865929836985634932, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-12-05T01:30:31.0725207Z --- FAIL: TestMigMongoDBEmployeeAccessGrant_basic (3603.76s)
```

- 2025-12-06: MISSING
- 2025-12-07: MISSING
- 2025-12-08 PASS 8 minutes
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 11 minutes
  - PASS 10 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 11 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 10 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 10 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 11 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 11 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 11 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 11 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 11 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 11 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 8 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 8 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 8 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 8 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 8 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
