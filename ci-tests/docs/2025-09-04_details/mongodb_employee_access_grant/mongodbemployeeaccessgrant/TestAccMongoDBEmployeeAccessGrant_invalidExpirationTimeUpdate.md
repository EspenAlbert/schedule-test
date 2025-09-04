# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 03:30](#error-2025-09-01t0330150000) |  | dev | timeout | 3600.06s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 3 seconds
- 2025-08-07 PASS 23 seconds
- 2025-08-08 PASS a second
- 2025-08-09 PASS 2 seconds
- 2025-08-10 PASS a second
- 2025-08-11 PASS 2 seconds
- 2025-08-12 PASS 2 seconds
- 2025-08-13 PASS a second
- 2025-08-14 PASS 3 seconds
- 2025-08-15 PASS a second
- 2025-08-16 PASS a second
- 2025-08-17 PASS 2 seconds
- 2025-08-18 PASS 2 seconds
- 2025-08-19 PASS a second
- 2025-08-20
  - PASS a second
  - PASS a second
- 2025-08-21 PASS 2 seconds
- 2025-08-22 PASS a second
- 2025-08-23 PASS 2 seconds
- 2025-08-24 PASS 2 seconds
- 2025-08-25 PASS a second
- 2025-08-26 PASS 2 seconds
- 2025-08-27 PASS 2 seconds
- 2025-08-28 PASS a second
- 2025-08-29 PASS a second
- 2025-08-30 PASS a second
- 2025-08-31 PASS 2 seconds
- 2025-09-01
  - FAIL an hour

### Error 2025-09-01T03:30:15+00:00
```
2025-09-01T03:30:15.0013831Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2025-09-01T03:30:15.0014590Z     resource_test.go:81: Creating execution cluster: test-acc-tf-c-6442029529880751170
2025-09-01T03:30:15.5610569Z 2025/09/01 03:30:15 [DEBUG] Waiting for state to become: [IDLE]
2025-09-01T03:33:15.7884613Z 2025/09/01 03:33:15 [TRACE] Waiting 1m0s before next try
2025-09-01T03:34:16.0136932Z 2025/09/01 03:34:16 [TRACE] Waiting 10s before next try
2025-09-01T03:34:26.1089705Z 2025/09/01 03:34:26 [TRACE] Waiting 1m0s before next try
2025-09-01T03:35:26.2212248Z 2025/09/01 03:35:26 [TRACE] Waiting 10s before next try
2025-09-01T03:35:36.3344105Z 2025/09/01 03:35:36 [TRACE] Waiting 1m0s before next try
2025-09-01T03:36:36.5845766Z 2025/09/01 03:36:36 [TRACE] Waiting 10s before next try
2025-09-01T03:36:46.6790975Z 2025/09/01 03:36:46 [TRACE] Waiting 1m0s before next try
2025-09-01T03:37:46.8512084Z 2025/09/01 03:37:46 [TRACE] Waiting 10s before next try
2025-09-01T03:37:56.9508994Z 2025/09/01 03:37:56 [TRACE] Waiting 1m0s before next try
2025-09-01T03:38:57.1337332Z 2025/09/01 03:38:57 [TRACE] Waiting 10s before next try
2025-09-01T03:39:07.2310303Z 2025/09/01 03:39:07 [TRACE] Waiting 1m0s before next try
2025-09-01T03:40:07.4616116Z 2025/09/01 03:40:07 [TRACE] Waiting 10s before next try
2025-09-01T03:40:17.5631519Z 2025/09/01 03:40:17 [TRACE] Waiting 1m0s before next try
2025-09-01T03:41:17.7063002Z 2025/09/01 03:41:17 [TRACE] Waiting 10s before next try
2025-09-01T03:41:27.8241951Z 2025/09/01 03:41:27 [TRACE] Waiting 1m0s before next try
2025-09-01T03:42:27.9534240Z 2025/09/01 03:42:27 [TRACE] Waiting 10s before next try
2025-09-01T03:42:38.0799799Z 2025/09/01 03:42:38 [TRACE] Waiting 1m0s before next try
2025-09-01T03:43:38.1976462Z 2025/09/01 03:43:38 [TRACE] Waiting 10s before next try
2025-09-01T03:43:48.3107507Z 2025/09/01 03:43:48 [TRACE] Waiting 1m0s before next try
2025-09-01T03:44:48.5141400Z 2025/09/01 03:44:48 [TRACE] Waiting 10s before next try
2025-09-01T03:44:58.6194994Z 2025/09/01 03:44:58 [TRACE] Waiting 1m0s before next try
2025-09-01T03:45:58.8397601Z 2025/09/01 03:45:58 [TRACE] Waiting 10s before next try
2025-09-01T03:46:08.9315529Z 2025/09/01 03:46:08 [TRACE] Waiting 1m0s before next try
2025-09-01T03:47:09.1351856Z 2025/09/01 03:47:09 [TRACE] Waiting 10s before next try
2025-09-01T03:47:19.2318190Z 2025/09/01 03:47:19 [TRACE] Waiting 1m0s before next try
2025-09-01T03:48:19.3410248Z 2025/09/01 03:48:19 [TRACE] Waiting 10s before next try
2025-09-01T03:48:29.4344606Z 2025/09/01 03:48:29 [TRACE] Waiting 1m0s before next try
2025-09-01T03:49:29.5682157Z 2025/09/01 03:49:29 [TRACE] Waiting 10s before next try
2025-09-01T03:49:39.6877111Z 2025/09/01 03:49:39 [TRACE] Waiting 1m0s before next try
2025-09-01T03:50:39.8307176Z 2025/09/01 03:50:39 [TRACE] Waiting 10s before next try
2025-09-01T03:50:49.9461742Z 2025/09/01 03:50:49 [TRACE] Waiting 1m0s before next try
2025-09-01T03:51:50.2020931Z 2025/09/01 03:51:50 [TRACE] Waiting 10s before next try
2025-09-01T03:52:00.3280246Z 2025/09/01 03:52:00 [TRACE] Waiting 1m0s before next try
2025-09-01T03:53:00.5517659Z 2025/09/01 03:53:00 [TRACE] Waiting 10s before next try
2025-09-01T03:53:10.6321201Z 2025/09/01 03:53:10 [TRACE] Waiting 1m0s before next try
2025-09-01T03:54:10.9732175Z 2025/09/01 03:54:10 [TRACE] Waiting 10s before next try
2025-09-01T03:54:21.0854600Z 2025/09/01 03:54:21 [TRACE] Waiting 1m0s before next try
2025-09-01T03:55:21.1841442Z 2025/09/01 03:55:21 [TRACE] Waiting 10s before next try
2025-09-01T03:55:31.2870529Z 2025/09/01 03:55:31 [TRACE] Waiting 1m0s before next try
2025-09-01T03:56:31.4407827Z 2025/09/01 03:56:31 [TRACE] Waiting 10s before next try
2025-09-01T03:56:41.5415724Z 2025/09/01 03:56:41 [TRACE] Waiting 1m0s before next try
2025-09-01T03:57:41.6525166Z 2025/09/01 03:57:41 [TRACE] Waiting 10s before next try
2025-09-01T03:57:51.7672343Z 2025/09/01 03:57:51 [TRACE] Waiting 1m0s before next try
2025-09-01T03:58:51.9915236Z 2025/09/01 03:58:51 [TRACE] Waiting 10s before next try
2025-09-01T03:59:02.1018360Z 2025/09/01 03:59:02 [TRACE] Waiting 1m0s before next try
2025-09-01T04:00:02.3112750Z 2025/09/01 04:00:02 [TRACE] Waiting 10s before next try
2025-09-01T04:00:12.3950488Z 2025/09/01 04:00:12 [TRACE] Waiting 1m0s before next try
2025-09-01T04:01:12.6394341Z 2025/09/01 04:01:12 [TRACE] Waiting 10s before next try
2025-09-01T04:01:22.7539952Z 2025/09/01 04:01:22 [TRACE] Waiting 1m0s before next try
2025-09-01T04:02:22.9952634Z 2025/09/01 04:02:22 [TRACE] Waiting 10s before next try
2025-09-01T04:02:33.0863157Z 2025/09/01 04:02:33 [TRACE] Waiting 1m0s before next try
2025-09-01T04:03:33.3913261Z 2025/09/01 04:03:33 [TRACE] Waiting 10s before next try
2025-09-01T04:03:43.4975032Z 2025/09/01 04:03:43 [TRACE] Waiting 1m0s before next try
2025-09-01T04:04:43.6311273Z 2025/09/01 04:04:43 [TRACE] Waiting 10s before next try
2025-09-01T04:04:53.7246290Z 2025/09/01 04:04:53 [TRACE] Waiting 1m0s before next try
2025-09-01T04:05:53.8885823Z 2025/09/01 04:05:53 [TRACE] Waiting 10s before next try
2025-09-01T04:06:03.9843084Z 2025/09/01 04:06:03 [TRACE] Waiting 1m0s before next try
2025-09-01T04:07:04.1269893Z 2025/09/01 04:07:04 [TRACE] Waiting 10s before next try
2025-09-01T04:07:14.2101632Z 2025/09/01 04:07:14 [TRACE] Waiting 1m0s before next try
2025-09-01T04:08:14.4525048Z 2025/09/01 04:08:14 [TRACE] Waiting 10s before next try
2025-09-01T04:08:24.5586996Z 2025/09/01 04:08:24 [TRACE] Waiting 1m0s before next try
2025-09-01T04:09:24.6975791Z 2025/09/01 04:09:24 [TRACE] Waiting 10s before next try
2025-09-01T04:09:34.7913237Z 2025/09/01 04:09:34 [TRACE] Waiting 1m0s before next try
2025-09-01T04:10:34.9765229Z 2025/09/01 04:10:34 [TRACE] Waiting 10s before next try
2025-09-01T04:10:45.0720087Z 2025/09/01 04:10:45 [TRACE] Waiting 1m0s before next try
2025-09-01T04:11:45.2512430Z 2025/09/01 04:11:45 [TRACE] Waiting 10s before next try
2025-09-01T04:11:55.3522196Z 2025/09/01 04:11:55 [TRACE] Waiting 1m0s before next try
2025-09-01T04:12:55.5605881Z 2025/09/01 04:12:55 [TRACE] Waiting 10s before next try
2025-09-01T04:13:05.6595971Z 2025/09/01 04:13:05 [TRACE] Waiting 1m0s before next try
2025-09-01T04:14:05.9182147Z 2025/09/01 04:14:05 [TRACE] Waiting 10s before next try
2025-09-01T04:14:16.0253988Z 2025/09/01 04:14:16 [TRACE] Waiting 1m0s before next try
2025-09-01T04:15:16.2670461Z 2025/09/01 04:15:16 [TRACE] Waiting 10s before next try
2025-09-01T04:15:26.3734551Z 2025/09/01 04:15:26 [TRACE] Waiting 1m0s before next try
2025-09-01T04:16:26.5871859Z 2025/09/01 04:16:26 [TRACE] Waiting 10s before next try
2025-09-01T04:16:36.6889807Z 2025/09/01 04:16:36 [TRACE] Waiting 1m0s before next try
2025-09-01T04:17:36.9044089Z 2025/09/01 04:17:36 [TRACE] Waiting 10s before next try
2025-09-01T04:17:47.0099842Z 2025/09/01 04:17:47 [TRACE] Waiting 1m0s before next try
2025-09-01T04:18:47.1472364Z 2025/09/01 04:18:47 [TRACE] Waiting 10s before next try
2025-09-01T04:18:57.2461985Z 2025/09/01 04:18:57 [TRACE] Waiting 1m0s before next try
2025-09-01T04:19:57.3560608Z 2025/09/01 04:19:57 [TRACE] Waiting 10s before next try
2025-09-01T04:20:07.4817848Z 2025/09/01 04:20:07 [TRACE] Waiting 1m0s before next try
2025-09-01T04:21:07.6235645Z 2025/09/01 04:21:07 [TRACE] Waiting 10s before next try
2025-09-01T04:21:17.7191154Z 2025/09/01 04:21:17 [TRACE] Waiting 1m0s before next try
2025-09-01T04:22:17.9998376Z 2025/09/01 04:22:17 [TRACE] Waiting 10s before next try
2025-09-01T04:22:28.1174468Z 2025/09/01 04:22:28 [TRACE] Waiting 1m0s before next try
2025-09-01T04:23:28.2984758Z 2025/09/01 04:23:28 [TRACE] Waiting 10s before next try
2025-09-01T04:23:38.4081044Z 2025/09/01 04:23:38 [TRACE] Waiting 1m0s before next try
2025-09-01T04:24:38.6299295Z 2025/09/01 04:24:38 [TRACE] Waiting 10s before next try
2025-09-01T04:24:48.7354738Z 2025/09/01 04:24:48 [TRACE] Waiting 1m0s before next try
2025-09-01T04:25:48.9076457Z 2025/09/01 04:25:48 [TRACE] Waiting 10s before next try
2025-09-01T04:25:59.0116255Z 2025/09/01 04:25:59 [TRACE] Waiting 1m0s before next try
2025-09-01T04:26:59.1611090Z 2025/09/01 04:26:59 [TRACE] Waiting 10s before next try
2025-09-01T04:27:09.2737999Z 2025/09/01 04:27:09 [TRACE] Waiting 1m0s before next try
2025-09-01T04:28:09.4438501Z 2025/09/01 04:28:09 [TRACE] Waiting 10s before next try
2025-09-01T04:28:19.5421446Z 2025/09/01 04:28:19 [TRACE] Waiting 1m0s before next try
2025-09-01T04:29:19.7892341Z 2025/09/01 04:29:19 [TRACE] Waiting 10s before next try
2025-09-01T04:29:29.8687210Z 2025/09/01 04:29:29 [TRACE] Waiting 1m0s before next try
2025-09-01T04:30:15.5615857Z 2025/09/01 04:30:15 [WARN] WaitForState timeout after 1h0m0s
2025-09-01T04:30:15.5617119Z 2025/09/01 04:30:15 [WARN] WaitForState starting 30s refresh grace period
2025-09-01T04:30:15.5625369Z     resource_test.go:81: 
2025-09-01T04:30:15.5627258Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-09-01T04:30:15.5630339Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:130
2025-09-01T04:30:15.5633761Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:81
2025-09-01T04:30:15.5635145Z         	Error:      	Received unexpected error:
2025-09-01T04:30:15.5636914Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T04:30:15.5638142Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2025-09-01T04:30:15.5640155Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6442029529880751170, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T04:30:15.5641572Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate (3600.56s)
```

  - PASS a second
  - PASS a second
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS a second
  - PASS a second
  - PASS 2 seconds
- 2025-09-02 PASS 2 seconds
- 2025-09-03 PASS a second
- 2025-09-04 PASS a second