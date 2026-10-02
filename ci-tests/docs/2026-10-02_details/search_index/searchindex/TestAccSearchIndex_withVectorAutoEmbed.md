# search_index/searchindex/TestAccSearchIndex_withVectorAutoEmbed Test Details
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
[2026-09-24 01:05](#error-2026-09-24t0105020000) |  | dev |  | 0.03s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 18 seconds
- 2026-09-03 PASS 14 seconds
- 2026-09-04 PASS 18 seconds
- 2026-09-05 PASS 15 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 16 seconds
- 2026-09-08 PASS 20 seconds
- 2026-09-09 PASS 17 seconds
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5216742Z === RUN   TestAccSearchIndex_withVectorAutoEmbed
2026-09-10T00:54:51.5216959Z     resource_search_index_test.go:198: 
2026-09-10T00:54:51.5217491Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5218535Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:198
2026-09-10T00:54:51.5218973Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5219615Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5220023Z         	Test:       	TestAccSearchIndex_withVectorAutoEmbed
2026-09-10T00:54:51.5220474Z --- FAIL: TestAccSearchIndex_withVectorAutoEmbed (0.00s)
```

- 2026-09-11
  - PASS 17 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3743520Z === RUN   TestAccSearchIndex_withVectorAutoEmbed
2026-09-11T07:04:19.3743832Z     resource_search_index_test.go:198: 
2026-09-11T07:04:19.3744618Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3746447Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:198
2026-09-11T07:04:19.3747104Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3748081Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3748675Z         	Test:       	TestAccSearchIndex_withVectorAutoEmbed
2026-09-11T07:04:19.3749001Z --- FAIL: TestAccSearchIndex_withVectorAutoEmbed (0.00s)
```

- 2026-09-12 PASS 16 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 16 seconds
- 2026-09-15 PASS 16 seconds
- 2026-09-16 PASS 16 seconds
- 2026-09-17 PASS 15 seconds
- 2026-09-18 PASS 17 seconds
- 2026-09-19

### Error 2026-09-19T01:10:42+00:00
```
2026-09-19T01:10:42.1864716Z === RUN   TestAccSearchIndex_withVectorAutoEmbed
2026-09-19T01:10:42.1865109Z     resource_search_index_test.go:198: 
2026-09-19T01:10:42.1866094Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1868046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:198
2026-09-19T01:10:42.1868875Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1869879Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1870530Z         	Test:       	TestAccSearchIndex_withVectorAutoEmbed
2026-09-19T01:10:42.1870962Z --- FAIL: TestAccSearchIndex_withVectorAutoEmbed (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 16 seconds
- 2026-09-22 PASS 16 seconds
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.0988254Z === RUN   TestAccSearchIndex_withVectorAutoEmbed
2026-09-23T00:55:57.0988651Z     resource_search_index_test.go:176: 
2026-09-23T00:55:57.0989712Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.0991769Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:176
2026-09-23T00:55:57.0992614Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.0994590Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.0995625Z         	Test:       	TestAccSearchIndex_withVectorAutoEmbed
2026-09-23T00:55:57.0996065Z --- FAIL: TestAccSearchIndex_withVectorAutoEmbed (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2847564Z === RUN   TestAccSearchIndex_withVectorAutoEmbed
2026-09-23T08:40:08.2847887Z     resource_search_index_test.go:176: 
2026-09-23T08:40:08.2848663Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2850216Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:176
2026-09-23T08:40:08.2850855Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2852220Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2852996Z         	Test:       	TestAccSearchIndex_withVectorAutoEmbed
2026-09-23T08:40:08.2853341Z --- FAIL: TestAccSearchIndex_withVectorAutoEmbed (0.00s)
```

- 2026-09-24

### Error 2026-09-24T01:05:02+00:00
```
2026-09-24T01:05:02.0416913Z === RUN   TestAccSearchIndex_withVectorAutoEmbed
2026-09-24T01:05:02.1751353Z 2026/09/24 01:05:02 [ERROR] cannot unmarshal new vector search index json invalid character 'l' looking for beginning of value
2026-09-24T01:05:02.2981914Z 2026/09/24 01:05:02 [ERROR] cannot unmarshal new vector search index json invalid character 'l' looking for beginning of value
2026-09-24T01:05:02.2995538Z 2026/09/24 01:05:02 [ERROR] cannot unmarshal new vector search index json invalid character 'l' looking for beginning of value
2026-09-24T01:05:02.3036336Z    test_name=TestAccSearchIndex_withVectorAutoEmbed
2026-09-24T01:05:02.3037041Z     resource_search_index_test.go:179: Step 1/2 error: Error running apply: exit status 1
2026-09-24T01:05:02.3037776Z         
2026-09-24T01:05:02.3038382Z         Error: cannot unmarshal search index attribute `fields` because it has an incorrect format
2026-09-24T01:05:02.3039254Z         
2026-09-24T01:05:02.3039874Z           with mongodbatlas_search_index.test,
2026-09-24T01:05:02.3040725Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:02.3041739Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-09-24T01:05:02.3042095Z         
2026-09-24T01:05:02.3585076Z --- FAIL: TestAccSearchIndex_withVectorAutoEmbed (0.32s)
```

- 2026-09-25 PASS 15 seconds
- 2026-09-26 PASS 12 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 11 seconds
- 2026-09-29 PASS 18 seconds
- 2026-09-30 PASS 15 seconds
- 2026-10-01 PASS 12 seconds
- 2026-10-02 PASS 13 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 18 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 17 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 17 seconds
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
- 2026-09-27 PASS 13 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 12 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
