# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestMigMongoDBEmployeeAccessGrant_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-09 00:27](#error-2025-10-09t0027020000) |  | dev | flaky_client | 249.06s
[2025-10-12 00:28](#error-2025-10-12t0028340000) |  | qa | timeout | 3603.01s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 10 minutes
- 2025-09-24 PASS 11 minutes
- 2025-09-25 PASS 12 minutes
- 2025-09-26 PASS 12 minutes
- 2025-09-27 PASS 11 minutes
- 2025-09-28 PASS 10 minutes
- 2025-09-29 PASS 11 minutes
- 2025-09-30
  - PASS 11 minutes
  - PASS 10 minutes
  - PASS 10 minutes
- 2025-10-01
  - PASS 8 minutes
  - PASS 10 minutes
  - PASS 8 minutes
  - PASS 11 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 10 minutes
  - PASS 10 minutes
- 2025-10-02 PASS 9 minutes
- 2025-10-03 PASS 10 minutes
- 2025-10-04 PASS 18 minutes
- 2025-10-05 PASS 8 minutes
- 2025-10-06 PASS 8 minutes
- 2025-10-07 PASS 11 minutes
- 2025-10-08 PASS 12 minutes
- 2025-10-09

### Error 2025-10-09T00:27:02+00:00
```
2025-10-09T00:27:02.6001475Z === RUN   TestMigMongoDBEmployeeAccessGrant_basic
2025-10-09T00:27:02.6002645Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-373472520178210083
2025-10-09T00:27:05.9899905Z     resource_migration_test.go:11: Creating execution cluster: test-acc-tf-c-2004404209528213262
2025-10-09T00:27:06.7228242Z 2025/10/09 00:27:06 [DEBUG] Waiting for state to become: [IDLE]
2025-10-09T00:30:07.1478901Z 2025/10/09 00:30:07 [TRACE] Waiting 1m0s before next try
2025-10-09T00:31:12.1777294Z     resource_migration_test.go:11: 
2025-10-09T00:31:12.1779825Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:47
2025-10-09T00:31:12.1783543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:135
2025-10-09T00:31:12.1786853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2025-10-09T00:31:12.1791146Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_migration_test.go:11
2025-10-09T00:31:12.1792300Z         	Error:      	Received unexpected error:
2025-10-09T00:31:12.1794025Z         	            	Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e70157c2a3cd169303c507/clusters/test-acc-tf-c-2004404209528213262": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-10-09T00:31:12.1794957Z         	Test:       	TestMigMongoDBEmployeeAccessGrant_basic
2025-10-09T00:31:12.1798289Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2004404209528213262, err: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e70157c2a3cd169303c507/clusters/test-acc-tf-c-2004404209528213262": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-10-09T00:31:12.1800589Z --- FAIL: TestMigMongoDBEmployeeAccessGrant_basic (249.58s)
```

- 2025-10-10 PASS 14 minutes
- 2025-10-11 PASS 12 minutes
- 2025-10-12

### Error 2025-10-12T00:28:34+00:00
```
2025-10-12T00:28:34.1541396Z === RUN   TestMigMongoDBEmployeeAccessGrant_basic
2025-10-12T00:28:34.1543210Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-3982693420303561409
2025-10-12T00:28:36.5310787Z     resource_migration_test.go:11: Creating execution cluster: test-acc-tf-c-7169528670364249773
2025-10-12T00:28:37.2850117Z 2025/10/12 00:28:37 [DEBUG] Waiting for state to become: [IDLE]
2025-10-12T00:31:37.4819204Z 2025/10/12 00:31:37 [TRACE] Waiting 1m0s before next try
2025-10-12T00:32:37.6528685Z 2025/10/12 00:32:37 [TRACE] Waiting 10s before next try
2025-10-12T00:32:47.7589625Z 2025/10/12 00:32:47 [TRACE] Waiting 1m0s before next try
2025-10-12T00:33:47.9484952Z 2025/10/12 00:33:47 [TRACE] Waiting 10s before next try
2025-10-12T00:33:58.0474901Z 2025/10/12 00:33:58 [TRACE] Waiting 1m0s before next try
2025-10-12T00:34:58.2180980Z 2025/10/12 00:34:58 [TRACE] Waiting 10s before next try
2025-10-12T00:35:08.3138829Z 2025/10/12 00:35:08 [TRACE] Waiting 1m0s before next try
2025-10-12T00:36:08.5289229Z 2025/10/12 00:36:08 [TRACE] Waiting 10s before next try
2025-10-12T00:36:18.6335640Z 2025/10/12 00:36:18 [TRACE] Waiting 1m0s before next try
2025-10-12T00:37:18.8231859Z 2025/10/12 00:37:18 [TRACE] Waiting 10s before next try
2025-10-12T00:37:28.9170057Z 2025/10/12 00:37:28 [TRACE] Waiting 1m0s before next try
2025-10-12T00:38:29.3293502Z 2025/10/12 00:38:29 [TRACE] Waiting 10s before next try
2025-10-12T00:38:39.4288427Z 2025/10/12 00:38:39 [TRACE] Waiting 1m0s before next try
2025-10-12T00:39:39.7674142Z 2025/10/12 00:39:39 [TRACE] Waiting 10s before next try
2025-10-12T00:39:49.8845252Z 2025/10/12 00:39:49 [TRACE] Waiting 1m0s before next try
2025-10-12T00:40:50.1228537Z 2025/10/12 00:40:50 [TRACE] Waiting 10s before next try
2025-10-12T00:41:00.2515754Z 2025/10/12 00:41:00 [TRACE] Waiting 1m0s before next try
2025-10-12T00:42:00.3830457Z 2025/10/12 00:42:00 [TRACE] Waiting 10s before next try
2025-10-12T00:42:10.5106486Z 2025/10/12 00:42:10 [TRACE] Waiting 1m0s before next try
2025-10-12T00:43:10.7814058Z 2025/10/12 00:43:10 [TRACE] Waiting 10s before next try
2025-10-12T00:43:20.8935325Z 2025/10/12 00:43:20 [TRACE] Waiting 1m0s before next try
2025-10-12T00:44:21.1680000Z 2025/10/12 00:44:21 [TRACE] Waiting 10s before next try
2025-10-12T00:44:31.2581232Z 2025/10/12 00:44:31 [TRACE] Waiting 1m0s before next try
2025-10-12T00:45:31.4532164Z 2025/10/12 00:45:31 [TRACE] Waiting 10s before next try
2025-10-12T00:45:41.5565826Z 2025/10/12 00:45:41 [TRACE] Waiting 1m0s before next try
2025-10-12T00:46:41.6751931Z 2025/10/12 00:46:41 [TRACE] Waiting 10s before next try
2025-10-12T00:46:51.7693754Z 2025/10/12 00:46:51 [TRACE] Waiting 1m0s before next try
2025-10-12T00:47:51.9688193Z 2025/10/12 00:47:51 [TRACE] Waiting 10s before next try
2025-10-12T00:48:02.0978905Z 2025/10/12 00:48:02 [TRACE] Waiting 1m0s before next try
2025-10-12T00:49:02.2816946Z 2025/10/12 00:49:02 [TRACE] Waiting 10s before next try
2025-10-12T00:49:12.4024393Z 2025/10/12 00:49:12 [TRACE] Waiting 1m0s before next try
2025-10-12T00:50:12.5607524Z 2025/10/12 00:50:12 [TRACE] Waiting 10s before next try
2025-10-12T00:50:22.6767985Z 2025/10/12 00:50:22 [TRACE] Waiting 1m0s before next try
2025-10-12T00:51:22.8451106Z 2025/10/12 00:51:22 [TRACE] Waiting 10s before next try
2025-10-12T00:51:32.9561748Z 2025/10/12 00:51:32 [TRACE] Waiting 1m0s before next try
2025-10-12T00:52:33.2354990Z 2025/10/12 00:52:33 [TRACE] Waiting 10s before next try
2025-10-12T00:52:43.3383288Z 2025/10/12 00:52:43 [TRACE] Waiting 1m0s before next try
2025-10-12T00:53:43.4856466Z 2025/10/12 00:53:43 [TRACE] Waiting 10s before next try
2025-10-12T00:53:53.5812632Z 2025/10/12 00:53:53 [TRACE] Waiting 1m0s before next try
2025-10-12T00:54:53.7527307Z 2025/10/12 00:54:53 [TRACE] Waiting 10s before next try
2025-10-12T00:55:03.8480345Z 2025/10/12 00:55:03 [TRACE] Waiting 1m0s before next try
2025-10-12T00:56:03.9883575Z 2025/10/12 00:56:03 [TRACE] Waiting 10s before next try
2025-10-12T00:56:14.1082581Z 2025/10/12 00:56:14 [TRACE] Waiting 1m0s before next try
2025-10-12T00:57:14.2818042Z 2025/10/12 00:57:14 [TRACE] Waiting 10s before next try
2025-10-12T00:57:24.4019697Z 2025/10/12 00:57:24 [TRACE] Waiting 1m0s before next try
2025-10-12T00:58:24.5844057Z 2025/10/12 00:58:24 [TRACE] Waiting 10s before next try
2025-10-12T00:58:34.6999025Z 2025/10/12 00:58:34 [TRACE] Waiting 1m0s before next try
2025-10-12T00:59:34.8948271Z 2025/10/12 00:59:34 [TRACE] Waiting 10s before next try
2025-10-12T00:59:45.0008116Z 2025/10/12 00:59:45 [TRACE] Waiting 1m0s before next try
2025-10-12T01:00:45.1929070Z 2025/10/12 01:00:45 [TRACE] Waiting 10s before next try
2025-10-12T01:00:55.2974235Z 2025/10/12 01:00:55 [TRACE] Waiting 1m0s before next try
2025-10-12T01:01:55.5348368Z 2025/10/12 01:01:55 [TRACE] Waiting 10s before next try
2025-10-12T01:02:05.6393013Z 2025/10/12 01:02:05 [TRACE] Waiting 1m0s before next try
2025-10-12T01:03:05.7859317Z 2025/10/12 01:03:05 [TRACE] Waiting 10s before next try
2025-10-12T01:03:15.8790158Z 2025/10/12 01:03:15 [TRACE] Waiting 1m0s before next try
2025-10-12T01:04:16.0343363Z 2025/10/12 01:04:16 [TRACE] Waiting 10s before next try
2025-10-12T01:04:26.1244265Z 2025/10/12 01:04:26 [TRACE] Waiting 1m0s before next try
2025-10-12T01:05:26.2729983Z 2025/10/12 01:05:26 [TRACE] Waiting 10s before next try
2025-10-12T01:05:36.3855523Z 2025/10/12 01:05:36 [TRACE] Waiting 1m0s before next try
2025-10-12T01:06:36.5784096Z 2025/10/12 01:06:36 [TRACE] Waiting 10s before next try
2025-10-12T01:06:46.6833037Z 2025/10/12 01:06:46 [TRACE] Waiting 1m0s before next try
2025-10-12T01:07:46.8671313Z 2025/10/12 01:07:46 [TRACE] Waiting 10s before next try
2025-10-12T01:07:56.9668728Z 2025/10/12 01:07:56 [TRACE] Waiting 1m0s before next try
2025-10-12T01:08:57.1842150Z 2025/10/12 01:08:57 [TRACE] Waiting 10s before next try
2025-10-12T01:09:07.2986279Z 2025/10/12 01:09:07 [TRACE] Waiting 1m0s before next try
2025-10-12T01:10:07.4762481Z 2025/10/12 01:10:07 [TRACE] Waiting 10s before next try
2025-10-12T01:10:17.6012629Z 2025/10/12 01:10:17 [TRACE] Waiting 1m0s before next try
2025-10-12T01:11:17.7961156Z 2025/10/12 01:11:17 [TRACE] Waiting 10s before next try
2025-10-12T01:11:27.8907767Z 2025/10/12 01:11:27 [TRACE] Waiting 1m0s before next try
2025-10-12T01:12:28.0278907Z 2025/10/12 01:12:28 [TRACE] Waiting 10s before next try
2025-10-12T01:12:38.1367510Z 2025/10/12 01:12:38 [TRACE] Waiting 1m0s before next try
2025-10-12T01:13:38.3259575Z 2025/10/12 01:13:38 [TRACE] Waiting 10s before next try
2025-10-12T01:13:48.4124851Z 2025/10/12 01:13:48 [TRACE] Waiting 1m0s before next try
2025-10-12T01:14:48.6104889Z 2025/10/12 01:14:48 [TRACE] Waiting 10s before next try
2025-10-12T01:14:58.7060702Z 2025/10/12 01:14:58 [TRACE] Waiting 1m0s before next try
2025-10-12T01:15:59.0869205Z 2025/10/12 01:15:59 [TRACE] Waiting 10s before next try
2025-10-12T01:16:09.1904674Z 2025/10/12 01:16:09 [TRACE] Waiting 1m0s before next try
2025-10-12T01:17:09.3099695Z 2025/10/12 01:17:09 [TRACE] Waiting 10s before next try
2025-10-12T01:17:19.4045696Z 2025/10/12 01:17:19 [TRACE] Waiting 1m0s before next try
2025-10-12T01:18:19.5476995Z 2025/10/12 01:18:19 [TRACE] Waiting 10s before next try
2025-10-12T01:18:29.6477249Z 2025/10/12 01:18:29 [TRACE] Waiting 1m0s before next try
2025-10-12T01:19:29.8170071Z 2025/10/12 01:19:29 [TRACE] Waiting 10s before next try
2025-10-12T01:19:39.9324910Z 2025/10/12 01:19:39 [TRACE] Waiting 1m0s before next try
2025-10-12T01:20:40.0540861Z 2025/10/12 01:20:40 [TRACE] Waiting 10s before next try
2025-10-12T01:20:50.1484764Z 2025/10/12 01:20:50 [TRACE] Waiting 1m0s before next try
2025-10-12T01:21:50.3363747Z 2025/10/12 01:21:50 [TRACE] Waiting 10s before next try
2025-10-12T01:22:00.4563462Z 2025/10/12 01:22:00 [TRACE] Waiting 1m0s before next try
2025-10-12T01:23:00.6286806Z 2025/10/12 01:23:00 [TRACE] Waiting 10s before next try
2025-10-12T01:23:10.7314924Z 2025/10/12 01:23:10 [TRACE] Waiting 1m0s before next try
2025-10-12T01:24:10.9101399Z 2025/10/12 01:24:10 [TRACE] Waiting 10s before next try
2025-10-12T01:24:21.0060772Z 2025/10/12 01:24:21 [TRACE] Waiting 1m0s before next try
2025-10-12T01:25:21.2685116Z 2025/10/12 01:25:21 [TRACE] Waiting 10s before next try
2025-10-12T01:25:31.3765977Z 2025/10/12 01:25:31 [TRACE] Waiting 1m0s before next try
2025-10-12T01:26:31.5560104Z 2025/10/12 01:26:31 [TRACE] Waiting 10s before next try
2025-10-12T01:26:41.6527552Z 2025/10/12 01:26:41 [TRACE] Waiting 1m0s before next try
2025-10-12T01:27:41.9062083Z 2025/10/12 01:27:41 [TRACE] Waiting 10s before next try
2025-10-12T01:27:52.0025526Z 2025/10/12 01:27:52 [TRACE] Waiting 1m0s before next try
2025-10-12T01:28:37.2852205Z 2025/10/12 01:28:37 [WARN] WaitForState timeout after 1h0m0s
2025-10-12T01:28:37.2853438Z 2025/10/12 01:28:37 [WARN] WaitForState starting 30s refresh grace period
2025-10-12T01:28:37.2861680Z     resource_migration_test.go:11: 
2025-10-12T01:28:37.2863951Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:47
2025-10-12T01:28:37.2868445Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:135
2025-10-12T01:28:37.2872802Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2025-10-12T01:28:37.2876805Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_migration_test.go:11
2025-10-12T01:28:37.2878491Z         	Error:      	Received unexpected error:
2025-10-12T01:28:37.2880066Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-10-12T01:28:37.2881049Z         	Test:       	TestMigMongoDBEmployeeAccessGrant_basic
2025-10-12T01:28:37.2882852Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7169528670364249773, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-10-12T01:28:37.2884090Z --- FAIL: TestMigMongoDBEmployeeAccessGrant_basic (3603.13s)
```

- 2025-10-13 PASS 10 minutes
- 2025-10-14 PASS 11 minutes
- 2025-10-15 PASS 10 minutes
- 2025-10-16 PASS 14 minutes
- 2025-10-17 PASS 8 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 10 minutes
- 2025-10-20 PASS 12 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 10 minutes
  - PASS 10 minutes