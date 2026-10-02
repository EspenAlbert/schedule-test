# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, FAIL(x 19) SKIP(x 11) PASS(x 6) TIMEOUT
Success rate: 23.08%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-02 04:59](#error-2026-09-02t0459000000) |  | dev | timeout | 13723.02s
[2026-09-03 05:44](#error-2026-09-03t0544170000) |  | dev | timeout | 13644.02s
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 10805.08s
[2026-09-05 04:57](#error-2026-09-05t0457170000) |  | dev | timeout | 13281.08s
[2026-09-07 05:48](#error-2026-09-07t0548170000) |  | dev | timeout | 13591.09s
[2026-09-07 17:14](#error-2026-09-07t1714300000) |  | dev | timeout | 13204.07s
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 13845.05s
[2026-09-09 04:45](#error-2026-09-09t0445050000) |  | dev | timeout | 10803.03s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 0.00s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s
[2026-09-12 04:54](#error-2026-09-12t0454110000) |  | dev | timeout | 10803.08s
[2026-09-14 05:47](#error-2026-09-14t0547030000) |  | dev | timeout | 15969.02s
[2026-09-15 05:43](#error-2026-09-15t0543500000) |  | dev | timeout | 14365.06s
[2026-09-16 05:43](#error-2026-09-16t0543440000) |  | dev | timeout | 13099.06s
[2026-09-18 05:16](#error-2026-09-18t0516190000) |  | dev | timeout | 13459.01s
[2026-09-19 01:30](#error-2026-09-19t0130400000) |  | dev | timeout | 0.00s
[2026-09-21 05:48](#error-2026-09-21t0548450000) |  | dev |  | 17003.00s
[2026-09-22 05:06](#error-2026-09-22t0506240000) |  | dev | timeout | 10803.02s
[2026-09-22 12:46](#error-2026-09-22t1246470000) |  | dev | timeout | 10805.04s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02

### Error 2026-09-02T04:59:00+00:00
```
2026-09-02T04:59:00.1910794Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-02T04:59:00.1925757Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-02T04:59:00.2114535Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-02T04:59:00.2115122Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-09-02T04:59:00.2115546Z         
2026-09-02T04:59:00.2115899Z         Error: Error waiting for changes in Update
2026-09-02T04:59:00.2116230Z         
2026-09-02T04:59:00.2116715Z           with mongodbatlas_search_index_api.test,
2026-09-02T04:59:00.2117430Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-02T04:59:00.2118105Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-02T04:59:00.2118460Z         
2026-09-02T04:59:00.2118776Z         group_id="6a97712e7f32ed5349f9c310",
2026-09-02T04:59:00.2119238Z         cluster_name="test-acc-tf-c-3797371471604204812",
2026-09-02T04:59:00.2119842Z         index_id="6a9776737f32ed5349fdc8a7": timeout while waiting for state to
2026-09-02T04:59:00.2120730Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-02T04:59:00.2121279Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (13723.17s)
```

- 2026-09-03
  - FAIL 3 hours

### Error 2026-09-03T05:44:17+00:00
```
2026-09-03T05:44:17.7100151Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-03T05:44:17.7109550Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-03T05:44:17.7174418Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-03T05:44:17.7175488Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-09-03T05:44:17.7176134Z         
2026-09-03T05:44:17.7176691Z         Error: Error waiting for changes in Update
2026-09-03T05:44:17.7177210Z         
2026-09-03T05:44:17.7177788Z           with mongodbatlas_search_index_api.test,
2026-09-03T05:44:17.7178951Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T05:44:17.7180047Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T05:44:17.7180602Z         
2026-09-03T05:44:17.7181255Z         group_id="6a98c2e18c6ee76bb0d54be9",
2026-09-03T05:44:17.7182008Z         cluster_name="test-acc-tf-c-5646429399751727716",
2026-09-03T05:44:17.7183011Z         index_id="6a98c757c4c2ba86c180a1eb": timeout while waiting for state to
2026-09-03T05:44:17.7184062Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-03T05:44:17.7184912Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (13644.19s)
```

  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0688474Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-03T10:02:47.0697290Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-03T10:02:47.0846118Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-03T10:02:47.0846748Z     resource_test.go:118: Step 1/3 error: Error running apply: exit status 1
2026-09-03T10:02:47.0847181Z         
2026-09-03T10:02:47.0847564Z         Error: Error waiting for changes in Create
2026-09-03T10:02:47.0847920Z         
2026-09-03T10:02:47.0848316Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0849062Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0849986Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0850364Z         
2026-09-03T10:02:47.0850708Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0851193Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0851817Z         index_id="6a99189a72d7295ca9908e41": timeout while waiting for state to
2026-09-03T10:02:47.0852474Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0853301Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-03T10:02:47.0854042Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-03T10:02:47.0854659Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (10805.75s)
```

- 2026-09-04 PASS an hour
- 2026-09-05

### Error 2026-09-05T04:57:17+00:00
```
2026-09-05T04:57:17.6504285Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-05T04:57:17.6510166Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-05T04:57:17.6572286Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-05T04:57:17.6572898Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-09-05T04:57:17.6573572Z         
2026-09-05T04:57:17.6573965Z         Error: Error waiting for changes in Update
2026-09-05T04:57:17.6574360Z         
2026-09-05T04:57:17.6574775Z           with mongodbatlas_search_index_api.test,
2026-09-05T04:57:17.6575460Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-05T04:57:17.6576077Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-05T04:57:17.6576520Z         
2026-09-05T04:57:17.6576885Z         group_id="6a9b652f1099178350983b6f",
2026-09-05T04:57:17.6577393Z         cluster_name="test-acc-tf-c-2329868758960774626",
2026-09-05T04:57:17.6577962Z         index_id="6a9b69e910991783509ac047": timeout while waiting for state to
2026-09-05T04:57:17.6578606Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-05T04:57:17.6579117Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (13281.83s)
```

- 2026-09-06: MISSING
- 2026-09-07
  - FAIL 3 hours

### Error 2026-09-07T05:48:17+00:00
```
2026-09-07T05:48:17.9808921Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-07T05:48:17.9818759Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-07T05:48:17.9932473Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-07T05:48:17.9933072Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-09-07T05:48:17.9933490Z         
2026-09-07T05:48:17.9933843Z         Error: Error waiting for changes in Update
2026-09-07T05:48:17.9934171Z         
2026-09-07T05:48:17.9934599Z           with mongodbatlas_search_index_api.test,
2026-09-07T05:48:17.9935786Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-07T05:48:17.9936916Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-07T05:48:17.9937469Z         
2026-09-07T05:48:17.9938013Z         group_id="6a9e09d2ce994148d59e6659",
2026-09-07T05:48:17.9938816Z         cluster_name="test-acc-tf-c-1313053707861581472",
2026-09-07T05:48:17.9939803Z         index_id="6a9e0e9ae6eed862900fdc25": timeout while waiting for state to
2026-09-07T05:48:17.9941177Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-07T05:48:17.9942111Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (13591.87s)
```

  - FAIL 3 hours

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

- 2026-09-15

### Error 2026-09-15T05:43:50+00:00
```
2026-09-15T05:43:50.3090666Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-15T05:43:50.3097063Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-15T05:43:50.3268530Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-15T05:43:50.3269322Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-09-15T05:43:50.3269840Z         
2026-09-15T05:43:50.3270257Z         Error: Error waiting for changes in Update
2026-09-15T05:43:50.3270607Z         
2026-09-15T05:43:50.3270977Z           with mongodbatlas_search_index_api.test,
2026-09-15T05:43:50.3271705Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-15T05:43:50.3272389Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-15T05:43:50.3272752Z         
2026-09-15T05:43:50.3273078Z         group_id="6aa894c6f45e19b0d3dcab24",
2026-09-15T05:43:50.3273846Z         cluster_name="test-acc-tf-c-6477351237734953754",
2026-09-15T05:43:50.3274486Z         index_id="6aa898f35fcf07afdd9eae0f": timeout while waiting for state to
2026-09-15T05:43:50.3275280Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-15T05:43:50.3275831Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (14365.59s)
```

- 2026-09-16

### Error 2026-09-16T05:43:44+00:00
```
2026-09-16T05:43:44.8870194Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-16T05:43:44.8876953Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-16T05:43:44.8961279Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-16T05:43:44.8962103Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-09-16T05:43:44.8962766Z         
2026-09-16T05:43:44.8963342Z         Error: Error waiting for changes in Update
2026-09-16T05:43:44.8963723Z         
2026-09-16T05:43:44.8964097Z           with mongodbatlas_search_index_api.test,
2026-09-16T05:43:44.8964816Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-16T05:43:44.8965484Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-16T05:43:44.8965847Z         
2026-09-16T05:43:44.8966180Z         group_id="6aa9e5e4013d831ec44b342e",
2026-09-16T05:43:44.8966642Z         cluster_name="test-acc-tf-c-750170190363952492",
2026-09-16T05:43:44.8967243Z         index_id="6aa9ebbfbb07cf4893636297": timeout while waiting for state to
2026-09-16T05:43:44.8967877Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-16T05:43:44.8969104Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (13099.58s)
```

- 2026-09-17 PASS 58 minutes
- 2026-09-18

### Error 2026-09-18T05:16:19+00:00
```
2026-09-18T05:16:19.5407110Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-18T05:16:19.5414028Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-18T05:16:19.5515400Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-18T05:16:19.5515911Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-09-18T05:16:19.5516261Z         
2026-09-18T05:16:19.5516573Z         Error: Error waiting for changes in Update
2026-09-18T05:16:19.5516855Z         
2026-09-18T05:16:19.5517185Z           with mongodbatlas_search_index_api.test,
2026-09-18T05:16:19.5517816Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-18T05:16:19.5518395Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-18T05:16:19.5518699Z         
2026-09-18T05:16:19.5518983Z         group_id="6aac88de1bd5f998a1452f76",
2026-09-18T05:16:19.5519390Z         cluster_name="test-acc-tf-c-3593569086852570367",
2026-09-18T05:16:19.5519921Z         index_id="6aac8efdacef019a417be1ea": timeout while waiting for state to
2026-09-18T05:16:19.5520481Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-18T05:16:19.5520940Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (13459.08s)
```

- 2026-09-19

### Error 2026-09-19T01:30:40+00:00
```
2026-09-19T01:30:40.9204939Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-19T01:30:40.9205278Z     resource_test.go:115: 
2026-09-19T01:30:40.9206025Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:30:40.9207497Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:115
2026-09-19T01:30:40.9208125Z         	Error:      	Received unexpected error:
2026-09-19T01:30:40.9209009Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:30:40.9209596Z         	Test:       	TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-19T01:30:40.9210016Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21

### Error 2026-09-21T05:48:45+00:00
```
2026-09-21T05:48:45.1963275Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-21T05:48:45.1975922Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-21T05:48:45.2196717Z 	running tests:
2026-09-21T05:48:45.2197267Z 		TestAccSearchIndexAPI_withStoredSourceBool (4h43m23s)
2026-09-21T05:48:45.2198122Z 		TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (4h43m23s)
```

- 2026-09-22
  - FAIL 3 hours

### Error 2026-09-22T05:06:24+00:00
```
2026-09-22T05:06:24.3121945Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-22T05:06:24.3128223Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-22T05:06:24.3145248Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-22T05:06:24.3145783Z     resource_test.go:118: Step 1/3 error: Error running apply: exit status 1
2026-09-22T05:06:24.3146127Z         
2026-09-22T05:06:24.3146558Z         Error: Error waiting for changes in Create
2026-09-22T05:06:24.3146838Z         
2026-09-22T05:06:24.3147190Z           with mongodbatlas_search_index_api.test,
2026-09-22T05:06:24.3147774Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-22T05:06:24.3148339Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-22T05:06:24.3148620Z         
2026-09-22T05:06:24.3148875Z         group_id="6ab1cf51a17d32e660138f1d",
2026-09-22T05:06:24.3149234Z         cluster_name="test-acc-tf-c-1242047262187896326",
2026-09-22T05:06:24.3149718Z         index_id="6ab1d4e9a17d32e66015ce39": timeout while waiting for state to
2026-09-22T05:06:24.3150273Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-22T05:06:24.3150867Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-22T05:06:24.3151500Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-22T05:06:24.3152053Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (10803.20s)
```

  - FAIL 3 hours

### Error 2026-09-22T12:46:47+00:00
```
2026-09-22T12:46:47.9745306Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-22T12:46:47.9759618Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-22T12:46:47.9831230Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-22T12:46:47.9832551Z     resource_test.go:118: Step 1/3 error: Error running apply: exit status 1
2026-09-22T12:46:47.9833308Z         
2026-09-22T12:46:47.9834080Z         Error: Error waiting for changes in Create
2026-09-22T12:46:47.9834690Z         
2026-09-22T12:46:47.9835365Z           with mongodbatlas_search_index_api.test,
2026-09-22T12:46:47.9836734Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-22T12:46:47.9838011Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-22T12:46:47.9838656Z         
2026-09-22T12:46:47.9839253Z         group_id="6ab23b4fd135efc1a7edf95a",
2026-09-22T12:46:47.9840285Z         cluster_name="test-acc-tf-c-7202313398832200026",
2026-09-22T12:46:47.9841418Z         index_id="6ab24122d0fd092caf984fa1": timeout while waiting for state to
2026-09-22T12:46:47.9842791Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-22T12:46:47.9844015Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-22T12:46:47.9845324Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-22T12:46:47.9851031Z   diagnostic_detail=
2026-09-22T12:46:47.9857021Z   
2026-09-22T12:46:47.9871727Z    test_terraform_path=/home/runner/work/_temp/4eee0bea-124c-4326-a033-b65c87cd4a74/terraform
2026-09-22T12:46:47.9980337Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (10805.36s)
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
- 2026-09-16 PASS 2 hours
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
