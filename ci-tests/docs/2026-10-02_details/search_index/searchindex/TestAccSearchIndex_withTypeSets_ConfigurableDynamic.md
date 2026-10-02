# search_index/searchindex/TestAccSearchIndex_withTypeSets_ConfigurableDynamic Test Details
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
- 2026-09-02 PASS 20 seconds
- 2026-09-03 PASS 17 seconds
- 2026-09-04 PASS 19 seconds
- 2026-09-05 PASS 15 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 18 seconds
- 2026-09-08 PASS 21 seconds
- 2026-09-09 PASS 19 seconds
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5194523Z === RUN   TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-09-10T00:54:51.5194755Z     resource_search_index_test.go:76: 
2026-09-10T00:54:51.5195282Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5196299Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:76
2026-09-10T00:54:51.5196736Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5197373Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5197911Z         	Test:       	TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-09-10T00:54:51.5198183Z --- FAIL: TestAccSearchIndex_withTypeSets_ConfigurableDynamic (0.00s)
```

- 2026-09-11
  - PASS 20 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3713010Z === RUN   TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-09-11T07:04:19.3713362Z     resource_search_index_test.go:76: 
2026-09-11T07:04:19.3714145Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3715712Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:76
2026-09-11T07:04:19.3716357Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3717327Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3717963Z         	Test:       	TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-09-11T07:04:19.3718357Z --- FAIL: TestAccSearchIndex_withTypeSets_ConfigurableDynamic (0.00s)
```

- 2026-09-12 PASS 17 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 18 seconds
- 2026-09-15 PASS 18 seconds
- 2026-09-16 PASS 18 seconds
- 2026-09-17 PASS 17 seconds
- 2026-09-18 PASS 17 seconds
- 2026-09-19

### Error 2026-09-19T01:10:42+00:00
```
2026-09-19T01:10:42.1827919Z === RUN   TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-09-19T01:10:42.1828358Z     resource_search_index_test.go:76: 
2026-09-19T01:10:42.1829348Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1831472Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:76
2026-09-19T01:10:42.1832412Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1833417Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1834134Z         	Test:       	TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-09-19T01:10:42.1834635Z --- FAIL: TestAccSearchIndex_withTypeSets_ConfigurableDynamic (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 17 seconds
- 2026-09-22 PASS 16 seconds
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.0952546Z === RUN   TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-09-23T00:55:57.0952984Z     resource_search_index_test.go:76: 
2026-09-23T00:55:57.0954142Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.0956224Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:76
2026-09-23T00:55:57.0957072Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.0958923Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.0959995Z         	Test:       	TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-09-23T00:55:57.0960511Z --- FAIL: TestAccSearchIndex_withTypeSets_ConfigurableDynamic (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2820399Z === RUN   TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-09-23T08:40:08.2820764Z     resource_search_index_test.go:76: 
2026-09-23T08:40:08.2821553Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2823098Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:76
2026-09-23T08:40:08.2823754Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2825266Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2826085Z         	Test:       	TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-09-23T08:40:08.2826489Z --- FAIL: TestAccSearchIndex_withTypeSets_ConfigurableDynamic (0.00s)
```

- 2026-09-24

### Error 2026-09-24T01:05:01+00:00
```
2026-09-24T01:05:01.1652902Z === RUN   TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-09-24T01:05:01.2929685Z 2026/09/24 01:05:01 [ERROR] cannot unmarshal new vector search index json invalid character 'l' looking for beginning of value
2026-09-24T01:05:01.4147029Z 2026/09/24 01:05:01 [ERROR] cannot unmarshal new vector search index json invalid character 'l' looking for beginning of value
2026-09-24T01:05:01.4162947Z 2026/09/24 01:05:01 [ERROR] cannot unmarshal new vector search index json invalid character 'l' looking for beginning of value
2026-09-24T01:05:01.4206047Z   
2026-09-24T01:05:01.4206984Z     resource_search_index_test.go:79: Step 1/3 error: Error running apply: exit status 1
2026-09-24T01:05:01.4207999Z         
2026-09-24T01:05:01.4209182Z         Error: cannot unmarshal search index attribute `mappings_fields` because it has an incorrect format
2026-09-24T01:05:01.4209942Z         
2026-09-24T01:05:01.4210597Z           with mongodbatlas_search_index.test,
2026-09-24T01:05:01.4211389Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:01.4212140Z           12:         resource "mongodbatlas_search_index" "test" {
2026-09-24T01:05:01.4212497Z         
2026-09-24T01:05:01.4807783Z --- FAIL: TestAccSearchIndex_withTypeSets_ConfigurableDynamic (0.32s)
```

- 2026-09-25 PASS 16 seconds
- 2026-09-26 PASS 11 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 10 seconds
- 2026-09-29 PASS 12 seconds
- 2026-09-30 PASS 20 seconds
- 2026-10-01 PASS 14 seconds
- 2026-10-02 PASS 12 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 20 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 19 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 18 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 19 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 12 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 12 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
