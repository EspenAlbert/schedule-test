# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestMigMongoDBEmployeeAccessGrant_basic Test Details
# Found 18 TestRuns in dev, qa from 2026-07-10 to 2026-08-07 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-27 00:48](#error-2026-07-27t0048320000) |  | dev | timeout | 3603.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10 PASS 24 minutes
- 2026-07-11: MISSING
- 2026-07-12: MISSING
- 2026-07-13 PASS 14 minutes
- 2026-07-14: MISSING
- 2026-07-15 PASS 12 minutes
- 2026-07-16: MISSING
- 2026-07-17 PASS 13 minutes
- 2026-07-18: MISSING
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22 PASS 15 minutes
- 2026-07-23: MISSING
- 2026-07-24 PASS 20 minutes
- 2026-07-25: MISSING
- 2026-07-26: MISSING
- 2026-07-27

### Error 2026-07-27T00:48:32+00:00
```
2026-07-27T00:48:32.4360174Z === RUN   TestMigMongoDBEmployeeAccessGrant_basic
2026-07-27T00:48:32.4362213Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-3477466256020827768
2026-07-27T00:48:34.8139624Z     resource_migration_test.go:11: Creating execution cluster: test-acc-tf-c-3861659203515460702
2026-07-27T00:48:35.5777708Z 2026/07/27 00:48:35 [DEBUG] Waiting for state to become: [IDLE]
2026-07-27T00:51:35.9829622Z 2026/07/27 00:51:35 [TRACE] Waiting 1m0s before next try
2026-07-27T00:52:36.4426192Z 2026/07/27 00:52:36 [TRACE] Waiting 10s before next try
2026-07-27T00:52:46.7159369Z 2026/07/27 00:52:46 [TRACE] Waiting 1m0s before next try
2026-07-27T00:53:47.1636321Z 2026/07/27 00:53:47 [TRACE] Waiting 10s before next try
2026-07-27T00:53:57.4232611Z 2026/07/27 00:53:57 [TRACE] Waiting 1m0s before next try
2026-07-27T00:54:57.9213458Z 2026/07/27 00:54:57 [TRACE] Waiting 10s before next try
2026-07-27T00:55:08.1968374Z 2026/07/27 00:55:08 [TRACE] Waiting 1m0s before next try
2026-07-27T00:56:08.6037937Z 2026/07/27 00:56:08 [TRACE] Waiting 10s before next try
2026-07-27T00:56:18.8978852Z 2026/07/27 00:56:18 [TRACE] Waiting 1m0s before next try
2026-07-27T00:57:19.3733128Z 2026/07/27 00:57:19 [TRACE] Waiting 10s before next try
2026-07-27T00:57:29.6587263Z 2026/07/27 00:57:29 [TRACE] Waiting 1m0s before next try
2026-07-27T00:58:30.1255407Z 2026/07/27 00:58:30 [TRACE] Waiting 10s before next try
2026-07-27T00:58:40.4631926Z 2026/07/27 00:58:40 [TRACE] Waiting 1m0s before next try
2026-07-27T00:59:40.8686741Z 2026/07/27 00:59:40 [TRACE] Waiting 10s before next try
2026-07-27T00:59:51.1336307Z 2026/07/27 00:59:51 [TRACE] Waiting 1m0s before next try
2026-07-27T01:00:51.6186851Z 2026/07/27 01:00:51 [TRACE] Waiting 10s before next try
2026-07-27T01:01:01.9018528Z 2026/07/27 01:01:01 [TRACE] Waiting 1m0s before next try
2026-07-27T01:02:02.3726938Z 2026/07/27 01:02:02 [TRACE] Waiting 10s before next try
2026-07-27T01:02:12.6588800Z 2026/07/27 01:02:12 [TRACE] Waiting 1m0s before next try
2026-07-27T01:03:13.0900044Z 2026/07/27 01:03:13 [TRACE] Waiting 10s before next try
2026-07-27T01:03:23.3522069Z 2026/07/27 01:03:23 [TRACE] Waiting 1m0s before next try
2026-07-27T01:04:23.7694543Z 2026/07/27 01:04:23 [TRACE] Waiting 10s before next try
2026-07-27T01:04:34.0488468Z 2026/07/27 01:04:34 [TRACE] Waiting 1m0s before next try
2026-07-27T01:05:34.5561085Z 2026/07/27 01:05:34 [TRACE] Waiting 10s before next try
2026-07-27T01:05:44.8760587Z 2026/07/27 01:05:44 [TRACE] Waiting 1m0s before next try
2026-07-27T01:06:45.3567065Z 2026/07/27 01:06:45 [TRACE] Waiting 10s before next try
2026-07-27T01:06:55.6258244Z 2026/07/27 01:06:55 [TRACE] Waiting 1m0s before next try
2026-07-27T01:07:56.1419081Z 2026/07/27 01:07:56 [TRACE] Waiting 10s before next try
2026-07-27T01:08:06.4403205Z 2026/07/27 01:08:06 [TRACE] Waiting 1m0s before next try
2026-07-27T01:09:06.8598658Z 2026/07/27 01:09:06 [TRACE] Waiting 10s before next try
2026-07-27T01:09:17.1215725Z 2026/07/27 01:09:17 [TRACE] Waiting 1m0s before next try
2026-07-27T01:10:17.5444739Z 2026/07/27 01:10:17 [TRACE] Waiting 10s before next try
2026-07-27T01:10:27.7885252Z 2026/07/27 01:10:27 [TRACE] Waiting 1m0s before next try
2026-07-27T01:11:28.1892358Z 2026/07/27 01:11:28 [TRACE] Waiting 10s before next try
2026-07-27T01:11:38.4556936Z 2026/07/27 01:11:38 [TRACE] Waiting 1m0s before next try
2026-07-27T01:12:38.8685357Z 2026/07/27 01:12:38 [TRACE] Waiting 10s before next try
2026-07-27T01:12:49.1354223Z 2026/07/27 01:12:49 [TRACE] Waiting 1m0s before next try
2026-07-27T01:13:49.5967188Z 2026/07/27 01:13:49 [TRACE] Waiting 10s before next try
2026-07-27T01:13:59.8561706Z 2026/07/27 01:13:59 [TRACE] Waiting 1m0s before next try
2026-07-27T01:15:00.3017153Z 2026/07/27 01:15:00 [TRACE] Waiting 10s before next try
2026-07-27T01:15:10.5885709Z 2026/07/27 01:15:10 [TRACE] Waiting 1m0s before next try
2026-07-27T01:16:11.0220603Z 2026/07/27 01:16:11 [TRACE] Waiting 10s before next try
2026-07-27T01:16:21.2752691Z 2026/07/27 01:16:21 [TRACE] Waiting 1m0s before next try
2026-07-27T01:17:21.7193655Z 2026/07/27 01:17:21 [TRACE] Waiting 10s before next try
2026-07-27T01:17:31.9964811Z 2026/07/27 01:17:31 [TRACE] Waiting 1m0s before next try
2026-07-27T01:18:32.4557415Z 2026/07/27 01:18:32 [TRACE] Waiting 10s before next try
2026-07-27T01:18:42.7693558Z 2026/07/27 01:18:42 [TRACE] Waiting 1m0s before next try
2026-07-27T01:19:43.1920425Z 2026/07/27 01:19:43 [TRACE] Waiting 10s before next try
2026-07-27T01:19:53.4696089Z 2026/07/27 01:19:53 [TRACE] Waiting 1m0s before next try
2026-07-27T01:20:53.9044319Z 2026/07/27 01:20:53 [TRACE] Waiting 10s before next try
2026-07-27T01:21:04.1812955Z 2026/07/27 01:21:04 [TRACE] Waiting 1m0s before next try
2026-07-27T01:22:04.5959767Z 2026/07/27 01:22:04 [TRACE] Waiting 10s before next try
2026-07-27T01:22:14.8525290Z 2026/07/27 01:22:14 [TRACE] Waiting 1m0s before next try
2026-07-27T01:23:15.2648993Z 2026/07/27 01:23:15 [TRACE] Waiting 10s before next try
2026-07-27T01:23:25.5106691Z 2026/07/27 01:23:25 [TRACE] Waiting 1m0s before next try
2026-07-27T01:24:25.9467557Z 2026/07/27 01:24:25 [TRACE] Waiting 10s before next try
2026-07-27T01:24:36.2255880Z 2026/07/27 01:24:36 [TRACE] Waiting 1m0s before next try
2026-07-27T01:25:36.6783145Z 2026/07/27 01:25:36 [TRACE] Waiting 10s before next try
2026-07-27T01:25:46.9448406Z 2026/07/27 01:25:46 [TRACE] Waiting 1m0s before next try
2026-07-27T01:26:47.3913149Z 2026/07/27 01:26:47 [TRACE] Waiting 10s before next try
2026-07-27T01:26:57.6330802Z 2026/07/27 01:26:57 [TRACE] Waiting 1m0s before next try
2026-07-27T01:27:58.0600257Z 2026/07/27 01:27:58 [TRACE] Waiting 10s before next try
2026-07-27T01:28:08.3767402Z 2026/07/27 01:28:08 [TRACE] Waiting 1m0s before next try
2026-07-27T01:29:08.8159366Z 2026/07/27 01:29:08 [TRACE] Waiting 10s before next try
2026-07-27T01:29:19.1198651Z 2026/07/27 01:29:19 [TRACE] Waiting 1m0s before next try
2026-07-27T01:30:19.5754626Z 2026/07/27 01:30:19 [TRACE] Waiting 10s before next try
2026-07-27T01:30:29.8403310Z 2026/07/27 01:30:29 [TRACE] Waiting 1m0s before next try
2026-07-27T01:31:30.2882809Z 2026/07/27 01:31:30 [TRACE] Waiting 10s before next try
2026-07-27T01:31:40.5574251Z 2026/07/27 01:31:40 [TRACE] Waiting 1m0s before next try
2026-07-27T01:32:40.9663864Z 2026/07/27 01:32:40 [TRACE] Waiting 10s before next try
2026-07-27T01:32:51.2277123Z 2026/07/27 01:32:51 [TRACE] Waiting 1m0s before next try
2026-07-27T01:33:51.6413639Z 2026/07/27 01:33:51 [TRACE] Waiting 10s before next try
2026-07-27T01:34:01.9113151Z 2026/07/27 01:34:01 [TRACE] Waiting 1m0s before next try
2026-07-27T01:35:02.3494602Z 2026/07/27 01:35:02 [TRACE] Waiting 10s before next try
2026-07-27T01:35:12.6062384Z 2026/07/27 01:35:12 [TRACE] Waiting 1m0s before next try
2026-07-27T01:36:13.0959991Z 2026/07/27 01:36:13 [TRACE] Waiting 10s before next try
2026-07-27T01:36:23.3633761Z 2026/07/27 01:36:23 [TRACE] Waiting 1m0s before next try
2026-07-27T01:37:23.7802228Z 2026/07/27 01:37:23 [TRACE] Waiting 10s before next try
2026-07-27T01:37:34.0449030Z 2026/07/27 01:37:34 [TRACE] Waiting 1m0s before next try
2026-07-27T01:38:34.5039725Z 2026/07/27 01:38:34 [TRACE] Waiting 10s before next try
2026-07-27T01:38:44.7665865Z 2026/07/27 01:38:44 [TRACE] Waiting 1m0s before next try
2026-07-27T01:39:45.2132534Z 2026/07/27 01:39:45 [TRACE] Waiting 10s before next try
2026-07-27T01:39:55.4953043Z 2026/07/27 01:39:55 [TRACE] Waiting 1m0s before next try
2026-07-27T01:40:55.9412812Z 2026/07/27 01:40:55 [TRACE] Waiting 10s before next try
2026-07-27T01:41:06.2105984Z 2026/07/27 01:41:06 [TRACE] Waiting 1m0s before next try
2026-07-27T01:42:06.6147413Z 2026/07/27 01:42:06 [TRACE] Waiting 10s before next try
2026-07-27T01:42:16.8932025Z 2026/07/27 01:42:16 [TRACE] Waiting 1m0s before next try
2026-07-27T01:43:17.3999995Z 2026/07/27 01:43:17 [TRACE] Waiting 10s before next try
2026-07-27T01:43:27.6712003Z 2026/07/27 01:43:27 [TRACE] Waiting 1m0s before next try
2026-07-27T01:44:28.1648799Z 2026/07/27 01:44:28 [TRACE] Waiting 10s before next try
2026-07-27T01:44:38.4409519Z 2026/07/27 01:44:38 [TRACE] Waiting 1m0s before next try
2026-07-27T01:45:38.9479110Z 2026/07/27 01:45:38 [TRACE] Waiting 10s before next try
2026-07-27T01:45:49.2689128Z 2026/07/27 01:45:49 [TRACE] Waiting 1m0s before next try
2026-07-27T01:46:49.6918281Z 2026/07/27 01:46:49 [TRACE] Waiting 10s before next try
2026-07-27T01:46:59.9728450Z 2026/07/27 01:46:59 [TRACE] Waiting 1m0s before next try
2026-07-27T01:48:00.3708458Z 2026/07/27 01:48:00 [TRACE] Waiting 10s before next try
2026-07-27T01:48:10.6596678Z 2026/07/27 01:48:10 [TRACE] Waiting 1m0s before next try
2026-07-27T01:48:35.5780299Z 2026/07/27 01:48:35 [WARN] WaitForState timeout after 1h0m0s
2026-07-27T01:48:35.5781653Z 2026/07/27 01:48:35 [WARN] WaitForState starting 30s refresh grace period
2026-07-27T01:48:35.5784293Z     resource_migration_test.go:11: 
2026-07-27T01:48:35.5786028Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:49
2026-07-27T01:48:35.5791592Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-07-27T01:48:35.5794997Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2026-07-27T01:48:35.5797687Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_migration_test.go:11
2026-07-27T01:48:35.5798752Z         	Error:      	Received unexpected error:
2026-07-27T01:48:35.5799895Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'REPAIRING', timeout: 1h0m0s)
2026-07-27T01:48:35.5800654Z         	Test:       	TestMigMongoDBEmployeeAccessGrant_basic
2026-07-27T01:48:35.5802153Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3861659203515460702, err: timeout while waiting for state to become 'IDLE' (last state: 'REPAIRING', timeout: 1h0m0s)
2026-07-27T01:48:35.5803099Z --- FAIL: TestMigMongoDBEmployeeAccessGrant_basic (3603.14s)
```

- 2026-07-28: MISSING
- 2026-07-29 PASS 14 minutes
- 2026-07-30: MISSING
- 2026-07-31 PASS 13 minutes
- 2026-08-01: MISSING
- 2026-08-02: MISSING
- 2026-08-03 PASS 13 minutes
- 2026-08-04: MISSING
- 2026-08-05 PASS 13 minutes
- 2026-08-06: MISSING
- 2026-08-07 PASS 12 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 13 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 13 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 12 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 12 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29 PASS 12 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 13 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
