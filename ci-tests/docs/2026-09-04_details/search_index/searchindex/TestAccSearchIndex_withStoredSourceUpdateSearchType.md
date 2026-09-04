# search_index/searchindex/TestAccSearchIndex_withStoredSourceUpdateSearchType Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 02:55](#error-2026-08-27t0255080000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes | dev | 4.05s
[2026-08-28 04:04](#error-2026-08-28t0404230000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes | dev | 3.05s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 12 seconds
- 2026-08-07 PASS 15 seconds
- 2026-08-08 PASS 13 seconds
- 2026-08-09: MISSING
- 2026-08-10 PASS 16 seconds
- 2026-08-11 PASS 13 seconds
- 2026-08-12 PASS 14 seconds
- 2026-08-13 PASS 14 seconds
- 2026-08-14 PASS 16 seconds
- 2026-08-15 PASS 15 seconds
- 2026-08-16: MISSING
- 2026-08-17 PASS 17 seconds
- 2026-08-18 PASS 15 seconds
- 2026-08-19 PASS 16 seconds
- 2026-08-20 PASS 13 seconds
- 2026-08-21 PASS 16 seconds
- 2026-08-22 PASS 13 seconds
- 2026-08-23: MISSING
- 2026-08-24 PASS 15 seconds
- 2026-08-25 PASS 15 seconds
- 2026-08-26 PASS 14 seconds
- 2026-08-27

### Error 2026-08-27T02:55:08+00:00
```
2026-08-27T02:55:08.2013385Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-08-27T02:55:08.2522144Z === CONT  TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-08-27T02:55:12.6283276Z === NAME  TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-08-27T02:55:12.6284133Z     resource_search_index_test.go:319: Step 1/2 error: Error running apply: exit status 1
2026-08-27T02:55:12.6284700Z         
2026-08-27T02:55:12.6287099Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T02:55:12.6289044Z         
2026-08-27T02:55:12.6289416Z           with mongodbatlas_search_index.test,
2026-08-27T02:55:12.6290114Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-27T02:55:12.6290755Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-27T02:55:12.6291097Z         
2026-08-27T02:55:12.6772841Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (4.53s)
```

- 2026-08-28

### Error 2026-08-28T04:04:23+00:00
```
2026-08-28T04:04:23.4902648Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-08-28T04:04:23.5308252Z === CONT  TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-08-28T04:04:26.9484085Z === NAME  TestAccSearchIndex_withStoredSourceUpdateSearchType
2026-08-28T04:04:26.9484901Z     resource_search_index_test.go:319: Step 1/2 error: Error running apply: exit status 1
2026-08-28T04:04:26.9485470Z         
2026-08-28T04:04:26.9488268Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:04:26.9490197Z         
2026-08-28T04:04:26.9490610Z           with mongodbatlas_search_index.test,
2026-08-28T04:04:26.9491427Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-28T04:04:26.9492198Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-28T04:04:26.9492594Z         
2026-08-28T04:04:26.9903335Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (3.50s)
```

- 2026-08-29 PASS 14 seconds
- 2026-08-30: MISSING
- 2026-08-31 PASS 16 seconds
- 2026-09-01 PASS 14 seconds
- 2026-09-02 PASS 16 seconds
- 2026-09-03 PASS 12 seconds
- 2026-09-04 PASS 17 seconds

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
- 2026-08-23 PASS 15 seconds
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 46 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 17 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
