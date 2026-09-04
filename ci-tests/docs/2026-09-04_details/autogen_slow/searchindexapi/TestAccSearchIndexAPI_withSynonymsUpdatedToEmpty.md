# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 7) FAIL(x 4)
Success rate: 63.64%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-28 04:08](#error-2026-08-28t0408520000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes | dev |  | 3.00s
[2026-08-29 04:57](#error-2026-08-29t0457210000) |  | dev | timeout | 10804.03s
[2026-09-02 04:59](#error-2026-09-02t0459000000) |  | dev | timeout | 10803.03s
[2026-09-03 05:44](#error-2026-09-03t0544170000) |  | dev | timeout | 10804.07s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 42 minutes
- 2026-08-07 PASS 15 minutes
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

### Error 2026-08-28T04:08:52+00:00
```
2026-08-28T04:08:52.7529425Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-08-28T04:08:52.7544303Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-08-28T04:08:52.7655699Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-08-28T04:08:52.7656737Z     resource_test.go:54: Step 1/1 error: Error running apply: exit status 1
2026-08-28T04:08:52.7657485Z         
2026-08-28T04:08:52.7658068Z         Error: Error calling API in Create
2026-08-28T04:08:52.7658625Z         
2026-08-28T04:08:52.7659298Z           with mongodbatlas_search_index_api.test,
2026-08-28T04:08:52.7660887Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-28T04:08:52.7662182Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-28T04:08:52.7662858Z         
2026-08-28T04:08:52.7664428Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes
2026-08-28T04:08:52.7666278Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-28T04:08:52.7667567Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-28T04:08:52.7668646Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:08:52.7669465Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (3.03s)
```

- 2026-08-29

### Error 2026-08-29T04:57:21+00:00
```
2026-08-29T04:57:21.0170143Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-08-29T04:57:21.0188643Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-08-29T04:57:21.0289566Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-08-29T04:57:21.0290463Z     resource_test.go:54: Step 1/1 error: Error running apply: exit status 1
2026-08-29T04:57:21.0291086Z         
2026-08-29T04:57:21.0291601Z         Error: Error waiting for changes in Create
2026-08-29T04:57:21.0292089Z         
2026-08-29T04:57:21.0292643Z           with mongodbatlas_search_index_api.test,
2026-08-29T04:57:21.0293933Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-29T04:57:21.0294988Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-29T04:57:21.0295527Z         
2026-08-29T04:57:21.0296029Z         group_id="6a922a3c197ad1cbd0630515",
2026-08-29T04:57:21.0296770Z         cluster_name="test-acc-tf-c-5836655662705216729",
2026-08-29T04:57:21.0297728Z         index_id="6a922eae874d7bc49124ad60": timeout while waiting for state to
2026-08-29T04:57:21.0298731Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-08-29T04:57:21.0299790Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-08-29T04:57:21.0300911Z         transient error, wait before retrying to allow resource deletion to finish
2026-08-29T04:57:21.0303912Z   diagnostic_detail=
2026-08-29T04:57:21.0310042Z    tf_resource_type=mongodbatlas_search_index_api tf_req_id=2a78c484-b599-8982-ed00-55122c2d7001 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.11
2026-08-29T04:57:21.0323563Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/74295bf4-48de-4352-be2c-61f1d3343c2d/terraform test_working_directory=/tmp/plugintest1998365852 test_name=TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-29T04:57:21.0341689Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (10804.27s)
```

- 2026-08-30: MISSING
- 2026-08-31 PASS 42 minutes
- 2026-09-01 PASS 26 minutes
- 2026-09-02

### Error 2026-09-02T04:59:00+00:00
```
2026-09-02T04:59:00.1904877Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-02T04:59:00.1924156Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-02T04:59:00.1999872Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-02T04:59:00.2002878Z     resource_test.go:54: Step 1/1 error: Error running apply: exit status 1
2026-09-02T04:59:00.2003561Z         
2026-09-02T04:59:00.2004151Z         Error: Error waiting for changes in Create
2026-09-02T04:59:00.2004696Z         
2026-09-02T04:59:00.2005309Z           with mongodbatlas_search_index_api.test,
2026-09-02T04:59:00.2006611Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-02T04:59:00.2007906Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-02T04:59:00.2008412Z         
2026-09-02T04:59:00.2008740Z         group_id="6a97712e7f32ed5349f9c310",
2026-09-02T04:59:00.2009211Z         cluster_name="test-acc-tf-c-3797371471604204812",
2026-09-02T04:59:00.2010769Z         index_id="6a9776737f32ed5349fdc8a2": timeout while waiting for state to
2026-09-02T04:59:00.2012235Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-02T04:59:00.2012959Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-02T04:59:00.2013683Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-02T04:59:00.2014242Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (10803.35s)
```

- 2026-09-03
  - FAIL 3 hours

### Error 2026-09-03T05:44:17+00:00
```
2026-09-03T05:44:17.7095247Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-03T05:44:17.7112994Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-03T05:44:17.7141145Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-03T05:44:17.7142100Z     resource_test.go:54: Step 1/1 error: Error running apply: exit status 1
2026-09-03T05:44:17.7142761Z         
2026-09-03T05:44:17.7143327Z         Error: Error waiting for changes in Create
2026-09-03T05:44:17.7143849Z         
2026-09-03T05:44:17.7144419Z           with mongodbatlas_search_index_api.test,
2026-09-03T05:44:17.7145593Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T05:44:17.7146696Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T05:44:17.7147260Z         
2026-09-03T05:44:17.7147774Z         group_id="6a98c2e18c6ee76bb0d54be9",
2026-09-03T05:44:17.7148523Z         cluster_name="test-acc-tf-c-5646429399751727716",
2026-09-03T05:44:17.7149512Z         index_id="6a98c757c4c2ba86c180a1cb": timeout while waiting for state to
2026-09-03T05:44:17.7150559Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-03T05:44:17.7152008Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-03T05:44:17.7153161Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-03T05:44:17.7154071Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (10804.74s)
```

  - PASS 56 minutes
- 2026-09-04 PASS an hour

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
- 2026-08-30 PASS 46 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
