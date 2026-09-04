# search_index/searchindex/TestAccSearchIndex_withStoredSourceUpdateEmptyType Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-27 02:55](#error-2026-08-27t0255080000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes | dev | flaky_500 | 3.04s
[2026-08-28 04:04](#error-2026-08-28t0404230000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes | dev |  | 3.08s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 14 seconds
- 2026-08-07 PASS 15 seconds
- 2026-08-08 PASS 13 seconds
- 2026-08-09: MISSING
- 2026-08-10 PASS 16 seconds
- 2026-08-11 PASS 13 seconds
- 2026-08-12 PASS 15 seconds
- 2026-08-13 PASS 14 seconds
- 2026-08-14 PASS 16 seconds
- 2026-08-15 PASS 14 seconds
- 2026-08-16: MISSING
- 2026-08-17 PASS 16 seconds
- 2026-08-18 PASS 15 seconds
- 2026-08-19 PASS 16 seconds
- 2026-08-20 PASS 13 seconds
- 2026-08-21 PASS 16 seconds
- 2026-08-22 PASS 12 seconds
- 2026-08-23: MISSING
- 2026-08-24 PASS 13 seconds
- 2026-08-25 PASS 14 seconds
- 2026-08-26 PASS 15 seconds
- 2026-08-27

### Error 2026-08-27T02:55:08+00:00
```
2026-08-27T02:55:08.1847000Z === RUN   TestAccSearchIndex_withStoredSourceUpdateEmptyType
2026-08-27T02:55:08.2838669Z === CONT  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2026-08-27T02:55:11.4514688Z === NAME  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2026-08-27T02:55:11.4515970Z     resource_search_index_test.go:315: Step 1/2 error: Error running apply: exit status 1
2026-08-27T02:55:11.4516558Z         
2026-08-27T02:55:11.4519564Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T02:55:11.4521095Z         
2026-08-27T02:55:11.4521458Z           with mongodbatlas_search_index.test,
2026-08-27T02:55:11.4522165Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-27T02:55:11.4522999Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-27T02:55:11.4523469Z         
2026-08-27T02:55:11.5009066Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateEmptyType (3.35s)
```

- 2026-08-28

### Error 2026-08-28T04:04:23+00:00
```
2026-08-28T04:04:23.4901594Z === RUN   TestAccSearchIndex_withStoredSourceUpdateEmptyType
2026-08-28T04:04:23.5519049Z === CONT  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2026-08-28T04:04:27.2613753Z === NAME  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2026-08-28T04:04:27.2614576Z     resource_search_index_test.go:315: Step 1/2 error: Error running apply: exit status 1
2026-08-28T04:04:27.2615087Z         
2026-08-28T04:04:27.2617280Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:04:27.2618961Z         
2026-08-28T04:04:27.2619371Z           with mongodbatlas_search_index.test,
2026-08-28T04:04:27.2620263Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-28T04:04:27.2621209Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-28T04:04:27.2621816Z         
2026-08-28T04:04:27.3000406Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateEmptyType (3.81s)
```

- 2026-08-29 PASS 14 seconds
- 2026-08-30: MISSING
- 2026-08-31 PASS 17 seconds
- 2026-09-01 PASS 14 seconds
- 2026-09-02 PASS 17 seconds
- 2026-09-03 PASS 14 seconds
- 2026-09-04 PASS 18 seconds

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 14 seconds
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 14 seconds
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 16 seconds
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
- 2026-08-27 PASS 49 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 17 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
