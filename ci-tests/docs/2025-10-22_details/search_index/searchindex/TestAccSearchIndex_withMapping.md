# search_index/searchindex/TestAccSearchIndex_withMapping Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 40) FAIL
Success rate: 97.56%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-12 01:07](#error-2025-10-12t0107350000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes | qa | 4.07s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 7 seconds
- 2025-09-24 PASS 5 seconds
- 2025-09-25 PASS 7 seconds
- 2025-09-26 PASS 8 seconds
- 2025-09-27 PASS 6 seconds
- 2025-09-28 PASS 6 seconds
- 2025-09-29 PASS 7 seconds
- 2025-09-30
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-10-01
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 9 seconds
- 2025-10-02 PASS 6 seconds
- 2025-10-03 PASS 5 seconds
- 2025-10-04 PASS 7 seconds
- 2025-10-05 PASS 5 seconds
- 2025-10-06 PASS 7 seconds
- 2025-10-07 PASS 5 seconds
- 2025-10-08 PASS 9 seconds
- 2025-10-09 PASS 7 seconds
- 2025-10-10 PASS 5 seconds
- 2025-10-11 PASS 5 seconds
- 2025-10-12

### Error 2025-10-12T01:07:35+00:00
```
2025-10-12T01:07:35.9807286Z === RUN   TestAccSearchIndex_withMapping
2025-10-12T01:07:35.9832113Z === CONT  TestAccSearchIndex_withMapping
2025-10-12T01:07:39.1592659Z    test_name=TestAccSearchIndex_withStoredSourceUpdateSearchType test_terraform_path=/home/runner/work/_temp/267b1043-c4de-4b3f-a5e2-50c8370be742/terraform test_working_directory=/tmp/plugintest38275967 test_step_number=1
2025-10-12T01:07:40.6047308Z === NAME  TestAccSearchIndex_withMapping
2025-10-12T01:07:40.6047981Z     resource_search_index_test.go:42: Step 1/1 error: Error running apply: exit status 1
2025-10-12T01:07:40.6048390Z         
2025-10-12T01:07:40.6050966Z         Error: error creating index: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-12T01:07:40.6052307Z         
2025-10-12T01:07:40.6052634Z           with mongodbatlas_search_index.test,
2025-10-12T01:07:40.6053246Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-12T01:07:40.6053810Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-12T01:07:40.6054110Z         
2025-10-12T01:07:40.6560418Z --- FAIL: TestAccSearchIndex_withMapping (4.67s)
```

- 2025-10-13 PASS 7 seconds
- 2025-10-14 PASS 7 seconds
- 2025-10-15 PASS 6 seconds
- 2025-10-16 PASS 6 seconds
- 2025-10-17 PASS 7 seconds
- 2025-10-18 PASS 5 seconds
- 2025-10-19 PASS 6 seconds
- 2025-10-20
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-10-21 PASS 6 seconds
- 2025-10-22
  - PASS 6 seconds
  - PASS 4 seconds