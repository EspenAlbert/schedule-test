# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-11 00:52](#error-2025-08-11t0052370000) |  | dev | timeout | 3600.08s
[2025-09-01 01:30](#error-2025-09-01t0130130000) |  | dev | timeout | 3600.06s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 9 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 5 seconds
- 2025-08-09 PASS 7 seconds
- 2025-08-10 PASS 6 seconds
- 2025-08-11

### Error 2025-08-11T00:52:37+00:00
```
2025-08-11T00:52:37.0756278Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-08-11T00:52:37.0756825Z     resource_test.go:26: Creating execution cluster: test-acc-tf-c-5343364254784407148
2025-08-11T00:52:37.8976754Z 2025/08/11 00:52:37 [DEBUG] Waiting for state to become: [IDLE]
2025-08-11T00:55:38.2432718Z 2025/08/11 00:55:38 [TRACE] Waiting 1m0s before next try
2025-08-11T00:56:38.5761151Z 2025/08/11 00:56:38 [TRACE] Waiting 10s before next try
2025-08-11T00:56:48.7765189Z 2025/08/11 00:56:48 [TRACE] Waiting 1m0s before next try
2025-08-11T00:57:49.0896161Z 2025/08/11 00:57:49 [TRACE] Waiting 10s before next try
2025-08-11T00:57:59.2886315Z 2025/08/11 00:57:59 [TRACE] Waiting 1m0s before next try
2025-08-11T00:58:59.6150067Z 2025/08/11 00:58:59 [TRACE] Waiting 10s before next try
2025-08-11T00:59:09.8282776Z 2025/08/11 00:59:09 [TRACE] Waiting 1m0s before next try
2025-08-11T01:00:10.1539788Z 2025/08/11 01:00:10 [TRACE] Waiting 10s before next try
2025-08-11T01:00:20.3674952Z 2025/08/11 01:00:20 [TRACE] Waiting 1m0s before next try
2025-08-11T01:01:20.7250320Z 2025/08/11 01:01:20 [TRACE] Waiting 10s before next try
2025-08-11T01:01:30.9361642Z 2025/08/11 01:01:30 [TRACE] Waiting 1m0s before next try
2025-08-11T01:02:31.3035734Z 2025/08/11 01:02:31 [TRACE] Waiting 10s before next try
2025-08-11T01:02:41.5147853Z 2025/08/11 01:02:41 [TRACE] Waiting 1m0s before next try
2025-08-11T01:03:41.8579405Z 2025/08/11 01:03:41 [TRACE] Waiting 10s before next try
2025-08-11T01:03:52.0461938Z 2025/08/11 01:03:52 [TRACE] Waiting 1m0s before next try
2025-08-11T01:04:52.3833357Z 2025/08/11 01:04:52 [TRACE] Waiting 10s before next try
2025-08-11T01:05:02.6087232Z 2025/08/11 01:05:02 [TRACE] Waiting 1m0s before next try
2025-08-11T01:06:02.9906292Z 2025/08/11 01:06:02 [TRACE] Waiting 10s before next try
2025-08-11T01:06:13.2054361Z 2025/08/11 01:06:13 [TRACE] Waiting 1m0s before next try
2025-08-11T01:07:13.5193617Z 2025/08/11 01:07:13 [TRACE] Waiting 10s before next try
2025-08-11T01:07:23.7153406Z 2025/08/11 01:07:23 [TRACE] Waiting 1m0s before next try
2025-08-11T01:08:24.0695068Z 2025/08/11 01:08:24 [TRACE] Waiting 10s before next try
2025-08-11T01:08:34.2744650Z 2025/08/11 01:08:34 [TRACE] Waiting 1m0s before next try
2025-08-11T01:09:34.6334865Z 2025/08/11 01:09:34 [TRACE] Waiting 10s before next try
2025-08-11T01:09:44.8247584Z 2025/08/11 01:09:44 [TRACE] Waiting 1m0s before next try
2025-08-11T01:10:45.1562663Z 2025/08/11 01:10:45 [TRACE] Waiting 10s before next try
2025-08-11T01:10:55.3700339Z 2025/08/11 01:10:55 [TRACE] Waiting 1m0s before next try
2025-08-11T01:11:55.7327201Z 2025/08/11 01:11:55 [TRACE] Waiting 10s before next try
2025-08-11T01:12:05.9453823Z 2025/08/11 01:12:05 [TRACE] Waiting 1m0s before next try
2025-08-11T01:13:06.2521742Z 2025/08/11 01:13:06 [TRACE] Waiting 10s before next try
2025-08-11T01:13:16.4648407Z 2025/08/11 01:13:16 [TRACE] Waiting 1m0s before next try
2025-08-11T01:14:16.8334156Z 2025/08/11 01:14:16 [TRACE] Waiting 10s before next try
2025-08-11T01:14:27.0287283Z 2025/08/11 01:14:27 [TRACE] Waiting 1m0s before next try
2025-08-11T01:15:27.4296021Z 2025/08/11 01:15:27 [TRACE] Waiting 10s before next try
2025-08-11T01:15:37.6388372Z 2025/08/11 01:15:37 [TRACE] Waiting 1m0s before next try
2025-08-11T01:16:37.9610270Z 2025/08/11 01:16:37 [TRACE] Waiting 10s before next try
2025-08-11T01:16:48.1691478Z 2025/08/11 01:16:48 [TRACE] Waiting 1m0s before next try
2025-08-11T01:17:48.5044317Z 2025/08/11 01:17:48 [TRACE] Waiting 10s before next try
2025-08-11T01:17:58.7331983Z 2025/08/11 01:17:58 [TRACE] Waiting 1m0s before next try
2025-08-11T01:18:59.0862066Z 2025/08/11 01:18:59 [TRACE] Waiting 10s before next try
2025-08-11T01:19:09.3014397Z 2025/08/11 01:19:09 [TRACE] Waiting 1m0s before next try
2025-08-11T01:20:09.6537598Z 2025/08/11 01:20:09 [TRACE] Waiting 10s before next try
2025-08-11T01:20:19.8444116Z 2025/08/11 01:20:19 [TRACE] Waiting 1m0s before next try
2025-08-11T01:21:20.1897763Z 2025/08/11 01:21:20 [TRACE] Waiting 10s before next try
2025-08-11T01:21:30.3978014Z 2025/08/11 01:21:30 [TRACE] Waiting 1m0s before next try
2025-08-11T01:22:30.7318155Z 2025/08/11 01:22:30 [TRACE] Waiting 10s before next try
2025-08-11T01:22:40.9312168Z 2025/08/11 01:22:40 [TRACE] Waiting 1m0s before next try
2025-08-11T01:23:41.2504579Z 2025/08/11 01:23:41 [TRACE] Waiting 10s before next try
2025-08-11T01:23:51.4589026Z 2025/08/11 01:23:51 [TRACE] Waiting 1m0s before next try
2025-08-11T01:24:51.7998582Z 2025/08/11 01:24:51 [TRACE] Waiting 10s before next try
2025-08-11T01:25:01.9907041Z 2025/08/11 01:25:01 [TRACE] Waiting 1m0s before next try
2025-08-11T01:26:02.3423768Z 2025/08/11 01:26:02 [TRACE] Waiting 10s before next try
2025-08-11T01:26:12.5293277Z 2025/08/11 01:26:12 [TRACE] Waiting 1m0s before next try
2025-08-11T01:27:12.8689746Z 2025/08/11 01:27:12 [TRACE] Waiting 10s before next try
2025-08-11T01:27:23.0629020Z 2025/08/11 01:27:23 [TRACE] Waiting 1m0s before next try
2025-08-11T01:28:23.4137140Z 2025/08/11 01:28:23 [TRACE] Waiting 10s before next try
2025-08-11T01:28:33.6101915Z 2025/08/11 01:28:33 [TRACE] Waiting 1m0s before next try
2025-08-11T01:29:33.9510475Z 2025/08/11 01:29:33 [TRACE] Waiting 10s before next try
2025-08-11T01:29:44.1534997Z 2025/08/11 01:29:44 [TRACE] Waiting 1m0s before next try
2025-08-11T01:30:44.5219238Z 2025/08/11 01:30:44 [TRACE] Waiting 10s before next try
2025-08-11T01:30:54.7255499Z 2025/08/11 01:30:54 [TRACE] Waiting 1m0s before next try
2025-08-11T01:31:55.0651714Z 2025/08/11 01:31:55 [TRACE] Waiting 10s before next try
2025-08-11T01:32:05.2763472Z 2025/08/11 01:32:05 [TRACE] Waiting 1m0s before next try
2025-08-11T01:33:05.6342448Z 2025/08/11 01:33:05 [TRACE] Waiting 10s before next try
2025-08-11T01:33:15.8381891Z 2025/08/11 01:33:15 [TRACE] Waiting 1m0s before next try
2025-08-11T01:34:16.1925325Z 2025/08/11 01:34:16 [TRACE] Waiting 10s before next try
2025-08-11T01:34:26.4172001Z 2025/08/11 01:34:26 [TRACE] Waiting 1m0s before next try
2025-08-11T01:35:26.8057594Z 2025/08/11 01:35:26 [TRACE] Waiting 10s before next try
2025-08-11T01:35:37.0250506Z 2025/08/11 01:35:37 [TRACE] Waiting 1m0s before next try
2025-08-11T01:36:37.3677594Z 2025/08/11 01:36:37 [TRACE] Waiting 10s before next try
2025-08-11T01:36:47.5734903Z 2025/08/11 01:36:47 [TRACE] Waiting 1m0s before next try
2025-08-11T01:37:47.9542961Z 2025/08/11 01:37:47 [TRACE] Waiting 10s before next try
2025-08-11T01:37:58.1791826Z 2025/08/11 01:37:58 [TRACE] Waiting 1m0s before next try
2025-08-11T01:38:58.5404402Z 2025/08/11 01:38:58 [TRACE] Waiting 10s before next try
2025-08-11T01:39:08.7335403Z 2025/08/11 01:39:08 [TRACE] Waiting 1m0s before next try
2025-08-11T01:40:09.0980223Z 2025/08/11 01:40:09 [TRACE] Waiting 10s before next try
2025-08-11T01:40:19.3097270Z 2025/08/11 01:40:19 [TRACE] Waiting 1m0s before next try
2025-08-11T01:41:19.6620786Z 2025/08/11 01:41:19 [TRACE] Waiting 10s before next try
2025-08-11T01:41:29.8688246Z 2025/08/11 01:41:29 [TRACE] Waiting 1m0s before next try
2025-08-11T01:42:30.2313256Z 2025/08/11 01:42:30 [TRACE] Waiting 10s before next try
2025-08-11T01:42:40.4367042Z 2025/08/11 01:42:40 [TRACE] Waiting 1m0s before next try
2025-08-11T01:43:40.7648292Z 2025/08/11 01:43:40 [TRACE] Waiting 10s before next try
2025-08-11T01:43:50.9635810Z 2025/08/11 01:43:50 [TRACE] Waiting 1m0s before next try
2025-08-11T01:44:51.3272766Z 2025/08/11 01:44:51 [TRACE] Waiting 10s before next try
2025-08-11T01:45:01.5222476Z 2025/08/11 01:45:01 [TRACE] Waiting 1m0s before next try
2025-08-11T01:46:01.8424364Z 2025/08/11 01:46:01 [TRACE] Waiting 10s before next try
2025-08-11T01:46:12.0449883Z 2025/08/11 01:46:12 [TRACE] Waiting 1m0s before next try
2025-08-11T01:47:12.3885877Z 2025/08/11 01:47:12 [TRACE] Waiting 10s before next try
2025-08-11T01:47:22.5769297Z 2025/08/11 01:47:22 [TRACE] Waiting 1m0s before next try
2025-08-11T01:48:22.9884966Z 2025/08/11 01:48:22 [TRACE] Waiting 10s before next try
2025-08-11T01:48:33.1909236Z 2025/08/11 01:48:33 [TRACE] Waiting 1m0s before next try
2025-08-11T01:49:33.5312147Z 2025/08/11 01:49:33 [TRACE] Waiting 10s before next try
2025-08-11T01:49:43.7313340Z 2025/08/11 01:49:43 [TRACE] Waiting 1m0s before next try
2025-08-11T01:50:44.0912663Z 2025/08/11 01:50:44 [TRACE] Waiting 10s before next try
2025-08-11T01:50:54.3098863Z 2025/08/11 01:50:54 [TRACE] Waiting 1m0s before next try
2025-08-11T01:51:54.6507267Z 2025/08/11 01:51:54 [TRACE] Waiting 10s before next try
2025-08-11T01:52:04.8681634Z 2025/08/11 01:52:04 [TRACE] Waiting 1m0s before next try
2025-08-11T01:52:37.9006959Z 2025/08/11 01:52:37 [WARN] WaitForState timeout after 1h0m0s
2025-08-11T01:52:37.9008220Z 2025/08/11 01:52:37 [WARN] WaitForState starting 30s refresh grace period
2025-08-11T01:52:37.9009152Z     resource_test.go:26: 
2025-08-11T01:52:37.9011258Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-08-11T01:52:37.9014413Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:123
2025-08-11T01:52:37.9017085Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2025-08-11T01:52:37.9019763Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:26
2025-08-11T01:52:37.9020754Z         	Error:      	Received unexpected error:
2025-08-11T01:52:37.9021884Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-08-11T01:52:37.9022595Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_basic
2025-08-11T01:52:37.9023902Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5343364254784407148, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-08-11T01:52:37.9024835Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (3600.83s)
```

- 2025-08-12 PASS 7 seconds
- 2025-08-13 PASS 5 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15 PASS 5 seconds
- 2025-08-16 PASS 5 seconds
- 2025-08-17 PASS 7 seconds
- 2025-08-18 PASS 9 seconds
- 2025-08-19 PASS 5 seconds
- 2025-08-20
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-08-21 PASS 9 seconds
- 2025-08-22 PASS 5 seconds
- 2025-08-23 PASS 6 seconds
- 2025-08-24 PASS 6 seconds
- 2025-08-25 PASS 6 seconds
- 2025-08-26 PASS 6 seconds
- 2025-08-27 PASS 6 seconds
- 2025-08-28 PASS 5 seconds
- 2025-08-29 PASS 5 seconds
- 2025-08-30 PASS 5 seconds
- 2025-08-31 PASS 8 seconds
- 2025-09-01
  - FAIL an hour

### Error 2025-09-01T01:30:13+00:00
```
2025-09-01T01:30:13.7585308Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-09-01T01:30:13.7586237Z     resource_test.go:26: Creating execution cluster: test-acc-tf-c-744812523277952786
2025-09-01T01:30:14.3391933Z 2025/09/01 01:30:14 [DEBUG] Waiting for state to become: [IDLE]
2025-09-01T01:33:14.5485734Z 2025/09/01 01:33:14 [TRACE] Waiting 1m0s before next try
2025-09-01T01:34:14.7432634Z 2025/09/01 01:34:14 [TRACE] Waiting 10s before next try
2025-09-01T01:34:24.8228048Z 2025/09/01 01:34:24 [TRACE] Waiting 1m0s before next try
2025-09-01T01:35:25.0230862Z 2025/09/01 01:35:25 [TRACE] Waiting 10s before next try
2025-09-01T01:35:35.1240142Z 2025/09/01 01:35:35 [TRACE] Waiting 1m0s before next try
2025-09-01T01:36:35.2690854Z 2025/09/01 01:36:35 [TRACE] Waiting 10s before next try
2025-09-01T01:36:45.3692690Z 2025/09/01 01:36:45 [TRACE] Waiting 1m0s before next try
2025-09-01T01:37:45.4844137Z 2025/09/01 01:37:45 [TRACE] Waiting 10s before next try
2025-09-01T01:37:55.5912127Z 2025/09/01 01:37:55 [TRACE] Waiting 1m0s before next try
2025-09-01T01:38:55.6952575Z 2025/09/01 01:38:55 [TRACE] Waiting 10s before next try
2025-09-01T01:39:05.7872097Z 2025/09/01 01:39:05 [TRACE] Waiting 1m0s before next try
2025-09-01T01:40:06.0453056Z 2025/09/01 01:40:06 [TRACE] Waiting 10s before next try
2025-09-01T01:40:16.1460736Z 2025/09/01 01:40:16 [TRACE] Waiting 1m0s before next try
2025-09-01T01:41:16.3075579Z 2025/09/01 01:41:16 [TRACE] Waiting 10s before next try
2025-09-01T01:41:26.3897264Z 2025/09/01 01:41:26 [TRACE] Waiting 1m0s before next try
2025-09-01T01:42:26.8100305Z 2025/09/01 01:42:26 [TRACE] Waiting 10s before next try
2025-09-01T01:42:36.9035784Z 2025/09/01 01:42:36 [TRACE] Waiting 1m0s before next try
2025-09-01T01:43:37.0259809Z 2025/09/01 01:43:37 [TRACE] Waiting 10s before next try
2025-09-01T01:43:47.1370521Z 2025/09/01 01:43:47 [TRACE] Waiting 1m0s before next try
2025-09-01T01:44:47.2860021Z 2025/09/01 01:44:47 [TRACE] Waiting 10s before next try
2025-09-01T01:44:57.3821876Z 2025/09/01 01:44:57 [TRACE] Waiting 1m0s before next try
2025-09-01T01:45:57.5723145Z 2025/09/01 01:45:57 [TRACE] Waiting 10s before next try
2025-09-01T01:46:07.6959967Z 2025/09/01 01:46:07 [TRACE] Waiting 1m0s before next try
2025-09-01T01:47:07.8426199Z 2025/09/01 01:47:07 [TRACE] Waiting 10s before next try
2025-09-01T01:47:17.9496020Z 2025/09/01 01:47:17 [TRACE] Waiting 1m0s before next try
2025-09-01T01:48:18.2014484Z 2025/09/01 01:48:18 [TRACE] Waiting 10s before next try
2025-09-01T01:48:28.2954044Z 2025/09/01 01:48:28 [TRACE] Waiting 1m0s before next try
2025-09-01T01:49:28.4282243Z 2025/09/01 01:49:28 [TRACE] Waiting 10s before next try
2025-09-01T01:49:38.5461771Z 2025/09/01 01:49:38 [TRACE] Waiting 1m0s before next try
2025-09-01T01:50:38.7130140Z 2025/09/01 01:50:38 [TRACE] Waiting 10s before next try
2025-09-01T01:50:48.8021565Z 2025/09/01 01:50:48 [TRACE] Waiting 1m0s before next try
2025-09-01T01:51:48.8976378Z 2025/09/01 01:51:48 [TRACE] Waiting 10s before next try
2025-09-01T01:51:58.9943703Z 2025/09/01 01:51:58 [TRACE] Waiting 1m0s before next try
2025-09-01T01:52:59.1274308Z 2025/09/01 01:52:59 [TRACE] Waiting 10s before next try
2025-09-01T01:53:09.2384867Z 2025/09/01 01:53:09 [TRACE] Waiting 1m0s before next try
2025-09-01T01:54:09.3676483Z 2025/09/01 01:54:09 [TRACE] Waiting 10s before next try
2025-09-01T01:54:19.4752664Z 2025/09/01 01:54:19 [TRACE] Waiting 1m0s before next try
2025-09-01T01:55:19.6610189Z 2025/09/01 01:55:19 [TRACE] Waiting 10s before next try
2025-09-01T01:55:29.7732620Z 2025/09/01 01:55:29 [TRACE] Waiting 1m0s before next try
2025-09-01T01:56:29.9231829Z 2025/09/01 01:56:29 [TRACE] Waiting 10s before next try
2025-09-01T01:56:40.0264806Z 2025/09/01 01:56:40 [TRACE] Waiting 1m0s before next try
2025-09-01T01:57:40.2061435Z 2025/09/01 01:57:40 [TRACE] Waiting 10s before next try
2025-09-01T01:57:50.3301515Z 2025/09/01 01:57:50 [TRACE] Waiting 1m0s before next try
2025-09-01T01:58:50.5520652Z 2025/09/01 01:58:50 [TRACE] Waiting 10s before next try
2025-09-01T01:59:00.6435058Z 2025/09/01 01:59:00 [TRACE] Waiting 1m0s before next try
2025-09-01T02:00:00.7720319Z 2025/09/01 02:00:00 [TRACE] Waiting 10s before next try
2025-09-01T02:00:10.8628514Z 2025/09/01 02:00:10 [TRACE] Waiting 1m0s before next try
2025-09-01T02:01:11.0792680Z 2025/09/01 02:01:11 [TRACE] Waiting 10s before next try
2025-09-01T02:01:21.1930780Z 2025/09/01 02:01:21 [TRACE] Waiting 1m0s before next try
2025-09-01T02:02:21.3198608Z 2025/09/01 02:02:21 [TRACE] Waiting 10s before next try
2025-09-01T02:02:31.4105230Z 2025/09/01 02:02:31 [TRACE] Waiting 1m0s before next try
2025-09-01T02:03:31.5904799Z 2025/09/01 02:03:31 [TRACE] Waiting 10s before next try
2025-09-01T02:03:41.6966592Z 2025/09/01 02:03:41 [TRACE] Waiting 1m0s before next try
2025-09-01T02:04:41.9229993Z 2025/09/01 02:04:41 [TRACE] Waiting 10s before next try
2025-09-01T02:04:52.0199394Z 2025/09/01 02:04:52 [TRACE] Waiting 1m0s before next try
2025-09-01T02:05:52.1285506Z 2025/09/01 02:05:52 [TRACE] Waiting 10s before next try
2025-09-01T02:06:02.2378212Z 2025/09/01 02:06:02 [TRACE] Waiting 1m0s before next try
2025-09-01T02:07:02.3738864Z 2025/09/01 02:07:02 [TRACE] Waiting 10s before next try
2025-09-01T02:07:12.4709891Z 2025/09/01 02:07:12 [TRACE] Waiting 1m0s before next try
2025-09-01T02:08:12.6178402Z 2025/09/01 02:08:12 [TRACE] Waiting 10s before next try
2025-09-01T02:08:22.7190159Z 2025/09/01 02:08:22 [TRACE] Waiting 1m0s before next try
2025-09-01T02:09:22.9635705Z 2025/09/01 02:09:22 [TRACE] Waiting 10s before next try
2025-09-01T02:09:33.0573847Z 2025/09/01 02:09:33 [TRACE] Waiting 1m0s before next try
2025-09-01T02:10:33.3000663Z 2025/09/01 02:10:33 [TRACE] Waiting 10s before next try
2025-09-01T02:10:43.4190570Z 2025/09/01 02:10:43 [TRACE] Waiting 1m0s before next try
2025-09-01T02:11:43.5452408Z 2025/09/01 02:11:43 [TRACE] Waiting 10s before next try
2025-09-01T02:11:53.6683074Z 2025/09/01 02:11:53 [TRACE] Waiting 1m0s before next try
2025-09-01T02:12:53.8751300Z 2025/09/01 02:12:53 [TRACE] Waiting 10s before next try
2025-09-01T02:13:03.9545676Z 2025/09/01 02:13:03 [TRACE] Waiting 1m0s before next try
2025-09-01T02:14:04.1071269Z 2025/09/01 02:14:04 [TRACE] Waiting 10s before next try
2025-09-01T02:14:14.2216109Z 2025/09/01 02:14:14 [TRACE] Waiting 1m0s before next try
2025-09-01T02:15:14.4181349Z 2025/09/01 02:15:14 [TRACE] Waiting 10s before next try
2025-09-01T02:15:24.5430485Z 2025/09/01 02:15:24 [TRACE] Waiting 1m0s before next try
2025-09-01T02:16:24.8523178Z 2025/09/01 02:16:24 [TRACE] Waiting 10s before next try
2025-09-01T02:16:34.9605171Z 2025/09/01 02:16:34 [TRACE] Waiting 1m0s before next try
2025-09-01T02:17:35.1704269Z 2025/09/01 02:17:35 [TRACE] Waiting 10s before next try
2025-09-01T02:17:45.2572086Z 2025/09/01 02:17:45 [TRACE] Waiting 1m0s before next try
2025-09-01T02:18:45.3982776Z 2025/09/01 02:18:45 [TRACE] Waiting 10s before next try
2025-09-01T02:18:55.5140806Z 2025/09/01 02:18:55 [TRACE] Waiting 1m0s before next try
2025-09-01T02:19:55.7303407Z 2025/09/01 02:19:55 [TRACE] Waiting 10s before next try
2025-09-01T02:20:05.8450592Z 2025/09/01 02:20:05 [TRACE] Waiting 1m0s before next try
2025-09-01T02:21:06.0239584Z 2025/09/01 02:21:06 [TRACE] Waiting 10s before next try
2025-09-01T02:21:16.1070526Z 2025/09/01 02:21:16 [TRACE] Waiting 1m0s before next try
2025-09-01T02:22:16.2864876Z 2025/09/01 02:22:16 [TRACE] Waiting 10s before next try
2025-09-01T02:22:26.3749907Z 2025/09/01 02:22:26 [TRACE] Waiting 1m0s before next try
2025-09-01T02:23:26.5847511Z 2025/09/01 02:23:26 [TRACE] Waiting 10s before next try
2025-09-01T02:23:36.6879320Z 2025/09/01 02:23:36 [TRACE] Waiting 1m0s before next try
2025-09-01T02:24:36.9478951Z 2025/09/01 02:24:36 [TRACE] Waiting 10s before next try
2025-09-01T02:24:47.0660727Z 2025/09/01 02:24:47 [TRACE] Waiting 1m0s before next try
2025-09-01T02:25:47.2267815Z 2025/09/01 02:25:47 [TRACE] Waiting 10s before next try
2025-09-01T02:25:57.3435077Z 2025/09/01 02:25:57 [TRACE] Waiting 1m0s before next try
2025-09-01T02:26:57.4858859Z 2025/09/01 02:26:57 [TRACE] Waiting 10s before next try
2025-09-01T02:27:07.5967542Z 2025/09/01 02:27:07 [TRACE] Waiting 1m0s before next try
2025-09-01T02:28:07.7132184Z 2025/09/01 02:28:07 [TRACE] Waiting 10s before next try
2025-09-01T02:28:17.8246634Z 2025/09/01 02:28:17 [TRACE] Waiting 1m0s before next try
2025-09-01T02:29:18.0278853Z 2025/09/01 02:29:18 [TRACE] Waiting 10s before next try
2025-09-01T02:29:28.1233572Z 2025/09/01 02:29:28 [TRACE] Waiting 1m0s before next try
2025-09-01T02:30:14.3397440Z 2025/09/01 02:30:14 [WARN] WaitForState timeout after 1h0m0s
2025-09-01T02:30:14.3398464Z 2025/09/01 02:30:14 [WARN] WaitForState starting 30s refresh grace period
2025-09-01T02:30:14.3401777Z     resource_test.go:26: 
2025-09-01T02:30:14.3404853Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-09-01T02:30:14.3408128Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:130
2025-09-01T02:30:14.3411791Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2025-09-01T02:30:14.3415537Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:26
2025-09-01T02:30:14.3416673Z         	Error:      	Received unexpected error:
2025-09-01T02:30:14.3418005Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T02:30:14.3418693Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_basic
2025-09-01T02:30:14.3419893Z         	Messages:   	Cluster creation failed: test-acc-tf-c-744812523277952786, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T02:30:14.3420739Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (3600.58s)
```

  - PASS 14 minutes
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-09-02 PASS 8 seconds
- 2025-09-03 PASS 5 seconds
- 2025-09-04 PASS 5 seconds