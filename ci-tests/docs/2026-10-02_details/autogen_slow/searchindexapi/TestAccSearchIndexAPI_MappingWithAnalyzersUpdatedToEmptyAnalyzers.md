# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, FAIL(x 20) SKIP(x 11) PASS(x 6)
Success rate: 23.08%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-02 04:59](#error-2026-09-02t0459000000) |  | dev | timeout | 10803.01s
[2026-09-03 05:44](#error-2026-09-03t0544170000) |  | dev | timeout | 14327.07s
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 11271.09s
[2026-09-05 04:57](#error-2026-09-05t0457170000) |  | dev | timeout | 13814.03s
[2026-09-07 05:48](#error-2026-09-07t0548170000) |  | dev | timeout | 10804.01s
[2026-09-07 17:14](#error-2026-09-07t1714300000) |  | dev | timeout | 10803.05s
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 11964.07s
[2026-09-09 04:45](#error-2026-09-09t0445050000) |  | dev | timeout | 12936.05s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 0.00s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s
[2026-09-12 04:54](#error-2026-09-12t0454110000) |  | dev | timeout | 13528.01s
[2026-09-14 05:47](#error-2026-09-14t0547030000) |  | dev | timeout | 10803.05s
[2026-09-15 05:43](#error-2026-09-15t0543500000) |  | dev | timeout | 10804.05s
[2026-09-16 05:43](#error-2026-09-16t0543440000) |  | dev | timeout | 16298.08s
[2026-09-18 05:16](#error-2026-09-18t0516190000) |  | dev | timeout | 13944.04s
[2026-09-19 01:30](#error-2026-09-19t0130400000) |  | dev | timeout | 0.00s
[2026-09-21 05:48](#error-2026-09-21t0548450000) |  | dev | timeout | 10804.00s
[2026-09-22 05:06](#error-2026-09-22t0506240000) |  | dev | timeout | 11835.00s
[2026-09-22 12:46](#error-2026-09-22t1246470000) |  | dev | timeout | 10805.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02

### Error 2026-09-02T04:59:00+00:00
```
2026-09-02T04:59:00.1906686Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-02T04:59:00.1922225Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-02T04:59:00.1955862Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-02T04:59:00.1956992Z     resource_test.go:74: Step 1/2 error: Error running apply: exit status 1
2026-09-02T04:59:00.1957749Z         
2026-09-02T04:59:00.1958390Z         Error: Error waiting for changes in Create
2026-09-02T04:59:00.1958991Z         
2026-09-02T04:59:00.1959664Z           with mongodbatlas_search_index_api.test,
2026-09-02T04:59:00.1961258Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-02T04:59:00.1962582Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-02T04:59:00.1963244Z         
2026-09-02T04:59:00.1963798Z         group_id="6a97712e7f32ed5349f9c310",
2026-09-02T04:59:00.1964794Z         cluster_name="test-acc-tf-c-3797371471604204812",
2026-09-02T04:59:00.1965950Z         index_id="6a9776737f32ed5349fdc8a0": timeout while waiting for state to
2026-09-02T04:59:00.1967150Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-02T04:59:00.1968366Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-02T04:59:00.1969701Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-02T04:59:00.1971131Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (10803.12s)
```

- 2026-09-03
  - FAIL 3 hours

### Error 2026-09-03T05:44:17+00:00
```
2026-09-03T05:44:17.7096784Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-03T05:44:17.7111337Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-03T05:44:17.7235993Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-03T05:44:17.7237167Z     resource_test.go:74: Step 2/2 error: Error running apply: exit status 1
2026-09-03T05:44:17.7237832Z         
2026-09-03T05:44:17.7238403Z         Error: Error waiting for changes in Update
2026-09-03T05:44:17.7238929Z         
2026-09-03T05:44:17.7239497Z           with mongodbatlas_search_index_api.test,
2026-09-03T05:44:17.7240685Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T05:44:17.7241988Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-03T05:44:17.7242561Z         
2026-09-03T05:44:17.7243073Z         group_id="6a98c2e18c6ee76bb0d54be9",
2026-09-03T05:44:17.7243841Z         cluster_name="test-acc-tf-c-5646429399751727716",
2026-09-03T05:44:17.7244844Z         index_id="6a98c757c4c2ba86c180a1ed": timeout while waiting for state to
2026-09-03T05:44:17.7245910Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-03T05:44:17.7246891Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (14327.72s)
```

  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0686190Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-03T10:02:47.0694838Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-03T10:02:47.0873420Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-03T10:02:47.0874644Z     resource_test.go:74: Step 2/2 error: Error running apply: exit status 1
2026-09-03T10:02:47.0875346Z         
2026-09-03T10:02:47.0875951Z         Error: Error waiting for changes in Update
2026-09-03T10:02:47.0876502Z         
2026-09-03T10:02:47.0877133Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0878412Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0879895Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0880559Z         
2026-09-03T10:02:47.0881139Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0881979Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0883047Z         index_id="6a99189a72d7295ca9908e5e": timeout while waiting for state to
2026-09-03T10:02:47.0884178Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0905188Z    test_step_number=2 test_name=TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping test_terraform_path=/home/runner/work/_temp/0c1db9d8-7e8f-4171-b733-778630ab847c/terraform test_working_directory=/tmp/plugintest118871097
2026-09-03T10:02:47.0919583Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (11271.89s)
```

- 2026-09-04 PASS an hour
- 2026-09-05

### Error 2026-09-05T04:57:17+00:00
```
2026-09-05T04:57:17.6501956Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-05T04:57:17.6511260Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-05T04:57:17.6590908Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-05T04:57:17.6591525Z     resource_test.go:74: Step 2/2 error: Error running apply: exit status 1
2026-09-05T04:57:17.6591981Z         
2026-09-05T04:57:17.6592384Z         Error: Error waiting for changes in Update
2026-09-05T04:57:17.6592780Z         
2026-09-05T04:57:17.6593418Z           with mongodbatlas_search_index_api.test,
2026-09-05T04:57:17.6594128Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-05T04:57:17.6594775Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-05T04:57:17.6595185Z         
2026-09-05T04:57:17.6595575Z         group_id="6a9b652f1099178350983b6f",
2026-09-05T04:57:17.6596058Z         cluster_name="test-acc-tf-c-2329868758960774626",
2026-09-05T04:57:17.6596705Z         index_id="6a9b69e910991783509ac052": timeout while waiting for state to
2026-09-05T04:57:17.6597316Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-05T04:57:17.6597909Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (13814.28s)
```

- 2026-09-06: MISSING
- 2026-09-07
  - FAIL 3 hours

### Error 2026-09-07T05:48:17+00:00
```
2026-09-07T05:48:17.9806804Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-07T05:48:17.9819641Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-07T05:48:17.9911410Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-07T05:48:17.9912075Z     resource_test.go:74: Step 1/2 error: Error running apply: exit status 1
2026-09-07T05:48:17.9912488Z         
2026-09-07T05:48:17.9912846Z         Error: Error waiting for changes in Create
2026-09-07T05:48:17.9913181Z         
2026-09-07T05:48:17.9913548Z           with mongodbatlas_search_index_api.test,
2026-09-07T05:48:17.9914262Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-07T05:48:17.9914959Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-07T05:48:17.9915325Z         
2026-09-07T05:48:17.9915641Z         group_id="6a9e09d2ce994148d59e6659",
2026-09-07T05:48:17.9916110Z         cluster_name="test-acc-tf-c-1313053707861581472",
2026-09-07T05:48:17.9916716Z         index_id="6a9e0e9ae6eed862900fdc21": timeout while waiting for state to
2026-09-07T05:48:17.9917353Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-07T05:48:17.9918020Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-07T05:48:17.9918721Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-07T05:48:17.9919358Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (10804.12s)
```

  - FAIL 3 hours

### Error 2026-09-07T17:14:30+00:00
```
2026-09-07T17:14:30.4720817Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-07T17:14:30.4737415Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-07T17:14:30.4814918Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-07T17:14:30.4816203Z     resource_test.go:74: Step 1/2 error: Error running apply: exit status 1
2026-09-07T17:14:30.4816977Z         
2026-09-07T17:14:30.4817631Z         Error: Error waiting for changes in Create
2026-09-07T17:14:30.4818230Z         
2026-09-07T17:14:30.4818897Z           with mongodbatlas_search_index_api.test,
2026-09-07T17:14:30.4820431Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-07T17:14:30.4821775Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-07T17:14:30.4822466Z         
2026-09-07T17:14:30.4823307Z         group_id="6a9eaaa643d6e4ba6d1eae49",
2026-09-07T17:14:30.4824180Z         cluster_name="test-acc-tf-c-536976955874991021",
2026-09-07T17:14:30.4825332Z         index_id="6a9eafa643d6e4ba6d1f94ff": timeout while waiting for state to
2026-09-07T17:14:30.4826538Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-07T17:14:30.4827982Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-07T17:14:30.4829347Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-07T17:14:30.4830541Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (10803.51s)
```

- 2026-09-08

### Error 2026-09-08T05:00:43+00:00
```
2026-09-08T05:00:43.6861960Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-08T05:00:43.6872446Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-08T05:00:43.7008485Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-08T05:00:43.7009134Z     resource_test.go:74: Step 2/2 error: Error running apply: exit status 1
2026-09-08T05:00:43.7009533Z         
2026-09-08T05:00:43.7010132Z         Error: Error waiting for changes in Update
2026-09-08T05:00:43.7010467Z         
2026-09-08T05:00:43.7010831Z           with mongodbatlas_search_index_api.test,
2026-09-08T05:00:43.7011544Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-08T05:00:43.7012383Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-08T05:00:43.7012750Z         
2026-09-08T05:00:43.7013068Z         group_id="6a9f5a9228da0e5fc08e7890",
2026-09-08T05:00:43.7013538Z         cluster_name="test-acc-tf-c-4534713065942648190",
2026-09-08T05:00:43.7014138Z         index_id="6a9f5f929d794e9a744e6302": timeout while waiting for state to
2026-09-08T05:00:43.7014774Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-08T05:00:43.7015366Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (11964.72s)
```

- 2026-09-09

### Error 2026-09-09T04:45:05+00:00
```
2026-09-09T04:45:05.5389147Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-09T04:45:05.5405219Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-09T04:45:05.5586388Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-09T04:45:05.5587142Z     resource_test.go:74: Step 2/2 error: Error running apply: exit status 1
2026-09-09T04:45:05.5587679Z         
2026-09-09T04:45:05.5588066Z         Error: Error waiting for changes in Update
2026-09-09T04:45:05.5588406Z         
2026-09-09T04:45:05.5588896Z           with mongodbatlas_search_index_api.test,
2026-09-09T04:45:05.5597068Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-09T04:45:05.5598122Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-09T04:45:05.5598527Z         
2026-09-09T04:45:05.5598862Z         group_id="6aa0abadf33137a6ca4829f0",
2026-09-09T04:45:05.5599344Z         cluster_name="test-acc-tf-c-1622242972829995596",
2026-09-09T04:45:05.5600225Z         index_id="6aa0b0f5567d318b5305b396": timeout while waiting for state to
2026-09-09T04:45:05.5600865Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-09T04:45:05.5601464Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (12936.54s)
```

- 2026-09-10

### Error 2026-09-10T01:33:06+00:00
```
2026-09-10T01:33:06.1284369Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-10T01:33:06.1284873Z     resource_test.go:71: 
2026-09-10T01:33:06.1285910Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T01:33:06.1288163Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:71
2026-09-10T01:33:06.1289048Z         	Error:      	Received unexpected error:
2026-09-10T01:33:06.1290336Z         	            	sample dataset load 6aa201365b8d9510e89370dd failed for cluster 6aa1fcb04ab31ba34525537f:test-acc-tf-c-1596466085034706675
2026-09-10T01:33:06.1291276Z         	Test:       	TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-10T01:33:06.1291945Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (0.00s)
```

- 2026-09-11
  - FAIL unknown

### Error 2026-09-11T03:01:53+00:00
```
2026-09-11T03:01:53.1614702Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-11T03:01:53.1615086Z     resource_test.go:71: 
2026-09-11T03:01:53.1615860Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T03:01:53.1617551Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:71
2026-09-11T03:01:53.1618212Z         	Error:      	Received unexpected error:
2026-09-11T03:01:53.1619028Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-11T03:01:53.1619686Z         	Test:       	TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-11T03:01:53.1620204Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (0.00s)
```

  - FAIL unknown

### Error 2026-09-11T07:31:03+00:00
```
2026-09-11T07:31:03.1967678Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-11T07:31:03.1968500Z     resource_test.go:71: 
2026-09-11T07:31:03.1970099Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:31:03.1972858Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:71
2026-09-11T07:31:03.1974223Z         	Error:      	Received unexpected error:
2026-09-11T07:31:03.1976155Z         	            	sample dataset load 6aa3a5fff7fcc4bbebf76935 failed for cluster 6aa3a28df7fcc4bbebf53df1:test-acc-tf-c-1260780199030207545
2026-09-11T07:31:03.1978852Z         	Test:       	TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-11T07:31:03.1979862Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (0.00s)
```

- 2026-09-12

### Error 2026-09-12T04:54:11+00:00
```
2026-09-12T04:54:11.5066361Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-12T04:54:11.5076037Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-12T04:54:11.5135177Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-12T04:54:11.5135836Z     resource_test.go:74: Step 2/2 error: Error running apply: exit status 1
2026-09-12T04:54:11.5136381Z         
2026-09-12T04:54:11.5136748Z         Error: Error waiting for changes in Update
2026-09-12T04:54:11.5137086Z         
2026-09-12T04:54:11.5137451Z           with mongodbatlas_search_index_api.test,
2026-09-12T04:54:11.5138163Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-12T04:54:11.5139138Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-12T04:54:11.5139515Z         
2026-09-12T04:54:11.5139839Z         group_id="6aa49fd27423f4722c01b542",
2026-09-12T04:54:11.5140300Z         cluster_name="test-acc-tf-c-8210674005052258226",
2026-09-12T04:54:11.5140909Z         index_id="6aa4a4041329b7f8144f8c0b": timeout while waiting for state to
2026-09-12T04:54:11.5141546Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-12T04:54:11.5142634Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (13528.12s)
```

- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T05:47:03+00:00
```
2026-09-14T05:47:03.7433410Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-14T05:47:03.7448749Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-14T05:47:03.7482924Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-14T05:47:03.7484140Z     resource_test.go:74: Step 1/2 error: Error running apply: exit status 1
2026-09-14T05:47:03.7484880Z         
2026-09-14T05:47:03.7485550Z         Error: Error waiting for changes in Create
2026-09-14T05:47:03.7486370Z         
2026-09-14T05:47:03.7487058Z           with mongodbatlas_search_index_api.test,
2026-09-14T05:47:03.7488468Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-14T05:47:03.7489808Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-14T05:47:03.7490481Z         
2026-09-14T05:47:03.7491071Z         group_id="6aa74408d4e2b0ecbd5a8aa3",
2026-09-14T05:47:03.7491945Z         cluster_name="test-acc-tf-c-1429233515179452221",
2026-09-14T05:47:03.7493078Z         index_id="6aa74839af6488f3aa98b783": timeout while waiting for state to
2026-09-14T05:47:03.7494204Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-14T05:47:03.7495423Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-14T05:47:03.7497178Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-14T05:47:03.7498363Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (10803.54s)
```

- 2026-09-15

### Error 2026-09-15T05:43:50+00:00
```
2026-09-15T05:43:50.3088491Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-15T05:43:50.3097610Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-15T05:43:50.3235700Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-15T05:43:50.3236374Z     resource_test.go:74: Step 1/2 error: Error running apply: exit status 1
2026-09-15T05:43:50.3236792Z         
2026-09-15T05:43:50.3237153Z         Error: Error waiting for changes in Create
2026-09-15T05:43:50.3237494Z         
2026-09-15T05:43:50.3237865Z           with mongodbatlas_search_index_api.test,
2026-09-15T05:43:50.3238606Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-15T05:43:50.3239457Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-15T05:43:50.3239888Z         
2026-09-15T05:43:50.3250618Z         group_id="6aa894c6f45e19b0d3dcab24",
2026-09-15T05:43:50.3251258Z         cluster_name="test-acc-tf-c-6477351237734953754",
2026-09-15T05:43:50.3251918Z         index_id="6aa898f3f45e19b0d3e0ed61": timeout while waiting for state to
2026-09-15T05:43:50.3252580Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-15T05:43:50.3253268Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-15T05:43:50.3254256Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-15T05:43:50.3254908Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (10804.54s)
```

- 2026-09-16

### Error 2026-09-16T05:43:44+00:00
```
2026-09-16T05:43:44.8867975Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-16T05:43:44.8876439Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-16T05:43:44.8981602Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-16T05:43:44.8982236Z     resource_test.go:74: Step 2/2 error: Error running apply: exit status 1
2026-09-16T05:43:44.8982638Z         
2026-09-16T05:43:44.8982997Z         Error: Error waiting for changes in Update
2026-09-16T05:43:44.8983328Z         
2026-09-16T05:43:44.8983688Z           with mongodbatlas_search_index_api.test,
2026-09-16T05:43:44.8984386Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-16T05:43:44.8985219Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-16T05:43:44.8985597Z         
2026-09-16T05:43:44.8985923Z         group_id="6aa9e5e4013d831ec44b342e",
2026-09-16T05:43:44.8986384Z         cluster_name="test-acc-tf-c-750170190363952492",
2026-09-16T05:43:44.8986982Z         index_id="6aa9ebbf013d831ec44fe7a2": timeout while waiting for state to
2026-09-16T05:43:44.8987617Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-16T05:43:44.9000941Z    test_name=TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping test_step_number=2
2026-09-16T05:43:44.9013190Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (16298.79s)
```

- 2026-09-17 PASS 40 minutes
- 2026-09-18

### Error 2026-09-18T05:16:19+00:00
```
2026-09-18T05:16:19.5405222Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-18T05:16:19.5413066Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-18T05:16:19.5531475Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-18T05:16:19.5532026Z     resource_test.go:74: Step 2/2 error: Error running apply: exit status 1
2026-09-18T05:16:19.5532367Z         
2026-09-18T05:16:19.5532672Z         Error: Error waiting for changes in Update
2026-09-18T05:16:19.5533052Z         
2026-09-18T05:16:19.5533381Z           with mongodbatlas_search_index_api.test,
2026-09-18T05:16:19.5534122Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-18T05:16:19.5534724Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-18T05:16:19.5535028Z         
2026-09-18T05:16:19.5535312Z         group_id="6aac88de1bd5f998a1452f76",
2026-09-18T05:16:19.5535714Z         cluster_name="test-acc-tf-c-3593569086852570367",
2026-09-18T05:16:19.5536249Z         index_id="6aac8efd2c5cbddf68bb801d": timeout while waiting for state to
2026-09-18T05:16:19.5536807Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-18T05:16:19.5537311Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (13944.44s)
```

- 2026-09-19

### Error 2026-09-19T01:30:40+00:00
```
2026-09-19T01:30:40.9193546Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-19T01:30:40.9194057Z     resource_test.go:71: 
2026-09-19T01:30:40.9194990Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:30:40.9196491Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:71
2026-09-19T01:30:40.9197128Z         	Error:      	Received unexpected error:
2026-09-19T01:30:40.9197910Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:30:40.9198542Z         	Test:       	TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-19T01:30:40.9199043Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21

### Error 2026-09-21T05:48:45+00:00
```
2026-09-21T05:48:45.1959373Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-21T05:48:45.1973396Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-21T05:48:45.2181156Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-21T05:48:45.2182249Z     resource_test.go:74: Step 1/2 error: Error running apply: exit status 1
2026-09-21T05:48:45.2183082Z         
2026-09-21T05:48:45.2183672Z         Error: Error waiting for changes in Create
2026-09-21T05:48:45.2184212Z         
2026-09-21T05:48:45.2184998Z           with mongodbatlas_search_index_api.test,
2026-09-21T05:48:45.2186215Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-21T05:48:45.2187403Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-21T05:48:45.2188014Z         
2026-09-21T05:48:45.2188554Z         group_id="6ab07eed79951ab0058245fb",
2026-09-21T05:48:45.2189366Z         cluster_name="test-acc-tf-c-6050672708674164813",
2026-09-21T05:48:45.2190445Z         index_id="6ab082d379951ab00583b60e": timeout while waiting for state to
2026-09-21T05:48:45.2191581Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-21T05:48:45.2192984Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-21T05:48:45.2194271Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-21T05:48:45.2195390Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (10804.03s)
```

- 2026-09-22
  - FAIL 3 hours

### Error 2026-09-22T05:06:24+00:00
```
2026-09-22T05:06:24.3120010Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-22T05:06:24.3129119Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-22T05:06:24.3204308Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-22T05:06:24.3204869Z     resource_test.go:74: Step 2/2 error: Error running apply: exit status 1
2026-09-22T05:06:24.3205239Z         
2026-09-22T05:06:24.3205565Z         Error: Error waiting for changes in Update
2026-09-22T05:06:24.3205883Z         
2026-09-22T05:06:24.3206223Z           with mongodbatlas_search_index_api.test,
2026-09-22T05:06:24.3206851Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-22T05:06:24.3207466Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-22T05:06:24.3207768Z         
2026-09-22T05:06:24.3208024Z         group_id="6ab1cf51a17d32e660138f1d",
2026-09-22T05:06:24.3208416Z         cluster_name="test-acc-tf-c-1242047262187896326",
2026-09-22T05:06:24.3208917Z         index_id="6ab1d4e9ce34027299e11841": timeout while waiting for state to
2026-09-22T05:06:24.3209419Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-22T05:06:24.3209951Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (11835.02s)
```

  - FAIL 3 hours

### Error 2026-09-22T12:46:47+00:00
```
2026-09-22T12:46:47.9741305Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-22T12:46:47.9761430Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-22T12:46:47.9966045Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-22T12:46:47.9967231Z     resource_test.go:74: Step 1/2 error: Error running apply: exit status 1
2026-09-22T12:46:47.9967974Z         
2026-09-22T12:46:47.9968627Z         Error: Error waiting for changes in Create
2026-09-22T12:46:47.9969224Z         
2026-09-22T12:46:47.9969878Z           with mongodbatlas_search_index_api.test,
2026-09-22T12:46:47.9971231Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-22T12:46:47.9972708Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-22T12:46:47.9973311Z         
2026-09-22T12:46:47.9973873Z         group_id="6ab23b4fd135efc1a7edf95a",
2026-09-22T12:46:47.9974664Z         cluster_name="test-acc-tf-c-7202313398832200026",
2026-09-22T12:46:47.9975756Z         index_id="6ab24121d0fd092caf984f90": timeout while waiting for state to
2026-09-22T12:46:47.9976879Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-22T12:46:47.9978055Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-22T12:46:47.9979325Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-22T12:46:48.0025618Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (10805.46s)
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
- 2026-09-06 PASS 54 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 52 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 49 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS an hour
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
