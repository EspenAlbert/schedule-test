# search_index/searchindex/TestAccSearchIndex_withSynonyms Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-24 00:50](#error-2026-02-24t0050170000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/699cf29e8dfec41eaa845d3d/clusters/test-acc-tf-c-3544188480149776093/search/indexes | dev | 3.00s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 6 seconds
- 2026-02-06 PASS 8 seconds
- 2026-02-07 PASS 6 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 7 seconds
- 2026-02-10 PASS 6 seconds
- 2026-02-11 PASS 8 seconds
- 2026-02-12 PASS 7 seconds
- 2026-02-13 PASS 10 seconds
- 2026-02-14 PASS 7 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 6 seconds
- 2026-02-17 PASS 7 seconds
- 2026-02-18 PASS 7 seconds
- 2026-02-19 PASS 7 seconds
- 2026-02-20 PASS 6 seconds
- 2026-02-21 PASS 5 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 7 seconds
- 2026-02-24

### Error 2026-02-24T00:50:17+00:00
```
2026-02-24T00:50:17.1600621Z === RUN   TestAccSearchIndex_withSynonyms
2026-02-24T01:03:37.6683454Z === CONT  TestAccSearchIndex_withSynonyms
2026-02-24T01:03:39.2576949Z    test_name=TestAccSearchIndex_updatedToEmptyMappingsFields test_terraform_path=/home/runner/work/_temp/d98ac422-78b9-46ec-a80e-7177ee0431aa/terraform test_working_directory=/tmp/plugintest374463822 test_step_number=1
2026-02-24T01:03:40.6648857Z === NAME  TestAccSearchIndex_withSynonyms
2026-02-24T01:03:40.6649998Z     resource_search_index_test.go:61: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:03:40.6650778Z         
2026-02-24T01:03:40.6654553Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf29e8dfec41eaa845d3d/clusters/test-acc-tf-c-3544188480149776093/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-02-24T01:03:40.6657214Z         
2026-02-24T01:03:40.6657765Z           with mongodbatlas_search_index.test,
2026-02-24T01:03:40.6658935Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-02-24T01:03:40.6660203Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-02-24T01:03:40.6660758Z         
2026-02-24T01:03:40.7205913Z --- FAIL: TestAccSearchIndex_withSynonyms (3.05s)
```

- 2026-02-25 PASS 8 seconds
- 2026-02-26 PASS 7 seconds
- 2026-02-27 PASS 7 seconds
- 2026-02-28 PASS 6 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 9 seconds
- 2026-03-03 PASS 6 seconds
- 2026-03-04 PASS 6 seconds
- 2026-03-05 PASS 7 seconds
- 2026-03-06 PASS 7 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 5 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 6 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 9 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 7 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 6 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 9 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 7 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
