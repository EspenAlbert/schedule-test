# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceBool Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 8)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 01:07](#error-2026-02-24t0107110000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes | dev | flaky_500 | 3.05s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 18 minutes
- 2026-02-06 PASS 25 minutes
- 2026-02-07 PASS 26 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 27 minutes
- 2026-02-10 PASS 32 minutes
- 2026-02-11 PASS 22 minutes
- 2026-02-12 PASS 23 minutes
- 2026-02-13 PASS 23 minutes
- 2026-02-14 PASS 29 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 26 minutes
- 2026-02-17 PASS 21 minutes
- 2026-02-18 PASS 25 minutes
- 2026-02-19 PASS 15 minutes
- 2026-02-20 PASS 19 minutes
- 2026-02-21 PASS 20 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 27 minutes
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3753940Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-02-24T01:07:11.3759803Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-02-24T01:07:11.3773069Z   
2026-02-24T01:07:11.3863902Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-02-24T01:07:11.3864555Z     resource_test.go:161: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:07:11.3865005Z         
2026-02-24T01:07:11.3865344Z         Error: Error calling API in Create
2026-02-24T01:07:11.3865647Z         
2026-02-24T01:07:11.3866216Z           with mongodbatlas_search_index_api.test,
2026-02-24T01:07:11.3867007Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-02-24T01:07:11.3867753Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-02-24T01:07:11.3868090Z         
2026-02-24T01:07:11.3868990Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes
2026-02-24T01:07:11.3870068Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-02-24T01:07:11.3870826Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-02-24T01:07:11.3871412Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-02-24T01:07:11.3886372Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/cac00275-aef5-443b-ac5b-c1f29c969ce5/terraform test_working_directory=/tmp/plugintest309385903
2026-02-24T01:07:11.3895194Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (3.52s)
```

- 2026-02-25 PASS 27 minutes
- 2026-02-26 PASS 22 minutes
- 2026-02-27 PASS 15 minutes
- 2026-02-28 PASS 27 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 17 minutes
  - PASS 20 minutes
- 2026-03-03 PASS 19 minutes
- 2026-03-04 PASS 24 minutes
- 2026-03-05 PASS 16 minutes
- 2026-03-06 PASS 22 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-15 01:24](#error-2026-02-15t0124540000) |  | qa | 937.10s
[2026-02-17 16:03](#error-2026-02-17t1603210000) |  | qa | 899.07s
[2026-02-17 20:22](#error-2026-02-17t2022240000) |  | qa | 1291.02s
[2026-02-22 01:16](#error-2026-02-22t0116570000) |  | qa | 887.04s
[2026-03-01 01:27](#error-2026-03-01t0127320000) |  | qa | 735.10s
[2026-03-02 12:30](#error-2026-03-02t1230440000) |  | qa | 847.08s
[2026-03-03 10:09](#error-2026-03-03t1009390000) |  | qa | 778.01s

### Timeline
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 14 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15

### Error 2026-02-15T01:24:54+00:00
```
2026-02-15T01:24:54.1948313Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-02-15T01:24:54.1952893Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-02-15T01:24:54.1991491Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-02-15T01:24:54.1992577Z     resource_test.go:161: Error running post-test destroy, there may be dangling resources: search index (6991166188f4b5b22540066f/test-acc-tf-c-2299255714505639175/699119bbcef188b1a572d9f4) still exists
2026-02-15T01:24:54.1993484Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (937.97s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 14 minutes

### Error 2026-02-17T16:03:21+00:00
```
2026-02-17T16:03:21.9177374Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-02-17T16:03:21.9182112Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-02-17T16:03:21.9215774Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-02-17T16:03:21.9216824Z     resource_test.go:161: Error running post-test destroy, there may be dangling resources: search index (6994881dc64c45bf0bbad77d/test-acc-tf-c-1519459127951114801/69948b79c64c45bf0bbb4bbb) still exists
2026-02-17T16:03:21.9218769Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (899.74s)
```

  - FAIL 21 minutes

### Error 2026-02-17T20:22:24+00:00
```
2026-02-17T20:22:24.3905340Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-02-17T20:22:24.3914030Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-02-17T20:22:24.4007821Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-02-17T20:22:24.4009921Z     resource_test.go:161: Error running post-test destroy, there may be dangling resources: search index (6994c5a5e3d2a8bb0299cdd0/test-acc-tf-c-3721231508258722541/6994c872e3d2a8bb029a18ca) still exists
2026-02-17T20:22:24.4011566Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (1291.19s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T01:16:57+00:00
```
2026-02-22T01:16:57.8709396Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-02-22T01:16:57.8716042Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-02-22T01:16:57.8749558Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-02-22T01:16:57.8750663Z     resource_test.go:161: Error running post-test destroy, there may be dangling resources: search index (699a505cc26caab7eb26324b/test-acc-tf-c-8475155293841306936/699a53fcc26caab7eb26b741) still exists
2026-02-22T01:16:57.8751611Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (887.38s)
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
2026-03-01T01:27:32.2242418Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-03-01T01:27:32.2247056Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-03-01T01:27:32.2283995Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-03-01T01:27:32.2285061Z     resource_test.go:162: Error running post-test destroy, there may be dangling resources: search index (69a38bb617b2c5dfb1d16cfb/test-acc-tf-c-1558300454499968194/69a38f9b17b2c5dfb1d21cd2) still exists
2026-03-01T01:27:32.2285962Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (735.98s)
```

- 2026-03-02

### Error 2026-03-02T12:30:44+00:00
```
2026-03-02T12:30:44.3939113Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-03-02T12:30:44.3944845Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-03-02T12:30:44.3989910Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-03-02T12:30:44.3991548Z     resource_test.go:162: Error running post-test destroy, there may be dangling resources: search index (69a57b310b79a8d7dc99dd5c/test-acc-tf-c-5453985973535775606/69a57e4330346acc7a7e38f2) still exists
2026-03-02T12:30:44.3992610Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (847.84s)
```

- 2026-03-03

### Error 2026-03-03T10:09:39+00:00
```
2026-03-03T10:09:39.4800452Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-03-03T10:09:39.4805405Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-03-03T10:09:39.4860651Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-03-03T10:09:39.4861747Z     resource_test.go:162: Error running post-test destroy, there may be dangling resources: search index (69a6aa6f61f800e9358a4c4b/test-acc-tf-c-3428198865123856829/69a6adc9aa1a482df74efbe0) still exists
2026-03-03T10:09:39.4862694Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (778.08s)
```

- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
