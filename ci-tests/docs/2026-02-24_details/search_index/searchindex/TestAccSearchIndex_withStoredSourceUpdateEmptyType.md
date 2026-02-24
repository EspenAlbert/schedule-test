# search_index/searchindex/TestAccSearchIndex_withStoredSourceUpdateEmptyType Test Details
# Found 30 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-03 00:39](#error-2026-02-03t0039270000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters | dev | out_of_capacity | 0.05s
[2026-02-24 01:03](#error-2026-02-24t0103370000) |  | dev | flaky_500 | 1.07s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 9 seconds
- 2026-01-27 PASS 9 seconds
- 2026-01-28 PASS 9 seconds
- 2026-01-29 PASS 9 seconds
- 2026-01-30 PASS 12 seconds
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:39:27+00:00
```
2026-02-03T00:39:27.3610845Z === RUN   TestAccSearchIndex_withStoredSourceUpdateEmptyType
2026-02-03T00:39:27.3611477Z     resource_search_index_test.go:290: Creating execution cluster: test-acc-tf-c-5776060537890812115
2026-02-03T00:39:27.8365141Z     resource_search_index_test.go:290: 
2026-02-03T00:39:27.8367390Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:27.8369946Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:27.8372553Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:319
2026-02-03T00:39:27.8375483Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:290
2026-02-03T00:39:27.8376516Z         	Error:      	Received unexpected error:
2026-02-03T00:39:27.8379774Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:27.8381460Z         	Test:       	TestAccSearchIndex_withStoredSourceUpdateEmptyType
2026-02-03T00:39:27.8383950Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5776060537890812115, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:27.8385412Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateEmptyType (0.48s)
```

- 2026-02-04 PASS 10 seconds
- 2026-02-05 PASS 9 seconds
- 2026-02-06 PASS 11 seconds
- 2026-02-07 PASS 8 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 10 seconds
- 2026-02-10 PASS 10 seconds
- 2026-02-11 PASS 10 seconds
- 2026-02-12 PASS 9 seconds
- 2026-02-13 PASS 11 seconds
- 2026-02-14 PASS 9 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 9 seconds
- 2026-02-17 PASS 10 seconds
- 2026-02-18 PASS 9 seconds
- 2026-02-19 PASS 9 seconds
- 2026-02-20 PASS 9 seconds
- 2026-02-21 PASS 9 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 10 seconds
- 2026-02-24

### Error 2026-02-24T01:03:37+00:00
```
2026-02-24T01:03:37.6534290Z === RUN   TestAccSearchIndex_withStoredSourceUpdateEmptyType
2026-02-24T01:03:37.6630060Z === CONT  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2026-02-24T01:03:39.2987138Z === NAME  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2026-02-24T01:03:39.2988236Z     resource_search_index_test.go:290: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:03:39.2989006Z         
2026-02-24T01:03:39.2990380Z         Error: error creating index: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:03:39.2991322Z         
2026-02-24T01:03:39.2991870Z           with mongodbatlas_search_index.test,
2026-02-24T01:03:39.2993051Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-02-24T01:03:39.2994142Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-02-24T01:03:39.2994702Z         
2026-02-24T01:03:39.4092529Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateEmptyType (1.75s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 8 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 9 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 8 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 11 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 10 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 10 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
