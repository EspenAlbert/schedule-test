# search_index/searchindex/TestAccVectorSearchIndex_withNumPartitions Test Details
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
- 2026-09-02 PASS 12 minutes
- 2026-09-03 PASS 13 minutes
- 2026-09-04 PASS 13 minutes
- 2026-09-05 PASS 13 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 13 minutes
- 2026-09-08 PASS 13 minutes
- 2026-09-09 PASS 21 minutes
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5225174Z === RUN   TestAccVectorSearchIndex_withNumPartitions
2026-09-10T00:54:51.5225393Z     resource_search_index_test.go:249: 
2026-09-10T00:54:51.5225918Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5226951Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:249
2026-09-10T00:54:51.5227388Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5228021Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5228432Z         	Test:       	TestAccVectorSearchIndex_withNumPartitions
2026-09-10T00:54:51.5228677Z --- FAIL: TestAccVectorSearchIndex_withNumPartitions (0.00s)
```

- 2026-09-11
  - PASS an hour
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3755002Z === RUN   TestAccVectorSearchIndex_withNumPartitions
2026-09-11T07:04:19.3755329Z     resource_search_index_test.go:249: 
2026-09-11T07:04:19.3756097Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3757764Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:249
2026-09-11T07:04:19.3758426Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3759404Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3760015Z         	Test:       	TestAccVectorSearchIndex_withNumPartitions
2026-09-11T07:04:19.3760378Z --- FAIL: TestAccVectorSearchIndex_withNumPartitions (0.00s)
```

- 2026-09-12 PASS 14 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 15 minutes
- 2026-09-15 PASS 15 minutes
- 2026-09-16 PASS 13 minutes
- 2026-09-17 PASS 42 minutes
- 2026-09-18 PASS 13 minutes
- 2026-09-19

### Error 2026-09-19T01:10:42+00:00
```
2026-09-19T01:10:42.1878048Z === RUN   TestAccVectorSearchIndex_withNumPartitions
2026-09-19T01:10:42.1878439Z     resource_search_index_test.go:249: 
2026-09-19T01:10:42.1879569Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1881514Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:249
2026-09-19T01:10:42.1882441Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1883434Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1884094Z         	Test:       	TestAccVectorSearchIndex_withNumPartitions
2026-09-19T01:10:42.1884535Z --- FAIL: TestAccVectorSearchIndex_withNumPartitions (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 13 minutes
- 2026-09-22 PASS 13 minutes
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.1013270Z === RUN   TestAccVectorSearchIndex_withNumPartitions
2026-09-23T00:55:57.1013802Z     resource_search_index_test.go:250: 
2026-09-23T00:55:57.1014846Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.1016940Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-09-23T00:55:57.1017799Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.1019917Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.1021886Z         	Test:       	TestAccVectorSearchIndex_withNumPartitions
2026-09-23T00:55:57.1022360Z --- FAIL: TestAccVectorSearchIndex_withNumPartitions (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2866412Z === RUN   TestAccVectorSearchIndex_withNumPartitions
2026-09-23T08:40:08.2866757Z     resource_search_index_test.go:250: 
2026-09-23T08:40:08.2867550Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2869068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-09-23T08:40:08.2869708Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2871087Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2872025Z         	Test:       	TestAccVectorSearchIndex_withNumPartitions
2026-09-23T08:40:08.2872500Z --- FAIL: TestAccVectorSearchIndex_withNumPartitions (0.00s)
```

- 2026-09-24

### Error 2026-09-24T01:05:02+00:00
```
2026-09-24T01:05:02.5882524Z === RUN   TestAccVectorSearchIndex_withNumPartitions
2026-09-24T01:05:02.6823783Z    test_step_number=1
2026-09-24T01:05:02.6824770Z     resource_search_index_test.go:253: Step 1/3 error: Error running pre-apply plan: exit status 1
2026-09-24T01:05:02.6825623Z         
2026-09-24T01:05:02.6826249Z         Error: Argument or block definition required
2026-09-24T01:05:02.6826799Z         
2026-09-24T01:05:02.6828081Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:02.6829104Z           25: 			6ab471ecff00324af47bcd17
2026-09-24T01:05:02.6829631Z         
2026-09-24T01:05:02.6830270Z         An argument or block definition is required here.
2026-09-24T01:05:02.7065864Z   
2026-09-24T01:05:02.7066541Z     panic.go:694: Error retrieving state, there may be dangling resources: exit status 1
2026-09-24T01:05:02.7067005Z         
2026-09-24T01:05:02.7067446Z         Error: Argument or block definition required
2026-09-24T01:05:02.7068167Z         
2026-09-24T01:05:02.7068966Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:02.7069547Z           25: 			6ab471ecff00324af47bcd17
2026-09-24T01:05:02.7069850Z         
2026-09-24T01:05:02.7070225Z         An argument or block definition is required here.
2026-09-24T01:05:02.7070675Z --- FAIL: TestAccVectorSearchIndex_withNumPartitions (0.12s)
```

- 2026-09-25 PASS 12 minutes
- 2026-09-26 PASS 14 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 13 minutes
- 2026-09-29 PASS 16 minutes
- 2026-09-30 PASS 15 minutes
- 2026-10-01 PASS 13 minutes
- 2026-10-02 PASS 13 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 13 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 12 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 13 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 13 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 13 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 12 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
