# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 02:35](#error-2026-01-31t0235110000) |  | dev | timeout | 3601.01s
[2026-02-02 03:38](#error-2026-02-02t0338320000) |  | dev | timeout | 3600.07s
[2026-02-03 00:39](#error-2026-02-03t0039210000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5b2e54ee995902674/clusters | dev | out_of_capacity | 0.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 seconds
- 2026-01-09 PASS 2 seconds
- 2026-01-10 PASS 2 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS a second
- 2026-01-13 PASS 2 seconds
- 2026-01-14 PASS 2 seconds
- 2026-01-15 PASS 2 seconds
- 2026-01-16 PASS 2 seconds
- 2026-01-17 PASS 2 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 2 seconds
- 2026-01-20 PASS 2 seconds
- 2026-01-21 PASS 2 seconds
- 2026-01-22 PASS 2 seconds
- 2026-01-23 PASS 2 seconds
- 2026-01-24 PASS 2 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS a second
- 2026-01-27 PASS 2 seconds
- 2026-01-28 PASS 3 seconds
- 2026-01-29 PASS 2 seconds
- 2026-01-30 PASS 2 seconds
- 2026-01-31

### Error 2026-01-31T02:35:11+00:00
```
2026-01-31T02:35:11.4889564Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2026-01-31T02:35:11.4890194Z     resource_test.go:81: Creating execution cluster: test-acc-tf-c-324063040329712357
2026-01-31T02:35:12.6044947Z 2026/01/31 02:35:12 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T02:38:13.0817847Z 2026/01/31 02:38:13 [TRACE] Waiting 1m0s before next try
2026-01-31T02:39:13.5227452Z 2026/01/31 02:39:13 [TRACE] Waiting 10s before next try
2026-01-31T02:39:23.7529462Z 2026/01/31 02:39:23 [TRACE] Waiting 1m0s before next try
2026-01-31T02:40:24.1398893Z 2026/01/31 02:40:24 [TRACE] Waiting 10s before next try
2026-01-31T02:40:34.3607662Z 2026/01/31 02:40:34 [TRACE] Waiting 1m0s before next try
2026-01-31T02:41:34.7257254Z 2026/01/31 02:41:34 [TRACE] Waiting 10s before next try
2026-01-31T02:41:44.9709645Z 2026/01/31 02:41:44 [TRACE] Waiting 1m0s before next try
2026-01-31T02:42:45.3129880Z 2026/01/31 02:42:45 [TRACE] Waiting 10s before next try
2026-01-31T02:42:55.5501168Z 2026/01/31 02:42:55 [TRACE] Waiting 1m0s before next try
2026-01-31T02:43:55.9214410Z 2026/01/31 02:43:55 [TRACE] Waiting 10s before next try
2026-01-31T02:44:06.1407833Z 2026/01/31 02:44:06 [TRACE] Waiting 1m0s before next try
2026-01-31T02:45:06.5485408Z 2026/01/31 02:45:06 [TRACE] Waiting 10s before next try
2026-01-31T02:45:16.7935685Z 2026/01/31 02:45:16 [TRACE] Waiting 1m0s before next try
2026-01-31T02:46:17.2049380Z 2026/01/31 02:46:17 [TRACE] Waiting 10s before next try
2026-01-31T02:46:27.4819301Z 2026/01/31 02:46:27 [TRACE] Waiting 1m0s before next try
2026-01-31T02:47:27.9564191Z 2026/01/31 02:47:27 [TRACE] Waiting 10s before next try
2026-01-31T02:47:38.1830608Z 2026/01/31 02:47:38 [TRACE] Waiting 1m0s before next try
2026-01-31T02:48:38.5421437Z 2026/01/31 02:48:38 [TRACE] Waiting 10s before next try
2026-01-31T02:48:48.7745605Z 2026/01/31 02:48:48 [TRACE] Waiting 1m0s before next try
2026-01-31T02:49:49.1468658Z 2026/01/31 02:49:49 [TRACE] Waiting 10s before next try
2026-01-31T02:49:59.3886615Z 2026/01/31 02:49:59 [TRACE] Waiting 1m0s before next try
2026-01-31T02:50:59.7584686Z 2026/01/31 02:50:59 [TRACE] Waiting 10s before next try
2026-01-31T02:51:10.0004824Z 2026/01/31 02:51:10 [TRACE] Waiting 1m0s before next try
2026-01-31T02:52:10.4046606Z 2026/01/31 02:52:10 [TRACE] Waiting 10s before next try
2026-01-31T02:52:20.6422240Z 2026/01/31 02:52:20 [TRACE] Waiting 1m0s before next try
2026-01-31T02:53:20.9843064Z 2026/01/31 02:53:20 [TRACE] Waiting 10s before next try
2026-01-31T02:53:31.2269213Z 2026/01/31 02:53:31 [TRACE] Waiting 1m0s before next try
2026-01-31T02:54:31.6984539Z 2026/01/31 02:54:31 [TRACE] Waiting 10s before next try
2026-01-31T02:54:41.9488062Z 2026/01/31 02:54:41 [TRACE] Waiting 1m0s before next try
2026-01-31T02:55:42.2702644Z 2026/01/31 02:55:42 [TRACE] Waiting 10s before next try
2026-01-31T02:55:52.4966816Z 2026/01/31 02:55:52 [TRACE] Waiting 1m0s before next try
2026-01-31T02:56:52.8785860Z 2026/01/31 02:56:52 [TRACE] Waiting 10s before next try
2026-01-31T02:57:03.1184690Z 2026/01/31 02:57:03 [TRACE] Waiting 1m0s before next try
2026-01-31T02:58:03.5205400Z 2026/01/31 02:58:03 [TRACE] Waiting 10s before next try
2026-01-31T02:58:13.7462982Z 2026/01/31 02:58:13 [TRACE] Waiting 1m0s before next try
2026-01-31T02:59:14.1116241Z 2026/01/31 02:59:14 [TRACE] Waiting 10s before next try
2026-01-31T02:59:24.3502565Z 2026/01/31 02:59:24 [TRACE] Waiting 1m0s before next try
2026-01-31T03:00:24.8634109Z 2026/01/31 03:00:24 [TRACE] Waiting 10s before next try
2026-01-31T03:00:35.1247536Z 2026/01/31 03:00:35 [TRACE] Waiting 1m0s before next try
2026-01-31T03:01:35.5461979Z 2026/01/31 03:01:35 [TRACE] Waiting 10s before next try
2026-01-31T03:01:45.7828018Z 2026/01/31 03:01:45 [TRACE] Waiting 1m0s before next try
2026-01-31T03:02:46.1414423Z 2026/01/31 03:02:46 [TRACE] Waiting 10s before next try
2026-01-31T03:02:56.3467946Z 2026/01/31 03:02:56 [TRACE] Waiting 1m0s before next try
2026-01-31T03:03:56.7354672Z 2026/01/31 03:03:56 [TRACE] Waiting 10s before next try
2026-01-31T03:04:06.9655533Z 2026/01/31 03:04:06 [TRACE] Waiting 1m0s before next try
2026-01-31T03:05:07.3071032Z 2026/01/31 03:05:07 [TRACE] Waiting 10s before next try
2026-01-31T03:05:17.5309058Z 2026/01/31 03:05:17 [TRACE] Waiting 1m0s before next try
2026-01-31T03:06:18.0240805Z 2026/01/31 03:06:18 [TRACE] Waiting 10s before next try
2026-01-31T03:06:28.2453559Z 2026/01/31 03:06:28 [TRACE] Waiting 1m0s before next try
2026-01-31T03:07:28.5837768Z 2026/01/31 03:07:28 [TRACE] Waiting 10s before next try
2026-01-31T03:07:38.8266253Z 2026/01/31 03:07:38 [TRACE] Waiting 1m0s before next try
2026-01-31T03:08:39.2121537Z 2026/01/31 03:08:39 [TRACE] Waiting 10s before next try
2026-01-31T03:08:49.4399002Z 2026/01/31 03:08:49 [TRACE] Waiting 1m0s before next try
2026-01-31T03:09:49.7927215Z 2026/01/31 03:09:49 [TRACE] Waiting 10s before next try
2026-01-31T03:10:00.0369618Z 2026/01/31 03:10:00 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:00.4568831Z 2026/01/31 03:11:00 [TRACE] Waiting 10s before next try
2026-01-31T03:11:10.7010840Z 2026/01/31 03:11:10 [TRACE] Waiting 1m0s before next try
2026-01-31T03:12:11.1055350Z 2026/01/31 03:12:11 [TRACE] Waiting 10s before next try
2026-01-31T03:12:21.3311486Z 2026/01/31 03:12:21 [TRACE] Waiting 1m0s before next try
2026-01-31T03:13:21.6863581Z 2026/01/31 03:13:21 [TRACE] Waiting 10s before next try
2026-01-31T03:13:31.8948419Z 2026/01/31 03:13:31 [TRACE] Waiting 1m0s before next try
2026-01-31T03:14:32.2685205Z 2026/01/31 03:14:32 [TRACE] Waiting 10s before next try
2026-01-31T03:14:42.5214225Z 2026/01/31 03:14:42 [TRACE] Waiting 1m0s before next try
2026-01-31T03:15:42.9324873Z 2026/01/31 03:15:42 [TRACE] Waiting 10s before next try
2026-01-31T03:15:53.1645004Z 2026/01/31 03:15:53 [TRACE] Waiting 1m0s before next try
2026-01-31T03:16:53.4862321Z 2026/01/31 03:16:53 [TRACE] Waiting 10s before next try
2026-01-31T03:17:03.7497599Z 2026/01/31 03:17:03 [TRACE] Waiting 1m0s before next try
2026-01-31T03:18:04.1163372Z 2026/01/31 03:18:04 [TRACE] Waiting 10s before next try
2026-01-31T03:18:14.3505666Z 2026/01/31 03:18:14 [TRACE] Waiting 1m0s before next try
2026-01-31T03:19:14.6988322Z 2026/01/31 03:19:14 [TRACE] Waiting 10s before next try
2026-01-31T03:19:24.9264150Z 2026/01/31 03:19:24 [TRACE] Waiting 1m0s before next try
2026-01-31T03:20:25.3176476Z 2026/01/31 03:20:25 [TRACE] Waiting 10s before next try
2026-01-31T03:20:35.5536922Z 2026/01/31 03:20:35 [TRACE] Waiting 1m0s before next try
2026-01-31T03:21:36.0147646Z 2026/01/31 03:21:36 [TRACE] Waiting 10s before next try
2026-01-31T03:21:46.2516762Z 2026/01/31 03:21:46 [TRACE] Waiting 1m0s before next try
2026-01-31T03:22:46.6136078Z 2026/01/31 03:22:46 [TRACE] Waiting 10s before next try
2026-01-31T03:22:56.8495200Z 2026/01/31 03:22:56 [TRACE] Waiting 1m0s before next try
2026-01-31T03:23:57.1904172Z 2026/01/31 03:23:57 [TRACE] Waiting 10s before next try
2026-01-31T03:24:07.4188908Z 2026/01/31 03:24:07 [TRACE] Waiting 1m0s before next try
2026-01-31T03:25:07.8277069Z 2026/01/31 03:25:07 [TRACE] Waiting 10s before next try
2026-01-31T03:25:18.0655161Z 2026/01/31 03:25:18 [TRACE] Waiting 1m0s before next try
2026-01-31T03:26:18.4353199Z 2026/01/31 03:26:18 [TRACE] Waiting 10s before next try
2026-01-31T03:26:28.6555881Z 2026/01/31 03:26:28 [TRACE] Waiting 1m0s before next try
2026-01-31T03:27:29.4479503Z 2026/01/31 03:27:29 [TRACE] Waiting 10s before next try
2026-01-31T03:27:39.6757622Z 2026/01/31 03:27:39 [TRACE] Waiting 1m0s before next try
2026-01-31T03:28:40.1007606Z 2026/01/31 03:28:40 [TRACE] Waiting 10s before next try
2026-01-31T03:28:50.3538189Z 2026/01/31 03:28:50 [TRACE] Waiting 1m0s before next try
2026-01-31T03:29:50.7114707Z 2026/01/31 03:29:50 [TRACE] Waiting 10s before next try
2026-01-31T03:30:00.9519926Z 2026/01/31 03:30:00 [TRACE] Waiting 1m0s before next try
2026-01-31T03:31:01.4954967Z 2026/01/31 03:31:01 [TRACE] Waiting 10s before next try
2026-01-31T03:31:11.7326513Z 2026/01/31 03:31:11 [TRACE] Waiting 1m0s before next try
2026-01-31T03:32:12.1037520Z 2026/01/31 03:32:12 [TRACE] Waiting 10s before next try
2026-01-31T03:32:22.3513371Z 2026/01/31 03:32:22 [TRACE] Waiting 1m0s before next try
2026-01-31T03:33:22.6859737Z 2026/01/31 03:33:22 [TRACE] Waiting 10s before next try
2026-01-31T03:33:32.9118461Z 2026/01/31 03:33:32 [TRACE] Waiting 1m0s before next try
2026-01-31T03:34:33.3146729Z 2026/01/31 03:34:33 [TRACE] Waiting 10s before next try
2026-01-31T03:34:43.5544823Z 2026/01/31 03:34:43 [TRACE] Waiting 1m0s before next try
2026-01-31T03:35:12.6062981Z 2026/01/31 03:35:12 [WARN] WaitForState timeout after 1h0m0s
2026-01-31T03:35:12.6063760Z 2026/01/31 03:35:12 [WARN] WaitForState starting 30s refresh grace period
2026-01-31T03:35:12.6064491Z     resource_test.go:81: 
2026-01-31T03:35:12.6066399Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T03:35:12.6069357Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T03:35:12.6071626Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:81
2026-01-31T03:35:12.6072811Z         	Error:      	Received unexpected error:
2026-01-31T03:35:12.6073767Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T03:35:12.6074509Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2026-01-31T03:35:12.6075679Z         	Messages:   	Cluster creation failed: test-acc-tf-c-324063040329712357, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T03:35:12.6076572Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate (3601.12s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:38:32+00:00
```
2026-02-02T03:38:32.5961452Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2026-02-02T03:38:32.5962187Z     resource_test.go:81: Creating execution cluster: test-acc-tf-c-3501797353233538330
2026-02-02T03:38:33.2823658Z 2026/02/02 03:38:33 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T03:41:33.5836091Z 2026/02/02 03:41:33 [TRACE] Waiting 1m0s before next try
2026-02-02T03:42:33.7252298Z 2026/02/02 03:42:33 [TRACE] Waiting 10s before next try
2026-02-02T03:42:43.8360995Z 2026/02/02 03:42:43 [TRACE] Waiting 1m0s before next try
2026-02-02T03:43:44.0381897Z 2026/02/02 03:43:44 [TRACE] Waiting 10s before next try
2026-02-02T03:43:54.1385946Z 2026/02/02 03:43:54 [TRACE] Waiting 1m0s before next try
2026-02-02T03:44:54.3166511Z 2026/02/02 03:44:54 [TRACE] Waiting 10s before next try
2026-02-02T03:45:04.4234759Z 2026/02/02 03:45:04 [TRACE] Waiting 1m0s before next try
2026-02-02T03:46:04.6391627Z 2026/02/02 03:46:04 [TRACE] Waiting 10s before next try
2026-02-02T03:46:14.7573831Z 2026/02/02 03:46:14 [TRACE] Waiting 1m0s before next try
2026-02-02T03:47:14.9375091Z 2026/02/02 03:47:14 [TRACE] Waiting 10s before next try
2026-02-02T03:47:25.0485461Z 2026/02/02 03:47:25 [TRACE] Waiting 1m0s before next try
2026-02-02T03:48:25.3792173Z 2026/02/02 03:48:25 [TRACE] Waiting 10s before next try
2026-02-02T03:48:35.4877752Z 2026/02/02 03:48:35 [TRACE] Waiting 1m0s before next try
2026-02-02T03:49:35.7459078Z 2026/02/02 03:49:35 [TRACE] Waiting 10s before next try
2026-02-02T03:49:45.8574215Z 2026/02/02 03:49:45 [TRACE] Waiting 1m0s before next try
2026-02-02T03:50:45.9844492Z 2026/02/02 03:50:45 [TRACE] Waiting 10s before next try
2026-02-02T03:50:56.1377831Z 2026/02/02 03:50:56 [TRACE] Waiting 1m0s before next try
2026-02-02T03:51:56.2579285Z 2026/02/02 03:51:56 [TRACE] Waiting 10s before next try
2026-02-02T03:52:06.3698367Z 2026/02/02 03:52:06 [TRACE] Waiting 1m0s before next try
2026-02-02T03:53:06.5112117Z 2026/02/02 03:53:06 [TRACE] Waiting 10s before next try
2026-02-02T03:53:16.6177885Z 2026/02/02 03:53:16 [TRACE] Waiting 1m0s before next try
2026-02-02T03:54:16.8521197Z 2026/02/02 03:54:16 [TRACE] Waiting 10s before next try
2026-02-02T03:54:26.9626098Z 2026/02/02 03:54:26 [TRACE] Waiting 1m0s before next try
2026-02-02T03:55:27.1660357Z 2026/02/02 03:55:27 [TRACE] Waiting 10s before next try
2026-02-02T03:55:37.2783518Z 2026/02/02 03:55:37 [TRACE] Waiting 1m0s before next try
2026-02-02T03:56:37.4206220Z 2026/02/02 03:56:37 [TRACE] Waiting 10s before next try
2026-02-02T03:56:47.5423569Z 2026/02/02 03:56:47 [TRACE] Waiting 1m0s before next try
2026-02-02T03:57:47.8606663Z 2026/02/02 03:57:47 [TRACE] Waiting 10s before next try
2026-02-02T03:57:57.9682625Z 2026/02/02 03:57:57 [TRACE] Waiting 1m0s before next try
2026-02-02T03:58:58.1908427Z 2026/02/02 03:58:58 [TRACE] Waiting 10s before next try
2026-02-02T03:59:08.3068683Z 2026/02/02 03:59:08 [TRACE] Waiting 1m0s before next try
2026-02-02T04:00:08.4615366Z 2026/02/02 04:00:08 [TRACE] Waiting 10s before next try
2026-02-02T04:00:18.5724023Z 2026/02/02 04:00:18 [TRACE] Waiting 1m0s before next try
2026-02-02T04:01:18.8146043Z 2026/02/02 04:01:18 [TRACE] Waiting 10s before next try
2026-02-02T04:01:28.9570157Z 2026/02/02 04:01:28 [TRACE] Waiting 1m0s before next try
2026-02-02T04:02:29.1874152Z 2026/02/02 04:02:29 [TRACE] Waiting 10s before next try
2026-02-02T04:02:39.3130780Z 2026/02/02 04:02:39 [TRACE] Waiting 1m0s before next try
2026-02-02T04:03:39.4841420Z 2026/02/02 04:03:39 [TRACE] Waiting 10s before next try
2026-02-02T04:03:49.6164054Z 2026/02/02 04:03:49 [TRACE] Waiting 1m0s before next try
2026-02-02T04:04:49.8280425Z 2026/02/02 04:04:49 [TRACE] Waiting 10s before next try
2026-02-02T04:04:59.9723743Z 2026/02/02 04:04:59 [TRACE] Waiting 1m0s before next try
2026-02-02T04:06:00.1835062Z 2026/02/02 04:06:00 [TRACE] Waiting 10s before next try
2026-02-02T04:06:10.3227519Z 2026/02/02 04:06:10 [TRACE] Waiting 1m0s before next try
2026-02-02T04:07:10.6357377Z 2026/02/02 04:07:10 [TRACE] Waiting 10s before next try
2026-02-02T04:07:20.7694392Z 2026/02/02 04:07:20 [TRACE] Waiting 1m0s before next try
2026-02-02T04:08:21.1090785Z 2026/02/02 04:08:21 [TRACE] Waiting 10s before next try
2026-02-02T04:08:31.5704965Z 2026/02/02 04:08:31 [TRACE] Waiting 1m0s before next try
2026-02-02T04:09:31.7380668Z 2026/02/02 04:09:31 [TRACE] Waiting 10s before next try
2026-02-02T04:09:41.8654791Z 2026/02/02 04:09:41 [TRACE] Waiting 1m0s before next try
2026-02-02T04:10:42.0158494Z 2026/02/02 04:10:42 [TRACE] Waiting 10s before next try
2026-02-02T04:10:52.1292387Z 2026/02/02 04:10:52 [TRACE] Waiting 1m0s before next try
2026-02-02T04:11:52.2768671Z 2026/02/02 04:11:52 [TRACE] Waiting 10s before next try
2026-02-02T04:12:02.4045054Z 2026/02/02 04:12:02 [TRACE] Waiting 1m0s before next try
2026-02-02T04:13:02.6034434Z 2026/02/02 04:13:02 [TRACE] Waiting 10s before next try
2026-02-02T04:13:12.7259462Z 2026/02/02 04:13:12 [TRACE] Waiting 1m0s before next try
2026-02-02T04:14:13.1041063Z 2026/02/02 04:14:13 [TRACE] Waiting 10s before next try
2026-02-02T04:14:23.2213775Z 2026/02/02 04:14:23 [TRACE] Waiting 1m0s before next try
2026-02-02T04:15:23.4813341Z 2026/02/02 04:15:23 [TRACE] Waiting 10s before next try
2026-02-02T04:15:33.6028958Z 2026/02/02 04:15:33 [TRACE] Waiting 1m0s before next try
2026-02-02T04:16:33.7365491Z 2026/02/02 04:16:33 [TRACE] Waiting 10s before next try
2026-02-02T04:16:43.8573427Z 2026/02/02 04:16:43 [TRACE] Waiting 1m0s before next try
2026-02-02T04:17:44.0470263Z 2026/02/02 04:17:44 [TRACE] Waiting 10s before next try
2026-02-02T04:17:54.1560274Z 2026/02/02 04:17:54 [TRACE] Waiting 1m0s before next try
2026-02-02T04:18:54.3499045Z 2026/02/02 04:18:54 [TRACE] Waiting 10s before next try
2026-02-02T04:19:04.4779961Z 2026/02/02 04:19:04 [TRACE] Waiting 1m0s before next try
2026-02-02T04:20:04.7262965Z 2026/02/02 04:20:04 [TRACE] Waiting 10s before next try
2026-02-02T04:20:14.8595147Z 2026/02/02 04:20:14 [TRACE] Waiting 1m0s before next try
2026-02-02T04:21:15.2142697Z 2026/02/02 04:21:15 [TRACE] Waiting 10s before next try
2026-02-02T04:21:25.3449823Z 2026/02/02 04:21:25 [TRACE] Waiting 1m0s before next try
2026-02-02T04:22:25.4708826Z 2026/02/02 04:22:25 [TRACE] Waiting 10s before next try
2026-02-02T04:22:35.5963825Z 2026/02/02 04:22:35 [TRACE] Waiting 1m0s before next try
2026-02-02T04:23:35.7388825Z 2026/02/02 04:23:35 [TRACE] Waiting 10s before next try
2026-02-02T04:23:46.0863253Z 2026/02/02 04:23:46 [TRACE] Waiting 1m0s before next try
2026-02-02T04:24:46.2431822Z 2026/02/02 04:24:46 [TRACE] Waiting 10s before next try
2026-02-02T04:24:56.3623496Z 2026/02/02 04:24:56 [TRACE] Waiting 1m0s before next try
2026-02-02T04:25:56.6218031Z 2026/02/02 04:25:56 [TRACE] Waiting 10s before next try
2026-02-02T04:26:06.7684974Z 2026/02/02 04:26:06 [TRACE] Waiting 1m0s before next try
2026-02-02T04:27:06.9392141Z 2026/02/02 04:27:06 [TRACE] Waiting 10s before next try
2026-02-02T04:27:17.0475078Z 2026/02/02 04:27:17 [TRACE] Waiting 1m0s before next try
2026-02-02T04:28:17.2107421Z 2026/02/02 04:28:17 [TRACE] Waiting 10s before next try
2026-02-02T04:28:27.3264046Z 2026/02/02 04:28:27 [TRACE] Waiting 1m0s before next try
2026-02-02T04:29:27.5018681Z 2026/02/02 04:29:27 [TRACE] Waiting 10s before next try
2026-02-02T04:29:37.6258087Z 2026/02/02 04:29:37 [TRACE] Waiting 1m0s before next try
2026-02-02T04:30:37.7867673Z 2026/02/02 04:30:37 [TRACE] Waiting 10s before next try
2026-02-02T04:30:47.8912586Z 2026/02/02 04:30:47 [TRACE] Waiting 1m0s before next try
2026-02-02T04:31:48.0442792Z 2026/02/02 04:31:48 [TRACE] Waiting 10s before next try
2026-02-02T04:31:58.1791268Z 2026/02/02 04:31:58 [TRACE] Waiting 1m0s before next try
2026-02-02T04:32:58.4138561Z 2026/02/02 04:32:58 [TRACE] Waiting 10s before next try
2026-02-02T04:33:08.5546604Z 2026/02/02 04:33:08 [TRACE] Waiting 1m0s before next try
2026-02-02T04:34:08.7661911Z 2026/02/02 04:34:08 [TRACE] Waiting 10s before next try
2026-02-02T04:34:18.8856963Z 2026/02/02 04:34:18 [TRACE] Waiting 1m0s before next try
2026-02-02T04:35:19.2050525Z 2026/02/02 04:35:19 [TRACE] Waiting 10s before next try
2026-02-02T04:35:29.3283096Z 2026/02/02 04:35:29 [TRACE] Waiting 1m0s before next try
2026-02-02T04:36:29.5035185Z 2026/02/02 04:36:29 [TRACE] Waiting 10s before next try
2026-02-02T04:36:39.6070011Z 2026/02/02 04:36:39 [TRACE] Waiting 1m0s before next try
2026-02-02T04:37:39.8517328Z 2026/02/02 04:37:39 [TRACE] Waiting 10s before next try
2026-02-02T04:37:49.9672715Z 2026/02/02 04:37:49 [TRACE] Waiting 1m0s before next try
2026-02-02T04:38:33.2828785Z 2026/02/02 04:38:33 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T04:38:33.2830195Z 2026/02/02 04:38:33 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T04:38:33.2834657Z     resource_test.go:81: 
2026-02-02T04:38:33.2838037Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T04:38:33.2841793Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T04:38:33.2845662Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:81
2026-02-02T04:38:33.2847370Z         	Error:      	Received unexpected error:
2026-02-02T04:38:33.2849125Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T04:38:33.2850488Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2026-02-02T04:38:33.2852645Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3501797353233538330, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T04:38:33.2854675Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate (3600.69s)
```

- 2026-02-03

### Error 2026-02-03T00:39:21+00:00
```
2026-02-03T00:39:21.9223470Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2026-02-03T00:39:21.9224094Z     resource_test.go:81: Creating execution cluster: test-acc-tf-c-8428552205748331326
2026-02-03T00:39:22.3969867Z     resource_test.go:81: 
2026-02-03T00:39:22.3971428Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:22.3973519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:22.3976347Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:81
2026-02-03T00:39:22.3977306Z         	Error:      	Received unexpected error:
2026-02-03T00:39:22.3980053Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5b2e54ee995902674/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:22.3981779Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2026-02-03T00:39:22.3983970Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8428552205748331326, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5b2e54ee995902674/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:22.3985613Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate (0.48s)
```

- 2026-02-04 PASS a second
- 2026-02-05 PASS 2 seconds
- 2026-02-06 PASS 2 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS a second
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 2 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 2 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 2 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS a second
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 2 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
