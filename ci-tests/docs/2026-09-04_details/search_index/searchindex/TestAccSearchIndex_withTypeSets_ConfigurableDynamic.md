# search_index/searchindex/TestAccSearchIndex_withTypeSets_ConfigurableDynamic Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 02:03](#error-2026-08-27t0203490000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes | dev | 3.02s
[2026-08-28 03:22](#error-2026-08-28t0322580000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes | dev | 4.09s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 15 seconds
- 2026-08-07 PASS 16 seconds
- 2026-08-08 PASS 14 seconds
- 2026-08-09: MISSING
- 2026-08-10 PASS 18 seconds
- 2026-08-11 PASS 14 seconds
- 2026-08-12 PASS 16 seconds
- 2026-08-13 PASS 16 seconds
- 2026-08-14 PASS 18 seconds
- 2026-08-15 PASS 17 seconds
- 2026-08-16: MISSING
- 2026-08-17 PASS 20 seconds
- 2026-08-18 PASS 17 seconds
- 2026-08-19 PASS 17 seconds
- 2026-08-20 PASS 16 seconds
- 2026-08-21 PASS 18 seconds
- 2026-08-22 PASS 14 seconds
- 2026-08-23: MISSING
- 2026-08-24 PASS 16 seconds
- 2026-08-25 PASS 16 seconds
- 2026-08-26 PASS 17 seconds
- 2026-08-27

### Error 2026-08-27T02:03:49+00:00
```
2026-08-27T02:03:49.0061357Z === RUN   TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-08-27T02:55:08.2984707Z === CONT  TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-08-27T02:55:11.3312100Z === NAME  TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-08-27T02:55:11.3313266Z     resource_search_index_test.go:79: Step 1/3 error: Error running apply: exit status 1
2026-08-27T02:55:11.3314023Z         
2026-08-27T02:55:11.3316224Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T02:55:11.3317638Z         
2026-08-27T02:55:11.3318010Z           with mongodbatlas_search_index.test,
2026-08-27T02:55:11.3318718Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-27T02:55:11.3319386Z           12:         resource "mongodbatlas_search_index" "test" {
2026-08-27T02:55:11.3319739Z         
2026-08-27T02:55:11.3832281Z --- FAIL: TestAccSearchIndex_withTypeSets_ConfigurableDynamic (3.23s)
```

- 2026-08-28

### Error 2026-08-28T03:22:58+00:00
```
2026-08-28T03:22:58.3170822Z === RUN   TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-08-28T04:04:23.4966935Z === CONT  TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-08-28T04:04:28.3378078Z === NAME  TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-08-28T04:04:28.3385255Z   
2026-08-28T04:04:28.3385656Z     resource_search_index_test.go:79: Step 1/3 error: Error running apply: exit status 1
2026-08-28T04:04:28.3386016Z         
2026-08-28T04:04:28.3387900Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:04:28.3388997Z         
2026-08-28T04:04:28.3389276Z           with mongodbatlas_search_index.test,
2026-08-28T04:04:28.3389814Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-28T04:04:28.3390313Z           12:         resource "mongodbatlas_search_index" "test" {
2026-08-28T04:04:28.3390591Z         
2026-08-28T04:04:28.3927848Z --- FAIL: TestAccSearchIndex_withTypeSets_ConfigurableDynamic (4.90s)
```

- 2026-08-29 PASS 15 seconds
- 2026-08-30: MISSING
- 2026-08-31 PASS 20 seconds
- 2026-09-01 PASS 15 seconds
- 2026-09-02 PASS 20 seconds
- 2026-09-03 PASS 17 seconds
- 2026-09-04 PASS 19 seconds

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 17 seconds
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 17 seconds
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 16 seconds
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 17 seconds
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 50 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 21 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
