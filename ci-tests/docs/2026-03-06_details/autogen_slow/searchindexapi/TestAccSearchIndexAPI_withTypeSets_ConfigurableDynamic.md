# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 8)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-24 01:07](#error-2026-02-24t0107110000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes | dev | 3.06s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 21 minutes
- 2026-02-06 PASS 39 minutes
- 2026-02-07 PASS 29 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 28 minutes
- 2026-02-10 PASS 37 minutes
- 2026-02-11 PASS 26 minutes
- 2026-02-12 PASS 23 minutes
- 2026-02-13 PASS 29 minutes
- 2026-02-14 PASS 30 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 28 minutes
- 2026-02-17 PASS 26 minutes
- 2026-02-18 PASS 27 minutes
- 2026-02-19 PASS 24 minutes
- 2026-02-20 PASS 26 minutes
- 2026-02-21 PASS 28 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 28 minutes
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3752415Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-24T01:07:11.3758524Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-24T01:07:11.3887279Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-24T01:07:11.3887961Z     resource_test.go:117: Step 1/3 error: Error running apply: exit status 1
2026-02-24T01:07:11.3888461Z         
2026-02-24T01:07:11.3888763Z         Error: Error calling API in Create
2026-02-24T01:07:11.3889148Z         
2026-02-24T01:07:11.3889490Z           with mongodbatlas_search_index_api.test,
2026-02-24T01:07:11.3890276Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-02-24T01:07:11.3891009Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-02-24T01:07:11.3891371Z         
2026-02-24T01:07:11.3892315Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes
2026-02-24T01:07:11.3893309Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-02-24T01:07:11.3894085Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-02-24T01:07:11.3894726Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-02-24T01:07:11.3895769Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (3.55s)
```

- 2026-02-25 PASS 28 minutes
- 2026-02-26 PASS 25 minutes
- 2026-02-27 PASS 20 minutes
- 2026-02-28 PASS 32 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 25 minutes
  - PASS 25 minutes
- 2026-03-03 PASS 21 minutes
- 2026-03-04 PASS 26 minutes
- 2026-03-05 PASS 19 minutes
- 2026-03-06 PASS 26 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-15 01:24](#error-2026-02-15t0124540000) |  | qa | 1111.09s
[2026-02-17 16:03](#error-2026-02-17t1603210000) |  | qa | 1113.01s
[2026-02-17 20:22](#error-2026-02-17t2022240000) |  | qa | 1281.06s
[2026-02-22 01:16](#error-2026-02-22t0116570000) |  | qa | 1048.08s
[2026-03-01 01:27](#error-2026-03-01t0127320000) |  | qa | 958.08s
[2026-03-02 12:30](#error-2026-03-02t1230440000) |  | qa | 1070.02s
[2026-03-03 10:09](#error-2026-03-03t1009390000) |  | qa | 1000.02s

### Timeline
- 2026-02-04 PASS 20 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 17 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15

### Error 2026-02-15T01:24:54+00:00
```
2026-02-15T01:24:54.1946559Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-15T01:24:54.1952486Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-15T01:24:54.2009716Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-15T01:24:54.2010843Z     resource_test.go:117: Error running post-test destroy, there may be dangling resources: search index (6991166188f4b5b22540066f/test-acc-tf-c-2299255714505639175/699119bb88f4b5b22540792a) still exists
2026-02-15T01:24:54.2011938Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (1111.91s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 18 minutes

### Error 2026-02-17T16:03:21+00:00
```
2026-02-17T16:03:21.9175855Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-17T16:03:21.9181545Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-17T16:03:21.9234355Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-17T16:03:21.9235449Z     resource_test.go:117: Error running post-test destroy, there may be dangling resources: search index (6994881dc64c45bf0bbad77d/test-acc-tf-c-1519459127951114801/69948b79c64c45bf0bbb4bca) still exists
2026-02-17T16:03:21.9236523Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (1113.13s)
```

  - FAIL 21 minutes

### Error 2026-02-17T20:22:24+00:00
```
2026-02-17T20:22:24.3902747Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-17T20:22:24.3913325Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-17T20:22:24.3997548Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-17T20:22:24.3999813Z     resource_test.go:117: Error running post-test destroy, there may be dangling resources: search index (6994c5a5e3d2a8bb0299cdd0/test-acc-tf-c-3721231508258722541/6994c87298b8813de67e5cb0) still exists
2026-02-17T20:22:24.4001490Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (1281.63s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T01:16:57+00:00
```
2026-02-22T01:16:57.8707725Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-22T01:16:57.8715590Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-22T01:16:57.8768369Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-22T01:16:57.8769553Z     resource_test.go:117: Error running post-test destroy, there may be dangling resources: search index (699a505cc26caab7eb26324b/test-acc-tf-c-8475155293841306936/699a53fcc26caab7eb26b74d) still exists
2026-02-22T01:16:57.8770550Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (1048.77s)
```

- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01

### Error 2026-03-01T01:27:32+00:00
```
2026-03-01T01:27:32.2240161Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-03-01T01:27:32.2248086Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-03-01T01:27:32.2302382Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-03-01T01:27:32.2303530Z     resource_test.go:118: Error running post-test destroy, there may be dangling resources: search index (69a38bb617b2c5dfb1d16cfb/test-acc-tf-c-1558300454499968194/69a38f9b17b2c5dfb1d21cca) still exists
2026-03-01T01:27:32.2304484Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (958.78s)
```

- 2026-03-02

### Error 2026-03-02T12:30:44+00:00
```
2026-03-02T12:30:44.3937603Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-03-02T12:30:44.3945262Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-03-02T12:30:44.4002583Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-03-02T12:30:44.4003705Z     resource_test.go:118: Error running post-test destroy, there may be dangling resources: search index (69a57b310b79a8d7dc99dd5c/test-acc-tf-c-5453985973535775606/69a57e4330346acc7a7e38e8) still exists
2026-03-02T12:30:44.4004669Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (1070.16s)
```

- 2026-03-03

### Error 2026-03-03T10:09:39+00:00
```
2026-03-03T10:09:39.4798355Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-03-03T10:09:39.4805830Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-03-03T10:09:39.4872694Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-03-03T10:09:39.4873810Z     resource_test.go:118: Error running post-test destroy, there may be dangling resources: search index (69a6aa6f61f800e9358a4c4b/test-acc-tf-c-3428198865123856829/69a6adc8aa1a482df74efbd4) still exists
2026-03-03T10:09:39.4874946Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (1000.20s)
```

- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
