# search_index/searchindex/TestAccSearchIndex_updatedToEmptyMappingsFields Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 02:03](#error-2026-08-27t0203490000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes | dev | 3.09s
[2026-08-28 03:22](#error-2026-08-28t0322580000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes | dev | 3.09s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 14 seconds
- 2026-08-07 PASS 15 seconds
- 2026-08-08 PASS 13 seconds
- 2026-08-09: MISSING
- 2026-08-10 PASS 17 seconds
- 2026-08-11 PASS 13 seconds
- 2026-08-12 PASS 15 seconds
- 2026-08-13 PASS 15 seconds
- 2026-08-14 PASS 16 seconds
- 2026-08-15 PASS 16 seconds
- 2026-08-16: MISSING
- 2026-08-17 PASS 17 seconds
- 2026-08-18 PASS 14 seconds
- 2026-08-19 PASS 14 seconds
- 2026-08-20 PASS 13 seconds
- 2026-08-21 PASS 16 seconds
- 2026-08-22 PASS 12 seconds
- 2026-08-23: MISSING
- 2026-08-24 PASS 14 seconds
- 2026-08-25 PASS 13 seconds
- 2026-08-26 PASS 14 seconds
- 2026-08-27

### Error 2026-08-27T02:03:49+00:00
```
2026-08-27T02:03:49.0064354Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2026-08-27T02:55:08.2604218Z === CONT  TestAccSearchIndex_updatedToEmptyMappingsFields
2026-08-27T02:55:12.0090535Z === NAME  TestAccSearchIndex_updatedToEmptyMappingsFields
2026-08-27T02:55:12.0091546Z     resource_search_index_test.go:175: Step 1/2 error: Error running apply: exit status 1
2026-08-27T02:55:12.0092269Z         
2026-08-27T02:55:12.0096007Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T02:55:12.0098470Z         
2026-08-27T02:55:12.0099059Z           with mongodbatlas_search_index.test,
2026-08-27T02:55:12.0100248Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-27T02:55:12.0101330Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-27T02:55:12.0101906Z         
2026-08-27T02:55:12.0658056Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (3.92s)
```

- 2026-08-28

### Error 2026-08-28T03:22:58+00:00
```
2026-08-28T03:22:58.3172868Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2026-08-28T04:04:23.5198245Z === CONT  TestAccSearchIndex_updatedToEmptyMappingsFields
2026-08-28T04:04:27.3311680Z === NAME  TestAccSearchIndex_updatedToEmptyMappingsFields
2026-08-28T04:04:27.3312365Z     resource_search_index_test.go:175: Step 1/2 error: Error running apply: exit status 1
2026-08-28T04:04:27.3312734Z         
2026-08-28T04:04:27.3314561Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:04:27.3315761Z         
2026-08-28T04:04:27.3316049Z           with mongodbatlas_search_index.test,
2026-08-28T04:04:27.3316585Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-28T04:04:27.3317082Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-28T04:04:27.3317537Z         
2026-08-28T04:04:27.3729224Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (3.88s)
```

- 2026-08-29 PASS 14 seconds
- 2026-08-30: MISSING
- 2026-08-31 PASS 16 seconds
- 2026-09-01 PASS 13 seconds
- 2026-09-02 PASS 16 seconds
- 2026-09-03 PASS 14 seconds
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
- 2026-08-13 PASS 14 seconds
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 15 seconds
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 15 seconds
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 32 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 18 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
