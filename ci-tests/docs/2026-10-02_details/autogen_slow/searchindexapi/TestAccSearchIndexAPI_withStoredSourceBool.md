# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceBool Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, FAIL(x 16) SKIP(x 11) PASS(x 6) TIMEOUT(x 4)
Success rate: 23.08%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-02 04:59](#error-2026-09-02t0459000000) |  | dev | timeout | 13602.05s
[2026-09-03 05:44](#error-2026-09-03t0544170000) |  | dev |  | 16859.00s
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 10805.07s
[2026-09-05 04:57](#error-2026-09-05t0457170000) |  | dev | timeout | 10804.03s
[2026-09-07 05:48](#error-2026-09-07t0548170000) |  | dev |  | 16777.00s
[2026-09-07 17:14](#error-2026-09-07t1714300000) |  | dev | timeout | 13566.09s
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 10803.02s
[2026-09-09 04:45](#error-2026-09-09t0445050000) |  | dev | timeout | 12482.07s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 0.00s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s
[2026-09-12 04:54](#error-2026-09-12t0454110000) |  | dev | timeout | 13527.09s
[2026-09-14 05:47](#error-2026-09-14t0547030000) |  | dev | timeout | 12651.09s
[2026-09-15 05:43](#error-2026-09-15t0543500000) |  | dev |  | 16932.00s
[2026-09-16 05:43](#error-2026-09-16t0543440000) |  | dev | timeout | 13098.08s
[2026-09-18 05:16](#error-2026-09-18t0516190000) |  | dev | timeout | 10803.02s
[2026-09-19 01:30](#error-2026-09-19t0130400000) |  | dev | timeout | 0.00s
[2026-09-21 05:48](#error-2026-09-21t0548450000) |  | dev |  | 17003.00s
[2026-09-22 05:06](#error-2026-09-22t0506240000) |  | dev | timeout | 10805.02s
[2026-09-22 12:46](#error-2026-09-22t1246470000) |  | dev | timeout | 14048.04s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02

### Error 2026-09-02T04:59:00+00:00
```
2026-09-02T04:59:00.1913765Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-02T04:59:00.1924935Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-02T04:59:00.2095378Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-02T04:59:00.2095934Z     resource_test.go:162: Step 2/2 error: Error running apply: exit status 1
2026-09-02T04:59:00.2096354Z         
2026-09-02T04:59:00.2096706Z         Error: Error waiting for changes in Update
2026-09-02T04:59:00.2097042Z         
2026-09-02T04:59:00.2097417Z           with mongodbatlas_search_index_api.test,
2026-09-02T04:59:00.2098137Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-02T04:59:00.2098812Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-02T04:59:00.2099173Z         
2026-09-02T04:59:00.2099495Z         group_id="6a97712e7f32ed5349f9c310",
2026-09-02T04:59:00.2099959Z         cluster_name="test-acc-tf-c-3797371471604204812",
2026-09-02T04:59:00.2100867Z         index_id="6a97767379ec95325857a119": timeout while waiting for state to
2026-09-02T04:59:00.2101523Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-02T04:59:00.2102024Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (13602.49s)
```

- 2026-09-03
  - TIMEOUT 4 hours

### Error 2026-09-03T05:44:17+00:00
```
2026-09-03T05:44:17.7102914Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-03T05:44:17.7112320Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-03T05:44:17.7247736Z panic: test timed out after 5h0m0s
2026-09-03T05:44:17.7248208Z 	running tests:
2026-09-03T05:44:17.7248761Z 		TestAccSearchIndexAPI_withStoredSourceBool (4h40m59s)
```

  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0690632Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-03T10:02:47.0696337Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-03T10:02:47.0821418Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-03T10:02:47.0822005Z     resource_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-09-03T10:02:47.0822443Z         
2026-09-03T10:02:47.0822825Z         Error: Error waiting for changes in Create
2026-09-03T10:02:47.0823190Z         
2026-09-03T10:02:47.0823589Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0824351Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0825076Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0825477Z         
2026-09-03T10:02:47.0825815Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0826302Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0827074Z         index_id="6a99189a72d7295ca9908e51": timeout while waiting for state to
2026-09-03T10:02:47.0827738Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0828436Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-03T10:02:47.0829379Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-03T10:02:47.0830413Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (10805.66s)
```

- 2026-09-04 PASS an hour
- 2026-09-05

### Error 2026-09-05T04:57:17+00:00
```
2026-09-05T04:57:17.6506081Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-05T04:57:17.6512227Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-05T04:57:17.6552175Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-05T04:57:17.6552788Z     resource_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-09-05T04:57:17.6553492Z         
2026-09-05T04:57:17.6553894Z         Error: Error waiting for changes in Create
2026-09-05T04:57:17.6554293Z         
2026-09-05T04:57:17.6554696Z           with mongodbatlas_search_index_api.test,
2026-09-05T04:57:17.6555408Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-05T04:57:17.6556022Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-05T04:57:17.6556577Z         
2026-09-05T04:57:17.6556966Z         group_id="6a9b652f1099178350983b6f",
2026-09-05T04:57:17.6557476Z         cluster_name="test-acc-tf-c-2329868758960774626",
2026-09-05T04:57:17.6558061Z         index_id="6a9b69e9e6eed86290f4e1e9": timeout while waiting for state to
2026-09-05T04:57:17.6558649Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-05T04:57:17.6559261Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-05T04:57:17.6559959Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-05T04:57:17.6560537Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (10804.31s)
```

- 2026-09-06: MISSING
- 2026-09-07
  - TIMEOUT 4 hours

### Error 2026-09-07T05:48:17+00:00
```
2026-09-07T05:48:17.9810967Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-07T05:48:17.9818050Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-07T05:48:17.9942882Z panic: test timed out after 5h0m0s
2026-09-07T05:48:17.9943407Z 	running tests:
2026-09-07T05:48:17.9944013Z 		TestAccSearchIndexAPI_withStoredSourceBool (4h39m37s)
```

  - FAIL 3 hours

### Error 2026-09-07T17:14:30+00:00
```
2026-09-07T17:14:30.4728278Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-07T17:14:30.4739803Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-07T17:14:30.4909155Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-07T17:14:30.4909824Z     resource_test.go:162: Step 2/2 error: Error running apply: exit status 1
2026-09-07T17:14:30.4910333Z         
2026-09-07T17:14:30.4910703Z         Error: Error waiting for changes in Update
2026-09-07T17:14:30.4911196Z         
2026-09-07T17:14:30.4911569Z           with mongodbatlas_search_index_api.test,
2026-09-07T17:14:30.4912441Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-07T17:14:30.4913428Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-07T17:14:30.4914008Z         
2026-09-07T17:14:30.4914348Z         group_id="6a9eaaa643d6e4ba6d1eae49",
2026-09-07T17:14:30.4914996Z         cluster_name="test-acc-tf-c-536976955874991021",
2026-09-07T17:14:30.4915628Z         index_id="6a9eafa6ff4aa12cb9ba0f9b": timeout while waiting for state to
2026-09-07T17:14:30.4916461Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-07T17:14:30.4917115Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (13566.94s)
```

- 2026-09-08

### Error 2026-09-08T05:00:43+00:00
```
2026-09-08T05:00:43.6865745Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-08T05:00:43.6874814Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-08T05:00:43.6941618Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-08T05:00:43.6942198Z     resource_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-09-08T05:00:43.6942629Z         
2026-09-08T05:00:43.6942982Z         Error: Error waiting for changes in Create
2026-09-08T05:00:43.6943310Z         
2026-09-08T05:00:43.6943665Z           with mongodbatlas_search_index_api.test,
2026-09-08T05:00:43.6944379Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-08T05:00:43.6945060Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-08T05:00:43.6945419Z         
2026-09-08T05:00:43.6945738Z         group_id="6a9f5a9228da0e5fc08e7890",
2026-09-08T05:00:43.6946201Z         cluster_name="test-acc-tf-c-4534713065942648190",
2026-09-08T05:00:43.6946807Z         index_id="6a9f5f929d794e9a744e62e7": timeout while waiting for state to
2026-09-08T05:00:43.6947442Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-08T05:00:43.6948110Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-08T05:00:43.6948826Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-08T05:00:43.6949370Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (10803.19s)
```

- 2026-09-09

### Error 2026-09-09T04:45:05+00:00
```
2026-09-09T04:45:05.5395678Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-09T04:45:05.5406843Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-09T04:45:05.5554932Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-09T04:45:05.5555923Z     resource_test.go:162: Step 2/2 error: Error running apply: exit status 1
2026-09-09T04:45:05.5556655Z         
2026-09-09T04:45:05.5557263Z         Error: Error waiting for changes in Update
2026-09-09T04:45:05.5557825Z         
2026-09-09T04:45:05.5558450Z           with mongodbatlas_search_index_api.test,
2026-09-09T04:45:05.5560005Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-09T04:45:05.5561262Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-09T04:45:05.5561889Z         
2026-09-09T04:45:05.5562461Z         group_id="6aa0abadf33137a6ca4829f0",
2026-09-09T04:45:05.5563372Z         cluster_name="test-acc-tf-c-1622242972829995596",
2026-09-09T04:45:05.5564468Z         index_id="6aa0b0f5567d318b5305b395": timeout while waiting for state to
2026-09-09T04:45:05.5565574Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-09T04:45:05.5566443Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (12482.68s)
```

- 2026-09-10

### Error 2026-09-10T01:33:06+00:00
```
2026-09-10T01:33:06.1315002Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-10T01:33:06.1315511Z     resource_test.go:159: 
2026-09-10T01:33:06.1316511Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T01:33:06.1318731Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:159
2026-09-10T01:33:06.1319571Z         	Error:      	Received unexpected error:
2026-09-10T01:33:06.1320855Z         	            	sample dataset load 6aa201365b8d9510e89370dd failed for cluster 6aa1fcb04ab31ba34525537f:test-acc-tf-c-1596466085034706675
2026-09-10T01:33:06.1328789Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceBool
2026-09-10T01:33:06.1329293Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (0.00s)
```

- 2026-09-11
  - FAIL unknown

### Error 2026-09-11T03:01:53+00:00
```
2026-09-11T03:01:53.1637288Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-11T03:01:53.1637600Z     resource_test.go:159: 
2026-09-11T03:01:53.1638358Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T03:01:53.1639883Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:159
2026-09-11T03:01:53.1640518Z         	Error:      	Received unexpected error:
2026-09-11T03:01:53.1641316Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-11T03:01:53.1641848Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceBool
2026-09-11T03:01:53.1642207Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (0.00s)
```

  - FAIL unknown

### Error 2026-09-11T07:31:03+00:00
```
2026-09-11T07:31:03.2014950Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-11T07:31:03.2015535Z     resource_test.go:159: 
2026-09-11T07:31:03.2016923Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:31:03.2019735Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:159
2026-09-11T07:31:03.2021097Z         	Error:      	Received unexpected error:
2026-09-11T07:31:03.2022972Z         	            	sample dataset load 6aa3a5fff7fcc4bbebf76935 failed for cluster 6aa3a28df7fcc4bbebf53df1:test-acc-tf-c-1260780199030207545
2026-09-11T07:31:03.2024234Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceBool
2026-09-11T07:31:03.2025182Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (0.00s)
```

- 2026-09-12

### Error 2026-09-12T04:54:11+00:00
```
2026-09-12T04:54:11.5070554Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-12T04:54:11.5075532Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-12T04:54:11.5116106Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-12T04:54:11.5116692Z     resource_test.go:162: Step 2/2 error: Error running apply: exit status 1
2026-09-12T04:54:11.5117116Z         
2026-09-12T04:54:11.5117478Z         Error: Error waiting for changes in Update
2026-09-12T04:54:11.5117809Z         
2026-09-12T04:54:11.5118212Z           with mongodbatlas_search_index_api.test,
2026-09-12T04:54:11.5119145Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-12T04:54:11.5119827Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-12T04:54:11.5120193Z         
2026-09-12T04:54:11.5120517Z         group_id="6aa49fd27423f4722c01b542",
2026-09-12T04:54:11.5120983Z         cluster_name="test-acc-tf-c-8210674005052258226",
2026-09-12T04:54:11.5121592Z         index_id="6aa4a4047423f4722c038c3c": timeout while waiting for state to
2026-09-12T04:54:11.5122231Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-12T04:54:11.5134793Z   
2026-09-12T04:54:11.5142037Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (13527.95s)
```

- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T05:47:03+00:00
```
2026-09-14T05:47:03.7440101Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-14T05:47:03.7446985Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-14T05:47:03.7595517Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-14T05:47:03.7596360Z     resource_test.go:162: Step 2/2 error: Error running apply: exit status 1
2026-09-14T05:47:03.7596791Z         
2026-09-14T05:47:03.7597148Z         Error: Error waiting for changes in Update
2026-09-14T05:47:03.7597477Z         
2026-09-14T05:47:03.7597835Z           with mongodbatlas_search_index_api.test,
2026-09-14T05:47:03.7598558Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-14T05:47:03.7599248Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-14T05:47:03.7599603Z         
2026-09-14T05:47:03.7599931Z         group_id="6aa74408d4e2b0ecbd5a8aa3",
2026-09-14T05:47:03.7600513Z         cluster_name="test-acc-tf-c-1429233515179452221",
2026-09-14T05:47:03.7601126Z         index_id="6aa7483aaf6488f3aa98b78d": timeout while waiting for state to
2026-09-14T05:47:03.7601769Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-14T05:47:03.7602267Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (12651.87s)
```

- 2026-09-15

### Error 2026-09-15T05:43:50+00:00
```
2026-09-15T05:43:50.3092345Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-15T05:43:50.3099190Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-15T05:43:50.3276456Z panic: test timed out after 5h0m0s
2026-09-15T05:43:50.3276764Z 	running tests:
2026-09-15T05:43:50.3277217Z 		TestAccSearchIndexAPI_withStoredSourceBool (4h42m12s)
```

- 2026-09-16

### Error 2026-09-16T05:43:44+00:00
```
2026-09-16T05:43:44.8871772Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-16T05:43:44.8875960Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-16T05:43:44.8942931Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-16T05:43:44.8943502Z     resource_test.go:162: Step 2/2 error: Error running apply: exit status 1
2026-09-16T05:43:44.8943917Z         
2026-09-16T05:43:44.8944275Z         Error: Error waiting for changes in Update
2026-09-16T05:43:44.8944608Z         
2026-09-16T05:43:44.8944972Z           with mongodbatlas_search_index_api.test,
2026-09-16T05:43:44.8945671Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-16T05:43:44.8946341Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-16T05:43:44.8946705Z         
2026-09-16T05:43:44.8947036Z         group_id="6aa9e5e4013d831ec44b342e",
2026-09-16T05:43:44.8947490Z         cluster_name="test-acc-tf-c-750170190363952492",
2026-09-16T05:43:44.8948093Z         index_id="6aa9ebbfbb07cf48936362aa": timeout while waiting for state to
2026-09-16T05:43:44.8948996Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-16T05:43:44.8960952Z   
2026-09-16T05:43:44.8968365Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (13098.79s)
```

- 2026-09-17 PASS 58 minutes
- 2026-09-18

### Error 2026-09-18T05:16:19+00:00
```
2026-09-18T05:16:19.5408611Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-18T05:16:19.5412638Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-18T05:16:19.5427692Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-18T05:16:19.5428178Z     resource_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-09-18T05:16:19.5428636Z         
2026-09-18T05:16:19.5428954Z         Error: Error waiting for changes in Create
2026-09-18T05:16:19.5429239Z         
2026-09-18T05:16:19.5429566Z           with mongodbatlas_search_index_api.test,
2026-09-18T05:16:19.5430191Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-18T05:16:19.5430781Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-18T05:16:19.5431091Z         
2026-09-18T05:16:19.5431381Z         group_id="6aac88de1bd5f998a1452f76",
2026-09-18T05:16:19.5431784Z         cluster_name="test-acc-tf-c-3593569086852570367",
2026-09-18T05:16:19.5432312Z         index_id="6aac8efdacef019a417be1f3": timeout while waiting for state to
2026-09-18T05:16:19.5432865Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-18T05:16:19.5433448Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-18T05:16:19.5434161Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-18T05:16:19.5434607Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (10803.19s)
```

- 2026-09-19

### Error 2026-09-19T01:30:40+00:00
```
2026-09-19T01:30:40.9215608Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-19T01:30:40.9215912Z     resource_test.go:159: 
2026-09-19T01:30:40.9216651Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:30:40.9218108Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:159
2026-09-19T01:30:40.9218850Z         	Error:      	Received unexpected error:
2026-09-19T01:30:40.9219624Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:30:40.9220143Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceBool
2026-09-19T01:30:40.9220504Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21

### Error 2026-09-21T05:48:45+00:00
```
2026-09-21T05:48:45.1966074Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-21T05:48:45.1975147Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-21T05:48:45.2196246Z panic: test timed out after 5h0m0s
2026-09-21T05:48:45.2196717Z 	running tests:
2026-09-21T05:48:45.2197267Z 		TestAccSearchIndexAPI_withStoredSourceBool (4h43m23s)
```

- 2026-09-22
  - FAIL 3 hours

### Error 2026-09-22T05:06:24+00:00
```
2026-09-22T05:06:24.3123451Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-22T05:06:24.3128645Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-22T05:06:24.3186322Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-22T05:06:24.3186828Z     resource_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-09-22T05:06:24.3187218Z         
2026-09-22T05:06:24.3187558Z         Error: Error waiting for changes in Create
2026-09-22T05:06:24.3187871Z         
2026-09-22T05:06:24.3188221Z           with mongodbatlas_search_index_api.test,
2026-09-22T05:06:24.3188864Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-22T05:06:24.3189496Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-22T05:06:24.3189817Z         
2026-09-22T05:06:24.3190102Z         group_id="6ab1cf51a17d32e660138f1d",
2026-09-22T05:06:24.3190519Z         cluster_name="test-acc-tf-c-1242047262187896326",
2026-09-22T05:06:24.3191193Z         index_id="6ab1d4e9ce34027299e11835": timeout while waiting for state to
2026-09-22T05:06:24.3191752Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-22T05:06:24.3192349Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-22T05:06:24.3192978Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-22T05:06:24.3193474Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (10805.22s)
```

  - FAIL 3 hours

### Error 2026-09-22T12:46:47+00:00
```
2026-09-22T12:46:47.9748152Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-22T12:46:47.9758839Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-22T12:46:48.0048070Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-22T12:46:48.0049071Z     resource_test.go:162: Step 2/2 error: Error running apply: exit status 1
2026-09-22T12:46:48.0050020Z         
2026-09-22T12:46:48.0050657Z         Error: Error waiting for changes in Update
2026-09-22T12:46:48.0051234Z         
2026-09-22T12:46:48.0051885Z           with mongodbatlas_search_index_api.test,
2026-09-22T12:46:48.0053469Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-22T12:46:48.0054684Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-22T12:46:48.0055301Z         
2026-09-22T12:46:48.0055868Z         group_id="6ab23b4fd135efc1a7edf95a",
2026-09-22T12:46:48.0056682Z         cluster_name="test-acc-tf-c-7202313398832200026",
2026-09-22T12:46:48.0057686Z         index_id="6ab24122d0fd092caf984fab": timeout while waiting for state to
2026-09-22T12:46:48.0058737Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-22T12:46:48.0059591Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (14048.43s)
```

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
- 2026-09-06 PASS an hour
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS an hour
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS an hour
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 59 minutes
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
