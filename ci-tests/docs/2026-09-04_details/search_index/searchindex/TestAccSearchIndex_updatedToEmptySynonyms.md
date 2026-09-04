# search_index/searchindex/TestAccSearchIndex_updatedToEmptySynonyms Test Details
# Found 10 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-28 03:22](#error-2026-08-28t0322580000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes | dev | 3.01s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 14 seconds
- 2026-08-07 PASS 16 seconds
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28

### Error 2026-08-28T03:22:58+00:00
```
2026-08-28T03:22:58.3171492Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2026-08-28T04:04:23.5788728Z === CONT  TestAccSearchIndex_updatedToEmptySynonyms
2026-08-28T04:04:26.5769611Z === NAME  TestAccSearchIndex_updatedToEmptySynonyms
2026-08-28T04:04:26.5770341Z     resource_search_index_test.go:127: Step 1/2 error: Error running apply: exit status 1
2026-08-28T04:04:26.5770883Z         
2026-08-28T04:04:26.5773154Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:04:26.5775014Z         
2026-08-28T04:04:26.5775465Z           with mongodbatlas_search_index.test,
2026-08-28T04:04:26.5776346Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-28T04:04:26.5777514Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-28T04:04:26.5777932Z         
2026-08-28T04:04:26.6270139Z --- FAIL: TestAccSearchIndex_updatedToEmptySynonyms (3.13s)
```

- 2026-08-29 PASS 13 seconds
- 2026-08-30: MISSING
- 2026-08-31 PASS 17 seconds
- 2026-09-01 PASS 14 seconds
- 2026-09-02 PASS 16 seconds
- 2026-09-03 PASS 14 seconds
- 2026-09-04 PASS 16 seconds

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 19 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
