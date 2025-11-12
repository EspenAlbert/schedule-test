# search_index/searchindex/TestMigSearchIndex_withVector Test Details
# Found 31 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 01:07](#error-2025-10-12t0107350000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes | qa |  | 4.02s
[2025-10-27 01:17](#error-2025-10-27t0117440000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes | dev | flaky_500 | 5.01s

## Timeline
- 2025-10-03: MISSING
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
- 2025-10-23: MISSING
- 2025-10-24 PASS 12 seconds
- 2025-10-25: MISSING
- 2025-10-26 PASS 10 seconds
- 2025-10-27

### Error 2025-10-27T01:17:44+00:00
```
2025-10-27T01:17:44.7013339Z === RUN   TestMigSearchIndex_withVector
2025-10-27T01:17:44.7083568Z === CONT  TestMigSearchIndex_withVector
2025-10-27T01:17:49.5668179Z === NAME  TestMigSearchIndex_withVector
2025-10-27T01:17:49.5668762Z     resource_search_index_migration_test.go:15: Step 1/2 error: Error running apply: exit status 1
2025-10-27T01:17:49.5669192Z         
2025-10-27T01:17:49.5671418Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-27T01:17:49.5672767Z         
2025-10-27T01:17:49.5673070Z           with mongodbatlas_search_index.test,
2025-10-27T01:17:49.5673684Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_search_index" "test":
2025-10-27T01:17:49.5674248Z           14: 		resource "mongodbatlas_search_index" "test" {
2025-10-27T01:17:49.5674539Z         
2025-10-27T01:17:49.7738875Z --- FAIL: TestMigSearchIndex_withVector (5.07s)
```

- 2025-10-28: MISSING
- 2025-10-29 PASS 11 seconds
- 2025-10-30: MISSING
- 2025-10-31 PASS 10 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 10 seconds
- 2025-11-03 PASS 12 seconds
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 11 seconds
  - PASS 10 seconds
- 2025-11-06: MISSING
- 2025-11-07 PASS 11 seconds
- 2025-11-08: MISSING
- 2025-11-09 PASS 10 seconds
- 2025-11-10 PASS 10 seconds
- 2025-11-11: MISSING
- 2025-11-12 PASS 10 seconds