# search_index/searchindex/TestAccSearchIndex_withStoredSourceInclude Test Details
# Found 30 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters | dev | out_of_capacity | 0.06s
[2026-02-24 01:03](#error-2026-02-24t0103370000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/699cf29e8dfec41eaa845d3d/clusters/test-acc-tf-c-3544188480149776093/search/indexes | dev |  | 3.03s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 8 seconds
- 2026-01-27 PASS 6 seconds
- 2026-01-28 PASS 9 seconds
- 2026-01-29 PASS 7 seconds
- 2026-01-30 PASS 8 seconds
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:39:26+00:00
```
2026-02-03T00:39:26.2610927Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2026-02-03T00:39:26.2611569Z     resource_search_index_test.go:282: Creating execution cluster: test-acc-tf-c-1574549999683006170
2026-02-03T00:39:26.8184583Z     resource_search_index_test.go:282: 
2026-02-03T00:39:26.8186684Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:26.8189450Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:26.8192067Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:300
2026-02-03T00:39:26.8195122Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:282
2026-02-03T00:39:26.8196152Z         	Error:      	Received unexpected error:
2026-02-03T00:39:26.8199375Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:26.8201000Z         	Test:       	TestAccSearchIndex_withStoredSourceInclude
2026-02-03T00:39:26.8203671Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1574549999683006170, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:26.8205254Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (0.56s)
```

- 2026-02-04 PASS 6 seconds
- 2026-02-05 PASS 5 seconds
- 2026-02-06 PASS 9 seconds
- 2026-02-07 PASS 6 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 7 seconds
- 2026-02-10 PASS 6 seconds
- 2026-02-11 PASS 7 seconds
- 2026-02-12 PASS 6 seconds
- 2026-02-13 PASS 8 seconds
- 2026-02-14 PASS 8 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 9 seconds
- 2026-02-17 PASS 6 seconds
- 2026-02-18 PASS 10 seconds
- 2026-02-19 PASS 7 seconds
- 2026-02-20 PASS 7 seconds
- 2026-02-21 PASS 5 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 8 seconds
- 2026-02-24

### Error 2026-02-24T01:03:37+00:00
```
2026-02-24T01:03:37.6531635Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2026-02-24T01:03:37.6620714Z === CONT  TestAccSearchIndex_withStoredSourceInclude
2026-02-24T01:03:40.9188011Z === NAME  TestAccSearchIndex_withStoredSourceInclude
2026-02-24T01:03:40.9188785Z     resource_search_index_test.go:282: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:03:40.9189596Z         
2026-02-24T01:03:40.9191915Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf29e8dfec41eaa845d3d/clusters/test-acc-tf-c-3544188480149776093/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-02-24T01:03:40.9193672Z         
2026-02-24T01:03:40.9193991Z           with mongodbatlas_search_index.test,
2026-02-24T01:03:40.9194635Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-02-24T01:03:40.9195250Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-02-24T01:03:40.9195560Z         
2026-02-24T01:03:40.9666688Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (3.31s)
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
- 2026-02-01 PASS 6 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 4 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 6 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 9 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 7 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 8 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
