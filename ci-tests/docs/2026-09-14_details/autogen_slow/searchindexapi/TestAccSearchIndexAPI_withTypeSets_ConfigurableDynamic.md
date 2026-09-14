# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, FAIL(x 8) PASS
Success rate: 11.11%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-07 17:14](#error-2026-09-07t1714300000) |  | dev | timeout | 13204.07s
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 13845.05s
[2026-09-09 04:45](#error-2026-09-09t0445050000) |  | dev | timeout | 10803.03s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 0.00s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s
[2026-09-12 04:54](#error-2026-09-12t0454110000) |  | dev | timeout | 10803.08s
[2026-09-14 05:47](#error-2026-09-14t0547030000) |  | dev | timeout | 15969.02s

### Timeline
- 2026-09-07

### Error 2026-09-07T17:14:30+00:00
```
2026-09-07T17:14:30.4725343Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-07T17:14:30.4735609Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-07T17:14:30.4886974Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-07T17:14:30.4887882Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-09-07T17:14:30.4888492Z         
2026-09-07T17:14:30.4888862Z         Error: Error waiting for changes in Update
2026-09-07T17:14:30.4889199Z         
2026-09-07T17:14:30.4889724Z           with mongodbatlas_search_index_api.test,
2026-09-07T17:14:30.4890535Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-07T17:14:30.4891301Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-07T17:14:30.4891779Z         
2026-09-07T17:14:30.4892163Z         group_id="6a9eaaa643d6e4ba6d1eae49",
2026-09-07T17:14:30.4892815Z         cluster_name="test-acc-tf-c-536976955874991021",
2026-09-07T17:14:30.4893587Z         index_id="6a9eafa6ff4aa12cb9ba0f8b": timeout while waiting for state to
2026-09-07T17:14:30.4894411Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-07T17:14:30.4895109Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (13204.69s)
```

- 2026-09-08

### Error 2026-09-08T05:00:43+00:00
```
2026-09-08T05:00:43.6864095Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-08T05:00:43.6869078Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-08T05:00:43.7054642Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-08T05:00:43.7055248Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-09-08T05:00:43.7055668Z         
2026-09-08T05:00:43.7056017Z         Error: Error waiting for changes in Update
2026-09-08T05:00:43.7056343Z         
2026-09-08T05:00:43.7056701Z           with mongodbatlas_search_index_api.test,
2026-09-08T05:00:43.7057412Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-08T05:00:43.7058096Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-08T05:00:43.7058448Z         
2026-09-08T05:00:43.7058764Z         group_id="6a9f5a9228da0e5fc08e7890",
2026-09-08T05:00:43.7059224Z         cluster_name="test-acc-tf-c-4534713065942648190",
2026-09-08T05:00:43.7060176Z         index_id="6a9f5f929d794e9a744e62d8": timeout while waiting for state to
2026-09-08T05:00:43.7060848Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-08T05:00:43.7061394Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (13845.49s)
```

- 2026-09-09

### Error 2026-09-09T04:45:05+00:00
```
2026-09-09T04:45:05.5392877Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-09T04:45:05.5403576Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-09T04:45:05.5436639Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-09T04:45:05.5437701Z     resource_test.go:118: Step 1/3 error: Error running apply: exit status 1
2026-09-09T04:45:05.5438431Z         
2026-09-09T04:45:05.5439061Z         Error: Error waiting for changes in Create
2026-09-09T04:45:05.5439844Z         
2026-09-09T04:45:05.5440487Z           with mongodbatlas_search_index_api.test,
2026-09-09T04:45:05.5441898Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-09T04:45:05.5443117Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-09T04:45:05.5443728Z         
2026-09-09T04:45:05.5444296Z         group_id="6aa0abadf33137a6ca4829f0",
2026-09-09T04:45:05.5445114Z         cluster_name="test-acc-tf-c-1622242972829995596",
2026-09-09T04:45:05.5446166Z         index_id="6aa0b0f5567d318b5305b39c": timeout while waiting for state to
2026-09-09T04:45:05.5447289Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-09T04:45:05.5448473Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-09T04:45:05.5449961Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-09T04:45:05.5450932Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (10803.35s)
```

- 2026-09-10

### Error 2026-09-10T01:33:06+00:00
```
2026-09-10T01:33:06.1300365Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-10T01:33:06.1300805Z     resource_test.go:115: 
2026-09-10T01:33:06.1301810Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T01:33:06.1303827Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:115
2026-09-10T01:33:06.1304664Z         	Error:      	Received unexpected error:
2026-09-10T01:33:06.1305939Z         	            	sample dataset load 6aa201365b8d9510e89370dd failed for cluster 6aa1fcb04ab31ba34525537f:test-acc-tf-c-1596466085034706675
2026-09-10T01:33:06.1306790Z         	Test:       	TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-10T01:33:06.1307336Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (0.00s)
```

- 2026-09-11
  - FAIL unknown

### Error 2026-09-11T03:01:53+00:00
```
2026-09-11T03:01:53.1626366Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-11T03:01:53.1626717Z     resource_test.go:115: 
2026-09-11T03:01:53.1627506Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T03:01:53.1629037Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:115
2026-09-11T03:01:53.1629679Z         	Error:      	Received unexpected error:
2026-09-11T03:01:53.1630487Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-11T03:01:53.1631072Z         	Test:       	TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-11T03:01:53.1631490Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (0.00s)
```

  - FAIL unknown

### Error 2026-09-11T07:31:03+00:00
```
2026-09-11T07:31:03.1992384Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-11T07:31:03.1993133Z     resource_test.go:115: 
2026-09-11T07:31:03.1994713Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:31:03.1997622Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:115
2026-09-11T07:31:03.1999007Z         	Error:      	Received unexpected error:
2026-09-11T07:31:03.2000901Z         	            	sample dataset load 6aa3a5fff7fcc4bbebf76935 failed for cluster 6aa3a28df7fcc4bbebf53df1:test-acc-tf-c-1260780199030207545
2026-09-11T07:31:03.2002347Z         	Test:       	TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-11T07:31:03.2003218Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (0.00s)
```

- 2026-09-12

### Error 2026-09-12T04:54:11+00:00
```
2026-09-12T04:54:11.5068478Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-12T04:54:11.5075089Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-12T04:54:11.5095196Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-12T04:54:11.5095833Z     resource_test.go:118: Step 1/3 error: Error running apply: exit status 1
2026-09-12T04:54:11.5096270Z         
2026-09-12T04:54:11.5096633Z         Error: Error waiting for changes in Create
2026-09-12T04:54:11.5096972Z         
2026-09-12T04:54:11.5097355Z           with mongodbatlas_search_index_api.test,
2026-09-12T04:54:11.5098080Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-12T04:54:11.5098996Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-12T04:54:11.5099397Z         
2026-09-12T04:54:11.5099727Z         group_id="6aa49fd27423f4722c01b542",
2026-09-12T04:54:11.5100196Z         cluster_name="test-acc-tf-c-8210674005052258226",
2026-09-12T04:54:11.5100805Z         index_id="6aa4a4041329b7f8144f8bfe": timeout while waiting for state to
2026-09-12T04:54:11.5101443Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-12T04:54:11.5102250Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-12T04:54:11.5102971Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-12T04:54:11.5103552Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (10803.77s)
```

- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T05:47:03+00:00
```
2026-09-14T05:47:03.7437315Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-14T05:47:03.7449724Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-14T05:47:03.7614795Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-14T05:47:03.7615393Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-09-14T05:47:03.7616025Z         
2026-09-14T05:47:03.7616390Z         Error: Error waiting for changes in Update
2026-09-14T05:47:03.7616716Z         
2026-09-14T05:47:03.7617079Z           with mongodbatlas_search_index_api.test,
2026-09-14T05:47:03.7617794Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-14T05:47:03.7618483Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-14T05:47:03.7618844Z         
2026-09-14T05:47:03.7619301Z         group_id="6aa74408d4e2b0ecbd5a8aa3",
2026-09-14T05:47:03.7619764Z         cluster_name="test-acc-tf-c-1429233515179452221",
2026-09-14T05:47:03.7620372Z         index_id="6aa74839d4e2b0ecbd5d5915": timeout while waiting for state to
2026-09-14T05:47:03.7621013Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-14T05:47:03.7621548Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (15969.17s)
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
