# search_index/searchindex/TestAccSearchIndex_updatedToEmptyMappingsFields Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-22 00:50](#error-2025-11-22t0050460000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/692103494aaa8d3932323d58/clusters/test-acc-tf-c-5088840315499119094/search/indexes | dev | 3.07s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 10 seconds
- 2025-10-30 PASS 9 seconds
- 2025-10-31 PASS 9 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 11 seconds
- 2025-11-04 PASS 8 seconds
- 2025-11-05
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-11-06 PASS 8 seconds
- 2025-11-07 PASS 10 seconds
- 2025-11-08 PASS 8 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 8 seconds
- 2025-11-11 PASS 8 seconds
- 2025-11-12 PASS 9 seconds
- 2025-11-13 PASS 9 seconds
- 2025-11-14 PASS 10 seconds
- 2025-11-15 PASS 8 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 10 seconds
- 2025-11-18 PASS 9 seconds
- 2025-11-19 PASS 9 seconds
- 2025-11-20 PASS 9 seconds
- 2025-11-21 PASS 12 seconds
- 2025-11-22

### Error 2025-11-22T00:50:46+00:00
```
2025-11-22T00:50:46.1630145Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2025-11-22T00:50:46.1737302Z === CONT  TestAccSearchIndex_updatedToEmptyMappingsFields
2025-11-22T00:50:49.8236723Z === NAME  TestAccSearchIndex_updatedToEmptyMappingsFields
2025-11-22T00:50:49.8237542Z     resource_search_index_test.go:174: Step 1/2 error: Error running apply: exit status 1
2025-11-22T00:50:49.8238586Z         
2025-11-22T00:50:49.8240890Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/692103494aaa8d3932323d58/clusters/test-acc-tf-c-5088840315499119094/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-11-22T00:50:49.8242559Z         
2025-11-22T00:50:49.8242876Z           with mongodbatlas_search_index.test,
2025-11-22T00:50:49.8243819Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-11-22T00:50:49.8244845Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-11-22T00:50:49.8245376Z         
2025-11-22T00:50:49.8885743Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (3.71s)
```

- 2025-11-23: MISSING
- 2025-11-24 PASS 10 seconds
- 2025-11-25 PASS 10 seconds
- 2025-11-26 PASS 10 seconds
- 2025-11-27 PASS 10 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 7 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 9 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 8 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 9 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 10 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
