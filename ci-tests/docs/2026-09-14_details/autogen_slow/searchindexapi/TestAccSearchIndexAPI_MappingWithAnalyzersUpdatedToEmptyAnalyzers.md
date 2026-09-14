# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, FAIL(x 8) PASS
Success rate: 11.11%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-07 17:14](#error-2026-09-07t1714300000) |  | dev | timeout | 10803.05s
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 11964.07s
[2026-09-09 04:45](#error-2026-09-09t0445050000) |  | dev | timeout | 12936.05s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 0.00s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s
[2026-09-12 04:54](#error-2026-09-12t0454110000) |  | dev | timeout | 13528.01s
[2026-09-14 05:47](#error-2026-09-14t0547030000) |  | dev | timeout | 10803.05s

### Timeline
- 2026-09-07

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


## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 52 minutes
- 2026-09-14: MISSING
