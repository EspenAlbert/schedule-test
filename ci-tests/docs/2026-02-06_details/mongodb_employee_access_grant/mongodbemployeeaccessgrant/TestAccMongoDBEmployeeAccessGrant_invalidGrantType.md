# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidGrantType Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2) TIMEOUT
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:35](#error-2026-01-31t0335120000) |  | dev | timeout | 3600.09s
[2026-02-02 04:38](#error-2026-02-02t0438330000) |  | dev |  | 212455.00s
[2026-02-03 00:39](#error-2026-02-03t0039220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5b2e54ee995902674/clusters | dev | out_of_capacity | 0.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS a moment
- 2026-01-09 PASS a moment
- 2026-01-10 PASS a moment
- 2026-01-11: MISSING
- 2026-01-12 PASS a moment
- 2026-01-13 PASS a moment
- 2026-01-14 PASS a moment
- 2026-01-15 PASS a moment
- 2026-01-16 PASS a moment
- 2026-01-17 PASS a moment
- 2026-01-18: MISSING
- 2026-01-19 PASS a moment
- 2026-01-20 PASS a moment
- 2026-01-21 PASS a moment
- 2026-01-22 PASS a moment
- 2026-01-23 PASS a moment
- 2026-01-24 PASS a moment
- 2026-01-25: MISSING
- 2026-01-26 PASS a moment
- 2026-01-27 PASS a moment
- 2026-01-28 PASS a moment
- 2026-01-29 PASS a moment
- 2026-01-30 PASS a moment
- 2026-01-31

### Error 2026-01-31T03:35:12+00:00
```
2026-01-31T03:35:12.6077113Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2026-01-31T03:35:12.6077693Z     resource_test.go:100: Creating execution cluster: test-acc-tf-c-345039512648849925
2026-01-31T03:35:13.5392593Z 2026/01/31 03:35:13 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T03:38:13.9656351Z 2026/01/31 03:38:13 [TRACE] Waiting 1m0s before next try
2026-01-31T03:39:14.3022995Z 2026/01/31 03:39:14 [TRACE] Waiting 10s before next try
2026-01-31T03:39:24.5280356Z 2026/01/31 03:39:24 [TRACE] Waiting 1m0s before next try
2026-01-31T03:40:24.8922110Z 2026/01/31 03:40:24 [TRACE] Waiting 10s before next try
2026-01-31T03:40:35.1173977Z 2026/01/31 03:40:35 [TRACE] Waiting 1m0s before next try
2026-01-31T03:41:35.5020318Z 2026/01/31 03:41:35 [TRACE] Waiting 10s before next try
2026-01-31T03:41:45.7246434Z 2026/01/31 03:41:45 [TRACE] Waiting 1m0s before next try
2026-01-31T03:42:46.0736604Z 2026/01/31 03:42:46 [TRACE] Waiting 10s before next try
2026-01-31T03:42:56.2799726Z 2026/01/31 03:42:56 [TRACE] Waiting 1m0s before next try
2026-01-31T03:43:56.6566680Z 2026/01/31 03:43:56 [TRACE] Waiting 10s before next try
2026-01-31T03:44:06.8805830Z 2026/01/31 03:44:06 [TRACE] Waiting 1m0s before next try
2026-01-31T03:45:07.2769370Z 2026/01/31 03:45:07 [TRACE] Waiting 10s before next try
2026-01-31T03:45:17.5158831Z 2026/01/31 03:45:17 [TRACE] Waiting 1m0s before next try
2026-01-31T03:46:17.8911108Z 2026/01/31 03:46:17 [TRACE] Waiting 10s before next try
2026-01-31T03:46:28.1127565Z 2026/01/31 03:46:28 [TRACE] Waiting 1m0s before next try
2026-01-31T03:47:28.5856911Z 2026/01/31 03:47:28 [TRACE] Waiting 10s before next try
2026-01-31T03:47:38.7957420Z 2026/01/31 03:47:38 [TRACE] Waiting 1m0s before next try
2026-01-31T03:48:39.1774329Z 2026/01/31 03:48:39 [TRACE] Waiting 10s before next try
2026-01-31T03:48:49.4143591Z 2026/01/31 03:48:49 [TRACE] Waiting 1m0s before next try
2026-01-31T03:49:49.7991128Z 2026/01/31 03:49:49 [TRACE] Waiting 10s before next try
2026-01-31T03:50:00.0401300Z 2026/01/31 03:50:00 [TRACE] Waiting 1m0s before next try
2026-01-31T03:51:00.3884416Z 2026/01/31 03:51:00 [TRACE] Waiting 10s before next try
2026-01-31T03:51:10.6358642Z 2026/01/31 03:51:10 [TRACE] Waiting 1m0s before next try
2026-01-31T03:52:11.0467359Z 2026/01/31 03:52:11 [TRACE] Waiting 10s before next try
2026-01-31T03:52:21.2865587Z 2026/01/31 03:52:21 [TRACE] Waiting 1m0s before next try
2026-01-31T03:53:21.6499633Z 2026/01/31 03:53:21 [TRACE] Waiting 10s before next try
2026-01-31T03:53:31.8914438Z 2026/01/31 03:53:31 [TRACE] Waiting 1m0s before next try
2026-01-31T03:54:32.2672294Z 2026/01/31 03:54:32 [TRACE] Waiting 10s before next try
2026-01-31T03:54:42.5120811Z 2026/01/31 03:54:42 [TRACE] Waiting 1m0s before next try
2026-01-31T03:55:42.9170298Z 2026/01/31 03:55:42 [TRACE] Waiting 10s before next try
2026-01-31T03:55:53.1638798Z 2026/01/31 03:55:53 [TRACE] Waiting 1m0s before next try
2026-01-31T03:56:53.6722726Z 2026/01/31 03:56:53 [TRACE] Waiting 10s before next try
2026-01-31T03:57:03.9717007Z 2026/01/31 03:57:03 [TRACE] Waiting 1m0s before next try
2026-01-31T03:58:04.4654667Z 2026/01/31 03:58:04 [TRACE] Waiting 10s before next try
2026-01-31T03:58:14.8704131Z 2026/01/31 03:58:14 [TRACE] Waiting 1m0s before next try
2026-01-31T03:59:15.3030824Z 2026/01/31 03:59:15 [TRACE] Waiting 10s before next try
2026-01-31T03:59:25.5876470Z 2026/01/31 03:59:25 [TRACE] Waiting 1m0s before next try
2026-01-31T04:00:25.9853119Z 2026/01/31 04:00:25 [TRACE] Waiting 10s before next try
2026-01-31T04:00:36.2491261Z 2026/01/31 04:00:36 [TRACE] Waiting 1m0s before next try
2026-01-31T04:01:36.7489424Z 2026/01/31 04:01:36 [TRACE] Waiting 10s before next try
2026-01-31T04:01:47.0041288Z 2026/01/31 04:01:47 [TRACE] Waiting 1m0s before next try
2026-01-31T04:02:47.4209404Z 2026/01/31 04:02:47 [TRACE] Waiting 10s before next try
2026-01-31T04:02:57.6783232Z 2026/01/31 04:02:57 [TRACE] Waiting 1m0s before next try
2026-01-31T04:03:58.1367927Z 2026/01/31 04:03:58 [TRACE] Waiting 10s before next try
2026-01-31T04:04:08.3885891Z 2026/01/31 04:04:08 [TRACE] Waiting 1m0s before next try
2026-01-31T04:05:08.7738566Z 2026/01/31 04:05:08 [TRACE] Waiting 10s before next try
2026-01-31T04:05:19.0217172Z 2026/01/31 04:05:19 [TRACE] Waiting 1m0s before next try
2026-01-31T04:06:19.4260176Z 2026/01/31 04:06:19 [TRACE] Waiting 10s before next try
2026-01-31T04:06:29.6911476Z 2026/01/31 04:06:29 [TRACE] Waiting 1m0s before next try
2026-01-31T04:07:30.1157930Z 2026/01/31 04:07:30 [TRACE] Waiting 10s before next try
2026-01-31T04:07:40.3877882Z 2026/01/31 04:07:40 [TRACE] Waiting 1m0s before next try
2026-01-31T04:08:40.8253383Z 2026/01/31 04:08:40 [TRACE] Waiting 10s before next try
2026-01-31T04:08:51.0720835Z 2026/01/31 04:08:51 [TRACE] Waiting 1m0s before next try
2026-01-31T04:09:51.4273852Z 2026/01/31 04:09:51 [TRACE] Waiting 10s before next try
2026-01-31T04:10:01.6697406Z 2026/01/31 04:10:01 [TRACE] Waiting 1m0s before next try
2026-01-31T04:11:02.0658381Z 2026/01/31 04:11:02 [TRACE] Waiting 10s before next try
2026-01-31T04:11:12.3185628Z 2026/01/31 04:11:12 [TRACE] Waiting 1m0s before next try
2026-01-31T04:12:12.7125105Z 2026/01/31 04:12:12 [TRACE] Waiting 10s before next try
2026-01-31T04:12:22.9607009Z 2026/01/31 04:12:22 [TRACE] Waiting 1m0s before next try
2026-01-31T04:13:23.4314513Z 2026/01/31 04:13:23 [TRACE] Waiting 10s before next try
2026-01-31T04:13:33.6761580Z 2026/01/31 04:13:33 [TRACE] Waiting 1m0s before next try
2026-01-31T04:14:34.0331983Z 2026/01/31 04:14:34 [TRACE] Waiting 10s before next try
2026-01-31T04:14:44.2739152Z 2026/01/31 04:14:44 [TRACE] Waiting 1m0s before next try
2026-01-31T04:15:44.6631086Z 2026/01/31 04:15:44 [TRACE] Waiting 10s before next try
2026-01-31T04:15:54.9249135Z 2026/01/31 04:15:54 [TRACE] Waiting 1m0s before next try
2026-01-31T04:16:55.2669077Z 2026/01/31 04:16:55 [TRACE] Waiting 10s before next try
2026-01-31T04:17:05.5105144Z 2026/01/31 04:17:05 [TRACE] Waiting 1m0s before next try
2026-01-31T04:18:05.8469259Z 2026/01/31 04:18:05 [TRACE] Waiting 10s before next try
2026-01-31T04:18:16.0864008Z 2026/01/31 04:18:16 [TRACE] Waiting 1m0s before next try
2026-01-31T04:19:16.4909232Z 2026/01/31 04:19:16 [TRACE] Waiting 10s before next try
2026-01-31T04:19:26.7275545Z 2026/01/31 04:19:26 [TRACE] Waiting 1m0s before next try
2026-01-31T04:20:27.1041209Z 2026/01/31 04:20:27 [TRACE] Waiting 10s before next try
2026-01-31T04:20:37.3542688Z 2026/01/31 04:20:37 [TRACE] Waiting 1m0s before next try
2026-01-31T04:21:37.7295003Z 2026/01/31 04:21:37 [TRACE] Waiting 10s before next try
2026-01-31T04:21:47.9496006Z 2026/01/31 04:21:47 [TRACE] Waiting 1m0s before next try
2026-01-31T04:22:48.3665356Z 2026/01/31 04:22:48 [TRACE] Waiting 10s before next try
2026-01-31T04:22:58.5927732Z 2026/01/31 04:22:58 [TRACE] Waiting 1m0s before next try
2026-01-31T04:23:58.9362129Z 2026/01/31 04:23:58 [TRACE] Waiting 10s before next try
2026-01-31T04:24:09.1762082Z 2026/01/31 04:24:09 [TRACE] Waiting 1m0s before next try
2026-01-31T04:25:09.6599467Z 2026/01/31 04:25:09 [TRACE] Waiting 10s before next try
2026-01-31T04:25:19.8952595Z 2026/01/31 04:25:19 [TRACE] Waiting 1m0s before next try
2026-01-31T04:26:20.2479578Z 2026/01/31 04:26:20 [TRACE] Waiting 10s before next try
2026-01-31T04:26:30.4823450Z 2026/01/31 04:26:30 [TRACE] Waiting 1m0s before next try
2026-01-31T04:27:30.8116586Z 2026/01/31 04:27:30 [TRACE] Waiting 10s before next try
2026-01-31T04:27:41.0608802Z 2026/01/31 04:27:41 [TRACE] Waiting 1m0s before next try
2026-01-31T04:28:41.4335249Z 2026/01/31 04:28:41 [TRACE] Waiting 10s before next try
2026-01-31T04:28:51.6609046Z 2026/01/31 04:28:51 [TRACE] Waiting 1m0s before next try
2026-01-31T04:29:52.0002013Z 2026/01/31 04:29:51 [TRACE] Waiting 10s before next try
2026-01-31T04:30:02.2296218Z 2026/01/31 04:30:02 [TRACE] Waiting 1m0s before next try
2026-01-31T04:31:02.5913594Z 2026/01/31 04:31:02 [TRACE] Waiting 10s before next try
2026-01-31T04:31:12.8221130Z 2026/01/31 04:31:12 [TRACE] Waiting 1m0s before next try
2026-01-31T04:32:13.2833094Z 2026/01/31 04:32:13 [TRACE] Waiting 10s before next try
2026-01-31T04:32:23.5264615Z 2026/01/31 04:32:23 [TRACE] Waiting 1m0s before next try
2026-01-31T04:33:23.9746952Z 2026/01/31 04:33:23 [TRACE] Waiting 10s before next try
2026-01-31T04:33:34.2042783Z 2026/01/31 04:33:34 [TRACE] Waiting 1m0s before next try
2026-01-31T04:34:34.5666729Z 2026/01/31 04:34:34 [TRACE] Waiting 10s before next try
2026-01-31T04:34:44.7652716Z 2026/01/31 04:34:44 [TRACE] Waiting 1m0s before next try
2026-01-31T04:35:13.5480206Z 2026/01/31 04:35:13 [WARN] WaitForState timeout after 1h0m0s
2026-01-31T04:35:13.5481290Z 2026/01/31 04:35:13 [WARN] WaitForState starting 30s refresh grace period
2026-01-31T04:35:13.5482360Z     resource_test.go:100: 
2026-01-31T04:35:13.5484024Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T04:35:13.5486152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T04:35:13.5488283Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:100
2026-01-31T04:35:13.5489174Z         	Error:      	Received unexpected error:
2026-01-31T04:35:13.5490203Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T04:35:13.5490937Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2026-01-31T04:35:13.5492365Z         	Messages:   	Cluster creation failed: test-acc-tf-c-345039512648849925, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T04:35:13.5493259Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (3600.94s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T04:38:33+00:00
```
2026-02-02T04:38:33.2855613Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2026-02-02T04:38:33.2856667Z     resource_test.go:100: Creating execution cluster: test-acc-tf-c-2243211084381754885
2026-02-02T04:38:34.3272586Z 2026/02/02 04:38:34 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T04:41:34.5714857Z 2026/02/02 04:41:34 [TRACE] Waiting 1m0s before next try
2026-02-02T04:42:34.8105729Z 2026/02/02 04:42:34 [TRACE] Waiting 10s before next try
2026-02-02T04:42:44.9302892Z 2026/02/02 04:42:44 [TRACE] Waiting 1m0s before next try
2026-02-02T04:43:45.1462014Z 2026/02/02 04:43:45 [TRACE] Waiting 10s before next try
2026-02-02T04:43:55.2628178Z 2026/02/02 04:43:55 [TRACE] Waiting 1m0s before next try
2026-02-02T04:44:55.4044146Z 2026/02/02 04:44:55 [TRACE] Waiting 10s before next try
2026-02-02T04:45:05.5094746Z 2026/02/02 04:45:05 [TRACE] Waiting 1m0s before next try
2026-02-02T04:46:05.6786203Z 2026/02/02 04:46:05 [TRACE] Waiting 10s before next try
2026-02-02T04:46:15.7975440Z 2026/02/02 04:46:15 [TRACE] Waiting 1m0s before next try
2026-02-02T04:47:15.9632252Z 2026/02/02 04:47:15 [TRACE] Waiting 10s before next try
2026-02-02T04:47:26.0791350Z 2026/02/02 04:47:26 [TRACE] Waiting 1m0s before next try
2026-02-02T04:48:26.2052392Z 2026/02/02 04:48:26 [TRACE] Waiting 10s before next try
2026-02-02T04:48:36.3288092Z 2026/02/02 04:48:36 [TRACE] Waiting 1m0s before next try
2026-02-02T04:49:36.6413877Z 2026/02/02 04:49:36 [TRACE] Waiting 10s before next try
2026-02-02T04:49:46.7795516Z 2026/02/02 04:49:46 [TRACE] Waiting 1m0s before next try
2026-02-02T04:50:46.9528232Z 2026/02/02 04:50:46 [TRACE] Waiting 10s before next try
2026-02-02T04:50:57.0764871Z 2026/02/02 04:50:57 [TRACE] Waiting 1m0s before next try
2026-02-02T04:51:57.2670055Z 2026/02/02 04:51:57 [TRACE] Waiting 10s before next try
2026-02-02T04:52:07.3909483Z 2026/02/02 04:52:07 [TRACE] Waiting 1m0s before next try
2026-02-02T04:53:07.5456796Z 2026/02/02 04:53:07 [TRACE] Waiting 10s before next try
2026-02-02T04:53:17.6536527Z 2026/02/02 04:53:17 [TRACE] Waiting 1m0s before next try
2026-02-02T04:54:17.8014547Z 2026/02/02 04:54:17 [TRACE] Waiting 10s before next try
2026-02-02T04:54:27.9216210Z 2026/02/02 04:54:27 [TRACE] Waiting 1m0s before next try
2026-02-02T04:55:28.1206769Z 2026/02/02 04:55:28 [TRACE] Waiting 10s before next try
2026-02-02T04:55:38.2584270Z 2026/02/02 04:55:38 [TRACE] Waiting 1m0s before next try
2026-02-02T04:56:38.4357772Z 2026/02/02 04:56:38 [TRACE] Waiting 10s before next try
2026-02-02T04:56:48.5518641Z 2026/02/02 04:56:48 [TRACE] Waiting 1m0s before next try
2026-02-02T04:57:48.7478487Z 2026/02/02 04:57:48 [TRACE] Waiting 10s before next try
2026-02-02T04:57:58.8602139Z 2026/02/02 04:57:58 [TRACE] Waiting 1m0s before next try
2026-02-02T04:58:59.0012306Z 2026/02/02 04:58:59 [TRACE] Waiting 10s before next try
2026-02-02T04:59:09.1405027Z 2026/02/02 04:59:09 [TRACE] Waiting 1m0s before next try
2026-02-02T05:00:09.3293958Z 2026/02/02 05:00:09 [TRACE] Waiting 10s before next try
2026-02-02T05:00:19.4684917Z 2026/02/02 05:00:19 [TRACE] Waiting 1m0s before next try
2026-02-02T05:01:19.6612278Z 2026/02/02 05:01:19 [TRACE] Waiting 10s before next try
2026-02-02T05:01:29.7870669Z 2026/02/02 05:01:29 [TRACE] Waiting 1m0s before next try
2026-02-02T05:02:29.9332484Z 2026/02/02 05:02:29 [TRACE] Waiting 10s before next try
2026-02-02T05:02:40.0626105Z 2026/02/02 05:02:40 [TRACE] Waiting 1m0s before next try
2026-02-02T05:03:40.2974577Z 2026/02/02 05:03:40 [TRACE] Waiting 10s before next try
2026-02-02T05:03:50.4275121Z 2026/02/02 05:03:50 [TRACE] Waiting 1m0s before next try
2026-02-02T05:04:50.6908228Z 2026/02/02 05:04:50 [TRACE] Waiting 10s before next try
2026-02-02T05:05:00.8192799Z 2026/02/02 05:05:00 [TRACE] Waiting 1m0s before next try
2026-02-02T05:06:01.0797467Z 2026/02/02 05:06:01 [TRACE] Waiting 10s before next try
2026-02-02T05:06:11.2203273Z 2026/02/02 05:06:11 [TRACE] Waiting 1m0s before next try
2026-02-02T05:07:11.3736433Z 2026/02/02 05:07:11 [TRACE] Waiting 10s before next try
2026-02-02T05:07:21.4932732Z 2026/02/02 05:07:21 [TRACE] Waiting 1m0s before next try
2026-02-02T05:08:21.6648480Z 2026/02/02 05:08:21 [TRACE] Waiting 10s before next try
2026-02-02T05:08:31.7920399Z 2026/02/02 05:08:31 [TRACE] Waiting 1m0s before next try
2026-02-02T05:09:31.9259472Z 2026/02/02 05:09:31 [TRACE] Waiting 10s before next try
2026-02-02T05:09:42.0569644Z 2026/02/02 05:09:42 [TRACE] Waiting 1m0s before next try
2026-02-02T05:10:42.1832116Z 2026/02/02 05:10:42 [TRACE] Waiting 10s before next try
2026-02-02T05:10:52.3172837Z 2026/02/02 05:10:52 [TRACE] Waiting 1m0s before next try
2026-02-02T05:11:52.5783624Z 2026/02/02 05:11:52 [TRACE] Waiting 10s before next try
2026-02-02T05:12:02.7030737Z 2026/02/02 05:12:02 [TRACE] Waiting 1m0s before next try
2026-02-02T05:13:02.9409950Z 2026/02/02 05:13:02 [TRACE] Waiting 10s before next try
2026-02-02T05:13:13.0583134Z 2026/02/02 05:13:13 [TRACE] Waiting 1m0s before next try
2026-02-02T05:14:13.2494716Z 2026/02/02 05:14:13 [TRACE] Waiting 10s before next try
2026-02-02T05:14:23.3697863Z 2026/02/02 05:14:23 [TRACE] Waiting 1m0s before next try
2026-02-02T05:15:23.5392629Z 2026/02/02 05:15:23 [TRACE] Waiting 10s before next try
2026-02-02T05:15:33.6547634Z 2026/02/02 05:15:33 [TRACE] Waiting 1m0s before next try
2026-02-02T05:16:33.9690853Z 2026/02/02 05:16:33 [TRACE] Waiting 10s before next try
2026-02-02T05:16:44.0876439Z 2026/02/02 05:16:44 [TRACE] Waiting 1m0s before next try
2026-02-02T05:17:44.3004184Z 2026/02/02 05:17:44 [TRACE] Waiting 10s before next try
2026-02-02T05:17:54.4361939Z 2026/02/02 05:17:54 [TRACE] Waiting 1m0s before next try
2026-02-02T05:18:54.6088203Z 2026/02/02 05:18:54 [TRACE] Waiting 10s before next try
2026-02-02T05:19:04.7391417Z 2026/02/02 05:19:04 [TRACE] Waiting 1m0s before next try
2026-02-02T05:20:04.9713477Z 2026/02/02 05:20:04 [TRACE] Waiting 10s before next try
2026-02-02T05:20:15.0977635Z 2026/02/02 05:20:15 [TRACE] Waiting 1m0s before next try
2026-02-02T05:21:15.2834958Z 2026/02/02 05:21:15 [TRACE] Waiting 10s before next try
2026-02-02T05:21:25.4158714Z 2026/02/02 05:21:25 [TRACE] Waiting 1m0s before next try
2026-02-02T05:22:25.6483696Z 2026/02/02 05:22:25 [TRACE] Waiting 10s before next try
2026-02-02T05:22:35.7667753Z 2026/02/02 05:22:35 [TRACE] Waiting 1m0s before next try
2026-02-02T05:23:35.9285323Z 2026/02/02 05:23:35 [TRACE] Waiting 10s before next try
2026-02-02T05:23:46.0407396Z 2026/02/02 05:23:46 [TRACE] Waiting 1m0s before next try
2026-02-02T05:24:46.1992341Z 2026/02/02 05:24:46 [TRACE] Waiting 10s before next try
2026-02-02T05:24:56.3247669Z 2026/02/02 05:24:56 [TRACE] Waiting 1m0s before next try
2026-02-02T05:25:56.4690535Z 2026/02/02 05:25:56 [TRACE] Waiting 10s before next try
2026-02-02T05:26:06.5877732Z 2026/02/02 05:26:06 [TRACE] Waiting 1m0s before next try
2026-02-02T05:27:06.8989695Z 2026/02/02 05:27:06 [TRACE] Waiting 10s before next try
2026-02-02T05:27:17.0302552Z 2026/02/02 05:27:17 [TRACE] Waiting 1m0s before next try
2026-02-02T05:28:17.1794183Z 2026/02/02 05:28:17 [TRACE] Waiting 10s before next try
2026-02-02T05:28:27.2940868Z 2026/02/02 05:28:27 [TRACE] Waiting 1m0s before next try
2026-02-02T05:29:27.5927596Z 2026/02/02 05:29:27 [TRACE] Waiting 10s before next try
2026-02-02T05:29:37.7153693Z 2026/02/02 05:29:37 [TRACE] Waiting 1m0s before next try
2026-02-02T05:30:37.9893076Z 2026/02/02 05:30:37 [TRACE] Waiting 10s before next try
2026-02-02T05:30:48.1125757Z 2026/02/02 05:30:48 [TRACE] Waiting 1m0s before next try
2026-02-02T05:31:48.3343387Z 2026/02/02 05:31:48 [TRACE] Waiting 10s before next try
2026-02-02T05:31:58.4528546Z 2026/02/02 05:31:58 [TRACE] Waiting 1m0s before next try
2026-02-02T05:32:58.6090846Z 2026/02/02 05:32:58 [TRACE] Waiting 10s before next try
2026-02-02T05:33:08.7111912Z 2026/02/02 05:33:08 [TRACE] Waiting 1m0s before next try
2026-02-02T05:34:08.8650291Z 2026/02/02 05:34:08 [TRACE] Waiting 10s before next try
2026-02-02T05:34:19.0176087Z 2026/02/02 05:34:19 [TRACE] Waiting 1m0s before next try
2026-02-02T05:35:19.3131776Z 2026/02/02 05:35:19 [TRACE] Waiting 10s before next try
2026-02-02T05:35:29.4448091Z 2026/02/02 05:35:29 [TRACE] Waiting 1m0s before next try
2026-02-02T05:36:29.6171737Z 2026/02/02 05:36:29 [TRACE] Waiting 10s before next try
2026-02-02T05:36:39.7281173Z 2026/02/02 05:36:39 [TRACE] Waiting 1m0s before next try
2026-02-02T05:37:39.8905107Z 2026/02/02 05:37:39 [TRACE] Waiting 10s before next try
2026-02-02T05:37:50.0245482Z 2026/02/02 05:37:50 [TRACE] Waiting 1m0s before next try
2026-02-02T05:38:28.0161145Z panic: test timed out after 5h0m0s
2026-02-02T05:38:28.0161699Z 	running tests:
2026-02-02T05:38:28.0161145Z panic: test timed out after 5h0m0s
2026-02-02T05:38:28.0161699Z 	running tests:
2026-02-02T05:38:28.0162329Z 		TestAccMongoDBEmployeeAccessGrant_invalidGrantType (59m55s)
```

- 2026-02-03

### Error 2026-02-03T00:39:22+00:00
```
2026-02-03T00:39:22.3986135Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2026-02-03T00:39:22.3986712Z     resource_test.go:100: Creating execution cluster: test-acc-tf-c-6570752251224339471
2026-02-03T00:39:22.9053745Z     resource_test.go:100: 
2026-02-03T00:39:22.9056100Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:22.9059312Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:22.9061601Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:100
2026-02-03T00:39:22.9062600Z         	Error:      	Received unexpected error:
2026-02-03T00:39:22.9065670Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5b2e54ee995902674/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:22.9067281Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2026-02-03T00:39:22.9069680Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6570752251224339471, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5b2e54ee995902674/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:22.9071176Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.51s)
```

- 2026-02-04 PASS a moment
- 2026-02-05 PASS a moment
- 2026-02-06 PASS a moment

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS a moment
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS a moment
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS a moment
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS a moment
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS a moment
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS a moment
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS a moment
- 2026-02-05: MISSING
- 2026-02-06: MISSING
