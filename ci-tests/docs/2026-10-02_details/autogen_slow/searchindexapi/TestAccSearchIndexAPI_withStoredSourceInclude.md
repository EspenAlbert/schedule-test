# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceInclude Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 15) FAIL(x 11) SKIP(x 11)
Success rate: 57.69%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 10804.00s
[2026-09-07 05:48](#error-2026-09-07t0548170000) |  | dev | timeout | 10803.06s
[2026-09-07 17:14](#error-2026-09-07t1714300000) |  | dev | timeout | 10803.02s
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 10803.01s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 0.00s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s
[2026-09-15 05:43](#error-2026-09-15t0543500000) |  | dev | timeout | 10804.01s
[2026-09-19 01:30](#error-2026-09-19t0130400000) |  | dev | timeout | 0.00s
[2026-09-21 05:48](#error-2026-09-21t0548450000) |  | dev | timeout | 10803.06s
[2026-09-22 12:46](#error-2026-09-22t1246470000) |  | dev | timeout | 10805.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS an hour
- 2026-09-03
  - PASS an hour
  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0691531Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-03T10:02:47.0695896Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-03T10:02:47.0773235Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-03T10:02:47.0773977Z     resource_test.go:184: Step 1/1 error: Error running apply: exit status 1
2026-09-03T10:02:47.0774425Z         
2026-09-03T10:02:47.0774811Z         Error: Error waiting for changes in Create
2026-09-03T10:02:47.0775162Z         
2026-09-03T10:02:47.0775556Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0776314Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0777032Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0777424Z         
2026-09-03T10:02:47.0777780Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0778280Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0778920Z         index_id="6a99189a72d7295ca9908e38": timeout while waiting for state to
2026-09-03T10:02:47.0779854Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0780562Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-03T10:02:47.0781316Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-03T10:02:47.0781901Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (10804.00s)
```

- 2026-09-04 PASS an hour
- 2026-09-05 PASS 41 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - FAIL 3 hours

### Error 2026-09-07T05:48:17+00:00
```
2026-09-07T05:48:17.9811829Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-07T05:48:17.9814370Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-07T05:48:17.9862777Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-07T05:48:17.9863386Z     resource_test.go:184: Step 1/1 error: Error running apply: exit status 1
2026-09-07T05:48:17.9863811Z         
2026-09-07T05:48:17.9864170Z         Error: Error waiting for changes in Create
2026-09-07T05:48:17.9864502Z         
2026-09-07T05:48:17.9864871Z           with mongodbatlas_search_index_api.test,
2026-09-07T05:48:17.9865584Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-07T05:48:17.9866262Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-07T05:48:17.9866628Z         
2026-09-07T05:48:17.9867193Z         group_id="6a9e09d2ce994148d59e6659",
2026-09-07T05:48:17.9867687Z         cluster_name="test-acc-tf-c-1313053707861581472",
2026-09-07T05:48:17.9868304Z         index_id="6a9e0e9ace994148d5a1775b": timeout while waiting for state to
2026-09-07T05:48:17.9868943Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-07T05:48:17.9869620Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-07T05:48:17.9870653Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-07T05:48:17.9871983Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (10803.55s)
```

  - FAIL 3 hours

### Error 2026-09-07T17:14:30+00:00
```
2026-09-07T17:14:30.4729752Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-07T17:14:30.4738259Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-07T17:14:30.4770662Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-07T17:14:30.4771707Z     resource_test.go:184: Step 1/1 error: Error running apply: exit status 1
2026-09-07T17:14:30.4772465Z         
2026-09-07T17:14:30.4773346Z         Error: Error waiting for changes in Create
2026-09-07T17:14:30.4773966Z         
2026-09-07T17:14:30.4774646Z           with mongodbatlas_search_index_api.test,
2026-09-07T17:14:30.4776036Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-07T17:14:30.4777317Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-07T17:14:30.4777980Z         
2026-09-07T17:14:30.4778561Z         group_id="6a9eaaa643d6e4ba6d1eae49",
2026-09-07T17:14:30.4779379Z         cluster_name="test-acc-tf-c-536976955874991021",
2026-09-07T17:14:30.4780759Z         index_id="6a9eafa643d6e4ba6d1f94fe": timeout while waiting for state to
2026-09-07T17:14:30.4781988Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-07T17:14:30.4783495Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-07T17:14:30.4784847Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-07T17:14:30.4785875Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (10803.21s)
```

- 2026-09-08

### Error 2026-09-08T05:00:43+00:00
```
2026-09-08T05:00:43.6866563Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-08T05:00:43.6874110Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-08T05:00:43.6916956Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-08T05:00:43.6917559Z     resource_test.go:184: Step 1/1 error: Error running apply: exit status 1
2026-09-08T05:00:43.6917975Z         
2026-09-08T05:00:43.6918330Z         Error: Error waiting for changes in Create
2026-09-08T05:00:43.6918654Z         
2026-09-08T05:00:43.6919017Z           with mongodbatlas_search_index_api.test,
2026-09-08T05:00:43.6919987Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-08T05:00:43.6920773Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-08T05:00:43.6921137Z         
2026-09-08T05:00:43.6921457Z         group_id="6a9f5a9228da0e5fc08e7890",
2026-09-08T05:00:43.6921940Z         cluster_name="test-acc-tf-c-4534713065942648190",
2026-09-08T05:00:43.6922556Z         index_id="6a9f5f9228da0e5fc0901b61": timeout while waiting for state to
2026-09-08T05:00:43.6923190Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-08T05:00:43.6923867Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-08T05:00:43.6924577Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-08T05:00:43.6925863Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (10803.08s)
```

- 2026-09-09 PASS 2 hours
- 2026-09-10

### Error 2026-09-10T01:33:06+00:00
```
2026-09-10T01:33:06.1329759Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-10T01:33:06.1330182Z     resource_test.go:181: 
2026-09-10T01:33:06.1331234Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T01:33:06.1333269Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:181
2026-09-10T01:33:06.1334300Z         	Error:      	Received unexpected error:
2026-09-10T01:33:06.1335583Z         	            	sample dataset load 6aa201365b8d9510e89370dd failed for cluster 6aa1fcb04ab31ba34525537f:test-acc-tf-c-1596466085034706675
2026-09-10T01:33:06.1336413Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-10T01:33:06.1336907Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (0.00s)
```

- 2026-09-11
  - FAIL unknown

### Error 2026-09-11T03:01:53+00:00
```
2026-09-11T03:01:53.1642554Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-11T03:01:53.1642866Z     resource_test.go:181: 
2026-09-11T03:01:53.1643628Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T03:01:53.1645159Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:181
2026-09-11T03:01:53.1645791Z         	Error:      	Received unexpected error:
2026-09-11T03:01:53.1646759Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-11T03:01:53.1647319Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-11T03:01:53.1647693Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (0.00s)
```

  - FAIL unknown

### Error 2026-09-11T07:31:03+00:00
```
2026-09-11T07:31:03.2026191Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-11T07:31:03.2026994Z     resource_test.go:181: 
2026-09-11T07:31:03.2028477Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:31:03.2031324Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:181
2026-09-11T07:31:03.2032657Z         	Error:      	Received unexpected error:
2026-09-11T07:31:03.2034445Z         	            	sample dataset load 6aa3a5fff7fcc4bbebf76935 failed for cluster 6aa3a28df7fcc4bbebf53df1:test-acc-tf-c-1260780199030207545
2026-09-11T07:31:03.2035633Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-11T07:31:03.2036345Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (0.00s)
```

- 2026-09-12 PASS 36 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 30 minutes
- 2026-09-15

### Error 2026-09-15T05:43:50+00:00
```
2026-09-15T05:43:50.3093195Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-15T05:43:50.3096110Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-15T05:43:50.3187475Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-15T05:43:50.3188200Z     resource_test.go:184: Step 1/1 error: Error running apply: exit status 1
2026-09-15T05:43:50.3188628Z         
2026-09-15T05:43:50.3188984Z         Error: Error waiting for changes in Create
2026-09-15T05:43:50.3189319Z         
2026-09-15T05:43:50.3189694Z           with mongodbatlas_search_index_api.test,
2026-09-15T05:43:50.3190432Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-15T05:43:50.3191129Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-15T05:43:50.3191491Z         
2026-09-15T05:43:50.3191818Z         group_id="6aa894c6f45e19b0d3dcab24",
2026-09-15T05:43:50.3192299Z         cluster_name="test-acc-tf-c-6477351237734953754",
2026-09-15T05:43:50.3192924Z         index_id="6aa898f3f45e19b0d3e0ed35": timeout while waiting for state to
2026-09-15T05:43:50.3193814Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-15T05:43:50.3194522Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-15T05:43:50.3195254Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-15T05:43:50.3196920Z   diagnostic_detail=
2026-09-15T05:43:50.3200833Z    diagnostic_severity=ERROR diagnostic_summary="Error waiting for changes in Create" tf_rpc=ApplyResourceChange tf_req_id=d40a6b40-27aa-6985-1987-d55a98665a39 tf_resource_type=mongodbatlas_search_index_api
2026-09-15T05:43:50.3210144Z    test_terraform_path=/home/runner/work/_temp/559f0c7d-b56a-4de9-b79d-ca5d1c7d9706/terraform
2026-09-15T05:43:50.3219125Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (10804.15s)
```

- 2026-09-16 PASS an hour
- 2026-09-17 PASS 24 minutes
- 2026-09-18 PASS 58 minutes
- 2026-09-19

### Error 2026-09-19T01:30:40+00:00
```
2026-09-19T01:30:40.9220866Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-19T01:30:40.9221192Z     resource_test.go:181: 
2026-09-19T01:30:40.9221957Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:30:40.9223424Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:181
2026-09-19T01:30:40.9224061Z         	Error:      	Received unexpected error:
2026-09-19T01:30:40.9225000Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:30:40.9225550Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-19T01:30:40.9225917Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21

### Error 2026-09-21T05:48:45+00:00
```
2026-09-21T05:48:45.1967431Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-21T05:48:45.1971526Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-21T05:48:45.2100246Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-21T05:48:45.2101249Z     resource_test.go:184: Step 1/1 error: Error running apply: exit status 1
2026-09-21T05:48:45.2101980Z         
2026-09-21T05:48:45.2102807Z         Error: Error waiting for changes in Create
2026-09-21T05:48:45.2103396Z         
2026-09-21T05:48:45.2104021Z           with mongodbatlas_search_index_api.test,
2026-09-21T05:48:45.2105316Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-21T05:48:45.2106478Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-21T05:48:45.2107101Z         
2026-09-21T05:48:45.2107658Z         group_id="6ab07eed79951ab0058245fb",
2026-09-21T05:48:45.2108481Z         cluster_name="test-acc-tf-c-6050672708674164813",
2026-09-21T05:48:45.2109549Z         index_id="6ab082d350f317768c30e8b6": timeout while waiting for state to
2026-09-21T05:48:45.2110671Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-21T05:48:45.2111861Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-21T05:48:45.2113358Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-21T05:48:45.2114318Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (10803.58s)
```

- 2026-09-22
  - PASS 31 minutes
  - FAIL 3 hours

### Error 2026-09-22T12:46:47+00:00
```
2026-09-22T12:46:47.9751458Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-22T12:46:47.9756418Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-22T12:46:47.9925248Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-22T12:46:47.9926299Z     resource_test.go:184: Step 1/1 error: Error running apply: exit status 1
2026-09-22T12:46:47.9927054Z         
2026-09-22T12:46:47.9927722Z         Error: Error waiting for changes in Create
2026-09-22T12:46:47.9928322Z         
2026-09-22T12:46:47.9929002Z           with mongodbatlas_search_index_api.test,
2026-09-22T12:46:47.9930327Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-22T12:46:47.9931560Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-22T12:46:47.9932215Z         
2026-09-22T12:46:47.9933035Z         group_id="6ab23b4fd135efc1a7edf95a",
2026-09-22T12:46:47.9933886Z         cluster_name="test-acc-tf-c-7202313398832200026",
2026-09-22T12:46:47.9935006Z         index_id="6ab24122d0fd092caf984f99": timeout while waiting for state to
2026-09-22T12:46:47.9936199Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-22T12:46:47.9937346Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-22T12:46:47.9938560Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-22T12:46:47.9943313Z   diagnostic_detail=
2026-09-22T12:46:47.9949365Z    diagnostic_severity=ERROR diagnostic_summary="Error waiting for changes in Create"
2026-09-22T12:46:47.9963864Z    test_terraform_path=/home/runner/work/_temp/4eee0bea-124c-4326-a033-b65c87cd4a74/terraform test_name=TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers test_working_directory=/tmp/plugintest2154259796 test_step_number=1
2026-09-22T12:46:48.0024571Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (10805.45s)
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
- 2026-09-06 PASS 33 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 42 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 49 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 28 minutes
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
