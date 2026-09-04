# search_index/searchindex/TestMigSearchIndex_withVector Test Details
# Found 6 TestRuns in dev, qa from 2026-08-07 to 2026-09-04 from master branch: 1 unique tests, PASS(x 5) FAIL
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-28 03:22](#error-2026-08-28t0322580000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes | dev | 4.04s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
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
2026-08-28T03:22:58.3168141Z === RUN   TestMigSearchIndex_withVector
2026-08-28T04:04:23.4905753Z === CONT  TestMigSearchIndex_withVector
2026-08-28T04:04:27.7765558Z === NAME  TestMigSearchIndex_withVector
2026-08-28T04:04:27.7766341Z     resource_search_index_migration_test.go:15: Step 1/2 error: Error running apply: exit status 1
2026-08-28T04:04:27.7766948Z         
2026-08-28T04:04:27.7769251Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:04:27.7770369Z         
2026-08-28T04:04:27.7770640Z           with mongodbatlas_search_index.test,
2026-08-28T04:04:27.7771171Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_search_index" "test":
2026-08-28T04:04:27.7771665Z           14: 		resource "mongodbatlas_search_index" "test" {
2026-08-28T04:04:27.7771943Z         
2026-08-28T04:04:27.9257973Z --- FAIL: TestMigSearchIndex_withVector (4.44s)
```

- 2026-08-29: MISSING
- 2026-08-30: MISSING
- 2026-08-31 PASS 18 seconds
- 2026-09-01: MISSING
- 2026-09-02 PASS 18 seconds
- 2026-09-03: MISSING
- 2026-09-04 PASS 19 seconds

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
- 2026-08-30 PASS 20 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
