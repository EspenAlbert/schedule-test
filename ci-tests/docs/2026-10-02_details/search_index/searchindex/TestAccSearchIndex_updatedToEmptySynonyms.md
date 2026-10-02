# search_index/searchindex/TestAccSearchIndex_updatedToEmptySynonyms Test Details
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
- 2026-09-02 PASS 16 seconds
- 2026-09-03 PASS 14 seconds
- 2026-09-04 PASS 16 seconds
- 2026-09-05 PASS 12 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 17 seconds
- 2026-09-08 PASS 19 seconds
- 2026-09-09 PASS 17 seconds
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5198431Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2026-09-10T00:54:51.5198654Z     resource_search_index_test.go:124: 
2026-09-10T00:54:51.5199191Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5200234Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:124
2026-09-10T00:54:51.5200674Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5201315Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5201731Z         	Test:       	TestAccSearchIndex_updatedToEmptySynonyms
2026-09-10T00:54:51.5201974Z --- FAIL: TestAccSearchIndex_updatedToEmptySynonyms (0.00s)
```

- 2026-09-11
  - PASS 18 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3718711Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2026-09-11T07:04:19.3719031Z     resource_search_index_test.go:124: 
2026-09-11T07:04:19.3719814Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3721509Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:124
2026-09-11T07:04:19.3722301Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3723282Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3723889Z         	Test:       	TestAccSearchIndex_updatedToEmptySynonyms
2026-09-11T07:04:19.3724318Z --- FAIL: TestAccSearchIndex_updatedToEmptySynonyms (0.00s)
```

- 2026-09-12 PASS 16 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 16 seconds
- 2026-09-15 PASS 15 seconds
- 2026-09-16 PASS 16 seconds
- 2026-09-17 PASS 15 seconds
- 2026-09-18 PASS 16 seconds
- 2026-09-19

### Error 2026-09-19T01:10:42+00:00
```
2026-09-19T01:10:42.1835093Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2026-09-19T01:10:42.1835500Z     resource_search_index_test.go:124: 
2026-09-19T01:10:42.1836502Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1838470Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:124
2026-09-19T01:10:42.1839304Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1840326Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1841009Z         	Test:       	TestAccSearchIndex_updatedToEmptySynonyms
2026-09-19T01:10:42.1841458Z --- FAIL: TestAccSearchIndex_updatedToEmptySynonyms (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 15 seconds
- 2026-09-22 PASS 14 seconds
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.0960995Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2026-09-23T00:55:57.0961409Z     resource_search_index_test.go:124: 
2026-09-23T00:55:57.0962447Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.0964887Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:124
2026-09-23T00:55:57.0965766Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.0967622Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.0968658Z         	Test:       	TestAccSearchIndex_updatedToEmptySynonyms
2026-09-23T00:55:57.0969113Z --- FAIL: TestAccSearchIndex_updatedToEmptySynonyms (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2826869Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2026-09-23T08:40:08.2827263Z     resource_search_index_test.go:124: 
2026-09-23T08:40:08.2828058Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2829619Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:124
2026-09-23T08:40:08.2830278Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2831643Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2832434Z         	Test:       	TestAccSearchIndex_updatedToEmptySynonyms
2026-09-23T08:40:08.2832802Z --- FAIL: TestAccSearchIndex_updatedToEmptySynonyms (0.00s)
```

- 2026-09-24

### Error 2026-09-24T01:05:01+00:00
```
2026-09-24T01:05:01.4808579Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2026-09-24T01:05:01.5747865Z   
2026-09-24T01:05:01.5748961Z     resource_search_index_test.go:127: Step 1/2 error: Error running pre-apply plan: exit status 1
2026-09-24T01:05:01.5749799Z         
2026-09-24T01:05:01.5750404Z         Error: Argument or block definition required
2026-09-24T01:05:01.5750959Z         
2026-09-24T01:05:01.5751982Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:01.5752893Z           25: 			lucene.standard
2026-09-24T01:05:01.5753352Z         
2026-09-24T01:05:01.5754227Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:01.5755267Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:01.5991350Z    test_name=TestAccSearchIndex_updatedToEmptySynonyms
2026-09-24T01:05:01.5992239Z     panic.go:694: Error retrieving state, there may be dangling resources: exit status 1
2026-09-24T01:05:01.5993385Z         
2026-09-24T01:05:01.5993824Z         Error: Argument or block definition required
2026-09-24T01:05:01.5994159Z         
2026-09-24T01:05:01.5994756Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:01.5995286Z           25: 			lucene.standard
2026-09-24T01:05:01.5995593Z         
2026-09-24T01:05:01.5996100Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:01.5996676Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:01.5997107Z --- FAIL: TestAccSearchIndex_updatedToEmptySynonyms (0.12s)
```

- 2026-09-25 PASS 15 seconds
- 2026-09-26 PASS 9 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 9 seconds
- 2026-09-29 PASS 11 seconds
- 2026-09-30 PASS 19 seconds
- 2026-10-01 PASS 10 seconds
- 2026-10-02 PASS 13 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 16 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 17 seconds
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
- 2026-09-27 PASS 10 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 21 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
