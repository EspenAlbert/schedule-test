# search_index/searchindex/TestAccSearchIndex_withVectorAutoEmbed Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 02:03](#error-2026-08-27t0203490000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes | dev | 5.03s
[2026-08-28 03:22](#error-2026-08-28t0322580000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes | dev | 3.01s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 13 seconds
- 2026-08-07 PASS 17 seconds
- 2026-08-08 PASS 14 seconds
- 2026-08-09: MISSING
- 2026-08-10 PASS 18 seconds
- 2026-08-11 PASS 15 seconds
- 2026-08-12 PASS 15 seconds
- 2026-08-13 PASS 16 seconds
- 2026-08-14 PASS 16 seconds
- 2026-08-15 PASS 15 seconds
- 2026-08-16: MISSING
- 2026-08-17 PASS 17 seconds
- 2026-08-18 PASS 15 seconds
- 2026-08-19 PASS 16 seconds
- 2026-08-20 PASS 14 seconds
- 2026-08-21 PASS 15 seconds
- 2026-08-22 PASS 14 seconds
- 2026-08-23: MISSING
- 2026-08-24 PASS 15 seconds
- 2026-08-25 PASS 16 seconds
- 2026-08-26 PASS 16 seconds
- 2026-08-27

### Error 2026-08-27T02:03:49+00:00
```
2026-08-27T02:03:49.0065855Z === RUN   TestAccSearchIndex_withVectorAutoEmbed
2026-08-27T02:55:08.2217029Z === CONT  TestAccSearchIndex_withVectorAutoEmbed
2026-08-27T02:55:13.3612097Z === NAME  TestAccSearchIndex_withVectorAutoEmbed
2026-08-27T02:55:13.3613169Z     resource_search_index_test.go:201: Step 1/2 error: Error running apply: exit status 1
2026-08-27T02:55:13.3613857Z         
2026-08-27T02:55:13.3616236Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T02:55:13.3617639Z         
2026-08-27T02:55:13.3618017Z           with mongodbatlas_search_index.test,
2026-08-27T02:55:13.3618727Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-27T02:55:13.3619386Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-27T02:55:13.3619735Z         
2026-08-27T02:55:13.4108885Z --- FAIL: TestAccSearchIndex_withVectorAutoEmbed (5.26s)
```

- 2026-08-28

### Error 2026-08-28T03:22:58+00:00
```
2026-08-28T03:22:58.3174046Z === RUN   TestAccSearchIndex_withVectorAutoEmbed
2026-08-28T04:04:23.6010377Z === CONT  TestAccSearchIndex_withVectorAutoEmbed
2026-08-28T04:04:26.5473863Z === NAME  TestAccSearchIndex_withVectorAutoEmbed
2026-08-28T04:04:26.5474433Z     resource_search_index_test.go:201: Step 1/2 error: Error running apply: exit status 1
2026-08-28T04:04:26.5474879Z         
2026-08-28T04:04:26.5476706Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:04:26.5478119Z         
2026-08-28T04:04:26.5478404Z           with mongodbatlas_search_index.test,
2026-08-28T04:04:26.5478951Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-28T04:04:26.5479453Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-28T04:04:26.5479723Z         
2026-08-28T04:04:26.5900148Z --- FAIL: TestAccSearchIndex_withVectorAutoEmbed (3.09s)
```

- 2026-08-29 PASS 15 seconds
- 2026-08-30: MISSING
- 2026-08-31 PASS 17 seconds
- 2026-09-01 PASS 14 seconds
- 2026-09-02 PASS 18 seconds
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
- 2026-08-13 PASS 15 seconds
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 16 seconds
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
- 2026-08-27 PASS 38 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 18 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
