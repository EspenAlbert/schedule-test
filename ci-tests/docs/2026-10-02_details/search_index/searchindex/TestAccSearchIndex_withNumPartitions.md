# search_index/searchindex/TestAccSearchIndex_withNumPartitions Test Details
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
- 2026-09-02 PASS 11 minutes
- 2026-09-03 PASS 11 minutes
- 2026-09-04 PASS 11 minutes
- 2026-09-05 PASS 11 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 11 minutes
- 2026-09-08 PASS 10 minutes
- 2026-09-09 PASS 10 minutes
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5220817Z === RUN   TestAccSearchIndex_withNumPartitions
2026-09-10T00:54:51.5221163Z     resource_search_index_test.go:223: 
2026-09-10T00:54:51.5221970Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5223132Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:223
2026-09-10T00:54:51.5223567Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5224199Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5224720Z         	Test:       	TestAccSearchIndex_withNumPartitions
2026-09-10T00:54:51.5224952Z --- FAIL: TestAccSearchIndex_withNumPartitions (0.00s)
```

- 2026-09-11
  - PASS 12 minutes
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3749307Z === RUN   TestAccSearchIndex_withNumPartitions
2026-09-11T07:04:19.3749604Z     resource_search_index_test.go:223: 
2026-09-11T07:04:19.3750390Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3752151Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:223
2026-09-11T07:04:19.3752809Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3753788Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3754364Z         	Test:       	TestAccSearchIndex_withNumPartitions
2026-09-11T07:04:19.3754687Z --- FAIL: TestAccSearchIndex_withNumPartitions (0.00s)
```

- 2026-09-12 PASS 12 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 11 minutes
- 2026-09-15 PASS 11 minutes
- 2026-09-16 PASS 11 minutes
- 2026-09-17 PASS 11 minutes
- 2026-09-18 PASS 11 minutes
- 2026-09-19

### Error 2026-09-19T01:10:42+00:00
```
2026-09-19T01:10:42.1871350Z === RUN   TestAccSearchIndex_withNumPartitions
2026-09-19T01:10:42.1871857Z     resource_search_index_test.go:223: 
2026-09-19T01:10:42.1872842Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1874798Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:223
2026-09-19T01:10:42.1875611Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1876599Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1877241Z         	Test:       	TestAccSearchIndex_withNumPartitions
2026-09-19T01:10:42.1877648Z --- FAIL: TestAccSearchIndex_withNumPartitions (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 11 minutes
- 2026-09-22 PASS 11 minutes
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.1005126Z === RUN   TestAccSearchIndex_withNumPartitions
2026-09-23T00:55:57.1005524Z     resource_search_index_test.go:224: 
2026-09-23T00:55:57.1006574Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.1008679Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:224
2026-09-23T00:55:57.1009547Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.1011416Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.1012435Z         	Test:       	TestAccSearchIndex_withNumPartitions
2026-09-23T00:55:57.1012851Z --- FAIL: TestAccSearchIndex_withNumPartitions (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2860194Z === RUN   TestAccSearchIndex_withNumPartitions
2026-09-23T08:40:08.2860511Z     resource_search_index_test.go:224: 
2026-09-23T08:40:08.2861301Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2862848Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:224
2026-09-23T08:40:08.2863496Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2864959Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2865705Z         	Test:       	TestAccSearchIndex_withNumPartitions
2026-09-23T08:40:08.2866062Z --- FAIL: TestAccSearchIndex_withNumPartitions (0.00s)
```

- 2026-09-24

### Error 2026-09-24T01:05:02+00:00
```
2026-09-24T01:05:02.4770174Z === RUN   TestAccSearchIndex_withNumPartitions
2026-09-24T01:05:02.5653176Z   
2026-09-24T01:05:02.5653774Z     resource_search_index_test.go:227: Step 1/3 error: Error running pre-apply plan: exit status 1
2026-09-24T01:05:02.5654452Z         
2026-09-24T01:05:02.5654957Z         Error: Argument or block definition required
2026-09-24T01:05:02.5655374Z         
2026-09-24T01:05:02.5656159Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:02.5656714Z           25: 			6ab471ecff00324af47bcd17
2026-09-24T01:05:02.5657120Z         
2026-09-24T01:05:02.5657484Z         An argument or block definition is required here.
2026-09-24T01:05:02.5877496Z   
2026-09-24T01:05:02.5878347Z     panic.go:694: Error retrieving state, there may be dangling resources: exit status 1
2026-09-24T01:05:02.5878824Z         
2026-09-24T01:05:02.5879192Z         Error: Argument or block definition required
2026-09-24T01:05:02.5879518Z         
2026-09-24T01:05:02.5880105Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:02.5880777Z           25: 			6ab471ecff00324af47bcd17
2026-09-24T01:05:02.5881074Z         
2026-09-24T01:05:02.5881450Z         An argument or block definition is required here.
2026-09-24T01:05:02.5882113Z --- FAIL: TestAccSearchIndex_withNumPartitions (0.11s)
```

- 2026-09-25 PASS 15 minutes
- 2026-09-26 PASS 12 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 13 minutes
- 2026-09-29 PASS 23 minutes
- 2026-09-30 PASS 17 minutes
- 2026-10-01 PASS 19 minutes
- 2026-10-02 PASS 20 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 12 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 12 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 11 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 12 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 13 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 17 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
