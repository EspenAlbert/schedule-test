# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 8)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-24 01:07](#error-2026-02-24t0107110000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes | dev | 2.05s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 11 minutes
- 2026-02-06 PASS 29 minutes
- 2026-02-07 PASS 22 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 27 minutes
- 2026-02-10 PASS 21 minutes
- 2026-02-11 PASS 23 minutes
- 2026-02-12 PASS 12 minutes
- 2026-02-13 PASS 24 minutes
- 2026-02-14 PASS 19 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 16 minutes
- 2026-02-17 PASS 17 minutes
- 2026-02-18 PASS 17 minutes
- 2026-02-19 PASS 14 minutes
- 2026-02-20 PASS 25 minutes
- 2026-02-21 PASS 15 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 19 minutes
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3750433Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-24T01:07:11.3758012Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-24T01:07:11.3773421Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-24T01:07:11.3774026Z     resource_test.go:73: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:07:11.3774405Z         
2026-02-24T01:07:11.3774693Z         Error: Error calling API in Create
2026-02-24T01:07:11.3774988Z         
2026-02-24T01:07:11.3775325Z           with mongodbatlas_search_index_api.test,
2026-02-24T01:07:11.3776273Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-02-24T01:07:11.3776942Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-02-24T01:07:11.3777278Z         
2026-02-24T01:07:11.3778191Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes
2026-02-24T01:07:11.3779070Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-02-24T01:07:11.3779735Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-02-24T01:07:11.3780292Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-02-24T01:07:11.3780798Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (2.48s)
```

- 2026-02-25 PASS 18 minutes
- 2026-02-26 PASS 17 minutes
- 2026-02-27 PASS 15 minutes
- 2026-02-28 PASS 25 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 20 minutes
  - PASS 19 minutes
- 2026-03-03 PASS 15 minutes
- 2026-03-04 PASS 20 minutes
- 2026-03-05 PASS 10 minutes
- 2026-03-06 PASS 23 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-15 01:24](#error-2026-02-15t0124540000) |  | qa | 968.02s
[2026-02-17 16:03](#error-2026-02-17t1603210000) |  | qa | 901.01s
[2026-02-17 20:22](#error-2026-02-17t2022240000) |  | qa | 1050.01s
[2026-02-22 01:16](#error-2026-02-22t0116570000) |  | qa | 906.07s
[2026-03-01 01:27](#error-2026-03-01t0127320000) |  | qa | 777.06s
[2026-03-02 12:30](#error-2026-03-02t1230440000) |  | qa | 708.05s
[2026-03-03 10:09](#error-2026-03-03t1009390000) |  | qa | 567.08s

### Timeline
- 2026-02-04 PASS 16 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 16 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15

### Error 2026-02-15T01:24:54+00:00
```
2026-02-15T01:24:54.1944529Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-15T01:24:54.1953968Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-15T01:24:54.1997377Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-15T01:24:54.1998871Z     resource_test.go:73: Error running post-test destroy, there may be dangling resources: search index (6991166188f4b5b22540066f/test-acc-tf-c-2299255714505639175/699119bbcef188b1a572d9ff) still exists
2026-02-15T01:24:54.1999879Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (968.19s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 15 minutes

### Error 2026-02-17T16:03:21+00:00
```
2026-02-17T16:03:21.9173929Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-17T16:03:21.9181054Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-17T16:03:21.9228461Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-17T16:03:21.9229601Z     resource_test.go:73: Error running post-test destroy, there may be dangling resources: search index (6994881dc64c45bf0bbad77d/test-acc-tf-c-1519459127951114801/69948b7917482212e330f397) still exists
2026-02-17T16:03:21.9230573Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (901.08s)
```

  - FAIL 17 minutes

### Error 2026-02-17T20:22:24+00:00
```
2026-02-17T20:22:24.3899134Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-17T20:22:24.3912448Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-17T20:22:24.3975933Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-17T20:22:24.3978078Z     resource_test.go:73: Error running post-test destroy, there may be dangling resources: search index (6994c5a5e3d2a8bb0299cdd0/test-acc-tf-c-3721231508258722541/6994c872e3d2a8bb029a18cb) still exists
2026-02-17T20:22:24.3980182Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (1050.12s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T01:16:57+00:00
```
2026-02-22T01:16:57.8705616Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-22T01:16:57.8714599Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-22T01:16:57.8755889Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-22T01:16:57.8757084Z     resource_test.go:73: Error running post-test destroy, there may be dangling resources: search index (699a505cc26caab7eb26324b/test-acc-tf-c-8475155293841306936/699a53fcc26caab7eb26b748) still exists
2026-02-22T01:16:57.8758133Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (906.65s)
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
2026-03-01T01:27:32.2237735Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-03-01T01:27:32.2248679Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-03-01T01:27:32.2296146Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-03-01T01:27:32.2297332Z     resource_test.go:74: Error running post-test destroy, there may be dangling resources: search index (69a38bb617b2c5dfb1d16cfb/test-acc-tf-c-1558300454499968194/69a38f9b17b2c5dfb1d21cd7) still exists
2026-03-01T01:27:32.2298341Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (777.62s)
```

- 2026-03-02

### Error 2026-03-02T12:30:44+00:00
```
2026-03-02T12:30:44.3935601Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-03-02T12:30:44.3942663Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-03-02T12:30:44.3983925Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-03-02T12:30:44.3985117Z     resource_test.go:74: Error running post-test destroy, there may be dangling resources: search index (69a57b310b79a8d7dc99dd5c/test-acc-tf-c-5453985973535775606/69a57e4330346acc7a7e38f6) still exists
2026-03-02T12:30:44.3986143Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (708.46s)
```

- 2026-03-03

### Error 2026-03-03T10:09:39+00:00
```
2026-03-03T10:09:39.4793241Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-03-03T10:09:39.4806484Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-03-03T10:09:39.4854429Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-03-03T10:09:39.4855604Z     resource_test.go:74: Error running post-test destroy, there may be dangling resources: search index (69a6aa6f61f800e9358a4c4b/test-acc-tf-c-3428198865123856829/69a6adc861f800e9358b53bc) still exists
2026-03-03T10:09:39.4856618Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (567.82s)
```

- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
