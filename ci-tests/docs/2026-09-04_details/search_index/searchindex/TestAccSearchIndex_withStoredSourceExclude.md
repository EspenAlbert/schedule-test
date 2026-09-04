# search_index/searchindex/TestAccSearchIndex_withStoredSourceExclude Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 02:55](#error-2026-08-27t0255080000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes | dev | 3.08s
[2026-08-28 04:04](#error-2026-08-28t0404230000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes | dev | 3.06s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 10 seconds
- 2026-08-07 PASS 13 seconds
- 2026-08-08 PASS 12 seconds
- 2026-08-09: MISSING
- 2026-08-10 PASS 16 seconds
- 2026-08-11 PASS 10 seconds
- 2026-08-12 PASS 13 seconds
- 2026-08-13 PASS 10 seconds
- 2026-08-14 PASS 13 seconds
- 2026-08-15 PASS 13 seconds
- 2026-08-16: MISSING
- 2026-08-17 PASS 13 seconds
- 2026-08-18 PASS 12 seconds
- 2026-08-19 PASS 12 seconds
- 2026-08-20 PASS 11 seconds
- 2026-08-21 PASS 14 seconds
- 2026-08-22 PASS 10 seconds
- 2026-08-23: MISSING
- 2026-08-24 PASS 10 seconds
- 2026-08-25 PASS 11 seconds
- 2026-08-26 PASS 11 seconds
- 2026-08-27

### Error 2026-08-27T02:55:08+00:00
```
2026-08-27T02:55:08.1739084Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2026-08-27T02:55:08.2387358Z === CONT  TestAccSearchIndex_withStoredSourceExclude
2026-08-27T02:55:11.8836326Z === NAME  TestAccSearchIndex_withStoredSourceExclude
2026-08-27T02:55:11.8837063Z     resource_search_index_test.go:311: Step 1/1 error: Error running apply: exit status 1
2026-08-27T02:55:11.8837530Z         
2026-08-27T02:55:11.8840078Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T02:55:11.8841741Z         
2026-08-27T02:55:11.8842098Z           with mongodbatlas_search_index.test,
2026-08-27T02:55:11.8842995Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-27T02:55:11.8843632Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-27T02:55:11.8843971Z         
2026-08-27T02:55:11.9379792Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (3.79s)
```

- 2026-08-28

### Error 2026-08-28T04:04:23+00:00
```
2026-08-28T04:04:23.4900789Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2026-08-28T04:04:23.5962785Z === CONT  TestAccSearchIndex_withStoredSourceExclude
2026-08-28T04:04:27.0566668Z === NAME  TestAccSearchIndex_withStoredSourceExclude
2026-08-28T04:04:27.0567373Z     resource_search_index_test.go:311: Step 1/1 error: Error running apply: exit status 1
2026-08-28T04:04:27.0568053Z         
2026-08-28T04:04:27.0569885Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:04:27.0571069Z         
2026-08-28T04:04:27.0571434Z           with mongodbatlas_search_index.test,
2026-08-28T04:04:27.0572042Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-28T04:04:27.0572730Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-28T04:04:27.0573169Z         
2026-08-28T04:04:27.1065713Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (3.61s)
```

- 2026-08-29 PASS 12 seconds
- 2026-08-30: MISSING
- 2026-08-31 PASS 13 seconds
- 2026-09-01 PASS 10 seconds
- 2026-09-02 PASS 14 seconds
- 2026-09-03 PASS 9 seconds
- 2026-09-04 PASS 13 seconds

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 11 seconds
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 12 seconds
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 13 seconds
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 13 seconds
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 16 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 15 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
