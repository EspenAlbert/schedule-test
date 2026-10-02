# search_index/searchindex/TestAccSearchIndex_withStoredSourceTrue Test Details
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
- 2026-09-02 PASS 15 seconds
- 2026-09-03 PASS 12 seconds
- 2026-09-04 PASS 15 seconds
- 2026-09-05 PASS 10 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 14 seconds
- 2026-09-08 PASS 17 seconds
- 2026-09-09 PASS 13 seconds
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5233865Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2026-09-10T00:54:51.5234079Z     resource_search_index_test.go:303: 
2026-09-10T00:54:51.5234604Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5235624Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:325
2026-09-10T00:54:51.5236669Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:303
2026-09-10T00:54:51.5237101Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5237733Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5238142Z         	Test:       	TestAccSearchIndex_withStoredSourceTrue
2026-09-10T00:54:51.5238370Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (0.00s)
```

- 2026-09-11
  - PASS 13 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3768073Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2026-09-11T07:04:19.3768391Z     resource_search_index_test.go:303: 
2026-09-11T07:04:19.3769169Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3770708Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:325
2026-09-11T07:04:19.3772577Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:303
2026-09-11T07:04:19.3773234Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3774223Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3774820Z         	Test:       	TestAccSearchIndex_withStoredSourceTrue
2026-09-11T07:04:19.3775158Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (0.00s)
```

- 2026-09-12 PASS 13 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 14 seconds
- 2026-09-15 PASS 13 seconds
- 2026-09-16 PASS 13 seconds
- 2026-09-17 PASS 13 seconds
- 2026-09-18 PASS 13 seconds
- 2026-09-19

### Error 2026-09-19T01:10:42+00:00
```
2026-09-19T01:10:42.1894676Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2026-09-19T01:10:42.1895263Z     resource_search_index_test.go:303: 
2026-09-19T01:10:42.1896288Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1898262Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:325
2026-09-19T01:10:42.1900253Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:303
2026-09-19T01:10:42.1901068Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1902286Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1902965Z         	Test:       	TestAccSearchIndex_withStoredSourceTrue
2026-09-19T01:10:42.1903399Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 13 seconds
- 2026-09-22 PASS 12 seconds
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.1033330Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2026-09-23T00:55:57.1033858Z     resource_search_index_test.go:304: 
2026-09-23T00:55:57.1034900Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.1036981Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:326
2026-09-23T00:55:57.1039085Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:304
2026-09-23T00:55:57.1039954Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.1042375Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.1043403Z         	Test:       	TestAccSearchIndex_withStoredSourceTrue
2026-09-23T00:55:57.1043987Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2881298Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2026-09-23T08:40:08.2881620Z     resource_search_index_test.go:304: 
2026-09-23T08:40:08.2882443Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2883998Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:326
2026-09-23T08:40:08.2885700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:304
2026-09-23T08:40:08.2886471Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2888234Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2889008Z         	Test:       	TestAccSearchIndex_withStoredSourceTrue
2026-09-23T08:40:08.2889362Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (0.00s)
```

- 2026-09-24

### Error 2026-09-24T01:05:02+00:00
```
2026-09-24T01:05:02.8222748Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2026-09-24T01:05:02.9090196Z    test_working_directory=/tmp/plugintest973653277 test_name=TestAccSearchIndex_withStoredSourceTrue test_terraform_path=/home/runner/work/_temp/65314072-54ef-40bb-880b-1a2cfea0de4d/terraform
2026-09-24T01:05:02.9100857Z     resource_search_index_test.go:304: Step 1/1 error: Error running pre-apply plan: exit status 1
2026-09-24T01:05:02.9102048Z         
2026-09-24T01:05:02.9102670Z         Error: Argument or block definition required
2026-09-24T01:05:02.9103238Z         
2026-09-24T01:05:02.9104285Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:02.9105348Z           25: 			lucene.standard
2026-09-24T01:05:02.9105665Z         
2026-09-24T01:05:02.9106296Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:02.9106999Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:02.9339540Z    test_working_directory=/tmp/plugintest973653277
2026-09-24T01:05:02.9340187Z     panic.go:694: Error retrieving state, there may be dangling resources: exit status 1
2026-09-24T01:05:02.9340673Z         
2026-09-24T01:05:02.9341302Z         Error: Argument or block definition required
2026-09-24T01:05:02.9341651Z         
2026-09-24T01:05:02.9342248Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:02.9342785Z           25: 			lucene.standard
2026-09-24T01:05:02.9343071Z         
2026-09-24T01:05:02.9343583Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:02.9344162Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:02.9344589Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (0.11s)
```

- 2026-09-25 PASS 10 seconds
- 2026-09-26 PASS 8 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 8 seconds
- 2026-09-29 PASS 8 seconds
- 2026-09-30 PASS 9 seconds
- 2026-10-01 PASS 9 seconds
- 2026-10-02 PASS 10 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 15 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 13 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 11 seconds
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
- 2026-09-27 PASS 8 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 8 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
