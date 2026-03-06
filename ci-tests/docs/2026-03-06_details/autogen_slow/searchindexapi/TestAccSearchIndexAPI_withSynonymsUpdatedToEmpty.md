# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 8)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 01:07](#error-2026-02-24t0107110000) |  | dev | flaky_500 | 3.02s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 4 minutes
- 2026-02-06 PASS 11 minutes
- 2026-02-07 PASS 10 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 6 minutes
- 2026-02-10 PASS 19 minutes
- 2026-02-11 PASS 7 minutes
- 2026-02-12 PASS 13 minutes
- 2026-02-13 PASS 10 minutes
- 2026-02-14 PASS 3 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 14 minutes
- 2026-02-17 PASS 5 minutes
- 2026-02-18 PASS 15 minutes
- 2026-02-19 PASS 12 minutes
- 2026-02-20 PASS 11 minutes
- 2026-02-21 PASS 11 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 6 minutes
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3749479Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-24T01:07:11.3756755Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-24T01:07:11.3805084Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-24T01:07:11.3805633Z     resource_test.go:53: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:07:11.3806201Z         
2026-02-24T01:07:11.3806498Z         Error: Error calling API in Create
2026-02-24T01:07:11.3806781Z         
2026-02-24T01:07:11.3807114Z           with mongodbatlas_search_index_api.test,
2026-02-24T01:07:11.3807787Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-02-24T01:07:11.3808420Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-02-24T01:07:11.3808755Z         
2026-02-24T01:07:11.3809329Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:07:11.3809755Z         type
2026-02-24T01:07:11.3819919Z    test_name=TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping test_terraform_path=/home/runner/work/_temp/cac00275-aef5-443b-ac5b-c1f29c969ce5/terraform
2026-02-24T01:07:11.3826852Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (3.17s)
```

- 2026-02-25 PASS 4 minutes
- 2026-02-26 PASS 2 minutes
- 2026-02-27 PASS 8 minutes
- 2026-02-28 PASS 22 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 3 minutes
  - PASS 4 minutes
- 2026-03-03 PASS 4 minutes
- 2026-03-04 PASS 9 minutes
- 2026-03-05 PASS 5 minutes
- 2026-03-06 PASS 10 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-15 01:24](#error-2026-02-15t0124540000) |  | qa | 505.03s
[2026-02-17 16:03](#error-2026-02-17t1603210000) |  | qa | 435.07s
[2026-02-17 20:22](#error-2026-02-17t2022240000) |  | qa | 828.00s
[2026-02-22 01:16](#error-2026-02-22t0116570000) |  | qa | 706.07s
[2026-03-01 01:27](#error-2026-03-01t0127320000) |  | qa | 425.01s
[2026-03-02 12:30](#error-2026-03-02t1230440000) |  | qa | 264.05s
[2026-03-03 10:09](#error-2026-03-03t1009390000) |  | qa | 556.02s

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
2026-02-15T01:24:54.1943415Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-15T01:24:54.1955572Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-15T01:24:54.1961480Z     resource_test.go:53: Error running post-test destroy, there may be dangling resources: search index (6991166188f4b5b22540066f/test-acc-tf-c-2299255714505639175/699119bbcef188b1a572d9fe) still exists
2026-02-15T01:24:54.1962765Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (505.34s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 7 minutes

### Error 2026-02-17T16:03:21+00:00
```
2026-02-17T16:03:21.9173022Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-17T16:03:21.9183309Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-17T16:03:21.9198541Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-17T16:03:21.9199646Z     resource_test.go:53: Error running post-test destroy, there may be dangling resources: search index (6994881dc64c45bf0bbad77d/test-acc-tf-c-1519459127951114801/69948b79c64c45bf0bbb4bc7) still exists
2026-02-17T16:03:21.9200576Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (435.74s)
```

  - FAIL 13 minutes

### Error 2026-02-17T20:22:24+00:00
```
2026-02-17T20:22:24.3897549Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-17T20:22:24.3914719Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-17T20:22:24.3964656Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-17T20:22:24.3966879Z     resource_test.go:53: Error running post-test destroy, there may be dangling resources: search index (6994c5a5e3d2a8bb0299cdd0/test-acc-tf-c-3721231508258722541/6994c87298b8813de67e5cb7) still exists
2026-02-17T20:22:24.3968565Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (828.05s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T01:16:57+00:00
```
2026-02-22T01:16:57.8704637Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-22T01:16:57.8715125Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-22T01:16:57.8743363Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-22T01:16:57.8744723Z     resource_test.go:53: Error running post-test destroy, there may be dangling resources: search index (699a505cc26caab7eb26324b/test-acc-tf-c-8475155293841306936/699a53fc62519b891468fea6) still exists
2026-02-22T01:16:57.8745697Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (706.73s)
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
2026-03-01T01:27:32.2236689Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-03-01T01:27:32.2249295Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-03-01T01:27:32.2272628Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-03-01T01:27:32.2273874Z     resource_test.go:54: Error running post-test destroy, there may be dangling resources: search index (69a38bb617b2c5dfb1d16cfb/test-acc-tf-c-1558300454499968194/69a38f9b75e18691c08c45b5) still exists
2026-03-01T01:27:32.2274814Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (425.11s)
```

- 2026-03-02

### Error 2026-03-02T12:30:44+00:00
```
2026-03-02T12:30:44.3934499Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-03-02T12:30:44.3944015Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-03-02T12:30:44.3949140Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-03-02T12:30:44.3950250Z     resource_test.go:54: Error running post-test destroy, there may be dangling resources: search index (69a57b310b79a8d7dc99dd5c/test-acc-tf-c-5453985973535775606/69a57e430b79a8d7dc9a107c) still exists
2026-03-02T12:30:44.3951550Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (264.52s)
```

- 2026-03-03

### Error 2026-03-03T10:09:39+00:00
```
2026-03-03T10:09:39.4792173Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-03-03T10:09:39.4807305Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-03-03T10:09:39.4847565Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-03-03T10:09:39.4848969Z     resource_test.go:54: Error running post-test destroy, there may be dangling resources: search index (69a6aa6f61f800e9358a4c4b/test-acc-tf-c-3428198865123856829/69a6adc861f800e9358b53b4) still exists
2026-03-03T10:09:39.4850072Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (556.24s)
```

- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
