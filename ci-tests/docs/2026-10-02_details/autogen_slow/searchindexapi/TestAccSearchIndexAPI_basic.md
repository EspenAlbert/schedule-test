# autogen_slow/searchindexapi/TestAccSearchIndexAPI_basic Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 14) FAIL(x 12) SKIP(x 11)
Success rate: 53.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 11871.02s
[2026-09-05 04:57](#error-2026-09-05t0457170000) |  | dev | timeout | 12011.09s
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 12082.02s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 1278.03s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 3606.01s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 942.02s
[2026-09-14 05:47](#error-2026-09-14t0547030000) |  | dev | timeout | 11877.07s
[2026-09-15 05:43](#error-2026-09-15t0543500000) |  | dev | timeout | 11871.04s
[2026-09-16 05:43](#error-2026-09-16t0543440000) |  | dev | timeout | 12301.00s
[2026-09-18 05:16](#error-2026-09-18t0516190000) |  | dev | timeout | 12370.03s
[2026-09-19 01:30](#error-2026-09-19t0130400000) |  | dev | timeout | 1777.06s
[2026-09-22 05:06](#error-2026-09-22t0506240000) |  | dev | timeout | 12234.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 2 hours
- 2026-09-03
  - PASS 2 hours
  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0668173Z === RUN   TestAccSearchIndexAPI_basic
2026-09-03T10:02:47.0669747Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-3492182154586914006
2026-09-03T10:02:47.0670921Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-571919649677458254
2026-09-03T10:02:47.0672029Z 2026/09/03 06:32:16 [DEBUG] Waiting for state to become: [IDLE]
2026-09-03T10:02:47.0672633Z 2026/09/03 06:35:16 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0673451Z 2026/09/03 06:36:16 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0673956Z 2026/09/03 06:36:27 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0674457Z 2026/09/03 06:37:27 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0674943Z 2026/09/03 06:37:37 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0675421Z 2026/09/03 06:38:37 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0675905Z 2026/09/03 06:38:47 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0676391Z 2026/09/03 06:39:47 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0676876Z 2026/09/03 06:39:57 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0677357Z 2026/09/03 06:40:58 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0677847Z 2026/09/03 06:41:08 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0678330Z 2026/09/03 06:42:08 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0678816Z 2026/09/03 06:42:18 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0679564Z 2026/09/03 06:43:18 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0680050Z 2026/09/03 06:43:28 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0680530Z 2026/09/03 06:44:29 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0681005Z 2026/09/03 06:44:39 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0681540Z 2026/09/03 06:45:39 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-03T10:02:47.0682076Z 2026/09/03 06:46:39 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0682555Z 2026/09/03 06:47:40 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0683034Z 2026/09/03 06:47:50 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0683525Z 2026/09/03 06:48:50 [TRACE] Waiting 10s before next try
2026-09-03T10:02:47.0684004Z 2026/09/03 06:49:00 [TRACE] Waiting 1m0s before next try
2026-09-03T10:02:47.0693460Z === CONT  TestAccSearchIndexAPI_basic
2026-09-03T10:02:47.0748778Z === NAME  TestAccSearchIndexAPI_basic
2026-09-03T10:02:47.0749625Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-09-03T10:02:47.0750080Z         
2026-09-03T10:02:47.0750467Z         Error: Error waiting for changes in Create
2026-09-03T10:02:47.0750820Z         
2026-09-03T10:02:47.0751203Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0751955Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0752659Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0753045Z         
2026-09-03T10:02:47.0753385Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0753880Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0754510Z         index_id="6a99189a8f4e31db6818c200": timeout while waiting for state to
2026-09-03T10:02:47.0755181Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0755890Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-03T10:02:47.0756638Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-03T10:02:47.0757223Z --- FAIL: TestAccSearchIndexAPI_basic (11871.18s)
```

- 2026-09-04 PASS 35 minutes
- 2026-09-05

### Error 2026-09-05T04:57:17+00:00
```
2026-09-05T04:57:17.6481988Z === RUN   TestAccSearchIndexAPI_basic
2026-09-05T04:57:17.6483388Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-1136770926200973024
2026-09-05T04:57:17.6484466Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-2329868758960774626
2026-09-05T04:57:17.6485119Z 2026/09/05 00:41:22 [DEBUG] Waiting for state to become: [IDLE]
2026-09-05T04:57:17.6486767Z 2026/09/05 00:44:23 [TRACE] Waiting 1m0s before next try
2026-09-05T04:57:17.6487894Z 2026/09/05 00:45:23 [TRACE] Waiting 10s before next try
2026-09-05T04:57:17.6488486Z 2026/09/05 00:45:33 [TRACE] Waiting 1m0s before next try
2026-09-05T04:57:17.6489110Z 2026/09/05 00:46:33 [TRACE] Waiting 10s before next try
2026-09-05T04:57:17.6489648Z 2026/09/05 00:46:43 [TRACE] Waiting 1m0s before next try
2026-09-05T04:57:17.6490081Z 2026/09/05 00:47:44 [TRACE] Waiting 10s before next try
2026-09-05T04:57:17.6490543Z 2026/09/05 00:47:54 [TRACE] Waiting 1m0s before next try
2026-09-05T04:57:17.6490989Z 2026/09/05 00:48:54 [TRACE] Waiting 10s before next try
2026-09-05T04:57:17.6491500Z 2026/09/05 00:49:04 [TRACE] Waiting 1m0s before next try
2026-09-05T04:57:17.6491959Z 2026/09/05 00:50:05 [TRACE] Waiting 10s before next try
2026-09-05T04:57:17.6492416Z 2026/09/05 00:50:15 [TRACE] Waiting 1m0s before next try
2026-09-05T04:57:17.6492867Z 2026/09/05 00:51:15 [TRACE] Waiting 10s before next try
2026-09-05T04:57:17.6493542Z 2026/09/05 00:51:25 [TRACE] Waiting 1m0s before next try
2026-09-05T04:57:17.6494098Z 2026/09/05 00:52:25 [TRACE] Waiting 10s before next try
2026-09-05T04:57:17.6494544Z 2026/09/05 00:52:35 [TRACE] Waiting 1m0s before next try
2026-09-05T04:57:17.6495006Z 2026/09/05 00:53:36 [TRACE] Waiting 10s before next try
2026-09-05T04:57:17.6495489Z 2026/09/05 00:53:46 [TRACE] Waiting 1m0s before next try
2026-09-05T04:57:17.6495905Z 2026/09/05 00:54:46 [TRACE] Waiting 10s before next try
2026-09-05T04:57:17.6496369Z 2026/09/05 00:54:56 [TRACE] Waiting 1m0s before next try
2026-09-05T04:57:17.6496862Z 2026/09/05 00:55:57 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-05T04:57:17.6497347Z 2026/09/05 00:56:57 [TRACE] Waiting 1m0s before next try
2026-09-05T04:57:17.6497775Z 2026/09/05 00:57:57 [TRACE] Waiting 10s before next try
2026-09-05T04:57:17.6498234Z 2026/09/05 00:58:07 [TRACE] Waiting 1m0s before next try
2026-09-05T04:57:17.6498798Z 2026/09/05 00:59:07 [TRACE] Waiting 10s before next try
2026-09-05T04:57:17.6499254Z 2026/09/05 00:59:17 [TRACE] Waiting 1m0s before next try
2026-09-05T04:57:17.6499659Z 2026/09/05 01:00:18 [TRACE] Waiting 10s before next try
2026-09-05T04:57:17.6500110Z 2026/09/05 01:00:28 [TRACE] Waiting 1m0s before next try
2026-09-05T04:57:17.6508831Z === CONT  TestAccSearchIndexAPI_basic
2026-09-05T04:57:17.6529659Z === NAME  TestAccSearchIndexAPI_basic
2026-09-05T04:57:17.6530207Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-09-05T04:57:17.6530652Z         
2026-09-05T04:57:17.6531063Z         Error: Error waiting for changes in Create
2026-09-05T04:57:17.6531439Z         
2026-09-05T04:57:17.6531878Z           with mongodbatlas_search_index_api.test,
2026-09-05T04:57:17.6532502Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-05T04:57:17.6533328Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-05T04:57:17.6533745Z         
2026-09-05T04:57:17.6534130Z         group_id="6a9b652f1099178350983b6f",
2026-09-05T04:57:17.6534644Z         cluster_name="test-acc-tf-c-2329868758960774626",
2026-09-05T04:57:17.6535231Z         index_id="6a9b69e910991783509ac048": timeout while waiting for state to
2026-09-05T04:57:17.6535919Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-05T04:57:17.6536568Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-05T04:57:17.6537241Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-05T04:57:17.6537743Z --- FAIL: TestAccSearchIndexAPI_basic (12011.95s)
```

- 2026-09-06: MISSING
- 2026-09-07
  - PASS 2 hours
  - PASS an hour
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

- 2026-09-15

### Error 2026-09-15T05:43:50+00:00
```
2026-09-15T05:43:50.3071728Z === RUN   TestAccSearchIndexAPI_basic
2026-09-15T05:43:50.3072938Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-7652198892173582949
2026-09-15T05:43:50.3074564Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-6477351237734953754
2026-09-15T05:43:50.3075201Z 2026/09/15 00:43:53 [DEBUG] Waiting for state to become: [IDLE]
2026-09-15T05:43:50.3075951Z 2026/09/15 00:46:54 [TRACE] Waiting 1m0s before next try
2026-09-15T05:43:50.3076413Z 2026/09/15 00:47:54 [TRACE] Waiting 10s before next try
2026-09-15T05:43:50.3076872Z 2026/09/15 00:48:04 [TRACE] Waiting 1m0s before next try
2026-09-15T05:43:50.3077312Z 2026/09/15 00:49:04 [TRACE] Waiting 10s before next try
2026-09-15T05:43:50.3077756Z 2026/09/15 00:49:14 [TRACE] Waiting 1m0s before next try
2026-09-15T05:43:50.3078194Z 2026/09/15 00:50:14 [TRACE] Waiting 10s before next try
2026-09-15T05:43:50.3078644Z 2026/09/15 00:50:25 [TRACE] Waiting 1m0s before next try
2026-09-15T05:43:50.3079083Z 2026/09/15 00:51:25 [TRACE] Waiting 10s before next try
2026-09-15T05:43:50.3079520Z 2026/09/15 00:51:35 [TRACE] Waiting 1m0s before next try
2026-09-15T05:43:50.3079964Z 2026/09/15 00:52:35 [TRACE] Waiting 10s before next try
2026-09-15T05:43:50.3080398Z 2026/09/15 00:52:45 [TRACE] Waiting 1m0s before next try
2026-09-15T05:43:50.3080836Z 2026/09/15 00:53:46 [TRACE] Waiting 10s before next try
2026-09-15T05:43:50.3081276Z 2026/09/15 00:53:56 [TRACE] Waiting 1m0s before next try
2026-09-15T05:43:50.3081713Z 2026/09/15 00:54:56 [TRACE] Waiting 10s before next try
2026-09-15T05:43:50.3082150Z 2026/09/15 00:55:06 [TRACE] Waiting 1m0s before next try
2026-09-15T05:43:50.3082586Z 2026/09/15 00:56:07 [TRACE] Waiting 10s before next try
2026-09-15T05:43:50.3083020Z 2026/09/15 00:56:17 [TRACE] Waiting 1m0s before next try
2026-09-15T05:43:50.3083735Z 2026/09/15 00:57:17 [TRACE] Waiting 10s before next try
2026-09-15T05:43:50.3084370Z 2026/09/15 00:57:27 [TRACE] Waiting 1m0s before next try
2026-09-15T05:43:50.3085158Z 2026/09/15 00:58:27 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-15T05:43:50.3085863Z 2026/09/15 00:59:27 [TRACE] Waiting 1m0s before next try
2026-09-15T05:43:50.3086277Z 2026/09/15 01:00:28 [TRACE] Waiting 10s before next try
2026-09-15T05:43:50.3086677Z 2026/09/15 01:00:38 [TRACE] Waiting 1m0s before next try
2026-09-15T05:43:50.3095379Z === CONT  TestAccSearchIndexAPI_basic
2026-09-15T05:43:50.3115583Z === NAME  TestAccSearchIndexAPI_basic
2026-09-15T05:43:50.3116138Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-09-15T05:43:50.3116585Z         
2026-09-15T05:43:50.3116994Z         Error: Error waiting for changes in Create
2026-09-15T05:43:50.3117335Z         
2026-09-15T05:43:50.3117711Z           with mongodbatlas_search_index_api.test,
2026-09-15T05:43:50.3118474Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-15T05:43:50.3119178Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-15T05:43:50.3119542Z         
2026-09-15T05:43:50.3119870Z         group_id="6aa894c6f45e19b0d3dcab24",
2026-09-15T05:43:50.3120356Z         cluster_name="test-acc-tf-c-6477351237734953754",
2026-09-15T05:43:50.3120989Z         index_id="6aa898f3f45e19b0d3e0ed5f": timeout while waiting for state to
2026-09-15T05:43:50.3121650Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-15T05:43:50.3122344Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-15T05:43:50.3123082Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-15T05:43:50.3123804Z --- FAIL: TestAccSearchIndexAPI_basic (11871.41s)
```

- 2026-09-16

### Error 2026-09-16T05:43:44+00:00
```
2026-09-16T05:43:44.8849724Z === RUN   TestAccSearchIndexAPI_basic
2026-09-16T05:43:44.8850817Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-3498603219519512834
2026-09-16T05:43:44.8851571Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-750170190363952492
2026-09-16T05:43:44.8852138Z 2026/09/16 00:42:17 [DEBUG] Waiting for state to become: [IDLE]
2026-09-16T05:43:44.8853077Z 2026/09/16 00:45:17 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8853489Z 2026/09/16 00:46:17 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8853877Z 2026/09/16 00:46:28 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8854249Z 2026/09/16 00:47:28 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8854631Z 2026/09/16 00:47:38 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8854996Z 2026/09/16 00:48:39 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8855361Z 2026/09/16 00:48:49 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8855778Z 2026/09/16 00:49:50 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8856143Z 2026/09/16 00:50:00 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8856504Z 2026/09/16 00:51:00 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8856867Z 2026/09/16 00:51:11 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8857230Z 2026/09/16 00:52:11 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8857600Z 2026/09/16 00:52:21 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8857973Z 2026/09/16 00:53:22 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8858345Z 2026/09/16 00:53:32 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8859060Z 2026/09/16 00:54:32 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8859426Z 2026/09/16 00:54:43 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8859790Z 2026/09/16 00:55:43 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8860155Z 2026/09/16 00:55:54 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8860578Z 2026/09/16 00:56:54 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-16T05:43:44.8861014Z 2026/09/16 00:57:55 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8861389Z 2026/09/16 00:58:55 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8861755Z 2026/09/16 00:59:05 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8862122Z 2026/09/16 01:00:06 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8862490Z 2026/09/16 01:00:16 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8862857Z 2026/09/16 01:01:16 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8863222Z 2026/09/16 01:01:26 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8863598Z 2026/09/16 01:02:27 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8863969Z 2026/09/16 01:02:37 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8864335Z 2026/09/16 01:03:37 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8864701Z 2026/09/16 01:03:48 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8865085Z 2026/09/16 01:04:48 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8865485Z 2026/09/16 01:04:58 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8865871Z 2026/09/16 01:05:59 [TRACE] Waiting 10s before next try
2026-09-16T05:43:44.8866245Z 2026/09/16 01:06:09 [TRACE] Waiting 1m0s before next try
2026-09-16T05:43:44.8874411Z === CONT  TestAccSearchIndexAPI_basic
2026-09-16T05:43:44.8894150Z === NAME  TestAccSearchIndexAPI_basic
2026-09-16T05:43:44.8894659Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-09-16T05:43:44.8895068Z         
2026-09-16T05:43:44.8895421Z         Error: Error waiting for changes in Create
2026-09-16T05:43:44.8895896Z         
2026-09-16T05:43:44.8896261Z           with mongodbatlas_search_index_api.test,
2026-09-16T05:43:44.8896949Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-16T05:43:44.8897631Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-16T05:43:44.8897991Z         
2026-09-16T05:43:44.8898311Z         group_id="6aa9e5e4013d831ec44b342e",
2026-09-16T05:43:44.8898937Z         cluster_name="test-acc-tf-c-750170190363952492",
2026-09-16T05:43:44.8899532Z         index_id="6aa9ebbfbb07cf48936362a2": timeout while waiting for state to
2026-09-16T05:43:44.8900159Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-16T05:43:44.8900817Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-16T05:43:44.8901505Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-16T05:43:44.8901994Z --- FAIL: TestAccSearchIndexAPI_basic (12301.03s)
```

- 2026-09-17 PASS 49 minutes
- 2026-09-18

### Error 2026-09-18T05:16:19+00:00
```
2026-09-18T05:16:19.5387106Z === RUN   TestAccSearchIndexAPI_basic
2026-09-18T05:16:19.5387761Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-7522077135535964202
2026-09-18T05:16:19.5388389Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-3593569086852570367
2026-09-18T05:16:19.5388845Z 2026/09/18 00:42:10 [DEBUG] Waiting for state to become: [IDLE]
2026-09-18T05:16:19.5391317Z 2026/09/18 00:45:10 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5391677Z 2026/09/18 00:46:10 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5392003Z 2026/09/18 00:46:21 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5392314Z 2026/09/18 00:47:21 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5392642Z 2026/09/18 00:47:31 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5392970Z 2026/09/18 00:48:32 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5393305Z 2026/09/18 00:48:42 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5393809Z 2026/09/18 00:49:42 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5394129Z 2026/09/18 00:49:53 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5394484Z 2026/09/18 00:50:53 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5394810Z 2026/09/18 00:51:03 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5395131Z 2026/09/18 00:52:04 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5395468Z 2026/09/18 00:52:14 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5395793Z 2026/09/18 00:53:14 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5396124Z 2026/09/18 00:53:25 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5396452Z 2026/09/18 00:54:25 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5396779Z 2026/09/18 00:54:35 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5397109Z 2026/09/18 00:55:36 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5397604Z 2026/09/18 00:55:46 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5397933Z 2026/09/18 00:56:46 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5398262Z 2026/09/18 00:56:57 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5398589Z 2026/09/18 00:57:57 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5398921Z 2026/09/18 00:58:07 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5399282Z 2026/09/18 00:59:08 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-18T05:16:19.5399656Z 2026/09/18 01:00:08 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5399989Z 2026/09/18 01:01:09 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5400317Z 2026/09/18 01:01:19 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5400648Z 2026/09/18 01:02:19 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5400970Z 2026/09/18 01:02:29 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5401301Z 2026/09/18 01:03:30 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5401635Z 2026/09/18 01:03:40 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5401965Z 2026/09/18 01:04:40 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5402299Z 2026/09/18 01:04:50 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5402618Z 2026/09/18 01:05:51 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5402942Z 2026/09/18 01:06:01 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5403267Z 2026/09/18 01:07:01 [TRACE] Waiting 10s before next try
2026-09-18T05:16:19.5403741Z 2026/09/18 01:07:12 [TRACE] Waiting 1m0s before next try
2026-09-18T05:16:19.5410886Z === CONT  TestAccSearchIndexAPI_basic
2026-09-18T05:16:19.5483277Z === NAME  TestAccSearchIndexAPI_basic
2026-09-18T05:16:19.5483870Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-09-18T05:16:19.5484224Z         
2026-09-18T05:16:19.5484545Z         Error: Error waiting for changes in Create
2026-09-18T05:16:19.5484831Z         
2026-09-18T05:16:19.5485164Z           with mongodbatlas_search_index_api.test,
2026-09-18T05:16:19.5485801Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-18T05:16:19.5486393Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-18T05:16:19.5486701Z         
2026-09-18T05:16:19.5486989Z         group_id="6aac88de1bd5f998a1452f76",
2026-09-18T05:16:19.5487402Z         cluster_name="test-acc-tf-c-3593569086852570367",
2026-09-18T05:16:19.5487941Z         index_id="6aac8efdacef019a417be1f1": timeout while waiting for state to
2026-09-18T05:16:19.5488505Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-18T05:16:19.5489089Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-18T05:16:19.5489710Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-18T05:16:19.5497393Z   
2026-09-18T05:16:19.5504983Z --- FAIL: TestAccSearchIndexAPI_basic (12370.33s)
```

- 2026-09-19

### Error 2026-09-19T01:30:40+00:00
```
2026-09-19T01:30:40.9163203Z === RUN   TestAccSearchIndexAPI_basic
2026-09-19T01:30:40.9163715Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-6578953671564410125
2026-09-19T01:30:40.9164528Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-747364010231165921
2026-09-19T01:30:40.9164946Z 2026/09/19 00:41:28 [DEBUG] Waiting for state to become: [IDLE]
2026-09-19T01:30:40.9165501Z 2026/09/19 00:44:28 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9165818Z 2026/09/19 00:45:28 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9166134Z 2026/09/19 00:45:38 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9166441Z 2026/09/19 00:46:39 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9166738Z 2026/09/19 00:46:49 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9167031Z 2026/09/19 00:47:49 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9167322Z 2026/09/19 00:47:59 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9167627Z 2026/09/19 00:49:00 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9167936Z 2026/09/19 00:49:10 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9168230Z 2026/09/19 00:50:10 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9168516Z 2026/09/19 00:50:20 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9168806Z 2026/09/19 00:51:21 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9169101Z 2026/09/19 00:51:31 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9169390Z 2026/09/19 00:52:31 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9169679Z 2026/09/19 00:52:41 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9169966Z 2026/09/19 00:53:42 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9170255Z 2026/09/19 00:53:52 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9170544Z 2026/09/19 00:54:52 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9170830Z 2026/09/19 00:55:02 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9171159Z 2026/09/19 00:56:03 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-19T01:30:40.9173123Z 2026/09/19 00:57:03 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9173558Z 2026/09/19 00:58:03 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9173982Z 2026/09/19 00:58:13 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9174589Z 2026/09/19 00:59:13 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9175039Z 2026/09/19 00:59:24 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9175451Z 2026/09/19 01:00:24 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9175851Z 2026/09/19 01:00:34 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9176266Z 2026/09/19 01:01:34 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9176580Z 2026/09/19 01:01:44 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9176883Z 2026/09/19 01:02:45 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9177183Z 2026/09/19 01:02:55 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9177484Z 2026/09/19 01:03:55 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9177774Z 2026/09/19 01:04:05 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9178061Z 2026/09/19 01:05:05 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9178350Z 2026/09/19 01:05:15 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9178636Z 2026/09/19 01:06:16 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9178930Z 2026/09/19 01:06:26 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9179221Z 2026/09/19 01:07:26 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9179512Z 2026/09/19 01:07:36 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9179819Z 2026/09/19 01:08:36 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9180121Z 2026/09/19 01:08:46 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9180414Z 2026/09/19 01:09:47 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9180701Z 2026/09/19 01:09:57 [TRACE] Waiting 1m0s before next try
2026-09-19T01:30:40.9180992Z 2026/09/19 01:10:57 [TRACE] Waiting 10s before next try
2026-09-19T01:30:40.9181297Z 2026/09/19 01:11:03 [WARN] WaitForState timeout after 15m0s
2026-09-19T01:30:40.9181654Z 2026/09/19 01:11:03 [WARN] WaitForState starting 30s refresh grace period
2026-09-19T01:30:40.9182013Z     resource_test.go:22: 
2026-09-19T01:30:40.9183560Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:30:40.9185516Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-09-19T01:30:40.9186186Z         	Error:      	Received unexpected error:
2026-09-19T01:30:40.9186985Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:30:40.9187480Z         	Test:       	TestAccSearchIndexAPI_basic
2026-09-19T01:30:40.9187779Z --- FAIL: TestAccSearchIndexAPI_basic (1777.58s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS an hour
- 2026-09-22
  - FAIL 3 hours

### Error 2026-09-22T05:06:24+00:00
```
2026-09-22T05:06:24.3100207Z === RUN   TestAccSearchIndexAPI_basic
2026-09-22T05:06:24.3102795Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-6268219262780341492
2026-09-22T05:06:24.3103523Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-1242047262187896326
2026-09-22T05:06:24.3104188Z 2026/09/22 00:44:04 [DEBUG] Waiting for state to become: [IDLE]
2026-09-22T05:06:24.3106405Z 2026/09/22 00:47:04 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3106841Z 2026/09/22 00:48:05 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3107210Z 2026/09/22 00:48:15 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3107584Z 2026/09/22 00:49:15 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3107955Z 2026/09/22 00:49:25 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3108300Z 2026/09/22 00:50:25 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3108650Z 2026/09/22 00:50:36 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3108989Z 2026/09/22 00:51:36 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3109349Z 2026/09/22 00:51:46 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3109690Z 2026/09/22 00:52:46 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3110031Z 2026/09/22 00:52:57 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3110375Z 2026/09/22 00:53:57 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3110717Z 2026/09/22 00:54:07 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3111058Z 2026/09/22 00:55:07 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3111399Z 2026/09/22 00:55:17 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3111740Z 2026/09/22 00:56:18 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3112086Z 2026/09/22 00:56:28 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3112432Z 2026/09/22 00:57:28 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3112783Z 2026/09/22 00:57:38 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3113141Z 2026/09/22 00:58:39 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3113611Z 2026/09/22 00:58:49 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3114124Z 2026/09/22 00:59:49 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3114456Z 2026/09/22 00:59:59 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3114810Z 2026/09/22 01:01:00 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3115216Z 2026/09/22 01:01:10 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3115614Z 2026/09/22 01:02:10 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-22T05:06:24.3116024Z 2026/09/22 01:03:10 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3116379Z 2026/09/22 01:04:10 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3116710Z 2026/09/22 01:04:21 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3117061Z 2026/09/22 01:05:21 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3117420Z 2026/09/22 01:05:31 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3117786Z 2026/09/22 01:06:31 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3118107Z 2026/09/22 01:06:41 [TRACE] Waiting 1m0s before next try
2026-09-22T05:06:24.3118405Z 2026/09/22 01:07:42 [TRACE] Waiting 10s before next try
2026-09-22T05:06:24.3126154Z === CONT  TestAccSearchIndexAPI_basic
2026-09-22T05:06:24.3165592Z === NAME  TestAccSearchIndexAPI_basic
2026-09-22T05:06:24.3166413Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-09-22T05:06:24.3166813Z         
2026-09-22T05:06:24.3167154Z         Error: Error waiting for changes in Create
2026-09-22T05:06:24.3167468Z         
2026-09-22T05:06:24.3167829Z           with mongodbatlas_search_index_api.test,
2026-09-22T05:06:24.3168476Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-22T05:06:24.3169172Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-22T05:06:24.3169496Z         
2026-09-22T05:06:24.3169790Z         group_id="6ab1cf51a17d32e660138f1d",
2026-09-22T05:06:24.3170228Z         cluster_name="test-acc-tf-c-1242047262187896326",
2026-09-22T05:06:24.3170774Z         index_id="6ab1d4e9ce34027299e11845": timeout while waiting for state to
2026-09-22T05:06:24.3171332Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-22T05:06:24.3171931Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-22T05:06:24.3172575Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-22T05:06:24.3173019Z --- FAIL: TestAccSearchIndexAPI_basic (12234.51s)
```

  - PASS an hour
- 2026-09-23 SKIP unknown
- 2026-09-24 SKIP unknown
- 2026-09-25 SKIP unknown
- 2026-09-26 SKIP unknown
- 2026-09-27: MISSING
- 2026-09-28 SKIP unknown
- 2026-09-29 SKIP unknown
- 2026-09-30 SKIP unknown
- 2026-10-01 SKIP unknown
- 2026-10-02 SKIP unknown

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 49 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 43 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 45 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 32 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 SKIP unknown
- 2026-09-28: MISSING
- 2026-09-29 SKIP unknown
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
