# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceBool Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, FAIL(x 8) PASS
Success rate: 11.11%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-07 17:14](#error-2026-09-07t1714300000) |  | dev | timeout | 13566.09s
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 10803.02s
[2026-09-09 04:45](#error-2026-09-09t0445050000) |  | dev | timeout | 12482.07s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 0.00s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s
[2026-09-12 04:54](#error-2026-09-12t0454110000) |  | dev | timeout | 13527.09s
[2026-09-14 05:47](#error-2026-09-14t0547030000) |  | dev | timeout | 12651.09s

### Timeline
- 2026-09-07

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


## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS an hour
- 2026-09-14: MISSING
