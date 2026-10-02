# search_index/searchindex/TestAccSearchIndex_updatedToEmptyMappingsFields Test Details
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
- 2026-09-02 PASS 16 seconds
- 2026-09-03 PASS 14 seconds
- 2026-09-04 PASS 18 seconds
- 2026-09-05 PASS 13 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 16 seconds
- 2026-09-08 PASS 20 seconds
- 2026-09-09 PASS 15 seconds
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5206188Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2026-09-10T00:54:51.5206417Z     resource_search_index_test.go:172: 
2026-09-10T00:54:51.5206948Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5207988Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:172
2026-09-10T00:54:51.5208428Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5209067Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5209655Z         	Test:       	TestAccSearchIndex_updatedToEmptyMappingsFields
2026-09-10T00:54:51.5209951Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (0.00s)
```

- 2026-09-11
  - PASS 15 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3730271Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2026-09-11T07:04:19.3730604Z     resource_search_index_test.go:172: 
2026-09-11T07:04:19.3731566Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3733266Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:172
2026-09-11T07:04:19.3733927Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3734916Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3735607Z         	Test:       	TestAccSearchIndex_updatedToEmptyMappingsFields
2026-09-11T07:04:19.3735998Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (0.00s)
```

- 2026-09-12 PASS 16 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 16 seconds
- 2026-09-15 PASS 16 seconds
- 2026-09-16 PASS 15 seconds
- 2026-09-17 PASS 14 seconds
- 2026-09-18 PASS 16 seconds
- 2026-09-19

### Error 2026-09-19T01:10:42+00:00
```
2026-09-19T01:10:42.1848927Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2026-09-19T01:10:42.1849355Z     resource_search_index_test.go:172: 
2026-09-19T01:10:42.1850356Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1852440Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:172
2026-09-19T01:10:42.1853279Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1854330Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1855034Z         	Test:       	TestAccSearchIndex_updatedToEmptyMappingsFields
2026-09-19T01:10:42.1855512Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 17 seconds
- 2026-09-22 PASS 13 seconds
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.0996508Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2026-09-23T00:55:57.0996945Z     resource_search_index_test.go:200: 
2026-09-23T00:55:57.0997999Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.1000100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:200
2026-09-23T00:55:57.1000963Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.1002824Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.1004060Z         	Test:       	TestAccSearchIndex_updatedToEmptyMappingsFields
2026-09-23T00:55:57.1004559Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2853695Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2026-09-23T08:40:08.2854040Z     resource_search_index_test.go:200: 
2026-09-23T08:40:08.2855056Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2856598Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:200
2026-09-23T08:40:08.2857240Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2858594Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2859380Z         	Test:       	TestAccSearchIndex_updatedToEmptyMappingsFields
2026-09-23T08:40:08.2859780Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (0.00s)
```

- 2026-09-24

### Error 2026-09-24T01:05:02+00:00
```
2026-09-24T01:05:02.3589958Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2026-09-24T01:05:02.4513677Z   
2026-09-24T01:05:02.4514626Z     resource_search_index_test.go:203: Step 1/2 error: Error running pre-apply plan: exit status 1
2026-09-24T01:05:02.4515432Z         
2026-09-24T01:05:02.4516049Z         Error: Argument or block definition required
2026-09-24T01:05:02.4516774Z         
2026-09-24T01:05:02.4518485Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:02.4519742Z           25: 			lucene.standard
2026-09-24T01:05:02.4520398Z         
2026-09-24T01:05:02.4521481Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:02.4522686Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:02.4764175Z    test_name=TestAccSearchIndex_updatedToEmptyMappingsFields
2026-09-24T01:05:02.4764975Z     panic.go:694: Error retrieving state, there may be dangling resources: exit status 1
2026-09-24T01:05:02.4765434Z         
2026-09-24T01:05:02.4766025Z         Error: Argument or block definition required
2026-09-24T01:05:02.4766373Z         
2026-09-24T01:05:02.4767089Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:02.4767751Z           25: 			lucene.standard
2026-09-24T01:05:02.4768165Z         
2026-09-24T01:05:02.4768701Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:02.4769282Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:02.4769735Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (0.12s)
```

- 2026-09-25 PASS 19 minutes
- 2026-09-26 PASS 26 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 24 minutes
- 2026-09-29 PASS 32 minutes
- 2026-09-30 PASS 27 minutes
- 2026-10-01 PASS 23 minutes
- 2026-10-02 PASS 38 minutes

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
- 2026-09-16 PASS 17 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 17 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 19 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 14 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
