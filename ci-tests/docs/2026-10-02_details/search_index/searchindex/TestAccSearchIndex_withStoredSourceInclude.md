# search_index/searchindex/TestAccSearchIndex_withStoredSourceInclude Test Details
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
[2026-09-24 01:05](#error-2026-09-24t0105020000) |  | dev |  | 0.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 12 seconds
- 2026-09-03 PASS 10 seconds
- 2026-09-04 PASS 15 seconds
- 2026-09-05 PASS 11 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 12 seconds
- 2026-09-08 PASS 17 seconds
- 2026-09-09 PASS 14 seconds
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5238595Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2026-09-10T00:54:51.5238812Z     resource_search_index_test.go:307: 
2026-09-10T00:54:51.5239338Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5240366Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:325
2026-09-10T00:54:51.5241568Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:307
2026-09-10T00:54:51.5242422Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5243284Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5243695Z         	Test:       	TestAccSearchIndex_withStoredSourceInclude
2026-09-10T00:54:51.5243933Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (0.00s)
```

- 2026-09-11
  - PASS 14 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3775487Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2026-09-11T07:04:19.3775820Z     resource_search_index_test.go:307: 
2026-09-11T07:04:19.3776607Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3778152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:325
2026-09-11T07:04:19.3779706Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:307
2026-09-11T07:04:19.3780348Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3781330Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3782081Z         	Test:       	TestAccSearchIndex_withStoredSourceInclude
2026-09-11T07:04:19.3782437Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (0.00s)
```

- 2026-09-12 PASS 12 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 14 seconds
- 2026-09-15 PASS 14 seconds
- 2026-09-16 PASS 13 seconds
- 2026-09-17 PASS 12 seconds
- 2026-09-18 PASS 12 seconds
- 2026-09-19

### Error 2026-09-19T01:10:42+00:00
```
2026-09-19T01:10:42.1903812Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2026-09-19T01:10:42.1904221Z     resource_search_index_test.go:307: 
2026-09-19T01:10:42.1905209Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1907171Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:325
2026-09-19T01:10:42.1909160Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:307
2026-09-19T01:10:42.1909975Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1910984Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1911754Z         	Test:       	TestAccSearchIndex_withStoredSourceInclude
2026-09-19T01:10:42.1912785Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 14 seconds
- 2026-09-22 PASS 13 seconds
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.1044413Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2026-09-23T00:55:57.1044829Z     resource_search_index_test.go:308: 
2026-09-23T00:55:57.1045879Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.1047970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:326
2026-09-23T00:55:57.1050086Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:308
2026-09-23T00:55:57.1050945Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.1052802Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.1053959Z         	Test:       	TestAccSearchIndex_withStoredSourceInclude
2026-09-23T00:55:57.1054416Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2889702Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2026-09-23T08:40:08.2890034Z     resource_search_index_test.go:308: 
2026-09-23T08:40:08.2890812Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2892337Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:326
2026-09-23T08:40:08.2893887Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:308
2026-09-23T08:40:08.2894785Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2896126Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2896889Z         	Test:       	TestAccSearchIndex_withStoredSourceInclude
2026-09-23T08:40:08.2897259Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (0.00s)
```

- 2026-09-24

### Error 2026-09-24T01:05:02+00:00
```
2026-09-24T01:05:02.9345001Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2026-09-24T01:05:03.0260271Z   
2026-09-24T01:05:03.0261253Z     resource_search_index_test.go:308: Step 1/1 error: Error running pre-apply plan: exit status 1
2026-09-24T01:05:03.0261998Z         
2026-09-24T01:05:03.0262366Z         Error: Argument or block definition required
2026-09-24T01:05:03.0262698Z         
2026-09-24T01:05:03.0263310Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:03.0264149Z           25: 			lucene.standard
2026-09-24T01:05:03.0264425Z         
2026-09-24T01:05:03.0264925Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:03.0265786Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:03.0491796Z   
2026-09-24T01:05:03.0492461Z     panic.go:694: Error retrieving state, there may be dangling resources: exit status 1
2026-09-24T01:05:03.0492926Z         
2026-09-24T01:05:03.0493338Z         Error: Argument or block definition required
2026-09-24T01:05:03.0493806Z         
2026-09-24T01:05:03.0494394Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:03.0495060Z           25: 			lucene.standard
2026-09-24T01:05:03.0495326Z         
2026-09-24T01:05:03.0495826Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:03.0496396Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:03.0497051Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (0.12s)
```

- 2026-09-25 PASS 9 seconds
- 2026-09-26 PASS 9 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 9 seconds
- 2026-09-29 PASS 8 seconds
- 2026-09-30 PASS 11 seconds
- 2026-10-01 PASS 8 seconds
- 2026-10-02 PASS 8 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 13 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 13 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 15 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 15 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 9 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 9 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
