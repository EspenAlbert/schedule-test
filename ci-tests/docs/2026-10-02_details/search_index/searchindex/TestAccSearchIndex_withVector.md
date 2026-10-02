# search_index/searchindex/TestAccSearchIndex_withVector Test Details
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
[2026-09-24 01:05](#error-2026-09-24t0105010000) |  | dev |  | 0.03s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 14 seconds
- 2026-09-03 PASS 12 seconds
- 2026-09-04 PASS 12 seconds
- 2026-09-05 PASS 13 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 12 seconds
- 2026-09-08 PASS 17 seconds
- 2026-09-09 PASS 12 seconds
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5210175Z === RUN   TestAccSearchIndex_withVector
2026-09-10T00:54:51.5210521Z     resource_search_index_test.go:193: 
2026-09-10T00:54:51.5211511Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5213468Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:367
2026-09-10T00:54:51.5214711Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:193
2026-09-10T00:54:51.5215147Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5215793Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5216329Z         	Test:       	TestAccSearchIndex_withVector
2026-09-10T00:54:51.5216536Z --- FAIL: TestAccSearchIndex_withVector (0.00s)
```

- 2026-09-11
  - PASS 13 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3736328Z === RUN   TestAccSearchIndex_withVector
2026-09-11T07:04:19.3736618Z     resource_search_index_test.go:193: 
2026-09-11T07:04:19.3737424Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3738982Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:367
2026-09-11T07:04:19.3740565Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:193
2026-09-11T07:04:19.3741217Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3742356Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3742942Z         	Test:       	TestAccSearchIndex_withVector
2026-09-11T07:04:19.3743232Z --- FAIL: TestAccSearchIndex_withVector (0.00s)
```

- 2026-09-12 PASS 13 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 14 seconds
- 2026-09-15 PASS 14 seconds
- 2026-09-16 PASS 13 seconds
- 2026-09-17 PASS 11 seconds
- 2026-09-18 PASS 12 seconds
- 2026-09-19

### Error 2026-09-19T01:10:42+00:00
```
2026-09-19T01:10:42.1855929Z === RUN   TestAccSearchIndex_withVector
2026-09-19T01:10:42.1856298Z     resource_search_index_test.go:193: 
2026-09-19T01:10:42.1857278Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1859237Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:367
2026-09-19T01:10:42.1861233Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:193
2026-09-19T01:10:42.1862184Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1863332Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1863968Z         	Test:       	TestAccSearchIndex_withVector
2026-09-19T01:10:42.1864350Z --- FAIL: TestAccSearchIndex_withVector (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 13 seconds
- 2026-09-22 PASS 13 seconds
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.0977973Z === RUN   TestAccSearchIndex_withVector
2026-09-23T00:55:57.0978343Z     resource_search_index_test.go:171: 
2026-09-23T00:55:57.0979381Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.0981470Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:368
2026-09-23T00:55:57.0983692Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:171
2026-09-23T00:55:57.0984547Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.0986514Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.0987496Z         	Test:       	TestAccSearchIndex_withVector
2026-09-23T00:55:57.0987870Z --- FAIL: TestAccSearchIndex_withVector (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2839593Z === RUN   TestAccSearchIndex_withVector
2026-09-23T08:40:08.2839907Z     resource_search_index_test.go:171: 
2026-09-23T08:40:08.2840697Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2842231Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:368
2026-09-23T08:40:08.2843798Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:171
2026-09-23T08:40:08.2844735Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2846126Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2846934Z         	Test:       	TestAccSearchIndex_withVector
2026-09-23T08:40:08.2847242Z --- FAIL: TestAccSearchIndex_withVector (0.00s)
```

- 2026-09-24

### Error 2026-09-24T01:05:01+00:00
```
2026-09-24T01:05:01.7188161Z === RUN   TestAccSearchIndex_withVector
2026-09-24T01:05:01.8518541Z 2026/09/24 01:05:01 [ERROR] cannot unmarshal new vector search index json invalid character 'l' looking for beginning of value
2026-09-24T01:05:01.9789898Z 2026/09/24 01:05:01 [ERROR] cannot unmarshal new vector search index json invalid character 'l' looking for beginning of value
2026-09-24T01:05:01.9810381Z 2026/09/24 01:05:01 [ERROR] cannot unmarshal new vector search index json invalid character 'l' looking for beginning of value
2026-09-24T01:05:01.9846974Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/65314072-54ef-40bb-880b-1a2cfea0de4d/terraform test_name=TestAccSearchIndex_withVector test_working_directory=/tmp/plugintest1865956678
2026-09-24T01:05:01.9849250Z     resource_search_index_test.go:171: Step 1/1 error: Error running apply: exit status 1
2026-09-24T01:05:01.9850246Z         
2026-09-24T01:05:01.9851325Z         Error: cannot unmarshal search index attribute `fields` because it has an incorrect format
2026-09-24T01:05:01.9851926Z         
2026-09-24T01:05:01.9852270Z           with mongodbatlas_search_index.test,
2026-09-24T01:05:01.9852963Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:01.9853929Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-09-24T01:05:01.9854281Z         
2026-09-24T01:05:02.0416179Z --- FAIL: TestAccSearchIndex_withVector (0.32s)
```

- 2026-09-25 PASS 9 seconds
- 2026-09-26 PASS 9 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 8 seconds
- 2026-09-29 PASS 17 seconds
- 2026-09-30 PASS 15 seconds
- 2026-10-01 PASS 9 seconds
- 2026-10-02 PASS 10 seconds

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
- 2026-09-13 PASS 14 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 13 seconds
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
- 2026-09-27 PASS 15 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 11 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
