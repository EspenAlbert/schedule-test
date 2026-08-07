# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:36](#error-2026-07-09t0136440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.00s
[2026-07-11 00:54](#error-2026-07-11t0054050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 106.08s
[2026-07-18 01:15](#error-2026-07-18t0115300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.07s
[2026-07-21 01:42](#error-2026-07-21t0142120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s
[2026-07-23 02:04](#error-2026-07-23t0204190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:36:44+00:00
```
2026-07-09T01:36:44.2889626Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-07-09T01:36:44.2890394Z     resource_test.go:71: Creating execution project (1): test-acc-tf-p-58117020642147137
2026-07-09T01:36:44.2890962Z     resource_test.go:71: 
2026-07-09T01:36:44.2891953Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:36:44.2893842Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:36:44.2896138Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:36:44.2898333Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T01:36:44.2900596Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:71
2026-07-09T01:36:44.2902141Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:36:44.2902752Z         	Error:      	Received unexpected error:
2026-07-09T01:36:44.2905075Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.2906986Z         	Test:       	TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-07-09T01:36:44.2909295Z         	Messages:   	Project creation failed: test-acc-tf-p-58117020642147137, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.2910859Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (63.03s)
```

- 2026-07-10 PASS 18 minutes
- 2026-07-11

### Error 2026-07-11T00:54:05+00:00
```
2026-07-11T00:54:05.7857776Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-07-11T00:54:05.7859331Z     resource_test.go:71: Creating execution project (1): test-acc-tf-p-2948813852847570145
2026-07-11T00:54:05.7860247Z     resource_test.go:71: 
2026-07-11T00:54:05.7861992Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:05.7865418Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:05.7869299Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:05.7872922Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-11T00:54:05.7877201Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:71
2026-07-11T00:54:05.7879601Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:54:05.7880539Z         	Error:      	Received unexpected error:
2026-07-11T00:54:05.7884385Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.7886912Z         	Test:       	TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-07-11T00:54:05.7890630Z         	Messages:   	Project creation failed: test-acc-tf-p-2948813852847570145, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.7893171Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (106.83s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14 PASS an hour
- 2026-07-15 PASS 56 minutes
- 2026-07-16 PASS 8 minutes
- 2026-07-17 PASS 39 minutes
- 2026-07-18

### Error 2026-07-18T01:15:30+00:00
```
2026-07-18T01:15:30.8911467Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-07-18T01:15:30.8912186Z     resource_test.go:71: Creating execution project (1): test-acc-tf-p-3854603213681478198
2026-07-18T01:15:30.8912690Z     resource_test.go:71: 
2026-07-18T01:15:30.8913872Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:15:30.8915900Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:15:30.8917787Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:15:30.8919645Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-18T01:15:30.8921604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:71
2026-07-18T01:15:30.8922857Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:15:30.8923631Z         	Error:      	Received unexpected error:
2026-07-18T01:15:30.8925666Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.8926900Z         	Test:       	TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-07-18T01:15:30.8928831Z         	Messages:   	Project creation failed: test-acc-tf-p-3854603213681478198, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.8930303Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (74.66s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:42:12+00:00
```
2026-07-21T01:42:12.8184512Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-07-21T01:42:12.8185255Z     resource_test.go:71: Creating execution project (1): test-acc-tf-p-8904424360178520839
2026-07-21T01:42:12.8185780Z     resource_test.go:71: 
2026-07-21T01:42:12.8186740Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:42:12.8188862Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:42:12.8190788Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:42:12.8192727Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-21T01:42:12.8194728Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:71
2026-07-21T01:42:12.8196018Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T01:42:12.8196575Z         	Error:      	Received unexpected error:
2026-07-21T01:42:12.8198821Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8200130Z         	Test:       	TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-07-21T01:42:12.8202163Z         	Messages:   	Project creation failed: test-acc-tf-p-8904424360178520839, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8203710Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (62.73s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T02:04:19+00:00
```
2026-07-23T02:04:19.8481723Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-07-23T02:04:19.8482432Z     resource_test.go:71: Creating execution project (1): test-acc-tf-p-5648989091869816743
2026-07-23T02:04:19.8482931Z     resource_test.go:71: 
2026-07-23T02:04:19.8483874Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T02:04:19.8485683Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T02:04:19.8487486Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T02:04:19.8489476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-23T02:04:19.8491555Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:71
2026-07-23T02:04:19.8492798Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T02:04:19.8493345Z         	Error:      	Received unexpected error:
2026-07-23T02:04:19.8495325Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T02:04:19.8496512Z         	Test:       	TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-07-23T02:04:19.8498394Z         	Messages:   	Project creation failed: test-acc-tf-p-5648989091869816743, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T02:04:19.8499658Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (73.57s)
```

- 2026-07-24 PASS 27 minutes
- 2026-07-25 PASS an hour
- 2026-07-26: MISSING
- 2026-07-27 PASS 10 minutes
- 2026-07-28 PASS 7 minutes
- 2026-07-29 PASS an hour
- 2026-07-30 PASS 8 minutes
- 2026-07-31 PASS an hour
- 2026-08-01 PASS an hour
- 2026-08-02: MISSING
- 2026-08-03 PASS an hour
- 2026-08-04 PASS an hour
- 2026-08-05 PASS an hour
- 2026-08-06 PASS 55 minutes
- 2026-08-07 PASS an hour

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-29 16:19](#error-2026-07-29t1619030000) |  | qa | 3289.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 43 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 49 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS an hour
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 43 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 50 minutes
  - FAIL 54 minutes

### Error 2026-07-29T16:19:03+00:00
```
2026-07-29T16:19:03.7873828Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-07-29T16:19:03.7883843Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-07-29T16:19:03.7913172Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-07-29T16:19:03.7913872Z     resource_test.go:74: Step 2/2 error: Error running apply: exit status 1
2026-07-29T16:19:03.7914270Z         
2026-07-29T16:19:03.7914637Z         Error: Error waiting for changes in Update
2026-07-29T16:19:03.7914963Z         
2026-07-29T16:19:03.7915315Z           with mongodbatlas_search_index_api.test,
2026-07-29T16:19:03.7916076Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-07-29T16:19:03.7916809Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-07-29T16:19:03.7917175Z         
2026-07-29T16:19:03.7917680Z         unexpected state 'DELETED', wanted target 'READY, STEADY'. last error:
2026-07-29T16:19:03.7918121Z         %!s(<nil>)
2026-07-29T16:19:03.7927820Z    test_working_directory=/tmp/plugintest354609701
2026-07-29T16:19:03.7934520Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (3289.49s)
```

- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 2 hours
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
