# search_index/searchindex/TestAccVectorSearchIndex_withNumPartitions Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 02:16](#error-2026-08-27t0216550000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes | dev | 2292.07s
[2026-08-28 03:34](#error-2026-08-28t0334160000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes | dev | 1807.04s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 13 minutes
- 2026-08-07 PASS 22 minutes
- 2026-08-08 PASS 15 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 17 minutes
- 2026-08-11 PASS 13 minutes
- 2026-08-12 PASS 14 minutes
- 2026-08-13 PASS 14 minutes
- 2026-08-14 PASS 18 minutes
- 2026-08-15 PASS 12 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 12 minutes
- 2026-08-18 PASS 13 minutes
- 2026-08-19 PASS 13 minutes
- 2026-08-20 PASS 12 minutes
- 2026-08-21 PASS 15 minutes
- 2026-08-22 PASS 12 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 20 minutes
- 2026-08-25 PASS 13 minutes
- 2026-08-26 PASS 13 minutes
- 2026-08-27

### Error 2026-08-27T02:16:55+00:00
```
2026-08-27T02:16:55.4733704Z === RUN   TestAccVectorSearchIndex_withNumPartitions
2026-08-27T02:52:57.3725059Z    test_step_number=1 test_name=TestAccVectorSearchIndex_withNumPartitions
2026-08-27T02:52:57.3725803Z     resource_search_index_test.go:252: Step 1/3 error: Error running apply: exit status 1
2026-08-27T02:52:57.3726290Z         
2026-08-27T02:52:57.3728581Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f970a9936ccbea2e9b9ff/clusters/test-acc-tf-c-714542849431786712/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T02:52:57.3730057Z         
2026-08-27T02:52:57.3730410Z           with mongodbatlas_search_index.test,
2026-08-27T02:52:57.3731106Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_search_index" "test":
2026-08-27T02:52:57.3731748Z           24: 		resource "mongodbatlas_search_index" "test" {
2026-08-27T02:52:57.3732090Z         
2026-08-27T02:55:08.1490336Z --- FAIL: TestAccVectorSearchIndex_withNumPartitions (2292.68s)
```

- 2026-08-28

### Error 2026-08-28T03:34:16+00:00
```
2026-08-28T03:34:16.0752160Z === RUN   TestAccVectorSearchIndex_withNumPartitions
2026-08-28T04:02:11.9948969Z   
2026-08-28T04:02:11.9949601Z     resource_search_index_test.go:252: Step 1/3 error: Error running apply: exit status 1
2026-08-28T04:02:11.9950178Z         
2026-08-28T04:02:11.9952867Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:02:11.9954673Z         
2026-08-28T04:02:11.9955082Z           with mongodbatlas_search_index.test,
2026-08-28T04:02:11.9955948Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_search_index" "test":
2026-08-28T04:02:11.9956755Z           24: 		resource "mongodbatlas_search_index" "test" {
2026-08-28T04:02:11.9958924Z         
2026-08-28T04:04:23.4897116Z --- FAIL: TestAccVectorSearchIndex_withNumPartitions (1807.41s)
```

- 2026-08-29 PASS 13 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 16 minutes
- 2026-09-01 PASS 12 minutes
- 2026-09-02 PASS 12 minutes
- 2026-09-03 PASS 13 minutes
- 2026-09-04 PASS 13 minutes

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
- 2026-08-13 PASS 13 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 14 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 12 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 12 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 13 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
