# search_index/searchindex/TestAccSearchIndex_basic Test Details
# Found 10 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-28 03:22](#error-2026-08-28t0322580000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes | dev | 3.03s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 15 minutes
- 2026-08-07 PASS 14 seconds
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
2026-08-28T03:22:58.3168665Z === RUN   TestAccSearchIndex_basic
2026-08-28T04:04:23.6158320Z === CONT  TestAccSearchIndex_basic
2026-08-28T04:04:26.5473021Z    test_working_directory=/tmp/plugintest1851924255 test_terraform_path=/home/runner/work/_temp/70f82674-c306-4281-b045-24c1673e4a2c/terraform test_name=TestAccSearchIndex_withVectorAutoEmbed test_step_number=1
2026-08-28T04:04:26.7929574Z === NAME  TestAccSearchIndex_basic
2026-08-28T04:04:26.7930125Z     resource_search_index_test.go:17: Step 1/2 error: Error running apply: exit status 1
2026-08-28T04:04:26.7930576Z         
2026-08-28T04:04:26.7932472Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:04:26.7933550Z         
2026-08-28T04:04:26.7933861Z           with mongodbatlas_search_index.test,
2026-08-28T04:04:26.7934403Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-28T04:04:26.7934985Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-28T04:04:26.7935256Z         
2026-08-28T04:04:26.8298399Z    test_name=TestAccSearchIndex_withStoredSourceTrue test_terraform_path=/home/runner/work/_temp/70f82674-c306-4281-b045-24c1673e4a2c/terraform test_working_directory=/tmp/plugintest2232694947 test_step_number=1
2026-08-28T04:04:26.8362433Z --- FAIL: TestAccSearchIndex_basic (3.34s)
```

- 2026-08-29 PASS 18 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 16 seconds
- 2026-09-01 PASS 16 minutes
- 2026-09-02 PASS 16 seconds
- 2026-09-03 PASS 27 minutes
- 2026-09-04 PASS 15 seconds

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
- 2026-08-30 PASS 18 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
