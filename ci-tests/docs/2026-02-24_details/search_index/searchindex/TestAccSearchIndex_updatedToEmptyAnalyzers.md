# search_index/searchindex/TestAccSearchIndex_updatedToEmptyAnalyzers Test Details
# Found 30 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-03 00:39](#error-2026-02-03t0039220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters | dev | out_of_capacity | 0.05s
[2026-02-24 00:50](#error-2026-02-24t0050170000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/699cf29e8dfec41eaa845d3d/clusters/test-acc-tf-c-3544188480149776093/search/indexes | dev |  | 3.08s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 10 seconds
- 2026-01-27 PASS 8 seconds
- 2026-01-28 PASS 11 seconds
- 2026-01-29 PASS 9 seconds
- 2026-01-30 PASS 11 seconds
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:39:22+00:00
```
2026-02-03T00:39:22.7708776Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2026-02-03T00:39:22.7709413Z     resource_search_index_test.go:146: Creating execution cluster: test-acc-tf-c-8789563289466158752
2026-02-03T00:39:23.2798439Z     resource_search_index_test.go:146: 
2026-02-03T00:39:23.2800202Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:23.2802463Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:23.2805343Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:146
2026-02-03T00:39:23.2806371Z         	Error:      	Received unexpected error:
2026-02-03T00:39:23.2809393Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:23.2810722Z         	Test:       	TestAccSearchIndex_updatedToEmptyAnalyzers
2026-02-03T00:39:23.2812848Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8789563289466158752, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:23.2814279Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (0.51s)
```

- 2026-02-04 PASS 10 seconds
- 2026-02-05 PASS 9 seconds
- 2026-02-06 PASS 10 seconds
- 2026-02-07 PASS 8 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 12 seconds
- 2026-02-10 PASS 9 seconds
- 2026-02-11 PASS 11 seconds
- 2026-02-12 PASS 9 seconds
- 2026-02-13 PASS 11 seconds
- 2026-02-14 PASS 11 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 9 seconds
- 2026-02-17 PASS 10 seconds
- 2026-02-18 PASS 11 seconds
- 2026-02-19 PASS 11 seconds
- 2026-02-20 PASS 12 seconds
- 2026-02-21 PASS 8 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 12 seconds
- 2026-02-24

### Error 2026-02-24T00:50:17+00:00
```
2026-02-24T00:50:17.1603185Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2026-02-24T01:03:37.6557569Z === CONT  TestAccSearchIndex_updatedToEmptyAnalyzers
2026-02-24T01:03:41.4572958Z === NAME  TestAccSearchIndex_updatedToEmptyAnalyzers
2026-02-24T01:03:41.4573633Z     resource_search_index_test.go:149: Step 1/3 error: Error running apply: exit status 1
2026-02-24T01:03:41.4574273Z         
2026-02-24T01:03:41.4576460Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf29e8dfec41eaa845d3d/clusters/test-acc-tf-c-3544188480149776093/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-02-24T01:03:41.4577875Z         
2026-02-24T01:03:41.4578196Z           with mongodbatlas_search_index.test,
2026-02-24T01:03:41.4578856Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-02-24T01:03:41.4579715Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-02-24T01:03:41.4580039Z         
2026-02-24T01:03:41.5073486Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (3.85s)
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
- 2026-02-01 PASS 9 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 10 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 9 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 10 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 10 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 9 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
