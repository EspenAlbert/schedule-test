# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceUpdateSearchType Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 8)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-24 01:07](#error-2026-02-24t0107110000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes | dev | 3.02s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 6 minutes
- 2026-02-06 PASS 7 minutes
- 2026-02-07 PASS 14 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 9 minutes
- 2026-02-10 PASS 9 minutes
- 2026-02-11 PASS 11 minutes
- 2026-02-12 PASS 10 minutes
- 2026-02-13 PASS 4 minutes
- 2026-02-14 PASS 15 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 5 minutes
- 2026-02-17 PASS 8 minutes
- 2026-02-18 PASS 9 minutes
- 2026-02-19 PASS 2 minutes
- 2026-02-20 PASS 9 minutes
- 2026-02-21 PASS 5 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 20 minutes
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3755652Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-24T01:07:11.3759371Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-24T01:07:11.3840838Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-24T01:07:11.3841409Z     resource_test.go:201: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:07:11.3841803Z         
2026-02-24T01:07:11.3842098Z         Error: Error calling API in Create
2026-02-24T01:07:11.3842384Z         
2026-02-24T01:07:11.3842724Z           with mongodbatlas_search_index_api.test,
2026-02-24T01:07:11.3843390Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-02-24T01:07:11.3844030Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-02-24T01:07:11.3844630Z         
2026-02-24T01:07:11.3845528Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes
2026-02-24T01:07:11.3846618Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-02-24T01:07:11.3847396Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-02-24T01:07:11.3848063Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-02-24T01:07:11.3848637Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (3.25s)
```

- 2026-02-25 PASS 12 minutes
- 2026-02-26 PASS 6 minutes
- 2026-02-27 PASS 4 minutes
- 2026-02-28 PASS 16 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 14 minutes
  - PASS 18 minutes
- 2026-03-03 PASS 9 minutes
- 2026-03-04 PASS 18 minutes
- 2026-03-05 PASS 12 minutes
- 2026-03-06 PASS 16 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-15 01:24](#error-2026-02-15t0124540000) |  | qa | 516.01s
[2026-02-17 16:03](#error-2026-02-17t1603210000) |  | qa | 639.03s
[2026-02-17 20:22](#error-2026-02-17t2022240000) |  | qa | 827.09s
[2026-02-22 01:16](#error-2026-02-22t0116570000) |  | qa | 504.06s
[2026-03-01 01:27](#error-2026-03-01t0127320000) |  | qa | 264.04s
[2026-03-02 12:30](#error-2026-03-02t1230440000) |  | qa | 395.02s
[2026-03-03 10:09](#error-2026-03-03t1009390000) |  | qa | 104.01s

### Timeline
- 2026-02-04 PASS 6 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 11 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15

### Error 2026-02-15T01:24:54+00:00
```
2026-02-15T01:24:54.1949916Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-15T01:24:54.1955049Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-15T01:24:54.1967282Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-15T01:24:54.1969000Z     resource_test.go:201: Error running post-test destroy, there may be dangling resources: search index (6991166188f4b5b22540066f/test-acc-tf-c-2299255714505639175/699119bbcef188b1a572d9ed) still exists
2026-02-15T01:24:54.1970125Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (516.09s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 10 minutes

### Error 2026-02-17T16:03:21+00:00
```
2026-02-17T16:03:21.9179064Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-17T16:03:21.9182517Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-17T16:03:21.9204285Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-17T16:03:21.9205393Z     resource_test.go:201: Error running post-test destroy, there may be dangling resources: search index (6994881dc64c45bf0bbad77d/test-acc-tf-c-1519459127951114801/69948b7917482212e330f3a4) still exists
2026-02-17T16:03:21.9206338Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (639.32s)
```

  - FAIL 13 minutes

### Error 2026-02-17T20:22:24+00:00
```
2026-02-17T20:22:24.3908092Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-17T20:22:24.3915483Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-17T20:22:24.3954285Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-17T20:22:24.3956283Z     resource_test.go:201: Error running post-test destroy, there may be dangling resources: search index (6994c5a5e3d2a8bb0299cdd0/test-acc-tf-c-3721231508258722541/6994c87198b8813de67e5ca4) still exists
2026-02-17T20:22:24.3957946Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (827.85s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T01:16:57+00:00
```
2026-02-22T01:16:57.8711289Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-22T01:16:57.8714049Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-22T01:16:57.8725657Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-22T01:16:57.8726830Z     resource_test.go:201: Error running post-test destroy, there may be dangling resources: search index (699a505cc26caab7eb26324b/test-acc-tf-c-8475155293841306936/699a53fc62519b891468fe9a) still exists
2026-02-22T01:16:57.8727834Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (504.56s)
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
2026-03-01T01:27:32.2244249Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-03-01T01:27:32.2246597Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-03-01T01:27:32.2266206Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-03-01T01:27:32.2267436Z     resource_test.go:202: Error running post-test destroy, there may be dangling resources: search index (69a38bb617b2c5dfb1d16cfb/test-acc-tf-c-1558300454499968194/69a38f9b75e18691c08c45ad) still exists
2026-03-01T01:27:32.2268554Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (264.36s)
```

- 2026-03-02

### Error 2026-03-02T12:30:44+00:00
```
2026-03-02T12:30:44.3941053Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-03-02T12:30:44.3943192Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-03-02T12:30:44.3955350Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-03-02T12:30:44.3956462Z     resource_test.go:202: Error running post-test destroy, there may be dangling resources: search index (69a57b310b79a8d7dc99dd5c/test-acc-tf-c-5453985973535775606/69a57e430b79a8d7dc9a1072) still exists
2026-03-02T12:30:44.3957440Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (395.19s)
```

- 2026-03-03

### Error 2026-03-03T10:09:39+00:00
```
2026-03-03T10:09:39.4802367Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-03-03T10:09:39.4804844Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-03-03T10:09:39.4812806Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-03-03T10:09:39.4814146Z     resource_test.go:202: Error running post-test destroy, there may be dangling resources: search index (69a6aa6f61f800e9358a4c4b/test-acc-tf-c-3428198865123856829/69a6adc861f800e9358b53bb) still exists
2026-03-03T10:09:39.4815402Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (104.07s)
```

- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
