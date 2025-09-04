# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestMigMongoDBEmployeeAccessGrant_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-11 00:31](#error-2025-08-11t0031590000) |  | dev | flaky_client | 1237.06s
[2025-09-01 00:30](#error-2025-09-01t0030090000) |  | dev | timeout | 3604.00s
[2025-09-01 05:58](#error-2025-09-01t0558020000) |  | dev | timeout | 3603.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 11 minutes
- 2025-08-07 PASS 13 minutes
- 2025-08-08 PASS 12 minutes
- 2025-08-09 PASS 12 minutes
- 2025-08-10 PASS 17 minutes
- 2025-08-11

### Error 2025-08-11T00:31:59+00:00
```
2025-08-11T00:31:59.4935901Z === RUN   TestMigMongoDBEmployeeAccessGrant_basic
2025-08-11T00:31:59.4936855Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-5173793542064301995
2025-08-11T00:32:03.5081594Z     resource_migration_test.go:11: Creating execution cluster: test-acc-tf-c-5531316208273793004
2025-08-11T00:32:04.1120143Z 2025/08/11 00:32:04 [DEBUG] Waiting for state to become: [IDLE]
2025-08-11T00:35:04.4379245Z 2025/08/11 00:35:04 [TRACE] Waiting 1m0s before next try
2025-08-11T00:36:04.7523441Z 2025/08/11 00:36:04 [TRACE] Waiting 10s before next try
2025-08-11T00:36:14.9520152Z 2025/08/11 00:36:14 [TRACE] Waiting 1m0s before next try
2025-08-11T00:37:15.3122643Z 2025/08/11 00:37:15 [TRACE] Waiting 10s before next try
2025-08-11T00:37:25.5129895Z 2025/08/11 00:37:25 [TRACE] Waiting 1m0s before next try
2025-08-11T00:38:25.9093121Z 2025/08/11 00:38:25 [TRACE] Waiting 10s before next try
2025-08-11T00:38:36.1164643Z 2025/08/11 00:38:36 [TRACE] Waiting 1m0s before next try
2025-08-11T00:39:36.4709214Z 2025/08/11 00:39:36 [TRACE] Waiting 10s before next try
2025-08-11T00:39:46.6541245Z 2025/08/11 00:39:46 [TRACE] Waiting 1m0s before next try
2025-08-11T00:40:46.9754362Z 2025/08/11 00:40:46 [TRACE] Waiting 10s before next try
2025-08-11T00:40:57.1550593Z 2025/08/11 00:40:57 [TRACE] Waiting 1m0s before next try
2025-08-11T00:41:57.4858692Z 2025/08/11 00:41:57 [TRACE] Waiting 10s before next try
2025-08-11T00:42:07.6846509Z 2025/08/11 00:42:07 [TRACE] Waiting 1m0s before next try
2025-08-11T00:43:07.9862714Z 2025/08/11 00:43:07 [TRACE] Waiting 10s before next try
2025-08-11T00:43:18.2008618Z 2025/08/11 00:43:18 [TRACE] Waiting 1m0s before next try
2025-08-11T00:44:18.5791807Z 2025/08/11 00:44:18 [TRACE] Waiting 10s before next try
2025-08-11T00:44:28.7928054Z 2025/08/11 00:44:28 [TRACE] Waiting 1m0s before next try
2025-08-11T00:45:29.1215829Z 2025/08/11 00:45:29 [TRACE] Waiting 10s before next try
2025-08-11T00:45:39.3199126Z 2025/08/11 00:45:39 [TRACE] Waiting 1m0s before next try
2025-08-11T00:46:39.6600023Z 2025/08/11 00:46:39 [TRACE] Waiting 10s before next try
2025-08-11T00:46:49.8656303Z 2025/08/11 00:46:49 [TRACE] Waiting 1m0s before next try
2025-08-11T00:47:50.1969060Z 2025/08/11 00:47:50 [TRACE] Waiting 10s before next try
2025-08-11T00:48:00.4065029Z 2025/08/11 00:48:00 [TRACE] Waiting 1m0s before next try
2025-08-11T00:49:00.7458920Z 2025/08/11 00:49:00 [TRACE] Waiting 10s before next try
2025-08-11T00:49:10.9574098Z 2025/08/11 00:49:10 [TRACE] Waiting 1m0s before next try
2025-08-11T00:50:11.3321846Z 2025/08/11 00:50:11 [TRACE] Waiting 10s before next try
2025-08-11T00:50:21.5369642Z 2025/08/11 00:50:21 [TRACE] Waiting 1m0s before next try
2025-08-11T00:51:21.8815676Z 2025/08/11 00:51:21 [TRACE] Waiting 10s before next try
2025-08-11T00:51:32.0666080Z 2025/08/11 00:51:32 [TRACE] Waiting 1m0s before next try
2025-08-11T00:52:37.0718872Z     resource_migration_test.go:11: 
2025-08-11T00:52:37.0721046Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-08-11T00:52:37.0725572Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:123
2025-08-11T00:52:37.0729638Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2025-08-11T00:52:37.0749746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_migration_test.go:11
2025-08-11T00:52:37.0750634Z         	Error:      	Received unexpected error:
2025-08-11T00:52:37.0752280Z         	            	Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/689939fff3d97116eb63c43c/clusters/test-acc-tf-c-5531316208273793004": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-08-11T00:52:37.0753219Z         	Test:       	TestMigMongoDBEmployeeAccessGrant_basic
2025-08-11T00:52:37.0754783Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5531316208273793004, err: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/689939fff3d97116eb63c43c/clusters/test-acc-tf-c-5531316208273793004": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-08-11T00:52:37.0755874Z --- FAIL: TestMigMongoDBEmployeeAccessGrant_basic (1237.58s)
```

- 2025-08-12 PASS 12 minutes
- 2025-08-13 PASS 12 minutes
- 2025-08-14 PASS 11 minutes
- 2025-08-15 PASS 10 minutes
- 2025-08-16 PASS 34 minutes
- 2025-08-17 PASS 20 minutes
- 2025-08-18 PASS 11 minutes
- 2025-08-19 PASS 11 minutes
- 2025-08-20
  - PASS 10 minutes
  - PASS 13 minutes
- 2025-08-21 PASS 12 minutes
- 2025-08-22 PASS 8 minutes
- 2025-08-23 PASS 10 minutes
- 2025-08-24 PASS 11 minutes
- 2025-08-25 PASS 9 minutes
- 2025-08-26 PASS 13 minutes
- 2025-08-27 PASS 13 minutes
- 2025-08-28 PASS 11 minutes
- 2025-08-29 PASS 20 minutes
- 2025-08-30 PASS 11 minutes
- 2025-08-31 PASS 10 minutes
- 2025-09-01
  - FAIL an hour

### Error 2025-09-01T00:30:09+00:00
```
2025-09-01T00:30:09.7152459Z === RUN   TestMigMongoDBEmployeeAccessGrant_basic
2025-09-01T00:30:09.7154656Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-914106161260142518
2025-09-01T00:30:13.1978825Z     resource_migration_test.go:11: Creating execution cluster: test-acc-tf-c-4280064500069563946
2025-09-01T00:30:13.7550569Z 2025/09/01 00:30:13 [DEBUG] Waiting for state to become: [IDLE]
2025-09-01T00:33:13.9927490Z 2025/09/01 00:33:13 [TRACE] Waiting 1m0s before next try
2025-09-01T00:34:14.2689138Z 2025/09/01 00:34:14 [TRACE] Waiting 10s before next try
2025-09-01T00:34:24.3563106Z 2025/09/01 00:34:24 [TRACE] Waiting 1m0s before next try
2025-09-01T00:35:24.5127059Z 2025/09/01 00:35:24 [TRACE] Waiting 10s before next try
2025-09-01T00:35:34.6158173Z 2025/09/01 00:35:34 [TRACE] Waiting 1m0s before next try
2025-09-01T00:36:34.8168007Z 2025/09/01 00:36:34 [TRACE] Waiting 10s before next try
2025-09-01T00:36:44.9107755Z 2025/09/01 00:36:44 [TRACE] Waiting 1m0s before next try
2025-09-01T00:37:45.0719423Z 2025/09/01 00:37:45 [TRACE] Waiting 10s before next try
2025-09-01T00:37:55.1742242Z 2025/09/01 00:37:55 [TRACE] Waiting 1m0s before next try
2025-09-01T00:38:55.3999089Z 2025/09/01 00:38:55 [TRACE] Waiting 10s before next try
2025-09-01T00:39:05.4892145Z 2025/09/01 00:39:05 [TRACE] Waiting 1m0s before next try
2025-09-01T00:40:05.7260321Z 2025/09/01 00:40:05 [TRACE] Waiting 10s before next try
2025-09-01T00:40:15.8201268Z 2025/09/01 00:40:15 [TRACE] Waiting 1m0s before next try
2025-09-01T00:41:16.0076364Z 2025/09/01 00:41:16 [TRACE] Waiting 10s before next try
2025-09-01T00:41:26.1187318Z 2025/09/01 00:41:26 [TRACE] Waiting 1m0s before next try
2025-09-01T00:42:26.3671100Z 2025/09/01 00:42:26 [TRACE] Waiting 10s before next try
2025-09-01T00:42:36.4769207Z 2025/09/01 00:42:36 [TRACE] Waiting 1m0s before next try
2025-09-01T00:43:36.6009079Z 2025/09/01 00:43:36 [TRACE] Waiting 10s before next try
2025-09-01T00:43:46.6948073Z 2025/09/01 00:43:46 [TRACE] Waiting 1m0s before next try
2025-09-01T00:44:46.9182236Z 2025/09/01 00:44:46 [TRACE] Waiting 10s before next try
2025-09-01T00:44:57.0315136Z 2025/09/01 00:44:57 [TRACE] Waiting 1m0s before next try
2025-09-01T00:45:57.1754987Z 2025/09/01 00:45:57 [TRACE] Waiting 10s before next try
2025-09-01T00:46:07.3058613Z 2025/09/01 00:46:07 [TRACE] Waiting 1m0s before next try
2025-09-01T00:47:07.4431917Z 2025/09/01 00:47:07 [TRACE] Waiting 10s before next try
2025-09-01T00:47:17.5578279Z 2025/09/01 00:47:17 [TRACE] Waiting 1m0s before next try
2025-09-01T00:48:17.8284720Z 2025/09/01 00:48:17 [TRACE] Waiting 10s before next try
2025-09-01T00:48:27.9040622Z 2025/09/01 00:48:27 [TRACE] Waiting 1m0s before next try
2025-09-01T00:49:28.1379790Z 2025/09/01 00:49:28 [TRACE] Waiting 10s before next try
2025-09-01T00:49:38.2515106Z 2025/09/01 00:49:38 [TRACE] Waiting 1m0s before next try
2025-09-01T00:50:38.5048795Z 2025/09/01 00:50:38 [TRACE] Waiting 10s before next try
2025-09-01T00:50:48.5862810Z 2025/09/01 00:50:48 [TRACE] Waiting 1m0s before next try
2025-09-01T00:51:48.7879953Z 2025/09/01 00:51:48 [TRACE] Waiting 10s before next try
2025-09-01T00:51:58.8897713Z 2025/09/01 00:51:58 [TRACE] Waiting 1m0s before next try
2025-09-01T00:52:59.0833891Z 2025/09/01 00:52:59 [TRACE] Waiting 10s before next try
2025-09-01T00:53:09.1687560Z 2025/09/01 00:53:09 [TRACE] Waiting 1m0s before next try
2025-09-01T00:54:09.3060936Z 2025/09/01 00:54:09 [TRACE] Waiting 10s before next try
2025-09-01T00:54:19.4096014Z 2025/09/01 00:54:19 [TRACE] Waiting 1m0s before next try
2025-09-01T00:55:19.5493121Z 2025/09/01 00:55:19 [TRACE] Waiting 10s before next try
2025-09-01T00:55:29.6689683Z 2025/09/01 00:55:29 [TRACE] Waiting 1m0s before next try
2025-09-01T00:56:29.8328696Z 2025/09/01 00:56:29 [TRACE] Waiting 10s before next try
2025-09-01T00:56:39.9337574Z 2025/09/01 00:56:39 [TRACE] Waiting 1m0s before next try
2025-09-01T00:57:40.0555355Z 2025/09/01 00:57:40 [TRACE] Waiting 10s before next try
2025-09-01T00:57:50.1657620Z 2025/09/01 00:57:50 [TRACE] Waiting 1m0s before next try
2025-09-01T00:58:50.3692299Z 2025/09/01 00:58:50 [TRACE] Waiting 10s before next try
2025-09-01T00:59:00.4701879Z 2025/09/01 00:59:00 [TRACE] Waiting 1m0s before next try
2025-09-01T01:00:00.6457412Z 2025/09/01 01:00:00 [TRACE] Waiting 10s before next try
2025-09-01T01:00:10.7593013Z 2025/09/01 01:00:10 [TRACE] Waiting 1m0s before next try
2025-09-01T01:01:11.0014439Z 2025/09/01 01:01:11 [TRACE] Waiting 10s before next try
2025-09-01T01:01:21.1047997Z 2025/09/01 01:01:21 [TRACE] Waiting 1m0s before next try
2025-09-01T01:02:21.3373589Z 2025/09/01 01:02:21 [TRACE] Waiting 10s before next try
2025-09-01T01:02:31.4452693Z 2025/09/01 01:02:31 [TRACE] Waiting 1m0s before next try
2025-09-01T01:03:31.5629636Z 2025/09/01 01:03:31 [TRACE] Waiting 10s before next try
2025-09-01T01:03:41.6539836Z 2025/09/01 01:03:41 [TRACE] Waiting 1m0s before next try
2025-09-01T01:04:41.7770624Z 2025/09/01 01:04:41 [TRACE] Waiting 10s before next try
2025-09-01T01:04:51.8757845Z 2025/09/01 01:04:51 [TRACE] Waiting 1m0s before next try
2025-09-01T01:05:52.0791596Z 2025/09/01 01:05:52 [TRACE] Waiting 10s before next try
2025-09-01T01:06:02.1867255Z 2025/09/01 01:06:02 [TRACE] Waiting 1m0s before next try
2025-09-01T01:07:02.4560400Z 2025/09/01 01:07:02 [TRACE] Waiting 10s before next try
2025-09-01T01:07:12.5762077Z 2025/09/01 01:07:12 [TRACE] Waiting 1m0s before next try
2025-09-01T01:08:12.7963022Z 2025/09/01 01:08:12 [TRACE] Waiting 10s before next try
2025-09-01T01:08:22.9108703Z 2025/09/01 01:08:22 [TRACE] Waiting 1m0s before next try
2025-09-01T01:09:23.0414460Z 2025/09/01 01:09:23 [TRACE] Waiting 10s before next try
2025-09-01T01:09:33.1376170Z 2025/09/01 01:09:33 [TRACE] Waiting 1m0s before next try
2025-09-01T01:10:33.2885072Z 2025/09/01 01:10:33 [TRACE] Waiting 10s before next try
2025-09-01T01:10:43.3897732Z 2025/09/01 01:10:43 [TRACE] Waiting 1m0s before next try
2025-09-01T01:11:43.5131970Z 2025/09/01 01:11:43 [TRACE] Waiting 10s before next try
2025-09-01T01:11:53.6308232Z 2025/09/01 01:11:53 [TRACE] Waiting 1m0s before next try
2025-09-01T01:12:53.7836179Z 2025/09/01 01:12:53 [TRACE] Waiting 10s before next try
2025-09-01T01:13:03.8752560Z 2025/09/01 01:13:03 [TRACE] Waiting 1m0s before next try
2025-09-01T01:14:04.0963229Z 2025/09/01 01:14:04 [TRACE] Waiting 10s before next try
2025-09-01T01:14:14.2036500Z 2025/09/01 01:14:14 [TRACE] Waiting 1m0s before next try
2025-09-01T01:15:14.3061937Z 2025/09/01 01:15:14 [TRACE] Waiting 10s before next try
2025-09-01T01:15:24.4072765Z 2025/09/01 01:15:24 [TRACE] Waiting 1m0s before next try
2025-09-01T01:16:24.6269769Z 2025/09/01 01:16:24 [TRACE] Waiting 10s before next try
2025-09-01T01:16:34.7542196Z 2025/09/01 01:16:34 [TRACE] Waiting 1m0s before next try
2025-09-01T01:17:34.9806921Z 2025/09/01 01:17:34 [TRACE] Waiting 10s before next try
2025-09-01T01:17:45.0793755Z 2025/09/01 01:17:45 [TRACE] Waiting 1m0s before next try
2025-09-01T01:18:45.2806022Z 2025/09/01 01:18:45 [TRACE] Waiting 10s before next try
2025-09-01T01:18:55.3879692Z 2025/09/01 01:18:55 [TRACE] Waiting 1m0s before next try
2025-09-01T01:19:55.6461268Z 2025/09/01 01:19:55 [TRACE] Waiting 10s before next try
2025-09-01T01:20:05.7627682Z 2025/09/01 01:20:05 [TRACE] Waiting 1m0s before next try
2025-09-01T01:21:05.9292393Z 2025/09/01 01:21:05 [TRACE] Waiting 10s before next try
2025-09-01T01:21:16.0298277Z 2025/09/01 01:21:16 [TRACE] Waiting 1m0s before next try
2025-09-01T01:22:16.1855194Z 2025/09/01 01:22:16 [TRACE] Waiting 10s before next try
2025-09-01T01:22:26.2722789Z 2025/09/01 01:22:26 [TRACE] Waiting 1m0s before next try
2025-09-01T01:23:26.4938296Z 2025/09/01 01:23:26 [TRACE] Waiting 10s before next try
2025-09-01T01:23:36.5938000Z 2025/09/01 01:23:36 [TRACE] Waiting 1m0s before next try
2025-09-01T01:24:36.7607949Z 2025/09/01 01:24:36 [TRACE] Waiting 10s before next try
2025-09-01T01:24:46.8591580Z 2025/09/01 01:24:46 [TRACE] Waiting 1m0s before next try
2025-09-01T01:25:47.1620205Z 2025/09/01 01:25:47 [TRACE] Waiting 10s before next try
2025-09-01T01:25:57.2626466Z 2025/09/01 01:25:57 [TRACE] Waiting 1m0s before next try
2025-09-01T01:26:57.4242317Z 2025/09/01 01:26:57 [TRACE] Waiting 10s before next try
2025-09-01T01:27:07.5393737Z 2025/09/01 01:27:07 [TRACE] Waiting 1m0s before next try
2025-09-01T01:28:07.7223870Z 2025/09/01 01:28:07 [TRACE] Waiting 10s before next try
2025-09-01T01:28:17.8348770Z 2025/09/01 01:28:17 [TRACE] Waiting 1m0s before next try
2025-09-01T01:29:17.9858648Z 2025/09/01 01:29:17 [TRACE] Waiting 10s before next try
2025-09-01T01:29:28.0817856Z 2025/09/01 01:29:28 [TRACE] Waiting 1m0s before next try
2025-09-01T01:30:13.7552897Z 2025/09/01 01:30:13 [WARN] WaitForState timeout after 1h0m0s
2025-09-01T01:30:13.7553926Z 2025/09/01 01:30:13 [WARN] WaitForState starting 30s refresh grace period
2025-09-01T01:30:13.7561190Z     resource_migration_test.go:11: 
2025-09-01T01:30:13.7562926Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-09-01T01:30:13.7572159Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:130
2025-09-01T01:30:13.7576406Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2025-09-01T01:30:13.7580083Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_migration_test.go:11
2025-09-01T01:30:13.7581092Z         	Error:      	Received unexpected error:
2025-09-01T01:30:13.7582111Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T01:30:13.7582791Z         	Test:       	TestMigMongoDBEmployeeAccessGrant_basic
2025-09-01T01:30:13.7584045Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4280064500069563946, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T01:30:13.7584874Z --- FAIL: TestMigMongoDBEmployeeAccessGrant_basic (3604.04s)
```

  - FAIL an hour

### Error 2025-09-01T05:58:02+00:00
```
2025-09-01T05:58:02.2466793Z === RUN   TestMigMongoDBEmployeeAccessGrant_basic
2025-09-01T05:58:02.2468462Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-140140699057154476
2025-09-01T05:58:04.7239274Z     resource_migration_test.go:11: Creating execution cluster: test-acc-tf-c-2208859931312771758
2025-09-01T05:58:05.3615293Z 2025/09/01 05:58:05 [DEBUG] Waiting for state to become: [IDLE]
2025-09-01T06:01:05.5631468Z 2025/09/01 06:01:05 [TRACE] Waiting 1m0s before next try
2025-09-01T06:02:05.7366841Z 2025/09/01 06:02:05 [TRACE] Waiting 10s before next try
2025-09-01T06:02:15.8496095Z 2025/09/01 06:02:15 [TRACE] Waiting 1m0s before next try
2025-09-01T06:03:16.0722832Z 2025/09/01 06:03:16 [TRACE] Waiting 10s before next try
2025-09-01T06:03:26.1886543Z 2025/09/01 06:03:26 [TRACE] Waiting 1m0s before next try
2025-09-01T06:04:26.3464453Z 2025/09/01 06:04:26 [TRACE] Waiting 10s before next try
2025-09-01T06:04:36.4457304Z 2025/09/01 06:04:36 [TRACE] Waiting 1m0s before next try
2025-09-01T06:05:36.7178789Z 2025/09/01 06:05:36 [TRACE] Waiting 10s before next try
2025-09-01T06:05:46.8127883Z 2025/09/01 06:05:46 [TRACE] Waiting 1m0s before next try
2025-09-01T06:06:46.9488993Z 2025/09/01 06:06:46 [TRACE] Waiting 10s before next try
2025-09-01T06:06:57.0563066Z 2025/09/01 06:06:57 [TRACE] Waiting 1m0s before next try
2025-09-01T06:07:57.1957884Z 2025/09/01 06:07:57 [TRACE] Waiting 10s before next try
2025-09-01T06:08:07.3026845Z 2025/09/01 06:08:07 [TRACE] Waiting 1m0s before next try
2025-09-01T06:09:07.4853430Z 2025/09/01 06:09:07 [TRACE] Waiting 10s before next try
2025-09-01T06:09:17.6176913Z 2025/09/01 06:09:17 [TRACE] Waiting 1m0s before next try
2025-09-01T06:10:17.7843111Z 2025/09/01 06:10:17 [TRACE] Waiting 10s before next try
2025-09-01T06:10:27.8941252Z 2025/09/01 06:10:27 [TRACE] Waiting 1m0s before next try
2025-09-01T06:11:28.1912803Z 2025/09/01 06:11:28 [TRACE] Waiting 10s before next try
2025-09-01T06:11:38.2891630Z 2025/09/01 06:11:38 [TRACE] Waiting 1m0s before next try
2025-09-01T06:12:38.5598096Z 2025/09/01 06:12:38 [TRACE] Waiting 10s before next try
2025-09-01T06:12:48.6958125Z 2025/09/01 06:12:48 [TRACE] Waiting 1m0s before next try
2025-09-01T06:13:48.8415821Z 2025/09/01 06:13:48 [TRACE] Waiting 10s before next try
2025-09-01T06:13:58.9676211Z 2025/09/01 06:13:58 [TRACE] Waiting 1m0s before next try
2025-09-01T06:14:59.1380287Z 2025/09/01 06:14:59 [TRACE] Waiting 10s before next try
2025-09-01T06:15:09.2379331Z 2025/09/01 06:15:09 [TRACE] Waiting 1m0s before next try
2025-09-01T06:16:09.4202319Z 2025/09/01 06:16:09 [TRACE] Waiting 10s before next try
2025-09-01T06:16:19.5413616Z 2025/09/01 06:16:19 [TRACE] Waiting 1m0s before next try
2025-09-01T06:17:19.7823411Z 2025/09/01 06:17:19 [TRACE] Waiting 10s before next try
2025-09-01T06:17:29.8960772Z 2025/09/01 06:17:29 [TRACE] Waiting 1m0s before next try
2025-09-01T06:18:30.0662387Z 2025/09/01 06:18:30 [TRACE] Waiting 10s before next try
2025-09-01T06:18:40.1819448Z 2025/09/01 06:18:40 [TRACE] Waiting 1m0s before next try
2025-09-01T06:19:40.4106499Z 2025/09/01 06:19:40 [TRACE] Waiting 10s before next try
2025-09-01T06:19:50.5310329Z 2025/09/01 06:19:50 [TRACE] Waiting 1m0s before next try
2025-09-01T06:20:50.7129830Z 2025/09/01 06:20:50 [TRACE] Waiting 10s before next try
2025-09-01T06:21:00.8188403Z 2025/09/01 06:21:00 [TRACE] Waiting 1m0s before next try
2025-09-01T06:22:00.9972362Z 2025/09/01 06:22:00 [TRACE] Waiting 10s before next try
2025-09-01T06:22:11.0831648Z 2025/09/01 06:22:11 [TRACE] Waiting 1m0s before next try
2025-09-01T06:23:11.2256427Z 2025/09/01 06:23:11 [TRACE] Waiting 10s before next try
2025-09-01T06:23:21.3604455Z 2025/09/01 06:23:21 [TRACE] Waiting 1m0s before next try
2025-09-01T06:24:21.5458534Z 2025/09/01 06:24:21 [TRACE] Waiting 10s before next try
2025-09-01T06:24:31.6611856Z 2025/09/01 06:24:31 [TRACE] Waiting 1m0s before next try
2025-09-01T06:25:31.8089252Z 2025/09/01 06:25:31 [TRACE] Waiting 10s before next try
2025-09-01T06:25:41.9104098Z 2025/09/01 06:25:41 [TRACE] Waiting 1m0s before next try
2025-09-01T06:26:42.1092454Z 2025/09/01 06:26:42 [TRACE] Waiting 10s before next try
2025-09-01T06:26:52.2211388Z 2025/09/01 06:26:52 [TRACE] Waiting 1m0s before next try
2025-09-01T06:27:52.3999966Z 2025/09/01 06:27:52 [TRACE] Waiting 10s before next try
2025-09-01T06:28:02.5172950Z 2025/09/01 06:28:02 [TRACE] Waiting 1m0s before next try
2025-09-01T06:29:02.6755905Z 2025/09/01 06:29:02 [TRACE] Waiting 10s before next try
2025-09-01T06:29:12.7751388Z 2025/09/01 06:29:12 [TRACE] Waiting 1m0s before next try
2025-09-01T06:30:12.9453565Z 2025/09/01 06:30:12 [TRACE] Waiting 10s before next try
2025-09-01T06:30:23.0506351Z 2025/09/01 06:30:23 [TRACE] Waiting 1m0s before next try
2025-09-01T06:31:23.2191830Z 2025/09/01 06:31:23 [TRACE] Waiting 10s before next try
2025-09-01T06:31:33.3323149Z 2025/09/01 06:31:33 [TRACE] Waiting 1m0s before next try
2025-09-01T06:32:33.5560301Z 2025/09/01 06:32:33 [TRACE] Waiting 10s before next try
2025-09-01T06:32:43.6754928Z 2025/09/01 06:32:43 [TRACE] Waiting 1m0s before next try
2025-09-01T06:33:43.8893400Z 2025/09/01 06:33:43 [TRACE] Waiting 10s before next try
2025-09-01T06:33:54.0167390Z 2025/09/01 06:33:54 [TRACE] Waiting 1m0s before next try
2025-09-01T06:34:54.2608689Z 2025/09/01 06:34:54 [TRACE] Waiting 10s before next try
2025-09-01T06:35:04.3593711Z 2025/09/01 06:35:04 [TRACE] Waiting 1m0s before next try
2025-09-01T06:36:04.5238130Z 2025/09/01 06:36:04 [TRACE] Waiting 10s before next try
2025-09-01T06:36:14.6165591Z 2025/09/01 06:36:14 [TRACE] Waiting 1m0s before next try
2025-09-01T06:37:14.7481701Z 2025/09/01 06:37:14 [TRACE] Waiting 10s before next try
2025-09-01T06:37:24.8424954Z 2025/09/01 06:37:24 [TRACE] Waiting 1m0s before next try
2025-09-01T06:38:25.0420145Z 2025/09/01 06:38:25 [TRACE] Waiting 10s before next try
2025-09-01T06:38:35.1556704Z 2025/09/01 06:38:35 [TRACE] Waiting 1m0s before next try
2025-09-01T06:39:35.3034066Z 2025/09/01 06:39:35 [TRACE] Waiting 10s before next try
2025-09-01T06:39:45.4032576Z 2025/09/01 06:39:45 [TRACE] Waiting 1m0s before next try
2025-09-01T06:40:45.7233615Z 2025/09/01 06:40:45 [TRACE] Waiting 10s before next try
2025-09-01T06:40:55.8466213Z 2025/09/01 06:40:55 [TRACE] Waiting 1m0s before next try
2025-09-01T06:41:55.9877758Z 2025/09/01 06:41:55 [TRACE] Waiting 10s before next try
2025-09-01T06:42:06.0855771Z 2025/09/01 06:42:06 [TRACE] Waiting 1m0s before next try
2025-09-01T06:43:06.2568374Z 2025/09/01 06:43:06 [TRACE] Waiting 10s before next try
2025-09-01T06:43:16.3526843Z 2025/09/01 06:43:16 [TRACE] Waiting 1m0s before next try
2025-09-01T06:44:16.4883006Z 2025/09/01 06:44:16 [TRACE] Waiting 10s before next try
2025-09-01T06:44:26.5986531Z 2025/09/01 06:44:26 [TRACE] Waiting 1m0s before next try
2025-09-01T06:45:26.8616948Z 2025/09/01 06:45:26 [TRACE] Waiting 10s before next try
2025-09-01T06:45:36.9685458Z 2025/09/01 06:45:36 [TRACE] Waiting 1m0s before next try
2025-09-01T06:46:37.1611197Z 2025/09/01 06:46:37 [TRACE] Waiting 10s before next try
2025-09-01T06:46:47.2624022Z 2025/09/01 06:46:47 [TRACE] Waiting 1m0s before next try
2025-09-01T06:47:47.5251545Z 2025/09/01 06:47:47 [TRACE] Waiting 10s before next try
2025-09-01T06:47:57.6303232Z 2025/09/01 06:47:57 [TRACE] Waiting 1m0s before next try
2025-09-01T06:48:57.7693649Z 2025/09/01 06:48:57 [TRACE] Waiting 10s before next try
2025-09-01T06:49:07.8925891Z 2025/09/01 06:49:07 [TRACE] Waiting 1m0s before next try
2025-09-01T06:50:08.0489376Z 2025/09/01 06:50:08 [TRACE] Waiting 10s before next try
2025-09-01T06:50:18.1834387Z 2025/09/01 06:50:18 [TRACE] Waiting 1m0s before next try
2025-09-01T06:51:18.4292117Z 2025/09/01 06:51:18 [TRACE] Waiting 10s before next try
2025-09-01T06:51:28.5185396Z 2025/09/01 06:51:28 [TRACE] Waiting 1m0s before next try
2025-09-01T06:52:28.6775670Z 2025/09/01 06:52:28 [TRACE] Waiting 10s before next try
2025-09-01T06:52:38.7763954Z 2025/09/01 06:52:38 [TRACE] Waiting 1m0s before next try
2025-09-01T06:53:39.0062495Z 2025/09/01 06:53:39 [TRACE] Waiting 10s before next try
2025-09-01T06:53:49.1196860Z 2025/09/01 06:53:49 [TRACE] Waiting 1m0s before next try
2025-09-01T06:54:49.2496585Z 2025/09/01 06:54:49 [TRACE] Waiting 10s before next try
2025-09-01T06:54:59.3372492Z 2025/09/01 06:54:59 [TRACE] Waiting 1m0s before next try
2025-09-01T06:55:59.5261614Z 2025/09/01 06:55:59 [TRACE] Waiting 10s before next try
2025-09-01T06:56:09.6595273Z 2025/09/01 06:56:09 [TRACE] Waiting 1m0s before next try
2025-09-01T06:57:09.8304036Z 2025/09/01 06:57:09 [TRACE] Waiting 10s before next try
2025-09-01T06:57:19.9414219Z 2025/09/01 06:57:19 [TRACE] Waiting 1m0s before next try
2025-09-01T06:58:05.3620156Z 2025/09/01 06:58:05 [WARN] WaitForState timeout after 1h0m0s
2025-09-01T06:58:05.3621401Z 2025/09/01 06:58:05 [WARN] WaitForState starting 30s refresh grace period
2025-09-01T06:58:05.3624827Z     resource_migration_test.go:11: 
2025-09-01T06:58:05.3626904Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-09-01T06:58:05.3630545Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:130
2025-09-01T06:58:05.3634757Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2025-09-01T06:58:05.3639026Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_migration_test.go:11
2025-09-01T06:58:05.3640547Z         	Error:      	Received unexpected error:
2025-09-01T06:58:05.3642165Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T06:58:05.3643162Z         	Test:       	TestMigMongoDBEmployeeAccessGrant_basic
2025-09-01T06:58:05.3645004Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2208859931312771758, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T06:58:05.3646263Z --- FAIL: TestMigMongoDBEmployeeAccessGrant_basic (3603.12s)
```

  - PASS 20 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 11 minutes
- 2025-09-02 PASS 11 minutes
- 2025-09-03 PASS 27 minutes
- 2025-09-04 PASS 12 minutes