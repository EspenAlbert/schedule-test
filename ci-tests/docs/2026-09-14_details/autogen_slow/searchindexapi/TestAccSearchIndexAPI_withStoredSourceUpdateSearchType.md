# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceUpdateSearchType Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, FAIL(x 6) PASS(x 3)
Success rate: 33.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-07 17:14](#error-2026-09-07t1714300000) |  | dev | timeout | 10803.08s
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 10803.01s
[2026-09-09 04:45](#error-2026-09-09t0445050000) |  | dev | timeout | 10803.07s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 0.00s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s

### Timeline
- 2026-09-07

### Error 2026-09-07T17:14:30+00:00
```
2026-09-07T17:14:30.4731362Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-07T17:14:30.4736491Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-07T17:14:30.4859261Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-07T17:14:30.4860399Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-09-07T17:14:30.4861161Z         
2026-09-07T17:14:30.4861819Z         Error: Error waiting for changes in Create
2026-09-07T17:14:30.4862411Z         
2026-09-07T17:14:30.4863444Z           with mongodbatlas_search_index_api.test,
2026-09-07T17:14:30.4864399Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-07T17:14:30.4865253Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-07T17:14:30.4865708Z         
2026-09-07T17:14:30.4866110Z         group_id="6a9eaaa643d6e4ba6d1eae49",
2026-09-07T17:14:30.4866685Z         cluster_name="test-acc-tf-c-536976955874991021",
2026-09-07T17:14:30.4867446Z         index_id="6a9eafa6ff4aa12cb9ba0f82": timeout while waiting for state to
2026-09-07T17:14:30.4868258Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-07T17:14:30.4869095Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-07T17:14:30.4869987Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-07T17:14:30.4870717Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (10803.78s)
```

- 2026-09-08

### Error 2026-09-08T05:00:43+00:00
```
2026-09-08T05:00:43.6867442Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-08T05:00:43.6875576Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-08T05:00:43.6899185Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-08T05:00:43.6900498Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-09-08T05:00:43.6900984Z         
2026-09-08T05:00:43.6901349Z         Error: Error waiting for changes in Create
2026-09-08T05:00:43.6901686Z         
2026-09-08T05:00:43.6902053Z           with mongodbatlas_search_index_api.test,
2026-09-08T05:00:43.6902786Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-08T05:00:43.6903458Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-08T05:00:43.6903812Z         
2026-09-08T05:00:43.6904127Z         group_id="6a9f5a9228da0e5fc08e7890",
2026-09-08T05:00:43.6904602Z         cluster_name="test-acc-tf-c-4534713065942648190",
2026-09-08T05:00:43.6905207Z         index_id="6a9f5f9228da0e5fc0901b62": timeout while waiting for state to
2026-09-08T05:00:43.6905844Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-08T05:00:43.6906511Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-08T05:00:43.6907679Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-08T05:00:43.6916668Z   
2026-09-08T05:00:43.6925168Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (10803.08s)
```

- 2026-09-09

### Error 2026-09-09T04:45:05+00:00
```
2026-09-09T04:45:05.5398501Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-09T04:45:05.5402752Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-09T04:45:05.5477266Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-09T04:45:05.5478360Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-09-09T04:45:05.5479077Z         
2026-09-09T04:45:05.5479902Z         Error: Error waiting for changes in Create
2026-09-09T04:45:05.5480606Z         
2026-09-09T04:45:05.5481258Z           with mongodbatlas_search_index_api.test,
2026-09-09T04:45:05.5482558Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-09T04:45:05.5483767Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-09T04:45:05.5484405Z         
2026-09-09T04:45:05.5484973Z         group_id="6aa0abadf33137a6ca4829f0",
2026-09-09T04:45:05.5485978Z         cluster_name="test-acc-tf-c-1622242972829995596",
2026-09-09T04:45:05.5487077Z         index_id="6aa0b0f554e3320f685c1383": timeout while waiting for state to
2026-09-09T04:45:05.5488193Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-09T04:45:05.5489374Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-09T04:45:05.5490859Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-09T04:45:05.5491855Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (10803.67s)
```

- 2026-09-10

### Error 2026-09-10T01:33:06+00:00
```
2026-09-10T01:33:06.1337401Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-10T01:33:06.1338063Z     resource_test.go:199: 
2026-09-10T01:33:06.1339142Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T01:33:06.1341170Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:199
2026-09-10T01:33:06.1342020Z         	Error:      	Received unexpected error:
2026-09-10T01:33:06.1343296Z         	            	sample dataset load 6aa201365b8d9510e89370dd failed for cluster 6aa1fcb04ab31ba34525537f:test-acc-tf-c-1596466085034706675
2026-09-10T01:33:06.1344160Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-10T01:33:06.1344714Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (0.00s)
```

- 2026-09-11
  - FAIL unknown

### Error 2026-09-11T03:01:53+00:00
```
2026-09-11T03:01:53.1648184Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-11T03:01:53.1648536Z     resource_test.go:199: 
2026-09-11T03:01:53.1649306Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T03:01:53.1650822Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:199
2026-09-11T03:01:53.1651468Z         	Error:      	Received unexpected error:
2026-09-11T03:01:53.1652269Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-11T03:01:53.1652851Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-11T03:01:53.1653272Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (0.00s)
```

  - FAIL unknown

### Error 2026-09-11T07:31:03+00:00
```
2026-09-11T07:31:03.2037261Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-11T07:31:03.2038074Z     resource_test.go:199: 
2026-09-11T07:31:03.2039606Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:31:03.2042393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:199
2026-09-11T07:31:03.2043775Z         	Error:      	Received unexpected error:
2026-09-11T07:31:03.2045404Z         	            	sample dataset load 6aa3a5fff7fcc4bbebf76935 failed for cluster 6aa3a28df7fcc4bbebf53df1:test-acc-tf-c-1260780199030207545
2026-09-11T07:31:03.2046792Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-11T07:31:03.2047605Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (0.00s)
```

- 2026-09-12 PASS 42 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS an hour

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 34 minutes
- 2026-09-14: MISSING
