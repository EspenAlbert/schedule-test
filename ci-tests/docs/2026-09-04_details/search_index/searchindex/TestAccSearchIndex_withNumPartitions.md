# search_index/searchindex/TestAccSearchIndex_withNumPartitions Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 02:03](#error-2026-08-27t0203490000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes | dev | 786.05s
[2026-08-28 03:22](#error-2026-08-28t0322580000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes | dev | 677.08s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 10 minutes
- 2026-08-07 PASS 12 minutes
- 2026-08-08 PASS 12 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 11 minutes
- 2026-08-11 PASS 11 minutes
- 2026-08-12 PASS 11 minutes
- 2026-08-13 PASS 11 minutes
- 2026-08-14 PASS 11 minutes
- 2026-08-15 PASS 12 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 12 minutes
- 2026-08-18 PASS 12 minutes
- 2026-08-19 PASS 11 minutes
- 2026-08-20 PASS 11 minutes
- 2026-08-21 PASS 11 minutes
- 2026-08-22 PASS 11 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 12 minutes
- 2026-08-25 PASS 11 minutes
- 2026-08-26 PASS 10 minutes
- 2026-08-27

### Error 2026-08-27T02:03:49+00:00
```
2026-08-27T02:03:49.0066584Z === RUN   TestAccSearchIndex_withNumPartitions
2026-08-27T02:14:04.4709373Z   
2026-08-27T02:14:04.4712469Z     resource_search_index_test.go:226: Step 1/3 error: Error running apply: exit status 1
2026-08-27T02:14:04.4713788Z         
2026-08-27T02:14:04.4717687Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T02:14:04.4720189Z         
2026-08-27T02:14:04.4720927Z           with mongodbatlas_search_index.test,
2026-08-27T02:14:04.4722319Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_search_index" "test":
2026-08-27T02:14:04.4723768Z           24: 		resource "mongodbatlas_search_index" "test" {
2026-08-27T02:14:04.4724535Z         
2026-08-27T02:16:55.4733167Z --- FAIL: TestAccSearchIndex_withNumPartitions (786.47s)
```

- 2026-08-28

### Error 2026-08-28T03:22:58+00:00
```
2026-08-28T03:22:58.3174618Z === RUN   TestAccSearchIndex_withNumPartitions
2026-08-28T03:32:04.5024614Z    test_terraform_path=/home/runner/work/_temp/70f82674-c306-4281-b045-24c1673e4a2c/terraform
2026-08-28T03:32:04.5025593Z     resource_search_index_test.go:226: Step 1/3 error: Error running apply: exit status 1
2026-08-28T03:32:04.5026157Z         
2026-08-28T03:32:04.5028884Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T03:32:04.5030736Z         
2026-08-28T03:32:04.5031203Z           with mongodbatlas_search_index.test,
2026-08-28T03:32:04.5032084Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_search_index" "test":
2026-08-28T03:32:04.5032873Z           24: 		resource "mongodbatlas_search_index" "test" {
2026-08-28T03:32:04.5033286Z         
2026-08-28T03:34:16.0751739Z --- FAIL: TestAccSearchIndex_withNumPartitions (677.76s)
```

- 2026-08-29 PASS 11 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 11 minutes
- 2026-09-01 PASS 11 minutes
- 2026-09-02 PASS 11 minutes
- 2026-09-03 PASS 11 minutes
- 2026-09-04 PASS 11 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 12 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 12 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 12 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 11 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 12 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 11 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
