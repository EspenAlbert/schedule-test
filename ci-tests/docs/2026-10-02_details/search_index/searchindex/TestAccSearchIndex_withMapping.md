# search_index/searchindex/TestAccSearchIndex_withMapping Test Details
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
- 2026-09-02 PASS 15 seconds
- 2026-09-03 PASS 10 seconds
- 2026-09-04 PASS 12 seconds
- 2026-09-05 PASS 10 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 13 seconds
- 2026-09-08 PASS 17 seconds
- 2026-09-09 PASS 15 seconds
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5186851Z === RUN   TestAccSearchIndex_withMapping
2026-09-10T00:54:51.5187063Z     resource_search_index_test.go:40: 
2026-09-10T00:54:51.5187606Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5188851Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:40
2026-09-10T00:54:51.5189298Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5189938Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5190324Z         	Test:       	TestAccSearchIndex_withMapping
2026-09-10T00:54:51.5190534Z --- FAIL: TestAccSearchIndex_withMapping (0.00s)
```

- 2026-09-11
  - PASS 14 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3701960Z === RUN   TestAccSearchIndex_withMapping
2026-09-11T07:04:19.3702249Z     resource_search_index_test.go:40: 
2026-09-11T07:04:19.3703018Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3704555Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:40
2026-09-11T07:04:19.3705196Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3706167Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3706745Z         	Test:       	TestAccSearchIndex_withMapping
2026-09-11T07:04:19.3707037Z --- FAIL: TestAccSearchIndex_withMapping (0.00s)
```

- 2026-09-12 PASS 13 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 13 seconds
- 2026-09-15 PASS 13 seconds
- 2026-09-16 PASS 13 seconds
- 2026-09-17 PASS 13 seconds
- 2026-09-18 PASS 14 seconds
- 2026-09-19

### Error 2026-09-19T01:10:42+00:00
```
2026-09-19T01:10:42.1814167Z === RUN   TestAccSearchIndex_withMapping
2026-09-19T01:10:42.1814559Z     resource_search_index_test.go:40: 
2026-09-19T01:10:42.1815590Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1817572Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:40
2026-09-19T01:10:42.1818691Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1819733Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1820379Z         	Test:       	TestAccSearchIndex_withMapping
2026-09-19T01:10:42.1820760Z --- FAIL: TestAccSearchIndex_withMapping (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 12 seconds
- 2026-09-22 PASS 12 seconds
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.0936100Z === RUN   TestAccSearchIndex_withMapping
2026-09-23T00:55:57.0936485Z     resource_search_index_test.go:40: 
2026-09-23T00:55:57.0937715Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.0939783Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:40
2026-09-23T00:55:57.0940635Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.0942489Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.0943660Z         	Test:       	TestAccSearchIndex_withMapping
2026-09-23T00:55:57.0944063Z --- FAIL: TestAccSearchIndex_withMapping (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2806554Z === RUN   TestAccSearchIndex_withMapping
2026-09-23T08:40:08.2806887Z     resource_search_index_test.go:40: 
2026-09-23T08:40:08.2807921Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2809958Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:40
2026-09-23T08:40:08.2811033Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2812605Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2813357Z         	Test:       	TestAccSearchIndex_withMapping
2026-09-23T08:40:08.2813675Z --- FAIL: TestAccSearchIndex_withMapping (0.00s)
```

- 2026-09-24

### Error 2026-09-24T01:05:00+00:00
```
2026-09-24T01:05:00.9333459Z === RUN   TestAccSearchIndex_withMapping
2026-09-24T01:05:01.0252247Z   
2026-09-24T01:05:01.0253016Z     resource_search_index_test.go:43: Step 1/1 error: Error running pre-apply plan: exit status 1
2026-09-24T01:05:01.0253542Z         
2026-09-24T01:05:01.0253908Z         Error: Argument or block definition required
2026-09-24T01:05:01.0254385Z         
2026-09-24T01:05:01.0254985Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:01.0255758Z           25: 			lucene.standard
2026-09-24T01:05:01.0256046Z         
2026-09-24T01:05:01.0256790Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:01.0258077Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:01.0482610Z   
2026-09-24T01:05:01.0483258Z     panic.go:694: Error retrieving state, there may be dangling resources: exit status 1
2026-09-24T01:05:01.0483727Z         
2026-09-24T01:05:01.0484170Z         Error: Argument or block definition required
2026-09-24T01:05:01.0484551Z         
2026-09-24T01:05:01.0485128Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:01.0485827Z           25: 			lucene.standard
2026-09-24T01:05:01.0486105Z         
2026-09-24T01:05:01.0486757Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:01.0487377Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:01.0488029Z --- FAIL: TestAccSearchIndex_withMapping (0.12s)
```

- 2026-09-25 PASS 11 seconds
- 2026-09-26 PASS 8 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 8 seconds
- 2026-09-29 PASS 9 seconds
- 2026-09-30 PASS 10 seconds
- 2026-10-01 PASS 9 seconds
- 2026-10-02 PASS 8 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 15 seconds
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
- 2026-09-20 PASS 11 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 8 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 8 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
