# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 8)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 01:07](#error-2026-02-24t0107110000) |  | dev | flaky_500 | 3.02s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 18 minutes
- 2026-02-06 PASS 25 minutes
- 2026-02-07 PASS 22 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 27 minutes
- 2026-02-10 PASS 27 minutes
- 2026-02-11 PASS 22 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13 PASS 29 minutes
- 2026-02-14 PASS 26 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 17 minutes
- 2026-02-17 PASS 17 minutes
- 2026-02-18 PASS 21 minutes
- 2026-02-19 PASS 20 minutes
- 2026-02-20 PASS 23 minutes
- 2026-02-21 PASS 23 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 23 minutes
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3751510Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-24T01:07:11.3757519Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-24T01:07:11.3820928Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-24T01:07:11.3821492Z     resource_test.go:95: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:07:11.3821978Z         
2026-02-24T01:07:11.3822273Z         Error: Error calling API in Create
2026-02-24T01:07:11.3822653Z         
2026-02-24T01:07:11.3822993Z           with mongodbatlas_search_index_api.test,
2026-02-24T01:07:11.3823770Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-02-24T01:07:11.3824517Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-02-24T01:07:11.3824932Z         
2026-02-24T01:07:11.3825437Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:07:11.3826128Z         type
2026-02-24T01:07:11.3827355Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (3.17s)
```

- 2026-02-25 PASS 26 minutes
- 2026-02-26 PASS 16 minutes
- 2026-02-27 PASS 15 minutes
- 2026-02-28 PASS 28 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 23 minutes
  - PASS 23 minutes
- 2026-03-03 PASS 21 minutes
- 2026-03-04 PASS 20 minutes
- 2026-03-05 PASS 18 minutes
- 2026-03-06 PASS 22 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-15 01:24](#error-2026-02-15t0124540000) |  | qa | 1029.07s
[2026-02-17 16:03](#error-2026-02-17t1603210000) |  | qa | 900.03s
[2026-02-17 20:22](#error-2026-02-17t2022240000) |  | qa | 1060.00s
[2026-02-22 01:16](#error-2026-02-22t0116570000) |  | qa | 977.01s
[2026-03-01 01:27](#error-2026-03-01t0127320000) |  | qa | 776.06s
[2026-03-02 12:30](#error-2026-03-02t1230440000) |  | qa | 968.04s
[2026-03-03 10:09](#error-2026-03-03t1009390000) |  | qa | 778.03s

### Timeline
- 2026-02-04 PASS 20 minutes
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
2026-02-15T01:24:54.1945657Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-15T01:24:54.1951882Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-15T01:24:54.2003695Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-15T01:24:54.2004803Z     resource_test.go:95: Error running post-test destroy, there may be dangling resources: search index (6991166188f4b5b22540066f/test-acc-tf-c-2299255714505639175/699119bb88f4b5b22540792b) still exists
2026-02-15T01:24:54.2005746Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (1029.65s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 15 minutes

### Error 2026-02-17T16:03:21+00:00
```
2026-02-17T16:03:21.9174978Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-17T16:03:21.9180559Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-17T16:03:21.9222475Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-17T16:03:21.9223549Z     resource_test.go:95: Error running post-test destroy, there may be dangling resources: search index (6994881dc64c45bf0bbad77d/test-acc-tf-c-1519459127951114801/69948b7917482212e330f39d) still exists
2026-02-17T16:03:21.9224479Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (900.34s)
```

  - FAIL 17 minutes

### Error 2026-02-17T20:22:24+00:00
```
2026-02-17T20:22:24.3901208Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-17T20:22:24.3910929Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-17T20:22:24.3986989Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-17T20:22:24.3989005Z     resource_test.go:95: Error running post-test destroy, there may be dangling resources: search index (6994c5a5e3d2a8bb0299cdd0/test-acc-tf-c-3721231508258722541/6994c872e3d2a8bb029a18cf) still exists
2026-02-17T20:22:24.3990912Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (1060.00s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T01:16:57+00:00
```
2026-02-22T01:16:57.8706774Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-22T01:16:57.8713375Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-22T01:16:57.8762038Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-22T01:16:57.8763171Z     resource_test.go:95: Error running post-test destroy, there may be dangling resources: search index (699a505cc26caab7eb26324b/test-acc-tf-c-8475155293841306936/699a53fcc26caab7eb26b749) still exists
2026-02-22T01:16:57.8764493Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (977.06s)
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
2026-03-01T01:27:32.2239113Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-03-01T01:27:32.2247594Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-03-01T01:27:32.2289814Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-03-01T01:27:32.2290919Z     resource_test.go:96: Error running post-test destroy, there may be dangling resources: search index (69a38bb617b2c5dfb1d16cfb/test-acc-tf-c-1558300454499968194/69a38f9b17b2c5dfb1d21cd8) still exists
2026-03-01T01:27:32.2292010Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (776.62s)
```

- 2026-03-02

### Error 2026-03-02T12:30:44+00:00
```
2026-03-02T12:30:44.3936697Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-03-02T12:30:44.3944440Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-03-02T12:30:44.3996363Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-03-02T12:30:44.3997501Z     resource_test.go:96: Error running post-test destroy, there may be dangling resources: search index (69a57b310b79a8d7dc99dd5c/test-acc-tf-c-5453985973535775606/69a57e430b79a8d7dc9a1073) still exists
2026-03-02T12:30:44.3998472Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (968.38s)
```

- 2026-03-03

### Error 2026-03-03T10:09:39+00:00
```
2026-03-03T10:09:39.4797092Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-03-03T10:09:39.4804232Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-03-03T10:09:39.4866608Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-03-03T10:09:39.4867940Z     resource_test.go:96: Error running post-test destroy, there may be dangling resources: search index (69a6aa6f61f800e9358a4c4b/test-acc-tf-c-3428198865123856829/69a6adc861f800e9358b53b5) still exists
2026-03-03T10:09:39.4868903Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (778.29s)
```

- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
