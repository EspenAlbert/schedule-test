# search_index/searchindex/TestAccSearchIndex_withStoredSourceTrue Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 02:55](#error-2026-08-27t0255080000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes | dev | 3.06s
[2026-08-28 04:04](#error-2026-08-28t0404230000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes | dev | 3.04s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 11 seconds
- 2026-08-07 PASS 13 seconds
- 2026-08-08 PASS 12 seconds
- 2026-08-09: MISSING
- 2026-08-10 PASS 13 seconds
- 2026-08-11 PASS 11 seconds
- 2026-08-12 PASS 12 seconds
- 2026-08-13 PASS 12 seconds
- 2026-08-14 PASS 14 seconds
- 2026-08-15 PASS 12 seconds
- 2026-08-16: MISSING
- 2026-08-17 PASS 14 seconds
- 2026-08-18 PASS 13 seconds
- 2026-08-19 PASS 11 seconds
- 2026-08-20 PASS 12 seconds
- 2026-08-21 PASS 14 seconds
- 2026-08-22 PASS 11 seconds
- 2026-08-23: MISSING
- 2026-08-24 PASS 11 seconds
- 2026-08-25 PASS 11 seconds
- 2026-08-26 PASS 11 seconds
- 2026-08-27

### Error 2026-08-27T02:55:08+00:00
```
2026-08-27T02:55:08.1563775Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2026-08-27T02:55:08.2718167Z === CONT  TestAccSearchIndex_withStoredSourceTrue
2026-08-27T02:55:11.6705873Z === NAME  TestAccSearchIndex_withStoredSourceTrue
2026-08-27T02:55:11.6706539Z     resource_search_index_test.go:303: Step 1/1 error: Error running apply: exit status 1
2026-08-27T02:55:11.6707034Z         
2026-08-27T02:55:11.6709307Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T02:55:11.6710849Z         
2026-08-27T02:55:11.6711223Z           with mongodbatlas_search_index.test,
2026-08-27T02:55:11.6711994Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-27T02:55:11.6712869Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-27T02:55:11.6713318Z         
2026-08-27T02:55:11.7186595Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (3.57s)
```

- 2026-08-28

### Error 2026-08-28T04:04:23+00:00
```
2026-08-28T04:04:23.4899332Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2026-08-28T04:04:23.5088669Z === CONT  TestAccSearchIndex_withStoredSourceTrue
2026-08-28T04:04:26.8299715Z === NAME  TestAccSearchIndex_withStoredSourceTrue
2026-08-28T04:04:26.8301465Z     resource_search_index_test.go:303: Step 1/1 error: Error running apply: exit status 1
2026-08-28T04:04:26.8302074Z         
2026-08-28T04:04:26.8304987Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:04:26.8306840Z         
2026-08-28T04:04:26.8307408Z           with mongodbatlas_search_index.test,
2026-08-28T04:04:26.8308274Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-28T04:04:26.8309079Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-28T04:04:26.8309503Z         
2026-08-28T04:04:26.8678152Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (3.38s)
```

- 2026-08-29 PASS 11 seconds
- 2026-08-30: MISSING
- 2026-08-31 PASS 14 seconds
- 2026-09-01 PASS 10 seconds
- 2026-09-02 PASS 15 seconds
- 2026-09-03 PASS 12 seconds
- 2026-09-04 PASS 15 seconds

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 12 seconds
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 14 seconds
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 14 seconds
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 10 seconds
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 19 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 16 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
