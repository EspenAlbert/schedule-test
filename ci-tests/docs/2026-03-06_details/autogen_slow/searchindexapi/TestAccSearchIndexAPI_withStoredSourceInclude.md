# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceInclude Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 8)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-24 01:07](#error-2026-02-24t0107110000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes | dev | 5.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 7 minutes
- 2026-02-06 PASS 7 minutes
- 2026-02-07 PASS 4 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 17 minutes
- 2026-02-10 PASS 5 minutes
- 2026-02-11 PASS 11 minutes
- 2026-02-12 PASS 11 minutes
- 2026-02-13 PASS 18 minutes
- 2026-02-14 PASS 19 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 10 minutes
- 2026-02-17 PASS 8 minutes
- 2026-02-18 PASS 9 minutes
- 2026-02-19 PASS 2 minutes
- 2026-02-20 PASS 14 minutes
- 2026-02-21 PASS 14 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 9 minutes
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3754832Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-24T01:07:11.3758944Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-24T01:07:11.3909786Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-24T01:07:11.3910320Z     resource_test.go:183: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:07:11.3910704Z         
2026-02-24T01:07:11.3911129Z         Error: Error calling API in Create
2026-02-24T01:07:11.3911425Z         
2026-02-24T01:07:11.3911761Z           with mongodbatlas_search_index_api.test,
2026-02-24T01:07:11.3912548Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-02-24T01:07:11.3913190Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-02-24T01:07:11.3913524Z         
2026-02-24T01:07:11.3914313Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes
2026-02-24T01:07:11.3915205Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-02-24T01:07:11.3916071Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-02-24T01:07:11.3916632Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-02-24T01:07:11.3917060Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (5.74s)
```

- 2026-02-25 PASS 20 minutes
- 2026-02-26 PASS 12 minutes
- 2026-02-27 PASS a minute
- 2026-02-28 PASS 21 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 10 minutes
  - PASS 16 minutes
- 2026-03-03 PASS 4 minutes
- 2026-03-04 PASS 6 minutes
- 2026-03-05 PASS 9 minutes
- 2026-03-06 PASS 3 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-15 01:24](#error-2026-02-15t0124540000) |  | qa | 676.06s
[2026-02-17 16:03](#error-2026-02-17t1603210000) |  | qa | 225.07s
[2026-02-17 20:22](#error-2026-02-17t2022240000) |  | qa | 506.06s
[2026-02-22 01:16](#error-2026-02-22t0116570000) |  | qa | 665.03s
[2026-03-01 01:27](#error-2026-03-01t0127320000) |  | qa | 263.09s
[2026-03-02 12:30](#error-2026-03-02t1230440000) |  | qa | 426.00s
[2026-03-03 10:09](#error-2026-03-03t1009390000) |  | qa | 265.01s

### Timeline
- 2026-02-04 PASS 11 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 3 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15

### Error 2026-02-15T01:24:54+00:00
```
2026-02-15T01:24:54.1949091Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-15T01:24:54.1951447Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-15T01:24:54.1985528Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-15T01:24:54.1986626Z     resource_test.go:183: Error running post-test destroy, there may be dangling resources: search index (6991166188f4b5b22540066f/test-acc-tf-c-2299255714505639175/699119bbcef188b1a572d9e7) still exists
2026-02-15T01:24:54.1987571Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (676.63s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 3 minutes

### Error 2026-02-17T16:03:21+00:00
```
2026-02-17T16:03:21.9178263Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-17T16:03:21.9182920Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-17T16:03:21.9192628Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-17T16:03:21.9193719Z     resource_test.go:183: Error running post-test destroy, there may be dangling resources: search index (6994881dc64c45bf0bbad77d/test-acc-tf-c-1519459127951114801/69948b7917482212e330f396) still exists
2026-02-17T16:03:21.9194633Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (225.68s)
```

  - FAIL 8 minutes

### Error 2026-02-17T20:22:24+00:00
```
2026-02-17T20:22:24.3906654Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-17T20:22:24.3911634Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-17T20:22:24.3922224Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-17T20:22:24.3924134Z     resource_test.go:183: Error running post-test destroy, there may be dangling resources: search index (6994c5a5e3d2a8bb0299cdd0/test-acc-tf-c-3721231508258722541/6994c872e3d2a8bb029a18cc) still exists
2026-02-17T20:22:24.3925883Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (506.59s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T01:16:57+00:00
```
2026-02-22T01:16:57.8710414Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-22T01:16:57.8712925Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-22T01:16:57.8737474Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-22T01:16:57.8738624Z     resource_test.go:183: Error running post-test destroy, there may be dangling resources: search index (699a505cc26caab7eb26324b/test-acc-tf-c-8475155293841306936/699a53fc62519b891468fea8) still exists
2026-02-22T01:16:57.8739581Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (665.34s)
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
2026-03-01T01:27:32.2243304Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-03-01T01:27:32.2246046Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-03-01T01:27:32.2259854Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-03-01T01:27:32.2261105Z     resource_test.go:184: Error running post-test destroy, there may be dangling resources: search index (69a38bb617b2c5dfb1d16cfb/test-acc-tf-c-1558300454499968194/69a38f9b75e18691c08c45a0) still exists
2026-03-01T01:27:32.2262332Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (263.89s)
```

- 2026-03-02

### Error 2026-03-02T12:30:44+00:00
```
2026-03-02T12:30:44.3939863Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-03-02T12:30:44.3943616Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-03-02T12:30:44.3967562Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-03-02T12:30:44.3971339Z     resource_test.go:184: Error running post-test destroy, there may be dangling resources: search index (69a57b310b79a8d7dc99dd5c/test-acc-tf-c-5453985973535775606/69a57e430b79a8d7dc9a1070) still exists
2026-03-02T12:30:44.3972955Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (426.01s)
```

- 2026-03-03

### Error 2026-03-03T10:09:39+00:00
```
2026-03-03T10:09:39.4801395Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-03-03T10:09:39.4807864Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-03-03T10:09:39.4825789Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-03-03T10:09:39.4831613Z     resource_test.go:184: Error running post-test destroy, there may be dangling resources: search index (69a6aa6f61f800e9358a4c4b/test-acc-tf-c-3428198865123856829/69a6adc9aa1a482df74efbe1) still exists
2026-03-03T10:09:39.4835130Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (265.10s)
```

- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
