# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceInclude Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, FAIL(x 5) PASS(x 4)
Success rate: 44.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-07 17:14](#error-2026-09-07t1714300000) |  | dev | timeout | 10803.02s
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 10803.01s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 0.00s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s

### Timeline
- 2026-09-07

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

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 42 minutes
- 2026-09-14: MISSING
