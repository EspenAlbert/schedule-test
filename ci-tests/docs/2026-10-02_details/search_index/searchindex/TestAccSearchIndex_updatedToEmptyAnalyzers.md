# search_index/searchindex/TestAccSearchIndex_updatedToEmptyAnalyzers Test Details
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
[2026-09-24 01:05](#error-2026-09-24t0105010000) |  | dev |  | 0.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 18 seconds
- 2026-09-03 PASS 15 seconds
- 2026-09-04 PASS 18 seconds
- 2026-09-05 PASS 13 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 18 seconds
- 2026-09-08 PASS 20 seconds
- 2026-09-09 PASS 16 seconds
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5202302Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2026-09-10T00:54:51.5202552Z     resource_search_index_test.go:146: 
2026-09-10T00:54:51.5203083Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5204121Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:146
2026-09-10T00:54:51.5204556Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5205284Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5205699Z         	Test:       	TestAccSearchIndex_updatedToEmptyAnalyzers
2026-09-10T00:54:51.5205945Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (0.00s)
```

- 2026-09-11
  - PASS 17 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3724685Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2026-09-11T07:04:19.3725012Z     resource_search_index_test.go:146: 
2026-09-11T07:04:19.3725793Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3727343Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:146
2026-09-11T07:04:19.3727996Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3728968Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3729576Z         	Test:       	TestAccSearchIndex_updatedToEmptyAnalyzers
2026-09-11T07:04:19.3729922Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (0.00s)
```

- 2026-09-12 PASS 16 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 17 seconds
- 2026-09-15 PASS 16 seconds
- 2026-09-16 PASS 17 seconds
- 2026-09-17 PASS 15 seconds
- 2026-09-18 PASS 16 seconds
- 2026-09-19

### Error 2026-09-19T01:10:42+00:00
```
2026-09-19T01:10:42.1841978Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2026-09-19T01:10:42.1842392Z     resource_search_index_test.go:146: 
2026-09-19T01:10:42.1843382Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1845349Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:146
2026-09-19T01:10:42.1846177Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1847187Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1847872Z         	Test:       	TestAccSearchIndex_updatedToEmptyAnalyzers
2026-09-19T01:10:42.1848475Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 16 seconds
- 2026-09-22 PASS 14 seconds
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.0969551Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2026-09-23T00:55:57.0969969Z     resource_search_index_test.go:146: 
2026-09-23T00:55:57.0971009Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.0973234Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:146
2026-09-23T00:55:57.0974247Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.0976083Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.0977113Z         	Test:       	TestAccSearchIndex_updatedToEmptyAnalyzers
2026-09-23T00:55:57.0977572Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2833159Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2026-09-23T08:40:08.2833499Z     resource_search_index_test.go:146: 
2026-09-23T08:40:08.2834450Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2836093Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:146
2026-09-23T08:40:08.2836740Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2838098Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2838881Z         	Test:       	TestAccSearchIndex_updatedToEmptyAnalyzers
2026-09-23T08:40:08.2839250Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (0.00s)
```

- 2026-09-24

### Error 2026-09-24T01:05:01+00:00
```
2026-09-24T01:05:01.5997763Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2026-09-24T01:05:01.6923677Z   
2026-09-24T01:05:01.6924502Z     resource_search_index_test.go:149: Step 1/3 error: Error running pre-apply plan: exit status 1
2026-09-24T01:05:01.6925029Z         
2026-09-24T01:05:01.6925393Z         Error: Argument or block definition required
2026-09-24T01:05:01.6925733Z         
2026-09-24T01:05:01.6926324Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:01.6926842Z           25: 			lucene.standard
2026-09-24T01:05:01.6927113Z         
2026-09-24T01:05:01.6927867Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:01.6928568Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:01.7179084Z   
2026-09-24T01:05:01.7179935Z     panic.go:694: Error retrieving state, there may be dangling resources: exit status 1
2026-09-24T01:05:01.7180592Z         
2026-09-24T01:05:01.7181180Z         Error: Argument or block definition required
2026-09-24T01:05:01.7181738Z         
2026-09-24T01:05:01.7182798Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:01.7183712Z           25: 			lucene.standard
2026-09-24T01:05:01.7184167Z         
2026-09-24T01:05:01.7185052Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:01.7186431Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:01.7187201Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (0.12s)
```

- 2026-09-25 PASS 13 seconds
- 2026-09-26 PASS 10 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 11 seconds
- 2026-09-29 PASS 10 seconds
- 2026-09-30 PASS 17 seconds
- 2026-10-01 PASS 11 seconds
- 2026-10-02 PASS 12 seconds

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
- 2026-09-13 PASS 17 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 16 seconds
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
- 2026-09-27 PASS 20 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 20 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
