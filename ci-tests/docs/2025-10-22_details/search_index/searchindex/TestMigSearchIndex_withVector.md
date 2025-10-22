# search_index/searchindex/TestMigSearchIndex_withVector Test Details
# Found 38 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-12 01:07](#error-2025-10-12t0107350000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes | qa | 4.02s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 12 seconds
- 2025-09-24 PASS 10 seconds
- 2025-09-25 PASS 10 seconds
- 2025-09-26 PASS 12 seconds
- 2025-09-27 PASS 11 seconds
- 2025-09-28 PASS 11 seconds
- 2025-09-29 PASS 12 seconds
- 2025-09-30
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-10-01
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 12 seconds
  - PASS 11 seconds
  - PASS 12 seconds
- 2025-10-02 PASS 12 seconds
- 2025-10-03 PASS 10 seconds
- 2025-10-04 PASS 12 seconds
- 2025-10-05 PASS 10 seconds
- 2025-10-06 PASS 10 seconds
- 2025-10-07 PASS 10 seconds
- 2025-10-08 PASS 13 seconds
- 2025-10-09 PASS 12 seconds
- 2025-10-10 PASS 10 seconds
- 2025-10-11 PASS 9 seconds
- 2025-10-12

### Error 2025-10-12T01:07:35+00:00
```
2025-10-12T01:07:35.9804086Z === RUN   TestMigSearchIndex_withVector
2025-10-12T01:07:35.9822657Z === CONT  TestMigSearchIndex_withVector
2025-10-12T01:07:39.9441087Z === NAME  TestMigSearchIndex_withVector
2025-10-12T01:07:39.9441666Z     resource_search_index_migration_test.go:15: Step 1/2 error: Error running apply: exit status 1
2025-10-12T01:07:39.9442101Z         
2025-10-12T01:07:39.9444005Z         Error: error creating index: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-12T01:07:39.9445302Z         
2025-10-12T01:07:39.9445610Z           with mongodbatlas_search_index.test,
2025-10-12T01:07:39.9446221Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_search_index" "test":
2025-10-12T01:07:39.9446781Z           14: 		resource "mongodbatlas_search_index" "test" {
2025-10-12T01:07:39.9447085Z         
2025-10-12T01:07:40.1565145Z --- FAIL: TestMigSearchIndex_withVector (4.18s)
```

- 2025-10-13 PASS 12 seconds
- 2025-10-14 PASS 12 seconds
- 2025-10-15 PASS 12 seconds
- 2025-10-16 PASS 12 seconds
- 2025-10-17 PASS 12 seconds
- 2025-10-18: MISSING
- 2025-10-19 PASS 10 seconds
- 2025-10-20 PASS 10 seconds
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 10 seconds
  - PASS 10 seconds