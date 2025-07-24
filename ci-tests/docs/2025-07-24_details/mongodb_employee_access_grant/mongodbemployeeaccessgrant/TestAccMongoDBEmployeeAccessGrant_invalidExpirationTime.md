# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 02:30](#error-2025-07-14t0230590000) |  | dev | timeout | 3600.08s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS a moment
- 2025-06-26 PASS a moment
- 2025-06-27 PASS a moment
- 2025-06-28 PASS a moment
- 2025-06-29 PASS a moment
- 2025-06-30 PASS a moment
- 2025-07-01
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
- 2025-07-02 PASS a moment
- 2025-07-03 PASS a moment
- 2025-07-04 PASS a moment
- 2025-07-05 PASS a moment
- 2025-07-06 PASS a moment
- 2025-07-07 PASS a moment
- 2025-07-08 PASS a moment
- 2025-07-09 PASS a moment
- 2025-07-10
  - PASS a moment
  - PASS a moment
- 2025-07-11 PASS a moment
- 2025-07-12 PASS a moment
- 2025-07-13 PASS a moment
- 2025-07-14

### Error 2025-07-14T02:30:59+00:00
```
2025-07-14T02:30:59.1554920Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2025-07-14T02:30:59.1555532Z     resource_test.go:66: Creating execution cluster: test-acc-tf-c-6504871192411216757
2025-07-14T02:30:59.9061592Z 2025/07/14 02:30:59 [DEBUG] Waiting for state to become: [IDLE]
2025-07-14T02:34:00.1628950Z 2025/07/14 02:34:00 [TRACE] Waiting 1m0s before next try
2025-07-14T02:35:00.3264362Z 2025/07/14 02:35:00 [TRACE] Waiting 10s before next try
2025-07-14T02:35:10.4650124Z 2025/07/14 02:35:10 [TRACE] Waiting 1m0s before next try
2025-07-14T02:36:10.6921319Z 2025/07/14 02:36:10 [TRACE] Waiting 10s before next try
2025-07-14T02:36:20.8171324Z 2025/07/14 02:36:20 [TRACE] Waiting 1m0s before next try
2025-07-14T02:37:21.0483835Z 2025/07/14 02:37:21 [TRACE] Waiting 10s before next try
2025-07-14T02:37:31.1838846Z 2025/07/14 02:37:31 [TRACE] Waiting 1m0s before next try
2025-07-14T02:38:31.4135590Z 2025/07/14 02:38:31 [TRACE] Waiting 10s before next try
2025-07-14T02:38:41.5449200Z 2025/07/14 02:38:41 [TRACE] Waiting 1m0s before next try
2025-07-14T02:39:41.8071408Z 2025/07/14 02:39:41 [TRACE] Waiting 10s before next try
2025-07-14T02:39:51.9717601Z 2025/07/14 02:39:51 [TRACE] Waiting 1m0s before next try
2025-07-14T02:40:52.1893948Z 2025/07/14 02:40:52 [TRACE] Waiting 10s before next try
2025-07-14T02:41:02.3236671Z 2025/07/14 02:41:02 [TRACE] Waiting 1m0s before next try
2025-07-14T02:42:02.5239168Z 2025/07/14 02:42:02 [TRACE] Waiting 10s before next try
2025-07-14T02:42:12.6694617Z 2025/07/14 02:42:12 [TRACE] Waiting 1m0s before next try
2025-07-14T02:43:12.8534513Z 2025/07/14 02:43:12 [TRACE] Waiting 10s before next try
2025-07-14T02:43:22.9784369Z 2025/07/14 02:43:22 [TRACE] Waiting 1m0s before next try
2025-07-14T02:44:23.1815055Z 2025/07/14 02:44:23 [TRACE] Waiting 10s before next try
2025-07-14T02:44:33.3148524Z 2025/07/14 02:44:33 [TRACE] Waiting 1m0s before next try
2025-07-14T02:45:33.4992697Z 2025/07/14 02:45:33 [TRACE] Waiting 10s before next try
2025-07-14T02:45:43.6266040Z 2025/07/14 02:45:43 [TRACE] Waiting 1m0s before next try
2025-07-14T02:46:43.8225975Z 2025/07/14 02:46:43 [TRACE] Waiting 10s before next try
2025-07-14T02:46:53.9558433Z 2025/07/14 02:46:53 [TRACE] Waiting 1m0s before next try
2025-07-14T02:47:54.2200392Z 2025/07/14 02:47:54 [TRACE] Waiting 10s before next try
2025-07-14T02:48:04.3493726Z 2025/07/14 02:48:04 [TRACE] Waiting 1m0s before next try
2025-07-14T02:49:04.6017257Z 2025/07/14 02:49:04 [TRACE] Waiting 10s before next try
2025-07-14T02:49:14.7452564Z 2025/07/14 02:49:14 [TRACE] Waiting 1m0s before next try
2025-07-14T02:50:14.9865784Z 2025/07/14 02:50:14 [TRACE] Waiting 10s before next try
2025-07-14T02:50:25.1259746Z 2025/07/14 02:50:25 [TRACE] Waiting 1m0s before next try
2025-07-14T02:51:25.2973855Z 2025/07/14 02:51:25 [TRACE] Waiting 10s before next try
2025-07-14T02:51:35.4552011Z 2025/07/14 02:51:35 [TRACE] Waiting 1m0s before next try
2025-07-14T02:52:35.6671248Z 2025/07/14 02:52:35 [TRACE] Waiting 10s before next try
2025-07-14T02:52:45.8105891Z 2025/07/14 02:52:45 [TRACE] Waiting 1m0s before next try
2025-07-14T02:53:45.9751210Z 2025/07/14 02:53:45 [TRACE] Waiting 10s before next try
2025-07-14T02:53:56.1084411Z 2025/07/14 02:53:56 [TRACE] Waiting 1m0s before next try
2025-07-14T02:54:56.2914674Z 2025/07/14 02:54:56 [TRACE] Waiting 10s before next try
2025-07-14T02:55:06.4062213Z 2025/07/14 02:55:06 [TRACE] Waiting 1m0s before next try
2025-07-14T02:56:06.5926423Z 2025/07/14 02:56:06 [TRACE] Waiting 10s before next try
2025-07-14T02:56:16.7476358Z 2025/07/14 02:56:16 [TRACE] Waiting 1m0s before next try
2025-07-14T02:57:17.0027254Z 2025/07/14 02:57:17 [TRACE] Waiting 10s before next try
2025-07-14T02:57:27.1201062Z 2025/07/14 02:57:27 [TRACE] Waiting 1m0s before next try
2025-07-14T02:58:27.3083670Z 2025/07/14 02:58:27 [TRACE] Waiting 10s before next try
2025-07-14T02:58:37.4561388Z 2025/07/14 02:58:37 [TRACE] Waiting 1m0s before next try
2025-07-14T02:59:37.6848862Z 2025/07/14 02:59:37 [TRACE] Waiting 10s before next try
2025-07-14T02:59:47.8119847Z 2025/07/14 02:59:47 [TRACE] Waiting 1m0s before next try
2025-07-14T03:00:48.0226991Z 2025/07/14 03:00:48 [TRACE] Waiting 10s before next try
2025-07-14T03:00:58.1497928Z 2025/07/14 03:00:58 [TRACE] Waiting 1m0s before next try
2025-07-14T03:01:58.3478171Z 2025/07/14 03:01:58 [TRACE] Waiting 10s before next try
2025-07-14T03:02:08.4853136Z 2025/07/14 03:02:08 [TRACE] Waiting 1m0s before next try
2025-07-14T03:03:08.6906968Z 2025/07/14 03:03:08 [TRACE] Waiting 10s before next try
2025-07-14T03:03:18.8240944Z 2025/07/14 03:03:18 [TRACE] Waiting 1m0s before next try
2025-07-14T03:04:19.0164445Z 2025/07/14 03:04:19 [TRACE] Waiting 10s before next try
2025-07-14T03:04:29.1563395Z 2025/07/14 03:04:29 [TRACE] Waiting 1m0s before next try
2025-07-14T03:05:29.3650987Z 2025/07/14 03:05:29 [TRACE] Waiting 10s before next try
2025-07-14T03:05:39.4809534Z 2025/07/14 03:05:39 [TRACE] Waiting 1m0s before next try
2025-07-14T03:06:39.6994731Z 2025/07/14 03:06:39 [TRACE] Waiting 10s before next try
2025-07-14T03:06:49.8533454Z 2025/07/14 03:06:49 [TRACE] Waiting 1m0s before next try
2025-07-14T03:07:50.0634092Z 2025/07/14 03:07:50 [TRACE] Waiting 10s before next try
2025-07-14T03:08:00.2026197Z 2025/07/14 03:08:00 [TRACE] Waiting 1m0s before next try
2025-07-14T03:09:00.3945535Z 2025/07/14 03:09:00 [TRACE] Waiting 10s before next try
2025-07-14T03:09:10.5245494Z 2025/07/14 03:09:10 [TRACE] Waiting 1m0s before next try
2025-07-14T03:10:10.7076611Z 2025/07/14 03:10:10 [TRACE] Waiting 10s before next try
2025-07-14T03:10:20.8450571Z 2025/07/14 03:10:20 [TRACE] Waiting 1m0s before next try
2025-07-14T03:11:21.0267684Z 2025/07/14 03:11:21 [TRACE] Waiting 10s before next try
2025-07-14T03:11:31.1582423Z 2025/07/14 03:11:31 [TRACE] Waiting 1m0s before next try
2025-07-14T03:12:31.3490260Z 2025/07/14 03:12:31 [TRACE] Waiting 10s before next try
2025-07-14T03:12:41.4809917Z 2025/07/14 03:12:41 [TRACE] Waiting 1m0s before next try
2025-07-14T03:13:41.6538980Z 2025/07/14 03:13:41 [TRACE] Waiting 10s before next try
2025-07-14T03:13:51.7833591Z 2025/07/14 03:13:51 [TRACE] Waiting 1m0s before next try
2025-07-14T03:14:51.9725318Z 2025/07/14 03:14:51 [TRACE] Waiting 10s before next try
2025-07-14T03:15:02.1030518Z 2025/07/14 03:15:02 [TRACE] Waiting 1m0s before next try
2025-07-14T03:16:02.2695752Z 2025/07/14 03:16:02 [TRACE] Waiting 10s before next try
2025-07-14T03:16:12.3912886Z 2025/07/14 03:16:12 [TRACE] Waiting 1m0s before next try
2025-07-14T03:17:12.5603253Z 2025/07/14 03:17:12 [TRACE] Waiting 10s before next try
2025-07-14T03:17:22.7010194Z 2025/07/14 03:17:22 [TRACE] Waiting 1m0s before next try
2025-07-14T03:18:22.8990712Z 2025/07/14 03:18:22 [TRACE] Waiting 10s before next try
2025-07-14T03:18:33.0328890Z 2025/07/14 03:18:33 [TRACE] Waiting 1m0s before next try
2025-07-14T03:19:33.2180071Z 2025/07/14 03:19:33 [TRACE] Waiting 10s before next try
2025-07-14T03:19:43.3498470Z 2025/07/14 03:19:43 [TRACE] Waiting 1m0s before next try
2025-07-14T03:20:43.5583349Z 2025/07/14 03:20:43 [TRACE] Waiting 10s before next try
2025-07-14T03:20:53.6970310Z 2025/07/14 03:20:53 [TRACE] Waiting 1m0s before next try
2025-07-14T03:21:53.8789652Z 2025/07/14 03:21:53 [TRACE] Waiting 10s before next try
2025-07-14T03:22:03.9981509Z 2025/07/14 03:22:03 [TRACE] Waiting 1m0s before next try
2025-07-14T03:23:04.2135932Z 2025/07/14 03:23:04 [TRACE] Waiting 10s before next try
2025-07-14T03:23:14.3674097Z 2025/07/14 03:23:14 [TRACE] Waiting 1m0s before next try
2025-07-14T03:24:14.5380469Z 2025/07/14 03:24:14 [TRACE] Waiting 10s before next try
2025-07-14T03:24:24.6692464Z 2025/07/14 03:24:24 [TRACE] Waiting 1m0s before next try
2025-07-14T03:25:24.9133848Z 2025/07/14 03:25:24 [TRACE] Waiting 10s before next try
2025-07-14T03:25:35.0528999Z 2025/07/14 03:25:35 [TRACE] Waiting 1m0s before next try
2025-07-14T03:26:35.2496110Z 2025/07/14 03:26:35 [TRACE] Waiting 10s before next try
2025-07-14T03:26:45.3818821Z 2025/07/14 03:26:45 [TRACE] Waiting 1m0s before next try
2025-07-14T03:27:45.5833427Z 2025/07/14 03:27:45 [TRACE] Waiting 10s before next try
2025-07-14T03:27:55.7095323Z 2025/07/14 03:27:55 [TRACE] Waiting 1m0s before next try
2025-07-14T03:28:55.9107348Z 2025/07/14 03:28:55 [TRACE] Waiting 10s before next try
2025-07-14T03:29:06.0405493Z 2025/07/14 03:29:06 [TRACE] Waiting 1m0s before next try
2025-07-14T03:30:06.2436382Z 2025/07/14 03:30:06 [TRACE] Waiting 10s before next try
2025-07-14T03:30:16.3730217Z 2025/07/14 03:30:16 [TRACE] Waiting 1m0s before next try
2025-07-14T03:30:59.9102311Z 2025/07/14 03:30:59 [WARN] WaitForState timeout after 1h0m0s
2025-07-14T03:30:59.9103310Z 2025/07/14 03:30:59 [WARN] WaitForState starting 30s refresh grace period
2025-07-14T03:30:59.9104274Z     resource_test.go:66: 
2025-07-14T03:30:59.9106382Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-14T03:30:59.9110222Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-14T03:30:59.9113732Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:66
2025-07-14T03:30:59.9114707Z         	Error:      	Received unexpected error:
2025-07-14T03:30:59.9115796Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T03:30:59.9116566Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2025-07-14T03:30:59.9117764Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6504871192411216757, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T03:30:59.9118644Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime (3600.76s)
```

- 2025-07-15 PASS a moment
- 2025-07-16 PASS a moment
- 2025-07-17 PASS a moment
- 2025-07-18 PASS a moment
- 2025-07-19 PASS a moment
- 2025-07-20 PASS a moment
- 2025-07-21 PASS a moment
- 2025-07-22 PASS a moment
- 2025-07-23
  - PASS a moment
  - PASS a moment
- 2025-07-24 PASS a moment