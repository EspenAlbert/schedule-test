# search_index/searchindex/TestAccSearchIndex_updatedToEmptyAnalyzers Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 02:03](#error-2026-08-27t0203490000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes | dev | 4.01s
[2026-08-28 03:22](#error-2026-08-28t0322580000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes | dev | 4.01s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 13 seconds
- 2026-08-07 PASS 14 seconds
- 2026-08-08 PASS 14 seconds
- 2026-08-09: MISSING
- 2026-08-10 PASS 17 seconds
- 2026-08-11 PASS 14 seconds
- 2026-08-12 PASS 14 seconds
- 2026-08-13 PASS 14 seconds
- 2026-08-14 PASS 17 seconds
- 2026-08-15 PASS 14 seconds
- 2026-08-16: MISSING
- 2026-08-17 PASS 18 seconds
- 2026-08-18 PASS 15 seconds
- 2026-08-19 PASS 15 seconds
- 2026-08-20 PASS 13 seconds
- 2026-08-21 PASS 17 seconds
- 2026-08-22 PASS 13 seconds
- 2026-08-23: MISSING
- 2026-08-24 PASS 15 seconds
- 2026-08-25 PASS 14 seconds
- 2026-08-26 PASS 15 seconds
- 2026-08-27

### Error 2026-08-27T02:03:49+00:00
```
2026-08-27T02:03:49.0063327Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2026-08-27T02:55:08.2623758Z === CONT  TestAccSearchIndex_updatedToEmptyAnalyzers
2026-08-27T02:55:12.2323364Z === NAME  TestAccSearchIndex_updatedToEmptyAnalyzers
2026-08-27T02:55:12.2324094Z     resource_search_index_test.go:149: Step 1/3 error: Error running apply: exit status 1
2026-08-27T02:55:12.2324661Z         
2026-08-27T02:55:12.2326911Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T02:55:12.2328376Z         
2026-08-27T02:55:12.2328746Z           with mongodbatlas_search_index.test,
2026-08-27T02:55:12.2329454Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-27T02:55:12.2330115Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-27T02:55:12.2330461Z         
2026-08-27T02:55:12.2838668Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (4.13s)
```

- 2026-08-28

### Error 2026-08-28T03:22:58+00:00
```
2026-08-28T03:22:58.3172097Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2026-08-28T04:04:23.5427606Z === CONT  TestAccSearchIndex_updatedToEmptyAnalyzers
2026-08-28T04:04:27.5976150Z === NAME  TestAccSearchIndex_updatedToEmptyAnalyzers
2026-08-28T04:04:27.5976901Z     resource_search_index_test.go:149: Step 1/3 error: Error running apply: exit status 1
2026-08-28T04:04:27.5977551Z         
2026-08-28T04:04:27.5979136Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:04:27.5980433Z         
2026-08-28T04:04:27.5980719Z           with mongodbatlas_search_index.test,
2026-08-28T04:04:27.5981246Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-28T04:04:27.5981991Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-28T04:04:27.5982269Z         
2026-08-28T04:04:27.6360055Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (4.14s)
```

- 2026-08-29 PASS 14 seconds
- 2026-08-30: MISSING
- 2026-08-31 PASS 17 seconds
- 2026-09-01 PASS 13 seconds
- 2026-09-02 PASS 18 seconds
- 2026-09-03 PASS 15 seconds
- 2026-09-04 PASS 18 seconds

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 15 seconds
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 15 seconds
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 15 seconds
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 16 seconds
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 34 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 19 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
