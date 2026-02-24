# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035070000) |  | dev | timeout | 3602.07s
[2026-02-02 01:38](#error-2026-02-02t0138310000) |  | dev | timeout | 3600.09s
[2026-02-03 00:39](#error-2026-02-03t0039170000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5b2e54ee995902674/clusters | dev | out_of_capacity | 3.08s
[2026-02-24 00:36](#error-2026-02-24t0036510000) |  | dev | flaky_500 | 888.08s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 6 seconds
- 2026-01-27 PASS 12 minutes
- 2026-01-28 PASS 10 seconds
- 2026-01-29 PASS 15 minutes
- 2026-01-30 PASS 6 seconds
- 2026-01-31

### Error 2026-01-31T00:35:07+00:00
```
2026-01-31T00:35:07.9720666Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2026-01-31T00:35:07.9723320Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-934316959694931213
2026-01-31T00:35:09.8690313Z     resource_test.go:26: Creating execution cluster: test-acc-tf-c-6396393062927763718
2026-01-31T00:35:10.6633389Z 2026/01/31 00:35:10 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T00:38:11.2481663Z 2026/01/31 00:38:11 [TRACE] Waiting 1m0s before next try
2026-01-31T00:39:11.6695142Z 2026/01/31 00:39:11 [TRACE] Waiting 10s before next try
2026-01-31T00:39:21.9240916Z 2026/01/31 00:39:21 [TRACE] Waiting 1m0s before next try
2026-01-31T00:40:22.3454633Z 2026/01/31 00:40:22 [TRACE] Waiting 10s before next try
2026-01-31T00:40:32.5939387Z 2026/01/31 00:40:32 [TRACE] Waiting 1m0s before next try
2026-01-31T00:41:32.9950191Z 2026/01/31 00:41:32 [TRACE] Waiting 10s before next try
2026-01-31T00:41:43.2208881Z 2026/01/31 00:41:43 [TRACE] Waiting 1m0s before next try
2026-01-31T00:42:43.5622071Z 2026/01/31 00:42:43 [TRACE] Waiting 10s before next try
2026-01-31T00:42:53.7847477Z 2026/01/31 00:42:53 [TRACE] Waiting 1m0s before next try
2026-01-31T00:43:54.1594725Z 2026/01/31 00:43:54 [TRACE] Waiting 10s before next try
2026-01-31T00:44:04.3724893Z 2026/01/31 00:44:04 [TRACE] Waiting 1m0s before next try
2026-01-31T00:45:04.7460506Z 2026/01/31 00:45:04 [TRACE] Waiting 10s before next try
2026-01-31T00:45:14.9813444Z 2026/01/31 00:45:14 [TRACE] Waiting 1m0s before next try
2026-01-31T00:46:15.3797881Z 2026/01/31 00:46:15 [TRACE] Waiting 10s before next try
2026-01-31T00:46:25.6007567Z 2026/01/31 00:46:25 [TRACE] Waiting 1m0s before next try
2026-01-31T00:47:25.9533510Z 2026/01/31 00:47:25 [TRACE] Waiting 10s before next try
2026-01-31T00:47:36.1804826Z 2026/01/31 00:47:36 [TRACE] Waiting 1m0s before next try
2026-01-31T00:48:36.5435906Z 2026/01/31 00:48:36 [TRACE] Waiting 10s before next try
2026-01-31T00:48:46.7878709Z 2026/01/31 00:48:46 [TRACE] Waiting 1m0s before next try
2026-01-31T00:49:47.1530105Z 2026/01/31 00:49:47 [TRACE] Waiting 10s before next try
2026-01-31T00:49:57.3920293Z 2026/01/31 00:49:57 [TRACE] Waiting 1m0s before next try
2026-01-31T00:50:57.7805850Z 2026/01/31 00:50:57 [TRACE] Waiting 10s before next try
2026-01-31T00:51:08.0106095Z 2026/01/31 00:51:08 [TRACE] Waiting 1m0s before next try
2026-01-31T00:52:08.3831314Z 2026/01/31 00:52:08 [TRACE] Waiting 10s before next try
2026-01-31T00:52:18.5886411Z 2026/01/31 00:52:18 [TRACE] Waiting 1m0s before next try
2026-01-31T00:53:18.9503425Z 2026/01/31 00:53:18 [TRACE] Waiting 10s before next try
2026-01-31T00:53:29.1826897Z 2026/01/31 00:53:29 [TRACE] Waiting 1m0s before next try
2026-01-31T00:54:29.5311222Z 2026/01/31 00:54:29 [TRACE] Waiting 10s before next try
2026-01-31T00:54:39.7555668Z 2026/01/31 00:54:39 [TRACE] Waiting 1m0s before next try
2026-01-31T00:55:40.1230534Z 2026/01/31 00:55:40 [TRACE] Waiting 10s before next try
2026-01-31T00:55:50.3505163Z 2026/01/31 00:55:50 [TRACE] Waiting 1m0s before next try
2026-01-31T00:56:50.6891198Z 2026/01/31 00:56:50 [TRACE] Waiting 10s before next try
2026-01-31T00:57:00.9090282Z 2026/01/31 00:57:00 [TRACE] Waiting 1m0s before next try
2026-01-31T00:58:01.3164404Z 2026/01/31 00:58:01 [TRACE] Waiting 10s before next try
2026-01-31T00:58:11.5418471Z 2026/01/31 00:58:11 [TRACE] Waiting 1m0s before next try
2026-01-31T00:59:11.8670443Z 2026/01/31 00:59:11 [TRACE] Waiting 10s before next try
2026-01-31T00:59:22.0946454Z 2026/01/31 00:59:22 [TRACE] Waiting 1m0s before next try
2026-01-31T01:00:22.4432432Z 2026/01/31 01:00:22 [TRACE] Waiting 10s before next try
2026-01-31T01:00:32.6704987Z 2026/01/31 01:00:32 [TRACE] Waiting 1m0s before next try
2026-01-31T01:01:33.0229822Z 2026/01/31 01:01:33 [TRACE] Waiting 10s before next try
2026-01-31T01:01:43.2486777Z 2026/01/31 01:01:43 [TRACE] Waiting 1m0s before next try
2026-01-31T01:02:43.6057448Z 2026/01/31 01:02:43 [TRACE] Waiting 10s before next try
2026-01-31T01:02:53.8240689Z 2026/01/31 01:02:53 [TRACE] Waiting 1m0s before next try
2026-01-31T01:03:54.2279236Z 2026/01/31 01:03:54 [TRACE] Waiting 10s before next try
2026-01-31T01:04:04.4393088Z 2026/01/31 01:04:04 [TRACE] Waiting 1m0s before next try
2026-01-31T01:05:04.8102114Z 2026/01/31 01:05:04 [TRACE] Waiting 10s before next try
2026-01-31T01:05:15.0522945Z 2026/01/31 01:05:15 [TRACE] Waiting 1m0s before next try
2026-01-31T01:06:15.3776370Z 2026/01/31 01:06:15 [TRACE] Waiting 10s before next try
2026-01-31T01:06:25.5998864Z 2026/01/31 01:06:25 [TRACE] Waiting 1m0s before next try
2026-01-31T01:07:25.9868341Z 2026/01/31 01:07:25 [TRACE] Waiting 10s before next try
2026-01-31T01:07:36.1924147Z 2026/01/31 01:07:36 [TRACE] Waiting 1m0s before next try
2026-01-31T01:08:36.5556631Z 2026/01/31 01:08:36 [TRACE] Waiting 10s before next try
2026-01-31T01:08:46.7993482Z 2026/01/31 01:08:46 [TRACE] Waiting 1m0s before next try
2026-01-31T01:09:47.2285632Z 2026/01/31 01:09:47 [TRACE] Waiting 10s before next try
2026-01-31T01:09:57.4676667Z 2026/01/31 01:09:57 [TRACE] Waiting 1m0s before next try
2026-01-31T01:10:57.8354583Z 2026/01/31 01:10:57 [TRACE] Waiting 10s before next try
2026-01-31T01:11:08.0591344Z 2026/01/31 01:11:08 [TRACE] Waiting 1m0s before next try
2026-01-31T01:12:08.4057460Z 2026/01/31 01:12:08 [TRACE] Waiting 10s before next try
2026-01-31T01:12:18.6252143Z 2026/01/31 01:12:18 [TRACE] Waiting 1m0s before next try
2026-01-31T01:13:19.0735708Z 2026/01/31 01:13:19 [TRACE] Waiting 10s before next try
2026-01-31T01:13:29.2960921Z 2026/01/31 01:13:29 [TRACE] Waiting 1m0s before next try
2026-01-31T01:14:29.6089984Z 2026/01/31 01:14:29 [TRACE] Waiting 10s before next try
2026-01-31T01:14:39.8281143Z 2026/01/31 01:14:39 [TRACE] Waiting 1m0s before next try
2026-01-31T01:15:40.1890602Z 2026/01/31 01:15:40 [TRACE] Waiting 10s before next try
2026-01-31T01:15:50.4678363Z 2026/01/31 01:15:50 [TRACE] Waiting 1m0s before next try
2026-01-31T01:16:50.8604096Z 2026/01/31 01:16:50 [TRACE] Waiting 10s before next try
2026-01-31T01:17:01.1704917Z 2026/01/31 01:17:01 [TRACE] Waiting 1m0s before next try
2026-01-31T01:18:01.5534686Z 2026/01/31 01:18:01 [TRACE] Waiting 10s before next try
2026-01-31T01:18:11.8073614Z 2026/01/31 01:18:11 [TRACE] Waiting 1m0s before next try
2026-01-31T01:19:12.2711356Z 2026/01/31 01:19:12 [TRACE] Waiting 10s before next try
2026-01-31T01:19:22.5360233Z 2026/01/31 01:19:22 [TRACE] Waiting 1m0s before next try
2026-01-31T01:20:22.9216059Z 2026/01/31 01:20:22 [TRACE] Waiting 10s before next try
2026-01-31T01:20:33.1694737Z 2026/01/31 01:20:33 [TRACE] Waiting 1m0s before next try
2026-01-31T01:21:33.5403757Z 2026/01/31 01:21:33 [TRACE] Waiting 10s before next try
2026-01-31T01:21:43.8091341Z 2026/01/31 01:21:43 [TRACE] Waiting 1m0s before next try
2026-01-31T01:22:44.1943229Z 2026/01/31 01:22:44 [TRACE] Waiting 10s before next try
2026-01-31T01:22:54.4481205Z 2026/01/31 01:22:54 [TRACE] Waiting 1m0s before next try
2026-01-31T01:23:54.7732139Z 2026/01/31 01:23:54 [TRACE] Waiting 10s before next try
2026-01-31T01:24:05.0057327Z 2026/01/31 01:24:05 [TRACE] Waiting 1m0s before next try
2026-01-31T01:25:05.4810932Z 2026/01/31 01:25:05 [TRACE] Waiting 10s before next try
2026-01-31T01:25:15.8380785Z 2026/01/31 01:25:15 [TRACE] Waiting 1m0s before next try
2026-01-31T01:26:16.1767115Z 2026/01/31 01:26:16 [TRACE] Waiting 10s before next try
2026-01-31T01:26:26.4255828Z 2026/01/31 01:26:26 [TRACE] Waiting 1m0s before next try
2026-01-31T01:27:26.8107393Z 2026/01/31 01:27:26 [TRACE] Waiting 10s before next try
2026-01-31T01:27:37.0489311Z 2026/01/31 01:27:37 [TRACE] Waiting 1m0s before next try
2026-01-31T01:28:37.3981938Z 2026/01/31 01:28:37 [TRACE] Waiting 10s before next try
2026-01-31T01:28:47.6226679Z 2026/01/31 01:28:47 [TRACE] Waiting 1m0s before next try
2026-01-31T01:29:47.9769166Z 2026/01/31 01:29:47 [TRACE] Waiting 10s before next try
2026-01-31T01:29:58.2150038Z 2026/01/31 01:29:58 [TRACE] Waiting 1m0s before next try
2026-01-31T01:30:58.6453195Z 2026/01/31 01:30:58 [TRACE] Waiting 10s before next try
2026-01-31T01:31:08.8758626Z 2026/01/31 01:31:08 [TRACE] Waiting 1m0s before next try
2026-01-31T01:32:09.2238164Z 2026/01/31 01:32:09 [TRACE] Waiting 10s before next try
2026-01-31T01:32:19.4446638Z 2026/01/31 01:32:19 [TRACE] Waiting 1m0s before next try
2026-01-31T01:33:19.7766222Z 2026/01/31 01:33:19 [TRACE] Waiting 10s before next try
2026-01-31T01:33:30.0014418Z 2026/01/31 01:33:30 [TRACE] Waiting 1m0s before next try
2026-01-31T01:34:30.3297878Z 2026/01/31 01:34:30 [TRACE] Waiting 10s before next try
2026-01-31T01:34:40.5556278Z 2026/01/31 01:34:40 [TRACE] Waiting 1m0s before next try
2026-01-31T01:35:10.6637606Z 2026/01/31 01:35:10 [WARN] WaitForState timeout after 1h0m0s
2026-01-31T01:35:10.6638831Z 2026/01/31 01:35:10 [WARN] WaitForState starting 30s refresh grace period
2026-01-31T01:35:10.6639598Z     resource_test.go:26: 
2026-01-31T01:35:10.6640907Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T01:35:10.6645634Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T01:35:10.6649139Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2026-01-31T01:35:10.6651997Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:26
2026-01-31T01:35:10.6652864Z         	Error:      	Received unexpected error:
2026-01-31T01:35:10.6653877Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T01:35:10.6654520Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_basic
2026-01-31T01:35:10.6655648Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6396393062927763718, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T01:35:10.6656433Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (3602.69s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T01:38:31+00:00
```
2026-02-02T01:38:31.1495409Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2026-02-02T01:38:31.1496146Z     resource_test.go:26: Creating execution cluster: test-acc-tf-c-6565670048451527842
2026-02-02T01:38:32.0114335Z 2026/02/02 01:38:32 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T01:41:32.3253263Z 2026/02/02 01:41:32 [TRACE] Waiting 1m0s before next try
2026-02-02T01:42:32.5899948Z 2026/02/02 01:42:32 [TRACE] Waiting 10s before next try
2026-02-02T01:42:42.7168922Z 2026/02/02 01:42:42 [TRACE] Waiting 1m0s before next try
2026-02-02T01:43:42.9245531Z 2026/02/02 01:43:42 [TRACE] Waiting 10s before next try
2026-02-02T01:43:53.0504942Z 2026/02/02 01:43:53 [TRACE] Waiting 1m0s before next try
2026-02-02T01:44:53.3709128Z 2026/02/02 01:44:53 [TRACE] Waiting 10s before next try
2026-02-02T01:45:03.4904209Z 2026/02/02 01:45:03 [TRACE] Waiting 1m0s before next try
2026-02-02T01:46:03.6595449Z 2026/02/02 01:46:03 [TRACE] Waiting 10s before next try
2026-02-02T01:46:13.7771864Z 2026/02/02 01:46:13 [TRACE] Waiting 1m0s before next try
2026-02-02T01:47:14.0108604Z 2026/02/02 01:47:14 [TRACE] Waiting 10s before next try
2026-02-02T01:47:24.1518604Z 2026/02/02 01:47:24 [TRACE] Waiting 1m0s before next try
2026-02-02T01:48:24.4058011Z 2026/02/02 01:48:24 [TRACE] Waiting 10s before next try
2026-02-02T01:48:34.5201201Z 2026/02/02 01:48:34 [TRACE] Waiting 1m0s before next try
2026-02-02T01:49:34.6964553Z 2026/02/02 01:49:34 [TRACE] Waiting 10s before next try
2026-02-02T01:49:44.8790205Z 2026/02/02 01:49:44 [TRACE] Waiting 1m0s before next try
2026-02-02T01:50:45.0572650Z 2026/02/02 01:50:45 [TRACE] Waiting 10s before next try
2026-02-02T01:50:55.2034095Z 2026/02/02 01:50:55 [TRACE] Waiting 1m0s before next try
2026-02-02T01:51:55.4113641Z 2026/02/02 01:51:55 [TRACE] Waiting 10s before next try
2026-02-02T01:52:05.5352040Z 2026/02/02 01:52:05 [TRACE] Waiting 1m0s before next try
2026-02-02T01:53:05.6962619Z 2026/02/02 01:53:05 [TRACE] Waiting 10s before next try
2026-02-02T01:53:15.8230809Z 2026/02/02 01:53:15 [TRACE] Waiting 1m0s before next try
2026-02-02T01:54:16.0594934Z 2026/02/02 01:54:16 [TRACE] Waiting 10s before next try
2026-02-02T01:54:26.1867827Z 2026/02/02 01:54:26 [TRACE] Waiting 1m0s before next try
2026-02-02T01:55:26.3425948Z 2026/02/02 01:55:26 [TRACE] Waiting 10s before next try
2026-02-02T01:55:36.4685426Z 2026/02/02 01:55:36 [TRACE] Waiting 1m0s before next try
2026-02-02T01:56:36.7156953Z 2026/02/02 01:56:36 [TRACE] Waiting 10s before next try
2026-02-02T01:56:46.8345839Z 2026/02/02 01:56:46 [TRACE] Waiting 1m0s before next try
2026-02-02T01:57:47.0132039Z 2026/02/02 01:57:47 [TRACE] Waiting 10s before next try
2026-02-02T01:57:57.1184194Z 2026/02/02 01:57:57 [TRACE] Waiting 1m0s before next try
2026-02-02T01:58:57.3323231Z 2026/02/02 01:58:57 [TRACE] Waiting 10s before next try
2026-02-02T01:59:07.4464933Z 2026/02/02 01:59:07 [TRACE] Waiting 1m0s before next try
2026-02-02T02:00:07.6778572Z 2026/02/02 02:00:07 [TRACE] Waiting 10s before next try
2026-02-02T02:00:17.7992287Z 2026/02/02 02:00:17 [TRACE] Waiting 1m0s before next try
2026-02-02T02:01:17.9351234Z 2026/02/02 02:01:17 [TRACE] Waiting 10s before next try
2026-02-02T02:01:28.0774940Z 2026/02/02 02:01:28 [TRACE] Waiting 1m0s before next try
2026-02-02T02:02:28.2631802Z 2026/02/02 02:02:28 [TRACE] Waiting 10s before next try
2026-02-02T02:02:38.3722813Z 2026/02/02 02:02:38 [TRACE] Waiting 1m0s before next try
2026-02-02T02:03:38.6463939Z 2026/02/02 02:03:38 [TRACE] Waiting 10s before next try
2026-02-02T02:03:48.7711624Z 2026/02/02 02:03:48 [TRACE] Waiting 1m0s before next try
2026-02-02T02:04:48.9395616Z 2026/02/02 02:04:48 [TRACE] Waiting 10s before next try
2026-02-02T02:04:59.0719145Z 2026/02/02 02:04:59 [TRACE] Waiting 1m0s before next try
2026-02-02T02:05:59.2523232Z 2026/02/02 02:05:59 [TRACE] Waiting 10s before next try
2026-02-02T02:06:09.3854505Z 2026/02/02 02:06:09 [TRACE] Waiting 1m0s before next try
2026-02-02T02:07:09.5450593Z 2026/02/02 02:07:09 [TRACE] Waiting 10s before next try
2026-02-02T02:07:19.6654330Z 2026/02/02 02:07:19 [TRACE] Waiting 1m0s before next try
2026-02-02T02:08:19.8942193Z 2026/02/02 02:08:19 [TRACE] Waiting 10s before next try
2026-02-02T02:08:30.0237824Z 2026/02/02 02:08:30 [TRACE] Waiting 1m0s before next try
2026-02-02T02:09:30.1661776Z 2026/02/02 02:09:30 [TRACE] Waiting 10s before next try
2026-02-02T02:09:40.2738726Z 2026/02/02 02:09:40 [TRACE] Waiting 1m0s before next try
2026-02-02T02:10:40.4745558Z 2026/02/02 02:10:40 [TRACE] Waiting 10s before next try
2026-02-02T02:10:50.5936885Z 2026/02/02 02:10:50 [TRACE] Waiting 1m0s before next try
2026-02-02T02:11:50.8400384Z 2026/02/02 02:11:50 [TRACE] Waiting 10s before next try
2026-02-02T02:12:00.9555009Z 2026/02/02 02:12:00 [TRACE] Waiting 1m0s before next try
2026-02-02T02:13:01.7959376Z 2026/02/02 02:13:01 [TRACE] Waiting 10s before next try
2026-02-02T02:13:11.9288288Z 2026/02/02 02:13:11 [TRACE] Waiting 1m0s before next try
2026-02-02T02:14:12.0891663Z 2026/02/02 02:14:12 [TRACE] Waiting 10s before next try
2026-02-02T02:14:22.2129231Z 2026/02/02 02:14:22 [TRACE] Waiting 1m0s before next try
2026-02-02T02:15:22.3707459Z 2026/02/02 02:15:22 [TRACE] Waiting 10s before next try
2026-02-02T02:15:32.4932772Z 2026/02/02 02:15:32 [TRACE] Waiting 1m0s before next try
2026-02-02T02:16:32.7540730Z 2026/02/02 02:16:32 [TRACE] Waiting 10s before next try
2026-02-02T02:16:42.8805931Z 2026/02/02 02:16:42 [TRACE] Waiting 1m0s before next try
2026-02-02T02:17:43.0416114Z 2026/02/02 02:17:43 [TRACE] Waiting 10s before next try
2026-02-02T02:17:53.1619749Z 2026/02/02 02:17:53 [TRACE] Waiting 1m0s before next try
2026-02-02T02:18:53.3365283Z 2026/02/02 02:18:53 [TRACE] Waiting 10s before next try
2026-02-02T02:19:03.4579124Z 2026/02/02 02:19:03 [TRACE] Waiting 1m0s before next try
2026-02-02T02:20:03.6871277Z 2026/02/02 02:20:03 [TRACE] Waiting 10s before next try
2026-02-02T02:20:13.8222628Z 2026/02/02 02:20:13 [TRACE] Waiting 1m0s before next try
2026-02-02T02:21:14.0034341Z 2026/02/02 02:21:14 [TRACE] Waiting 10s before next try
2026-02-02T02:21:24.1468162Z 2026/02/02 02:21:24 [TRACE] Waiting 1m0s before next try
2026-02-02T02:22:24.2839681Z 2026/02/02 02:22:24 [TRACE] Waiting 10s before next try
2026-02-02T02:22:34.3978766Z 2026/02/02 02:22:34 [TRACE] Waiting 1m0s before next try
2026-02-02T02:23:34.5693001Z 2026/02/02 02:23:34 [TRACE] Waiting 10s before next try
2026-02-02T02:23:44.6774931Z 2026/02/02 02:23:44 [TRACE] Waiting 1m0s before next try
2026-02-02T02:24:44.8065739Z 2026/02/02 02:24:44 [TRACE] Waiting 10s before next try
2026-02-02T02:24:54.9193868Z 2026/02/02 02:24:54 [TRACE] Waiting 1m0s before next try
2026-02-02T02:25:55.2556622Z 2026/02/02 02:25:55 [TRACE] Waiting 10s before next try
2026-02-02T02:26:05.3652675Z 2026/02/02 02:26:05 [TRACE] Waiting 1m0s before next try
2026-02-02T02:27:05.6228173Z 2026/02/02 02:27:05 [TRACE] Waiting 10s before next try
2026-02-02T02:27:15.7421573Z 2026/02/02 02:27:15 [TRACE] Waiting 1m0s before next try
2026-02-02T02:28:15.9370837Z 2026/02/02 02:28:15 [TRACE] Waiting 10s before next try
2026-02-02T02:28:26.0831564Z 2026/02/02 02:28:26 [TRACE] Waiting 1m0s before next try
2026-02-02T02:29:26.2038067Z 2026/02/02 02:29:26 [TRACE] Waiting 10s before next try
2026-02-02T02:29:36.3201975Z 2026/02/02 02:29:36 [TRACE] Waiting 1m0s before next try
2026-02-02T02:30:36.5049700Z 2026/02/02 02:30:36 [TRACE] Waiting 10s before next try
2026-02-02T02:30:46.6326382Z 2026/02/02 02:30:46 [TRACE] Waiting 1m0s before next try
2026-02-02T02:31:46.7818761Z 2026/02/02 02:31:46 [TRACE] Waiting 10s before next try
2026-02-02T02:31:56.8933053Z 2026/02/02 02:31:56 [TRACE] Waiting 1m0s before next try
2026-02-02T02:32:57.2083005Z 2026/02/02 02:32:57 [TRACE] Waiting 10s before next try
2026-02-02T02:33:07.3292662Z 2026/02/02 02:33:07 [TRACE] Waiting 1m0s before next try
2026-02-02T02:34:07.6359650Z 2026/02/02 02:34:07 [TRACE] Waiting 10s before next try
2026-02-02T02:34:17.7570907Z 2026/02/02 02:34:17 [TRACE] Waiting 1m0s before next try
2026-02-02T02:35:18.0231378Z 2026/02/02 02:35:18 [TRACE] Waiting 10s before next try
2026-02-02T02:35:28.1450883Z 2026/02/02 02:35:28 [TRACE] Waiting 1m0s before next try
2026-02-02T02:36:28.3055626Z 2026/02/02 02:36:28 [TRACE] Waiting 10s before next try
2026-02-02T02:36:38.4152243Z 2026/02/02 02:36:38 [TRACE] Waiting 1m0s before next try
2026-02-02T02:37:38.6718450Z 2026/02/02 02:37:38 [TRACE] Waiting 10s before next try
2026-02-02T02:37:48.8276264Z 2026/02/02 02:37:48 [TRACE] Waiting 1m0s before next try
2026-02-02T02:38:32.0118890Z 2026/02/02 02:38:32 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T02:38:32.0121020Z 2026/02/02 02:38:32 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T02:38:32.0123937Z     resource_test.go:26: 
2026-02-02T02:38:32.0128215Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T02:38:32.0131726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T02:38:32.0135361Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2026-02-02T02:38:32.0139340Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:26
2026-02-02T02:38:32.0140869Z         	Error:      	Received unexpected error:
2026-02-02T02:38:32.0143030Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T02:38:32.0144162Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_basic
2026-02-02T02:38:32.0146153Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6565670048451527842, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T02:38:32.0147691Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (3600.86s)
```

- 2026-02-03

### Error 2026-02-03T00:39:17+00:00
```
2026-02-03T00:39:17.6609543Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2026-02-03T00:39:17.6612053Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-9083103927776781851
2026-02-03T00:39:20.8836459Z     resource_test.go:26: Creating execution cluster: test-acc-tf-c-3051722741204088401
2026-02-03T00:39:21.4113800Z     resource_test.go:26: 
2026-02-03T00:39:21.4115779Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:21.4121050Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:21.4123129Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2026-02-03T00:39:21.4125428Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:26
2026-02-03T00:39:21.4126363Z         	Error:      	Received unexpected error:
2026-02-03T00:39:21.4128877Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5b2e54ee995902674/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:21.4130244Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_basic
2026-02-03T00:39:21.4132363Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3051722741204088401, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5b2e54ee995902674/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:21.4133799Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (3.75s)
```

- 2026-02-04 PASS 6 seconds
- 2026-02-05 PASS 13 minutes
- 2026-02-06 PASS 7 seconds
- 2026-02-07 PASS 13 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 7 seconds
- 2026-02-10 PASS 13 minutes
- 2026-02-11 PASS 10 seconds
- 2026-02-12 PASS 15 minutes
- 2026-02-13 PASS 7 seconds
- 2026-02-14 PASS 13 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 7 seconds
- 2026-02-17 PASS 30 minutes
- 2026-02-18 PASS 8 seconds
- 2026-02-19 PASS 18 minutes
- 2026-02-20 PASS 8 seconds
- 2026-02-21 PASS 12 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 10 seconds
- 2026-02-24

### Error 2026-02-24T00:36:51+00:00
```
2026-02-24T00:36:51.9697863Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2026-02-24T00:36:51.9699440Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-8327616362772473673
2026-02-24T00:36:54.5451017Z     resource_test.go:26: Creating execution cluster: test-acc-tf-c-6939881853609603848
2026-02-24T00:36:55.9742862Z 2026/02/24 00:36:55 [DEBUG] Waiting for state to become: [IDLE]
2026-02-24T00:39:56.3930247Z 2026/02/24 00:39:56 [TRACE] Waiting 1m0s before next try
2026-02-24T00:40:56.8225960Z 2026/02/24 00:40:56 [TRACE] Waiting 10s before next try
2026-02-24T00:41:07.0863735Z 2026/02/24 00:41:07 [TRACE] Waiting 1m0s before next try
2026-02-24T00:42:07.5371833Z 2026/02/24 00:42:07 [TRACE] Waiting 10s before next try
2026-02-24T00:42:17.7989654Z 2026/02/24 00:42:17 [TRACE] Waiting 1m0s before next try
2026-02-24T00:43:18.2242272Z 2026/02/24 00:43:18 [TRACE] Waiting 10s before next try
2026-02-24T00:43:28.5012342Z 2026/02/24 00:43:28 [TRACE] Waiting 1m0s before next try
2026-02-24T00:44:28.9330049Z 2026/02/24 00:44:28 [TRACE] Waiting 10s before next try
2026-02-24T00:44:39.1802218Z 2026/02/24 00:44:39 [TRACE] Waiting 1m0s before next try
2026-02-24T00:45:39.6132035Z 2026/02/24 00:45:39 [TRACE] Waiting 10s before next try
2026-02-24T00:45:49.9296473Z 2026/02/24 00:45:49 [TRACE] Waiting 1m0s before next try
2026-02-24T00:46:50.3441171Z 2026/02/24 00:46:50 [TRACE] Waiting 10s before next try
2026-02-24T00:47:00.6233598Z 2026/02/24 00:47:00 [TRACE] Waiting 1m0s before next try
2026-02-24T00:48:01.0504915Z 2026/02/24 00:48:01 [TRACE] Waiting 10s before next try
2026-02-24T00:48:11.3207357Z 2026/02/24 00:48:11 [TRACE] Waiting 1m0s before next try
2026-02-24T00:49:11.7937965Z 2026/02/24 00:49:11 [TRACE] Waiting 10s before next try
2026-02-24T00:49:23.4322178Z 2026/02/24 00:49:23 [TRACE] Waiting 1m0s before next try
2026-02-24T00:50:23.8420448Z 2026/02/24 00:50:23 [TRACE] Waiting 10s before next try
2026-02-24T00:50:35.8285430Z 2026/02/24 00:50:35 [TRACE] Waiting 1m0s before next try
2026-02-24T00:51:40.6690949Z    test_step_number=1
2026-02-24T00:51:40.6691739Z     resource_test.go:26: Step 1/5 error: Error running apply: exit status 1
2026-02-24T00:51:40.6692164Z         
2026-02-24T00:51:40.6692645Z         Error: Error setting resource mongodbatlas_mongodb_employee_access_grant
2026-02-24T00:51:40.6693076Z         
2026-02-24T00:51:40.6693728Z           with mongodbatlas_mongodb_employee_access_grant.test,
2026-02-24T00:51:40.6694572Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_mongodb_employee_access_grant" "test":
2026-02-24T00:51:40.6695409Z           12: 		resource "mongodbatlas_mongodb_employee_access_grant" "test" {
2026-02-24T00:51:40.6695817Z         
2026-02-24T00:51:40.6696294Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T00:51:40.6696744Z         type
2026-02-24T00:51:40.7191343Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (888.75s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 5 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 9 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 5 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 5 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 6 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 6 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
