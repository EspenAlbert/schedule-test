# search_index/searchindex/TestAccSearchIndex_withSearchType Test Details
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
[2026-09-24 01:05](#error-2026-09-24t0105000000) |  | dev |  | 0.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 14 seconds
- 2026-09-03 PASS 11 seconds
- 2026-09-04 PASS 12 seconds
- 2026-09-05 PASS 11 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 13 seconds
- 2026-09-08 PASS 17 seconds
- 2026-09-09 PASS 13 seconds
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5181646Z === RUN   TestAccSearchIndex_withSearchType
2026-09-10T00:54:51.5181867Z     resource_search_index_test.go:22: 
2026-09-10T00:54:51.5182735Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5184259Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:22
2026-09-10T00:54:51.5185032Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5186021Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5186426Z         	Test:       	TestAccSearchIndex_withSearchType
2026-09-10T00:54:51.5186648Z --- FAIL: TestAccSearchIndex_withSearchType (0.00s)
```

- 2026-09-11
  - PASS 15 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3696372Z === RUN   TestAccSearchIndex_withSearchType
2026-09-11T07:04:19.3696672Z     resource_search_index_test.go:22: 
2026-09-11T07:04:19.3697457Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3698994Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:22
2026-09-11T07:04:19.3699640Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3700618Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3701195Z         	Test:       	TestAccSearchIndex_withSearchType
2026-09-11T07:04:19.3701507Z --- FAIL: TestAccSearchIndex_withSearchType (0.00s)
```

- 2026-09-12 PASS 12 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 14 seconds
- 2026-09-15 PASS 14 seconds
- 2026-09-16 PASS 13 seconds
- 2026-09-17 PASS 13 seconds
- 2026-09-18 PASS 13 seconds
- 2026-09-19

### Error 2026-09-19T01:10:42+00:00
```
2026-09-19T01:10:42.1804775Z === RUN   TestAccSearchIndex_withSearchType
2026-09-19T01:10:42.1805384Z     resource_search_index_test.go:22: 
2026-09-19T01:10:42.1806962Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1810047Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:22
2026-09-19T01:10:42.1811398Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1812716Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1813381Z         	Test:       	TestAccSearchIndex_withSearchType
2026-09-19T01:10:42.1813787Z --- FAIL: TestAccSearchIndex_withSearchType (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 13 seconds
- 2026-09-22 PASS 12 seconds
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.0927751Z === RUN   TestAccSearchIndex_withSearchType
2026-09-23T00:55:57.0928157Z     resource_search_index_test.go:22: 
2026-09-23T00:55:57.0929221Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.0931290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:22
2026-09-23T00:55:57.0932151Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.0934288Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.0935310Z         	Test:       	TestAccSearchIndex_withSearchType
2026-09-23T00:55:57.0935725Z --- FAIL: TestAccSearchIndex_withSearchType (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2797857Z === RUN   TestAccSearchIndex_withSearchType
2026-09-23T08:40:08.2798233Z     resource_search_index_test.go:22: 
2026-09-23T08:40:08.2799286Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2801507Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:22
2026-09-23T08:40:08.2802509Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2804725Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2805901Z         	Test:       	TestAccSearchIndex_withSearchType
2026-09-23T08:40:08.2806238Z --- FAIL: TestAccSearchIndex_withSearchType (0.00s)
```

- 2026-09-24

### Error 2026-09-24T01:05:00+00:00
```
2026-09-24T01:05:00.8178419Z === RUN   TestAccSearchIndex_withSearchType
2026-09-24T01:05:00.9081197Z   
2026-09-24T01:05:00.9082160Z     resource_search_index_test.go:25: Step 1/1 error: Error running pre-apply plan: exit status 1
2026-09-24T01:05:00.9082991Z         
2026-09-24T01:05:00.9083650Z         Error: Argument or block definition required
2026-09-24T01:05:00.9084262Z         
2026-09-24T01:05:00.9085311Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:00.9086247Z           25: 			lucene.standard
2026-09-24T01:05:00.9086708Z         
2026-09-24T01:05:00.9087827Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:00.9088798Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:00.9326659Z    test_name=TestAccSearchIndex_withSearchType test_terraform_path=/home/runner/work/_temp/65314072-54ef-40bb-880b-1a2cfea0de4d/terraform test_working_directory=/tmp/plugintest3655754574
2026-09-24T01:05:00.9328458Z     panic.go:694: Error retrieving state, there may be dangling resources: exit status 1
2026-09-24T01:05:00.9329201Z         
2026-09-24T01:05:00.9329568Z         Error: Argument or block definition required
2026-09-24T01:05:00.9329893Z         
2026-09-24T01:05:00.9330651Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:00.9331193Z           25: 			lucene.standard
2026-09-24T01:05:00.9331556Z         
2026-09-24T01:05:00.9332125Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:00.9332698Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:00.9333093Z --- FAIL: TestAccSearchIndex_withSearchType (0.12s)
```

- 2026-09-25 PASS 14 seconds
- 2026-09-26 PASS 8 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 8 seconds
- 2026-09-29 PASS 8 seconds
- 2026-09-30 PASS 9 seconds
- 2026-10-01 PASS 8 seconds
- 2026-10-02 PASS 8 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 14 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 15 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 12 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 13 seconds
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
