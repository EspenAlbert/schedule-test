# search_index/searchindex/TestAccSearchIndex_withStoredSourceExclude Test Details
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
[2026-09-24 01:05](#error-2026-09-24t0105030000) |  | dev |  | 0.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 14 seconds
- 2026-09-03 PASS 9 seconds
- 2026-09-04 PASS 13 seconds
- 2026-09-05 PASS 11 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 15 seconds
- 2026-09-08 PASS 17 seconds
- 2026-09-09 PASS 14 seconds
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5244162Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2026-09-10T00:54:51.5244384Z     resource_search_index_test.go:311: 
2026-09-10T00:54:51.5244915Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5245954Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:325
2026-09-10T00:54:51.5247015Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:311
2026-09-10T00:54:51.5247455Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5248088Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5248496Z         	Test:       	TestAccSearchIndex_withStoredSourceExclude
2026-09-10T00:54:51.5248733Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (0.00s)
```

- 2026-09-11
  - PASS 12 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3782899Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2026-09-11T07:04:19.3783232Z     resource_search_index_test.go:311: 
2026-09-11T07:04:19.3784023Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3785559Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:325
2026-09-11T07:04:19.3787123Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:311
2026-09-11T07:04:19.3787769Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3788763Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3789375Z         	Test:       	TestAccSearchIndex_withStoredSourceExclude
2026-09-11T07:04:19.3789731Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (0.00s)
```

- 2026-09-12 PASS 12 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 13 seconds
- 2026-09-15 PASS 13 seconds
- 2026-09-16 PASS 13 seconds
- 2026-09-17 PASS 12 seconds
- 2026-09-18 PASS 11 seconds
- 2026-09-19

### Error 2026-09-19T01:10:42+00:00
```
2026-09-19T01:10:42.1913222Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2026-09-19T01:10:42.1913634Z     resource_search_index_test.go:311: 
2026-09-19T01:10:42.1914647Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1916707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:325
2026-09-19T01:10:42.1918733Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:311
2026-09-19T01:10:42.1919556Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1920593Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1921277Z         	Test:       	TestAccSearchIndex_withStoredSourceExclude
2026-09-19T01:10:42.1921821Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 13 seconds
- 2026-09-22 PASS 11 seconds
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.1054858Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2026-09-23T00:55:57.1055272Z     resource_search_index_test.go:312: 
2026-09-23T00:55:57.1056445Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.1058524Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:326
2026-09-23T00:55:57.1060630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:312
2026-09-23T00:55:57.1061480Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.1063321Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.1064480Z         	Test:       	TestAccSearchIndex_withStoredSourceExclude
2026-09-23T00:55:57.1064932Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2897622Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2026-09-23T08:40:08.2897969Z     resource_search_index_test.go:312: 
2026-09-23T08:40:08.2898831Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2900362Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:326
2026-09-23T08:40:08.2901917Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:312
2026-09-23T08:40:08.2902565Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2903973Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2904845Z         	Test:       	TestAccSearchIndex_withStoredSourceExclude
2026-09-23T08:40:08.2905213Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (0.00s)
```

- 2026-09-24

### Error 2026-09-24T01:05:03+00:00
```
2026-09-24T01:05:03.0497489Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2026-09-24T01:05:03.1380781Z    test_step_number=1 test_name=TestAccSearchIndex_withStoredSourceExclude
2026-09-24T01:05:03.1382055Z     resource_search_index_test.go:312: Step 1/1 error: Error running pre-apply plan: exit status 1
2026-09-24T01:05:03.1382889Z         
2026-09-24T01:05:03.1383517Z         Error: Argument or block definition required
2026-09-24T01:05:03.1384034Z         
2026-09-24T01:05:03.1384629Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:03.1385521Z           25: 			lucene.standard
2026-09-24T01:05:03.1386036Z         
2026-09-24T01:05:03.1386936Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:03.1388141Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:03.1629834Z   
2026-09-24T01:05:03.1630336Z     panic.go:694: Error retrieving state, there may be dangling resources: exit status 1
2026-09-24T01:05:03.1630934Z         
2026-09-24T01:05:03.1631320Z         Error: Argument or block definition required
2026-09-24T01:05:03.1631653Z         
2026-09-24T01:05:03.1632278Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:03.1632811Z           25: 			lucene.standard
2026-09-24T01:05:03.1633085Z         
2026-09-24T01:05:03.1633591Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:03.1634160Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:03.1634583Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (0.11s)
```

- 2026-09-25 PASS 9 seconds
- 2026-09-26 PASS 8 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 7 seconds
- 2026-09-29 PASS 9 seconds
- 2026-09-30 PASS 9 seconds
- 2026-10-01 PASS 8 seconds
- 2026-10-02 PASS 9 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 12 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 12 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 14 seconds
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
- 2026-09-27 PASS 9 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 8 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
