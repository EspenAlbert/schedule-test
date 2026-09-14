# autogen_slow/searchindexapi/TestAccSearchIndexAPI_basic Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, FAIL(x 5) PASS(x 4)
Success rate: 44.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 12082.02s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 1278.03s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 3606.01s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 942.02s
[2026-09-14 05:47](#error-2026-09-14t0547030000) |  | dev | timeout | 11877.07s

### Timeline
- 2026-09-07 PASS an hour
- 2026-09-08

### Error 2026-09-08T05:00:43+00:00
```
2026-09-08T05:00:43.6843558Z === RUN   TestAccSearchIndexAPI_basic
2026-09-08T05:00:43.6844819Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-5713570924212779653
2026-09-08T05:00:43.6845845Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-4534713065942648190
2026-09-08T05:00:43.6846513Z 2026/09/08 00:45:09 [DEBUG] Waiting for state to become: [IDLE]
2026-09-08T05:00:43.6847040Z 2026/09/08 00:48:09 [TRACE] Waiting 1m0s before next try
2026-09-08T05:00:43.6847840Z 2026/09/08 00:49:10 [TRACE] Waiting 10s before next try
2026-09-08T05:00:43.6848352Z 2026/09/08 00:49:20 [TRACE] Waiting 1m0s before next try
2026-09-08T05:00:43.6848836Z 2026/09/08 00:50:20 [TRACE] Waiting 10s before next try
2026-09-08T05:00:43.6849313Z 2026/09/08 00:50:30 [TRACE] Waiting 1m0s before next try
2026-09-08T05:00:43.6850044Z 2026/09/08 00:51:30 [TRACE] Waiting 10s before next try
2026-09-08T05:00:43.6850536Z 2026/09/08 00:51:41 [TRACE] Waiting 1m0s before next try
2026-09-08T05:00:43.6851011Z 2026/09/08 00:52:41 [TRACE] Waiting 10s before next try
2026-09-08T05:00:43.6851484Z 2026/09/08 00:52:51 [TRACE] Waiting 1m0s before next try
2026-09-08T05:00:43.6851962Z 2026/09/08 00:53:51 [TRACE] Waiting 10s before next try
2026-09-08T05:00:43.6852432Z 2026/09/08 00:54:01 [TRACE] Waiting 1m0s before next try
2026-09-08T05:00:43.6852901Z 2026/09/08 00:55:01 [TRACE] Waiting 10s before next try
2026-09-08T05:00:43.6853369Z 2026/09/08 00:55:12 [TRACE] Waiting 1m0s before next try
2026-09-08T05:00:43.6853842Z 2026/09/08 00:56:12 [TRACE] Waiting 10s before next try
2026-09-08T05:00:43.6854270Z 2026/09/08 00:56:22 [TRACE] Waiting 1m0s before next try
2026-09-08T05:00:43.6854644Z 2026/09/08 00:57:22 [TRACE] Waiting 10s before next try
2026-09-08T05:00:43.6855017Z 2026/09/08 00:57:32 [TRACE] Waiting 1m0s before next try
2026-09-08T05:00:43.6855390Z 2026/09/08 00:58:33 [TRACE] Waiting 10s before next try
2026-09-08T05:00:43.6855824Z 2026/09/08 00:58:43 [TRACE] Waiting 1m0s before next try
2026-09-08T05:00:43.6856246Z 2026/09/08 00:59:43 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-08T05:00:43.6856682Z 2026/09/08 01:00:43 [TRACE] Waiting 1m0s before next try
2026-09-08T05:00:43.6857270Z 2026/09/08 01:01:43 [TRACE] Waiting 10s before next try
2026-09-08T05:00:43.6857657Z 2026/09/08 01:01:54 [TRACE] Waiting 1m0s before next try
2026-09-08T05:00:43.6858034Z 2026/09/08 01:02:54 [TRACE] Waiting 10s before next try
2026-09-08T05:00:43.6858413Z 2026/09/08 01:03:04 [TRACE] Waiting 1m0s before next try
2026-09-08T05:00:43.6858811Z 2026/09/08 01:04:04 [TRACE] Waiting 10s before next try
2026-09-08T05:00:43.6859191Z 2026/09/08 01:04:14 [TRACE] Waiting 1m0s before next try
2026-09-08T05:00:43.6859564Z 2026/09/08 01:05:14 [TRACE] Waiting 10s before next try
2026-09-08T05:00:43.6860209Z 2026/09/08 01:05:24 [TRACE] Waiting 1m0s before next try
2026-09-08T05:00:43.6868341Z === CONT  TestAccSearchIndexAPI_basic
2026-09-08T05:00:43.6987967Z === NAME  TestAccSearchIndexAPI_basic
2026-09-08T05:00:43.6988481Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-09-08T05:00:43.6988893Z         
2026-09-08T05:00:43.6989247Z         Error: Error waiting for changes in Create
2026-09-08T05:00:43.6989571Z         
2026-09-08T05:00:43.6990176Z           with mongodbatlas_search_index_api.test,
2026-09-08T05:00:43.6990896Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-08T05:00:43.6991571Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-08T05:00:43.6991925Z         
2026-09-08T05:00:43.6992243Z         group_id="6a9f5a9228da0e5fc08e7890",
2026-09-08T05:00:43.6992703Z         cluster_name="test-acc-tf-c-4534713065942648190",
2026-09-08T05:00:43.6993310Z         index_id="6a9f5f929d794e9a744e62e6": timeout while waiting for state to
2026-09-08T05:00:43.6993939Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-08T05:00:43.6994599Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-08T05:00:43.6995309Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-08T05:00:43.6995786Z --- FAIL: TestAccSearchIndexAPI_basic (12082.17s)
```

- 2026-09-09 PASS 3 hours
- 2026-09-10

### Error 2026-09-10T01:33:06+00:00
```
2026-09-10T01:33:06.1244334Z === RUN   TestAccSearchIndexAPI_basic
2026-09-10T01:33:06.1245237Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-7585198387570114371
2026-09-10T01:33:06.1246300Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-1596466085034706675
2026-09-10T01:33:06.1247084Z 2026/09/10 00:41:23 [DEBUG] Waiting for state to become: [IDLE]
2026-09-10T01:33:06.1248191Z 2026/09/10 00:44:23 [TRACE] Waiting 1m0s before next try
2026-09-10T01:33:06.1248809Z 2026/09/10 00:45:23 [TRACE] Waiting 10s before next try
2026-09-10T01:33:06.1249333Z 2026/09/10 00:45:33 [TRACE] Waiting 1m0s before next try
2026-09-10T01:33:06.1249842Z 2026/09/10 00:46:33 [TRACE] Waiting 10s before next try
2026-09-10T01:33:06.1250350Z 2026/09/10 00:46:44 [TRACE] Waiting 1m0s before next try
2026-09-10T01:33:06.1250848Z 2026/09/10 00:47:44 [TRACE] Waiting 10s before next try
2026-09-10T01:33:06.1251349Z 2026/09/10 00:47:54 [TRACE] Waiting 1m0s before next try
2026-09-10T01:33:06.1251848Z 2026/09/10 00:48:54 [TRACE] Waiting 10s before next try
2026-09-10T01:33:06.1252346Z 2026/09/10 00:49:04 [TRACE] Waiting 1m0s before next try
2026-09-10T01:33:06.1252843Z 2026/09/10 00:50:05 [TRACE] Waiting 10s before next try
2026-09-10T01:33:06.1253341Z 2026/09/10 00:50:15 [TRACE] Waiting 1m0s before next try
2026-09-10T01:33:06.1253839Z 2026/09/10 00:51:15 [TRACE] Waiting 10s before next try
2026-09-10T01:33:06.1254347Z 2026/09/10 00:51:25 [TRACE] Waiting 1m0s before next try
2026-09-10T01:33:06.1254843Z 2026/09/10 00:52:25 [TRACE] Waiting 10s before next try
2026-09-10T01:33:06.1255344Z 2026/09/10 00:52:36 [TRACE] Waiting 1m0s before next try
2026-09-10T01:33:06.1255841Z 2026/09/10 00:53:36 [TRACE] Waiting 10s before next try
2026-09-10T01:33:06.1258482Z 2026/09/10 00:53:46 [TRACE] Waiting 1m0s before next try
2026-09-10T01:33:06.1259119Z 2026/09/10 00:54:46 [TRACE] Waiting 10s before next try
2026-09-10T01:33:06.1259745Z 2026/09/10 00:54:56 [TRACE] Waiting 1m0s before next try
2026-09-10T01:33:06.1260372Z 2026/09/10 00:55:56 [TRACE] Waiting 10s before next try
2026-09-10T01:33:06.1261002Z 2026/09/10 00:56:06 [TRACE] Waiting 1m0s before next try
2026-09-10T01:33:06.1261399Z 2026/09/10 00:57:07 [TRACE] Waiting 10s before next try
2026-09-10T01:33:06.1261781Z 2026/09/10 00:57:17 [TRACE] Waiting 1m0s before next try
2026-09-10T01:33:06.1262151Z 2026/09/10 00:58:17 [TRACE] Waiting 10s before next try
2026-09-10T01:33:06.1262563Z 2026/09/10 00:58:27 [TRACE] Waiting 1m0s before next try
2026-09-10T01:33:06.1262932Z 2026/09/10 00:59:27 [TRACE] Waiting 10s before next try
2026-09-10T01:33:06.1263320Z 2026/09/10 00:59:37 [TRACE] Waiting 1m0s before next try
2026-09-10T01:33:06.1263758Z 2026/09/10 01:00:38 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-10T01:33:06.1264197Z 2026/09/10 01:01:38 [TRACE] Waiting 1m0s before next try
2026-09-10T01:33:06.1264600Z     resource_test.go:22: 
2026-09-10T01:33:06.1266360Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T01:33:06.1270455Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-09-10T01:33:06.1271352Z         	Error:      	Received unexpected error:
2026-09-10T01:33:06.1272657Z         	            	sample dataset load 6aa201365b8d9510e89370dd failed for cluster 6aa1fcb04ab31ba34525537f:test-acc-tf-c-1596466085034706675
2026-09-10T01:33:06.1273401Z         	Test:       	TestAccSearchIndexAPI_basic
2026-09-10T01:33:06.1273780Z --- FAIL: TestAccSearchIndexAPI_basic (1278.25s)
```

- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T03:01:53+00:00
```
2026-09-11T03:01:53.1552488Z === RUN   TestAccSearchIndexAPI_basic
2026-09-11T03:01:53.1552944Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-8279985094718691924
2026-09-11T03:01:53.1553486Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-1245339255870052908
2026-09-11T03:01:53.1553897Z 2026/09/11 00:41:53 [DEBUG] Waiting for state to become: [IDLE]
2026-09-11T03:01:53.1554360Z 2026/09/11 00:44:53 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1554681Z 2026/09/11 00:45:53 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1554983Z 2026/09/11 00:46:03 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1555382Z 2026/09/11 00:47:04 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1555702Z 2026/09/11 00:47:14 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1556029Z 2026/09/11 00:48:14 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1556465Z 2026/09/11 00:48:24 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1556784Z 2026/09/11 00:49:25 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1557091Z 2026/09/11 00:49:35 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1557390Z 2026/09/11 00:50:35 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1557685Z 2026/09/11 00:50:45 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1557980Z 2026/09/11 00:51:46 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1558278Z 2026/09/11 00:51:56 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1558582Z 2026/09/11 00:52:56 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1558905Z 2026/09/11 00:53:06 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1559204Z 2026/09/11 00:54:06 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1559490Z 2026/09/11 00:54:17 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1559915Z 2026/09/11 00:55:17 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1560223Z 2026/09/11 00:55:27 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1560518Z 2026/09/11 00:56:27 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1560810Z 2026/09/11 00:56:37 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1561107Z 2026/09/11 00:57:38 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1561400Z 2026/09/11 00:57:48 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1561697Z 2026/09/11 00:58:48 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1562013Z 2026/09/11 00:58:58 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1562316Z 2026/09/11 00:59:58 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1562611Z 2026/09/11 01:00:08 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1562909Z 2026/09/11 01:01:09 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1563204Z 2026/09/11 01:01:19 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1563502Z 2026/09/11 01:02:19 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1563804Z 2026/09/11 01:02:29 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1564100Z 2026/09/11 01:03:30 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1564393Z 2026/09/11 01:03:40 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1564680Z 2026/09/11 01:04:40 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1564973Z 2026/09/11 01:04:50 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1565268Z 2026/09/11 01:05:50 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1565564Z 2026/09/11 01:06:00 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1565893Z 2026/09/11 01:07:01 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1566392Z 2026/09/11 01:07:11 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1566697Z 2026/09/11 01:08:11 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1566992Z 2026/09/11 01:08:21 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1567292Z 2026/09/11 01:09:21 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1567586Z 2026/09/11 01:09:31 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1567879Z 2026/09/11 01:10:32 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1568169Z 2026/09/11 01:10:42 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1568461Z 2026/09/11 01:11:42 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1568755Z 2026/09/11 01:11:52 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1569047Z 2026/09/11 01:12:52 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1569461Z 2026/09/11 01:13:02 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1569769Z 2026/09/11 01:14:03 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1570064Z 2026/09/11 01:14:13 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1570364Z 2026/09/11 01:15:13 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1570661Z 2026/09/11 01:15:23 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1570961Z 2026/09/11 01:16:23 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1571253Z 2026/09/11 01:16:33 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1571548Z 2026/09/11 01:17:33 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1571844Z 2026/09/11 01:17:44 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1572144Z 2026/09/11 01:18:44 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1572438Z 2026/09/11 01:18:54 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1572732Z 2026/09/11 01:19:54 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1573030Z 2026/09/11 01:20:04 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1573325Z 2026/09/11 01:21:05 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1573617Z 2026/09/11 01:21:15 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1573910Z 2026/09/11 01:22:15 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1574205Z 2026/09/11 01:22:25 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1574618Z 2026/09/11 01:23:25 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1574946Z 2026/09/11 01:23:35 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1575240Z 2026/09/11 01:24:35 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1575538Z 2026/09/11 01:24:46 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1575834Z 2026/09/11 01:25:46 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1576131Z 2026/09/11 01:25:56 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1576570Z 2026/09/11 01:26:56 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1576872Z 2026/09/11 01:27:06 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1577166Z 2026/09/11 01:28:06 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1577460Z 2026/09/11 01:28:16 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1577751Z 2026/09/11 01:29:17 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1578043Z 2026/09/11 01:29:27 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1578416Z 2026/09/11 01:30:27 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1578720Z 2026/09/11 01:30:37 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1579013Z 2026/09/11 01:31:38 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1579304Z 2026/09/11 01:31:48 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1579602Z 2026/09/11 01:32:48 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1579900Z 2026/09/11 01:32:58 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1580192Z 2026/09/11 01:33:58 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1580506Z 2026/09/11 01:34:08 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1580805Z 2026/09/11 01:35:08 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1581100Z 2026/09/11 01:35:19 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1581391Z 2026/09/11 01:36:19 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1581684Z 2026/09/11 01:36:29 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1581984Z 2026/09/11 01:37:29 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1582276Z 2026/09/11 01:37:39 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1582569Z 2026/09/11 01:38:39 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1582859Z 2026/09/11 01:38:50 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1583154Z 2026/09/11 01:39:50 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1583448Z 2026/09/11 01:40:00 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1583744Z 2026/09/11 01:41:00 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1584144Z 2026/09/11 01:41:10 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1584470Z 2026/09/11 01:41:53 [WARN] WaitForState timeout after 1h0m0s
2026-09-11T03:01:53.1584841Z 2026/09/11 01:41:53 [WARN] WaitForState starting 30s refresh grace period
2026-09-11T03:01:53.1585199Z     resource_test.go:22: 
2026-09-11T03:01:53.1585961Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:68
2026-09-11T03:01:53.1587561Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-09-11T03:01:53.1588987Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:179
2026-09-11T03:01:53.1590483Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-09-11T03:01:53.1591131Z         	Error:      	Received unexpected error:
2026-09-11T03:01:53.1592104Z         	            	cluster creation failed: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-09-11T03:01:53.1592652Z         	Test:       	TestAccSearchIndexAPI_basic
2026-09-11T03:01:53.1593239Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1245339255870052908
2026-09-11T03:01:53.1593607Z --- FAIL: TestAccSearchIndexAPI_basic (3606.13s)
```

  - FAIL 15 minutes

### Error 2026-09-11T07:31:03+00:00
```
2026-09-11T07:31:03.1926108Z === RUN   TestAccSearchIndexAPI_basic
2026-09-11T07:31:03.1927361Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-428727229642549185
2026-09-11T07:31:03.1928514Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-1260780199030207545
2026-09-11T07:31:03.1929450Z 2026/09/11 06:41:21 [DEBUG] Waiting for state to become: [IDLE]
2026-09-11T07:31:03.1931904Z 2026/09/11 06:44:22 [TRACE] Waiting 1m0s before next try
2026-09-11T07:31:03.1932653Z 2026/09/11 06:45:22 [TRACE] Waiting 10s before next try
2026-09-11T07:31:03.1933392Z 2026/09/11 06:45:32 [TRACE] Waiting 1m0s before next try
2026-09-11T07:31:03.1933983Z 2026/09/11 06:46:33 [TRACE] Waiting 10s before next try
2026-09-11T07:31:03.1934616Z 2026/09/11 06:46:43 [TRACE] Waiting 1m0s before next try
2026-09-11T07:31:03.1935263Z 2026/09/11 06:47:43 [TRACE] Waiting 10s before next try
2026-09-11T07:31:03.1935900Z 2026/09/11 06:47:53 [TRACE] Waiting 1m0s before next try
2026-09-11T07:31:03.1936569Z 2026/09/11 06:48:54 [TRACE] Waiting 10s before next try
2026-09-11T07:31:03.1937408Z 2026/09/11 06:49:04 [TRACE] Waiting 1m0s before next try
2026-09-11T07:31:03.1938090Z 2026/09/11 06:50:05 [TRACE] Waiting 10s before next try
2026-09-11T07:31:03.1938765Z 2026/09/11 06:50:16 [TRACE] Waiting 1m0s before next try
2026-09-11T07:31:03.1939406Z 2026/09/11 06:51:16 [TRACE] Waiting 10s before next try
2026-09-11T07:31:03.1940112Z 2026/09/11 06:51:26 [TRACE] Waiting 1m0s before next try
2026-09-11T07:31:03.1940794Z 2026/09/11 06:52:27 [TRACE] Waiting 10s before next try
2026-09-11T07:31:03.1941632Z 2026/09/11 06:52:37 [TRACE] Waiting 1m0s before next try
2026-09-11T07:31:03.1942270Z 2026/09/11 06:53:37 [TRACE] Waiting 10s before next try
2026-09-11T07:31:03.1942902Z 2026/09/11 06:53:48 [TRACE] Waiting 1m0s before next try
2026-09-11T07:31:03.1943547Z 2026/09/11 06:54:48 [TRACE] Waiting 10s before next try
2026-09-11T07:31:03.1944212Z 2026/09/11 06:54:58 [TRACE] Waiting 1m0s before next try
2026-09-11T07:31:03.1944968Z 2026/09/11 06:55:59 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-11T07:31:03.1945720Z     resource_test.go:22: 
2026-09-11T07:31:03.1947423Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:31:03.1950295Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-09-11T07:31:03.1951570Z         	Error:      	Received unexpected error:
2026-09-11T07:31:03.1953415Z         	            	sample dataset load 6aa3a5fff7fcc4bbebf76935 failed for cluster 6aa3a28df7fcc4bbebf53df1:test-acc-tf-c-1260780199030207545
2026-09-11T07:31:03.1954564Z         	Test:       	TestAccSearchIndexAPI_basic
2026-09-11T07:31:03.1955312Z --- FAIL: TestAccSearchIndexAPI_basic (942.24s)
```

- 2026-09-12 PASS 45 minutes
- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T05:47:03+00:00
```
2026-09-14T05:47:03.7408390Z === RUN   TestAccSearchIndexAPI_basic
2026-09-14T05:47:03.7409786Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-4014868999765788960
2026-09-14T05:47:03.7411309Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-1429233515179452221
2026-09-14T05:47:03.7412384Z 2026/09/14 00:47:07 [DEBUG] Waiting for state to become: [IDLE]
2026-09-14T05:47:03.7413721Z 2026/09/14 00:50:07 [TRACE] Waiting 1m0s before next try
2026-09-14T05:47:03.7414515Z 2026/09/14 00:51:08 [TRACE] Waiting 10s before next try
2026-09-14T05:47:03.7415314Z 2026/09/14 00:51:18 [TRACE] Waiting 1m0s before next try
2026-09-14T05:47:03.7416330Z 2026/09/14 00:52:19 [TRACE] Waiting 10s before next try
2026-09-14T05:47:03.7417157Z 2026/09/14 00:52:29 [TRACE] Waiting 1m0s before next try
2026-09-14T05:47:03.7417930Z 2026/09/14 00:53:29 [TRACE] Waiting 10s before next try
2026-09-14T05:47:03.7418678Z 2026/09/14 00:53:40 [TRACE] Waiting 1m0s before next try
2026-09-14T05:47:03.7419347Z 2026/09/14 00:54:40 [TRACE] Waiting 10s before next try
2026-09-14T05:47:03.7419974Z 2026/09/14 00:54:50 [TRACE] Waiting 1m0s before next try
2026-09-14T05:47:03.7420629Z 2026/09/14 00:55:51 [TRACE] Waiting 10s before next try
2026-09-14T05:47:03.7421261Z 2026/09/14 00:56:01 [TRACE] Waiting 1m0s before next try
2026-09-14T05:47:03.7421920Z 2026/09/14 00:57:01 [TRACE] Waiting 10s before next try
2026-09-14T05:47:03.7422594Z 2026/09/14 00:57:12 [TRACE] Waiting 1m0s before next try
2026-09-14T05:47:03.7423246Z 2026/09/14 00:58:12 [TRACE] Waiting 10s before next try
2026-09-14T05:47:03.7424157Z 2026/09/14 00:58:22 [TRACE] Waiting 1m0s before next try
2026-09-14T05:47:03.7424852Z 2026/09/14 00:59:23 [TRACE] Waiting 10s before next try
2026-09-14T05:47:03.7425547Z 2026/09/14 00:59:33 [TRACE] Waiting 1m0s before next try
2026-09-14T05:47:03.7426574Z 2026/09/14 01:00:34 [TRACE] Waiting 10s before next try
2026-09-14T05:47:03.7427269Z 2026/09/14 01:00:44 [TRACE] Waiting 1m0s before next try
2026-09-14T05:47:03.7428042Z 2026/09/14 01:01:45 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-14T05:47:03.7428894Z 2026/09/14 01:02:45 [TRACE] Waiting 1m0s before next try
2026-09-14T05:47:03.7429602Z 2026/09/14 01:03:45 [TRACE] Waiting 10s before next try
2026-09-14T05:47:03.7430311Z 2026/09/14 01:03:56 [TRACE] Waiting 1m0s before next try
2026-09-14T05:47:03.7444728Z === CONT  TestAccSearchIndexAPI_basic
2026-09-14T05:47:03.7569135Z === NAME  TestAccSearchIndexAPI_basic
2026-09-14T05:47:03.7569957Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-09-14T05:47:03.7570629Z         
2026-09-14T05:47:03.7571237Z         Error: Error waiting for changes in Create
2026-09-14T05:47:03.7571805Z         
2026-09-14T05:47:03.7572464Z           with mongodbatlas_search_index_api.test,
2026-09-14T05:47:03.7573837Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-14T05:47:03.7575132Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-14T05:47:03.7576230Z         
2026-09-14T05:47:03.7576761Z         group_id="6aa74408d4e2b0ecbd5a8aa3",
2026-09-14T05:47:03.7577425Z         cluster_name="test-acc-tf-c-1429233515179452221",
2026-09-14T05:47:03.7578255Z         index_id="6aa7483aaf6488f3aa98b791": timeout while waiting for state to
2026-09-14T05:47:03.7579127Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-14T05:47:03.7579985Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-14T05:47:03.7580871Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-14T05:47:03.7581460Z --- FAIL: TestAccSearchIndexAPI_basic (11877.74s)
```


## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 43 minutes
- 2026-09-14: MISSING
