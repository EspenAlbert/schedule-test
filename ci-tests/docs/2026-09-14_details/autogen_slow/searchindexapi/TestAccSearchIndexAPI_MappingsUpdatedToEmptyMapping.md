# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, FAIL(x 6) TIMEOUT(x 2) PASS
Success rate: 11.11%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-07 17:14](#error-2026-09-07t1714300000) |  | dev |  | 16721.00s
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 12838.09s
[2026-09-09 04:45](#error-2026-09-09t0445050000) |  | dev | timeout | 10804.09s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 0.00s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s
[2026-09-12 04:54](#error-2026-09-12t0454110000) |  | dev | timeout | 13890.07s
[2026-09-14 05:47](#error-2026-09-14t0547030000) |  | dev |  | 16927.00s

### Timeline
- 2026-09-07

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
