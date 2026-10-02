# search_index/searchindex/TestAccSearchIndex_withStoredSourceFalse Test Details
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
- 2026-09-02 PASS 14 seconds
- 2026-09-03 PASS 11 seconds
- 2026-09-04 PASS 14 seconds
- 2026-09-05 PASS 11 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 10 seconds
- 2026-09-08 PASS 17 seconds
- 2026-09-09 PASS 11 seconds
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5228910Z === RUN   TestAccSearchIndex_withStoredSourceFalse
2026-09-10T00:54:51.5229126Z     resource_search_index_test.go:299: 
2026-09-10T00:54:51.5229676Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5230709Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:325
2026-09-10T00:54:51.5231769Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:299
2026-09-10T00:54:51.5232275Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5232913Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5233411Z         	Test:       	TestAccSearchIndex_withStoredSourceFalse
2026-09-10T00:54:51.5233642Z --- FAIL: TestAccSearchIndex_withStoredSourceFalse (0.00s)
```

- 2026-09-11
  - PASS 13 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3760723Z === RUN   TestAccSearchIndex_withStoredSourceFalse
2026-09-11T07:04:19.3761045Z     resource_search_index_test.go:299: 
2026-09-11T07:04:19.3761991Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3763570Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:325
2026-09-11T07:04:19.3765154Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:299
2026-09-11T07:04:19.3765802Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3766802Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3767405Z         	Test:       	TestAccSearchIndex_withStoredSourceFalse
2026-09-11T07:04:19.3767748Z --- FAIL: TestAccSearchIndex_withStoredSourceFalse (0.00s)
```

- 2026-09-12 PASS 13 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 13 seconds
- 2026-09-15 PASS 13 seconds
- 2026-09-16 PASS 15 seconds
- 2026-09-17 PASS 13 seconds
- 2026-09-18 PASS 15 seconds
- 2026-09-19

### Error 2026-09-19T01:10:42+00:00
```
2026-09-19T01:10:42.1884957Z === RUN   TestAccSearchIndex_withStoredSourceFalse
2026-09-19T01:10:42.1885368Z     resource_search_index_test.go:299: 
2026-09-19T01:10:42.1886358Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1888341Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:325
2026-09-19T01:10:42.1890331Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:299
2026-09-19T01:10:42.1891160Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1892301Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1893294Z         	Test:       	TestAccSearchIndex_withStoredSourceFalse
2026-09-19T01:10:42.1893999Z --- FAIL: TestAccSearchIndex_withStoredSourceFalse (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 16 seconds
- 2026-09-22 PASS 11 seconds
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.1022815Z === RUN   TestAccSearchIndex_withStoredSourceFalse
2026-09-23T00:55:57.1023245Z     resource_search_index_test.go:300: 
2026-09-23T00:55:57.1024514Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.1026604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:326
2026-09-23T00:55:57.1028718Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:300
2026-09-23T00:55:57.1029573Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.1031440Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.1032475Z         	Test:       	TestAccSearchIndex_withStoredSourceFalse
2026-09-23T00:55:57.1032916Z --- FAIL: TestAccSearchIndex_withStoredSourceFalse (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2872939Z === RUN   TestAccSearchIndex_withStoredSourceFalse
2026-09-23T08:40:08.2873389Z     resource_search_index_test.go:300: 
2026-09-23T08:40:08.2874693Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2876235Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:326
2026-09-23T08:40:08.2877814Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:300
2026-09-23T08:40:08.2878465Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2879848Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2880615Z         	Test:       	TestAccSearchIndex_withStoredSourceFalse
2026-09-23T08:40:08.2880968Z --- FAIL: TestAccSearchIndex_withStoredSourceFalse (0.00s)
```

- 2026-09-24

### Error 2026-09-24T01:05:02+00:00
```
2026-09-24T01:05:02.7071107Z === RUN   TestAccSearchIndex_withStoredSourceFalse
2026-09-24T01:05:02.7995051Z    test_name=TestAccSearchIndex_withStoredSourceFalse
2026-09-24T01:05:02.7995763Z     resource_search_index_test.go:300: Step 1/1 error: Error running pre-apply plan: exit status 1
2026-09-24T01:05:02.7996396Z         
2026-09-24T01:05:02.7996755Z         Error: Argument or block definition required
2026-09-24T01:05:02.7997227Z         
2026-09-24T01:05:02.7998034Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:02.7998917Z           25: 			lucene.standard
2026-09-24T01:05:02.7999305Z         
2026-09-24T01:05:02.8000217Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:02.8001264Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:02.8213914Z   
2026-09-24T01:05:02.8214711Z     panic.go:694: Error retrieving state, there may be dangling resources: exit status 1
2026-09-24T01:05:02.8215470Z         
2026-09-24T01:05:02.8215989Z         Error: Argument or block definition required
2026-09-24T01:05:02.8216565Z         
2026-09-24T01:05:02.8217845Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:02.8218801Z           25: 			lucene.standard
2026-09-24T01:05:02.8219275Z         
2026-09-24T01:05:02.8220171Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:02.8221219Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:02.8221997Z --- FAIL: TestAccSearchIndex_withStoredSourceFalse (0.11s)
```

- 2026-09-25 PASS 10 seconds
- 2026-09-26 PASS 8 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 9 seconds
- 2026-09-29 PASS 9 seconds
- 2026-09-30 PASS 11 seconds
- 2026-10-01 PASS 9 seconds
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
- 2026-09-13 PASS 12 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 13 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 12 seconds
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
