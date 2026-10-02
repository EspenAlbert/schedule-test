# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, FAIL(x 18) SKIP(x 11) PASS(x 6) TIMEOUT(x 2)
Success rate: 23.08%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-02 04:59](#error-2026-09-02t0459000000) |  | dev | timeout | 11361.09s
[2026-09-03 05:44](#error-2026-09-03t0544170000) |  | dev | timeout | 14164.03s
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 11272.03s
[2026-09-05 04:57](#error-2026-09-05t0457170000) |  | dev | timeout | 13965.02s
[2026-09-07 05:48](#error-2026-09-07t0548170000) |  | dev | timeout | 10803.09s
[2026-09-07 17:14](#error-2026-09-07t1714300000) |  | dev |  | 16721.00s
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 12838.09s
[2026-09-09 04:45](#error-2026-09-09t0445050000) |  | dev | timeout | 10804.09s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 0.00s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s
[2026-09-12 04:54](#error-2026-09-12t0454110000) |  | dev | timeout | 13890.07s
[2026-09-14 05:47](#error-2026-09-14t0547030000) |  | dev |  | 16927.00s
[2026-09-15 05:43](#error-2026-09-15t0543500000) |  | dev | timeout | 10804.02s
[2026-09-16 05:43](#error-2026-09-16t0543440000) |  | dev | timeout | 16299.02s
[2026-09-18 05:16](#error-2026-09-18t0516190000) |  | dev | timeout | 14591.04s
[2026-09-19 01:30](#error-2026-09-19t0130400000) |  | dev | timeout | 0.00s
[2026-09-21 05:48](#error-2026-09-21t0548450000) |  | dev | timeout | 10803.02s
[2026-09-22 05:06](#error-2026-09-22t0506240000) |  | dev | timeout | 14129.03s
[2026-09-22 12:46](#error-2026-09-22t1246470000) |  | dev | timeout | 10805.04s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02

### Error 2026-09-02T04:59:00+00:00
```
2026-09-02T04:59:00.1908807Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-02T04:59:00.1920105Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-02T04:59:00.2076088Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-02T04:59:00.2076689Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-09-02T04:59:00.2077106Z         
2026-09-02T04:59:00.2077593Z         Error: Error waiting for changes in Update
2026-09-02T04:59:00.2077922Z         
2026-09-02T04:59:00.2078287Z           with mongodbatlas_search_index_api.test,
2026-09-02T04:59:00.2079006Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-02T04:59:00.2079686Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-02T04:59:00.2080043Z         
2026-09-02T04:59:00.2080554Z         group_id="6a97712e7f32ed5349f9c310",
2026-09-02T04:59:00.2081117Z         cluster_name="test-acc-tf-c-3797371471604204812",
2026-09-02T04:59:00.2081733Z         index_id="6a97767379ec95325857a12b": timeout while waiting for state to
2026-09-02T04:59:00.2082371Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-02T04:59:00.2082899Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (11361.89s)
```

- 2026-09-03
  - FAIL 3 hours

### Error 2026-09-03T05:44:17+00:00
```
2026-09-03T05:44:17.7098649Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-03T05:44:17.7108156Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-03T05:44:17.7205140Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-03T05:44:17.7206088Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-09-03T05:44:17.7206719Z         
2026-09-03T05:44:17.7207271Z         Error: Error waiting for changes in Update
2026-09-03T05:44:17.7207795Z         
2026-09-03T05:44:17.7208348Z           with mongodbatlas_search_index_api.test,
2026-09-03T05:44:17.7209480Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T05:44:17.7210575Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T05:44:17.7211318Z         
2026-09-03T05:44:17.7211830Z         group_id="6a98c2e18c6ee76bb0d54be9",
2026-09-03T05:44:17.7212761Z         cluster_name="test-acc-tf-c-5646429399751727716",
2026-09-03T05:44:17.7213768Z         index_id="6a98c757c4c2ba86c180a1ec": timeout while waiting for state to
2026-09-03T05:44:17.7214828Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-03T05:44:17.7215689Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (14164.31s)
```

  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0687405Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-03T10:02:47.0694268Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-03T10:02:47.0907170Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-03T10:02:47.0908258Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-09-03T10:02:47.0908989Z         
2026-09-03T10:02:47.0909878Z         Error: Error waiting for changes in Update
2026-09-03T10:02:47.0910453Z         
2026-09-03T10:02:47.0911072Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0912367Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0913586Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0914230Z         
2026-09-03T10:02:47.0914811Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0915686Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0917014Z         index_id="6a99189a72d7295ca9908e3e": timeout while waiting for state to
2026-09-03T10:02:47.0918239Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0920706Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (11272.30s)
```

- 2026-09-04 PASS an hour
- 2026-09-05

### Error 2026-09-05T04:57:17+00:00
```
2026-09-05T04:57:17.6503062Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-05T04:57:17.6510656Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-05T04:57:17.6609521Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-05T04:57:17.6610061Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-09-05T04:57:17.6610533Z         
2026-09-05T04:57:17.6610935Z         Error: Error waiting for changes in Update
2026-09-05T04:57:17.6611319Z         
2026-09-05T04:57:17.6611724Z           with mongodbatlas_search_index_api.test,
2026-09-05T04:57:17.6612432Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-05T04:57:17.6613063Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-05T04:57:17.6613694Z         
2026-09-05T04:57:17.6614073Z         group_id="6a9b652f1099178350983b6f",
2026-09-05T04:57:17.6614597Z         cluster_name="test-acc-tf-c-2329868758960774626",
2026-09-05T04:57:17.6615184Z         index_id="6a9b69e9e6eed86290f4e1f4": timeout while waiting for state to
2026-09-05T04:57:17.6615812Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-05T04:57:17.6616329Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (13965.21s)
```

- 2026-09-06: MISSING
- 2026-09-07
  - FAIL 3 hours

### Error 2026-09-07T05:48:17+00:00
```
2026-09-07T05:48:17.9807966Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-07T05:48:17.9814813Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-07T05:48:17.9887317Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-07T05:48:17.9887925Z     resource_test.go:96: Step 1/2 error: Error running apply: exit status 1
2026-09-07T05:48:17.9888337Z         
2026-09-07T05:48:17.9888689Z         Error: Error waiting for changes in Create
2026-09-07T05:48:17.9889020Z         
2026-09-07T05:48:17.9889382Z           with mongodbatlas_search_index_api.test,
2026-09-07T05:48:17.9890414Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-07T05:48:17.9891125Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-07T05:48:17.9891494Z         
2026-09-07T05:48:17.9891814Z         group_id="6a9e09d2ce994148d59e6659",
2026-09-07T05:48:17.9892277Z         cluster_name="test-acc-tf-c-1313053707861581472",
2026-09-07T05:48:17.9892884Z         index_id="6a9e0e9ae6eed862900fdc20": timeout while waiting for state to
2026-09-07T05:48:17.9893522Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-07T05:48:17.9894193Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-07T05:48:17.9894900Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-07T05:48:17.9895474Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (10803.94s)
```

  - TIMEOUT 4 hours

### Error 2026-09-07T17:14:30+00:00
```
2026-09-07T17:14:30.4723599Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-07T17:14:30.4734563Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-07T17:14:30.4917557Z panic: test timed out after 5h0m0s
2026-09-07T17:14:30.4917866Z 	running tests:
2026-09-07T17:14:30.4918420Z 		TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (4h38m41s)
```

- 2026-09-08

### Error 2026-09-08T05:00:43+00:00
```
2026-09-08T05:00:43.6863111Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-08T05:00:43.6871452Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-08T05:00:43.7035290Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-08T05:00:43.7035911Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-09-08T05:00:43.7036386Z         
2026-09-08T05:00:43.7036745Z         Error: Error waiting for changes in Update
2026-09-08T05:00:43.7037074Z         
2026-09-08T05:00:43.7037435Z           with mongodbatlas_search_index_api.test,
2026-09-08T05:00:43.7038143Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-08T05:00:43.7038825Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-08T05:00:43.7039178Z         
2026-09-08T05:00:43.7039494Z         group_id="6a9f5a9228da0e5fc08e7890",
2026-09-08T05:00:43.7040264Z         cluster_name="test-acc-tf-c-4534713065942648190",
2026-09-08T05:00:43.7040887Z         index_id="6a9f5f9228da0e5fc0901b51": timeout while waiting for state to
2026-09-08T05:00:43.7041540Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-08T05:00:43.7042076Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (12838.92s)
```

- 2026-09-09

### Error 2026-09-09T04:45:05+00:00
```
2026-09-09T04:45:05.5391291Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-09T04:45:05.5401920Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-09T04:45:05.5518359Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-09T04:45:05.5519405Z     resource_test.go:96: Step 1/2 error: Error running apply: exit status 1
2026-09-09T04:45:05.5520464Z         
2026-09-09T04:45:05.5521132Z         Error: Error waiting for changes in Create
2026-09-09T04:45:05.5521713Z         
2026-09-09T04:45:05.5523129Z           with mongodbatlas_search_index_api.test,
2026-09-09T04:45:05.5524434Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-09T04:45:05.5525676Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-09T04:45:05.5526305Z         
2026-09-09T04:45:05.5526875Z         group_id="6aa0abadf33137a6ca4829f0",
2026-09-09T04:45:05.5527700Z         cluster_name="test-acc-tf-c-1622242972829995596",
2026-09-09T04:45:05.5528729Z         index_id="6aa0b0f5567d318b5305b3a2": timeout while waiting for state to
2026-09-09T04:45:05.5530039Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-09T04:45:05.5531416Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-09T04:45:05.5532635Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-09T04:45:05.5533551Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (10804.93s)
```

- 2026-09-10

### Error 2026-09-10T01:33:06+00:00
```
2026-09-10T01:33:06.1292519Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-10T01:33:06.1292949Z     resource_test.go:93: 
2026-09-10T01:33:06.1294107Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T01:33:06.1296112Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:93
2026-09-10T01:33:06.1296948Z         	Error:      	Received unexpected error:
2026-09-10T01:33:06.1298447Z         	            	sample dataset load 6aa201365b8d9510e89370dd failed for cluster 6aa1fcb04ab31ba34525537f:test-acc-tf-c-1596466085034706675
2026-09-10T01:33:06.1299307Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-10T01:33:06.1299842Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (0.00s)
```

- 2026-09-11
  - FAIL unknown

### Error 2026-09-11T03:01:53+00:00
```
2026-09-11T03:01:53.1620653Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-11T03:01:53.1620986Z     resource_test.go:93: 
2026-09-11T03:01:53.1621760Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T03:01:53.1623275Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:93
2026-09-11T03:01:53.1624026Z         	Error:      	Received unexpected error:
2026-09-11T03:01:53.1624845Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-11T03:01:53.1625422Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-11T03:01:53.1625828Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (0.00s)
```

  - FAIL unknown

### Error 2026-09-11T07:31:03+00:00
```
2026-09-11T07:31:03.1980873Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-11T07:31:03.1981612Z     resource_test.go:93: 
2026-09-11T07:31:03.1983161Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:31:03.1985803Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:93
2026-09-11T07:31:03.1987184Z         	Error:      	Received unexpected error:
2026-09-11T07:31:03.1989103Z         	            	sample dataset load 6aa3a5fff7fcc4bbebf76935 failed for cluster 6aa3a28df7fcc4bbebf53df1:test-acc-tf-c-1260780199030207545
2026-09-11T07:31:03.1990589Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-11T07:31:03.1991472Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (0.00s)
```

- 2026-09-12

### Error 2026-09-12T04:54:11+00:00
```
2026-09-12T04:54:11.5067523Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-12T04:54:11.5074180Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-12T04:54:11.5155201Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-12T04:54:11.5155791Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-09-12T04:54:11.5156211Z         
2026-09-12T04:54:11.5156568Z         Error: Error waiting for changes in Update
2026-09-12T04:54:11.5156905Z         
2026-09-12T04:54:11.5157268Z           with mongodbatlas_search_index_api.test,
2026-09-12T04:54:11.5157979Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-12T04:54:11.5158658Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-12T04:54:11.5159282Z         
2026-09-12T04:54:11.5159614Z         group_id="6aa49fd27423f4722c01b542",
2026-09-12T04:54:11.5160085Z         cluster_name="test-acc-tf-c-8210674005052258226",
2026-09-12T04:54:11.5160688Z         index_id="6aa4a4047423f4722c038c4c": timeout while waiting for state to
2026-09-12T04:54:11.5161331Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-12T04:54:11.5162005Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (13890.73s)
```

- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T05:47:03+00:00
```
2026-09-14T05:47:03.7435421Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-14T05:47:03.7447774Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-14T05:47:03.7622013Z panic: test timed out after 5h0m0s
2026-09-14T05:47:03.7622316Z 	running tests:
2026-09-14T05:47:03.7622705Z 		TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (4h42m7s)
```

- 2026-09-15

### Error 2026-09-15T05:43:50+00:00
```
2026-09-15T05:43:50.3089688Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-15T05:43:50.3098618Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-15T05:43:50.3210741Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-15T05:43:50.3211351Z     resource_test.go:96: Step 1/2 error: Error running apply: exit status 1
2026-09-15T05:43:50.3211775Z         
2026-09-15T05:43:50.3212135Z         Error: Error waiting for changes in Create
2026-09-15T05:43:50.3212480Z         
2026-09-15T05:43:50.3212848Z           with mongodbatlas_search_index_api.test,
2026-09-15T05:43:50.3213929Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-15T05:43:50.3214650Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-15T05:43:50.3215030Z         
2026-09-15T05:43:50.3215356Z         group_id="6aa894c6f45e19b0d3dcab24",
2026-09-15T05:43:50.3215838Z         cluster_name="test-acc-tf-c-6477351237734953754",
2026-09-15T05:43:50.3216458Z         index_id="6aa898f3f45e19b0d3e0ed62": timeout while waiting for state to
2026-09-15T05:43:50.3217139Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-15T05:43:50.3217828Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-15T05:43:50.3218560Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-15T05:43:50.3219688Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (10804.16s)
```

- 2026-09-16

### Error 2026-09-16T05:43:44+00:00
```
2026-09-16T05:43:44.8869276Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-16T05:43:44.8877844Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-16T05:43:44.9001841Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-16T05:43:44.9002810Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-09-16T05:43:44.9003472Z         
2026-09-16T05:43:44.9004054Z         Error: Error waiting for changes in Update
2026-09-16T05:43:44.9004598Z         
2026-09-16T05:43:44.9005456Z           with mongodbatlas_search_index_api.test,
2026-09-16T05:43:44.9006678Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-16T05:43:44.9007851Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-16T05:43:44.9008647Z         
2026-09-16T05:43:44.9009192Z         group_id="6aa9e5e4013d831ec44b342e",
2026-09-16T05:43:44.9009980Z         cluster_name="test-acc-tf-c-750170190363952492",
2026-09-16T05:43:44.9011040Z         index_id="6aa9ebbf013d831ec44fe7a3": timeout while waiting for state to
2026-09-16T05:43:44.9012155Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-16T05:43:44.9014275Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (16299.18s)
```

- 2026-09-17 PASS 52 minutes
- 2026-09-18

### Error 2026-09-18T05:16:19+00:00
```
2026-09-18T05:16:19.5406254Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-18T05:16:19.5411510Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-18T05:16:19.5547759Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-18T05:16:19.5548261Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-09-18T05:16:19.5548605Z         
2026-09-18T05:16:19.5548923Z         Error: Error waiting for changes in Update
2026-09-18T05:16:19.5549200Z         
2026-09-18T05:16:19.5549526Z           with mongodbatlas_search_index_api.test,
2026-09-18T05:16:19.5550155Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-18T05:16:19.5550739Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-18T05:16:19.5551045Z         
2026-09-18T05:16:19.5551333Z         group_id="6aac88de1bd5f998a1452f76",
2026-09-18T05:16:19.5551743Z         cluster_name="test-acc-tf-c-3593569086852570367",
2026-09-18T05:16:19.5552275Z         index_id="6aac8efdacef019a417be1f4": timeout while waiting for state to
2026-09-18T05:16:19.5552829Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-18T05:16:19.5553268Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (14591.42s)
```

- 2026-09-19

### Error 2026-09-19T01:30:40+00:00
```
2026-09-19T01:30:40.9199481Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-19T01:30:40.9199816Z     resource_test.go:93: 
2026-09-19T01:30:40.9200561Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:30:40.9202018Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:93
2026-09-19T01:30:40.9202646Z         	Error:      	Received unexpected error:
2026-09-19T01:30:40.9203422Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:30:40.9203983Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-19T01:30:40.9204539Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21

### Error 2026-09-21T05:48:45+00:00
```
2026-09-21T05:48:45.1961385Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-21T05:48:45.1972237Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-21T05:48:45.2057579Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-21T05:48:45.2058672Z     resource_test.go:96: Step 1/2 error: Error running apply: exit status 1
2026-09-21T05:48:45.2059417Z         
2026-09-21T05:48:45.2060047Z         Error: Error waiting for changes in Create
2026-09-21T05:48:45.2060608Z         
2026-09-21T05:48:45.2061240Z           with mongodbatlas_search_index_api.test,
2026-09-21T05:48:45.2062724Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-21T05:48:45.2063960Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-21T05:48:45.2064607Z         
2026-09-21T05:48:45.2065164Z         group_id="6ab07eed79951ab0058245fb",
2026-09-21T05:48:45.2065986Z         cluster_name="test-acc-tf-c-6050672708674164813",
2026-09-21T05:48:45.2067082Z         index_id="6ab082d350f317768c30e8b3": timeout while waiting for state to
2026-09-21T05:48:45.2068239Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-21T05:48:45.2069463Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-21T05:48:45.2070761Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-21T05:48:45.2072970Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (10803.17s)
```

- 2026-09-22
  - FAIL 3 hours

### Error 2026-09-22T05:06:24+00:00
```
2026-09-22T05:06:24.3121050Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-22T05:06:24.3126856Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-22T05:06:24.3220472Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-22T05:06:24.3220979Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-09-22T05:06:24.3221422Z         
2026-09-22T05:06:24.3221740Z         Error: Error waiting for changes in Update
2026-09-22T05:06:24.3222032Z         
2026-09-22T05:06:24.3222349Z           with mongodbatlas_search_index_api.test,
2026-09-22T05:06:24.3222964Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-22T05:06:24.3223559Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-22T05:06:24.3224024Z         
2026-09-22T05:06:24.3224316Z         group_id="6ab1cf51a17d32e660138f1d",
2026-09-22T05:06:24.3224761Z         cluster_name="test-acc-tf-c-1242047262187896326",
2026-09-22T05:06:24.3225318Z         index_id="6ab1d4e9a17d32e66015ce38": timeout while waiting for state to
2026-09-22T05:06:24.3225881Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-22T05:06:24.3226385Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (14129.26s)
```

  - FAIL 3 hours

### Error 2026-09-22T12:46:47+00:00
```
2026-09-22T12:46:47.9743631Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-22T12:46:47.9760468Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-22T12:46:47.9801293Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-22T12:46:47.9802607Z     resource_test.go:96: Step 1/2 error: Error running apply: exit status 1
2026-09-22T12:46:47.9803351Z         
2026-09-22T12:46:47.9803973Z         Error: Error waiting for changes in Create
2026-09-22T12:46:47.9804566Z         
2026-09-22T12:46:47.9805235Z           with mongodbatlas_search_index_api.test,
2026-09-22T12:46:47.9806598Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-22T12:46:47.9807901Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-22T12:46:47.9808561Z         
2026-09-22T12:46:47.9809147Z         group_id="6ab23b4fd135efc1a7edf95a",
2026-09-22T12:46:47.9809927Z         cluster_name="test-acc-tf-c-7202313398832200026",
2026-09-22T12:46:47.9810925Z         index_id="6ab241216d79e71061b41b14": timeout while waiting for state to
2026-09-22T12:46:47.9812023Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-22T12:46:47.9813401Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-22T12:46:47.9814667Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-22T12:46:47.9829722Z    test_terraform_path=/home/runner/work/_temp/4eee0bea-124c-4326-a033-b65c87cd4a74/terraform test_working_directory=/tmp/plugintest532665745 test_step_number=1
2026-09-22T12:46:47.9981364Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (10805.37s)
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
- 2026-09-06 PASS 52 minutes
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
