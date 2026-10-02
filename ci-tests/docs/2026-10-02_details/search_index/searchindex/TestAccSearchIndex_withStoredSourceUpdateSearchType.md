# search_index/searchindex/TestAccSearchIndex_withStoredSourceUpdateSearchType Test Details
# Found 35 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-10 00:54](#error-2026-09-10t0054510000) |  | dev |  | 0.00s
[2026-09-11 07:04](#error-2026-09-11t0704190000) |  | dev |  | 0.00s
[2026-09-19 01:10](#error-2026-09-19t0110420000) |  | dev | timeout | 0.00s
[2026-09-23 00:55](#error-2026-09-23t0055570000) |  | dev |  | 0.00s
[2026-09-23 08:40](#error-2026-09-23t0840080000) |  | dev |  | 0.00s
[2026-09-24 01:05](#error-2026-09-24t0105030000) |  | dev |  | 0.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 16 seconds
- 2026-09-03 PASS 12 seconds
- 2026-09-04 PASS 17 seconds
- 2026-09-05 PASS 12 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 16 seconds
- 2026-09-08 PASS 19 seconds
- 2026-09-09 PASS 15 seconds
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5254280Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-09-10T00:54:51.5254516Z     resource_search_index_test.go:319: 
2026-09-10T00:54:51.5255045Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5256074Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:344
2026-09-10T00:54:51.5257116Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:319
2026-09-10T00:54:51.5257544Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5258178Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5258611Z         	Test:       	TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-09-10T00:54:51.5258886Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (0.00s)
```

- 2026-09-11
  - PASS 16 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3797830Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-09-11T07:04:19.3798180Z     resource_search_index_test.go:319: 
2026-09-11T07:04:19.3798964Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3800502Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:344
2026-09-11T07:04:19.3802204Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:319
2026-09-11T07:04:19.3802862Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3803854Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3804500Z         	Test:       	TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-09-11T07:04:19.3804904Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (0.00s)
```

- 2026-09-12 PASS 15 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 16 seconds
- 2026-09-15 PASS 16 seconds
- 2026-09-16 PASS 16 seconds
- 2026-09-17 PASS 15 seconds
- 2026-09-18 PASS 15 seconds
- 2026-09-19

### Error 2026-09-19T01:10:42+00:00
```
2026-09-19T01:10:42.1931406Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-09-19T01:10:42.1931962Z     resource_search_index_test.go:319: 
2026-09-19T01:10:42.1932961Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1934927Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:344
2026-09-19T01:10:42.1936918Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:319
2026-09-19T01:10:42.1937738Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1938739Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1939451Z         	Test:       	TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-09-19T01:10:42.1939956Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 17 seconds
- 2026-09-22 PASS 14 seconds
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.1076086Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-09-23T00:55:57.1076530Z     resource_search_index_test.go:320: 
2026-09-23T00:55:57.1077575Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.1079649Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:345
2026-09-23T00:55:57.1081752Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:320
2026-09-23T00:55:57.1082599Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.1084570Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.1085666Z         	Test:       	TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-09-23T00:55:57.1086195Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2913539Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-09-23T08:40:08.2913894Z     resource_search_index_test.go:320: 
2026-09-23T08:40:08.2914918Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2916455Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:345
2026-09-23T08:40:08.2918043Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:320
2026-09-23T08:40:08.2918683Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2920055Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2920876Z         	Test:       	TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-09-23T08:40:08.2921295Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (0.00s)
```

- 2026-09-24

### Error 2026-09-24T01:05:03+00:00
```
2026-09-24T01:05:03.2788241Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-09-24T01:05:03.3710952Z    test_terraform_path=/home/runner/work/_temp/65314072-54ef-40bb-880b-1a2cfea0de4d/terraform test_name=TestAccSearchIndex_withStoredSourceUpdateSearchType test_working_directory=/tmp/plugintest3335482695
2026-09-24T01:05:03.3713232Z     resource_search_index_test.go:320: Step 1/2 error: Error running pre-apply plan: exit status 1
2026-09-24T01:05:03.3714092Z         
2026-09-24T01:05:03.3714729Z         Error: Argument or block definition required
2026-09-24T01:05:03.3715313Z         
2026-09-24T01:05:03.3716361Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:03.3717300Z           25: 			lucene.standard
2026-09-24T01:05:03.3718034Z         
2026-09-24T01:05:03.3718949Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:03.3720044Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:03.3947970Z   
2026-09-24T01:05:03.3948492Z     panic.go:694: Error retrieving state, there may be dangling resources: exit status 1
2026-09-24T01:05:03.3948952Z         
2026-09-24T01:05:03.3949307Z         Error: Argument or block definition required
2026-09-24T01:05:03.3949635Z         
2026-09-24T01:05:03.3950439Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:03.3950954Z           25: 			lucene.standard
2026-09-24T01:05:03.3951229Z         
2026-09-24T01:05:03.3951723Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:03.3952314Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:03.3952771Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (0.12s)
```

- 2026-09-25 PASS 12 seconds
- 2026-09-26 PASS 9 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 9 seconds
- 2026-09-29 PASS 10 seconds
- 2026-09-30 PASS 12 seconds
- 2026-10-01 PASS 14 seconds
- 2026-10-02 PASS 10 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 17 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 18 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 15 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 16 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 11 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 11 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
