# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestMigMongoDBEmployeeAccessGrant_basic Test Details
# Found 21 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-11 00:41](#error-2026-09-11t0041380000) |  | dev | timeout | 3605.03s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 20 minutes
- 2026-09-03: MISSING
- 2026-09-04 PASS 23 minutes
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07 PASS 15 minutes
- 2026-09-08: MISSING
- 2026-09-09 PASS 14 minutes
- 2026-09-10: MISSING
- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T00:41:38+00:00
```
2026-09-11T00:41:38.7132764Z === RUN   TestMigMongoDBEmployeeAccessGrant_basic
2026-09-11T00:41:38.7137301Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-512366633371075254
2026-09-11T00:41:42.2635589Z     resource_migration_test.go:11: Creating execution cluster: test-acc-tf-c-2609873551584154377
2026-09-11T00:41:44.0325006Z 2026/09/11 00:41:44 [DEBUG] Waiting for state to become: [IDLE]
2026-09-11T00:44:44.3741857Z 2026/09/11 00:44:44 [TRACE] Waiting 1m0s before next try
2026-09-11T00:45:44.7155087Z 2026/09/11 00:45:44 [TRACE] Waiting 10s before next try
2026-09-11T00:45:54.8918194Z 2026/09/11 00:45:54 [TRACE] Waiting 1m0s before next try
2026-09-11T00:46:55.1822147Z 2026/09/11 00:46:55 [TRACE] Waiting 10s before next try
2026-09-11T00:47:05.3652693Z 2026/09/11 00:47:05 [TRACE] Waiting 1m0s before next try
2026-09-11T00:48:05.6973749Z 2026/09/11 00:48:05 [TRACE] Waiting 10s before next try
2026-09-11T00:48:15.8591035Z 2026/09/11 00:48:15 [TRACE] Waiting 1m0s before next try
2026-09-11T00:49:16.2327282Z 2026/09/11 00:49:16 [TRACE] Waiting 10s before next try
2026-09-11T00:49:26.4343132Z 2026/09/11 00:49:26 [TRACE] Waiting 1m0s before next try
2026-09-11T00:50:26.7685665Z 2026/09/11 00:50:26 [TRACE] Waiting 10s before next try
2026-09-11T00:50:36.9727922Z 2026/09/11 00:50:36 [TRACE] Waiting 1m0s before next try
2026-09-11T00:51:37.2163869Z 2026/09/11 00:51:37 [TRACE] Waiting 10s before next try
2026-09-11T00:51:47.3843228Z 2026/09/11 00:51:47 [TRACE] Waiting 1m0s before next try
2026-09-11T00:52:47.6342241Z 2026/09/11 00:52:47 [TRACE] Waiting 10s before next try
2026-09-11T00:52:57.8299944Z 2026/09/11 00:52:57 [TRACE] Waiting 1m0s before next try
2026-09-11T00:53:58.1306175Z 2026/09/11 00:53:58 [TRACE] Waiting 10s before next try
2026-09-11T00:54:08.3209248Z 2026/09/11 00:54:08 [TRACE] Waiting 1m0s before next try
2026-09-11T00:55:08.6168279Z 2026/09/11 00:55:08 [TRACE] Waiting 10s before next try
2026-09-11T00:55:18.7753074Z 2026/09/11 00:55:18 [TRACE] Waiting 1m0s before next try
2026-09-11T00:56:19.2234355Z 2026/09/11 00:56:19 [TRACE] Waiting 10s before next try
2026-09-11T00:56:29.4022924Z 2026/09/11 00:56:29 [TRACE] Waiting 1m0s before next try
2026-09-11T00:57:29.6541269Z 2026/09/11 00:57:29 [TRACE] Waiting 10s before next try
2026-09-11T00:57:39.8177943Z 2026/09/11 00:57:39 [TRACE] Waiting 1m0s before next try
2026-09-11T00:58:40.0733452Z 2026/09/11 00:58:40 [TRACE] Waiting 10s before next try
2026-09-11T00:58:50.3543735Z 2026/09/11 00:58:50 [TRACE] Waiting 1m0s before next try
2026-09-11T00:59:50.5304528Z 2026/09/11 00:59:50 [TRACE] Waiting 10s before next try
2026-09-11T01:00:00.6852991Z 2026/09/11 01:00:00 [TRACE] Waiting 1m0s before next try
2026-09-11T01:01:00.9777513Z 2026/09/11 01:01:00 [TRACE] Waiting 10s before next try
2026-09-11T01:01:11.1744397Z 2026/09/11 01:01:11 [TRACE] Waiting 1m0s before next try
2026-09-11T01:02:11.5442868Z 2026/09/11 01:02:11 [TRACE] Waiting 10s before next try
2026-09-11T01:02:21.7344990Z 2026/09/11 01:02:21 [TRACE] Waiting 1m0s before next try
2026-09-11T01:03:21.9032112Z 2026/09/11 01:03:21 [TRACE] Waiting 10s before next try
2026-09-11T01:03:32.0692837Z 2026/09/11 01:03:32 [TRACE] Waiting 1m0s before next try
2026-09-11T01:04:32.3061757Z 2026/09/11 01:04:32 [TRACE] Waiting 10s before next try
2026-09-11T01:04:42.4974715Z 2026/09/11 01:04:42 [TRACE] Waiting 1m0s before next try
2026-09-11T01:05:42.7238880Z 2026/09/11 01:05:42 [TRACE] Waiting 10s before next try
2026-09-11T01:05:52.9366300Z 2026/09/11 01:05:52 [TRACE] Waiting 1m0s before next try
2026-09-11T01:06:53.1340299Z 2026/09/11 01:06:53 [TRACE] Waiting 10s before next try
2026-09-11T01:07:03.3268547Z 2026/09/11 01:07:03 [TRACE] Waiting 1m0s before next try
2026-09-11T01:08:03.5283627Z 2026/09/11 01:08:03 [TRACE] Waiting 10s before next try
2026-09-11T01:08:13.6669995Z 2026/09/11 01:08:13 [TRACE] Waiting 1m0s before next try
2026-09-11T01:09:14.0231705Z 2026/09/11 01:09:14 [TRACE] Waiting 10s before next try
2026-09-11T01:09:24.1716053Z 2026/09/11 01:09:24 [TRACE] Waiting 1m0s before next try
2026-09-11T01:10:24.4507709Z 2026/09/11 01:10:24 [TRACE] Waiting 10s before next try
2026-09-11T01:10:34.6433711Z 2026/09/11 01:10:34 [TRACE] Waiting 1m0s before next try
2026-09-11T01:11:34.8794282Z 2026/09/11 01:11:34 [TRACE] Waiting 10s before next try
2026-09-11T01:11:45.0333328Z 2026/09/11 01:11:45 [TRACE] Waiting 1m0s before next try
2026-09-11T01:12:45.2917527Z 2026/09/11 01:12:45 [TRACE] Waiting 10s before next try
2026-09-11T01:12:55.4375534Z 2026/09/11 01:12:55 [TRACE] Waiting 1m0s before next try
2026-09-11T01:13:55.6583461Z 2026/09/11 01:13:55 [TRACE] Waiting 10s before next try
2026-09-11T01:14:05.8109492Z 2026/09/11 01:14:05 [TRACE] Waiting 1m0s before next try
2026-09-11T01:15:06.0599870Z 2026/09/11 01:15:06 [TRACE] Waiting 10s before next try
2026-09-11T01:15:16.2531557Z 2026/09/11 01:15:16 [TRACE] Waiting 1m0s before next try
2026-09-11T01:16:16.4194563Z 2026/09/11 01:16:16 [TRACE] Waiting 10s before next try
2026-09-11T01:16:26.5493524Z 2026/09/11 01:16:26 [TRACE] Waiting 1m0s before next try
2026-09-11T01:17:26.7104462Z 2026/09/11 01:17:26 [TRACE] Waiting 10s before next try
2026-09-11T01:17:36.8806012Z 2026/09/11 01:17:36 [TRACE] Waiting 1m0s before next try
2026-09-11T01:18:37.0336613Z 2026/09/11 01:18:37 [TRACE] Waiting 10s before next try
2026-09-11T01:18:47.1668830Z 2026/09/11 01:18:47 [TRACE] Waiting 1m0s before next try
2026-09-11T01:19:47.3943203Z 2026/09/11 01:19:47 [TRACE] Waiting 10s before next try
2026-09-11T01:19:57.6233844Z 2026/09/11 01:19:57 [TRACE] Waiting 1m0s before next try
2026-09-11T01:20:58.0104868Z 2026/09/11 01:20:58 [TRACE] Waiting 10s before next try
2026-09-11T01:21:08.1596842Z 2026/09/11 01:21:08 [TRACE] Waiting 1m0s before next try
2026-09-11T01:22:08.4051616Z 2026/09/11 01:22:08 [TRACE] Waiting 10s before next try
2026-09-11T01:22:18.5441992Z 2026/09/11 01:22:18 [TRACE] Waiting 1m0s before next try
2026-09-11T01:23:19.1169352Z 2026/09/11 01:23:19 [TRACE] Waiting 10s before next try
2026-09-11T01:23:29.2844010Z 2026/09/11 01:23:29 [TRACE] Waiting 1m0s before next try
2026-09-11T01:24:29.4723289Z 2026/09/11 01:24:29 [TRACE] Waiting 10s before next try
2026-09-11T01:24:39.6194024Z 2026/09/11 01:24:39 [TRACE] Waiting 1m0s before next try
2026-09-11T01:25:39.7637055Z 2026/09/11 01:25:39 [TRACE] Waiting 10s before next try
2026-09-11T01:25:49.8965608Z 2026/09/11 01:25:49 [TRACE] Waiting 1m0s before next try
2026-09-11T01:26:50.1461335Z 2026/09/11 01:26:50 [TRACE] Waiting 10s before next try
2026-09-11T01:27:00.3221793Z 2026/09/11 01:27:00 [TRACE] Waiting 1m0s before next try
2026-09-11T01:28:00.4781724Z 2026/09/11 01:28:00 [TRACE] Waiting 10s before next try
2026-09-11T01:28:10.6111695Z 2026/09/11 01:28:10 [TRACE] Waiting 1m0s before next try
2026-09-11T01:29:10.8590617Z 2026/09/11 01:29:10 [TRACE] Waiting 10s before next try
2026-09-11T01:29:21.0305729Z 2026/09/11 01:29:21 [TRACE] Waiting 1m0s before next try
2026-09-11T01:30:21.2010556Z 2026/09/11 01:30:21 [TRACE] Waiting 10s before next try
2026-09-11T01:30:31.3593129Z 2026/09/11 01:30:31 [TRACE] Waiting 1m0s before next try
2026-09-11T01:31:31.5455212Z 2026/09/11 01:31:31 [TRACE] Waiting 10s before next try
2026-09-11T01:31:41.6998874Z 2026/09/11 01:31:41 [TRACE] Waiting 1m0s before next try
2026-09-11T01:32:41.9019455Z 2026/09/11 01:32:41 [TRACE] Waiting 10s before next try
2026-09-11T01:32:52.0357001Z 2026/09/11 01:32:52 [TRACE] Waiting 1m0s before next try
2026-09-11T01:33:52.2185095Z 2026/09/11 01:33:52 [TRACE] Waiting 10s before next try
2026-09-11T01:34:02.3380760Z 2026/09/11 01:34:02 [TRACE] Waiting 1m0s before next try
2026-09-11T01:35:02.5932855Z 2026/09/11 01:35:02 [TRACE] Waiting 10s before next try
2026-09-11T01:35:12.7190085Z 2026/09/11 01:35:12 [TRACE] Waiting 1m0s before next try
2026-09-11T01:36:12.8857384Z 2026/09/11 01:36:12 [TRACE] Waiting 10s before next try
2026-09-11T01:36:23.0386671Z 2026/09/11 01:36:23 [TRACE] Waiting 1m0s before next try
2026-09-11T01:37:23.2781081Z 2026/09/11 01:37:23 [TRACE] Waiting 10s before next try
2026-09-11T01:37:33.6436411Z 2026/09/11 01:37:33 [TRACE] Waiting 1m0s before next try
2026-09-11T01:38:33.9876494Z 2026/09/11 01:38:33 [TRACE] Waiting 10s before next try
2026-09-11T01:38:44.1216372Z 2026/09/11 01:38:44 [TRACE] Waiting 1m0s before next try
2026-09-11T01:39:44.3314929Z 2026/09/11 01:39:44 [TRACE] Waiting 10s before next try
2026-09-11T01:39:54.4859993Z 2026/09/11 01:39:54 [TRACE] Waiting 1m0s before next try
2026-09-11T01:40:54.6665984Z 2026/09/11 01:40:54 [TRACE] Waiting 10s before next try
2026-09-11T01:41:04.8102443Z 2026/09/11 01:41:04 [TRACE] Waiting 1m0s before next try
2026-09-11T01:41:44.0367321Z 2026/09/11 01:41:44 [WARN] WaitForState timeout after 1h0m0s
2026-09-11T01:41:44.0368686Z 2026/09/11 01:41:44 [WARN] WaitForState starting 30s refresh grace period
2026-09-11T01:41:44.0369756Z     resource_migration_test.go:11: 
2026-09-11T01:41:44.0373867Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:68
2026-09-11T01:41:44.0377172Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-09-11T01:41:44.0380393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:179
2026-09-11T01:41:44.0382920Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2026-09-11T01:41:44.0385293Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_migration_test.go:11
2026-09-11T01:41:44.0386683Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-09-11T01:41:44.0387240Z         	Error:      	Received unexpected error:
2026-09-11T01:41:44.0399650Z         	            	cluster creation failed: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-09-11T01:41:44.0401208Z         	Test:       	TestMigMongoDBEmployeeAccessGrant_basic
2026-09-11T01:41:44.0402323Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2609873551584154377
2026-09-11T01:41:44.0402878Z --- FAIL: TestMigMongoDBEmployeeAccessGrant_basic (3605.32s)
```

  - PASS 14 minutes
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 14 minutes
- 2026-09-15: MISSING
- 2026-09-16 PASS 14 minutes
- 2026-09-17: MISSING
- 2026-09-18 PASS 15 minutes
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21 PASS 13 minutes
- 2026-09-22: MISSING
- 2026-09-23 PASS 14 minutes
- 2026-09-24: MISSING
- 2026-09-25 PASS 14 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 14 minutes
- 2026-09-29: MISSING
- 2026-09-30 PASS 13 minutes
- 2026-10-01: MISSING
- 2026-10-02 PASS 14 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 13 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 14 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 14 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 13 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 17 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 14 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
