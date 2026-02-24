# search_index/searchindex/TestAccSearchIndex_withStoredSourceExclude Test Details
# Found 30 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters | dev | out_of_capacity | 0.05s
[2026-02-24 01:03](#error-2026-02-24t0103370000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/699cf29e8dfec41eaa845d3d/clusters/test-acc-tf-c-3544188480149776093/search/indexes | dev |  | 3.00s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 6 seconds
- 2026-01-27 PASS 6 seconds
- 2026-01-28 PASS 7 seconds
- 2026-01-29 PASS 7 seconds
- 2026-01-30 PASS 8 seconds
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:39:26+00:00
```
2026-02-03T00:39:26.8205648Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2026-02-03T00:39:26.8206251Z     resource_search_index_test.go:286: Creating execution cluster: test-acc-tf-c-2864567095230092090
2026-02-03T00:39:27.3589720Z     resource_search_index_test.go:286: 
2026-02-03T00:39:27.3592433Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:27.3596405Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:27.3598986Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:300
2026-02-03T00:39:27.3601375Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:286
2026-02-03T00:39:27.3602320Z         	Error:      	Received unexpected error:
2026-02-03T00:39:27.3605173Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:27.3606469Z         	Test:       	TestAccSearchIndex_withStoredSourceExclude
2026-02-03T00:39:27.3608667Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2864567095230092090, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:27.3610427Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (0.54s)
```

- 2026-02-04 PASS 8 seconds
- 2026-02-05 PASS 7 seconds
- 2026-02-06 PASS 8 seconds
- 2026-02-07 PASS 6 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 6 seconds
- 2026-02-10 PASS 7 seconds
- 2026-02-11 PASS 7 seconds
- 2026-02-12 PASS 7 seconds
- 2026-02-13 PASS 7 seconds
- 2026-02-14 PASS 7 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 6 seconds
- 2026-02-17 PASS 6 seconds
- 2026-02-18 PASS 6 seconds
- 2026-02-19 PASS 7 seconds
- 2026-02-20 PASS 7 seconds
- 2026-02-21 PASS 8 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 6 seconds
- 2026-02-24

### Error 2026-02-24T01:03:37+00:00
```
2026-02-24T01:03:37.6532948Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2026-02-24T01:03:37.6546304Z === CONT  TestAccSearchIndex_withStoredSourceExclude
2026-02-24T01:03:40.6350119Z === NAME  TestAccSearchIndex_withStoredSourceExclude
2026-02-24T01:03:40.6351292Z     resource_search_index_test.go:286: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:03:40.6351948Z         
2026-02-24T01:03:40.6354466Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf29e8dfec41eaa845d3d/clusters/test-acc-tf-c-3544188480149776093/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-02-24T01:03:40.6355875Z         
2026-02-24T01:03:40.6356193Z           with mongodbatlas_search_index.test,
2026-02-24T01:03:40.6356838Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-02-24T01:03:40.6357448Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-02-24T01:03:40.6357757Z         
2026-02-24T01:03:40.6905673Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (3.04s)
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
- 2026-02-04 PASS 6 seconds
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
- 2026-02-15 PASS 8 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 7 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 7 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
